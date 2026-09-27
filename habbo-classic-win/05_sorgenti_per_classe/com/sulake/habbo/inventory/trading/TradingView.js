// Estratto da HabboAirLauncher.deobf.js, riga 239420.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/trading/TradingView.as
// Nome offuscato: _i09789c2d6b65b1

class a {
  constructor(e, r, t, i, s, o) {
    this._r302f5b4f2cc605 = e;
    this._windowManager = r;
    this.var_997 = t;
    this._roomEngine = i;
    this._localization = s;
    this._soundManager = o;
    let d = this.var_997?.getAssetByName("item_popup_xml"),
      c = d?.content != null ? this._windowManager?.buildFromXML(d.content) : null;
    (c != null &&
      ((c.visible = !1),
      (this._r803dacdf5b58a8 = new Qm(
        c,
        this.var_997,
        this._windowManager,
        this._r302f5b4f2cc605?._r7e20a768d73d22() ?? null,
      ))),
      this._soundManager?.events.addEventListener?.("SIR_TRAX_SONG_INFO_RECEIVED", this.onSongInfoReceivedEvent));
  }
  static {
    n(this, "TradingView");
  }
  static ALERT_SCAM = 0;
  static ALERT_OTHER_CANCELLED = 1;
  static ALERT_ALREADY_OPEN = 2;
  static TRADE_UI_SPACING = 7;
  _disposed = !1;
  var_679 = !1;
  var_79 = null;
  _windowMin = null;
  var_382 = null;
  var_1585 = null;
  _isMinimized = !1;
  _r803dacdf5b58a8 = null;
  _rd61a8b3cd399fc = [-1, null, !1];
  get disposed() {
    return this._disposed;
  }
  get visible() {
    return this.var_679;
  }
  get windowManager() {
    if (this._windowManager == null) throw new Error("TradingView has been disposed.");
    return this._windowManager;
  }
  dispose() {
    this._disposed ||
      (this.var_79?.dispose(),
      (this.var_79 = null),
      this._windowMin?.dispose(),
      (this._windowMin = null),
      this.var_382 != null &&
        (this.var_382.removeEventListener(DeBouncer.addEventListener, this._r97644bb91fd095),
        this.var_382.stop(),
        (this.var_382 = null)),
      this._r803dacdf5b58a8?.dispose(),
      (this._r803dacdf5b58a8 = null),
      this._soundManager?.events.removeEventListener?.(
        "SIR_TRAX_SONG_INFO_RECEIVED",
        this.onSongInfoReceivedEvent,
      ),
      (this._soundManager = null),
      (this._r302f5b4f2cc605 = null),
      (this._windowManager = null),
      (this.var_997 = null),
      (this._roomEngine = null),
      (this._localization = null),
      (this.var_1585 = null),
      (this._rd61a8b3cd399fc = null),
      (this._disposed = !0));
  }
  setup(e, r, t, i) {
    (this.setMinimized(!1),
      this.hideOwnUserNotification(),
      this.hideOtherUserNotification(),
      !r && !i
        ? (this.showInfoMessage("${inventory.trading.warning.both_accounts_disabled}"),
          this.showOwnUserNotification(""),
          this.showOtherUserNotification(""))
        : (r || this.showOwnUserNotification("${inventory.trading.warning.own_account_disabled}"),
          i || this.showOtherUserNotification("${inventory.trading.warning.others_account_disabled}")));
  }
  getWindowContainer() {
    return (
      this.var_79 == null &&
        ((this.var_79 = this.createNormalWindow()), this.showHighlightInfo(null)),
      this._windowMin == null && (this._windowMin = this.createMinimizedWindow()),
      this._isMinimized ? this._windowMin : (this.resizeWindow(!0), this.var_79)
    );
  }
  setMinimized(e = !1) {
    this._isMinimized = e;
  }
  updateItemList(e) {
    if (this.var_79 == null || this._r302f5b4f2cc605 == null) return;
    let r = e === this._r302f5b4f2cc605._r91daa520f2e734,
      t = r ? this._r302f5b4f2cc605._re686579f4fa77c : this._r302f5b4f2cc605._reac3de971475b5,
      i = r ? this._r302f5b4f2cc605._r6b6ffd2dbb483a : this._r302f5b4f2cc605._r6d75f838a2611e,
      s = r ? this.getOtherUsersItemGrid() : this.getOwnUsersItemGrid();
    (s != null && a.updateItemsGrid(s, t, i), this.updateActionState());
  }
  _rd8a0b38a03d366() {
    (this._r5ef4d765a273a7(this.getOwnUsersItemGrid()), this._r5ef4d765a273a7(this.getOtherUsersItemGrid()));
  }
  updateUserInterface() {
    if (this.var_79 == null || this._r302f5b4f2cc605 == null) return;
    this.updateActionState();
    let e = this.var_79.findChildByTag("OTHER_USER_NAME");
    e != null && (e.text = this._r302f5b4f2cc605.otherUserName);
    let r = this.var_79.findChildByTag("OWN_USER_LOCK");
    r != null &&
      (r.assetUri = this._r302f5b4f2cc605._r2bd361f8f31a77
        ? "inventory_trading_trading_locked_icon"
        : "inventory_trading_trading_unlocked_icon");
    let t = this.var_79.findChildByTag("OTHER_USER_LOCK");
    t != null &&
      (t.assetUri = this._r302f5b4f2cc605._rb9b71089d1fb9e
        ? "inventory_trading_trading_locked_icon"
        : "inventory_trading_trading_unlocked_icon");
  }
  updateActionState() {
    if (this.var_79 == null || this._r302f5b4f2cc605 == null) return;
    let e = this.var_79.findChildByName("button_accept"),
      r = this.var_79.findChildByName("button_cancel");
    switch (
      (this._r302f5b4f2cc605._r7e20a768d73d22().getBoolean("trading.warning.enabled") &&
        (this._r302f5b4f2cc605._rdd580b35b4c224()
          ? this.showHighlightInfo(
              this._localization?.getLocalization(
                "inventory.trading.warning.credits",
                "inventory.trading.warning.credits",
              ) ?? "inventory.trading.warning.credits",
            )
          : this.showHighlightInfo(null)),
      this.showSilverFeeInfo(
        this._r302f5b4f2cc605._r471a79b453b508,
        this._r302f5b4f2cc605._r6153f7218b625e,
        this._r302f5b4f2cc605._r87e7818b304030,
      ),
      this.showOwnOfferInfo(this._r302f5b4f2cc605._rf6f6fdcb04d727, this._r302f5b4f2cc605._r3274da186156f8),
      this.showOtherOfferInfo(this._r302f5b4f2cc605._rd182e16d9472b4, this._r302f5b4f2cc605._rcaf09444b7d3c2),
      this._r302f5b4f2cc605.state)
    ) {
      case Id._r3defa7c8a1c9b6:
        (this.otherHasAnyOffer(
          e,
          (this._r302f5b4f2cc605._r0d196c6ead9389 || this._r302f5b4f2cc605._r905152608fd89c) &&
            this._r302f5b4f2cc605.enable(),
        ),
          e != null && (e.caption = "${inventory.trading.accept}"));
        break;
      case Id.TRADING_STATE_RUNNING:
        (this.otherHasAnyOffer(
          e,
          (this._r302f5b4f2cc605._r0d196c6ead9389 || this._r302f5b4f2cc605._r905152608fd89c) &&
            this._r302f5b4f2cc605.enable(),
        ),
          e != null &&
            (e.caption = this._r302f5b4f2cc605._r2bd361f8f31a77
              ? "${inventory.trading.modify}"
              : "${inventory.trading.accept}"),
          this.showInfoMessage("${inventory.trading.info.add}"));
        break;
      case Id.TRADING_STATE_COUNTDOWN:
        (this.otherHasAnyOffer(e, !1),
          e != null && (e.caption = "${inventory.trading.countdown}"),
          this.showInfoMessage("${inventory.trading.info.confirm}"));
        break;
      case Id.TRADING_STATE_CONFIRMING:
        (this.otherHasAnyOffer(e, !0),
          e != null && (e.caption = "${inventory.trading.confirm}"),
          this.showInfoMessage("${inventory.trading.info.confirm}"));
        break;
      case Id.TRADING_STATE_CONFIRMED:
        (this.otherHasAnyOffer(e, !1), this.showInfoMessage("${inventory.trading.info.waiting}"));
        break;
      case Id.TRADING_STATE_COMPLETED:
        (this.otherHasAnyOffer(e, !1),
          e != null && (e.caption = "${inventory.trading.accept}"),
          this.showInfoMessage("${inventory.trading.info.confirm}"));
        break;
      case Id.TRADING_STATE_CANCELLED:
        break;
      default:
        throw new Error(`Unknown trading progress state: "${this._r302f5b4f2cc605.state}"`);
    }
    l_.disableButton(r, this._r302f5b4f2cc605._r893fde6d3c3593());
  }
  showInfoMessage(e) {
    let r = this.var_79?.findChildByName("help_text");
    r != null && ((r.text = e), (r.visible = !0));
  }
  showOwnUserNotification(e) {
    let r = this.var_79?.findChildByName("info_text_0"),
      t = this.var_79?.findChildByName("item_grid_0");
    (r != null && ((r.text = e), (r.visible = !0)), t != null && (t.visible = !1));
  }
  hideOwnUserNotification() {
    let e = this.var_79?.findChildByName("info_text_0"),
      r = this.var_79?.findChildByName("item_grid_0");
    (e != null && (e.visible = !1), r != null && (r.visible = !0));
  }
  showOtherUserNotification(e) {
    let r = this.var_79?.findChildByName("info_text_1"),
      t = this.var_79?.findChildByName("item_grid_1");
    (r != null && ((r.text = e), (r.visible = !0)), t != null && (t.visible = !1));
  }
  hideOtherUserNotification() {
    let e = this.var_79?.findChildByName("info_text_1"),
      r = this.var_79?.findChildByName("item_grid_1");
    (e != null && (e.visible = !1), r != null && (r.visible = !0));
  }
  alertTradeOpenFailed(e) {
    let r = `inventory.trading.openfail.${e.getParser().reason}`;
    (this._windowManager?.registerLocalizationParameter(r, "otherusername", e.getParser().otherUserName),
      this._windowManager?._r3651220a1507f2(
        "${inventory.trading.openfail.title}",
        "${inventory.trading.openfail.caption}",
        `\${${r}}`,
      ));
  }
  alertPopup(e) {
    switch (e) {
      case a.ALERT_SCAM:
        this._windowManager?.alert(
          "${inventory.trading.notification.title}",
          "${inventory.trading.warning.other_not_offering}",
          0,
          this._r565745fa81806f,
        );
        break;
      case a.ALERT_OTHER_CANCELLED:
        this._windowManager?.alert(
          "${inventory.trading.notification.title}",
          "${inventory.trading.info.closed}",
          0,
          this._r565745fa81806f,
        );
        break;
      case a.ALERT_ALREADY_OPEN:
        this._windowManager?.alert(
          "${inventory.trading.notification.title}",
          "${inventory.trading.info.already_open}",
          0,
          this._r565745fa81806f,
        );
        break;
    }
  }
  startConfirmCountdown() {
    (this.var_382 == null &&
      ((this.var_382 = new _i05394ecc0c0c4d(1e3, 3)),
      this.var_382.addEventListener(DeBouncer.addEventListener, this._r97644bb91fd095)),
      this.var_382.reset(),
      (this.var_382.repeatCount = 3),
      this.var_382.start(),
      this._windowManager?.registerLocalizationParameter("inventory.trading.countdown", "counter", "3"),
      this.updateUserInterface());
  }
  _rbe2c086e6bdc9b() {
    this.var_382?.reset();
  }
  imageReady(e, r) {
    if (this._r302f5b4f2cc605 == null) return;
    let t = !1;
    for (let i of this._r302f5b4f2cc605._reac3de971475b5.getValues())
      i._rb1cbf84bd2e220 === e && ((i._r145cc0394d677f = r), (t = !0));
    (t && this.updateItemList(this._r302f5b4f2cc605._rb286a1f9faeb60), (t = !1));
    for (let i of this._r302f5b4f2cc605._re686579f4fa77c.getValues())
      i._rb1cbf84bd2e220 === e && ((i._r145cc0394d677f = r), (t = !0));
    t && this.updateItemList(this._r302f5b4f2cc605._r91daa520f2e734);
  }
  imageFailed(e) {}
  _r1c386c8571c5d9(e) {
    (this._rc3816c18e2fbc8(),
      e != null && ((this.var_1585 = e), (this.var_1585.isSelected = !0)));
  }
  _rc3816c18e2fbc8() {
    this.var_1585 != null &&
      ((this.var_1585.isSelected = !1), (this.var_1585 = null));
  }
  static updateItemsGrid(e, r, t = null) {
    let i = 0;
    for (; i < r.length; i++) {
      let s = r.getWithIndex(i),
        o = e.getGridItemAt(i);
      if (o != null) {
        for (o.id = i; o.numChildren > 0;) o.removeChildAt(0);
        if (s?.window != null) {
          let d = a.fixItemWindow(s.window);
          (o.addChild(d), (d.id = i), s.removeIntervalProcedure());
        }
      }
    }
    if (t != null) {
      let s = i;
      for (; i < s + t.length; i++) {
        let o = t.getWithIndex(i - s),
          d = e.getGridItemAt(i);
        if (d != null) {
          for (d.id = i; d.numChildren > 0;) d.removeChildAt(0);
          if (o?.window != null) {
            let c = a.fixItemWindow(o.window);
            (d.addChild(c), (c.id = i), o.removeIntervalProcedure());
          }
        }
      }
    }
    for (; i < e._r72acf104e2c444; i++) {
      let s = e.getGridItemAt(i);
      if (s != null) {
        for (s.id = i; s.numChildren > 0;) s.removeChildAt(0);
        s.invalidate();
      }
    }
  }
  static thumbEventProc(e, r, t, i, s, o, d, c, f, l, b, _) {
    if (i == null || f == null) return;
    let h = null,
      p = null,
      m = e?.type;
    if ((t && m === u.CLICK && i._r4a4d211373e306(r.id), m === u.OVER)) {
      let v = 0;
      if (
        (t
          ? ((v = s?.length ?? 0),
            r.id >= v && o != null ? (p = o.getWithIndex(r.id - v)) : (h = s?.getWithIndex(r.id) ?? null))
          : ((v = d?.length ?? 0),
            r.id >= v && c != null ? (p = c.getWithIndex(r.id - v)) : (h = d?.getWithIndex(r.id) ?? null)),
        p != null)
      ) {
        let R = p.renderableItem,
          T = i._r7e20a768d73d22()._rc4641e5bd6551b?._r93bfd6c6424c93.getProductName(R) ?? "";
        (f.updateContent(r, T, null, R), f.show());
        return;
      }
      if (h == null) return;
      let w = h instanceof fQ ? h : null;
      if (w != null && !t) {
        (f.updateContent(r, w.getItemTooltipText(), w._r145cc0394d677f, null, null, Qm.LOCATION_RIGHT, !1),
          f.show());
        return;
      }
      let I = h.peek();
      if (I == null) return;
      let C = i._r7e20a768d73d22().getItemImage(I),
        W = I.isWallItem ? `\${wallItem.name.${I.type}}` : `\${roomItem.name.${I.type}}`;
      if (
        (I.category === class_1901.POSTER &&
          (W = `\${poster_${I.stuffData.getLegacyString()}_name}`),
        I.category === class_1901.ECOTRON_BOX)
      ) {
        let R = new Date(I.creationYear, I.creationMonth - 1, I.creationDay);
        W = `${l?.getLocalization(`roomItem.name.${I.type}`) ?? W} ${R.toLocaleDateString()}`;
      }
      (I.category === class_1901.TRAX_SONG &&
        b != null &&
        (W = a.getTraxSongFurniName(l, b, h, W, _, !0, r.id, t)),
        f.updateContent(
          r,
          W,
          C,
          null,
          h.peek()?.stuffData ?? null,
          Qm.LOCATION_RIGHT,
          a._rde6b5b86b285ca(i._r7e20a768d73d22(), I),
        ),
        f.show());
    } else m === u.OUT && f.hideDelayed();
  }
  static _rde6b5b86b285ca(e, r) {
    return !!e.products(r.type, class_1803.PRODUCT_TYPE_ITEM)?._rde6b5b86b285ca;
  }
  static getTraxSongFurniName(e, r, t, i, s, o, d = -1, c = !1) {
    let f = t.peek();
    if (f == null) return i;
    let l = r._r716cd8f1931469(f.extra);
    return l != null
      ? (e?._r43eae9731f5b27("songdisc.info", "name", l.name),
        e?._r43eae9731f5b27("songdisc.info", "author", l.creator),
        e?.getLocalization("songdisc.info") ?? i)
      : (o && s != null && ((s[0] = d), (s[1] = t), (s[2] = c), r._rbb1ae2f8cd13c9(f.extra)), i);
  }
  _r565745fa81806f = n((...e) => {
    e[0]?.dispose();
  }, "_r565745fa81806f");
  showHighlightInfo(e) {
    if (this.var_79 == null) return;
    let r = this.var_79.findChildByName("info_border_highlighted"),
      t = this.var_79.findChildByName("info_text_highlighted");
    (r != null && (r.visible = e != null),
      t != null && ((t.visible = e != null), e != null && (t.text = e)),
      this.resizeWindow());
  }
  showSilverFeeInfo(e, r, t) {
    let i = this.silverFeeContainer;
    if (i == null || this._r302f5b4f2cc605 == null) return;
    ((i.visible = this._r302f5b4f2cc605._rf3e5225125e12b()),
      this.yourSilver != null && (this.yourSilver.text = String(r)),
      this.otherSilver != null && (this.otherSilver.text = String(t)));
    let s = r + t,
      o = e <= s ? "000000" : "AC232A";
    this.silverProgress != null &&
      (this.silverProgress.htmlText = `<font color="#${o}">${s}</font>/${e}`);
    let d =
      this._r302f5b4f2cc605.state === Id._r3defa7c8a1c9b6 ||
      this._r302f5b4f2cc605.state === Id.TRADING_STATE_RUNNING;
    if (
      (this.feeMinusButton != null && l_.disableButton(this.feeMinusButton, r <= 0 || !d),
      this.feePlusButton != null)
    ) {
      let c =
        this._r302f5b4f2cc605
          ._r7e20a768d73d22()
          ._rc4641e5bd6551b?.getPurse()
          ?.getActivityPointsForType(et.SILVER) ?? 0;
      l_.disableButton(this.feePlusButton, r + t >= e || r >= c || !d);
    }
    if (this._r302f5b4f2cc605._rf3e5225125e12b() && this.silverFeeInfoText != null) {
      let c =
        e <= 0 ? "inventory.trading.note_silver_fee_free_temporarily" : "inventory.trading.note_silver_fee";
      this.silverFeeInfoText.text = this._localization?.getLocalization(c) ?? c;
    }
    this.resizeWindow();
  }
  resizeWindow(e = !0) {
    this.var_79 != null &&
      (l_.moveAllChildrenToColumn(this.var_79, a.TRADE_UI_SPACING, !e),
      (this.var_79.height = l_.getLowestPoint(this.var_79)),
      this._r302f5b4f2cc605?._r7e20a768d73d22().view?.resizeToFitContents());
  }
  showOwnOfferInfo(e, r) {
    this.showOfferInfo("content_text_1_a", e, "content_text_1_b", r);
  }
  showOtherOfferInfo(e, r) {
    this.showOfferInfo("content_text_2_a", e, "content_text_2_b", r);
  }
  showOfferInfo(e, r, t, i) {
    if (
      !(this._r302f5b4f2cc605?._r7e20a768d73d22().getBoolean("trading.warning.enabled") ?? !1) ||
      this.var_79 == null
    )
      return;
    let s = this.var_79.findChildByName(e);
    s != null &&
      (this._localization?._r43eae9731f5b27("inventory.trading.info.itemcount", "value", String(r)),
      (s.text =
        this._localization?.getLocalization("inventory.trading.info.itemcount") ??
        "inventory.trading.info.itemcount"));
    let o = this.var_79.findChildByName(t);
    o != null &&
      (this._localization?._r43eae9731f5b27("inventory.trading.info.creditvalue", "value", String(i)),
      (o.text =
        this._localization?.getLocalization("inventory.trading.info.creditvalue") ??
        "inventory.trading.info.creditvalue"));
  }
  otherHasAnyOffer(e, r) {
    e != null && (r ? e.enable() : e.disable());
  }
  _r97644bb91fd095 = n(() => {
    this.var_382 != null &&
      (this._windowManager?.registerLocalizationParameter(
        "inventory.trading.countdown",
        "counter",
        String(3 - this.var_382._rdf3dbbec26e6b1),
      ),
      this.var_382._rdf3dbbec26e6b1 === 3 &&
        (this._r302f5b4f2cc605?._r484203fde64a5c(), this.var_382.reset()));
  }, "_r97644bb91fd095");
  onSongInfoReceivedEvent = n((...e) => {
    let r = e[0];
    if (r == null || this._rd61a8b3cd399fc == null || this._r302f5b4f2cc605 == null) return;
    let [t, i, s] = this._rd61a8b3cd399fc;
    if (((this._rd61a8b3cd399fc = [-1, null, !1]), i == null)) return;
    let o = i.peek();
    if (o == null) return;
    if (o.extra !== r.id) {
      this._rd61a8b3cd399fc = [t, i, s];
      return;
    }
    if (
      (s ? this._r302f5b4f2cc605._reac3de971475b5 : this._r302f5b4f2cc605._re686579f4fa77c).getWithIndex(
        t,
      ) !== i
    )
      return;
    let c = a.getTraxSongFurniName(
        this._localization,
        this._soundManager?.soundManager,
        i,
        "",
        this._rd61a8b3cd399fc,
        !1,
      ),
      f = this._r302f5b4f2cc605._r7e20a768d73d22().getItemImage(o),
      l = s ? this.getOwnUsersItemGrid()?.getGridItemAt(t) : this.getOtherUsersItemGrid()?.getGridItemAt(t);
    l != null && this._r803dacdf5b58a8?.updateContent(l, c, f);
  }, "onSongInfoReceivedEvent");
  static fixItemWindow(e) {
    ((e.height = 40), (e.width = 40));
    for (let r = 0; r < e.numChildren; r++) {
      let t = e.getChildAt(r);
      t != null && (t.rectangle = new D(0, 0, 40, 40));
    }
    return e;
  }
  _r5ef4d765a273a7(e) {
    if (e != null)
      for (let r = 0; r < e._r72acf104e2c444; r++) {
        let t = e.getGridItemAt(r);
        if (t != null) for (t.id = r; t.numChildren > 0;) t.removeChildAt(0);
      }
  }
  getOwnUsersItemGrid() {
    return this.var_79?.findChildByTag("OWN_USER_GRID");
  }
  getOtherUsersItemGrid() {
    return this.var_79?.findChildByTag("OTHER_USER_GRID");
  }
  createNormalWindow() {
    let e = this.var_997?.getAssetByName("inventory_trading_xml")?.content,
      r = e != null ? this._windowManager?.buildFromXML(e) : null;
    return r == null
      ? null
      : (this.buildFromXML(r.findChildByTag("OWN_USER_GRID"), this.numGridItems),
        this.buildFromXML(r.findChildByTag("OTHER_USER_GRID"), this._r0b03153308d17b),
        (r.procedure = this.windowEventProc),
        r);
  }
  createMinimizedWindow() {
    let e = this.var_997?.getAssetByName("inventory_trading_minimized_xml")?.content,
      r = e != null ? this._windowManager?.buildFromXML(e) : null;
    return (r != null && (r.procedure = this.windowMininizedEventProc), r);
  }
  buildFromXML(e, r) {
    if (e != null)
      for (let t = 0; t < e._r72acf104e2c444; t++) {
        let i = e.getGridItemAt(t);
        i != null &&
          ((i.id = t), (i.procedure = r), i.addEventListener(u.OVER, r), i.addEventListener(u.OUT, r));
      }
  }
  windowMininizedEventProc = n((...e) => {
    let r = e[0],
      t = e[1];
    if (!(r == null || t == null) && !(r.type !== u.CLICK || this._r302f5b4f2cc605 == null))
      switch (t.name) {
        case "button_continue":
          this._r302f5b4f2cc605._r276c9ba68b4f95();
          break;
        case "button_cancel":
          this._r302f5b4f2cc605._r1718fce2f8e038();
          break;
      }
  }, "windowMininizedEventProc");
  windowEventProc = n((...e) => {
    let r = e[0],
      t = e[1];
    if (!(r == null || t == null) && !(r.type !== u.CLICK || this._r302f5b4f2cc605 == null))
      switch (t.name) {
        case "button_accept":
          switch (this._r302f5b4f2cc605.state) {
            case Id.TRADING_STATE_RUNNING:
              (this._r302f5b4f2cc605._re686579f4fa77c.length === 0 &&
                this._r302f5b4f2cc605._r6b6ffd2dbb483a.length === 0 &&
                !this._r302f5b4f2cc605._r2bd361f8f31a77 &&
                this.alertPopup(a.ALERT_SCAM),
                this._r302f5b4f2cc605._r2bd361f8f31a77
                  ? this._r302f5b4f2cc605._rf3bf5595d038ca()
                  : this._r302f5b4f2cc605._r1766979fae73bd());
              break;
            case Id.TRADING_STATE_CONFIRMING:
              (t.disable(), this._r302f5b4f2cc605._r9c156c5de4c687());
              break;
          }
          break;
        case "button_cancel":
          switch (this._r302f5b4f2cc605.state) {
            case Id.TRADING_STATE_RUNNING:
              this._r302f5b4f2cc605._r1718fce2f8e038();
              break;
            case Id.TRADING_STATE_CONFIRMING:
              this._r302f5b4f2cc605._r0c9c3af8b909a6();
              break;
          }
          break;
        case "silver_minus_button":
          this._r302f5b4f2cc605._r3a3fc773d8c6a7(!1);
          break;
        case "silver_plus_button":
          this._r302f5b4f2cc605._r3a3fc773d8c6a7(!0);
          break;
      }
  }, "windowEventProc");
  numGridItems = n((...e) => {
    let r = e[0],
      t = e[1];
    r == null ||
      t == null ||
      a.thumbEventProc(
        r,
        t,
        !0,
        this._r302f5b4f2cc605,
        this._r302f5b4f2cc605?._reac3de971475b5 ?? null,
        this._r302f5b4f2cc605?._r6d75f838a2611e ?? null,
        this._r302f5b4f2cc605?._re686579f4fa77c ?? null,
        this._r302f5b4f2cc605?._r6b6ffd2dbb483a ?? null,
        this._r803dacdf5b58a8,
        this._localization,
        this._soundManager?.soundManager ?? null,
        this._rd61a8b3cd399fc,
      );
  }, "numGridItems");
  _r0b03153308d17b = n((...e) => {
    let r = e[0],
      t = e[1];
    r == null ||
      t == null ||
      a.thumbEventProc(
        r,
        t,
        !1,
        this._r302f5b4f2cc605,
        this._r302f5b4f2cc605?._reac3de971475b5 ?? null,
        this._r302f5b4f2cc605?._r6d75f838a2611e ?? null,
        this._r302f5b4f2cc605?._re686579f4fa77c ?? null,
        this._r302f5b4f2cc605?._r6b6ffd2dbb483a ?? null,
        this._r803dacdf5b58a8,
        this._localization,
        this._soundManager?.soundManager ?? null,
        this._rd61a8b3cd399fc,
      );
  }, "_r0b03153308d17b");
  get silverFeeContainer() {
    return this.var_79?.findChildByName("silver_container");
  }
  get yourSilver() {
    return this.silverFeeContainer?.findChildByName("your_silver");
  }
  get otherSilver() {
    return this.silverFeeContainer?.findChildByName("other_silver");
  }
  get silverProgress() {
    return this.silverFeeContainer?.findChildByName("silver_progress_html");
  }
  get feeMinusButton() {
    return this.silverFeeContainer?.findChildByName("silver_minus_button");
  }
  get feePlusButton() {
    return this.silverFeeContainer?.findChildByName("silver_plus_button");
  }
  get silverFeeInfoText() {
    return this.silverFeeContainer?.findChildByName("silver_fee_info_text");
  }
}
