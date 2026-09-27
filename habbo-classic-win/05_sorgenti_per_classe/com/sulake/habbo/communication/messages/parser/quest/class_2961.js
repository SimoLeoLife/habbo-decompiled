// Estratto da HabboAirLauncher.deobf.js, riga 98560.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/quest/class_2961.as
// Nome offuscato: _i9cc83dedce5313

class {
    static {
      n(this, "class_2961");
    }
    static {
      BUr(this, "class_2961");
    }
    var_3727 = null;
    var_3570 = !1;
    get questData() {
      return this.var_3727;
    }
    get _r4ca4d5562c4790() {
      return this.var_3570;
    }
    flush() {
      return ((this.var_3727 = null), !0);
    }
    parse(e) {
      return ((this.var_3727 = new Jc(e)), (this.var_3570 = e.readBoolean()), !0);
    }
  }
