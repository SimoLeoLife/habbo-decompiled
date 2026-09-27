// Extracted from HabboAirLauncher.deobf.js, line 105456.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5f9c64ceea0983

class {
    static {
      n(this, "UnkMessageParser_II_5f9c64");
    }
    static {
      CZr(this, "UnkMessageParser_II_5f9c64");
    }
    _flatId = 0;
    _userId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), (this._userId = e.readInteger()), !0);
    }
    get flatId() {
      return this._flatId;
    }
    get userId() {
      return this._userId;
    }
  }
