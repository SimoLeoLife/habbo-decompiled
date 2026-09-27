// Estratto da HabboAirLauncher.deobf.js, riga 92796.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_75/class_2499.as
// Nome offuscato: _i9bc45b3d8c4cf7

class {
    static {
      n(this, "class_2499");
    }
    static {
      SSr(this, "class_2499");
    }
    _issues = null;
    var_4443 = !1;
    var_5198 = 0;
    get issues() {
      return this._issues;
    }
    get retryEnabled() {
      return this.var_4443;
    }
    get retryCount() {
      return this.var_5198;
    }
    flush() {
      return ((this._issues = null), !0);
    }
    parse(e) {
      this._issues = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readInteger(),
          o = e.readString(),
          d = new class_3267(i, 0, 0, 0, 0, 0, 0, 0, null, 0, null, s, o, null, 0, []);
        this._issues.push(d);
      }
      return ((this.var_4443 = e.readBoolean()), (this.var_5198 = e.readInteger()), !0);
    }
  }
