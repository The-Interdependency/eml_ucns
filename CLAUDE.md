# CLAUDE.md — eml_ucns: EML-enhanced UCNS

This file gives AI assistants context needed to work effectively in this repository.

---

## What This Repo Is

`eml_ucns` (pip package: **`eml_ucns`**, v1.0.0) is the **EML-enhanced packaging
of the Unit Circle Number System**. Its purpose is to define the **EML operator**
and an **EML expression tree**, and to bridge those trees into UCNS objects so the
**catalogue-sufficient recursive factorization** frontier (Theorem N) can recover
the original trees.

The EML operator is `eml(x, y) = exp(x) - ln(y)` over complex numbers. EML trees
are encoded as UCNS recursive payloads on the Möbius unit circle (see
`docs/spec.md`).

The canonical UCNS engine and its full theorem frontier live in
`The-Interdependency/ucns`; `eml_ucns` imports it as a sibling package. This repo
packages the catalogue-sufficient slice and adopts the same status vocabulary; it
does **not** restate or extend any UCNS-A proof beyond what the source repo defends.

**Status:** early-stage. The EML operator and node type are implemented; the
EML↔UCNS bridge is a stub (`core.py` ends with `TODO` / placeholder code).

- **Language:** Python (CI runs on 3.11; no floor declared in `pyproject.toml`)
- **Runtime deps:** stdlib only (`cmath`, `fractions`, `dataclasses`, `typing`).
  The UCNS bridge optionally imports `ucns`, guarded by a `try/except ImportError`.
- **License:** **MIT** (see `LICENSE`). Previously AGPL-3.0-or-later +
  commercial; relicensed to MIT for frictionless adoption.
- **Version:** 1.0.0

---

## Scope

- **Theorem N: catalogue-sufficient** recursive factorization is the in-scope target.
- Status vocabulary is adopted from the UCNS spec status addendum
  (`DEFENDED`, `IMPLEMENTED`, `TEST-BACKED`, `ORACLE-COMPLETE`, `FRONTIER`, `EXPERIMENTAL`).
- **Carrier widening and general recursive primality are out of scope** —
  identical to the UCNS v1.0 boundary.

See `docs/spec.md` (v0.1.1) and `docs/claims-ledger.md` for details. Both are thin
— treat their contents as authoritative only where present. `ucns-theorem-n.md` is
a placeholder.

---

## Repository Layout

```
eml_ucns/
  __init__.py          Public surface: re-exports eml, EMLNode from core
  core.py              EML operator (eml), EMLNode tree, EML->UCNS bridge (stub)

docs/
  spec.md              EML-UCNS integration spec (v0.1.1)
  claims-ledger.md     Claims ledger (thin, to be expanded from ucns)

ucns-theorem-n.md      Theorem N note (placeholder)
CHANGELOG.md           Version history
pyproject.toml         Package metadata (name = eml_ucns, version = 1.0.0)
LICENSE                MIT
README.md
CLAUDE.md              This file
.github/workflows/ci.yml   CI: install + import smoke test on Python 3.11
.agents/skills/        Org-wide build/test skills (msdmd, meta-module-build, test-build)
```

---

## Public Surface

`core.py` provides:

- `eml(x: complex, y: complex) -> complex` — the core EML binary operator,
  `exp(x) - ln(y)`.
- `EMLNode` — a `dataclass` representing a binary EML tree node, with an
  `EMLNode.leaf(value)` static constructor.
- `eml_tree_to_ucns(tree, depth=0)` — bridge to `ucns.UCNSObject`. **Stub:** raises
  `ImportError` if `ucns` is absent, and the non-leaf branch returns an unfinished
  `UCNSObject(...)` placeholder. Do not rely on it until completed.

`__init__.py` re-exports only `eml` and `EMLNode`.

---

## Build / Test / Lint / Run

```bash
# Install editable (no build-system table declared; uses pip default backend)
pip install -e .

# Smoke test — this is what CI runs:
python -c "import eml_ucns"

# Exercise the operator:
python -c "from eml_ucns import eml; print(eml(0, 1))"   # -> (1+0j)
```

- **No test suite exists yet.** When adding tests, prefer the UCNS convention
  (`python -m unittest discover`) unless pytest is introduced, or follow the
  `test-build` skill's `# === CONTRACTS ===` convention.
- **No linter is configured.** Prefer `ruff` when adding one.
- **CI** (`.github/workflows/ci.yml`) runs on push to `main` and on all PRs:
  checkout, set up Python 3.11, `pip install -e .`, then `python -c "import eml_ucns"`.

---

## Architecture & Key Concepts

- **EML operator + tree:** `eml(x, y) = exp(x) - ln(y)`; `EMLNode` builds recursive
  expression trees with leaves carrying complex values.
- **EML↔UCNS bridge:** `EMLNode` trees are meant to encode as `UCNSObject` recursive
  payloads — nesting depth / branching mapped to angles + face states on the Möbius
  unit circle — enabling exact factorization back to the original tree via
  `ucns.factor_search_v08`. This bridge is currently a stub.
- **`ucns` is an optional sibling dependency**, imported defensively. Code paths that
  need it raise a clear `ImportError` rather than failing at import time.

---

## Key Conventions

- **Mirror UCNS conventions.** This package tracks `The-Interdependency/ucns`:
  stdlib-only runtime, `Fraction`/`cmath`/`math`, and the same status vocabulary.
  Do not introduce divergent algebra here.
- **No proof-scope inflation.** `SEQ-PRIME` / completeness claims are only absolute
  inside a defended-complete domain as defined in `ucns`. Do not promote a claim
  here that the source repo has not defended.
- **`pyproject.toml` is minimal** — it declares only name, version, description, and
  license. There is no build-system table or Python floor; add them when packaging
  for real distribution.
- **License is MIT.** Keep this consistent across `pyproject.toml` and `LICENSE`.
  (Previously AGPL-3.0-or-later + commercial; relicensed to MIT.)
- Unknown fields are marked **`hmmm`**, not guessed (see doctrine below).

---

## Conventions & Gotchas

- `core.py`'s `eml_tree_to_ucns` non-leaf branch is an intentional placeholder
  (`UCNSObject(...)`) — it will not run. Complete the angle + face encoding before use.
- `docs/`, `ucns-theorem-n.md`, and `claims-ledger.md` are stubs — verify before citing.

---

## Related Repos

| Repo | Role |
|------|------|
| The-Interdependency/ucns | Canonical UCNS engine and full theorem frontier (upstream / optional dep) |
| The-Interdependency/interdependent-lib | Meta-package bundling the UCNS-family libraries |
| erinepshovel-code/UnitCircle | EML visualization / prime-distribution experiment scripts |

---

## Git Workflow

- Main branch: `main`
- Feature branches: `feat/<description>`, `fix/<description>`, `docs/<description>`, `chore/<description>`
- Commit style: Conventional Commits (`feat(eml_ucns):`, `fix(core):`, etc.)
- Author: Erin Patrick Spencer (wayseer@interdependentway.org)

## Agent module-build doctrine

Before adding a new module, route, service, adapter, schema, worker, engine,
UI panel, migration, or experiment, read:

`./.agents/skills/meta-module-build/SKILL.md`

New module work should start with a `MODULE_BUILD` block. Unknown fields must
be marked `hmmm`, not guessed. Related skills: `.agents/skills/msdmd/SKILL.md`
(the underlying self-declared-metadata convention) and
`.agents/skills/test-build/SKILL.md` (contract tests).
