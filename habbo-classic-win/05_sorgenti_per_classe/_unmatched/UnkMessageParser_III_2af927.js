// Extracted from HabboAirLauncher.deobf.js, line 83756.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2af927e97101d5

class {
    static {
      n(this, "UnkMessageParser_III_2af927");
    }
    static {
      aIr(this, "UnkMessageParser_III_2af927");
    }
    _r9fe794a64fecde = 0;
    _rf379211f10e4dc = [];
    get percentage() {
      return this._r9fe794a64fecde;
    }
    get _rb5f4cc78c550dd() {
      return this._rf379211f10e4dc;
    }
    flush() {
      return !1;
    }
    parse(e) {
      ((this._r9fe794a64fecde = e.readInteger()), (this._rf379211f10e4dc = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rf379211f10e4dc.push(e.readInteger());
      return !0;
    }
  }
