// Extracted from HabboAirLauncher.deobf.js, line 96220.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_208/class_3388.as
// Obfuscated name: _i0918ad00efe92a

class {
    static {
      n(this, "class_3388");
    }
    static {
      pFr(this, "class_3388");
    }
    static name_8 = 0;
    static const_1404 = 1;
    static const_382 = 2;
    static const_329 = 3;
    static const_961 = 4;
    static const_575 = 5;
    _stuffId = 0;
    var_1241 = 0;
    flush() {
      return ((this._stuffId = 0), (this.var_1241 = 0), !0);
    }
    parse(e) {
      return ((this._stuffId = e.readInteger()), (this.var_1241 = e.readShort()), !0);
    }
    get stuffId() {
      return this._stuffId;
    }
    get result() {
      return this.var_1241;
    }
  }
