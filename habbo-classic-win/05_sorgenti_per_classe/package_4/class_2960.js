// Extracted from HabboAirLauncher.deobf.js, line 74794.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_4/class_2960.as
// Obfuscated name: _i93899c6ab5e8cb

class {
    static {
      n(this, "class_2960");
    }
    static {
      F9r(this, "class_2960");
    }
    _r800a8dc0f700a3 = !1;
    wrappingPrice = 0;
    _rb29f9a2f27c1e2 = [];
    _rc80bbf1ee826e1 = [];
    _r98e3f6b40b7bbd = [];
    _rb591f9a9abbd60 = [];
    flush() {
      return !0;
    }
    parse(e) {
      ((this._rb29f9a2f27c1e2 = []),
        (this._rc80bbf1ee826e1 = []),
        (this._r98e3f6b40b7bbd = []),
        (this._rb591f9a9abbd60 = []),
        (this._r800a8dc0f700a3 = e.readBoolean()),
        (this.wrappingPrice = e.readInteger()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rb29f9a2f27c1e2.push(e.readInteger());
      r = e.readInteger();
      for (let t = 0; t < r; t++) this._rc80bbf1ee826e1.push(e.readInteger());
      r = e.readInteger();
      for (let t = 0; t < r; t++) this._r98e3f6b40b7bbd.push(e.readInteger());
      r = e.readInteger();
      for (let t = 0; t < r; t++) this._rb591f9a9abbd60.push(e.readInteger());
      return !0;
    }
  }
