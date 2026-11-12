/* Generated from the supplied SNA CSV bundle. Do not edit manually. */

export type DatasetNode = {
  user_id: string;
  community_label: string;
  joined: string;
};

export type DatasetEdge = {
  source: string;
  target: string;
  weight: number;
  interaction_type: string;
  timestamp: string;
};

export type DatasetBundle = {
  nodes: DatasetNode[];
  edges: DatasetEdge[];
};

export const datasetBundles: Record<string, DatasetBundle> = {
  "email_collaboration": {
    "nodes": [
      {
        "user_id": "user_000",
        "community_label": "segment_2",
        "joined": "2025-07-03"
      },
      {
        "user_id": "user_001",
        "community_label": "segment_2",
        "joined": "2025-07-04"
      },
      {
        "user_id": "user_002",
        "community_label": "segment_2",
        "joined": "2025-10-16"
      },
      {
        "user_id": "user_003",
        "community_label": "segment_0",
        "joined": "2025-12-30"
      },
      {
        "user_id": "user_004",
        "community_label": "segment_1",
        "joined": "2025-09-05"
      },
      {
        "user_id": "user_005",
        "community_label": "segment_0",
        "joined": "2025-06-11"
      },
      {
        "user_id": "user_006",
        "community_label": "segment_0",
        "joined": "2025-09-07"
      },
      {
        "user_id": "user_007",
        "community_label": "segment_1",
        "joined": "2025-09-18"
      },
      {
        "user_id": "user_008",
        "community_label": "segment_3",
        "joined": "2025-06-10"
      },
      {
        "user_id": "user_009",
        "community_label": "segment_3",
        "joined": "2025-10-27"
      },
      {
        "user_id": "user_010",
        "community_label": "segment_0",
        "joined": "2025-07-02"
      },
      {
        "user_id": "user_011",
        "community_label": "segment_0",
        "joined": "2025-10-11"
      },
      {
        "user_id": "user_012",
        "community_label": "segment_3",
        "joined": "2025-08-11"
      },
      {
        "user_id": "user_013",
        "community_label": "segment_3",
        "joined": "2026-01-20"
      },
      {
        "user_id": "user_014",
        "community_label": "segment_3",
        "joined": "2025-08-02"
      },
      {
        "user_id": "user_015",
        "community_label": "segment_2",
        "joined": "2025-12-18"
      },
      {
        "user_id": "user_016",
        "community_label": "segment_1",
        "joined": "2025-06-26"
      },
      {
        "user_id": "user_017",
        "community_label": "segment_2",
        "joined": "2025-10-22"
      },
      {
        "user_id": "user_018",
        "community_label": "segment_1",
        "joined": "2025-06-12"
      },
      {
        "user_id": "user_019",
        "community_label": "segment_2",
        "joined": "2026-01-11"
      },
      {
        "user_id": "user_020",
        "community_label": "segment_3",
        "joined": "2025-10-16"
      },
      {
        "user_id": "user_021",
        "community_label": "segment_0",
        "joined": "2025-09-25"
      },
      {
        "user_id": "user_022",
        "community_label": "segment_1",
        "joined": "2025-08-13"
      },
      {
        "user_id": "user_023",
        "community_label": "segment_2",
        "joined": "2025-08-06"
      },
      {
        "user_id": "user_024",
        "community_label": "segment_3",
        "joined": "2025-06-12"
      },
      {
        "user_id": "user_025",
        "community_label": "segment_0",
        "joined": "2025-08-08"
      },
      {
        "user_id": "user_026",
        "community_label": "segment_2",
        "joined": "2026-01-16"
      },
      {
        "user_id": "user_027",
        "community_label": "segment_1",
        "joined": "2025-06-09"
      },
      {
        "user_id": "user_028",
        "community_label": "segment_3",
        "joined": "2025-07-22"
      },
      {
        "user_id": "user_029",
        "community_label": "segment_1",
        "joined": "2025-07-27"
      },
      {
        "user_id": "user_030",
        "community_label": "segment_1",
        "joined": "2025-06-22"
      },
      {
        "user_id": "user_031",
        "community_label": "segment_2",
        "joined": "2025-06-07"
      },
      {
        "user_id": "user_032",
        "community_label": "segment_0",
        "joined": "2025-08-15"
      },
      {
        "user_id": "user_033",
        "community_label": "segment_3",
        "joined": "2025-12-23"
      },
      {
        "user_id": "user_034",
        "community_label": "segment_0",
        "joined": "2025-06-13"
      },
      {
        "user_id": "user_035",
        "community_label": "segment_1",
        "joined": "2026-01-16"
      },
      {
        "user_id": "user_036",
        "community_label": "segment_3",
        "joined": "2025-06-15"
      },
      {
        "user_id": "user_037",
        "community_label": "segment_2",
        "joined": "2025-12-30"
      },
      {
        "user_id": "user_038",
        "community_label": "segment_0",
        "joined": "2025-10-13"
      },
      {
        "user_id": "user_039",
        "community_label": "segment_1",
        "joined": "2025-10-14"
      }
    ],
    "edges": [
      {
        "source": "user_011",
        "target": "user_006",
        "weight": 2,
        "interaction_type": "email",
        "timestamp": "2026-01-01 03:00"
      },
      {
        "source": "user_016",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-01 05:00"
      },
      {
        "source": "user_006",
        "target": "user_025",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-01 05:00"
      },
      {
        "source": "user_003",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-01 10:00"
      },
      {
        "source": "user_019",
        "target": "user_015",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-01 12:00"
      },
      {
        "source": "user_008",
        "target": "user_033",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-01 13:00"
      },
      {
        "source": "user_027",
        "target": "user_021",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-01 20:00"
      },
      {
        "source": "user_003",
        "target": "user_021",
        "weight": 10,
        "interaction_type": "email",
        "timestamp": "2026-01-01 22:00"
      },
      {
        "source": "user_022",
        "target": "user_016",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-01 22:00"
      },
      {
        "source": "user_035",
        "target": "user_022",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-02 12:00"
      },
      {
        "source": "user_000",
        "target": "user_015",
        "weight": 2,
        "interaction_type": "cc",
        "timestamp": "2026-01-02 23:00"
      },
      {
        "source": "user_003",
        "target": "user_028",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-03 01:00"
      },
      {
        "source": "user_015",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-03 04:00"
      },
      {
        "source": "user_003",
        "target": "user_035",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-03 11:00"
      },
      {
        "source": "user_004",
        "target": "user_039",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-03 13:00"
      },
      {
        "source": "user_033",
        "target": "user_024",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-03 17:00"
      },
      {
        "source": "user_021",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-04 02:00"
      },
      {
        "source": "user_020",
        "target": "user_024",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-04 06:00"
      },
      {
        "source": "user_018",
        "target": "user_035",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-04 08:00"
      },
      {
        "source": "user_005",
        "target": "user_025",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-04 09:00"
      },
      {
        "source": "user_018",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-04 14:00"
      },
      {
        "source": "user_033",
        "target": "user_013",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-04 14:00"
      },
      {
        "source": "user_012",
        "target": "user_018",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-04 20:00"
      },
      {
        "source": "user_003",
        "target": "user_000",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-04 20:00"
      },
      {
        "source": "user_028",
        "target": "user_013",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-04 21:00"
      },
      {
        "source": "user_006",
        "target": "user_010",
        "weight": 2,
        "interaction_type": "email",
        "timestamp": "2026-01-04 23:00"
      },
      {
        "source": "user_024",
        "target": "user_033",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-05 18:00"
      },
      {
        "source": "user_003",
        "target": "user_009",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-06 02:00"
      },
      {
        "source": "user_022",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-06 15:00"
      },
      {
        "source": "user_008",
        "target": "user_014",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-06 21:00"
      },
      {
        "source": "user_011",
        "target": "user_038",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-07 09:00"
      },
      {
        "source": "user_002",
        "target": "user_037",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-07 09:00"
      },
      {
        "source": "user_025",
        "target": "user_021",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-07 09:00"
      },
      {
        "source": "user_035",
        "target": "user_030",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-08 04:00"
      },
      {
        "source": "user_019",
        "target": "user_037",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-08 09:00"
      },
      {
        "source": "user_035",
        "target": "user_039",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-08 22:00"
      },
      {
        "source": "user_003",
        "target": "user_034",
        "weight": 14,
        "interaction_type": "email",
        "timestamp": "2026-01-09 06:00"
      },
      {
        "source": "user_028",
        "target": "user_024",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-09 08:00"
      },
      {
        "source": "user_003",
        "target": "user_030",
        "weight": 2,
        "interaction_type": "email",
        "timestamp": "2026-01-09 09:00"
      },
      {
        "source": "user_000",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-09 13:00"
      },
      {
        "source": "user_028",
        "target": "user_039",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-09 21:00"
      },
      {
        "source": "user_003",
        "target": "user_016",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-10 01:00"
      },
      {
        "source": "user_033",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-10 06:00"
      },
      {
        "source": "user_019",
        "target": "user_003",
        "weight": 2,
        "interaction_type": "email",
        "timestamp": "2026-01-10 08:00"
      },
      {
        "source": "user_031",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-10 23:00"
      },
      {
        "source": "user_035",
        "target": "user_026",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-11 04:00"
      },
      {
        "source": "user_004",
        "target": "user_035",
        "weight": 2,
        "interaction_type": "email",
        "timestamp": "2026-01-11 08:00"
      },
      {
        "source": "user_006",
        "target": "user_034",
        "weight": 2,
        "interaction_type": "email",
        "timestamp": "2026-01-12 04:00"
      },
      {
        "source": "user_003",
        "target": "user_006",
        "weight": 16,
        "interaction_type": "cc",
        "timestamp": "2026-01-12 06:00"
      },
      {
        "source": "user_016",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-12 10:00"
      },
      {
        "source": "user_035",
        "target": "user_004",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-12 12:00"
      },
      {
        "source": "user_001",
        "target": "user_000",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-12 14:00"
      },
      {
        "source": "user_003",
        "target": "user_029",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-12 22:00"
      },
      {
        "source": "user_003",
        "target": "user_032",
        "weight": 15,
        "interaction_type": "cc",
        "timestamp": "2026-01-13 06:00"
      },
      {
        "source": "user_036",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-13 10:00"
      },
      {
        "source": "user_006",
        "target": "user_011",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-13 13:00"
      },
      {
        "source": "user_033",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-13 21:00"
      },
      {
        "source": "user_003",
        "target": "user_008",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-13 23:00"
      },
      {
        "source": "user_032",
        "target": "user_006",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-14 01:00"
      },
      {
        "source": "user_010",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-14 03:00"
      },
      {
        "source": "user_034",
        "target": "user_010",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-14 03:00"
      },
      {
        "source": "user_003",
        "target": "user_010",
        "weight": 17,
        "interaction_type": "reply",
        "timestamp": "2026-01-14 04:00"
      },
      {
        "source": "user_037",
        "target": "user_002",
        "weight": 2,
        "interaction_type": "cc",
        "timestamp": "2026-01-14 05:00"
      },
      {
        "source": "user_003",
        "target": "user_025",
        "weight": 16,
        "interaction_type": "cc",
        "timestamp": "2026-01-14 07:00"
      },
      {
        "source": "user_024",
        "target": "user_012",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-14 07:00"
      },
      {
        "source": "user_035",
        "target": "user_003",
        "weight": 3,
        "interaction_type": "cc",
        "timestamp": "2026-01-14 13:00"
      },
      {
        "source": "user_011",
        "target": "user_003",
        "weight": 2,
        "interaction_type": "email",
        "timestamp": "2026-01-14 13:00"
      },
      {
        "source": "user_026",
        "target": "user_023",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-14 13:00"
      },
      {
        "source": "user_013",
        "target": "user_024",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-15 01:00"
      },
      {
        "source": "user_038",
        "target": "user_006",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-15 02:00"
      },
      {
        "source": "user_003",
        "target": "user_020",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-15 02:00"
      },
      {
        "source": "user_004",
        "target": "user_016",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-15 03:00"
      },
      {
        "source": "user_035",
        "target": "user_016",
        "weight": 3,
        "interaction_type": "email",
        "timestamp": "2026-01-15 03:00"
      },
      {
        "source": "user_006",
        "target": "user_005",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-15 04:00"
      },
      {
        "source": "user_023",
        "target": "user_001",
        "weight": 2,
        "interaction_type": "cc",
        "timestamp": "2026-01-15 04:00"
      },
      {
        "source": "user_020",
        "target": "user_008",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-15 05:00"
      },
      {
        "source": "user_003",
        "target": "user_024",
        "weight": 4,
        "interaction_type": "cc",
        "timestamp": "2026-01-15 08:00"
      },
      {
        "source": "user_003",
        "target": "user_033",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-15 19:00"
      },
      {
        "source": "user_008",
        "target": "user_003",
        "weight": 2,
        "interaction_type": "cc",
        "timestamp": "2026-01-16 03:00"
      },
      {
        "source": "user_029",
        "target": "user_016",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-16 07:00"
      },
      {
        "source": "user_038",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-16 15:00"
      },
      {
        "source": "user_004",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-16 17:00"
      },
      {
        "source": "user_030",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-17 00:00"
      },
      {
        "source": "user_013",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-17 03:00"
      },
      {
        "source": "user_015",
        "target": "user_014",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-17 06:00"
      },
      {
        "source": "user_034",
        "target": "user_017",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-17 07:00"
      },
      {
        "source": "user_030",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-17 12:00"
      },
      {
        "source": "user_006",
        "target": "user_024",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-17 14:00"
      },
      {
        "source": "user_012",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-18 07:00"
      },
      {
        "source": "user_032",
        "target": "user_011",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-18 08:00"
      },
      {
        "source": "user_034",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-18 12:00"
      },
      {
        "source": "user_020",
        "target": "user_014",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-19 02:00"
      },
      {
        "source": "user_019",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-19 06:00"
      },
      {
        "source": "user_027",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-19 07:00"
      },
      {
        "source": "user_019",
        "target": "user_017",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-19 10:00"
      },
      {
        "source": "user_027",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-19 10:00"
      },
      {
        "source": "user_024",
        "target": "user_020",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-19 22:00"
      },
      {
        "source": "user_034",
        "target": "user_011",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-20 02:00"
      },
      {
        "source": "user_001",
        "target": "user_037",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-20 05:00"
      },
      {
        "source": "user_015",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-20 08:00"
      },
      {
        "source": "user_023",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-20 12:00"
      },
      {
        "source": "user_013",
        "target": "user_026",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-20 22:00"
      },
      {
        "source": "user_018",
        "target": "user_022",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-21 07:00"
      },
      {
        "source": "user_033",
        "target": "user_036",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-21 10:00"
      },
      {
        "source": "user_015",
        "target": "user_037",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-21 13:00"
      },
      {
        "source": "user_038",
        "target": "user_003",
        "weight": 2,
        "interaction_type": "email",
        "timestamp": "2026-01-22 05:00"
      },
      {
        "source": "user_005",
        "target": "user_010",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-22 06:00"
      },
      {
        "source": "user_019",
        "target": "user_000",
        "weight": 2,
        "interaction_type": "email",
        "timestamp": "2026-01-22 16:00"
      },
      {
        "source": "user_003",
        "target": "user_011",
        "weight": 17,
        "interaction_type": "cc",
        "timestamp": "2026-01-22 17:00"
      },
      {
        "source": "user_013",
        "target": "user_016",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-22 22:00"
      },
      {
        "source": "user_008",
        "target": "user_012",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-22 22:00"
      },
      {
        "source": "user_023",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-23 00:00"
      },
      {
        "source": "user_020",
        "target": "user_003",
        "weight": 2,
        "interaction_type": "email",
        "timestamp": "2026-01-23 11:00"
      },
      {
        "source": "user_003",
        "target": "user_005",
        "weight": 15,
        "interaction_type": "reply",
        "timestamp": "2026-01-23 12:00"
      },
      {
        "source": "user_030",
        "target": "user_029",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-23 13:00"
      },
      {
        "source": "user_016",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-23 18:00"
      },
      {
        "source": "user_008",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-24 03:00"
      },
      {
        "source": "user_003",
        "target": "user_017",
        "weight": 3,
        "interaction_type": "cc",
        "timestamp": "2026-01-24 07:00"
      },
      {
        "source": "user_003",
        "target": "user_019",
        "weight": 4,
        "interaction_type": "cc",
        "timestamp": "2026-01-24 16:00"
      },
      {
        "source": "user_019",
        "target": "user_002",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-24 17:00"
      },
      {
        "source": "user_035",
        "target": "user_007",
        "weight": 2,
        "interaction_type": "cc",
        "timestamp": "2026-01-24 20:00"
      },
      {
        "source": "user_003",
        "target": "user_038",
        "weight": 16,
        "interaction_type": "cc",
        "timestamp": "2026-01-25 01:00"
      },
      {
        "source": "user_020",
        "target": "user_033",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-25 03:00"
      },
      {
        "source": "user_032",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-25 05:00"
      },
      {
        "source": "user_011",
        "target": "user_010",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-25 19:00"
      },
      {
        "source": "user_031",
        "target": "user_000",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-26 02:00"
      },
      {
        "source": "user_038",
        "target": "user_032",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-26 02:00"
      },
      {
        "source": "user_003",
        "target": "user_004",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-26 06:00"
      },
      {
        "source": "user_006",
        "target": "user_003",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-26 14:00"
      },
      {
        "source": "user_030",
        "target": "user_015",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-26 15:00"
      },
      {
        "source": "user_018",
        "target": "user_013",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-27 10:00"
      },
      {
        "source": "user_037",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-27 10:00"
      },
      {
        "source": "user_027",
        "target": "user_029",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-27 21:00"
      },
      {
        "source": "user_014",
        "target": "user_020",
        "weight": 3,
        "interaction_type": "cc",
        "timestamp": "2026-01-28 05:00"
      },
      {
        "source": "user_023",
        "target": "user_015",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-28 15:00"
      },
      {
        "source": "user_015",
        "target": "user_023",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-28 15:00"
      },
      {
        "source": "user_011",
        "target": "user_025",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-29 02:00"
      },
      {
        "source": "user_004",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-29 10:00"
      },
      {
        "source": "user_015",
        "target": "user_000",
        "weight": 1,
        "interaction_type": "email",
        "timestamp": "2026-01-29 15:00"
      },
      {
        "source": "user_014",
        "target": "user_012",
        "weight": 1,
        "interaction_type": "cc",
        "timestamp": "2026-01-29 16:00"
      }
    ]
  },
  "marketing_referrals": {
    "nodes": [
      {
        "user_id": "user_000",
        "community_label": "segment_1",
        "joined": "2025-07-10"
      },
      {
        "user_id": "user_001",
        "community_label": "segment_4",
        "joined": "2026-01-05"
      },
      {
        "user_id": "user_002",
        "community_label": "segment_7",
        "joined": "2025-10-26"
      },
      {
        "user_id": "user_003",
        "community_label": "segment_0",
        "joined": "2025-07-14"
      },
      {
        "user_id": "user_004",
        "community_label": "segment_7",
        "joined": "2025-06-03"
      },
      {
        "user_id": "user_005",
        "community_label": "segment_5",
        "joined": "2025-09-06"
      },
      {
        "user_id": "user_006",
        "community_label": "segment_3",
        "joined": "2025-11-23"
      },
      {
        "user_id": "user_007",
        "community_label": "segment_3",
        "joined": "2026-01-13"
      },
      {
        "user_id": "user_008",
        "community_label": "segment_0",
        "joined": "2026-01-04"
      },
      {
        "user_id": "user_009",
        "community_label": "segment_4",
        "joined": "2025-11-05"
      },
      {
        "user_id": "user_010",
        "community_label": "segment_3",
        "joined": "2025-08-03"
      },
      {
        "user_id": "user_011",
        "community_label": "segment_5",
        "joined": "2025-11-11"
      },
      {
        "user_id": "user_012",
        "community_label": "segment_5",
        "joined": "2025-11-11"
      },
      {
        "user_id": "user_013",
        "community_label": "segment_7",
        "joined": "2025-10-15"
      },
      {
        "user_id": "user_014",
        "community_label": "segment_1",
        "joined": "2025-06-09"
      },
      {
        "user_id": "user_015",
        "community_label": "segment_7",
        "joined": "2025-11-05"
      },
      {
        "user_id": "user_016",
        "community_label": "segment_0",
        "joined": "2025-11-29"
      },
      {
        "user_id": "user_017",
        "community_label": "segment_6",
        "joined": "2025-09-14"
      },
      {
        "user_id": "user_018",
        "community_label": "segment_2",
        "joined": "2025-10-22"
      },
      {
        "user_id": "user_019",
        "community_label": "segment_6",
        "joined": "2025-11-20"
      },
      {
        "user_id": "user_020",
        "community_label": "segment_6",
        "joined": "2025-09-14"
      },
      {
        "user_id": "user_021",
        "community_label": "segment_2",
        "joined": "2025-07-31"
      },
      {
        "user_id": "user_022",
        "community_label": "segment_4",
        "joined": "2026-01-27"
      },
      {
        "user_id": "user_023",
        "community_label": "segment_4",
        "joined": "2026-01-18"
      },
      {
        "user_id": "user_024",
        "community_label": "segment_1",
        "joined": "2026-01-08"
      },
      {
        "user_id": "user_025",
        "community_label": "segment_0",
        "joined": "2025-12-12"
      },
      {
        "user_id": "user_026",
        "community_label": "segment_3",
        "joined": "2026-01-11"
      },
      {
        "user_id": "user_027",
        "community_label": "segment_3",
        "joined": "2025-12-06"
      },
      {
        "user_id": "user_028",
        "community_label": "segment_0",
        "joined": "2025-11-28"
      },
      {
        "user_id": "user_029",
        "community_label": "segment_6",
        "joined": "2025-11-05"
      },
      {
        "user_id": "user_030",
        "community_label": "segment_0",
        "joined": "2025-12-14"
      },
      {
        "user_id": "user_031",
        "community_label": "segment_4",
        "joined": "2026-01-27"
      },
      {
        "user_id": "user_032",
        "community_label": "segment_2",
        "joined": "2025-08-03"
      },
      {
        "user_id": "user_033",
        "community_label": "segment_7",
        "joined": "2025-11-12"
      },
      {
        "user_id": "user_034",
        "community_label": "segment_0",
        "joined": "2025-09-03"
      },
      {
        "user_id": "user_035",
        "community_label": "segment_1",
        "joined": "2025-11-04"
      },
      {
        "user_id": "user_036",
        "community_label": "segment_6",
        "joined": "2025-06-30"
      },
      {
        "user_id": "user_037",
        "community_label": "segment_1",
        "joined": "2025-06-29"
      },
      {
        "user_id": "user_038",
        "community_label": "segment_7",
        "joined": "2025-08-11"
      },
      {
        "user_id": "user_039",
        "community_label": "segment_0",
        "joined": "2025-07-07"
      },
      {
        "user_id": "user_040",
        "community_label": "segment_0",
        "joined": "2025-11-08"
      },
      {
        "user_id": "user_041",
        "community_label": "segment_7",
        "joined": "2025-07-10"
      },
      {
        "user_id": "user_042",
        "community_label": "segment_2",
        "joined": "2025-10-01"
      },
      {
        "user_id": "user_043",
        "community_label": "segment_0",
        "joined": "2026-01-11"
      },
      {
        "user_id": "user_044",
        "community_label": "segment_6",
        "joined": "2025-08-08"
      },
      {
        "user_id": "user_045",
        "community_label": "segment_0",
        "joined": "2025-07-15"
      },
      {
        "user_id": "user_046",
        "community_label": "segment_1",
        "joined": "2025-11-13"
      },
      {
        "user_id": "user_047",
        "community_label": "segment_0",
        "joined": "2025-12-21"
      },
      {
        "user_id": "user_048",
        "community_label": "segment_5",
        "joined": "2025-08-22"
      },
      {
        "user_id": "user_049",
        "community_label": "segment_7",
        "joined": "2025-12-13"
      },
      {
        "user_id": "user_050",
        "community_label": "segment_7",
        "joined": "2025-09-16"
      },
      {
        "user_id": "user_051",
        "community_label": "segment_4",
        "joined": "2025-08-16"
      },
      {
        "user_id": "user_052",
        "community_label": "segment_7",
        "joined": "2026-01-12"
      },
      {
        "user_id": "user_053",
        "community_label": "segment_3",
        "joined": "2025-10-19"
      },
      {
        "user_id": "user_054",
        "community_label": "segment_7",
        "joined": "2025-12-09"
      },
      {
        "user_id": "user_055",
        "community_label": "segment_7",
        "joined": "2025-06-20"
      },
      {
        "user_id": "user_056",
        "community_label": "segment_1",
        "joined": "2025-11-04"
      },
      {
        "user_id": "user_057",
        "community_label": "segment_4",
        "joined": "2025-07-11"
      },
      {
        "user_id": "user_058",
        "community_label": "segment_2",
        "joined": "2025-08-09"
      },
      {
        "user_id": "user_059",
        "community_label": "segment_4",
        "joined": "2025-12-17"
      },
      {
        "user_id": "user_060",
        "community_label": "segment_1",
        "joined": "2026-01-05"
      },
      {
        "user_id": "user_061",
        "community_label": "segment_3",
        "joined": "2025-06-09"
      },
      {
        "user_id": "user_062",
        "community_label": "segment_3",
        "joined": "2025-07-07"
      },
      {
        "user_id": "user_063",
        "community_label": "segment_3",
        "joined": "2025-06-25"
      },
      {
        "user_id": "user_064",
        "community_label": "segment_2",
        "joined": "2025-07-10"
      },
      {
        "user_id": "user_065",
        "community_label": "segment_2",
        "joined": "2026-01-21"
      },
      {
        "user_id": "user_066",
        "community_label": "segment_2",
        "joined": "2025-08-02"
      },
      {
        "user_id": "user_067",
        "community_label": "segment_4",
        "joined": "2025-11-14"
      },
      {
        "user_id": "user_068",
        "community_label": "segment_6",
        "joined": "2025-08-17"
      },
      {
        "user_id": "user_069",
        "community_label": "segment_1",
        "joined": "2025-07-04"
      },
      {
        "user_id": "user_070",
        "community_label": "segment_3",
        "joined": "2025-07-27"
      },
      {
        "user_id": "user_071",
        "community_label": "segment_6",
        "joined": "2025-10-28"
      },
      {
        "user_id": "user_072",
        "community_label": "segment_2",
        "joined": "2025-08-25"
      },
      {
        "user_id": "user_073",
        "community_label": "segment_6",
        "joined": "2025-10-12"
      },
      {
        "user_id": "user_074",
        "community_label": "segment_6",
        "joined": "2025-11-26"
      },
      {
        "user_id": "user_075",
        "community_label": "segment_2",
        "joined": "2025-08-07"
      },
      {
        "user_id": "user_076",
        "community_label": "segment_1",
        "joined": "2025-06-04"
      },
      {
        "user_id": "user_077",
        "community_label": "segment_0",
        "joined": "2025-12-07"
      },
      {
        "user_id": "user_078",
        "community_label": "segment_3",
        "joined": "2026-01-18"
      },
      {
        "user_id": "user_079",
        "community_label": "segment_1",
        "joined": "2025-07-18"
      },
      {
        "user_id": "user_080",
        "community_label": "segment_1",
        "joined": "2025-07-26"
      },
      {
        "user_id": "user_081",
        "community_label": "segment_6",
        "joined": "2025-09-11"
      },
      {
        "user_id": "user_082",
        "community_label": "segment_5",
        "joined": "2025-10-15"
      },
      {
        "user_id": "user_083",
        "community_label": "segment_2",
        "joined": "2025-11-19"
      },
      {
        "user_id": "user_084",
        "community_label": "segment_4",
        "joined": "2025-09-30"
      },
      {
        "user_id": "user_085",
        "community_label": "segment_7",
        "joined": "2025-09-11"
      },
      {
        "user_id": "user_086",
        "community_label": "segment_3",
        "joined": "2025-09-22"
      },
      {
        "user_id": "user_087",
        "community_label": "segment_6",
        "joined": "2025-12-10"
      },
      {
        "user_id": "user_088",
        "community_label": "segment_4",
        "joined": "2025-08-05"
      },
      {
        "user_id": "user_089",
        "community_label": "segment_2",
        "joined": "2025-06-20"
      },
      {
        "user_id": "user_090",
        "community_label": "segment_4",
        "joined": "2026-01-22"
      },
      {
        "user_id": "user_091",
        "community_label": "segment_4",
        "joined": "2025-09-28"
      },
      {
        "user_id": "user_092",
        "community_label": "segment_2",
        "joined": "2026-01-06"
      },
      {
        "user_id": "user_093",
        "community_label": "segment_0",
        "joined": "2025-06-06"
      },
      {
        "user_id": "user_094",
        "community_label": "segment_1",
        "joined": "2025-07-07"
      },
      {
        "user_id": "user_095",
        "community_label": "segment_7",
        "joined": "2025-12-16"
      },
      {
        "user_id": "user_096",
        "community_label": "segment_0",
        "joined": "2025-09-18"
      },
      {
        "user_id": "user_097",
        "community_label": "segment_3",
        "joined": "2025-11-18"
      },
      {
        "user_id": "user_098",
        "community_label": "segment_0",
        "joined": "2025-09-29"
      },
      {
        "user_id": "user_099",
        "community_label": "segment_1",
        "joined": "2025-12-26"
      },
      {
        "user_id": "user_100",
        "community_label": "segment_4",
        "joined": "2025-08-13"
      },
      {
        "user_id": "user_101",
        "community_label": "segment_1",
        "joined": "2025-10-30"
      },
      {
        "user_id": "user_102",
        "community_label": "segment_5",
        "joined": "2025-07-27"
      },
      {
        "user_id": "user_103",
        "community_label": "segment_3",
        "joined": "2025-12-23"
      },
      {
        "user_id": "user_104",
        "community_label": "segment_2",
        "joined": "2025-09-04"
      },
      {
        "user_id": "user_105",
        "community_label": "segment_4",
        "joined": "2025-09-02"
      },
      {
        "user_id": "user_106",
        "community_label": "segment_3",
        "joined": "2025-08-25"
      },
      {
        "user_id": "user_107",
        "community_label": "segment_1",
        "joined": "2025-11-06"
      },
      {
        "user_id": "user_108",
        "community_label": "segment_5",
        "joined": "2025-09-02"
      },
      {
        "user_id": "user_109",
        "community_label": "segment_4",
        "joined": "2025-09-26"
      },
      {
        "user_id": "user_110",
        "community_label": "segment_0",
        "joined": "2025-10-26"
      },
      {
        "user_id": "user_111",
        "community_label": "segment_5",
        "joined": "2025-06-08"
      },
      {
        "user_id": "user_112",
        "community_label": "segment_5",
        "joined": "2025-08-30"
      },
      {
        "user_id": "user_113",
        "community_label": "segment_1",
        "joined": "2025-11-25"
      },
      {
        "user_id": "user_114",
        "community_label": "segment_2",
        "joined": "2025-06-19"
      },
      {
        "user_id": "user_115",
        "community_label": "segment_7",
        "joined": "2026-01-10"
      },
      {
        "user_id": "user_116",
        "community_label": "segment_6",
        "joined": "2026-01-21"
      },
      {
        "user_id": "user_117",
        "community_label": "segment_3",
        "joined": "2025-10-04"
      },
      {
        "user_id": "user_118",
        "community_label": "segment_2",
        "joined": "2025-08-04"
      },
      {
        "user_id": "user_119",
        "community_label": "segment_6",
        "joined": "2025-09-01"
      },
      {
        "user_id": "user_120",
        "community_label": "segment_3",
        "joined": "2025-06-04"
      },
      {
        "user_id": "user_121",
        "community_label": "segment_2",
        "joined": "2025-06-07"
      },
      {
        "user_id": "user_122",
        "community_label": "segment_4",
        "joined": "2025-12-12"
      },
      {
        "user_id": "user_123",
        "community_label": "segment_5",
        "joined": "2025-11-29"
      },
      {
        "user_id": "user_124",
        "community_label": "segment_2",
        "joined": "2025-11-02"
      },
      {
        "user_id": "user_125",
        "community_label": "segment_5",
        "joined": "2026-01-19"
      },
      {
        "user_id": "user_126",
        "community_label": "segment_6",
        "joined": "2025-12-30"
      },
      {
        "user_id": "user_127",
        "community_label": "segment_5",
        "joined": "2025-06-26"
      },
      {
        "user_id": "user_128",
        "community_label": "segment_0",
        "joined": "2025-11-27"
      },
      {
        "user_id": "user_129",
        "community_label": "segment_0",
        "joined": "2025-11-11"
      },
      {
        "user_id": "user_130",
        "community_label": "segment_3",
        "joined": "2025-08-10"
      },
      {
        "user_id": "user_131",
        "community_label": "segment_6",
        "joined": "2026-01-09"
      },
      {
        "user_id": "user_132",
        "community_label": "segment_4",
        "joined": "2025-07-21"
      },
      {
        "user_id": "user_133",
        "community_label": "segment_7",
        "joined": "2025-07-24"
      },
      {
        "user_id": "user_134",
        "community_label": "segment_1",
        "joined": "2025-08-04"
      },
      {
        "user_id": "user_135",
        "community_label": "segment_6",
        "joined": "2025-10-07"
      },
      {
        "user_id": "user_136",
        "community_label": "segment_4",
        "joined": "2025-08-20"
      },
      {
        "user_id": "user_137",
        "community_label": "segment_6",
        "joined": "2025-07-08"
      },
      {
        "user_id": "user_138",
        "community_label": "segment_5",
        "joined": "2025-06-15"
      },
      {
        "user_id": "user_139",
        "community_label": "segment_7",
        "joined": "2025-11-02"
      },
      {
        "user_id": "user_140",
        "community_label": "segment_2",
        "joined": "2025-06-04"
      },
      {
        "user_id": "user_141",
        "community_label": "segment_4",
        "joined": "2025-12-21"
      },
      {
        "user_id": "user_142",
        "community_label": "segment_1",
        "joined": "2025-06-06"
      },
      {
        "user_id": "user_143",
        "community_label": "segment_7",
        "joined": "2025-09-15"
      },
      {
        "user_id": "user_144",
        "community_label": "segment_7",
        "joined": "2025-10-01"
      },
      {
        "user_id": "user_145",
        "community_label": "segment_2",
        "joined": "2025-06-16"
      },
      {
        "user_id": "user_146",
        "community_label": "segment_4",
        "joined": "2025-08-23"
      },
      {
        "user_id": "user_147",
        "community_label": "segment_0",
        "joined": "2025-06-06"
      },
      {
        "user_id": "user_148",
        "community_label": "segment_5",
        "joined": "2025-12-30"
      },
      {
        "user_id": "user_149",
        "community_label": "segment_4",
        "joined": "2025-12-22"
      },
      {
        "user_id": "user_150",
        "community_label": "segment_1",
        "joined": "2025-11-07"
      },
      {
        "user_id": "user_151",
        "community_label": "segment_6",
        "joined": "2025-12-04"
      },
      {
        "user_id": "user_152",
        "community_label": "segment_2",
        "joined": "2025-11-16"
      },
      {
        "user_id": "user_153",
        "community_label": "segment_6",
        "joined": "2025-07-04"
      },
      {
        "user_id": "user_154",
        "community_label": "segment_5",
        "joined": "2025-09-15"
      },
      {
        "user_id": "user_155",
        "community_label": "segment_5",
        "joined": "2025-10-17"
      },
      {
        "user_id": "user_156",
        "community_label": "segment_2",
        "joined": "2025-09-13"
      },
      {
        "user_id": "user_157",
        "community_label": "segment_3",
        "joined": "2026-01-21"
      },
      {
        "user_id": "user_158",
        "community_label": "segment_5",
        "joined": "2025-10-08"
      },
      {
        "user_id": "user_159",
        "community_label": "segment_2",
        "joined": "2025-06-12"
      },
      {
        "user_id": "user_160",
        "community_label": "segment_4",
        "joined": "2025-06-04"
      },
      {
        "user_id": "user_161",
        "community_label": "segment_6",
        "joined": "2025-08-10"
      },
      {
        "user_id": "user_162",
        "community_label": "segment_5",
        "joined": "2025-06-30"
      },
      {
        "user_id": "user_163",
        "community_label": "segment_0",
        "joined": "2025-11-15"
      },
      {
        "user_id": "user_164",
        "community_label": "segment_1",
        "joined": "2025-11-14"
      },
      {
        "user_id": "user_165",
        "community_label": "segment_1",
        "joined": "2025-10-12"
      },
      {
        "user_id": "user_166",
        "community_label": "segment_4",
        "joined": "2025-11-18"
      },
      {
        "user_id": "user_167",
        "community_label": "segment_6",
        "joined": "2025-10-03"
      },
      {
        "user_id": "user_168",
        "community_label": "segment_3",
        "joined": "2025-11-02"
      },
      {
        "user_id": "user_169",
        "community_label": "segment_2",
        "joined": "2025-06-13"
      },
      {
        "user_id": "user_170",
        "community_label": "segment_3",
        "joined": "2025-10-18"
      },
      {
        "user_id": "user_171",
        "community_label": "segment_2",
        "joined": "2025-07-17"
      },
      {
        "user_id": "user_172",
        "community_label": "segment_3",
        "joined": "2025-09-10"
      },
      {
        "user_id": "user_173",
        "community_label": "segment_0",
        "joined": "2025-08-12"
      },
      {
        "user_id": "user_174",
        "community_label": "segment_0",
        "joined": "2025-11-22"
      },
      {
        "user_id": "user_175",
        "community_label": "segment_4",
        "joined": "2025-11-10"
      },
      {
        "user_id": "user_176",
        "community_label": "segment_2",
        "joined": "2025-08-19"
      },
      {
        "user_id": "user_177",
        "community_label": "segment_7",
        "joined": "2025-06-02"
      },
      {
        "user_id": "user_178",
        "community_label": "segment_1",
        "joined": "2025-09-28"
      },
      {
        "user_id": "user_179",
        "community_label": "segment_3",
        "joined": "2025-07-30"
      },
      {
        "user_id": "user_180",
        "community_label": "segment_0",
        "joined": "2025-12-28"
      },
      {
        "user_id": "user_181",
        "community_label": "segment_2",
        "joined": "2025-12-16"
      },
      {
        "user_id": "user_182",
        "community_label": "segment_6",
        "joined": "2025-08-31"
      },
      {
        "user_id": "user_183",
        "community_label": "segment_7",
        "joined": "2025-06-10"
      },
      {
        "user_id": "user_184",
        "community_label": "segment_5",
        "joined": "2025-08-12"
      },
      {
        "user_id": "user_185",
        "community_label": "segment_6",
        "joined": "2025-10-20"
      },
      {
        "user_id": "user_186",
        "community_label": "segment_1",
        "joined": "2025-12-30"
      },
      {
        "user_id": "user_187",
        "community_label": "segment_7",
        "joined": "2025-09-19"
      },
      {
        "user_id": "user_188",
        "community_label": "segment_5",
        "joined": "2025-06-18"
      },
      {
        "user_id": "user_189",
        "community_label": "segment_2",
        "joined": "2025-11-11"
      },
      {
        "user_id": "user_190",
        "community_label": "segment_3",
        "joined": "2025-12-04"
      },
      {
        "user_id": "user_191",
        "community_label": "segment_6",
        "joined": "2025-07-26"
      },
      {
        "user_id": "user_192",
        "community_label": "segment_3",
        "joined": "2025-08-04"
      },
      {
        "user_id": "user_193",
        "community_label": "segment_3",
        "joined": "2025-10-08"
      },
      {
        "user_id": "user_194",
        "community_label": "segment_2",
        "joined": "2025-08-19"
      },
      {
        "user_id": "user_195",
        "community_label": "segment_5",
        "joined": "2025-07-31"
      },
      {
        "user_id": "user_196",
        "community_label": "segment_5",
        "joined": "2025-12-08"
      },
      {
        "user_id": "user_197",
        "community_label": "segment_4",
        "joined": "2025-06-07"
      },
      {
        "user_id": "user_198",
        "community_label": "segment_5",
        "joined": "2025-11-09"
      },
      {
        "user_id": "user_199",
        "community_label": "segment_3",
        "joined": "2025-12-21"
      },
      {
        "user_id": "user_200",
        "community_label": "segment_2",
        "joined": "2025-09-15"
      },
      {
        "user_id": "user_201",
        "community_label": "segment_7",
        "joined": "2025-10-31"
      },
      {
        "user_id": "user_202",
        "community_label": "segment_7",
        "joined": "2025-07-09"
      },
      {
        "user_id": "user_203",
        "community_label": "segment_5",
        "joined": "2025-09-24"
      },
      {
        "user_id": "user_204",
        "community_label": "segment_4",
        "joined": "2025-11-29"
      },
      {
        "user_id": "user_205",
        "community_label": "segment_2",
        "joined": "2025-12-18"
      },
      {
        "user_id": "user_206",
        "community_label": "segment_1",
        "joined": "2025-10-19"
      },
      {
        "user_id": "user_207",
        "community_label": "segment_7",
        "joined": "2025-09-11"
      },
      {
        "user_id": "user_208",
        "community_label": "segment_0",
        "joined": "2025-11-29"
      },
      {
        "user_id": "user_209",
        "community_label": "segment_0",
        "joined": "2025-12-01"
      },
      {
        "user_id": "user_210",
        "community_label": "segment_1",
        "joined": "2025-07-24"
      },
      {
        "user_id": "user_211",
        "community_label": "segment_6",
        "joined": "2025-10-21"
      },
      {
        "user_id": "user_212",
        "community_label": "segment_5",
        "joined": "2025-08-04"
      },
      {
        "user_id": "user_213",
        "community_label": "segment_6",
        "joined": "2025-12-02"
      },
      {
        "user_id": "user_214",
        "community_label": "segment_5",
        "joined": "2025-07-07"
      },
      {
        "user_id": "user_215",
        "community_label": "segment_5",
        "joined": "2025-08-19"
      },
      {
        "user_id": "user_216",
        "community_label": "segment_3",
        "joined": "2025-10-11"
      },
      {
        "user_id": "user_217",
        "community_label": "segment_5",
        "joined": "2025-11-05"
      },
      {
        "user_id": "user_218",
        "community_label": "segment_1",
        "joined": "2025-10-25"
      },
      {
        "user_id": "user_219",
        "community_label": "segment_5",
        "joined": "2025-12-11"
      },
      {
        "user_id": "user_220",
        "community_label": "segment_3",
        "joined": "2025-09-04"
      },
      {
        "user_id": "user_221",
        "community_label": "segment_7",
        "joined": "2025-08-04"
      },
      {
        "user_id": "user_222",
        "community_label": "segment_3",
        "joined": "2026-01-27"
      },
      {
        "user_id": "user_223",
        "community_label": "segment_0",
        "joined": "2025-06-08"
      },
      {
        "user_id": "user_224",
        "community_label": "segment_0",
        "joined": "2025-12-08"
      },
      {
        "user_id": "user_225",
        "community_label": "segment_0",
        "joined": "2025-07-04"
      },
      {
        "user_id": "user_226",
        "community_label": "segment_6",
        "joined": "2025-11-07"
      },
      {
        "user_id": "user_227",
        "community_label": "segment_6",
        "joined": "2025-09-30"
      },
      {
        "user_id": "user_228",
        "community_label": "segment_2",
        "joined": "2025-09-25"
      },
      {
        "user_id": "user_229",
        "community_label": "segment_2",
        "joined": "2025-12-05"
      },
      {
        "user_id": "user_230",
        "community_label": "segment_1",
        "joined": "2025-09-16"
      },
      {
        "user_id": "user_231",
        "community_label": "segment_5",
        "joined": "2025-07-25"
      },
      {
        "user_id": "user_232",
        "community_label": "segment_7",
        "joined": "2025-09-28"
      },
      {
        "user_id": "user_233",
        "community_label": "segment_6",
        "joined": "2025-06-26"
      },
      {
        "user_id": "user_234",
        "community_label": "segment_4",
        "joined": "2025-07-09"
      },
      {
        "user_id": "user_235",
        "community_label": "segment_7",
        "joined": "2026-01-10"
      },
      {
        "user_id": "user_236",
        "community_label": "segment_6",
        "joined": "2025-12-20"
      },
      {
        "user_id": "user_237",
        "community_label": "segment_0",
        "joined": "2025-09-26"
      },
      {
        "user_id": "user_238",
        "community_label": "segment_3",
        "joined": "2025-09-03"
      },
      {
        "user_id": "user_239",
        "community_label": "segment_7",
        "joined": "2025-10-12"
      },
      {
        "user_id": "user_240",
        "community_label": "segment_0",
        "joined": "2025-07-26"
      },
      {
        "user_id": "user_241",
        "community_label": "segment_1",
        "joined": "2025-09-21"
      },
      {
        "user_id": "user_242",
        "community_label": "segment_3",
        "joined": "2025-11-22"
      },
      {
        "user_id": "user_243",
        "community_label": "segment_7",
        "joined": "2025-10-09"
      },
      {
        "user_id": "user_244",
        "community_label": "segment_4",
        "joined": "2025-09-07"
      },
      {
        "user_id": "user_245",
        "community_label": "segment_5",
        "joined": "2026-01-13"
      },
      {
        "user_id": "user_246",
        "community_label": "segment_1",
        "joined": "2025-10-31"
      },
      {
        "user_id": "user_247",
        "community_label": "segment_6",
        "joined": "2025-11-18"
      },
      {
        "user_id": "user_248",
        "community_label": "segment_1",
        "joined": "2025-12-09"
      },
      {
        "user_id": "user_249",
        "community_label": "segment_4",
        "joined": "2025-10-12"
      },
      {
        "user_id": "user_250",
        "community_label": "segment_5",
        "joined": "2025-06-01"
      },
      {
        "user_id": "user_251",
        "community_label": "segment_7",
        "joined": "2025-07-24"
      },
      {
        "user_id": "user_252",
        "community_label": "segment_1",
        "joined": "2025-08-11"
      },
      {
        "user_id": "user_253",
        "community_label": "segment_4",
        "joined": "2025-06-01"
      },
      {
        "user_id": "user_254",
        "community_label": "segment_7",
        "joined": "2025-11-30"
      },
      {
        "user_id": "user_255",
        "community_label": "segment_1",
        "joined": "2025-12-01"
      },
      {
        "user_id": "user_256",
        "community_label": "segment_3",
        "joined": "2026-01-10"
      },
      {
        "user_id": "user_257",
        "community_label": "segment_0",
        "joined": "2025-07-31"
      },
      {
        "user_id": "user_258",
        "community_label": "segment_2",
        "joined": "2025-10-28"
      },
      {
        "user_id": "user_259",
        "community_label": "segment_7",
        "joined": "2025-09-23"
      },
      {
        "user_id": "user_260",
        "community_label": "segment_0",
        "joined": "2025-08-01"
      },
      {
        "user_id": "user_261",
        "community_label": "segment_0",
        "joined": "2025-11-10"
      },
      {
        "user_id": "user_262",
        "community_label": "segment_6",
        "joined": "2025-11-11"
      },
      {
        "user_id": "user_263",
        "community_label": "segment_7",
        "joined": "2026-01-15"
      },
      {
        "user_id": "user_264",
        "community_label": "segment_1",
        "joined": "2025-12-13"
      },
      {
        "user_id": "user_265",
        "community_label": "segment_5",
        "joined": "2025-08-12"
      },
      {
        "user_id": "user_266",
        "community_label": "segment_5",
        "joined": "2025-08-19"
      },
      {
        "user_id": "user_267",
        "community_label": "segment_4",
        "joined": "2025-06-26"
      },
      {
        "user_id": "user_268",
        "community_label": "segment_7",
        "joined": "2025-10-04"
      },
      {
        "user_id": "user_269",
        "community_label": "segment_1",
        "joined": "2025-06-07"
      },
      {
        "user_id": "user_270",
        "community_label": "segment_3",
        "joined": "2025-10-15"
      },
      {
        "user_id": "user_271",
        "community_label": "segment_3",
        "joined": "2025-08-20"
      },
      {
        "user_id": "user_272",
        "community_label": "segment_7",
        "joined": "2025-06-25"
      },
      {
        "user_id": "user_273",
        "community_label": "segment_1",
        "joined": "2025-11-13"
      },
      {
        "user_id": "user_274",
        "community_label": "segment_6",
        "joined": "2025-09-11"
      },
      {
        "user_id": "user_275",
        "community_label": "segment_5",
        "joined": "2026-01-01"
      },
      {
        "user_id": "user_276",
        "community_label": "segment_1",
        "joined": "2025-08-25"
      },
      {
        "user_id": "user_277",
        "community_label": "segment_6",
        "joined": "2025-08-09"
      },
      {
        "user_id": "user_278",
        "community_label": "segment_4",
        "joined": "2025-07-07"
      },
      {
        "user_id": "user_279",
        "community_label": "segment_2",
        "joined": "2025-10-20"
      },
      {
        "user_id": "user_280",
        "community_label": "segment_4",
        "joined": "2025-09-19"
      },
      {
        "user_id": "user_281",
        "community_label": "segment_0",
        "joined": "2025-09-13"
      },
      {
        "user_id": "user_282",
        "community_label": "segment_4",
        "joined": "2025-11-18"
      },
      {
        "user_id": "user_283",
        "community_label": "segment_0",
        "joined": "2025-11-17"
      },
      {
        "user_id": "user_284",
        "community_label": "segment_4",
        "joined": "2026-01-13"
      },
      {
        "user_id": "user_285",
        "community_label": "segment_2",
        "joined": "2025-09-17"
      },
      {
        "user_id": "user_286",
        "community_label": "segment_5",
        "joined": "2025-07-26"
      },
      {
        "user_id": "user_287",
        "community_label": "segment_4",
        "joined": "2025-12-01"
      },
      {
        "user_id": "user_288",
        "community_label": "segment_0",
        "joined": "2025-08-01"
      },
      {
        "user_id": "user_289",
        "community_label": "segment_2",
        "joined": "2026-01-07"
      },
      {
        "user_id": "user_290",
        "community_label": "segment_3",
        "joined": "2025-11-10"
      },
      {
        "user_id": "user_291",
        "community_label": "segment_3",
        "joined": "2025-11-11"
      },
      {
        "user_id": "user_292",
        "community_label": "segment_7",
        "joined": "2025-11-10"
      },
      {
        "user_id": "user_293",
        "community_label": "segment_5",
        "joined": "2025-11-20"
      },
      {
        "user_id": "user_294",
        "community_label": "segment_6",
        "joined": "2026-01-01"
      },
      {
        "user_id": "user_295",
        "community_label": "segment_2",
        "joined": "2025-11-14"
      },
      {
        "user_id": "user_296",
        "community_label": "segment_1",
        "joined": "2025-07-03"
      },
      {
        "user_id": "user_297",
        "community_label": "segment_0",
        "joined": "2025-11-18"
      },
      {
        "user_id": "user_298",
        "community_label": "segment_3",
        "joined": "2025-10-01"
      },
      {
        "user_id": "user_299",
        "community_label": "segment_6",
        "joined": "2025-08-05"
      }
    ],
    "edges": [
      {
        "source": "user_055",
        "target": "user_195",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 00:00"
      },
      {
        "source": "user_113",
        "target": "user_059",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-01 01:00"
      },
      {
        "source": "user_176",
        "target": "user_089",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-01 02:00"
      },
      {
        "source": "user_025",
        "target": "user_163",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 02:00"
      },
      {
        "source": "user_239",
        "target": "user_202",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-01 02:00"
      },
      {
        "source": "user_153",
        "target": "user_065",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 03:00"
      },
      {
        "source": "user_097",
        "target": "user_256",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-01 04:00"
      },
      {
        "source": "user_274",
        "target": "user_036",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 04:00"
      },
      {
        "source": "user_036",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 04:00"
      },
      {
        "source": "user_233",
        "target": "user_226",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-01 05:00"
      },
      {
        "source": "user_238",
        "target": "user_299",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 05:00"
      },
      {
        "source": "user_005",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 07:00"
      },
      {
        "source": "user_217",
        "target": "user_048",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-01 07:00"
      },
      {
        "source": "user_042",
        "target": "user_121",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 08:00"
      },
      {
        "source": "user_146",
        "target": "user_084",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-01 08:00"
      },
      {
        "source": "user_003",
        "target": "user_163",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 09:00"
      },
      {
        "source": "user_132",
        "target": "user_258",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-01 09:00"
      },
      {
        "source": "user_293",
        "target": "user_132",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 10:00"
      },
      {
        "source": "user_005",
        "target": "user_203",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-01 10:00"
      },
      {
        "source": "user_238",
        "target": "user_120",
        "weight": 3,
        "interaction_type": "invite",
        "timestamp": "2026-01-01 10:00"
      },
      {
        "source": "user_139",
        "target": "user_200",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-01 10:00"
      },
      {
        "source": "user_003",
        "target": "user_034",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-01 10:00"
      },
      {
        "source": "user_176",
        "target": "user_194",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-01 11:00"
      },
      {
        "source": "user_093",
        "target": "user_025",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-01 14:00"
      },
      {
        "source": "user_262",
        "target": "user_277",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-01 16:00"
      },
      {
        "source": "user_238",
        "target": "user_170",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-01 16:00"
      },
      {
        "source": "user_260",
        "target": "user_077",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 16:00"
      },
      {
        "source": "user_205",
        "target": "user_092",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-01 18:00"
      },
      {
        "source": "user_058",
        "target": "user_205",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-01 18:00"
      },
      {
        "source": "user_135",
        "target": "user_097",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 21:00"
      },
      {
        "source": "user_269",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-01 21:00"
      },
      {
        "source": "user_097",
        "target": "user_242",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-01 21:00"
      },
      {
        "source": "user_150",
        "target": "user_282",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-01 23:00"
      },
      {
        "source": "user_176",
        "target": "user_152",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-01 23:00"
      },
      {
        "source": "user_114",
        "target": "user_121",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 00:00"
      },
      {
        "source": "user_148",
        "target": "user_154",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 00:00"
      },
      {
        "source": "user_056",
        "target": "user_107",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 01:00"
      },
      {
        "source": "user_113",
        "target": "user_248",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-02 01:00"
      },
      {
        "source": "user_100",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 01:00"
      },
      {
        "source": "user_207",
        "target": "user_049",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 02:00"
      },
      {
        "source": "user_282",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-02 02:00"
      },
      {
        "source": "user_237",
        "target": "user_288",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 02:00"
      },
      {
        "source": "user_007",
        "target": "user_120",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 04:00"
      },
      {
        "source": "user_207",
        "target": "user_133",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-02 04:00"
      },
      {
        "source": "user_070",
        "target": "user_024",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-02 05:00"
      },
      {
        "source": "user_066",
        "target": "user_169",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 06:00"
      },
      {
        "source": "user_209",
        "target": "user_288",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 07:00"
      },
      {
        "source": "user_066",
        "target": "user_145",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 08:00"
      },
      {
        "source": "user_005",
        "target": "user_231",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 08:00"
      },
      {
        "source": "user_186",
        "target": "user_273",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 09:00"
      },
      {
        "source": "user_233",
        "target": "user_236",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-02 10:00"
      },
      {
        "source": "user_288",
        "target": "user_287",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 10:00"
      },
      {
        "source": "user_167",
        "target": "user_151",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 10:00"
      },
      {
        "source": "user_121",
        "target": "user_092",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 11:00"
      },
      {
        "source": "user_067",
        "target": "user_106",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 13:00"
      },
      {
        "source": "user_031",
        "target": "user_000",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 14:00"
      },
      {
        "source": "user_242",
        "target": "user_220",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 14:00"
      },
      {
        "source": "user_180",
        "target": "user_230",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 14:00"
      },
      {
        "source": "user_139",
        "target": "user_002",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-02 16:00"
      },
      {
        "source": "user_019",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-02 17:00"
      },
      {
        "source": "user_143",
        "target": "user_221",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 17:00"
      },
      {
        "source": "user_114",
        "target": "user_237",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 19:00"
      },
      {
        "source": "user_107",
        "target": "user_035",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 21:00"
      },
      {
        "source": "user_114",
        "target": "user_118",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 21:00"
      },
      {
        "source": "user_134",
        "target": "user_070",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 21:00"
      },
      {
        "source": "user_189",
        "target": "user_132",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-02 22:00"
      },
      {
        "source": "user_011",
        "target": "user_250",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-02 22:00"
      },
      {
        "source": "user_277",
        "target": "user_073",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-03 00:00"
      },
      {
        "source": "user_181",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-03 00:00"
      },
      {
        "source": "user_031",
        "target": "user_009",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-03 03:00"
      },
      {
        "source": "user_136",
        "target": "user_253",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-03 04:00"
      },
      {
        "source": "user_089",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-03 05:00"
      },
      {
        "source": "user_147",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-03 05:00"
      },
      {
        "source": "user_218",
        "target": "user_241",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-03 05:00"
      },
      {
        "source": "user_280",
        "target": "user_067",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-03 06:00"
      },
      {
        "source": "user_257",
        "target": "user_209",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-03 08:00"
      },
      {
        "source": "user_066",
        "target": "user_152",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-03 09:00"
      },
      {
        "source": "user_234",
        "target": "user_175",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-03 10:00"
      },
      {
        "source": "user_222",
        "target": "user_106",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-03 11:00"
      },
      {
        "source": "user_157",
        "target": "user_262",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-03 12:00"
      },
      {
        "source": "user_100",
        "target": "user_084",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-03 12:00"
      },
      {
        "source": "user_296",
        "target": "user_206",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-03 13:00"
      },
      {
        "source": "user_219",
        "target": "user_195",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-03 13:00"
      },
      {
        "source": "user_098",
        "target": "user_045",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-03 15:00"
      },
      {
        "source": "user_167",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-03 17:00"
      },
      {
        "source": "user_033",
        "target": "user_212",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-03 22:00"
      },
      {
        "source": "user_220",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-03 22:00"
      },
      {
        "source": "user_015",
        "target": "user_055",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-03 23:00"
      },
      {
        "source": "user_082",
        "target": "user_201",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-03 23:00"
      },
      {
        "source": "user_003",
        "target": "user_240",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 01:00"
      },
      {
        "source": "user_245",
        "target": "user_138",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-04 03:00"
      },
      {
        "source": "user_113",
        "target": "user_207",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-04 05:00"
      },
      {
        "source": "user_072",
        "target": "user_228",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 06:00"
      },
      {
        "source": "user_066",
        "target": "user_176",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-04 07:00"
      },
      {
        "source": "user_272",
        "target": "user_179",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-04 08:00"
      },
      {
        "source": "user_157",
        "target": "user_007",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-04 08:00"
      },
      {
        "source": "user_047",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-04 10:00"
      },
      {
        "source": "user_196",
        "target": "user_005",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 10:00"
      },
      {
        "source": "user_073",
        "target": "user_185",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 12:00"
      },
      {
        "source": "user_083",
        "target": "user_205",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 12:00"
      },
      {
        "source": "user_114",
        "target": "user_215",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-04 13:00"
      },
      {
        "source": "user_267",
        "target": "user_244",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 13:00"
      },
      {
        "source": "user_248",
        "target": "user_293",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 13:00"
      },
      {
        "source": "user_208",
        "target": "user_237",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-04 13:00"
      },
      {
        "source": "user_056",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 13:00"
      },
      {
        "source": "user_066",
        "target": "user_092",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-04 14:00"
      },
      {
        "source": "user_297",
        "target": "user_223",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 14:00"
      },
      {
        "source": "user_040",
        "target": "user_237",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 15:00"
      },
      {
        "source": "user_066",
        "target": "user_122",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-04 16:00"
      },
      {
        "source": "user_212",
        "target": "user_063",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 17:00"
      },
      {
        "source": "user_154",
        "target": "user_244",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-04 17:00"
      },
      {
        "source": "user_190",
        "target": "user_238",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-04 17:00"
      },
      {
        "source": "user_022",
        "target": "user_197",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 18:00"
      },
      {
        "source": "user_047",
        "target": "user_043",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 19:00"
      },
      {
        "source": "user_292",
        "target": "user_232",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-04 20:00"
      },
      {
        "source": "user_218",
        "target": "user_024",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-04 21:00"
      },
      {
        "source": "user_103",
        "target": "user_097",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-04 21:00"
      },
      {
        "source": "user_296",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-04 21:00"
      },
      {
        "source": "user_167",
        "target": "user_299",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-04 22:00"
      },
      {
        "source": "user_207",
        "target": "user_221",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-04 22:00"
      },
      {
        "source": "user_189",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-04 22:00"
      },
      {
        "source": "user_206",
        "target": "user_107",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-05 00:00"
      },
      {
        "source": "user_030",
        "target": "user_163",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-05 01:00"
      },
      {
        "source": "user_085",
        "target": "user_259",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 01:00"
      },
      {
        "source": "user_163",
        "target": "user_240",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 02:00"
      },
      {
        "source": "user_161",
        "target": "user_233",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 03:00"
      },
      {
        "source": "user_202",
        "target": "user_183",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-05 03:00"
      },
      {
        "source": "user_097",
        "target": "user_173",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-05 03:00"
      },
      {
        "source": "user_097",
        "target": "user_216",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-05 04:00"
      },
      {
        "source": "user_238",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-05 06:00"
      },
      {
        "source": "user_287",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 10:00"
      },
      {
        "source": "user_123",
        "target": "user_082",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 11:00"
      },
      {
        "source": "user_167",
        "target": "user_213",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-05 11:00"
      },
      {
        "source": "user_183",
        "target": "user_254",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 12:00"
      },
      {
        "source": "user_222",
        "target": "user_140",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 13:00"
      },
      {
        "source": "user_250",
        "target": "user_266",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-05 13:00"
      },
      {
        "source": "user_286",
        "target": "user_011",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-05 13:00"
      },
      {
        "source": "user_186",
        "target": "user_230",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-05 14:00"
      },
      {
        "source": "user_125",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-05 15:00"
      },
      {
        "source": "user_113",
        "target": "user_000",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 18:00"
      },
      {
        "source": "user_296",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 19:00"
      },
      {
        "source": "user_099",
        "target": "user_107",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-05 19:00"
      },
      {
        "source": "user_113",
        "target": "user_179",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-05 19:00"
      },
      {
        "source": "user_037",
        "target": "user_101",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 19:00"
      },
      {
        "source": "user_116",
        "target": "user_165",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-05 20:00"
      },
      {
        "source": "user_150",
        "target": "user_101",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 21:00"
      },
      {
        "source": "user_036",
        "target": "user_274",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-05 21:00"
      },
      {
        "source": "user_113",
        "target": "user_206",
        "weight": 2,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-05 21:00"
      },
      {
        "source": "user_151",
        "target": "user_233",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-05 21:00"
      },
      {
        "source": "user_113",
        "target": "user_238",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 21:00"
      },
      {
        "source": "user_233",
        "target": "user_299",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 21:00"
      },
      {
        "source": "user_066",
        "target": "user_291",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 22:00"
      },
      {
        "source": "user_265",
        "target": "user_108",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-05 22:00"
      },
      {
        "source": "user_139",
        "target": "user_013",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-05 22:00"
      },
      {
        "source": "user_058",
        "target": "user_285",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 00:00"
      },
      {
        "source": "user_065",
        "target": "user_066",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-06 00:00"
      },
      {
        "source": "user_237",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 00:00"
      },
      {
        "source": "user_105",
        "target": "user_051",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-06 00:00"
      },
      {
        "source": "user_125",
        "target": "user_108",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-06 01:00"
      },
      {
        "source": "user_061",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 02:00"
      },
      {
        "source": "user_113",
        "target": "user_215",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 02:00"
      },
      {
        "source": "user_203",
        "target": "user_198",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-06 02:00"
      },
      {
        "source": "user_217",
        "target": "user_220",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-06 02:00"
      },
      {
        "source": "user_149",
        "target": "user_067",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 05:00"
      },
      {
        "source": "user_094",
        "target": "user_269",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-06 05:00"
      },
      {
        "source": "user_093",
        "target": "user_283",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 05:00"
      },
      {
        "source": "user_125",
        "target": "user_265",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 06:00"
      },
      {
        "source": "user_284",
        "target": "user_200",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-06 06:00"
      },
      {
        "source": "user_176",
        "target": "user_053",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 06:00"
      },
      {
        "source": "user_005",
        "target": "user_158",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-06 07:00"
      },
      {
        "source": "user_046",
        "target": "user_206",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-06 08:00"
      },
      {
        "source": "user_015",
        "target": "user_229",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 09:00"
      },
      {
        "source": "user_113",
        "target": "user_164",
        "weight": 5,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 10:00"
      },
      {
        "source": "user_167",
        "target": "user_081",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 12:00"
      },
      {
        "source": "user_218",
        "target": "user_178",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-06 12:00"
      },
      {
        "source": "user_141",
        "target": "user_244",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 12:00"
      },
      {
        "source": "user_153",
        "target": "user_020",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 12:00"
      },
      {
        "source": "user_167",
        "target": "user_020",
        "weight": 2,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 14:00"
      },
      {
        "source": "user_077",
        "target": "user_128",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 15:00"
      },
      {
        "source": "user_110",
        "target": "user_174",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-06 15:00"
      },
      {
        "source": "user_094",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 15:00"
      },
      {
        "source": "user_068",
        "target": "user_054",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 16:00"
      },
      {
        "source": "user_087",
        "target": "user_185",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 16:00"
      },
      {
        "source": "user_180",
        "target": "user_237",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 17:00"
      },
      {
        "source": "user_132",
        "target": "user_166",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 17:00"
      },
      {
        "source": "user_022",
        "target": "user_141",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 18:00"
      },
      {
        "source": "user_171",
        "target": "user_140",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 18:00"
      },
      {
        "source": "user_291",
        "target": "user_026",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-06 19:00"
      },
      {
        "source": "user_254",
        "target": "user_047",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 20:00"
      },
      {
        "source": "user_221",
        "target": "user_239",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 20:00"
      },
      {
        "source": "user_180",
        "target": "user_225",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 21:00"
      },
      {
        "source": "user_031",
        "target": "user_164",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 21:00"
      },
      {
        "source": "user_297",
        "target": "user_073",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 21:00"
      },
      {
        "source": "user_001",
        "target": "user_149",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-06 22:00"
      },
      {
        "source": "user_260",
        "target": "user_039",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 22:00"
      },
      {
        "source": "user_006",
        "target": "user_290",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-06 22:00"
      },
      {
        "source": "user_084",
        "target": "user_067",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 00:00"
      },
      {
        "source": "user_123",
        "target": "user_102",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 00:00"
      },
      {
        "source": "user_217",
        "target": "user_214",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-07 01:00"
      },
      {
        "source": "user_176",
        "target": "user_058",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 01:00"
      },
      {
        "source": "user_066",
        "target": "user_295",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-07 01:00"
      },
      {
        "source": "user_086",
        "target": "user_168",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 02:00"
      },
      {
        "source": "user_251",
        "target": "user_243",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 03:00"
      },
      {
        "source": "user_167",
        "target": "user_096",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-07 03:00"
      },
      {
        "source": "user_166",
        "target": "user_146",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 03:00"
      },
      {
        "source": "user_077",
        "target": "user_261",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-07 03:00"
      },
      {
        "source": "user_036",
        "target": "user_044",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 03:00"
      },
      {
        "source": "user_120",
        "target": "user_070",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-07 03:00"
      },
      {
        "source": "user_010",
        "target": "user_057",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 04:00"
      },
      {
        "source": "user_296",
        "target": "user_165",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 04:00"
      },
      {
        "source": "user_165",
        "target": "user_264",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 04:00"
      },
      {
        "source": "user_017",
        "target": "user_254",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 04:00"
      },
      {
        "source": "user_005",
        "target": "user_138",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 04:00"
      },
      {
        "source": "user_236",
        "target": "user_116",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 05:00"
      },
      {
        "source": "user_083",
        "target": "user_270",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 06:00"
      },
      {
        "source": "user_208",
        "target": "user_270",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 06:00"
      },
      {
        "source": "user_107",
        "target": "user_241",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-07 07:00"
      },
      {
        "source": "user_254",
        "target": "user_274",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-07 07:00"
      },
      {
        "source": "user_200",
        "target": "user_258",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-07 07:00"
      },
      {
        "source": "user_130",
        "target": "user_263",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-07 10:00"
      },
      {
        "source": "user_053",
        "target": "user_179",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-07 10:00"
      },
      {
        "source": "user_092",
        "target": "user_181",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 11:00"
      },
      {
        "source": "user_194",
        "target": "user_202",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 11:00"
      },
      {
        "source": "user_298",
        "target": "user_168",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 12:00"
      },
      {
        "source": "user_297",
        "target": "user_158",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 13:00"
      },
      {
        "source": "user_297",
        "target": "user_067",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 13:00"
      },
      {
        "source": "user_221",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 14:00"
      },
      {
        "source": "user_093",
        "target": "user_028",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-07 15:00"
      },
      {
        "source": "user_120",
        "target": "user_190",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 16:00"
      },
      {
        "source": "user_249",
        "target": "user_009",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 17:00"
      },
      {
        "source": "user_113",
        "target": "user_015",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 17:00"
      },
      {
        "source": "user_139",
        "target": "user_239",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 18:00"
      },
      {
        "source": "user_267",
        "target": "user_132",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 18:00"
      },
      {
        "source": "user_298",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 19:00"
      },
      {
        "source": "user_292",
        "target": "user_239",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 19:00"
      },
      {
        "source": "user_106",
        "target": "user_068",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 19:00"
      },
      {
        "source": "user_086",
        "target": "user_199",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 19:00"
      },
      {
        "source": "user_151",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 20:00"
      },
      {
        "source": "user_015",
        "target": "user_169",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 20:00"
      },
      {
        "source": "user_286",
        "target": "user_162",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 20:00"
      },
      {
        "source": "user_038",
        "target": "user_052",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-07 21:00"
      },
      {
        "source": "user_260",
        "target": "user_291",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-07 23:00"
      },
      {
        "source": "user_128",
        "target": "user_173",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 00:00"
      },
      {
        "source": "user_093",
        "target": "user_257",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-08 01:00"
      },
      {
        "source": "user_165",
        "target": "user_164",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 02:00"
      },
      {
        "source": "user_291",
        "target": "user_117",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-08 02:00"
      },
      {
        "source": "user_213",
        "target": "user_165",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-08 03:00"
      },
      {
        "source": "user_082",
        "target": "user_108",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-08 03:00"
      },
      {
        "source": "user_269",
        "target": "user_110",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 04:00"
      },
      {
        "source": "user_013",
        "target": "user_049",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-08 04:00"
      },
      {
        "source": "user_001",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-08 05:00"
      },
      {
        "source": "user_167",
        "target": "user_153",
        "weight": 3,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-08 06:00"
      },
      {
        "source": "user_270",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-08 07:00"
      },
      {
        "source": "user_154",
        "target": "user_162",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-08 09:00"
      },
      {
        "source": "user_035",
        "target": "user_056",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-08 09:00"
      },
      {
        "source": "user_141",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 09:00"
      },
      {
        "source": "user_010",
        "target": "user_217",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 10:00"
      },
      {
        "source": "user_120",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 12:00"
      },
      {
        "source": "user_024",
        "target": "user_230",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-08 12:00"
      },
      {
        "source": "user_134",
        "target": "user_107",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 12:00"
      },
      {
        "source": "user_237",
        "target": "user_283",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 13:00"
      },
      {
        "source": "user_176",
        "target": "user_256",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 13:00"
      },
      {
        "source": "user_003",
        "target": "user_147",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 13:00"
      },
      {
        "source": "user_034",
        "target": "user_047",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-08 13:00"
      },
      {
        "source": "user_231",
        "target": "user_034",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 15:00"
      },
      {
        "source": "user_105",
        "target": "user_090",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 16:00"
      },
      {
        "source": "user_084",
        "target": "user_059",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-08 17:00"
      },
      {
        "source": "user_079",
        "target": "user_084",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-08 19:00"
      },
      {
        "source": "user_097",
        "target": "user_222",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-08 19:00"
      },
      {
        "source": "user_293",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-08 21:00"
      },
      {
        "source": "user_161",
        "target": "user_294",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-08 21:00"
      },
      {
        "source": "user_117",
        "target": "user_106",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 21:00"
      },
      {
        "source": "user_001",
        "target": "user_090",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 22:00"
      },
      {
        "source": "user_176",
        "target": "user_258",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-08 22:00"
      },
      {
        "source": "user_256",
        "target": "user_130",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-08 22:00"
      },
      {
        "source": "user_066",
        "target": "user_259",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-08 22:00"
      },
      {
        "source": "user_022",
        "target": "user_284",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-08 22:00"
      },
      {
        "source": "user_084",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 23:00"
      },
      {
        "source": "user_038",
        "target": "user_230",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-08 23:00"
      },
      {
        "source": "user_045",
        "target": "user_034",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-09 00:00"
      },
      {
        "source": "user_200",
        "target": "user_101",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-09 00:00"
      },
      {
        "source": "user_238",
        "target": "user_290",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-09 00:00"
      },
      {
        "source": "user_121",
        "target": "user_075",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 01:00"
      },
      {
        "source": "user_291",
        "target": "user_125",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 04:00"
      },
      {
        "source": "user_113",
        "target": "user_185",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-09 05:00"
      },
      {
        "source": "user_113",
        "target": "user_080",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-09 05:00"
      },
      {
        "source": "user_003",
        "target": "user_174",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 06:00"
      },
      {
        "source": "user_084",
        "target": "user_204",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-09 06:00"
      },
      {
        "source": "user_167",
        "target": "user_200",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 07:00"
      },
      {
        "source": "user_167",
        "target": "user_135",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 07:00"
      },
      {
        "source": "user_157",
        "target": "user_057",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-09 08:00"
      },
      {
        "source": "user_141",
        "target": "user_023",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-09 08:00"
      },
      {
        "source": "user_086",
        "target": "user_053",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 09:00"
      },
      {
        "source": "user_252",
        "target": "user_218",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-09 09:00"
      },
      {
        "source": "user_169",
        "target": "user_114",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 09:00"
      },
      {
        "source": "user_000",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-09 11:00"
      },
      {
        "source": "user_269",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-09 11:00"
      },
      {
        "source": "user_258",
        "target": "user_169",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-09 12:00"
      },
      {
        "source": "user_077",
        "target": "user_028",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 12:00"
      },
      {
        "source": "user_196",
        "target": "user_195",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-09 14:00"
      },
      {
        "source": "user_218",
        "target": "user_134",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 15:00"
      },
      {
        "source": "user_114",
        "target": "user_228",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-09 16:00"
      },
      {
        "source": "user_079",
        "target": "user_097",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 16:00"
      },
      {
        "source": "user_066",
        "target": "user_159",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 16:00"
      },
      {
        "source": "user_099",
        "target": "user_134",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-09 18:00"
      },
      {
        "source": "user_206",
        "target": "user_273",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-09 19:00"
      },
      {
        "source": "user_243",
        "target": "user_144",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 19:00"
      },
      {
        "source": "user_291",
        "target": "user_242",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 20:00"
      },
      {
        "source": "user_297",
        "target": "user_077",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-09 21:00"
      },
      {
        "source": "user_294",
        "target": "user_081",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-09 22:00"
      },
      {
        "source": "user_282",
        "target": "user_023",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-09 23:00"
      },
      {
        "source": "user_097",
        "target": "user_238",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-09 23:00"
      },
      {
        "source": "user_044",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 01:00"
      },
      {
        "source": "user_113",
        "target": "user_117",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-10 02:00"
      },
      {
        "source": "user_229",
        "target": "user_042",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-10 03:00"
      },
      {
        "source": "user_213",
        "target": "user_182",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 03:00"
      },
      {
        "source": "user_291",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-10 04:00"
      },
      {
        "source": "user_025",
        "target": "user_043",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-10 05:00"
      },
      {
        "source": "user_006",
        "target": "user_027",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-10 06:00"
      },
      {
        "source": "user_097",
        "target": "user_170",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 08:00"
      },
      {
        "source": "user_290",
        "target": "user_298",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 09:00"
      },
      {
        "source": "user_004",
        "target": "user_243",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-10 09:00"
      },
      {
        "source": "user_143",
        "target": "user_201",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 09:00"
      },
      {
        "source": "user_242",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-10 09:00"
      },
      {
        "source": "user_270",
        "target": "user_063",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-10 11:00"
      },
      {
        "source": "user_001",
        "target": "user_043",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 11:00"
      },
      {
        "source": "user_231",
        "target": "user_215",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 12:00"
      },
      {
        "source": "user_015",
        "target": "user_133",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-10 13:00"
      },
      {
        "source": "user_250",
        "target": "user_215",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-10 13:00"
      },
      {
        "source": "user_021",
        "target": "user_228",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-10 13:00"
      },
      {
        "source": "user_034",
        "target": "user_240",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-10 13:00"
      },
      {
        "source": "user_229",
        "target": "user_114",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 15:00"
      },
      {
        "source": "user_097",
        "target": "user_120",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 15:00"
      },
      {
        "source": "user_175",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-10 15:00"
      },
      {
        "source": "user_238",
        "target": "user_162",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-10 16:00"
      },
      {
        "source": "user_218",
        "target": "user_099",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 16:00"
      },
      {
        "source": "user_164",
        "target": "user_252",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 16:00"
      },
      {
        "source": "user_218",
        "target": "user_186",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-10 17:00"
      },
      {
        "source": "user_238",
        "target": "user_073",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 18:00"
      },
      {
        "source": "user_167",
        "target": "user_137",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-10 18:00"
      },
      {
        "source": "user_109",
        "target": "user_267",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 18:00"
      },
      {
        "source": "user_177",
        "target": "user_187",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-10 18:00"
      },
      {
        "source": "user_133",
        "target": "user_239",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 19:00"
      },
      {
        "source": "user_166",
        "target": "user_100",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-10 19:00"
      },
      {
        "source": "user_009",
        "target": "user_136",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 20:00"
      },
      {
        "source": "user_091",
        "target": "user_100",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 20:00"
      },
      {
        "source": "user_212",
        "target": "user_134",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 22:00"
      },
      {
        "source": "user_184",
        "target": "user_275",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-10 22:00"
      },
      {
        "source": "user_271",
        "target": "user_199",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-10 23:00"
      },
      {
        "source": "user_258",
        "target": "user_041",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-10 23:00"
      },
      {
        "source": "user_050",
        "target": "user_177",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-11 01:00"
      },
      {
        "source": "user_116",
        "target": "user_236",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-11 01:00"
      },
      {
        "source": "user_223",
        "target": "user_093",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-11 01:00"
      },
      {
        "source": "user_264",
        "target": "user_142",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-11 02:00"
      },
      {
        "source": "user_233",
        "target": "user_137",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-11 03:00"
      },
      {
        "source": "user_144",
        "target": "user_133",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 05:00"
      },
      {
        "source": "user_200",
        "target": "user_072",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 05:00"
      },
      {
        "source": "user_015",
        "target": "user_050",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-11 08:00"
      },
      {
        "source": "user_066",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 08:00"
      },
      {
        "source": "user_225",
        "target": "user_030",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-11 08:00"
      },
      {
        "source": "user_250",
        "target": "user_048",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 09:00"
      },
      {
        "source": "user_213",
        "target": "user_277",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 11:00"
      },
      {
        "source": "user_292",
        "target": "user_201",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 11:00"
      },
      {
        "source": "user_000",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-11 12:00"
      },
      {
        "source": "user_067",
        "target": "user_052",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 12:00"
      },
      {
        "source": "user_066",
        "target": "user_299",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 12:00"
      },
      {
        "source": "user_073",
        "target": "user_119",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-11 12:00"
      },
      {
        "source": "user_248",
        "target": "user_108",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-11 12:00"
      },
      {
        "source": "user_092",
        "target": "user_152",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 12:00"
      },
      {
        "source": "user_210",
        "target": "user_276",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 12:00"
      },
      {
        "source": "user_189",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 13:00"
      },
      {
        "source": "user_238",
        "target": "user_168",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 13:00"
      },
      {
        "source": "user_207",
        "target": "user_033",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-11 14:00"
      },
      {
        "source": "user_158",
        "target": "user_138",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 14:00"
      },
      {
        "source": "user_283",
        "target": "user_135",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 14:00"
      },
      {
        "source": "user_249",
        "target": "user_141",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 15:00"
      },
      {
        "source": "user_031",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 15:00"
      },
      {
        "source": "user_113",
        "target": "user_241",
        "weight": 3,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-11 15:00"
      },
      {
        "source": "user_077",
        "target": "user_087",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-11 15:00"
      },
      {
        "source": "user_051",
        "target": "user_084",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 19:00"
      },
      {
        "source": "user_119",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 20:00"
      },
      {
        "source": "user_258",
        "target": "user_021",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 20:00"
      },
      {
        "source": "user_238",
        "target": "user_157",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-11 20:00"
      },
      {
        "source": "user_084",
        "target": "user_297",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-11 20:00"
      },
      {
        "source": "user_176",
        "target": "user_229",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-11 23:00"
      },
      {
        "source": "user_167",
        "target": "user_068",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 23:00"
      },
      {
        "source": "user_200",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-11 23:00"
      },
      {
        "source": "user_087",
        "target": "user_126",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-11 23:00"
      },
      {
        "source": "user_045",
        "target": "user_209",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 02:00"
      },
      {
        "source": "user_125",
        "target": "user_015",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-12 02:00"
      },
      {
        "source": "user_042",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 02:00"
      },
      {
        "source": "user_021",
        "target": "user_171",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 03:00"
      },
      {
        "source": "user_052",
        "target": "user_005",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-12 03:00"
      },
      {
        "source": "user_246",
        "target": "user_252",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 03:00"
      },
      {
        "source": "user_006",
        "target": "user_062",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 03:00"
      },
      {
        "source": "user_167",
        "target": "user_029",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 04:00"
      },
      {
        "source": "user_042",
        "target": "user_289",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 04:00"
      },
      {
        "source": "user_063",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 05:00"
      },
      {
        "source": "user_139",
        "target": "user_201",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-12 05:00"
      },
      {
        "source": "user_190",
        "target": "user_157",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 05:00"
      },
      {
        "source": "user_292",
        "target": "user_095",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 06:00"
      },
      {
        "source": "user_241",
        "target": "user_206",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-12 06:00"
      },
      {
        "source": "user_095",
        "target": "user_114",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 06:00"
      },
      {
        "source": "user_031",
        "target": "user_267",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 07:00"
      },
      {
        "source": "user_107",
        "target": "user_276",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 09:00"
      },
      {
        "source": "user_079",
        "target": "user_201",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-12 10:00"
      },
      {
        "source": "user_009",
        "target": "user_090",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 10:00"
      },
      {
        "source": "user_186",
        "target": "user_070",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 10:00"
      },
      {
        "source": "user_033",
        "target": "user_041",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 10:00"
      },
      {
        "source": "user_097",
        "target": "user_007",
        "weight": 2,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-12 11:00"
      },
      {
        "source": "user_041",
        "target": "user_054",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 12:00"
      },
      {
        "source": "user_117",
        "target": "user_010",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-12 12:00"
      },
      {
        "source": "user_160",
        "target": "user_015",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 13:00"
      },
      {
        "source": "user_143",
        "target": "user_238",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 13:00"
      },
      {
        "source": "user_220",
        "target": "user_270",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 14:00"
      },
      {
        "source": "user_102",
        "target": "user_190",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 14:00"
      },
      {
        "source": "user_126",
        "target": "user_227",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-12 15:00"
      },
      {
        "source": "user_066",
        "target": "user_065",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-12 15:00"
      },
      {
        "source": "user_158",
        "target": "user_102",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 15:00"
      },
      {
        "source": "user_217",
        "target": "user_172",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 16:00"
      },
      {
        "source": "user_015",
        "target": "user_254",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 16:00"
      },
      {
        "source": "user_113",
        "target": "user_218",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 16:00"
      },
      {
        "source": "user_264",
        "target": "user_046",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 18:00"
      },
      {
        "source": "user_176",
        "target": "user_296",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 18:00"
      },
      {
        "source": "user_218",
        "target": "user_031",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-12 19:00"
      },
      {
        "source": "user_124",
        "target": "user_177",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-12 21:00"
      },
      {
        "source": "user_238",
        "target": "user_117",
        "weight": 3,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 21:00"
      },
      {
        "source": "user_000",
        "target": "user_145",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 21:00"
      },
      {
        "source": "user_054",
        "target": "user_002",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-12 23:00"
      },
      {
        "source": "user_269",
        "target": "user_218",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 02:00"
      },
      {
        "source": "user_064",
        "target": "user_114",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-13 02:00"
      },
      {
        "source": "user_096",
        "target": "user_043",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-13 03:00"
      },
      {
        "source": "user_221",
        "target": "user_144",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 03:00"
      },
      {
        "source": "user_169",
        "target": "user_285",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-13 04:00"
      },
      {
        "source": "user_200",
        "target": "user_032",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 04:00"
      },
      {
        "source": "user_247",
        "target": "user_073",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-13 04:00"
      },
      {
        "source": "user_178",
        "target": "user_107",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-13 06:00"
      },
      {
        "source": "user_282",
        "target": "user_067",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 07:00"
      },
      {
        "source": "user_019",
        "target": "user_233",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-13 08:00"
      },
      {
        "source": "user_020",
        "target": "user_294",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-13 09:00"
      },
      {
        "source": "user_138",
        "target": "user_238",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-13 10:00"
      },
      {
        "source": "user_113",
        "target": "user_264",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 11:00"
      },
      {
        "source": "user_151",
        "target": "user_299",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-13 12:00"
      },
      {
        "source": "user_000",
        "target": "user_056",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 12:00"
      },
      {
        "source": "user_073",
        "target": "user_211",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 13:00"
      },
      {
        "source": "user_164",
        "target": "user_221",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-13 13:00"
      },
      {
        "source": "user_107",
        "target": "user_191",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 14:00"
      },
      {
        "source": "user_269",
        "target": "user_099",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-13 16:00"
      },
      {
        "source": "user_200",
        "target": "user_229",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 16:00"
      },
      {
        "source": "user_193",
        "target": "user_120",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 17:00"
      },
      {
        "source": "user_116",
        "target": "user_097",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 17:00"
      },
      {
        "source": "user_214",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-13 17:00"
      },
      {
        "source": "user_184",
        "target": "user_195",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 17:00"
      },
      {
        "source": "user_175",
        "target": "user_284",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-13 18:00"
      },
      {
        "source": "user_101",
        "target": "user_113",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-13 18:00"
      },
      {
        "source": "user_031",
        "target": "user_149",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-13 19:00"
      },
      {
        "source": "user_032",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-13 19:00"
      },
      {
        "source": "user_153",
        "target": "user_262",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-13 20:00"
      },
      {
        "source": "user_163",
        "target": "user_013",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 20:00"
      },
      {
        "source": "user_218",
        "target": "user_164",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-13 20:00"
      },
      {
        "source": "user_170",
        "target": "user_053",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 21:00"
      },
      {
        "source": "user_125",
        "target": "user_242",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-13 21:00"
      },
      {
        "source": "user_097",
        "target": "user_298",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-13 21:00"
      },
      {
        "source": "user_165",
        "target": "user_037",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-13 22:00"
      },
      {
        "source": "user_064",
        "target": "user_118",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-14 00:00"
      },
      {
        "source": "user_081",
        "target": "user_153",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 00:00"
      },
      {
        "source": "user_138",
        "target": "user_188",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 02:00"
      },
      {
        "source": "user_125",
        "target": "user_208",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-14 02:00"
      },
      {
        "source": "user_116",
        "target": "user_262",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-14 04:00"
      },
      {
        "source": "user_030",
        "target": "user_043",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-14 06:00"
      },
      {
        "source": "user_114",
        "target": "user_181",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-14 06:00"
      },
      {
        "source": "user_033",
        "target": "user_187",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-14 07:00"
      },
      {
        "source": "user_006",
        "target": "user_053",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 08:00"
      },
      {
        "source": "user_143",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 08:00"
      },
      {
        "source": "user_108",
        "target": "user_195",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-14 09:00"
      },
      {
        "source": "user_113",
        "target": "user_186",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-14 09:00"
      },
      {
        "source": "user_297",
        "target": "user_237",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 09:00"
      },
      {
        "source": "user_125",
        "target": "user_012",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-14 10:00"
      },
      {
        "source": "user_125",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 11:00"
      },
      {
        "source": "user_093",
        "target": "user_163",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 12:00"
      },
      {
        "source": "user_218",
        "target": "user_056",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 13:00"
      },
      {
        "source": "user_179",
        "target": "user_256",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-14 16:00"
      },
      {
        "source": "user_063",
        "target": "user_179",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-14 16:00"
      },
      {
        "source": "user_256",
        "target": "user_190",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 17:00"
      },
      {
        "source": "user_105",
        "target": "user_278",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 17:00"
      },
      {
        "source": "user_028",
        "target": "user_098",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-14 18:00"
      },
      {
        "source": "user_092",
        "target": "user_083",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 18:00"
      },
      {
        "source": "user_167",
        "target": "user_054",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-14 20:00"
      },
      {
        "source": "user_007",
        "target": "user_015",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-14 21:00"
      },
      {
        "source": "user_280",
        "target": "user_244",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-14 21:00"
      },
      {
        "source": "user_282",
        "target": "user_090",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 22:00"
      },
      {
        "source": "user_002",
        "target": "user_292",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-14 22:00"
      },
      {
        "source": "user_214",
        "target": "user_162",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 23:00"
      },
      {
        "source": "user_105",
        "target": "user_059",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 23:00"
      },
      {
        "source": "user_033",
        "target": "user_263",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-14 23:00"
      },
      {
        "source": "user_247",
        "target": "user_191",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 23:00"
      },
      {
        "source": "user_104",
        "target": "user_289",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-14 23:00"
      },
      {
        "source": "user_058",
        "target": "user_156",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-15 00:00"
      },
      {
        "source": "user_190",
        "target": "user_000",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-15 00:00"
      },
      {
        "source": "user_066",
        "target": "user_118",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-15 02:00"
      },
      {
        "source": "user_031",
        "target": "user_109",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 03:00"
      },
      {
        "source": "user_108",
        "target": "user_110",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-15 03:00"
      },
      {
        "source": "user_076",
        "target": "user_037",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-15 03:00"
      },
      {
        "source": "user_015",
        "target": "user_097",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-15 04:00"
      },
      {
        "source": "user_000",
        "target": "user_164",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 04:00"
      },
      {
        "source": "user_113",
        "target": "user_276",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 04:00"
      },
      {
        "source": "user_121",
        "target": "user_194",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 04:00"
      },
      {
        "source": "user_064",
        "target": "user_083",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-15 04:00"
      },
      {
        "source": "user_173",
        "target": "user_260",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 05:00"
      },
      {
        "source": "user_201",
        "target": "user_033",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 05:00"
      },
      {
        "source": "user_142",
        "target": "user_269",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 06:00"
      },
      {
        "source": "user_237",
        "target": "user_098",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-15 06:00"
      },
      {
        "source": "user_001",
        "target": "user_136",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-15 06:00"
      },
      {
        "source": "user_195",
        "target": "user_217",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 08:00"
      },
      {
        "source": "user_237",
        "target": "user_030",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-15 08:00"
      },
      {
        "source": "user_125",
        "target": "user_174",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-15 10:00"
      },
      {
        "source": "user_256",
        "target": "user_114",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 11:00"
      },
      {
        "source": "user_206",
        "target": "user_164",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 12:00"
      },
      {
        "source": "user_015",
        "target": "user_183",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-15 12:00"
      },
      {
        "source": "user_105",
        "target": "user_057",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 13:00"
      },
      {
        "source": "user_113",
        "target": "user_035",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 14:00"
      },
      {
        "source": "user_272",
        "target": "user_014",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 16:00"
      },
      {
        "source": "user_238",
        "target": "user_222",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-15 17:00"
      },
      {
        "source": "user_125",
        "target": "user_286",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-15 18:00"
      },
      {
        "source": "user_070",
        "target": "user_053",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-15 18:00"
      },
      {
        "source": "user_157",
        "target": "user_075",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-15 21:00"
      },
      {
        "source": "user_254",
        "target": "user_069",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-15 21:00"
      },
      {
        "source": "user_184",
        "target": "user_231",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-15 21:00"
      },
      {
        "source": "user_113",
        "target": "user_210",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-15 21:00"
      },
      {
        "source": "user_113",
        "target": "user_273",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-15 22:00"
      },
      {
        "source": "user_038",
        "target": "user_183",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-15 23:00"
      },
      {
        "source": "user_013",
        "target": "user_085",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-16 00:00"
      },
      {
        "source": "user_155",
        "target": "user_188",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 00:00"
      },
      {
        "source": "user_229",
        "target": "user_140",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 00:00"
      },
      {
        "source": "user_289",
        "target": "user_081",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-16 00:00"
      },
      {
        "source": "user_066",
        "target": "user_042",
        "weight": 3,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 01:00"
      },
      {
        "source": "user_164",
        "target": "user_206",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 01:00"
      },
      {
        "source": "user_299",
        "target": "user_233",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 02:00"
      },
      {
        "source": "user_058",
        "target": "user_042",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 02:00"
      },
      {
        "source": "user_198",
        "target": "user_005",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 02:00"
      },
      {
        "source": "user_125",
        "target": "user_212",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 03:00"
      },
      {
        "source": "user_125",
        "target": "user_005",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-16 03:00"
      },
      {
        "source": "user_050",
        "target": "user_015",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 04:00"
      },
      {
        "source": "user_015",
        "target": "user_139",
        "weight": 3,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 04:00"
      },
      {
        "source": "user_167",
        "target": "user_036",
        "weight": 3,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 04:00"
      },
      {
        "source": "user_167",
        "target": "user_277",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 04:00"
      },
      {
        "source": "user_176",
        "target": "user_072",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 05:00"
      },
      {
        "source": "user_138",
        "target": "user_125",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 05:00"
      },
      {
        "source": "user_292",
        "target": "user_054",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 06:00"
      },
      {
        "source": "user_212",
        "target": "user_195",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 06:00"
      },
      {
        "source": "user_206",
        "target": "user_252",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 06:00"
      },
      {
        "source": "user_024",
        "target": "user_241",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 08:00"
      },
      {
        "source": "user_282",
        "target": "user_141",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 08:00"
      },
      {
        "source": "user_030",
        "target": "user_224",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 08:00"
      },
      {
        "source": "user_188",
        "target": "user_214",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-16 09:00"
      },
      {
        "source": "user_076",
        "target": "user_069",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-16 09:00"
      },
      {
        "source": "user_186",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 09:00"
      },
      {
        "source": "user_187",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 12:00"
      },
      {
        "source": "user_066",
        "target": "user_038",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 12:00"
      },
      {
        "source": "user_277",
        "target": "user_247",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 12:00"
      },
      {
        "source": "user_141",
        "target": "user_220",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 13:00"
      },
      {
        "source": "user_259",
        "target": "user_050",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 14:00"
      },
      {
        "source": "user_065",
        "target": "user_279",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 14:00"
      },
      {
        "source": "user_093",
        "target": "user_110",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 15:00"
      },
      {
        "source": "user_097",
        "target": "user_026",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-16 15:00"
      },
      {
        "source": "user_113",
        "target": "user_046",
        "weight": 6,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 17:00"
      },
      {
        "source": "user_058",
        "target": "user_200",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 17:00"
      },
      {
        "source": "user_262",
        "target": "user_091",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-16 17:00"
      },
      {
        "source": "user_131",
        "target": "user_060",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-16 18:00"
      },
      {
        "source": "user_222",
        "target": "user_171",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-16 18:00"
      },
      {
        "source": "user_098",
        "target": "user_028",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-16 19:00"
      },
      {
        "source": "user_238",
        "target": "user_078",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 19:00"
      },
      {
        "source": "user_002",
        "target": "user_213",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 19:00"
      },
      {
        "source": "user_066",
        "target": "user_205",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 19:00"
      },
      {
        "source": "user_054",
        "target": "user_138",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 20:00"
      },
      {
        "source": "user_113",
        "target": "user_246",
        "weight": 3,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 20:00"
      },
      {
        "source": "user_058",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 21:00"
      },
      {
        "source": "user_269",
        "target": "user_024",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 22:00"
      },
      {
        "source": "user_139",
        "target": "user_177",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-16 22:00"
      },
      {
        "source": "user_149",
        "target": "user_287",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-16 22:00"
      },
      {
        "source": "user_066",
        "target": "user_018",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-16 23:00"
      },
      {
        "source": "user_089",
        "target": "user_038",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-16 23:00"
      },
      {
        "source": "user_102",
        "target": "user_184",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 01:00"
      },
      {
        "source": "user_068",
        "target": "user_294",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-17 01:00"
      },
      {
        "source": "user_033",
        "target": "user_038",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 04:00"
      },
      {
        "source": "user_113",
        "target": "user_024",
        "weight": 3,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 05:00"
      },
      {
        "source": "user_167",
        "target": "user_228",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-17 05:00"
      },
      {
        "source": "user_000",
        "target": "user_079",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 06:00"
      },
      {
        "source": "user_242",
        "target": "user_271",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-17 07:00"
      },
      {
        "source": "user_120",
        "target": "user_179",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 08:00"
      },
      {
        "source": "user_254",
        "target": "user_038",
        "weight": 2,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 08:00"
      },
      {
        "source": "user_123",
        "target": "user_293",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 08:00"
      },
      {
        "source": "user_228",
        "target": "user_258",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-17 10:00"
      },
      {
        "source": "user_286",
        "target": "user_154",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 10:00"
      },
      {
        "source": "user_201",
        "target": "user_243",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 10:00"
      },
      {
        "source": "user_009",
        "target": "user_149",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-17 10:00"
      },
      {
        "source": "user_280",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-17 11:00"
      },
      {
        "source": "user_033",
        "target": "user_223",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-17 12:00"
      },
      {
        "source": "user_205",
        "target": "user_156",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-17 13:00"
      },
      {
        "source": "user_214",
        "target": "user_005",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-17 14:00"
      },
      {
        "source": "user_224",
        "target": "user_073",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 14:00"
      },
      {
        "source": "user_109",
        "target": "user_287",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 15:00"
      },
      {
        "source": "user_154",
        "target": "user_148",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 17:00"
      },
      {
        "source": "user_258",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-17 17:00"
      },
      {
        "source": "user_078",
        "target": "user_108",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 19:00"
      },
      {
        "source": "user_211",
        "target": "user_081",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-17 20:00"
      },
      {
        "source": "user_236",
        "target": "user_073",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 20:00"
      },
      {
        "source": "user_015",
        "target": "user_200",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-17 21:00"
      },
      {
        "source": "user_266",
        "target": "user_203",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 21:00"
      },
      {
        "source": "user_295",
        "target": "user_200",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 22:00"
      },
      {
        "source": "user_113",
        "target": "user_165",
        "weight": 5,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-17 22:00"
      },
      {
        "source": "user_143",
        "target": "user_085",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-17 22:00"
      },
      {
        "source": "user_111",
        "target": "user_266",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-17 22:00"
      },
      {
        "source": "user_015",
        "target": "user_144",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-17 22:00"
      },
      {
        "source": "user_089",
        "target": "user_121",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-17 23:00"
      },
      {
        "source": "user_056",
        "target": "user_101",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-17 23:00"
      },
      {
        "source": "user_175",
        "target": "user_280",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-17 23:00"
      },
      {
        "source": "user_200",
        "target": "user_042",
        "weight": 2,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 00:00"
      },
      {
        "source": "user_000",
        "target": "user_255",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-18 01:00"
      },
      {
        "source": "user_040",
        "target": "user_283",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 01:00"
      },
      {
        "source": "user_099",
        "target": "user_252",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 01:00"
      },
      {
        "source": "user_167",
        "target": "user_233",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-18 02:00"
      },
      {
        "source": "user_285",
        "target": "user_042",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-18 02:00"
      },
      {
        "source": "user_176",
        "target": "user_021",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 03:00"
      },
      {
        "source": "user_120",
        "target": "user_010",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-18 04:00"
      },
      {
        "source": "user_176",
        "target": "user_155",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 05:00"
      },
      {
        "source": "user_176",
        "target": "user_127",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 05:00"
      },
      {
        "source": "user_248",
        "target": "user_120",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 05:00"
      },
      {
        "source": "user_255",
        "target": "user_151",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-18 05:00"
      },
      {
        "source": "user_122",
        "target": "user_100",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-18 07:00"
      },
      {
        "source": "user_134",
        "target": "user_142",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 07:00"
      },
      {
        "source": "user_066",
        "target": "user_228",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 09:00"
      },
      {
        "source": "user_088",
        "target": "user_278",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 09:00"
      },
      {
        "source": "user_097",
        "target": "user_067",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 10:00"
      },
      {
        "source": "user_114",
        "target": "user_145",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 11:00"
      },
      {
        "source": "user_170",
        "target": "user_120",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-18 11:00"
      },
      {
        "source": "user_113",
        "target": "user_065",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 15:00"
      },
      {
        "source": "user_293",
        "target": "user_158",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 17:00"
      },
      {
        "source": "user_036",
        "target": "user_055",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 17:00"
      },
      {
        "source": "user_094",
        "target": "user_079",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 18:00"
      },
      {
        "source": "user_166",
        "target": "user_234",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 20:00"
      },
      {
        "source": "user_115",
        "target": "user_268",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-18 20:00"
      },
      {
        "source": "user_232",
        "target": "user_052",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 20:00"
      },
      {
        "source": "user_238",
        "target": "user_061",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 20:00"
      },
      {
        "source": "user_192",
        "target": "user_078",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 20:00"
      },
      {
        "source": "user_066",
        "target": "user_083",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 21:00"
      },
      {
        "source": "user_011",
        "target": "user_188",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 22:00"
      },
      {
        "source": "user_280",
        "target": "user_188",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 22:00"
      },
      {
        "source": "user_297",
        "target": "user_110",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 22:00"
      },
      {
        "source": "user_120",
        "target": "user_130",
        "weight": 3,
        "interaction_type": "invite",
        "timestamp": "2026-01-18 23:00"
      },
      {
        "source": "user_010",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-18 23:00"
      },
      {
        "source": "user_230",
        "target": "user_255",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 00:00"
      },
      {
        "source": "user_295",
        "target": "user_169",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 00:00"
      },
      {
        "source": "user_167",
        "target": "user_229",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 01:00"
      },
      {
        "source": "user_202",
        "target": "user_144",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 01:00"
      },
      {
        "source": "user_167",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 02:00"
      },
      {
        "source": "user_081",
        "target": "user_017",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 03:00"
      },
      {
        "source": "user_013",
        "target": "user_033",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 03:00"
      },
      {
        "source": "user_017",
        "target": "user_100",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 04:00"
      },
      {
        "source": "user_023",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 04:00"
      },
      {
        "source": "user_149",
        "target": "user_057",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 04:00"
      },
      {
        "source": "user_131",
        "target": "user_073",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 05:00"
      },
      {
        "source": "user_066",
        "target": "user_194",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 06:00"
      },
      {
        "source": "user_190",
        "target": "user_193",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 07:00"
      },
      {
        "source": "user_122",
        "target": "user_196",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 07:00"
      },
      {
        "source": "user_197",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 07:00"
      },
      {
        "source": "user_081",
        "target": "user_270",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 07:00"
      },
      {
        "source": "user_135",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 09:00"
      },
      {
        "source": "user_099",
        "target": "user_076",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 09:00"
      },
      {
        "source": "user_086",
        "target": "user_205",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 10:00"
      },
      {
        "source": "user_113",
        "target": "user_269",
        "weight": 6,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 11:00"
      },
      {
        "source": "user_116",
        "target": "user_182",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 11:00"
      },
      {
        "source": "user_067",
        "target": "user_166",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 11:00"
      },
      {
        "source": "user_256",
        "target": "user_106",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 11:00"
      },
      {
        "source": "user_199",
        "target": "user_010",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 12:00"
      },
      {
        "source": "user_113",
        "target": "user_079",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 13:00"
      },
      {
        "source": "user_180",
        "target": "user_120",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 14:00"
      },
      {
        "source": "user_073",
        "target": "user_226",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 14:00"
      },
      {
        "source": "user_038",
        "target": "user_155",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 14:00"
      },
      {
        "source": "user_133",
        "target": "user_232",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 14:00"
      },
      {
        "source": "user_003",
        "target": "user_193",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 15:00"
      },
      {
        "source": "user_045",
        "target": "user_240",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 16:00"
      },
      {
        "source": "user_070",
        "target": "user_062",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 17:00"
      },
      {
        "source": "user_114",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 17:00"
      },
      {
        "source": "user_066",
        "target": "user_104",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 18:00"
      },
      {
        "source": "user_100",
        "target": "user_280",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 19:00"
      },
      {
        "source": "user_265",
        "target": "user_293",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 19:00"
      },
      {
        "source": "user_066",
        "target": "user_289",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 20:00"
      },
      {
        "source": "user_038",
        "target": "user_139",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 20:00"
      },
      {
        "source": "user_118",
        "target": "user_169",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 20:00"
      },
      {
        "source": "user_111",
        "target": "user_013",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 20:00"
      },
      {
        "source": "user_056",
        "target": "user_134",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 21:00"
      },
      {
        "source": "user_201",
        "target": "user_259",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 21:00"
      },
      {
        "source": "user_253",
        "target": "user_136",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-19 21:00"
      },
      {
        "source": "user_076",
        "target": "user_269",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 21:00"
      },
      {
        "source": "user_057",
        "target": "user_051",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 22:00"
      },
      {
        "source": "user_200",
        "target": "user_171",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 22:00"
      },
      {
        "source": "user_217",
        "target": "user_203",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 22:00"
      },
      {
        "source": "user_066",
        "target": "user_279",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 23:00"
      },
      {
        "source": "user_119",
        "target": "user_036",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-19 23:00"
      },
      {
        "source": "user_245",
        "target": "user_188",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-19 23:00"
      },
      {
        "source": "user_180",
        "target": "user_270",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-20 01:00"
      },
      {
        "source": "user_226",
        "target": "user_038",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-20 02:00"
      },
      {
        "source": "user_292",
        "target": "user_049",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-20 03:00"
      },
      {
        "source": "user_033",
        "target": "user_183",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-20 03:00"
      },
      {
        "source": "user_075",
        "target": "user_239",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-20 04:00"
      },
      {
        "source": "user_176",
        "target": "user_083",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-20 06:00"
      },
      {
        "source": "user_292",
        "target": "user_280",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-20 06:00"
      },
      {
        "source": "user_199",
        "target": "user_291",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-20 06:00"
      },
      {
        "source": "user_254",
        "target": "user_267",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-20 07:00"
      },
      {
        "source": "user_153",
        "target": "user_135",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-20 09:00"
      },
      {
        "source": "user_105",
        "target": "user_084",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-20 09:00"
      },
      {
        "source": "user_061",
        "target": "user_290",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-20 13:00"
      },
      {
        "source": "user_212",
        "target": "user_184",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-20 14:00"
      },
      {
        "source": "user_063",
        "target": "user_086",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-20 15:00"
      },
      {
        "source": "user_176",
        "target": "user_285",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-20 15:00"
      },
      {
        "source": "user_097",
        "target": "user_078",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-20 15:00"
      },
      {
        "source": "user_074",
        "target": "user_153",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-20 15:00"
      },
      {
        "source": "user_165",
        "target": "user_230",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-20 17:00"
      },
      {
        "source": "user_161",
        "target": "user_247",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-20 20:00"
      },
      {
        "source": "user_113",
        "target": "user_014",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-20 21:00"
      },
      {
        "source": "user_084",
        "target": "user_159",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-20 21:00"
      },
      {
        "source": "user_002",
        "target": "user_200",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-20 21:00"
      },
      {
        "source": "user_299",
        "target": "user_116",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-20 21:00"
      },
      {
        "source": "user_115",
        "target": "user_207",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-20 21:00"
      },
      {
        "source": "user_238",
        "target": "user_291",
        "weight": 2,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-20 22:00"
      },
      {
        "source": "user_254",
        "target": "user_243",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 00:00"
      },
      {
        "source": "user_022",
        "target": "user_084",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 00:00"
      },
      {
        "source": "user_217",
        "target": "user_148",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 00:00"
      },
      {
        "source": "user_282",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 01:00"
      },
      {
        "source": "user_233",
        "target": "user_081",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 02:00"
      },
      {
        "source": "user_157",
        "target": "user_063",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 04:00"
      },
      {
        "source": "user_138",
        "target": "user_154",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 04:00"
      },
      {
        "source": "user_289",
        "target": "user_089",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 04:00"
      },
      {
        "source": "user_031",
        "target": "user_141",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 05:00"
      },
      {
        "source": "user_116",
        "target": "user_217",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 05:00"
      },
      {
        "source": "user_282",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 05:00"
      },
      {
        "source": "user_113",
        "target": "user_009",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 05:00"
      },
      {
        "source": "user_143",
        "target": "user_292",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 06:00"
      },
      {
        "source": "user_063",
        "target": "user_026",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 06:00"
      },
      {
        "source": "user_113",
        "target": "user_150",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 06:00"
      },
      {
        "source": "user_155",
        "target": "user_215",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 07:00"
      },
      {
        "source": "user_209",
        "target": "user_147",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 07:00"
      },
      {
        "source": "user_248",
        "target": "user_069",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 08:00"
      },
      {
        "source": "user_113",
        "target": "user_230",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 08:00"
      },
      {
        "source": "user_179",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 09:00"
      },
      {
        "source": "user_124",
        "target": "user_065",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 09:00"
      },
      {
        "source": "user_238",
        "target": "user_242",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 10:00"
      },
      {
        "source": "user_167",
        "target": "user_262",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 14:00"
      },
      {
        "source": "user_086",
        "target": "user_117",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 15:00"
      },
      {
        "source": "user_274",
        "target": "user_073",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 16:00"
      },
      {
        "source": "user_236",
        "target": "user_161",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 16:00"
      },
      {
        "source": "user_293",
        "target": "user_125",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 17:00"
      },
      {
        "source": "user_189",
        "target": "user_085",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 17:00"
      },
      {
        "source": "user_123",
        "target": "user_155",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 17:00"
      },
      {
        "source": "user_113",
        "target": "user_099",
        "weight": 5,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 18:00"
      },
      {
        "source": "user_287",
        "target": "user_114",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 18:00"
      },
      {
        "source": "user_097",
        "target": "user_106",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 19:00"
      },
      {
        "source": "user_160",
        "target": "user_090",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 19:00"
      },
      {
        "source": "user_000",
        "target": "user_150",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 19:00"
      },
      {
        "source": "user_285",
        "target": "user_289",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 20:00"
      },
      {
        "source": "user_286",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 20:00"
      },
      {
        "source": "user_109",
        "target": "user_132",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 20:00"
      },
      {
        "source": "user_217",
        "target": "user_102",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 20:00"
      },
      {
        "source": "user_113",
        "target": "user_219",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 21:00"
      },
      {
        "source": "user_125",
        "target": "user_195",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 21:00"
      },
      {
        "source": "user_125",
        "target": "user_123",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 22:00"
      },
      {
        "source": "user_151",
        "target": "user_079",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 22:00"
      },
      {
        "source": "user_117",
        "target": "user_006",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 23:00"
      },
      {
        "source": "user_169",
        "target": "user_058",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 23:00"
      },
      {
        "source": "user_250",
        "target": "user_162",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-21 23:00"
      },
      {
        "source": "user_258",
        "target": "user_295",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-21 23:00"
      },
      {
        "source": "user_019",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-21 23:00"
      },
      {
        "source": "user_078",
        "target": "user_157",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-22 01:00"
      },
      {
        "source": "user_106",
        "target": "user_233",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-22 04:00"
      },
      {
        "source": "user_178",
        "target": "user_150",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-22 04:00"
      },
      {
        "source": "user_066",
        "target": "user_287",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-22 06:00"
      },
      {
        "source": "user_297",
        "target": "user_093",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-22 07:00"
      },
      {
        "source": "user_134",
        "target": "user_035",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-22 07:00"
      },
      {
        "source": "user_113",
        "target": "user_255",
        "weight": 6,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-22 07:00"
      },
      {
        "source": "user_107",
        "target": "user_164",
        "weight": 2,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-22 09:00"
      },
      {
        "source": "user_096",
        "target": "user_261",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-22 09:00"
      },
      {
        "source": "user_270",
        "target": "user_271",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-22 09:00"
      },
      {
        "source": "user_221",
        "target": "user_183",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-22 11:00"
      },
      {
        "source": "user_090",
        "target": "user_051",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-22 12:00"
      },
      {
        "source": "user_113",
        "target": "user_128",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-22 13:00"
      },
      {
        "source": "user_238",
        "target": "user_086",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-22 15:00"
      },
      {
        "source": "user_113",
        "target": "user_203",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-22 15:00"
      },
      {
        "source": "user_198",
        "target": "user_162",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-22 15:00"
      },
      {
        "source": "user_200",
        "target": "user_124",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-22 15:00"
      },
      {
        "source": "user_217",
        "target": "user_196",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-22 16:00"
      },
      {
        "source": "user_019",
        "target": "user_020",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-22 16:00"
      },
      {
        "source": "user_262",
        "target": "user_047",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-22 16:00"
      },
      {
        "source": "user_022",
        "target": "user_057",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-22 17:00"
      },
      {
        "source": "user_175",
        "target": "user_022",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-22 17:00"
      },
      {
        "source": "user_001",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-22 18:00"
      },
      {
        "source": "user_114",
        "target": "user_156",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-22 18:00"
      },
      {
        "source": "user_218",
        "target": "user_035",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-22 19:00"
      },
      {
        "source": "user_113",
        "target": "user_076",
        "weight": 3,
        "interaction_type": "referral",
        "timestamp": "2026-01-22 20:00"
      },
      {
        "source": "user_007",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 00:00"
      },
      {
        "source": "user_289",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-23 00:00"
      },
      {
        "source": "user_084",
        "target": "user_234",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 00:00"
      },
      {
        "source": "user_118",
        "target": "user_189",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 00:00"
      },
      {
        "source": "user_125",
        "target": "user_061",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-23 02:00"
      },
      {
        "source": "user_117",
        "target": "user_062",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-23 04:00"
      },
      {
        "source": "user_265",
        "target": "user_048",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-23 04:00"
      },
      {
        "source": "user_200",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-23 04:00"
      },
      {
        "source": "user_116",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-23 04:00"
      },
      {
        "source": "user_165",
        "target": "user_269",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-23 05:00"
      },
      {
        "source": "user_295",
        "target": "user_124",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 06:00"
      },
      {
        "source": "user_238",
        "target": "user_207",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 06:00"
      },
      {
        "source": "user_212",
        "target": "user_196",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-23 09:00"
      },
      {
        "source": "user_176",
        "target": "user_139",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 10:00"
      },
      {
        "source": "user_298",
        "target": "user_264",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 12:00"
      },
      {
        "source": "user_079",
        "target": "user_008",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-23 12:00"
      },
      {
        "source": "user_113",
        "target": "user_101",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-23 12:00"
      },
      {
        "source": "user_249",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-23 13:00"
      },
      {
        "source": "user_098",
        "target": "user_237",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 13:00"
      },
      {
        "source": "user_199",
        "target": "user_120",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-23 14:00"
      },
      {
        "source": "user_284",
        "target": "user_100",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 14:00"
      },
      {
        "source": "user_213",
        "target": "user_238",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 14:00"
      },
      {
        "source": "user_081",
        "target": "user_233",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 15:00"
      },
      {
        "source": "user_099",
        "target": "user_178",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 15:00"
      },
      {
        "source": "user_123",
        "target": "user_138",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-23 16:00"
      },
      {
        "source": "user_262",
        "target": "user_036",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-23 17:00"
      },
      {
        "source": "user_238",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 19:00"
      },
      {
        "source": "user_015",
        "target": "user_113",
        "weight": 2,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-23 20:00"
      },
      {
        "source": "user_097",
        "target": "user_070",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-23 20:00"
      },
      {
        "source": "user_204",
        "target": "user_282",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 21:00"
      },
      {
        "source": "user_219",
        "target": "user_112",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-23 22:00"
      },
      {
        "source": "user_159",
        "target": "user_279",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 00:00"
      },
      {
        "source": "user_165",
        "target": "user_154",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 00:00"
      },
      {
        "source": "user_207",
        "target": "user_087",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 00:00"
      },
      {
        "source": "user_190",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 00:00"
      },
      {
        "source": "user_200",
        "target": "user_189",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 01:00"
      },
      {
        "source": "user_289",
        "target": "user_181",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 02:00"
      },
      {
        "source": "user_289",
        "target": "user_058",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 02:00"
      },
      {
        "source": "user_069",
        "target": "user_099",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 03:00"
      },
      {
        "source": "user_217",
        "target": "user_250",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 04:00"
      },
      {
        "source": "user_289",
        "target": "user_203",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 05:00"
      },
      {
        "source": "user_284",
        "target": "user_008",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 05:00"
      },
      {
        "source": "user_269",
        "target": "user_107",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 05:00"
      },
      {
        "source": "user_202",
        "target": "user_221",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 05:00"
      },
      {
        "source": "user_289",
        "target": "user_258",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 06:00"
      },
      {
        "source": "user_097",
        "target": "user_010",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 06:00"
      },
      {
        "source": "user_031",
        "target": "user_122",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 07:00"
      },
      {
        "source": "user_207",
        "target": "user_258",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 08:00"
      },
      {
        "source": "user_238",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 08:00"
      },
      {
        "source": "user_155",
        "target": "user_089",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 08:00"
      },
      {
        "source": "user_125",
        "target": "user_039",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 10:00"
      },
      {
        "source": "user_117",
        "target": "user_245",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 11:00"
      },
      {
        "source": "user_275",
        "target": "user_184",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 11:00"
      },
      {
        "source": "user_141",
        "target": "user_041",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 11:00"
      },
      {
        "source": "user_080",
        "target": "user_107",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 11:00"
      },
      {
        "source": "user_010",
        "target": "user_200",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 12:00"
      },
      {
        "source": "user_270",
        "target": "user_168",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 13:00"
      },
      {
        "source": "user_132",
        "target": "user_090",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 14:00"
      },
      {
        "source": "user_107",
        "target": "user_248",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 14:00"
      },
      {
        "source": "user_070",
        "target": "user_270",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-24 17:00"
      },
      {
        "source": "user_218",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 17:00"
      },
      {
        "source": "user_119",
        "target": "user_213",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 19:00"
      },
      {
        "source": "user_297",
        "target": "user_045",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 19:00"
      },
      {
        "source": "user_113",
        "target": "user_060",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 19:00"
      },
      {
        "source": "user_238",
        "target": "user_298",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 19:00"
      },
      {
        "source": "user_248",
        "target": "user_000",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 19:00"
      },
      {
        "source": "user_238",
        "target": "user_063",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 19:00"
      },
      {
        "source": "user_149",
        "target": "user_267",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 19:00"
      },
      {
        "source": "user_053",
        "target": "user_212",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 20:00"
      },
      {
        "source": "user_217",
        "target": "user_265",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 20:00"
      },
      {
        "source": "user_202",
        "target": "user_239",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 21:00"
      },
      {
        "source": "user_106",
        "target": "user_169",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 21:00"
      },
      {
        "source": "user_139",
        "target": "user_207",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 21:00"
      },
      {
        "source": "user_099",
        "target": "user_094",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 22:00"
      },
      {
        "source": "user_038",
        "target": "user_115",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-24 22:00"
      },
      {
        "source": "user_031",
        "target": "user_254",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-24 23:00"
      },
      {
        "source": "user_212",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-25 02:00"
      },
      {
        "source": "user_040",
        "target": "user_096",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 03:00"
      },
      {
        "source": "user_194",
        "target": "user_145",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 03:00"
      },
      {
        "source": "user_115",
        "target": "user_085",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-25 03:00"
      },
      {
        "source": "user_132",
        "target": "user_091",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 03:00"
      },
      {
        "source": "user_291",
        "target": "user_222",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 04:00"
      },
      {
        "source": "user_165",
        "target": "user_214",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-25 04:00"
      },
      {
        "source": "user_185",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 05:00"
      },
      {
        "source": "user_238",
        "target": "user_270",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-25 05:00"
      },
      {
        "source": "user_073",
        "target": "user_087",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 06:00"
      },
      {
        "source": "user_135",
        "target": "user_074",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 06:00"
      },
      {
        "source": "user_107",
        "target": "user_255",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 07:00"
      },
      {
        "source": "user_215",
        "target": "user_195",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 07:00"
      },
      {
        "source": "user_177",
        "target": "user_095",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 08:00"
      },
      {
        "source": "user_004",
        "target": "user_263",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-25 09:00"
      },
      {
        "source": "user_107",
        "target": "user_296",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 09:00"
      },
      {
        "source": "user_218",
        "target": "user_113",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 10:00"
      },
      {
        "source": "user_183",
        "target": "user_133",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 10:00"
      },
      {
        "source": "user_137",
        "target": "user_236",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 11:00"
      },
      {
        "source": "user_031",
        "target": "user_059",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 11:00"
      },
      {
        "source": "user_066",
        "target": "user_121",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-25 11:00"
      },
      {
        "source": "user_051",
        "target": "user_022",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 12:00"
      },
      {
        "source": "user_159",
        "target": "user_018",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 12:00"
      },
      {
        "source": "user_123",
        "target": "user_179",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 13:00"
      },
      {
        "source": "user_253",
        "target": "user_009",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 13:00"
      },
      {
        "source": "user_192",
        "target": "user_271",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 15:00"
      },
      {
        "source": "user_288",
        "target": "user_200",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 16:00"
      },
      {
        "source": "user_102",
        "target": "user_162",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 16:00"
      },
      {
        "source": "user_219",
        "target": "user_123",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-25 17:00"
      },
      {
        "source": "user_048",
        "target": "user_222",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-25 17:00"
      },
      {
        "source": "user_073",
        "target": "user_121",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 18:00"
      },
      {
        "source": "user_037",
        "target": "user_296",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 19:00"
      },
      {
        "source": "user_077",
        "target": "user_174",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 21:00"
      },
      {
        "source": "user_238",
        "target": "user_130",
        "weight": 2,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-25 21:00"
      },
      {
        "source": "user_272",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-25 21:00"
      },
      {
        "source": "user_175",
        "target": "user_090",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-25 23:00"
      },
      {
        "source": "user_228",
        "target": "user_090",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-26 00:00"
      },
      {
        "source": "user_098",
        "target": "user_238",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 00:00"
      },
      {
        "source": "user_189",
        "target": "user_042",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 00:00"
      },
      {
        "source": "user_113",
        "target": "user_293",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 01:00"
      },
      {
        "source": "user_045",
        "target": "user_040",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-26 01:00"
      },
      {
        "source": "user_093",
        "target": "user_209",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 02:00"
      },
      {
        "source": "user_101",
        "target": "user_080",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-26 03:00"
      },
      {
        "source": "user_097",
        "target": "user_062",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-26 03:00"
      },
      {
        "source": "user_176",
        "target": "user_064",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 04:00"
      },
      {
        "source": "user_132",
        "target": "user_155",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 04:00"
      },
      {
        "source": "user_037",
        "target": "user_115",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-26 04:00"
      },
      {
        "source": "user_266",
        "target": "user_148",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-26 04:00"
      },
      {
        "source": "user_192",
        "target": "user_277",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-26 05:00"
      },
      {
        "source": "user_234",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-26 05:00"
      },
      {
        "source": "user_262",
        "target": "user_125",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-26 05:00"
      },
      {
        "source": "user_066",
        "target": "user_258",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 07:00"
      },
      {
        "source": "user_236",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 08:00"
      },
      {
        "source": "user_113",
        "target": "user_072",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-26 09:00"
      },
      {
        "source": "user_065",
        "target": "user_104",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-26 09:00"
      },
      {
        "source": "user_202",
        "target": "user_115",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-26 10:00"
      },
      {
        "source": "user_015",
        "target": "user_282",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 10:00"
      },
      {
        "source": "user_016",
        "target": "user_110",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-26 14:00"
      },
      {
        "source": "user_048",
        "target": "user_203",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-26 15:00"
      },
      {
        "source": "user_079",
        "target": "user_024",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-26 15:00"
      },
      {
        "source": "user_154",
        "target": "user_266",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-26 16:00"
      },
      {
        "source": "user_229",
        "target": "user_032",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 19:00"
      },
      {
        "source": "user_293",
        "target": "user_077",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 20:00"
      },
      {
        "source": "user_123",
        "target": "user_030",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-26 20:00"
      },
      {
        "source": "user_238",
        "target": "user_027",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 21:00"
      },
      {
        "source": "user_185",
        "target": "user_071",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-26 22:00"
      },
      {
        "source": "user_126",
        "target": "user_113",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-26 23:00"
      },
      {
        "source": "user_003",
        "target": "user_098",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 00:00"
      },
      {
        "source": "user_251",
        "target": "user_272",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-27 00:00"
      },
      {
        "source": "user_066",
        "target": "user_189",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-27 00:00"
      },
      {
        "source": "user_042",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 00:00"
      },
      {
        "source": "user_179",
        "target": "user_271",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-27 01:00"
      },
      {
        "source": "user_238",
        "target": "user_113",
        "weight": 3,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 01:00"
      },
      {
        "source": "user_069",
        "target": "user_165",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 01:00"
      },
      {
        "source": "user_250",
        "target": "user_111",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-27 01:00"
      },
      {
        "source": "user_200",
        "target": "user_250",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 02:00"
      },
      {
        "source": "user_105",
        "target": "user_109",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 02:00"
      },
      {
        "source": "user_218",
        "target": "user_142",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-27 03:00"
      },
      {
        "source": "user_158",
        "target": "user_048",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 04:00"
      },
      {
        "source": "user_001",
        "target": "user_291",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-27 06:00"
      },
      {
        "source": "user_132",
        "target": "user_197",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 06:00"
      },
      {
        "source": "user_014",
        "target": "user_241",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-27 06:00"
      },
      {
        "source": "user_167",
        "target": "user_226",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-27 06:00"
      },
      {
        "source": "user_042",
        "target": "user_152",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-27 08:00"
      },
      {
        "source": "user_189",
        "target": "user_083",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 09:00"
      },
      {
        "source": "user_210",
        "target": "user_244",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-27 09:00"
      },
      {
        "source": "user_113",
        "target": "user_298",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 11:00"
      },
      {
        "source": "user_266",
        "target": "user_125",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-27 11:00"
      },
      {
        "source": "user_073",
        "target": "user_153",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 12:00"
      },
      {
        "source": "user_114",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-27 12:00"
      },
      {
        "source": "user_280",
        "target": "user_253",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-27 13:00"
      },
      {
        "source": "user_089",
        "target": "user_279",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 13:00"
      },
      {
        "source": "user_144",
        "target": "user_117",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 15:00"
      },
      {
        "source": "user_097",
        "target": "user_220",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-27 15:00"
      },
      {
        "source": "user_262",
        "target": "user_227",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-27 16:00"
      },
      {
        "source": "user_291",
        "target": "user_192",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-27 16:00"
      },
      {
        "source": "user_097",
        "target": "user_086",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 17:00"
      },
      {
        "source": "user_224",
        "target": "user_238",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-27 18:00"
      },
      {
        "source": "user_236",
        "target": "user_036",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-27 18:00"
      },
      {
        "source": "user_012",
        "target": "user_184",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-27 18:00"
      },
      {
        "source": "user_109",
        "target": "user_077",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-27 18:00"
      },
      {
        "source": "user_064",
        "target": "user_169",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-27 19:00"
      },
      {
        "source": "user_195",
        "target": "user_111",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-27 20:00"
      },
      {
        "source": "user_124",
        "target": "user_258",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-27 20:00"
      },
      {
        "source": "user_259",
        "target": "user_058",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-27 21:00"
      },
      {
        "source": "user_110",
        "target": "user_034",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-27 22:00"
      },
      {
        "source": "user_246",
        "target": "user_241",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 00:00"
      },
      {
        "source": "user_057",
        "target": "user_249",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-28 01:00"
      },
      {
        "source": "user_120",
        "target": "user_157",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 04:00"
      },
      {
        "source": "user_065",
        "target": "user_118",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-28 05:00"
      },
      {
        "source": "user_180",
        "target": "user_232",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 05:00"
      },
      {
        "source": "user_184",
        "target": "user_198",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-28 05:00"
      },
      {
        "source": "user_031",
        "target": "user_132",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-28 06:00"
      },
      {
        "source": "user_176",
        "target": "user_171",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-28 06:00"
      },
      {
        "source": "user_266",
        "target": "user_265",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-28 08:00"
      },
      {
        "source": "user_027",
        "target": "user_216",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-28 08:00"
      },
      {
        "source": "user_175",
        "target": "user_059",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-28 09:00"
      },
      {
        "source": "user_141",
        "target": "user_179",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 09:00"
      },
      {
        "source": "user_151",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 10:00"
      },
      {
        "source": "user_008",
        "target": "user_143",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 10:00"
      },
      {
        "source": "user_180",
        "target": "user_184",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-28 11:00"
      },
      {
        "source": "user_238",
        "target": "user_103",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-28 11:00"
      },
      {
        "source": "user_075",
        "target": "user_092",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-28 12:00"
      },
      {
        "source": "user_029",
        "target": "user_125",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 13:00"
      },
      {
        "source": "user_110",
        "target": "user_082",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-28 14:00"
      },
      {
        "source": "user_015",
        "target": "user_232",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 14:00"
      },
      {
        "source": "user_270",
        "target": "user_298",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-28 15:00"
      },
      {
        "source": "user_218",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-28 15:00"
      },
      {
        "source": "user_015",
        "target": "user_202",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 15:00"
      },
      {
        "source": "user_116",
        "target": "user_233",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 15:00"
      },
      {
        "source": "user_236",
        "target": "user_126",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-28 16:00"
      },
      {
        "source": "user_082",
        "target": "user_175",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 18:00"
      },
      {
        "source": "user_155",
        "target": "user_125",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-28 19:00"
      },
      {
        "source": "user_070",
        "target": "user_290",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-28 20:00"
      },
      {
        "source": "user_106",
        "target": "user_078",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-28 20:00"
      },
      {
        "source": "user_100",
        "target": "user_166",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-28 20:00"
      },
      {
        "source": "user_031",
        "target": "user_071",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 21:00"
      },
      {
        "source": "user_015",
        "target": "user_095",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-28 22:00"
      },
      {
        "source": "user_051",
        "target": "user_197",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-28 23:00"
      },
      {
        "source": "user_017",
        "target": "user_020",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 01:00"
      },
      {
        "source": "user_236",
        "target": "user_247",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 03:00"
      },
      {
        "source": "user_113",
        "target": "user_178",
        "weight": 3,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 03:00"
      },
      {
        "source": "user_113",
        "target": "user_094",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 03:00"
      },
      {
        "source": "user_015",
        "target": "user_085",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 04:00"
      },
      {
        "source": "user_059",
        "target": "user_249",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 04:00"
      },
      {
        "source": "user_135",
        "target": "user_294",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 05:00"
      },
      {
        "source": "user_114",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-29 05:00"
      },
      {
        "source": "user_115",
        "target": "user_263",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-29 07:00"
      },
      {
        "source": "user_296",
        "target": "user_079",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 08:00"
      },
      {
        "source": "user_280",
        "target": "user_114",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 08:00"
      },
      {
        "source": "user_019",
        "target": "user_017",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 09:00"
      },
      {
        "source": "user_254",
        "target": "user_050",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 10:00"
      },
      {
        "source": "user_086",
        "target": "user_193",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 10:00"
      },
      {
        "source": "user_113",
        "target": "user_252",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-29 11:00"
      },
      {
        "source": "user_097",
        "target": "user_053",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 11:00"
      },
      {
        "source": "user_000",
        "target": "user_210",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 12:00"
      },
      {
        "source": "user_003",
        "target": "user_117",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-29 13:00"
      },
      {
        "source": "user_060",
        "target": "user_164",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 13:00"
      },
      {
        "source": "user_167",
        "target": "user_211",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 14:00"
      },
      {
        "source": "user_055",
        "target": "user_004",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 14:00"
      },
      {
        "source": "user_038",
        "target": "user_268",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 14:00"
      },
      {
        "source": "user_237",
        "target": "user_043",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 15:00"
      },
      {
        "source": "user_291",
        "target": "user_238",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 15:00"
      },
      {
        "source": "user_068",
        "target": "user_074",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-29 16:00"
      },
      {
        "source": "user_139",
        "target": "user_263",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 18:00"
      },
      {
        "source": "user_029",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 18:00"
      },
      {
        "source": "user_231",
        "target": "user_112",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 20:00"
      },
      {
        "source": "user_291",
        "target": "user_172",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 20:00"
      },
      {
        "source": "user_002",
        "target": "user_272",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 21:00"
      },
      {
        "source": "user_165",
        "target": "user_255",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 21:00"
      },
      {
        "source": "user_238",
        "target": "user_193",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 22:00"
      },
      {
        "source": "user_054",
        "target": "user_202",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-29 23:00"
      },
      {
        "source": "user_097",
        "target": "user_190",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 23:00"
      },
      {
        "source": "user_143",
        "target": "user_052",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-29 23:00"
      },
      {
        "source": "user_113",
        "target": "user_142",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-29 23:00"
      },
      {
        "source": "user_105",
        "target": "user_195",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 00:00"
      },
      {
        "source": "user_202",
        "target": "user_005",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 00:00"
      },
      {
        "source": "user_161",
        "target": "user_262",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 00:00"
      },
      {
        "source": "user_004",
        "target": "user_015",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 01:00"
      },
      {
        "source": "user_113",
        "target": "user_057",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 02:00"
      },
      {
        "source": "user_280",
        "target": "user_088",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 02:00"
      },
      {
        "source": "user_200",
        "target": "user_134",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 02:00"
      },
      {
        "source": "user_066",
        "target": "user_153",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 03:00"
      },
      {
        "source": "user_097",
        "target": "user_130",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 04:00"
      },
      {
        "source": "user_281",
        "target": "user_174",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 04:00"
      },
      {
        "source": "user_097",
        "target": "user_030",
        "weight": 2,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 05:00"
      },
      {
        "source": "user_014",
        "target": "user_035",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 05:00"
      },
      {
        "source": "user_250",
        "target": "user_012",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 06:00"
      },
      {
        "source": "user_113",
        "target": "user_032",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 07:00"
      },
      {
        "source": "user_225",
        "target": "user_237",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 07:00"
      },
      {
        "source": "user_204",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 07:00"
      },
      {
        "source": "user_298",
        "target": "user_070",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 07:00"
      },
      {
        "source": "user_198",
        "target": "user_082",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 08:00"
      },
      {
        "source": "user_149",
        "target": "user_100",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 09:00"
      },
      {
        "source": "user_188",
        "target": "user_213",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 09:00"
      },
      {
        "source": "user_125",
        "target": "user_082",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 09:00"
      },
      {
        "source": "user_073",
        "target": "user_161",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 09:00"
      },
      {
        "source": "user_053",
        "target": "user_224",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 10:00"
      },
      {
        "source": "user_003",
        "target": "user_128",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 10:00"
      },
      {
        "source": "user_149",
        "target": "user_001",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 11:00"
      },
      {
        "source": "user_059",
        "target": "user_109",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 11:00"
      },
      {
        "source": "user_257",
        "target": "user_297",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 12:00"
      },
      {
        "source": "user_267",
        "target": "user_280",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 12:00"
      },
      {
        "source": "user_196",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 13:00"
      },
      {
        "source": "user_115",
        "target": "user_235",
        "weight": 2,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 14:00"
      },
      {
        "source": "user_250",
        "target": "user_184",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 15:00"
      },
      {
        "source": "user_291",
        "target": "user_086",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 15:00"
      },
      {
        "source": "user_113",
        "target": "user_104",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 15:00"
      },
      {
        "source": "user_100",
        "target": "user_204",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 15:00"
      },
      {
        "source": "user_083",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 16:00"
      },
      {
        "source": "user_265",
        "target": "user_102",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 18:00"
      },
      {
        "source": "user_265",
        "target": "user_231",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 18:00"
      },
      {
        "source": "user_119",
        "target": "user_044",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 19:00"
      },
      {
        "source": "user_234",
        "target": "user_130",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 19:00"
      },
      {
        "source": "user_115",
        "target": "user_144",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 19:00"
      },
      {
        "source": "user_297",
        "target": "user_174",
        "weight": 1,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 20:00"
      },
      {
        "source": "user_296",
        "target": "user_186",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 20:00"
      },
      {
        "source": "user_124",
        "target": "user_104",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 20:00"
      },
      {
        "source": "user_103",
        "target": "user_078",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 20:00"
      },
      {
        "source": "user_176",
        "target": "user_097",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 20:00"
      },
      {
        "source": "user_012",
        "target": "user_265",
        "weight": 1,
        "interaction_type": "purchase_share",
        "timestamp": "2026-01-30 22:00"
      },
      {
        "source": "user_125",
        "target": "user_155",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 22:00"
      },
      {
        "source": "user_113",
        "target": "user_056",
        "weight": 3,
        "interaction_type": "invite",
        "timestamp": "2026-01-30 23:00"
      },
      {
        "source": "user_164",
        "target": "user_174",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 23:00"
      },
      {
        "source": "user_037",
        "target": "user_133",
        "weight": 1,
        "interaction_type": "referral",
        "timestamp": "2026-01-30 23:00"
      }
    ]
  },
  "social_mentions": {
    "nodes": [
      {
        "user_id": "user_000",
        "community_label": "segment_5",
        "joined": "2025-12-29"
      },
      {
        "user_id": "user_001",
        "community_label": "segment_3",
        "joined": "2026-01-20"
      },
      {
        "user_id": "user_002",
        "community_label": "segment_0",
        "joined": "2025-06-24"
      },
      {
        "user_id": "user_003",
        "community_label": "segment_1",
        "joined": "2025-11-13"
      },
      {
        "user_id": "user_004",
        "community_label": "segment_5",
        "joined": "2025-07-13"
      },
      {
        "user_id": "user_005",
        "community_label": "segment_5",
        "joined": "2025-12-26"
      },
      {
        "user_id": "user_006",
        "community_label": "segment_1",
        "joined": "2025-11-17"
      },
      {
        "user_id": "user_007",
        "community_label": "segment_5",
        "joined": "2025-07-20"
      },
      {
        "user_id": "user_008",
        "community_label": "segment_0",
        "joined": "2025-12-17"
      },
      {
        "user_id": "user_009",
        "community_label": "segment_2",
        "joined": "2025-08-30"
      },
      {
        "user_id": "user_010",
        "community_label": "segment_5",
        "joined": "2025-07-26"
      },
      {
        "user_id": "user_011",
        "community_label": "segment_4",
        "joined": "2025-09-17"
      },
      {
        "user_id": "user_012",
        "community_label": "segment_0",
        "joined": "2025-12-30"
      },
      {
        "user_id": "user_013",
        "community_label": "segment_3",
        "joined": "2025-06-02"
      },
      {
        "user_id": "user_014",
        "community_label": "segment_5",
        "joined": "2026-01-20"
      },
      {
        "user_id": "user_015",
        "community_label": "segment_3",
        "joined": "2025-09-19"
      },
      {
        "user_id": "user_016",
        "community_label": "segment_3",
        "joined": "2025-08-02"
      },
      {
        "user_id": "user_017",
        "community_label": "segment_4",
        "joined": "2025-12-16"
      },
      {
        "user_id": "user_018",
        "community_label": "segment_4",
        "joined": "2025-06-01"
      },
      {
        "user_id": "user_019",
        "community_label": "segment_2",
        "joined": "2025-12-09"
      },
      {
        "user_id": "user_020",
        "community_label": "segment_2",
        "joined": "2025-10-21"
      },
      {
        "user_id": "user_021",
        "community_label": "segment_2",
        "joined": "2025-11-17"
      },
      {
        "user_id": "user_022",
        "community_label": "segment_4",
        "joined": "2025-12-20"
      },
      {
        "user_id": "user_023",
        "community_label": "segment_2",
        "joined": "2025-07-24"
      },
      {
        "user_id": "user_024",
        "community_label": "segment_0",
        "joined": "2025-07-01"
      },
      {
        "user_id": "user_025",
        "community_label": "segment_0",
        "joined": "2025-08-25"
      },
      {
        "user_id": "user_026",
        "community_label": "segment_5",
        "joined": "2025-10-10"
      },
      {
        "user_id": "user_027",
        "community_label": "segment_4",
        "joined": "2025-12-22"
      },
      {
        "user_id": "user_028",
        "community_label": "segment_4",
        "joined": "2026-01-11"
      },
      {
        "user_id": "user_029",
        "community_label": "segment_2",
        "joined": "2026-01-13"
      },
      {
        "user_id": "user_030",
        "community_label": "segment_0",
        "joined": "2025-08-28"
      },
      {
        "user_id": "user_031",
        "community_label": "segment_3",
        "joined": "2025-09-15"
      },
      {
        "user_id": "user_032",
        "community_label": "segment_0",
        "joined": "2025-06-12"
      },
      {
        "user_id": "user_033",
        "community_label": "segment_5",
        "joined": "2026-01-11"
      },
      {
        "user_id": "user_034",
        "community_label": "segment_1",
        "joined": "2025-12-09"
      },
      {
        "user_id": "user_035",
        "community_label": "segment_3",
        "joined": "2025-06-26"
      },
      {
        "user_id": "user_036",
        "community_label": "segment_3",
        "joined": "2025-12-18"
      },
      {
        "user_id": "user_037",
        "community_label": "segment_1",
        "joined": "2025-11-12"
      },
      {
        "user_id": "user_038",
        "community_label": "segment_4",
        "joined": "2025-10-01"
      },
      {
        "user_id": "user_039",
        "community_label": "segment_5",
        "joined": "2025-07-31"
      },
      {
        "user_id": "user_040",
        "community_label": "segment_4",
        "joined": "2025-09-15"
      },
      {
        "user_id": "user_041",
        "community_label": "segment_1",
        "joined": "2026-01-27"
      },
      {
        "user_id": "user_042",
        "community_label": "segment_0",
        "joined": "2025-11-26"
      },
      {
        "user_id": "user_043",
        "community_label": "segment_0",
        "joined": "2025-09-09"
      },
      {
        "user_id": "user_044",
        "community_label": "segment_4",
        "joined": "2025-08-28"
      },
      {
        "user_id": "user_045",
        "community_label": "segment_1",
        "joined": "2025-08-28"
      },
      {
        "user_id": "user_046",
        "community_label": "segment_4",
        "joined": "2025-07-14"
      },
      {
        "user_id": "user_047",
        "community_label": "segment_0",
        "joined": "2025-12-05"
      },
      {
        "user_id": "user_048",
        "community_label": "segment_3",
        "joined": "2025-06-19"
      },
      {
        "user_id": "user_049",
        "community_label": "segment_0",
        "joined": "2025-10-30"
      },
      {
        "user_id": "user_050",
        "community_label": "segment_3",
        "joined": "2025-07-29"
      },
      {
        "user_id": "user_051",
        "community_label": "segment_5",
        "joined": "2025-08-04"
      },
      {
        "user_id": "user_052",
        "community_label": "segment_0",
        "joined": "2025-08-17"
      },
      {
        "user_id": "user_053",
        "community_label": "segment_5",
        "joined": "2025-09-16"
      },
      {
        "user_id": "user_054",
        "community_label": "segment_3",
        "joined": "2025-09-22"
      },
      {
        "user_id": "user_055",
        "community_label": "segment_4",
        "joined": "2026-01-27"
      },
      {
        "user_id": "user_056",
        "community_label": "segment_3",
        "joined": "2025-06-07"
      },
      {
        "user_id": "user_057",
        "community_label": "segment_5",
        "joined": "2026-01-15"
      },
      {
        "user_id": "user_058",
        "community_label": "segment_3",
        "joined": "2025-10-28"
      },
      {
        "user_id": "user_059",
        "community_label": "segment_4",
        "joined": "2025-06-09"
      },
      {
        "user_id": "user_060",
        "community_label": "segment_3",
        "joined": "2025-06-24"
      },
      {
        "user_id": "user_061",
        "community_label": "segment_1",
        "joined": "2025-12-27"
      },
      {
        "user_id": "user_062",
        "community_label": "segment_4",
        "joined": "2025-09-18"
      },
      {
        "user_id": "user_063",
        "community_label": "segment_2",
        "joined": "2026-01-07"
      },
      {
        "user_id": "user_064",
        "community_label": "segment_1",
        "joined": "2025-11-17"
      },
      {
        "user_id": "user_065",
        "community_label": "segment_1",
        "joined": "2025-06-13"
      },
      {
        "user_id": "user_066",
        "community_label": "segment_5",
        "joined": "2025-09-17"
      },
      {
        "user_id": "user_067",
        "community_label": "segment_3",
        "joined": "2025-06-12"
      },
      {
        "user_id": "user_068",
        "community_label": "segment_5",
        "joined": "2025-08-09"
      },
      {
        "user_id": "user_069",
        "community_label": "segment_0",
        "joined": "2025-06-26"
      },
      {
        "user_id": "user_070",
        "community_label": "segment_2",
        "joined": "2025-10-04"
      },
      {
        "user_id": "user_071",
        "community_label": "segment_0",
        "joined": "2025-07-15"
      },
      {
        "user_id": "user_072",
        "community_label": "segment_0",
        "joined": "2025-08-17"
      },
      {
        "user_id": "user_073",
        "community_label": "segment_1",
        "joined": "2025-09-05"
      },
      {
        "user_id": "user_074",
        "community_label": "segment_3",
        "joined": "2025-10-10"
      },
      {
        "user_id": "user_075",
        "community_label": "segment_0",
        "joined": "2025-12-04"
      },
      {
        "user_id": "user_076",
        "community_label": "segment_4",
        "joined": "2025-07-14"
      },
      {
        "user_id": "user_077",
        "community_label": "segment_2",
        "joined": "2026-01-06"
      },
      {
        "user_id": "user_078",
        "community_label": "segment_4",
        "joined": "2026-01-03"
      },
      {
        "user_id": "user_079",
        "community_label": "segment_2",
        "joined": "2025-12-24"
      },
      {
        "user_id": "user_080",
        "community_label": "segment_4",
        "joined": "2025-09-23"
      },
      {
        "user_id": "user_081",
        "community_label": "segment_1",
        "joined": "2025-10-07"
      },
      {
        "user_id": "user_082",
        "community_label": "segment_0",
        "joined": "2025-10-28"
      },
      {
        "user_id": "user_083",
        "community_label": "segment_3",
        "joined": "2025-09-25"
      },
      {
        "user_id": "user_084",
        "community_label": "segment_1",
        "joined": "2025-10-30"
      },
      {
        "user_id": "user_085",
        "community_label": "segment_1",
        "joined": "2025-11-20"
      },
      {
        "user_id": "user_086",
        "community_label": "segment_4",
        "joined": "2025-12-11"
      },
      {
        "user_id": "user_087",
        "community_label": "segment_3",
        "joined": "2026-01-09"
      },
      {
        "user_id": "user_088",
        "community_label": "segment_0",
        "joined": "2025-06-16"
      },
      {
        "user_id": "user_089",
        "community_label": "segment_1",
        "joined": "2025-06-22"
      },
      {
        "user_id": "user_090",
        "community_label": "segment_0",
        "joined": "2025-10-02"
      },
      {
        "user_id": "user_091",
        "community_label": "segment_3",
        "joined": "2026-01-08"
      },
      {
        "user_id": "user_092",
        "community_label": "segment_2",
        "joined": "2025-10-21"
      },
      {
        "user_id": "user_093",
        "community_label": "segment_1",
        "joined": "2025-09-12"
      },
      {
        "user_id": "user_094",
        "community_label": "segment_0",
        "joined": "2025-12-05"
      },
      {
        "user_id": "user_095",
        "community_label": "segment_1",
        "joined": "2025-12-21"
      },
      {
        "user_id": "user_096",
        "community_label": "segment_5",
        "joined": "2025-11-26"
      },
      {
        "user_id": "user_097",
        "community_label": "segment_3",
        "joined": "2025-07-13"
      },
      {
        "user_id": "user_098",
        "community_label": "segment_4",
        "joined": "2025-11-28"
      },
      {
        "user_id": "user_099",
        "community_label": "segment_1",
        "joined": "2026-01-27"
      },
      {
        "user_id": "user_100",
        "community_label": "segment_5",
        "joined": "2025-12-26"
      },
      {
        "user_id": "user_101",
        "community_label": "segment_5",
        "joined": "2025-12-19"
      },
      {
        "user_id": "user_102",
        "community_label": "segment_5",
        "joined": "2025-08-10"
      },
      {
        "user_id": "user_103",
        "community_label": "segment_5",
        "joined": "2025-10-10"
      },
      {
        "user_id": "user_104",
        "community_label": "segment_4",
        "joined": "2025-09-28"
      },
      {
        "user_id": "user_105",
        "community_label": "segment_5",
        "joined": "2025-07-30"
      },
      {
        "user_id": "user_106",
        "community_label": "segment_2",
        "joined": "2025-10-28"
      },
      {
        "user_id": "user_107",
        "community_label": "segment_5",
        "joined": "2025-12-18"
      },
      {
        "user_id": "user_108",
        "community_label": "segment_4",
        "joined": "2026-01-02"
      },
      {
        "user_id": "user_109",
        "community_label": "segment_5",
        "joined": "2025-09-04"
      },
      {
        "user_id": "user_110",
        "community_label": "segment_1",
        "joined": "2025-09-10"
      },
      {
        "user_id": "user_111",
        "community_label": "segment_4",
        "joined": "2025-08-21"
      },
      {
        "user_id": "user_112",
        "community_label": "segment_2",
        "joined": "2025-10-29"
      },
      {
        "user_id": "user_113",
        "community_label": "segment_0",
        "joined": "2025-07-06"
      },
      {
        "user_id": "user_114",
        "community_label": "segment_1",
        "joined": "2025-07-21"
      },
      {
        "user_id": "user_115",
        "community_label": "segment_1",
        "joined": "2025-09-26"
      },
      {
        "user_id": "user_116",
        "community_label": "segment_2",
        "joined": "2025-09-04"
      },
      {
        "user_id": "user_117",
        "community_label": "segment_2",
        "joined": "2025-07-03"
      },
      {
        "user_id": "user_118",
        "community_label": "segment_0",
        "joined": "2025-09-12"
      },
      {
        "user_id": "user_119",
        "community_label": "segment_1",
        "joined": "2025-12-28"
      },
      {
        "user_id": "user_120",
        "community_label": "segment_0",
        "joined": "2025-09-06"
      },
      {
        "user_id": "user_121",
        "community_label": "segment_0",
        "joined": "2025-12-24"
      },
      {
        "user_id": "user_122",
        "community_label": "segment_1",
        "joined": "2026-01-20"
      },
      {
        "user_id": "user_123",
        "community_label": "segment_3",
        "joined": "2026-01-03"
      },
      {
        "user_id": "user_124",
        "community_label": "segment_0",
        "joined": "2025-09-02"
      },
      {
        "user_id": "user_125",
        "community_label": "segment_2",
        "joined": "2025-09-12"
      },
      {
        "user_id": "user_126",
        "community_label": "segment_3",
        "joined": "2025-10-20"
      },
      {
        "user_id": "user_127",
        "community_label": "segment_5",
        "joined": "2025-06-16"
      },
      {
        "user_id": "user_128",
        "community_label": "segment_0",
        "joined": "2025-11-28"
      },
      {
        "user_id": "user_129",
        "community_label": "segment_1",
        "joined": "2025-07-18"
      },
      {
        "user_id": "user_130",
        "community_label": "segment_2",
        "joined": "2025-06-07"
      },
      {
        "user_id": "user_131",
        "community_label": "segment_0",
        "joined": "2025-08-04"
      },
      {
        "user_id": "user_132",
        "community_label": "segment_2",
        "joined": "2025-10-31"
      },
      {
        "user_id": "user_133",
        "community_label": "segment_4",
        "joined": "2025-11-15"
      },
      {
        "user_id": "user_134",
        "community_label": "segment_1",
        "joined": "2025-10-31"
      },
      {
        "user_id": "user_135",
        "community_label": "segment_5",
        "joined": "2025-11-29"
      },
      {
        "user_id": "user_136",
        "community_label": "segment_5",
        "joined": "2026-01-05"
      },
      {
        "user_id": "user_137",
        "community_label": "segment_1",
        "joined": "2025-11-19"
      },
      {
        "user_id": "user_138",
        "community_label": "segment_2",
        "joined": "2025-06-23"
      },
      {
        "user_id": "user_139",
        "community_label": "segment_4",
        "joined": "2025-08-13"
      },
      {
        "user_id": "user_140",
        "community_label": "segment_2",
        "joined": "2025-11-26"
      },
      {
        "user_id": "user_141",
        "community_label": "segment_2",
        "joined": "2025-07-31"
      },
      {
        "user_id": "user_142",
        "community_label": "segment_2",
        "joined": "2026-01-13"
      },
      {
        "user_id": "user_143",
        "community_label": "segment_2",
        "joined": "2025-10-07"
      },
      {
        "user_id": "user_144",
        "community_label": "segment_5",
        "joined": "2025-08-02"
      },
      {
        "user_id": "user_145",
        "community_label": "segment_3",
        "joined": "2025-07-29"
      },
      {
        "user_id": "user_146",
        "community_label": "segment_2",
        "joined": "2025-11-18"
      },
      {
        "user_id": "user_147",
        "community_label": "segment_4",
        "joined": "2025-11-14"
      },
      {
        "user_id": "user_148",
        "community_label": "segment_4",
        "joined": "2025-12-24"
      },
      {
        "user_id": "user_149",
        "community_label": "segment_1",
        "joined": "2026-01-06"
      },
      {
        "user_id": "user_150",
        "community_label": "segment_5",
        "joined": "2025-06-06"
      },
      {
        "user_id": "user_151",
        "community_label": "segment_2",
        "joined": "2025-10-14"
      },
      {
        "user_id": "user_152",
        "community_label": "segment_5",
        "joined": "2025-10-01"
      },
      {
        "user_id": "user_153",
        "community_label": "segment_1",
        "joined": "2025-11-09"
      },
      {
        "user_id": "user_154",
        "community_label": "segment_4",
        "joined": "2026-01-11"
      },
      {
        "user_id": "user_155",
        "community_label": "segment_2",
        "joined": "2025-09-24"
      },
      {
        "user_id": "user_156",
        "community_label": "segment_3",
        "joined": "2025-08-29"
      },
      {
        "user_id": "user_157",
        "community_label": "segment_3",
        "joined": "2025-06-15"
      },
      {
        "user_id": "user_158",
        "community_label": "segment_0",
        "joined": "2025-12-22"
      },
      {
        "user_id": "user_159",
        "community_label": "segment_4",
        "joined": "2026-01-20"
      },
      {
        "user_id": "user_160",
        "community_label": "segment_1",
        "joined": "2025-06-12"
      },
      {
        "user_id": "user_161",
        "community_label": "segment_2",
        "joined": "2025-08-14"
      },
      {
        "user_id": "user_162",
        "community_label": "segment_5",
        "joined": "2025-08-08"
      },
      {
        "user_id": "user_163",
        "community_label": "segment_3",
        "joined": "2025-09-18"
      },
      {
        "user_id": "user_164",
        "community_label": "segment_2",
        "joined": "2025-12-21"
      },
      {
        "user_id": "user_165",
        "community_label": "segment_1",
        "joined": "2025-07-07"
      },
      {
        "user_id": "user_166",
        "community_label": "segment_0",
        "joined": "2025-06-19"
      },
      {
        "user_id": "user_167",
        "community_label": "segment_4",
        "joined": "2025-08-26"
      },
      {
        "user_id": "user_168",
        "community_label": "segment_3",
        "joined": "2025-07-20"
      },
      {
        "user_id": "user_169",
        "community_label": "segment_1",
        "joined": "2025-11-13"
      },
      {
        "user_id": "user_170",
        "community_label": "segment_3",
        "joined": "2025-09-30"
      },
      {
        "user_id": "user_171",
        "community_label": "segment_2",
        "joined": "2025-11-12"
      },
      {
        "user_id": "user_172",
        "community_label": "segment_3",
        "joined": "2025-10-24"
      },
      {
        "user_id": "user_173",
        "community_label": "segment_4",
        "joined": "2025-09-13"
      },
      {
        "user_id": "user_174",
        "community_label": "segment_5",
        "joined": "2025-07-01"
      },
      {
        "user_id": "user_175",
        "community_label": "segment_0",
        "joined": "2025-11-23"
      },
      {
        "user_id": "user_176",
        "community_label": "segment_2",
        "joined": "2025-12-18"
      },
      {
        "user_id": "user_177",
        "community_label": "segment_3",
        "joined": "2025-06-08"
      },
      {
        "user_id": "user_178",
        "community_label": "segment_4",
        "joined": "2026-01-25"
      },
      {
        "user_id": "user_179",
        "community_label": "segment_3",
        "joined": "2025-08-07"
      }
    ],
    "edges": [
      {
        "source": "user_029",
        "target": "user_142",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-01 00:00"
      },
      {
        "source": "user_126",
        "target": "user_179",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-01 01:00"
      },
      {
        "source": "user_144",
        "target": "user_014",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-01 01:00"
      },
      {
        "source": "user_143",
        "target": "user_079",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-01 02:00"
      },
      {
        "source": "user_066",
        "target": "user_042",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-01 02:00"
      },
      {
        "source": "user_160",
        "target": "user_114",
        "weight": 2,
        "interaction_type": "mention",
        "timestamp": "2026-01-01 04:00"
      },
      {
        "source": "user_020",
        "target": "user_130",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-01 07:00"
      },
      {
        "source": "user_045",
        "target": "user_177",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-01 08:00"
      },
      {
        "source": "user_176",
        "target": "user_143",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-01 09:00"
      },
      {
        "source": "user_105",
        "target": "user_103",
        "weight": 4,
        "interaction_type": "follow",
        "timestamp": "2026-01-01 09:00"
      },
      {
        "source": "user_038",
        "target": "user_017",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-01 11:00"
      },
      {
        "source": "user_004",
        "target": "user_101",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-01 11:00"
      },
      {
        "source": "user_079",
        "target": "user_141",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-01 12:00"
      },
      {
        "source": "user_163",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-01 12:00"
      },
      {
        "source": "user_160",
        "target": "user_149",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-01 12:00"
      },
      {
        "source": "user_028",
        "target": "user_139",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-01 13:00"
      },
      {
        "source": "user_149",
        "target": "user_143",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-01 15:00"
      },
      {
        "source": "user_140",
        "target": "user_053",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-01 15:00"
      },
      {
        "source": "user_161",
        "target": "user_171",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-01 15:00"
      },
      {
        "source": "user_082",
        "target": "user_094",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-01 17:00"
      },
      {
        "source": "user_077",
        "target": "user_155",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-01 18:00"
      },
      {
        "source": "user_014",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-01 18:00"
      },
      {
        "source": "user_136",
        "target": "user_057",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-01 18:00"
      },
      {
        "source": "user_071",
        "target": "user_047",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-01 20:00"
      },
      {
        "source": "user_013",
        "target": "user_048",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-01 21:00"
      },
      {
        "source": "user_005",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-01 23:00"
      },
      {
        "source": "user_094",
        "target": "user_024",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-01 23:00"
      },
      {
        "source": "user_024",
        "target": "user_025",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-01 23:00"
      },
      {
        "source": "user_155",
        "target": "user_164",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-02 00:00"
      },
      {
        "source": "user_096",
        "target": "user_100",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-02 01:00"
      },
      {
        "source": "user_097",
        "target": "user_039",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-02 02:00"
      },
      {
        "source": "user_127",
        "target": "user_143",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-02 02:00"
      },
      {
        "source": "user_061",
        "target": "user_149",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-02 02:00"
      },
      {
        "source": "user_167",
        "target": "user_078",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-02 03:00"
      },
      {
        "source": "user_124",
        "target": "user_128",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-02 04:00"
      },
      {
        "source": "user_088",
        "target": "user_131",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-02 06:00"
      },
      {
        "source": "user_126",
        "target": "user_091",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-02 06:00"
      },
      {
        "source": "user_105",
        "target": "user_057",
        "weight": 14,
        "interaction_type": "share",
        "timestamp": "2026-01-02 07:00"
      },
      {
        "source": "user_112",
        "target": "user_082",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-02 09:00"
      },
      {
        "source": "user_021",
        "target": "user_142",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-02 10:00"
      },
      {
        "source": "user_165",
        "target": "user_137",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-02 13:00"
      },
      {
        "source": "user_103",
        "target": "user_100",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-02 14:00"
      },
      {
        "source": "user_024",
        "target": "user_107",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-02 15:00"
      },
      {
        "source": "user_000",
        "target": "user_017",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-02 15:00"
      },
      {
        "source": "user_019",
        "target": "user_130",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-02 17:00"
      },
      {
        "source": "user_108",
        "target": "user_059",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-02 18:00"
      },
      {
        "source": "user_051",
        "target": "user_010",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-02 21:00"
      },
      {
        "source": "user_101",
        "target": "user_080",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-02 21:00"
      },
      {
        "source": "user_160",
        "target": "user_115",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-02 22:00"
      },
      {
        "source": "user_142",
        "target": "user_171",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-02 23:00"
      },
      {
        "source": "user_105",
        "target": "user_085",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-03 00:00"
      },
      {
        "source": "user_159",
        "target": "user_139",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-03 01:00"
      },
      {
        "source": "user_049",
        "target": "user_025",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-03 03:00"
      },
      {
        "source": "user_140",
        "target": "user_117",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-03 06:00"
      },
      {
        "source": "user_059",
        "target": "user_098",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-03 08:00"
      },
      {
        "source": "user_021",
        "target": "user_092",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-03 10:00"
      },
      {
        "source": "user_087",
        "target": "user_170",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-03 12:00"
      },
      {
        "source": "user_153",
        "target": "user_079",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-03 13:00"
      },
      {
        "source": "user_142",
        "target": "user_070",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-03 14:00"
      },
      {
        "source": "user_023",
        "target": "user_132",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-03 14:00"
      },
      {
        "source": "user_000",
        "target": "user_143",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-03 14:00"
      },
      {
        "source": "user_160",
        "target": "user_099",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-03 14:00"
      },
      {
        "source": "user_031",
        "target": "user_077",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-03 15:00"
      },
      {
        "source": "user_047",
        "target": "user_030",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-03 16:00"
      },
      {
        "source": "user_111",
        "target": "user_168",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-03 16:00"
      },
      {
        "source": "user_100",
        "target": "user_135",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-03 17:00"
      },
      {
        "source": "user_143",
        "target": "user_105",
        "weight": 3,
        "interaction_type": "mention",
        "timestamp": "2026-01-03 18:00"
      },
      {
        "source": "user_100",
        "target": "user_162",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-03 18:00"
      },
      {
        "source": "user_108",
        "target": "user_017",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-03 18:00"
      },
      {
        "source": "user_171",
        "target": "user_146",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-03 19:00"
      },
      {
        "source": "user_105",
        "target": "user_096",
        "weight": 5,
        "interaction_type": "reply",
        "timestamp": "2026-01-03 20:00"
      },
      {
        "source": "user_053",
        "target": "user_174",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-03 20:00"
      },
      {
        "source": "user_058",
        "target": "user_157",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-03 20:00"
      },
      {
        "source": "user_099",
        "target": "user_160",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-03 21:00"
      },
      {
        "source": "user_041",
        "target": "user_081",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-03 22:00"
      },
      {
        "source": "user_124",
        "target": "user_008",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-03 22:00"
      },
      {
        "source": "user_163",
        "target": "user_050",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-04 00:00"
      },
      {
        "source": "user_103",
        "target": "user_007",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-04 00:00"
      },
      {
        "source": "user_111",
        "target": "user_050",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-04 05:00"
      },
      {
        "source": "user_021",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-04 07:00"
      },
      {
        "source": "user_105",
        "target": "user_062",
        "weight": 2,
        "interaction_type": "follow",
        "timestamp": "2026-01-04 08:00"
      },
      {
        "source": "user_016",
        "target": "user_083",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-04 09:00"
      },
      {
        "source": "user_126",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-04 10:00"
      },
      {
        "source": "user_002",
        "target": "user_032",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-04 11:00"
      },
      {
        "source": "user_160",
        "target": "user_033",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-04 12:00"
      },
      {
        "source": "user_133",
        "target": "user_046",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-04 12:00"
      },
      {
        "source": "user_137",
        "target": "user_114",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-04 12:00"
      },
      {
        "source": "user_105",
        "target": "user_101",
        "weight": 9,
        "interaction_type": "follow",
        "timestamp": "2026-01-04 14:00"
      },
      {
        "source": "user_071",
        "target": "user_032",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-04 14:00"
      },
      {
        "source": "user_105",
        "target": "user_100",
        "weight": 7,
        "interaction_type": "share",
        "timestamp": "2026-01-04 14:00"
      },
      {
        "source": "user_041",
        "target": "user_149",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-04 14:00"
      },
      {
        "source": "user_016",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-04 15:00"
      },
      {
        "source": "user_001",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-04 16:00"
      },
      {
        "source": "user_092",
        "target": "user_164",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-04 18:00"
      },
      {
        "source": "user_057",
        "target": "user_105",
        "weight": 2,
        "interaction_type": "follow",
        "timestamp": "2026-01-04 18:00"
      },
      {
        "source": "user_105",
        "target": "user_000",
        "weight": 5,
        "interaction_type": "reply",
        "timestamp": "2026-01-04 20:00"
      },
      {
        "source": "user_105",
        "target": "user_002",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-04 20:00"
      },
      {
        "source": "user_176",
        "target": "user_029",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-04 21:00"
      },
      {
        "source": "user_113",
        "target": "user_030",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-04 22:00"
      },
      {
        "source": "user_024",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-04 22:00"
      },
      {
        "source": "user_171",
        "target": "user_033",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-04 22:00"
      },
      {
        "source": "user_005",
        "target": "user_096",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-04 23:00"
      },
      {
        "source": "user_082",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-05 00:00"
      },
      {
        "source": "user_165",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-05 00:00"
      },
      {
        "source": "user_052",
        "target": "user_175",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-05 01:00"
      },
      {
        "source": "user_054",
        "target": "user_048",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-05 02:00"
      },
      {
        "source": "user_016",
        "target": "user_163",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-05 02:00"
      },
      {
        "source": "user_096",
        "target": "user_000",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-05 02:00"
      },
      {
        "source": "user_018",
        "target": "user_107",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-05 03:00"
      },
      {
        "source": "user_120",
        "target": "user_127",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-05 03:00"
      },
      {
        "source": "user_143",
        "target": "user_164",
        "weight": 4,
        "interaction_type": "share",
        "timestamp": "2026-01-05 03:00"
      },
      {
        "source": "user_135",
        "target": "user_072",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-05 05:00"
      },
      {
        "source": "user_123",
        "target": "user_156",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-05 05:00"
      },
      {
        "source": "user_176",
        "target": "user_171",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-05 05:00"
      },
      {
        "source": "user_020",
        "target": "user_074",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-05 06:00"
      },
      {
        "source": "user_142",
        "target": "user_108",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-05 06:00"
      },
      {
        "source": "user_037",
        "target": "user_084",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-05 08:00"
      },
      {
        "source": "user_048",
        "target": "user_145",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-05 09:00"
      },
      {
        "source": "user_047",
        "target": "user_052",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-05 10:00"
      },
      {
        "source": "user_076",
        "target": "user_028",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-05 10:00"
      },
      {
        "source": "user_016",
        "target": "user_048",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-05 11:00"
      },
      {
        "source": "user_143",
        "target": "user_155",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-05 12:00"
      },
      {
        "source": "user_055",
        "target": "user_108",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-05 13:00"
      },
      {
        "source": "user_162",
        "target": "user_004",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-05 13:00"
      },
      {
        "source": "user_036",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-05 14:00"
      },
      {
        "source": "user_126",
        "target": "user_105",
        "weight": 3,
        "interaction_type": "mention",
        "timestamp": "2026-01-05 15:00"
      },
      {
        "source": "user_123",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-05 15:00"
      },
      {
        "source": "user_140",
        "target": "user_172",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-05 16:00"
      },
      {
        "source": "user_105",
        "target": "user_163",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-05 18:00"
      },
      {
        "source": "user_109",
        "target": "user_087",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-05 19:00"
      },
      {
        "source": "user_107",
        "target": "user_156",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-05 19:00"
      },
      {
        "source": "user_095",
        "target": "user_143",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-05 20:00"
      },
      {
        "source": "user_060",
        "target": "user_096",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-05 22:00"
      },
      {
        "source": "user_057",
        "target": "user_010",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-05 22:00"
      },
      {
        "source": "user_137",
        "target": "user_034",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-05 22:00"
      },
      {
        "source": "user_158",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-06 00:00"
      },
      {
        "source": "user_129",
        "target": "user_121",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-06 03:00"
      },
      {
        "source": "user_016",
        "target": "user_126",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-06 04:00"
      },
      {
        "source": "user_053",
        "target": "user_101",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-06 04:00"
      },
      {
        "source": "user_086",
        "target": "user_094",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-06 06:00"
      },
      {
        "source": "user_053",
        "target": "user_005",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-06 08:00"
      },
      {
        "source": "user_175",
        "target": "user_152",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-06 08:00"
      },
      {
        "source": "user_031",
        "target": "user_015",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-06 10:00"
      },
      {
        "source": "user_116",
        "target": "user_117",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-06 10:00"
      },
      {
        "source": "user_014",
        "target": "user_004",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-06 11:00"
      },
      {
        "source": "user_063",
        "target": "user_112",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-06 11:00"
      },
      {
        "source": "user_143",
        "target": "user_130",
        "weight": 3,
        "interaction_type": "follow",
        "timestamp": "2026-01-06 13:00"
      },
      {
        "source": "user_173",
        "target": "user_069",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-06 14:00"
      },
      {
        "source": "user_153",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-06 14:00"
      },
      {
        "source": "user_177",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-06 15:00"
      },
      {
        "source": "user_139",
        "target": "user_038",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-06 18:00"
      },
      {
        "source": "user_076",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-06 19:00"
      },
      {
        "source": "user_053",
        "target": "user_105",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-06 19:00"
      },
      {
        "source": "user_093",
        "target": "user_095",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-06 22:00"
      },
      {
        "source": "user_155",
        "target": "user_141",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-06 23:00"
      },
      {
        "source": "user_016",
        "target": "user_074",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-06 23:00"
      },
      {
        "source": "user_023",
        "target": "user_094",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-07 03:00"
      },
      {
        "source": "user_179",
        "target": "user_156",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-07 05:00"
      },
      {
        "source": "user_150",
        "target": "user_100",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-07 06:00"
      },
      {
        "source": "user_113",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-07 06:00"
      },
      {
        "source": "user_016",
        "target": "user_091",
        "weight": 2,
        "interaction_type": "follow",
        "timestamp": "2026-01-07 07:00"
      },
      {
        "source": "user_096",
        "target": "user_066",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-07 08:00"
      },
      {
        "source": "user_040",
        "target": "user_044",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-07 08:00"
      },
      {
        "source": "user_076",
        "target": "user_027",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-07 08:00"
      },
      {
        "source": "user_035",
        "target": "user_056",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-07 08:00"
      },
      {
        "source": "user_043",
        "target": "user_073",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-07 08:00"
      },
      {
        "source": "user_067",
        "target": "user_016",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-07 10:00"
      },
      {
        "source": "user_141",
        "target": "user_039",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-07 10:00"
      },
      {
        "source": "user_039",
        "target": "user_162",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-07 11:00"
      },
      {
        "source": "user_045",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-07 12:00"
      },
      {
        "source": "user_035",
        "target": "user_083",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-07 13:00"
      },
      {
        "source": "user_060",
        "target": "user_016",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-07 14:00"
      },
      {
        "source": "user_147",
        "target": "user_059",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-07 14:00"
      },
      {
        "source": "user_135",
        "target": "user_100",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-07 14:00"
      },
      {
        "source": "user_179",
        "target": "user_065",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-07 15:00"
      },
      {
        "source": "user_160",
        "target": "user_110",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-07 16:00"
      },
      {
        "source": "user_163",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-07 18:00"
      },
      {
        "source": "user_156",
        "target": "user_058",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-07 19:00"
      },
      {
        "source": "user_145",
        "target": "user_035",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-07 20:00"
      },
      {
        "source": "user_145",
        "target": "user_058",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-07 21:00"
      },
      {
        "source": "user_037",
        "target": "user_065",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-07 22:00"
      },
      {
        "source": "user_024",
        "target": "user_032",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-07 23:00"
      },
      {
        "source": "user_094",
        "target": "user_025",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-08 00:00"
      },
      {
        "source": "user_023",
        "target": "user_151",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-08 00:00"
      },
      {
        "source": "user_026",
        "target": "user_107",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-08 01:00"
      },
      {
        "source": "user_066",
        "target": "user_174",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-08 01:00"
      },
      {
        "source": "user_073",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-08 01:00"
      },
      {
        "source": "user_143",
        "target": "user_161",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-08 02:00"
      },
      {
        "source": "user_110",
        "target": "user_119",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-08 03:00"
      },
      {
        "source": "user_131",
        "target": "user_075",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-08 09:00"
      },
      {
        "source": "user_125",
        "target": "user_146",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-08 10:00"
      },
      {
        "source": "user_034",
        "target": "user_134",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-08 11:00"
      },
      {
        "source": "user_170",
        "target": "user_141",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-08 11:00"
      },
      {
        "source": "user_070",
        "target": "user_020",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-08 12:00"
      },
      {
        "source": "user_120",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-08 12:00"
      },
      {
        "source": "user_107",
        "target": "user_152",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-08 12:00"
      },
      {
        "source": "user_020",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-08 15:00"
      },
      {
        "source": "user_105",
        "target": "user_001",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-08 15:00"
      },
      {
        "source": "user_008",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-08 18:00"
      },
      {
        "source": "user_143",
        "target": "user_171",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-08 20:00"
      },
      {
        "source": "user_114",
        "target": "user_141",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-08 20:00"
      },
      {
        "source": "user_160",
        "target": "user_128",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-08 20:00"
      },
      {
        "source": "user_097",
        "target": "user_123",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-08 23:00"
      },
      {
        "source": "user_160",
        "target": "user_134",
        "weight": 3,
        "interaction_type": "follow",
        "timestamp": "2026-01-08 23:00"
      },
      {
        "source": "user_160",
        "target": "user_137",
        "weight": 2,
        "interaction_type": "mention",
        "timestamp": "2026-01-09 01:00"
      },
      {
        "source": "user_126",
        "target": "user_143",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-09 02:00"
      },
      {
        "source": "user_094",
        "target": "user_090",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-09 02:00"
      },
      {
        "source": "user_031",
        "target": "user_034",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-09 03:00"
      },
      {
        "source": "user_101",
        "target": "user_068",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-09 05:00"
      },
      {
        "source": "user_137",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-09 06:00"
      },
      {
        "source": "user_043",
        "target": "user_102",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-09 08:00"
      },
      {
        "source": "user_105",
        "target": "user_006",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-09 08:00"
      },
      {
        "source": "user_106",
        "target": "user_174",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-09 09:00"
      },
      {
        "source": "user_045",
        "target": "user_052",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-09 13:00"
      },
      {
        "source": "user_055",
        "target": "user_154",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-09 13:00"
      },
      {
        "source": "user_126",
        "target": "user_058",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-09 16:00"
      },
      {
        "source": "user_091",
        "target": "user_060",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-09 17:00"
      },
      {
        "source": "user_083",
        "target": "user_060",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-09 19:00"
      },
      {
        "source": "user_058",
        "target": "user_087",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-09 22:00"
      },
      {
        "source": "user_013",
        "target": "user_067",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-09 22:00"
      },
      {
        "source": "user_096",
        "target": "user_135",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-09 22:00"
      },
      {
        "source": "user_176",
        "target": "user_149",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-09 22:00"
      },
      {
        "source": "user_129",
        "target": "user_084",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-09 23:00"
      },
      {
        "source": "user_125",
        "target": "user_020",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-10 00:00"
      },
      {
        "source": "user_118",
        "target": "user_166",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-10 01:00"
      },
      {
        "source": "user_151",
        "target": "user_077",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-10 02:00"
      },
      {
        "source": "user_149",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-10 02:00"
      },
      {
        "source": "user_086",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-10 03:00"
      },
      {
        "source": "user_095",
        "target": "user_084",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-10 06:00"
      },
      {
        "source": "user_163",
        "target": "user_058",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-10 07:00"
      },
      {
        "source": "user_002",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-10 09:00"
      },
      {
        "source": "user_094",
        "target": "user_124",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-10 10:00"
      },
      {
        "source": "user_062",
        "target": "user_027",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-10 10:00"
      },
      {
        "source": "user_153",
        "target": "user_045",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-10 10:00"
      },
      {
        "source": "user_142",
        "target": "user_132",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-10 10:00"
      },
      {
        "source": "user_171",
        "target": "user_116",
        "weight": 3,
        "interaction_type": "mention",
        "timestamp": "2026-01-10 11:00"
      },
      {
        "source": "user_085",
        "target": "user_089",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-10 12:00"
      },
      {
        "source": "user_162",
        "target": "user_000",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-10 12:00"
      },
      {
        "source": "user_015",
        "target": "user_067",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-10 14:00"
      },
      {
        "source": "user_140",
        "target": "user_146",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-10 15:00"
      },
      {
        "source": "user_105",
        "target": "user_049",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-10 16:00"
      },
      {
        "source": "user_122",
        "target": "user_071",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-10 17:00"
      },
      {
        "source": "user_137",
        "target": "user_169",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-10 19:00"
      },
      {
        "source": "user_116",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-10 20:00"
      },
      {
        "source": "user_053",
        "target": "user_150",
        "weight": 2,
        "interaction_type": "mention",
        "timestamp": "2026-01-10 20:00"
      },
      {
        "source": "user_105",
        "target": "user_149",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-10 20:00"
      },
      {
        "source": "user_149",
        "target": "user_110",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-10 21:00"
      },
      {
        "source": "user_136",
        "target": "user_039",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-10 21:00"
      },
      {
        "source": "user_076",
        "target": "user_080",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-10 23:00"
      },
      {
        "source": "user_006",
        "target": "user_064",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-11 00:00"
      },
      {
        "source": "user_129",
        "target": "user_045",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-11 02:00"
      },
      {
        "source": "user_047",
        "target": "user_110",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-11 03:00"
      },
      {
        "source": "user_172",
        "target": "user_048",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-11 04:00"
      },
      {
        "source": "user_143",
        "target": "user_063",
        "weight": 4,
        "interaction_type": "reply",
        "timestamp": "2026-01-11 04:00"
      },
      {
        "source": "user_093",
        "target": "user_171",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-11 04:00"
      },
      {
        "source": "user_160",
        "target": "user_041",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-11 06:00"
      },
      {
        "source": "user_148",
        "target": "user_071",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-11 08:00"
      },
      {
        "source": "user_088",
        "target": "user_049",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-11 09:00"
      },
      {
        "source": "user_111",
        "target": "user_040",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-11 09:00"
      },
      {
        "source": "user_105",
        "target": "user_004",
        "weight": 4,
        "interaction_type": "follow",
        "timestamp": "2026-01-11 10:00"
      },
      {
        "source": "user_071",
        "target": "user_175",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-11 10:00"
      },
      {
        "source": "user_132",
        "target": "user_117",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-11 10:00"
      },
      {
        "source": "user_160",
        "target": "user_119",
        "weight": 3,
        "interaction_type": "follow",
        "timestamp": "2026-01-11 11:00"
      },
      {
        "source": "user_077",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-11 11:00"
      },
      {
        "source": "user_105",
        "target": "user_135",
        "weight": 3,
        "interaction_type": "share",
        "timestamp": "2026-01-11 11:00"
      },
      {
        "source": "user_176",
        "target": "user_116",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-11 11:00"
      },
      {
        "source": "user_172",
        "target": "user_058",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-11 13:00"
      },
      {
        "source": "user_174",
        "target": "user_150",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-11 17:00"
      },
      {
        "source": "user_020",
        "target": "user_139",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-11 18:00"
      },
      {
        "source": "user_029",
        "target": "user_094",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-11 19:00"
      },
      {
        "source": "user_093",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-11 20:00"
      },
      {
        "source": "user_085",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-11 21:00"
      },
      {
        "source": "user_070",
        "target": "user_023",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-11 21:00"
      },
      {
        "source": "user_084",
        "target": "user_129",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-11 22:00"
      },
      {
        "source": "user_047",
        "target": "user_082",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-11 23:00"
      },
      {
        "source": "user_143",
        "target": "user_151",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-12 00:00"
      },
      {
        "source": "user_174",
        "target": "user_033",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-12 04:00"
      },
      {
        "source": "user_056",
        "target": "user_157",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-12 04:00"
      },
      {
        "source": "user_018",
        "target": "user_139",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-12 04:00"
      },
      {
        "source": "user_142",
        "target": "user_112",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-12 06:00"
      },
      {
        "source": "user_075",
        "target": "user_047",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-12 06:00"
      },
      {
        "source": "user_105",
        "target": "user_107",
        "weight": 12,
        "interaction_type": "reply",
        "timestamp": "2026-01-12 08:00"
      },
      {
        "source": "user_016",
        "target": "user_088",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-12 08:00"
      },
      {
        "source": "user_119",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-12 09:00"
      },
      {
        "source": "user_014",
        "target": "user_051",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-12 09:00"
      },
      {
        "source": "user_099",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-12 12:00"
      },
      {
        "source": "user_105",
        "target": "user_116",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-12 13:00"
      },
      {
        "source": "user_160",
        "target": "user_079",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-12 14:00"
      },
      {
        "source": "user_082",
        "target": "user_175",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-12 16:00"
      },
      {
        "source": "user_085",
        "target": "user_116",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-12 17:00"
      },
      {
        "source": "user_085",
        "target": "user_137",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-12 20:00"
      },
      {
        "source": "user_068",
        "target": "user_144",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-12 21:00"
      },
      {
        "source": "user_160",
        "target": "user_175",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-12 23:00"
      },
      {
        "source": "user_035",
        "target": "user_015",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-13 00:00"
      },
      {
        "source": "user_160",
        "target": "user_165",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-13 00:00"
      },
      {
        "source": "user_019",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-13 01:00"
      },
      {
        "source": "user_168",
        "target": "user_097",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-13 01:00"
      },
      {
        "source": "user_053",
        "target": "user_162",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-13 02:00"
      },
      {
        "source": "user_084",
        "target": "user_085",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-13 02:00"
      },
      {
        "source": "user_055",
        "target": "user_044",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-13 03:00"
      },
      {
        "source": "user_009",
        "target": "user_132",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-13 04:00"
      },
      {
        "source": "user_013",
        "target": "user_016",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-13 05:00"
      },
      {
        "source": "user_105",
        "target": "user_150",
        "weight": 9,
        "interaction_type": "share",
        "timestamp": "2026-01-13 06:00"
      },
      {
        "source": "user_159",
        "target": "user_018",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-13 07:00"
      },
      {
        "source": "user_063",
        "target": "user_021",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-13 07:00"
      },
      {
        "source": "user_105",
        "target": "user_007",
        "weight": 5,
        "interaction_type": "reply",
        "timestamp": "2026-01-13 08:00"
      },
      {
        "source": "user_105",
        "target": "user_127",
        "weight": 5,
        "interaction_type": "follow",
        "timestamp": "2026-01-13 08:00"
      },
      {
        "source": "user_105",
        "target": "user_166",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-13 10:00"
      },
      {
        "source": "user_082",
        "target": "user_090",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-13 11:00"
      },
      {
        "source": "user_105",
        "target": "user_040",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-13 12:00"
      },
      {
        "source": "user_071",
        "target": "user_131",
        "weight": 2,
        "interaction_type": "mention",
        "timestamp": "2026-01-13 13:00"
      },
      {
        "source": "user_110",
        "target": "user_064",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-13 13:00"
      },
      {
        "source": "user_104",
        "target": "user_094",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-13 13:00"
      },
      {
        "source": "user_105",
        "target": "user_109",
        "weight": 6,
        "interaction_type": "mention",
        "timestamp": "2026-01-13 14:00"
      },
      {
        "source": "user_151",
        "target": "user_130",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-13 14:00"
      },
      {
        "source": "user_126",
        "target": "user_048",
        "weight": 3,
        "interaction_type": "follow",
        "timestamp": "2026-01-13 15:00"
      },
      {
        "source": "user_105",
        "target": "user_010",
        "weight": 5,
        "interaction_type": "reply",
        "timestamp": "2026-01-13 18:00"
      },
      {
        "source": "user_177",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-13 18:00"
      },
      {
        "source": "user_103",
        "target": "user_102",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-13 18:00"
      },
      {
        "source": "user_015",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-13 22:00"
      },
      {
        "source": "user_160",
        "target": "user_084",
        "weight": 3,
        "interaction_type": "mention",
        "timestamp": "2026-01-13 23:00"
      },
      {
        "source": "user_174",
        "target": "user_066",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-14 00:00"
      },
      {
        "source": "user_023",
        "target": "user_077",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-14 01:00"
      },
      {
        "source": "user_150",
        "target": "user_033",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-14 02:00"
      },
      {
        "source": "user_105",
        "target": "user_068",
        "weight": 5,
        "interaction_type": "share",
        "timestamp": "2026-01-14 02:00"
      },
      {
        "source": "user_064",
        "target": "user_134",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-14 03:00"
      },
      {
        "source": "user_116",
        "target": "user_029",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-14 03:00"
      },
      {
        "source": "user_026",
        "target": "user_005",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-14 04:00"
      },
      {
        "source": "user_055",
        "target": "user_078",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-14 07:00"
      },
      {
        "source": "user_097",
        "target": "user_074",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-14 07:00"
      },
      {
        "source": "user_160",
        "target": "user_034",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-14 08:00"
      },
      {
        "source": "user_016",
        "target": "user_050",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-14 08:00"
      },
      {
        "source": "user_096",
        "target": "user_039",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-14 10:00"
      },
      {
        "source": "user_061",
        "target": "user_041",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-14 10:00"
      },
      {
        "source": "user_105",
        "target": "user_035",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-14 11:00"
      },
      {
        "source": "user_160",
        "target": "user_095",
        "weight": 6,
        "interaction_type": "follow",
        "timestamp": "2026-01-14 13:00"
      },
      {
        "source": "user_045",
        "target": "user_143",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-14 14:00"
      },
      {
        "source": "user_160",
        "target": "user_014",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-14 15:00"
      },
      {
        "source": "user_016",
        "target": "user_168",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-14 17:00"
      },
      {
        "source": "user_176",
        "target": "user_164",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-14 18:00"
      },
      {
        "source": "user_039",
        "target": "user_094",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-14 19:00"
      },
      {
        "source": "user_076",
        "target": "user_098",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-14 19:00"
      },
      {
        "source": "user_105",
        "target": "user_033",
        "weight": 5,
        "interaction_type": "mention",
        "timestamp": "2026-01-14 20:00"
      },
      {
        "source": "user_166",
        "target": "user_084",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-14 22:00"
      },
      {
        "source": "user_143",
        "target": "user_092",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-14 23:00"
      },
      {
        "source": "user_141",
        "target": "user_146",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-15 00:00"
      },
      {
        "source": "user_130",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-15 01:00"
      },
      {
        "source": "user_160",
        "target": "user_073",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-15 01:00"
      },
      {
        "source": "user_107",
        "target": "user_014",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-15 01:00"
      },
      {
        "source": "user_036",
        "target": "user_179",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-15 02:00"
      },
      {
        "source": "user_168",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-15 02:00"
      },
      {
        "source": "user_166",
        "target": "user_055",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-15 04:00"
      },
      {
        "source": "user_018",
        "target": "user_028",
        "weight": 2,
        "interaction_type": "mention",
        "timestamp": "2026-01-15 05:00"
      },
      {
        "source": "user_034",
        "target": "user_089",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-15 06:00"
      },
      {
        "source": "user_038",
        "target": "user_048",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-15 07:00"
      },
      {
        "source": "user_128",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-15 08:00"
      },
      {
        "source": "user_105",
        "target": "user_152",
        "weight": 2,
        "interaction_type": "follow",
        "timestamp": "2026-01-15 11:00"
      },
      {
        "source": "user_014",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-15 11:00"
      },
      {
        "source": "user_132",
        "target": "user_146",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-15 12:00"
      },
      {
        "source": "user_027",
        "target": "user_111",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-15 12:00"
      },
      {
        "source": "user_035",
        "target": "user_157",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-15 12:00"
      },
      {
        "source": "user_051",
        "target": "user_057",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-15 15:00"
      },
      {
        "source": "user_171",
        "target": "user_077",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-15 15:00"
      },
      {
        "source": "user_030",
        "target": "user_120",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-15 17:00"
      },
      {
        "source": "user_177",
        "target": "user_170",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-15 18:00"
      },
      {
        "source": "user_034",
        "target": "user_115",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-15 18:00"
      },
      {
        "source": "user_143",
        "target": "user_132",
        "weight": 2,
        "interaction_type": "mention",
        "timestamp": "2026-01-15 19:00"
      },
      {
        "source": "user_082",
        "target": "user_000",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-15 20:00"
      },
      {
        "source": "user_163",
        "target": "user_087",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-15 21:00"
      },
      {
        "source": "user_125",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-15 23:00"
      },
      {
        "source": "user_001",
        "target": "user_033",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-16 00:00"
      },
      {
        "source": "user_070",
        "target": "user_009",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-16 00:00"
      },
      {
        "source": "user_177",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-16 01:00"
      },
      {
        "source": "user_047",
        "target": "user_032",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-16 02:00"
      },
      {
        "source": "user_038",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-16 02:00"
      },
      {
        "source": "user_126",
        "target": "user_168",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-16 03:00"
      },
      {
        "source": "user_107",
        "target": "user_102",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-16 04:00"
      },
      {
        "source": "user_121",
        "target": "user_118",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-16 04:00"
      },
      {
        "source": "user_160",
        "target": "user_064",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-16 06:00"
      },
      {
        "source": "user_091",
        "target": "user_179",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-16 07:00"
      },
      {
        "source": "user_078",
        "target": "user_133",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-16 12:00"
      },
      {
        "source": "user_082",
        "target": "user_067",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-16 13:00"
      },
      {
        "source": "user_163",
        "target": "user_168",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-16 13:00"
      },
      {
        "source": "user_077",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-16 13:00"
      },
      {
        "source": "user_168",
        "target": "user_056",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-16 15:00"
      },
      {
        "source": "user_121",
        "target": "user_084",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-16 17:00"
      },
      {
        "source": "user_060",
        "target": "user_048",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-16 19:00"
      },
      {
        "source": "user_141",
        "target": "user_155",
        "weight": 3,
        "interaction_type": "follow",
        "timestamp": "2026-01-16 19:00"
      },
      {
        "source": "user_071",
        "target": "user_074",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-16 21:00"
      },
      {
        "source": "user_152",
        "target": "user_057",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-16 23:00"
      },
      {
        "source": "user_017",
        "target": "user_077",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-16 23:00"
      },
      {
        "source": "user_020",
        "target": "user_138",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-16 23:00"
      },
      {
        "source": "user_160",
        "target": "user_122",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-17 00:00"
      },
      {
        "source": "user_064",
        "target": "user_065",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-17 00:00"
      },
      {
        "source": "user_126",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-17 01:00"
      },
      {
        "source": "user_178",
        "target": "user_124",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-17 02:00"
      },
      {
        "source": "user_030",
        "target": "user_103",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-17 02:00"
      },
      {
        "source": "user_094",
        "target": "user_149",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-17 03:00"
      },
      {
        "source": "user_102",
        "target": "user_139",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-17 03:00"
      },
      {
        "source": "user_001",
        "target": "user_060",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-17 10:00"
      },
      {
        "source": "user_178",
        "target": "user_055",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-17 11:00"
      },
      {
        "source": "user_105",
        "target": "user_162",
        "weight": 6,
        "interaction_type": "mention",
        "timestamp": "2026-01-17 14:00"
      },
      {
        "source": "user_160",
        "target": "user_143",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-17 14:00"
      },
      {
        "source": "user_063",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-17 16:00"
      },
      {
        "source": "user_038",
        "target": "user_080",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-17 18:00"
      },
      {
        "source": "user_105",
        "target": "user_167",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-17 18:00"
      },
      {
        "source": "user_171",
        "target": "user_016",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-17 19:00"
      },
      {
        "source": "user_145",
        "target": "user_036",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-17 19:00"
      },
      {
        "source": "user_173",
        "target": "user_080",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-17 19:00"
      },
      {
        "source": "user_105",
        "target": "user_014",
        "weight": 8,
        "interaction_type": "mention",
        "timestamp": "2026-01-17 20:00"
      },
      {
        "source": "user_135",
        "target": "user_076",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-17 20:00"
      },
      {
        "source": "user_114",
        "target": "user_034",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-17 21:00"
      },
      {
        "source": "user_097",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-17 21:00"
      },
      {
        "source": "user_102",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-17 21:00"
      },
      {
        "source": "user_059",
        "target": "user_018",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-17 22:00"
      },
      {
        "source": "user_141",
        "target": "user_020",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-18 00:00"
      },
      {
        "source": "user_131",
        "target": "user_008",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-18 05:00"
      },
      {
        "source": "user_101",
        "target": "user_144",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-18 07:00"
      },
      {
        "source": "user_071",
        "target": "user_120",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-18 07:00"
      },
      {
        "source": "user_178",
        "target": "user_148",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-18 08:00"
      },
      {
        "source": "user_012",
        "target": "user_095",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-18 08:00"
      },
      {
        "source": "user_171",
        "target": "user_029",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-18 13:00"
      },
      {
        "source": "user_160",
        "target": "user_045",
        "weight": 4,
        "interaction_type": "mention",
        "timestamp": "2026-01-18 14:00"
      },
      {
        "source": "user_138",
        "target": "user_143",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-18 15:00"
      },
      {
        "source": "user_145",
        "target": "user_097",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-18 16:00"
      },
      {
        "source": "user_160",
        "target": "user_153",
        "weight": 6,
        "interaction_type": "follow",
        "timestamp": "2026-01-18 20:00"
      },
      {
        "source": "user_120",
        "target": "user_090",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-18 21:00"
      },
      {
        "source": "user_086",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-19 01:00"
      },
      {
        "source": "user_019",
        "target": "user_018",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-19 02:00"
      },
      {
        "source": "user_153",
        "target": "user_061",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-19 05:00"
      },
      {
        "source": "user_148",
        "target": "user_046",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-19 05:00"
      },
      {
        "source": "user_029",
        "target": "user_141",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-19 06:00"
      },
      {
        "source": "user_017",
        "target": "user_028",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-19 06:00"
      },
      {
        "source": "user_160",
        "target": "user_141",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-19 06:00"
      },
      {
        "source": "user_129",
        "target": "user_089",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-19 06:00"
      },
      {
        "source": "user_160",
        "target": "user_105",
        "weight": 7,
        "interaction_type": "reply",
        "timestamp": "2026-01-19 07:00"
      },
      {
        "source": "user_177",
        "target": "user_036",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-19 07:00"
      },
      {
        "source": "user_014",
        "target": "user_136",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-19 07:00"
      },
      {
        "source": "user_039",
        "target": "user_103",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-19 10:00"
      },
      {
        "source": "user_025",
        "target": "user_075",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-19 10:00"
      },
      {
        "source": "user_105",
        "target": "user_053",
        "weight": 7,
        "interaction_type": "mention",
        "timestamp": "2026-01-19 12:00"
      },
      {
        "source": "user_013",
        "target": "user_074",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-19 15:00"
      },
      {
        "source": "user_143",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-19 16:00"
      },
      {
        "source": "user_168",
        "target": "user_091",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-19 16:00"
      },
      {
        "source": "user_024",
        "target": "user_071",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-19 16:00"
      },
      {
        "source": "user_160",
        "target": "user_085",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-19 17:00"
      },
      {
        "source": "user_048",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-19 18:00"
      },
      {
        "source": "user_094",
        "target": "user_002",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-19 20:00"
      },
      {
        "source": "user_143",
        "target": "user_071",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-19 21:00"
      },
      {
        "source": "user_068",
        "target": "user_162",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-19 21:00"
      },
      {
        "source": "user_109",
        "target": "user_016",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-19 23:00"
      },
      {
        "source": "user_001",
        "target": "user_087",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-20 00:00"
      },
      {
        "source": "user_098",
        "target": "user_178",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-20 02:00"
      },
      {
        "source": "user_053",
        "target": "user_107",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-20 03:00"
      },
      {
        "source": "user_105",
        "target": "user_036",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-20 03:00"
      },
      {
        "source": "user_105",
        "target": "user_155",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-20 04:00"
      },
      {
        "source": "user_114",
        "target": "user_064",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-20 07:00"
      },
      {
        "source": "user_138",
        "target": "user_125",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-20 09:00"
      },
      {
        "source": "user_097",
        "target": "user_109",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-20 09:00"
      },
      {
        "source": "user_093",
        "target": "user_003",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-20 09:00"
      },
      {
        "source": "user_120",
        "target": "user_025",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-20 10:00"
      },
      {
        "source": "user_026",
        "target": "user_100",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-20 11:00"
      },
      {
        "source": "user_165",
        "target": "user_006",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-20 12:00"
      },
      {
        "source": "user_084",
        "target": "user_171",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-20 12:00"
      },
      {
        "source": "user_127",
        "target": "user_010",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-20 15:00"
      },
      {
        "source": "user_001",
        "target": "user_013",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-20 15:00"
      },
      {
        "source": "user_118",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-20 15:00"
      },
      {
        "source": "user_105",
        "target": "user_088",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-20 15:00"
      },
      {
        "source": "user_127",
        "target": "user_136",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-20 18:00"
      },
      {
        "source": "user_024",
        "target": "user_075",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-20 19:00"
      },
      {
        "source": "user_143",
        "target": "user_117",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-20 19:00"
      },
      {
        "source": "user_094",
        "target": "user_042",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-20 20:00"
      },
      {
        "source": "user_035",
        "target": "user_045",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-20 20:00"
      },
      {
        "source": "user_005",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-21 01:00"
      },
      {
        "source": "user_132",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-21 03:00"
      },
      {
        "source": "user_123",
        "target": "user_126",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-21 03:00"
      },
      {
        "source": "user_177",
        "target": "user_163",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-21 03:00"
      },
      {
        "source": "user_107",
        "target": "user_135",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-21 04:00"
      },
      {
        "source": "user_126",
        "target": "user_067",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-21 05:00"
      },
      {
        "source": "user_124",
        "target": "user_049",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-21 06:00"
      },
      {
        "source": "user_142",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-21 06:00"
      },
      {
        "source": "user_143",
        "target": "user_141",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-21 08:00"
      },
      {
        "source": "user_121",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-21 08:00"
      },
      {
        "source": "user_082",
        "target": "user_071",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-21 08:00"
      },
      {
        "source": "user_128",
        "target": "user_008",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-21 09:00"
      },
      {
        "source": "user_125",
        "target": "user_029",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-21 09:00"
      },
      {
        "source": "user_068",
        "target": "user_136",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-21 10:00"
      },
      {
        "source": "user_016",
        "target": "user_157",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-21 12:00"
      },
      {
        "source": "user_007",
        "target": "user_026",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-21 13:00"
      },
      {
        "source": "user_171",
        "target": "user_177",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-21 14:00"
      },
      {
        "source": "user_017",
        "target": "user_104",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-21 14:00"
      },
      {
        "source": "user_026",
        "target": "user_039",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-21 17:00"
      },
      {
        "source": "user_157",
        "target": "user_050",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-21 18:00"
      },
      {
        "source": "user_117",
        "target": "user_142",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-21 22:00"
      },
      {
        "source": "user_106",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-22 00:00"
      },
      {
        "source": "user_016",
        "target": "user_172",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-22 01:00"
      },
      {
        "source": "user_087",
        "target": "user_035",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-22 01:00"
      },
      {
        "source": "user_126",
        "target": "user_145",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-22 06:00"
      },
      {
        "source": "user_141",
        "target": "user_143",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-22 07:00"
      },
      {
        "source": "user_094",
        "target": "user_105",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-22 08:00"
      },
      {
        "source": "user_083",
        "target": "user_123",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-22 09:00"
      },
      {
        "source": "user_105",
        "target": "user_136",
        "weight": 6,
        "interaction_type": "reply",
        "timestamp": "2026-01-22 14:00"
      },
      {
        "source": "user_175",
        "target": "user_088",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-22 15:00"
      },
      {
        "source": "user_071",
        "target": "user_106",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-22 17:00"
      },
      {
        "source": "user_138",
        "target": "user_116",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-22 18:00"
      },
      {
        "source": "user_092",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-22 18:00"
      },
      {
        "source": "user_150",
        "target": "user_004",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-22 19:00"
      },
      {
        "source": "user_105",
        "target": "user_126",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-22 19:00"
      },
      {
        "source": "user_105",
        "target": "user_071",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-22 21:00"
      },
      {
        "source": "user_072",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 00:00"
      },
      {
        "source": "user_143",
        "target": "user_142",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-23 00:00"
      },
      {
        "source": "user_151",
        "target": "user_143",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-23 00:00"
      },
      {
        "source": "user_153",
        "target": "user_064",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 01:00"
      },
      {
        "source": "user_120",
        "target": "user_131",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 01:00"
      },
      {
        "source": "user_120",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 02:00"
      },
      {
        "source": "user_111",
        "target": "user_046",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-23 02:00"
      },
      {
        "source": "user_171",
        "target": "user_021",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-23 05:00"
      },
      {
        "source": "user_049",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-23 06:00"
      },
      {
        "source": "user_089",
        "target": "user_129",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 06:00"
      },
      {
        "source": "user_047",
        "target": "user_090",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 08:00"
      },
      {
        "source": "user_160",
        "target": "user_089",
        "weight": 4,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 09:00"
      },
      {
        "source": "user_153",
        "target": "user_078",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-23 09:00"
      },
      {
        "source": "user_123",
        "target": "user_145",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-23 11:00"
      },
      {
        "source": "user_062",
        "target": "user_173",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 12:00"
      },
      {
        "source": "user_105",
        "target": "user_099",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 16:00"
      },
      {
        "source": "user_105",
        "target": "user_174",
        "weight": 3,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 17:00"
      },
      {
        "source": "user_016",
        "target": "user_105",
        "weight": 2,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 17:00"
      },
      {
        "source": "user_137",
        "target": "user_001",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-23 17:00"
      },
      {
        "source": "user_148",
        "target": "user_178",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 21:00"
      },
      {
        "source": "user_074",
        "target": "user_157",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-23 22:00"
      },
      {
        "source": "user_160",
        "target": "user_065",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-23 22:00"
      },
      {
        "source": "user_016",
        "target": "user_170",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 22:00"
      },
      {
        "source": "user_082",
        "target": "user_012",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-23 22:00"
      },
      {
        "source": "user_082",
        "target": "user_158",
        "weight": 2,
        "interaction_type": "mention",
        "timestamp": "2026-01-23 23:00"
      },
      {
        "source": "user_086",
        "target": "user_111",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-23 23:00"
      },
      {
        "source": "user_105",
        "target": "user_143",
        "weight": 5,
        "interaction_type": "follow",
        "timestamp": "2026-01-24 00:00"
      },
      {
        "source": "user_105",
        "target": "user_144",
        "weight": 7,
        "interaction_type": "mention",
        "timestamp": "2026-01-24 01:00"
      },
      {
        "source": "user_120",
        "target": "user_166",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-24 01:00"
      },
      {
        "source": "user_156",
        "target": "user_177",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-24 01:00"
      },
      {
        "source": "user_171",
        "target": "user_112",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-24 02:00"
      },
      {
        "source": "user_068",
        "target": "user_113",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-24 02:00"
      },
      {
        "source": "user_031",
        "target": "user_103",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-24 02:00"
      },
      {
        "source": "user_071",
        "target": "user_025",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-24 03:00"
      },
      {
        "source": "user_061",
        "target": "user_137",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-24 03:00"
      },
      {
        "source": "user_105",
        "target": "user_039",
        "weight": 8,
        "interaction_type": "reply",
        "timestamp": "2026-01-24 04:00"
      },
      {
        "source": "user_142",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-24 04:00"
      },
      {
        "source": "user_094",
        "target": "user_043",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-24 05:00"
      },
      {
        "source": "user_105",
        "target": "user_102",
        "weight": 8,
        "interaction_type": "follow",
        "timestamp": "2026-01-24 06:00"
      },
      {
        "source": "user_114",
        "target": "user_149",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-24 06:00"
      },
      {
        "source": "user_014",
        "target": "user_000",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-24 08:00"
      },
      {
        "source": "user_000",
        "target": "user_051",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-24 09:00"
      },
      {
        "source": "user_103",
        "target": "user_026",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-24 11:00"
      },
      {
        "source": "user_164",
        "target": "user_092",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-24 11:00"
      },
      {
        "source": "user_126",
        "target": "user_083",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-24 12:00"
      },
      {
        "source": "user_119",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-24 13:00"
      },
      {
        "source": "user_108",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-24 13:00"
      },
      {
        "source": "user_000",
        "target": "user_149",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-24 14:00"
      },
      {
        "source": "user_057",
        "target": "user_100",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-24 14:00"
      },
      {
        "source": "user_163",
        "target": "user_156",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-24 14:00"
      },
      {
        "source": "user_078",
        "target": "user_159",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-24 14:00"
      },
      {
        "source": "user_105",
        "target": "user_051",
        "weight": 5,
        "interaction_type": "follow",
        "timestamp": "2026-01-24 15:00"
      },
      {
        "source": "user_151",
        "target": "user_029",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-24 15:00"
      },
      {
        "source": "user_160",
        "target": "user_142",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-24 16:00"
      },
      {
        "source": "user_105",
        "target": "user_108",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-24 17:00"
      },
      {
        "source": "user_105",
        "target": "user_005",
        "weight": 6,
        "interaction_type": "reply",
        "timestamp": "2026-01-24 21:00"
      },
      {
        "source": "user_052",
        "target": "user_076",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-24 21:00"
      },
      {
        "source": "user_149",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-24 21:00"
      },
      {
        "source": "user_088",
        "target": "user_012",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-24 21:00"
      },
      {
        "source": "user_176",
        "target": "user_151",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-24 23:00"
      },
      {
        "source": "user_029",
        "target": "user_073",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-25 00:00"
      },
      {
        "source": "user_168",
        "target": "user_123",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-25 00:00"
      },
      {
        "source": "user_062",
        "target": "user_148",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-25 02:00"
      },
      {
        "source": "user_020",
        "target": "user_019",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-25 02:00"
      },
      {
        "source": "user_177",
        "target": "user_074",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-25 02:00"
      },
      {
        "source": "user_091",
        "target": "user_014",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-25 02:00"
      },
      {
        "source": "user_171",
        "target": "user_020",
        "weight": 2,
        "interaction_type": "follow",
        "timestamp": "2026-01-25 06:00"
      },
      {
        "source": "user_145",
        "target": "user_083",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-25 06:00"
      },
      {
        "source": "user_006",
        "target": "user_122",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-25 06:00"
      },
      {
        "source": "user_096",
        "target": "user_102",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-25 08:00"
      },
      {
        "source": "user_089",
        "target": "user_043",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-25 09:00"
      },
      {
        "source": "user_160",
        "target": "user_006",
        "weight": 6,
        "interaction_type": "follow",
        "timestamp": "2026-01-25 09:00"
      },
      {
        "source": "user_084",
        "target": "user_173",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-25 09:00"
      },
      {
        "source": "user_117",
        "target": "user_029",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-25 09:00"
      },
      {
        "source": "user_032",
        "target": "user_120",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-25 10:00"
      },
      {
        "source": "user_104",
        "target": "user_027",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-25 10:00"
      },
      {
        "source": "user_171",
        "target": "user_174",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-25 12:00"
      },
      {
        "source": "user_110",
        "target": "user_125",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-25 12:00"
      },
      {
        "source": "user_136",
        "target": "user_045",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-25 13:00"
      },
      {
        "source": "user_117",
        "target": "user_126",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-25 14:00"
      },
      {
        "source": "user_005",
        "target": "user_174",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-25 14:00"
      },
      {
        "source": "user_141",
        "target": "user_014",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-25 14:00"
      },
      {
        "source": "user_073",
        "target": "user_061",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-25 17:00"
      },
      {
        "source": "user_019",
        "target": "user_112",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-25 17:00"
      },
      {
        "source": "user_090",
        "target": "user_158",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-25 19:00"
      },
      {
        "source": "user_136",
        "target": "user_051",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-25 22:00"
      },
      {
        "source": "user_160",
        "target": "user_169",
        "weight": 3,
        "interaction_type": "reply",
        "timestamp": "2026-01-25 23:00"
      },
      {
        "source": "user_018",
        "target": "user_173",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-25 23:00"
      },
      {
        "source": "user_107",
        "target": "user_070",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-26 01:00"
      },
      {
        "source": "user_018",
        "target": "user_046",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-26 02:00"
      },
      {
        "source": "user_093",
        "target": "user_005",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-26 03:00"
      },
      {
        "source": "user_005",
        "target": "user_101",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-26 03:00"
      },
      {
        "source": "user_124",
        "target": "user_070",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-26 04:00"
      },
      {
        "source": "user_077",
        "target": "user_142",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-26 04:00"
      },
      {
        "source": "user_143",
        "target": "user_070",
        "weight": 5,
        "interaction_type": "reply",
        "timestamp": "2026-01-26 07:00"
      },
      {
        "source": "user_097",
        "target": "user_031",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-26 07:00"
      },
      {
        "source": "user_016",
        "target": "user_097",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-26 08:00"
      },
      {
        "source": "user_081",
        "target": "user_014",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-26 08:00"
      },
      {
        "source": "user_151",
        "target": "user_160",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-26 09:00"
      },
      {
        "source": "user_094",
        "target": "user_030",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-26 10:00"
      },
      {
        "source": "user_126",
        "target": "user_074",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-26 10:00"
      },
      {
        "source": "user_168",
        "target": "user_170",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-26 10:00"
      },
      {
        "source": "user_105",
        "target": "user_160",
        "weight": 5,
        "interaction_type": "share",
        "timestamp": "2026-01-26 13:00"
      },
      {
        "source": "user_145",
        "target": "user_013",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-26 13:00"
      },
      {
        "source": "user_018",
        "target": "user_022",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-26 15:00"
      },
      {
        "source": "user_105",
        "target": "user_032",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-26 17:00"
      },
      {
        "source": "user_070",
        "target": "user_125",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-26 18:00"
      },
      {
        "source": "user_176",
        "target": "user_060",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-26 20:00"
      },
      {
        "source": "user_062",
        "target": "user_171",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-26 21:00"
      },
      {
        "source": "user_155",
        "target": "user_176",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-26 21:00"
      },
      {
        "source": "user_016",
        "target": "user_156",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-27 00:00"
      },
      {
        "source": "user_096",
        "target": "user_010",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-27 00:00"
      },
      {
        "source": "user_137",
        "target": "user_084",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-27 00:00"
      },
      {
        "source": "user_166",
        "target": "user_041",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-27 00:00"
      },
      {
        "source": "user_137",
        "target": "user_085",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-27 01:00"
      },
      {
        "source": "user_028",
        "target": "user_178",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-27 03:00"
      },
      {
        "source": "user_123",
        "target": "user_015",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-27 04:00"
      },
      {
        "source": "user_160",
        "target": "user_129",
        "weight": 3,
        "interaction_type": "share",
        "timestamp": "2026-01-27 06:00"
      },
      {
        "source": "user_063",
        "target": "user_171",
        "weight": 2,
        "interaction_type": "follow",
        "timestamp": "2026-01-27 07:00"
      },
      {
        "source": "user_127",
        "target": "user_105",
        "weight": 2,
        "interaction_type": "reply",
        "timestamp": "2026-01-27 08:00"
      },
      {
        "source": "user_160",
        "target": "user_117",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-27 08:00"
      },
      {
        "source": "user_105",
        "target": "user_026",
        "weight": 8,
        "interaction_type": "reply",
        "timestamp": "2026-01-27 09:00"
      },
      {
        "source": "user_095",
        "target": "user_065",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-27 09:00"
      },
      {
        "source": "user_166",
        "target": "user_069",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-27 10:00"
      },
      {
        "source": "user_134",
        "target": "user_081",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-27 11:00"
      },
      {
        "source": "user_101",
        "target": "user_039",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-27 11:00"
      },
      {
        "source": "user_105",
        "target": "user_170",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-27 11:00"
      },
      {
        "source": "user_105",
        "target": "user_120",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-27 13:00"
      },
      {
        "source": "user_105",
        "target": "user_078",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-27 15:00"
      },
      {
        "source": "user_148",
        "target": "user_044",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-27 16:00"
      },
      {
        "source": "user_068",
        "target": "user_102",
        "weight": 2,
        "interaction_type": "follow",
        "timestamp": "2026-01-27 17:00"
      },
      {
        "source": "user_105",
        "target": "user_052",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-27 18:00"
      },
      {
        "source": "user_047",
        "target": "user_124",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-27 21:00"
      },
      {
        "source": "user_090",
        "target": "user_120",
        "weight": 2,
        "interaction_type": "mention",
        "timestamp": "2026-01-27 21:00"
      },
      {
        "source": "user_107",
        "target": "user_144",
        "weight": 2,
        "interaction_type": "share",
        "timestamp": "2026-01-27 21:00"
      },
      {
        "source": "user_073",
        "target": "user_006",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-27 22:00"
      },
      {
        "source": "user_130",
        "target": "user_117",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-27 22:00"
      },
      {
        "source": "user_160",
        "target": "user_003",
        "weight": 3,
        "interaction_type": "follow",
        "timestamp": "2026-01-28 01:00"
      },
      {
        "source": "user_143",
        "target": "user_138",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-28 01:00"
      },
      {
        "source": "user_016",
        "target": "user_029",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-28 03:00"
      },
      {
        "source": "user_103",
        "target": "user_101",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-28 03:00"
      },
      {
        "source": "user_168",
        "target": "user_074",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-28 03:00"
      },
      {
        "source": "user_104",
        "target": "user_020",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-28 05:00"
      },
      {
        "source": "user_082",
        "target": "user_002",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-28 10:00"
      },
      {
        "source": "user_136",
        "target": "user_005",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-28 13:00"
      },
      {
        "source": "user_119",
        "target": "user_064",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-28 14:00"
      },
      {
        "source": "user_014",
        "target": "user_162",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-28 14:00"
      },
      {
        "source": "user_016",
        "target": "user_127",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-28 17:00"
      },
      {
        "source": "user_171",
        "target": "user_117",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-28 18:00"
      },
      {
        "source": "user_143",
        "target": "user_020",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-28 19:00"
      },
      {
        "source": "user_086",
        "target": "user_139",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-28 20:00"
      },
      {
        "source": "user_049",
        "target": "user_071",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-28 21:00"
      },
      {
        "source": "user_148",
        "target": "user_175",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-28 22:00"
      },
      {
        "source": "user_079",
        "target": "user_063",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-29 00:00"
      },
      {
        "source": "user_117",
        "target": "user_082",
        "weight": 2,
        "interaction_type": "follow",
        "timestamp": "2026-01-29 00:00"
      },
      {
        "source": "user_126",
        "target": "user_056",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-29 00:00"
      },
      {
        "source": "user_023",
        "target": "user_138",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-29 03:00"
      },
      {
        "source": "user_167",
        "target": "user_107",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-29 03:00"
      },
      {
        "source": "user_054",
        "target": "user_036",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-29 05:00"
      },
      {
        "source": "user_050",
        "target": "user_177",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-29 06:00"
      },
      {
        "source": "user_071",
        "target": "user_171",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-29 07:00"
      },
      {
        "source": "user_071",
        "target": "user_042",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-29 12:00"
      },
      {
        "source": "user_016",
        "target": "user_036",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-29 13:00"
      },
      {
        "source": "user_031",
        "target": "user_097",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-29 14:00"
      },
      {
        "source": "user_123",
        "target": "user_013",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-29 16:00"
      },
      {
        "source": "user_105",
        "target": "user_125",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-29 18:00"
      },
      {
        "source": "user_010",
        "target": "user_053",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-29 19:00"
      },
      {
        "source": "user_139",
        "target": "user_080",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-29 19:00"
      },
      {
        "source": "user_174",
        "target": "user_125",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-29 20:00"
      },
      {
        "source": "user_048",
        "target": "user_067",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-29 21:00"
      },
      {
        "source": "user_160",
        "target": "user_093",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-29 21:00"
      },
      {
        "source": "user_078",
        "target": "user_044",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-29 22:00"
      },
      {
        "source": "user_126",
        "target": "user_013",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-29 22:00"
      },
      {
        "source": "user_016",
        "target": "user_058",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-30 00:00"
      },
      {
        "source": "user_068",
        "target": "user_105",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-30 00:00"
      },
      {
        "source": "user_071",
        "target": "user_075",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-30 02:00"
      },
      {
        "source": "user_016",
        "target": "user_060",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-30 02:00"
      },
      {
        "source": "user_068",
        "target": "user_101",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-30 03:00"
      },
      {
        "source": "user_160",
        "target": "user_037",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-30 05:00"
      },
      {
        "source": "user_164",
        "target": "user_141",
        "weight": 1,
        "interaction_type": "share",
        "timestamp": "2026-01-30 05:00"
      },
      {
        "source": "user_119",
        "target": "user_169",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-30 06:00"
      },
      {
        "source": "user_053",
        "target": "user_033",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-30 07:00"
      },
      {
        "source": "user_014",
        "target": "user_101",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-30 09:00"
      },
      {
        "source": "user_137",
        "target": "user_105",
        "weight": 3,
        "interaction_type": "mention",
        "timestamp": "2026-01-30 10:00"
      },
      {
        "source": "user_078",
        "target": "user_111",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-30 12:00"
      },
      {
        "source": "user_095",
        "target": "user_137",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-30 15:00"
      },
      {
        "source": "user_116",
        "target": "user_092",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-30 16:00"
      },
      {
        "source": "user_105",
        "target": "user_066",
        "weight": 7,
        "interaction_type": "mention",
        "timestamp": "2026-01-30 19:00"
      },
      {
        "source": "user_008",
        "target": "user_082",
        "weight": 1,
        "interaction_type": "reply",
        "timestamp": "2026-01-30 21:00"
      },
      {
        "source": "user_036",
        "target": "user_126",
        "weight": 1,
        "interaction_type": "mention",
        "timestamp": "2026-01-30 21:00"
      },
      {
        "source": "user_022",
        "target": "user_059",
        "weight": 1,
        "interaction_type": "follow",
        "timestamp": "2026-01-30 22:00"
      }
    ]
  }
};
