// Estratto da HabboAirLauncher.deobf.js, riga 299512.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/class_1977.as
// Nome offuscato: _i295c6334a9d747

class a extends _ieead78a21202a2 {
  static {
    n(this, "class_1977");
  }
  static STATE_HOLE = 0;
  var_2475 = -1;
  var_232 = null;
  dispose() {
    (this.var_2475 === a.STATE_HOLE &&
      this.object != null &&
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFloorHoleEvent(RoomObjectFloorHoleEvent.REMOVE_HOLE, this.object)),
      super.dispose());
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectFloorHoleEvent.ADD_HOLE, RoomObjectFloorHoleEvent.REMOVE_HOLE]);
  }
  processUpdateMessage(e) {
    if ((super.processUpdateMessage(e), this.object != null)) {
      (e instanceof _i39f7ecd6ab9902 ? e : null) != null && this._r97a419040ede42(this.object.getState(0));
      let t = this.object.getLocation();
      t != null &&
        (this.var_232 == null
          ? (this.var_232 = new k())
          : (t.x !== this.var_232.x || t.y !== this.var_232.y) &&
            this.var_2475 === a.STATE_HOLE &&
            this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFloorHoleEvent(RoomObjectFloorHoleEvent.ADD_HOLE, this.object)),
        this.var_232.assign(t));
    }
  }
  update(e) {
    (super.update(e), this.handleAutomaticStateUpdate());
  }
  _r97a419040ede42(e) {
    e !== this.var_2475 &&
      this.object != null &&
      (e === a.STATE_HOLE
        ? this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFloorHoleEvent(RoomObjectFloorHoleEvent.ADD_HOLE, this.object))
        : this.var_2475 === a.STATE_HOLE &&
          this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFloorHoleEvent(RoomObjectFloorHoleEvent.REMOVE_HOLE, this.object)),
      (this.var_2475 = e));
  }
  handleAutomaticStateUpdate() {
    let r = this.object?.getStringToStringMap();
    if (r != null) {
      let t = r._ra3dc9a405b5c73(RoomObjectVariableEnum.const_718);
      Number.isNaN(t) || this._r97a419040ede42(Math.trunc(t) % 2);
    }
  }
}
