// Extracted from HabboAirLauncher.deobf.js, line 99457.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_112/class_3725.as
// Obfuscated name: _idcf5f68077b94b

class {
    static {
      n(this, "class_3725");
    }
    static {
      YGr(this, "class_3725");
    }
    _userId = 0;
    var_828 = 0;
    get userId() {
      return this._userId;
    }
    get itemType() {
      return this.var_828;
    }
    flush() {
      return ((this._userId = 0), (this.var_828 = 0), !0);
    }
    parse(e) {
      return e
        ? ((this._userId = e.readInteger()), (this.var_828 = e.readInteger()), !0)
        : !1;
    }
  }
