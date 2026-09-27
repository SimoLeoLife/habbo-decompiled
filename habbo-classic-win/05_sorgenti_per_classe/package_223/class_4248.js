// Extracted from HabboAirLauncher.deobf.js, line 73681.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_223/class_4248.as
// Obfuscated name: _id6f78e1aeb0db7

class {
    static {
      n(this, "class_4248");
    }
    static {
      n2r(this, "class_4248");
    }
    var_3820 = 0;
    var_3531 = 0;
    var_3201 = 0;
    _rdf07c3fa2c1f5f() {
      return this.var_3820;
    }
    _r02613627b3094a() {
      return this.var_3531;
    }
    _rf11106f21cc348() {
      return this.var_3201;
    }
    flush() {
      return ((this.var_3820 = 0), (this.var_3531 = 0), (this.var_3201 = 0), !0);
    }
    parse(e) {
      return (
        (this.var_3820 = e.readInteger()),
        (this.var_3531 = e.readInteger()),
        e.bytesAvailable > 0 && (this.var_3201 = e.readInteger()),
        !0
      );
    }
  }
