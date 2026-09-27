// Estratto da HabboAirLauncher.deobf.js, riga 105416.

class {
    static {
      n(this, "_ia3a5fec5c63ea6");
    }
    static {
      wZr(this, "_ia3a5fec5c63ea6");
    }
    _flatId = 0;
    _data = null;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), (this._data = new _iec27dbe250853b(e)), !0);
    }
    get flatId() {
      return this._flatId;
    }
    get data() {
      return this._data;
    }
  }
