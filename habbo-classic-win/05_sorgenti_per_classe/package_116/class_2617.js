// Estratto da HabboAirLauncher.deobf.js, riga 104205.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_116/class_2617.as
// Nome offuscato: _ia0a561eba15bf0

class {
    static {
      n(this, "class_2617");
    }
    static {
      SKr(this, "class_2617");
    }
    var_368 = null;
    var_5130 = null;
    get resultData() {
      return this.var_368;
    }
    get otherResultData() {
      return this.var_5130;
    }
    flush() {
      return !0;
    }
    parseResultData(e) {
      let r = e.readInteger(),
        t = e.readInteger(),
        i = e.readString(),
        s = e.readInteger(),
        o = e.readString(),
        d = e.readInteger(),
        c = e.readBoolean();
      return new class_4254(r, t, i, s, o, d, c);
    }
    parse(e) {
      return (
        (this.var_368 = this.parseResultData(e)),
        (this.var_5130 = this.parseResultData(e)),
        !0
      );
    }
  }
