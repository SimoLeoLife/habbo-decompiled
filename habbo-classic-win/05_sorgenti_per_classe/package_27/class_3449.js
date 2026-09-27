// Estratto da HabboAirLauncher.deobf.js, riga 96894.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_27/class_3449.as
// Nome offuscato: _ibe4f73cabda48b

class {
    static {
      n(this, "class_3449");
    }
    static {
      IHr(this, "class_3449");
    }
    var_3113 = 0;
    var_4592 = "";
    var_1655 = 0;
    var_748 = null;
    get petId() {
      return this.var_3113;
    }
    get petName() {
      return this.var_4592;
    }
    get level() {
      return this.var_1655;
    }
    get figureData() {
      return this.var_748;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3113 = e.readInteger()),
        (this.var_4592 = e.readString()),
        (this.var_1655 = e.readInteger()),
        (this.var_748 = new class_3800_(e)),
        !0
      );
    }
  }
