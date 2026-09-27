// Estratto da HabboAirLauncher.deobf.js, riga 109090.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredmenu/class_3868.as
// Nome offuscato: _i5e7e870d4d3322

class {
    static {
      n(this, "class_3868");
    }
    static {
      Itt(this, "class_3868");
    }
    var_97 = null;
    flush() {
      return ((this.var_97 = null), !0);
    }
    parse(e) {
      return ((this.var_97 = new WiredRoomStatsData(e)), !0);
    }
    get roomStats() {
      return this.var_97;
    }
  }
