// Extracted from HabboAirLauncher.deobf.js, line 105388.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iec27dbe250853b

class {
    static {
      n(this, "UnkClass_ec27db");
    }
    static {
      gZr(this, "UnkClass_ec27db");
    }
    _userId;
    _userName;
    _selected = !1;
    constructor(e) {
      ((this._userId = e.readInteger()), (this._userName = e.readString()));
    }
    get userId() {
      return this._userId;
    }
    get userName() {
      return this._userName;
    }
    get selected() {
      return this._selected;
    }
    set selected(e) {
      this._selected = e;
    }
  }
