// Extracted from HabboAirLauncher.deobf.js, line 76235.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9b580059905140

class {
    static {
      n(this, "UnkMessageParser_H_9b5800");
    }
    static {
      vpr(this, "UnkMessageParser_H_9b5800");
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
