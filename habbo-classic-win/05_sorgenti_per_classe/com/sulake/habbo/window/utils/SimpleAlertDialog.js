// Extracted from HabboAirLauncher.deobf.js, line 146001.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/SimpleAlertDialog.as
// Obfuscated name: _i2d5a01199c4aeb

class a {
  constructor(e, r, t, i, s, o, d, c, f, l) {
    this._windowManager = e;
    this._rb28d193bd42fb5 = f;
    this._r1d7086c7306813 = l;
    let _ = this._windowManager?.assets.getAssetByName("simple_alert_xml")?.content;
    if (_ == null || this._windowManager == null)
      throw new Error("Failed to initialize simple alert dialog; missing asset!");
    if (
      ((this.var_408 = this._windowManager.buildModalDialogFromXML(_)),
      (this._window = this.var_408?.rootWindow),
      (this.var_122 = this._window?.findChildByName("list")),
      (this.var_2999 = this._window?.findChildByName("list_top")),
      (this._rda0713bcfb16fe = this._window?.findChildByName("list_bottom")),
      (this._r456518b215c8cf = this._window?.findChildByName("message") ?? null),
      (this._r9ad7d8a72377c1 = this._window?.findChildByName("subtitle") ?? null),
      (this.var_933 = this._window?.findChildByName("link")),
      (this._r6e6aafbb82ab22 = this._window?.findChildByName("illustration")),
      this._window?.findChildByName("header_button_close")?.dispose(),
      this._window != null &&
        ((this._window.procedure = (...p) => {
          let [m, v] = p;
          this.windowProcedure(m, v);
        }),
        (this._window.caption = r)),
      this._r456518b215c8cf != null && (this._r456518b215c8cf.caption = i),
      d != null && this._windowManager.localization != null)
    ) {
      for (let p of [r, t, i, s])
        if (p != null && p.startsWith("${") && p.includes("}")) {
          let m = p.substring(2, p.indexOf("}"));
          for (let v of d.getKeys())
            this._windowManager.localization._r43eae9731f5b27(m, v, d.getValue(v) ?? "");
        }
    }
    t != null && t !== ""
      ? this._r9ad7d8a72377c1 != null && (this._r9ad7d8a72377c1.caption = t)
      : (this._r9ad7d8a72377c1?.dispose(), (this._r9ad7d8a72377c1 = null));
    let h = this._windowManager.interpolate(o ?? "");
    (s != null && s !== "" && ((h != null && h !== "") || this._rb28d193bd42fb5 != null)
      ? (this.var_933 != null &&
          ((this.var_933.caption = s),
          this.var_933.addEventListener(u.CLICK, (...p) => {
            this._r47c7fab8297ae0(p[0]);
          }),
          (this.var_933.immediateClickMode = !0)),
        (this._url = h))
      : (this.var_933?.dispose(), (this.var_933 = null)),
      c != null && c !== "" && this._r6e6aafbb82ab22 != null
        ? (this._r6e6aafbb82ab22.addEventListener(y.const_755, (...p) => {
            this._rff5b7dabeb6ff4(p[0]);
          }),
          (this._r6e6aafbb82ab22.assetUri = c))
        : (this._r6e6aafbb82ab22?.dispose(), (this._r6e6aafbb82ab22 = null)),
      this.resizeWindow());
  }
  static {
    n(this, "SimpleAlertDialog");
  }
  static WINDOW_MARGIN = 10;
  _disposed = !1;
  var_408 = null;
  _url = "";
  _window = null;
  var_122 = null;
  var_2999 = null;
  _rda0713bcfb16fe = null;
  _r456518b215c8cf = null;
  _r9ad7d8a72377c1 = null;
  var_933 = null;
  _r6e6aafbb82ab22 = null;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this.close(), (this._windowManager = null), (this._disposed = !0));
  }
  close() {
    (this._r1d7086c7306813?.(),
      this.var_408 != null &&
        (this.var_933 != null &&
          (this.var_933.removeEventListener(u.CLICK, this._r47c7fab8297ae0),
          (this.var_933 = null)),
        this._r6e6aafbb82ab22 != null &&
          (this._r6e6aafbb82ab22.removeEventListener(y.const_755, this._rff5b7dabeb6ff4),
          (this._r6e6aafbb82ab22 = null)),
        (this._window = null),
        (this.var_122 = null),
        (this.var_2999 = null),
        (this._rda0713bcfb16fe = null),
        (this._r456518b215c8cf = null),
        (this._r9ad7d8a72377c1 = null),
        (this._rb28d193bd42fb5 = null),
        (this._r1d7086c7306813 = null),
        this.var_408.dispose(),
        (this.var_408 = null)));
  }
  windowProcedure(e, r) {
    e.type === u.CLICK && r.name === "close_button" && this.dispose();
  }
  _r47c7fab8297ae0 = n((e) => {
    this._url.length > 0
      ? this._url.startsWith("event:")
        ? (this._windowManager?.context._r6b6c989018eb05(this._url.substring(6)), this.dispose())
        : Ae.openWebPage(this._url, "habboMain")
      : this._rb28d193bd42fb5 != null && (this._rb28d193bd42fb5(), this.dispose());
  }, "_r47c7fab8297ae0");
  _rff5b7dabeb6ff4 = n((e) => {
    this._r6e6aafbb82ab22 == null ||
      this.var_2999 == null ||
      this._rda0713bcfb16fe == null ||
      this._window == null ||
      ((this.var_2999.x = this._r6e6aafbb82ab22.width + a.WINDOW_MARGIN),
      (this._rda0713bcfb16fe.width = this.var_2999.right),
      (this._window.width = this.var_2999.right + 2 * a.WINDOW_MARGIN),
      (this.var_2999.limits.minHeight = this._r6e6aafbb82ab22.height + a.WINDOW_MARGIN),
      this.resizeWindow());
  }, "_rff5b7dabeb6ff4");
  resizeWindow() {
    (this.var_2999?.arrangeListItems(),
      this._rda0713bcfb16fe?.arrangeListItems(),
      this.var_122?.arrangeListItems(),
      this._window != null &&
        this.var_122 != null &&
        ((this._window.height = this.var_122.height + 40), this._window.center()));
  }
}
