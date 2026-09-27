// Estratto da HabboAirLauncher.deobf.js, riga 341179.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/memenu/MeMenuNewController.as
// Nome offuscato: _i0b3f8b77a65efb

class a extends AbstractSubMenuController {
  static {
    n(this, "MeMenuNewController");
  }
  static USE_GUIDE_TOOL = "USE_GUIDE_TOOL";
  _r396534f73e1f3f;
  _r682abf1b4da6aa = null;
  constructor(e, r) {
    (super(e, r, "me_menu_new_view_xml", Me.MEMENU),
      e.getBoolean("guides.enabled") || this.setGuideToolVisibility(!1),
      (!e.getBoolean("classic.collectibles.hub.enabled") || !e.getBoolean("collectibles.hub.enabled")) &&
        this.setCollectiblesVisibility(!1),
      this._re5d7fbc2405e68(!1),
      (this._r396534f73e1f3f = new MeMenuNewIconLoader(e)));
  }
  dispose() {
    this.disposed ||
      (this._r682abf1b4da6aa?.dispose(),
      (this._r682abf1b4da6aa = null),
      this._r396534f73e1f3f?.dispose(),
      (this._r396534f73e1f3f = null),
      super.dispose());
  }
  set unseenMinimailsCount(e) {
    this.setUnseenItemCount("minimail", e);
  }
  set unseenForumsCount(e) {
    this.setUnseenItemCount("forums", e);
  }
  toggleVisibility() {
    if (
      (super.toggleVisibility(),
      this._r682abf1b4da6aa?.dispose(),
      (this._r682abf1b4da6aa = null),
      this.window.visible)
    ) {
      if (!this.toolbar.getBoolean("talent.track.enabled")) {
        let e = this.window.findChildByName("talents");
        e != null && (e.visible = !1);
      }
      if (this.toolbar.getBoolean("guides.enabled")) {
        let e = this.toolbar.sessionDataManager?.isPerkAllowed(a.USE_GUIDE_TOOL) ?? !1;
        this.setGuideToolVisibility(e);
      }
    }
    this.reposition();
  }
  onSubMenuItemClick(e) {
    switch (e) {
      case "profile":
        this.toolbar.connection?.send(new class_2134(this.toolbar.sessionDataManager?.userId ?? 0));
        break;
      case "minimail":
        Ae.openMinimail("#mail/inbox/");
        break;
      case "rooms":
        this.toolbar.navigator?.showOwnRooms();
        break;
      case "talents":
        this.toolbar.connection?.send(new class_2687(this.toolbar.sessionDataManager?.currentTalentTrack ?? ""));
        break;
      case "achievements":
        this.toolbar.questEngine?._r771098bda9d4ec();
        break;
      case "guide":
        this.toolbar._r2b0be5baed9721("GUIDE");
        break;
      case "clothes":
        this.toolbar.context._r6b6c989018eb05("avatareditor/open");
        break;
      case "forums":
        this.toolbar.context._r6b6c989018eb05("groupforum/list/my");
        break;
      case "collectibles":
        this.toolbar.context._r6b6c989018eb05("collectibles/open");
        break;
    }
  }
  _rdd12af87bae3e7 = n((e) => {
    (e._re9c693c8b69b04 === Me.MEMENU ? this.toggleVisibility() : (this.window.visible = !1),
      e._re9c693c8b69b04 !== Me.MEMENU && (this._r682abf1b4da6aa?.dispose(), (this._r682abf1b4da6aa = null)));
  }, "_rdd12af87bae3e7");
  setGuideToolVisibility(e) {
    let r = this.window.findChildByName("guide");
    if (r == null) return;
    r.visible = e;
    let t = this.window.findChildByName("profile");
    this.window.height = e ? r.bottom + 5 : (t?.bottom ?? this.window.height) + 5;
  }
  setCollectiblesVisibility(e) {
    let r = this.window.findChildByName("collectibles");
    r != null && (r.visible = e);
  }
  _re5d7fbc2405e68(e) {
    let r = this.window.findChildByName("minimail");
    r != null && (r.visible = e);
  }
}
