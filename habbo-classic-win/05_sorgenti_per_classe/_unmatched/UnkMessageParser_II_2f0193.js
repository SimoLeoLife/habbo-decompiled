// Extracted from HabboAirLauncher.deobf.js, line 78704.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2f0193ac2d2ec9

class {
    static {
      n(this, "UnkMessageParser_II_2f0193");
    }
    static {
      owr(this, "UnkMessageParser_II_2f0193");
    }
    _raf4b651b3f78ad = 0;
    _errorCode = 0;
    get _r5e5a4c91d9abaf() {
      return this._raf4b651b3f78ad;
    }
    get errorCode() {
      return this._errorCode;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._raf4b651b3f78ad = e.readInteger()),
        (this._errorCode = e.readInteger()),
        !0
      );
    }
  }
