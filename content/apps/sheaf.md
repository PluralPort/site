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
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: /v1/export JSON v2; async zip backup with images

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: null
license: null
# URLs to multiple locations
repo: null
last_verified: null
website: null
apple_store: null
google_play: null
logo: null
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
    support: null
    note: null
  - key: members
    support: full
    note: null
  - key: fronting
    support: null
    note: Co-front intervals
  - key: groups
    support: null
    note: Hierarchical groups + tags
  - key: taxonomy
    support: null
    note: Hierarchical groups + tags
  - key: custom_fields
    support: null
    note: Definitions and values
  - key: notes
    support: null
    note: Journals + revision history
  - key: assets
    support: null
    note: Avatar URLs, uploaded-file inventory, privacy and safety metadata
  - key: privacy
    support: null
    note: Avatar URLs, uploaded-file inventory, privacy and safety metadata
  # Optional modules
  - key: chat
    support: null
    note: Board messages, polls, and reminders
  - key: boards
    support: null
    note: null
  # provisional in v0.1
  - key: relationships
    support: null
    note: null
  # provisional in v0.1
  - key: polls
    support: null
    note: null
  - key: reminders
    support: null
    note: null
  - key: habits
    support: null
    note: null
  - key: proxy
    support: null
    note: null
  - key: sharing
    support: null
    note: null
  - key: safety
    support: null
    note: null

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
  - label: Repository
    href: https://github.com/sheaf-project/sheaf
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
