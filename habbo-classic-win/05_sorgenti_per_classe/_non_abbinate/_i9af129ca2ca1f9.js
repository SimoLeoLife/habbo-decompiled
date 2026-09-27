// Estratto da HabboAirLauncher.deobf.js, riga 90634.

class {
    static {
      n(this, "_i9af129ca2ca1f9");
    }
    static {
      QTr(this, "_i9af129ca2ca1f9");
    }
    var_3515 = 0;
    var_3144 = 0;
    _r38d7f0a71c6a58 = null;
    flush() {
      return (this._r38d7f0a71c6a58 && (this._r38d7f0a71c6a58.dispose(), (this._r38d7f0a71c6a58 = null)), !0);
    }
    parse(e) {
      ((this.var_3515 = e.readInteger()),
        (this.var_3144 = e.readInteger()),
        (this._r38d7f0a71c6a58 = new B()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new class_2503(e);
        this._r38d7f0a71c6a58.add(i.id, i);
      }
      return !0;
    }
    get _r733e07b361fc9b() {
      return this._r38d7f0a71c6a58;
    }
    get _rec250fae6d7fc2() {
      return this.var_3515;
    }
    get _rd646a5cabacc16() {
      return this.var_3144;
    }
  }
