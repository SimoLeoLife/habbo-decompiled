// Extracted from HabboAirLauncher.deobf.js, line 117792.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6d0b48dde68317

class a {
    static {
      n(this, "UnkMessageComposer_0args_6d0b48");
    }
    static {
      Bht(this, "UnkMessageComposer_0args_6d0b48");
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
