# Fronting model

Draft v0.1

This page covers the shared fronting model. The goal is to accept different source app shapes without forcing every app into one representation.

## How apps store fronting

| Source pattern | Examples | Best OpenPlural target |
| --- | --- | --- |
| Switch events | PluralKit | `front_events[]` directly |
| Per-member intervals | Prism, Simply Plural, OpenSelves, Ampersand, PluralSpace | One `FrontPeriod` per interval with a single `FrontAssignment` |
| Grouped intervals | Sheaf | One `FrontPeriod` per row and one `FrontAssignment` per member |
| Tiered periods | Plural Star | One `FrontPeriod` with tiered `front_role` assignments |

## Record shapes

### FrontPeriod

A `FrontPeriod` is an interval during which one or more members were fronting.

```json
{
  "id": "front_01HV4Z...",
  "system_id": "sys_01HV4Z...",
  "started_at": "2026-04-29T12:00:00Z",
  "ended_at": "2026-04-29T15:00:00Z",
  "assignments": [
    { "member_id": "mem_01HV4Z...", "front_role": "primary" },
    { "member_id": "mem_01HV5A...", "front_role": "co_front" }
  ],
  "status": null,
  "note": null,
  "source_kind": "tiered",
  "source_refs": [{ "app": "plural_star", "collection": "front_periods", "id": "p_..." }],
  "extensions": {}
}
```

Common fields:

- `id`
- `system_id`
- `started_at`
- `ended_at`
- `assignments`
- `status`
- `note`
- `source_kind`
- `source_refs`
- `extensions`

### FrontAssignment

A `FrontAssignment` records a single member's role within a specific fronting period.

Recommended `front_role` values:

- `primary`
- `co_front`
- `co_conscious`
- `influencing`
- `member`
- `custom_status`
- `unknown`

Common fields:

- `member_id`
- `front_role`
- `confidence`
- `presence`
- `mood`
- `energy`
- `location`
- `note`
- `source_refs`

### FrontEvent

A `FrontEvent` is a point-in-time switch. This fits PluralKit switch logs well.

```json
{
  "id": "event_01HV4Z...",
  "system_id": "sys_01HV4Z...",
  "at": "2026-04-29T12:00:00Z",
  "assignments": [{ "member_id": "mem_01HV4Z...", "front_role": "member" }],
  "note": null,
  "source_refs": [{ "app": "pluralkit", "collection": "switches", "id": "abcde" }],
  "extensions": {}
}
```

### FrontComment

A `FrontComment` is a comment anchored to a moment in time and optionally tied to a period or event.

Common fields:

- `id`
- `system_id`
- `front_period_id`
- `front_event_id`
- `target_time`
- `author_member_id`
- `body`
- `created_at`
- `edited_at`
- `source_refs`
- `extensions`

## Conversion notes

- Sheaf exporters should emit `front_periods[]` with one assignment per member and `source_kind: "grouped"`.
- Prism exporters should emit `front_periods[]` with single-member assignments and preserve overlapping periods when co-fronting exists.
- PluralKit exporters should emit `front_events[]` from the switch log and optionally derive `front_periods[]` for importers that need durations.
- Plural Star exporters should emit explicit `front_role` values for each tier.
- Importers without per-period roles should prefer the `primary` assignment when present, otherwise the first assignment.

## Related pages

- [Records](/format/records)
- [Modules and contract](/format/modules)
