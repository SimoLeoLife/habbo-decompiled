// Extracted from HabboAirLauncher.deobf.js, line 278897.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureGiftWrappedFireworksVisualization.as
// Obfuscated name: _ie6933d69236885

class a extends FurnitureFireworksVisualization {
  static {
    n(this, "FurnitureGiftWrappedFireworksVisualization");
  }
  static PRESENT_DEFAULT_STATE = 0;
  static MAX_PACKET_TYPE_VALUE = 9;
  static MAX_RIBBON_TYPE_VALUE = 11;
  var_5063 = 0;
  var_5341 = 0;
  _r7314e105e79989 = 0;
  update(e, r, t, i) {
    (this.updateTypes(), super.update(e, r, t, i));
  }
  getFrameNumber(e, r) {
    if (this._r7314e105e79989 === a.PRESENT_DEFAULT_STATE) {
      if (r <= 1) return this.var_5063;
      if (r === 2) return this.var_5341;
    }
    return super.getFrameNumber(e, r);
  }
  getSpriteAssetName(e, r) {
    let t = this.getSize(e),
      i = r !== this._r7706d5c5d64808 ? String.fromCharCode(97 + r) : "sd";
    return `${this.type}_${t}_${i}_${this.direction}_${this.getFrameNumber(e, r)}`;
  }
  setAnimation(e) {
    ((this._r7314e105e79989 = e), super.setAnimation(e));
  }
  updateTypes() {
    let e = this.object?.getStringToStringMap()?.getString(RoomObjectVariableEnum.FURNITURE_EXTRAS) ?? "",
      r = Number.parseInt(e, 10);
    if (Number.isNaN(r)) {
      ((this.var_5063 = 0), (this.var_5341 = 0));
      return;
    }
    let t = 1e3,
      i = Math.floor(r / t),
      s = r % t;
    ((this.var_5063 = i > a.MAX_PACKET_TYPE_VALUE ? 0 : i),
      (this.var_5341 = s > a.MAX_RIBBON_TYPE_VALUE ? 0 : s));
  }
}
