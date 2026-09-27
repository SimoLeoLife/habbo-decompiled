// Extracted from HabboAirLauncher.deobf.js, line 345314.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/ButtonPreset.as
// Obfuscated name: _ie20bd7833613d5

class a extends WiredUIPreset {
  static {
    n(this, "ButtonPreset");
  }
  static MODE_SCALE = 0;
  static MODE_STRETCH = 1;
  _container;
  _onClick = null;
  _mode = 0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t = 0) {
    ((this._onClick = r),
      (this._container = this.var_40.createButton()),
      (this._container.caption = e),
      (this._mode = t),
      this._container.addEventListener(u.CLICK, this._r6665063fd39a04));
  }
  _r6665063fd39a04 = n((...e) => {
    this._onClick?.();
  }, "_r6665063fd39a04");
  set buttonText(e) {
    this._container.caption = e;
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      this._mode === a.MODE_SCALE &&
        ((this._container.limits.minWidth = e),
        (this._container.limits.maxWidth = e),
        (this._container.width = e)));
  }
  hasStaticWidth() {
    return this._mode === a.MODE_STRETCH;
  }
  get staticWidth() {
    return this._mode === a.MODE_STRETCH ? this._container.width : -1;
  }
  dispose() {
    this.disposed ||
      (super.dispose(), this._container.dispose(), (this._container = null), (this._onClick = null));
  }
}
