// Extracted from HabboAirLauncher.deobf.js, line 237772.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/chooser/furni/FurniView.as
// Obfuscated name: _id7abb0e422b7ec

class a {
  constructor(e) {
    this.var_38 = e;
    ((this._rb5ea9aad9f0aaa = new UnkEventDispatcherWrapperSubclass_05394e(a.IMAGE_UPDATE_DELAY_MS)),
      this._rb5ea9aad9f0aaa.addEventListener(DeBouncer.addEventListener, this._r9e95959d13d0ed),
      this._rb5ea9aad9f0aaa.start());
  }
  static {
    n(this, "FurniView");
  }
  static _r6472f789a2e193 = 0;
  static STATE_INITIALIZING = 1;
  static STATE_EMPTY = 2;
  static STATE_CONTENT = 3;
  static IMAGE_UPDATE_DELAY_MS = 30;
  static MAIN_FILTER_IDS = [
    vr.MAIN_ALL,
    vr.MAIN_FLOOR_ITEMS,
    vr.MAIN_WALL_ITEMS,
    vr.MAIN_ROOM_LAYOUT,
  ];
  _view = null;
  var_605 = null;
  _disposed = !1;
  var_2475 = a._r6472f789a2e193;
  var_217 = !1;
  var_5562 = "";
  _re3ed202887ee87 = null;
  _r791f22c75df2be = null;
  RoomPreviewer = null;
  _rae3db93240ac1a = vr.MAIN_ALL;
  var_1244 = vr.const_394;
  _rb5ea9aad9f0aaa;
  get disposed() {
    return this._disposed;
  }
  get isVisible() {
    return this._view?.parent != null && this._view.visible;
  }
  get isInitialized() {
    return this.var_217;
  }
  get _re0b698839cb087() {
    return this.var_605?._re0b698839cb087 ?? [];
  }
  get grid() {
    return this.var_605;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this._re3ed202887ee87 = null),
      (this._r791f22c75df2be = null),
      (this.RoomPreviewer = null),
      this.var_605?.dispose(),
      (this.var_605 = null),
      this._view?.dispose(),
      (this._view = null),
      this._rb5ea9aad9f0aaa != null &&
        (this._rb5ea9aad9f0aaa.removeEventListener(DeBouncer.addEventListener, this._r9e95959d13d0ed),
        this._rb5ea9aad9f0aaa.stop(),
        (this._rb5ea9aad9f0aaa = null)),
      (this.var_38 = null));
  }
  getWindowContainer() {
    return (
      this.var_217 || this.init(),
      this._view == null || this._view.disposed ? null : (this._r7b3650a76b6451(!1), this._view)
    );
  }
  _r45a066185859ea() {
    let e = a.STATE_CONTENT;
    ((this.var_38?._r90309e30b37f25() ?? !1)
      ? (this.var_38?.furniData.length ?? 0) === 0 && (e = a.STATE_EMPTY)
      : (e = a.STATE_INITIALIZING),
      this.var_2475 !== e && ((this.var_2475 = e), this.updateContainerVisibility()));
  }
  _r15056513ab3ca5() {
    (this.var_605?._r2a2b5de73dae58([]), this.updateActionView());
  }
  _r67be4a14a21599() {
    return this.var_605?._r67be4a14a21599() ?? null;
  }
  updateActionView() {
    if (this._view == null || this._view.disposed || this.var_38 == null) return;
    this.updateContainerVisibility();
    let e = this.var_38.getSelectedItem(),
      r = this._r0a2b709b22e80d(e),
      t = this._view.findChildByName("nextItemButton"),
      i = this._view.findChildByName("viewItemButton"),
      s = this._view.findChildByName("furni_preview_widget"),
      d =
        (r != null && r.isWallItem
          ? (this.var_38.roomEngine?._ra7e35114872e5d(r.type) ?? "")
          : ""
        ).indexOf("external_image_wallitem") !== -1;
    (t != null && (t.visible = d),
      i != null && (i.visible = d),
      s != null && (s.visible = r != null),
      e != null && r != null
        ? (this.updatePreview(e, r), this._rd183b6d88c0194(e), this._r8a8b06fefed963(r))
        : this._r1fee04697389c7(),
      this._r7b3650a76b6451(r != null));
    let c = this._view.findChildByName("furni_name"),
      f = this._view.findChildByName("furni_description");
    (c != null && (c.text = e?.name ?? ""),
      f != null &&
        (f.text = r != null && d ? r.stuffData.var_2907("m") : (e?.description ?? "")),
      this._r16a7a624806aaf(r),
      this.updateRentedItem());
  }
  _reed930d394fc13(e) {
    let r = e.peek();
    r != null &&
      (this.RoomPreviewer?.reset(!1),
      r.isWallItem
        ? this.RoomPreviewer?._r57da83c688d864(
            r.type,
            new k(90, 0, 0),
            r.stuffData.getLegacyString(),
          )
        : this.RoomPreviewer?._r0ead309682028b(r.type, new k(90, 0, 0), r.stuffData));
  }
  _rdf9ec8b6a4661b(e) {
    this.var_605?._r2a2b5de73dae58(e);
  }
  updateGridFilters() {
    if (this._view == null || this._view.disposed || this.var_38 == null) return;
    let e = this._view.findChildByName("filter.options"),
      r = this._view.findChildByName("placement.options"),
      t = this._view.findChildByName("filter"),
      i = this.getSelectedFilterId(e, a.MAIN_FILTER_IDS),
      s = this.getSelectedFilterId(r, this._r9105aadaf3634d(i));
    ((this._rae3db93240ac1a = i),
      (this.var_1244 = s),
      this.var_38.controller.view?._r782a6c69f4c324() === class_2245.WIRED_TRADING &&
      this.var_38.controller._r94dcfedd8fb086?.running &&
      this.var_38.controller._ra6233779f4cbd3 != null
        ? this.var_605?._rbe88f447ee988e(
            i,
            s,
            t?.caption ?? "",
            this.var_38.controller._ra6233779f4cbd3,
          )
        : this.var_605?.setFilter(
            i,
            s,
            this.var_38._ra4f614c5fb9a2b,
            this.var_38.controller._re9e4d1b42c1d4d,
            t?.caption ?? "",
            this.var_38._rdca128b55f9b8b,
          ),
      this.var_136());
  }
  resetFilters(e) {
    if (this._view == null) return;
    let r = this._view.findChildByName("filter.options");
    if (
      (this.var_5562 !== e &&
        r != null &&
        ((r.selection = 0), this.populateTypeFilterOptions(vr.MAIN_ALL, vr.const_394)),
      this.var_5562 !== e)
    ) {
      let t = this._view.findChildByName("filter"),
        i = this._view.findChildByName("clear_filter_button");
      (t != null && (t.caption = ""), i != null && (i.visible = !1));
    }
    ((this.var_5562 = e), this.updateGridFilters());
  }
  _ree04d7398edd64() {
    let e = this._view?.findChildByName("filter.options");
    e != null &&
      ((e.selection = 0),
      this.populateTypeFilterOptions(vr.MAIN_ALL, vr.const_394),
      this.updateGridFilters());
  }
  updateRentedItem() {
    let e = this._view?.findChildByName("furni_extra"),
      r = this.var_38?.getSelectedItem()?.peek() ?? null;
    e == null ||
      r == null ||
      !r.isRented ||
      ((e.visible = !0),
      r.hasRentPeriodStarted
        ? (this.var_38?.controller.localization?._r43eae9731f5b27(
            "inventory.rent.expiration",
            "time",
            ra.getFriendlyTime(this.var_38.controller.localization, r.secondsToExpiration),
          ),
          (e.caption =
            this.var_38?.controller.localization?.getLocalization("inventory.rent.expiration") ??
            ""))
        : (this.var_38?.controller.localization?._r43eae9731f5b27(
            "inventory.rent.inactive",
            "time",
            ra.getFriendlyTime(this.var_38.controller.localization, r.secondsToExpiration),
          ),
          (e.caption =
            this.var_38?.controller.localization?.getLocalization("inventory.rent.inactive") ??
            "")));
  }
  init() {
    if (
      ((this._view = this.var_38?.controller.view?._r1f685677bdb2bd(class_2106.FURNITURE) ?? null),
      this._view == null)
    )
      return;
    (this._view.enableLookupCache(),
      (this._view.visible = !1),
      (this._view.procedure = (...i) => this.windowEventProc(i[0], i[1])));
    let e = this._view.findChildByName("item_grid"),
      r = this._view.findChildByName("item_grid_pages");
    ((this.var_605 = new UnkClass_426ab6(e, r)), this.populateFilterOptions(), this.var_136());
    let t = this._view.findChildByName("furni_preview_widget")?.widget;
    ((this.RoomPreviewer = t?._r08651d482bdd11 ?? null),
      this._r45a066185859ea(),
      (this.var_217 = !0));
  }
  updatePreview(e, r) {
    if (
      (this.RoomPreviewer?.reset(!1),
      r.category === class_1901.WALL_PAPER || r.category === class_1901.FLOOR || r.category === class_1901.LANDSCAPE)
    ) {
      let t =
          this.var_38?.roomEngine?._r7f639510511a35(
            this.var_38.roomEngine.activeRoomId,
            RoomObjectVariableEnum.ROOM_WALL_TYPE,
          ) || "101",
        i =
          this.var_38?.roomEngine?._r7f639510511a35(
            this.var_38.roomEngine.activeRoomId,
            RoomObjectVariableEnum.ROOM_FLOOR_TYPE,
          ) || "101",
        s =
          this.var_38?.roomEngine?._r7f639510511a35(
            this.var_38.roomEngine.activeRoomId,
            RoomObjectVariableEnum.ROOM_LANDSCAPE_TYPE,
          ) || "1.1",
        o = r.category === class_1901.FLOOR ? e.stuffData.getLegacyString() : i,
        d = r.category === class_1901.WALL_PAPER ? e.stuffData.getLegacyString() : t,
        c = r.category === class_1901.LANDSCAPE ? e.stuffData.getLegacyString() : s;
      if (
        (this.RoomPreviewer?._r9c3331ac1bb690(!0, !0),
        this.RoomPreviewer?._r20d16d1bfd889e(o, d, c),
        r.category === class_1901.LANDSCAPE)
      ) {
        let f = this.var_38?.controller._r1a2479a26b2096(
          "window_double_default",
          class_1803.PRODUCT_TYPE_ITEM,
        );
        f != null && this.RoomPreviewer?._r57da83c688d864(f.id, new k(90, 0, 0), f._r2bdd6e3cc1f573);
      }
    } else
      e.isWallItem
        ? (this.RoomPreviewer?._r9c3331ac1bb690(!0, !0),
          this.RoomPreviewer?._r57da83c688d864(
            e.type,
            new k(90, 0, 0),
            r.stuffData.getLegacyString(),
          ))
        : (this.RoomPreviewer?._r9c3331ac1bb690(!1, !0),
          this.RoomPreviewer?._r0ead309682028b(
            e.type,
            new k(90, 0, 0),
            e.stuffData,
            e.extra.toString(),
          ));
    this.var_136();
  }
  _rd183b6d88c0194(e) {
    let r = this._view?.findChildByName("tradeable_number"),
      t = this._view?.findChildByName("recyclable_number"),
      i = this._view?.findChildByName("tradeable_icon"),
      s = this._view?.findChildByName("recyclable_icon"),
      o = this._view?.findChildByName("tradeable_info_region"),
      d = this._view?.findChildByName("recyclable_info_region"),
      c = e._rc274ef95328596(),
      f = e.getRecyclableCount();
    (i != null &&
      r != null &&
      o != null &&
      (c === 0
        ? ((i.assetUri = "inventory_furni_no_trade_icon"),
          (r.visible = !1),
          (o.toolTipCaption = "${inventory.furni.preview.not_tradeable}"),
          (r.filters = []))
        : ((i.assetUri = "inventory_furni_trade_icon"),
          (r.visible = !0),
          (r.text = String(c)),
          (o.toolTipCaption = "${inventory.furni.preview.tradeable_amount}"),
          (r.filters = [new UnkClass_baf84c(16777215, 1, 3, 3, 300)]))),
      s != null &&
        t != null &&
        d != null &&
        (f === 0
          ? ((s.assetUri = "inventory_furni_no_recycle_icon"),
            (t.visible = !1),
            (d.toolTipCaption = "${inventory.furni.preview.not_recyclable}"),
            (t.filters = []))
          : ((s.assetUri = "inventory_furni_recycle_icon"),
            (t.visible = !0),
            (t.text = String(f)),
            (d.toolTipCaption = "${inventory.furni.preview.recyclable_amount}"),
            (t.filters = [new UnkClass_baf84c(16777215, 1, 3, 3, 300)]))));
  }
  _r8a8b06fefed963(e) {
    let r = this._view?.findChildByName("unique_limited_item_overlay_widget");
    e.stuffData.uniqueSerialNumber > 0 && r?.widget != null
      ? ((this._re3ed202887ee87 ??= r.widget),
        (this._re3ed202887ee87.serialNumber = e.stuffData.uniqueSerialNumber),
        (this._re3ed202887ee87.seriesSize = e.stuffData.uniqueSeriesSize),
        (r.visible = !0))
      : r != null && (r.visible = !1);
    let t = this._view?.findChildByName("rarity_item_overlay_widget");
    e.stuffData.rarityLevel >= 0 && t?.widget != null
      ? ((this._r791f22c75df2be ??= t.widget),
        (this._r791f22c75df2be.rarityLevel = e.stuffData.rarityLevel),
        (t.visible = !0))
      : t != null && (t.visible = !1);
  }
  _r1fee04697389c7() {
    let e = this._view?.findChildByName("furni_preview_widget"),
      r = this._view?.findChildByName("nextItemButton"),
      t = this._view?.findChildByName("viewItemButton"),
      i = this._view?.findChildByName("tradeable_icon"),
      s = this._view?.findChildByName("recyclable_icon"),
      o = this._view?.findChildByName("tradeable_number"),
      d = this._view?.findChildByName("recyclable_number");
    (e != null && (e.visible = !1),
      r != null && (r.visible = !1),
      t != null && (t.visible = !1),
      i != null && (i.assetUri = ""),
      o != null && ((o.visible = !1), (o.text = ""), (o.filters = [])),
      s != null && (s.assetUri = ""),
      d != null && ((d.visible = !1), (d.text = ""), (d.filters = [])));
  }
  _r16a7a624806aaf(e) {
    let r = this._view?.findChildByName("furni_extra");
    if (r != null) {
      if (e != null && e.stuffData.rarityLevel >= 0) {
        (this.var_38?.controller.localization?._r43eae9731f5b27(
          "inventory.rarity",
          "rarity",
          String(e.stuffData.rarityLevel),
        ),
          (r.text =
            this.var_38?.controller.localization?.getLocalization("inventory.rarity") ?? ""),
          (r.visible = !0));
        return;
      }
      if (e != null && e.stuffData.chestName.length > 0) {
        ((r.text =
          this.var_38?.controller.localization?.getLocalizationWithParams(
            "inventory.chest_name",
            "",
            "chest_name",
            e.stuffData.chestName,
          ) ?? ""),
          (r.visible = !0));
        return;
      }
      ((r.text = ""), (r.visible = !1));
    }
  }
  _r0a2b709b22e80d(e) {
    return e == null
      ? null
      : e.getAt >= 0
        ? (e._r7823981d08072b(e.getAt) ?? e.peek())
        : e.peek();
  }
  _r7b3650a76b6451(e) {
    if (this._view == null || this.var_38 == null) return;
    let r = this.var_38.getSelectedItem(),
      t = r?.peek() ?? null,
      i = this._view.findChildByName("placeinroom_btn"),
      s = this._view.findChildByName("goto_room_btn"),
      o = this._view.findChildByName("use_btn"),
      d = this._view.findChildByName("extendrent_btn"),
      c = this._view.findChildByName("buyrenteditem_btn"),
      f = this._view.findChildByName("offertotrade_btn"),
      l = this._view.findChildByName("offertotrade_cnt"),
      b = this._view.findChildByName("sell_btn"),
      _ = this.var_38._r2eac8239a09fe7?._r9ab0d525741546 ?? !1,
      h = e && _ && !this.var_38._r60deda082a8b90,
      p = (t?.flatId ?? -1) > -1,
      m =
        t != null
          ? this.var_38.controller.products(
              t.type,
              t.isWallItem ? class_1803.PRODUCT_TYPE_ITEM : class_1803.PRODUCT_TYPE_STUFF,
            )
          : null,
      v = e && h && (t?.isRented ?? !1) && (m?.rentCouldBeUsedForBuyout ?? !1),
      w = e && h && (t?.isRented ?? !1) && (m?.purchaseCouldBeUsedForBuyout ?? !1),
      I =
        e &&
        (this.var_38.controller._rfa660cefb72529?.isEnabled ?? !1) &&
        (t?.sellable ?? !1) &&
        !(this.var_38.controller.sessionData?.isAccountSafetyLocked() ?? !1) &&
        !this.var_38._r60deda082a8b90 &&
        !(m?._rde6b5b86b285ca ?? !1),
      C = r?._rc274ef95328596() ?? 0,
      W = e && this.var_38._r60deda082a8b90 && this.var_38._rcee4eb8ebc6d4a() && C > 0,
      R =
        e &&
        t != null &&
        (t.category === class_1901.PET_SADDLE ||
          t.category === class_1901.PET_CUSTOM_PART ||
          t.category === class_1901.PET_CUSTOM_PART_SHAMPOO ||
          t.category === class_1901.PET_SHAMPOO ||
          t.category === class_1901.MONSTERPLANT_REVIVAL);
    if (
      (i != null && ((i.visible = !0), h ? i.enable() : i.disable()),
      s != null && ((s.visible = p), p ? s.enable() : s.disable()),
      o != null && ((o.visible = R), R ? o.enable() : o.disable()),
      d != null && ((d.visible = v), v ? d.enable() : d.disable()),
      c != null && ((c.visible = w), w ? c.enable() : c.disable()),
      f != null && ((f.visible = this.var_38._r60deda082a8b90), W ? f.enable() : f.disable()),
      l != null)
    ) {
      ((l.visible = this.var_38._r60deda082a8b90),
        (l.editable = this.var_38._r60deda082a8b90));
      let T = Math.max(1, Number.parseInt(l.caption, 10) || 1),
        S = Math.min(T, Math.max(1, C));
      l.caption = String(S);
    }
    b != null && ((b.visible = I), I ? b.enable() : b.disable());
  }
  updateContainerVisibility() {
    if (
      !this.var_217 ||
      this.var_38 == null ||
      (this.var_38.controller._ra2d0b2740c7155 !== class_2106.FURNITURE &&
        this.var_38.controller._ra2d0b2740c7155 !== class_2106.RENTABLES)
    )
      return;
    let e = this.var_38.controller.view?.loadingContainer,
      r = this.var_38.controller.view?.emptyContainer,
      t = this._view?.findChildByName("grid_container"),
      i = this._view?.findChildByName("preview_container"),
      s = this._view?.findChildByName("options_container");
    switch (this.var_2475) {
      case a.STATE_INITIALIZING:
        (e != null && (e.visible = !0),
          r != null && (r.visible = !1),
          t != null && (t.visible = !1),
          i != null && (i.visible = !1),
          s != null && (s.visible = !1));
        break;
      case a.STATE_EMPTY:
        (e != null && (e.visible = !1),
          r != null && (r.visible = !0),
          t != null && (t.visible = !1),
          i != null && (i.visible = !1),
          s != null && (s.visible = !1));
        break;
      case a.STATE_CONTENT:
        (e != null && (e.visible = !1),
          r != null && (r.visible = !1),
          t != null && (t.visible = !0),
          i != null && (i.visible = !0),
          s != null && (s.visible = !0));
        break;
    }
  }
  _re3590d17c15469() {
    let e = this.var_38?.getSelectedItem();
    e != null && (e.getAt++, this.updateActionView());
  }
  windowEventProc(e, r) {
    if (e == null || r == null || this.var_38 == null) return;
    let t = this._view?.findChildByName("offertotrade_cnt");
    if (e.type === u.CLICK)
      switch (r.name) {
        case "placeinroom_btn":
        case "furni_preview_region":
          this.var_38._r8f79b32ee20188(!1);
          break;
        case "nextItemButton":
          this._re3590d17c15469();
          break;
        case "viewItemButton": {
          let i = this.var_38.getSelectedItem(),
            s = i?._r7823981d08072b(i.getAt) ?? i?.peek() ?? null;
          s != null && this.var_38.roomEngine?._r0d46ac32fd030a(s.ref, s.type, s.id);
          break;
        }
        case "goto_room_btn":
          this.var_38.gotoRoom();
          break;
        case "use_btn":
          this.var_38._r0d46ac32fd030a();
          break;
        case "sell_btn":
          this.var_38._rd7204f812e7d7f();
          break;
        case "offertotrade_btn": {
          let i = Math.max(1, Number.parseInt(t?.caption ?? "1", 10) || 1);
          (t != null && i !== Number.parseInt(t.caption, 10) && (t.caption = String(i)),
            this.var_38.requestSelectedFurniToTrading(i, t));
          break;
        }
        case "extendrent_btn":
          this.var_38._r5256e536cf5e9d();
          break;
        case "buyrenteditem_btn":
          this.var_38._rbd8c58caa622c0();
          break;
        case "clear_filter_button":
          (this._view?.findChildByName("filter") != null &&
            (this._view.findChildByName("filter").caption = ""),
            (r.visible = !1),
            this.updateGridFilters());
          break;
        default:
          this.var_38._r5b66fd8c34c30c();
          break;
      }
    else if (e.type === u.DOWN) {
      if (r.name === "furni_preview_region") {
        let i = this.var_38.getSelectedItem()?.peek() ?? null;
        if (
          i == null ||
          i.category === class_1901.WALL_PAPER ||
          i.category === class_1901.FLOOR ||
          i.category === class_1901.LANDSCAPE
        )
          return;
        this.var_38._r8f79b32ee20188(!1);
      }
    } else if (e.type === sr.const_900) {
      let i = e;
      if (r.name === "filter") {
        let s = this._view?.findChildByName("clear_filter_button");
        (s != null && (s.visible = r.caption.length > 0),
          i.keyCode === 27
            ? ((r.caption = ""), s != null && (s.visible = !1), this.updateGridFilters())
            : i.keyCode === 13 && this.updateGridFilters());
      }
    }
    if (e.type === y.const_238)
      if (r.name === "filter.options") {
        let i = this.getSelectedFilterId(r, a.MAIN_FILTER_IDS);
        (this.populateTypeFilterOptions(i, this.getPreservedTypeFilter(i)), this.updateGridFilters());
      } else r.name === "placement.options" && this.updateGridFilters();
  }
  populateFilterOptions() {
    if (this._view == null || this.var_38 == null) return;
    let e = this._view.findChildByName("filter.options"),
      r = a.MAIN_FILTER_IDS.map((i) => this.getMainFilterLabel(i));
    (e?.populate(r),
      e != null && (e.selection = 0),
      this.populateTypeFilterOptions(vr.MAIN_ALL, vr.const_394));
    let t = this._view.findChildByName("filter");
    t != null && (t.caption = "");
  }
  populateTypeFilterOptions(e, r) {
    let t = this._view?.findChildByName("placement.options"),
      i = this._r9105aadaf3634d(e),
      s = i.map((o) => this.getTypeFilterLabel(o));
    (t?.populate(s), t != null && (t.selection = this.findFilterIndex(i, r)));
  }
  getPreservedTypeFilter(e) {
    return this.findFilterIndex(this._r9105aadaf3634d(e), this.var_1244) >= 0
      ? this.var_1244
      : vr.const_394;
  }
  _r9105aadaf3634d(e) {
    switch (e) {
      case vr.MAIN_ALL:
      case vr.MAIN_FLOOR_ITEMS:
        return [
          vr.const_394,
          vr.const_1048,
          vr.const_151,
          vr.const_996,
          vr.TYPE_LTD,
          vr.const_1368,
          vr.TYPE_CREDIT_FURNI,
          vr.TYPE_CLOTHES,
          vr.const_1051,
          vr.TYPE_COLLECTIBLES,
          vr.const_731,
          vr.const_1178,
          vr.const_616,
        ];
      case vr.MAIN_WALL_ITEMS:
        return [
          vr.const_394,
          vr.TYPE_WINDOWS,
          vr.TYPE_DIMMERS,
          vr.TYPE_STICKIES,
          vr.const_858,
          vr.TYPE_COLLECTIBLES,
          vr.const_731,
          vr.const_1178,
          vr.const_616,
        ];
      case vr.MAIN_ROOM_LAYOUT:
        return [vr.const_394, vr.TYPE_FLOORS, vr.TYPE_WALLPAPERS, vr.TYPE_LANDSCAPE];
      default:
        return [vr.const_394];
    }
  }
  getSelectedFilterId(e, r) {
    if (r.length === 0) return "";
    let t = e?.selection ?? 0;
    return ((t < 0 || t >= r.length) && (t = 0), r[t] ?? "");
  }
  findFilterIndex(e, r) {
    let t = e.indexOf(r);
    return t >= 0 ? t : 0;
  }
  getMainFilterLabel(e) {
    return (
      this.var_38?.controller.localization?.getLocalization(`inventory.furni.filter.main.${e}`) ??
      ""
    );
  }
  getTypeFilterLabel(e) {
    return (
      this.var_38?.controller.localization?.getLocalization(`inventory.furni.filter.type.${e}`) ??
      ""
    );
  }
  var_136() {
    let e = this._view?.findChildByName("items.shown");
    e == null || this.var_605 == null || this.var_38 == null || (e.visible = !1);
  }
  _r9e95959d13d0ed = n(() => {
    for (let e of this._re0b698839cb087)
      if (!e._r1bc368633712e0) {
        e._r1aa78f2f386113(!1);
        break;
      }
    this.RoomPreviewer?._r7314b55e8d0d86();
  }, "_r9e95959d13d0ed");
}
