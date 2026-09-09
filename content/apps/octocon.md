---
name: Octocon
app_id: octocon
# adopter | research | planned | inactive
status: inactive
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 6
description: >-
  Elixir/Phoenix app with Discord export formats and a full JSON export
  option. Shutdown announced March 2026; sign-ups are closed.
summary: >-
  Elixir/Phoenix/ScyllaDB monolith plus Discord bot. Its shutdown was
  announced in March 2026 and sign-ups are closed, though parts of the
  service were still reachable in September 2026. It has a full JSON
  export option, plus Discord-based migration formats that still matter
  for users who exported before leaving.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: "Discord slash export: PK datafile v2 or Octocon 'full' JSON"

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: iOS/Android + Discord bot
license: MIT
# URLs to multiple locations
repo: https://github.com/OctoconDev/octocon
last_verified: 2026-09-09
website: https://octocon.app
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
    note: Per-alter intervals with short comments
  - key: groups
    support: null
    note: Hierarchical tags used as groups
  - key: taxonomy
    support: null
    note: Hierarchical tags used as groups
  - key: custom_fields
    support: null
    note: Definitions on user, values on alters
  - key: notes
    support: null
    note: System + per-alter journals present in schema, not always in export
  - key: assets
    support: null
    note: Avatar URLs; four-level security + friendships
  - key: privacy
    support: null
    note: Avatar URLs; four-level security + friendships
  # Optional modules
  - key: chat
    support: null
    note: Discord proxy fields on alter
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
  - source: Alters.Alter with flags
    target: Member; preserve flags in extensions
  - source: Fronts.Front rows
    target: FrontPeriod + FrontAssignment
  - source: Tags.Tag with parent_tag_id
    target: Group + GroupMembership
  - source: Accounts.Field + Alters.Field values
    target: CustomFieldDefinition + CustomFieldValue
  - source: discord_proxies + security_level
    target: ProxyTag + Privacy fragment

# Custom links to add to the page
links:
  - label: Research doc
    href: https://github.com/pluralport/spec/blob/main/docs/apps/octocon.md
  - label: App repo
    href: https://github.com/OctoconDev/app
  - label: Public docs
    href: https://octocon.app/docs
---

<!-- The area below is a markdown capable page for you to put content you want about your app. It's not required

## What Octocon is

## Export shape

## Import behaviour

## Known loss

## Extensions namespace

## How to get an export

## Architecture

## Privacy handling

-->
