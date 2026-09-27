// Estratto da HabboAirLauncher.deobf.js, riga 105575.

class {
    static {
      n(this, "_ic139991eac2c36");
    }
    static {
      LZr(this, "_ic139991eac2c36");
    }
    _flatId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), !0);
    }
    get flatId() {
      return this._flatId;
    }
  }
