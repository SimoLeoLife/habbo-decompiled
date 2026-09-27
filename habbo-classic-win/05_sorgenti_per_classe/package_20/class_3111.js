// Extracted from HabboAirLauncher.deobf.js, line 78115.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_20/class_3111.as
// Obfuscated name: _i628d92fbe42b83

class a {
    static {
      n(this, "class_3111");
    }
    constructor(e, r = "", t = 0) {
      ((this.var_4704 = e), (this.var_1022 = r), (this.var_1429 = t));
    }
    static {
      _vr(this, "class_3111");
    }
    static name_2 = 0;
    static const_135 = 1;
    static parse(e) {
      switch (e.readInteger()) {
        case a.name_2:
          return new a(a.name_2, e.readString(), 0);
        case a.const_135:
          return new a(a.const_135, "", e.readInteger());
      }
      return new a(a.name_2, "", 0);
    }
    get messageType() {
      return this.var_4704;
    }
    get messageText() {
      return this.var_1022;
    }
    get habbiconId() {
      return this.var_1429;
    }
  }
