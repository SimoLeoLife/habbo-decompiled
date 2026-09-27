// Estratto da HabboAirLauncher.deobf.js, riga 113548.

class {
    static {
      n(this, "_ic688c136c68bd2");
    }
    static {
      fct(this, "_ic688c136c68bd2");
    }
    _name;
    _location;
    _flipH;
    _flipV;
    constructor(e, r, t, i) {
      ((this._name = e), (this._location = r), (this._flipH = t), (this._flipV = i));
    }
    get name() {
      return this._name;
    }
    get location() {
      return this._location;
    }
    get flipH() {
      return this._flipH;
    }
    get flipV() {
      return this._flipV;
    }
    toJSON() {
      return { name: this._name, location: this._location, flipH: this._flipH, flipV: this._flipV };
    }
  }
