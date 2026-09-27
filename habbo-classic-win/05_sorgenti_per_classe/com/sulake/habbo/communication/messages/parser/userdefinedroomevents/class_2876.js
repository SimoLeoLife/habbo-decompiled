// Estratto da HabboAirLauncher.deobf.js, riga 107951.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/class_2876.as
// Nome offuscato: _i05989de9a0958c

class {
    static {
      n(this, "class_2876");
    }
    static {
      Eet(this, "class_2876");
    }
    _stuffId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._stuffId = e.readInteger()), !0);
    }
    get stuffId() {
      return this._stuffId;
    }
  }
