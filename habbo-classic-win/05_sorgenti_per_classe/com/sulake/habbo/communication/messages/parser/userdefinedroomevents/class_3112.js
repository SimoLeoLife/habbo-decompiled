// Estratto da HabboAirLauncher.deobf.js, riga 108385.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/class_3112.as
// Nome offuscato: _ic18b331ca99e76

class {
    static {
      n(this, "class_3112");
    }
    static {
      grt(this, "class_3112");
    }
    var_2731 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_2731 = e.readInteger()), !0);
    }
    get reason() {
      return this.var_2731;
    }
  }
