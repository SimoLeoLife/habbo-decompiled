// Extracted from HabboAirLauncher.deobf.js, line 91197.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_119/class_3437.as
// Obfuscated name: _i4270205f76dde9

class {
    static {
      n(this, "class_3437");
    }
    static {
      ORr(this, "class_3437");
    }
    var_3600 = -1;
    var_2698 = null;
    var_3393 = 0;
    var_3766 = 0;
    var_3715 = -1;
    var_2799 = null;
    var_3694 = 0;
    var_3172 = 0;
    get var_1375() {
      return this.var_3600;
    }
    get _raabc210eb8110e() {
      return this.var_2698;
    }
    get _ra48214168e4114() {
      return this.var_3766;
    }
    get _r11f090fb8f4bf7() {
      return this.var_3393;
    }
    get _rbe60059ca7744a() {
      return this.var_3715;
    }
    get _r8ed0eec05d32b6() {
      return this.var_2799;
    }
    get _r1fb673a3faa136() {
      return this.var_3172;
    }
    get _r821f7b065dcaf4() {
      return this.var_3694;
    }
    flush() {
      return (
        (this.var_3600 = -1),
        (this.var_2698 = null),
        (this.var_3766 = 0),
        (this.var_3393 = 0),
        (this.var_3715 = -1),
        (this.var_2799 = null),
        (this.var_3172 = 0),
        (this.var_3694 = 0),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_3600 = e.readInteger()),
        (this.var_2698 = []),
        !this.parseItemData(e, this.var_2698) ||
        ((this.var_3766 = e.readInteger()),
        (this.var_3393 = e.readInteger()),
        (this.var_3715 = e.readInteger()),
        (this.var_2799 = []),
        !this.parseItemData(e, this.var_2799))
          ? !1
          : ((this.var_3172 = e.readInteger()),
            (this.var_3694 = e.readInteger()),
            !0)
      );
    }
    parseItemData(e, r) {
      let t = e.readInteger();
      for (; t > 0;) (r.push(new class_2566(e)), t--);
      return !0;
    }
  }
