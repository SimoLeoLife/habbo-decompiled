// Extracted from HabboAirLauncher.deobf.js, line 106973.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_138/class_3427.as
// Obfuscated name: _i49462a3184d972

class {
    static {
      n(this, "class_3427");
    }
    static {
      wJr(this, "class_3427");
    }
    var_3103 = null;
    var_3134 = 0;
    var_3605 = 0;
    flush() {
      return ((this.var_3103 = null), (this.var_3134 = 0), (this.var_3605 = 0), !0);
    }
    parse(e) {
      return (
        (this.var_3103 = e.readString()),
        (this.var_3134 = e.readInteger()),
        (this.var_3605 = e.readInteger()),
        !0
      );
    }
    get _r0b81c67a285696() {
      return this.var_3103;
    }
    get _r5191ee4dc6b03d() {
      return this.var_3134;
    }
    get _r8860ed04502dec() {
      return this.var_3605;
    }
  }
