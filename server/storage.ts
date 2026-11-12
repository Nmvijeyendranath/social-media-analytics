// Preconfigured storage helpers for Manus WebDev templates
// Uploads via Forge Server presigned URL to S3 (PUT direct).
// Downloads return /manus-storage/{key} paths served via 307 redirect.
// Falls back to local filesystem storage when Forge credentials are not set.

import fs from "fs";
import path from "path";
import { ENV } from "./_core/env";

// ─── Local fallback storage ──────────────────────────────────────────────────
const LOCAL_STORAGE_DIR = path.resolve(process.cwd(), "local-uploads");

function ensureLocalDir() {
  if (!fs.existsSync(LOCAL_STORAGE_DIR)) {
    fs.mkdirSync(LOCAL_STORAGE_DIR, { recursive: true });
  }
}

function keyToLocalPath(relKey: string): string {
  // Flatten slashes so we don't need to create sub-directories
  const flat = relKey.replace(/\//g, "__");
  return path.join(LOCAL_STORAGE_DIR, flat);
}

function localUrl(relKey: string): string {
  const flat = relKey.replace(/\//g, "__");
  return `/local-storage/${flat}`;
}

// ─── Forge helpers ────────────────────────────────────────────────────────────
function getForgeConfig(): { forgeUrl: string; forgeKey: string } | null {
  const forgeUrl = ENV.forgeApiUrl;
  const forgeKey = ENV.forgeApiKey;
  if (!forgeUrl || !forgeKey) return null;
  return { forgeUrl: forgeUrl.replace(/\/+$/, ""), forgeKey };
}

function normalizeKey(relKey: string): string {
  return relKey.replace(/^\/+/, "");
}

function appendHashSuffix(relKey: string): string {
  const hash = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
  const lastDot = relKey.lastIndexOf(".");
  if (lastDot === -1) return `${relKey}_${hash}`;
  return `${relKey.slice(0, lastDot)}_${hash}${relKey.slice(lastDot)}`;
}

// ─── Public API ───────────────────────────────────────────────────────────────
export async function storagePut(
  relKey: string,
  data: Buffer | Uint8Array | string,
  contentType = "application/octet-stream",
): Promise<{ key: string; url: string }> {
  const forge = getForgeConfig();

  if (!forge) {
    // ── Local fallback ──────────────────────────────────────────────────────
    ensureLocalDir();
    const key = appendHashSuffix(normalizeKey(relKey));
    const filePath = keyToLocalPath(key);
    const buf = typeof data === "string" ? Buffer.from(data, "utf-8") : Buffer.from(data as any);
    fs.writeFileSync(filePath, buf);
    return { key, url: localUrl(key) };
  }

  // ── Forge / S3 path ───────────────────────────────────────────────────────
  const { forgeUrl, forgeKey } = forge;
  const key = appendHashSuffix(normalizeKey(relKey));

  // 1. Get presigned PUT URL from Forge
  const presignUrl = new URL("v1/storage/presign/put", forgeUrl + "/");
  presignUrl.searchParams.set("path", key);

  const presignResp = await fetch(presignUrl, {
    headers: { Authorization: `Bearer ${forgeKey}` },
  });

  if (!presignResp.ok) {
    const msg = await presignResp.text().catch(() => presignResp.statusText);
    throw new Error(`Storage presign failed (${presignResp.status}): ${msg}`);
  }

  const { url: s3Url } = (await presignResp.json()) as { url: string };
  if (!s3Url) throw new Error("Forge returned empty presign URL");

  // 2. PUT file directly to S3
  const blob =
    typeof data === "string"
      ? new Blob([data], { type: contentType })
      : new Blob([data as any], { type: contentType });

  const uploadResp = await fetch(s3Url, {
    method: "PUT",
    headers: { "Content-Type": contentType },
    body: blob,
  });

  if (!uploadResp.ok) {
    throw new Error(`Storage upload to S3 failed (${uploadResp.status})`);
  }

  return { key, url: `/manus-storage/${key}` };
}

export async function storageGet(relKey: string): Promise<{ key: string; url: string }> {
  const key = normalizeKey(relKey);
  const forge = getForgeConfig();
  const url = forge ? `/manus-storage/${key}` : localUrl(key);
  return { key, url };
}

export async function storageGetSignedUrl(relKey: string): Promise<string> {
  const forge = getForgeConfig();

  if (!forge) {
    // Return a local URL — works for serving from Express static middleware
    return localUrl(normalizeKey(relKey));
  }

  const { forgeUrl, forgeKey } = forge;
  const key = normalizeKey(relKey);

  const getUrl = new URL("v1/storage/presign/get", forgeUrl + "/");
  getUrl.searchParams.set("path", key);

  const resp = await fetch(getUrl, {
    headers: { Authorization: `Bearer ${forgeKey}` },
  });

  if (!resp.ok) {
    const msg = await resp.text().catch(() => resp.statusText);
    throw new Error(`Storage signed URL failed (${resp.status}): ${msg}`);
  }

  const { url } = (await resp.json()) as { url: string };
  return url;
}

/** Export the local dir and URL prefix so the Express server can mount a static route */
export const LOCAL_STORAGE_URL_PREFIX = "/local-storage";
export { LOCAL_STORAGE_DIR };
