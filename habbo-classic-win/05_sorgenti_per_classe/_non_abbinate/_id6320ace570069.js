// Estratto da HabboAirLauncher.deobf.js, riga 76186.

class {
    static {
      n(this, "_id6320ace570069");
    }
    static {
      hpr(this, "_id6320ace570069");
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
