// Estratto da HabboAirLauncher.deobf.js, riga 90582.

class {
    static {
      n(this, "_icac81d35e2a7d9");
    }
    static {
      UTr(this, "_icac81d35e2a7d9");
    }
    static _r06de8e1f8203ee = 2;
    static _r7bf38ef8bfda68 = 1;
    static _r246e373b59256d = 3;
    _state = 0;
    _r63b6792a558edf = 0;
    _rb8cf28226bc78c = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._state = e.readInteger()),
        (this._r63b6792a558edf = e.readInteger()),
        (this._rb8cf28226bc78c = e.readInteger()),
        !0
      );
    }
    get state() {
      return this._state;
    }
    get _rb2023938cee132() {
      return this._r63b6792a558edf;
    }
    get _ra37180683cadb3() {
      return this._rb8cf28226bc78c;
    }
  }
