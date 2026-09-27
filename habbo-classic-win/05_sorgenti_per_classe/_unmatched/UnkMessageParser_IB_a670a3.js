// Extracted from HabboAirLauncher.deobf.js, line 95501.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia670a362b3d337

class {
    static {
      n(this, "UnkMessageParser_IB_a670a3");
    }
    static {
      fOr(this, "UnkMessageParser_IB_a670a3");
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
