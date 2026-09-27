// Extracted from HabboAirLauncher.deobf.js, line 99156.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i33761fe5771311

class {
    static {
      n(this, "UnkMessageParser_I_33761f");
    }
    static {
      wGr(this, "UnkMessageParser_I_33761f");
    }
    _re2a791729dba4b = [];
    get _r6521049cc02076() {
      return this._re2a791729dba4b;
    }
    flush() {
      return !0;
    }
    parse(e) {
      let r = e.readInteger();
      this._re2a791729dba4b = [];
      for (let t = 0; t < r; t++) this._re2a791729dba4b.push(new UnkClass_61846c(e));
      return !0;
    }
  }
