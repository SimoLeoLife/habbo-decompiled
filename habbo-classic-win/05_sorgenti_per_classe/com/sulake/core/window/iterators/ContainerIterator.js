// Estratto da HabboAirLauncher.deobf.js, riga 128469.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/iterators/ContainerIterator.as
// Nome offuscato: _i760f0b3c844f8d

class extends _i6e5afb6abd5bbb {
  static {
    n(this, "ContainerIterator");
  }
  var_794;
  constructor(e) {
    (super(), (this.var_794 = e));
  }
  get length() {
    return this.var_794.numChildren;
  }
  indexOf(e) {
    return this.var_794.getChildIndex(e);
  }
  getProperty(e) {
    return this.var_794.getChildAt(Number(e));
  }
  setProperty(e, r) {
    let t = r,
      i = this.var_794.getChildIndex(t);
    i !== e &&
      (i > -1 && this.var_794.removeChild(t), this.var_794.addChildAt(t, Number(e)));
  }
  nextNameIndex(e) {
    return e < this.var_794.numChildren ? e + 1 : 0;
  }
  nextValue(e) {
    return this.var_794.getChildAt(Number(e) - 1);
  }
}
