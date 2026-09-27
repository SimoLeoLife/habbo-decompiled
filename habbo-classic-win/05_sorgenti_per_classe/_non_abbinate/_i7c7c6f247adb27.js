// Estratto da HabboAirLauncher.deobf.js, riga 73946.

class {
    static {
      n(this, "_i7c7c6f247adb27");
    }
    static {
      x2r(this, "_i7c7c6f247adb27");
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
