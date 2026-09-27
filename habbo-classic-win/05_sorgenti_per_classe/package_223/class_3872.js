// Estratto da HabboAirLauncher.deobf.js, riga 73527.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_223/class_3872.as
// Nome offuscato: _i7bea3691ab35c7

class {
    static {
      n(this, "class_3872");
    }
    static {
      G5r(this, "class_3872");
    }
    var_3004 = !1;
    var_3075 = 0;
    var_3099 = null;
    isOk() {
      return this.var_3004;
    }
    _rab3fd823e98fe8() {
      return this.var_3075;
    }
    _rb11133f06fb2d5() {
      return this.var_3099;
    }
    flush() {
      return ((this.var_3004 = !1), (this.var_3075 = 0), (this.var_3099 = null), !0);
    }
    parse(e) {
      return (
        (this.var_3004 = e.readBoolean()),
        (this.var_3075 = e.readInteger()),
        this.var_3004 && e.bytesAvailable && (this.var_3099 = e.readString()),
        !0
      );
    }
  }
