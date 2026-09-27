// Extracted from HabboAirLauncher.deobf.js, line 78077.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ieec6a5c6cf2886

class {
    static {
      n(this, "UnkMessageParser_I_eec6a5");
    }
    static {
      cvr(this, "UnkMessageParser_I_eec6a5");
    }
    _r38932e210d30e4 = [];
    get _r3933db8d552e0b() {
      return this._r38932e210d30e4;
    }
    flush() {
      return ((this._r38932e210d30e4 = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r38932e210d30e4.push(new UnkClass_c18c5f(e));
      return !0;
    }
  }
