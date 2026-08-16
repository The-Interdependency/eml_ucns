import { defineMsdmdCollection } from "./.agents/skills/msdmd/collection";

export default defineMsdmdCollection({
  "declarations": [
    {
      "block": "CONTRACTS",
      "fields": {
        "class": "correctness",
        "given": "any call to eml_tree_to_ucns",
        "then": "raises DeprecatedUCNSBridgeError and selects no replacement"
      },
      "file": "eml_ucns/core.py",
      "id": "eml_ucns_bridge_fails_closed_deprecated"
    },
    {
      "block": "MODULE_BUILD",
      "fields": {
        "admin_only": "false",
        "auth_boundary": "none",
        "internal_surface": "none",
        "module_kind": "engine",
        "module_name": "core",
        "network_boundary": "none",
        "owner": "Erin Spencer",
        "public_surface": "eml, EMLNode, eml_tree_to_ucns, DeprecatedUCNSBridgeError",
        "requires": "none",
        "rollback": "remove module and its references",
        "rollout": "default_enabled",
        "since": "2026-06-02",
        "storage_boundary": "none",
        "summary": "core EML binary operator (exp(x)-log(y)) and fail-closed deprecated UCNS bridge boundary",
        "tests": "tests.test_deprecated_ucns_bridge",
        "unresolved": "hmmm; no current-UCNS adapter or Theorem-N implementation is selected",
        "user_data_boundary": "none"
      },
      "file": "eml_ucns/core.py",
      "id": "eml_ucns_core"
    },
    {
      "block": "CHECKS",
      "fields": {
        "call": "self::test_ucns_bridge_fails_closed_as_deprecated",
        "cleanup": "none",
        "mutates": "none",
        "proves": "eml_ucns_bridge_fails_closed_deprecated",
        "requires": "python3",
        "timeout": "5"
      },
      "file": "tests/test_deprecated_ucns_bridge.py",
      "id": "check_eml_ucns_bridge_fails_closed_deprecated"
    }
  ],
  "edges": [
    {
      "from": "check_eml_ucns_bridge_fails_closed_deprecated",
      "kind": "calls",
      "source_block": "CHECKS",
      "source_id": "check_eml_ucns_bridge_fails_closed_deprecated",
      "to": "self::test_ucns_bridge_fails_closed_as_deprecated"
    },
    {
      "from": "check_eml_ucns_bridge_fails_closed_deprecated",
      "kind": "claims_proves",
      "source_block": "CHECKS",
      "source_id": "check_eml_ucns_bridge_fails_closed_deprecated",
      "to": "eml_ucns_bridge_fails_closed_deprecated"
    },
    {
      "from": "check_eml_ucns_bridge_fails_closed_deprecated",
      "kind": "requires",
      "source_block": "CHECKS",
      "source_id": "check_eml_ucns_bridge_fails_closed_deprecated",
      "to": "python3"
    },
    {
      "from": "eml_ucns_core",
      "kind": "owns",
      "source_block": "MODULE_BUILD",
      "source_id": "eml_ucns_core",
      "to": "Erin Spencer"
    },
    {
      "from": "eml_ucns_core",
      "kind": "requires",
      "source_block": "MODULE_BUILD",
      "source_id": "eml_ucns_core",
      "to": "none"
    }
  ],
  "gaps": [],
  "repo": "eml_ucns"
});
