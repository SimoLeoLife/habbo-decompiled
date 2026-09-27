// Estratto da HabboAirLauncher.deobf.js, riga 113153.

class {
    static {
      n(this, "_icdc91bbdf09eaf");
    }
    static {
      Cdt(this, "_icdc91bbdf09eaf");
    }
    _r2f3fa5110979d7 = !1;
    _r2e074250b68744 = 0;
    _rb818df78903eac = 0;
    get _rad45650af253f7() {
      return this._r2f3fa5110979d7;
    }
    get _r9c4f3953d7e253() {
      return this._r2e074250b68744;
    }
    get _r9332f593e1da2e() {
      return this._rb818df78903eac;
    }
    flush() {
      return ((this._r2f3fa5110979d7 = !1), (this._r2e074250b68744 = 0), (this._rb818df78903eac = 0), !0);
    }
    parse(e) {
      return (
        (this._r2f3fa5110979d7 = e.readBoolean()),
        (this._r2e074250b68744 = e.readInteger()),
        (this._rb818df78903eac = e.readInteger()),
        !0
      );
    }
  }
