// Extracted from HabboAirLauncher.deobf.js, line 74497.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i636000767931dc

class {
    static {
      n(this, "UnkMessageParser_BS_636000");
    }
    static {
      _9r(this, "UnkMessageParser_BS_636000");
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
