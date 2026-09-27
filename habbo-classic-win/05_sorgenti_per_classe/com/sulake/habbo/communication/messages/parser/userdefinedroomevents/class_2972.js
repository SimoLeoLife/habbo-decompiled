// Estratto da HabboAirLauncher.deobf.js, riga 108041.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/class_2972.as
// Nome offuscato: _i8b54b38a9b2101

class {
    static {
      n(this, "class_2972");
    }
    static {
      Let(this, "class_2972");
    }
    var_3568 = 0;
    var_3858 = 0;
    flush() {
      return ((this.var_3858 = 0), (this.var_3568 = 0), !0);
    }
    parse(e) {
      return (
        (this.var_3858 = e.readInteger()),
        (this.var_3568 = e.readInteger()),
        !0
      );
    }
    get _r87bbff19ac9186() {
      return this.var_3858;
    }
    get _r84e900519b6775() {
      return this.var_3568;
    }
  }
