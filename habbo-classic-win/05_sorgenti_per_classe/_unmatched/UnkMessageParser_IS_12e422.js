// Extracted from HabboAirLauncher.deobf.js, line 95740.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i12e4229fd6f4cd

class {
    static {
      n(this, "UnkMessageParser_IS_12e422");
    }
    static {
      ROr(this, "UnkMessageParser_IS_12e422");
    }
    _r333fc81fe4ca32 = [];
    flush() {
      return ((this._r333fc81fe4ca32 = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r333fc81fe4ca32.push(e.readString());
      return !0;
    }
    get _r126d1d667eed47() {
      return this._r333fc81fe4ca32;
    }
  }
