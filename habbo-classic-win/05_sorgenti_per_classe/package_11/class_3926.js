// Estratto da HabboAirLauncher.deobf.js, riga 90257.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_11/class_3926.as
// Nome offuscato: _i7882972c1bad84

class {
    static {
      n(this, "class_3926");
    }
    static {
      pTr(this, "class_3926");
    }
    var_3468;
    var_2757;
    constructor(e) {
      ((this.var_3468 = e.readInteger()), (this.var_2757 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2757.push(e.readInteger());
    }
    dispose() {
      ((this.var_3468 = -1), (this.var_2757 = []));
    }
    get _r191591f86422f9() {
      return this.var_3468;
    }
    get breeds() {
      return this.var_2757;
    }
  }
