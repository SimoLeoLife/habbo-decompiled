// Estratto da HabboAirLauncher.deobf.js, riga 101574.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2161.as
// Nome offuscato: _ie2a32f5d3659ee

class {
    static {
      n(this, "class_2161");
    }
    static {
      jQr(this, "class_2161");
    }
    var_4935 = 0;
    var_3295 = !1;
    get guestRoomId() {
      return this.var_4935;
    }
    get owner() {
      return this.var_3295;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_4935 = e.readInteger()), (this.var_3295 = e.readBoolean()), !0);
    }
  }
