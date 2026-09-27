// Estratto da HabboAirLauncher.deobf.js, riga 91039.

class {
    static {
      n(this, "_ibf261a8c49fde6");
    }
    static {
      IRr(this, "_ibf261a8c49fde6");
    }
    _rdb237ac9da5553 = !1;
    _ra87a412e5902c1 = -1;
    flush() {
      return ((this._ra87a412e5902c1 = -1), (this._rdb237ac9da5553 = !1), !0);
    }
    parse(e) {
      return (
        (this._ra87a412e5902c1 = e.readInteger()),
        (this._rdb237ac9da5553 = e.readInteger() > 0),
        !0
      );
    }
    get userID() {
      return this._ra87a412e5902c1;
    }
    get _r22db0312772e45() {
      return this._rdb237ac9da5553;
    }
  }
