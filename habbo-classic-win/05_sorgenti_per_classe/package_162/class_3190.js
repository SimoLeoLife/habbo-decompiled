// Estratto da HabboAirLauncher.deobf.js, riga 100026.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_162/class_3190.as
// Nome offuscato: _i874aab4c7ff252

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
