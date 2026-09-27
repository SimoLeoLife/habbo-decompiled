// Estratto da HabboAirLauncher.deobf.js, riga 101165.

class {
    static {
      n(this, "_ia296ac295c2136");
    }
    static {
      fQr(this, "_ia296ac295c2136");
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
