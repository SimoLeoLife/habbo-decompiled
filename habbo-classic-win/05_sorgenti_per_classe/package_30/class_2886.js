// Extracted from HabboAirLauncher.deobf.js, line 86637.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_30/class_2886.as
// Obfuscated name: _i26adbb4a58c637

class {
    static {
      n(this, "class_2886");
    }
    static {
      LEr(this, "class_2886");
    }
    var_3638 = -1;
    var_1484 = [];
    var_3331 = -1;
    flush() {
      return ((this.var_3638 = -1), (this.var_1484 = []), (this.var_3331 = -1), !0);
    }
    parse(e) {
      this.var_3638 = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_1484.push(e.readShort());
      return ((this.var_3331 = e.readInteger()), !0);
    }
    get _r84fb480914f27d() {
      return this.var_3638;
    }
    get suggestedLoginActions() {
      return this.var_1484;
    }
    get _r9c7b2f31e9715b() {
      return this.var_3331;
    }
  }
