// Estratto da HabboAirLauncher.deobf.js, riga 174452.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/renderer/AbstractCollectibleItemRenderer.as
// Nome offuscato: _ia1f54ca54221ee

class {
  constructor(e, r, t) {
    this.var_63 = e;
    this.var_183 = r;
    this.var_1229 = t;
    (this.var_1229?.addEventListener(u.CLICK, this.onClick),
      this.var_1229?.addEventListener(u.OVER, this._rb2fb7964bb4ade),
      this.var_1229?.addEventListener(u.OUT, this._rc963a69957f690),
      (this.var_2033 = new CollectibleProductPreviewer(
        this.bitmapWindow,
        this.badgeImageWindow,
        this.petImageWindow,
        this.unknownImageWindow,
      )),
      this.var_63.previewIcon(this.var_183, this.var_2033),
      this.updateVisuals(),
      this.updateColoring());
  }
  static {
    n(this, "AbstractCollectibleItemRenderer");
  }
  var_2033;
  _active = !1;
  var_1463 = !1;
  updateVisuals() {}
  activate() {
    ((this._active = !0), this.updateColoring());
  }
  deactivate() {
    ((this._active = !1), this.updateColoring());
  }
  dispose() {
    (this.var_2033.dispose(), this.var_1229?.dispose(), (this.var_1229 = null));
  }
  get disposed() {
    return this.var_1229 == null;
  }
  get renderableItem() {
    return this.var_183;
  }
  get container() {
    return this.var_1229;
  }
  onClick(e) {}
  get isComplete() {
    return this.var_183.amount > 0;
  }
  _r73593121176f9d() {
    return {
      active: { background: 15132390, outline: 16777215 },
      hovered: { background: 14409183, outline: 16119544 },
      normal: { background: 13159891, outline: 9412017 },
    };
  }
  _rac62ff3fcfd328() {
    return {
      active: { background: 14872032, outline: 16777215 },
      hovered: { background: 14346200, outline: 16119544 },
      normal: { background: 13820623, outline: 8823170 },
    };
  }
  get borderOutline() {
    return null;
  }
  get borderBackground() {
    return null;
  }
  get amountText() {
    return null;
  }
  get amountTextBorder() {
    return null;
  }
  get bitmapWindow() {
    return null;
  }
  get unknownImageWindow() {
    return null;
  }
  get badgeImageWindow() {
    return null;
  }
  get petImageWindow() {
    return null;
  }
  _rc963a69957f690 = n((e) => {
    ((this.var_1463 = !1), this.updateColoring());
  }, "_rc963a69957f690");
  _rb2fb7964bb4ade = n((e) => {
    ((this.var_1463 = !0), this.updateColoring());
  }, "_rb2fb7964bb4ade");
  updateColoring() {
    let e = this.isComplete ? this._rac62ff3fcfd328() : this._r73593121176f9d(),
      r = this.var_1463 ? e.hovered : this._active ? e.active : e.normal;
    (this.borderOutline != null && (this.borderOutline.color = r.outline),
      this.borderBackground != null && (this.borderBackground.color = r.background));
  }
}
