// Extracted from HabboAirLauncher.deobf.js, line 96619.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/quest/class_3343.as
// Obfuscated name: _i20541c77ae263f

class {
    static {
      n(this, "class_3343");
    }
    static {
      qFr(this, "class_3343");
    }
    _amount = 0;
    _r235e7d70b61d0e = 0;
    _type = 0;
    get amount() {
      return this._amount;
    }
    get change() {
      return this._r235e7d70b61d0e;
    }
    get type() {
      return this._type;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._amount = e.readInteger()),
        (this._r235e7d70b61d0e = e.readInteger()),
        (this._type = e.readInteger()),
        !0
      );
    }
  }
