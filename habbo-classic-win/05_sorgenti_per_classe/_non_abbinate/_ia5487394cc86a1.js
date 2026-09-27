// Estratto da HabboAirLauncher.deobf.js, riga 140756.

class extends _i6e5afb6abd5bbb {
  static {
    n(this, "_ia5487394cc86a1");
  }
  var_794;
  constructor(e) {
    (super(), (this.var_794 = e));
  }
  get length() {
    return this.var_794.numSelectables;
  }
  indexOf(e) {
    return this.var_794.getSelectableIndex(e);
  }
  getProperty(e) {
    return this.var_794.getChildAt(Number(e));
  }
  setProperty(e, r) {
    let t = r;
    if (t) {
      let d = this.var_794.getSelectableIndex(t);
      if (d === e) return;
      (d > -1 && this.var_794._r17ea3f0ab73786(t),
        this.var_794._r2ea30bd80a38af(t, Number(e)));
      return;
    }
    let i = r,
      s = this.var_794,
      o = s.getChildIndex(i);
    o !== e && (o > -1 && s.removeChild(i), s.addChildAt(i, Number(e)));
  }
  nextNameIndex(e) {
    return e < this.var_794.numSelectables ? e + 1 : 0;
  }
  nextValue(e) {
    return this.var_794.getSelectableAt(Number(e) - 1);
  }
}
