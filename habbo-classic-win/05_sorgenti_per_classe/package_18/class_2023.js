// Estratto da HabboAirLauncher.deobf.js, riga 78748.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_18/class_2023.as
// Nome offuscato: _i758930499d611b

class {
    static {
      n(this, "class_2023");
    }
    static {
      lwr(this, "class_2023");
    }
    var_5828 = 0;
    var_5749 = 0;
    var_5751 = 0;
    _categories = [];
    get _rdeb413fa6c27ce() {
      return this.var_5828;
    }
    get _r2c8067256a7f0e() {
      return this.var_5749;
    }
    get _rd18925e9d6e18a() {
      return this.var_5751;
    }
    get categories() {
      return this._categories;
    }
    flush() {
      return ((this._categories = []), !0);
    }
    parse(e) {
      ((this.var_5828 = e.readInteger()),
        (this.var_5749 = e.readInteger()),
        (this.var_5751 = e.readInteger()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._categories.push(new class_2832(e));
      return !0;
    }
  }
