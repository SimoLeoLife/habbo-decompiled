// Extracted from HabboAirLauncher.deobf.js, line 91377.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie2a6e0156537fc

class {
    static {
      n(this, "UnkMessageParser_IIII_e2a6e0");
    }
    static {
      $Rr(this, "UnkMessageParser_IIII_e2a6e0");
    }
    _r38c2995e283ff6 = !1;
    _rbf72d8a4aaff8d = -1;
    _r9bd5ec077aba2c = !1;
    _ra87a412e5902c1 = -1;
    flush() {
      return (
        (this._ra87a412e5902c1 = -1),
        (this._r9bd5ec077aba2c = !1),
        (this._rbf72d8a4aaff8d = -1),
        (this._r38c2995e283ff6 = !1),
        !0
      );
    }
    parse(e) {
      return (
        (this._ra87a412e5902c1 = e.readInteger()),
        (this._r9bd5ec077aba2c = e.readInteger() === 1),
        (this._rbf72d8a4aaff8d = e.readInteger()),
        (this._r38c2995e283ff6 = e.readInteger() === 1),
        !0
      );
    }
    get userID() {
      return this._ra87a412e5902c1;
    }
    get _r13aa4ef3e884a4() {
      return this._r9bd5ec077aba2c;
    }
    get _r2189f3bd1771f1() {
      return this._rbf72d8a4aaff8d;
    }
    get _r2311c23a1ce5db() {
      return this._r38c2995e283ff6;
    }
  }
