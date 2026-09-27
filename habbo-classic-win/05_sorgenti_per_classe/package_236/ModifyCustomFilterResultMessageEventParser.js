// Estratto da HabboAirLauncher.deobf.js, riga 77731.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_236/ModifyCustomFilterResultMessageEventParser.as
// Nome offuscato: _ieb878b4394578f

class {
    static {
      n(this, "ModifyCustomFilterResultMessageEventParser");
    }
    static {
      Tgr(this, "ModifyCustomFilterResultMessageEventParser");
    }
    var_1241 = -1;
    var_5352 = "";
    get result() {
      return this.var_1241;
    }
    get word() {
      return this.var_5352;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_1241 = e.readInteger()),
        (this.var_5352 = e.readString()),
        !0
      );
    }
  }
