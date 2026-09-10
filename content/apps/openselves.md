---
name: OpenSelves
app_id: openselves
# adopter | research | planned | inactive
status: research
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 7
description: >-
  Smaller offline-first app with browser storage and a sync schema, but no
  general export file found.
summary: >-
  Smaller offline-first app with browser IndexedDB + a Drizzle/PostgreSQL
  sync schema. No general export file was found in source, so the portable
  shape is inferred from DTOs and schema.
# Export/Import support (true/false)
export: false
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: Sync log DTOs; no export found

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Web (hosted, self-hostable)
license: AGPL-3.0
# URLs to multiple locations
repo: https://codeberg.org/FreckleQueens/OpenSelves
last_verified: 2026-09-09
website: https://openselves.org
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
    note: Per-member intervals
  - key: groups
    support: none
    note: null
  - key: taxonomy
    support: none
    note: null
  - key: custom_fields
    support: none
    note: null
  - key: notes
    support: none
    note: null
  - key: assets
    support: null
    note: Member image, account auth
  - key: privacy
    support: null
    note: Member image, account auth
  # Optional modules
  - key: chat
    support: none
    note: null
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
  - source: per-member front intervals
    target: FrontPeriod
  - source: no groups/custom fields/notes/chat
    target: No portable representation yet

# Custom links to add to the page
links:
  - label: Research doc
    href: https://github.com/pluralport/spec/blob/main/docs/apps/openselves.md
---

<!-- The area below is a markdown capable page for you to put content you want about your app. It's not required

## What OpenSelves is

## Export shape

## Import behaviour

## Known loss

## Extensions namespace

## How to get an export

## Architecture

## Privacy handling

-->
