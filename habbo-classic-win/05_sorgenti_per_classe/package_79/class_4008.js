// Extracted from HabboAirLauncher.deobf.js, line 83524.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_79/class_4008.as
// Obfuscated name: _i5da3de712ba4f0

class {
    static {
      n(this, "class_4008");
    }
    static {
      Nyr(this, "class_4008");
    }
    var_3591 = -1;
    flush() {
      return ((this.var_3591 = -1), !0);
    }
    parse(e) {
      return ((this.var_3591 = e.readInteger()), !0);
    }
    get timeToNextState() {
      return this.var_3591;
    }
  }
