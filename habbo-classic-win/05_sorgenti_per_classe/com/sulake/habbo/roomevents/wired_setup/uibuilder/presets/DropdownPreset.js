// Estratto da HabboAirLauncher.deobf.js, riga 345914.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/DropdownPreset.as
// Nome offuscato: _iba12564bb2c648

class extends WiredUIPreset {
  static {
    n(this, "DropdownPreset");
  }
  _container;
  var_63;
  _staticWidth = -1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._container = this.var_40.createDropdown()),
      (this._container.caption = e.caption),
      (this._staticWidth = e.staticWidth),
      this._staticWidth >= 0 && (this._container.width = this._staticWidth),
      (this.var_63 = new _i7c94bb8db295dd(this._container, e._r103991862f2899, e._r9560516d063ff2)),
      this.var_63.init(e.options ?? [], -1));
  }
  get selectedId() {
    return this.var_63._r5aab43aa73aea0;
  }
  get selected() {
    return this.var_63._r8d22304b8b7a17;
  }
  set selectedId(e) {
    this.var_63._r5aab43aa73aea0 = e;
  }
  reinit(e, r) {
    this.var_63.init(e, r);
  }
  reset() {
    this.reinit([], -1);
  }
  get _rd875ac05798c2f() {
    return this.var_63._rd875ac05798c2f;
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      (this._container.width = this._staticWidth >= 0 ? this._staticWidth : e));
  }
  hasStaticWidth() {
    return this._staticWidth >= 0;
  }
  get staticWidth() {
    if (this._staticWidth >= 0) return this._staticWidth;
    throw new Error("Dropdown with dynamic width has no static width");
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      this.var_63.dispose(),
      (this.var_63 = null));
  }
}
