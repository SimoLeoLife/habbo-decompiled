// Estratto da HabboAirLauncher.deobf.js, riga 113580.

class {
    static {
      n(this, "_ie2ef954a489bb1");
    }
    static {
      bct(this, "_ie2ef954a489bb1");
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
