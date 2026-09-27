// Extracted from HabboAirLauncher.deobf.js, line 76729.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ifaca0f4bf9d4ed

class {
    static {
      n(this, "UnkMessageParser_SSB_faca0f");
    }
    static {
      Xpr(this, "UnkMessageParser_SSB_faca0f");
    }
    var_4492 = "";
    _r2496aed199ba28 = "";
    var_2561 = !1;
    get collectionId() {
      return this.var_4492;
    }
    get _r01d9e6a2e3c716() {
      return this._r2496aed199ba28;
    }
    get success() {
      return this.var_2561;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_4492 = e.readString()),
        (this._r2496aed199ba28 = e.readString()),
        (this.var_2561 = e.readBoolean()),
        !0
      );
    }
  }
