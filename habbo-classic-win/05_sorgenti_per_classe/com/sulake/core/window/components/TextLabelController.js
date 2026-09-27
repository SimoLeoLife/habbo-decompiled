// Estratto da HabboAirLauncher.deobf.js, riga 141219.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/TextLabelController.as
// Nome offuscato: _i4503103b188c75

class a extends st {
  static {
    n(this, "TextLabelController");
  }
  static MARGINS_KEY = "margins";
  _textColor = null;
  _textStyleName = "";
  _text = "";
  _localized = !1;
  _rdde597efc6d476 = null;
  var_4551 = 0;
  _textWidth = 0;
  var_1341 = !1;
  _rc4316df6d6d831 = !1;
  _ra23c907b3558a5 = null;
  constructWindow(e, r, t, i, s, o, d, c, f = null, l = null, b = 0, _ = "") {
    ((this._textStyleName = String(
      s._rf5e87151b3d9ca().getThemeManager()._r421a2291c74c01(t).get(class_3436.TEXT_STYLE),
    )),
      class_3390.events?.addEventListener?.(M._ra3d93f66ba77c2, this.onTextStyleChanged),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
  }
  get antiAliasType() {
    return this.textField.antiAliasType;
  }
  get autoSize() {
    return this.textField.autoSize;
  }
  get bold() {
    return this.textField.defaultTextFormat.bold === !0;
  }
  get border() {
    return this.textField.border;
  }
  get borderColor() {
    return this.textField.borderColor;
  }
  get defaultTextFormat() {
    return this.textField.defaultTextFormat;
  }
  get embedFonts() {
    return this.textField.embedFonts;
  }
  get fontFace() {
    return this.textField.defaultTextFormat.font ?? "";
  }
  get fontSize() {
    return this.textField.defaultTextFormat.size == null ? 12 : Number(this.textField.defaultTextFormat.size);
  }
  get gridFitType() {
    return this.textField.gridFitType;
  }
  get italic() {
    return this.textField.defaultTextFormat.italic === !0;
  }
  get kerning() {
    return this.textField.defaultTextFormat.kerning === !0;
  }
  get length() {
    return this._text.length;
  }
  get margins() {
    return (
      this._rdde597efc6d476 == null &&
        (this._rdde597efc6d476 = new s0(0, 0, 0, 0, (e) => this._rfa062aaf5669d6(e))),
      this._rdde597efc6d476
    );
  }
  get _r4c2336e24c69cc() {
    return this.textField._r4c2336e24c69cc;
  }
  get sharpness() {
    return this.textField.sharpness;
  }
  get spacing() {
    return Number(this.textField.defaultTextFormat.letterSpacing ?? 0);
  }
  get text() {
    return this._text;
  }
  get textColor() {
    return Number(this._textColor ?? 0);
  }
  get _r84076acb78d7db() {
    return this.background;
  }
  get _errorPopup() {
    return this.color;
  }
  get textHeight() {
    return this.var_4551;
  }
  get textWidth() {
    return this._textWidth;
  }
  get textStyle() {
    return class_3390._r22c9347ecec607(this._textStyleName) ?? new Ia();
  }
  get thickness() {
    return this.textField.thickness;
  }
  get underline() {
    return this.textField.defaultTextFormat.underline === !0;
  }
  get _rf11c0f6fe581c6() {
    return this._rdde597efc6d476?.left ?? 0;
  }
  get _r5dac723dc49ec3() {
    return this._rdde597efc6d476?.top ?? 0;
  }
  get _rc41f4931ad3b11() {
    return this._textColor != null;
  }
  get vertical() {
    return this._rc4316df6d6d831;
  }
  set vertical(e) {
    ((this._rc4316df6d6d831 = e), this.refresh());
  }
  get textField() {
    let e = mj.getTextFieldByStyleName(this._textStyleName) ?? new Pt();
    return ((e.text = this._text), this._textColor != null && (e.textColor = this._textColor), e);
  }
  set text(e) {
    e != null &&
      (this._localized &&
        (this.context?._r33082b59b9c769(
          this._caption.slice(2, this._caption.indexOf("}")),
          this,
        ),
        (this._localized = !1)),
      (this._caption = e),
      this._caption.charAt(0) === "$" && this._caption.charAt(1) === "{"
        ? (this.context?._r0fab3c6d38398a(
            this._caption.slice(2, this._caption.indexOf("}")),
            this,
          ),
          (this._localized = !0))
        : ((this._text = e), this.refresh()));
  }
  set caption(e) {
    this.text = e;
  }
  get caption() {
    return super.caption;
  }
  set localization(e) {
    e != null && ((this._text = e), this.refresh());
  }
  set textStyle(e) {
    e != null && this._textStyleName !== e.name && ((this._textStyleName = e.name), this.refresh());
  }
  set textColor(e) {
    e !== this._textColor && ((this._textColor = e), this.refresh());
  }
  dispose() {
    this._disposed ||
      (class_3390.events?.removeEventListener?.(M._ra3d93f66ba77c2, this.onTextStyleChanged),
      this._localized &&
        ((this._localized = !1),
        this.context?._r33082b59b9c769(
          this._caption.slice(2, this._caption.indexOf("}")),
          this,
        )),
      this._rdde597efc6d476?.dispose(),
      (this._rdde597efc6d476 = null),
      super.dispose());
  }
  get properties() {
    let e = super.properties,
      r = class_3390._r22c9347ecec607(this._textStyleName) ?? new Ia(),
      t = Number(r.color != null ? r.color : this.getDefaultProperty(class_3436.const_687).value);
    return (
      e.push(this.createProperty(class_3436.TEXT_STYLE, this._textStyleName)),
      e.push(
        new ne(
          class_3436.const_687,
          this._textColor == null ? t : this._textColor,
          ne.const_131,
          this._textColor != null && this._textColor !== t,
        ),
      ),
      e.push(this.createProperty(class_3436.VERTICAL, this._rc4316df6d6d831)),
      this._rdde597efc6d476 != null
        ? (e.push(this.createProperty(class_3436.MARGIN_LEFT, this._rdde597efc6d476.left)),
          e.push(this.createProperty(class_3436.MARGIN_TOP, this._rdde597efc6d476.top)),
          e.push(this.createProperty(class_3436.MARGIN_RIGHT, this._rdde597efc6d476.right)),
          e.push(this.createProperty(class_3436.MARGIN_BOTTOM, this._rdde597efc6d476.bottom)))
        : (e.push(this.getDefaultProperty(class_3436.MARGIN_LEFT)),
          e.push(this.getDefaultProperty(class_3436.MARGIN_TOP)),
          e.push(this.getDefaultProperty(class_3436.MARGIN_RIGHT)),
          e.push(this.getDefaultProperty(class_3436.MARGIN_BOTTOM))),
      e
    );
  }
  set properties(e) {
    if (this._textStyleName.length === 0) {
      this._ra23c907b3558a5 = e;
      return;
    }
    this._ra23c907b3558a5 = null;
    for (let r of e)
      switch (r.key) {
        case class_3436.TEXT_STYLE:
          this.textStyle = class_3390._r22c9347ecec607(String(r.value)) ?? new Ia();
          break;
        case class_3436.const_687:
          this._textColor = r.value;
          break;
        case class_3436.MARGIN_LEFT:
          (this._rdde597efc6d476 != null || r.valid) && (this.margins.left = r.value);
          break;
        case class_3436.MARGIN_TOP:
          (this._rdde597efc6d476 != null || r.valid) && (this.margins.top = r.value);
          break;
        case class_3436.MARGIN_RIGHT:
          (this._rdde597efc6d476 != null || r.valid) && (this.margins.right = r.value);
          break;
        case class_3436.MARGIN_BOTTOM:
          (this._rdde597efc6d476 != null || r.valid) && (this.margins.bottom = r.value);
          break;
        case a.MARGINS_KEY:
          this._r283e084218714a(r.value);
          break;
        case class_3436.VERTICAL:
          this.vertical = r.value;
          break;
      }
    super.properties = e;
  }
  refresh(e = !1) {
    if (this.var_1341) return;
    this.var_1341 = !0;
    let r = this.textField;
    ((this._textWidth = r.textWidth), (this.var_4551 = r.textHeight));
    let t = r.border ? 1 : 0,
      i = this._rdde597efc6d476 ? this._rdde597efc6d476.left + this._rdde597efc6d476.right : 0,
      s = this._rdde597efc6d476 ? this._rdde597efc6d476.top + this._rdde597efc6d476.bottom : 0,
      o = this.var_31 - i,
      d = this.var_35 - s,
      c = Math.floor(r.width) + t,
      f = Math.floor(r.height) + t,
      l = !1;
    if (
      (this._rc4316df6d6d831
        ? (c !== d && (this.setRectangle(this._x, this._y, f + i, Math.floor(r.width) + s), (l = !0)),
          f < o
            ? (r.height = o - t)
            : f > o && (this.setRectangle(this._x, this._y, f + i, Math.floor(r.width) + s), (l = !0)))
        : (c !== o && (this.setRectangle(this._x, this._y, c + i, Math.floor(r.height) + s), (l = !0)),
          f < d
            ? (r.height = d - t)
            : f > d && (this.setRectangle(this._x, this._y, c + i, Math.floor(r.height) + s), (l = !0))),
      (this.var_1341 = !1),
      this._context.invalidate(this, null, class_2902.REDRAW),
      !l && !e && this._events)
    ) {
      let b = y.allocate(y.const_755, this, null);
      (this._events.dispatchEvent(b), b.recycle());
    }
  }
  _rfa062aaf5669d6(e) {
    (e &&
      e !== this._rdde597efc6d476 &&
      (this._rdde597efc6d476
        ? this._rdde597efc6d476.assign(e.left, e.top, e.right, e.bottom, (r) => this._rfa062aaf5669d6(r))
        : (this._rdde597efc6d476 = new s0(e.left, e.top, e.right, e.bottom, (r) =>
            this._rfa062aaf5669d6(r),
          ))),
      this.refresh());
  }
  onTextStyleChanged = n((e) => {
    this.refresh();
  }, "onTextStyleChanged");
  _r283e084218714a(e) {
    (this._rdde597efc6d476
      ? this._rdde597efc6d476.assign(Number(e.left), Number(e.top), Number(e.right), Number(e.bottom), (r) =>
          this._rfa062aaf5669d6(r),
        )
      : (this._rdde597efc6d476 = new s0(
          Number(e.left),
          Number(e.top),
          Number(e.right),
          Number(e.bottom),
          (r) => this._rfa062aaf5669d6(r),
        )),
      this.refresh());
  }
}
