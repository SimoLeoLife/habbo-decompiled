// Estratto da HabboAirLauncher.deobf.js, riga 93710.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_60/class_3053.as
// Nome offuscato: _id4e2d01e256449

class {
    static {
      n(this, "class_3053");
    }
    static {
      iLr(this, "class_3053");
    }
    static const_324 = 0;
    static const_1324 = 1;
    _r03f2910fbe9c48 = 0;
    var_5853 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._r03f2910fbe9c48 = e.readInteger()),
        (this.var_5853 = e.readInteger()),
        !0
      );
    }
    get var_1827() {
      return this._r03f2910fbe9c48;
    }
    get _r16e79d3e647a77() {
      return this.var_5853;
    }
  }
