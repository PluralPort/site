---
name: Masquerade
app_id: masquerade
# adopter | research | planned | inactive
status: research
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 11
description: >-
  Proxy bot for Stoat with a small members-only JSON export, useful as a
  migration source.
summary: >-
  PluralKit-style proxy bot for Stoat. It imports PluralKit and Tupperbox
  exports and writes its own members-only JSON export (name, display name,
  avatar, color, proxy tags), which makes it a migration source rather
  than a general-purpose import/export contract.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: Single JSON document ({"profiles":[...]})

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Stoat bot
license: null
# URLs to multiple locations
repo: null
last_verified: null
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
    support: none
    note: null
  - key: members
    support: partial
    note: Name, display name, avatar URL, color, and a hidden flag; no pronouns, birthday, or description.
  - key: fronting
    support: none
    note: null
  - key: groups
    support: none
    note: null
  - key: taxonomy
    support: none
    note: null
  - key: custom_fields
    support: none
    note: null
  - key: notes
    support: none
    note: null
  - key: assets
    support: partial
    note: Avatar URL only; no uploaded media.
  - key: privacy
    support: partial
    note: A per-member hidden flag only.
  # Optional modules
  - key: chat
    support: none
    note: null
  - key: boards
    support: none
    note: null
  # provisional in v0.1
  - key: relationships
    support: none
    note: null
  # provisional in v0.1
  - key: polls
    support: none
    note: null
  - key: reminders
    support: none
    note: null
  - key: habits
    support: none
    note: null
  - key: proxy
    support: full
    note: Prefix/suffix tag pairs, several per member.
  - key: sharing
    support: none
    note: null
  - key: safety
    support: none
    note: null
