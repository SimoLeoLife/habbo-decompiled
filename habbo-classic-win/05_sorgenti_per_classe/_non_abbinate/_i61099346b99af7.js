// Estratto da HabboAirLauncher.deobf.js, riga 73293.

class {
    static {
      n(this, "_i61099346b99af7");
    }
    static {
      y5r(this, "_i61099346b99af7");
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
