// Estratto da HabboAirLauncher.deobf.js, riga 95465.

class {
    static {
      n(this, "_icefa1bd77eaad0");
    }
    static {
      sOr(this, "_icefa1bd77eaad0");
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
