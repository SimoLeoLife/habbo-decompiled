// Extracted from HabboAirLauncher.deobf.js, line 345529.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/CheckboxOptionPreset.as
// Obfuscated name: _i4e6c42757b29f9

class extends WiredUIPreset {
  static {
    n(this, "CheckboxOptionPreset");
  }
  _container;
  var_1027;
  var_861;
  _checkbox;
  var_179 = null;
  _r2d26899cce8dc8 = null;
  _extra1 = null;
  _extra2 = null;
  _r1c6794ae178516 = !1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r = !1) {
    ((this._container = this.var_102._rd65848eed931f7("growing_container_view")),
      (this.var_1027 = this.var_102._rd65848eed931f7("vertical_list_view")),
      (this.var_861 = this.var_102._rd65848eed931f7("horizontal_list_view")),
      (this._r1c6794ae178516 = r),
      (this._checkbox = this.var_40.createCheckboxView()),
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
      this.var_40._r39828ec55175ec > 0
        ? (this.var_179 != null &&
            (this.var_179.window.y = this.var_40._r39828ec55175ec),
          this._r2d26899cce8dc8 != null &&
            (this._r2d26899cce8dc8.window.y = this.var_40._r39828ec55175ec))
        : this.var_40._r39828ec55175ec < 0 &&
          (this._checkbox.y = -this.var_40._r39828ec55175ec),
      (this._checkbox.id = e.id),
      this.var_861.addListItem(this._checkbox),
      this._r2d26899cce8dc8 != null && this.var_861.addListItem(this._r2d26899cce8dc8.window),
      this.var_179 != null && this.var_861.addListItem(this.var_179.window),
      (this.var_861.spacing = this.var_40._r14f8a38920765a));
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
        (this._checkbox.addEventListener(y.const_238, this.onSelect),
        this._checkbox.addEventListener(y.const_1217, this.onUnSelect),
        this.onUnSelect()),
      this._container.addChild(this.var_1027));
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
    ((super.disabled = e), e || (this.selected ? this.onSelect() : this.onUnSelect()));
  }
  get disabled() {
    return super.disabled;
  }
  set selected(e) {
    we.select(this._checkbox, e);
  }
  get selected() {
    return this._checkbox.isSelected;
  }
  resizeToWidth(e) {
    if (
      (super.resizeToWidth(e),
      (this._container.width = e),
      (this.var_1027.width = e),
      (this.var_861.width = e),
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
    let r = this._checkbox.height + this._checkbox.y;
    if (
      (this.var_179 != null &&
        (r = Math.max(r, this.var_179.window.height + this.var_179.window.y)),
      this._r2d26899cce8dc8 != null &&
        (r = Math.max(r, this._r2d26899cce8dc8.window.height + this._r2d26899cce8dc8.window.y)),
      this._extra1 != null && this._extra1.window.height > r)
    ) {
      let t = Math.trunc((this._extra1.window.height - r) / 2);
      ((this._checkbox.y = t),
        this.var_179 != null &&
          (this.var_179.window.y = t + this.var_40._r39828ec55175ec),
        this._r2d26899cce8dc8 != null &&
          (this._r2d26899cce8dc8.window.y = t + this.var_40._r39828ec55175ec),
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
  get window() {
    return this._container;
  }
  get checkbox() {
    return this._checkbox;
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
      (this._checkbox = null),
      (this._extra1 = null),
      (this._extra2 = null));
  }
}
