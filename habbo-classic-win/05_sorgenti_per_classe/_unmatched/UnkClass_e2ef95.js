// Extracted from HabboAirLauncher.deobf.js, line 113580.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie2ef954a489bb1

class {
    static {
      n(this, "UnkClass_e2ef95");
    }
    static {
      bct(this, "UnkClass_e2ef95");
    }
    _x;
    _y;
    constructor(e, r) {
      ((this._x = Math.trunc(e)), (this._y = Math.trunc(r)));
    }
    get x() {
      return this._x;
    }
    get y() {
      return this._y;
    }
    toJSON() {
      return { x: this._x, y: this._y };
    }
  }
