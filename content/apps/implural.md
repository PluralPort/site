---
name: imPlural
app_id: implural
# adopter | research | planned | inactive
status: research
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 14
description: >-
  Hosted system tracker with Simply Plural import whose developers are
  contributing to the spec.
summary: >-
  Hosted, installable web app focused on a simple system tracker: members,
  custom fronts, fronting notifications, and profile customisation, with
  accessibility as a stated priority. It imports Simply Plural exports
  through an Import/Export settings section, and export format
  documentation is promised. Its developers have opened spec discussions
  but no PluralPort support has been announced.
# Export/Import support (true/false)
export: true
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: Not yet documented; the app promises export format documentation

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Web (hosted, installable)
license: Closed source
# URLs to multiple locations
repo: null
last_verified: 2026-09-09
website: https://plural.im
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
    note: Members and custom fronts.
  - key: fronting
    support: null
    note: Fronting status with notifications.
  - key: groups
    support: null
    note: Groups come across from Simply Plural imports.
  - key: taxonomy
    support: null
    note: null
  - key: custom_fields
    support: null
    note: Per-member info comes across from Simply Plural imports.
  - key: notes
    support: null
    note: null
  - key: assets
    support: null
    note: Avatars.
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

# Custom links to add to the page
links:
  - label: Spec discussion on System.settings
    href: https://github.com/PluralPort/spec/issues/14
  - label: Migration guide
    href: https://plural.im/landing/help/migration
---

## Where things stand

imPlural's source is not public, so this page is built from its public site
and its participation in the spec. In July 2026 its developers proposed a
standard registry for `System.settings`, covering language, colour scheme,
reduced motion, contrast, text scale, and font preferences, so that
accessibility settings survive a move between apps. That discussion is open on
the spec repository.

The app's documentation page says public API and export format documentation
are planned. Until either lands, the module table above is a sketch of what the
app visibly stores rather than a mapping.
