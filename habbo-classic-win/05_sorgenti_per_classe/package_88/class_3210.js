// Estratto da HabboAirLauncher.deobf.js, riga 99644.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_88/class_3210.as
// Nome offuscato: _ibb8059449692ee

class {
    static {
      n(this, "class_3210");
    }
    static {
      bjr(this, "class_3210");
    }
    var_1817 = -1;
    class_4105 = [];
    get _r4ade22e4997f36() {
      return this.class_4105;
    }
    get botId() {
      return this.var_1817;
    }
    flush() {
      return ((this.var_1817 = -1), (this.class_4105 = []), !0);
    }
    parse(e) {
      this.var_1817 = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.class_4105.push(new class_4105(e));
      return !0;
    }
  }
