// Extracted from HabboAirLauncher.deobf.js, line 76881.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib5b4c59dd912ff

class {
    static {
      n(this, "UnkMessageParser_H_b5b4c5");
    }
    static {
      omr(this, "UnkMessageParser_H_b5b4c5");
    }
    _r03f2910fbe9c48 = 0;
    get success() {
      return this._r03f2910fbe9c48 === 0;
    }
    get var_1827() {
      return this._r03f2910fbe9c48;
    }
    flush() {
      return ((this._r03f2910fbe9c48 = 0), !0);
    }
    parse(e) {
      return ((this._r03f2910fbe9c48 = e.readShort()), !0);
    }
  }
