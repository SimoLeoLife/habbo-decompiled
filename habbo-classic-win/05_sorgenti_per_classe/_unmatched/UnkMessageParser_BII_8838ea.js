// Extracted from HabboAirLauncher.deobf.js, line 72991.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8838eaac6a0615

class {
    static {
      n(this, "UnkMessageParser_BII_8838ea");
    }
    static {
      X8r(this, "UnkMessageParser_BII_8838ea");
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
