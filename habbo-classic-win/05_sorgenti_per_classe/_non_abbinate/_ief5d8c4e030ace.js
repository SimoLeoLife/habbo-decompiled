// Estratto da HabboAirLauncher.deobf.js, riga 77608.

class {
    static {
      n(this, "_ief5d8c4e030ace");
    }
    static {
      vgr(this, "_ief5d8c4e030ace");
    }
    _r28412fb53e502c = !1;
    _count = 0;
    parse(e) {
      return ((this._count = e.readInteger()), (this._r28412fb53e502c = e.readBoolean()), !0);
    }
    flush() {
      return ((this._count = 0), (this._r28412fb53e502c = !1), !0);
    }
    get count() {
      return this._count;
    }
    get _r6fa48641fcc8cb() {
      return this._r28412fb53e502c;
    }
  }
