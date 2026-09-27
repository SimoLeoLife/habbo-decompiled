// Estratto da HabboAirLauncher.deobf.js, riga 100939.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3084.as
// Nome offuscato: _i64e9c7f7f8ffea

class {
    static {
      n(this, "class_3084");
    }
    static {
      jzr(this, "class_3084");
    }
    var_3742 = [];
    var_3338 = 0;
    get _rd97bda360743c3() {
      return this.var_3742;
    }
    get pickerId() {
      return this.var_3338;
    }
    flush() {
      return ((this.var_3742 = []), (this.var_3338 = 0), !0);
    }
    parse(e) {
      if (!e) return !1;
      let r = e.readInteger();
      this.var_3742 = [];
      for (let t = 0; t < r; t++) this.var_3742.push(e.readInteger());
      return ((this.var_3338 = e.readInteger()), !0);
    }
  }
