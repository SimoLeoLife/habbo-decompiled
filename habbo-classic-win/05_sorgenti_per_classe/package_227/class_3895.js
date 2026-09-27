// Extracted from HabboAirLauncher.deobf.js, line 91601.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_227/class_3895.as
// Obfuscated name: _if4686edcd82da3

class {
    static {
      n(this, "class_3895");
    }
    static {
      uPr(this, "class_3895");
    }
    var_5694 = !1;
    get acknowledged() {
      return this.var_5694;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_5694 = e.readBoolean()), !0);
    }
  }
