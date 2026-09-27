// Estratto da HabboAirLauncher.deobf.js, riga 77778.

class {
    static {
      n(this, "_i5c42246a09011f");
    }
    static {
      Dgr(this, "_i5c42246a09011f");
    }
    _rd2e15e889f5498 = 0;
    _r55f185c10195c4 = 0;
    get reputation() {
      return this._rd2e15e889f5498;
    }
    get _rdb8ccda3938631() {
      return this._r55f185c10195c4;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._rd2e15e889f5498 = e.readInteger()),
        (this._r55f185c10195c4 = e.readInteger()),
        !0
      );
    }
  }
