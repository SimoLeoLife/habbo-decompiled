// Extracted from HabboAirLauncher.deobf.js, line 78184.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_18/class_2256.as
// Obfuscated name: _ic7ebbe9164bd1b

class {
    static {
      n(this, "class_2256");
    }
    static {
      mvr(this, "class_2256");
    }
    var_4728 = 0;
    class_3143 = [];
    get _r1d27619fc3477e() {
      return this.var_4728;
    }
    get _r259f467d349e9f() {
      return this.class_3143;
    }
    flush() {
      return !0;
    }
    parse(e) {
      ((this.var_4728 = e.readInteger()), (this.class_3143 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.class_3143.push(new class_3143(e));
      return !0;
    }
  }
