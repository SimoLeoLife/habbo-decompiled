// Estratto da HabboAirLauncher.deobf.js, riga 327317.

class {
  constructor(e) {
    this._rfa7241dbaad4f6 = e;
  }
  static {
    n(this, "_ib7455301508c29");
  }
  get disposed() {
    return this._rfa7241dbaad4f6 == null;
  }
  dispose() {
    this._rfa7241dbaad4f6 = null;
  }
  createWidget(e, r) {
    let t = this._rfa7241dbaad4f6,
      i = t?.windowManager ?? null,
      s = t?.assets ?? null,
      o = t?.localization ?? null,
      d = s,
      c = o;
    if (t == null || i == null) return null;
    switch (e) {
      case RoomWidgetEnum.CHAT_INPUT_WIDGET:
        return new IX(
          r,
          i,
          s,
          o,
          {
            get _r95cd89d9fe7aac() {
              return t._r95cd89d9fe7aac;
            },
            get inventory() {
              return t.inventory;
            },
            _rf0f2c79ea6337c: t._rf0f2c79ea6337c,
            toolbar: t.toolbar,
            context: { _r6b6c989018eb05: n((f) => t.context._r6b6c989018eb05(f), "_r6b6c989018eb05") },
            getProperty: n((f, l) => t.getProperty(f) || (l ?? ""), "getProperty"),
            getBoolean: n((f) => t.getBoolean(f), "getBoolean"),
          },
          t.desktop,
        );
      case RoomWidgetEnum.INFOSTAND_WIDGET:
        return new Jxe(r, i, s, o, t);
      case RoomWidgetEnum.AVATAR_INFO:
        return new PIe(r, i, s, t, o, t, t.catalog, t._rddef5461e8915c);
      case RoomWidgetEnum.ME_MENU_WIDGET:
        return new pb(r, i, s, o, t);
      case RoomWidgetEnum.FURNI_PLACEHOLDER_WIDGET:
        return new PlaceholderWidget(r, i, s, o);
      case RoomWidgetEnum.FURNI_CREDIT_WIDGET:
        return new _xe(r, i, d, c);
      case RoomWidgetEnum.FURNI_STICKIE_WIDGET:
        return new MX(r, i, d);
      case RoomWidgetEnum.FURNI_PRESENT_WIDGET:
        return new Txe(r, i, s, o, t, t.catalog, t.inventory, t.roomEngine);
      case RoomWidgetEnum.FURNI_TROPHY_WIDGET:
        return new Wg(r, i, d, c, t);
      case RoomWidgetEnum.FURNI_ACHIEVEMENT_RESOLUTION_ENGRAVING:
        return new AchievementResolutionTrophyFurniWidget(r, i, d, c, t);
      case RoomWidgetEnum.FURNI_ECOTRONBOX_WIDGET:
        return new vxe(r, i, d);
      case RoomWidgetEnum.FURNI_PET_PACKAGE_WIDGET:
        return new PetPackageFurniWidget(r, i, d, c);
      case RoomWidgetEnum.DOORBELL:
        return new JIe(r, i, d, c);
      case RoomWidgetEnum.LOADINGBAR:
        return new LoadingBarWidget(r, i, s, o, t);
      case RoomWidgetEnum.ROOM_QUEUE:
        return new RoomQueueWidget(r, i, s, o, t);
      case RoomWidgetEnum.POLL:
        return new PollWidget(r, i, s, o);
      case RoomWidgetEnum.USER_CHOOSER:
        return new UIe(r, i, s, o);
      case RoomWidgetEnum.FURNI_CHOOSER:
        return new _i36225d19530f96(r, i, s, o);
      case RoomWidgetEnum.DIMMER:
        return new gxe(r, i, s, o);
      case RoomWidgetEnum.FRIEND_REQUEST:
        return new FriendRequestWidget(r, i, d, c, t);
      case RoomWidgetEnum.CLOTHING_CHANGE:
        return new oxe(r, i, s, o);
      case RoomWidgetEnum.CONVERSION_TRACKING:
        return new RoomWidgetBase(r, i);
      case RoomWidgetEnum.LOCATION_WIDGET:
        return new RoomWidgetBase(r, i);
      case RoomWidgetEnum.PLAYLIST_EDITOR_WIDGET:
        return new dCe(r, i, t.musicController, s, o, t, t.catalog);
      case RoomWidgetEnum.SPAMWALL_POSTIT_WIDGET:
        return new SpamWallPostItFurniWidget(r, i, s);
      case RoomWidgetEnum.const_65:
        return new rxe(r, i, s);
      case RoomWidgetEnum.MANNEQUIN:
        return new Wxe(r, i, s, o);
      case RoomWidgetEnum.FURNITURE_CONTEXT_MENU:
        return new FurnitureContextMenuWidget(r, i, s, t, o, t, t._r65e0ab1dc9fb51, t.catalog);
      case RoomWidgetEnum.CAMERA:
        return new CameraWidget(r, i, s, t, o, t);
      case RoomWidgetEnum.ROOM_BACKGROUND_COLOR:
        return new sxe(r, i, s);
      case RoomWidgetEnum.AREA_HIDE:
        return new nxe(r, i, d, c, t.roomEngine);
      case RoomWidgetEnum.CUSTOM_USER_NOTIFICATION:
        return new Q1(r, i, s);
      case RoomWidgetEnum.FRIEND_FURNI_CONFIRM:
        return new FriendFurniConfirmWidget(r, i, s, o);
      case RoomWidgetEnum.FRIEND_FURNI_ENGRAVING:
        return new FriendFurniEngravingWidget(r, i, s, o);
      case RoomWidgetEnum.const_121:
        return new Mxe(r, i, s, o);
      case RoomWidgetEnum.CUSTOM_STACK_HEIGHT:
        return new ixe(r, i, s, o);
      case RoomWidgetEnum.RENTABLESPACE:
        return new Rxe(r, i, d, c);
      case RoomWidgetEnum.YOUTUBE:
        return new _ic6a39627f1e0b7(r, i, d, c);
      case RoomWidgetEnum.VIMEO:
        return new _i4366dba4674c30(r, i, d, c);
      case RoomWidgetEnum.ROOM_TOOLS:
        return new mCe(r, i, s, t.desktop, t._rafd5b9130c4bfd);
      case RoomWidgetEnum.EXTERNAL_IMAGE:
        return new wxe(r, i, s, o, t.inventory, t.habboHelp, t.roomEngine, t);
      case RoomWidgetEnum.const_328:
        return new JI(r, i, d, c);
      case RoomWidgetEnum.const_1077:
        return new UiHelpBubblesWidget(r, i, s, o, t._rf0f2c79ea6337c, t.toolbar, t.desktop, t);
      case RoomWidgetEnum.ROOM_THUMBNAIL_CAMERA:
        return new RoomThumbnailCameraWidget(r, i, s, t, o, t);
      case RoomWidgetEnum.ROOM_LINK:
        return new _ic20aa64dd4a93f(r, i);
      case RoomWidgetEnum.CRAFTING:
        return new ZIe(r, i, t);
    }
    return null;
  }
}
