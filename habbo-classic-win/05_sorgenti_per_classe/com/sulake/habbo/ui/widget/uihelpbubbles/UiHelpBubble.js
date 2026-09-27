// Estratto da HabboAirLauncher.deobf.js, riga 326652.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/uihelpbubbles/UiHelpBubble.as
// Nome offuscato: _i1ed6da471a3c64

class {
  constructor(e, r, t) {
    this.var_17 = e;
    ((this._id = r.name),
      (this.var_4463 = r.text),
      (this.var_3724 = t),
      (this.var_5089 = r.modal),
      this.createWindow());
  }
  static {
    n(this, "UiHelpBubble");
  }
  _window = null;
  _id;
  var_4463;
  var_3724;
  _rb63197e10e4aa5 = null;
  var_2312 = null;
  var_313 = null;
  var_5089;
  _r93cf00a226218c = null;
  _rda96b47e730c24 = null;
  _rf89ca67dcb19a5 = null;
  _re1a2ca83379c74 = null;
  dispose() {
    (this._rda96b47e730c24 != null &&
      this._re1a2ca83379c74 != null &&
      this._rda96b47e730c24.removeEventListener(u.CLICK, this._re1a2ca83379c74),
      this._rf89ca67dcb19a5 != null &&
        this._re1a2ca83379c74 != null &&
        this._rf89ca67dcb19a5.removeEventListener(u.CLICK, this._re1a2ca83379c74),
      this.var_313?.dispose(),
      (this.var_313 = null),
      this._window?.dispose(),
      (this._window = null),
      (this.var_17 = null));
  }
  show() {
    this._window != null && ((this._window.visible = !0), this._window.activate());
  }
  _r48b49d04d19598(e) {
    if (this._r93cf00a226218c == null || this.var_313 == null || e == null) return;
    let r = new A(this.var_313.width, this.var_313.height, !0, 4292870144),
      t = new A(e.width, e.height, !0, 16777215);
    (r.copyPixels(t, t.rect, new E(e.x, e.y)),
      (this._r93cf00a226218c.bitmap = r),
      this._r93cf00a226218c.invalidate());
  }
  setPosition(e) {
    this._window != null &&
      ((this._window.y = e.y), (this._window.x = e.x - this._window.width / 2));
  }
  _r656ea8ce36863a(e, r) {
    this._rb63197e10e4aa5 != null &&
      ((this._rb63197e10e4aa5.direction = e), (this._rb63197e10e4aa5._r2064b0929ca274 = r - 8));
  }
  _r72b7b7b15a8834(e) {
    if (this._re1a2ca83379c74 != null) return;
    this._rda96b47e730c24 = e;
    let r = this.var_3724 ? this._rab4d0f57abd39b : this._r5b493ceb3955f8;
    ((this._re1a2ca83379c74 = r), this._rda96b47e730c24.addEventListener(u.CLICK, r));
  }
  _r447779b01ab09d(e) {
    if (this._re1a2ca83379c74 != null) return;
    this._rf89ca67dcb19a5 = e;
    let r = this.var_3724 ? this._rab4d0f57abd39b : this._r5b493ceb3955f8;
    ((this._re1a2ca83379c74 = r), this._rf89ca67dcb19a5.addEventListener(u.CLICK, r));
  }
  getWindow() {
    return this._window;
  }
  getName() {
    return this._id;
  }
  addMouseClickListener(e, r) {
    e != null && (e.setParamFlag(class_2094._r26338c8d88c4e5, !0), e.addEventListener(u.CLICK, r));
  }
  createWindow() {
    if (this.var_17?.assets == null || this.var_17.windowManager == null) return;
    if (this.var_5089) {
      let t = this.var_17.assets.getAssetByName("ui_help_modal")?.content;
      t != null && (this.var_313 = this.var_17.windowManager.buildFromXML(t, 3));
    }
    this.var_313 != null &&
      ((this.var_313.width = this.var_313.desktop.width),
      (this.var_313.height = this.var_313.desktop.height),
      (this._r93cf00a226218c = this.var_313.findChildByName("bitmap")),
      this.addMouseClickListener(this._r93cf00a226218c, this._ra3f008aea92b25));
    let e = this.var_17.assets.getAssetByName("ui_help_bubble")?.content;
    if (
      e == null ||
      ((this._window = this.var_17.windowManager.buildFromXML(e, 3)),
      this._window == null)
    )
      return;
    ((this.var_2312 = this._window.findChildByName("help_bubble_btn_ok")),
      (this._rb63197e10e4aa5 = this._window.findChildByName("bubble")));
    let r = this._window.findChildByName("help_bubble_text");
    if (r != null) {
      r.text = this.var_4463;
      let t = r.textHeight;
      ((this._window.height = t + 90),
        this.var_2312 != null && (this.var_2312.y = t + 30));
    }
    (this.var_3724
      ? this.addMouseClickListener(this.var_2312, this._rab4d0f57abd39b)
      : (this.var_2312 != null &&
          (this.var_2312.caption =
            this.var_17.localizations?.getLocalization(
              "alert.close.button",
              "alert.close.button",
            ) ?? "alert.close.button"),
        this.addMouseClickListener(this.var_2312, this._r5b493ceb3955f8)),
      (this._window.visible = !0));
  }
  _ra3f008aea92b25 = n((e) => {
    (this.var_313?.deactivate(), this._window?.activate());
  }, "_ra3f008aea92b25");
  _rab4d0f57abd39b = n((e) => {
    (this.var_313 != null && (this.var_313.visible = !1),
      this.var_17?._rfb1be14f31cc13(this._id));
  }, "_rab4d0f57abd39b");
  _r5b493ceb3955f8 = n((e) => {
    (this.var_17?._r60315c93465ab7(),
      this.var_313 != null && (this.var_313.visible = !1),
      this.var_17?._rfb1be14f31cc13(this._id));
  }, "_r5b493ceb3955f8");
}
