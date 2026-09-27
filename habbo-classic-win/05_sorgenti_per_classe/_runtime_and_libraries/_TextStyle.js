// Extracted from HabboAirLauncher.deobf.js, line 25259.

class vv extends Yn {
      static {
        n(this, "_TextStyle");
      }
      constructor(e = {}) {
        (super(),
          (this.uid = uid_("textStyle")),
          (this._tick = 0),
          (this._cachedFontString = null),
          convertV7Tov8Style(e),
          e instanceof vv && (e = e._toObject()));
        let i = { ...vv.defaultTextStyle, ...e };
        for (let s in i) {
          let o = s;
          this[o] = i[s];
        }
        ((this._tagStyles = e.tagStyles ?? void 0), this.update(), (this._tick = 0));
      }
      get align() {
        return this._align;
      }
      set align(e) {
        this._align !== e && ((this._align = e), this.update());
      }
      get breakWords() {
        return this._breakWords;
      }
      set breakWords(e) {
        this._breakWords !== e && ((this._breakWords = e), this.update());
      }
      get dropShadow() {
        return this._dropShadow;
      }
      set dropShadow(e) {
        this._dropShadow !== e &&
          (e !== null && typeof e == "object"
            ? (this._dropShadow = this._createProxy({ ...vv.defaultDropShadow, ...e }))
            : (this._dropShadow = e ? this._createProxy({ ...vv.defaultDropShadow }) : null),
          this.update());
      }
      get fontFamily() {
        return this._fontFamily;
      }
      set fontFamily(e) {
        this._fontFamily !== e && ((this._fontFamily = e), this.update());
      }
      get fontSize() {
        return this._fontSize;
      }
      set fontSize(e) {
        this._fontSize !== e &&
          (typeof e == "string" ? (this._fontSize = parseInt(e, 10)) : (this._fontSize = e), this.update());
      }
      get fontStyle() {
        return this._fontStyle;
      }
      set fontStyle(e) {
        this._fontStyle !== e && ((this._fontStyle = e.toLowerCase()), this.update());
      }
      get fontVariant() {
        return this._fontVariant;
      }
      set fontVariant(e) {
        this._fontVariant !== e && ((this._fontVariant = e), this.update());
      }
      get fontWeight() {
        return this._fontWeight;
      }
      set fontWeight(e) {
        this._fontWeight !== e && ((this._fontWeight = e), this.update());
      }
      get leading() {
        return this._leading;
      }
      set leading(e) {
        this._leading !== e && ((this._leading = e), this.update());
      }
      get letterSpacing() {
        return this._letterSpacing;
      }
      set letterSpacing(e) {
        this._letterSpacing !== e && ((this._letterSpacing = e), this.update());
      }
      get lineHeight() {
        return this._lineHeight;
      }
      set lineHeight(e) {
        this._lineHeight !== e && ((this._lineHeight = e), this.update());
      }
      get padding() {
        return this._padding;
      }
      set padding(e) {
        this._padding !== e && ((this._padding = e), this.update());
      }
      get filters() {
        return this._filters;
      }
      set filters(e) {
        this._filters !== e && ((this._filters = Object.freeze(e)), this.update());
      }
      get trim() {
        return this._trim;
      }
      set trim(e) {
        this._trim !== e && ((this._trim = e), this.update());
      }
      get textBaseline() {
        return this._textBaseline;
      }
      set textBaseline(e) {
        this._textBaseline !== e && ((this._textBaseline = e), this.update());
      }
      get whiteSpace() {
        return this._whiteSpace;
      }
      set whiteSpace(e) {
        this._whiteSpace !== e && ((this._whiteSpace = e), this.update());
      }
      get wordWrap() {
        return this._wordWrap;
      }
      set wordWrap(e) {
        this._wordWrap !== e && ((this._wordWrap = e), this.update());
      }
      get wordWrapWidth() {
        return this._wordWrapWidth;
      }
      set wordWrapWidth(e) {
        this._wordWrapWidth !== e && ((this._wordWrapWidth = e), this.update());
      }
      get fill() {
        return this._originalFill;
      }
      set fill(e) {
        e !== this._originalFill &&
          ((this._originalFill = e),
          this._isFillStyle(e) &&
            (this._originalFill = this._createProxy({ ...Eb.defaultFillStyle, ...e }, () => {
              this._fill = toFillStyle({ ...this._originalFill }, Eb.defaultFillStyle);
            })),
          (this._fill = toFillStyle(e === 0 ? "black" : e, Eb.defaultFillStyle)),
          this.update());
      }
      get stroke() {
        return this._originalStroke;
      }
      set stroke(e) {
        e !== this._originalStroke &&
          ((this._originalStroke = e),
          this._isFillStyle(e) &&
            (this._originalStroke = this._createProxy({ ...Eb.defaultStrokeStyle, ...e }, () => {
              this._stroke = toStrokeStyle({ ...this._originalStroke }, Eb.defaultStrokeStyle);
            })),
          (this._stroke = toStrokeStyle(e, Eb.defaultStrokeStyle)),
          this.update());
      }
      get tagStyles() {
        return this._tagStyles;
      }
      set tagStyles(e) {
        this._tagStyles !== e && ((this._tagStyles = e ?? void 0), this.update());
      }
      update() {
        (this._tick++, (this._cachedFontString = null), this.emit("update", this));
      }
      reset() {
        let e = vv.defaultTextStyle;
        for (let r in e) this[r] = e[r];
      }
      assign(e) {
        for (let r in e) {
          let t = r;
          this[t] = e[r];
        }
        return this;
      }
      get styleKey() {
        return `${this.uid}-${this._tick}`;
      }
      get _fontString() {
        return (
          this._cachedFontString === null && (this._cachedFontString = fontStringFromTextStyle(this)),
          this._cachedFontString
        );
      }
      _toObject() {
        return {
          align: this.align,
          breakWords: this.breakWords,
          dropShadow: this._dropShadow ? { ...this._dropShadow } : null,
          fill: this._fill ? { ...this._fill } : void 0,
          fontFamily: this.fontFamily,
          fontSize: this.fontSize,
          fontStyle: this.fontStyle,
          fontVariant: this.fontVariant,
          fontWeight: this.fontWeight,
          leading: this.leading,
          letterSpacing: this.letterSpacing,
          lineHeight: this.lineHeight,
          padding: this.padding,
          stroke: this._stroke ? { ...this._stroke } : void 0,
          textBaseline: this.textBaseline,
          trim: this.trim,
          whiteSpace: this.whiteSpace,
          wordWrap: this.wordWrap,
          wordWrapWidth: this.wordWrapWidth,
          filters: this._filters ? [...this._filters] : void 0,
          tagStyles: this._tagStyles ? { ...this._tagStyles } : void 0,
        };
      }
      clone() {
        return new vv(this._toObject());
      }
      _getFinalPadding() {
        let e = 0;
        if (this._filters) for (let r = 0; r < this._filters.length; r++) e += this._filters[r].padding;
        return Math.max(this._padding, e);
      }
      destroy(e = !1) {
        if ((this.removeAllListeners(), typeof e == "boolean" ? e : e?.texture)) {
          let t = typeof e == "boolean" ? e : e?.textureSource;
          (this._fill?.texture && this._fill.texture.destroy(t),
            this._originalFill?.texture && this._originalFill.texture.destroy(t),
            this._stroke?.texture && this._stroke.texture.destroy(t),
            this._originalStroke?.texture && this._originalStroke.texture.destroy(t));
        }
        ((this._fill = null),
          (this._stroke = null),
          (this.dropShadow = null),
          (this._originalStroke = null),
          (this._originalFill = null));
      }
      _createProxy(e, r) {
        return new Proxy(e, {
          set: n((t, i, s) => (t[i] === s || ((t[i] = s), r?.(i, s), this.update()), !0), "set"),
        });
      }
      _isFillStyle(e) {
        return (e ?? null) !== null && !(na.isColorLike(e) || e instanceof rd || e instanceof FillPattern);
      }
    }
