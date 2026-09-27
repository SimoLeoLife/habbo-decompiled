// Estratto da HabboAirLauncher.deobf.js, riga 99242.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_112/class_3228.as
// Nome offuscato: _ibafc1a679cce25

class {
    static {
      n(this, "class_3228");
    }
    static {
      BGr(this, "class_3228");
    }
    _userId = 0;
    var_2503 = 0;
    var_4892 = 0;
    get userId() {
      return this._userId;
    }
    get effectId() {
      return this.var_2503;
    }
    get _r0f4823a8cace64() {
      return this.var_4892;
    }
    flush() {
      return ((this._userId = 0), !0);
    }
    parse(e) {
      return e
        ? ((this._userId = e.readInteger()),
          (this.var_2503 = e.readInteger()),
          (this.var_4892 = e.readInteger()),
          !0)
        : !1;
    }
  }
