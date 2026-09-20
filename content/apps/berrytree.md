---
name: BerryTree
app_id: berrytree
# adopter | research | planned | inactive
status: inactive
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 17
description: >-
  Android app with a server component and a single-document JSON export.
  Unpublished from Google Play; its server has been unreachable since
  August 2026.
summary: >-
  Android app backed by a server, with a broad feature surface covering
  members, fronting, folders, journals, chat, polls, reminders, an
  inner-world map, and a multi-context roster model. It was unpublished
  from Google Play and its server has been unreachable since around
  August 2026, so the practical question for its users is what can be
  recovered from an export they already hold. Its JSON export writes a
  key for every section whether or not it has rows, which makes the
  feature surface unusually easy to enumerate from a single file.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: >-
  Single JSON document, one key per section, plus a `_partial_errors`
  array the exporter uses to record sections it failed to write

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Android (unpublished), server-backed
license: null
# URLs to multiple locations
repo: null
last_verified: 2026-09-19
website: null
apple_store: null
google_play: null
logo: /images/logos/berrytree.png
self_reported: false

# Every module in the spec is listed below. Fill in the ones your app touches
#
# support: full | partial | none | planned, or null if not reported
# note:    a short sentence on what is actually stored and what is lost,
#          or null if there is nothing to add
#
#   - key: fronting
#     support: partial
#     note: Co-front intervals only; front comments are dropped.
modules:
  # Core records
  - key: systems
    support: partial
    note: >-
      One account system, plus a multi-context model (`system_contexts`,
      `layers`) and a separate `sub_systems` section. Members are assigned
      to layers within a context and can be hidden per context.
  - key: members
    support: full
    note: >-
      Name, display name, pronouns, description, colour, emoji, avatar,
      banner, privacy flag, role, mood, archive and template flags, and a
      `counts_toward_headcount` flag equivalent to a custom front.
  - key: fronting
    support: full
    note: >-
      Intervals naming either a member or a custom status, with a
      user-editable fronting-type vocabulary (Fronting, Co-fronting,
      Co-conscious, Blurry, Influencing) attached per entry.
  - key: groups
    support: full
    note: Folders with a parent chain, so nesting is preserved.
  - key: taxonomy
    support: partial
    note: Per-member tags. Record shape unverified, see below.
  - key: custom_fields
    support: partial
    note: >-
      `field_templates` definitions and per-member values. Record shape
      unverified, see below.
  - key: notes
    support: partial
    note: >-
      Separate `notes` and `journal` sections. Both present in every
      export; record shape unverified.
  - key: assets
    support: partial
    note: >-
      Avatars and banners are referenced by a handle only the BerryTree
      server can resolve, so with the server down they cannot be
      recovered from an export alone.
  - key: privacy
    support: partial
    note: >-
      Per-record `is_private` booleans, plus a `privacy_buckets` section
      for named groupings and per-context member hiding.
  # Optional modules
  - key: chat
    support: partial
    note: A `chat` section. Record shape unverified.
  - key: boards
    support: null
    note: null
  # provisional in v0.1
  - key: relationships
    support: partial
    note: >-
      Three sections: member relationships, external relationships to
      people outside the system, and cross-system relationships.
  # provisional in v0.1
  - key: polls
    support: partial
    note: A `polls` section. Record shape unverified.
  - key: reminders
    support: partial
    note: A `reminders` section. Record shape unverified.
  - key: habits
    support: null
    note: null
  - key: proxy
    support: partial
    note: >-
      Members carry `proxy_tags`, though the app is not a Discord proxy
      bot.
  - key: sharing
    support: null
    note: null
  - key: safety
    support: null
    note: null

mapping:
  - source: members[]
    target: Member
    note: >-
      `counts_toward_headcount: false` is the custom-front pattern; `role`
      and `mood` have no obvious target and suit custom fields.
  - source: custom_statuses[] where kind is "status"
    target: Member (custom front)
  - source: custom_statuses[] where kind is "type"
    target: >-
      No direct target. Fronting types annotate a front rather than being
      one; they suit a fronting extension or the front's status text.
  - source: front_entries[]
    target: FrontPeriod
    note: An entry names either a member or a custom status, never both.
  - source: folders[]
    target: Group with parent_group_id
  - source: system_contexts[] and layers[]
    target: >-
      No direct target. Closest fit is System records with
      parent_system_id, which loses the per-context member hiding.
  - source: places[] and map_nodes[]
    target: No target. Inner-world map has no module in v0.1.

