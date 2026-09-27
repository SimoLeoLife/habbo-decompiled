// Estratto da HabboAirLauncher.deobf.js, riga 77822.

class a {
    static {
      n(this, "_id24321228047bd");
    }
    constructor(e, r, t, i, s) {
      ((this._ra6b0997c2af78e = e),
        (this._rf31108f237bf0d = r),
        (this._r1e7410cd1e5bb8 = t),
        (this._r3b6cae85288e05 = i),
        (this._rdac3a559141041 = s));
    }
    static {
      Fgr(this, "_id24321228047bd");
    }
    static _rd5b6c9ee640abf(e) {
      let r = e.readInteger(),
        t = e.readBoolean(),
        i = e.readBoolean(),
        s = e.readBoolean(),
        o = e.readBoolean();
      return new a(r, t, i, s, o);
    }
    get version() {
      return this._ra6b0997c2af78e;
    }
    get _rf707be258d4062() {
      return this._rf31108f237bf0d;
    }
    get _r63cb97ce3e5733() {
      return this._r1e7410cd1e5bb8;
    }
    get _r02d172564f8877() {
      return this._r3b6cae85288e05;
    }
    get _r3c5c49e7f27cee() {
      return this._rdac3a559141041;
    }
  }
