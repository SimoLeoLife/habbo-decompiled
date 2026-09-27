// Estratto da HabboAirLauncher.deobf.js, riga 73078.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_35/class_2916.as
// Nome offuscato: _i918e7738ad4c5a

class {
    static {
      n(this, "class_2916");
    }
    static {
      r5r(this, "class_2916");
    }
    var_1827 = -1;
    name = "";
    var_2736 = null;
    flush() {
      return ((this.var_1827 = -1), (this.name = ""), (this.var_2736 = null), !0);
    }
    parse(e) {
      ((this.var_1827 = e.readInteger()), (this.name = e.readString()));
      let r = e.readInteger();
      this.var_2736 = [];
      for (let t = 0; t < r; t++) this.var_2736.push(e.readString());
      return !0;
    }
  }
