// Extracted from HabboAirLauncher.deobf.js, line 98288.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/quest/class_4012.as
// Obfuscated name: _i927407ba71a07a

class {
    static {
      n(this, "class_4012");
    }
    static {
      uUr(this, "class_4012");
    }
    _state = -1;
    var_3576 = -1;
    var_3485 = -1;
    get state() {
      return this._state;
    }
    get userCount() {
      return this.var_3576;
    }
    get userCountGoal() {
      return this.var_3485;
    }
    flush() {
      return ((this._state = -1), (this.var_3576 = -1), (this.var_3485 = -1), !0);
    }
    parse(e) {
      return (
        (this._state = e.readInteger()),
        (this.var_3576 = e.readInteger()),
        (this.var_3485 = e.readInteger()),
        !0
      );
    }
  }
