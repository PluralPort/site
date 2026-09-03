# Records

Draft v0.1

This page covers the core records used by most PluralPort files. The goal is to keep the model readable, portable, and easy to round-trip between apps.

## Core record types

- `Producer`
- `Capabilities`
- `SourceRef`
- `Privacy`
- `Warning`
- `System`
- `Member`
- `Group`
- `GroupMembership`
- `TaxonomyTerm`
- `TaxonomyAssignment`
- `CustomFieldDefinition`
- `CustomFieldValue`
- `Note`
- `Asset`

## Shared conventions

- Use JSON objects and arrays.
- Use UTC timestamps in ISO-8601 format.
- Prefer UUIDv7 or ULID for file-local IDs.
- Preserve original IDs in `source_refs`.
- Put app-specific data in namespaced `extensions` objects.
- Report dropped or degraded data with `warnings`.

## Envelope helpers

### Producer

```json
{
  "app": "Prism",
  "app_version": "3.4.0",
  "exporter_version": "0.1.0",
  "app_id": "prism"
}
```

A producer object identifies the app that created the file.

### Capabilities

```json
{
  "modules": ["systems", "members", "groups", "taxonomy", "notes", "assets"]
}
```

This tells importers which sections are meaningful without scanning the whole export.

### SourceRef

```json
{
  "app": "sheaf",
  "collection": "members",
  "id": "0193..."
}
```

`source_refs` keeps the original app ID and collection so round-trips can be audited.

### Privacy

Privacy should be a conservative common model plus any raw source data needed to preserve fidelity.

### Warning

A warning should include at least:

- `level`: `info`, `warning`, or `error`
- `code`: a machine-readable string
- `message`: a human-readable explanation

## System

A `System` record describes a plurality system or subsystem.

Common fields:

- `id`
- `name`
- `display_name`
- `description`
- `tag`
- `color`
- `parent_system_id`
- `archived`
- `privacy`
- `source_refs`
- `extensions`

## Member

A `Member` record describes a member, alter, headmate, or custom front.

Common fields:

- `id`
- `system_id`
- `name`
- `display_name`
- `pronouns`
- `description`
- `birthday`
- `color`
- `avatar_asset_id`
- `archived`
- `source_refs`
- `extensions`

## Group and GroupMembership

A `Group` record represents a collection or relationship grouping within a system. A `GroupMembership` ties a member to a group.

## Taxonomy records

`TaxonomyTerm` and `TaxonomyAssignment` represent named categories, labels, and assignments such as roles, tags, or custom labels.

## Custom fields

`CustomFieldDefinition` and `CustomFieldValue` persist custom field definitions and the values assigned to records.

## Note and Asset

`Note` records are freeform text attached to members, systems, or other objects. `Asset` records represent images, files, and other media.

## Short example

```json
{
  "systems": [
    {
      "id": "sys_01",
      "name": "Example System",
      "archived": false
    }
  ],
  "members": [
    {
      "id": "mem_01",
      "system_id": "sys_01",
      "name": "wren",
      "pronouns": "they/them",
      "source_refs": [{ "app": "sheaf", "collection": "members", "id": "mem_4482" }]
    }
  ],
  "warnings": []
}
```

## Related pages

- [Fronting](/format/fronting)
- [Modules and contract](/format/modules)
