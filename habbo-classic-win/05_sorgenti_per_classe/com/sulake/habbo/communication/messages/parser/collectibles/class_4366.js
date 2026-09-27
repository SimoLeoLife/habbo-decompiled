// Estratto da HabboAirLauncher.deobf.js, riga 76416.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/collectibles/class_4366.as
// Nome offuscato: _i38f00b73f2b2d4

class extends class_2508 {
    static {
      n(this, "class_4366");
    }
    static {
      Ppr(this, "class_4366");
    }
    _amount = 0;
    get amount() {
      return this._amount;
    }
    constructor(e) {
      super(e);
    }
    readAdditionalParams(e) {
      this._amount = e.readInteger();
    }
  }
