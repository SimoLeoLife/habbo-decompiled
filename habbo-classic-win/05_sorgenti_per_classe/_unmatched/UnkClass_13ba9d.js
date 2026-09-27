// Extracted from HabboAirLauncher.deobf.js, line 133091.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i13ba9de1f27227

class a extends st {
  static {
    n(this, "UnkClass_13ba9d");
  }
  static _rd2258a2ebb7e08 = Wd._r615ad07097b75f();
  static _rffad6dd54360ab = ["a", "B", "c", "D", "e"];
  static _rcea6eff87c7c9f = a._rdbf76e2f0c7089();
  _rdc6e54f251c540 = "";
  _r71d830b7c6d7a9 = !1;
  _textStyleName = "";
  _r16b7655587c765 = new Ia();
  _ra23c907b3558a5 = null;
  stage;
  _ra6df8b488c719a = 0;
  var_940 = 0;
  _r1d6e828dd04420 = !1;
  _rdde597efc6d476;
  _r0694eee6c169a5 = nr.NONE;
  _localized = !1;
  _maxLines = 0;
  _raf640b58dc0fd1 = !1;
  _etchingColor = 0;
  var_3520 = Ia.BOTTOM;
  _r495871518668b6 = new _i();
  _r6da0319258a4ae = !1;
  constructWindow(e, r, t, i, s, o, d, c, f = null, l = null, b = 0, _ = "") {
    (this.stage == null &&
      ((this.stage = new Pt()),
      o != null && ((this.stage.width = o.width), (this.stage.height = o.height)),
      (this.stage.antiAliasType = ai.ADVANCED),
      (this.stage.gridFitType = ad.PIXEL),
      (this.stage._rbf8a933bf67bb1 = !1)),
      (this._rdde597efc6d476 = new s0(0, 0, 0, 0, (h) => this._rfa062aaf5669d6(h))),
      (this._textStyleName = String(
        s._rf5e87151b3d9ca().getThemeManager()._r421a2291c74c01(t).get(class_3436.TEXT_STYLE),
      )),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _),
      a._rd2b11259f17e28(this),
      class_3390.events?.addEventListener?.(M._ra3d93f66ba77c2, this.onTextStyleChanged),
      (this.antiAliasType = ai.ADVANCED),
      (this.gridFitType = ad.PIXEL),
      this.stage.autoSize === nr.NONE &&
        ((this.stage.width = this.var_31),
        (this.stage.height = this.var_35)));
  }
  get antiAliasType() {
    return this.stage.antiAliasType;
  }
  get autoSize() {
    return this._r0694eee6c169a5;
  }
  get bold() {
    return this.stage.defaultTextFormat.bold === !0;
  }
  get border() {
    return this.stage.border;
  }
  get borderColor() {
    return this.stage.borderColor;
  }
  get _r4e8cc4f8d5d64a() {
    return this.stage._r4e8cc4f8d5d64a;
  }
  get defaultTextFormat() {
    return this.stage.defaultTextFormat;
  }
  get embedFonts() {
    return this.stage.embedFonts;
  }
  get fontFace() {
    return this.stage.defaultTextFormat.font ?? "";
  }
  get fontSize() {
    return this.stage.defaultTextFormat.size == null
      ? 12
      : Number(this.stage.defaultTextFormat.size);
  }
  get gridFitType() {
    return this.stage.gridFitType;
  }
  get htmlText() {
    return this.stage.htmlText;
  }
  get italic() {
    return this.stage.defaultTextFormat.italic === !0;
  }
  get kerning() {
    return this.stage.defaultTextFormat.kerning === !0;
  }
  get length() {
    return this.stage.length;
  }
  get margins() {
    return this._rdde597efc6d476;
  }
  get _r4c2336e24c69cc() {
    return this.stage._r4c2336e24c69cc;
  }
  get multiline() {
    return this.stage.multiline;
  }
  get _r99f9b16cafb2f2() {
    return this.stage._r99f9b16cafb2f2;
  }
  get restrict() {
    return this.stage.restrict ?? "";
  }
  get sharpness() {
    return this.stage.sharpness;
  }
  get spacing() {
    return Number(this.stage.defaultTextFormat.letterSpacing ?? 0);
  }
  get text() {
    return this.stage != null ? this.stage.text : "";
  }
  get textColor() {
    return this.stage.textColor;
  }
  get _r84076acb78d7db() {
    return this.background;
  }
  get _errorPopup() {
    return this.color;
  }
  get textHeight() {
    return this.stage.textHeight;
  }
  get textWidth() {
    return this.stage.textWidth;
  }
  get textStyle() {
    return class_3390._r22c9347ecec607(this._textStyleName) ?? new Ia();
  }
  get thickness() {
    return this.stage.thickness;
  }
  get underline() {
    return this.stage.defaultTextFormat.underline === !0;
  }
  get wordWrap() {
    return this.stage.wordWrap;
  }
  get textField() {
    return this.stage;
  }
  get _r79e0cd188e1c70() {
    return this._maxLines;
  }
  get leading() {
    return Number(this.stage.defaultTextFormat.leading ?? 0);
  }
  get _rb28575459d1632() {
    return this._rdc6e54f251c540 !== "";
  }
  get overflowReplace() {
    return this._rdc6e54f251c540;
  }
  get scrollH() {
    return this._ra6df8b488c719a;
  }
  get var_46() {
    return this.var_940;
  }
  get _radb221318b5180() {
    return this.stage._radb221318b5180;
  }
  get _r5733287651adec() {
    return Math.max(this.stage.textHeight - this.height, 0);
  }
  get _rbab5041f1931e4() {
    return new D(
      this._ra6df8b488c719a * this._radb221318b5180,
      this.var_940 * this._r5733287651adec,
      this.width,
      this.height,
    );
  }
  get visibleRegion() {
    return new D(0, 0, this._radb221318b5180 + this.width, this._r5733287651adec + this.height);
  }
  get _r8b912d55bec683() {
    return 10;
  }
  get _rb988fd2ffad4a3() {
    return this.stage._r99f9b16cafb2f2 > 0
      ? this.stage.textHeight / this.stage._r99f9b16cafb2f2
      : 0;
  }
  get etchingColor() {
    return this._etchingColor;
  }
  get etchingPosition() {
    return this.var_3520;
  }
  get _rfa49d450f1c158() {
    return this._r71d830b7c6d7a9;
  }
  get caption() {
    return this.text;
  }
  get color() {
    return this.stage.backgroundColor;
  }
  get background() {
    return this.stage.background;
  }
  set antiAliasType(e) {
    a._r80fdb756433d46(this, e);
  }
  set autoSize(e) {
    a._r58ff44cb66c607(this, e);
  }
  set bold(e) {
    a._ra2b1a4a8b7c7b5(this, e);
  }
  set border(e) {
    a._rd4e191ab787162(this, e);
  }
  set borderColor(e) {
    a._r65ac410a377967(this, e);
  }
  set defaultTextFormat(e) {
    a._rb13eb253f17669(this, e);
  }
  set embedFonts(e) {
    a._r7681f04da8c640(this, e);
  }
  set fontFace(e) {
    a._rdae68dbf88c486(this, e);
  }
  set fontSize(e) {
    a._r9ff7ae0889b48c(this, e);
  }
  set gridFitType(e) {
    a._rcebb2f6eee6092(this, e);
  }
  set htmlText(e) {
    a._r584c5c7acd47f1(this, e);
  }
  set italic(e) {
    a._r3af73851ff9dbd(this, e);
  }
  set kerning(e) {
    a._rc41edc561b4d07(this, e);
  }
  set _r4c2336e24c69cc(e) {
    a._ref0537b65ed7fd(this, e);
  }
  set multiline(e) {
    a._r556efa1562613b(this, e);
  }
  set restrict(e) {
    a._rdbdafaad278915(this, e);
  }
  set sharpness(e) {
    a._rd14a20262608a9(this, e);
  }
  set spacing(e) {
    a._rc8a8087fd1c6b1(this, e);
  }
  set textColor(e) {
    a._r0f44cf34d84910(this, e);
  }
  set _r84076acb78d7db(e) {
    a._r539b69f521908a(this, e);
  }
  set _errorPopup(e) {
    a._rd22820117c6633(this, e);
  }
  set textStyle(e) {
    a._r499cdf622b6cf6(this, e);
  }
  set thickness(e) {
    a._rc53aff2cddd7b0(this, e);
  }
  set underline(e) {
    a._r9362a39bf6c153(this, e);
  }
  set wordWrap(e) {
    a._r8c1159fa2decdf(this, e);
  }
  set _r79e0cd188e1c70(e) {
    a._r845c0ba5fbe9a0(this, e);
  }
  set leading(e) {
    a._rd5e8333e69a485(this, e);
  }
  set overflowReplace(e) {
    a._rb3505750f4e8f8(this, e);
  }
  set etchingColor(e) {
    a._r61aff8eb8b15a7(this, e);
  }
  set etchingPosition(e) {
    a._r01545dcf91670b(this, e);
  }
  set scrollH(e) {
    e !== this._ra6df8b488c719a &&
      ((this._ra6df8b488c719a = e),
      (this.stage.scrollH =
        this._ra6df8b488c719a * Number(this.stage._radb221318b5180)),
      this.refreshTextImage(),
      this._rda35139e3f58ec());
  }
  set var_46(e) {
    e > this.var_940
      ? ((this.var_940 = e),
        (this.stage.var_46 = Math.max(
          this.stage.var_46,
          e * this.stage._r5733287651adec + 1,
        )),
        this.refreshTextImage(),
        this._rda35139e3f58ec())
      : e < this.var_940 &&
        ((this.var_940 = e),
        (this.stage.var_46 = Math.min(
          this.stage.var_46,
          e * this.stage._r5733287651adec - 1,
        )),
        this.refreshTextImage(),
        this._rda35139e3f58ec());
  }
  set _r8b912d55bec683(e) {}
  set _rb988fd2ffad4a3(e) {}
  set text(e) {
    e != null &&
      (this._localized &&
        (this.context?._r33082b59b9c769(
          this._caption.slice(2, this._caption.indexOf("}")),
          this,
        ),
        (this._localized = !1)),
      (this._caption = e),
      !this._raf640b58dc0fd1 &&
      this._caption.charAt(0) === "$" &&
      this._caption.charAt(1) === "{"
        ? ((this._localized = !0),
          this.context?._r0fab3c6d38398a(
            this._caption.slice(2, this._caption.indexOf("}")),
            this,
          ))
        : this.stage != null &&
          ((this.stage.text = this._rf5f4cf2e874967(this._caption)),
          this.refreshTextImage()));
  }
  set caption(e) {
    this.text = e;
  }
  set color(e) {
    ((super.color = e), (this.stage.backgroundColor = e));
  }
  set background(e) {
    ((super.background = e), (this.stage.background = e));
  }
  set localization(e) {
    e != null &&
      this.stage != null &&
      ((this.stage.text = this._ra13b5ed4ed6e51(e)), this.refreshTextImage());
  }
  set styleSheet(e) {
    ((this.stage.styleSheet = e), this.refreshTextImage());
  }
  _ra13b5ed4ed6e51(e) {
    return this._r4c2336e24c69cc > 0 ? e.substr(0, this._r4c2336e24c69cc) : e;
  }
  setRectangle(e, r, t, i) {
    if (this._r6da0319258a4ae || !this.multiline || !this.wordWrap) {
      super.setRectangle(e, r, t, i);
      return;
    }
    if (this._x === e && this.var_31 === t) {
      super.setRectangle(e, r, t, i);
      return;
    }
    this._r6da0319258a4ae = !0;
    let s = this.autoSize;
    ((this.autoSize = nr.NONE),
      super.setRectangle(e, r, t, i),
      (this.autoSize = s),
      (this._r6da0319258a4ae = !1));
  }
  clone() {
    let e = super.clone();
    return (
      (e.stage.backgroundColor = this.color),
      (e.stage.background = this.background),
      (e.stage.antiAliasType = ai.ADVANCED),
      (e.stage.gridFitType = ad.PIXEL),
      (e._ra6df8b488c719a = this._ra6df8b488c719a),
      (e.var_940 = this.var_940),
      (e._rdde597efc6d476 = this._rdde597efc6d476.clone((r) => e._rfa062aaf5669d6(r))),
      (e._r0694eee6c169a5 = this._r0694eee6c169a5),
      (e._localized = this._localized),
      e
    );
  }
  dispose() {
    ((this.immediateClickMode = !1),
      class_3390.events?.removeEventListener?.(M._ra3d93f66ba77c2, this.onTextStyleChanged),
      this._localized &&
        this.context?._r33082b59b9c769(
          this._caption.slice(2, this._caption.indexOf("}")),
          this,
        ),
      this._rdde597efc6d476?.dispose(),
      this.stage?.dispose(),
      (this.stage = null),
      super.dispose());
  }
  update(e, r) {
    if (
      (!this._r1d6e828dd04420 && r.type === y.const_755 && this.refreshTextImage(!0),
      e === this &&
        r.type === u.const_974 &&
        this.stage._rbf8a933bf67bb1 &&
        this._r5733287651adec > 0)
    ) {
      let t = r.delta,
        i = this._r5733287651adec > 0 ? this._rb988fd2ffad4a3 / this._r5733287651adec : 0;
      if (i > 0) {
        if (t > 0) return ((this.var_46 = Math.max(0, this.var_940 - i)), !0);
        if (t < 0) return ((this.var_46 = Math.min(1, this.var_940 + i)), !0);
      }
    }
    return super.update(e, r);
  }
  refreshTextImage(e = !1) {
    if (this._r1d6e828dd04420) return;
    ((this._r1d6e828dd04420 = !0), (this._r71d830b7c6d7a9 = !1));
    let r = this._rdde597efc6d476.left + this._rdde597efc6d476.right,
      t = this._rdde597efc6d476.top + this._rdde597efc6d476.bottom,
      i = this.var_31 - r,
      s = this.var_35 - t,
      o = Math.floor(this.stage.width) + (this.stage.border ? 1 : 0),
      d = !1;
    if (
      (this._r0694eee6c169a5 === nr.NONE || this._r0694eee6c169a5 === nr.RIGHT) &&
      this._rb28575459d1632
    ) {
      let c = 0,
        f = this.stage.text;
      if (this.stage.textHeight + t > s) {
        let b = this.stage._r99f9b16cafb2f2 - 1;
        for (; b >= 0;) {
          let _ = this.stage._r601a063da6bfb9(this.stage._rfba353da9d7496(b));
          if (_ != null && _.bottom <= s) break;
          b--;
        }
        if (b >= 0)
          for (
            c = this.stage._rfba353da9d7496(b) + this.stage._rdfb40d86a717f7(b);
            this.stage.textHeight + t > s && c > 0;
          )
            ((this.stage.text = f.slice(0, --c) + this.overflowReplace),
              (this._r71d830b7c6d7a9 = !0));
      }
      let l = this.stage.text;
      if (this.stage.textWidth + r > i) {
        let b = this.stage.text.length - 1;
        for (; b >= 0;) {
          let p = this.stage._r601a063da6bfb9(b);
          if (p != null && p.right <= i) break;
          b--;
        }
        let _ = this._rd835b98973eaf7(0, b);
        c = b;
        let h = r + Number(_.indent ?? 0) + Number(_.leftMargin ?? 0) + Number(_.rightMargin ?? 0);
        for (; this.stage.textWidth + h > i && c > 0;)
          ((this.stage.text = l.slice(0, --c) + this.overflowReplace),
            (this._r71d830b7c6d7a9 = !0));
      }
      o = Math.floor(this.stage.width) + (this.stage.border ? 1 : 0);
    }
    if (
      (o !== i &&
        (this._r0694eee6c169a5 === nr.const_27
          ? (this.setRectangle(this._x, this._y, o + r, Math.floor(this.stage.height) + t),
            (d = !0))
          : this._r0694eee6c169a5 === nr.NONE &&
            ((this.stage.width = i - (this.stage.border ? 1 : 0)),
            (this.stage.height = s - (this.stage.border ? 1 : 0)))),
      this.stage.height + (this.stage.border ? 1 : 0) < s
        ? this._r0694eee6c169a5 === nr.NONE
          ? (this.stage.height = s - (this.stage.border ? 1 : 0))
          : ((this.height = Math.floor(this.stage.height) + t), (d = !0))
        : this.stage.height + (this.stage.border ? 1 : 0) > s &&
          this._r0694eee6c169a5 !== nr.NONE &&
          ((this.height = Math.floor(this.stage.height) + t), (d = !0)),
      (this._r1d6e828dd04420 = !1),
      this._context.invalidate(this, null, class_2902.REDRAW),
      !d && !e && this._events)
    ) {
      let c = y.allocate(y.const_755, this, null);
      (this._events.dispatchEvent(c), c.recycle());
    }
  }
  appendText(e) {
    (this.stage.appendText(e), this.refreshTextImage());
  }
  _r601a063da6bfb9(e) {
    return this.stage._r601a063da6bfb9(e);
  }
  _r7b0201ad66b552(e, r) {
    return this.stage._r7b0201ad66b552(e, r);
  }
  _r366a2254ac478b(e) {
    return this.stage._r366a2254ac478b(e);
  }
  _r85fe8292acb387(e) {
    return this.stage._r85fe8292acb387(e);
  }
  _r291d4718f54b85(e, r) {
    return this.stage._r291d4718f54b85(e, r);
  }
  _reb75aeced95039(e) {
    return this.stage._reb75aeced95039(e);
  }
  _rdfb40d86a717f7(e) {
    return this.stage._rdfb40d86a717f7(e);
  }
  _r6a97a2ac65f8d7(e) {
    return this.stage._r6a97a2ac65f8d7(e);
  }
  _rfba353da9d7496(e) {
    return this.stage._rfba353da9d7496(e);
  }
  _r4020e8798d5842(e) {
    return this.stage._r4020e8798d5842(e);
  }
  _r1489a67197b3cf(e) {
    return this.stage._r1489a67197b3cf(e);
  }
  _rd835b98973eaf7(e = -1, r = -1) {
    return this.stage._rd835b98973eaf7(e, r);
  }
  _r07c2bdbe43b8d8(e, r, t) {
    (this.stage._r07c2bdbe43b8d8(e, r, t), this.refreshTextImage());
  }
  _rf728d1a4d87da8(e, r = -1, t = -1) {
    r >= 0 &&
      t > r &&
      t < this.stage.length &&
      (this.stage._rf728d1a4d87da8(e, r, t), this.refreshTextImage());
  }
  _rfa062aaf5669d6(e) {
    (e !== this._rdde597efc6d476 &&
      (this._rdde597efc6d476.dispose(),
      (this._rdde597efc6d476 = new s0(e.left, e.top, e.right, e.bottom, (r) => this._rfa062aaf5669d6(r)))),
      this._r0694eee6c169a5 === nr.const_27 &&
        (this.stage.width =
          this.var_31 - this._rdde597efc6d476.left - this._rdde597efc6d476.right),
      this.refreshTextImage());
  }
  _rcf1f9ab87664d4(e) {
    if (e == null) return;
    let r = new B();
    (class_3122._r49e6f06a45fc47(e.children(), r), (this._r1d6e828dd04420 = !0));
    for (let t of r.getKeys()) {
      let i = a._rcea6eff87c7c9f.get(t);
      i?.(this, r.getValue(t));
    }
    this._r1d6e828dd04420 = !1;
  }
  set properties(e) {
    if (this.stage == null || this._rdde597efc6d476 == null) {
      this._ra23c907b3558a5 = e;
      return;
    }
    this._r1d6e828dd04420 = !0;
    for (let r of e) {
      let t = a._rcea6eff87c7c9f.get(r.key);
      t?.(this, r.value);
    }
    ((this._r1d6e828dd04420 = !1),
      (this._ra23c907b3558a5 = null),
      (super.properties = e),
      this.refreshTextImage());
  }
  get properties() {
    let e = super.properties,
      r = class_3390._r22c9347ecec607(this._textStyleName) ?? new Ia(),
      t = Number(r.color != null ? r.color : this.getDefaultProperty(class_3436.const_687).value);
    return (
      e.push(this.createProperty(class_3436.ALWAYS_SHOW_SELECTION, this.stage._r631e445de700b8)),
      e.push(
        new ne(
          class_3436.ANTIALIAS_TYPE,
          this.stage.antiAliasType,
          ne.STRING,
          this.stage.antiAliasType !== r.antiAliasType,
          class_3436._rf77c1a55ece0eb,
        ),
      ),
      e.push(this.createProperty(class_3436.AUTO_SIZE, this._r0694eee6c169a5)),
      e.push(this.createProperty(class_3436.BORDER, this.stage.border)),
      e.push(this.createProperty(class_3436.BORDER_COLOR, this.stage.borderColor)),
      e.push(
        new ne(
          class_3436.ETCHING_COLOR,
          this._etchingColor,
          ne.const_131,
          this._etchingColor !== Number(r.etchingColor),
        ),
      ),
      e.push(
        new ne(
          class_3436.ETCHING_POSITION,
          this.var_3520,
          ne.STRING,
          this.var_3520 !== String(r.etchingPosition),
          class_3436._r39bb9ece01cf62,
        ),
      ),
      e.push(this.createProperty(class_3436.CONDENSE_WHITE, this.stage._rac4732cd1a883c)),
      e.push(
        new ne(
          class_3436.FONT_FACE,
          this.defaultTextFormat.font,
          ne.STRING,
          this.defaultTextFormat.font !== r.fontFamily,
        ),
      ),
      e.push(
        new ne(
          class_3436.FONT_SIZE,
          this.defaultTextFormat.size,
          ne.const_77,
          this.defaultTextFormat.size !== r.fontSize,
        ),
      ),
      e.push(this.createProperty(class_3436.GRID_FIT_TYPE, this.stage.gridFitType)),
      e.push(
        new ne(
          class_3436.const_687,
          this.stage.textColor,
          ne.const_131,
          this.stage.textColor !== t,
        ),
      ),
      e.push(this.createProperty(class_3436.TEXT_STYLE, this._textStyleName)),
      e.push(this.createProperty(class_3436.MARGIN_LEFT, this._rdde597efc6d476.left)),
      e.push(this.createProperty(class_3436.MARGIN_TOP, this._rdde597efc6d476.top)),
      e.push(this.createProperty(class_3436.MARGIN_RIGHT, this._rdde597efc6d476.right)),
      e.push(this.createProperty(class_3436.MARGIN_BOTTOM, this._rdde597efc6d476.bottom)),
      e.push(this.createProperty(class_3436.MOUSE_WHEEL_ENABLED, this.stage._rbf8a933bf67bb1)),
      e.push(this.createProperty(class_3436.MAX_CHARS, this.stage._r4c2336e24c69cc)),
      e.push(this.createProperty(class_3436.MULTILINE, this.stage.multiline)),
      e.push(this.createProperty(class_3436.RESTRICT, this.stage.restrict)),
      e.push(
        new ne(
          class_3436.SHARPNESS,
          this.stage.sharpness,
          ne.NUMBER,
          this.stage.sharpness !== r.sharpness,
        ),
      ),
      e.push(
        new ne(
          class_3436.THICKNESS,
          this.stage.thickness,
          ne.NUMBER,
          this.stage.thickness !== r.thickness,
        ),
      ),
      e.push(this.createProperty(class_3436.const_211, this.stage.wordWrap)),
      e.push(this.createProperty(class_3436.MAX_LINES, this._r79e0cd188e1c70)),
      e.push(this.createProperty(class_3436.const_602, this.overflowReplace)),
      e.push(
        new ne(
          class_3436.BOLD,
          this.stage.defaultTextFormat.bold !== !1,
          ne.BOOLEAN,
          this.stage.defaultTextFormat.bold !== (r.fontWeight === l2.BOLD),
        ),
      ),
      e.push(
        new ne(
          class_3436.ITALIC,
          this.stage.defaultTextFormat.italic !== !1,
          ne.BOOLEAN,
          this.stage.defaultTextFormat.italic !== (r.fontStyle === l2.ITALIC),
        ),
      ),
      e.push(
        new ne(
          class_3436.const_81,
          this.stage.defaultTextFormat.underline !== !1,
          ne.BOOLEAN,
          this.stage.defaultTextFormat.underline !== (r.textDecoration === "underline"),
        ),
      ),
      e.push(
        new ne(
          class_3436.KERNING,
          this.stage.defaultTextFormat.kerning !== !1,
          ne.BOOLEAN,
          this.stage.defaultTextFormat.kerning !== r.kerning,
        ),
      ),
      e.push(
        new ne(
          class_3436.SPACING,
          this.stage.defaultTextFormat.letterSpacing,
          ne.NUMBER,
          this.stage.defaultTextFormat.letterSpacing !== r.letterSpacing,
        ),
      ),
      e.push(
        new ne(
          class_3436.LEADING,
          this.stage.defaultTextFormat.leading,
          ne.NUMBER,
          this.stage.defaultTextFormat.leading !== r.leading,
        ),
      ),
      e
    );
  }
  resetExplicitStyle() {
    this._r16b7655587c765 = new Ia();
  }
  _rf5f4cf2e874967(e) {
    let r = this.stage._rd835b98973eaf7();
    if (!r || !r.font) return e;
    let t;
    for (let s of a._rd2258a2ebb7e08) s.fontName.toLowerCase() === String(r.font).toLowerCase() && (t = s);
    if (t == null || t._r4bbca9adc7b79e(e)) return e;
    let i = "";
    for (let s = 0; s < e.length; s++) {
      let o = e.charAt(s);
      !t._r4bbca9adc7b79e(o) &&
      o !== "\r" &&
      o !==
        `
`
        ? (i += a._rffad6dd54360ab[Math.floor(Math.random() * a._rffad6dd54360ab.length)])
        : (i += o);
    }
    return i;
  }
  onTextStyleChanged = n((e) => {
    (a._rd2b11259f17e28(this), this.refreshTextImage());
  }, "onTextStyleChanged");
  static _rd2b11259f17e28(e) {
    let r = e.stage,
      t = e._r16b7655587c765,
      i = class_3390._r22c9347ecec607(e._textStyleName) ?? class_3390._r22c9347ecec607(class_3390.REGULAR) ?? new Ia(),
      s = r.defaultTextFormat.clone();
    (i.color || (i.color = 0),
      t.fontFamily || (s.font = i.fontFamily),
      t.fontSize || (s.size = i.fontSize),
      t.color || (s.color = i.color),
      t.fontWeight || (s.bold = i.fontWeight === l2.BOLD ? !0 : null),
      t.fontStyle || (s.italic = i.fontStyle === l2.ITALIC ? !0 : null),
      t.textDecoration || (s.underline = i.textDecoration === Ia.const_81 ? !0 : null),
      t.textIndent || (s.indent = i.textIndent),
      t.leading || (s.leading = i.leading),
      t.kerning || (s.kerning = i.kerning),
      t.letterSpacing || (s.letterSpacing = i.letterSpacing),
      t.antiAliasType ||
        (i.antiAliasType === ai.NORMAL
          ? (r.antiAliasType = ai.NORMAL)
          : ((r.antiAliasType = ai.ADVANCED), (r.gridFitType = ad.PIXEL))),
      t.sharpness || (r.sharpness = Number(i.sharpness)),
      t.thickness || (r.thickness = Number(i.thickness)),
      t.etchingColor == null && (e.etchingColor = Number(i.etchingColor)),
      t.etchingPosition == null && (e.etchingPosition = String(i.etchingPosition)),
      !i.fontWeight && !t.fontWeight && (s.bold = !1),
      !i.fontStyle && !t.fontStyle && (s.italic = !1),
      !i.textDecoration && !t.textDecoration && (s.underline = !1),
      !i.textIndent && !t.textIndent && (s.indent = 0),
      !i.leading && !t.leading && (s.leading = 0),
      !i.kerning && !t.kerning && (s.kerning = !1),
      !i.letterSpacing && !t.letterSpacing && (s.letterSpacing = 0),
      !i.antiAliasType && !t.antiAliasType && ((r.antiAliasType = ai.ADVANCED), (r.gridFitType = ad.PIXEL)),
      !i.sharpness && !t.sharpness && (r.sharpness = 0),
      !i.thickness && !t.thickness && (r.thickness = 0),
      i.etchingColor == null && t.etchingColor == null && (e.etchingColor = 0),
      i.etchingPosition == null && t.etchingPosition == null && (e.etchingPosition = Ia.BOTTOM),
      r._rf728d1a4d87da8(s),
      (r.embedFonts = UnkClass_97d37f._r39622b61201748(s.font ?? "")),
      (r.defaultTextFormat = s),
      (e._r495871518668b6 = s));
  }
  static _rdbf76e2f0c7089() {
    let e = new Map();
    return (
      e.set(class_3436.ALWAYS_SHOW_SELECTION, a._r72e7fbb045be94),
      e.set("background", a._r539b69f521908a),
      e.set("background_color", a._rd22820117c6633),
      e.set(class_3436.BOLD, a._ra2b1a4a8b7c7b5),
      e.set(class_3436.BORDER, a._rd4e191ab787162),
      e.set(class_3436.BORDER_COLOR, a._r65ac410a377967),
      e.set(class_3436.CONDENSE_WHITE, a._re0cae0bc15c2da),
      e.set("default_text_format", a._rb13eb253f17669),
      e.set(class_3436.ETCHING_COLOR, a._r61aff8eb8b15a7),
      e.set(class_3436.ETCHING_POSITION, a._r01545dcf91670b),
      e.set(class_3436.FONT_FACE, a._rdae68dbf88c486),
      e.set(class_3436.FONT_SIZE, a._r9ff7ae0889b48c),
      e.set(class_3436.GRID_FIT_TYPE, a._rcebb2f6eee6092),
      e.set(class_3436.ITALIC, a._r3af73851ff9dbd),
      e.set(class_3436.KERNING, a._rc41edc561b4d07),
      e.set(class_3436.MAX_CHARS, a._ref0537b65ed7fd),
      e.set(class_3436.MULTILINE, a._r556efa1562613b),
      e.set(class_3436.RESTRICT, a._rdbdafaad278915),
      e.set(class_3436.SPACING, a._rc8a8087fd1c6b1),
      e.set(class_3436.SHARPNESS, a._rd14a20262608a9),
      e.set(class_3436.THICKNESS, a._rc53aff2cddd7b0),
      e.set(class_3436.const_81, a._r9362a39bf6c153),
      e.set(class_3436.const_211, a._r8c1159fa2decdf),
      e.set("margins", a._r283e084218714a),
      e.set(class_3436.MAX_LINES, a._r845c0ba5fbe9a0),
      e.set(class_3436.LEADING, a._rd5e8333e69a485),
      e.set(class_3436.ANTIALIAS_TYPE, a._r80fdb756433d46),
      e.set(class_3436.AUTO_SIZE, a._r58ff44cb66c607),
      e.set(class_3436.MOUSE_WHEEL_ENABLED, a._r0772407376c301),
      e.set(class_3436.const_687, a._r0f44cf34d84910),
      e.set(class_3436.TEXT_STYLE, a._r034be4cb101436),
      e.set(class_3436.MARGIN_LEFT, a._rd5b8ce28ba4404),
      e.set(class_3436.MARGIN_TOP, a._r0840312e53befd),
      e.set(class_3436.MARGIN_RIGHT, a._rde5ba4b29c25b4),
      e.set(class_3436.MARGIN_BOTTOM, a._r4a3849e204651a),
      e.set(class_3436.const_602, a._rb3505750f4e8f8),
      e
    );
  }
  static _rbc7bc8c14d8e14(e) {
    let r = new _i(
      e.font,
      e.size,
      e.color,
      e.bold,
      e.italic,
      e.underline,
      e.url,
      e.target,
      e.align,
      e.leftMargin,
      e.rightMargin,
      e.indent,
      e.leading,
    );
    return ((r.kerning = e.kerning), (r.letterSpacing = e.letterSpacing), r);
  }
  static _r80fdb756433d46(e, r) {
    let t = r === ai.NORMAL ? ai.NORMAL : ai.ADVANCED;
    ((e._r16b7655587c765.antiAliasType = t), (e.stage.antiAliasType = t), e.refreshTextImage());
  }
  static _r72e7fbb045be94(e, r) {
    e.stage._r631e445de700b8 = !!r;
  }
  static _r539b69f521908a(e, r) {
    e.background = !!r;
  }
  static _rd22820117c6633(e, r) {
    e.color = Number(r);
  }
  static _rd4e191ab787162(e, r) {
    ((e.stage.border = !!r), e.refreshTextImage());
  }
  static _r65ac410a377967(e, r) {
    ((e.stage.borderColor = Number(r)), e.refreshTextImage());
  }
  static _re0cae0bc15c2da(e, r) {
    ((e.stage._rac4732cd1a883c = !!r), e.refreshTextImage());
  }
  static _rb13eb253f17669(e, r) {
    r instanceof _i && ((e.stage.defaultTextFormat = r), e.refreshTextImage());
  }
  static _r7681f04da8c640(e, r) {
    e.stage.embedFonts = !!r;
  }
  static _rcebb2f6eee6092(e, r) {
    ((e.stage.gridFitType = String(r)), e.refreshTextImage());
  }
  static _ref0537b65ed7fd(e, r) {
    ((e.stage._r4c2336e24c69cc = Number(r)), e.refreshTextImage());
  }
  static _r0772407376c301(e, r) {
    e.stage._rbf8a933bf67bb1 = !!r;
  }
  static _r556efa1562613b(e, r) {
    ((e.stage.multiline = !!r), e.refreshTextImage());
  }
  static _rdbdafaad278915(e, r) {
    e.stage.restrict = r == null ? null : String(r);
  }
  static _rd14a20262608a9(e, r) {
    ((e.stage.sharpness = Number(r)),
      e.refreshTextImage(),
      (e._r16b7655587c765.sharpness = Number(r)));
  }
  static _r0f44cf34d84910(e, r) {
    ((e.stage.textColor = Number(r)),
      e.refreshTextImage(),
      (e._r16b7655587c765.color = Number(r)));
  }
  static _rc53aff2cddd7b0(e, r) {
    ((e.stage.thickness = Number(r)),
      e.refreshTextImage(),
      (e._r16b7655587c765.thickness = Number(r)));
  }
  static _r8c1159fa2decdf(e, r) {
    ((e.stage.wordWrap = !!r), e.refreshTextImage());
  }
  static _rb3505750f4e8f8(e, r) {
    ((e._rdc6e54f251c540 = String(r ?? "")), e.refreshTextImage());
  }
  static _r61aff8eb8b15a7(e, r) {
    ((e._etchingColor = Number(r)),
      e.refreshTextImage(),
      (e._r16b7655587c765.etchingColor = e._etchingColor));
  }
  static _r01545dcf91670b(e, r) {
    ((e.var_3520 = String(r)),
      e.refreshTextImage(),
      (e._r16b7655587c765.etchingPosition = e.var_3520));
  }
  _rda35139e3f58ec() {
    if (this._events != null) {
      let e = y.allocate(y.const_362, this, null);
      (this._events.dispatchEvent(e), e.recycle());
    }
  }
  static _r58ff44cb66c607(e, r) {
    let t = String(r);
    if (t === e._r0694eee6c169a5) return;
    ((e._r0694eee6c169a5 = t), (e.stage.autoSize = t !== nr.NONE ? nr.const_27 : nr.NONE));
    let i = e.defaultTextFormat.clone();
    switch (t) {
      case nr.CENTER:
        i.align = _s.CENTER;
        break;
      case nr.RIGHT:
        i.align = _s.RIGHT;
        break;
      default:
        i.align = _s.const_27;
    }
    (e._rf728d1a4d87da8(a._rbc7bc8c14d8e14(i)), (e.defaultTextFormat = i), e.refreshTextImage());
  }
  static _ra2b1a4a8b7c7b5(e, r) {
    let t = e.defaultTextFormat.clone();
    ((t.bold = !!r),
      e._rf728d1a4d87da8(a._rbc7bc8c14d8e14(t)),
      (e.defaultTextFormat = t),
      (e._r16b7655587c765.fontWeight = Ia.BOLD));
  }
  static _rdae68dbf88c486(e, r) {
    let t = e.defaultTextFormat.clone();
    ((t.font = String(r)),
      e._rf728d1a4d87da8(a._rbc7bc8c14d8e14(t)),
      (e.stage.embedFonts = UnkClass_97d37f._r39622b61201748(String(r))),
      (e.defaultTextFormat = t),
      (e._r16b7655587c765.fontFamily = String(r)));
  }
  static _r9ff7ae0889b48c(e, r) {
    let t = e.defaultTextFormat.clone();
    ((t.size = Number(r)),
      e._rf728d1a4d87da8(a._rbc7bc8c14d8e14(t)),
      (e.defaultTextFormat = t),
      (e._r16b7655587c765.fontSize = Number(r)));
  }
  static _r584c5c7acd47f1(e, r) {
    r != null &&
      (e._localized &&
        (e.context?._r33082b59b9c769(e._caption.slice(2, e._caption.indexOf("}")), e),
        (e._localized = !1)),
      (e._caption = String(r)),
      e._caption.charAt(0) === "$" && e._caption.charAt(1) === "{"
        ? (e.context?._r0fab3c6d38398a(e._caption.slice(2, e._caption.indexOf("}")), e),
          (e._localized = !0))
        : ((e.stage.htmlText = e._caption), e.refreshTextImage()));
  }
  static _r3af73851ff9dbd(e, r) {
    let t = e.defaultTextFormat.clone();
    ((t.italic = !!r),
      e._rf728d1a4d87da8(a._rbc7bc8c14d8e14(t)),
      (e.defaultTextFormat = t),
      (e._r16b7655587c765.fontStyle = r ? Ia.ITALIC : Ia.NORMAL));
  }
  static _rc41edc561b4d07(e, r) {
    let t = e.defaultTextFormat.clone();
    t.kerning = !!r;
    let i = a._rbc7bc8c14d8e14(t);
    ((i.kerning = !!r), e._rf728d1a4d87da8(i), (e.defaultTextFormat = t), (e._r16b7655587c765.kerning = !!r));
  }
  static _r283e084218714a(e, r) {
    let t = r;
    (e._rdde597efc6d476
      ? e._rdde597efc6d476.assign(Number(t.left), Number(t.top), Number(t.right), Number(t.bottom), (i) =>
          e._rfa062aaf5669d6(i),
        )
      : (e._rdde597efc6d476 = new s0(Number(t.left), Number(t.top), Number(t.right), Number(t.bottom), (i) =>
          e._rfa062aaf5669d6(i),
        )),
      e.refreshTextImage());
  }
  static _rd5b8ce28ba4404(e, r) {
    e._rdde597efc6d476 && e._rdde597efc6d476.left !== Number(r) && (e.margins.left = Number(r));
  }
  static _r0840312e53befd(e, r) {
    e._rdde597efc6d476 && e._rdde597efc6d476.top !== Number(r) && (e.margins.top = Number(r));
  }
  static _rde5ba4b29c25b4(e, r) {
    e._rdde597efc6d476 && e._rdde597efc6d476.right !== Number(r) && (e.margins.right = Number(r));
  }
  static _r4a3849e204651a(e, r) {
    e._rdde597efc6d476 && e._rdde597efc6d476.bottom !== Number(r) && (e.margins.bottom = Number(r));
  }
  static _r845c0ba5fbe9a0(e, r) {
    ((e._maxLines = Number(r)), e.refreshTextImage());
  }
  static _rd5e8333e69a485(e, r) {
    let t = e.defaultTextFormat.clone();
    t.leading = Number(r);
    let i = a._rbc7bc8c14d8e14(t);
    ((i.leading = Number(r)),
      e._rf728d1a4d87da8(i),
      (e.defaultTextFormat = t),
      (e._r16b7655587c765.leading = Number(r)));
  }
  static _rc8a8087fd1c6b1(e, r) {
    let t = e.defaultTextFormat.clone();
    t.letterSpacing = Number(r);
    let i = a._rbc7bc8c14d8e14(t);
    ((i.letterSpacing = Number(r)),
      e._rf728d1a4d87da8(i),
      (e.defaultTextFormat = t),
      (e._r16b7655587c765.letterSpacing = Number(r)));
  }
  static _r499cdf622b6cf6(e, r) {
    if (!(r instanceof Ia)) return;
    let t = class_3390._r22c9347ecec607(r.name);
    (t && !t.equals(r) && (t = class_3390._rd5cf2974586ece(r.toString()) ?? null),
      t && ((e._textStyleName = t.name), a._rd2b11259f17e28(e), e.refreshTextImage()));
  }
  static _r034be4cb101436(e, r) {
    let t = String(r),
      i = class_3390._r22c9347ecec607(t) ?? class_3390._rd5cf2974586ece(t) ?? null;
    if (
      (i
        ? ((e._textStyleName = i.name), a._rd2b11259f17e28(e), e.refreshTextImage())
        : ((i = class_3390.parseCSS(t)[0]),
          i && (class_3390._r22c9347ecec607(i.name) || class_3390._r14e5354d420daf(i.name, i), a._r499cdf622b6cf6(e, i))),
      e._r0694eee6c169a5 === nr.CENTER)
    ) {
      let s = new _i();
      ((s.align = _s.CENTER), e.stage._rf728d1a4d87da8(s));
    }
  }
  static _r9362a39bf6c153(e, r) {
    let t = e.defaultTextFormat.clone();
    ((t.underline = !!r),
      e._rf728d1a4d87da8(a._rbc7bc8c14d8e14(t)),
      (e.defaultTextFormat = t),
      (e._r16b7655587c765.textDecoration = r ? Ia.const_81 : Ia.NONE));
  }
}
