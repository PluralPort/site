---
name: Prism
app_id: prism
# adopter | research | planned | inactive
status: adopter
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 0
description: >-
  Local-first Flutter app with structured data tables and an encrypted
  .prism export envelope.
summary: >-
  Local-first Flutter app with structured database tables and an encrypted
  .prism export envelope (currently V3). Broad in scope: members,
  fronting, groups, custom fields, chat, member board posts, polls,
  habits, reminders, media, and local sharing.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: Encrypted .prism JSON envelope

# PluralPort version targeted, e.g. '0.1'
spec_version: v0.1
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Android (Early Access), iOS (Testflight)
license: null
# URLs to multiple locations
repo: https://github.com/prismplural/prism-app
last_verified: null
website: https://prismplural.com/
apple_store: https://testflight.apple.com/join/euZtqXJN
google_play: https://play.google.com/store/apps/details?id=com.prismplural.prism
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
    note: Per-member intervals plus sleep
  - key: groups
    support: null
    note: Hierarchical groups
  - key: taxonomy
    support: null
    note: Hierarchical groups
  - key: custom_fields
    support: null
    note: Definitions and values
  - key: notes
    support: null
    note: Notes
  - key: assets
    support: null
    note: Assets, friend/share metadata
  - key: privacy
    support: null
    note: Assets, friend/share metadata
  # Optional modules
  - key: chat
    support: null
    note: Internal chat with media + member board posts
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
  - source: headmates[]
    target: Member
  - source: frontSessions[] + sleepSessions[]
    target: "FrontPeriod with single-member assignments; sleep via status: \"sleep\""
  - source: memberGroups[] with parentGroupId
    target: Group + GroupMembership
  - source: customFields[] + customFieldValues[]
    target: CustomFieldDefinition + CustomFieldValue
  - source: conversations[] + messages[] + mediaAttachments[]
    target: Conversation + ChatMessage + Attachment
  - source: member_board_posts (sync-only, not in .prism export envelope)
    target: BoardPost in the boards module

# Custom links to add to the page
links:
  - label: Research Doc
    href: https://github.com/pluralport/spec/blob/main/docs/apps/prism.md
---

<!-- The area below is a markdown capable page for you to put content you want about your app. It's not required

## What Prism is

## Export shape

## Import behaviour

## Known loss

## Extensions namespace

## How to get an export

## Architecture

## Privacy handling

-->
