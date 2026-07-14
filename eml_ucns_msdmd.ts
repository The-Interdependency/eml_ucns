import { defineMsdmdCollection } from "./.agents/skills/msdmd/collection";

export default defineMsdmdCollection({
  "declarations": [
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
      "id": "eml_ucns_core"
    }
  ],
  "edges": [
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
  "repo": "eml_ucns",
  "source_commit": "57ba9cc"
});
