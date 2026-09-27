// Extracted from HabboAirLauncher.deobf.js, line 76680.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/collectibles/class_3880.as
// Obfuscated name: _i22fe7172ee937f

class {
    static {
      n(this, "class_3880");
    }
    static {
      Gpr(this, "class_3880");
    }
    var_971 = 0;
    var_4643 = 0;
    var_1655 = 0;
    get score() {
      return this.var_971;
    }
    get highestScore() {
      return this.var_4643;
    }
    get level() {
      return this.var_1655;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_971 = e.readInteger()),
        (this.var_4643 = e.readInteger()),
        (this.var_1655 = e.readInteger()),
        !0
      );
    }
  }
