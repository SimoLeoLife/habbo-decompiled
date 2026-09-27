// Extracted from HabboAirLauncher.deobf.js, line 94756.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_60/class_2052.as
// Obfuscated name: _ic4f30442ea6390

class {
    static {
      n(this, "class_2052");
    }
    static {
      uNr(this, "class_2052");
    }
    var_5744 = !1;
    _r3dd7dc91440408 = !1;
    var_5793 = !1;
    _data = null;
    var_5771 = !1;
    var_2763 = null;
    var_3818 = null;
    var_5823 = !1;
    flush() {
      return !0;
    }
    parse(e) {
      ((this.var_5744 = e.readBoolean()),
        (this._data = new Fb(e)),
        (this._r3dd7dc91440408 = e.readBoolean()),
        (this.var_5793 = e.readBoolean()),
        (this.var_5771 = e.readBoolean()));
      let r = e.readBoolean();
      return (
        (this.var_2763 = new class_2849(e)),
        (this._data._r01bc015c33ec89 = r),
        (this._data._rbe41b4412cc2f5 = e.readBoolean()),
        (this.var_3818 = at.fromFloodSensitivity(e.readInteger())),
        (this.var_5823 = e.readBoolean()),
        !0
      );
    }
    dispose() {
      this.var_2763 = null;
    }
    get disposed() {
      return this.var_2763 == null;
    }
    get _r545a567b7e1354() {
      return this.var_5744;
    }
    get data() {
      return this._data;
    }
    get _r7e3bf08910bca1() {
      return this._r3dd7dc91440408;
    }
    get _re2ef5f6f4b8f23() {
      return this.var_5793;
    }
    get _r9aa51bb36cd0b8() {
      return this.var_5771;
    }
    get _r3d55e7f65e7db4() {
      return this.var_2763;
    }
    get _r32ac9258a48869() {
      return this.var_5823;
    }
    get chatSettings() {
      return this.var_3818;
    }
  }
