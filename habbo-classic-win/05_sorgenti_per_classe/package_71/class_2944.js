// Estratto da HabboAirLauncher.deobf.js, riga 101392.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2944.as
// Nome offuscato: _i91671379f1f6b4

class {
    static {
      n(this, "class_2944");
    }
    static {
      BQr(this, "class_2944");
    }
    var_3634 = [];
    var_3338 = 0;
    get ids() {
      return this.var_3634;
    }
    get pickerId() {
      return this.var_3338;
    }
    flush() {
      return ((this.var_3634 = []), (this.var_3338 = 0), !0);
    }
    parse(e) {
      if (!e) return !1;
      let r = e.readInteger();
      this.var_3634 = [];
      for (let t = 0; t < r; t++) this.var_3634.push(e.readInteger());
      return ((this.var_3338 = e.readInteger()), !0);
    }
  }
