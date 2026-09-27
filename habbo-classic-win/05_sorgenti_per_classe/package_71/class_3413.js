// Estratto da HabboAirLauncher.deobf.js, riga 100783.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3413.as
// Nome offuscato: _i62eb3563420aa1

class {
    static {
      n(this, "class_3413");
    }
    static {
      kzr(this, "class_3413");
    }
    var_183 = null;
    get data() {
      let e = this.var_183;
      return (e && e.setReadOnly(), e);
    }
    flush() {
      return ((this.var_183 = null), !0);
    }
    parse(e) {
      return e
        ? ((this.var_183 = class_4263.parseItemData(e)),
          (this.var_183.ownerName = e.readString()),
          !0)
        : !1;
    }
  }
