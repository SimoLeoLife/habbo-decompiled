// Extracted from HabboAirLauncher.deobf.js, line 137346.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/renderer/SkinTemplate.as
// Obfuscated name: _i89c194f87562d6

class extends ChildEntityArray {
  static {
    n(this, "SkinTemplate");
  }
  _name;
  _asset;
  constructor(e, r) {
    (super(), (this._name = e), (this._asset = r));
  }
  get id() {
    return 0;
  }
  get name() {
    return this._name;
  }
  get asset() {
    return this._asset;
  }
  dispose() {
    let e = this.numChildren;
    for (let r = 0; r < e; r++) this.removeChildAt(0);
    ((this._asset = null), (this._name = ""));
  }
}
