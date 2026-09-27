// Estratto da HabboAirLauncher.deobf.js, riga 108964.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredmenu/class_4132.as
// Nome offuscato: _i754a8f5371e1f8

class {
    static {
      n(this, "class_4132");
    }
    static {
      ptt(this, "class_4132");
    }
    var_930 = 0;
    var_949 = 0;
    var_872 = "";
    flush() {
      return ((this.var_930 = 0), (this.var_949 = 0), (this.var_872 = ""), !0);
    }
    parse(e) {
      return (
        (this.var_930 = e.readInteger()),
        (this.var_949 = e.readInteger()),
        (this.var_872 = e.readString()),
        !0
      );
    }
    get _r3669af806a9474() {
      return this.var_930;
    }
    get _r0ba255332a5c40() {
      return this.var_949;
    }
    get timezone() {
      return this.var_872;
    }
  }
