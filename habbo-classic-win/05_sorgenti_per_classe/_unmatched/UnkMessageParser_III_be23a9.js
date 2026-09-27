// Extracted from HabboAirLauncher.deobf.js, line 78355.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibe23a988cf9243

class {
    static {
      n(this, "UnkMessageParser_III_be23a9");
    }
    static {
      Pvr(this, "UnkMessageParser_III_be23a9");
    }
    var_3515 = 0;
    var_3144 = 0;
    _r3ec47d9501986f = [];
    get _rec250fae6d7fc2() {
      return this.var_3515;
    }
    get _rd646a5cabacc16() {
      return this.var_3144;
    }
    get _r3ffeb595461103() {
      return this._r3ec47d9501986f;
    }
    parse(e) {
      ((this.var_3515 = e.readInteger()),
        (this.var_3144 = e.readInteger()),
        (this._r3ec47d9501986f = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r3ec47d9501986f.push(new DummyFriend(e));
      return !0;
    }
    flush() {
      return ((this._r3ec47d9501986f = []), !0);
    }
  }
