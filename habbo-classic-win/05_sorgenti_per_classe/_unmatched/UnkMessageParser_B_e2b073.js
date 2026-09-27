// Extracted from HabboAirLauncher.deobf.js, line 98520.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie2b07322e1514e

class {
    static {
      n(this, "UnkMessageParser_B_e2b073");
    }
    static {
      CUr(this, "UnkMessageParser_B_e2b073");
    }
    _rfdda35a463a125 = !1;
    var_142 = null;
    get expired() {
      return this._rfdda35a463a125;
    }
    get quest() {
      return this.var_142;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._rfdda35a463a125 = e.readBoolean()), (this.var_142 = new Jc(e)), !0);
    }
  }
