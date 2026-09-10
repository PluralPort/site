---
name: Lighthouse
app_id: lighthouse
# adopter | research | planned | inactive
status: research
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 5
description: Server-backed app exporting a ZIP of CSV files plus a narrow token API.
summary: >-
  Server-backed Node/Express + PostgreSQL app. Exports a ZIP of CSV files
  and has a narrow token API. Most of its richer data lands in extensions
  until a converter is built. Sign-ups on the hosted instance closed in
  September 2026 while an offline desktop version is being built.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: ZIP of CSVs + narrow token API

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Web (hosted, self-hostable)
license: Unspecified (no LICENSE file)
# URLs to multiple locations
repo: https://github.com/team-crystalline/Lighthouse
last_verified: 2026-09-09
website: https://www.writelighthouse.com
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
    note: Stubbed in inspected source
  - key: groups
    support: null
    note: Subsystems as systems
  - key: taxonomy
    support: null
    note: Subsystems as systems
  - key: custom_fields
    support: null
    note: Fixed rich alter fields
  - key: notes
    support: null
    note: Journals, communal journals, BDA plans, inner worlds, rules, wishlist
  - key: assets
    support: null
    note: Image URLs/blobs, token permissions
  - key: privacy
    support: null
    note: Image URLs/blobs, token permissions
  # Optional modules
  - key: chat
    support: null
    note: Forum/thread posts
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
  - source: Subsystems as separate systems
    target: System with parent_system_id
  - source: Fixed alter fields
    target: CustomFieldDefinition or taxonomy mapping
  - source: relationships column on alters
    target: MemberRelationship + RelationshipType via heuristic parse
  - source: forums + threads + journals
    target: Conversation + Note

# Custom links to add to the page
links:
  - label: Research doc
    href: https://github.com/pluralport/spec/blob/main/docs/apps/lighthouse.md
---

<!-- The area below is a markdown capable page for you to put content you want about your app. It's not required

## What Lighthouse is

## Export shape

## Import behaviour

## Known loss

## Extensions namespace

## How to get an export

## Architecture

## Privacy handling

-->
