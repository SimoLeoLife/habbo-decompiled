// Extracted from HabboAirLauncher.deobf.js, line 106525.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie97abf92327dec

class {
    static {
      n(this, "UnkMessageParser_III_e97abf");
    }
    static {
      jqr(this, "UnkMessageParser_III_e97abf");
    }
    _r89e11d3d569e45 = new B();
    get _r37d03f07c91778() {
      return this._r89e11d3d569e45.length;
    }
    _rc9e54aaca08a34(e) {
      return e >= 0 && e < this._r89e11d3d569e45.length ? (this._r89e11d3d569e45.getKey(e) ?? -1) : -1;
    }
    _ra4df5e76b7da17(e) {
      return e >= 0 && e < this._r89e11d3d569e45.length ? (this._r89e11d3d569e45.getWithIndex(e) ?? -1) : -1;
    }
    flush() {
      return (this._r89e11d3d569e45.reset(), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readInteger();
        this._r89e11d3d569e45.add(i, s);
      }
      return !0;
    }
  }
