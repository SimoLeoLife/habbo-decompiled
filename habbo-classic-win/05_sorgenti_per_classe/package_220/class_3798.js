// Estratto da HabboAirLauncher.deobf.js, riga 77901.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_220/class_3798.as
// Nome offuscato: _id68ee28e2bf827

class {
    static {
      n(this, "class_3798");
    }
    static {
      zgr(this, "class_3798");
    }
    _errorCode = 0;
    var_3514 = 0;
    var_3436 = null;
    get errorCode() {
      return this._errorCode;
    }
    get messageId() {
      return this.var_3514;
    }
    get timestamp() {
      return this.var_3436;
    }
    flush() {
      return ((this._errorCode = 0), (this.var_3514 = 0), (this.var_3436 = null), !0);
    }
    parse(e) {
      return (
        (this.var_3514 = e.readInteger()),
        (this._errorCode = e.readInteger()),
        (this.var_3436 = e.readString()),
        !0
      );
    }
  }
