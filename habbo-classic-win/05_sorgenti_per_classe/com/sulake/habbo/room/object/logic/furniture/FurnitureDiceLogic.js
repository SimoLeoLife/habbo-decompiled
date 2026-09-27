// Extracted from HabboAirLauncher.deobf.js, line 299299.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurnitureDiceLogic.as
// Obfuscated name: _i6dfc79a91f7142

class extends Qr {
  static {
    n(this, "FurnitureDiceLogic");
  }
  allspritesactivate = !1;
  _rd8215627177cba = !1;
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectFurnitureActionEvent.const_661, RoomObjectFurnitureActionEvent.const_733]);
  }
  initialize(e) {
    (super.initialize(e),
      e != null && (this.allspritesactivate = e.child("allspritesactivate").length() !== 0));
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null)) {
      if (e.type === UnkClass_fd7c12.DOUBLE_CLICK) {
        let t = null;
        (this.allspritesactivate
          ? !this._rd8215627177cba || this.object.getState(0) === 0 || this.object.getState(0) === 100
            ? ((t = RoomObjectFurnitureActionEvent.const_661), (this._rd8215627177cba = !0))
            : ((t = RoomObjectFurnitureActionEvent.const_733), (this._rd8215627177cba = !1))
          : e.RoomObjectStateChangeEvent === "activate" ||
              this.object.getState(0) === 0 ||
              this.object.getState(0) === 100
            ? (t = RoomObjectFurnitureActionEvent.const_661)
            : e.RoomObjectStateChangeEvent === "deactivate" && (t = RoomObjectFurnitureActionEvent.const_733),
          t != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFurnitureActionEvent(t, this.object)));
        return;
      }
      super.mouseEvent(e, r);
    }
  }
}
