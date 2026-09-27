// Estratto da HabboAirLauncher.deobf.js, riga 299626.

class a extends _ieead78a21202a2 {
  static {
    n(this, "_i78bb9d147c98ad");
  }
  static _raa2664bba03fdc = 1;
  static _r6b34e4bfc39ee1 = 2;
  static _r3854faf34dd688 = 3;
  static _rb611d6d926f587 = 4;
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [
      RoomObjectBadgeAssetEvent.LOAD_BADGE,
      RoomObjectWidgetRequestEvent.GUILD_FURNI_CONTEXT_MENU,
      RoomObjectWidgetRequestEvent.CLOSE_FURNI_CONTEXT_MENU,
    ]);
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof _i39f7ecd6ab9902 ? e : null,
      t = r?.data instanceof ao ? r.data : null;
    t != null &&
      (this.updateGuildId(t.getValue(a._raa2664bba03fdc)),
      this._r1c86966eb9da47(t.getValue(a._r6b34e4bfc39ee1)),
      this._r76f5c10d883c2f(t.getValue(a._r3854faf34dd688), t.getValue(a._rb611d6d926f587)));
    let i = e instanceof RoomObjectGroupBadgeUpdateMessage ? e : null;
    i != null &&
      i.assetName !== "loading_icon" &&
      this.object != null &&
      (this.object.getModelController().setString(RoomObjectVariableEnum.FURNITURE_GUILD_CUSTOMIZED_BADGE_ASSET_NAME, i.assetName), this.update(_ia411d8d8194a3a()));
    let s = e instanceof _ia9a296a1d0c77f ? e : null;
    s != null &&
      !s.selected &&
      this.object != null &&
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.CLOSE_FURNI_CONTEXT_MENU, this.object));
  }
  mouseEvent(e, r) {
    e == null ||
      r == null ||
      this.object == null ||
      (e.type === _ifd7c1208e3417e.CLICK && this._rb82747a8e759e4(), super.mouseEvent(e, r));
  }
  _rb82747a8e759e4() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.GUILD_FURNI_CONTEXT_MENU, this.object));
  }
  updateGuildId(e) {
    this.object?.getModelController()?.setNumber(RoomObjectVariableEnum.const_699, Number.parseInt(e, 10));
  }
  _r76f5c10d883c2f(e, r) {
    (this.object?.getModelController()?.setNumber(RoomObjectVariableEnum.FURNITURE_GUILD_CUSTOMIZED_COLOR_1, Number.parseInt(e, 16)),
      this.object?.getModelController()?.setNumber(RoomObjectVariableEnum.FURNITURE_GUILD_CUSTOMIZED_COLOR_2, Number.parseInt(r, 16)));
  }
  _r1c86966eb9da47(e) {
    this.object != null &&
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectBadgeAssetEvent(RoomObjectBadgeAssetEvent.LOAD_BADGE, this.object, e, !0));
  }
}
