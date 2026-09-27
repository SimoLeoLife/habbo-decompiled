// Estratto da HabboAirLauncher.deobf.js, riga 74497.

class {
    static {
      n(this, "_i636000767931dc");
    }
    static {
      _9r(this, "_i636000767931dc");
    }
    _rc9d060a7d109e6 = !1;
    newFurniDataHash = "";
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._rc9d060a7d109e6 = e.readBoolean()),
        e.bytesAvailable && (this.newFurniDataHash = e.readString()),
        !0
      );
    }
  }
