// Estratto da HabboAirLauncher.deobf.js, riga 98216.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/quest/class_4034.as
// Nome offuscato: _i2b02a81e871065

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
