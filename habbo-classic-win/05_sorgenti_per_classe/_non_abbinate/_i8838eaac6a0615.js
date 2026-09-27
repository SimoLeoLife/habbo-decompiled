// Estratto da HabboAirLauncher.deobf.js, riga 72991.

class {
    static {
      n(this, "_i8838eaac6a0615");
    }
    static {
      X8r(this, "_i8838eaac6a0615");
    }
    _r2a1c4ecc7d61dd = !1;
    _rc86038ffdf388c = 0;
    duration = 15;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._r2a1c4ecc7d61dd = e.readBoolean()),
        (this._rc86038ffdf388c = e.readInteger()),
        e.bytesAvailable && (this.duration = e.readInteger()),
        !0
      );
    }
  }
