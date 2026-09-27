// Extracted from HabboAirLauncher.deobf.js, line 349497.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/combinations/NamedDropdownPreset.as
// Obfuscated name: _i1a4dde5e559d2f

class extends WiredUIPreset {
  static {
    n(this, "NamedDropdownPreset");
  }
  _container;
  _r803256a36f4aa4;
  var_179;
  var_980;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t = !1) {
    ((this._container = this.var_102._rd65848eed931f7("growing_container_view")),
      (this.var_179 = this.var_102.createText(r, new Se(Se.MODE_STRETCH, t))),
      (this.var_980 = this.var_102.createDropdown(e)),
      (this.var_179.window.y = this.var_40._re041d2b38efa47),
      (this._r803256a36f4aa4 = this.var_102.createSimpleListView(
        !1,
        [this.var_179, this.var_980],
        !0,
      )),
      this._container.addChild(this._r803256a36f4aa4.window));
  }
  get selectedId() {
    return this.var_980.selectedId;
  }
  set selectedId(e) {
    this.var_980.selectedId = e;
  }
  get selected() {
    return this.var_980.selected;
  }
  reinit(e, r) {
    this.var_980.reinit(e, r);
  }
  reset() {
    this.var_980.reset();
  }
  get _r0ef2c5ada42fb0() {
    return this.var_179.width;
  }
  set _r0ef2c5ada42fb0(e) {
    ((this.var_179.width = e), this._r803256a36f4aa4.resize());
  }
  hasStaticWidth() {
    return this.var_980.hasStaticWidth();
  }
  get staticWidth() {
    if (this.hasStaticWidth()) return this._container.width;
    throw new Error("Named dropdown has no static width");
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this._r803256a36f4aa4.resizeToWidth(e));
  }
  get childPresets() {
    return [this._r803256a36f4aa4];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._r803256a36f4aa4.dispose(),
      (this._r803256a36f4aa4 = null),
      (this._container = null),
      (this.var_179 = null),
      (this.var_980 = null));
  }
}
