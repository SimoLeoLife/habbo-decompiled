// Estratto da HabboAirLauncher.deobf.js, riga 321695.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandRentableBotView.as
// Nome offuscato: _i829a4b39d5b110

class a {
  static {
    n(this, "InfoStandRentableBotView");
  }
  static BUTTONS_MAX_WIDTH = 250;
  static BUTTON_HEIGHT = 25;
  static BUTTON_MARGIN = 5;
  static FIELD_NAME = "name_text";
  static FIELD_DESCRIPTION = "description_text";
  static FIELD_HAND_ITEM = "handitem_text";
  static FIELD_OWNER = "owner_text";
  static FIELD_EXPIRE_TIME = "expire_time_left";
  static FIELD_EXPIRE_HEADER = "expire_time_info";
  static const_451 = "handitem_spacer";
  var_17;
  _window = null;
  _border = null;
  _r6b261897733d43 = null;
  _r99fda1d9e9f6a9 = null;
  var_1817 = 0;
  var_4258 = 0;
  constructor(e, r) {
    ((this.var_17 = e), this.createWindow(r));
  }
  dispose() {
    ((this.var_17 = null),
      (this._border = null),
      (this._r6b261897733d43 = null),
      (this._r99fda1d9e9f6a9 = null),
      this._window?.dispose(),
      (this._window = null));
  }
  get window() {
    return this._window;
  }
  update(e) {
    ((this.var_1817 = e.webID),
      (this.var_4258 = e.userRoomId),
      this.setFieldText(a.FIELD_NAME, !0, e.name),
      this.setFieldText(a.FIELD_DESCRIPTION, !0, e.motto),
      e.ownerId > -1
        ? (this.var_17?.localizations?._r43eae9731f5b27(
            "infostand.text.botowner",
            "name",
            e.ownerName,
          ),
          this.setFieldText(
            a.FIELD_OWNER,
            !0,
            this.var_17?.localizations?.getLocalization("infostand.text.botowner") ?? "",
          ))
        : this.setFieldText(a.FIELD_OWNER, !1, ""),
      this.updateRentExpireField(),
      this.setCarryItem(e.carryItem));
    let r = Array.isArray(e.badges) && typeof e.badges[0] == "string" ? e.badges[0] : "";
    (this.setBadge(r), this.setFigure(e.figure));
    let i = (this.var_17?.roomControllerLevel?._r2eac8239a09fe7 ?? null)?.playTestMode ?? !1,
      s = e.ownerId > -1 && (e.amIOwner || e.amIAnyRoomController),
      o =
        e.ownerId > -1 &&
        !i &&
        (e.myRoomControllerLevel >= RoomControllerLevelEnum.ROOM_CONTROLLER || e.amIOwner || e.amIAnyRoomController);
    (this.showButton("whisper", !1),
      this.showButton("ignore", !1),
      this.showButton("unignore", !1),
      this.showButton("move", o),
      this.showButton("rotate", o),
      this.showButton("pick", s),
      this.updateWindow());
  }
  setCarryItem(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName(a.FIELD_HAND_ITEM),
      t = this._r99fda1d9e9f6a9?.getListItemByName(a.const_451);
    if (r == null || t == null || this.var_17 == null) return;
    if (e > 0 && e < 999999) {
      let o =
        this.var_17.localizations?.getLocalization(`handitem${e}`, `handitem${e}`) ??
        `handitem${e}`;
      (this.var_17.localizations?._r43eae9731f5b27("infostand.text.handitem", "item", o),
        (r.text = this.var_17.localizations?.getLocalization("infostand.text.handitem") ?? ""));
    }
    r.height = r.textHeight + 5;
    let i = r.visible,
      s = e > 0 && e < 999999;
    ((r.visible = s),
      (t.visible = s),
      s !== i && this._r99fda1d9e9f6a9?.arrangeListItems(),
      this.updateWindow());
  }
  updateWindow() {
    this._r99fda1d9e9f6a9 == null ||
      this._border == null ||
      this._r6b261897733d43 == null ||
      this._window == null ||
      ((this._r6b261897733d43.width = this._r6b261897733d43.width),
      (this._r6b261897733d43.visible = this._r6b261897733d43.width > 0),
      (this._r99fda1d9e9f6a9.height = this._r99fda1d9e9f6a9.visibleRegion.height),
      (this._border.height = this._r99fda1d9e9f6a9.height + 20),
      (this._window.width = Math.max(this._border.width, this._r6b261897733d43.width)),
      (this._window.height = this._window.visibleRegion.height),
      this._border.width < this._r6b261897733d43.width
        ? ((this._border.x = this._window.width - this._border.width), (this._r6b261897733d43.x = 0))
        : ((this._r6b261897733d43.x = this._window.width - this._r6b261897733d43.width),
          (this._border.x = 0)),
      this.var_17?.refreshContainer());
  }
  updateRentExpireField() {
    (this.setFieldText(a.FIELD_EXPIRE_TIME, !1, "N/A"), this.setFieldText(a.FIELD_EXPIRE_HEADER, !1, ""));
  }
  createWindow(e) {
    let r = this.var_17?.assets?.getAssetByName("rentable_bot_view");
    if (
      ((this._window = this.var_17?.windowManager?.buildFromXML(r?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct window from XML!");
    if (
      ((this._border = this._window.getListItemByName("info_border")),
      (this._r99fda1d9e9f6a9 = this._border?.findChildByName("infostand_element_list")),
      (this._window.name = e),
      this.var_17?.mainContainer.addChild(this._window),
      this._border?.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose),
      (this._r6b261897733d43 = this._window.getListItemByName("button_list")),
      this._r6b261897733d43 == null)
    )
      return;
    let i = [];
    this._r6b261897733d43.groupChildrenWithTag("CMD_BUTTON", i, -1);
    for (let s of i)
      (s.addEventListener(u.CLICK, this.onButtonClicked),
        s.parent?.addEventListener(y.const_755, this._r02078868257fbb));
  }
  setFieldText(e, r, t) {
    let i = this._r99fda1d9e9f6a9?.getListItemByName(e);
    (i == null && (i = this._r99fda1d9e9f6a9?.getListItemByName("description_container")?.findChildByName(e)),
      i != null && ((i.text = t), (i.visible = r)));
  }
  setFigure(e) {
    let t = this._border?.findChildByName("avatar_image")?.widget;
    t != null && (t.figure = e);
  }
  setBadge(e) {
    let t = this._border?.findChildByName("badge")?.widget;
    t != null && (t.badgeId = e);
  }
  showButton(e, r) {
    let t = this._r6b261897733d43?.getChildByName(e);
    t != null && ((t.visible = r), this.arrangeButtons());
  }
  arrangeButtons() {
    if (this._r6b261897733d43 == null) return;
    this._r6b261897733d43.width = a.BUTTONS_MAX_WIDTH;
    let e = [];
    (this._r6b261897733d43.groupChildrenWithTag("CMD_BUTTON_REGION", e, -1), e.reverse());
    let r = a.BUTTONS_MAX_WIDTH,
      t = 0;
    for (let i of e)
      i.visible &&
        (r - i.width < 0 && ((r = a.BUTTONS_MAX_WIDTH), (t += a.BUTTON_HEIGHT + a.BUTTON_MARGIN)),
        (i.x = r - i.width),
        (i.y = t),
        (r = i.x - a.BUTTON_MARGIN));
    ((this._r6b261897733d43.height = t + a.BUTTON_HEIGHT), this.updateWindow());
  }
  onButtonClicked = n((e) => {
    let r = e.target;
    if (r == null) return;
    let t = null;
    switch (r.name) {
      case "move":
        t = new RoomWidgetFurniActionMessage(RoomWidgetFurniActionMessage.MOVE, this.var_4258, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
        break;
      case "rotate":
        t = new RoomWidgetFurniActionMessage(RoomWidgetFurniActionMessage.ROTATE, this.var_4258, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
        break;
      case "pick":
        this.var_17?.roomControllerLevel?.connection?.send(new _ia6b0c0a7ea7024(this.var_1817));
        break;
      default:
        return;
    }
    t != null && this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(t);
  }, "onButtonClicked");
  _r02078868257fbb = n((e) => {
    let r = e.window?.parent;
    r != null && r.tags.indexOf("CMD_BUTTON_REGION") > -1 && e.window != null && (r.width = e.window.width);
  }, "_r02078868257fbb");
  onClose = n((e) => {
    this.var_17?.close();
  }, "onClose");
}
