// Estratto da HabboAirLauncher.deobf.js, riga 104122.

class {
    static {
      n(this, "_id6edaadc893d80");
    }
    static {
      BKr(this, "_id6edaadc893d80");
    }
    _flatId = 0;
    get flatId() {
      return this._flatId;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), !0);
    }
  }
