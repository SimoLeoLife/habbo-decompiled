// Estratto da HabboAirLauncher.deobf.js, riga 91377.

class {
    static {
      n(this, "_ie2a6e0156537fc");
    }
    static {
      $Rr(this, "_ie2a6e0156537fc");
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
