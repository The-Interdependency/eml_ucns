# CLAUDE.md — eml_ucns: EML-enhanced UCNS

This file gives AI assistants context needed to work effectively in this repository.

---

## What This Repo Is

`eml_ucns` (pip package: **`eml_ucns`**, v1.0.0) is the **EML-enhanced packaging
of the Unit Circle Number System** focused on **catalogue-sufficient recursive
factorization** (Theorem N). It is a thin, early-stage distribution that adapts
the UCNS v1.0 factorization frontier for EML (UnitCircle / prime-distribution)
experiment workflows.

The canonical UCNS engine and its full theorem frontier live in
`The-Interdependency/ucns`. This repo packages the catalogue-sufficient slice
and adopts the same status vocabulary; it does **not** restate or extend any
UCNS-A proof beyond what the source repo defends.

**Python requirement:** ≥ 3.8 (assumed from UCNS lineage — `hmmm`, not declared in `pyproject.toml`)
**External dependencies:** none expected (stdlib only, following UCNS)
**License:** Apache 2.0

---

## Scope

- **Theorem N: catalogue-sufficient** recursive factorization is the in-scope target.
- Status vocabulary is adopted from the UCNS spec status addendum
  (`DEFENDED`, `IMPLEMENTED`, `TEST-BACKED`, `ORACLE-COMPLETE`, `FRONTIER`, `EXPERIMENTAL`).
- **Carrier widening and general recursive primality are out of scope** —
  identical to the UCNS v1.0 boundary.

See `docs/` and `ucns-theorem-n.md` for details (both are currently thin —
treat their contents as authoritative only where present).

---

## Repository Layout

```
eml_ucns/
  __init__.py          Package marker / public surface (minimal)
  core.py              Core entry point (small — inspect before relying on it)

docs/                  Supporting documentation (evolving)
ucns-theorem-n.md      Theorem N note (stub-sized — verify before citing)
CHANGELOG.md           Version history
pyproject.toml         Package metadata (name = eml_ucns, version = 1.0.0)
LICENSE                Apache 2.0
README.md
CLAUDE.md              This file
```

---

## Development Workflow

```bash
# Install editable
pip install -e .

# No test runner is configured yet. When adding tests, prefer the UCNS
# convention: python -m unittest discover, unless pytest is introduced.
```

---

## Key Conventions

- **Mirror UCNS conventions.** This package tracks `The-Interdependency/ucns`:
  no runtime dependencies, `Fraction`/`math`/stdlib only, and the same status
  vocabulary. Do not introduce divergent algebra here.
- **No proof-scope inflation.** `SEQ-PRIME` / completeness claims are only
  absolute inside a defended-complete domain as defined in `ucns`. Do not
  promote a claim here that the source repo has not defended.
- **`pyproject.toml` is minimal** — it declares only name, version, and
  description. Add build-system, Python floor, and metadata when packaging
  for real distribution.
- Unknown fields are marked **`hmmm`**, not guessed (see doctrine below).

---

## What Does Not Exist Yet

- No build-system table, Python floor, or dependency list in `pyproject.toml` (`hmmm`)
- No test suite or CI
- No linting config (prefer `ruff` when adding)
- `core.py` and `ucns-theorem-n.md` are small — substantial implementation may be incomplete

---

## Related Repos

| Repo | Role |
|------|------|
| The-Interdependency/ucns | Canonical UCNS engine and full theorem frontier (upstream) |
| The-Interdependency/interdependent-lib | Meta-package bundling the UCNS-family libraries |
| erinepshovel-code/UnitCircle | EML visualization / prime-distribution experiment scripts |

---

## Git Workflow

- Main branch: `main`
- Feature branches: `feat/<description>`, `fix/<description>`, `docs/<description>`, `chore/<description>`
- Commit style: Conventional Commits (`feat(eml_ucns):`, `fix(core):`, etc.)
- Author: Erin Patrick Spencer (wayseer@interdependentway.org)
- License: Apache 2.0

## Agent module-build doctrine

Before adding a new module, route, service, adapter, schema, worker, engine,
UI panel, migration, or experiment, read:

`./.agents/skills/meta-module-build/SKILL.md`

New module work should start with a `MODULE_BUILD` block. Unknown fields must
be marked `hmmm`, not guessed.
