// Estratto da HabboAirLauncher.deobf.js, riga 152891.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/tableview/TableCellView.as
// Nome offuscato: _i13478fabf83476

class a {
  constructor(e, r, t, i) {
    this.var_778 = e;
    this.var_1230 = r;
    this.var_2148 = t;
    this.var_87 = i;
    ((this._container = this.template.clone()),
      this._re3963b40ab7a5a(),
      this.initializeView(),
      this._container.addEventListener(u.DOUBLE_CLICK, this._rff43c7bb3dd892),
      this._container.addEventListener(u.DOWN, this.var_1230?._r3dfe81080c524f),
      this._container.addEventListener(u.OVER, this.var_1230?._rd7f5c0e042e8f1),
      this._container.addEventListener(u.OUT, this.var_1230?._rad04679fe00657),
      this._container.addEventListener(u.CLICK_AWAY, this.var_1230?.onClickAway),
      (this._container.mouseThreshold = 0));
  }
  static {
    n(this, "TableCellView");
  }
  _disposed = !1;
  _container;
  _transitionTimer = null;
  reuse(e) {
    ((this.var_87 = e), this.initializeView());
  }
  update(e) {
    this.var_87 = e;
    let r = this._rbd0648327b709d(!1);
    r != null && r.visible
      ? this.updateContents()
      : (this.initializeView(), e.highlightOnChange && this.highlight());
  }
  _re3963b40ab7a5a() {
    this.var_778 == null ||
      this.var_2148 == null ||
      (this._container.width = this.var_778._rfe0e3df3d8672f(this.var_2148));
  }
  get container() {
    return this._container;
  }
  recycle() {
    this.var_87 = null;
  }
  dispose() {
    this._disposed ||
      (this._transitionTimer?.stop(),
      (this._transitionTimer = null),
      this._container.dispose(),
      (this.var_2148 = null),
      (this.var_778 = null),
      (this.var_1230 = null),
      (this.var_87 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  _rb8fd5407034265() {
    (this._rf8e17f3e55b020(this.getTextElement(!1)),
      this._rf8e17f3e55b020(this._rbd0648327b709d(!1)),
      this._rf8e17f3e55b020(this._r4a19ae7bb80646(!1)),
      this._rf8e17f3e55b020(this._red4087d0a43721(!1)));
  }
  _rf8e17f3e55b020(e) {
    e != null && (e.visible = !1);
  }
  _rf4a9005dc78456 = n((e) => {
    this.var_87?._r31a4c3ac57d03d?.();
  }, "_rf4a9005dc78456");
  onExtraButtonClick = n((e) => {
    this.var_87?._r869734bca8479d?.();
  }, "onExtraButtonClick");
  initializeView() {
    if (this.var_87 != null) {
      if ((this._rb8fd5407034265(), this.var_87.type === TableCell.var_1800)) {
        let e = this._r4a19ae7bb80646(!0);
        e != null && (e.visible = !0);
      } else if (this.var_87.type === TableCell.name_2) {
        let e = this.getTextElement(!0);
        e != null && (e.visible = !0);
      }
      this.updateContents();
    }
  }
  updateContents() {
    if (this.var_87 == null) return;
    let e = null;
    if (this.var_87.type === TableCell.var_1800) {
      let i = this.getLinkElement(!0);
      i != null && (i.text = String(this.var_87.contents ?? ""));
    } else
      this.var_87.type === TableCell.name_2 &&
        ((e = this.getTextElement(!0)),
        e != null &&
          ((e.textColor = this.var_87.textColor),
          (e.autoSize = this.column?.alignment ?? e.autoSize),
          (e.text = String(this.var_87.contents ?? ""))));
    let r = "";
    (this.var_87.tooltipText != null
      ? (r = this.var_87.tooltipText)
      : this.var_87.type === TableCell.name_2 &&
        e != null &&
        e._rfa49d450f1c158 &&
        (r = String(this.var_87.contents ?? "")),
      (this._container.toolTipCaption = r));
    let t = this._red4087d0a43721(!1);
    if (this.var_87.getExtraButtonRegion != null) {
      let i = this._red4087d0a43721(!0),
        s = this.getExtraButton(!0);
      i != null &&
        s != null &&
        ((i.visible = !0),
        (s.assetUri = this.var_87.getExtraButtonRegion),
        (i._r824ae5dcbb4686 = this.var_87._r869734bca8479d == null));
    } else t != null && (t.visible = !1);
  }
  get column() {
    return this.var_778?._rdedd6bb747dbf8(this.var_2148 ?? "") ?? null;
  }
  _ref02d8a610ce16 = n((e) => {
    let r = e,
      t = this._rbd0648327b709d(!1);
    t == null ||
      this.var_87 == null ||
      this.var_2148 == null ||
      (r.keyCode === 13 && this.var_87._r460273a11667bf
        ? (this.var_778?._rb9650a0ccb7cf3(
            t.text,
            this.var_1230?.object ?? null,
            this.var_2148,
          ),
          this.initializeView())
        : r.keyCode === 27 && this.initializeView());
  }, "_ref02d8a610ce16");
  _rb9e7388698fa62 = n((e) => {
    this.initializeView();
  }, "_rb9e7388698fa62");
  _rff43c7bb3dd892 = n((e) => {
    if (
      this.var_87 == null ||
      (!this.var_87._raf4140f973b214 && !this.var_87._r460273a11667bf)
    )
      return;
    this._rb8fd5407034265();
    let r = this._rbd0648327b709d(!0);
    r != null &&
      ((r.visible = !0),
      (r.text = this.var_87._r648d3221a328f8 ?? ""),
      (r.editable = this.var_87._r460273a11667bf),
      r.focus());
  }, "_rff43c7bb3dd892");
  getTextElement(e) {
    let r = this._container.findChildByName("element_text");
    return (r == null && e && (r = this.template._r891eba13a2be49(this._container)), r);
  }
  _rbd0648327b709d(e) {
    let r = this._container.findChildByName("element_input");
    return (
      r == null &&
        e &&
        ((r = this.template._rbbcfb6d6d63d27(this._container)),
        r.addEventListener(sr.const_1081, this._ref02d8a610ce16),
        r.addEventListener(sr.const_900, this._ref02d8a610ce16),
        r.addEventListener(y.WINDOW_EVENT_UNFOCUS, this._rb9e7388698fa62),
        r.addEventListener(u.CLICK_AWAY, this.var_1230?.onClickAway)),
      r
    );
  }
  _r4a19ae7bb80646(e) {
    let r = this._container.findChildByName("link_container");
    return (
      r == null &&
        e &&
        ((r = this.template._r6d1c8f4e846fd1(this._container)),
        r.addEventListener(u.DOWN, this.var_1230?._r3dfe81080c524f),
        r.addEventListener(u.OVER, this.var_1230?._rd7f5c0e042e8f1),
        r.addEventListener(u.OUT, this.var_1230?._rad04679fe00657),
        r.addEventListener(u.CLICK_AWAY, this.var_1230?.onClickAway),
        r.addEventListener(u.CLICK, this._rf4a9005dc78456),
        (r.mouseThreshold = 0)),
      r
    );
  }
  getLinkElement(e) {
    return this._r4a19ae7bb80646(e)?.findChildByName("element_link");
  }
  getHighlightBorder(e) {
    let r = this._container.findChildByName("highlight_border");
    return (r == null && e && (r = this.template._rf23b5755b945d7(this._container)), r);
  }
  _red4087d0a43721(e) {
    let r = this._container.findChildByName("extra_button");
    return (
      r == null &&
        e &&
        ((r = this.template._rfc3af5332c9ddf(this._container)),
        r.addEventListener(u.CLICK, this.onExtraButtonClick),
        r.addEventListener(u.OVER, this.var_1230?._rd7f5c0e042e8f1),
        r.addEventListener(u.OUT, this.var_1230?._rad04679fe00657)),
      r
    );
  }
  getExtraButton(e) {
    return this._red4087d0a43721(e)?.findChildByName("extra_button_bitmap");
  }
  get template() {
    return this.var_778._rc9448b6a46fd6a;
  }
  static easeInOutCubic(e, r, t, i) {
    let s = e / i,
      o = -(s * 1.75 - 0.7) * (s * 1.75 - 0.7) + 1;
    return r + t * o;
  }
  highlight() {
    if (this._transitionTimer != null && this._transitionTimer.running) return;
    let e = this.getHighlightBorder(!0);
    if (e == null) return;
    let r = 500,
      t = 1e3 / 60,
      i = r / t,
      s = 0,
      o = 0.35;
    ((e.visible = !0),
      (e.blend = 0),
      this._transitionTimer == null
        ? ((this._transitionTimer = new _i05394ecc0c0c4d(t, i)),
          this._transitionTimer.addEventListener(DeBouncer.addEventListener, () => {
            this._transitionTimer != null &&
              (e.blend = a.easeInOutCubic(this._transitionTimer._rdf3dbbec26e6b1, s, o - s, i));
          }),
          this._transitionTimer.addEventListener(DeBouncer._rf33144eac61595, () => {
            e.visible = !1;
          }))
        : this._transitionTimer.reset(),
      this._transitionTimer.start());
  }
}
