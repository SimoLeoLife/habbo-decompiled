// Extracted from HabboAirLauncher.deobf.js, line 95871.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4d75d23e2cba40

class {
    static {
      n(this, "UnkMessageParser_I_4d75d2");
    }
    static {
      jOr(this, "UnkMessageParser_I_4d75d2");
    }
    _r5f69fc5db295c6 = [];
    flush() {
      return ((this._r5f69fc5db295c6 = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r5f69fc5db295c6.push(new class_3178(e));
      return !0;
    }
    get _rd77a18091f711c() {
      return this._r5f69fc5db295c6;
    }
  }
