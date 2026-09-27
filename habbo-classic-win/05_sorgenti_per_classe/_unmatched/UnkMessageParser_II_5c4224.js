// Extracted from HabboAirLauncher.deobf.js, line 77778.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5c42246a09011f

class {
    static {
      n(this, "UnkMessageParser_II_5c4224");
    }
    static {
      Dgr(this, "UnkMessageParser_II_5c4224");
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
