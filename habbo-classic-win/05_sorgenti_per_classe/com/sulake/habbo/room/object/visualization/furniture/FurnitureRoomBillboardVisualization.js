// Estratto da HabboAirLauncher.deobf.js, riga 279699.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureRoomBillboardVisualization.as
// Nome offuscato: _ia937140dea5d06

class extends dg {
  static {
    n(this, "FurnitureRoomBillboardVisualization");
  }
  getAdClickUrl(e) {
    return e.getString(RoomObjectVariableEnum.const_710);
  }
  getSpriteXOffset(e, r, t) {
    return super.getSpriteXOffset(e, r, t) + this._rf6c61bdb1bbdff;
  }
  getSpriteYOffset(e, r, t) {
    return super.getSpriteYOffset(e, r, t) + this._r28ff61a56eaebe;
  }
  _rff74d56770433c(e, r, t) {
    return super._rff74d56770433c(e, r, t) + this._r8eadcd81fae7c5 * -1;
  }
}
