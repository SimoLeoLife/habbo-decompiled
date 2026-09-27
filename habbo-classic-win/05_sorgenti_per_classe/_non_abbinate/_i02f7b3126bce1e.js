// Estratto da HabboAirLauncher.deobf.js, riga 113008.

class {
    static {
      n(this, "_i02f7b3126bce1e");
    }
    static {
      bdt(this, "_i02f7b3126bce1e");
    }
    static _r943c3bbf81625b = 4;
    static _r654a28c956ff0b = 3;
    static _r2e559c3d461f3d = 1;
    static _rd27f8b1a517069 = 2;
    productName = "";
    _rfb5e950766447e = 0;
    _rb211b77a555633 = 0;
    _rcc1933b635313a = 0;
    responseType = 0;
    _r77790c86fae06b = !1;
    _ra6c4481543acf2 = !1;
    giftsAvailable = 0;
    _r5268ed54bc12e0 = 0;
    minutesUntilExpiration = 0;
    _rc43e18432c54a9 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.productName = e.readString()),
        (this._rfb5e950766447e = e.readInteger()),
        (this._rb211b77a555633 = e.readInteger()),
        (this._rcc1933b635313a = e.readInteger()),
        (this.responseType = e.readInteger()),
        (this._r77790c86fae06b = e.readBoolean()),
        (this._ra6c4481543acf2 = e.readBoolean()),
        (this.giftsAvailable = e.readInteger()),
        (this._r5268ed54bc12e0 = e.readInteger()),
        (this.minutesUntilExpiration = e.readInteger()),
        e.bytesAvailable && (this._rc43e18432c54a9 = e.readInteger()),
        !0
      );
    }
  }
