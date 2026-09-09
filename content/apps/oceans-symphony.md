---
name: Oceans Symphony
app_id: oceans-symphony
# adopter | research | planned | inactive
status: adopter
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 3
description: >-
  Local-first companion app with a shipped OpenPlural v0.1 importer and
  exporter that bundles images into a ZIP.
summary: >-
  Local-first React PWA (also on Android) for dissociative and plural
  systems. It ships a full OpenPlural v0.1 export and import: one ZIP per
  system with openplural.json, a manifest, and bundled media. Covers
  members, fronting, groups, taxonomy, custom fields, notes, chat, and
  relationships. It still uses the OpenPlural name and filenames from
  before the rename.
# Export/Import support (true/false)
export: true
import: true
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: Per-system ZIP with manifest.json, openplural.json, and media/

# PluralPort version targeted, e.g. '0.1'
spec_version: '0.1'
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Web (PWA), Android
license: MIT
# URLs to multiple locations
repo: https://github.com/penumbrias/oceans-symphony
last_verified: 2026-09-09
website: https://oceans-symphony.app/
apple_store: null
google_play: https://play.google.com/store/apps/details?id=app.oceans_symphony.twa
logo: null
self_reported: false

# Every module in the spec is listed below. Fill in the ones your app touches
#
# support: full | partial | none | planned, or null if not reported
# note:    a short sentence on what is actually stored and what is lost,
#          or null if there is nothing to add
modules:
  # Core records
  - key: systems
    support: full
    note: System profile from app settings.
  - key: members
    support: full
    note: Alters map to members, including alias, age, birthday, and pronouns.
  - key: fronting
    support: partial
    note: Front periods with assignments only; no front events or front comments.
  - key: groups
    support: full
    note: Groups plus group memberships.
  - key: taxonomy
    support: full
    note: Terms and assignments.
  - key: custom_fields
    support: full
    note: Definitions and values.
  - key: notes
    support: full
    note: Journal entries and per-member notes; the kind is carried in extensions.
  - key: assets
    support: partial
    note: Referenced images are bundled under media/; no hashes or sizes are written.
  - key: privacy
    support: null
    note: Not verified from source.
  # Optional modules
  - key: chat
    support: full
    note: Conversations, messages, and categories; no attachments or reactions.
  - key: boards
    support: none
    note: Emitted empty.
  # provisional in v0.1
  - key: relationships
    support: full
    note: Relationship types and member edges.
  # provisional in v0.1
  - key: polls
    support: none
    note: Emitted empty.
  - key: reminders
    support: none
    note: null
  - key: habits
    support: none
    note: null
  - key: proxy
    support: none
    note: null
  - key: sharing
    support: none
    note: null
  - key: safety
    support: none
    note: null

mapping:
  - source: alters[]
    target: Member
  - source: front sessions
    target: FrontPeriod + FrontAssignment
  - source: groups + alter group lists
    target: Group + GroupMembership
  - source: tags
    target: TaxonomyTerm + TaxonomyAssignment
  - source: journal entries + alter notes
    target: Note, with the note kind in extensions
  - source: relationships
    target: RelationshipType + member edges
  - source: system chat channels + messages
    target: Conversation + ChatMessage + categories
  - source: alter and system images
    target: Asset with uri under media/

# Custom links to add to the page
links:
  - label: Exporter source
    href: https://github.com/penumbrias/oceans-symphony/blob/main/src/lib/openPluralExport.js
  - label: Importer source
    href: https://github.com/penumbrias/oceans-symphony/blob/main/src/lib/openPlural.js
---

## What Oceans Symphony is

A local-first companion app for dissociative and plural systems. Data lives in
the browser (or the Android wrapper) and never has to touch a server. It also
imports Simply Plural, Octocon, and Plural Star data.

## Export shape

One ZIP per system, named after the system, containing `manifest.json`,
`openplural.json`, and a `media/` folder with every image the document refers
to. The document declares `openplural_version: "0.1"` and a `producer` block
with `app_id: oceans-symphony`.

## Import behaviour

The importer accepts either a raw `openplural.json` or a ZIP that contains one,
and was written against PluralSpace exports. Every imported record keeps its
source id so re-importing the same file deduplicates instead of duplicating.
A full local backup is taken before a replace-everything import.

## Known loss

Front events and comments, boards, polls, reminders, habits, proxy tags, and
sharing are not represented. Asset entries carry no hash or size.

## Naming

Support landed in June 2026, before OpenPlural was renamed to PluralPort, so
the app's UI, filenames, and code all still say OpenPlural. The data inside is
the same v0.1 format. This page was written from the app's source rather than
reported by its maintainer.
