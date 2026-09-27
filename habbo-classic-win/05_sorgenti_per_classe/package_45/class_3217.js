// Extracted from HabboAirLauncher.deobf.js, line 92000.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_45/class_3217.as
// Obfuscated name: _ic3b6a4efb372d2

class {
    static {
      n(this, "class_3217");
    }
    static {
      OPr(this, "class_3217");
    }
    _offerIds = null;
    var_2561 = !1;
    get offerIds() {
      return this._offerIds;
    }
    get success() {
      return this.var_2561;
    }
    flush() {
      return ((this._offerIds = null), (this.var_2561 = !1), !0);
    }
    parse(e) {
      this._offerIds = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._offerIds.push(e.readInteger());
      return ((this.var_2561 = e.readBoolean()), !0);
    }
  }
