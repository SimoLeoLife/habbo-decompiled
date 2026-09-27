// Estratto da HabboAirLauncher.deobf.js, riga 73730.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_223/class_4095.as
// Nome offuscato: _i52793dbf0a943c

class {
    static {
      n(this, "class_4095");
    }
    static {
      c2r(this, "class_4095");
    }
    var_3004 = !0;
    var_3846 = !1;
    isOk() {
      return this.var_3004;
    }
    _rf80485a98c5ae3() {
      return this.var_3846;
    }
    flush() {
      return ((this.var_3004 = !0), (this.var_3846 = !1), !0);
    }
    parse(e) {
      return (
        e.bytesAvailable &&
          ((this.var_3004 = e.readBoolean()), (this.var_3846 = e.readBoolean())),
        !0
      );
    }
  }
