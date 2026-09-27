// Estratto da HabboAirLauncher.deobf.js, riga 76377.

class {
    static {
      n(this, "_ib647471e66bb8b");
    }
    static {
      Apr(this, "_ib647471e66bb8b");
    }
    _rbb7ed6414f6adf = [];
    get _reb1781c553920a() {
      return this._rbb7ed6414f6adf;
    }
    flush() {
      return ((this._rbb7ed6414f6adf = []), !0);
    }
    parse(e) {
      this._rbb7ed6414f6adf = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rbb7ed6414f6adf.push(new _ie0a85ec37dd829(e));
      return !0;
    }
  }
