// Estratto da HabboAirLauncher.deobf.js, riga 347036.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/inputsources/SourceTypeOption.as
// Nome offuscato: _if5b19511824827

class {
  constructor(e, r, t) {
    this._picker = e;
    this._container = r;
    this.var_1946 = t;
    (this._container.addEventListener(u.CLICK, this.onClick),
      this._container.addEventListener(u.OVER, this._rb2fb7964bb4ade),
      this._container.addEventListener(u.OUT, this._rc963a69957f690));
    let i = this._picker._r41f5cc7d3516ce,
      s = Ve.getTypeNameForSource(this.var_1946);
    ((this._container.toolTipCaption = i.localization.getLocalization(`wiredfurni.params.sourcetype.${s}`)),
      (this.bitmapContainer.bitmap = i._r6bd8f6d6bfdbb5(`icon_source_${s}`)),
      this.updateColoring());
  }
  static {
    n(this, "SourceTypeOption");
  }
  _active = !1;
  var_1463 = !1;
  var_2522 = !1;
  get option() {
    return this.var_1946;
  }
  get container() {
    return this._container;
  }
  activate() {
    ((this._active = !0), this.updateColoring());
  }
  deactivate() {
    ((this._active = !1), this.updateColoring());
  }
  backgroundColor() {
    if (!this._active && !this.var_1463) return 2236962;
    let e;
    this.var_1946 === Ve.USER_SOURCE
      ? (e = 2526761)
      : this.var_1946 === Ve.var_64
        ? (e = 12228630)
        : this.var_1946 === VariableExtraSourceTypes.CONTEXT_SOURCE
          ? (e = 11558430)
          : (e = 1934221);
    let r = this.var_2522 ? 0.5 : this.var_1463 ? 0.86 : 1;
    if (r !== 1) {
      let t = ((e >> 16) & 255) * r,
        i = ((e >> 8) & 255) * r,
        s = (e & 255) * r;
      e = (t << 16) + (i << 8) + s;
    }
    return e;
  }
  set disabled(e) {
    e ? this._container.disable() : this._container.enable();
    let r = e ? 0.5 : 1;
    ((this.elements.blend = r),
      (this.bitmapContainer.blend = r),
      (this.var_2522 = e),
      this.updateColoring());
  }
  dispose() {
    (this._container?.dispose(), (this._container = null));
  }
  _rc963a69957f690 = n((e) => {
    this.var_2522 ||
      !this._container.isEnabled() ||
      ((this.var_1463 = !1), this.updateColoring());
  }, "_rc963a69957f690");
  _rb2fb7964bb4ade = n((e) => {
    this.var_2522 ||
      !this._container.isEnabled() ||
      ((this.var_1463 = !0), this.updateColoring());
  }, "_rb2fb7964bb4ade");
  onClick = n((e) => {
    this._picker.onClick(this);
  }, "onClick");
  updateColoring() {
    ((this.elements.color = 4278190080 | this.backgroundColor()),
      this._picker._r5d039d16a24740(this));
  }
  get bitmapContainer() {
    return this._container.findChildByName("type_icon_bitmap");
  }
  get elements() {
    return this._container.findChildByName("source_elements");
  }
}
