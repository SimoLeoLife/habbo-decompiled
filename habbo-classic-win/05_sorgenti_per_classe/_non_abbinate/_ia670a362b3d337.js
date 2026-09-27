// Estratto da HabboAirLauncher.deobf.js, riga 95501.

class {
    static {
      n(this, "_ia670a362b3d337");
    }
    static {
      fOr(this, "_ia670a362b3d337");
    }
    _r1f8f3465203fa6 = 0;
    _rc5a6f2b22f7136 = !1;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._r1f8f3465203fa6 = e.readInteger()), (this._rc5a6f2b22f7136 = e.readBoolean()), !0);
    }
    get rating() {
      return this._r1f8f3465203fa6;
    }
    get _r43a02485c61e00() {
      return this._rc5a6f2b22f7136;
    }
  }
