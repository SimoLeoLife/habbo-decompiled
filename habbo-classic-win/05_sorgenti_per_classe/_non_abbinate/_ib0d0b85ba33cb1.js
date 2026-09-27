// Estratto da HabboAirLauncher.deobf.js, riga 86944.

class {
    static {
      n(this, "_ib0d0b85ba33cb1");
    }
    static {
      tMr(this, "_ib0d0b85ba33cb1");
    }
    _r599ea9b825dcbd = "";
    _r803f607485e834 = "";
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._r599ea9b825dcbd = e.readString()),
        (this._r803f607485e834 = e.readString()),
        !0
      );
    }
    get encryptedPrime() {
      return this._r599ea9b825dcbd;
    }
    get encryptedGenerator() {
      return this._r803f607485e834;
    }
  }
