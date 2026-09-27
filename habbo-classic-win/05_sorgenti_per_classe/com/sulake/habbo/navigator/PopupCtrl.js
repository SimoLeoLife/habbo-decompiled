// Extracted from HabboAirLauncher.deobf.js, line 254789.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/PopupCtrl.as
// Obfuscated name: _i5916e83de6ced6

class {
  constructor(e, r, t, i) {
    this._navigator = e;
    this._rd8b9dadd7813bb = r;
    this._r3e333787de5f39 = t;
    this._xmlFileName = i;
    (this._r2954510bdcbbdc.addEventListener(DeBouncer.addEventListener, this._r55145e05378703),
      this._hideTimer.addEventListener(DeBouncer.addEventListener, this.onHideTimer));
  }
  static {
    n(this, "PopupCtrl");
  }
  _r2954510bdcbbdc = new UnkEventDispatcherWrapperSubclass_05394e(500, 1);
  _hideTimer = new UnkEventDispatcherWrapperSubclass_05394e(100, 1);
  _popup = null;
  get navigator() {
    return this._navigator;
  }
  get visible() {
    return this._popup?.visible ?? !1;
  }
  dispose() {
    ((this._navigator = null),
      this._r2954510bdcbbdc.removeEventListener(DeBouncer.addEventListener, this._r55145e05378703),
      this._r2954510bdcbbdc.reset(),
      this._hideTimer.removeEventListener(DeBouncer.addEventListener, this.onHideTimer),
      this._hideTimer.reset());
  }
  showPopup(e) {
    if (this._popup == null) {
      if (
        ((this._popup = this._navigator?.getXmlWindow(this._xmlFileName)),
        this._popup == null)
      )
        return;
      ((this._popup.visible = !1),
        this._popup.setParamFlag(class_2094._r26338c8d88c4e5, !0),
        (this._popup.procedure = this._rab5658a477185c));
    }
    (Fr.hideChildren(this._popup),
      this.refreshContent(this._popup),
      (this._popup.height = Fr.getLowestPoint(this._popup) + 5));
    let r = new E();
    (e.getGlobalPosition(r),
      (this._popup.x = r.x + this._rd8b9dadd7813bb + e.width),
      (this._popup.y = r.y - this._popup.height * 0.5 + e.height * 0.5));
    let t = new E();
    (this._popup.getGlobalPosition(t),
      t.x + this._popup.width > this._popup.desktop.width
        ? ((this._popup.x = -this._popup.width + r.x + this._r3e333787de5f39),
          this._r85870cbf7661f7(this._popup, !1))
        : this._r85870cbf7661f7(this._popup, !0),
      this._popup.visible || (this._r2954510bdcbbdc.reset(), this._r2954510bdcbbdc.start()),
      this._hideTimer.reset(),
      this._popup.activate());
  }
  _r0724dfa55a891d() {
    (this._hideTimer.reset(), this._r2954510bdcbbdc.reset(), this._hideTimer.start());
  }
  _rb77d58bff0a93a() {
    (this._popup != null && (this._popup.visible = !1),
      this._r2954510bdcbbdc.reset(),
      this._hideTimer.reset());
  }
  refreshContent(e) {}
  _r85870cbf7661f7(e, r) {
    (this.refreshPopupArrow(e, !0, r), this.refreshPopupArrow(e, !1, !r));
  }
  refreshPopupArrow(e, r, t) {
    let i = `popup_arrow_${r ? "left" : "right"}`,
      s = e.findChildByName(i);
    if (!t) {
      s != null && (s.visible = !1);
      return;
    }
    if (s == null) {
      if (((s = this._navigator?.getButton(i, i, null) ?? null), s == null)) return;
      (s.setParamFlag(class_2094._r5f5ff9955e2bf4, !1), e.addChild(s));
    }
    ((s.visible = !0), (s.y = e.height * 0.5 - s.height * 0.5), (s.x = r ? 1 - s.width : e.width - 1));
  }
  _r55145e05378703 = n((e) => {
    this._popup != null && ((this._popup.visible = !0), this._popup.activate());
  }, "_r55145e05378703");
  onHideTimer = n((e) => {
    this._popup != null && (this._popup.visible = !1);
  }, "onHideTimer");
  _rab5658a477185c = n((...e) => {
    let r = e[0];
    r instanceof u &&
      (r.type === u.OVER
        ? this._hideTimer.reset()
        : r.type === u.OUT &&
          this._popup != null &&
          (Fr._r24831451da7216(this._popup) || this._r0724dfa55a891d()));
  }, "_rab5658a477185c");
}
