// Estratto da HabboAirLauncher.deobf.js, riga 146426.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/habbopedia/HabboPagesViewer.as
// Nome offuscato: _ic1349a2fed7f18

class {
  constructor(e) {
    this._windowManager = e;
    ((this.var_5058 = this._rffe35aa7ea6b5a()), this._windowManager?.context._r7e43d9f4706607(this));
  }
  static {
    n(this, "HabboPagesViewer");
  }
  _window = null;
  var_5058;
  get disposed() {
    return this._windowManager == null;
  }
  get linkPattern() {
    return "habbopages/";
  }
  get styleSheet() {
    return this.var_5058;
  }
  dispose() {
    this.disposed ||
      (this._windowManager?.context._r7485c47d8bd77c(this),
      this._window?.dispose(),
      (this._window = null),
      (this._windowManager = null));
  }
  linkReceived(e) {
    let r = e.split("/");
    r.length < 2 || (r.shift(), this.openPage(r.join("/")));
  }
  openPage(e) {
    if (this._windowManager == null) return;
    let t = `${this._windowManager.getProperty("habbopages.url")}${e}`;
    if (this._windowManager.assets.hasAsset(t)) {
      let s = this._windowManager.assets.getAssetByName(t);
      s != null && this._windowManager.assets.removeAsset(s);
    }
    let i = this._windowManager.assets.loadAssetFromFile(t, new _i636490202c0f9a(t), "text/plain");
    (i.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, (...s) => {
      this._r8b160f9c57df38(s[0] ?? null);
    }),
      i.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, (...s) => {
        this._r876e2251b6bed8(s[0] ?? null);
      }));
  }
  _rffe35aa7ea6b5a() {
    let e = new _ib0061b42edfac2(),
      r = this._windowManager?.assets.getAssetByName("habbopedia_css"),
      t = typeof r?.content == "string" ? r.content : "";
    return (t.length > 0 && e.parseCSS(t), e);
  }
  set visible(e) {
    if ((this._window == null || this._window.disposed) && e) {
      let t = this._windowManager?.assets.getAssetByName("habbopedia_xml")?.content;
      if (
        t == null ||
        this._windowManager == null ||
        ((this._window = this._windowManager.buildFromXML(t)), this._window == null)
      )
        return;
      this._window.procedure = (...s) => {
        let [o, d] = s;
        this.windowProcedure(o, d);
      };
      let i = this._window.findChildByName("content");
      ((i.styleSheet = this.var_5058),
        i?.addEventListener(y.WINDOW_EVENT_CHANGE, (...s) => {
          this._r92825e2fe58083(s[0]);
        }));
    }
    this._window != null && (this._window.visible = e);
  }
  parseAndSetHtml(e, r) {
    if (this._window == null) return;
    this._window.caption = r;
    let t = this._window.findChildByName("content");
    t != null && ((t.htmlText = e), (t.styleSheet = this.var_5058));
  }
  windowProcedure(e, r) {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "header_button_close":
        case "close":
          this.visible = !1;
          break;
      }
  }
  _r92825e2fe58083 = n((e) => {
    let r = this._window?.findChildByName("scroller");
    r != null && (r.var_46 = 0);
  }, "_r92825e2fe58083");
  _r876e2251b6bed8 = n((e = null) => {
    let r = e;
    Ae.logEventLog(`habbopages download error ${r?.status ?? 0}`);
  }, "_r876e2251b6bed8");
  _r8b160f9c57df38 = n((e = null) => {
    let r = e?.target;
    if (r == null) return;
    let t = r._r7ea1029131e026.content;
    if (t == null) return;
    let i = t.split(/\n\r|\n|\r/gm),
      s = i.shift() ?? "",
      o = i.join("");
    ((this.visible = !0), this.parseAndSetHtml(o, s), this._window?.activate());
  }, "_r8b160f9c57df38");
}
