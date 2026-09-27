// Extracted from HabboAirLauncher.deobf.js, line 256706.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/roomsettings/RoomCreateViewCtrl.as

class a {
  constructor(e) {
    this._navigator = e;
    ((this._r922070854330e9 = new UnkEventDispatcherWrapperSubclass_05394e(100)),
      this._r922070854330e9.addEventListener(DeBouncer.addEventListener, this._re328e24ab5154f),
      this._r80b80a5eb7af72());
  }
  static {
    n(this, "RoomCreateViewCtrl");
  }
  static ROOM_LIMIT_HC = 75;
  static ROOM_LIMIT_NON_SUBSCRIBER = 50;
  _content = null;
  var_122 = null;
  _layouts = [];
  _selectedLayout = null;
  _r922070854330e9 = null;
  _r0661f00b21b97c = !0;
  var_3023 = null;
  var_3893 = null;
  var_1328 = null;
  _re2bd229e0c764a = null;
  _rd2f30fd1f9e54a = null;
  _re54722dfcdb87b = [];
  dispose() {
    this._r922070854330e9 != null &&
      (this._r922070854330e9.removeEventListener(DeBouncer.addEventListener, this._re328e24ab5154f),
      this._r922070854330e9.reset(),
      (this._r922070854330e9 = null));
  }
  hide() {
    this._content != null && (this._content.visible = !1);
  }
  show() {
    (this.prepare(),
      this._content != null &&
        ((this._content.visible = !0),
        this.refresh(),
        this._content.activate(),
        this._r922070854330e9?.start()));
  }
  refresh() {
    (this.var_3023?.goBackToInitialState(),
      this.var_3023?.input != null && (this.var_3023.input._errorPopup = 4294967295),
      this.var_3893?.goBackToInitialState(),
      this.var_3893?.input != null && (this.var_3893.input._errorPopup = 4294967295),
      this._rd2f30fd1f9e54a != null && (this._rd2f30fd1f9e54a.selection = 0),
      this.var_1328 != null && (this.var_1328.selection = 0),
      (this._selectedLayout = this._layouts[0] ?? null),
      this.refreshRoomThumbnails(),
      this._navigator?.sessionData.hasVip
        ? this.refreshMaxVisitors(a.ROOM_LIMIT_HC)
        : this.refreshMaxVisitors(a.ROOM_LIMIT_NON_SUBSCRIBER),
      this.refreshSelection());
  }
  _r80b80a5eb7af72() {
    (this._layouts.push(new UnkClass_69a645(dr.NO_CLUB, 104, "a")),
      this._layouts.push(new UnkClass_69a645(dr.NO_CLUB, 94, "b")),
      this._layouts.push(new UnkClass_69a645(dr.NO_CLUB, 36, "c")),
      this._layouts.push(new UnkClass_69a645(dr.NO_CLUB, 84, "d")),
      this._layouts.push(new UnkClass_69a645(dr.NO_CLUB, 80, "e")),
      this._layouts.push(new UnkClass_69a645(dr.NO_CLUB, 80, "f")),
      this._layouts.push(new UnkClass_69a645(dr.NO_CLUB, 416, "i")),
      this._layouts.push(new UnkClass_69a645(dr.NO_CLUB, 320, "j")),
      this._layouts.push(new UnkClass_69a645(dr.NO_CLUB, 448, "k")),
      this._layouts.push(new UnkClass_69a645(dr.NO_CLUB, 352, "l")),
      this._layouts.push(new UnkClass_69a645(dr.NO_CLUB, 384, "m")),
      this._layouts.push(new UnkClass_69a645(dr.NO_CLUB, 372, "n")),
      this._layouts.push(new UnkClass_69a645(dr.CLUB, 80, "g")),
      this._layouts.push(new UnkClass_69a645(dr.CLUB, 74, "h")),
      this._layouts.push(new UnkClass_69a645(dr.CLUB, 416, "o")),
      this._layouts.push(new UnkClass_69a645(dr.CLUB, 352, "p")),
      this._layouts.push(new UnkClass_69a645(dr.CLUB, 304, "q")),
      this._layouts.push(new UnkClass_69a645(dr.CLUB, 336, "r")),
      this._layouts.push(new UnkClass_69a645(dr.CLUB, 748, "u")),
      this._layouts.push(new UnkClass_69a645(dr.CLUB, 438, "v")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 540, "t")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 512, "w")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 396, "x")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 440, "y")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 456, "z")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 208, "0")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 1009, "1")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 1044, "2")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 183, "3")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 254, "4")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 1024, "5")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 801, "6")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 354, "7")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 888, "8")),
      this._layouts.push(new UnkClass_69a645(dr.VIP, 926, "9")),
      this._layouts.push(new UnkClass_69a645(-1, 2500, "snowwar1")),
      this._layouts.push(new UnkClass_69a645(-1, 2500, "snowwar2")));
  }
  _re328e24ab5154f = n((e) => {
    let r = this._selectedLayout?.view?.findChildByName("select_arrow");
    if (r == null) return;
    let t = 0,
      i = 15,
      s = Math.abs(r.y - t) < 2 || Math.abs(r.y - i) < 2 ? 1 : 2;
    ((r.y += this._r0661f00b21b97c ? s : -s),
      r.y < t
        ? ((this._r0661f00b21b97c = !0), (r.y = t + 1))
        : r.y > i && ((this._r0661f00b21b97c = !1), (r.y = i - 1)));
  }, "_re328e24ab5154f");
  prepare() {
    if (this._content != null || this._navigator == null) return;
    if (
      ((this._content = this._navigator.getXmlWindow("roc_create_room")),
      (this.var_122 = this._content?.findChildByName("layout_item_list")),
      this._content == null || this.var_122 == null)
    )
      throw new Error("Failed to build roc_create_room");
    (this.refreshRoomThumbnails(),
      a.addMouseClickListener(this.getCreateButton(), this._rae991e0df1a3a5),
      a.addMouseClickListener(this.getCancelButton(), this._r9a98d7761d81c4),
      a.addMouseClickListener(this._content.findChildByTag("close"), this._r9a98d7761d81c4),
      (this.var_3023 = new TextFieldManager(
        this._navigator,
        this._content.findChildByName("room_name_input"),
        25,
        null,
        this._navigator.getText("navigator.createroom.roomnameinfo"),
      )),
      (this.var_3893 = new TextFieldManager(
        this._navigator,
        this._content.findChildByName("room_desc_input"),
        128,
        null,
        this._navigator.getText("navigator.createroom.roomdescinfo"),
      )),
      this.prepareCategorySelection(),
      this.prepareTradeModeSelection(),
      this.refreshMaxVisitors(50));
    let e = Fr._r7edb7b140e7403(this._content.desktop, this._content.width, this._content.height);
    ((this._content.x = e.x), (this._content.y = e.y));
  }
  static addMouseClickListener(e, r) {
    e != null && (e.setParamFlag(class_2094._r26338c8d88c4e5, !0), e.addEventListener(u.CLICK, r));
  }
  prepareCategorySelection() {
    this.var_1328 = this._content?.findChildByName("categories_list");
    let e = [];
    this._re54722dfcdb87b = [];
    for (let r of this._navigator?.data._r9da3e74587beda ?? [])
      !r.automatic &&
        (!r._r342f9f99356a01 || this._navigator?.sessionData.hasSecurity(class_1794.COMMUNITY)) &&
        (this._re54722dfcdb87b.push(r), e.push(r.visibleName));
    (this.var_1328?.populate(e),
      this.var_1328 != null && (this.var_1328.selection = 0));
  }
  prepareTradeModeSelection() {
    ((this._rd2f30fd1f9e54a = this._content?.findChildByName("trade_settings_list")),
      this._rd2f30fd1f9e54a?.populate([
        "${navigator.roomsettings.trade_not_allowed}",
        "${navigator.roomsettings.trade_not_with_Controller}",
        "${navigator.roomsettings.trade_allowed}",
      ]),
      this._rd2f30fd1f9e54a != null && (this._rd2f30fd1f9e54a.selection = 0));
  }
  refreshMaxVisitors(e) {
    this._re2bd229e0c764a = this._content?.findChildByName("visitors_list");
    let r = [];
    for (let t = 10; t <= e; t += 5) r.push(`${t}`);
    (this._re2bd229e0c764a?.populate(r),
      this._re2bd229e0c764a != null && (this._re2bd229e0c764a.selection = 0));
  }
  refreshSelection() {
    for (let e of this._layouts) {
      if (e.view == null) continue;
      let r = e === this._selectedLayout;
      ((e.view.findChildByName("bg_sel").visible = r), (e.view.findChildByName("bg_unsel").visible = !r));
      let t = e.view.findChildByName("tile_size_txt");
      (t != null && ((t.textColor = r ? 4294967295 : 4278190080), (t.color = r ? 4285432196 : 4291546059)),
        this._navigator?.refreshButton(e.view, "tile_icon_black", !r, null, 0),
        this._navigator?.refreshButton(e.view, "tile_icon_white", r, null, 0),
        this._navigator?.refreshButton(e.view, "select_arrow", r, null, 0));
    }
  }
  refreshRoomThumbnails() {
    if (this.var_122 == null || this._navigator == null) return;
    for (; this.var_122.numListItems > 0;) this.var_122.removeListItemAt(0)?.destroy();
    for (let i of this._layouts) (i.view?.destroy(), (i.view = null));
    let e = 0,
      r = null;
    for (let i = 0; i < this._layouts.length; i++) {
      let s = this._layouts[i];
      this.isAllowed(s, !1) &&
        (e === 0 && ((r = this.getRow()), this.var_122.addListItem(r)),
        r != null && this.addThumbnail(r, s, e % 2 === 0),
        (e = e === 0 ? 1 : 0));
    }
    this.refreshSelection();
    let t = null;
    if (
      (this._navigator.sessionData.clubLevel < dr.VIP &&
        !this._navigator.getBoolean("habbo_club_buy_disabled") &&
        (t = "roc_vip_promo"),
      t != null)
    ) {
      let i = this._navigator.getXmlWindow(t);
      if (i != null) {
        let s = i.findChildByName("link");
        (a.addMouseClickListener(s, this._rd772dd80cfe268), this.var_122.addListItem(i));
      }
    }
  }
  addThumbnail(e, r, t) {
    let i = this._navigator?.getXmlWindow("roc_room_thumbnail");
    if (i == null) throw new Error("Failed to build roc_room_thumbnail");
    (i.tags.push(r.name), t || (i.x = i.width), a.addMouseClickListener(i, this.onContPicClick));
    let s = i.findChildByName("bg_pic");
    (s != null && (s.assetUri = `\${image.library.url}newroom/model_${r.name}.png`),
      e.addChild(i),
      (e.width = 2 * i.width),
      (e.height = i.height),
      (r.view = i));
    let o = i.findChildByName("tile_size_txt");
    o != null &&
      (o.text = `${r._rb8aad2b8f0c371} ${this._navigator?.getText("navigator.createroom.tilesize") ?? ""}`);
    let d = i.findChildByName("club_icon");
    d != null && (d.visible = r._r5870cd9b4deac1 === dr.CLUB || r._r5870cd9b4deac1 === dr.VIP);
  }
  isAllowed(e, r = !0) {
    switch (e._r5870cd9b4deac1) {
      case dr.NO_CLUB:
        return !0;
      case dr.CLUB:
        return !r || !!this._navigator?.sessionData.hasClub;
      case dr.VIP:
        return !r || !!this._navigator?.sessionData.hasVip;
      default:
        return !!this._navigator?.sessionData.hasSecurity(class_1794.EMPLOYEE);
    }
  }
  getRow() {
    let e = this._navigator?.windowManager.createWindow(
      "",
      "",
      HabboWindowType.CONTAINER,
      HabboWindowStyle.DEFAULT,
      class_2094._r5f5ff9955e2bf4,
      new D(0, 0, 100, 300),
      null,
      0,
    );
    if (e == null) throw new Error("Failed to create room create row");
    return e;
  }
  isMandatoryFieldsFilled() {
    return (
      this.var_3023?._r69708b20ae80da(
        this._navigator?.getText("navigator.createroom.nameerr") ?? "",
      ) ?? !1
    );
  }
  getCreateButton() {
    return this._content?.findChildByName("create_button");
  }
  getCancelButton() {
    return this._content?.findChildByName("back_button");
  }
  onChooseLayout(e, r) {
    let t = this.getLayout(r);
    this.isAllowed(t, !0)
      ? ((this._selectedLayout = t), this.refreshSelection())
      : this._navigator?._r2a0df8adec219d("RoomCreateViewCtrl");
  }
  getLayout(e) {
    return this.findLayout(e.tags[0] ?? "");
  }
  findLayout(e) {
    return this._layouts.find((r) => r.name === e) ?? this._layouts[0];
  }
  onContPicClick = n((e) => {
    let r = e.target;
    r != null && this.onChooseLayout(e, r);
  }, "onContPicClick");
  _r9a98d7761d81c4 = n((e) => {
    this.close();
  }, "_r9a98d7761d81c4");
  _rd772dd80cfe268 = n((e) => {
    this._navigator?._r2a0df8adec219d("RoomCreateViewCtrl");
  }, "_rd772dd80cfe268");
  _rae991e0df1a3a5 = n((e) => {
    if (
      this._navigator == null ||
      this._selectedLayout == null ||
      this._re2bd229e0c764a == null ||
      this._rd2f30fd1f9e54a == null ||
      this.var_1328 == null ||
      !this.isMandatoryFieldsFilled()
    )
      return;
    let r = this.var_3023?.getText() ?? "",
      t = this.var_3893?.getText() ?? "",
      i = `model_${this._selectedLayout.name}`,
      s = this._re2bd229e0c764a.enumerateSelection()[this._re2bd229e0c764a.selection],
      o = parseInt(typeof s == "string" ? s : "10", 10),
      d = 0;
    for (let f = 0; f < this._re54722dfcdb87b.length; f++) {
      let l = this._re54722dfcdb87b[f];
      if (this.var_1328.selection === f) {
        d = l.nodeId;
        break;
      }
    }
    let c = this._rd2f30fd1f9e54a.selection;
    this._navigator.send(new UnkMessageComposer_6args_222609(r, t, i, d, o, c));
  }, "_rae991e0df1a3a5");
  close() {
    (this._content != null && (this._content.visible = !1), this._r922070854330e9?.reset());
  }
}
