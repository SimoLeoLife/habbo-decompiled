// Estratto da HabboAirLauncher.deobf.js, riga 103320.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_3359.as
// Nome offuscato: _iae5a5570f7eb4e

class {
    static {
      n(this, "class_3359");
    }
    static {
      gYr(this, "class_3359");
    }
    var_344 = 0;
    _nameValidationStatus = 0;
    _nameValidationInfo = null;
    get objectId() {
      return this.var_344;
    }
    get _r008c105caa5e72() {
      return this._nameValidationStatus;
    }
    get _r549e697cdd257f() {
      return this._nameValidationInfo;
    }
    flush() {
      return ((this.var_344 = 0), (this._nameValidationStatus = 0), (this._nameValidationInfo = null), !0);
    }
    parse(e) {
      return e
        ? ((this.var_344 = e.readInteger()),
          (this._nameValidationStatus = e.readInteger()),
          (this._nameValidationInfo = e.readString()),
          !0)
        : !1;
    }
  }
