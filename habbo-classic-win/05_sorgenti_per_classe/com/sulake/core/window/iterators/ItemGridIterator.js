// Extracted from HabboAirLauncher.deobf.js, line 138342.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/iterators/ItemGridIterator.as
// Obfuscated name: _i465593e0f7a32a

class extends UnkInterface_6e5afb {
  static {
    n(this, "ItemGridIterator");
  }
  var_794;
  constructor(e) {
    (super(), (this.var_794 = e));
  }
  get length() {
    return this.var_794._r72acf104e2c444;
  }
  indexOf(e) {
    return this.var_794._r76bcf89cad2fb2(e);
  }
  getProperty(e) {
    return this.var_794.getGridItemAt(Number(e));
  }
  setProperty(e, r) {
    let t = r,
      i = this.var_794._r76bcf89cad2fb2(t);
    i !== e &&
      (i > -1 && this.var_794.removeGridItem(t),
      this.var_794._r69465cf54b2583(t, Number(e)));
  }
  nextNameIndex(e) {
    return e < this.var_794._r72acf104e2c444 ? e + 1 : 0;
  }
  nextValue(e) {
    return this.var_794.getGridItemAt(Number(e) - 1);
  }
}
