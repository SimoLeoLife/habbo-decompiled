// Extracted from HabboAirLauncher.deobf.js, line 275589.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/class_2861.as
// Obfuscated name: _i0f5c2701488e5a

class {
  static {
    n(this, "class_2861");
  }
  _offsetX = new Map();
  _offsetY = new Map();
  _r86af7c54c73816(e, r) {
    return this._offsetX.get(e) ?? r;
  }
  _rcfe225b0c7a896(e, r) {
    return this._offsetY.get(e) ?? r;
  }
  setOffset(e, r, t) {
    (this._offsetX.set(e, r), this._offsetY.set(e, t));
  }
}
