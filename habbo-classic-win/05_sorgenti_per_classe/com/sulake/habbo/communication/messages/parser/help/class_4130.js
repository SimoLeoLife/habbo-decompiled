// Extracted from HabboAirLauncher.deobf.js, line 88443.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_4130.as
// Obfuscated name: _ibc96dba0f685be

class {
    static {
      n(this, "class_4130");
    }
    static {
      IBr(this, "class_4130");
    }
    var_680 = !1;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_680 = e.readBoolean()), !0);
    }
    get isTyping() {
      return this.var_680;
    }
  }
