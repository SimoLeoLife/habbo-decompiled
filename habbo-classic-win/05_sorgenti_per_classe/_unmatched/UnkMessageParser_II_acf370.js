// Extracted from HabboAirLauncher.deobf.js, line 126490.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iacf370a4464f53

class {
    static {
      n(this, "UnkMessageParser_II_acf370");
    }
    static {
      Yyt(this, "UnkMessageParser_II_acf370");
    }
    var_1429 = 0;
    _rd5aac9508d77bd = 0;
    get habbiconId() {
      return this.var_1429;
    }
    get _rf4d14ad73f880a() {
      return this._rd5aac9508d77bd;
    }
    flush() {
      return ((this.var_1429 = 0), (this._rd5aac9508d77bd = 0), !0);
    }
    parse(e) {
      return (
        (this.var_1429 = e.readInteger()),
        (this._rd5aac9508d77bd = e.readInteger()),
        !0
      );
    }
  }
