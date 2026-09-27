// Extracted from HabboAirLauncher.deobf.js, line 344816.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/WiredUIPreset.as
// Obfuscated name: _ic88d6d9c8eaf36

class {
  constructor(e, r, t) {
    this._roomEvents = e;
    this.var_102 = r;
    this.var_40 = t;
  }
  static {
    n(this, "WiredUIPreset");
  }
  var_5483 = !1;
  _disposed = !1;
  var_2253 = null;
  _blendingBackgroundColor = 0;
  _cacheWidth = -1;
  var_2522 = !1;
  var_2816 = null;
  get window() {
    throw new Error("WiredUIPreset.window must be overridden");
  }
  _re7a03a855dfd32(...e) {}
  resizeToWidth(e) {
    this._cacheWidth = e;
  }
  resize() {
    this._cacheWidth !== -1 && this.resizeToWidth(this._cacheWidth);
  }
  hasStaticWidth() {
    return !1;
  }
  get staticWidth() {
    return -1;
  }
  alignRight() {
    return this.var_102._rfc879c483b7738(this);
  }
  alignCenter() {
    return this.var_102._rfc1cf96cd0e480(this);
  }
  _r43cee6f3403ff1(e) {
    return this.var_102._r73f3ef8811b6bb(this, e);
  }
  _r16de5f519fc4ea() {
    return this.var_102._r352f8eb89f25af(this);
  }
  _r6c23cd2885b2e2(e, r = !1) {
    return this.var_102.WindowWrapperPreset(e, r);
  }
  noDisable() {
    return (this.window.tags.push("DO_NOT_DISABLE"), this);
  }
  halfBlend() {
    return ((this.window.blend = 0.5), this.window.tags.push("HALF_BLEND"), this);
  }
  set disabled(e) {
    this.var_2522 !== e && ((this.var_2522 = e), this.var_982());
  }
  get disabled() {
    return this.var_2522;
  }
  var_982() {
    if ((we.disableSection(this.window, this.var_2522), !this.var_2522))
      for (let e of this.childPresets) e.var_982();
  }
  get childPresets() {
    return [];
  }
  static toArray(e) {
    return Array.from(e);
  }
  set visible(e) {
    this.window.visible !== e &&
      ((this.window.visible = e),
      this.var_2816 != null && this.var_2816.onInvisibilityChanged(this, e));
  }
  get visible() {
    return this.window.visible;
  }
  set invisibilityListener(e) {
    this.var_2816 = e;
  }
  onInvisibilityChanged(e, r) {}
  loc(e) {
    return this._roomEvents.localization.getLocalization(e, e);
  }
  l(e) {
    return this._roomEvents.localization.getLocalization(`wiredfurni.params.${e}`, e);
  }
  get localizations() {
    return this._roomEvents.localization;
  }
  get _r1f6942c4e03ee9() {
    return this.var_5483;
  }
  get _r73291abb71fede() {
    return this.var_2253;
  }
  set _r73291abb71fede(e) {
    ((this.var_2253 = e), this._ra2529476c8f8b5());
  }
  set _r4d8766392bf3dd(e) {
    ((this._blendingBackgroundColor = e), this._ra2529476c8f8b5());
  }
  _ra2529476c8f8b5() {
    if (this.var_2253 == null) return;
    let e = this._blendingBackgroundColor !== 0;
    ((this.var_2253.backgroundEnabled = e),
      e && (this.var_2253.backgroundColor = this._blendingBackgroundColor));
  }
  resolveAssetFullName(e) {
    let r = `wired_styles_${this.var_40.name}_${e}`;
    return this._roomEvents.windowManager.assets.getAssetByName(r) != null ? r : `wired_${e}`;
  }
  dispose() {
    if (((this.var_5483 = !0), !this._disposed)) {
      ((this.var_2253 = null),
        (this._roomEvents = null),
        (this.var_40 = null),
        (this.var_102 = null),
        (this.var_2816 = null));
      for (let e of this.childPresets) e.dispose();
      this._disposed = !0;
    }
  }
  get disposed() {
    return this._disposed;
  }
}
