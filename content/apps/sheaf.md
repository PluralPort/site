---
name: Sheaf
app_id: sheaf
# adopter | research | planned | inactive
status: adopter
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 1
description: >-
  FastAPI/PostgreSQL app exposing JSON export v2 plus async zip backups
  with images.
summary: >-
  FastAPI/PostgreSQL app with application-level encryption. It already
  exposes /v1/export returning JSON v2 with system, members, fronts,
  groups, tags, custom fields, journals, revision history, board messages,
  polls, reminders, watch-token notification config, and uploaded-file
  inventory.
# Export/Import support (true/false)
export: true
import: true
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: /v1/export JSON v2; async zip backup with images

# PluralPort version targeted, e.g. '0.1'
spec_version: '0.1'
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Web (hosted)
license: AGPL-3.0-or-later
# URLs to multiple locations
repo: https://github.com/sheaf-project/sheaf
last_verified: 2026-09-08
website: https://sheaf.sh
apple_store: null
google_play: null
logo: https://sheaf.sh/images/sheaf-pluralport-embed.png
self_reported: true

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
    support: full
    note: System profile, settings, safety and retention config.
  - key: members
    support: full
    note: null
  - key: fronting
    support: full
    note: Co-front intervals and point-in-time switches (front_events).
  - key: groups
    support: full
    note: Hierarchical groups with manual ordering.
  - key: taxonomy
    support: full
    note: Tags.
  - key: custom_fields
    support: full
    note: Definitions and values, including select choices and privacy.
  - key: notes
    support: full
    note: Journals with revision history.
  - key: assets
    support: partial
    note: Avatar/banner URLs and an optional zip bundle with images.
  - key: privacy
    support: full
    note: Per-member, group, field, and relationship levels.
  # Optional modules
  - key: chat
    support: full
    note: Board messages.
  - key: boards
    support: full
    note: null
  # provisional in v0.1
  - key: relationships
    support: full
    note: Types plus member and group relationships.
  # provisional in v0.1
  - key: polls
    support: full
    note: null
  - key: reminders
    support: full
    note: null
  - key: habits
    support: none
    note: null
  - key: proxy
    support: none
    note: Sheaf does not proxy messages.
  - key: sharing
    support: partial
    note: Share views round-trip; grants (live links) are deliberately never exported.
  - key: safety
    support: full
    note: Carried in the sheaf extension.

mapping:
  - source: system object
    target: System
  - source: members[]
    target: Member
  - source: fronts[] with inline member_ids
    target: FrontPeriod + one FrontAssignment per member_id
  - source: groups[] with parent_id + member_ids
    target: Group + GroupMembership
  - source: tags[] with inline member_ids
    target: TaxonomyTerm + TaxonomyAssignment
  - source: custom_fields[] with nested values
    target: CustomFieldDefinition + CustomFieldValue
  - source: journals[]
    target: Note
  - source: messages[]
    target: BoardPost; replies are preserved in extensions for now
  - source: polls[], reminders[]
    target: extensions.sheaf.* until modules land

# Custom links to add to the page
links:
  - label: Research Doc
    href: https://github.com/pluralport/spec/blob/main/docs/apps/sheaf.md
---

<!-- The area below is a markdown capable page for you to put content you want about your app. It's not required

## What Sheaf is

## Export shape

## Import behaviour

## Known loss

## Extensions namespace

## How to get an export

## Architecture

## Privacy handling

-->
