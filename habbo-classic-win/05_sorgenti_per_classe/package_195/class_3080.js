// Extracted from HabboAirLauncher.deobf.js, line 104044.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_195/class_3080.as
// Obfuscated name: _ie3c2351d5dff15

class {
    static {
      n(this, "class_3080");
    }
    static {
      wKr(this, "class_3080");
    }
    _flatId = 0;
    var_2155 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return e
        ? ((this._flatId = e.readInteger()), (this.var_2155 = e.readInteger()), !0)
        : !1;
    }
    get flatId() {
      return this._flatId;
    }
    get _rea9739215487be() {
      return this.var_2155;
    }
  }
