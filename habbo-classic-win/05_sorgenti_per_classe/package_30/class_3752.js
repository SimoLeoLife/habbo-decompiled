// Extracted from HabboAirLauncher.deobf.js, line 86731.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_30/class_3752.as
// Obfuscated name: _i4eafa1ca611a50

class {
    static {
      n(this, "class_3752");
    }
    static {
      jEr(this, "class_3752");
    }
    var_2731 = -1;
    flush() {
      return !0;
    }
    parse(e) {
      return (e.bytesAvailable && (this.var_2731 = e.readInteger()), !0);
    }
    get reason() {
      return this.var_2731;
    }
  }
