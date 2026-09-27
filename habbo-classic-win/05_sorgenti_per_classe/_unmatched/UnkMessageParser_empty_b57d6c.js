// Extracted from HabboAirLauncher.deobf.js, line 93009.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib57d6c1db36681

class {
    static {
      n(this, "UnkMessageParser_empty_b57d6c");
    }
    static {
      YSr(this, "UnkMessageParser_empty_b57d6c");
    }
    _data = null;
    get data() {
      return this._data;
    }
    flush() {
      return (this._data?.dispose(), (this._data = null), !0);
    }
    parse(e) {
      return ((this._data = new class_2205(e)), !0);
    }
  }
