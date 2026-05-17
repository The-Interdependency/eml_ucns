# EML-UCNS Integration Specification

**Version:** 0.1.1  
**Date:** May 17, 2026  
**UCNS:** canonical ( `_recursive` deprecated )

## 1. Overview
EML trees (`eml(x,y) = exp(x) - ln(y)`) encoded as UCNS recursive payloads on the Möbius unit circle. Enables exact factorization back to original trees.

## 2. Core Bridge
- `EMLNode` ↔ `UCNSObject`
- Nesting depth / branching encoded via angles + face states
- Full witness-matrix support via `ucns.factor_search_v08`

## 3. Dependencies
- `ucns` (sibling package)

See `eml_ucns/core.py` and `eml_ucns/ucns_bridge.py` (to be expanded).