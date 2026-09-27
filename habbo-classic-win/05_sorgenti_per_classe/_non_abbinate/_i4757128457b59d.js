// Estratto da HabboAirLauncher.deobf.js, riga 104086.

class {
    static {
      n(this, "_i4757128457b59d");
    }
    static {
      CKr(this, "_i4757128457b59d");
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
