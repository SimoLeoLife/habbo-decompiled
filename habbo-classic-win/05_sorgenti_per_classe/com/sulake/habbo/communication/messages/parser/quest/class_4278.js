// Extracted from HabboAirLauncher.deobf.js, line 98337.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/quest/class_4278.as
// Obfuscated name: _ied26e8980c63fa

class {
    static {
      n(this, "class_4278");
    }
    static {
      gUr(this, "class_4278");
    }
    var_3448 = "";
    get imageUri() {
      return this.var_3448;
    }
    flush() {
      return ((this.var_3448 = ""), !0);
    }
    parse(e) {
      return ((this.var_3448 = e.readString()), !0);
    }
  }
