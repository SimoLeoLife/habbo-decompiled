// Estratto da HabboAirLauncher.deobf.js, riga 78704.

class {
    static {
      n(this, "_i2f0193ac2d2ec9");
    }
    static {
      owr(this, "_i2f0193ac2d2ec9");
    }
    _raf4b651b3f78ad = 0;
    _errorCode = 0;
    get _r5e5a4c91d9abaf() {
      return this._raf4b651b3f78ad;
    }
    get errorCode() {
      return this._errorCode;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._raf4b651b3f78ad = e.readInteger()),
        (this._errorCode = e.readInteger()),
        !0
      );
    }
  }
