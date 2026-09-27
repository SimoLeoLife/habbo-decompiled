// Extracted from HabboAirLauncher.deobf.js, line 113548.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic688c136c68bd2

class {
    static {
      n(this, "UnkClass_c688c1");
    }
    static {
      fct(this, "UnkClass_c688c1");
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
