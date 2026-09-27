// Extracted from HabboAirLauncher.deobf.js, line 101165.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia296ac295c2136

class {
    static {
      n(this, "UnkMessageParser_S_a296ac");
    }
    static {
      fQr(this, "UnkMessageParser_S_a296ac");
    }
    _data = null;
    get data() {
      let e = this._data;
      return (e && e.setReadOnly(), e);
    }
    flush() {
      return ((this._data = null), !0);
    }
    parse(e) {
      return !e || ((this._data = zs.parseObjectData(e)), !this._data)
        ? !1
        : ((this._data.ownerName = e.readString()), !0);
    }
  }
