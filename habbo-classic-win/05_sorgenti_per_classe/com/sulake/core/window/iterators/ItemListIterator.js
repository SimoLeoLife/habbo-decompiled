// Estratto da HabboAirLauncher.deobf.js, riga 138373.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/iterators/ItemListIterator.as
// Nome offuscato: _i47b42f933720cc

class extends _i6e5afb6abd5bbb {
  static {
    n(this, "ItemListIterator");
  }
  var_794;
  constructor(e) {
    (super(), (this.var_794 = e));
  }
  get length() {
    return this.var_794.numListItems;
  }
  indexOf(e) {
    return this.var_794.getListItemIndex(e);
  }
  getProperty(e) {
    return this.var_794.getListItemAt(Number(e));
  }
  setProperty(e, r) {
    let t = r,
      i = this.var_794.getListItemIndex(t);
    i !== e &&
      (i > -1 && this.var_794.removeListItem(t),
      this.var_794.addListItemAt(t, Number(e)));
  }
  nextNameIndex(e) {
    return e < this.var_794.numListItems ? e + 1 : 0;
  }
  nextValue(e) {
    return this.var_794.getListItemAt(Number(e) - 1);
  }
}
