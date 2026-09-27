// Estratto da HabboAirLauncher.deobf.js, riga 108125.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/class_3360.as
// Nome offuscato: _i31053b8e676daf

class {
    static {
      n(this, "class_3360");
    }
    static {
      jet(this, "class_3360");
    }
    var_2555 = null;
    var_2058 = !1;
    flush() {
      return ((this.var_2058 = !1), (this.var_2555 = null), !0);
    }
    parse(e) {
      if (((this.var_2058 = e.readBoolean()), (this.var_2555 = []), e.bytesAvailable > 0)) {
        let r = e.readInteger();
        for (let t = 0; t < r; t += 1) this.var_2555.push(e.readString());
      }
      return !0;
    }
    get _ra685de879d48b0() {
      return this.var_2058;
    }
    get _rd2733709fd7629() {
      return this.var_2555;
    }
  }
