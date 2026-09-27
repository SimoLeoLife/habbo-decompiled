// Estratto da HabboAirLauncher.deobf.js, riga 117792.

class a {
    static {
      n(this, "_i6d0b48dde68317");
    }
    static {
      Bht(this, "_i6d0b48dde68317");
    }
    static _r1e900203774da1 = 5;
    var_516 = [];
    _rdc4e92828720ba(e) {
      this.var_516.length >= a._r1e900203774da1 || this.var_516.push(e);
    }
    getMessageArray() {
      let e = [];
      for (let r = 1; r <= a._r1e900203774da1; r++)
        (e.push(r), e.push(r <= this.var_516.length ? this.var_516[r - 1] : ""));
      return e;
    }
    dispose() {}
  }
