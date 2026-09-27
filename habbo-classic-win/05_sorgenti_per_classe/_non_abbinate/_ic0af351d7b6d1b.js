// Estratto da HabboAirLauncher.deobf.js, riga 95947.

class {
    static {
      n(this, "_ic0af351d7b6d1b");
    }
    static {
      qOr(this, "_ic0af351d7b6d1b");
    }
    _r9f3525e2ffa26c = new Map();
    flush() {
      return ((this._r9f3525e2ffa26c = new Map()), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readString(),
          s = e.readInteger();
        this._r9f3525e2ffa26c.set(i, s);
      }
      return !0;
    }
    get _r9085f1816b174c() {
      return this._r9f3525e2ffa26c;
    }
  }
