// Estratto da HabboAirLauncher.deobf.js, riga 208969.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/PromoArticleWidget.as
// Nome offuscato: _i9ee91d89a6a997

class a {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "PromoArticleWidget");
  }
  static REFRESH_PERIOD_IN_MILLIS = 600 * 1e3;
  static FADE_LENGTH = 500;
  static MAX_ARTICLES = 10;
  _container = null;
  var_901 = 0;
  _r84bb29e42ffe06 = [];
  _lastRequestTime = null;
  _r1a939988a2a402 = 0;
  get container() {
    return this._container;
  }
  get disposed() {
    return this._landingView == null;
  }
  initialize() {
    ((this._container = this._landingView?.getXmlWindow("promo_article")),
      (this._container.procedure = this._r622b90012afaf3),
      this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(
        new _i1e9bcb2c9b9557((e) => {
          this._r00d81bd5bd670a(e);
        }),
      ));
  }
  refresh() {
    this._lastRequestTime == null || this._lastRequestTime.getTime() + a.REFRESH_PERIOD_IN_MILLIS < Date.now()
      ? (this._landingView?.send(new _i96e8617361a17f()), (this._lastRequestTime = new Date()))
      : this._r332303f814b0e9(this.var_901);
  }
  dispose() {
    (this._container?.dispose(), (this._container = null), (this._landingView = null));
  }
  set settings(e) {
    ko.applyCommonWidgetSettings(this._container, e);
  }
  update(e) {
    let r = this._r1a939988a2a402 + e;
    (this._r1a939988a2a402 < a.FADE_LENGTH
      ? (this.setBlend(Math.max(0, 1 - this._r1a939988a2a402 / a.FADE_LENGTH)),
        r >= a.FADE_LENGTH && this.refreshContent())
      : this.setBlend(Math.min(1, (this._r1a939988a2a402 - a.FADE_LENGTH) / a.FADE_LENGTH)),
      (this._r1a939988a2a402 = r),
      this._r1a939988a2a402 >= a.FADE_LENGTH * 2 && this._rdc89977c6a3d41());
  }
  refreshContent() {
    (this.setArticleContent(), this.setNavigationDisks());
  }
  setArticleContent() {
    let e = this._r84bb29e42ffe06[this.var_901];
    e == null ||
      this._container == null ||
      ((this._container.findChildByName("promo_title").caption = e.title),
      (this._container.findChildByName("promo_text").caption = e._ra86d5cf8832596),
      (this._container.findChildByName("button").visible = !(
        e._r69631150086ab0 === class_4338.const_787 ||
        (e._r69631150086ab0 === class_4338.const_1101 && e._r08367207a2897d === "")
      )),
      (this._container.findChildByName("button").immediateClickMode = !0),
      (this._container.findChildByName("button").caption = e.buttonText),
      (this._container.findChildByName("promo_image").visible = e.imageUrl !== ""),
      (this._container.findChildByName("promo_image").assetUri = "${image.library.url}" + e.imageUrl));
  }
  setNavigationDisks() {
    let e = this._container?.findChildByName("navigation");
    if (e != null)
      for (let r = 0; r < a.MAX_ARTICLES; r++) {
        let t = e.getChildAt(r);
        if (t != null)
          if (this._r84bb29e42ffe06.length > r) {
            let i = t.getChildAt(0);
            (i != null && (i.assetUri = "progress_disk_flat_" + (this.var_901 === r ? "on" : "off")),
              (t.visible = !0));
          } else t.visible = !1;
      }
  }
  _r332303f814b0e9(e) {
    let r = e === this.var_901;
    this._r84bb29e42ffe06.length !== 0 &&
      (e < 0
        ? (this.var_901 = this._r84bb29e42ffe06.length - 1)
        : e >= this._r84bb29e42ffe06.length
          ? (this.var_901 = 0)
          : (this.var_901 = e),
      r ? this.refreshContent() : this.startFade());
  }
  startFade() {
    ((this._r1a939988a2a402 = 0), this._landingView?.registerUpdateReceiver(this, 1));
  }
  _rdc89977c6a3d41() {
    (this._landingView?.removeUpdateReceiver(this), this.setBlend(1));
  }
  _r50e5bfd63099cd() {
    let e = this._r84bb29e42ffe06[this.var_901];
    if (e != null)
      switch (e._r69631150086ab0) {
        case class_4338.const_1101:
          Ae.openWebPage(e._r08367207a2897d);
          break;
        case class_4338.const_933:
          this._landingView?.context._r6b6c989018eb05(e._r08367207a2897d);
          break;
      }
  }
  _r622b90012afaf3 = n((e, r) => {
    if (
      (r.name === "article_navigation" &&
        (e.type === u.OVER
          ? this.hoverOverNavigation(r, !0)
          : e.type === u.OUT && r.id !== this.var_901 && this.hoverOverNavigation(r, !1)),
      e.type === u.CLICK)
    )
      switch (r.name) {
        case "button":
          this._r50e5bfd63099cd();
          break;
        case "article_navigation":
          this._r332303f814b0e9(r.id);
          break;
      }
  }, "_r622b90012afaf3");
  hoverOverNavigation(e, r) {
    let t = e.getChildAt(0);
    t != null && (t.assetUri = "progress_disk_flat_" + (r ? "on" : "off"));
  }
  _r00d81bd5bd670a(e) {
    let r = ClassUtils.getParser(e, _i0cbfc08e84842c);
    r != null && ((this._r84bb29e42ffe06 = r?._r444b83e39f0578 ?? []), this.refresh());
  }
  setBlend(e) {
    this._container != null &&
      ((this._container.findChildByName("promo_title").blend = e),
      (this._container.findChildByName("promo_text").blend = e),
      (this._container.findChildByName("button").blend = e),
      (this._container.findChildByName("promo_image").blend = e));
  }
}
