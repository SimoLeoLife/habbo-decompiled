// Extracted from HabboAirLauncher.deobf.js, line 187496.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/targetedoffers/TargetedOfferDialogView.as
// Obfuscated name: _i98aba72cdd5888

class a extends OfferView {
  static {
    n(this, "TargetedOfferDialogView");
  }
  static IMAGE_DEFAULT_URL = "targetedoffers/offer_default.png";
  var_1205 = 1;
  constructor(e, r) {
    super(e, r);
  }
  buildWindow(e) {
    if (this.var_63?.catalog.windowManager == null || this._offer == null) return;
    let r = this.var_63.catalog.assets.getAssetByName(e)?.content;
    if (
      r == null ||
      ((this._window = this.var_63.catalog.windowManager.buildFromXML(r)),
      this._window == null)
    )
      return;
    let t = this._window,
      i = this._window.findChildByName("txt_title"),
      s = this._window.findChildByName("txt_description"),
      o = this._window.findChildByName("txt_price_label"),
      d = this._window.findChildByName("bmp_illustration"),
      c = this._window.findChildByName("quantity_input"),
      f = this._window.findChildByName("itemlist");
    if (
      (t?.title != null && (t.title.text = this.getLocalization(this._offer.title)),
      i != null && (i.text = this.getLocalization(this._offer.title)),
      s != null &&
        ((s.text = this.getLocalization(this._offer.description)), this.setLinkStyle(s)),
      o != null && (o.text = this.getLocalization("targeted.offer.price.label")),
      d != null)
    ) {
      let b = this.var_63.catalog.getProperty("image.library.url"),
        _ = this._rf7279e98e382e0(this._offer),
        h =
          _.length > 0
            ? _
            : this._offer.imageUrl.length > 0
              ? this._offer.imageUrl
              : a.IMAGE_DEFAULT_URL;
      d.assetUri = `${b}${h}`;
    }
    let l = this._window.findChildByName("purchase_cost_box");
    if (
      (l != null &&
        this.var_63.catalog.utils._ra10ac9ff6556f3(l, this._offer, this.var_1205),
      c != null)
    )
      ((c.text = String(this.var_1205)),
        c.addEventListener(sr.const_900, this._r5d6c22900316ee));
    else if (this._offer._r12cb3a063dbb1e <= 1 && f != null) {
      let b = this._window.findChildByName("cnt_quantity");
      b != null && f.removeListItem(b);
    }
    if (
      ((this._r713b7abae09edb = this.getLocalization("targeted.offer.dialog.timeleft", "")),
      this._offer.expirationTime === 0 && f != null)
    ) {
      let b = this._window.findChildByName("cnt_time_left");
      b != null && f.removeListItem(b);
    } else this._ra50b20a2cf6128();
    ((this._window.procedure = this._r64e450f8ad70fb),
      this._window.center(),
      this.updatePriceText(),
      this.updateButtonStates());
  }
  setTimeLeft(e) {
    let r = this._window?.findChildByName("txt_time_left");
    if (r == null || ((r.text = e), this._r713b7abae09edb === "")) return;
    let t = Math.max(this._r713b7abae09edb.indexOf("%timeleft%"), 0),
      i = this._window?.findChildByName("txt_time_left_label_1"),
      s = this._window?.findChildByName("txt_time_left_label_2");
    (i != null && (i.text = this._r713b7abae09edb.substring(0, Math.max(0, t - 1))),
      s != null && (s.text = this._r713b7abae09edb.substring(t + 10)));
  }
  updateButtonStates() {
    if (this._offer == null) return;
    let e = this._window?.findChildByName("txt_status"),
      r = this._window?.findChildByName("btn_buy"),
      t = this._window?.findChildByName("cnt_quantity"),
      i = this._window?.findChildByName("btn_get_credits"),
      s = this._offer.checkPurseBalance(
        this.var_63?.catalog.getPurse() ?? null,
        this.var_1205,
      );
    (e != null && (e.text = s ? "" : this.getLocalization("catalog.alert.notenough.credits")),
      t != null && (t.visible = this._offer._r12cb3a063dbb1e > 1),
      i != null && (i.visible = !s),
      r != null && (s && this.isQuantityValid() ? r.enable() : r.disable()));
    let o = this._window?.findChildByName("itemlist_buttonbar");
    (o?.arrangeListItems(), o?.arrangeListItems());
  }
  updatePriceText() {
    if (this._offer == null) return;
    let e = this._window?.findChildByName("txt_price_credits"),
      r = this._window?.findChildByName("txt_price_activityPoints");
    (e != null && (e.text = String(this.var_1205 * this._offer.priceInCredits)),
      r != null && (r.text = String(this.var_1205 * this._offer.priceInActivityPoints)));
    let t = this._window?.findChildByName("purchase_cost_box");
    t != null &&
      this.var_63?.catalog.utils._ra10ac9ff6556f3(t, this._offer, this.var_1205);
  }
  _r64e450f8ad70fb = n((e, r) => {
    if (!(e.type !== u.DOWN || this.var_63 == null || this._offer == null))
      switch (r.name) {
        case "header_button_close":
          this.var_63._ra29cfd646939ae(this._offer);
          break;
        case "btn_get_credits":
          this.var_63._r55bf6a6841c7d1(this._offer);
          break;
        case "btn_buy":
          if (!this.isQuantityValid()) return;
          this.var_63.showConfirmation(this._offer, this.var_1205);
          break;
      }
  }, "_r64e450f8ad70fb");
  isQuantityValid() {
    return this.var_1205 >= 1 && this.var_1205 <= this._offer._r12cb3a063dbb1e;
  }
  _r5d6c22900316ee = n((e) => {
    let r = e.target;
    if (r == null || this._offer == null) return;
    let t = Number.parseInt(r.text, 10);
    if (
      (t === 0 && r.text !== "") ||
      Number.isNaN(t) ||
      t > 999 ||
      t > this._offer._r12cb3a063dbb1e
    ) {
      r.text = String(this.var_1205);
      return;
    }
    ((this.var_1205 = t), this.updatePriceText(), this.updateButtonStates());
  }, "_r5d6c22900316ee");
  setLinkStyle(e) {
    new UnkClass_b0061b()._r14e5354d420daf("a:link", { textDecoration: "underline" });
  }
  _rf7279e98e382e0(e) {
    return this.var_63?.catalog.getProperty(`targeted.offer.override.preview_image.${e.id}`) ?? "";
  }
}
