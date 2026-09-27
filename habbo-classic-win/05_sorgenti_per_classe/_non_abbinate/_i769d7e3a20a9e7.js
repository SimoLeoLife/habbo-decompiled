// Estratto da HabboAirLauncher.deobf.js, riga 99929.

class {
    static {
      n(this, "_i769d7e3a20a9e7");
    }
    static {
      Ljr(this, "_i769d7e3a20a9e7");
    }
    _rfd03bc8894bb8c = [];
    get _rafac613a60659d() {
      return this._rfd03bc8894bb8c;
    }
    flush() {
      return !1;
    }
    parse(e) {
      this._rfd03bc8894bb8c = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rfd03bc8894bb8c.push(e.readString());
      return !1;
    }
  }
