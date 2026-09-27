// Extracted from HabboAirLauncher.deobf.js, line 249564.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/IssueBrowser.as
// Obfuscated name: _i47e4df8f6d37a4

class a {
  constructor(e, r, t) {
    this.var_2305 = e;
    this._windowManager = r;
    this._assets = t;
  }
  static {
    n(this, "IssueBrowser");
  }
  static MY_ISSUES = "my_issues";
  static OPEN_ISSUES = "open_issues";
  static PICKED_ISSUES = "picked_issues";
  _window = null;
  _tabContext = null;
  var_889 = null;
  _r61d491f445a976 = null;
  _r648a0344cb5598 = null;
  _rd2556c3702d487 = null;
  get assets() {
    return this._assets;
  }
  show() {
    (this._window == null && this.createMainFrame(),
      this._window && (this._window.visible = !0),
      this._window?.activate(),
      this.update());
  }
  isOpen() {
    return this._window != null && this._window.visible;
  }
  update() {
    this._window == null ||
      !this._window.visible ||
      this.var_889 == null ||
      this.var_889.update();
  }
  createWindow(e) {
    let r = this._assets.getAssetByName(e);
    return r == null || r.content == null ? null : this._windowManager.buildFromXML(r.content);
  }
  createMainFrame() {
    if (this._window == null) {
      if (((this._window = this.createWindow("issue_browser_xml")), this._window == null))
        return;
      let r = this._window.desktop;
      ((this._window.x = r.width / 2 - this._window.width / 2),
        (this._window.y = r.height / 2 - this._window.height / 2),
        this._window.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose),
        this._window.findChildByName("auto_pick")?.addEventListener(u.CLICK, this._r9dfc22d7193113),
        (this._tabContext = this._window.findChildByName("tab_context")));
      for (let s = 0; s < (this._tabContext?.numTabItems ?? 0); s++)
        this._tabContext?.getTabItemAt(s)?.addEventListener(y.const_238, this._r6e339a8d3d8262);
      ((this._r61d491f445a976 = new MyIssuesView(
        this.var_2305,
        this,
        this._window.findChildByName("my_issues_prototype"),
      )),
        (this._r648a0344cb5598 = new OpenIssuesView(
          this.var_2305,
          this,
          this._window.findChildByName("open_issues_prototype"),
        )),
        (this._rd2556c3702d487 = new PickedIssuesView(
          this.var_2305,
          this,
          this._window.findChildByName("picked_issues_prototype"),
        )));
    }
    if (
      ((this._tabContext = this._window.findChildByName("tab_context")),
      this._tabContext == null ||
        this._tabContext.container == null ||
        this._tabContext.selector == null)
    )
      return;
    let e = this._tabContext.selector._rf1edf3aad44c96(a.OPEN_ISSUES);
    (e && this._tabContext.selector.setSelected(e), this._r526fa0c167a3bf(a.OPEN_ISSUES));
  }
  _r526fa0c167a3bf(e) {
    let r = this._r1f685677bdb2bd(e);
    this.var_889 !== r &&
      (this.var_889 != null && (this.var_889.visible = !1),
      (this.var_889 = r),
      !(this.var_889 == null || this._tabContext?.container == null) &&
        ((this.var_889.view.width = this._tabContext.container.width),
        (this.var_889.view.height = this._tabContext.container.height),
        (this.var_889.visible = !0),
        this.var_889.update()));
  }
  _r1f685677bdb2bd(e) {
    switch (e) {
      case a.MY_ISSUES:
        return this._r61d491f445a976;
      case a.OPEN_ISSUES:
        return this._r648a0344cb5598;
      case a.PICKED_ISSUES:
        return this._rd2556c3702d487;
      default:
        return null;
    }
  }
  _r6e339a8d3d8262 = n((e) => {
    e.window != null && this._r526fa0c167a3bf(e.window.name);
  }, "_r6e339a8d3d8262");
  onClose = n(() => {
    this._window && (this._window.visible = !1);
  }, "onClose");
  _r9dfc22d7193113 = n(() => {
    this.var_2305.autoPick("issue browser pick next");
  }, "_r9dfc22d7193113");
}