# Custom links to add to the page
links:
  - label: Discord server (Disboard listing)
    href: https://disboard.org/server/1503465858687570000
  - label: Discord invite
    href: https://discord.com/invite/8vYzuEGrcQ
---

## Status

BerryTree has been unpublished from Google Play, and its server has been
unreachable since roughly August 2026. There was never an iOS release.
There is no project website; the Discord server linked above is the only
official presence we have been able to find, and at time of writing it
is locked with a notice that the service is down.

This entry exists because BerryTree users are holding export files from
an app they can no longer run, and the recovery question is a real one.

## Evidence level

Everything below was derived from a **single export file**, contributed
by a BerryTree user, plus public information. Nobody from the project has
reviewed or confirmed it, which is why this entry is not marked
self-reported. If you have anything better, particularly a populated
export, corrections are very welcome.

The export is unusually informative for a single sample, because the
exporter writes a key for **every** section whether or not it has rows.
That means the feature surface above can be enumerated with confidence
even though the sample only had records in seven sections. What it does
not give is the **record shape** of the other fifteen: we know BerryTree
has journals, and we have never seen a journal entry.

That distinction runs through the whole entry. Where a module is marked
`partial` with "record shape unverified", it means the section
demonstrably exists and we cannot describe its fields.

## Export shape

A single JSON document. Top-level keys observed:

`app`, `schema_version`, `exported_at`, `system`, `members`,
`front_entries`, `custom_statuses`, `chat`, `polls`, `reminders`,
`privacy_buckets`, `useful_links`, `folders`, `sub_systems`, `notes`,
`journal`, `relationships`, `places`, `map_nodes`, `field_templates`,
`user_settings`, `external_contacts`, `external_relationships`,
`cross_system_relationships`, `system_contexts`, `layers`,
`_partial_errors`.

The sample carried `schema_version: 3`.

Three details worth knowing before writing a reader:

- **`custom_statuses` holds two different things**, discriminated by
  `kind`. Rows with `kind: "type"` are fronting types that annotate a
  front entry. Rows with `kind: "status"` are standalone fronting
  entities that front with no member attached, which is the custom-front
  pattern. Treating them as one list produces a roster full of things
  that are not members.
- **The system profile is not on the `system` object.** That one carries
  little more than a username and an account email. The name,
  description, avatar, colour, tag and pronouns live on the
  `system_contexts` row whose `kind` is `"main"`.
- **`_partial_errors` is the exporter's own failure log.** A file
  carrying entries here was already incomplete when it was written, and
  a reader should surface that rather than presenting a clean import.
  Note that these strings are written by the exporter about a record
  that failed, so they can quote user content; treat them accordingly if
  your job logs are not encrypted.

## Known loss on the way out

Things BerryTree tracks that have no obvious v0.1 target:

- **Fronting types** as a first-class user-editable vocabulary attached
  per front entry.
- **Multi-context rosters with layers**, including per-context member
  hiding (`hidden_in_contexts`).
- **Inner-world map** (`places`, `map_nodes`).
- **Named privacy buckets.**
- **External and cross-system relationships**, as distinct from
  member-to-member ones.
- **Member templates** as a first-class flag.
- **Per-system useful-links list.**
- Assorted per-member flags: `silent_switch`, `hide_from_main`,
  `pinned`, `short_id`, `theme_overrides`, `blocks`.

## How to get an export

If you still have the app installed and working offline, its JSON export
is the file described above. If you do not, and you never exported, there
is currently no route we know of: the server is unreachable and the app
is no longer distributed through Google Play.

## Reader implementations

Sheaf ships an importer covering members, custom statuses, fronting
history and folders, marked experimental for exactly the reason set out
under Evidence level. It counts and reports every section it cannot read
rather than guessing at field names, so an import tells the user what was
left behind instead of quietly dropping it.
