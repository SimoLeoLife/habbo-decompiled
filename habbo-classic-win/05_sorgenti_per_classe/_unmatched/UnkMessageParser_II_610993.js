// Extracted from HabboAirLauncher.deobf.js, line 73293.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i61099346b99af7

class {
    static {
      n(this, "UnkMessageParser_II_610993");
    }
    static {
      y5r(this, "UnkMessageParser_II_610993");
    }
    issueId = -1;
    _r84fb480914f27d = -1;
    _r795b64717e95be = null;
    flush() {
      return ((this.issueId = -1), (this._r84fb480914f27d = -1), (this._r795b64717e95be = null), !0);
    }
    parse(e) {
      return (
        (this.issueId = e.readInteger()),
        (this._r84fb480914f27d = e.readInteger()),
        (this._r795b64717e95be = new class_3377(e)),
        !0
      );
    }
  }
