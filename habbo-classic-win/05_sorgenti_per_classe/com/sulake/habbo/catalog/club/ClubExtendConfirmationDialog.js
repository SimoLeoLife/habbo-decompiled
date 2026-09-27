// Estratto da HabboAirLauncher.deobf.js, riga 172929.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/club/ClubExtendConfirmationDialog.as
// Nome offuscato: _i384f6dac8ca08d

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._offer = r;
  }
  static {
    n(this, "ClubExtendConfirmationDialog");
  }
  static CREDIT_IMAGE_COUNT = 7;
  static YOUR_PRICE_ICON_BITMAP_ELEMENT_NAME = "your_price_icon_left";
  static const_1192 = "${image.library.catalogue.url}catalogue/vip_extend_tsr.png";
  static TEASER_IMAGE_MIME_TYPE = "image/png";
  static ANIMATION_TRIGGER_INTERVAL = 2e3;
  static const_147 = 75;
  static LINK_COLOR_DEFAULT = 0;
  static LINK_COLOR_HOVER = 9552639;
  _view = null;
  _r331992f540d231 = null;
  _r03306240099fc5 = null;
  _rb9ff569c1d6635 = null;
  _rad75d515ca1ac9 = new Array(a.CREDIT_IMAGE_COUNT).fill(null);
  _recbd33097b4ac2 = null;
  _r86910370af5011 = null;
  _r3144efde2c69dd = 0;
  _r6e4ba20336a3c3 = 0;
  _disposed = !1;
  _localizationKey = "catalog.club.extend.";
  dispose() {
    if (!this._disposed) {
      ((this._offer = null),
        (this.var_63 = null),
        this._r7defa44c449ec1(),
        this._r331992f540d231?.removeEventListener(u.OUT, this._r4d2663ec5e3039),
        this._r331992f540d231?.removeEventListener(u.OVER, this._r75a6b5b7639316),
        (this._r331992f540d231 = null),
        (this._r03306240099fc5 = null),
        (this._rb9ff569c1d6635 = null));
      for (let e = 0; e < a.CREDIT_IMAGE_COUNT; e++)
        (this._rad75d515ca1ac9[e]?.dispose(), (this._rad75d515ca1ac9[e] = null));
      (this._view?.dispose(), (this._view = null), (this._disposed = !0));
    }
  }
  showConfirmation() {
    if (
      this._offer == null ||
      this.var_63 == null ||
      this._disposed ||
      ((this._view = this.createWindow("club_extend_confirmation")), this._view == null)
    )
      return;
    if (((this._view.procedure = this._r4d2fcea4870df2), this._view.center(), !this._offer.vip)) {
      this._localizationKey += "basic.";
      let f = this._view.findChildByName("club_level_icon");
      f != null && ((f.style = HabboIconType.CLUB_ICON_GIGANTIC), (f.x += 15));
    }
    let e = this.var_63.localization;
    (this.setCaption("normal_price_price_left", String(this._offer._r052a5622f6f7d5)),
      this.setCaption("normal_price_price_right", String(this._offer._r7a85d602f9e6c9)),
      this.setCaption("you_save_price_left", String(this._offer._r076dbd64e63199)),
      this.setCaption("you_save_price_right", String(this._offer._r19fdd3749a5bb8)),
      this.setCaption("your_price_price_left", String(this._offer.priceCredits)),
      this.setCaption("your_price_price_right", String(this._offer.priceActivityPoints)),
      this._view.title != null &&
        (this._view.title.caption = e?.getLocalization(`${this._localizationKey}confirm.caption`) ?? ""),
      this.setCaption(
        "extend_title",
        e?.getLocalization(`${this._localizationKey}confirm.title`) ?? "",
      ),
      this.setCaption(
        "normal_price_label",
        e?.getLocalization(`${this._localizationKey}normal.label`) ?? "",
      ),
      this.setCaption(
        "you_save_label",
        e?.getLocalization(`${this._localizationKey}save.label`) ?? "",
      ),
      this.setCaption(
        "your_price_label",
        e?.getLocalization(`${this._localizationKey}price.label`) ?? "",
      ),
      this.setCaption(
        "buy_now_button",
        e?.getLocalization(`${this._localizationKey}buy.button`) ?? "",
      ),
      this.setCaption(
        "maybe_later_link",
        e?.getLocalization(`${this._localizationKey}later.link`) ?? "",
      ));
    let r = "";
    (this._offer.var_5055 > 1
      ? (e?._r43eae9731f5b27(
          `${this._localizationKey}expiration_days_left`,
          "day",
          this._offer.var_5055.toString(),
        ),
        e?._r43eae9731f5b27(
          `${this._localizationKey}expiration_days_left`,
          "duration",
          (31 * this._offer.months).toString(),
        ),
        (r = e?.getLocalization(`${this._localizationKey}expiration_days_left`) ?? ""))
      : (r = e?.getLocalization(`${this._localizationKey}expires_today`) ?? ""),
      this.setCaption("offer_expiration", r),
      (this._r331992f540d231 = this._view.findChildByName("maybe_later_region")),
      (this._r03306240099fc5 = this._view.findChildByName("maybe_later_link")),
      this._r331992f540d231?.addEventListener(u.OUT, this._r4d2663ec5e3039),
      this._r331992f540d231?.addEventListener(u.OVER, this._r75a6b5b7639316));
    let t = this._r61240944efcab1("icon_credit_0");
    (this._re5658eca96281a("normal_price_icon_left", t),
      this._re5658eca96281a("you_save_icon_left", t),
      this._rd1af4ae253a5fc("normal_price_icon_right"),
      this._rd1af4ae253a5fc("you_save_icon_right"),
      this._rd1af4ae253a5fc("your_price_icon_right"));
    let i = this._view.findChildByName("club_teaser");
    i != null && ((i.x = 1), (i.y = this._view.height - 144), (i.height = 144), (i.width = 133));
    let s = this.var_63.config?.interpolate(a.const_1192) ?? a.const_1192;
    (this.var_63.config != null && (s = this.var_63.config.updateUrlProtocol(s)),
      this.loadAssetFromUrl("club_teaser", "club_teaser", s, a.TEASER_IMAGE_MIME_TYPE, this._r207b5faa1db658));
    let o = this._view.findChildByName("itemlist_vertical"),
      d = this._view.findChildByName("total_amount_line"),
      c = this._view.findChildByName("background_container");
    (o != null && d != null && c != null && (c.height = o.y + d.height + d.y),
      (this._rb9ff569c1d6635 = this._view.findChildByName(a.YOUR_PRICE_ICON_BITMAP_ELEMENT_NAME)));
    for (let f = 0; f < a.CREDIT_IMAGE_COUNT; f++) {
      let b = this.var_63.assets?.getAssetByName(`icon_credit_${f}`)?.content;
      this._rad75d515ca1ac9[f] = b?.clone() ?? null;
    }
    this.startAnimation();
  }
  _rd1af4ae253a5fc(e) {
    let r = this._view?.findChildByName(e);
    r != null &&
      this._offer != null &&
      (r.style = et.getIconStyleFor(
        this._offer.var_5450,
        this.var_63?.config ?? null,
        !0,
      ));
  }
  _r4d2663ec5e3039 = n(() => {
    this._r03306240099fc5 != null && (this._r03306240099fc5.textColor = a.LINK_COLOR_DEFAULT);
  }, "_r4d2663ec5e3039");
  _r75a6b5b7639316 = n(() => {
    this._r03306240099fc5 != null && (this._r03306240099fc5.textColor = a.LINK_COLOR_HOVER);
  }, "_r75a6b5b7639316");
  startAnimation() {
    (this._r7defa44c449ec1(),
      this.setAnimationFrame(),
      (this._recbd33097b4ac2 = new _i05394ecc0c0c4d(a.ANIMATION_TRIGGER_INTERVAL)),
      this._recbd33097b4ac2.addEventListener(DeBouncer.addEventListener, this._r46773066589c1f),
      this._recbd33097b4ac2.start());
  }
  _r7defa44c449ec1() {
    ((this._r3144efde2c69dd = 0),
      (this._r6e4ba20336a3c3 = 0),
      this._r86910370af5011 != null &&
        (this._r86910370af5011.stop(),
        this._r86910370af5011.removeEventListener(DeBouncer.addEventListener, this._r453e330ffd12a6),
        this._r86910370af5011.removeEventListener(DeBouncer._rf33144eac61595, this._r5684d9a5edf47d),
        (this._r86910370af5011 = null)),
      this._recbd33097b4ac2 != null &&
        (this._recbd33097b4ac2.stop(),
        this._recbd33097b4ac2.removeEventListener(DeBouncer.addEventListener, this._r46773066589c1f),
        (this._recbd33097b4ac2 = null)));
  }
  setAnimationFrame() {
    if (this._rb9ff569c1d6635 == null || this._r3144efde2c69dd >= a.CREDIT_IMAGE_COUNT) return;
    this._rb9ff569c1d6635.bitmap?.dispose();
    let e = this._rad75d515ca1ac9[this._r3144efde2c69dd];
    e != null &&
      ((this._rb9ff569c1d6635.bitmap = new A(
        this._rb9ff569c1d6635.width,
        this._rb9ff569c1d6635.height,
        !0,
        0,
      )),
      this._rb9ff569c1d6635.bitmap.copyPixels(e, e.rect, new E(0, 0)));
  }
  _ra5ff2bc51068cd() {
    ((this._r86910370af5011 = new _i05394ecc0c0c4d(a.const_147, a.CREDIT_IMAGE_COUNT - 1)),
      this._r86910370af5011.addEventListener(DeBouncer.addEventListener, this._r453e330ffd12a6),
      this._r86910370af5011.addEventListener(DeBouncer._rf33144eac61595, this._r5684d9a5edf47d),
      this._r86910370af5011.start());
  }
  _r46773066589c1f = n(() => {
    this._ra5ff2bc51068cd();
  }, "_r46773066589c1f");
  _r453e330ffd12a6 = n(() => {
    (this._r3144efde2c69dd++, this.setAnimationFrame());
  }, "_r453e330ffd12a6");
  _r5684d9a5edf47d = n(() => {
    (this._r86910370af5011?.stop(),
      (this._r86910370af5011 = null),
      (this._r3144efde2c69dd = 0),
      this.setAnimationFrame(),
      this._r6e4ba20336a3c3 === 0
        ? ((this._r6e4ba20336a3c3 = 1), this._ra5ff2bc51068cd())
        : (this._r6e4ba20336a3c3 = 0));
  }, "_r5684d9a5edf47d");
  _r61240944efcab1(e) {
    return this.var_63?.assets?.getAssetByName(e)?.content ?? null;
  }
  _re5658eca96281a(e, r) {
    let t = this._view?.findChildByName(e);
    t != null &&
      (t.bitmap?.dispose(),
      r != null &&
        (t.width !== r.width && (t.width = r.width),
        t.height !== r.height && (t.height = r.height),
        (t.bitmap = new A(t.width, t.height, !0, 0)),
        t.bitmap.copyPixels(r, r.rect, new E(0, 0))));
  }
  loadAssetFromUrl(e, r, t, i, s) {
    let o = this._r61240944efcab1(r);
    if (o != null) return (this._re5658eca96281a(e, o), !0);
    let d = this.var_63?.assets?.loadAssetFromFile(r, new _i636490202c0f9a(t), i);
    return d == null ? !1 : (d.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, s), !0);
  }
  _r207b5faa1db658 = n((e) => {
    if (this._disposed) return;
    let r = e.target,
      t = r != null ? this._r61240944efcab1(r.assetName) : null;
    this._re5658eca96281a("club_teaser", t);
  }, "_r207b5faa1db658");
  _r4d2fcea4870df2 = n((e, r) => {
    let t = e,
      i = r;
    if (!(
      t?.type !== u.CLICK ||
      i == null ||
      this.var_63 == null ||
      this._offer == null ||
      this._disposed
    ))
      switch (i.name) {
        case "buy_now_button":
          this.var_63._r538a2965d7ce36();
          break;
        case "header_button_close":
        case "maybe_later_region":
          this.var_63.closeConfirmation();
          break;
        default:
          break;
      }
  }, "_r4d2fcea4870df2");
  createWindow(e) {
    let t = this.var_63?.assets?.getAssetByName(e)?.content ?? null;
    return this.var_63?.windowManager == null || t == null || this._disposed
      ? null
      : this.var_63.windowManager.buildFromXML(t);
  }
  setCaption(e, r) {
    let t = this._view?.findChildByName(e);
    t != null && (t.caption = r);
  }
}
