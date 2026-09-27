// Extracted from HabboAirLauncher.deobf.js, line 76804.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i71abedfbf79802

class {
    static {
      n(this, "UnkMessageParser_I_71abed");
    }
    static {
      Jpr(this, "UnkMessageParser_I_71abed");
    }
    _re77c9a4427ec93 = [];
    get _r8ada5d04f55bc7() {
      return this._re77c9a4427ec93;
    }
    flush() {
      return ((this._re77c9a4427ec93 = []), !0);
    }
    parse(e) {
      this._re77c9a4427ec93 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._re77c9a4427ec93.push(new UnkClass_4e740e(e));
      return !0;
    }
  }
