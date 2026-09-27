// Estratto da HabboAirLauncher.deobf.js, riga 151972.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/SeparatorWidget.as
// Nome offuscato: _ib89041b9dee18b

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("separator_xml")?.content,
    )),
      (this._canvas = this._rf8f9fc25599fa4?.getChildByName("canvas")),
      (this._children = this._rf8f9fc25599fa4?.getChildByName("children")),
      this._canvas?.addEventListener(y.const_1204, this.onChange),
      this._canvas?.addEventListener(y.const_755, this.onChange),
      this._children?.addEventListener(y.const_1024, this.onChange),
      this._children?.addEventListener(y.const_1333, this.onChange),
      this._children?.addEventListener(y.const_1385, this.onChange),
      this._children?.addEventListener(y.const_906, this.onChange),
      this.var_220 != null &&
        ((this.var_220.rootWindow = this._rf8f9fc25599fa4),
        this._rf8f9fc25599fa4 != null &&
          ((this._rf8f9fc25599fa4.width = this.var_220.width),
          (this._rf8f9fc25599fa4.height = this.var_220.height))));
  }
  static {
    n(this, "SeparatorWidget");
  }
  static TYPE = "separator";
  static _r8440e2c3ac9daa = `${a.TYPE}:vertical`;
  static _r8639afd8bfab47 = new ne(a._r8440e2c3ac9daa, !1, ne.BOOLEAN);
  static BORDER_IMAGE_HORIZONTAL = "illumina_light_separator_horizontal";
  static BORDER_IMAGE_VERTICAL = "illumina_light_separator_vertical";
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _canvas = null;
  _rc2a86012a4c5bf = null;
  _children = null;
  _rc4316df6d6d831 = !!a._r8639afd8bfab47.value;
  dispose() {
    this._disposed ||
      (this._rc2a86012a4c5bf?.dispose(),
      (this._rc2a86012a4c5bf = null),
      this._canvas?.removeEventListener(y.const_1204, this.onChange),
      this._canvas?.removeEventListener(y.const_755, this.onChange),
      (this._canvas = null),
      this._children?.removeEventListener(y.const_1024, this.onChange),
      this._children?.removeEventListener(y.const_1333, this.onChange),
      this._children?.removeEventListener(y.const_1385, this.onChange),
      this._children?.removeEventListener(y.const_906, this.onChange),
      (this._children = null),
      this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get iterator() {
    return this._children?.iterator ?? Lt.INSTANCE;
  }
  get properties() {
    return this._disposed ? [] : [a._r8639afd8bfab47.withValue(this._rc4316df6d6d831)];
  }
  set properties(e) {
    if (!this._disposed) for (let r of e) r.key === a._r8440e2c3ac9daa && (this.vertical = !!r.value);
  }
  get vertical() {
    return this._rc4316df6d6d831;
  }
  set vertical(e) {
    ((this._rc4316df6d6d831 = e), this.refresh());
  }
  onChange = n(() => {
    this.refresh();
  }, "onChange");
  refresh() {
    if (this._disposed || this._canvas == null || this._children == null) return;
    ((this._rc2a86012a4c5bf == null ||
      this._rc2a86012a4c5bf.width !== this._canvas.width ||
      this._rc2a86012a4c5bf.height !== this._canvas.height) &&
      (this._rc2a86012a4c5bf?.dispose(),
      (this._rc2a86012a4c5bf = new A(
        Math.max(1, this._canvas.width),
        Math.max(1, this._canvas.height),
        !0,
        0,
      )),
      (this._canvas.bitmap = this._rc2a86012a4c5bf)),
      this._rc2a86012a4c5bf.lock(),
      this._rc2a86012a4c5bf.fillRect(new D(0, 0, this._canvas.width, this._canvas.height), 0));
    let e = this._windowManager?.assets.getAssetByName(
        this._rc4316df6d6d831 ? a.BORDER_IMAGE_VERTICAL : a.BORDER_IMAGE_HORIZONTAL,
      ),
      r = e?.content;
    if (e != null && r != null) {
      let t = this._rc4316df6d6d831
        ? new E(Math.trunc(this._canvas.width / 2) - 1, 0)
        : new E(0, Math.trunc(this._canvas.height / 2) - 1);
      if (this._rc4316df6d6d831)
        for (; t.y < this._canvas.height;)
          (this._rc2a86012a4c5bf.copyPixels(r, e.rectangle, t), (t.y += e.rectangle.height));
      else
        for (; t.x < this._canvas.width;)
          (this._rc2a86012a4c5bf.copyPixels(r, e.rectangle, t), (t.x += e.rectangle.width));
    }
    for (let t = 0; t < this._children.numChildren; t++) {
      let i = this._children.getChildAt(t);
      i != null && i.visible && this._rc2a86012a4c5bf.fillRect(i.rectangle, 0);
    }
    (this._rc2a86012a4c5bf.unlock(), this._canvas.invalidate());
  }
}
