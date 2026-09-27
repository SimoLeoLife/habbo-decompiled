// Estratto da HabboAirLauncher.deobf.js, riga 300079.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurnitureNftCreditLogic.as
// Nome offuscato: _i009bde352ad1c9

class a extends Qr {
  static {
    n(this, "FurnitureNftCreditLogic");
  }
  static EMERALD_HAND_TYPE = "nft_emerald_emerhand";
  static EMERALD_EGG_TYPE = "nft_emerald_eggmerald";
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.CREDITFURNI]);
  }
  initialize(e) {
    if ((super.initialize(e), e == null || this.object == null)) return;
    let r = this.object.getType(),
      t = r.match(/\d+$/),
      i = t != null ? Number.parseInt(t[0], 10) : Number.NaN;
    (Number.isNaN(i) && (r === a.EMERALD_HAND_TYPE ? (i = 15e3) : r === a.EMERALD_EGG_TYPE && (i = 2e3)),
      this.object.getModelController().setNumber(RoomObjectVariableEnum.const_695, i),
      this.object.getModelController().setString(RoomObjectVariableEnum.FURNITURE_NFT_CREDIT, "true"));
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null)) {
      if (e.type === _ifd7c1208e3417e.DOUBLE_CLICK) {
        this._rce2b5eb85a79e0();
        return;
      }
      super.mouseEvent(e, r);
    }
  }
  _rce2b5eb85a79e0() {
    (this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.CREDITFURNI, this.object)),
      super._rce2b5eb85a79e0());
  }
}
