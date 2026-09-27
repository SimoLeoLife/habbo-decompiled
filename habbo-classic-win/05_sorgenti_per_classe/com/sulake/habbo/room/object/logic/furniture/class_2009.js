// Estratto da HabboAirLauncher.deobf.js, riga 299681.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/class_2009.as
// Nome offuscato: _ia806d4fc6737c6

class extends hX {
  static {
    n(this, "class_2009");
  }
  _rb82747a8e759e4() {}
  updateGuildId(e) {
    (super.updateGuildId(e),
      this.object?.getModelController()?.setString(RoomObjectVariableEnum.const_144, `groupforum/${e}`));
  }
  _rce2b5eb85a79e0() {
    (this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.INTERNAL_LINK, this.object)),
      super._rce2b5eb85a79e0());
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.INTERNAL_LINK]);
  }
}
