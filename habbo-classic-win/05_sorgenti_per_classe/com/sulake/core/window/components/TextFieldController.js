// Extracted from HabboAirLauncher.deobf.js, line 136600.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/TextFieldController.as
// Obfuscated name: _i93d18c4bf9ff5b

class a extends r1 {
  static {
    n(this, "TextFieldController");
  }
  static _WORD_DELIMS = /[~%&!\\;:"',<>?#\s.\-()=\[\]{}\^_]/g;
  _r42ff457680ff2b;
  var_2281 = 500;
  var_931 = "";
  _r61c6386d064709 = !1;
  _r55d05bdebade4c = !1;
  _r216fdbc432f36a = !1;
  var_2160 = !0;
  _initialized = !1;
  _filters;
  _r29024b783451af = !1;
  var_1703 = new Map();
  constructWindow(e, r, t, i, s, o, d, c, f = null, l = null, b = 0, _ = "") {
    let h = !0;
    if (f != null) {
      for (let p of f)
        if (p.key === class_3436.const_1130) {
          h = p.value;
          break;
        }
    }
    (h && ((i &= ~N.const_421), (i |= N._re3bd61027cfd94)),
      (this._x = o.x),
      (this._y = o.y),
      (this.var_31 = o.width),
      (this.var_35 = o.height),
      (this.stage = this.getGraphicContext(!0).getDisplayObject()),
      (this.stage.antiAliasType = ai.ADVANCED),
      (this.stage.gridFitType = ad.PIXEL),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _),
      (this._r42ff457680ff2b ??= new Pf(1, 90, 16777215, 1, 0, 0)),
      (this._filters ??= []),
      h &&
        (this.stage.addEventListener(UnkClass_6d7150.TEXT_INPUT, this._rfaccf8092999f8),
        this.stage.addEventListener(KeyboardControl._re9c7558bf2dcfb, this._r5977127cda351f),
        this.stage.addEventListener(KeyboardControl._re93f9c3b193f77, this._r3d3521f0952f54),
        this.stage.addEventListener(M._ra3d93f66ba77c2, this._r3685bf571ee647),
        this.stage.addEventListener(FocusManager._rd3be293e25cc6a, this._rcd565366a10a4f),
        this.stage.addEventListener(FocusManager._r8365d86c670be6, this._rcd565366a10a4f),
        this.stage.addEventListener(M._r4b0396f57c9367, this._r23dce707552fa8)),
      (this.antiAliasType = ai.ADVANCED),
      (this.gridFitType = ad.PIXEL),
      (this._r5e1a9574d869f6 = !1),
      (this._initialized = !0),
      this.refreshTextImage());
  }
  get focused() {
    return this.stage.stage?.focus === this.stage;
  }
  enable() {
    return super.enable()
      ? ((this.stage.type = this.var_2160 ? eo.INPUT : eo.var_4430), !0)
      : ((this.stage.type = eo.var_4430), !1);
  }
  disable() {
    return super.disable()
      ? ((this.stage.type = eo.var_4430), !0)
      : ((this.stage.type = this.var_2160 ? eo.INPUT : eo.var_4430), !1);
  }
  get editable() {
    return this.var_2160;
  }
  set editable(e) {
    if (!this.var_2160 && e && this.getParamFlag(N.const_421))
      throw new Error("Editable text field needs its own graphics context");
    ((this.var_2160 = e),
      (this.stage.type = e && this.isEnabled() ? eo.INPUT : eo.var_4430));
  }
  get autoSize() {
    return super.autoSize;
  }
  get background() {
    return this.stage.background;
  }
  get text() {
    return this.stage.text;
  }
  get etchingColor() {
    return super.etchingColor;
  }
  get immediateClickMode() {
    return super.immediateClickMode;
  }
  set immediateClickMode(e) {
    super.immediateClickMode = e;
  }
  get selectable() {
    return this.stage.selectable;
  }
  set selectable(e) {
    this.stage.selectable = e;
  }
  get _rfd454f4d33a88a() {
    return this.stage._rfd454f4d33a88a;
  }
  set _rfd454f4d33a88a(e) {
    this.stage._rfd454f4d33a88a = e;
  }
  get _r6608f6ec7df364() {
    return 0;
  }
  set _r6608f6ec7df364(e) {}
  get toolTipCaption() {
    return this.var_931 ?? "";
  }
  set toolTipCaption(e) {
    this.var_931 = e ?? "";
  }
  get toolTipDelay() {
    return this.var_2281 ?? 0;
  }
  set toolTipDelay(e) {
    this.var_2281 = e;
  }
  get _rc7fd5130f71f4c() {
    return this._r61c6386d064709 ?? !1;
  }
  set _rc7fd5130f71f4c(e) {
    this._r61c6386d064709 = e;
  }
  get _r824ae5dcbb4686() {
    return this._r55d05bdebade4c ?? !1;
  }
  set _r824ae5dcbb4686(e) {
    this._r55d05bdebade4c = e;
  }
  get _r6effef0b58798d() {
    return this._raf640b58dc0fd1;
  }
  set _r6effef0b58798d(e) {
    this._raf640b58dc0fd1 = e;
  }
  get _rfaf84453b22a8b() {
    return this.stage._rfaf84453b22a8b;
  }
  get _r10903ebf1592aa() {
    return this.stage._r10903ebf1592aa;
  }
  setMouseCursorForState(e, r) {
    let t = this.var_1703.get(e) ?? class_3421.DEFAULT;
    return (
      r === class_3421.DEFAULT || r === -1
        ? this.var_1703.delete(e)
        : this.var_1703.set(e, r),
      t
    );
  }
  getMouseCursorByState(e) {
    let r = this.var_1703.get(e) ?? class_3421.DEFAULT;
    return r !== class_3421.DEFAULT
      ? r
      : !this._r55d05bdebade4c && this.selectable && this.isEnabled()
        ? class_3421.IBEAM
        : class_3421.DEFAULT;
  }
  showToolTip(e) {
    throw new Error("Unimplemented method!");
  }
  hideToolTip() {
    throw new Error("Unimplemented method!");
  }
  set autoSize(e) {
    ((super.autoSize = e), this._rfbb792fc8b4729());
  }
  set background(e) {
    ((this.stage.background = e),
      (this._background = e),
      (this._fillColor = this._background
        ? this._fillColor | this._r1f783655234401
        : this._fillColor & 16777215));
  }
  _r1c386c8571c5d9(e, r) {
    this.stage._r1c386c8571c5d9(e, r);
  }
  getGraphicContext(e) {
    return (
      e &&
        !this._graphics &&
        (this._graphics = new Un(`GC {${this._name}}`, Un.const_1322, this.rectangle)),
      this._graphics
    );
  }
  dispose() {
    this._disposed ||
      (this._context._rc52f27dfc6ba9b()._r818e869163b268()._r3ad9d8555857c0(this),
      (this._r216fdbc432f36a = !1),
      this.stage &&
        ((this.stage._r91f15adc15f137 = !1),
        this.focused && this.unfocus(),
        this.stage.removeEventListener(KeyboardControl._re9c7558bf2dcfb, this._r5977127cda351f),
        this.stage.removeEventListener(KeyboardControl._re93f9c3b193f77, this._r3d3521f0952f54),
        this.stage.removeEventListener(M._ra3d93f66ba77c2, this._r3685bf571ee647),
        this.stage.removeEventListener(FocusManager._rd3be293e25cc6a, this._rcd565366a10a4f),
        this.stage.removeEventListener(FocusManager._r8365d86c670be6, this._rcd565366a10a4f),
        this.stage.removeEventListener(M._r4b0396f57c9367, this._r23dce707552fa8)),
      super.dispose());
  }
  set text(e) {
    ((super.text = e), this._rfbb792fc8b4729());
  }
  focus() {
    let e = super.focus();
    return (
      e &&
        this.stage.stage &&
        this.stage.stage.focus !== this.stage &&
        (this.stage.stage.focus = this.stage),
      e
    );
  }
  unfocus() {
    return (
      this.stage.stage?.focus === this.stage &&
        (this.stage.stage.focus = null),
      super.unfocus()
    );
  }
  update(e, r) {
    let t = super.update(e, r);
    switch (r.type) {
      case y.const_768:
      case u.DOWN:
        this.focus();
        break;
      case y.const_755:
        e === this &&
          ((this.stage.width = this.width), (this.stage.height = this.height));
        break;
    }
    return (e === this && Ci.processInteractiveWindowEvents(this, r), t);
  }
  _rfbb792fc8b4729() {
    if (
      !(!this._initialized || this.autoSize === nr.NONE || !this._r39d375fb795d62()) &&
      (this.var_31 !== this.stage.width ||
        this.var_35 !== this.stage.height)
    ) {
      let e = this.stage._r87bd5864f2eca8(new E(this.stage.x, this.stage.y)),
        r = new E();
      this.getGlobalPosition(r);
      let t = new E(e.x - r.x, e.y - r.y);
      this.setRectangle(
        this._x + t.x,
        this._y + t.y,
        this.stage.width,
        this.stage.height,
      );
    }
  }
  _r39d375fb795d62() {
    return !0;
  }
  set filters(e) {
    ((this._r29024b783451af = !0), (this._filters = e), this.updateFilters());
  }
  get filters() {
    return this._filters;
  }
  set etchingColor(e) {
    ((this._r29024b783451af = !0), (super.etchingColor = e));
  }
  refreshTextImage(e = !1) {
    let r = !1;
    if (
      (this.updateFilters(),
      this.var_31 !== this.stage.width &&
        (this.autoSize !== nr.NONE
          ? ((this.width = this.stage.width), (r = !0))
          : (this.stage.width = this.width)),
      this.var_35 !== this.stage.height &&
        (this.autoSize !== nr.NONE
          ? ((this.height = this.stage.height), (r = !0))
          : (this.stage.height = this.height)),
      !r && !e && this._events)
    ) {
      let t = y.allocate(y.const_755, this, null);
      (this._events.dispatchEvent(t), t.recycle());
    }
  }
  _rbe7c4562eddb26() {
    this._r3685bf571ee647(null);
  }
  set localization(e) {
    super.localization = this._raf640b58dc0fd1 ? this._caption : e;
  }
  _r4053b04c2c18a1(e, r) {
    let t = this._r7b0201ad66b552(e, r),
      i = this.stage.text,
      s = a.getWordPositions(i),
      o = "";
    for (let d = 0; d < s.length; d++) {
      let c = s[d],
        f = i.length;
      if ((d + 1 < s.length && (f = s[d + 1] - 1), t >= c && t <= f)) {
        o = i.substring(c, f);
        break;
      }
    }
    return o;
  }
  get properties() {
    let e = Ci.readInteractiveWindowProperties(this, super.properties);
    return (
      e.push(this.createProperty(class_3436.const_1130, this.var_2160)),
      e.push(this.createProperty(class_3436.FOCUS_CAPTURER, this._r216fdbc432f36a)),
      e.push(this.createProperty(class_3436.const_736, this.stage.selectable)),
      e.push(this.createProperty(class_3436.const_869, this.stage._rfd454f4d33a88a)),
      e.push(this.createProperty(class_3436.DISPLAY_RAW, this._raf640b58dc0fd1)),
      e
    );
  }
  set properties(e) {
    Ci._r94383236ca76df(this, e);
    for (let r of e)
      switch (r.key) {
        case class_3436.FOCUS_CAPTURER:
          ((this._r216fdbc432f36a = r.value),
            this._r216fdbc432f36a &&
              this._context._rc52f27dfc6ba9b()._r818e869163b268()._r03c99e92d7aa86(this),
            (this.stage._r91f15adc15f137 = this._r216fdbc432f36a));
          break;
        case class_3436.const_736:
          this.stage.selectable = r.value;
          break;
        case class_3436.const_1130:
          this.editable = r.value;
          break;
        case class_3436.const_869:
          this.stage._rfd454f4d33a88a = r.value;
          break;
        case class_3436.DISPLAY_RAW:
          this._raf640b58dc0fd1 = r.value;
          break;
      }
    super.properties = e;
  }
  static getWordPositions(e) {
    let r = [0],
      t,
      i = new RegExp(a._WORD_DELIMS);
    for (; (t = i.exec(e)) != null;) t.index < e.length && r.push(t.index + 1);
    return r;
  }
  updateFilters() {
    if (this._r29024b783451af)
      if (
        ((this._r29024b783451af = !1),
        (this._r42ff457680ff2b ??= new Pf(1, 90, 16777215, 1, 0, 0)),
        (this._filters ??= []),
        (this._etchingColor & 4278190080) !== 0)
      ) {
        ((this._r42ff457680ff2b.color = this._etchingColor & 16777215),
          (this._r42ff457680ff2b.alpha = ((this._etchingColor >> 24) & 255) / 255));
        let e = this._filters.slice();
        (e.push(this._r42ff457680ff2b), (this.getGraphicContext(!0).filters = e));
      } else this.getGraphicContext(!0).filters = this._filters;
  }
  _ra632ce69d6b111(e) {
    let r = !1;
    if (
      this.multiline &&
      this._r79e0cd188e1c70 > 0 &&
      ((r = this._r99f9b16cafb2f2 > this._r79e0cd188e1c70), e != null)
    ) {
      let t = this.stage.text,
        i = this.stage._r57733ec36e34c0;
      ((this.stage.text = t.substring(0, i) + e + t.substring(i, t.length)),
        this._r99f9b16cafb2f2 > this._r79e0cd188e1c70 && (r = !0),
        (this.stage.text = t));
    }
    return r;
  }
  _rfaccf8092999f8 = n((e) => {
    this._ra632ce69d6b111(e.text) && e.preventDefault();
  }, "_rfaccf8092999f8");
  _r5977127cda351f = n((e) => {
    try {
      this._caption = this.stage.text;
      let r = sr.allocate(sr.const_1081, e, this, null);
      if ((this.update(this, r), this.disposed)) return;
      for (let t of this._context?.inputEventTrackers ?? []) t._r8725146839fe16(r, this);
      r.recycle();
    } catch (r) {
      this._context.handleError(of.ERROR_DURING_EVENT_HANDLING, r instanceof Error ? r : new Error(String(r)));
    }
  }, "_r5977127cda351f");
  _r3d3521f0952f54 = n((e) => {
    try {
      this._caption = this.stage.text;
      let r = sr.allocate(sr.const_900, e, this, null);
      if ((this.update(this, r), this.disposed)) return;
      for (let t of this._context?.inputEventTrackers ?? []) t._r8725146839fe16(r, this);
      r.recycle();
    } catch (r) {
      this._context.handleError(of.ERROR_DURING_EVENT_HANDLING, r instanceof Error ? r : new Error(String(r)));
    }
  }, "_r3d3521f0952f54");
  _r3685bf571ee647 = n((e) => {
    try {
      ((this._caption = this.stage.text), this._rfbb792fc8b4729());
      let r = y.allocate(y.WINDOW_EVENT_CHANGE, this, null);
      (this.update(this, r), r.recycle());
    } catch (r) {
      this._context.handleError(of.ERROR_DURING_EVENT_HANDLING, r instanceof Error ? r : new Error(String(r)));
    }
  }, "_r3685bf571ee647");
  _rcd565366a10a4f = n((e) => {
    try {
      e.type === FocusManager._rd3be293e25cc6a
        ? this.getStateFlag(class_1948.const_138) || this.focus()
        : e.type === FocusManager._r8365d86c670be6 && this.getStateFlag(class_1948.const_138) && this.unfocus();
    } catch (r) {
      this._context.handleError(of.ERROR_DURING_EVENT_HANDLING, r instanceof Error ? r : new Error(String(r)));
    }
  }, "_rcd565366a10a4f");
  _r23dce707552fa8 = n((e) => {
    try {
      this.getStateFlag(class_1948.const_138) && this.unfocus();
    } catch (r) {
      this._context.handleError(of.ERROR_DURING_EVENT_HANDLING, r instanceof Error ? r : new Error(String(r)));
    }
  }, "_r23dce707552fa8");
}
