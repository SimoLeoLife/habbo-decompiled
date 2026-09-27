// Estratto da HabboAirLauncher.deobf.js, riga 87255.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_30/class_3031.as
// Nome offuscato: _icf2b6055512fcc

class {
    static {
      n(this, "class_3031");
    }
    static {
      MMr(this, "class_3031");
    }
    var_3695 = 0;
    var_4007 = 0;
    _isAmbassador = !1;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3695 = e.readInteger()),
        (this.var_4007 = e.readInteger()),
        (this._isAmbassador = e.readBoolean()),
        !0
      );
    }
    get clubLevel() {
      return this.var_3695;
    }
    get securityLevel() {
      return this.var_4007;
    }
    get isAmbassador() {
      return this._isAmbassador;
    }
  }
