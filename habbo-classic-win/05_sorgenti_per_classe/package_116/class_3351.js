// Extracted from HabboAirLauncher.deobf.js, line 104259.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_116/class_3351.as
// Obfuscated name: _ica8002ecdff7f0

class {
    static {
      n(this, "class_3351");
    }
    static {
      OKr(this, "class_3351");
    }
    var_3113 = -1;
    var_2684 = null;
    var_2627 = null;
    get petId() {
      return this.var_3113;
    }
    get _r779246794134a5() {
      return this.var_2684;
    }
    get _r67346f7e899abb() {
      return this.var_2627;
    }
    flush() {
      return (
        (this.var_3113 = -1),
        (this.var_2684 = null),
        (this.var_2627 = null),
        !0
      );
    }
    parse(e) {
      if (!e) return !1;
      this.var_3113 = e.readInteger();
      let r = e.readInteger();
      for (this.var_2684 = []; r-- > 0;) this.var_2684.push(e.readInteger());
      let t = e.readInteger();
      for (this.var_2627 = []; t-- > 0;) this.var_2627.push(e.readInteger());
      return !0;
    }
  }
