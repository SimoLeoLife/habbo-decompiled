// Extracted from HabboAirLauncher.deobf.js, line 97833.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_144/class_2614.as
// Obfuscated name: _ice1d8997138794

class {
    static {
      n(this, "class_2614");
    }
    static {
      HVr(this, "class_2614");
    }
    var_3156 = -1;
    var_2540 = null;
    get _re812cd9299d86c() {
      return this.var_3156;
    }
    get answerCounts() {
      return this.var_2540;
    }
    flush() {
      return ((this.var_3156 = -1), (this.var_2540 = null), !1);
    }
    parse(e) {
      ((this.var_3156 = e.readInteger()), (this.var_2540 = new B()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readString(),
          s = e.readInteger();
        this.var_2540.add(i, s);
      }
      return !0;
    }
  }
