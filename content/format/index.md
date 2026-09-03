# PluralPort Format

Draft v0.1

This is the starting point for the PluralPort format spec. It covers the general rules, the top-level file envelope, and the shared fragments that appear across most records.

## Pages

- [Records](/format/records)
- [Fronting](/format/fronting)
- [Modules and contract](/format/modules)

## Data conventions

1. JSON is the canonical interchange format.
2. Timestamps use ISO-8601 in UTC.
3. Records use file-local IDs.
4. Original IDs live in `source_refs`.
5. App-specific fields live in namespaced `extensions`.
6. Loss or degradation should be reported in `warnings`.

## Top-level envelope

A PluralPort file is a JSON object with producer metadata, a capabilities declaration, and a set of module arrays.

```json
{
  "pluralport_version": "0.1",
  "exported_at": "2026-04-29T18:00:00Z",
  "producer": {
    "app": "Sheaf",
    "app_version": "1.4.2",
    "app_id": "sheaf"
  },
  "capabilities": {
    "modules": ["systems", "members", "groups", "taxonomy", "notes", "assets"]
  },
  "systems": [],
  "members": [],
  "groups": [],
  "front_periods": [],
  "front_events": [],
  "notes": [],
  "assets": [],
  "extensions": {},
  "warnings": []
}
```

## Shared record fragments

| Fragment | Shape | Purpose |
| --- | --- | --- |
| `source_refs` | `SourceRef[]` | Keeps original IDs from the source app. |
| `extensions` | `Record<string, unknown>` | Preserves app-specific fields without forcing a shared schema. |
| `privacy` | `Privacy` | Carries a common privacy model while preserving source detail. |
| `warnings` | `Warning[]` | Reports skipped, degraded, or repaired data. |

## Registered app IDs

Use these short IDs in `SourceRef.app` and in extension namespaces:

- `prism`
- `sheaf`
- `simply_plural`
- `pluralkit`
- `octocon`
- `plural_star`
- `lighthouse`
- `openselves`
- `ampersand`
- `pluralspace`

New IDs should be added through the repo. Private namespaces can use reverse-DNS keys such as `com.example.app` inside `extensions`.
