// Estratto da HabboAirLauncher.deobf.js, riga 95740.

class {
    static {
      n(this, "_i12e4229fd6f4cd");
    }
    static {
      ROr(this, "_i12e4229fd6f4cd");
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
