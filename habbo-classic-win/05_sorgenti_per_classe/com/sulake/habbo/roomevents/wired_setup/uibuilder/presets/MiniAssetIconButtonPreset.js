// Extracted from HabboAirLauncher.deobf.js, line 346364.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/MiniAssetIconButtonPreset.as
// Obfuscated name: _iba76a18a4e797b

class a extends WiredUIPreset {
  static {
    n(this, "MiniAssetIconButtonPreset");
  }
  static _rfb6f3d8bc67b72 = ["furni_picks_1"];
  static _r930f5fd2c0242f = ["furni_picks_2"];
  static COLOR_BLUE_CLICKED = 4409728;
  static COLOR_YELLOW_CLICKED = 6975025;
  _container;
  _selected = !1;
  var_1463 = !1;
  _assetName = "";
  _onClick = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t) {
    ((this._assetName = e),
      (this._container = this.var_40.createMiniButton()),
      (this._onClick = t),
      (this.iconWrapper.assetUri = this.resolveAssetFullName(e)),
      this.clickArea.addEventListener(u.OVER, this._r455f6b48c88de9),
      this.clickArea.addEventListener(u.OUT, this._r04344c8bfe55e0),
      this.clickArea.addEventListener(u.CLICK, this._r795b4c8dc8aead),
      (this.clickArea.toolTipCaption = r),
      this.updateUI());
  }
  _r04344c8bfe55e0 = n((...e) => {
    ((this.var_1463 = !1), this.updateUI());
  }, "_r04344c8bfe55e0");
  _r455f6b48c88de9 = n((...e) => {
    ((this.var_1463 = !0), this.updateUI());
  }, "_r455f6b48c88de9");
  get selected() {
    return this._selected;
  }
  set selected(e) {
    ((this._selected = e), this.updateUI());
  }
  get selectedColor() {
    if (a._rfb6f3d8bc67b72.indexOf(this._assetName) !== -1) return a.COLOR_YELLOW_CLICKED;
    if (a._r930f5fd2c0242f.indexOf(this._assetName) !== -1) return a.COLOR_BLUE_CLICKED;
    throw new Error("Color for asset not configured");
  }
  updateUI() {}
  _r795b4c8dc8aead = n((...e) => {
    this._onClick != null && !this._selected && this._onClick();
  }, "_r795b4c8dc8aead");
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._container.width = e));
  }
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return this._container.width;
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this._assetName = null),
      (this._onClick = null));
  }
  get clickArea() {
    return this._container.findChildByName("mini_button_click");
  }
  get iconWrapper() {
    return this._container.findChildByName("mini_button_icon");
  }
  get marginRightBg() {
    return this._container.findChildByName("margin_item_color_left");
  }
  get _r5c504e9675bd3e() {
    return this._container.findChildByName("margin_item_color_right");
  }
}
