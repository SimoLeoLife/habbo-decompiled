// Extracted from HabboAirLauncher.deobf.js, line 263379.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/singular/NewFeatureNotification.as
// Obfuscated name: _i2706e50e7be06d

class a {
  constructor(e, r, t, i, s, o) {
    this._assets = e;
    this._windowManager = r;
    this._toolbar = t;
    this.var_161 = i;
    this._notifications = s;
    this._key = o;
    this._assets == null ||
      this._windowManager == null ||
      ((this.var_676 =
        this.getString(`notifications.new_feature.type.${this._key}`) || a.FEATURE_TYPE_NORMAL),
      (this._r62a1d8ff42ac09 = this.getString(`notifications.new_feature.expiry.${this._key}`)),
      (this.var_2521 = this.getString(`notifications.new_feature.count_down_to.${this._key}`)),
      (this.var_1961 = this._r62a1d8ff42ac09.length > 0),
      (this.var_1810 =
        this.var_676 === a.const_315 && this.var_2521.length > 0),
      this.var_1961 || this.var_1810
        ? ((this.var_1120 = new class_3469(this.onTime)),
          this._notifications?.communication?._r2e106e2349a0b6(this.var_1120),
          this.var_1961 &&
            this._notifications?.communication?.connection.send(new class_3672(this._r62a1d8ff42ac09)),
          this.var_1810 &&
            this._notifications?.communication?.connection.send(new class_3672(this.var_2521)))
        : ((this._initialized = !0), this.init()));
  }
  static {
    n(this, "NewFeatureNotification");
  }
  static FEATURE_TYPE_NORMAL = "normal";
  static FEATURE_TYPE_PROMO = "promo";
  static const_315 = "countdown";
  static BG_COLOR_NORMAL = "#686661";
  static LINK_COLOR_NORMAL = 16777215;
  static LINK_COLOR_HIGHLIGHT = 12247545;
  _window = null;
  _r956616011887ff = null;
  _initialized = !1;
  var_1120 = null;
  var_676 = a.FEATURE_TYPE_NORMAL;
  _disposed = !1;
  _r62a1d8ff42ac09 = "";
  var_2521 = "";
  var_1961 = !1;
  var_1810 = !1;
  var_4366 = 0;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this.var_1120 != null &&
        (this._notifications?.communication?._r7668362bf55fdd(this.var_1120),
        (this.var_1120 = null)),
      this._toolbar != null &&
        this._initialized &&
        this._toolbar.extensionView?._rb18768cf275a26(`${ToolbarDisplayExtensionIds.NEW_FEATURE}_${this._key}`),
      this._window?.dispose(),
      (this._window = null),
      (this._windowManager = null),
      (this._assets = null),
      (this._r956616011887ff = null),
      (this._toolbar = null),
      (this._notifications = null),
      (this._disposed = !0));
  }
  onTime = n((e) => {
    if (this._disposed) return;
    let { timeStr: r, _r87ac8bfd8368a8: t } = e.getParser();
    if (this.var_1961 && r === this._r62a1d8ff42ac09 && ((this.var_1961 = !1), t <= 0)) {
      this.dispose();
      return;
    }
    (this.var_1810 &&
      r === this.var_2521 &&
      ((this.var_1810 = !1), (this.var_4366 = Math.max(0, t))),
      this.tryInitialize());
  }, "onTime");
  tryInitialize() {
    this._initialized ||
      this.var_1961 ||
      this.var_1810 ||
      ((this._initialized = !0),
      this.var_1120 != null &&
        (this._notifications?.communication?._r7668362bf55fdd(this.var_1120),
        (this.var_1120 = null)),
      this.init());
  }
  init() {
    let e =
        this.var_676 === a.FEATURE_TYPE_NORMAL
          ? "new_feature_notification_xml"
          : `new_feature_notification_${this.var_676}_xml`,
      r = this._assets?.getAssetByName(e);
    if (
      r == null ||
      ((this._window = this._windowManager?.buildFromXML(r.content)), this._window == null)
    )
      return;
    ((this._window.procedure = this.eventHandler),
      this._toolbar?.extensionView?._ra96f07968c4ed0(
        `${ToolbarDisplayExtensionIds.NEW_FEATURE}_${this._key}`,
        this._window,
      ));
    let t = null;
    if (
      (this.var_676 === a.FEATURE_TYPE_NORMAL
        ? ((this._r956616011887ff = this._window.findChildByName("cancel_link")),
          (t = this._window.findChildByName("cancel_link_region")))
        : (this.var_676 === a.FEATURE_TYPE_PROMO || this.var_676 === a.const_315) &&
          ((this._r956616011887ff = this._window.findChildByName("desc")),
          (t = this._window)),
      t != null &&
        (t.addEventListener(u.OVER, this._rad325cc53260a0), t.addEventListener(u.OUT, this.onMousetOut)),
      this.var_676 === a.const_315)
    ) {
      let i = this._window.findChildByName("cancel_link_region");
      i != null && !i.visible && (i.visible = !0);
    }
    this.initLayout();
  }
  initLayout() {
    let e = this.getString(`notifications.new_feature.image.${this._key}`),
      r = this.getString(`notifications.new_feature.color.${this._key}`);
    r.length === 0 && (r = a.BG_COLOR_NORMAL);
    let t = this._window?.findChildByName("desc");
    t != null &&
      (t.text = this.var_161?.getLocalization(`notifications.new_feature.${this._key}.desc`) ?? "");
    let i = this._window?.findChildByName("static_bitmap");
    i != null && (i.assetUri = e);
    let s = qn.hexToUint(r),
      o = this._window?.findChildByName("border") ?? this._window;
    o != null && (o.color = s);
    let d = qn._r6ca1d657712155(s),
      c = this._window?.findChildByName("open_button");
    if (c != null) {
      let f = (255 - Math.trunc((255 - Number(d & 255)) / 2)) | (Number(d) & 16776960);
      c.color = qn.hslToRGB(f);
    }
    if (this.var_676 === a.const_315) {
      let f = this._window?.findChildByName("countdown_widget");
      if (f != null) {
        let l = f.widget;
        ((l.seconds = this.var_4366), (l.running = !0));
      }
    }
  }
  eventHandler = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "open_button":
        case "main_region": {
          this.openConfiguredLink();
          let t = this._window?.findChildByName("cancel_link_region");
          t != null && !t.visible && (t.visible = !0);
          break;
        }
        case "cancel_link_region":
        case "cancel_link":
          this.dispose();
          break;
      }
  }, "eventHandler");
  openConfiguredLink() {
    let e = this.getString(`notifications.new_feature.internal_link.${this._key}`);
    if (e !== "") {
      this._toolbar?.context._r6b6c989018eb05(e);
      return;
    }
    let r = this.getString(`notifications.new_feature.external_link.${this._key}`);
    r !== "" && Ae.openWebPage(r, Ae.WINDOW_HABBO_MAIN);
  }
  _rad325cc53260a0 = n((e) => {
    this._r956616011887ff != null && (this._r956616011887ff.textColor = a.LINK_COLOR_HIGHLIGHT);
  }, "_rad325cc53260a0");
  onMousetOut = n((e) => {
    this._r956616011887ff != null && (this._r956616011887ff.textColor = a.LINK_COLOR_NORMAL);
  }, "onMousetOut");
  getString(e) {
    return this._toolbar?.getProperty(e) ?? "";
  }
}
