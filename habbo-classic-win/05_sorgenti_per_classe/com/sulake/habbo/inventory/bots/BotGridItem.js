// Extracted from HabboAirLauncher.deobf.js, line 235371.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/bots/BotGridItem.as
// Obfuscated name: _i7953035e5767fb

class a {
  constructor(e, r, t, i, s) {
    this._view = e;
    this._data = r;
    this._assets = t;
    this._isUnseen = s;
    if (this._view == null || this._data == null || this._assets == null || i == null) return;
    let d = this._assets.getAssetByName("inventory_thumb_xml")?.content;
    if (d == null || ((this._window = i.buildFromXML(d)), this._window == null)) return;
    this._window.procedure = (...f) => this.eventHandler(f[0], f[1]);
    let c = this._view._r80c548b6379d2a(this._data);
    (this.setImage(c), this.updateStatusGraphics());
  }
  static {
    n(this, "BotGridItem");
  }
  static THUMB_COLOR_NORMAL = 13421772;
  static THUMB_COLOR_UNSEEN = 10275685;
  _window = null;
  var_989 = null;
  var_2619 = !1;
  _rf67f51f0ae8060 = !1;
  get window() {
    return this._window;
  }
  get data() {
    return this._data;
  }
  dispose() {
    ((this._assets = null),
      (this._view = null),
      (this._data = null),
      (this.var_989 = null),
      this._window != null && (this._window.dispose(), (this._window = null)));
  }
  setImage(e) {
    let r = this._window?.findChildByName("bitmap");
    if (r == null || e == null) return;
    let t = new A(r.width, r.height, !0, 0);
    (t.copyPixels(e, e.rect, new E(t.width / 2 - e.width / 2, t.height / 2 - e.height / 2)),
      r.bitmap?.dispose(),
      (r.bitmap = t));
  }
  setUnseen(e) {
    this._isUnseen !== e && ((this._isUnseen = e), this.updateStatusGraphics());
  }
  setSelected(e) {
    if (this.var_2619 !== e) {
      if (((this.var_2619 = e), this._window == null)) return;
      this.updateStatusGraphics();
    }
  }
  eventHandler(e, r) {
    switch (e?.type) {
      case u.DOWN:
        (this._view?._r940649254ab9e3(this), (this._rf67f51f0ae8060 = !0));
        break;
      case u.UP:
        this._rf67f51f0ae8060 = !1;
        break;
      case u.OUT:
        this._rf67f51f0ae8060 &&
          ((this._rf67f51f0ae8060 = !1), this._view?._rc5e177849ba0cd(this._data?.id ?? 0, !0));
        break;
    }
  }
  updateStatusGraphics() {
    let e = this._window?.findChildByName("outline");
    (e != null && (e.visible = this.var_2619),
      this.var_989 == null &&
        (this.var_989 = this._window?.findChildByTag("BG_COLOR") ?? null),
      this.var_989 != null &&
        (this.var_989.color = this._isUnseen ? a.THUMB_COLOR_UNSEEN : a.THUMB_COLOR_NORMAL));
  }
}
