// Estratto da HabboAirLauncher.deobf.js, riga 108714.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredmenu/class_4230.as
// Nome offuscato: _i1025b4bfc84836

class {
    static {
      n(this, "class_4230");
    }
    static {
      $rt(this, "class_4230");
    }
    _hash = 0;
    flush() {
      return ((this._hash = 0), !0);
    }
    parse(e) {
      return ((this._hash = e.readInteger()), !0);
    }
    get allVariablesHash() {
      return this._hash;
    }
  }
