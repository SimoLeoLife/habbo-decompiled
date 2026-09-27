// Extracted from HabboAirLauncher.deobf.js, line 87950.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_3918.as
// Obfuscated name: _i7de68aff63ab6b

class {
    static {
      n(this, "class_3918");
    }
    static {
      LWr(this, "class_3918");
    }
    var_3156 = -1;
    var_3873 = null;
    flush() {
      return ((this.var_3156 = -1), (this.var_3873 = null), !0);
    }
    parse(e) {
      return (
        (this.var_3156 = e.readInteger()),
        (this.var_3873 = e.readString()),
        !0
      );
    }
    get _re812cd9299d86c() {
      return this.var_3156;
    }
    get _r7ec2737e897909() {
      return this.var_3873;
    }
  }
