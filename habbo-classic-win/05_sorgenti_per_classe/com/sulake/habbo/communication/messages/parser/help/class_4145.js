// Extracted from HabboAirLauncher.deobf.js, line 88195.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_4145.as
// Obfuscated name: _ie35e50d172325c

class {
    static {
      n(this, "class_4145");
    }
    static {
      qWr(this, "class_4145");
    }
    var_4795 = !1;
    var_5261 = 0;
    var_5418 = "";
    var_4635 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_4795 = e.readBoolean()),
        (this.var_5261 = e.readInteger()),
        (this.var_5418 = e.readString()),
        (this.var_4635 = e.readInteger()),
        !0
      );
    }
    get _r8167aa5d949122() {
      return this.var_4795;
    }
    get _r6087fb63b9a270() {
      return this.var_5261;
    }
    get _r2f13cfea9b15a1() {
      return this.var_5418;
    }
    get _rd04c2e17431248() {
      return this.var_4635;
    }
  }
