// Extracted from HabboAirLauncher.deobf.js, line 76641.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i364e8aaecd03bc

class {
    static {
      n(this, "UnkMessageParser_I_364e8a");
    }
    static {
      Fpr(this, "UnkMessageParser_I_364e8a");
    }
    _r1ef0c1f3d79257 = [];
    get _r57eb0612ffa97a() {
      return this._r1ef0c1f3d79257;
    }
    flush() {
      return ((this._r1ef0c1f3d79257 = []), !0);
    }
    parse(e) {
      this._r1ef0c1f3d79257 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r1ef0c1f3d79257.push(new MM(e));
      return !0;
    }
  }
