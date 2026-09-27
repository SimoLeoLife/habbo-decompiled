// Extracted from HabboAirLauncher.deobf.js, line 76843.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/collectibles/class_2214.as
// Obfuscated name: _i952410649cfb13

class {
    static {
      n(this, "class_2214");
    }
    static {
      amr(this, "class_2214");
    }
    static var_5811 = 1;
    static name_8 = 0;
    var_1241 = 0;
    get result() {
      return this.var_1241;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_1241 = e.readShort()), !0);
    }
  }
