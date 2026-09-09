---
name: PluralBridge
app_id: pluralbridge
# adopter | research | planned | inactive
status: research
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 15
description: >-
  Simply Plural preservation toolkit and upcoming browser app that plans
  to treat PluralPort as a versioned import source.
summary: >-
  An independent preservation and continuity project for systems affected
  by the Simply Plural shutdown. Today it is Python and SQL tooling for
  working with exports users saved before the shutdown; a privacy-focused
  browser app with a source-independent import framework is in
  development. Its maintainers have said they intend to support the spec
  as one versioned source format among several.
# Export/Import support (true/false)
export: false
import: false
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: No export of its own yet; consumes preserved Simply Plural exports

# PluralPort version targeted, e.g. '0.1'
spec_version: null
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Browser app (in development), Python and SQL tooling
license: GPL-3.0
# URLs to multiple locations
repo: https://github.com/needsofmany/PluralBridge
last_verified: 2026-09-09
website: https://thepluralbridge.org
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
    note: Preserved from Simply Plural exports.
  - key: fronting
    support: null
    note: Fronting history preserved from Simply Plural exports.
  - key: groups
    support: null
    note: null
  - key: taxonomy
    support: null
    note: null
  - key: custom_fields
    support: null
    note: Preserved from Simply Plural exports.
  - key: notes
    support: null
    note: null
  - key: assets
    support: null
    note: Avatars preserved from Simply Plural exports.
  - key: privacy
    support: null
    note: Simply Plural privacy settings preserved; ownership and consent are a stated design focus.
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
  - label: Stated plan for OpenPlural support
    href: https://github.com/needsofmany/PluralBridge/issues/38#issuecomment-5227545557
---

## Where things stand

PluralBridge is not a system tracker in the usual sense. It exists to keep
Simply Plural data usable after that service shut down, first as scripts and
database tooling, and soon as a browser app that imports a preserved export
through a reviewable, auditable process.

In August 2026 its maintainers described their import design as a
source-independent framework with per-source plugins, with Simply Plural
first and PluralSpace next. They said they treat this spec as a developing
interchange standard that they will support against a specific version, with
conformance testing, provenance, and warnings, rather than adopting it as their
internal data model. No spec-related code exists in the repository yet.

This page was written from the project's public repository and website.
