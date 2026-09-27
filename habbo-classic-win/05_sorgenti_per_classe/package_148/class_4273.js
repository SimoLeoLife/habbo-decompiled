// Estratto da HabboAirLauncher.deobf.js, riga 106611.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_148/class_4273.as
// Nome offuscato: _i82a7ce45c4693b

class {
    static {
      n(this, "class_4273");
    }
    static {
      qqr(this, "class_4273");
    }
    var_3399 = null;
    var_1655 = 0;
    var_3051 = null;
    class_4223 = null;
    flush() {
      return (
        (this.var_3399 = null),
        (this.var_3051 = null),
        (this.class_4223 = null),
        !0
      );
    }
    parse(e) {
      ((this.var_3399 = e.readString()),
        (this.var_1655 = e.readInteger()),
        (this.var_3051 = []));
      let r = e.readInteger();
      for (let i = 0; i < r; i++) this.var_3051.push(new _ia3a76c6302167a(e));
      this.class_4223 = [];
      let t = e.readInteger();
      for (let i = 0; i < t; i++) this.class_4223.push(new class_4223(e));
      return !0;
    }
    get talentTrackName() {
      return this.var_3399;
    }
    get level() {
      return this.var_1655;
    }
    get rewardPerks() {
      return this.var_3051;
    }
    get rewardProducts() {
      return this.class_4223;
    }
  }
