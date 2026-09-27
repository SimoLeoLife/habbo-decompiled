// Extracted from HabboAirLauncher.deobf.js, line 75991.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib908ea818851a4

class {
    static {
      n(this, "UnkMessageParser_I_b908ea");
    }
    static {
      K7r(this, "UnkMessageParser_I_b908ea");
    }
    _r7c672c2c86fd35 = null;
    get _r181febaf49bc70() {
      return this._r7c672c2c86fd35;
    }
    flush() {
      return ((this._r7c672c2c86fd35 = null), !0);
    }
    parse(e) {
      this._r7c672c2c86fd35 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r7c672c2c86fd35.push(new UnkClass_5563ae(e));
      return !0;
    }
  }
