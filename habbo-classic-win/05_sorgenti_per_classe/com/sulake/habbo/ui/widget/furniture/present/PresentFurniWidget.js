// Extracted from HabboAirLauncher.deobf.js, line 318373.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/present/PresentFurniWidget.as
// Obfuscated name: _iaf88645a905721

class a extends RoomWidgetBase {
  static {
    n(this, "PresentFurniWidget");
  }
  static const_86 = "floor";
  static TYPE_WALLPAPER = "wallpaper";
  static TYPE_LANDSCAPE = "landscape";
  var_3821;
  _catalog;
  _inventory;
  _roomEngine;
  _window = null;
  var_344 = -1;
  var_1062 = 0;
  var_828 = "";
  _text = "";
  var_63 = !1;
  var_490 = !1;
  _r39c9c0cc506f79 = null;
  _senderName = null;
  var_191 = -1;
  var_1059 = "";
  _redd20a0b59a048 = !1;
  var_3063 = !1;
  constructor(e, r, t, i, s, o, d, c) {
    (super(e, r, t, i),
      (this.var_3821 = s),
      (this._catalog = o),
      (this._inventory = d),
      (this._roomEngine = c));
  }
  dispose() {
    (this.hideInterface(),
      (this.var_3821 = null),
      (this._catalog = null),
      (this._inventory = null),
      (this._roomEngine = null),
      super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetPresentDataUpdateEvent.UPDATE_PACKAGEINFO, this._r89f0690ee52550),
      e.addEventListener?.(RoomWidgetPresentDataUpdateEvent.const_128, this._r89f0690ee52550),
      e.addEventListener?.(RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_IMAGE, this._r89f0690ee52550),
      e.addEventListener?.(RoomWidgetPresentDataUpdateEvent.const_470, this._r89f0690ee52550),
      e.addEventListener?.(RoomWidgetPresentDataUpdateEvent.const_1073, this._r89f0690ee52550),
      e.addEventListener?.(RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_LANDSCAPE, this._r89f0690ee52550),
      e.addEventListener?.(RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_WALLPAPER, this._r89f0690ee52550),
      e.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_912, this.onRoomObjectRemoved),
      e.addEventListener?.(RoomWidgetEcotronBoxDataUpdateEvent.UPDATE_PACKAGEINFO, this._r779995444710aa),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetPresentDataUpdateEvent.UPDATE_PACKAGEINFO, this._r89f0690ee52550),
      e.removeEventListener?.(RoomWidgetPresentDataUpdateEvent.const_128, this._r89f0690ee52550),
      e.removeEventListener?.(RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_IMAGE, this._r89f0690ee52550),
      e.removeEventListener?.(RoomWidgetPresentDataUpdateEvent.const_470, this._r89f0690ee52550),
      e.removeEventListener?.(RoomWidgetPresentDataUpdateEvent.const_1073, this._r89f0690ee52550),
      e.removeEventListener?.(RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_LANDSCAPE, this._r89f0690ee52550),
      e.removeEventListener?.(RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_WALLPAPER, this._r89f0690ee52550),
      e.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_912, this.onRoomObjectRemoved),
      e.removeEventListener?.(RoomWidgetEcotronBoxDataUpdateEvent.UPDATE_PACKAGEINFO, this._r779995444710aa));
  }
  _r89f0690ee52550 = n((e) => {
    switch (e.type) {
      case RoomWidgetPresentDataUpdateEvent.UPDATE_PACKAGEINFO:
        (this.hideInterface(),
          (this.var_490 = !1),
          (this.var_344 = e.objectId),
          (this._text = e.text),
          (this.var_63 = e.controller),
          (this._senderName = e._r650357badb431d),
          (this._r39c9c0cc506f79 = e._r1e91157013a14e),
          (this.var_3063 = e._rfc5c7e8c5fbb3e),
          this.showInterface(),
          this.showIcon(e._r9b96440f25f1f8));
        break;
      case RoomWidgetPresentDataUpdateEvent.const_1073:
      case RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_LANDSCAPE:
      case RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_WALLPAPER:
      case RoomWidgetPresentDataUpdateEvent.const_470:
      case RoomWidgetPresentDataUpdateEvent.const_128:
        if (!this.var_490) return;
        switch (
          ((this.var_344 = e.objectId),
          (this.var_1062 = e.classId),
          (this.var_828 = e.itemType),
          (this._text = e.text),
          (this.var_63 = e.controller),
          (this.var_191 = e._r2c53800a52f206),
          (this.var_1059 = e._rc6f3ed5751b766),
          (this._redd20a0b59a048 = e._r176bfeda3ea21e),
          this.showGiftOpenedInterface(),
          e.type)
        ) {
          case RoomWidgetPresentDataUpdateEvent.const_1073:
            this._r42d0ee06d9ede2("packagecard_icon_floor");
            break;
          case RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_LANDSCAPE:
            this._r42d0ee06d9ede2("packagecard_icon_landscape");
            break;
          case RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_WALLPAPER:
            this._r42d0ee06d9ede2("packagecard_icon_wallpaper");
            break;
          case RoomWidgetPresentDataUpdateEvent.const_470:
            this._r42d0ee06d9ede2("packagecard_icon_hc");
            break;
          default:
            this.showIcon(e._r9b96440f25f1f8);
            break;
        }
        break;
      case RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_IMAGE:
        if (!this.var_490) return;
        this.showIcon(e._r9b96440f25f1f8);
        break;
    }
  }, "_r89f0690ee52550");
  onRoomObjectRemoved = n((e) => {
    (e.id === this.var_344 && this.hideInterface(),
      e.id === this.var_191 &&
        this._redd20a0b59a048 &&
        ((this._redd20a0b59a048 = !1), this.updateRoomAndInventoryButtons()));
  }, "onRoomObjectRemoved");
  _r779995444710aa = n((e) => {
    e.type === RoomWidgetEcotronBoxDataUpdateEvent.UPDATE_PACKAGEINFO && this.hideInterface();
  }, "_r779995444710aa");
  _r42d0ee06d9ede2(e) {
    let t = this.assets?.getAssetByName(e)?.content;
    this.showIcon(t ?? null);
  }
  showIcon(e) {
    let r = e ?? new A(1, 1, !0, 0);
    if (this._window == null || this._window.disposed) return;
    let t = this._window.findChildByName("gift_image");
    if (t == null) return;
    (t.bitmap?.dispose(), (t.bitmap = new A(t.width, t.height, !0, 0)));
    let i = new E((t.width - r.width) / 2, (t.height - r.height) / 2);
    t.bitmap.copyPixels(r, r.rect, i);
  }
  showGiftOpenedInterface() {
    if (this.var_344 < 0) return;
    this._window?.dispose();
    let e = this.assets?.getAssetByName("packagecard_new_opened");
    if (
      ((this._window = this.windowManager?.buildFromXML(e?.content)),
      this._window?.center(),
      this._window == null)
    )
      return;
    if (!this.isUnknownSender()) {
      let o = "widget.furni.present.window.title_from";
      (this.localizations?._r43eae9731f5b27(o, "name", this._senderName ?? ""),
        (this._window.caption =
          this.localizations?.getLocalization(o, this._senderName ?? "") ?? ""));
    }
    this._window
      .findChildByName("header_button_close")
      ?.addEventListener(u.CLICK, this.onClose);
    let r = this._window.findChildByName("image_bg"),
      t = this.assets?.getAssetByName("gift_icon_background");
    r != null && t?.content != null && (r.bitmap?.dispose(), (r.bitmap = t.content.clone()));
    let i = this._window.findChildByName("gift_message");
    if (i != null)
      if (this._text != null) {
        let o = "widget.furni.present.message_opened";
        (this.isSpacesItem() && (o = "widget.furni.present.spaces.message_opened"),
          this.localizations?._r43eae9731f5b27(o, "product", this._text),
          (i.text =
            this.var_828 === class_1803.PRODUCT_TYPE_CLUB
              ? this._text
              : (this.localizations?.getLocalization(o, this._text) ?? this._text)));
      } else i.visible = !1;
    let s = this._window.findChildByName("give_gift_button");
    if (s != null)
      if (this.isUnknownSender()) s.visible = !1;
      else {
        let o = "widget.furni.present.give_gift";
        (this.localizations?._r43eae9731f5b27(o, "name", this._senderName ?? ""),
          (s.caption = this.localizations?.getLocalization(o, this._senderName ?? "") ?? ""),
          s.addEventListener(u.CLICK, this._re397c938226f5b));
      }
    (this.prepareAvatarImageContainer(),
      this.updateGiftDialogAvatarImage(this._r39c9c0cc506f79 ?? ""),
      this.updateRoomAndInventoryButtons(),
      this.selectGiftedObject());
  }
  isSpacesItem() {
    let e = !1;
    if (this.var_828 === class_1803.PRODUCT_TYPE_ITEM) {
      let r = this._r0b5c5fd8bc8b16.container?.sessionDataManager?.getWallItemData(this.var_1062);
      r != null &&
        (e =
          r.className === a.const_86 ||
          r.className === a.TYPE_LANDSCAPE ||
          r.className === a.TYPE_WALLPAPER);
    }
    return e;
  }
  _r1cb4948931d935() {
    return this.var_828 === class_1803.PRODUCT_TYPE_CLUB;
  }
  updateRoomAndInventoryButtons() {
    if (this._window == null || this._window.disposed) return;
    let e = this.isSpacesItem(),
      r = this._r1cb4948931d935(),
      t = this._window.findChildByName("keep_in_room_button");
    t != null &&
      (t.addEventListener(u.CLICK, this._r3882b3f4ef758f), (t.visible = this._redd20a0b59a048 && !e && !r));
    let i = this._window.findChildByName("place_in_room_button");
    i != null &&
      (i.addEventListener(u.CLICK, this._r45b9f2449fce0e),
      (i.visible = !this._redd20a0b59a048 && !e && !r),
      e && i.disable());
    let s = this._window.findChildByName("put_in_inventory_button");
    s != null && (s.addEventListener(u.CLICK, this._r36b364f64c5b0f), s.enable(), (s.visible = !e && !r));
    let o = this._window.findChildByName("separator"),
      d = this._window.findChildByName("give_container");
    (o != null && (o.visible = this.isUnknownSender()),
      d != null && (d.visible = !this.isUnknownSender()),
      this._window.findChildByName("button_list")?.arrangeListItems(),
      this._window.findChildByName("give_element_list")?.arrangeListItems(),
      this._window.findChildByName("element_list")?.arrangeListItems(),
      this._window.resizeToFitContent());
  }
  _r79c5f9163e6c4e() {
    ((this.var_490 = !1),
      (this.var_191 = -1),
      (this._redd20a0b59a048 = !1),
      this.hideInterface());
  }
  _r3882b3f4ef758f = n((e) => {
    this._r79c5f9163e6c4e();
  }, "_r3882b3f4ef758f");
  _r45b9f2449fce0e = n((e) => {
    if ((e.target?.disable(), this.var_191 > 0 && !this._redd20a0b59a048)) {
      let t = null;
      switch (this.var_1059) {
        case class_1803.PRODUCT_TYPE_STUFF:
          ((t = this._inventory?._rc71de7ee01635d(-this.var_191) ?? null),
            this._r8f79b32ee20188(t) && this._inventory?._rc192f9aaf6c144(this.var_191));
          break;
        case class_1803.PRODUCT_TYPE_ITEM:
          ((t = this._inventory?._reb9eeb9dd127ca(this.var_191) ?? null),
            this._r8f79b32ee20188(t) && this._inventory?._rc192f9aaf6c144(this.var_191));
          break;
        case class_1803.PRODUCT_TYPE_PET:
          this._inventory?._re99ec0cc74990e(this.var_191, !1) &&
            this._inventory?._rc0eaf8c4268954(this.var_191);
          break;
      }
    }
    this._r79c5f9163e6c4e();
  }, "_r45b9f2449fce0e");
  _r8f79b32ee20188(e) {
    return e == null ||
      e.category === class_1901.FLOOR ||
      e.category === class_1901.WALL_PAPER ||
      e.category === class_1901.LANDSCAPE
      ? !1
      : (this._inventory?._r50430888e52269(e) ?? !1);
  }
  _r36b364f64c5b0f = n((e) => {
    if ((e.target?.disable(), this.var_191 > 0 && this._redd20a0b59a048))
      if (this.var_1059 === class_1803.PRODUCT_TYPE_PET)
        this._r0b5c5fd8bc8b16.container?._r2eac8239a09fe7?._rd761fc0a324cdb(this.var_191);
      else {
        let t = this._r0b5c5fd8bc8b16.container?._r2eac8239a09fe7?.roomId ?? 0,
          i = this._roomEngine?._ra1f5cb56d0c2d8(t, this.var_191, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
        i != null &&
          this._roomEngine?._r9cc46b2b079405(i.getId(), RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE, RoomObjectOperationEnum.OBJECT_PICKUP);
      }
    this._r79c5f9163e6c4e();
  }, "_r36b364f64c5b0f");
  showInterface() {
    if (this.var_344 < 0) return;
    this._window?.dispose();
    let e = this.assets?.getAssetByName("packagecard_new");
    if (
      ((this._window = this.windowManager?.buildFromXML(e?.content)),
      this._window?.center(),
      this._window == null)
    )
      return;
    if (!this.isUnknownSender()) {
      let d = "widget.furni.present.window.title_from";
      (this.localizations?._r43eae9731f5b27(d, "name", this._senderName ?? ""),
        (this._window.caption =
          this.localizations?.getLocalization(d, this._senderName ?? "") ?? ""));
    }
    this._window
      .findChildByName("header_button_close")
      ?.addEventListener(u.CLICK, this.onClose);
    let r = this._window.findChildByName("gift_card");
    if (r != null) {
      let d = this.var_3821?.getProperty("catalog.gift_wrapping_new.gift_card") ?? "";
      d !== "" && (r.assetUri = "${image.library.url}Giftcards/" + d + ".png");
    }
    if (
      (this.prepareAvatarImageContainer(),
      this.isUnknownSender() ? this.updateUnknownSenderAvatarImage() : this.updateGiftDialogAvatarImage(this._r39c9c0cc506f79 ?? ""),
      this.var_3063)
    ) {
      let d = this._window.findChildByName("gift_card");
      d != null && (d.assetUri = "catalogue_giftcard_staff");
    } else {
      let d = this._window.findChildByName("warning_foreground_border");
      d != null && (d.color = 11599948);
      let c = this._window.findChildByName("warning_icon");
      c != null &&
        ((c.assetUri = "catalogue_icon_alert_s"), (c.width = 26), (c.height = 26), (c.x = 22), (c.y = 12));
      let f = this._window.findChildByName("warning_text"),
        l = "gift.untrusted.banner.text";
      (this.localizations?._r43eae9731f5b27(l, "name", "not trusted gift sender"),
        f != null && (f.text = this.localizations?.getLocalization(l, this._senderName ?? "") ?? ""));
    }
    let t = this._window.findChildByName("message_text");
    t != null && (t.text = this._text);
    let i = this._window.findChildByName("message_from");
    if (i != null)
      if (this.isUnknownSender()) i.visible = !1;
      else {
        let d = "widget.furni.present.message_from";
        (this.localizations?._r43eae9731f5b27(d, "name", this._senderName ?? ""),
          (i.text = this.localizations?.getLocalization(d, this._senderName ?? "") ?? ""),
          i.addEventListener(u.CLICK, this._rd468f2b0fb1e72));
      }
    let s = this._window.findChildByName("button_list");
    if (s != null) {
      let d = s.getListItemByName("give_gift_button");
      if (d != null) {
        if (!this.isUnknownSender()) {
          let f = "widget.furni.present.give_gift";
          (this.localizations?._r43eae9731f5b27(f, "name", this._senderName ?? ""),
            (d.caption = this.localizations?.getLocalization(f, this._senderName ?? "") ?? ""));
        }
        (this.var_63 && d.addEventListener(u.CLICK, this._rab23dcc201e5fc),
          (!this.var_63 || this.isUnknownSender()) && (d.visible = !1));
      }
      let c = this._window.findChildByName("open_gift_button");
      (c != null &&
        (this.var_63 ? c.addEventListener(u.CLICK, this._r5204793499f4d1) : (c.visible = !1)),
        s.arrangeListItems());
    }
    let o = this._window.findChildByName("element_list");
    if (o != null) {
      ((o.x = o.spacing), this._window.resizeToFitContent());
      let d = o.parent;
      d != null && (d.height = o.x + o.height);
    }
  }
  isUnknownSender() {
    return this._senderName == null || this._senderName.length === 0;
  }
  onClose = n((e) => {
    ((this.var_490 = !1), this.hideInterface());
  }, "onClose");
  _rab23dcc201e5fc = n((e) => {
    (this._r78f9ef42d9a404(),
      this._r0b5c5fd8bc8b16.container?._r697386a8fb5bf8?.trackEventLog(
        "Catalog",
        "click",
        "client.return_gift_from_open_giftcard.clicked",
      ));
  }, "_rab23dcc201e5fc");
  _re397c938226f5b = n((e) => {
    (this._r78f9ef42d9a404(),
      this._r0b5c5fd8bc8b16.container?._r697386a8fb5bf8?.trackEventLog(
        "Catalog",
        "click",
        "client.return_gift_from_opened_present.clicked",
      ));
  }, "_re397c938226f5b");
  _r78f9ef42d9a404() {
    (!this.isUnknownSender() &&
      this._catalog != null &&
      (this._catalog._r047e7cd71777de = this._senderName),
      this._catalog?.openCatalogPage(CatalogPageName.CATALOG_PAGE_GIFT_SHOP));
  }
  _rc280e702c544c6() {
    this.isUnknownSender() || this._catalog?.connection?.send(new UnkMessageComposer_1args_eb6736(this._senderName ?? ""));
  }
  _r2725189e8139c5 = n((e) => {
    this._rc280e702c544c6();
  }, "_r2725189e8139c5");
  _rd468f2b0fb1e72 = n((e) => {
    this._rc280e702c544c6();
  }, "_rd468f2b0fb1e72");
  _r5204793499f4d1 = n((e) => {
    this.sendOpen();
  }, "_r5204793499f4d1");
  _rac9072fcec5669(e) {
    let r = this._r0b5c5fd8bc8b16.container?._rf0eb5f07c94cfb;
    if (r == null || e == null || e.length === 0) return null;
    let t = r._r274f6640e76241(e, fr.LARGE, null, this),
      i = t?._rb2bd48e3b4d265(class_2123.HEAD) ?? null;
    return (t?.dispose(), i);
  }
  avatarImageReady(e) {
    this._window == null ||
      this._window.disposed ||
      (e === this._r39c9c0cc506f79 && this.updateGiftDialogAvatarImage(e));
  }
  prepareAvatarImageContainer() {
    let e = this._window?.findChildByName("avatar_image_region");
    e != null && (this.isUnknownSender() ? e.disable() : e.addEventListener(u.CLICK, this._r2725189e8139c5));
  }
  updateGiftDialogAvatarImage(e) {
    let r = this._rac9072fcec5669(e);
    r != null && this.updateAvatarImageContainer(r);
  }
  updateUnknownSenderAvatarImage() {
    let r = this.assets?.getAssetByName("gift_incognito")?.content;
    r != null && this.updateAvatarImageContainer(r.clone());
  }
  updateAvatarImageContainer(e) {
    if (e == null || this._window == null) return;
    let r = this._window.findChildByName("avatar_image");
    if (r == null) return;
    let t = this._window.findChildByName("staff_image"),
      i = this._window.findChildByName("avatar_image_container");
    (this.var_3063 && this.isUnknownSender()
      ? (r.disable(), t != null && i != null && (t.y = i.height / 2 - r.height / 2))
      : i != null &&
        ((r.bitmap = e),
        (r.width = e.width),
        (r.height = e.height),
        (r.x = i.width / 2 - r.width / 2),
        (r.y = i.height / (this.var_3063 ? 1.5 : 2) - r.height / 2)),
      !this.var_3063 && t != null && t.parent?.removeChild(t));
  }
  hideInterface() {
    (this._window?.dispose(),
      (this._window = null),
      this.var_490 || (this.var_344 = -1),
      (this._text = ""),
      (this.var_63 = !1));
  }
  sendOpen() {
    this.var_490 ||
      this.var_344 === -1 ||
      !this.var_63 ||
      ((this.var_490 = !0),
      this.hideInterface(),
      this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetPresentOpenMessage(RoomWidgetPresentOpenMessage.const_1388, this.var_344)));
  }
  selectGiftedObject() {
    if (this.var_191 <= 0 || !this._redd20a0b59a048) return;
    let e = this._roomEngine?.activeRoomId ?? 0;
    if (this.var_1059 === class_1803.PRODUCT_TYPE_PET) {
      let r = this._roomEngine?.getRoomObjectCount(e, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? 0;
      for (let t = 0; t < r; t++) {
        let i = this._roomEngine?.getRoomObjectWithIndex(e, t, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
        if (i == null) continue;
        let s = this._r0b5c5fd8bc8b16.container?._r2eac8239a09fe7?.getUserDataByIndex?.userDataManager(
          i.getId(),
        );
        if (s != null && s.webID === this.var_191) {
          this._roomEngine?._r5def02e220e83a(e, s._r2fdf1f24b1e612, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
          break;
        }
      }
    } else this._roomEngine?._r5def02e220e83a(e, this.var_191, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
  }
  get _r0b5c5fd8bc8b16() {
    return this._handler;
  }
}
