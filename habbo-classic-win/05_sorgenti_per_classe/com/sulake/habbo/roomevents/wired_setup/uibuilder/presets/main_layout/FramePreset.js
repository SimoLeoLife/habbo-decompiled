// Estratto da HabboAirLauncher.deobf.js, riga 352777.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/main_layout/FramePreset.as
// Nome offuscato: _i2dc16b5e8d90f5

class a extends WiredUIPreset {
  static {
    n(this, "FramePreset");
  }
  static _r12a5389b7005b2 = 0;
  static _r4b452ea0d5056b = 1;
  static MENU_COPY_INTO = 2;
  static MENU_CLEAR_PICKS = 3;
  static MENU_RESET = 4;
  static MENU_OPEN_CREATOR_TOOLS = 5;
  static MENU_SAVE = 6;
  static MENU_CLOSE = 7;
  static _ra50c2eb488c314 = 1;
  _frame;
  _headerPreset = null;
  var_295 = null;
  _r6509a5586f3249 = null;
  var_2897 = null;
  _holderKey = null;
  _code = -1;
  _r4b3c352b764b24 = 0;
  _rbb156ff11a3e87 = 0;
  _rd8d7420cd3fe50 = !1;
  _r021fd695c3859e = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t, i, s = !1, o = !1, d = null) {
    ((this.var_2897 = r),
      (this._holderKey = t),
      (this._code = i),
      (this._r021fd695c3859e = d),
      (this._frame = this.var_40.createFrame()),
      (this._r4b3c352b764b24 = this._frame.width - this._frame.margins.right + this._frame.margins.left),
      (this._rbb156ff11a3e87 = this._frame.height - this._frame.margins.bottom + this._frame.margins.top),
      this._rfcc8e4122982c3(e),
      this.var_295.window.addEventListener(y.const_755, this._r60f9f322fee466),
      this._frame.findChildByTag("close")?.addEventListener(u.CLICK, this._rf4d9b06810c6a7),
      this._frame.content.addChild(this.var_295.window),
      (this._frame.color = this.var_40.frameColor),
      s &&
        (this._frame.setParamFlag(N.WINDOW_PARAM_MOUSE_SCALING_TARGET, !0),
        this._frame.addEventListener(y.const_755, this._r8e75b3dd8c0b53)),
      this._frame.menuButton != null &&
        o &&
        ((this._frame._r18f46e6499eff0 = !0),
        this._frame.menuButton.addEventListener(u.CLICK, this._r0f381a317f3164),
        this.createMenuPreset()));
  }
  _rfcc8e4122982c3(e) {
    let r = this.var_40.sectionSpacing,
      t = [],
      i = null,
      s = null,
      o = e;
    (this._r021fd695c3859e != null &&
      this._r021fd695c3859e._r8a024b8643dfb1 &&
      o.length > 0 &&
      o[0] instanceof Lc &&
      ((i = o[0]), (o = e.slice(1))),
      this._r021fd695c3859e != null &&
        this._r021fd695c3859e._r2c7f54e5f578c1 &&
        o.length > 0 &&
        o[o.length - 1] instanceof FooterPreset &&
        ((s = o[o.length - 1]), (o = o.slice(0, o.length - 1))));
    for (let d = 0; d < o.length; d += 1) {
      let c = o[d];
      if ((c instanceof Lc && (this._headerPreset = c), t.push(c), d < o.length - 1)) {
        let f = this.var_102.createSpacer(r);
        ((c._r73291abb71fede = f), t.push(f));
      }
    }
    if (this._r021fd695c3859e != null) {
      if (i != null || s != null) {
        let d = 0;
        (i != null && ((d += i.window.height + r), t.unshift(this.var_102.createSpacer(r))),
          s != null && ((d += s.window.height + r), t.push(this.var_102.createSpacer(r))));
        let c = Math.max(0, this._r021fd695c3859e.minHeight - d),
          f = Math.max(c, this._r021fd695c3859e.maxHeight - d),
          l = new ListScrollParams(this._r021fd695c3859e._r6caf4ffbb2367b, c, f, !1, !1),
          b = this.var_102._rbf068f2e953c45(t, l);
        b.spacing = 0;
        let _ = [];
        (i != null && _.push(i),
          _.push(b),
          s != null && _.push(s),
          (this.var_295 = this.var_102.createSimpleListView(!0, _)),
          (this.var_295.spacing = 0));
        return;
      }
      this.var_295 = this.var_102._rbf068f2e953c45(t, this._r021fd695c3859e);
    } else this.var_295 = this.var_102.createSimpleListView(!0, t);
    this.var_295.spacing = 0;
  }
  set title(e) {
    this._frame.caption = e;
  }
  _r0f381a317f3164 = n((e) => {
    this._r6509a5586f3249?._rea4647eff41e93();
  }, "_r0f381a317f3164");
  _r37c311b7935af8() {
    this._r6509a5586f3249 != null &&
      (this._r6509a5586f3249.setSelected(a.MENU_COPY_INTO, !1), this._rb458cbbf58f1c1());
  }
  _rb458cbbf58f1c1() {
    if (this._r6509a5586f3249 == null) return;
    let e = this._roomEvents.presetManager,
      r = this._roomEvents._rb3d0033404b557.hasWritePermission;
    (this._r6509a5586f3249._rd0d2a7f4f3ffe1(a._r12a5389b7005b2, !r),
      this._r6509a5586f3249._rd0d2a7f4f3ffe1(a._r4b452ea0d5056b, !r || !e._r559656ffea523c()),
      this._r6509a5586f3249._rd0d2a7f4f3ffe1(a.MENU_COPY_INTO, !r),
      this._r6509a5586f3249._rd0d2a7f4f3ffe1(
        a.MENU_CLEAR_PICKS,
        !r || e._ra92c81c3f48874().length + e._r81a3cda1ec1860().length === 0,
      ),
      this._r6509a5586f3249._rd0d2a7f4f3ffe1(a.MENU_RESET, !r),
      this._r6509a5586f3249._rd0d2a7f4f3ffe1(a.MENU_OPEN_CREATOR_TOOLS, !1),
      this._r6509a5586f3249._rd0d2a7f4f3ffe1(a.MENU_SAVE, !r),
      this._r6509a5586f3249._rd0d2a7f4f3ffe1(a.MENU_CLOSE, !1));
  }
  createMenuPreset() {
    let e = [
      new MenuItem(
        "${wiredfurni.params.menu.copy}",
        this._r9d8a2417e2f3b8,
        "${wiredfurni.params.menu.copy_paste.tooltip}",
      ),
      new MenuItem(
        "${wiredfurni.params.menu.paste}",
        this._r5a3f288afcbf06,
        "${wiredfurni.params.menu.copy_paste.tooltip}",
      ),
      new MenuItem(
        "${wiredfurni.params.menu.paste_into}",
        null,
        "${wiredfurni.params.menu.paste_into.tooltip}",
        !0,
      ),
      MenuPreset.SPACER,
      new MenuItem("${wiredfurni.params.menu.clear_picks}", this._rb18659dc10bd67),
      new MenuItem("${wiredfurni.params.menu.reset}", this._ra4b704ba25ee1c),
      MenuPreset.SPACER,
      new MenuItem("${wiredfurni.params.menu.open_menu}", this._rd63e924e026b89),
      MenuPreset.SPACER,
      new MenuItem(
        "${wiredfurni.params.menu.save}",
        this._re9e96ef1d9adce,
        "${wiredfurni.params.menu.save.tooltip}",
      ),
      new MenuItem("${wiredfurni.params.menu.close}", this._rd2b346b3fbde43),
    ];
    (this._holderKey === "action" &&
      this._code === ActionTypeCodes.RESET &&
      (e.push(MenuPreset.SPACER), e.push(new MenuItem("Erase from existence", this._raf49b23a4fe184))),
      (this._r6509a5586f3249 = this.var_102.createMenuPreset(e, this._frame.menuButton)));
  }
  _r8e75b3dd8c0b53 = n((e) => {
    this._rd8d7420cd3fe50 || this.resizeToWidth(this._frame.width);
  }, "_r8e75b3dd8c0b53");
  _r60f9f322fee466 = n((e) => {
    this._rd8d7420cd3fe50 || this.fixHeight();
  }, "_r60f9f322fee466");
  _rf4d9b06810c6a7 = n((e) => {
    this.var_2897?.();
  }, "_rf4d9b06810c6a7");
  get _r8c53b4302edd07() {
    return this._r6509a5586f3249 != null && this._r6509a5586f3249.getSelected(a.MENU_COPY_INTO);
  }
  get window() {
    return this._frame;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      (this._rd8d7420cd3fe50 = !0),
      (this._frame.width = e),
      this.var_295.resizeToWidth(e - this._r4b3c352b764b24),
      (this._rd8d7420cd3fe50 = !1),
      this.fixHeight());
  }
  get headerFrameBackground() {
    return this._frame.findChildByTag("wired_header_bg");
  }
  fixHeight() {
    this._rd8d7420cd3fe50 = !0;
    let e = this.var_295.window.height + this._rbb156ff11a3e87;
    ((this._frame.limits.minHeight = e),
      (this._frame.limits.maxHeight = e),
      (this._frame.height = e),
      (this._rd8d7420cd3fe50 = !1));
    let r = this.headerFrameBackground;
    r != null &&
      this._headerPreset != null &&
      (r.height =
        this._headerPreset.window.height +
        this._frame.margins.top +
        this.var_40.sectionSpacing);
  }
  get childPresets() {
    return this._r6509a5586f3249 == null
      ? [this.var_295]
      : [this.var_295, this._r6509a5586f3249];
  }
  dispose() {
    (this.var_295.window.removeEventListener(y.const_755, this._r60f9f322fee466),
      this._frame.removeEventListener(y.const_755, this._r8e75b3dd8c0b53),
      !this.disposed &&
        (super.dispose(),
        this._frame.dispose(),
        (this._frame = null),
        (this.var_295 = null),
        (this._r6509a5586f3249 = null),
        (this.var_2897 = null),
        (this._holderKey = null),
        (this._headerPreset = null)));
  }
  _r9d8a2417e2f3b8 = n(() => {
    this._roomEvents.presetManager._r135610b4bb010a();
  }, "_r9d8a2417e2f3b8");
  _r5a3f288afcbf06 = n(() => {
    this._roomEvents.presetManager._rb60e40de9d56fb();
  }, "_r5a3f288afcbf06");
  _rb18659dc10bd67 = n(() => {
    this._roomEvents.presetManager._rb83dbbaa3caed5();
  }, "_rb18659dc10bd67");
  _ra4b704ba25ee1c = n(() => {
    this._roomEvents.presetManager.resetToDefault();
  }, "_ra4b704ba25ee1c");
  _rd63e924e026b89 = n(() => {
    this._roomEvents._r6b6c989018eb05("wiredmenu/open");
  }, "_rd63e924e026b89");
  _re9e96ef1d9adce = n(() => {
    this._roomEvents.presetManager.update(a._ra50c2eb488c314);
  }, "_re9e96ef1d9adce");
  _rd2b346b3fbde43 = n(() => {
    this._roomEvents.presetManager.close();
  }, "_rd2b346b3fbde43");
  _raf49b23a4fe184 = n(() => {
    (this._roomEvents.send(new class_2888("wf15", `${this._holderKey ?? ""}${this._code}`)),
      this._roomEvents.presetManager.close());
  }, "_raf49b23a4fe184");
}
