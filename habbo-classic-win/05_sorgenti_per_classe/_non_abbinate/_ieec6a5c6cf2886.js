// Estratto da HabboAirLauncher.deobf.js, riga 78077.

class {
    static {
      n(this, "_ieec6a5c6cf2886");
    }
    static {
      cvr(this, "_ieec6a5c6cf2886");
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
      for (let t = 0; t < r; t++) this._r38932e210d30e4.push(new _ic18c5faa4cb73b(e));
      return !0;
    }
  }
