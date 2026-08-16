from eml_ucns.core import (
    DeprecatedUCNSBridgeError,
    EMLNode,
    eml_tree_to_ucns,
)

# === CHECKS ===
# id: check_eml_ucns_bridge_fails_closed_deprecated
#   proves: eml_ucns_bridge_fails_closed_deprecated
#   call: self::test_ucns_bridge_fails_closed_as_deprecated
#   requires: python3
#   timeout: 5
#   mutates: none
#   cleanup: none
# === END CHECKS ===


def test_ucns_bridge_fails_closed_as_deprecated() -> None:
    tree = EMLNode(EMLNode.leaf(1 + 0j), EMLNode.leaf(2 + 0j))

    try:
        eml_tree_to_ucns(tree)
    except DeprecatedUCNSBridgeError as exc:
        message = str(exc)
        assert "DEPRECATED" in message
        assert "hmmm" in message
    else:
        raise AssertionError("deprecated UCNS bridge must fail closed")
