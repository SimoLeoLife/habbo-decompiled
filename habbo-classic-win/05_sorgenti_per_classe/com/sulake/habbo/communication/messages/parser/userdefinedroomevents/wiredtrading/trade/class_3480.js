// Extracted from HabboAirLauncher.deobf.js, line 110515.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredtrading/trade/class_3480.as
// Obfuscated name: _ib7ededf06bdea2

class {
    static {
      n(this, "class_3480");
    }
    static {
      uit(this, "class_3480");
    }
    var_3850 = !1;
    _r8e803549f52c02 = null;
    var_3119 = !1;
    var_3159 = 0;
    flush() {
      return (
        (this._r8e803549f52c02 = null),
        (this.var_3119 = !1),
        (this.var_3850 = !1),
        (this.var_3159 = 0),
        !0
      );
    }
    parse(e) {
      return (
        (this._r8e803549f52c02 = new jf(e)),
        (this.var_3119 = e.readBoolean()),
        (this.var_3850 = e.readBoolean()),
        (this.var_3159 = e.readInteger()),
        !0
      );
    }
    get _r4013f23453854c() {
      return this._r8e803549f52c02;
    }
    get _r401af0b3d71e54() {
      return this.var_3119;
    }
    get _r5ec921bd989f04() {
      return this.var_3850;
    }
    get _r3b59f3bdd6f07d() {
      return this.var_3159;
    }
  }
