// Estratto da HabboAirLauncher.deobf.js, riga 90014.

class {
    static {
      n(this, "_ib43ac9f9ffe5f3");
    }
    static {
      Ykr(this, "_ib43ac9f9ffe5f3");
    }
    var_3515 = 0;
    var_3144 = 0;
    _r46b61b17937851 = null;
    get _rec250fae6d7fc2() {
      return this.var_3515;
    }
    get _rd646a5cabacc16() {
      return this.var_3144;
    }
    get _ree09e0bff7c4d0() {
      return this._r46b61b17937851;
    }
    parse(e) {
      ((this.var_3515 = e.readInteger()),
        (this.var_3144 = e.readInteger()),
        (this._r46b61b17937851 = new B()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new QA(e);
        this._r46b61b17937851.add(i.itemId, i);
      }
      return !0;
    }
    flush() {
      return (this._r46b61b17937851 && (this._r46b61b17937851.dispose(), (this._r46b61b17937851 = null)), !0);
    }
  }
