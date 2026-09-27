// Extracted from HabboAirLauncher.deobf.js, line 98252.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/quest/class_3972.as
// Obfuscated name: _idb94395fbcb5a6

class {
    static {
      n(this, "class_3972");
    }
    static {
      fUr(this, "class_3972");
    }
    _data = null;
    get data() {
      return this._data;
    }
    flush() {
      return ((this._data = null), !0);
    }
    parse(e) {
      return ((this._data = new class_4354(e)), !0);
    }
  }
