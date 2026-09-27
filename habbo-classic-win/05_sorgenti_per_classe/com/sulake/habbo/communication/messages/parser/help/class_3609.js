// Extracted from HabboAirLauncher.deobf.js, line 88703.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_3609.as
// Obfuscated name: _i32c06feaaadea0

class {
    static {
      n(this, "class_3609");
    }
    static {
      QBr(this, "class_3609");
    }
    var_5278 = 0;
    var_1022 = "";
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_5278 = e.readInteger()),
        (this.var_1022 = e.readString()),
        !0
      );
    }
    get closeReason() {
      return this.var_5278;
    }
    get messageText() {
      return this.var_1022;
    }
  }
