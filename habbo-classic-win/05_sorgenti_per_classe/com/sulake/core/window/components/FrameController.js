// Extracted from HabboAirLauncher.deobf.js, line 131598.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/FrameController.as
// Obfuscated name: _i0f63d6b226b46e

class a extends ContainerController {
  static {
    n(this, "FrameController");
  }
  static TAG_TITLE_ELEMENT = "_TITLE";
  static TAG_HEADER_ELEMENT = "_HEADER";
  static TAG_CONTENT_ELEMENT = "_CONTENT";
  static TAG_SCALER_ELEMENT = "_SCALER";
  var_606 = null;
  _header = null;
  _content = null;
  _rdde597efc6d476 = null;
  _ra23c907b3558a5 = null;
  _ready = !1;
  var_1506 = "";
  var_4189 = null;
  _rf7c1b9f8d02471 = n((e, r) => this.helpButtonProcedure(e, r), "_rf7c1b9f8d02471");
  get title() {
    return (
      this.var_606 == null && (this.var_606 = this.findChildByTag(a.TAG_TITLE_ELEMENT)),
      this.var_606
    );
  }
  get header() {
    return (
      this._header == null && (this._header = this.findChildByTag(a.TAG_HEADER_ELEMENT)),
      this._header
    );
  }
  get content() {
    return (
      this._content == null &&
        ((this._content = this.findChildByTag(a.TAG_CONTENT_ELEMENT)), this._r6466ebfc3ec8ab()),
      this._content
    );
  }
  get scaler() {
    return this.findChildByTag(a.TAG_SCALER_ELEMENT);
  }
  get margins() {
    return this._r70fb7bd73eb254();
  }
  get caption() {
    return super.caption;
  }
  set caption(e) {
    super.caption = e;
    try {
      let r = this.title;
      r !== null && (r.text = e);
    } catch {}
  }
  get color() {
    return super.color;
  }
  set color(e) {
    super.color = e;
    let r = [];
    this.groupChildrenWithTag(st.TAG_COLORIZE, r);
    for (let t of r) t.color = e;
  }
  get iterator() {
    let e = this.content;
    return e !== null && this._ready ? e.iterator : new ContainerIterator(this);
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    ((i |= N._re3bd61027cfd94),
      (i &= ~N.const_421),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _),
      (this._ready = !0),
      this.activate(),
      this.setupScaling());
    let h = this.findChildByName("header_button_help");
    (h !== null && (h.procedure = this._rf7c1b9f8d02471),
      (this.helpPage = this.var_1506),
      (this._r18f46e6499eff0 = !1));
  }
  set _rb68382ff85a150(e) {
    this.var_4189 = e;
  }
  get helpPage() {
    return this.var_1506;
  }
  set helpPage(e) {
    this.var_1506 = e;
    let r = this.findChildByName("header_button_help");
    r !== null && (r.visible = this.var_1506 !== "");
  }
  get menuButton() {
    return this.findChildByName("header_button_menu");
  }
  get _r18f46e6499eff0() {
    let e = this.menuButton;
    return e !== null && e.visible;
  }
  set _r18f46e6499eff0(e) {
    let r = this.menuButton;
    r !== null && (r.visible = e);
  }
  helpButtonProcedure(e, r) {
    e.type === u.CLICK &&
      this.var_1506 !== "" &&
      this.var_4189 !== null &&
      this.var_4189(this.var_1506);
  }
  buildFromXML(e, r = null) {
    let t = this.content,
      i = this.context,
      s = t !== null && i !== null && i._re088f75d913ba4()._r65e61e0e6e4930(e, t, r) !== null;
    return (s && this._r6466ebfc3ec8ab(), s);
  }
  setParamFlag(e, r = !0) {
    (super.setParamFlag(e, r), this.setupScaling());
  }
  setupScaling() {
    let e = this.scaler,
      r = this.testParamFlag(N.WINDOW_PARAM_MOUSE_SCALING_TARGET),
      t = this.testParamFlag(N.WINDOW_PARAM_VERTICAL_MOUSE_SCALING_TRIGGER),
      i = this.testParamFlag(N.WINDOW_PARAM_HORIZONTAL_MOUSE_SCALING_TRIGGER);
    e !== null &&
      (e.setParamFlag(N.WINDOW_PARAM_VERTICAL_MOUSE_SCALING_TRIGGER, t || r),
      e.setParamFlag(N.WINDOW_PARAM_HORIZONTAL_MOUSE_SCALING_TRIGGER, i || r),
      (e.visible = t || i || r));
  }
  resizeToFitContent() {
    let e = this.content;
    e !== null && st.resizeToAccommodateChildren(e);
  }
  _r52ecf8fa498fd6(e) {
    let r = this.content;
    if (r === null) return;
    let t = r.param,
      i = r.param & (N._rcf781b4b002bb2 | N._raccb3b4229be11);
    i && r.setParamFlag(N._rcf781b4b002bb2 | N._raccb3b4229be11, !1);
    let s = r.param & N._rb064687887f11c;
    (s && r.setParamFlag(N._rb064687887f11c, !1),
      (r.rectangle = new D(e.left, e.top, e.right - e.left, e.bottom - e.top)),
      (i || s) && (r.setParamFlag(4294967295, !1), r.setParamFlag(t, !0)));
  }
  get properties() {
    let e = super.properties,
      r = this._rdde597efc6d476 !== null,
      t = this.content;
    return (
      e.push(new ne(class_3436.HELP_PAGE, this.var_1506, ne.STRING, this.var_1506 !== "")),
      t !== null &&
        (e.push(new ne(class_3436.MARGIN_LEFT, t.left, ne.INT, r)),
        e.push(new ne(class_3436.MARGIN_TOP, t.top, ne.INT, r)),
        e.push(new ne(class_3436.MARGIN_RIGHT, this.var_31 - t.right, ne.INT, r)),
        e.push(new ne(class_3436.MARGIN_BOTTOM, this.var_35 - t.bottom, ne.INT, r))),
      e
    );
  }
  set properties(e) {
    let r = [];
    for (let t of e)
      switch (t.key) {
        case class_3436.HELP_PAGE:
          this.helpPage = t.value;
          break;
        case class_3436.MARGIN_LEFT:
          this._rbc0291fbe477ac(t) || r.push(t);
          break;
        case class_3436.MARGIN_TOP:
          this._rbc0291fbe477ac(t) || r.push(t);
          break;
        case class_3436.MARGIN_RIGHT:
          this._rbc0291fbe477ac(t) || r.push(t);
          break;
        case class_3436.MARGIN_BOTTOM:
          this._rbc0291fbe477ac(t) || r.push(t);
          break;
      }
    (r.length > 0 && (this._ra23c907b3558a5 = (this._ra23c907b3558a5 ?? []).concat(r)),
      (super.properties = e));
  }
  _r70fb7bd73eb254() {
    let e = this._content ?? this.findChildByTag(a.TAG_CONTENT_ELEMENT);
    return e === null
      ? null
      : ((this._content = e),
        this._rdde597efc6d476 == null &&
          (this._rdde597efc6d476 = new s0(
            e.left,
            e.top,
            e.right,
            e.bottom,
            this._r52ecf8fa498fd6.bind(this),
          )),
        this._rdde597efc6d476);
  }
  _rbc0291fbe477ac(e) {
    let r = this._r70fb7bd73eb254();
    if (r === null) return !1;
    switch (e.key) {
      case class_3436.MARGIN_LEFT:
        r.left = e.value;
        break;
      case class_3436.MARGIN_TOP:
        r.top = e.value;
        break;
      case class_3436.MARGIN_RIGHT:
        r.right = this.var_31 - e.value;
        break;
      case class_3436.MARGIN_BOTTOM:
        r.bottom = this.var_35 - e.value;
        break;
    }
    return !0;
  }
  _r6466ebfc3ec8ab() {
    let e = this._ra23c907b3558a5;
    if (!(e === null || this._r70fb7bd73eb254() === null)) {
      this._ra23c907b3558a5 = null;
      for (let r of e) this._rbc0291fbe477ac(r);
    }
  }
}
