// Estratto da HabboAirLauncher.deobf.js, riga 110229.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_127/class_3507.as
// Nome offuscato: _i503e60e8c9edec

class {
    static {
      n(this, "class_3507");
    }
    static {
      Uat(this, "class_3507");
    }
    var_3115 = 0;
    var_3233 = null;
    var_3223 = !1;
    flush() {
      return ((this.var_3115 = 0), (this.var_3223 = !1), (this.var_3233 = null), !0);
    }
    parse(e) {
      return (
        (this.var_3115 = e.readInteger()),
        (this.var_3223 = e.readBoolean()),
        (this.var_3233 = e.readString()),
        !0
      );
    }
    get contractId() {
      return this.var_3115;
    }
    get isSuccess() {
      return this.var_3223;
    }
    get failCode() {
      return this.var_3233;
    }
  }
