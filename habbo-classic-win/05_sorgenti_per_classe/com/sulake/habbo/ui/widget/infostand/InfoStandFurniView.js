// Extracted from HabboAirLauncher.deobf.js, line 320001.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandFurniView.as
// Obfuscated name: _i0f10dd31918f8e

class a {
  static {
    n(this, "InfoStandFurniView");
  }
  static const_1096 = -12345678;
  static const_218 = -12345679;
  static _r7aac41c0e7e420 = 0;
  static const_971 = 1;
  static const_165 = 2;
  _window = null;
  var_495 = null;
  _rc00db4ecbbac07 = null;
  _border = null;
  var_34 = null;
  _r0cabb5f3546286 = null;
  var_355 = null;
  _rc1e4df667e35be = null;
  _re653c033b3caa6 = null;
  _rd19d99b6a51f87 = null;
  var_17;
  _r99fda1d9e9f6a9 = null;
  _pickupMode = a._r7aac41c0e7e420;
  var_1514 = 0;
  _data = null;
  constructor(e, r) {
    ((this.var_17 = e), this.createWindow(r));
  }
  dispose() {
    ((this._r0cabb5f3546286 = null),
      (this.var_355 = null),
      (this._rc1e4df667e35be = null),
      (this._re653c033b3caa6 = null),
      (this._rd19d99b6a51f87 = null),
      (this.var_34 = null),
      (this.var_495 = null),
      (this._rc00db4ecbbac07 = null),
      (this._r99fda1d9e9f6a9 = null),
      (this._border = null),
      (this._data = null),
      (this.var_17 = null),
      this._window?.dispose(),
      (this._window = null));
  }
  get window() {
    return this._window;
  }
  set name(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("name_text");
    r != null && ((r.text = e), (r.visible = !0), (r.height = r.textHeight + 5), this.updateWindow());
  }
  set isNft(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("nft_indicator");
    if (r != null) {
      if (((r.height = e ? 22 : 0), (r.visible = e), e)) {
        let t = this._border?.findChildByName("nft_icon"),
          s = this.var_17?.assets?.getAssetByName("icon_nft")?.content;
        t != null &&
          s != null &&
          ((t.bitmap = new A(t.width, t.height, !0, 0)), t.bitmap.copyPixels(s, s.rect, new E(0, 0)));
      }
      this.updateWindow();
    }
  }
  set furniImage(e) {
    this.setImage(e, "image");
  }
  set description(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("description_text");
    r != null && ((r.text = e), (r.height = r.textHeight + 5), this.updateWindow());
  }
  set groupName(e) {
    let r = this._border?.findChildByName("group_name");
    r != null && ((r.caption = e), (r.visible = !0));
  }
  set groupBadgeId(e) {
    let r = this._border?.findChildByName("group_badge_image"),
      t = r?.widget;
    t != null && ((t.badgeId = e), (t.groupId = this._data?.groupId ?? 0), r != null && (r.visible = !0));
  }
  update(e) {
    ((this._data ??= new InfoStandFurniData()),
      this._data.setData(e),
      this._border != null &&
        (nd.isBuilderClubId(e.id)
          ? ((this._border.color = 3349504), (this.spacerColor = 4283710744))
          : nd.isTempId(e.id)
            ? ((this._border.color = 1321796), (this.spacerColor = 4281289835))
            : ((this._border.color = 4013373), (this.spacerColor = 4281545523))));
    let t = (this.var_17?.roomControllerLevel?._r2eac8239a09fe7 ?? null)?.playTestMode ?? !1,
      i = this.var_17?.roomControllerLevel?.roomEngine?._r60c579076a73f1 ?? !1;
    ((this.name = e.name),
      (this.description = e.description),
      (this.furniImage = e.image),
      (this.expiration = e.expiration),
      (this.isNft = e.isNft),
      nd.isBuilderClubId(e.id)
        ? this.setOwnerInfo(a.const_1096, e.ownerName)
        : nd.isTempId(e.id)
          ? this.setOwnerInfo(a.const_218, e.ownerName)
          : this.setOwnerInfo(e.ownerId, e.ownerName));
    let s = !1,
      o = !1,
      d = !1,
      c = !1;
    ((i ||
      (!t &&
        (e._rea9739215487be >= RoomControllerLevelEnum.ROOM_CONTROLLER ||
          e.isOwner ||
          e.isRoomOwner ||
          e.isAnyRoomController))) &&
      ((s = !0), (o = !e.isWallItem)),
      e.isAnyRoomController && (d = !0));
    let f = e._rea9739215487be >= RoomControllerLevelEnum.ROOM_CONTROLLER;
    ((this.var_17?.config?.getBoolean("infostand.use.button.enabled") ?? !1) &&
      (e.usagePolicy === RoomWidgetFurniInfoUsagePolicyEnum.const_1330 && (c = !0),
      !t &&
        ((e.usagePolicy === RoomWidgetFurniInfoUsagePolicyEnum.CONTROLLER && f) ||
          (e.extraParam === RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_JUKEBOX && f) ||
          (e.extraParam === RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_PRODUCT && f)) &&
        (c = !0),
      i && (c = !0)),
      this.updatePickupMode(e, t),
      this.showButton("move", s),
      this.showButton("rotate", o),
      this.showButton("use", c),
      this.showButton(
        "wired_inspect",
        !t && this.var_17?.roomControllerLevel?._rddef5461e8915c?._reb1c224373ab03?.() === !0,
      ),
      this.showAdFurnitureDetails(d),
      this.showGroupInfo(e.groupId > 0));
    let b = e.stuffData,
      _ = this.catalog;
    (this.updatePurchaseButtonVisibility(
      e.isOwner,
      e.expiration >= 0,
      e.purchaseOfferId >= 0,
      e.rentOfferId >= 0,
      e.purchaseCouldBeUsedForBuyout,
      e.rentCouldBeUsedForBuyout,
      e.bcOfferId >= 0 && e.availableForBuildersClub && (_?._rfd14a991f3d0b9() ?? !1),
    ),
      this.showLimitedItem((b?.uniqueSerialNumber ?? 0) > 0, b),
      this.showRarityItem((b?.rarityLevel ?? -1) >= 0, b));
    let h = this.products(this._data);
    (this.showChestData(h?.category === class_1901.FURNI_CHEST, h?.category === class_1901.COINS_CHEST, b),
      this.var_34 != null &&
        (this.var_34.visible = s || o || this._pickupMode !== a._r7aac41c0e7e420 || c),
      this.updateCustomVarsWindow(),
      this.updateWindow());
  }
  updateSongInfo(e) {}
  get catalog() {
    return this.var_17?.roomControllerLevel?.catalog ?? null;
  }
  get _r697386a8fb5bf8() {
    return this.var_17?.roomControllerLevel?._r697386a8fb5bf8 ?? null;
  }
  createWindow(e) {
    let r = this.var_17?.assets?.getAssetByName("furni_view");
    if (
      ((this._window = this.var_17?.windowManager?.buildFromXML(r?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct window from XML!");
    if (
      ((this._border = this._window.getListItemByName("info_border")),
      (this.var_34 = this._window.getListItemByName("button_list")),
      (this.var_495 = this._window.getListItemByName("custom_variables")),
      this.var_495 != null &&
        !(
          this.var_17?.roomControllerLevel?.sessionDataManager?.hasSecurity(class_1794.MODERATOR) ?? !1
        ) &&
        (this.var_495.dispose(), (this.var_495 = null)),
      this.var_495 != null)
    ) {
      this.var_495.procedure = this._r6f73f615b6a18a;
      let o = this.var_495.findChildByName("variable_list");
      this._rc00db4ecbbac07 = o?.removeListItemAt(0) ?? null;
    }
    (this._border != null && (this._r99fda1d9e9f6a9 = this._border.findChildByName("infostand_element_list")),
      (this._window.name = e),
      this.var_17?.mainContainer.addChild(this._window));
    let t = this._border?.findChildByTag("close");
    if ((t?.addEventListener(u.CLICK, this.onClose), this.var_34 != null))
      for (let o = 0; o < this.var_34.numListItems; o++)
        this.var_34.getListItemAt(o)?.addEventListener(u.CLICK, this.onButtonClicked);
    ((this._r0cabb5f3546286 = this._border?.findChildByTag("catalog") ?? null),
      this._r0cabb5f3546286?.addEventListener(u.CLICK, this._r7135eb8d4233fa),
      (this.var_355 = this._border?.findChildByName("bc_place_button") ?? null),
      this.var_355?.addEventListener(u.CLICK, this._r8e08257e0f578d),
      (this._rc1e4df667e35be = this._border?.findChildByName("rent_button") ?? null),
      this._rc1e4df667e35be?.addEventListener(u.CLICK, this._rb77933fef3ae25),
      (this._re653c033b3caa6 = this._border?.findChildByName("extend_button") ?? null),
      this._re653c033b3caa6?.addEventListener(u.CLICK, this._rfaad168e4b59af),
      (this._rd19d99b6a51f87 = this._border?.findChildByName("buyout_button") ?? null),
      this._rd19d99b6a51f87?.addEventListener(u.CLICK, this._r1e85c3dc5fed85));
    let i = this._r99fda1d9e9f6a9?.getListItemByName("owner_region");
    (i != null &&
      (i.addEventListener(u.CLICK, this._r18053e6db46985),
      i.addEventListener(u.OVER, this._r18053e6db46985),
      i.addEventListener(u.OUT, this._r18053e6db46985)),
      this._border
        ?.findChildByName("group_details_container")
        ?.addEventListener(u.CLICK, this._r577b935e20ba29));
  }
  _r6f73f615b6a18a = n((e, r) => {
    let t = e,
      i = r;
    if (!(t?.type !== u.CLICK || i == null || this.var_495 == null))
      switch (i.name) {
        case "set_values": {
          let s = new B(),
            o = this.var_495.findChildByName("variable_list");
          if (o == null) return;
          for (let d = 0; d < o.numListItems; d++) {
            let c = o.getListItemAt(d),
              f = c?.findChildByName("value");
            c != null && f != null && s.add(c.name, f.caption);
          }
          this.var_17?._r8e2ae19142ed50(s);
          break;
        }
      }
  }, "_r6f73f615b6a18a");
  _r1e85c3dc5fed85 = n((e) => {
    if (this.catalog != null && this._data != null) {
      let r = this.products(this._data);
      r != null && this.catalog._r2e315061469868(r, !0, this._data.id);
    }
  }, "_r1e85c3dc5fed85");
  _rfaad168e4b59af = n((e) => {
    if (this.catalog != null && this._data != null) {
      let r = this.products(this._data);
      r != null && this.catalog._r2e315061469868(r, !1, this._data.id);
    }
  }, "_rfaad168e4b59af");
  _ra1f5cb56d0c2d8(e) {
    let r = this.var_17?.roomControllerLevel?._r2eac8239a09fe7?.roomId ?? 0,
      t = this.var_17?.roomControllerLevel?.roomEngine ?? null,
      i = t?._ra1f5cb56d0c2d8(r, e, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE) ?? null;
    return (i == null && (i = t?._ra1f5cb56d0c2d8(r, e, RoomObjectCategoryEnum.const_909) ?? null), i);
  }
  products(e) {
    if (e == null) return null;
    let r = this._ra1f5cb56d0c2d8(e.id);
    if (r == null) return null;
    let t = e.category === RoomObjectCategoryEnum.const_909,
      i = r.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191) ?? 0;
    return t
      ? (this.var_17?.roomControllerLevel?.sessionDataManager?.getWallItemData(i) ?? null)
      : (this.var_17?.roomControllerLevel?.sessionDataManager?.getFloorItemData(i) ?? null);
  }
  _rb77933fef3ae25 = n((e) => {
    let r = this.catalog;
    r != null && this._data != null && r._r104372015639cf(this._data.rentOfferId, CatalogType.NORMAL);
  }, "_rb77933fef3ae25");
  onClose = n((e) => {
    this.var_17?.close();
  }, "onClose");
  setImage(e, r) {
    let t = this._border?.findChildByName(r);
    if (t == null) return;
    let i = e;
    (i == null && (i = new A(t.width, 40, !0)),
      (t.height = Math.min(i.height, 200)),
      (t.bitmap = i.clone()),
      (t.visible = !0),
      this.updateWindow());
  }
  setOwnerInfo(e, r) {
    if (((this.var_1514 = e), this.var_1514 === 0))
      (this.showWindow("owner_region", !1), this.showWindow("owner_spacer", !1));
    else {
      let t = this._r99fda1d9e9f6a9?.getListItemByName("owner_region"),
        i = t?.findChildByName("owner_name"),
        s = t?.findChildByName("owner_link"),
        o = t?.findChildByName("bcw_icon"),
        d = t?.findChildByName("temp_icon");
      (t != null &&
        i != null &&
        s != null &&
        (this.var_1514 === a.const_1096
          ? ((i.text = "${builder.catalog.title}"),
            (t.toolTipCaption = ""),
            (s.visible = !1),
            o != null && (o.visible = !0),
            d != null && (d.visible = !1))
          : this.var_1514 === a.const_218
            ? ((i.text = "${temp.catalog.title}"),
              (t.toolTipCaption = ""),
              (s.visible = !1),
              d != null && (d.visible = !0),
              o != null && (o.visible = !1))
            : ((i.text = r),
              (t.toolTipCaption =
                this.var_17?.localizations?.getLocalization(
                  "infostand.profile.link.tooltip",
                  "",
                ) ?? ""),
              (t.toolTipDelay = 100),
              (s.visible = !0),
              o != null && (o.visible = !1),
              d != null && (d.visible = !1))),
        this.showWindow("owner_region", !0),
        this.showWindow("owner_spacer", !0));
    }
    this.updateWindow();
  }
  set expiration(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("expiration_text");
    if (r == null) return;
    let t =
      this.var_17?.roomControllerLevel?.localization ?? this.var_17?.localizations ?? null;
    (t != null &&
      this.var_17?.localizations?._r43eae9731f5b27(
        "infostand.rent.expiration",
        "time",
        ra.getFriendlyTime(t, e),
      ),
      (r.visible =
        e >= 0 &&
        this.var_1514 ===
          (this.var_17?.roomControllerLevel?.sessionDataManager?.userId ?? -1)),
      this.updateWindow());
  }
  onButtonClicked = n((e) => {
    let r = null,
      t = null,
      i = e.target,
      s = this._data;
    if (!(i == null || s == null)) {
      switch (i.name) {
        case "rotate":
          r = RoomWidgetFurniActionMessage.ROTATE;
          break;
        case "move":
          r = RoomWidgetFurniActionMessage.MOVE;
          break;
        case "pickup":
          ((r = this._pickupMode === a.const_165 ? RoomWidgetFurniActionMessage.const_837 : RoomWidgetFurniActionMessage.const_1405),
            this.var_17?.close());
          break;
        case "save_branding_configuration":
          if (
            this.var_17?.roomControllerLevel?.sessionDataManager?.hasSecurity(class_1794.EMPLOYEE) ??
            !1
          ) {
            ((r = RoomWidgetFurniActionMessage.SAVE_STUFF_DATA), (t = this.getVisibleAdFurnitureExtraParams()));
            break;
          }
          r = RoomWidgetFurniActionMessage.USE;
          break;
        case "use":
          r = RoomWidgetFurniActionMessage.USE;
          break;
        case "wired_inspect":
          r = RoomWidgetFurniActionMessage.const_126;
          break;
        default:
          break;
      }
      r != null &&
        this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(
          new RoomWidgetFurniActionMessage(r, s.id, s.category, s.purchaseOfferId, t),
        );
    }
  }, "onButtonClicked");
  _r577b935e20ba29 = n((e) => {
    let r = this._data;
    r != null && this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new g1(!1, r.groupId));
  }, "_r577b935e20ba29");
  _r7135eb8d4233fa = n((e) => {
    let r = this.catalog,
      t = this._data;
    r != null &&
      t != null &&
      (r._r104372015639cf(t.purchaseOfferId, CatalogType.NORMAL),
      this._r697386a8fb5bf8?.trackGoogle("infostandCatalogButton", "offer", t.purchaseOfferId));
  }, "_r7135eb8d4233fa");
  _r8e08257e0f578d = n((e) => {
    this.var_17?._ra1035ec0d95808();
  }, "_r8e08257e0f578d");
  _r18053e6db46985 = n((e) => {
    let t = e.target?.findChildByName("owner_link"),
      i = this.catalog,
      s = this._data;
    (e.type === u.CLICK &&
      (this.var_1514 === a.const_1096
        ? s?.availableForBuildersClub && s.purchaseOfferId >= 0
          ? i?._r104372015639cf(s.purchaseOfferId, CatalogType.BUILDER)
          : i?._r069ad4a1743fb5()
        : this.var_1514 !== a.const_218 &&
          this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(
            new RoomWidgetOpenProfileMessage(RoomWidgetOpenProfileMessage.const_1290, this.var_1514, "infoStand_furniView"),
          )),
      t != null && (e.type === u.OUT && (t.style = 21), e.type === u.OVER && (t.style = 22)));
  }, "_r18053e6db46985");
  updateWindow() {
    this._r99fda1d9e9f6a9 == null ||
      this._border == null ||
      this.var_34 == null ||
      this._window == null ||
      (this._r99fda1d9e9f6a9.arrangeListItems(),
      (this.var_34.width = this.var_34.visibleRegion.width),
      (this._r99fda1d9e9f6a9.height = this._r99fda1d9e9f6a9.visibleRegion.height),
      (this._border.height = this._r99fda1d9e9f6a9.height + 20),
      (this._window.width = Math.max(this._border.width, this.var_34.width)),
      (this._window.height = this._window.visibleRegion.height),
      this._border.width < this.var_34.width
        ? ((this._border.x = this._window.width - this._border.width), (this.var_34.x = 0))
        : ((this.var_34.x = this._window.width - this.var_34.width),
          (this._border.x = 0)),
      this.var_495 != null && (this.var_495.x = this._border.x),
      this.var_17?.refreshContainer());
  }
  set spacerColor(e) {
    for (let r of ["images_spacer", "owner_spacer", "group_details_spacer", "furni_details_spacer"]) {
      let t = this._border?.findChildByName(r);
      t != null && (t.color = e);
    }
  }
  updateCustomVarsWindow() {
    if (this.var_495 == null || this._data == null) return;
    let e = this._ra1f5cb56d0c2d8(this._data.id);
    if (e == null) return;
    let r = e.getStringToStringMap()?._r749e70d500190b(RoomObjectVariableEnum.FURNITURE_CUSTOM_VARIABLES) ?? null;
    if (((this.var_495.visible = r != null && r.length > 0), !this.var_495.visible)) return;
    let t = this.var_495.findChildByName("variable_list");
    if (t == null) return;
    t.destroyListItems();
    let i = e.getStringToStringMap()?._r51b8bfd516ad9d(RoomObjectVariableEnum.FURNITURE_DATA) ?? null;
    for (let s of r ?? []) {
      let o = this._rc00db4ecbbac07?.clone();
      o != null &&
        ((o.name = s),
        (o.findChildByName("name").caption = s),
        (o.findChildByName("value").caption = i?.getValue(s) ?? ""),
        t.addListItem(o));
    }
  }
  updatePickupMode(e, r) {
    ((this._pickupMode = a._r7aac41c0e7e420),
      r ||
        (e.isOwner || e.isAnyRoomController
          ? (this._pickupMode = a.const_165)
          : (e.isRoomOwner || e._rea9739215487be >= RoomControllerLevelEnum.GUILD_ADMIN) &&
            (this._pickupMode = a.const_971),
        e._rf3da64b740a064 && (this._pickupMode = a._r7aac41c0e7e420)),
      this.showButton("pickup", this._pickupMode !== a._r7aac41c0e7e420),
      this.localizePickupButton(this._pickupMode));
  }
  localizePickupButton(e) {
    let r = this.var_34?.getListItemByName("pickup");
    r != null &&
      (r.caption = e === a.const_971 ? "${infostand.button.eject}" : "${infostand.button.pickup}");
  }
  createAdElement(e, r) {
    if (this._r99fda1d9e9f6a9 == null) return;
    let t = this.var_17?.assets?.getAssetByName("furni_view_branding_element");
    if (t == null) return;
    let i = this.var_17?.windowManager?.buildFromXML(t.content);
    if (i == null) return;
    let s = i.findChildByName("element_name"),
      o = i.findChildByName("element_value");
    (s != null && (s.caption = e),
      o != null && ((o.caption = r), o.addEventListener(sr.const_1081, this.var_107)),
      s != null && o != null && this._r99fda1d9e9f6a9.addListItem(i));
  }
  _rc9d8f70896ada6() {
    let e = new B(),
      r = this._data?.extraParam ?? "";
    if (!r.startsWith(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_BRANDING_OPTIONS)) return e;
    let i = r.substring(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_BRANDING_OPTIONS.length).split("	");
    for (let s of i) {
      let o = s.split("=", 2);
      o.length === 2 && e.add(o[0], o[1]);
    }
    return e;
  }
  getVisibleAdFurnitureExtraParams() {
    let e = "",
      r = [];
    this._border?.groupChildrenWithTag("branding_element", r, -1);
    for (let t of r) {
      let i = t,
        s = i?.findChildByName("element_name"),
        o = i?.findChildByName("element_value");
      if (s != null && o != null) {
        let d = this.trimAdFurnitureExtramParam(s.caption),
          c = this.trimAdFurnitureExtramParam(o.caption);
        e += `${d}=${c}	`;
      }
    }
    return e;
  }
  trimAdFurnitureExtramParam(e) {
    return e.indexOf("	") >= 0 ? e.replace("	", "") : e;
  }
  showAdFurnitureDetails(e) {
    if (this.var_17 == null || this._border == null) return;
    let r = this._border.findChildByName("furni_details_spacer");
    r != null && (r.visible = e);
    let t = [];
    this._border.groupChildrenWithTag("branding_element", t, -1);
    for (let o of t) (this._border.removeChild(o), o.dispose());
    let i = !1,
      s = this._border.findChildByName("furni_details_text");
    if (s != null) {
      ((s.visible = e), (s.caption = `id: ${this._data?.id ?? 0}`));
      let o = this._rc9d8f70896ada6();
      if (o.length > 0) {
        i = !0;
        for (let d of o.getKeys()) this.createAdElement(d, o.getValue(d) ?? "");
      }
    }
    this.showButton("save_branding_configuration", !1);
  }
  showGroupInfo(e) {
    (this.showWindow("group_details_spacer", e),
      this.showWindow("group_details_container", e),
      this.showWindow("group_badge_image", !1),
      this.showWindow("group_name", !1));
  }
  showWindow(e, r) {
    let t = this._border?.findChildByName(e);
    t != null && (t.visible = r);
  }
  var_107 = n((e) => {
    !!1 ||
      e?.charCode !== Fi.ENTER ||
      this._data == null ||
      this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(
        new RoomWidgetFurniActionMessage(RoomWidgetFurniActionMessage.SAVE_STUFF_DATA, this._data.id, this._data.category, -1, this.getVisibleAdFurnitureExtraParams()),
      );
  }, "var_107");
  showButton(e, r) {
    let t = this.var_34?.getListItemByName(e);
    t != null && ((t.visible = r), this.var_34?.arrangeListItems());
  }
  updatePurchaseButtonVisibility(e, r, t, i, s, o, d) {
    let c = !1,
      f = e && r,
      l = f && o,
      b = f && s,
      _ = !f && t,
      h = d && (this.var_17?.config?.getBoolean("infostand.place_more.enabled") ?? !1),
      p = !f && i;
    (this.var_355 != null && ((this.var_355.visible = h), (c ||= h)),
      this._r0cabb5f3546286 != null && ((this._r0cabb5f3546286.visible = _), (c ||= _)),
      this._rc1e4df667e35be != null && ((this._rc1e4df667e35be.visible = p), (c ||= p)),
      this._re653c033b3caa6 != null && ((this._re653c033b3caa6.visible = l), (c ||= l)),
      this._rd19d99b6a51f87 != null && ((this._rd19d99b6a51f87.visible = b), (c ||= b)));
    let m = this._r99fda1d9e9f6a9?.getListItemByName("purchase_buttons");
    (m != null && (m.arrangeListItems(), (m.visible = c)), this._r99fda1d9e9f6a9?.arrangeListItems());
  }
  showLimitedItem(e, r) {
    let t = this._border?.findChildByName("unique_item_background_container"),
      i = this._border?.findChildByName("unique_item_overlay_container");
    if (t == null || i == null) return;
    if (!e || r == null) {
      ((t.visible = !1), (i.visible = !1));
      return;
    }
    ((t.visible = !0), (i.visible = !0));
    let o = i.findChildByName("unique_item_plaque_widget")?.widget;
    o != null && ((o.serialNumber = r.uniqueSerialNumber), (o.seriesSize = r.uniqueSeriesSize));
  }
  showChestData(e, r, t) {
    if (this._border?.findChildByName("wired_chest_elements") == null) return;
    let i = t instanceof Bc ? t : null;
    if ((!e && !r) || i == null) {
      ((this._border.findChildByName("wired_chest_elements").visible = !1),
        (this._border.findChildByName("name_extra_text").visible = !1),
        (this._border.findChildByName("chest_item_count").visible = !1));
      return;
    }
    let s = t;
    if (s == null) return;
    let o = i.getValue("is_wired_enabled") === "1";
    ((this._border.findChildByName("wired_chest_elements").visible = o),
      o && (this._border.findChildByName("locked_icon").visible = i.getValue("locked") === "1"));
    let d = this._border.findChildByName("name_extra_text");
    d != null &&
      ((d.visible = s.chestName !== ""), s.chestName !== "" && (d.text = s.chestName));
    let c = this._border.findChildByName("chest_item_count");
    if (c != null) {
      c.visible = !0;
      let f = `infostand.chest_contents.${e ? "furni" : "coin"}`;
      c.text =
        this.var_17?.localizations?.getLocalizationWithParams(
          f,
          "",
          "amount",
          i.getValue("contents_count") ?? "0",
        ) ?? "";
    }
  }
  showRarityItem(e, r) {
    let t = this._border?.findChildByName("rarity_item_overlay_container");
    if (t == null) return;
    if (!e || r == null) {
      t.visible = !1;
      return;
    }
    t.visible = !0;
    let s = t.findChildByName("rarity_item_overlay_widget")?.widget;
    s != null && (s.rarityLevel = r.rarityLevel);
  }
}
