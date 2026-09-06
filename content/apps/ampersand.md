---
name: Ampersand
app_id: ampersand
# adopter | research | planned | inactive
status: research
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 3
description: >-
  Offline-first Tauri/Vue app with a self-backup archive rather than a
  portable export format.
summary: >-
  Offline-first Tauri/Vue app. It has no production interoperable export
  today; the only normal export is a self-backup .ampar archive, and its
  interop surface is import-first.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: No production interoperable export; .ampar self-backup only

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: null
license: null
# URLs to multiple locations
repo: null
last_verified: null
website: https://ampersand.app
apple_store: null
google_play: null
logo: https://ampersand.app/logo.png
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
    note: Per-member intervals with main/influencing/custom-status/presence
  - key: groups
    support: null
    note: Typed tags + nested systems
  - key: taxonomy
    support: null
    note: Typed tags + nested systems
  - key: custom_fields
    support: null
    note: Definitions, string values on members
  - key: notes
    support: null
    note: Journal posts
  - key: assets
    support: null
    note: Imports SP / Octocon / PluralKit / Tupperbox
  - key: privacy
    support: null
    note: Imports SP / Octocon / PluralKit / Tupperbox
  # Optional modules
  - key: chat
    support: null
    note: Board messages with polls
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
  - source: nested systems
    target: System records with parent_system_id
  - source: per-member fronting intervals
    target: FrontPeriod + assignment metadata
  - source: typed tags
    target: Group + TaxonomyTerm patterns
  - source: custom field values
    target: CustomFieldDefinition + CustomFieldValue
  - source: board messages with polls
    target: BoardPost and extensions

# Custom links to add to the page
links:
  - label: Research doc
    href: https://github.com/pluralport/spec/blob/main/docs/apps/ampersand.md
  - label: Repository
    href: https://github.com/NyaomiDEV/Ampersand
---

<!-- The area below is a markdown capable page for you to put content you want about your app. It's not required

## What Ampersand is

## Export shape

## Import behaviour

## Known loss

## Extensions namespace

## How to get an export

## Architecture

## Privacy handling

-->
