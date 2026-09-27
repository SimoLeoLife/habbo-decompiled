// Extracted from HabboAirLauncher.deobf.js, line 88021.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_3923.as
// Obfuscated name: _i6b82c7e466817d

class {
    static {
      n(this, "class_3923");
    }
    static {
      UWr(this, "class_3923");
    }
    _onDuty = !1;
    var_4686 = 0;
    var_4779 = 0;
    var_4682 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._onDuty = e.readBoolean()),
        (this.var_4686 = e.readInteger()),
        (this.var_4779 = e.readInteger()),
        (this.var_4682 = e.readInteger()),
        !0
      );
    }
    get onDuty() {
      return this._onDuty;
    }
    get _rc5a81c2047e008() {
      return this.var_4779;
    }
    get _r1ab273a44f1ab4() {
      return this.var_4682;
    }
    get _r42ccd304f56ad0() {
      return this.var_4686;
    }
  }
