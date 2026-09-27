// Estratto da HabboAirLauncher.deobf.js, riga 347833.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/TextAreaPreset.as
// Nome offuscato: _i0b156e8ed319cf

class extends WiredUIPreset {
  static {
    n(this, "TextAreaPreset");
  }
  _container;
  var_457;
  var_73;
  var_525 = null;
  var_45;
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
      (this.var_73.multiline = !0),
      (this.var_73.wordWrap = e._r5182e5b6814bdf),
      e.width >= 0 && (this.var_457.width = e.width + this.Exception),
      (this.var_457.height = e.height),
      e._r79e0cd188e1c70 >= 0 && (this.var_73._r79e0cd188e1c70 = e._r79e0cd188e1c70),
      (this.var_73.editable = e.editable),
      e.restrict != null && (this.var_73.restrict = e.restrict),
      e.tooltip != null && (this.var_73.toolTipCaption = e.tooltip),
      this._container.addChild(this.var_457),
      e.placeholder != null &&
        ((this.var_525 = this.var_102.createText(
          e.placeholder,
          new Se(Se.MODE_MULTILINE),
        )),
        (this.var_525.window.blend = 0.5),
        this.var_525.window.tags.push("HALF_BLEND"),
        (this.var_525.window.x = this.var_73.x),
        (this.var_525.window.y = this.var_73.y),
        this._container.addChild(this.var_525.window)),
      this.var_73.addEventListener(y.WINDOW_EVENT_CHANGE, this._ref79cf6ba614c9),
      this._ref79cf6ba614c9());
  }
  _ref79cf6ba614c9 = n((...e) => {
    (this.var_525 != null && (this.var_525.visible = this.var_73.length === 0),
      this.updateWarn());
  }, "_ref79cf6ba614c9");
  get text() {
    return this.var_73.text
      .replace(
        /\n\r/g,
        `
`,
      )
      .replace(
        /\r/g,
        `
`,
      );
  }
  set text(e) {
    ((this.var_73.text = e.replace(/\n/g, "\r")), this._ref79cf6ba614c9());
  }
  reset() {
    ((this.var_73.text = ""), this._ref79cf6ba614c9());
  }
  shouldShowWarn() {
    let e = this.var_45._r980f40d20ca2e7;
    if (e <= 10) return !1;
    let r = Math.min(30, Math.max(6, Math.trunc(e / 5)));
    return this.var_73.text.length > e - r;
  }
  updateWarn() {
    let e = this.charLimitWarnArea;
    if (e == null) return;
    let r = this.shouldShowWarn();
    if (((e.visible = r), r)) {
      let t = this.limitText;
      t != null &&
        (t.text = `${this.var_73.text.length}/${this.var_45._r980f40d20ca2e7}`);
    }
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
  get childPresets() {
    return this.var_525 == null ? [] : [this.var_525];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_457 = null),
      (this.var_73 = null),
      (this.var_525 = null),
      (this.var_45 = null));
  }
  get charLimitWarnArea() {
    return this._container.findChildByName("char_limit_warn");
  }
  get limitText() {
    return this._container.findChildByName("limit_text");
  }
}
