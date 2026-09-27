// Extracted from HabboAirLauncher.deobf.js, line 104004.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7cb2729276a37e

class {
    static {
      n(this, "UnkMessageParser_III_7cb272");
    }
    static {
      pKr(this, "UnkMessageParser_III_7cb272");
    }
    _r79ad7661e55438 = [];
    get _rdf8319daa8cbe9() {
      return this._r79ad7661e55438;
    }
    flush() {
      return ((this._r79ad7661e55438 = []), !0);
    }
    parse(e) {
      this._r79ad7661e55438 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++)
        this._r79ad7661e55438.push({ x: e.readInteger(), y: e.readInteger() });
      return !0;
    }
  }
