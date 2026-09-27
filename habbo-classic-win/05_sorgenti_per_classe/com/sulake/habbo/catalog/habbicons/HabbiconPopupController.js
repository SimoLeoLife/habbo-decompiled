// Estratto da HabboAirLauncher.deobf.js, riga 178712.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconPopupController.as
// Nome offuscato: _i926aed7e9b3be6

class a {
  constructor(e, r, t, i, s, o, d) {
    this.var_2962 = r;
    this.var_2777 = t;
    this._onHide = i;
    this.var_2975 = s;
    this._configuration = o;
    this._localization = d;
    ((this.var_1590 = e.findChildByName("habbicon_popup_layer")),
      (this._popup = e.findChildByName("habbicon_item_popup")),
      (this.var_2670 = e.findChildByName("habbicon_popup_content_list")),
      (this.var_3983 = e.findChildByName("habbicon_popup_background")),
      (this._popupTitle = e.findChildByName("habbicon_popup_title")),
      (this._rb1e7b7ce1cedc7 = e.findChildByName("habbicon_popup_description")),
      (this._r377feb07e52576 = e.findChildByName("habbicon_popup_action_row")),
      (this.onPopupActionClicked = e.findChildByName("habbicon_popup_action_button")),
      (this._r137f874562fa1e = e.findChildByName("habbicon_popup_bottom_bar")),
      (this.var_2792 = e.findChildByName("habbicon_popup_price")),
      (this._reb68bd459c3315 = e.findChildByName("habbicon_popup_currency_icon")),
      (this._r6c37408b9755eb = e.findChildByName("habbicon_popup_buy_button")),
      this.onPopupActionClicked?.addEventListener(u.CLICK, this._r2c9738c43ed3c1),
      this._r6c37408b9755eb?.addEventListener(u.CLICK, this._r80f48ba3a3c28c),
      this.hide(!1));
  }
  static {
    n(this, "HabbiconPopupController");
  }
  static HABBICON_POPUP_HORIZONTAL_MARGIN = 4;
  static HABBICON_POPUP_VERTICAL_OFFSET = 2;
  static const_487 = 7995440;
  var_1590;
  _popup;
  var_2670;
  var_3983;
  _popupTitle;
  _rb1e7b7ce1cedc7;
  _r377feb07e52576;
  onPopupActionClicked;
  _r137f874562fa1e;
  var_2792;
  _reb68bd459c3315;
  _r6c37408b9755eb;
  var_480 = null;
  _r448919959a600d = null;
  _re5c7638865acc2 = !1;
  _disposed = !1;
  _r34318a4807cc37 = 0;
  _r44bc414841bf86(e) {
    !e ||
      !e.item ||
      !this._popup ||
      !this.var_1590 ||
      ((this.var_480 = e),
      this.configurePopup(e.item, HabbiconPopupMode.resolve(e.item)),
      (this._popup.visible = !0),
      this._rbd539075307f5c(),
      this._r0602bdd7c16797(e),
      this._popup.invalidate(),
      (this._r34318a4807cc37 = (_ia411d8d8194a3a() + 75) | 0));
  }
  hide(e = !0) {
    let r = this._popup != null && this._popup.visible;
    (this._popup && (this._popup.visible = !1),
      (this.var_480 = null),
      e && r && this._onHide != null && this._onHide());
  }
  _r78cc737ce85fa3(e) {
    if (this._re5c7638865acc2 || !e) return;
    let r = e.getDisplayObject();
    !r ||
      !r.stage ||
      ((this._r448919959a600d = r.stage),
      this._r448919959a600d.addEventListener(_ifd7c1208e3417e._r9001c395573374, this._r7f8d9b7004c633, !1, 0, !0),
      this._r448919959a600d.addEventListener(_ifd7c1208e3417e._r8ea9e83cdee875, this._r7bc2ddb4199ad4, !0, 0, !0),
      (this._re5c7638865acc2 = !0));
  }
  _re1efbc43736f2a() {
    (this._re5c7638865acc2 &&
      this._r448919959a600d &&
      (this._r448919959a600d.removeEventListener(_ifd7c1208e3417e._r9001c395573374, this._r7f8d9b7004c633),
      this._r448919959a600d.removeEventListener(_ifd7c1208e3417e._r8ea9e83cdee875, this._r7bc2ddb4199ad4, !0)),
      (this._re5c7638865acc2 = !1),
      (this._r448919959a600d = null));
  }
  get visible() {
    return this._popup != null && this._popup.visible;
  }
  get activeTile() {
    return this.var_480;
  }
  configurePopup(e, r) {
    if (
      !this._popup ||
      !this._popupTitle ||
      !this.onPopupActionClicked ||
      !this._r377feb07e52576 ||
      !this._r137f874562fa1e ||
      !this._rb1e7b7ce1cedc7
    )
      return;
    this._popupTitle.caption = e?.name?.length ? e.name : "Habbicon";
    let t = r === HabbiconPopupMode.PURCHASE || r === HabbiconPopupMode.INFO,
      i = r === HabbiconPopupMode.PURCHASE,
      s = !i && r !== HabbiconPopupMode.INFO;
    ((this._rb1e7b7ce1cedc7.visible = t),
      (this._r137f874562fa1e.visible = i),
      (this._r377feb07e52576.visible = s),
      t && (this._rb1e7b7ce1cedc7.caption = this.resolveDescription(e, r)));
    let o = "";
    switch (r) {
      case HabbiconPopupMode.CLAIM:
        ((o = this.localize("habbicon_reward.claim", "Claim")),
          (this.onPopupActionClicked.color = 106753));
        break;
      case HabbiconPopupMode.REMOVE_FAVORITE:
        ((o = this.localize("habbicon.favourite.remove", "Remove from favourites")),
          (this.onPopupActionClicked.color = a.const_487));
        break;
      case HabbiconPopupMode.ADD_FAVORITE:
        ((o = this.localize("habbicon.favourite.add", "Add to favourites")),
          (this.onPopupActionClicked.color = 106753));
        break;
      default:
        (this.var_2792 &&
          (this.var_2792.caption = e
            ? this.formatPrice(e.priceCredits, e.priceActivityPoints)
            : "0"),
          this._reb68bd459c3315 &&
            e != null &&
            ((this._reb68bd459c3315.style = this.getPriceIconStyle(
              e.priceCredits,
              e.priceActivityPoints,
              e.activityPointType,
            )),
            this._reb68bd459c3315.fitToSize()));
    }
    s && (this.onPopupActionClicked.caption = o);
  }
  _rbd539075307f5c() {
    (this.var_2670?.arrangeListItems(),
      this._popup &&
        "arrangeListItems" in this._popup &&
        this._popup.arrangeListItems());
  }
  _r0602bdd7c16797(e) {
    if (!e || !e.window || !this._popup || !this.var_1590) return;
    let r = new D();
    e.window.getGlobalRectangle(r);
    let t = new D();
    this.var_1590.getGlobalRectangle(t);
    let i = Math.trunc(r.x - t.x + (r.width - this._popup.width) * 0.5),
      s = Math.trunc(
        Math.max(
          a.HABBICON_POPUP_HORIZONTAL_MARGIN,
          this.var_1590.width - this._popup.width - a.HABBICON_POPUP_HORIZONTAL_MARGIN,
        ),
      );
    i = Math.max(a.HABBICON_POPUP_HORIZONTAL_MARGIN, Math.min(s, i));
    let o = Math.trunc(r.y - t.y - this._popup.height + a.HABBICON_POPUP_VERTICAL_OFFSET),
      d = Math.trunc(Math.max(0, this.var_1590.height - this._popup.height));
    ((o = Math.max(0, Math.min(d, o))), (this._popup.x = i), (this._popup.y = o));
  }
  _r2c9738c43ed3c1 = n((e) => {
    this.var_2962 != null &&
      this.var_480?.item &&
      this.var_2962(this.var_480, HabbiconPopupMode.resolve(this.var_480.item));
  }, "_r2c9738c43ed3c1");
  _r80f48ba3a3c28c = n((e) => {
    this.var_2777 != null &&
      this.var_480?.item &&
      this.var_2777(this.var_480);
  }, "_r80f48ba3a3c28c");
  resolveDescription(e, r) {
    return e == null || r === HabbiconPopupMode.PURCHASE
      ? this.localize("habbicon.popup.desc.not_owned", "Not owned")
      : r === HabbiconPopupMode.INFO && e.isReward
        ? e.owned || e.favorite
          ? this.localize("generic.owned", "Owned")
          : e.claimable
            ? this.localize("habbicon_reward.claim", "Claim")
            : this.localize("habbicon.popup.desc.locked", "Locked")
        : e.owned || e.favorite
          ? this.localize("generic.owned", "Owned")
          : this.localize("habbicon.popup.desc.not_owned", "Not owned");
  }
  _r7f8d9b7004c633 = n((e) => {
    if (!this.visible || _ia411d8d8194a3a() <= this._r34318a4807cc37) return;
    let r = new E(e.stageX, e.stageY);
    this._rc05fdfdcef7333(this._popup, r) ||
      (this.var_2975 != null && this.var_2975(r)) ||
      this.hide();
  }, "_r7f8d9b7004c633");
  _r7bc2ddb4199ad4 = n((e) => {
    this.visible && this.hide();
  }, "_r7bc2ddb4199ad4");
  _rc05fdfdcef7333(e, r) {
    if (!e || !r) return !1;
    let t = new D();
    return (e.getGlobalRectangle(t), t.containsPoint(r));
  }
  dispose() {
    this._disposed ||
      (this.hide(!1),
      this._re1efbc43736f2a(),
      this.onPopupActionClicked?.removeEventListener(u.CLICK, this._r2c9738c43ed3c1),
      this._r6c37408b9755eb?.removeEventListener(u.CLICK, this._r80f48ba3a3c28c),
      (this.var_1590 = null),
      (this._popup = null),
      (this.var_3983 = null),
      (this.var_2670 = null),
      (this._popupTitle = null),
      (this._rb1e7b7ce1cedc7 = null),
      (this._r377feb07e52576 = null),
      (this.onPopupActionClicked = null),
      (this._r137f874562fa1e = null),
      (this.var_2792 = null),
      (this._reb68bd459c3315 = null),
      (this._r6c37408b9755eb = null),
      (this.var_480 = null),
      (this.var_2962 = null),
      (this.var_2777 = null),
      (this._onHide = null),
      (this.var_2975 = null),
      (this._configuration = null),
      (this._localization = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  formatPrice(e, r) {
    return e > 0 && r > 0 ? e + "c + " + r : e > 0 ? e.toString() : Math.max(0, r).toString();
  }
  getPriceIconStyle(e, r, t) {
    return et.getIconStyleFor(r > 0 ? t : et.CREDITS, this._configuration, !1);
  }
  localize(e, r) {
    let t = this._localization != null ? this._localization.getLocalization(e, r) : r;
    return t != null && t.length > 0 ? t : r;
  }
}
