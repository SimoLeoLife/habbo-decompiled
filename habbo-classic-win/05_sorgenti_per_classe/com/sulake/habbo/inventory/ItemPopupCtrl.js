// Estratto da HabboAirLauncher.deobf.js, riga 239145.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/ItemPopupCtrl.as
// Nome offuscato: _iaf559a20f2184a

class a {
  constructor(e, r, t, i) {
    this.var_93 = e;
    this._assets = r;
    this._windowManager = t;
    this._inventory = i;
    if (this.var_93 == null || this._assets == null)
      throw new Error("Null pointers passed as argument!");
    ((this.var_93.visible = !1),
      this._r626cf944d280b6.addEventListener(DeBouncer.addEventListener, this._ra23e08f67c2003),
      this.var_753.addEventListener(DeBouncer.addEventListener, this._rb80b97555e121e));
    let s = this._assets.getAssetByName("popup_arrow_right_png");
    (s?.content instanceof A && (this._r563dcd1a3c6da4 = s.content),
      (s = this._assets.getAssetByName("popup_arrow_left_png")),
      s?.content instanceof A && (this.var_1769 = s.content));
  }
  static {
    n(this, "ItemPopupCtrl");
  }
  static const_363 = 1;
  static LOCATION_RIGHT = 2;
  static BOUNDS_MARGIN = -5;
  static OPEN_DELAY_MS = 250;
  static CLOSE_DELAY_MS = 100;
  static IMAGE_MAX_WIDTH = 180;
  static IMAGE_MAX_HEIGHT = 200;
  _r626cf944d280b6 = new _i05394ecc0c0c4d(a.OPEN_DELAY_MS, 1);
  var_753 = new _i05394ecc0c0c4d(a.CLOSE_DELAY_MS, 1);
  _ra23e08f67c2003 = n((e) => this._r55145e05378703(e), "_ra23e08f67c2003");
  _rb80b97555e121e = n((e) => this.onHideTimer(e), "_rb80b97555e121e");
  _ra3f89244be9ad5 = n((e) => this._r968de56a6383b4(e), "_ra3f89244be9ad5");
  _r5a7605de6fb4cc = n((e) => this.onExtImageLoaded(e), "_r5a7605de6fb4cc");
  _parent = null;
  var_4352 = a.LOCATION_RIGHT;
  var_1769 = null;
  _r563dcd1a3c6da4 = null;
  _r0223faad0a6390 = !1;
  dispose() {
    (this._r626cf944d280b6.removeEventListener(DeBouncer.addEventListener, this._ra23e08f67c2003),
      this._r626cf944d280b6.stop(),
      this.var_753.removeEventListener(DeBouncer.addEventListener, this._rb80b97555e121e),
      this.var_753.stop(),
      (this.var_93 = null),
      (this._parent = null),
      (this._assets = null),
      (this.var_1769 = null),
      (this._r563dcd1a3c6da4 = null));
  }
  updateContent(e, r, t = null, i = null, s = null, o = a.LOCATION_RIGHT, d = !1) {
    if (this.var_93 == null || e == null) return;
    (t == null && (t = new A(1, 1, !0, 16777215)),
      this._parent != null && this._parent.removeChild(this.var_93),
      (this._parent = e),
      (this.var_4352 = o),
      (this._r0223faad0a6390 = !1));
    let c = this.var_93.findChildByName("item_name_text");
    c != null && (c.caption = r);
    let f = this.var_93.findChildByName("nft_image"),
      l = this.var_93.findChildByName("nft_overlay_icon"),
      b = this.var_93.findChildByName("unique_item_overlay_widget"),
      _ = this.var_93.findChildByName("item_image"),
      h = f?.widget;
    if (i != null) {
      (f != null && (f.visible = !0),
        l != null && (l.visible = !0),
        b != null && (b.visible = !1),
        _ != null && (_.visible = !1),
        h != null && (h.productInfo = i),
        f != null && (this.var_93.height = f.bottom + 28));
      return;
    }
    if (
      (f != null && (f.visible = !1),
      h?.clearPreviewer(),
      l != null && (l.visible = !1),
      _ != null && (_.visible = !0),
      d && this._inventory != null && _ != null)
    ) {
      if ((b != null && (b.visible = !1), (_.bitmap = new A(1, 1, !0, 16777215)), s != null)) {
        this._r0223faad0a6390 = !0;
        let m = s.var_2907("id");
        if (!ua.getJSONValue(m)) this.loadExtraData(m);
        else {
          let v = s.var_2907("w");
          if (!ua.getJSONValue(v)) {
            let w = this._inventory.getProperty("stories.image_url_base") + v;
            this.loadImage(w);
          }
        }
      }
      return;
    }
    let p = new A(
      Math.min(a.IMAGE_MAX_WIDTH, t.width),
      Math.min(a.IMAGE_MAX_HEIGHT, t.height),
      !0,
      16777215,
    );
    if (
      (p.copyPixels(t, new D(0, 0, p.width, p.height), new E(0, 0), null, null, !0),
      _ != null &&
        ((_.bitmap = p),
        (_.width = _.bitmap.width),
        (_.height = _.bitmap.height),
        (_.x = (this.var_93.width - _.width) / 2),
        (this.var_93.height = _.bottom + 10)),
      s != null && s.uniqueSerialNumber > 0 && b != null)
    ) {
      let m = b.widget;
      m != null && ((m.serialNumber = s.uniqueSerialNumber), (m.seriesSize = s.uniqueSeriesSize));
    } else b != null && (b.visible = !1);
  }
  show() {
    if (
      (this.var_753.reset(),
      this._r626cf944d280b6.reset(),
      !(this._parent == null || this.var_93 == null))
    ) {
      switch (
        ((this.var_93.visible = !0),
        this._parent.addChild(this.var_93),
        this.refreshArrow(this.var_4352),
        this.var_4352)
      ) {
        case a.const_363:
          this.var_93.x = -1 * this.var_93.width - a.BOUNDS_MARGIN;
          break;
        case a.LOCATION_RIGHT:
        default:
          this.var_93.x = this._parent.width + a.BOUNDS_MARGIN;
          break;
      }
      this.var_93.y = (this._parent.height - this.var_93.height) / 2;
    }
  }
  hide() {
    this.var_93 != null &&
      ((this.var_93.visible = !1),
      this.var_753.reset(),
      this._r626cf944d280b6.reset(),
      this._parent != null && this._parent.removeChild(this.var_93));
  }
  _r1d3e57972f9e6e() {
    (this.var_753.reset(), this._r626cf944d280b6.reset(), this._r626cf944d280b6.start());
  }
  hideDelayed() {
    (this.var_753.reset(), this._r626cf944d280b6.reset(), this.var_753.start());
  }
  loadExtraData(e) {
    if (this._inventory == null) return;
    let r = this._inventory.getProperty("extra_data_service_url") + e,
      t = new _ib182ac399b1881();
    (t.addEventListener(M.ComponentDependency, this._ra3f89244be9ad5), t.load(new _i636490202c0f9a(r)));
  }
  _r968de56a6383b4(e) {
    let r = e.target,
      t = typeof r?.data == "string" ? r.data : "";
    if (
      (r?.removeEventListener(M.ComponentDependency, this._ra3f89244be9ad5),
      !(!this._r0223faad0a6390 || ua.getJSONValue(t)))
    )
      try {
        let i = JSON.parse(t),
          s = typeof i.url == "string" ? i.url : "";
        ua.getJSONValue(s) || this.loadImage(s);
      } catch {
        return;
      }
  }
  loadImage(e) {
    if (ua.getJSONValue(e)) return;
    let r = new StringUtil("image/png");
    (r.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._r5a7605de6fb4cc), r.load(new _i636490202c0f9a(e)));
  }
  onExtImageLoaded(e) {
    if (this.var_93 == null || !this._r0223faad0a6390 || this._assets == null) return;
    let r = e.target,
      t = this.var_93.findChildByName("item_image");
    if (r == null || t == null) return;
    r.removeEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._r5a7605de6fb4cc);
    let i = new _ifdd92074c780c7().decode(r.bytes),
      s = new A(Math.min(a.IMAGE_MAX_WIDTH, i.width), Math.min(a.IMAGE_MAX_HEIGHT, i.height), !0, 16777215),
      o = a.IMAGE_MAX_WIDTH / Math.max(1, i.width),
      d = new Pe();
    (d.scale(o, o),
      s.draw(i, d),
      (t.bitmap = s),
      (t.width = t.bitmap.width),
      (t.height = t.bitmap.height),
      (t.x = (this.var_93.width - t.width) / 2),
      (this.var_93.height = t.bottom + 10));
  }
  refreshArrow(e = a.LOCATION_RIGHT) {
    if (this.var_93 == null || this.var_93.disposed) return;
    let r = this.var_93.findChildByName("arrow_pointer");
    if (!(r == null || this.var_1769 == null || this._r563dcd1a3c6da4 == null)) {
      switch (e) {
        case a.const_363:
          ((r.bitmap = this._r563dcd1a3c6da4.clone()),
            (r.width = this._r563dcd1a3c6da4.width),
            (r.height = this._r563dcd1a3c6da4.height),
            (r.y = (this.var_93.height - this._r563dcd1a3c6da4.height) / 2),
            (r.x = this.var_93.width - 1));
          break;
        case a.LOCATION_RIGHT:
        default:
          ((r.bitmap = this.var_1769.clone()),
            (r.width = this.var_1769.width),
            (r.height = this.var_1769.height),
            (r.y = (this.var_93.height - this.var_1769.height) / 2),
            (r.x = -1 * this.var_1769.width + 1));
          break;
      }
      r.invalidate();
    }
  }
  _r55145e05378703(e) {
    this.show();
  }
  onHideTimer(e) {
    this.hide();
  }
}
