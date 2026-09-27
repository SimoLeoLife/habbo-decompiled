// Extracted from HabboAirLauncher.deobf.js, line 92119.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i527c67c1783dbf

class {
    static {
      n(this, "UnkMessageParser_BIIIIIIIII__527c67");
    }
    static {
      $Pr(this, "UnkMessageParser_BIIIIIIIII__527c67");
    }
    var_3915 = !1;
    _r471dc91f07711a = 0;
    _r6a0004b6d22280 = 0;
    _r3d478dbadc036f = 0;
    _r32a71cd5b2c521 = 0;
    _r09b5610907c3f5 = 0;
    _r96019af79cbab8 = 0;
    _rbffed5108c79eb = 0;
    _r76fc5393f231b3 = 0;
    _r623ebf45bf5d06 = 0;
    _r7b011b52ea87b0 = 0;
    get isEnabled() {
      return this.var_3915;
    }
    get _rc78a9710d98367() {
      return this._r471dc91f07711a;
    }
    get _rfa37188cae1632() {
      return this._r6a0004b6d22280;
    }
    get _rac800e17bfe7c0() {
      return this._r3d478dbadc036f;
    }
    get _ra450591baf0c72() {
      return this._r09b5610907c3f5;
    }
    get _r742515fbd69d4b() {
      return this._r32a71cd5b2c521;
    }
    get _r006253b58c8103() {
      return this._r96019af79cbab8;
    }
    get _rccca8d1e540a76() {
      return this._rbffed5108c79eb;
    }
    get _r796ca1539cb5d1() {
      return this._r3d478dbadc036f;
    }
    get _r6c2fda63c2e23c() {
      return this._r76fc5393f231b3;
    }
    get _rc0e274bac9c617() {
      return this._r623ebf45bf5d06;
    }
    get _rf6fc7b262ce24c() {
      return this._r7b011b52ea87b0;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3915 = e.readBoolean()),
        (this._r471dc91f07711a = e.readInteger()),
        (this._r6a0004b6d22280 = e.readInteger()),
        (this._r3d478dbadc036f = e.readInteger()),
        (this._r09b5610907c3f5 = e.readInteger()),
        (this._r32a71cd5b2c521 = e.readInteger()),
        (this._r96019af79cbab8 = e.readInteger()),
        (this._rbffed5108c79eb = e.readInteger()),
        (this._r76fc5393f231b3 = e.readInteger()),
        (this._r623ebf45bf5d06 = e.readInteger()),
        (this._r7b011b52ea87b0 = e.readInteger()),
        !0
      );
    }
  }
