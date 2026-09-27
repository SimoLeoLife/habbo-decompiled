// Estratto da HabboAirLauncher.deobf.js, riga 235813.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/collectibles/CollectibleGroupedItem.as
// Nome offuscato: _iaddbcec7e28b6b

class a {
  constructor(e, r, t) {
    this.var_38 = t;
    this._rde374a9e2a45dd = new _i1b60011614647b(e);
    for (let o of r) this._rfeccac7a88f728.set(o, !1);
    let s = this.var_38?.controller.assets.getAssetByName("inventory_thumb_nft_xml")?.content;
    (s != null &&
      ((this._window = this.var_38?.controller.windowManager.buildFromXML(s)),
      this._window != null &&
        ((this._window.procedure = (...o) => this._r3e15584731b5d1(o[0], o[1])),
        (this.var_989 = this._window.findChildByTag("BG_COLOR")))),
      (this._name =
        this.var_38?.controller.catalog._r93bfd6c6424c93.getProductName(this._rde374a9e2a45dd) ??
        ""),
      this._rf5638b94094d55());
  }
  static {
    n(this, "CollectibleGroupedItem");
  }
  static THUMB_COLOR_NORMAL = 13421772;
  static THUMB_COLOR_UNSEEN = 10275685;
  static THUMB_BLEND_ITEMS_AVAILABLE = 1;
  static THUMB_BLEND_ITEMS_NOT_AVAILABLE = 0.2;
  var_217 = !1;
  _rde374a9e2a45dd;
  _rfeccac7a88f728 = new Map();
  var_2619 = !1;
  _window = null;
  var_989 = null;
  _isUnseen = !1;
  _name;
  get name() {
    return this._name;
  }
  get isInitialized() {
    return this.var_217;
  }
  get item() {
    return this._rde374a9e2a45dd.item;
  }
  get _r2e115ccbab01eb() {
    return Array.from(this._rfeccac7a88f728.keys());
  }
  get amount() {
    return this._rfeccac7a88f728.size;
  }
  get isSelected() {
    return this.var_2619;
  }
  get window() {
    return this._window;
  }
  get renderableItem() {
    return this._rde374a9e2a45dd;
  }
  initializeImage() {
    let e = this.nftIconWidget?.widget;
    e != null && ((e.productInfo = this._rde374a9e2a45dd), (this.var_217 = !0));
  }
  addAssetId(e) {
    (this._rfeccac7a88f728.set(e, !1), this._rf5638b94094d55());
  }
  pop(e) {
    let r = [];
    for (let [t, i] of this._rfeccac7a88f728) if ((i || r.push(t), r.length >= e)) break;
    return r;
  }
  _ree1ef1837a526f(e) {
    let r = this._rfeccac7a88f728.delete(e);
    return (r && this._rf5638b94094d55(), r);
  }
  hasAsset(e, r = !1) {
    return this._rfeccac7a88f728.has(e) ? this._rfeccac7a88f728.get(e) === r : !1;
  }
  _r38453430cd22d3(e, r = !1) {
    if (!this._rfeccac7a88f728.has(e)) return !1;
    let t = this._rfeccac7a88f728.get(e) === !0;
    return t && r
      ? (this._rfeccac7a88f728.set(e, !1), this._rf5638b94094d55(), !0)
      : !t && !r
        ? (this._rfeccac7a88f728.set(e, !0), this._rf5638b94094d55(), !0)
        : !1;
  }
  _r28af190239d0f6() {
    let e = !1;
    for (let [r, t] of this._rfeccac7a88f728) t && (this._rfeccac7a88f728.set(r, !1), (e = !0));
    e && this._rf5638b94094d55();
  }
  dispose() {
    (this.var_2619 && this.var_38?.setSelected(null),
      this._window?.dispose(),
      (this._window = null));
  }
  set isSelected(e) {
    if (((this.var_2619 = e), this.var_989 == null || this._window == null)) return;
    this.var_989.color = this._isUnseen ? a.THUMB_COLOR_UNSEEN : a.THUMB_COLOR_NORMAL;
    let r = this._window.findChildByName("outline");
    r != null && (r.visible = e);
  }
  set isUnseen(e) {
    this._isUnseen !== e && ((this._isUnseen = e), (this.isSelected = this.var_2619));
  }
  removeIntervalProcedure() {
    this._window != null && (this._window.procedure = null);
  }
  get _rcd5da7ed1ad363() {
    let e = 0;
    for (let r of this._rfeccac7a88f728.values()) r || e++;
    return e;
  }
  _rf5638b94094d55() {
    let e = this._rcd5da7ed1ad363;
    (this.numberContainer != null && (this.numberContainer.visible = e > 1),
      this.numberText != null && (this.numberText.caption = String(e)));
    let r = this.nftIconWidget?.widget;
    r != null && (r.blend = e === 0 ? a.THUMB_BLEND_ITEMS_NOT_AVAILABLE : a.THUMB_BLEND_ITEMS_AVAILABLE);
  }
  _r3e15584731b5d1(e, r) {
    switch (e?.type) {
      case u.CLICK:
        this.var_38?.setSelected(this);
        break;
      case u.DOUBLE_CLICK:
        this.var_38?._rd7adde26163d88(this, 1);
        break;
    }
  }
  get nftIconWidget() {
    return this._window?.findChildByName("nft_icon");
  }
  get numberContainer() {
    return this._window?.findChildByName("number_container");
  }
  get numberText() {
    return this._window?.findChildByName("number");
  }
}
