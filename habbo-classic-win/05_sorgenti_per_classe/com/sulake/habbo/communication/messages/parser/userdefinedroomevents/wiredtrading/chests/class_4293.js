// Extracted from HabboAirLauncher.deobf.js, line 109632.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredtrading/chests/class_4293.as
// Obfuscated name: _i6146168f0a3dfa

class {
    static {
      n(this, "class_4293");
    }
    static {
      dat(this, "class_4293");
    }
    _chestId = 0;
    var_1903 = 0;
    var_3807 = !1;
    flush() {
      return ((this._chestId = 0), (this.var_1903 = 0), (this.var_3807 = !1), !0);
    }
    parse(e) {
      return (
        (this._chestId = e.readInteger()),
        (this.var_1903 = e.readInteger()),
        (this.var_3807 = e.readBoolean()),
        !0
      );
    }
    get chestId() {
      return this._chestId;
    }
    get coins() {
      return this.var_1903;
    }
    get _r3534d65bc0f7d5() {
      return this.var_3807;
    }
  }
