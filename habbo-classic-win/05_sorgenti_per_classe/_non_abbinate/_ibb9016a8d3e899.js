// Estratto da HabboAirLauncher.deobf.js, riga 109126.

class {
    static {
      n(this, "_ibb9016a8d3e899");
    }
    static {
      Mtt(this, "_ibb9016a8d3e899");
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
