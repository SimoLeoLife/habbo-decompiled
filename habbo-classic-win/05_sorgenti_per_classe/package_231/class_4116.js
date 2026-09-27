// Estratto da HabboAirLauncher.deobf.js, riga 89809.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_231/class_4116.as
// Nome offuscato: _if86b05675e83d1

class {
    static {
      n(this, "class_4116");
    }
    static {
      Okr(this, "class_4116");
    }
    var_3865 = [];
    _boundFurnitureNames = [];
    flush() {
      return ((this.var_3865 = []), (this._boundFurnitureNames = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_3865.push(e.readInteger());
      r = e.readInteger();
      for (let t = 0; t < r; t++) this._boundFurnitureNames.push(e.readString());
      return !0;
    }
    get _r465eb48d84170b() {
      return this.var_3865;
    }
    get _r4e1654b72fcaa5() {
      return this._boundFurnitureNames;
    }
  }
