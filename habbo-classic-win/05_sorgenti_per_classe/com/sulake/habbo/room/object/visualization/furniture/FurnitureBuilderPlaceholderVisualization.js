// Extracted from HabboAirLauncher.deobf.js, line 277273.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureBuilderPlaceholderVisualization.as
// Obfuscated name: _i20801533b340a2

class extends Pc {
  static {
    n(this, "FurnitureBuilderPlaceholderVisualization");
  }
  _r8e1740c5360bf6 = -1;
  _r31b35e71aeb155 = -1;
  updateModel(e) {
    let r = super.updateModel(e),
      t = this.object?.getStringToStringMap();
    if (t == null) return r;
    let i = t._ra3dc9a405b5c73(RoomObjectVariableEnum.const_693),
      s = t._ra3dc9a405b5c73(RoomObjectVariableEnum.const_230);
    return (
      (i !== this._r8e1740c5360bf6 || s !== this._r31b35e71aeb155) &&
        ((this._r8e1740c5360bf6 = i), (this._r31b35e71aeb155 = s), this._rdf584e141b0b9e(e)),
      r
    );
  }
  _r54d29d249f37ac(e, r) {
    ((this.layerCount = e),
      this._r8e1740c5360bf6 * this._r31b35e71aeb155 > 1 &&
        (this.layerCount *= this._r8e1740c5360bf6 * this._r31b35e71aeb155),
      (this._r7706d5c5d64808 = -1),
      this._r24cbf5255bb56f());
  }
  _ra258350da86294(e) {
    return 0;
  }
  getSpriteTag(e, r, t) {
    return super.getSpriteTag(e, r, this.getIndex(e, t));
  }
  getSpriteAlpha(e, r, t) {
    return super.getSpriteAlpha(e, r, this.getIndex(e, t));
  }
  getSpriteColor(e, r, t) {
    return super.getSpriteColor(e, this.getIndex(e, r), t);
  }
  getSpriteAssetName(e, r) {
    return super.getSpriteAssetName(e, this.getIndex(e, r));
  }
  getSpriteXOffset(e, r, t) {
    let i = super.getSpriteXOffset(e, r, this.getIndex(e, t)),
      s = this.data?._rf96292fa4b48da(e) ?? 0,
      o = s > 0 ? Math.trunc(t / s) : 0,
      d = this._r31b35e71aeb155 > 0 ? o % this._r31b35e71aeb155 : 0,
      c = this._r31b35e71aeb155 > 0 ? Math.trunc(o / this._r31b35e71aeb155) : 0;
    return i + ((d - c) * e) / 2;
  }
  getSpriteYOffset(e, r, t) {
    let i = super.getSpriteYOffset(e, r, this.getIndex(e, t)),
      s = this.data?._rf96292fa4b48da(e) ?? 0,
      o = s > 0 ? Math.trunc(t / s) : 0,
      d = this._r31b35e71aeb155 > 0 ? o % this._r31b35e71aeb155 : 0,
      c = this._r31b35e71aeb155 > 0 ? Math.trunc(o / this._r31b35e71aeb155) : 0;
    return i + ((d + c) * e) / 4;
  }
  _rddb79ec03402f8(e, r, t) {
    return super._rddb79ec03402f8(e, r, this.getIndex(e, t));
  }
  _r32e488dea66198(e, r, t) {
    return super._r32e488dea66198(e, r, this.getIndex(e, t));
  }
  _rff74d56770433c(e, r, t) {
    return super._rff74d56770433c(e, r, this.getIndex(e, t));
  }
  _rdf584e141b0b9e(e) {
    let r = this.data?._rf96292fa4b48da(e) ?? 0;
    (this._r54d29d249f37ac(r, e), this._r68dbc243d37d4a(this.layerCount), this._r1225543a2cc71f(e, !0, 0));
  }
  getIndex(e, r) {
    let t = this.data?._rf96292fa4b48da(e) ?? 0;
    return t > 0 ? r % t : r;
  }
}
