// Extracted from HabboAirLauncher.deobf.js, line 101034.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2697.as
// Obfuscated name: _ibd2627313e8bdb

class {
    static {
      n(this, "class_2697");
    }
    static {
      qzr(this, "class_2697");
    }
    var_183 = null;
    get data() {
      let e = this.var_183;
      return (e && e.setReadOnly(), e);
    }
    flush() {
      return ((this.var_183 = null), !0);
    }
    parse(e) {
      return e ? ((this.var_183 = class_4263.parseItemData(e)), !0) : !1;
    }
  }
