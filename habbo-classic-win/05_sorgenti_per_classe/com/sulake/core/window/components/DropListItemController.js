// Estratto da HabboAirLauncher.deobf.js, riga 132904.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/DropListItemController.as
// Nome offuscato: _i8e84a85ff1fa7a

class extends ContainerButtonController {
  static {
    n(this, "DropListItemController");
  }
  get menu() {
    let e = this.parent;
    for (; e !== null;) {
      if (_ie7c01149f30b6b(e)) return e;
      e = e.parent;
    }
    return null;
  }
  get value() {
    return this.getChildAt(0);
  }
  set value(e) {
    let r = this.getChildAt(0);
    r !== e && (r !== null && this.removeChildAt(0), e !== null && this.addChild(e));
  }
}
