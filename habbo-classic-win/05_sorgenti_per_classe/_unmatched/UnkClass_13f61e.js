// Extracted from HabboAirLauncher.deobf.js, line 132806.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i13f61e920bd6b9

class extends UnkInterface_6e5afb {
  static {
    n(this, "UnkClass_13f61e");
  }
  var_794;
  constructor(e) {
    (super(), (this.var_794 = e));
  }
  get length() {
    return this.var_794.numMenuItems;
  }
  indexOf(e) {
    return this.var_794._ra52355a4e39349(e);
  }
  getProperty(e) {
    return this.var_794._r446126f4f4fa27(Number(e));
  }
  setProperty(e, r) {
    let t = r,
      i = this.var_794._ra52355a4e39349(t);
    i !== e &&
      (i > -1 && this.var_794._rf4dc4863bda160(t),
      this.var_794.addMenuItemAt(t, Number(e)));
  }
  nextNameIndex(e) {
    return e < this.var_794.numMenuItems ? e + 1 : 0;
  }
  nextValue(e) {
    return this.var_794._r446126f4f4fa27(Number(e) - 1);
  }
}
