// Estratto da HabboAirLauncher.deobf.js, riga 323909.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/memenu/MeMenuWidget.as
// Nome offuscato: _i89645fce0539d9

class a extends RoomWidgetBase {
  static {
    n(this, "MeMenuWidget");
  }
  static MAIN_VIEW = "me_menu_top_view";
  static MY_CLOTHES_VIEW = "me_menu_my_clothes_view";
  static const_634 = "me_menu_dance_moves_view";
  static const_723 = "me_menu_settings_view";
  static SOUND_SETTINGS_VIEW = "me_menu_sound_settings";
  static DEFAULT_VIEW_LOCATION_BOTTOM = new E(95, 440);
  var_77 = null;
  var_33 = null;
  _r20dcbe38b087e8 = 0;
  _r1f25c211a87e6b = 0;
  _rffdd88a0f04a21 = 0;
  _r2c9a7f5b50935b = !1;
  _re59a6258f74ef3 = 0;
  _r0a5be0e57aff4e = !1;
  var_3674 = !1;
  _isActive = !1;
  var_5271 = !1;
  _r8c2cb32ef33105 = 0;
  _r322672563846a4 = !1;
  _config;
  _userId = 0;
  constructor(e, r, t, i, s) {
    (super(e, r, t, i),
      (this._config = s),
      ur.available && (this.var_5271 = s?.getBoolean("client.minimail.embed.enabled") ?? !1),
      e && (e.widget = this),
      this.changeView(a.MAIN_VIEW),
      this.hide());
  }
  dispose() {
    this.disposed ||
      (this.hide(),
      this.var_77?.dispose(),
      (this.var_77 = null),
      (this.var_33 = null),
      (this._config = null),
      super.dispose());
  }
  get handler() {
    return this._handler;
  }
  get mainWindow() {
    return this.var_33;
  }
  get _r961195a6411ff4() {
    return this._r2c9a7f5b50935b;
  }
  get _r05fa11693c7edb() {
    return this._r20dcbe38b087e8 > 0;
  }
  get _rb69c468195d1cc() {
    return this._r20dcbe38b087e8;
  }
  get _r7877526841e248() {
    return this._r1f25c211a87e6b;
  }
  get _rec83777ad37c63() {
    return this._re59a6258f74ef3;
  }
  get habboClubLevel() {
    return this.var_5271;
  }
  get config() {
    return this._config;
  }
  get _r8077167eb58f3e() {
    return this._r0a5be0e57aff4e;
  }
  get isDancing() {
    return this.var_3674;
  }
  set isDancing(e) {
    this.var_3674 = e;
  }
  get userId() {
    return this._userId;
  }
  get habboClubPeriods() {
    return this.handler.container?.messenger?._r18fb9fe57a9088() ?? 0;
  }
  changeView(e) {
    let r = null;
    switch (e) {
      case a.MAIN_VIEW:
        r = new kee(this.config);
        break;
      case a.const_634:
        r = new MeMenuDanceView();
        break;
      case a.const_723:
        r = new _i9512c820b08983();
        break;
      case a.SOUND_SETTINGS_VIEW:
        r = new MeMenuSoundSettingsView();
        break;
      default:
        break;
    }
    if (r != null) {
      (this.var_77?.dispose(), (this.var_77 = r), this.var_77.init(this, e));
      let t = this.mainContainer;
      if (t != null && this.var_77.window != null) {
        for (; t.numChildren > 0;) t.removeChildAt(0);
        t.addChildAt(this.var_77.window, 0);
      }
      this.var_33 != null &&
        ((this.var_33.visible = !0), this.var_33.activate());
    }
    this.updateSize();
  }
  updateSize() {
    if (this.var_77?.window == null || this.var_33 == null) return;
    let e = 5,
      r = this.var_77.window,
      t = this.mainContainer;
    if (t != null)
      if (
        ((r.position = new E(e, e)),
        (t.width = r.width + e * 2),
        (t.height = r.height + e * 2),
        (this._config?.getBoolean("simple.memenu.enabled") ?? !1) &&
          this.handler.container?.toolbar != null)
      ) {
        let i = this.handler.container.toolbar._ra9b27e4a11ddce();
        ((this.var_33.x = i.right + e),
          (this.var_33.y = i.bottom - this.var_33.height));
      } else
        ((this.var_33.x = a.DEFAULT_VIEW_LOCATION_BOTTOM.x),
          (this.var_33.y = a.DEFAULT_VIEW_LOCATION_BOTTOM.y - t.height));
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetMiniMailUpdateEvent.NEW_MESSAGE_NOTIFICATION, this._rb183aa7f5baf72),
      e.addEventListener?.(RoomWidgetMiniMailUpdateEvent.const_700, this._rb183aa7f5baf72),
      e.addEventListener?.(iJ.const_552, this._r123aa9ccbe36aa),
      e.addEventListener?.(rJ.const_839, this._r939a0dba91a154),
      e.addEventListener?.(sm.const_899, this._r866445e714bd1d),
      e.addEventListener?.(tJ.REQUEST_ME_MENU_TOOLBAR_CLICKED_EVENT, this._r275b0421c293ad),
      e.addEventListener?.(RoomWidgetAvatarEditorUpdateEvent.const_600, this._r501cdcdc251b53),
      e.addEventListener?.(RoomWidgetAvatarEditorUpdateEvent.const_518, this._r8ff04a5b03f153),
      e.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_734, this._r8d5ace929db759),
      e.addEventListener?.(Kp.const_79, this._rc2835691c2c171),
      e.addEventListener?.(RoomWidgetUserInfoUpdateEvent.OWN_USER, this.onUserInfo),
      e.addEventListener?.(RoomWidgetSettingsUpdateEvent.const_1025, this._r66d2bc63226c64),
      e.addEventListener?.(RoomWidgetTutorialEvent.const_145, this._r5a647fe1f29a3e),
      e.addEventListener?.(RoomWidgetTutorialEvent.const_1000, this._r5a647fe1f29a3e),
      e.addEventListener?.(RoomWidgetPurseUpdateEvent.CREDIT_BALANCE, this._r607b3db6c10025),
      e.addEventListener?.(RoomWidgetRoomEngineUpdateEvent.NORMAL_MODE, this._r9d065492eaec1a),
      e.addEventListener?.(RoomWidgetRoomEngineUpdateEvent.GAME_MODE, this._r05502aa8c87d41),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetMiniMailUpdateEvent.NEW_MESSAGE_NOTIFICATION, this._rb183aa7f5baf72),
      e.removeEventListener?.(RoomWidgetMiniMailUpdateEvent.const_700, this._rb183aa7f5baf72),
      e.removeEventListener?.(iJ.const_552, this._r123aa9ccbe36aa),
      e.removeEventListener?.(rJ.const_839, this._r939a0dba91a154),
      e.removeEventListener?.(sm.const_899, this._r866445e714bd1d),
      e.removeEventListener?.(tJ.REQUEST_ME_MENU_TOOLBAR_CLICKED_EVENT, this._r275b0421c293ad),
      e.removeEventListener?.(RoomWidgetAvatarEditorUpdateEvent.const_600, this._r501cdcdc251b53),
      e.removeEventListener?.(RoomWidgetAvatarEditorUpdateEvent.const_518, this._r8ff04a5b03f153),
      e.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_734, this._r8d5ace929db759),
      e.removeEventListener?.(Kp.const_79, this._rc2835691c2c171),
      e.removeEventListener?.(RoomWidgetUserInfoUpdateEvent.OWN_USER, this.onUserInfo),
      e.removeEventListener?.(RoomWidgetSettingsUpdateEvent.const_1025, this._r66d2bc63226c64),
      e.removeEventListener?.(RoomWidgetTutorialEvent.const_145, this._r5a647fe1f29a3e),
      e.removeEventListener?.(RoomWidgetTutorialEvent.const_1000, this._r5a647fe1f29a3e),
      e.removeEventListener?.(RoomWidgetPurseUpdateEvent.CREDIT_BALANCE, this._r607b3db6c10025),
      e.removeEventListener?.(RoomWidgetRoomEngineUpdateEvent.NORMAL_MODE, this._r9d065492eaec1a),
      e.removeEventListener?.(RoomWidgetRoomEngineUpdateEvent.GAME_MODE, this._r05502aa8c87d41),
      super.unregisterUpdateEvents(e));
  }
  hide(e = null) {
    (this.var_77 != null &&
      (this.var_33 != null &&
        this.var_77.window != null &&
        this.var_33.windowIsChild(this.var_77.window) &&
        this.var_33.removeChild(this.var_77.window),
      this.var_77.dispose(),
      (this.var_77 = null)),
      this.var_33 != null && (this.var_33.visible = !1),
      (this._isActive = !1));
  }
  release() {
    (this.hide(), super.release());
  }
  get mainContainer() {
    if (this.var_33 == null) {
      let e = this._assets?.getAssetByName("memenu");
      e != null && (this.var_33 = this.windowManager?.buildFromXML(e.content));
    }
    return this.var_33?.findChildByTag("MAIN_CONTENT");
  }
  onUserInfo = n((e) => {
    this._userId = e.webID;
  }, "onUserInfo");
  _r66d2bc63226c64 = n((e) => {
    this._isActive &&
      this.var_77?.window?.name === a.SOUND_SETTINGS_VIEW &&
      this.var_77.updateSettings(e);
  }, "_r66d2bc63226c64");
  _r5a647fe1f29a3e = n((e) => {
    switch (e.type) {
      case RoomWidgetTutorialEvent.const_1000:
        if (!this._isActive || this.var_77?.window?.name !== a.MAIN_VIEW) return;
        this.var_77.setIconAssets("clothes_icon", a.MAIN_VIEW, "clothes_highlighter_blue");
        break;
      case RoomWidgetTutorialEvent.const_145:
        this.hide();
        break;
    }
  }, "_r5a647fe1f29a3e");
  _r275b0421c293ad = n((e) => {
    if (this._isActive) {
      if (this.var_33 != null && Dl.isHiddenByOtherWindows(this.var_33)) {
        this.var_33.activate();
        return;
      }
      this._isActive = !1;
    } else this._isActive = !0;
    if (this._isActive) {
      let r = new RoomWidgetMeMenuMessage(RoomWidgetMeMenuMessage.const_570);
      (this._r1515e6bde00451?.RoomWidgetLetUserInMessage(r), this.changeView(a.MAIN_VIEW));
    } else this.hide();
  }, "_r275b0421c293ad");
  _r866445e714bd1d = n((e) => {
    this._r0a5be0e57aff4e = !1;
    for (let r of e.effects ?? []) r?._r780270c6ffe49b && (this._r0a5be0e57aff4e = !0);
  }, "_r866445e714bd1d");
  _r8d5ace929db759 = n((e) => {
    this.var_77?.window?.name !== a.MY_CLOTHES_VIEW && this.hide();
  }, "_r8d5ace929db759");
  _r501cdcdc251b53 = n((e) => {
    this.var_77?.window?.name === a.MY_CLOTHES_VIEW && this.changeView(a.MAIN_VIEW);
  }, "_r501cdcdc251b53");
  _r8ff04a5b03f153 = n((e) => {
    this.var_77?.window?.name === a.MY_CLOTHES_VIEW && this.changeView(a.MAIN_VIEW);
  }, "_r8ff04a5b03f153");
  _r123aa9ccbe36aa = n((e) => {}, "_r123aa9ccbe36aa");
  _rb183aa7f5baf72 = n((e) => {
    this.var_77?.updateUnseenItemCount(kee.VIEW_ELEMENT_TYPE_MINI_MAIL, this.habboClubPeriods);
  }, "_rb183aa7f5baf72");
  _r939a0dba91a154 = n((e) => {}, "_r939a0dba91a154");
  _rc2835691c2c171 = n((e) => {
    let r = e._rc213862a5a8e4e !== this._r20dcbe38b087e8;
    ((this._r20dcbe38b087e8 = e._rc213862a5a8e4e),
      (this._r1f25c211a87e6b = e._r7adc9208907f2a),
      (this._rffdd88a0f04a21 = e._r1e155e379259aa),
      (this._r2c9a7f5b50935b = e._r20e88b22bff84c),
      (r = r || e.clubLevel !== this._re59a6258f74ef3),
      (this._re59a6258f74ef3 = e.clubLevel),
      r && this.var_77?.window != null && this.changeView(this.var_77.window.name));
  }, "_rc2835691c2c171");
  _r607b3db6c10025 = n((e) => {
    ((this._r8c2cb32ef33105 = e.balance),
      this.localizations?._r43eae9731f5b27(
        "widget.memenu.credits",
        "credits",
        this._r8c2cb32ef33105.toString(),
      ));
  }, "_r607b3db6c10025");
  _r9d065492eaec1a = n((e) => {
    this._r322672563846a4 = !1;
  }, "_r9d065492eaec1a");
  _r05502aa8c87d41 = n((e) => {
    this._r322672563846a4 = !0;
  }, "_r05502aa8c87d41");
}
