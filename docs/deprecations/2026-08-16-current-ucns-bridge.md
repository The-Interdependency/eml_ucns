# Current-UCNS bridge deprecation

Date: 2026-08-16  
Disposition: **DEPRECATED**

The former bridge imported `UCNSObject` from the current `ucns` package, but
that surface no longer exists. Its non-leaf branch also returned
`UCNSObject(...)`, a placeholder rather than an implementation.

The bridge now fails closed with `DeprecatedUCNSBridgeError`. The `eml`
operator and `EMLNode` remain available and make no UCNS or theorem claim.

## hmmm

A replacement needs an exact current UCNS carrier, option profile, mapping,
round-trip property, counterexample suite, and ownership boundary. None is
selected.
