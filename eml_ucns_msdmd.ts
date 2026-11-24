import { defineMsdmdCollectionV2 } from "./.agents/skills/msdmd/collection";

export default defineMsdmdCollectionV2({
  "capabilities": [
    "native-facts",
    "supplemental-msdmd-blocks",
    "source-qualified-identities",
    "duplicate-id-diagnostics",
    "discovery-accounting"
  ],
  "conflicts": [],
  "coverage": {
    "block_adoption": {
      "BOUNDARIES": 0,
      "CAPABILITIES": 0,
      "CHECKS": 0,
      "CONTRACTS": 0,
      "DEPENDENCIES": 0,
      "DOCS": 0,
      "FRONTEND_META": 0,
      "LLMS": 0,
      "MODULE_BUILD": 1,
      "OWNERS": 0
    },
    "denominator": {
      "count": 13,
      "kind": "discovered-files"
    },
    "excluded_files": 0,
    "excluded_subtrees": 13,
    "information_availability": "not-evaluated-without-obligation-policy",
    "invalid_files": 0,
    "native_facts": 28,
    "partial_files": 0,
    "required_sources": [],
    "supplemental_declarations": 1,
    "supported_files": 13,
    "unreadable_files": 0,
    "unsupported_files": 0,
    "verified_behavior": "not-evaluated"
  },
  "declarations": [
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#block/MODULE_BUILD/eml_ucns_core",
      "block": "MODULE_BUILD",
      "fields": {
        "admin_only": "false",
        "auth_boundary": "none",
        "internal_surface": "none",
        "module_kind": "engine",
        "module_name": "core",
        "network_boundary": "none",
        "owner": "Erin Spencer",
        "public_surface": "eml, EMLNode, eml_tree_to_ucns",
        "requires": "none",
        "rollback": "remove module and its references",
        "rollout": "default_enabled",
        "since": "2026-06-02",
        "storage_boundary": "none",
        "summary": "core EML binary operator (exp(x)-log(y)) and EML-tree to UCNS embedding",
        "tests": "hmmm",
        "unresolved": "early-stage package; surface may widen as Theorem-N packaging firms up",
        "user_data_boundary": "none"
      },
      "file": "eml_ucns/core.py",
      "id": "eml_ucns_core",
      "origin": "msdmd-block",
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "pointer": "block:MODULE_BUILD/id:eml_ucns_core"
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared"
    }
  ],
  "diagnostics": [],
  "discovery": [
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.agents/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.git/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.mypy_cache/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.pytest_cache/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.skill-lib/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.tox/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.venv/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/__pycache__/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/build/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/dist/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/node_modules/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/target/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/venv/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "e551bc4a6500ce11a3475aad7935d7171a54b5cd1809ff0aa2252dd02871a539",
      "entry_kind": "file",
      "file": ".github/workflows/ci.yml",
      "reader_ids": [
        "yaml-core",
        "metadata-standards"
      ],
      "size": 410,
      "status": "supported"
    },
    {
      "content_sha256": "c3592926508b19630e6c11ab8f67e3c2c721d844eca560b9465b98a43c78a0a1",
      "entry_kind": "file",
      "file": ".gitignore",
      "reader_ids": [
        "gitignore-lines"
      ],
      "size": 60,
      "status": "supported"
    },
    {
      "content_sha256": "bf6d900fc7f735bf679606804c2af3112f01c0cb7afb182cd65d7c7c6c499c86",
      "entry_kind": "file",
      "file": "CHANGELOG.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 117,
      "status": "supported"
    },
    {
      "content_sha256": "70916ad807f1f276ad444e5aa4e9094295a0fe786ca21fdfe5c1e9eb91f59868",
      "entry_kind": "file",
      "file": "CLAUDE.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 7149,
      "status": "supported"
    },
    {
      "content_sha256": "3f3d9e0024b1921b067d6f7f88deb4a60cbe7a78e76c64e3f1d7fc3b779b9d04",
      "entry_kind": "file",
      "file": "LICENSE",
      "reader_ids": [
        "license-text"
      ],
      "size": 16726,
      "status": "supported"
    },
    {
      "content_sha256": "2a61ccdf4bc885630188ff4308ba6ef7d10d58f2aa04e523665b0f24aa2d5bd0",
      "entry_kind": "file",
      "file": "README.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 269,
      "status": "supported"
    },
    {
      "content_sha256": "af549268ba71dac0902644cedaaf1da1ba41c51d204084625e1c5d8898adbe8e",
      "entry_kind": "file",
      "file": "docs/claims-ledger.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 249,
      "status": "supported"
    },
    {
      "content_sha256": "c4a1b3450ab95f56930a5c2509e259ca931b6319ea928eb75717745c20c09a29",
      "entry_kind": "file",
      "file": "docs/icon.svg",
      "reader_ids": [
        "svg-metadata"
      ],
      "size": 1074,
      "status": "supported"
    },
    {
      "content_sha256": "e7f393a0c6868c8d3de2749390629ba735e603e56775c0cb20cb68db2a77729a",
      "entry_kind": "file",
      "file": "docs/spec.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 589,
      "status": "supported"
    },
    {
      "content_sha256": "c703df8a5763d18d2df565ebd2441aafa9c0738318edc3bdc024bbed6ad8dc5b",
      "entry_kind": "file",
      "file": "eml_ucns/__init__.py",
      "reader_ids": [
        "python-ast"
      ],
      "size": 30,
      "status": "supported"
    },
    {
      "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
      "entry_kind": "file",
      "file": "eml_ucns/core.py",
      "reader_ids": [
        "python-ast"
      ],
      "size": 1954,
      "status": "supported"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "output",
      "file": "eml_ucns_msdmd.ts",
      "reader_ids": [],
      "reason": "generated-collection-output",
      "status": "excluded"
    },
    {
      "content_sha256": "ed71c54881a235eb499289d8218245b12fde667e8938b3a0e421a49f29e1a89c",
      "entry_kind": "file",
      "file": "pyproject.toml",
      "reader_ids": [
        "toml-stdlib",
        "metadata-standards"
      ],
      "size": 118,
      "status": "supported"
    },
    {
      "content_sha256": "a5df9b27f9698cfe6a602c220dcdd9fd741bd8fd4fec7d2257af84722a27dd25",
      "entry_kind": "file",
      "file": "ucns-theorem-n.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 41,
      "status": "supported"
    }
  ],
  "edges": [
    {
      "from": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/__init__.py#subject/module/eml_ucns%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.core"
    },
    {
      "from": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/__init__.py#subject/module/eml_ucns%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.core"
    },
    {
      "from": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#block/MODULE_BUILD/eml_ucns_core",
      "kind": "owns",
      "source_block": "MODULE_BUILD",
      "source_entry_id": "eml_ucns_core",
      "source_id": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#block/MODULE_BUILD/eml_ucns_core",
      "standing": "declared",
      "target_resolution": "external-or-unresolved",
      "to": "Erin Spencer"
    },
    {
      "from": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#block/MODULE_BUILD/eml_ucns_core",
      "kind": "requires",
      "source_block": "MODULE_BUILD",
      "source_entry_id": "eml_ucns_core",
      "source_id": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#block/MODULE_BUILD/eml_ucns_core",
      "standing": "declared",
      "target_resolution": "external-or-unresolved",
      "to": "none"
    },
    {
      "from": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:cmath"
    },
    {
      "from": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:dataclasses"
    },
    {
      "from": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:fractions"
    },
    {
      "from": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:ucns"
    }
  ],
  "facts": [
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.github/workflows/ci.yml#subject/document/.github%2Fworkflows%2Fci.yml/fact/structured-document/lines%3A%3F-%3F",
      "convention": {
        "dialect": "yaml-core-string-keys",
        "namespace": "yaml.document",
        "version": "YAML 1.2 core"
      },
      "extraction": {
        "configuration_sha256": "3864ce4970e40f6083b8776a70a8d8727f01d629d9b5b5b76a3bfed11a9d57ca",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "yaml-core",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "structured-document",
      "native": {
        "id": null,
        "value": {
          "jobs": {
            "test": {
              "runs-on": "ubuntu-latest",
              "steps": [
                {
                  "uses": "actions/checkout@v7.0.1"
                },
                {
                  "name": "Set up Python 3.11",
                  "uses": "actions/setup-python@v7.0.0",
                  "with": {
                    "python-version": "3.11"
                  }
                },
                {
                  "name": "Install package",
                  "run": "pip install -e ."
                },
                {
                  "name": "Smoke test (import)",
                  "run": "python -c \"import eml_ucns\""
                }
              ]
            }
          },
          "name": "CI",
          "on": {
            "pull_request": null,
            "push": {
              "branches": [
                "main"
              ]
            }
          }
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "e551bc4a6500ce11a3475aad7935d7171a54b5cd1809ff0aa2252dd02871a539",
        "file": ".github/workflows/ci.yml",
        "location": {
          "pointer": ""
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.github/workflows/ci.yml#subject/document/.github%2Fworkflows%2Fci.yml",
        "identity": ".github/workflows/ci.yml",
        "scope": "document"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.gitignore#subject/path-rule/rule%3A1/fact/ignore-rule/lines%3A1-1/__pycache__%2F",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": "__pycache__/",
        "value": {
          "anchored": false,
          "directory_only": true,
          "negated": false,
          "order": 1,
          "pattern": "__pycache__/"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "c3592926508b19630e6c11ab8f67e3c2c721d844eca560b9465b98a43c78a0a1",
        "file": ".gitignore",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.gitignore#subject/path-rule/rule%3A1",
        "identity": "rule:1",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.gitignore#subject/path-rule/rule%3A2/fact/ignore-rule/lines%3A2-2/%2A.pyc",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": "*.pyc",
        "value": {
          "anchored": false,
          "directory_only": false,
          "negated": false,
          "order": 2,
          "pattern": "*.pyc"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "c3592926508b19630e6c11ab8f67e3c2c721d844eca560b9465b98a43c78a0a1",
        "file": ".gitignore",
        "location": {
          "end_line": 2,
          "start_line": 2
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.gitignore#subject/path-rule/rule%3A2",
        "identity": "rule:2",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.gitignore#subject/path-rule/rule%3A3/fact/ignore-rule/lines%3A3-3/.venv%2F",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": ".venv/",
        "value": {
          "anchored": false,
          "directory_only": true,
          "negated": false,
          "order": 3,
          "pattern": ".venv/"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "c3592926508b19630e6c11ab8f67e3c2c721d844eca560b9465b98a43c78a0a1",
        "file": ".gitignore",
        "location": {
          "end_line": 3,
          "start_line": 3
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.gitignore#subject/path-rule/rule%3A3",
        "identity": "rule:3",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.gitignore#subject/path-rule/rule%3A4/fact/ignore-rule/lines%3A4-4/dist%2F",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": "dist/",
        "value": {
          "anchored": false,
          "directory_only": true,
          "negated": false,
          "order": 4,
          "pattern": "dist/"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "c3592926508b19630e6c11ab8f67e3c2c721d844eca560b9465b98a43c78a0a1",
        "file": ".gitignore",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.gitignore#subject/path-rule/rule%3A4",
        "identity": "rule:4",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.gitignore#subject/path-rule/rule%3A5/fact/ignore-rule/lines%3A5-5/build%2F",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": "build/",
        "value": {
          "anchored": false,
          "directory_only": true,
          "negated": false,
          "order": 5,
          "pattern": "build/"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "c3592926508b19630e6c11ab8f67e3c2c721d844eca560b9465b98a43c78a0a1",
        "file": ".gitignore",
        "location": {
          "end_line": 5,
          "start_line": 5
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.gitignore#subject/path-rule/rule%3A5",
        "identity": "rule:5",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.gitignore#subject/path-rule/rule%3A6/fact/ignore-rule/lines%3A8-8/.env",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": ".env",
        "value": {
          "anchored": false,
          "directory_only": false,
          "negated": false,
          "order": 6,
          "pattern": ".env"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "c3592926508b19630e6c11ab8f67e3c2c721d844eca560b9465b98a43c78a0a1",
        "file": ".gitignore",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/.gitignore#subject/path-rule/rule%3A6",
        "identity": "rule:6",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/LICENSE#subject/document/LICENSE/fact/license-declaration/document/MPL-2.0",
      "convention": {
        "dialect": "license-text",
        "namespace": "license.text",
        "version": "detector v1"
      },
      "extraction": {
        "configuration_sha256": "0df88ba5528297545698e1918e76fae88a00e98aa58186fb3204604df96989b8",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "license-text",
        "reader_version": "1.0.0",
        "support": "partial"
      },
      "kind": "license-declaration",
      "native": {
        "id": "MPL-2.0",
        "value": {
          "detection_method": "exact-known-header",
          "expression": "MPL-2.0",
          "legal_interpretation": "not-performed",
          "text": "source-reference"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "3f3d9e0024b1921b067d6f7f88deb4a60cbe7a78e76c64e3f1d7fc3b779b9d04",
        "file": "LICENSE",
        "location": {
          "pointer": "document"
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "derived",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/LICENSE#subject/document/LICENSE",
        "identity": "LICENSE",
        "scope": "document"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/docs/icon.svg#subject/document/docs%2Ficon.svg/fact/document-metadata/%2Fsvg",
      "convention": {
        "dialect": "xml",
        "namespace": "svg.document-metadata",
        "version": "SVG document subset v1"
      },
      "extraction": {
        "configuration_sha256": "a636d6b73590150040db1ccaaf5ce1b545664bfe42d467b39cae2cc2903dd3f2",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "svg-metadata",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "document-metadata",
      "native": {
        "id": null,
        "value": {
          "attributes": {
            "aria-label": "eml_ucns icon",
            "height": "512",
            "role": "img",
            "viewBox": "0 0 100 100",
            "width": "512"
          },
          "description": null,
          "title": "eml_ucns — EML × UCNS bridge"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "c4a1b3450ab95f56930a5c2509e259ca931b6319ea928eb75717745c20c09a29",
        "file": "docs/icon.svg",
        "location": {
          "pointer": "/svg"
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/docs/icon.svg#subject/document/docs%2Ficon.svg",
        "identity": "docs/icon.svg",
        "scope": "document"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/__init__.py#subject/module/eml_ucns%2F__init__.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".core:eml:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".core",
          "name": "eml"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "c703df8a5763d18d2df565ebd2441aafa9c0738318edc3bdc024bbed6ad8dc5b",
        "file": "eml_ucns/__init__.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/__init__.py#subject/module/eml_ucns%2F__init__.py",
        "identity": "eml_ucns/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/__init__.py#subject/module/eml_ucns%2F__init__.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".core:EMLNode:1",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".core",
          "name": "EMLNode"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "c703df8a5763d18d2df565ebd2441aafa9c0738318edc3bdc024bbed6ad8dc5b",
        "file": "eml_ucns/__init__.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/__init__.py#subject/module/eml_ucns%2F__init__.py",
        "identity": "eml_ucns/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/eml_ucns:eml_ucns/core.py::<module>",
          "metadata_kind": "msdmd_block",
          "text": "=== MODULE_BUILD ===\nid: eml_ucns_core\n  module_name: core\n  module_kind: engine\n  summary: core EML binary operator (exp(x)-log(y)) and EML-tree to UCNS embedding\n  owner: Erin Spencer\n  public_surface: eml, EMLNode, eml_tree_to_ucns\n  internal_surface: none\n  auth_boundary: none\n  storage_boundary: none\n  network_boundary: none\n  user_data_boundary: none\n  admin_only: false\n  tests: hmmm\n  rollout: default_enabled\n  rollback: remove module and its references\n  requires: none\n  since: 2026-06-02\n  unresolved: early-stage package; surface may widen as Theorem-N packaging firms up\n=== END MODULE_BUILD ==="
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 20,
          "span": {
            "end": {
              "byte": 651,
              "column": 26,
              "line": 20
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
        "identity": "eml_ucns/core.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py/fact/comment/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_scope",
          "attachment_identity": "python:The-Interdependency/eml_ucns:eml_ucns/core.py::<module>",
          "metadata_kind": "comment",
          "text": "UCNS canonical import"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 44,
          "span": {
            "end": {
              "byte": 1217,
              "column": 23,
              "line": 44
            },
            "start": {
              "byte": 1194,
              "column": 0,
              "line": 44
            }
          },
          "start_line": 44
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
        "identity": "eml_ucns/core.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "cmath:cmath:0",
        "value": {
          "alias": null,
          "kind": "import",
          "level": 0,
          "module": "cmath",
          "name": "cmath"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 22,
          "start_line": 22
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
        "identity": "eml_ucns/core.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "fractions:Fraction:1",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "fractions",
          "name": "Fraction"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 23,
          "start_line": 23
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
        "identity": "eml_ucns/core.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "dataclasses:dataclass:2",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "dataclasses",
          "name": "dataclass"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 24,
          "start_line": 24
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
        "identity": "eml_ucns/core.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py/fact/import/3",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Union:3",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Union"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 25,
          "start_line": 25
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
        "identity": "eml_ucns/core.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py/fact/import/4",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Optional:4",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Optional"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 25,
          "start_line": 25
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
        "identity": "eml_ucns/core.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py/fact/import/5",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "ucns:UCNSObject:5",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "ucns",
          "name": "UCNSObject"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 46,
          "start_line": 46
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/module/eml_ucns%2Fcore.py",
        "identity": "eml_ucns/core.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/EMLNode.leaf/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "EMLNode.leaf",
        "value": {
          "attachment_identity": "python:The-Interdependency/eml_ucns:eml_ucns/core.py::method:EMLNode.leaf",
          "decorators": [
            "staticmethod"
          ],
          "kind": "method",
          "name": "leaf",
          "parent_identity": "python:The-Interdependency/eml_ucns:eml_ucns/core.py::class:EMLNode",
          "qualified_name": "EMLNode.leaf",
          "signature": "def leaf(value: complex=1 + 0j)"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 42,
          "span": {
            "end": {
              "byte": 1192,
              "column": 19,
              "line": 42
            },
            "start": {
              "byte": 1052,
              "column": 4,
              "line": 38
            }
          },
          "start_line": 38
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/EMLNode.leaf",
        "identity": "EMLNode.leaf",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/EMLNode/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "class-declaration",
      "native": {
        "id": "EMLNode",
        "value": {
          "attachment_identity": "python:The-Interdependency/eml_ucns:eml_ucns/core.py::class:EMLNode",
          "decorators": [
            "dataclass"
          ],
          "kind": "class",
          "name": "EMLNode",
          "parent_identity": null,
          "qualified_name": "EMLNode",
          "signature": "class EMLNode"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 42,
          "span": {
            "end": {
              "byte": 1192,
              "column": 19,
              "line": 42
            },
            "start": {
              "byte": 886,
              "column": 0,
              "line": 31
            }
          },
          "start_line": 31
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/EMLNode",
        "identity": "EMLNode",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/eml/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "eml",
        "value": {
          "attachment_identity": "python:The-Interdependency/eml_ucns:eml_ucns/core.py::function:eml",
          "decorators": [],
          "kind": "function",
          "name": "eml",
          "parent_identity": null,
          "qualified_name": "eml",
          "signature": "def eml(x: complex, y: complex) -> complex"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 29,
          "span": {
            "end": {
              "byte": 884,
              "column": 38,
              "line": 29
            },
            "start": {
              "byte": 767,
              "column": 0,
              "line": 27
            }
          },
          "start_line": 27
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/eml",
        "identity": "eml",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/eml/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/eml_ucns:eml_ucns/core.py::function:eml",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Core EML binary operator",
          "text": "Core EML binary operator"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 28,
          "span": {
            "end": {
              "byte": 845,
              "column": 34,
              "line": 28
            },
            "start": {
              "byte": 815,
              "column": 4,
              "line": 28
            }
          },
          "start_line": 28
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/eml",
        "identity": "eml",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/eml_tree_to_ucns/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "nearest_enclosing_symbol",
          "attachment_identity": "python:The-Interdependency/eml_ucns:eml_ucns/core.py::function:eml_tree_to_ucns",
          "metadata_kind": "comment",
          "text": "TODO: full angle + face encoding"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 65,
          "span": {
            "end": {
              "byte": 1893,
              "column": 38,
              "line": 65
            },
            "start": {
              "byte": 1859,
              "column": 4,
              "line": 65
            }
          },
          "start_line": 65
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/eml_tree_to_ucns",
        "identity": "eml_tree_to_ucns",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/eml_tree_to_ucns/fact/comment/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "nearest_enclosing_symbol",
          "attachment_identity": "python:The-Interdependency/eml_ucns:eml_ucns/core.py::function:eml_tree_to_ucns",
          "metadata_kind": "comment",
          "text": "placeholder for next iteration"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 66,
          "span": {
            "end": {
              "byte": 1954,
              "column": 60,
              "line": 66
            },
            "start": {
              "byte": 1922,
              "column": 28,
              "line": 66
            }
          },
          "start_line": 66
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/eml_tree_to_ucns",
        "identity": "eml_tree_to_ucns",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/eml_tree_to_ucns/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "eml_tree_to_ucns",
        "value": {
          "attachment_identity": "python:The-Interdependency/eml_ucns:eml_ucns/core.py::function:eml_tree_to_ucns",
          "decorators": [],
          "kind": "function",
          "name": "eml_tree_to_ucns",
          "parent_identity": null,
          "qualified_name": "eml_tree_to_ucns",
          "signature": "def eml_tree_to_ucns(tree: EMLNode, depth: int=0)"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 66,
          "span": {
            "end": {
              "byte": 1920,
              "column": 26,
              "line": 66
            },
            "start": {
              "byte": 1298,
              "column": 0,
              "line": 50
            }
          },
          "start_line": 50
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/eml_tree_to_ucns",
        "identity": "eml_tree_to_ucns",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/eml_tree_to_ucns/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/eml_ucns:eml_ucns/core.py::function:eml_tree_to_ucns",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Encode EML tree as UCNS object (stub — full version in bridge)",
          "text": "Encode EML tree as UCNS object (stub — full version in bridge)"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8528fa6fa968fc1e492d31d0260f70bdad04035da02b23470998893122d54354",
        "file": "eml_ucns/core.py",
        "location": {
          "end_line": 51,
          "span": {
            "end": {
              "byte": 1425,
              "column": 72,
              "line": 51
            },
            "start": {
              "byte": 1355,
              "column": 4,
              "line": 51
            }
          },
          "start_line": 51
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/eml_ucns/core.py#subject/symbol/eml_tree_to_ucns",
        "identity": "eml_tree_to_ucns",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/pyproject.toml#subject/document/pyproject.toml/fact/structured-document/lines%3A%3F-%3F",
      "convention": {
        "dialect": "toml",
        "namespace": "python.pyproject",
        "version": "TOML 1.0.0"
      },
      "extraction": {
        "configuration_sha256": "f539a6c2f1bba5a6d34561c54b0a6cebdf0356f6330b337c57a62cd95ddd0793",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "toml-stdlib",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "structured-document",
      "native": {
        "id": null,
        "value": {
          "project": {
            "description": "eml-enhanced UCNS v1.0.0",
            "license": {
              "text": "MPL-2.0"
            },
            "name": "eml_ucns",
            "version": "1.0.0"
          }
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "ed71c54881a235eb499289d8218245b12fde667e8938b3a0e421a49f29e1a89c",
        "file": "pyproject.toml",
        "location": {
          "pointer": ""
        },
        "repository": "The-Interdependency/eml_ucns",
        "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Feml_ucns@snapshot%3A2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf/pyproject.toml#subject/document/pyproject.toml",
        "identity": "pyproject.toml",
        "scope": "document"
      }
    }
  ],
  "gaps": [],
  "reader_manifests": [
    {
      "convention": "python.source-metadata",
      "dependencies": [
        "python-stdlib:ast",
        "python-stdlib:tokenize",
        "docstring-parser==0.18.0"
      ],
      "detection": [
        ".py",
        ".pyi",
        ".pyw"
      ],
      "entry_point": "msdmd.readers:_read_python",
      "execution_policy": "parse only; never import or evaluate",
      "feature_subset": [
        "qualified symbols and signatures",
        "AST/token comment attachment shared with module_projection",
        "ReST/Google/NumPy docstring fields",
        "lexically scoped imports",
        "literal __all__"
      ],
      "known_limitations": [
        "runtime effects and dynamic imports/exports are not executed"
      ],
      "reader_id": "python-ast",
      "scope_attachment": "module and qualified symbol",
      "specification": "https://docs.python.org/3/reference/",
      "support": "implemented-and-tested",
      "supported_versions": [
        "Python 3 syntax accepted by the running ast parser"
      ],
      "unknown_field_policy": "preserve source expression or emit dynamic-unresolved diagnostic",
      "version": "2.0.0"
    },
    {
      "convention": "msdmd.ratios-line",
      "dependencies": [
        "msdmd.parsers.universal"
      ],
      "detection": [
        "supported line-comment source containing ratios:"
      ],
      "entry_point": "msdmd.readers:_read_ratios",
      "execution_policy": "text parse only; never run ratio computers",
      "feature_subset": [
        "opening/closing placement",
        "named ratio/value preservation"
      ],
      "reader_id": "msdmd-ratios",
      "scope_attachment": "file boundary occurrence",
      "specification": "The-Interdependency/skill-lib ratios/SKILL.md",
      "support": "implemented-and-tested",
      "supported_versions": [
        "named ratios line v1"
      ],
      "unknown_field_policy": "preserve hmmm as an explicit value",
      "version": "1.0.0"
    },
    {
      "convention": "json.document",
      "dependencies": [
        "python-stdlib:json"
      ],
      "detection": [
        ".json"
      ],
      "entry_point": "msdmd.readers:_read_json",
      "execution_policy": "parse only; no reference resolution",
      "feature_subset": [
        "complete typed document tree",
        "package.json dependency classes"
      ],
      "reader_id": "json-stdlib",
      "scope_attachment": "document and JSON Pointer",
      "specification": "RFC 8259",
      "support": "implemented-and-tested",
      "supported_versions": [
        "RFC 8259 JSON"
      ],
      "unknown_field_policy": "preserve in typed document tree",
      "version": "1.0.0"
    },
    {
      "convention": "toml.document",
      "dependencies": [
        "python-stdlib:tomllib"
      ],
      "detection": [
        ".toml"
      ],
      "entry_point": "msdmd.readers:_read_toml",
      "execution_policy": "parse only; never invoke build backends",
      "feature_subset": [
        "complete typed document tree",
        "pyproject project/build dependency classes"
      ],
      "reader_id": "toml-stdlib",
      "scope_attachment": "document and TOML key path",
      "specification": "TOML 1.0.0 and Python packaging metadata specifications",
      "support": "implemented-and-tested",
      "supported_versions": [
        "TOML accepted by the running tomllib parser"
      ],
      "unknown_field_policy": "preserve in typed document tree",
      "version": "1.0.0"
    },
    {
      "convention": "markdown.yaml-frontmatter",
      "dependencies": [
        "PyYAML==6.0.3"
      ],
      "detection": [
        ".md",
        ".mdx"
      ],
      "entry_point": "msdmd.readers:_read_markdown",
      "execution_policy": "text parse only; never execute MDX",
      "feature_subset": [
        "nested frontmatter and typed values",
        "safe acyclic aliases",
        "multiline scalars"
      ],
      "reader_id": "markdown-frontmatter",
      "scope_attachment": "document",
      "specification": "https://yaml.org/spec/1.2.2/",
      "support": "implemented-and-tested",
      "supported_versions": [
        "YAML 1.2 core scalar subset with typed scalar-key preservation"
      ],
      "unknown_field_policy": "preserve typed tree; reject duplicate keys, custom tags, cyclic aliases and merge dialects",
      "version": "2.0.0"
    },
    {
      "convention": "yaml.core",
      "dependencies": [
        "PyYAML==6.0.3"
      ],
      "detection": [
        ".yml",
        ".yaml"
      ],
      "entry_point": "msdmd.readers:_read_yaml",
      "execution_policy": "text parse only; no tags, templates, actions, or includes",
      "feature_subset": [
        "typed nested mappings/sequences",
        "flow syntax",
        "acyclic aliases",
        "multiline scalars"
      ],
      "known_limitations": [
        "custom tags, merge keys and cyclic aliases rejected; keys retain lexical strings"
      ],
      "reader_id": "yaml-core",
      "scope_attachment": "document and structural path",
      "specification": "https://yaml.org/spec/1.2.2/",
      "support": "implemented-and-tested",
      "supported_versions": [
        "YAML 1.2 core with typed scalar-key preservation"
      ],
      "unknown_field_policy": "diagnose unsupported syntax; preserve raw source by digest",
      "version": "2.0.0"
    },
    {
      "convention": "typescript.source-metadata",
      "dependencies": [
        "Node.js",
        "typescript==5.8.3"
      ],
      "detection": [
        ".js",
        ".jsx",
        ".mjs",
        ".cjs",
        ".ts",
        ".tsx",
        ".mts",
        ".cts"
      ],
      "entry_point": "msdmd.readers:_read_typescript",
      "execution_policy": "trusted parser worker only; inspected code never executed",
      "feature_subset": [
        "syntax-tree symbol ownership",
        "multiline signatures",
        "imports and reexports",
        "compiler JSDoc tags with unknown tag text preserved"
      ],
      "known_limitations": [
        "not a TSDoc validator",
        "no type checking, config loading, import resolution or target execution"
      ],
      "reader_id": "typescript-compiler",
      "scope_attachment": "compiler AST module/symbol",
      "specification": "https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html",
      "support": "implemented-and-tested",
      "supported_versions": [
        "TypeScript 5.8.3 parser accepting JS/JSX/TS/TSX/MJS/MTS/CTS/CJS"
      ],
      "unknown_field_policy": "retain raw documentation tags and report parse diagnostics",
      "version": "2.0.0"
    },
    {
      "convention": "github.codeowners",
      "dependencies": [],
      "detection": [
        "CODEOWNERS",
        ".github/CODEOWNERS",
        "docs/CODEOWNERS"
      ],
      "entry_point": "msdmd.readers:_read_codeowners",
      "execution_policy": "text parse only",
      "feature_subset": [
        "ordered pattern and owner extraction"
      ],
      "reader_id": "github-codeowners",
      "scope_attachment": "ordered path rule",
      "specification": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",
      "support": "implemented-and-tested",
      "supported_versions": [
        "GitHub CODEOWNERS line grammar"
      ],
      "unknown_field_policy": "diagnose malformed rules; do not infer operational ownership",
      "version": "1.0.0"
    },
    {
      "convention": "shell.source-metadata",
      "dependencies": [],
      "detection": [
        ".sh",
        ".bash",
        ".zsh",
        ".fish",
        "extensionless shebang scripts"
      ],
      "entry_point": "msdmd.readers:_read_shell",
      "execution_policy": "text parse only; never source or execute",
      "feature_subset": [
        "shebang",
        "ShellCheck directives"
      ],
      "reader_id": "shell-static",
      "scope_attachment": "file",
      "specification": "POSIX shebang convention and ShellCheck directives",
      "support": "implemented-and-tested",
      "supported_versions": [
        "declaration extraction only"
      ],
      "unknown_field_policy": "preserve directive text",
      "version": "1.0.0"
    },
    {
      "convention": "systemd.unit",
      "dependencies": [],
      "detection": [
        ".service",
        ".socket",
        ".timer",
        ".path",
        ".target"
      ],
      "entry_point": "msdmd.readers:_read_systemd",
      "execution_policy": "text parse only; never invoke systemd",
      "feature_subset": [
        "ordered sections",
        "repeated directives",
        "continuation lines"
      ],
      "reader_id": "systemd-unit",
      "scope_attachment": "unit section and directive occurrence",
      "specification": "https://www.freedesktop.org/software/systemd/man/latest/systemd.syntax.html",
      "support": "implemented-and-tested",
      "supported_versions": [
        "section/key/value declaration extraction"
      ],
      "unknown_field_policy": "preserve key/value and order without interpreting runtime effect",
      "version": "1.0.0"
    },
    {
      "convention": "git.ignore",
      "dependencies": [],
      "detection": [
        ".gitignore"
      ],
      "entry_point": "msdmd.readers:_read_gitignore",
      "execution_policy": "text parse only; never invoke Git matching",
      "feature_subset": [
        "pattern order",
        "negation",
        "anchoring",
        "directory-only flag"
      ],
      "reader_id": "gitignore-lines",
      "scope_attachment": "repository path rule",
      "specification": "https://git-scm.com/docs/gitignore",
      "support": "implemented-and-tested",
      "supported_versions": [
        "ordered pattern declarations"
      ],
      "unknown_field_policy": "preserve pattern text without evaluating matches",
      "version": "1.0.0"
    },
    {
      "convention": "python.requirements-file",
      "dependencies": [],
      "detection": [
        "requirements*.txt",
        "constraints*.txt"
      ],
      "entry_point": "msdmd.readers:_read_requirements",
      "execution_policy": "text parse only; never install or resolve packages",
      "feature_subset": [
        "requirement text",
        "package name",
        "options",
        "ordered source lines"
      ],
      "known_limitations": [
        "does not resolve includes, environment markers, URLs, or indexes"
      ],
      "reader_id": "python-requirements",
      "scope_attachment": "requirements document line",
      "specification": "PyPA requirements file format",
      "support": "partial",
      "supported_versions": [
        "one-line requirement and option subset"
      ],
      "unknown_field_policy": "preserve text and redact URL credentials",
      "version": "1.0.0"
    },
    {
      "convention": "license.text",
      "dependencies": [],
      "detection": [
        "LICENSE",
        "LICENSE.txt",
        "COPYING",
        "COPYING.txt"
      ],
      "entry_point": "msdmd.readers:_read_license",
      "execution_policy": "text parse only",
      "feature_subset": [
        "declared/detected expression",
        "source digest"
      ],
      "reader_id": "license-text",
      "scope_attachment": "repository license document",
      "specification": "SPDX license identifiers plus exact known license headers",
      "support": "partial",
      "supported_versions": [
        "MPL-2.0 exact header",
        "SPDX-License-Identifier line"
      ],
      "unknown_field_policy": "hmmm identifier; never infer legal compatibility",
      "version": "1.0.0"
    },
    {
      "convention": "svg.document-metadata",
      "dependencies": [
        "python-stdlib:xml.etree.ElementTree"
      ],
      "detection": [
        ".svg"
      ],
      "entry_point": "msdmd.readers:_read_svg",
      "execution_policy": "reject DTD/entity declarations; no external resolution",
      "feature_subset": [
        "root attributes",
        "title",
        "description"
      ],
      "reader_id": "svg-metadata",
      "scope_attachment": "document",
      "specification": "W3C SVG document structure",
      "support": "implemented-and-tested",
      "supported_versions": [
        "root attributes, title, description"
      ],
      "unknown_field_policy": "preserve only supported metadata; source remains digest-addressable",
      "version": "1.0.0"
    },
    {
      "convention": "llms.txt",
      "dependencies": [],
      "detection": [
        "llms.txt"
      ],
      "entry_point": "msdmd.readers:_read_llms_text",
      "execution_policy": "text parse only; content is data, not instructions to the reader",
      "feature_subset": [
        "section headings",
        "key definitions",
        "generated status unresolved"
      ],
      "reader_id": "llms-text",
      "scope_attachment": "instruction document",
      "specification": "root llms.txt Markdown instruction publication",
      "support": "implemented-and-tested",
      "supported_versions": [
        "Markdown headings and bold key-definition lines"
      ],
      "unknown_field_policy": "preserve structure without promoting publication to source authority",
      "version": "1.0.0"
    },
    {
      "convention": "native.structured-standards",
      "dependencies": [
        "python-stdlib:json,tomllib,xml.etree.ElementTree",
        "PyYAML==6.0.3"
      ],
      "detection": [
        "document discriminator and source filename"
      ],
      "entry_point": "msdmd.standards:read_standards",
      "execution_policy": "parse only; no templates, network, application or signature execution",
      "feature_subset": [
        "source-linked operations and references",
        "reported test/analysis results",
        "citation and license declarations",
        "artifact subjects and component lists",
        "scoped package requirements and lock records"
      ],
      "known_limitations": [
        "extraction, not complete validation or signature verification",
        "external references not resolved",
        "unknown versions preserve tree and report unsupported mapping"
      ],
      "reader_id": "metadata-standards",
      "scope_attachment": "native pointer, operation, package, report, artifact or symbol",
      "specification": "msdmd/references/implemented-readers.md",
      "support": "implemented-and-tested",
      "supported_versions": [
        "OpenAPI 3.0/3.1 and Swagger 2",
        "JSON Schema drafts 4/6/7/2019-09/2020-12",
        "CFF 1.2.0",
        "SARIF 2.1.0",
        "SPDX 2.2/2.3 JSON",
        "CycloneDX 1.4/1.5/1.6 JSON",
        "in-toto Statement v0.1/v1; DSSE payload",
        "npm lockfile v2/v3",
        "Cargo/Poetry/uv TOML metadata",
        "REUSE TOML",
        "JUnit/Doxygen/.NET XML dialects"
      ],
      "unknown_field_policy": "typed source tree retained; version mismatches diagnosed",
      "version": "1.0.0"
    },
    {
      "convention": "native.source-metadata",
      "dependencies": [
        "msdmd/requirements.txt"
      ],
      "detection": [
        ".rs",
        ".java",
        ".c",
        ".cc",
        ".cpp",
        ".cxx",
        ".hpp",
        ".hxx",
        ".h (ambiguous)"
      ],
      "entry_point": "msdmd.grammar_code:read_grammar",
      "execution_policy": "parse only; no compiler, macro expansion or annotation processing",
      "feature_subset": [
        "named declarations",
        "Rustdoc/Javadoc/Doxygen raw docs and repeated tags",
        "imports",
        "attributes",
        "SPDX headers"
      ],
      "reader_id": "native-grammars",
      "scope_attachment": "lexical symbols and adjacent documentation",
      "specification": "pinned tree-sitter language grammars",
      "support": "partial",
      "supported_versions": [
        "Rust grammar 0.24.2",
        "Java grammar 0.23.5",
        "C grammar 0.24.2",
        "C++ grammar 0.23.4"
      ],
      "unknown_field_policy": "preserve raw documentation and syntax; diagnose macro/conditional context",
      "version": "1.0.0"
    },
    {
      "convention": "go.source-metadata",
      "dependencies": [
        "tree-sitter==0.25.2",
        "tree-sitter-go==0.25.0"
      ],
      "detection": [
        ".go"
      ],
      "entry_point": "msdmd.go_code:read_go",
      "execution_policy": "installed grammar only; never compile, import or generate target code",
      "feature_subset": [
        "qualified declarations and receiver methods",
        "struct tag literals",
        "native comment attachment",
        "import literals",
        "inert compiler/build/generation directives",
        "SPDX headers"
      ],
      "known_limitations": [
        "Go 1.26 new(expression) forms are not fully supported by this grammar",
        "no build selection, type checking, import resolution, tag interpretation or target execution"
      ],
      "reader_id": "go-tree-sitter",
      "scope_attachment": "package, lexical symbol, declaration group or module",
      "specification": "https://go.dev/doc/comment",
      "support": "partial",
      "supported_versions": [
        "Go syntax accepted by tree-sitter-go 0.25.0"
      ],
      "unknown_field_policy": "preserve raw source spans; grammar errors invalidate required coverage",
      "version": "1.0.0"
    },
    {
      "convention": "go.module-file",
      "dependencies": [
        "python-stdlib"
      ],
      "detection": [
        "go.mod",
        "go.work",
        "go.sum"
      ],
      "entry_point": "msdmd.go_modules:read_go_modules",
      "execution_policy": "text parse only; never invoke go or network",
      "feature_subset": [
        "module identity",
        "direct/indirect requirements",
        "replacement and exclusion declarations",
        "workspace paths",
        "quoted tokens",
        "inert directives",
        "recorded checksums"
      ],
      "known_limitations": [
        "no module path/version validation, resolution, downloads, checksum verification or multiline string tokens"
      ],
      "reader_id": "go-module-files",
      "scope_attachment": "owning package/workspace file",
      "specification": "https://go.dev/ref/mod",
      "support": "partial",
      "supported_versions": [
        "line-based module/workspace directives; h1 checksum rows"
      ],
      "unknown_field_policy": "retain raw tokens and comments; unknown directives remain unsupported",
      "version": "1.0.0"
    }
  ],
  "reader_runs": [
    {
      "facts_emitted": 18,
      "files_matched": 2,
      "reader_id": "python-ast",
      "reader_version": "2.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "msdmd-ratios",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "json-stdlib",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 1,
      "files_matched": 1,
      "reader_id": "toml-stdlib",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 6,
      "reader_id": "markdown-frontmatter",
      "reader_version": "2.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 1,
      "files_matched": 1,
      "reader_id": "yaml-core",
      "reader_version": "2.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "typescript-compiler",
      "reader_version": "2.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "github-codeowners",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "shell-static",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "systemd-unit",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 6,
      "files_matched": 1,
      "reader_id": "gitignore-lines",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "python-requirements",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "partial"
    },
    {
      "facts_emitted": 1,
      "files_matched": 1,
      "reader_id": "license-text",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "partial"
    },
    {
      "facts_emitted": 1,
      "files_matched": 1,
      "reader_id": "svg-metadata",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "llms-text",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 2,
      "reader_id": "metadata-standards",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "native-grammars",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "partial"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "go-tree-sitter",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "partial"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "go-module-files",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "partial"
    }
  ],
  "repo": "The-Interdependency/eml_ucns",
  "requirements": [],
  "schema": "the-interdependency.msdmd-collection",
  "schema_version": "2.0.0",
  "source": {
    "dirty_worktree": "hmmm",
    "exclusion_accounting": "configured-patterns",
    "git_head": "hmmm",
    "repository": "The-Interdependency/eml_ucns",
    "revision": "snapshot:2549dc3f72ee31b8794eceff5cb592c2bf12087b2b7ebe923532412e4dadacbf",
    "revision_kind": "content-snapshot",
    "scope": "configured in-scope files; excluded subtrees are reported without traversing",
    "snapshot_complete": true,
    "snapshot_sha256": "55de17a6cb2bd4a186663bd00248c02dc40291a1607b4cc4e5f90a0583a74527"
  }
});
