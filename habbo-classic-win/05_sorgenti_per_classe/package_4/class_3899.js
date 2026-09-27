// Estratto da HabboAirLauncher.deobf.js, riga 75325.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_4/class_3899.as
// Nome offuscato: _i202cca42b8fbdc

class {
    static {
      n(this, "class_3899");
    }
    static {
      V4r(this, "class_3899");
    }
    var_4051 = !1;
    rooms = [];
    flush() {
      return !1;
    }
    parse(e) {
      ((this.rooms = []), (this.var_4051 = e.readBoolean()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readString(),
          o = e.readBoolean();
        this.rooms.push(new class_2912(i, s, o));
      }
      return !0;
    }
  }
