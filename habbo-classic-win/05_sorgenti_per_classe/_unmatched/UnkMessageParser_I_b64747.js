// Extracted from HabboAirLauncher.deobf.js, line 76377.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib647471e66bb8b

class {
    static {
      n(this, "UnkMessageParser_I_b64747");
    }
    static {
      Apr(this, "UnkMessageParser_I_b64747");
    }
    _rbb7ed6414f6adf = [];
    get _reb1781c553920a() {
      return this._rbb7ed6414f6adf;
    }
    flush() {
      return ((this._rbb7ed6414f6adf = []), !0);
    }
    parse(e) {
      this._rbb7ed6414f6adf = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rbb7ed6414f6adf.push(new UnkClass_e0a85e(e));
      return !0;
    }
  }
