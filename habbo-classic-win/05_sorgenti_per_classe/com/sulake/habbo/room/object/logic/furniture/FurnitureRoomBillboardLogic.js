// Extracted from HabboAirLauncher.deobf.js, line 300571.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurnitureRoomBillboardLogic.as
// Obfuscated name: _i1539450ca517fa

class extends pX {
  static {
    n(this, "FurnitureRoomBillboardLogic");
  }
  constructor() {
    (super(), (this._r543d1d922469e0 = !0));
  }
  getAdClickUrl(e) {
    return e.getString(RoomObjectVariableEnum.const_710);
  }
  handleAdClick(e, r, t) {
    if (t.startsWith("http")) {
      Ae.openWebPage(t);
      return;
    }
    this._r11e12b4ff1ca8e != null &&
      this.object != null &&
      this._r11e12b4ff1ca8e.dispatchEvent?.(new gi(gi.ROOM_AD_FURNI_CLICK, this.object, "", t));
  }
}
