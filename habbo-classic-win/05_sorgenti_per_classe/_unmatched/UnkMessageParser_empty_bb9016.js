// Extracted from HabboAirLauncher.deobf.js, line 109126.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibb9016a8d3e899

class {
    static {
      n(this, "UnkMessageParser_empty_bb9016");
    }
    static {
      Mtt(this, "UnkMessageParser_empty_bb9016");
    }
    _data = null;
    flush() {
      return ((this._data = null), !0);
    }
    parse(e) {
      return ((this._data = new Qs(e)), !0);
    }
    get data() {
      return this._data;
    }
  }
