// Extracted from HabboAirLauncher.deobf.js, line 100026.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_162/class_3190.as
// Obfuscated name: _i874aab4c7ff252

class {
    static {
      n(this, "class_3190");
    }
    static {
      Qjr(this, "class_3190");
    }
    _userId = 0;
    var_680 = !1;
    get userId() {
      return this._userId;
    }
    get isTyping() {
      return this.var_680;
    }
    flush() {
      return ((this._userId = 0), (this.var_680 = !1), !0);
    }
    parse(e) {
      return e
        ? ((this._userId = e.readInteger()), (this.var_680 = e.readInteger() === 1), !0)
        : !1;
    }
  }
