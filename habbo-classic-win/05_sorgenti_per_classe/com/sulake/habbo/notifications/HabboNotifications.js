// Extracted from HabboAirLauncher.deobf.js, line 263923.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/HabboNotifications.as
// Obfuscated name: _idfb48f56b7ba09

class extends ue {
  static {
    n(this, "HabboNotifications");
  }
  _raeaf667650bf4f = null;
  _r232ba47defdbce = null;
  var_2522 = !1;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboInventory(),
        (e) => {
          this._inventory = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboFriendList(),
        (e) => {
          this._friendList = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._communication = e;
      }),
      new ComponentDependency(
        new IIDRoomEngine(),
        (e) => {
          this._roomEngine = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboCatalog(),
        (e) => {
          this._catalog = e;
        },
        !1,
        [
          {
            type: CatalogEvent.CATALOG_BUILDER_MEMBERSHIP_EXPIRED,
            callback: n((e) => this._r5e9eb1ca5a54d9(e), "callback"),
          },
          {
            type: CatalogEvent.CATALOG_BUILDER_MEMBERSHIP_IN_GRACE,
            callback: n((e) => this._rf2abeb0ad6ddc9(e), "callback"),
          },
          { type: CatalogEvent.COLLECTIBLES_CLAIM_FAIL, callback: n((e) => this._r3f86753b1280f7(e), "callback") },
          { type: CatalogEvent.COLLECTIBLES_CLAIM_SUCCESS, callback: n((e) => this._r9ef86d6856925d(e), "callback") },
          { type: CatalogEvent.COLLECTIBLES_CLAIM_WAIT, callback: n((e) => this._r8b9666d7eef38b(e), "callback") },
          { type: CatalogEvent.COLLECTIBLES_MINT_FAIL, callback: n((e) => this._r3e2096102c92dc(e), "callback") },
          { type: CatalogEvent.COLLECTIBLES_MINT_SUCCESS, callback: n((e) => this._r76cba171b07bf2(e), "callback") },
        ],
      ),
      new ComponentDependency(new IIDHabboToolbar(), (e) => {
        this._r8e2faa0cfd19a2 = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localization = e;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(
        new IIDHabboRoomSessionManager(),
        (e) => {
          this._roomSessionManager = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDHabboHelp(), (e) => {
        this._habboHelp = e;
      }),
      new ComponentDependency(
        new IIDHabboFreeFlowChat(),
        (e) => {
          this._rb7fab1e25a8762 = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDRewardTrackController(),
        (e) => {
          this._rd0ba5bf8e1b91d = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDAvatarRenderManager(),
        (e) => {
          this._avatarRenderManager = e;
        },
        !1,
      ),
    ]);
  }
  get assetLibrary() {
    return this.assets;
  }
  get windowManager() {
    return this._windowManager;
  }
  get localization() {
    return this._localization;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get roomSessionManager() {
    return this._roomSessionManager;
  }
  get catalog() {
    return this._catalog;
  }
  get _r1e876d4b9a9973() {
    return this._r8e2faa0cfd19a2;
  }
  get habboHelp() {
    return this._habboHelp;
  }
  get _r9d040c0cc258d9() {
    return this._rd0ba5bf8e1b91d;
  }
  get _rafd5b9130c4bfd() {
    return this._rb7fab1e25a8762;
  }
  get _rbc2d086cba1f9d() {
    return this._r19bf1660328dcf;
  }
  get _rf55720e30312ea() {
    return this._rb2cd5168d0fe32;
  }
  get disabled() {
    return this.var_2522;
  }
  set disabled(e) {
    this.var_2522 = e;
  }
  get _rec2b40226aa8d1() {
    return this._roomEngine == null || this._inventory == null
      ? null
      : (this._raeaf667650bf4f == null &&
          (this._raeaf667650bf4f = new ProductImageUtility(this._roomEngine, this._inventory)),
        this._raeaf667650bf4f);
  }
  get _r3e2c714bf951d8() {
    return this._roomEngine == null
      ? null
      : (this._r232ba47defdbce == null && (this._r232ba47defdbce = new PetImageUtility(this._roomEngine)),
        this._r232ba47defdbce);
  }
  get communication() {
    return this._communication;
  }
  get _rf0eb5f07c94cfb() {
    return this._avatarRenderManager;
  }
  initComponent() {
    ((this._r19bf1660328dcf = new Zme(this)),
      (this._rf5e5833c73599b = new Ume(this, this._communication)),
      !1);
  }
  dispose() {
    this.disposed ||
      (this._rf5e5833c73599b?.dispose(),
      (this._rf5e5833c73599b = null),
      this._rb2cd5168d0fe32?.dispose(),
      (this._rb2cd5168d0fe32 = null),
      this._r232ba47defdbce?.dispose(),
      (this._r232ba47defdbce = null),
      this._raeaf667650bf4f?.dispose(),
      (this._raeaf667650bf4f = null),
      super.dispose());
  }
  activate() {
    (this._rb2cd5168d0fe32?._r586866eb955f57(!0), this._communication?.connection.send(new class_2195()));
  }
  addSongPlayingNotification(e, r) {
    this._r19bf1660328dcf?.addSongPlayingNotification(e, r);
  }
  addItem(e, r, t = null, i = null, s = null) {
    let o = null;
    (t != null && (o = this.assets.getAssetByName(t)?.content?.clone() ?? null),
      this.addItemWithBitmap(e, r, o, i, s));
  }
  addItemWithBitmap(e, r, t = null, i = null, s = null) {
    this._r19bf1660328dcf?.addItem(e, r, t, null, null, i, s);
  }
  _r9424f972e18454(e) {
    e != null && this._r19bf1660328dcf?._r9424f972e18454(e);
  }
  showNotification(e, r = null) {
    let t = r ?? new B(),
      i = `notification.${e}`;
    if (this.propertyExists(i))
      try {
        let s = JSON.parse(this.getProperty(i));
        for (let [o, d] of Object.entries(s)) t.setProperty(o, d);
      } catch {}
    if (t.getValue("display") === "BUBBLE") {
      let s = this.getNotificationPart(t, e, "message", !0),
        o = this.getNotificationPart(t, e, "linkUrl", !1),
        d = o != null && o.substring(0, 6) === "event:",
        c = this.getNotificationImageUrl(t, e),
        f = null;
      if (c.length > 0 && !c.includes("${image.library.url}")) {
        let l = this.assets.getAssetByName(c);
        l?.content != null && ((f = l.content?.clone() ?? null), f != null && (c = ""));
      }
      this._r19bf1660328dcf?.addItem(s, NotificationType.INFO, f, c.length > 0 ? c : null, null, d ? o.substring(6) : o);
    } else new Gme(this, e, t);
  }
  getNotificationPart(e, r, t, i) {
    if (e?.hasKey(t)) return String(e.getValue(t) ?? "");
    let s = ["notification", r, t].join(".");
    return this._localization?._r23e3b9cecb69d1(s) || i
      ? (this._localization?.getLocalizationWithParamMap(s, s, e) ?? s)
      : "";
  }
  getNotificationImageUrl(e, r) {
    let t = String(e?.getValue("image") ?? "");
    return t.length > 0 ? t : "${image.library.url}notifications/" + r.replace(/\./g, "_") + ".png";
  }
  _r6b6c989018eb05(e) {
    this.context._r6b6c989018eb05(e);
  }
  _rf2abeb0ad6ddc9 = n((e) => {
    this.showNotification("builders_club.membership_in_grace", null);
  }, "_rf2abeb0ad6ddc9");
  _r5e9eb1ca5a54d9 = n((e) => {
    this.showNotification("builders_club.membership_expired", null);
  }, "_r5e9eb1ca5a54d9");
  _r3f86753b1280f7 = n((e) => {
    this.addItem(
      this._localization?.getLocalization("collectibles.claiming.failed") ?? "",
      NotificationType.INFO,
      "icon_curator_stamp_large_png",
    );
  }, "_r3f86753b1280f7");
  _r9ef86d6856925d = n((e) => {
    this.addItem(
      this._localization?.getLocalization("collectibles.claiming.success") ?? "",
      NotificationType.INFO,
      "icon_curator_stamp_large_png",
    );
  }, "_r9ef86d6856925d");
  _r8b9666d7eef38b = n((e) => {
    this.addItem(
      this._localization?.getLocalization("collectibles.claiming.wait") ?? "",
      NotificationType.INFO,
      "icon_curator_stamp_large_png",
    );
  }, "_r8b9666d7eef38b");
  _r3e2096102c92dc = n((e) => {
    this.addItem(
      this._localization?.getLocalization("shop.minting.failed") ?? "",
      NotificationType.INFO,
      "icon_curator_stamp_large_png",
    );
  }, "_r3e2096102c92dc");
  _r76cba171b07bf2 = n((e) => {
    this.addItem(
      this._localization?.getLocalization("shop.minting.success") ?? "",
      NotificationType.INFO,
      "icon_curator_stamp_large_png",
    );
  }, "_r76cba171b07bf2");
}
