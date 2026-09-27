// Estratto da HabboAirLauncher.deobf.js, riga 345973.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/TextPreset.as
// Nome offuscato: _i95ddc49fb38a50

class extends WiredUIPreset {
  static {
    n(this, "TextPreset");
  }
  var_837;
  _window;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this.var_837 = r),
      (this._window = this.createView()),
      this.var_837.fontSize !== -1 &&
        (this._window.fontSize = this.var_837.fontSize),
      this.var_837.textColor !== Se._r6fed1697bdc125 &&
        (this._window.textColor = this.var_837.textColor),
      (this._window.text = e),
      this.initializeMode(r));
  }
  initializeMode(e) {
    (e.mode === Se.MODE_MULTILINE &&
      ((this._window.multiline = !0),
      (this._window.wordWrap = !0),
      (this._window._r79e0cd188e1c70 = e._r79e0cd188e1c70),
      e.alignment != null && (this._window.autoSize = e.alignment)),
      e.mode === Se.MODE_OVERFLOW &&
        ((this._window.overflowReplace = "..."), (this._window.autoSize = nr.NONE)));
  }
  createView() {
    let e = this.var_40.createTextView(this.var_837.bold);
    return ((e.underline = this.var_837.underline), e);
  }
  get text() {
    return this._window.text;
  }
  set text(e) {
    this._window.text = e;
  }
  hasStaticWidth() {
    return this.canStretch;
  }
  get staticWidth() {
    if (this.canStretch) return this._window.width;
    throw new Error("Non stretching text has no static width");
  }
  get window() {
    return this._window;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this.canStretch || (this._window.width = e));
  }
  get canStretch() {
    return this.var_837.mode === Se.MODE_STRETCH;
  }
  get width() {
    return this._window.width;
  }
  set width(e) {
    (this.var_837.mode === Se.MODE_STRETCH && (this._window.autoSize = nr.NONE),
      (this._window.width = e));
  }
  get fontSize() {
    return this._window.fontSize;
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._window.dispose(),
      (this._window = null),
      (this.var_837 = null));
  }
}
