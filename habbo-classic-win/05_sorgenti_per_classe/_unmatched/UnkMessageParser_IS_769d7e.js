// Extracted from HabboAirLauncher.deobf.js, line 99929.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i769d7e3a20a9e7

class {
    static {
      n(this, "UnkMessageParser_IS_769d7e");
    }
    static {
      Ljr(this, "UnkMessageParser_IS_769d7e");
    }
    _rfd03bc8894bb8c = [];
    get _rafac613a60659d() {
      return this._rfd03bc8894bb8c;
    }
    flush() {
      return !1;
    }
    parse(e) {
      this._rfd03bc8894bb8c = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rfd03bc8894bb8c.push(e.readString());
      return !1;
    }
  }
