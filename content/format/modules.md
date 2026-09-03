# Optional modules and importer contract

Draft v0.1

This page covers the optional modules and the importer contract. The point is to make the export format flexible without making it vague.

## Optional chat module

### Conversation

A `Conversation` is a container for messages. It can represent channel chat, threads, direct messages, or proxy logs.

Common fields:

- `id`
- `system_id`
- `kind`
- `title`
- `category`
- `description`
- `emoji`
- `participant_member_ids`
- `creator_member_id`
- `archived`
- `muted`
- `direct_message`
- `created_at`
- `sort_order`
- `source_refs`
- `extensions`

### ChatMessage

A `ChatMessage` is a single message in a conversation.

Common fields:

- `id`
- `conversation_id`
- `author_member_id`
- `kind`
- `body`
- `created_at`
- `edited_at`
- `reply_to_message_id`
- `attachment_asset_ids`
- `source_refs`
- `extensions`

### Attachment and Reaction

`Attachment` records carry richer metadata for uploaded media. `Reaction` records store emoji or app-specific reactions left on a message.

## Optional boards module

### BoardPost

A `BoardPost` is a post addressed to a member board or to the system-wide timeline.

Common fields:

- `id`
- `system_id`
- `target_member_id`
- `author_member_id`
- `title`
- `body`
- `audience`
- `pinned`
- `created_at`
- `written_at`
- `edited_at`
- `deleted_at`
- `source_refs`
- `extensions`

## Relationships module

The relationships module is provisional in v0.1. It should describe relationship types and member-to-member edges without forcing a final schema too early.

## Other modules

The remaining optional modules are sketched at card level in v0.1 and can be expanded later:

- polls
- reminders
- habits
- proxy
- sharing
- safety

## Importer contract

Importers should do the following:

1. Preserve `source_refs` and `extensions` from the source app.
2. Reject data that clearly violates the schema, but keep the rest.
3. Emit warnings for partial loss, degraded fidelity, or archive-only data.
4. Keep app-specific values namespaced under `extensions`.
5. Prefer stable mapping over forced normalization when compatibility is uncertain.

## ImportResult

An `ImportResult` can include:

- imported record counts
- warnings
- skipped records
- modules processed
- a summary of which source fields were dropped or transformed

## Validator plans

A validator should check:

- required fields
- UUID formatting
- ISO-8601 timestamps
- allowed enum values
- array shapes
- cross-record references such as `member_id` and `system_id`

## Related pages

- [Records](/format/records)
- [Fronting](/format/fronting)
