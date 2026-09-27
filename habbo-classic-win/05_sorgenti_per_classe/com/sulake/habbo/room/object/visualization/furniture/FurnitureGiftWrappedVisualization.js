// Estratto da HabboAirLauncher.deobf.js, riga 278939.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureGiftWrappedVisualization.as
// Nome offuscato: _ifed280f5c59983

class extends Pc {
  static {
    n(this, "FurnitureGiftWrappedVisualization");
  }
  var_5063 = 0;
  var_5341 = 0;
  update(e, r, t, i) {
    (this.updateTypes(), super.update(e, r, t, i));
  }
  getFrameNumber(e, r) {
    return r <= 1 ? this.var_5063 : this.var_5341;
  }
  getSpriteAssetName(e, r) {
    let t = this.getSize(e),
      i = r !== this._r7706d5c5d64808 ? String.fromCharCode(97 + r) : "sd";
    return `${this.type}_${t}_${i}_${this.direction}_${this.getFrameNumber(e, r)}`;
  }
  updateTypes() {
    let e = this.object?.getStringToStringMap()?.getString(RoomObjectVariableEnum.FURNITURE_EXTRAS) ?? "",
      r = Number.parseInt(e, 10);
    if (Number.isNaN(r)) {
      ((this.var_5063 = 0), (this.var_5341 = 0));
      return;
    }
    let t = 1e3;
    ((this.var_5063 = Math.floor(r / t)), (this.var_5341 = r % t));
  }
}
