---
name: Simply Plural
app_id: simply_plural
# adopter | research | planned | inactive
status: inactive
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 10
description: Former public token API plus Mongo collection export used by migration tooling. Shut down 2026-07-01.
summary: >-
  Public token API + raw Mongo export. The service shut down on
  2026-07-01, so no new exports can be made, but it still matters because
  many migration paths flow through exports users downloaded before then.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: Mongo collection export + token API (previously downloaded exports only)

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: iOS/Android + Web (shut down)
license: Closed source (API server source published)
# URLs to multiple locations
repo: https://github.com/ApparyllisOrg/SimplyPluralApi
last_verified: 2026-09-09
website: https://apparyllis.com
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
    note: Per-member/status intervals
  - key: groups
    support: null
    note: Hierarchical groups
  - key: taxonomy
    support: null
    note: Hierarchical groups
  - key: custom_fields
    support: null
    note: Definitions, values on members
  - key: notes
    support: null
    note: Notes
  - key: assets
    support: null
    note: Avatar URLs, privacy buckets, friends
  - key: privacy
    support: null
    note: Avatar URLs, privacy buckets, friends
  # Optional modules
  - key: chat
    support: null
    note: Chat + board messages
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
  - source: Per-member/status intervals
    target: FrontPeriod
  - source: Hierarchical groups
    target: Group with parent_group_id
  - source: Custom fronts
    target: "Member with is_custom_front: true"
  - source: Privacy buckets
    target: Privacy fragment
  - source: Channels + chat messages
    target: Conversation + ChatMessage
  - source: boardMessages
    target: BoardPost

# Custom links to add to the page
links:
  - label: Research doc
    href: https://github.com/pluralport/spec/blob/main/docs/apps/simply-plural.md
  - label: Discontinuation notice
    href: https://apparyllis.com/simply-plural-will-be-discontinued/
---

<!-- The area below is a markdown capable page for you to put content you want about your app. It's not required

## What Simply Plural is

## Export shape

## Import behaviour

## Known loss

## Extensions namespace

## How to get an export

## Architecture

## Privacy handling

-->
