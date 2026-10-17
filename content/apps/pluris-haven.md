---
name: Pluris Haven
app_id: pluris_haven
# adopter | research | planned | inactive
status: adopter
# sort position on /apps (lower numbers first, starting with Prism and Sheaf due to their early adoption of PluralPort)
order: 13
description: >-
  Pre-alpha offline-first Flutter app with PluralPort Draft v0.1 JSON file
  import and export.
summary: >-
  Offline-first Flutter app for systems and other collectives, with an
  optional server for accounts, friends, and encrypted backups. Its pre-alpha
  mobile app imports and exports PluralPort Draft v0.1 JSON files through its
  existing preview/review and local-file flows.
# Export/Import support (true/false)
export: true
import: true
# Overview of what the export physically is, e.g. "Single JSON document", "ZIP with manifest and media/", "encrypted envelope", etc.
export_shape: Single PluralPort Draft v0.1 JSON document

# PluralPort version targeted, e.g. '0.1'
spec_version: '0.1'
# Web (hosted) | iOS/Android | Desktop | Discord bot
platform: Android/iOS (pre-alpha)
license: Source-available, noncommercial
# URLs to multiple locations
repo: https://github.com/EndofTimeWorks/pluris-haven
last_verified: 2026-10-07
website: https://plurishaven.app
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
    support: partial
    note: Haven currently imports one system profile and preserves the original source records for optional retention.
  - key: members
    support: partial
    note: Members and source references map into Haven's local import identifiers.
  - key: fronting
    support: partial
    note: Front periods and events import as local front history; Haven exports front periods.
  - key: groups
    support: partial
    note: Groups and group memberships import and export.
  - key: taxonomy
    support: partial
    note: Haven preserves its tags and member-tag assignments in a namespaced extension because Draft v0.1 does not yet define these record fields.
  - key: custom_fields
    support: partial
    note: Haven preserves custom-field definitions and values in a namespaced extension because Draft v0.1 does not yet define these record fields.
  - key: notes
    support: partial
    note: Notes import and export; journals are preserved in the Pluris Haven extension.
  - key: assets
    support: partial
    note: Asset references import; local avatar bytes export in the Pluris Haven extension.
  - key: privacy
    support: partial
    note: Documented privacy values are retained where mapped; unsupported source detail can be kept in encrypted raw payloads.
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

## Current support

Pluris Haven has a separate OpenPlural v0.1 importer. Its PluralPort support is
limited to portable Draft v0.1 JSON files; it does not implement a live
PluralPort protocol, hosted service, federation, or synchronisation transport.

The importer validates the envelope, previews mapped records before writing,
and offers encrypted retention of original records, `source_refs`, and
extensions. The exporter uses the currently documented record shapes, adds structured
warnings when fidelity is reduced, and preserves Haven-only collections under
`extensions.pluris_haven`. Checked-in fixture tests exist, but independent
cross-application file evidence is still needed before claiming broad
compatibility.
