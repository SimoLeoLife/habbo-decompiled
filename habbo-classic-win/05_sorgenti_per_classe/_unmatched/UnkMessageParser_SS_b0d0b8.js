// Extracted from HabboAirLauncher.deobf.js, line 86944.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib0d0b85ba33cb1

class {
    static {
      n(this, "UnkMessageParser_SS_b0d0b8");
    }
    static {
      tMr(this, "UnkMessageParser_SS_b0d0b8");
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
