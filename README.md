# eml_ucns v1.0.0

Status: **DEPRECATED as a UCNS bridge and Theorem-N implementation**.

The current source supports only the dependency-free `eml(x, y)` operator and
`EMLNode` data structure. The former `eml_tree_to_ucns` stub targeted a removed
UCNS API and never implemented non-leaf construction; it now fails closed with
`DeprecatedUCNSBridgeError`.

## Scope
- implemented: `eml`, `EMLNode`
- deprecated: EML-tree → UCNS bridge
- unresolved: Theorem N
- replacement: hmmm; no current-UCNS adapter is selected

Historical claims remain in the repository as evidence, not active authority.
See [`docs/deprecations/2026-08-16-current-ucns-bridge.md`](docs/deprecations/2026-08-16-current-ucns-bridge.md).
