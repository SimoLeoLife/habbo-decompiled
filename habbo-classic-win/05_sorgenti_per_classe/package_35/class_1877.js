// Extracted from HabboAirLauncher.deobf.js, line 73031.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_35/class_1877.as
// Obfuscated name: _i32634471f1e228

class {
    static {
      n(this, "class_1877");
    }
    static {
      Z8r(this, "class_1877");
    }
    var_1827 = -1;
    name = "";
    var_2736 = null;
    flush() {
      return ((this.var_1827 = -1), (this.name = ""), (this.var_2736 = null), !0);
    }
    parse(e) {
      ((this.var_1827 = e.readInteger()), (this.name = e.readString()));
      let r = e.readInteger();
      this.var_2736 = [];
      for (let t = 0; t < r; t++) this.var_2736.push(e.readString());
      return !0;
    }
  }
