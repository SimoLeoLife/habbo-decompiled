// Extracted from HabboAirLauncher.deobf.js, line 169769.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/geometry/Node3D.as
// Obfuscated name: _i6797666d5edd8e

class {
  static {
    n(this, "Node3D");
  }
  _location;
  _transformedLocation = new Gu();
  _needsTransformation = !1;
  constructor(e, r, t) {
    ((this._location = new Gu(e, r, t)), (e !== 0 || r !== 0 || t !== 0) && (this._needsTransformation = !0));
  }
  get location() {
    return this._location;
  }
  get transformedLocation() {
    return this._transformedLocation;
  }
  applyTransform(e) {
    this._needsTransformation && (this._transformedLocation = e.vectorMultiplication(this._location));
  }
}
