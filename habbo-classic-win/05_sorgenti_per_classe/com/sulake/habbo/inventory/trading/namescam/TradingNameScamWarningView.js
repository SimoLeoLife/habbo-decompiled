// Extracted from HabboAirLauncher.deobf.js, line 240214.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/trading/namescam/TradingNameScamWarningView.as
// Obfuscated name: _i99839d6e8d7d7f

class a {
  constructor(e, r, t, i) {
    this.var_63 = e;
    this._windowManager = r;
    this._localization = i;
    let s = t?.getAssetByName("inventory_trading_name_scam_warning_xml")?.content;
    ((this._window = s != null ? this._windowManager?.buildFromXML(s, a.DESKTOP_WINDOW_LAYER) : null),
      this._window?.enableLookupCache(),
      (this._r94cc33a3089389 = new UnkEventDispatcherWrapperSubclass_05394e(1e3, a.var_1028)),
      this._r94cc33a3089389.addEventListener(DeBouncer.addEventListener, this._r2180e3ad8e093d),
      this.headerCloseButton?.addEventListener(u.CLICK, this.onWindowClose),
      this.dismissButton?.addEventListener(u.CLICK, this.onWindowClose),
      this.openProfileButton?.addEventListener(u.CLICK, this.onOpenProfileClicked));
  }
  static {
    n(this, "TradingNameScamWarningView");
  }
  static DESKTOP_WINDOW_LAYER = 1;
  static var_1028 = 6;
  static _r054b52259b7179 = 6;
  _window = null;
  _r94cc33a3089389 = null;
  var_1115 = 0;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  show(e) {
    if (this._disposed || e == null || this._window == null || this._localization == null) return;
    ((this._window.caption = this._localization.getLocalization(
      "inventory.trading.namescam.title",
    )),
      this.warningText != null &&
        ((this.warningText.text = this._localization.getLocalizationWithParams(
          "inventory.trading.namescam.warning",
          "",
          "trader_name",
          e._r795f812a1238c7,
        )),
        (this.warningText.height = this.warningText.textHeight + a._r054b52259b7179)),
      this.traderLabel != null &&
        (this.traderLabel.text = this._localization.getLocalization(
          "inventory.trading.namescam.trader",
        )),
      this.traderNameText != null && (this.traderNameText.text = e._r795f812a1238c7),
      this.openProfileButton != null && (this.openProfileButton.id = e.tradedUserId));
    let r = this.traderAvatar?.widget;
    (r != null && ((r.figure = e.tradedUserFigure), (r.userId = e.tradedUserId)),
      this.updateMatchesSection(
        this.roomMatchesSection,
        this.roomMatchesHeader,
        this.roomMatchesText,
        "inventory.trading.namescam.similar_in_room",
        e.similarInRoom,
      ),
      this.updateMatchesSection(
        this.friendMatchesSection,
        this.friendMatchesHeader,
        this.friendMatchesText,
        "inventory.trading.namescam.similar_in_friends",
        e.similarInFriends,
      ),
      this._ref64c6b8811c67(),
      this._window.parent == null &&
        (this._windowManager?.getDesktop(a.DESKTOP_WINDOW_LAYER) ?? null)?.addChild(this._window),
      this._window.center(),
      this._window.activate());
  }
  hide() {
    (this.stopCloseLockCountdown(),
      this._windowManager != null &&
        this._window != null &&
        this._window.parent != null &&
        this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER)?.removeChild(this._window));
  }
  dispose() {
    this._disposed ||
      (this.headerCloseButton?.removeEventListener(u.CLICK, this.onWindowClose),
      this.dismissButton?.removeEventListener(u.CLICK, this.onWindowClose),
      this.openProfileButton?.removeEventListener(u.CLICK, this.onOpenProfileClicked),
      this._r94cc33a3089389?.removeEventListener(DeBouncer.addEventListener, this._r2180e3ad8e093d),
      this.hide(),
      (this._r94cc33a3089389 = null),
      this._window?.dispose(),
      (this._window = null),
      (this._windowManager = null),
      (this._localization = null),
      (this.var_63 = null),
      (this._disposed = !0));
  }
  _ref64c6b8811c67() {
    ((this.var_1115 = a.var_1028),
      this._r94cc33a3089389?.reset(),
      this._r94cc33a3089389?.start(),
      this.updateCloseLockUI());
  }
  stopCloseLockCountdown() {
    (this._r94cc33a3089389?.stop(),
      this._r94cc33a3089389?.reset(),
      (this.var_1115 = 0),
      this.updateCloseLockUI());
  }
  _r2180e3ad8e093d = n((e) => {
    if (((this.var_1115 -= 1), this.var_1115 <= 0)) {
      this.stopCloseLockCountdown();
      return;
    }
    this.updateCloseLockUI();
  }, "_r2180e3ad8e093d");
  updateCloseLockUI() {
    this.var_1115 > 0
      ? (this.dismissButton?.disable(),
        this.headerCloseButton?.disable(),
        this.closeCountdownText != null &&
          ((this.closeCountdownText.visible = !0),
          (this.closeCountdownText.text =
            this._localization?.getLocalizationWithParams(
              "inventory.trading.namescam.close_countdown",
              "",
              "seconds",
              String(this.var_1115),
            ) ?? "")))
      : (this.dismissButton?.enable(),
        this.headerCloseButton?.enable(),
        this.closeCountdownText != null &&
          ((this.closeCountdownText.text = ""), (this.closeCountdownText.visible = !1)));
  }
  updateMatchesSection(e, r, t, i, s) {
    if (e == null || t == null) return;
    let o = s != null && s.length > 0;
    if (((e.visible = o), !o)) {
      ((e.height = 0), (t.text = ""));
      return;
    }
    (r != null && (r.text = this._localization?.getLocalization(i) ?? i),
      (t.text = s.join("\r")),
      (t.height = t.textHeight + a._r054b52259b7179),
      (e.height = t.y + t.height + a._r054b52259b7179));
  }
  onOpenProfileClicked = n((...e) => {
    let r = e[0];
    r == null ||
      r.type !== u.CLICK ||
      this.var_63?.openProfile(this.openProfileButton?.id ?? 0);
  }, "onOpenProfileClicked");
  onWindowClose = n((...e) => {
    let r = e[0];
    r == null || r.type !== u.CLICK || this.var_1115 > 0 || this.hide();
  }, "onWindowClose");
  get headerCloseButton() {
    return this._window?.findChildByName("header_button_close") ?? null;
  }
  get warningText() {
    return this._window?.findChildByName("warning_text");
  }
  get traderLabel() {
    return this._window?.findChildByName("trader_label");
  }
  get traderNameText() {
    return this._window?.findChildByName("trader_name_text");
  }
  get traderAvatar() {
    return this._window?.findChildByName("trader_avatar");
  }
  get openProfileButton() {
    return this._window?.findChildByName("open_profile_button");
  }
  get roomMatchesSection() {
    return this._window?.findChildByName("room_matches_section");
  }
  get roomMatchesHeader() {
    return this._window?.findChildByName("room_matches_header");
  }
  get roomMatchesText() {
    return this._window?.findChildByName("room_matches_text");
  }
  get friendMatchesSection() {
    return this._window?.findChildByName("friend_matches_section");
  }
  get friendMatchesHeader() {
    return this._window?.findChildByName("friend_matches_header");
  }
  get friendMatchesText() {
    return this._window?.findChildByName("friend_matches_text");
  }
  get dismissButton() {
    return this._window?.findChildByName("close_button");
  }
  get closeCountdownText() {
    return this._window?.findChildByName("close_countdown_text");
  }
}
