// Estratto da HabboAirLauncher.deobf.js, riga 107987.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/incoming/userdefinedroomevents/SelectorDefinition.as
// Nome offuscato: _if0b682648fd240

class extends class_2396 {
    static {
      n(this, "SelectorDefinition");
    }
    static {
      Aet(this, "SelectorDefinition");
    }
    constructor(e) {
      super(e);
    }
    readDefinitionSpecifics(e) {
      ((this.var_3391 = e.readBoolean()), (this.var_3725 = e.readBoolean()));
    }
    set isFilter(e) {
      this.var_3391 = e;
    }
    set isInvert(e) {
      this.var_3725 = e;
    }
    get isFilter() {
      return this.var_3391;
    }
    get isInvert() {
      return this.var_3725;
    }
  }
