// Extracted from HabboAirLauncher.deobf.js, line 89661.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0de40d0535cc00

class {
    static {
      n(this, "UnkMessageParser_B_0de40d");
    }
    static {
      Ikr(this, "UnkMessageParser_B_0de40d");
    }
    _r0e7b173d00935d = !1;
    var_183 = null;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._r0e7b173d00935d = e.readBoolean()), (this.var_183 = new class_3017(e)), !0);
    }
    get _r01287eedc77994() {
      return this._r0e7b173d00935d;
    }
    get item() {
      return this.var_183;
    }
  }
