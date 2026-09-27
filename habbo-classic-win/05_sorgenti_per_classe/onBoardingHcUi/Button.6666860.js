// Estratto da HabboAirLauncher.deobf.js, riga 213897.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/onBoardingHcUi/Button.as
// Nome offuscato: _ic23a7de95b02bc

class extends Sprite {
  constructor(r, t, i, s, o = 16777215) {
    super();
    this._caption = r;
    this._rectangle = t;
    this._fitWidthToText = i;
    this._action = s;
    this._glowColour = o;
    (this.addEventListener(M.ADDED, this.ChatHistoryScrollBar),
      this.addEventListener(M._r4b0396f57c9367, this._r8ab2e311a50996));
  }
  static {
    n(this, "Button");
  }
  _r68ec92def14624 = null;
  _background = null;
  _pressed = !1;
  _pressedBackground = !1;
  _active = !0;
  _selected = !1;
  _r91bd21fe11ed5f = !1;
  get _r1cf71d729a17ce() {
    let r = Yi._rfa63fa1232d9cf("default");
    return ((r.width = this._rectangle.width), (r.height = this._rectangle.height), r);
  }
  get _r03727ccda69c03() {
    let r = Yi._rfa63fa1232d9cf("pressed");
    return ((r.width = this._rectangle.width), (r.height = this._rectangle.height), r);
  }
  get _rf36e19a817555b() {
    let r = Yi._rfa63fa1232d9cf("inactive");
    return ((r.width = this._rectangle.width), (r.height = this._rectangle.height), r);
  }
  get _r438f7819e87dc6() {
    return this._r1cf71d729a17ce;
  }
  get _rb3852998bf7e99() {
    let r = Yi._rfa63fa1232d9cf("rollover");
    return ((r.width = this._rectangle.width), (r.height = this._rectangle.height), r);
  }
  get textColour() {
    return 16777215;
  }
  get active() {
    return this._active;
  }
  set active(r) {
    ((this._active = r), this.refresh());
  }
  unselect() {
    ((this._r91bd21fe11ed5f = !1), (this._selected = !1), this.refresh());
  }
  _r1fe4ed010bb986() {
    ((this._r91bd21fe11ed5f = !0), this.refresh());
  }
  select() {
    ((this._selected = !0), this.refresh());
  }
  ChatHistoryScrollBar = n((r = null) => {
    ((this.x = this._rectangle.x),
      (this.y = this._rectangle.y),
      (this._background = new Sprite()),
      this._background.addChild(this._r1cf71d729a17ce),
      this._background.addChild(this._r438f7819e87dc6),
      this._background.addChild(this._r03727ccda69c03),
      this._background.addChild(this._rf36e19a817555b),
      this._background.addChild(this._rb3852998bf7e99),
      this.addChild(this._background),
      (this._r68ec92def14624 = Yi.createTextField(
        this._caption,
        18,
        this.textColour,
        !0,
        !1,
        !1,
        !1,
        _s.const_27,
      )),
      (this._r68ec92def14624.x = (this._rectangle.width - this._r68ec92def14624.textWidth) / 2 - 2),
      (this._r68ec92def14624.y = (this._rectangle.height - this._r68ec92def14624.textHeight) / 2 - 2),
      this.addChild(this._r68ec92def14624),
      this.refresh(),
      this.addEventListener(_ifd7c1208e3417e._r9001c395573374, this._ra2392916df2aec),
      this.addEventListener(_ifd7c1208e3417e._r0f980b14ecbc94, this._rad325cc53260a0),
      this.addEventListener(_ifd7c1208e3417e._rbf5bc4e563fc08, this.onMousetOut));
  }, "ChatHistoryScrollBar");
  _r8ab2e311a50996 = n((r) => {
    (this.stage?.removeEventListener(_ifd7c1208e3417e._ra93f33360c3a28, this._rb39726d43f7cc1),
      this.removeEventListener(_ifd7c1208e3417e._r9001c395573374, this._ra2392916df2aec),
      this.removeEventListener(_ifd7c1208e3417e._ra93f33360c3a28, this._r1acf27e9365839),
      this.removeEventListener(_ifd7c1208e3417e._r0f980b14ecbc94, this._rad325cc53260a0),
      this.removeEventListener(_ifd7c1208e3417e._rbf5bc4e563fc08, this.onMousetOut));
  }, "_r8ab2e311a50996");
  _ra2392916df2aec = n((r) => {
    this._active &&
      (this.stage?.addEventListener(_ifd7c1208e3417e._ra93f33360c3a28, this._rb39726d43f7cc1),
      this.addEventListener(_ifd7c1208e3417e._ra93f33360c3a28, this._r1acf27e9365839),
      (this._pressed = !0),
      this.refresh());
  }, "_ra2392916df2aec");
  _r1acf27e9365839 = n((r) => {
    (r.stopImmediatePropagation(),
      this.stage?.removeEventListener(_ifd7c1208e3417e._ra93f33360c3a28, this._rb39726d43f7cc1),
      this.removeEventListener(_ifd7c1208e3417e._ra93f33360c3a28, this._r1acf27e9365839),
      (this._pressed = !1),
      this.refresh(),
      this._action?.(this));
  }, "_r1acf27e9365839");
  _rb39726d43f7cc1 = n((r) => {
    (this.stage?.removeEventListener(_ifd7c1208e3417e._ra93f33360c3a28, this._rb39726d43f7cc1),
      this.removeEventListener(_ifd7c1208e3417e._ra93f33360c3a28, this._r1acf27e9365839),
      (this._pressed = !1),
      this.refresh());
  }, "_rb39726d43f7cc1");
  _rad325cc53260a0 = n((r) => {
    ((this._pressedBackground = !0), this.refresh());
  }, "_rad325cc53260a0");
  onMousetOut = n((r) => {
    ((this._pressedBackground = !1), this.refresh());
  }, "onMousetOut");
  refresh() {
    if (this._background == null) return;
    let r = this._active
      ? this._r91bd21fe11ed5f
        ? 4
        : (this._pressed && this._pressedBackground) || this._selected
          ? 2
          : 1
      : 3;
    ((this._background.getChildAt(0).visible = r === 1 && !this._pressedBackground),
      (this._background.getChildAt(1).visible = r === 4),
      (this._background.getChildAt(2).visible = r === 2),
      (this._background.getChildAt(3).visible = r === 3),
      (this._background.getChildAt(4).visible = r === 1 && this._pressedBackground),
      (this.filters = this._pressedBackground ? [new _ibaf84c0aa91c5d(this._glowColour, 0.5, 10, 10)] : []));
  }
}
