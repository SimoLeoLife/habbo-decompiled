// Extracted from HabboAirLauncher.deobf.js, line 346479.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/RadioButtonPreset.as
// Obfuscated name: _i606600d13b0b83

class a extends WiredUIPreset {
  static {
    n(this, "RadioButtonPreset");
  }
  static OPTION_PREFIX = "option_";
  _container;
  var_1027;
  var_861;
  var_179 = null;
  _r2d26899cce8dc8 = null;
  var_524;
  _ra238d09dacdbbc = -1;
  _r933a40cd09a510 = -1;
  _rbe474ebf7dbb6f = !1;
  _extra1 = null;
  _extra2 = null;
  _r1c6794ae178516 = !1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r = !1) {
    ((this._container = this.var_102._rd65848eed931f7("container_view")),
      (this.var_1027 = this.var_102._rd65848eed931f7("vertical_list_view")),
      (this.var_861 = this.var_102._rd65848eed931f7("horizontal_list_view")),
      (this._r1c6794ae178516 = r),
      (this.var_524 = this.var_40.createRadioButtonView()),
      e.text !== "" &&
        (this.var_179 = this.var_102.createText(
          e.text,
          new Se(e.extra1 != null ? Se.MODE_STRETCH : Se.MODE_MULTILINE),
        )),
      e._r5a06aace4b01c4 != null &&
        e._r5a06aace4b01c4 !== "" &&
        (this._r2d26899cce8dc8 = this.var_102.createBitmapWrapperPreset(
          this.resolveAssetFullName(e._r5a06aace4b01c4),
        )),
      this.var_40._rd42dcd651e498c > 0
        ? (this.var_179 != null &&
            (this.var_179.window.y = this.var_40._rd42dcd651e498c),
          this._r2d26899cce8dc8 != null &&
            (this._r2d26899cce8dc8.window.y = this.var_40._rd42dcd651e498c))
        : this.var_40._rd42dcd651e498c < 0 &&
          (this.var_524.y = -this.var_40._rd42dcd651e498c),
      (this.var_524.name = a.OPTION_PREFIX + e.id),
      (this.var_524.id = e.id),
      this.var_861.addListItem(this.var_524),
      this._r2d26899cce8dc8 != null && this.var_861.addListItem(this._r2d26899cce8dc8.window),
      this.var_179 != null && this.var_861.addListItem(this.var_179.window),
      (this.var_861.spacing = this.var_40._r37b6f3a188afa5));
    let t = e.extra1;
    (t != null && ((this._extra1 = t), this.var_861.addListItem(t.window)),
      this.var_1027.addListItem(this.var_861),
      (this.var_1027.spacing = this.var_40._ra36ec7bfa287d9));
    let i = e.extra2;
    (i != null &&
      ((this._extra2 = i),
      this.var_1027.addListItem(i.window),
      (i.window.x = this.var_40._rcf71f0841acc48)),
      (this._extra1 != null || this._extra2 != null) &&
        (this.var_524.addEventListener(y.const_238, this.onSelect),
        this.var_524.addEventListener(y.const_1217, this.onUnSelect),
        this.onUnSelect()),
      this._container.addChild(this.var_1027));
  }
  set text(e) {
    this.var_179 != null && (this.var_179.text = e);
  }
  onSelect = n((...e) => {
    this.disabled ||
      (this._extra1 != null && (this._extra1.disabled = !1),
      this._extra2 != null && (this._extra2.disabled = !1));
  }, "onSelect");
  onUnSelect = n((...e) => {
    this.disabled ||
      (this._extra1 != null && (this._extra1.disabled = !0),
      this._extra2 != null && (this._extra2.disabled = !0));
  }, "onUnSelect");
  set disabled(e) {
    ((super.disabled = e),
      e || (this.var_524.isSelected ? this.onSelect() : this.onUnSelect()));
  }
  resizeToWidth(e) {
    if (
      (super.resizeToWidth(e),
      (this.var_861.width = e),
      (this._container.width = e),
      (this.var_1027.width = e),
      this.var_179 != null &&
        !this.var_179.canStretch &&
        this._extra1 != null)
    )
      throw new Error("Illegal UI combination: could not determine width of text");
    (this.var_179 != null && this._extra1 == null
      ? this.var_179.resizeToWidth(e - this.var_179.window.x)
      : this.var_179 != null && this.var_179.resizeToWidth(this.var_179.width),
      this._extra1 != null &&
        this._extra1.resizeToWidth(e - this._extra1.window.x),
      this._extra2 != null &&
        this._extra2.resizeToWidth(e - this._extra2.window.x));
    let r = this.var_524.height + this.var_524.y;
    if (
      (this.var_179 != null &&
        (r = Math.max(r, this.var_179.window.height + this.var_179.window.y)),
      this._r2d26899cce8dc8 != null &&
        (r = Math.max(r, this._r2d26899cce8dc8.window.height + this._r2d26899cce8dc8.window.y)),
      this._extra1 != null && this._extra1.window.height > r)
    ) {
      let t = Math.trunc((this._extra1.window.height - r) / 2);
      ((this.var_524.y = t),
        this.var_179 != null &&
          (this.var_179.window.y = t + this.var_40._rd42dcd651e498c),
        this._r2d26899cce8dc8 != null &&
          (this._r2d26899cce8dc8.window.y = t + this.var_40._rd42dcd651e498c),
        (r = this._extra1.window.height));
    }
    ((this.var_861.height = r),
      this._r1c6794ae178516
        ? (this._container.height = this.var_1027.height)
        : (this._container.height = Math.max(
            this.var_1027.height + this.var_40._r32a1311efedade,
            this.var_40._r926c709eeb6518,
          )));
  }
  get _r05befe2c7e30c6() {
    return this.var_524;
  }
  set _rb0acb42893445a(e) {
    this._ra238d09dacdbbc = e;
  }
  get _rb0acb42893445a() {
    return this._ra238d09dacdbbc;
  }
  set _r287a070ba675c7(e) {
    this._r933a40cd09a510 = e;
  }
  get _r287a070ba675c7() {
    return this._r933a40cd09a510;
  }
  set _r8bf510569150d1(e) {
    this._rbe474ebf7dbb6f = e;
  }
  get _r8bf510569150d1() {
    return this._rbe474ebf7dbb6f;
  }
  get window() {
    return this._container;
  }
  get childPresets() {
    let e = [];
    return (
      this.var_179 != null && e.push(this.var_179),
      this._r2d26899cce8dc8 != null && e.push(this._r2d26899cce8dc8),
      this._extra1 != null && e.push(this._extra1),
      this._extra2 != null && e.push(this._extra2),
      e
    );
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_1027 = null),
      (this.var_861 = null),
      (this.var_179 = null),
      (this._r2d26899cce8dc8 = null),
      (this.var_524 = null),
      (this._extra1 = null),
      (this._extra2 = null));
  }
}
