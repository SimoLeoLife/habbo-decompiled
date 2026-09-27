// Extracted from HabboAirLauncher.deobf.js, line 91563.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0cbfc08e84842c

class {
    static {
      n(this, "UnkMessageParser_I_0cbfc0");
    }
    static {
      fPr(this, "UnkMessageParser_I_0cbfc0");
    }
    _r84bb29e42ffe06 = [];
    get _r444b83e39f0578() {
      return this._r84bb29e42ffe06;
    }
    flush() {
      return ((this._r84bb29e42ffe06 = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r84bb29e42ffe06.push(new class_4338(e));
      return !0;
    }
  }
