// Estratto da HabboAirLauncher.deobf.js, riga 347207.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/inputsources/newpicker/NewSourceTypeOption.as
// Nome offuscato: _ia9d78e89df1b6e

class {
  constructor(e, r, t) {
    this._picker = e;
    this._container = r;
    this.var_1946 = t;
    (this._container.addEventListener(u.CLICK, this.onClick),
      this._container.addEventListener(u.OVER, this._rb2fb7964bb4ade),
      this._container.addEventListener(u.OUT, this._rc963a69957f690),
      this._container.addEventListener(u.OUT, this.maybeCancelEvent),
      this._container.addEventListener(u.UP, this.maybeCancelEvent));
    let i = this._picker._r41f5cc7d3516ce,
      s = Ve.getTypeNameForSource(this.var_1946);
    ((this._container.toolTipCaption = i.localization.getLocalization(`wiredfurni.params.sourcetype.${s}`)),
      (this.typeImage.assetUri = `wired_styles_illumina_icon_source_${s}`),
      (this.typeImage.y = (this._container.height + 1) / 2 - (this.typeImage.height + 1) / 2),
      this.updateVisuals());
  }
  static {
    n(this, "NewSourceTypeOption");
  }
  _active = !1;
  var_1463 = !1;
  get option() {
    return this.var_1946;
  }
  get container() {
    return this._container;
  }
  get active() {
    return this._active;
  }
  get hovered() {
    return this.var_1463;
  }
  get color() {
    return this._container.color;
  }
  activate() {
    ((this._active = !0), this.updateVisuals());
  }
  deactivate() {
    ((this._active = !1), this.updateVisuals());
  }
  dispose() {
    (this._container?.dispose(), (this._container = null));
  }
  updateVisuals() {
    let e = this._container;
    if (
      (e.setStateFlag(class_1948.const_92, this._active),
      e.setStateFlag(class_1948.WINDOW_STATE_HOVERING, this.var_1463),
      !this._active && !this.var_1463)
    ) {
      ((this._container.color = 16777215), this._picker.updateColorings());
      return;
    }
    let r;
    this.var_1946 === Ve.USER_SOURCE
      ? (r = 2526761)
      : this.var_1946 === Ve.var_64
        ? (r = 12228630)
        : this.var_1946 === VariableExtraSourceTypes.CONTEXT_SOURCE
          ? (r = 11558430)
          : (r = 1934221);
    let t = 1.26;
    (this.var_1463 && !this._active && (t = 1.55),
      (this._container.color = we._r5f42ff539f0f87(r, t)),
      this._picker.updateColorings());
  }
  _rc963a69957f690 = n((e) => {
    this._container.isEnabled() && ((this.var_1463 = !1), this.updateVisuals());
  }, "_rc963a69957f690");
  maybeCancelEvent = n((e) => {
    (e.type === u.OUT && this._active && e.preventWindowOperation(),
      e.type === u.UP && (this.onClick(null), e.preventWindowOperation()));
  }, "maybeCancelEvent");
  _rb2fb7964bb4ade = n((e) => {
    this._container.isEnabled() && ((this.var_1463 = !0), this.updateVisuals());
  }, "_rb2fb7964bb4ade");
  onClick = n((e) => {
    this._picker.onClick(this);
  }, "onClick");
  get typeImage() {
    return this._container.findChildByName("type_image");
  }
}
