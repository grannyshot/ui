# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2026-03-23

### Added

- **RadioGroup** — Ark UI radio-group wrapper with size variants (sm/md/lg) and orientation support
- **Alert** — Pure CSS alert with 4 variants (info/success/warning/error) and built-in icons
- **Pagination** — Ark UI pagination with size variants and built-in prev/next navigation
- **Breadcrumb** — Pure CSS compound component with custom separator support
- **NumberInput** — Ark UI number-input with stepper controls and min/max/step
- **PinInput** — Ark UI pin-input with configurable length and mask option
- **FileUpload** — Ark UI file-upload with drag & drop and file list management
- **TagsInput** — Ark UI tags-input with size variants and tag add/remove
- **ToggleGroup** — Ark UI toggle-group with single/multi select and size variants
- **Steps** — Ark UI steps with step indicator and content panels
- **EmptyState** — Pure CSS component with icon/title/description/actions slots
- **CLAUDE.md in npm package** — AI tools auto-read component docs when installed
- **llms.txt** — LLM-friendly documentation at docs site root
- **JSDoc** — Added to Button, Input, Dialog, Field components

### Changed

- **Inline preview system** — Replaced iframe-based previews with direct rendering using `styles-no-preflight.css`
- **Theme sync** — `data-theme` synced on `<html>` for overlay components
- **Slider** — Fixed drag lag by scoping transition to box-shadow/border-color only

### Infrastructure

- GitHub Actions CI (build + docs build on every PR)
- Issue templates (bug report, feature request, component request)
- PR template with checklist
- Changeset configuration
- ROADMAP.md
- CONTRIBUTING.md

## [0.1.0] - 2026-03-20

### Added

- Initial release with 26 components
- Panda CSS + Ark UI based design system
- Light/Dark/System theme support
- Nextra documentation site
