// Extracted from HabboAirLauncher.deobf.js, line 85670.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_232/class_4079.as
// Obfuscated name: _if6636be6cec759

class {
    static {
      n(this, "class_4079");
    }
    static {
      UCr(this, "class_4079");
    }
    _r03f2910fbe9c48 = -1;
    var_3164 = -1;
    get var_1827() {
      return this._r03f2910fbe9c48;
    }
    get _r25fdc7feecc63e() {
      return this.var_3164;
    }
    flush() {
      return ((this._r03f2910fbe9c48 = -1), (this.var_3164 = -1), !0);
    }
    parse(e) {
      return (
        (this._r03f2910fbe9c48 = e.readInteger()),
        (this.var_3164 = e.readInteger()),
        !0
      );
    }
  }
