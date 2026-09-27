// Estratto da HabboAirLauncher.deobf.js, riga 192373.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/ColourGridCatalogWidget.as
// Nome offuscato: _ie37beda1ff8b98

class extends CatalogWidget {
  static {
    n(this, "ColourGridCatalogWidget");
  }
  _r9ffdd05ee5d61d = [];
  _colourGrid = null;
  _re31c845e974ee2 = null;
  _rdc0717216253df = this.getAssetBitmapData("");
  _raf69024cabc714 = this.getAssetBitmapData("");
  _r1d7672cce9f947 = this.getAssetBitmapData("");
  var_265 = null;
  var_4391 = "";
  _r9318ebaceb049a = new Map();
  constructor(e) {
    super(e);
  }
  init() {
    if (!super.init()) return !1;
    if (
      (this._rd7318259311b4b(CatalogWidgetEnum.COLOUR_GRID),
      !(this._window?.tags.indexOf("FIXED") !== -1) && this._window?.getChildAt(0) != null)
    ) {
      let i = this._window.getChildAt(0);
      ((i.width = this._window.width), (i.height = this._window.height));
    }
    ((this._colourGrid = this._window?.findChildByName("colourGrid")),
      this._colourGrid != null &&
        this.window != null &&
        ((this._colourGrid.width = this.window.width - 6),
        (this._colourGrid.height = this.window.height - 6)));
    let t = this.page?.viewer.catalog?.assets.getAssetByName("color_chooser_cell") ?? null;
    return (
      (this._re31c845e974ee2 = t instanceof Df && t.content instanceof rr ? t.content : null),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.COLOUR_ARRAY, this._ra7091519c7ceff),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.MULTI_COLOUR_ARRAY, this._r1765f3e1473da5),
      !0
    );
  }
  dispose() {
    (this._colourGrid != null &&
      !this._colourGrid.disposed &&
      (this._colourGrid._rbb4c26d068856f(), this._colourGrid.dispose()),
      (this._colourGrid = null),
      (this._re31c845e974ee2 = null),
      (this.var_265 = null),
      (this._rdc0717216253df = null),
      (this._raf69024cabc714 = null),
      (this._r1d7672cce9f947 = null),
      this._r9318ebaceb049a.clear(),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.COLOUR_ARRAY, this._ra7091519c7ceff),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.MULTI_COLOUR_ARRAY, this._r1765f3e1473da5),
      super.dispose());
  }
  _ra7091519c7ceff = n((e) => {
    this.disposed ||
      this._window == null ||
      this._colourGrid == null ||
      this._colourGrid.disposed ||
      ((this._r9ffdd05ee5d61d = e.colours.map((r) => [r])),
      (this._rdc0717216253df = this.getAssetBitmapData(e._r8ec1fc8e06e819)),
      (this._raf69024cabc714 = this.getAssetBitmapData(e._rbc8cf5a5933fa0)),
      (this._r1d7672cce9f947 = this.getAssetBitmapData(e._r003b386f6d19bf)),
      (this.var_4391 = `${e._r8ec1fc8e06e819}	${e._rbc8cf5a5933fa0}`),
      this.populateColourGrid(),
      this.select(this._colourGrid?.getGridItemAt(e.index)));
  }, "_ra7091519c7ceff");
  _r1765f3e1473da5 = n((e) => {
    this.disposed ||
      this._window == null ||
      this._colourGrid == null ||
      this._colourGrid.disposed ||
      ((this._r9ffdd05ee5d61d = e.colours.map((r) => r.slice())),
      (this._rdc0717216253df = this.getAssetBitmapData(e._r8ec1fc8e06e819)),
      (this._raf69024cabc714 = this.getAssetBitmapData(e._rbc8cf5a5933fa0)),
      (this._r1d7672cce9f947 = this.getAssetBitmapData(e._r003b386f6d19bf)),
      this.populateColourGrid(),
      this.select(this._colourGrid?.getGridItemAt(0)));
  }, "_r1765f3e1473da5");
  select(e) {
    let r = this.var_265?.getChildByName("chosen");
    (r != null && (r.visible = !1), (this.var_265 = e));
    let t = this.var_265?.getChildByName("chosen");
    t != null && (t.visible = !0);
  }
  populateColourGrid() {
    if (!(this.disposed || this._colourGrid == null || this._colourGrid.disposed)) {
      (this._colourGrid.removeGridItems(), (this.var_265 = null));
      for (let e = 0; e < this._r9ffdd05ee5d61d.length; e++) {
        let r = this._r9ffdd05ee5d61d[e];
        if (r.length === 0) continue;
        let t = this.createColorContainer(r, e);
        this._colourGrid.addGridItem(t);
        let i = t.findChildByTag("COLOR_CHOSEN");
        i != null &&
          this._r1d7672cce9f947 != null &&
          ((i.bitmap = this._r1d7672cce9f947.clone()), (i.visible = !1));
      }
    }
  }
  createColorContainer(e, r) {
    let t = this._raf1fa98bb88f35(e, r),
      i = this._r9318ebaceb049a.get(t);
    if (i != null) return i;
    let o = this.page?.viewer.catalog?.windowManager.buildFromXML(this._re31c845e974ee2);
    if (o == null) throw new Error("Colour chooser cell layout is missing.");
    (o.addEventListener(u.CLICK, this.onClick),
      (o.background = !0),
      (o.color = 4294967295),
      this._rdc0717216253df != null &&
        ((o.width = this._rdc0717216253df.width), (o.height = this._rdc0717216253df.height)));
    let d = o.findChildByTag("BG_BORDER");
    d != null && this._rdc0717216253df != null && (d.bitmap = this._rdc0717216253df.clone());
    let c = o.findChildByTag("COLOR_IMAGE");
    if (c != null && this._raf69024cabc714 != null) {
      c.bitmap = new A(this._raf69024cabc714.width, this._raf69024cabc714.height, !0, 0);
      let f = this._raf69024cabc714.clone();
      if (
        (this._r6c86780c6da53d(f, e[0]),
        c.bitmap.copyPixels(f, f.rect, new E(0, 0)),
        f.dispose(),
        e.length > 1)
      ) {
        let l = this._raf69024cabc714.clone();
        this._r6c86780c6da53d(l, e[1]);
        let b = Math.floor(l.width / 2);
        (c.bitmap.copyPixels(l, new D(b, 0, l.width - b, l.height), new E(l.width / 2, 0)), l.dispose());
      }
    }
    return (this._r9318ebaceb049a.set(t, o), o);
  }
  _raf1fa98bb88f35(e, r) {
    return `${this.var_4391}	${r}	${e.join("	")}`;
  }
  _r6c86780c6da53d(e, r) {
    let t = 255,
      i = 255,
      s = 255;
    (r >= 0 && ((t = (r >> 16) & 255), (i = (r >> 8) & 255), (s = r & 255)),
      e.colorTransform(e.rect, new _i4210dc3239901d(t / 255, i / 255, s / 255)));
  }
  onClick = n((e) => {
    let r = e.target;
    if (r == null || this._colourGrid == null) return;
    this.select(r);
    let t = this._colourGrid._r76bcf89cad2fb2(r);
    this.events?.dispatchEvent?.(new _iae266fbe26d028(t));
  }, "onClick");
}
