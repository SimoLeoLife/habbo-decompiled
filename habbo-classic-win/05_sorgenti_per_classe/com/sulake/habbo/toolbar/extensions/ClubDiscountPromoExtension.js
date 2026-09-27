// Extracted from HabboAirLauncher.deobf.js, line 342236.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/ClubDiscountPromoExtension.as
// Obfuscated name: _i9ae7a45195b169

class a {
  static {
    n(this, "ClubDiscountPromoExtension");
  }
  static const_1198 = "club_promo";
  static ICON_STYLE_VIP = 14;
  static LINK_COLOR_NORMAL = 16777215;
  static LINK_COLOR_HIGHLIGHT = 12247545;
  _toolbar;
  _view = null;
  _disposed = !1;
  var_1753 = null;
  _rcaf99c2dce245b = null;
  _r2f26bd6fd1e3bd = 0;
  _rdcce8b8982bf9f = 0;
  _rf55dddd6c8ea4e = null;
  var_123 = null;
  _r3874c88f71c422 = null;
  constructor(e) {
    this._toolbar = e;
  }
  dispose() {
    this._disposed ||
      this._toolbar == null ||
      (this._toolbar.extensionView?._rb18768cf275a26(a.const_1198),
      this._r7defa44c449ec1(),
      this.destroyWindow(),
      (this._toolbar = null),
      (this._disposed = !0));
  }
  onClubChanged(e) {
    if (this._toolbar != null)
      if (
        this._toolbar.inventory?._rd5192fa7d1725e &&
        this._view == null &&
        this.isExtensionEnabled()
      ) {
        ((this._view = this.createWindow()), this._r3874c88f71c422 != null && this._r715d1b92811c0a());
        let r = this._toolbar.inventory._rb6cef0460c1b1c;
        (r < 1440 &&
          r > 0 &&
          ((this._r3874c88f71c422 = new UnkEventDispatcherWrapperSubclass_05394e(r * 60 * 1e3, 1)),
          this._r3874c88f71c422.addEventListener(DeBouncer._rf33144eac61595, this._r8e85ed0de6252c),
          this._r3874c88f71c422.start()),
          this.assignState(),
          this._toolbar.extensionView?._ra96f07968c4ed0(
            a.const_1198,
            this._view,
            class_1954.SLOT_CLUB_PROMO,
          ));
      } else
        (this._toolbar.extensionView?._rb18768cf275a26(a.const_1198),
          this.destroyWindow());
  }
  createWindow() {
    if (this._toolbar == null) throw new Error("Toolbar is not available.");
    let e = this._toolbar.assets.getAssetByName("club_discount_promotion_xml"),
      r = this._toolbar.windowManager.buildFromXML(e?.content, 1);
    if (r == null) throw new Error("Failed to construct club discount promo from XML.");
    if (((this.var_1753 = r.findChildByName("flashing_animation")), this.var_1753 != null)) {
      let i = this._toolbar.assets.getAssetByName("extend_hilite_png");
      ((this.var_123 = i?.content),
        this.var_123 != null && (this.var_1753.bitmap = this.var_123.clone()),
        (this.var_1753.visible = !1));
    }
    let t = r.findChildByName("text_region");
    return (
      t?.addEventListener(u.CLICK, this._rf846e791bc205a),
      t?.addEventListener(u.OVER, this._rae86016742efb8),
      t?.addEventListener(u.OUT, this._rfac85b29aeba47),
      this.assignState(r),
      r
    );
  }
  destroyWindow() {
    (this._view?.dispose(),
      (this._view = null),
      (this.var_1753 = null),
      this.animate(!1),
      this._r715d1b92811c0a());
  }
  assignState(e = this._view) {
    if (!(e == null || this._toolbar?.inventory == null)) {
      switch (this._toolbar.inventory.clubLevel) {
        case dr.NO_CLUB:
          (this.setText("${discount.bar.no.club.promo}"), this.setClubIcon(a.ICON_STYLE_VIP));
          break;
        case dr.VIP:
          (this.setText("${discount.bar.vip.expiring}"), this.setClubIcon(a.ICON_STYLE_VIP));
          break;
      }
      this.animate(!0);
    }
  }
  _r715d1b92811c0a() {
    this._r3874c88f71c422 != null &&
      (this._r3874c88f71c422.stop(),
      this._r3874c88f71c422.removeEventListener(DeBouncer._rf33144eac61595, this._r8e85ed0de6252c),
      (this._r3874c88f71c422 = null));
  }
  _r8e85ed0de6252c = n((e) => {
    (this._toolbar?.extensionView?._rb18768cf275a26(a.const_1198), this.destroyWindow());
  }, "_r8e85ed0de6252c");
  isExtensionEnabled() {
    return (
      this._toolbar?.inventory?.clubLevel === dr.VIP &&
      this._toolbar.getBoolean("club.membership.extend.vip.promotion.enabled")
    );
  }
  setText(e) {
    if (this._view == null) return;
    let r = this._view.findChildByName("promo_text"),
      t = this._view.findChildByName("promo_text_shadow");
    (r != null && (r.text = e), t != null && (t.text = e));
  }
  animate(e) {
    e
      ? (this._rf55dddd6c8ea4e?.stop(),
        (this._rf55dddd6c8ea4e = new UnkEventDispatcherWrapperSubclass_05394e(15e3)),
        this._rf55dddd6c8ea4e.addEventListener(DeBouncer.addEventListener, this._rd3fc565ff37c80),
        this._rf55dddd6c8ea4e.start())
      : (this._rf55dddd6c8ea4e?.stop(), (this._rf55dddd6c8ea4e = null), this._r7defa44c449ec1());
  }
  _r7defa44c449ec1() {
    this.var_1753 != null &&
      ((this.var_1753.visible = !1),
      (this.var_1753.bitmap = null),
      this._view?.invalidate(),
      this._rcaf99c2dce245b?.stop(),
      (this._rcaf99c2dce245b = null));
  }
  _rd3fc565ff37c80 = n((e) => {
    this.var_1753?.context != null &&
      ((this.var_1753.visible = !0), this._rad6551c4a16f20(), this._r62f2557fd48d4e());
  }, "_rd3fc565ff37c80");
  _rad6551c4a16f20() {
    this.var_1753 == null ||
      this.var_123 == null ||
      this._view == null ||
      ((this.var_1753.x = 3),
      (this.var_1753.y = 3),
      (this.var_1753.bitmap = this.var_123.clone()),
      (this.var_1753.height = this._view.height - 6),
      (this.var_1753.width = this.var_1753.bitmap.width),
      this.var_1753.invalidate(),
      (this._rdcce8b8982bf9f = this._view.width - 7 - this.var_1753.bitmap.width),
      (this._r2f26bd6fd1e3bd = 0));
  }
  _r62f2557fd48d4e() {
    ((this._rcaf99c2dce245b = new UnkEventDispatcherWrapperSubclass_05394e(25, 26)),
      this._rcaf99c2dce245b.addEventListener(DeBouncer.addEventListener, this._r0c7da324149cb3),
      this._rcaf99c2dce245b.addEventListener(DeBouncer._rf33144eac61595, this._rb62b9bb802b1c4),
      this._rcaf99c2dce245b.start());
  }
  _r0c7da324149cb3 = n((e) => {
    if (!(this.var_1753 == null || this.var_123 == null || this._view == null)) {
      if (
        ((this.var_1753.x = 3 + (this._r2f26bd6fd1e3bd / 20) * this._rdcce8b8982bf9f),
        this.var_1753.x > this._rdcce8b8982bf9f)
      ) {
        let r = this._view.width - 4 - this.var_1753.x,
          t = new A(r, this.var_123.height, !0, 0);
        (t.copyPixels(this.var_123, new D(0, 0, r, this.var_123.height), new E(0, 0)),
          (this.var_1753.bitmap = t),
          (this.var_1753.width = r));
      }
      (this.var_1753.invalidate(), this._r2f26bd6fd1e3bd++);
    }
  }, "_r0c7da324149cb3");
  _rb62b9bb802b1c4 = n((e) => {
    this._r7defa44c449ec1();
  }, "_rb62b9bb802b1c4");
  setClubIcon(e) {
    let r = this._view?.findChildByName("club_icon");
    r != null && ((r.style = e), r.invalidate());
  }
  _rf846e791bc205a = n((e) => {
    this._toolbar?.inventory?.clubLevel === dr.VIP &&
      (this._toolbar.connection?.send(
        new class_2154("DiscountPromo", "discount", "client.club.extend.discount.clicked"),
      ),
      this._toolbar.connection?.send(new class_2868()));
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
