// Extracted from HabboAirLauncher.deobf.js, line 74027.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3302.as
// Obfuscated name: _i8116be46920f0f

class {
    static {
      n(this, "class_3302");
    }
    static {
      T2r(this, "class_3302");
    }
    secondsLeft = 0;
    furniLimit = 0;
    _r87bd6f9b08388f = 0;
    _rbe3666708bc651 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.secondsLeft = e.readInteger()),
        (this.furniLimit = e.readInteger()),
        (this._r87bd6f9b08388f = e.readInteger()),
        (this._rbe3666708bc651 = e.bytesAvailable ? e.readInteger() : this.secondsLeft),
        !0
      );
    }
  }
