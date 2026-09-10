---
name: PluralKit
app_id: pluralkit
# adopter | research | planned | inactive
status: research
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 8
description: >-
  Discord bot with a public API and JSON datafile export based on switch
  events.
summary: >-
  Discord bot with a public API and a JSON datafile produced by
  DataFileService.ExportSystem. It models fronting as switch events rather
  than intervals.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: API + datafile v2 JSON

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Discord bot
license: AGPL-3.0
# URLs to multiple locations
repo: https://github.com/PluralKit/PluralKit
last_verified: null
website: https://pluralkit.me
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
    note: Switch events
  - key: groups
    support: null
    note: Flat groups
  - key: taxonomy
    support: null
    note: Flat groups
  - key: custom_fields
    support: none
    note: null
  - key: notes
    support: none
    note: null
  - key: assets
    support: null
    note: Avatar/banner URLs, rich privacy
  - key: privacy
    support: null
    note: Avatar/banner URLs, rich privacy
  # Optional modules
  - key: chat
    support: null
    note: Discord proxy records (out of core export)
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
  - source: switches[] with members array
    target: FrontEvent + assignment records
  - source: members[] with proxy_tags
    target: Member + ProxyTag
  - source: flat groups[]
    target: Group with null parent_group_id
  - source: per-record privacy
    target: Privacy fragment with PluralKit raw detail

# Custom links to add to the page
links:
  - label: Research doc
    href: https://github.com/pluralport/spec/blob/main/docs/apps/pluralkit.md
  - label: API docs
    href: https://pluralkit.me/api/
---

<!-- The area below is a markdown capable page for you to put content you want about your app. It's not required

## What PluralKit is

## Export shape

## Import behaviour

## Known loss

## Extensions namespace

## How to get an export

## Architecture

## Privacy handling

-->
