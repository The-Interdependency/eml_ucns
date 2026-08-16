# === MODULE_BUILD ===
# id: eml_ucns_core
#   module_name: core
#   module_kind: engine
#   summary: core EML binary operator (exp(x)-log(y)) and fail-closed deprecated UCNS bridge boundary
#   owner: Erin Spencer
#   public_surface: eml, EMLNode, eml_tree_to_ucns, DeprecatedUCNSBridgeError
#   internal_surface: none
#   auth_boundary: none
#   storage_boundary: none
#   network_boundary: none
#   user_data_boundary: none
#   admin_only: false
#   tests: tests.test_deprecated_ucns_bridge
#   rollout: default_enabled
#   rollback: remove module and its references
#   requires: none
#   since: 2026-06-02
#   unresolved: hmmm; no current-UCNS adapter or Theorem-N implementation is selected
# === END MODULE_BUILD ===

# === CONTRACTS ===
# id: eml_ucns_bridge_fails_closed_deprecated
#   given: any call to eml_tree_to_ucns
#   then: raises DeprecatedUCNSBridgeError and selects no replacement
#   class: correctness
# === END CONTRACTS ===

import cmath
from dataclasses import dataclass
from typing import Union, Optional

def eml(x: complex, y: complex) -> complex:
    """Core EML binary operator"""
    return cmath.exp(x) - cmath.log(y)

@dataclass
class EMLNode:
    left: Union['EMLNode', complex]
    right: Union['EMLNode', complex]
    is_leaf: bool = False
    value: Optional[complex] = None

    @staticmethod
    def leaf(value: complex = 1 + 0j):
        node = EMLNode(None, None, True)
        node.value = value
        return node

class DeprecatedUCNSBridgeError(RuntimeError):
    """The removed v1 EML-to-UCNS bridge was incompatible with current UCNS."""


def eml_tree_to_ucns(tree: EMLNode, depth: int = 0):
    """Fail closed: the v1 bridge is deprecated and has no current replacement."""
    del tree, depth
    raise DeprecatedUCNSBridgeError(
        "eml_tree_to_ucns is DEPRECATED: it targeted the removed UCNSObject "
        "surface and never implemented non-leaf construction; hmmm: no "
        "current-UCNS adapter or theorem bridge is selected"
    )
