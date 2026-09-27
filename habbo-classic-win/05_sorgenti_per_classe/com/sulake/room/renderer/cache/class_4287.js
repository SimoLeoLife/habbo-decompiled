// Extracted from HabboAirLauncher.deobf.js, line 376499.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/renderer/cache/class_4287.as
// Obfuscated name: _i61b69e8b75c790

class {
  static {
    n(this, "class_4287");
  }
  var_344 = 0;
  _location;
  _sprites;
  constructor(e) {
    ((this._location = new class_3945(e)), (this._sprites = new IRoomObjectSpriteVisualization()));
  }
  get location() {
    return this._location;
  }
  get sprites() {
    return this._sprites;
  }
  get objectId() {
    return this.var_344;
  }
  set objectId(e) {
    this.var_344 = e;
  }
  dispose() {
    (this._location?.dispose(),
      (this._location = null),
      this._sprites?.dispose(),
      (this._sprites = null));
  }
}
