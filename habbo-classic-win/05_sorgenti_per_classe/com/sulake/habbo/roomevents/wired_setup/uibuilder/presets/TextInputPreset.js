// Extracted from HabboAirLauncher.deobf.js, line 347944.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/TextInputPreset.as
// Obfuscated name: _i92159845999fa5

class extends WiredUIPreset {
  static {
    n(this, "TextInputPreset");
  }
  _container;
  var_457;
  var_73;
  var_525 = null;
  var_45;
  _rc2e70000466ca9 = "";
  var_2637 = null;
  Exception = 0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._container = this.var_102._rd65848eed931f7("growing_container_view")),
      (this.var_457 = this.var_40.createTextInputView()),
      (this.var_73 = this.var_457.findChildByName("field")),
      (this.Exception = this.var_457.width - this.var_73.width),
      (this.var_45 = e),
      e._r980f40d20ca2e7 > 0 && (this.var_73._r4c2336e24c69cc = e._r980f40d20ca2e7),
      (this.var_73.text = this.var_45._r314331cd566bfb),
      e.width >= 0 && (this.var_457.width = e.width + this.Exception),
      (this.var_73.editable = e.editable),
      e.restrict != null && (this.var_73.restrict = e.restrict),
      e.tooltip != null && (this.var_73.toolTipCaption = e.tooltip),
      this._container.addChild(this.var_457),
      e.placeholder != null &&
        ((this.var_525 = this.var_102.createText(
          e.placeholder,
          new Se(Se.MODE_OVERFLOW),
        )),
        (this.var_525.window.blend = 0.5),
        this.var_525.window.tags.push("HALF_BLEND"),
        this._container.addChild(this.var_525.window),
        (this.var_525.window.x = this.var_73.x),
        (this.var_525.window.y = this.var_73.y)),
      this.var_73.addEventListener(y.WINDOW_EVENT_CHANGE, this._ref79cf6ba614c9),
      this._ref79cf6ba614c9());
  }
  _ref79cf6ba614c9 = n((...e) => {
    if (
      (this.var_525 != null &&
        (this.var_525.window.visible = this.var_73.text.length === 0),
      this.var_73.text !== this._rc2e70000466ca9)
    ) {
      if (this.var_2637 != null) for (let r of this.var_2637) r(this.var_73.text);
      this._rc2e70000466ca9 = this.var_73.text;
    }
    this.updateWarn();
  }, "_ref79cf6ba614c9");
  get text() {
    return this.var_73.text;
  }
  set text(e) {
    ((this.var_73.text = e), this._ref79cf6ba614c9());
  }
  resizeToWidth(e) {
    super.resizeToWidth(e);
    let r = this.var_45.width >= 0 ? this.var_45.width + this.Exception : e;
    ((this.var_457.width = r),
      this.var_525 != null && this.var_525.resizeToWidth(r - this.Exception));
  }
  get window() {
    return this._container;
  }
  hasStaticWidth() {
    return this.var_45.width >= 0;
  }
  get staticWidth() {
    return this.var_45.width + this.Exception;
  }
  get childPresets() {
    return this.var_525 == null ? [] : [this.var_525];
  }
  addListener(e) {
    (this.var_2637 == null &&
      ((this.var_2637 = []), (this._rc2e70000466ca9 = this.var_73.text)),
      this.var_2637.push(e));
  }
  shouldShowWarn() {
    let e = this.var_45._r980f40d20ca2e7;
    if (e <= 10) return !1;
    let r = Math.min(30, Math.max(6, Math.trunc(e / 5)));
    return this.var_73.text.length > e - r;
  }
  updateWarn() {
    if (this.charLimitWarnArea == null) return;
    let e = this.shouldShowWarn();
    ((this.charLimitWarnArea.visible = e),
      e &&
        (this.limitText.text = `${this.var_73.text.length}/${this.var_45._r980f40d20ca2e7}`));
  }
  addEventListener(e, r) {
    this.var_73.addEventListener(e, r);
  }
  removeEventListener(e, r) {
    this.var_73.removeEventListener(e, r);
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_457 = null),
      (this.var_525 = null),
      (this.var_45 = null),
      (this.var_2637 = null));
  }
  get charLimitWarnArea() {
    return this._container.findChildByName("char_limit_warn");
  }
  get limitText() {
    return this._container.findChildByName("limit_text");
  }
}
