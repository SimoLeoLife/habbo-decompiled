// Estratto da HabboAirLauncher.deobf.js, riga 99156.

class {
    static {
      n(this, "_i33761fe5771311");
    }
    static {
      wGr(this, "_i33761fe5771311");
    }
    _re2a791729dba4b = [];
    get _r6521049cc02076() {
      return this._re2a791729dba4b;
    }
    flush() {
      return !0;
    }
    parse(e) {
      let r = e.readInteger();
      this._re2a791729dba4b = [];
      for (let t = 0; t < r; t++) this._re2a791729dba4b.push(new _i61846cb3166727(e));
      return !0;
    }
  }
