// Extracted from HabboAirLauncher.deobf.js, line 96341.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_208/class_4190.as
// Obfuscated name: _ia2420f11bee7f9

class {
    static {
      n(this, "class_4190");
    }
    static {
      MFr(this, "class_4190");
    }
    var_2361 = "";
    var_3497 = "";
    var_3631 = "";
    flush() {
      return ((this.var_3497 = ""), (this.var_3631 = ""), !0);
    }
    parse(e) {
      return (
        (this.var_2361 = e.readString()),
        (this.var_3497 = e.readString()),
        (this.var_3631 = e.readString()),
        !0
      );
    }
    get _re16664a649474c() {
      return this.var_2361;
    }
    get _r4eee39ab4f8d6d() {
      return this.var_3497;
    }
    get _rdb41bed1130bfc() {
      return this.var_3631;
    }
  }
