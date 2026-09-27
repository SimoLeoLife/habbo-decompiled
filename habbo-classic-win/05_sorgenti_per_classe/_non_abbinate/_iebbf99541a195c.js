// Estratto da HabboAirLauncher.deobf.js, riga 96583.

class {
    static {
      n(this, "_iebbf99541a195c");
    }
    static {
      YFr(this, "_iebbf99541a195c");
    }
    _data = null;
    get data() {
      return this._data;
    }
    flush() {
      return ((this._data = null), !0);
    }
    parse(e) {
      return ((this._data = new class_3168(e)), !0);
    }
  }
