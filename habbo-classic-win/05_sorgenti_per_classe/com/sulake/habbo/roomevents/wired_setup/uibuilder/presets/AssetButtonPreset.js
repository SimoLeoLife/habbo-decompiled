// Estratto da HabboAirLauncher.deobf.js, riga 345068.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/AssetButtonPreset.as
// Nome offuscato: _i65b0dc2f8df13c

class extends WiredUIPreset {
  static {
    n(this, "AssetButtonPreset");
  }
  _container;
  _onClick = null;
  _selected = !1;
  var_1463 = !1;
  _pressed = !1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t) {
    ((this._onClick = t),
      (this._container = this.var_40.createAssetButton()),
      (this.staticBitmap.assetUri = this.resolveAssetFullName(e)),
      (this._container.toolTipCaption = r),
      this._container.addEventListener(u.CLICK, this.onButtonClicked),
      this._container.addEventListener(u.OVER, this._rb2fb7964bb4ade),
      this._container.addEventListener(u.OUT, this._rc963a69957f690),
      this._container.addEventListener(u.OUT, this.maybeCancelEvent),
      this._container.addEventListener(u.UP, this.maybeCancelEvent),
      this._container.addEventListener(u.DOWN, this._r3dfe81080c524f));
  }
  _r6665063fd39a04() {
    this._onClick?.();
  }
  set assetName(e) {
    this.staticBitmap.assetUri = this.resolveAssetFullName(e);
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    super.resizeToWidth(e);
  }
  _rc963a69957f690 = n((...e) => {
    this._container.isEnabled() && ((this.var_1463 = !1), this.updateVisuals());
  }, "_rc963a69957f690");
  _rb2fb7964bb4ade = n((...e) => {
    this._container.isEnabled() && ((this.var_1463 = !0), this.updateVisuals());
  }, "_rb2fb7964bb4ade");
  onButtonClicked = n((...e) => {
    this._onClick?.();
  }, "onButtonClicked");
  maybeCancelEvent = n((...e) => {
    let r = e[0];
    (r?.type === u.OUT && this._selected && r.preventWindowOperation(),
      r?.type === u.UP &&
        ((this._pressed = !1), this._selected && (this._r6665063fd39a04(), r.preventWindowOperation())));
  }, "maybeCancelEvent");
  _r3dfe81080c524f = n((...e) => {
    this._pressed = !1;
  }, "_r3dfe81080c524f");
  updateVisuals() {
    this.var_40._r22e5f52e5a4bd4
      ? (this._container.setStateFlag(class_1948.const_92, this._pressed),
        this._container.setStateFlag(class_1948.WINDOW_STATE_HOVERING, this.var_1463 || this._selected))
      : (this._container.setStateFlag(class_1948.const_92, this._selected),
        this._container.setStateFlag(class_1948.WINDOW_STATE_HOVERING, this.var_1463));
  }
  get selected() {
    return this._selected;
  }
  set selected(e) {
    ((this._selected = e), this.updateVisuals());
  }
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return this._container.width;
  }
  dispose() {
    this.disposed ||
      (super.dispose(), this._container.dispose(), (this._container = null), (this._onClick = null));
  }
  get staticBitmap() {
    return this._container.findChildByName("asset");
  }
}
