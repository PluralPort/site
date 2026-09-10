---
name: Open Plural
app_id: open_plural
# adopter | research | planned | inactive
status: research
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 16
description: >-
  Simply Plural-style hosted app with its own JSON export. Not related to
  the OpenPlural spec, which is now called PluralPort.
summary: >-
  A hosted Simply Plural-style tracker with a Rust backend and an Angular
  web app, started in March 2026. It has its own JSON export and import
  covering privacy buckets, custom fields, folders, members, polls, and
  gallery albums, plus a Simply Plural importer. It shares a name with
  this spec's original name but has no connection to it and no support for
  the format.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: Single JSON document in its own schema, limited to one export every six hours

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Web (hosted PWA)
license: GPL-3.0
# URLs to multiple locations
repo: https://github.com/OpenPlural/opl-backend
last_verified: 2026-09-09
website: https://openplural.webbiii.cc/
apple_store: null
google_play: null
logo: null
self_reported: false

# Every module in the spec is listed below. Fill in the ones your app touches
#
# support: full | partial | none | planned, or null if not reported
# note:    a short sentence on what is actually stored and what is lost,
#          or null if there is nothing to add
modules:
  # Core records
  - key: systems
    support: null
    note: null
  - key: members
    support: null
    note: Name, pronouns, avatar, description, colour, archived and custom-front flags, sort order.
  - key: fronting
    support: null
    note: Front history exists in the app but is not part of the export.
  - key: groups
    support: null
    note: Folders with a parent id, so hierarchical.
  - key: taxonomy
    support: null
    note: Folders only.
  - key: custom_fields
    support: null
    note: Typed definitions with string values on members.
  - key: notes
    support: null
    note: null
  - key: assets
    support: null
    note: Avatar URLs and per-member gallery albums.
  - key: privacy
    support: null
    note: Named privacy buckets applied to members, folders, fields, and albums.
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
    note: Polls with abstain and veto options and per-member answers.
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
  - source: members[] with custom flag
    target: "Member, with is_custom_front from custom"
  - source: folders[] with parent_id
    target: Group + GroupMembership
  - source: fields[] + per-member fields map
    target: CustomFieldDefinition + CustomFieldValue
  - source: privacy[] buckets
    target: Privacy fragment
  - source: polls[]
    target: polls module
  - source: gallery[] albums
    target: Asset records in extensions

# Custom links to add to the page
links:
  - label: Web app source
    href: https://github.com/OpenPlural/opl-webapp
  - label: Android app (archived)
    href: https://github.com/OpenPlural/opl-android
---

## About the name

This spec was called OpenPlural until September 2026. The app on this page was
already using that name, which is why the spec became PluralPort. The two are
unrelated projects. In particular, this app's "OpenPlural export" is its own
native JSON schema, not a PluralPort document, and its importer only reads that
native format and Simply Plural exports.

## Export shape

A single JSON document from the backend's export endpoint, rate-limited to one
export every six hours per account. It contains privacy buckets, custom field
definitions, folders, members with their field values and privacy, polls with
answers, and gallery albums. Fronting history is not included.

This page was written from the app's public repositories rather than reported
by its maintainers.
