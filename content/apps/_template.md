---
# Copy to content/apps/<slug>.md. Files starting with _ are excluded from the
# collection. Keep every key: use null where there is nothing to say, and the
# page skips it rather than rendering an empty row.

name: Your App
app_id: your_app
# adopter | research | planned | inactive
status: research
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 99
description: >-
  One sentence. Shown in listings.
summary: >-
  Two to four sentences. What the app is, and what is distinctive about how it
  maps to PluralPort.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: >-
  What a file physically is. "Single JSON document", "ZIP with manifest and
  media/", "encrypted envelope", etc.
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
    support: null
    note: null
  - key: fronting
    support: null
    note: null
  - key: groups
    support: null
    note: null
  - key: taxonomy
    support: null
    note: null
  - key: custom_fields
    support: null
    note: null
  - key: notes
    support: null
    note: null
  - key: assets
    support: null
    note: null
  - key: privacy
    support: null
    note: null
  # Optional modules
  - key: chat
    support: null
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
  - source: your_table[]
    target: Member

# Custom links to add to the page
links:
  - label: Research doc
    href: ''
---

<!-- The area below is a markdown capable page for you to put content you want about your app. It's not required

## What <App> is

## Export shape

## Import behavior

## Known loss

## Extensions namespace

## How to get an export

## Architecture

## Privacy handling

-->
