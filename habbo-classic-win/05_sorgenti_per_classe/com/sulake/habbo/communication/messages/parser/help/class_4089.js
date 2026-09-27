// Extracted from HabboAirLauncher.deobf.js, line 87699.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_4089.as
// Obfuscated name: _i7cc99a6c7f5c2d

class {
    static {
      n(this, "class_4089");
    }
    static {
      pWr(this, "class_4089");
    }
    static const_564 = 0;
    static const_1120 = 1;
    static const_1102 = 2;
    static const_1370 = 3;
    static const_957 = 4;
    static const_426 = 5;
    _status = null;
    flush() {
      return ((this._status = null), !0);
    }
    parse(e) {
      this._status = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._status.push(e.readInteger());
      return !0;
    }
    get status() {
      return this._status;
    }
  }
