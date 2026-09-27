// Extracted from HabboAirLauncher.deobf.js, line 78022.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_238/class_4124.as
// Obfuscated name: _i9b4c70d8439729

class {
    static {
      n(this, "class_4124");
    }
    static {
      avr(this, "class_4124");
    }
    _stuffId = -1;
    var_3084 = !1;
    get stuffId() {
      return this._stuffId;
    }
    get isOwner() {
      return this.var_3084;
    }
    flush() {
      return ((this._stuffId = -1), (this.var_3084 = !1), !0);
    }
    parse(e) {
      return ((this._stuffId = e.readInteger()), (this.var_3084 = e.readBoolean()), !0);
    }
  }
