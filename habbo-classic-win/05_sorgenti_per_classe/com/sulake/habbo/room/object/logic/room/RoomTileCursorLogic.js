// Extracted from HabboAirLauncher.deobf.js, line 301243.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/room/RoomTileCursorLogic.as
// Obfuscated name: _id99fbd1db383ba

class a extends ObjectLogicBase {
  static {
    n(this, "RoomTileCursorLogic");
  }
  static STATE_ENABLED = 0;
  static STATE_DISABLED = 1;
  static STATE_SHOW_TILE_HEIGHT = 6;
  var_4121 = null;
  _hiddenOnPurpose = !1;
  initialize(e) {
    let r = this.object?.getModelController();
    this.object != null &&
      r != null &&
      (r.setNumber(RoomObjectVariableEnum.FURNITURE_ALPHA_MULTIPLIER, 1), this.object.setState(a.STATE_DISABLED, 0));
  }
  processUpdateMessage(e) {
    let r = e instanceof RoomObjectTileCursorUpdateMessage ? e : null;
    r != null &&
      ((this.var_4121 != null && this.var_4121 === r.sourceEventId) ||
        (r.toggleVisibility && (this._hiddenOnPurpose = !this._hiddenOnPurpose),
        super.processUpdateMessage(e),
        this.object != null &&
          (this._hiddenOnPurpose || !r.visible
            ? this.object.setState(a.STATE_DISABLED, 0)
            : (this.object.getModelController().setNumber(RoomObjectVariableEnum.TILE_CURSOR_HEIGHT, r.height),
              this.object.setState(r.height > 0.8 ? a.STATE_SHOW_TILE_HEIGHT : a.STATE_ENABLED, 0))),
        (this.var_4121 = r.sourceEventId)));
  }
}
