// Extracted from HabboAirLauncher.deobf.js, line 275800.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/ColorData.as
// Obfuscated name: _i54299e35a30c85

class a {
  static {
    n(this, "ColorData");
  }
  static DEFAULT_COLOR = 16777215;
  _r0965e8b4af4e87 = [];
  constructor(e) {
    for (let r = 0; r < e; r++) this._r0965e8b4af4e87.push(a.DEFAULT_COLOR);
  }
  dispose() {
    this._r0965e8b4af4e87 = null;
  }
  setColor(e, r) {
    r < 0 || r >= this._r0965e8b4af4e87.length || (this._r0965e8b4af4e87[r] = e);
  }
  getColor(e) {
    return e < 0 || e >= this._r0965e8b4af4e87.length
      ? a.DEFAULT_COLOR
      : (this._r0965e8b4af4e87[e] ?? a.DEFAULT_COLOR);
  }
}
