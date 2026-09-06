---
name: Plural Star
app_id: plural_star
# adopter | research | planned | inactive
status: research
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 8
description: React Native app with local backup JSON and tiered fronting semantics.
summary: >-
  React Native app with AsyncStorage + filesystem backups. It has tiered
  fronting, flat groups, definitions + values for custom fields, channels
  + messages, and noteboards.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: Local backup JSON v1.2

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
    note: Tiered primary / co-front / co-conscious
  - key: groups
    support: null
    note: Flat groups
  - key: taxonomy
    support: null
    note: Flat groups
  - key: custom_fields
    support: null
    note: Definitions and values
  - key: notes
    support: null
    note: Journal
  - key: assets
    support: null
    note: Avatar/banner dictionaries
  - key: privacy
    support: null
    note: Avatar/banner dictionaries
  # Optional modules
  - key: chat
    support: null
    note: Channels/messages + noteboards
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
  - source: Tiered front periods
    target: "FrontPeriod with explicit front_role + source_kind: \"tiered\""
  - source: chatChannels + ps:chat:<id> messages
    target: Conversation + ChatMessage
  - source: noteboards
    target: BoardPost with target_member_id + pinned

# Custom links to add to the page
links:
  - label: Research doc
    href: https://github.com/pluralport/spec/blob/main/docs/apps/plural-star.md
  - label: Repository
    href: https://github.com/TheHanyou/Plural-Star
---

<!-- The area below is a markdown capable page for you to put content you want about your app. It's not required

## What Plural Star is

## Export shape

## Import behaviour

## Known loss

## Extensions namespace

## How to get an export

## Architecture

## Privacy handling

-->
