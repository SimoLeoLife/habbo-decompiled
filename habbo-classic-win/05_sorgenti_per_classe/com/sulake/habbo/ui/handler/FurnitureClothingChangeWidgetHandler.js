// Estratto da HabboAirLauncher.deobf.js, riga 329577.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/FurnitureClothingChangeWidgetHandler.as
// Nome offuscato: _i33d4e7fb80a4cc

class a {
  static {
    n(this, "FurnitureClothingChangeWidgetHandler");
  }
  static DEFAULT_BOY_CLOTHES = "hd-99999-99999.lg-270-62";
  static DEFAULT_GIRL_CLOTHES = "hd-99999-99999.ch-630-62.lg-695-62";
  static MALE = "M";
  static const_140 = "F";
  var_1271 = !1;
  _container = null;
  var_344 = -1;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.CLOTHING_CHANGE;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    (this._container?.avatarEditor?.close(_ic723960da8d613._r774d79858ea450),
      (this.var_1271 = !0),
      (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_CLOTHING_CHANGE_WIDGET, RoomWidgetClothingChangeMessage.REQUEST_EDITOR, RoomWidgetAvatarEditorMessage.const_198];
  }
  RoomWidgetLetUserInMessage(e) {
    switch (e.type) {
      case RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_CLOTHING_CHANGE_WIDGET: {
        if (!(e instanceof RoomWidgetFurniToWidgetMessage)) break;
        let r = e;
        if (
          this._container?.roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.id, r.category)?.getStringToStringMap() ==
          null
        )
          return null;
        ((this._container?._r2eac8239a09fe7?.isRoomOwner ?? !1) ||
          (this._container?.sessionDataManager?.isAnyRoomController ?? !1) ||
          (this._container?._r2eac8239a09fe7?._rea9739215487be ?? RoomControllerLevelEnum.NOT_CONTROLLER) >=
            RoomControllerLevelEnum.ROOM_CONTROLLER) &&
          this._container?.events?.dispatchEvent?.(new RoomWidgetClothingChangeUpdateEvent(RoomWidgetClothingChangeUpdateEvent.SHOW_GENDER_SELECTION, r.id, r.category, r.roomId));
        break;
      }
      case RoomWidgetClothingChangeMessage.REQUEST_EDITOR: {
        if (!(e instanceof RoomWidgetClothingChangeMessage)) break;
        let r = e,
          i = this._container?.roomEngine
            ?._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.objectCategory)
            ?.getStringToStringMap();
        if (i == null || this._container?.avatarEditor == null) return null;
        this.var_344 = r.objectId;
        let s = a.MALE,
          o = i.getString(RoomObjectVariableEnum.const_783);
        ((o == null || o === "") && (o = a.DEFAULT_BOY_CLOTHES),
          r.gender === a.const_140 &&
            ((s = a.const_140),
            (o = i.getString(RoomObjectVariableEnum.const_1285)),
            (o == null || o === "") && (o = a.DEFAULT_GIRL_CLOTHES)),
          this._container.avatarEditor._rdaf967f79ea08a(
            _ic723960da8d613._r774d79858ea450,
            this,
            [class_1962.TORSO, class_1962.const_94],
            !1,
            "${widget.furni.clothingchange.editor.title}",
          ) != null &&
            (this._container.avatarEditor.loadAvatarInEditor(_ic723960da8d613._r774d79858ea450, o, s, dr.NO_CLUB),
            this._container.events?.dispatchEvent?.(
              new RoomWidgetClothingChangeUpdateEvent(RoomWidgetClothingChangeUpdateEvent.SHOW_GENDER_SELECTION, r.objectId, r.objectCategory, r.roomId),
            )));
        break;
      }
    }
    return null;
  }
  update() {}
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  saveFigure(e, r) {
    this._container != null &&
      (this._container._r2eac8239a09fe7?._r2ffbc65ebca8f8(this.var_344, r, e),
      this._container.avatarEditor?.close(_ic723960da8d613._r774d79858ea450));
  }
}
