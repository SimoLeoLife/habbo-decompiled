// Extracted from HabboAirLauncher.deobf.js, line 358139.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/WiredMenuView.as
// Obfuscated name: _i81b4bc9f4d2b04

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._windowManager = r;
    ((this.var_4869 = new Z1(this.var_63)),
      (this._window = this._windowManager.buildFromXML(
        this.var_63.assets.getAssetByName("wired_menu_view_xml").content,
        a.DESKTOP_WINDOW_LAYER,
      )),
      this.closeButton.addEventListener(u.CLICK, this.onWindowClose),
      this.discordRegion.addEventListener(u.CLICK, this.onClickDiscord));
  }
  static {
    n(this, "WiredMenuView");
  }
  static DESKTOP_WINDOW_LAYER = 1;
  _window;
  var_4869;
  var_1271 = !1;
  _re842dacc40aa7f = null;
  var_832 = null;
  var_974 = !1;
  get disposed() {
    return this.var_1271;
  }
  get stopViewing() {
    return this._r50edfa92fb160e(this.var_832);
  }
  get _r8692e44752579e() {
    return this.var_832;
  }
  get window() {
    return this._window;
  }
  get loadingContainer() {
    return this._window.findChildByName("loading_view");
  }
  initialize() {
    this.initializeTabs();
  }
  show() {
    if (
      this._windowManager != null &&
      this._window != null &&
      this._window.parent == null
    ) {
      let e = this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
      e?.addChild(this._window);
    }
    (this.var_974 || (this.stopViewing._r327228a1fe703e(), (this.var_974 = !0)),
      this._window.activate());
  }
  isShowing() {
    return (
      this._windowManager != null && this._window != null && this._window.parent != null
    );
  }
  hide() {
    if (!this.isShowing()) return;
    let e = this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
    (e?.removeChild(this._window),
      this.var_974 && (this.stopViewing._r08363b6c12c5ad(), (this.var_974 = !1)));
  }
  _r7730f6cdc2e2b0() {
    for (let e of this._re842dacc40aa7f?.values() ?? []) e._r7730f6cdc2e2b0();
  }
  selectTab(e) {
    let r = this._r9c91b52bcfd09b(e);
    r == null ||
      !r.isEnabled ||
      this.tabContext.selector?.setSelected(this._window.findChildByName(r.tabButtonName));
  }
  dispose() {
    if (!this.var_1271) {
      (this.hide(),
        this.closeButton.removeEventListener(u.CLICK, this.onWindowClose),
        this.discordRegion.removeEventListener(u.CLICK, this.onClickDiscord));
      for (let e of this._re0d2ce66e17a4c) {
        let r = this._r50edfa92fb160e(e.id);
        (r != null &&
          (e.id === this.var_832 &&
            (this.var_974 && r._r08363b6c12c5ad(), r.setTabInactive()),
          r.dispose()),
          this._window
            .findChildByName(e.tabButtonName)
            .removeEventListener(y.const_238, this._r6e339a8d3d8262));
      }
      ((this._re842dacc40aa7f = null),
        (this.var_832 = null),
        (this.var_974 = !1),
        this._window?.dispose(),
        (this._window = null),
        (this.var_4869 = null),
        (this._windowManager = null),
        (this.var_63 = null),
        (this.var_1271 = !0));
    }
  }
  initializeTabs() {
    this._re842dacc40aa7f = new Map();
    let e = null;
    for (let r of this._re0d2ce66e17a4c)
      (r._r7a153f1d282a18 && this._rbbd4ac5cac0f9e(r.id),
        e == null && r.isEnabled && (e = r),
        this._window
          .findChildByName(r.tabButtonName)
          .addEventListener(y.const_238, this._r6e339a8d3d8262),
        (this._window.findChildByName(r.containerName).visible = !1));
    (e != null && this.selectTab(e.id), this._r1d14e8409276ff());
  }
  _r1d14e8409276ff() {
    let e = 0;
    for (let r = 0; r < this.tabContext.numTabItems; r += 1) {
      let t = this.tabContext.getTabItemAt(r);
      this._r738fba570a2840(t.name).isEnabled ? (e += 1) : ((t.visible = !1), (t.width = 0));
    }
    for (let r = 0; r < this.tabContext.numTabItems; r += 1) {
      let t = this.tabContext.getTabItemAt(r);
      t.visible && (t.width = t.parent.width / e);
    }
  }
  onWindowClose = n((e) => {
    e.type === u.CLICK && this.hide();
  }, "onWindowClose");
  _r6e339a8d3d8262 = n((e) => {
    let r = e.target,
      t = null;
    for (let i of this._re0d2ce66e17a4c)
      if (i.tabButtonName === r.name) {
        t = i.id;
        break;
      }
    t != null && this._r93994323a069c6(t);
  }, "_r6e339a8d3d8262");
  _r93994323a069c6(e) {
    let r = this._r9c91b52bcfd09b(e);
    if (r.id === this.var_832) return;
    if (this.var_832 != null) {
      let i = this._r50edfa92fb160e(this.var_832),
        s = this._r9c91b52bcfd09b(this.var_832);
      (this.var_974 && i._r08363b6c12c5ad(),
        i.setTabInactive(),
        s._r4a62ba90efa000 || (i.dispose(), this._re842dacc40aa7f.delete(this.var_832)),
        (this._window.findChildByName(s.containerName).visible = !1));
    }
    this.var_832 = e;
    let t = this._rbbd4ac5cac0f9e(e);
    ((this._window.findChildByName(r.containerName).visible = !0),
      t._rb20ed4d7a429d1(),
      this.var_974 && t._r327228a1fe703e(),
      (this.headerTitle.text = this.var_63.localizationManager.getLocalization(
        r.titleLocalizationKey,
        r.id,
      )));
  }
  get _re0d2ce66e17a4c() {
    return this.var_4869.menuTabs;
  }
  _r9c91b52bcfd09b(e) {
    for (let r of this._re0d2ce66e17a4c) if (r.id === e) return r;
    return null;
  }
  _r738fba570a2840(e) {
    for (let r of this._re0d2ce66e17a4c) if (r.tabButtonName === e) return r;
    return null;
  }
  _r50edfa92fb160e(e) {
    return this._re842dacc40aa7f.get(e);
  }
  _rbbd4ac5cac0f9e(e) {
    let r = this._r9c91b52bcfd09b(e),
      t = this._re842dacc40aa7f.get(e) ?? null;
    return (
      t == null &&
        ((t = r.createTab(
          this.var_63,
          this._window.findChildByName(r.containerName),
        )),
        this._re842dacc40aa7f.set(e, t)),
      t
    );
  }
  onClickDiscord = n((e) => {
    Ae.openWebPageAndMinimizeClient(this.var_63.getProperty("wired.discord.link"));
  }, "onClickDiscord");
  get closeButton() {
    return this._window.findChildByName("header_button_close");
  }
  get tabContext() {
    return this._window.findChildByName("tab_context");
  }
  get headerTitle() {
    return this._window.findChildByName("header_title");
  }
  get discordRegion() {
    return this._window.findChildByName("discord_region");
  }
}
