// Estratto da HabboAirLauncher.deobf.js, riga 112631.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_37/class_4249.as
// Nome offuscato: _i683309ea2a1ac2

class {
    static {
      n(this, "class_4249");
    }
    static {
      Bot(this, "class_4249");
    }
    result = -1;
    ignoredUserId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.result = e.readInteger()), (this.ignoredUserId = e.readInteger()), !0);
    }
  }
