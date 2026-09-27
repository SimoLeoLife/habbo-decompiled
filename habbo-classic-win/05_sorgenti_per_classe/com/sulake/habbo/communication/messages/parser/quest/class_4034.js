// Extracted from HabboAirLauncher.deobf.js, line 98216.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/quest/class_4034.as
// Obfuscated name: _i2b02a81e871065

class {
    static {
      n(this, "class_4034");
    }
    static {
      sUr(this, "class_4034");
    }
    _data = null;
    get data() {
      return this._data;
    }
    flush() {
      return ((this._data = null), !0);
    }
    parse(e) {
      return ((this._data = new class_4345(e)), !0);
    }
  }
