// Extracted from HabboAirLauncher.deobf.js, line 77608.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ief5d8c4e030ace

class {
    static {
      n(this, "UnkMessageParser_IB_ef5d8c");
    }
    static {
      vgr(this, "UnkMessageParser_IB_ef5d8c");
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
