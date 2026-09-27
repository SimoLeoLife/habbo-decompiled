// Extracted from HabboAirLauncher.deobf.js, line 73183.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5c8b909e9d7d4f

class {
    static {
      n(this, "UnkMessageParser_II_5c8b90");
    }
    static {
      l5r(this, "UnkMessageParser_II_5c8b90");
    }
    state = 0;
    _r2ea352b1af7c09 = [];
    flush() {
      return ((this.state = 0), (this._r2ea352b1af7c09 = []), !0);
    }
    parse(e) {
      this.state = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r2ea352b1af7c09.push(new UnkClass_30c4d3(e));
      return !0;
    }
  }
