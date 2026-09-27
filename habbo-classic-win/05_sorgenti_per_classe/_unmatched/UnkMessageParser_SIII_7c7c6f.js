// Extracted from HabboAirLauncher.deobf.js, line 73946.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7c7c6f247adb27

class {
    static {
      n(this, "UnkMessageParser_SIII_7c7c6f");
    }
    static {
      x2r(this, "UnkMessageParser_SIII_7c7c6f");
    }
    _r2afa48fbf51a60 = -1;
    _red9302b82fe887 = -1;
    productType = "";
    productClassId = -1;
    flush() {
      return (
        (this._r2afa48fbf51a60 = -1),
        (this._red9302b82fe887 = -1),
        (this.productType = ""),
        (this.productClassId = -1),
        !0
      );
    }
    parse(e) {
      return (
        (this.productType = e.readString()),
        (this.productClassId = e.readInteger()),
        (this._r2afa48fbf51a60 = e.readInteger()),
        (this._red9302b82fe887 = e.readInteger()),
        !0
      );
    }
  }
