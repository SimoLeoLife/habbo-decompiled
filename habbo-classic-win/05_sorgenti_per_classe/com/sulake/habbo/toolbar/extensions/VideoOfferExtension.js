// Estratto da HabboAirLauncher.deobf.js, riga 343605.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/VideoOfferExtension.as
// Nome offuscato: _i7744255db12398

class a {
  static {
    n(this, "VideoOfferExtension");
  }
  static const_1198 = "video_offer";
  static LINK_COLOR_NORMAL = 16777215;
  static LINK_COLOR_HIGHLIGHT = 12247545;
  static CLOSE_COLOR_NORMAL = 6710886;
  static CLOSE_COLOR_OVER = 13421772;
  _toolbar;
  _view = null;
  _r6d71dd71101433 = null;
  _r51f014344a1d01 = null;
  _r5737ec95693c95 = !1;
  constructor(e) {
    this._toolbar = e;
  }
  get window() {
    if (this._view == null) throw new Error("Video offer extension window is not available.");
    return this._view;
  }
  dispose() {
    this._toolbar != null &&
      (this._toolbar.extensionView?._rb18768cf275a26(a.const_1198),
      this.destroyWindow(),
      (this._toolbar = null));
  }
  onClubChanged(e) {
    if (this._toolbar != null) {
      if (this.inventory._rd5192fa7d1725e && this._view == null && this.isClubExtensionEnabled()) {
        (this._toolbar.extensionView?._rb18768cf275a26(a.const_1198),
          this.destroyWindow());
        return;
      }
      !this._r5737ec95693c95 && this._view == null && this.catalog._r985b1eb69c27a3.load(this);
    }
  }
  offersAvailable(e) {
    if (this._toolbar != null) {
      if (e <= 0 || this._r5737ec95693c95 || (this.inventory._rd5192fa7d1725e && this.isClubExtensionEnabled())) {
        this._view != null && this.destroyWindow();
        return;
      }
      this._view == null && (this._view = this.createWindow());
    }
  }
  get catalog() {
    if (this._toolbar?.catalog == null) throw new Error("Catalog is not available.");
    return this._toolbar.catalog;
  }
  get connection() {
    return this._toolbar?.connection ?? null;
  }
  get inventory() {
    if (this._toolbar?.inventory == null) throw new Error("Inventory is not available.");
    return this._toolbar.inventory;
  }
  isClubExtensionEnabled() {
    return (
      this.inventory.clubLevel === dr.VIP &&
      this._toolbar?.getBoolean("club.membership.extend.vip.promotion.enabled") === !0
    );
  }
  createWindow() {
    if (this._toolbar == null) throw new Error("Toolbar is not available.");
    let e = this._toolbar.assets.getAssetByName("video_offer_promotion_xml"),
      r = this._toolbar.windowManager.buildFromXML(e?.content, 1);
    if (r == null) throw new Error("Failed to construct video offer extension from XML.");
    let t =
        this._toolbar.localization?.getLocalization(
          "supersaverads.video.promo.offer",
          "Watch a video and earn a credit!",
        ) ?? "Watch a video and earn a credit!",
      i = r.findChildByName("promo_text"),
      s = r.findChildByName("promo_text_shadow");
    (i != null && (i.text = t), s != null && (s.text = t));
    let o = this._toolbar.assets.getAssetByName("offer_icon_png"),
      d = r.findChildByName("promo_icon"),
      c = o?.content;
    return (
      c != null &&
        d != null &&
        ((d.bitmap = new A(d.width, d.height, !0, 0)), d.bitmap.copyPixels(c, c.rect, new E(0, 0))),
      (this._r6d71dd71101433 = r.findChildByName("text_region")),
      this._r6d71dd71101433?.addEventListener(u.CLICK, this._rf846e791bc205a),
      this._r6d71dd71101433?.addEventListener(u.OVER, this._rae86016742efb8),
      this._r6d71dd71101433?.addEventListener(u.OUT, this._rfac85b29aeba47),
      (this._r51f014344a1d01 = r.findChildByName("promo_close_icon")),
      this._r51f014344a1d01?.addEventListener(u.CLICK, this._rf4d9b06810c6a7),
      this._r51f014344a1d01?.addEventListener(u.OVER, this._r9ae0d480a03347),
      this._r51f014344a1d01?.addEventListener(u.OUT, this._rb03aae6aa1d3d6),
      this._toolbar.extensionView?._ra96f07968c4ed0(a.const_1198, r, class_1954.SLOT_CLUB_PROMO),
      r
    );
  }
  destroyWindow() {
    (this._r6d71dd71101433 != null &&
      (this._r6d71dd71101433.removeEventListener(u.CLICK, this._rf846e791bc205a),
      this._r6d71dd71101433.removeEventListener(u.OVER, this._rae86016742efb8),
      this._r6d71dd71101433.removeEventListener(u.OUT, this._rfac85b29aeba47),
      (this._r6d71dd71101433 = null)),
      this._r51f014344a1d01 != null &&
        (this._r51f014344a1d01.removeEventListener(u.CLICK, this._rf4d9b06810c6a7),
        this._r51f014344a1d01.removeEventListener(u.OVER, this._r9ae0d480a03347),
        this._r51f014344a1d01.removeEventListener(u.OUT, this._rb03aae6aa1d3d6),
        (this._r51f014344a1d01 = null)),
      this._view?.dispose(),
      (this._view = null));
  }
  _rf4d9b06810c6a7 = n((e) => {
    ((this._r5737ec95693c95 = !0),
      this.destroyWindow(),
      this.connection?.send(
        new class_2154("SuperSaverAds", "client_action", "supersaverads.video.promo.close_clicked"),
      ));
  }, "_rf4d9b06810c6a7");
  _r9ae0d480a03347 = n((e) => {
    this._r51f014344a1d01 != null && (this._r51f014344a1d01.color = a.CLOSE_COLOR_OVER);
  }, "_r9ae0d480a03347");
  _rb03aae6aa1d3d6 = n((e) => {
    this._r51f014344a1d01 != null && (this._r51f014344a1d01.color = a.CLOSE_COLOR_NORMAL);
  }, "_rb03aae6aa1d3d6");
  _rf846e791bc205a = n((e) => {
    this.catalog._r985b1eb69c27a3.launch(d3e._re2b29ea568a3b3) || this.destroyWindow();
  }, "_rf846e791bc205a");
  _rae86016742efb8 = n((e) => {
    let r = this._view?.findChildByName("promo_text");
    r != null && (r.textColor = a.LINK_COLOR_HIGHLIGHT);
  }, "_rae86016742efb8");
  _rfac85b29aeba47 = n((e) => {
    let r = this._view?.findChildByName("promo_text");
    r != null && (r.textColor = a.LINK_COLOR_NORMAL);
  }, "_rfac85b29aeba47");
}
