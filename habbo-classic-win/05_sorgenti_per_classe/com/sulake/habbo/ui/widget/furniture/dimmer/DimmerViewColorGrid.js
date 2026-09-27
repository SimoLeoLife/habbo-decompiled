// Extracted from HabboAirLauncher.deobf.js, line 316414.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/dimmer/DimmerViewColorGrid.as
// Obfuscated name: _i4b9511cf387b2b

class {
  static {
    n(this, "DimmerViewColorGrid");
  }
  var_981;
  _view;
  _colorCellXML = null;
  _colorCellFrame = null;
  var_2425 = null;
  var_1960 = null;
  var_265 = null;
  constructor(e, r, t, i) {
    ((this._view = e), (this.var_981 = r), this.storeAssets(i), this.populate(t));
  }
  dispose() {
    ((this._view = null),
      (this.var_981 = null),
      (this._colorCellXML = null),
      (this._colorCellFrame = null),
      (this.var_2425 = null),
      (this.var_1960 = null));
  }
  _r8cff1a329eacf8(e) {
    this.var_981 == null ||
      e < 0 ||
      e >= this.var_981._r72acf104e2c444 ||
      this.select(this.var_981.getGridItemAt(e));
  }
  populate(e) {
    this._view == null || this.var_981 == null || this.populateColourGrid(e);
  }
  select(e) {
    if (e == null) return;
    let r = this.var_265?.getChildByName("chosen") ?? null;
    (r != null && (r.visible = !1),
      (this.var_265 = e),
      (r = this.var_265.getChildByName("chosen")),
      r != null && (r.visible = !0));
  }
  populateColourGrid(e) {
    (this.var_981?._rbb4c26d068856f(), (this.var_265 = null));
    for (let r of this.colors) {
      let t = e.buildFromXML(this._colorCellXML);
      if (t == null || this.var_981 == null) continue;
      (t.addEventListener(u.CLICK, this.onClick),
        (t.background = !0),
        (t.color = 4294967295),
        (t.width = this._colorCellFrame?.width ?? t.width),
        (t.height = this._colorCellFrame?.height ?? t.height),
        this.var_981.addGridItem(t));
      let i = t.findChildByTag("BG_BORDER");
      i != null &&
        this._colorCellFrame != null &&
        ((i.bitmap = new A(this._colorCellFrame.width, this._colorCellFrame.height, !0, 0)),
        i.bitmap.copyPixels(this._colorCellFrame, this._colorCellFrame.rect, new E(0, 0)));
      let s = t.findChildByTag("COLOR_IMAGE");
      if (s != null && this.var_2425 != null) {
        s.bitmap = new A(this.var_2425.width, this.var_2425.height, !0, 0);
        let d = ((r >> 16) & 255) / 255,
          c = ((r >> 8) & 255) / 255,
          f = (r & 255) / 255,
          l = new UnkClass_4210dc(d, c, f),
          b = this.var_2425.clone();
        (b.colorTransform(b.rect, l), s.bitmap.copyPixels(b, b.rect, new E(0, 0)));
      }
      let o = t.findChildByTag("COLOR_CHOSEN");
      o != null &&
        this.var_1960 != null &&
        ((o.bitmap = new A(this.var_1960.width, this.var_1960.height, !0, 16777215)),
        o.bitmap.copyPixels(this.var_1960, this.var_1960.rect, new E(0, 0), null, null, !0),
        (o.visible = !1));
    }
  }
  onClick = n((e) => {
    let r = this.var_981?._r76bcf89cad2fb2(e.target) ?? -1;
    (this._r8cff1a329eacf8(r), this._view != null && (this._view._r4c047a67fec73a = r));
  }, "onClick");
  storeAssets(e) {
    if (e == null) return;
    let r = e.getAssetByName("dimmer_color_chooser_cell");
    this._colorCellXML = r?.content;
    let t = e.getAssetByName("dimmer_color_frame");
    ((this._colorCellFrame = t?.content),
      (t = e.getAssetByName("dimmer_color_button")),
      (this.var_2425 = t?.content),
      (t = e.getAssetByName("dimmer_color_selected")),
      (this.var_1960 = t?.content));
  }
  get colors() {
    return this._view?.colors ?? [];
  }
}
