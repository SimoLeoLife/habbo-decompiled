// Estratto da HabboAirLauncher.deobf.js, riga 109887.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredtrading/chests/class_2417.as
// Nome offuscato: _ife448181dc9f28

class {
    static {
      n(this, "class_2417");
    }
    static {
      Cat(this, "class_2417");
    }
    _chestId = 0;
    flush() {
      return ((this._chestId = 0), !0);
    }
    parse(e) {
      return ((this._chestId = e.readInteger()), !0);
    }
    get chestId() {
      return this._chestId;
    }
  }
