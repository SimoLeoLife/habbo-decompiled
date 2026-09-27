// Estratto da HabboAirLauncher.deobf.js, riga 105496.

class {
    static {
      n(this, "_ia3ce54a0278703");
    }
    static {
      BZr(this, "_ia3ce54a0278703");
    }
    var_2440 = 0;
    _r1d49a0d74a9d63 = [];
    parse(e) {
      this.var_2440 = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r1d49a0d74a9d63.push(new _iec27dbe250853b(e));
      return !0;
    }
    flush() {
      return ((this._r1d49a0d74a9d63 = []), !0);
    }
    get roomId() {
      return this.var_2440;
    }
    get controllers() {
      return this._r1d49a0d74a9d63;
    }
  }
