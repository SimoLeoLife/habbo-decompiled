// Estratto da HabboAirLauncher.deobf.js, riga 77191.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_200/class_3182.as
// Nome offuscato: _i2f9ba2066cc4af

class {
    static {
      n(this, "class_3182");
    }
    static {
      Nmr(this, "class_3182");
    }
    static const_877 = 6;
    static const_390 = 2;
    static const_615 = 1;
    static const_1146 = 3;
    static const_303 = 4;
    static const_1255 = 5;
    static const_1076 = 0;
    var_3709 = 0;
    _goalCode = "";
    var_1241 = 0;
    var_2987 = null;
    var_2746 = null;
    flush() {
      return ((this.var_2987 = null), (this.var_2746 = null), !0);
    }
    parse(e) {
      ((this.var_3709 = e.readInteger()),
        (this._goalCode = e.readString()),
        (this.var_1241 = e.readInteger()),
        (this.var_2987 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2987.push(e.readString());
      ((this.var_2746 = new Map()), (r = e.readInteger()));
      for (let t = 0; t < r; t++) this.var_2746.set(e.readString(), "");
      return !0;
    }
    get _r60d0785b4a5490() {
      return this.var_3709;
    }
    get goalCode() {
      return this._goalCode;
    }
    get result() {
      return this.var_1241;
    }
    get requiredFurnis() {
      return this.var_2987;
    }
    isMissing(e) {
      return this.var_2746?.has(e) ?? !1;
    }
  }
