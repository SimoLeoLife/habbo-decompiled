// Extracted from HabboAirLauncher.deobf.js, line 108924.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredmenu/class_2685.as
// Obfuscated name: _i917510c334fbe2

class {
    static {
      n(this, "class_2685");
    }
    static {
      btt(this, "class_2685");
    }
    var_3281 = !1;
    var_3810 = !1;
    flush() {
      return ((this.var_3281 = !1), (this.var_3810 = !1), !0);
    }
    parse(e) {
      return ((this.var_3281 = e.readBoolean()), (this.var_3810 = e.readBoolean()), !0);
    }
    get canModify() {
      return this.var_3281;
    }
    get _r4b0f4dcd9b6c6f() {
      return this.var_3810;
    }
  }
