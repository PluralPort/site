---
name: Pluris Haven
app_id: pluris_haven
# adopter | research | planned | inactive
status: planned
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 13
description: >-
  Pre-alpha offline-first Flutter app whose roadmap lists restoring its
  OpenPlural importer.
summary: >-
  Offline-first Flutter app for systems and other collectives, with an
  optional server for accounts, friends, and encrypted backups. It is
  pre-alpha. An OpenPlural importer existed before a history rewrite and
  restoring it is on the current priority list, alongside importers for
  Simply Plural, PluralKit, Tupperbox, PluralSpace, and Ampersand.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: Local export and a password-protected portable recovery archive, both in its own format

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Android/iOS (pre-alpha)
license: Source-available, noncommercial
# URLs to multiple locations
repo: https://github.com/EndofTimeWorks/pluris-haven
last_verified: 2026-09-09
website: null
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
    support: planned
    note: Members stored locally.
  - key: fronting
    support: planned
    note: Fronts stored locally.
  - key: groups
    support: planned
    note: Groups stored locally.
  - key: taxonomy
    support: planned
    note: Tags stored locally.
  - key: custom_fields
    support: planned
    note: Custom fields stored locally.
  - key: notes
    support: planned
    note: Notes and journals stored locally.
  - key: assets
    support: null
    note: null
  - key: privacy
    support: null
    note: null
  # Optional modules
  - key: chat
    support: null
    note: Messages exist locally; chat surfaces are still being built.
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
    note: Polls stored locally.
  - key: reminders
    support: null
    note: Reminders stored locally.
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

# Custom links to add to the page
links:
  - label: Project state doc
    href: https://github.com/EndofTimeWorks/pluris-haven/blob/main/docs/project-state.md
---

## Where OpenPlural support stands

The project's own state document marks OpenPlural import as regressed: the
importer disappeared in a history rewrite rather than being removed on purpose,
and restoring it through the current import architecture is listed among the
next completion priorities. Export in the format is not on the roadmap yet.

The app is pre-alpha and not yet in public testing, so this page was written
from its repository rather than reported by its maintainers. The module table
reflects what the app stores locally and could carry once the importer returns,
not anything shipped today.
