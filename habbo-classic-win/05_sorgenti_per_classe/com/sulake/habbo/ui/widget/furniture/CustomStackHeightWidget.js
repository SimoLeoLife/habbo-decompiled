// Estratto da HabboAirLauncher.deobf.js, riga 314129.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/CustomStackHeightWidget.as
// Nome offuscato: _i84e266c8cad221

class a extends RoomWidgetBase {
  static {
    n(this, "CustomStackHeightWidget");
  }
  static SLIDER_RANGE = 10;
  static MAX_HEIGHT = 80;
  static SLIDER_BUTTON_WIDTH = 20;
  static SLIDER_LIVE_UPDATE_INTERVAL_MS = 30;
  _window = null;
  var_2287 = 0;
  _rd569aafdd01299 = !1;
  _rd0374a879d15e7 = !1;
  _rb7db323140c396 = !1;
  _refd2066bb9973b = !1;
  _r2758ac1533cfc0 = !1;
  _r51aa0e18c8fb1e = !1;
  _r00a95fe1845aa0 = !1;
  _r7f05cb222a91d8 = -a.SLIDER_LIVE_UPDATE_INTERVAL_MS;
  _r1163fb4e22b91c = Number.NaN;
  _raa925653a25cd0;
  constructor(e, r, t = null, i = null) {
    (super(e, r, t, i),
      (this.handler.widget = this),
      (this._raa925653a25cd0 = new _i05394ecc0c0c4d(a.SLIDER_LIVE_UPDATE_INTERVAL_MS, 1)),
      this._raa925653a25cd0.addEventListener?.(DeBouncer._rf33144eac61595, this._r284666bb52a93a));
  }
  dispose() {
    (this.destroyWindow(),
      this._raa925653a25cd0 != null &&
        (this._raa925653a25cd0.stop(),
        this._raa925653a25cd0.removeEventListener?.(DeBouncer._rf33144eac61595, this._r284666bb52a93a),
        (this._raa925653a25cd0 = null)),
      super.dispose());
  }
  get mainWindow() {
    return this._window;
  }
  open(e, r, t, i) {
    if (
      ((this.var_2287 = e),
      (r = Math.min(r, a.MAX_HEIGHT)),
      this._r53663cddf15b14(),
      this._window == null && this.createWindow(),
      this._window == null)
    )
      return;
    ((this.walkTileContainer.visible = t),
      t &&
        ((this._rd569aafdd01299 = !0),
        i ? this.multiWalkCheckbox.select() : this.multiWalkCheckbox.unselect(),
        (this._rd569aafdd01299 = !1)),
      (this._window.height = t
        ? this._window.limits.maxHeight
        : this._window.limits.minHeight));
    let s = t ? "walk" : "stack";
    ((this._r1163fb4e22b91c = r),
      (this._window.caption =
        this.localizations?.getLocalization(`widget.custom.${s}.height.title`) ?? ""),
      (this._window.findChildByName("height_text").caption =
        this.localizations?.getLocalization(`widget.custom.${s}.height.text`) ?? ""),
      this.setInputHeightCaption(r.toString()),
      this.updateSlider(),
      (this._window.visible = !0));
  }
  hide() {
    this._window != null && (this._r53663cddf15b14(), (this._window.visible = !1));
  }
  _rf215d0fe559649(e, r) {
    this.var_2287 === e &&
      ((this._r1163fb4e22b91c = r), this._rf90ffd954c35cd() && (this.altitude = r));
  }
  get handler() {
    return this._handler;
  }
  createWindow() {
    this._window == null &&
      ((this._window = this.windowManager?.buildFromXML(
        this.assets?.getAssetByName("custom_stack_height_xml")?.content,
      )),
      this._window != null &&
        ((this._window.procedure = this.windowProcedure),
        this._window.center(),
        this.multiWalkCheckbox.addEventListener(y.const_238, this._r7f07ae11b3855e),
        this.multiWalkCheckbox.addEventListener(y.const_1217, this._r7f07ae11b3855e),
        this.inputHeightField.addEventListener(y.WINDOW_EVENT_CHANGE, this._r3d301fe4a62c10),
        this.inputHeightField.addEventListener(y.WINDOW_EVENT_UNFOCUS, this.onInputHeightUnfocus),
        this.inputHeightField.addEventListener(y.const_1200, this.onInputHeightUnfocus)));
  }
  _r7f07ae11b3855e = n((e) => {
    this._rd569aafdd01299 ||
      this.handler.container?.connection?.send(
        new _i7da07d2b22cc2b([this.var_2287, this._rb094ae94b89318, this._rc13ceeff967ddc]),
      );
  }, "_r7f07ae11b3855e");
  destroyWindow() {
    (this._window != null &&
      (this._r386c662dd3e301(),
      this.multiWalkCheckbox.removeEventListener(y.const_238, this._r7f07ae11b3855e),
      this.multiWalkCheckbox.removeEventListener(y.const_1217, this._r7f07ae11b3855e),
      this.inputHeightField.removeEventListener(y.WINDOW_EVENT_CHANGE, this._r3d301fe4a62c10),
      this.inputHeightField.removeEventListener(y.WINDOW_EVENT_UNFOCUS, this.onInputHeightUnfocus),
      this.inputHeightField.removeEventListener(y.const_1200, this.onInputHeightUnfocus),
      (this._window.procedure = null),
      this._window.dispose(),
      (this._window = null)),
      this._r53663cddf15b14());
  }
  windowProcedure = n((e, r) => {
    if (!(r == null || this._window == null))
      if (e.type === u.CLICK)
        switch (r.name) {
          case "button_floor_level":
            (this._r386c662dd3e301(), this._r5d04eee7a9afba(), (this.altitude = 0), this._re90cf7fc4cc7f8());
            break;
          case "button_above_stack":
            (this._r386c662dd3e301(),
              this._r5d04eee7a9afba(),
              this.handler.container?.connection?.send(new _i7da07d2b22cc2b([this.var_2287, -100])));
            break;
          case "button_move_down":
            (this._r386c662dd3e301(), this._r5d04eee7a9afba(), this._r617c5c0c2345ed(!0));
            break;
          case "button_move_up":
            (this._r386c662dd3e301(), this._r5d04eee7a9afba(), this._r617c5c0c2345ed(!1));
            break;
          case "header_button_close":
            this.destroyWindow();
            break;
          case "slider":
            (this._r5d04eee7a9afba(),
              (this.sliderButton.x = this._ra5598f3370c8ae(e.localX)),
              this._r5c39f626c06d1b(),
              this._re90cf7fc4cc7f8(),
              (this._r7f05cb222a91d8 = _ia411d8d8194a3a()));
            break;
        }
      else if (e.type === u.DOWN)
        switch (r.name) {
          case "slider_button":
            ((this._rb7db323140c396 = !0), this._r5d04eee7a9afba(), (this._r2758ac1533cfc0 = !1));
            break;
        }
      else if (e.type === u.UP || e.type === u.UP_OUTSIDE)
        switch (r.name) {
          case "slider_button":
            ((this._rb7db323140c396 = !1), this._r2758ac1533cfc0 && this._r5d758bee82e352());
            break;
        }
      else if (e.type === u.DOUBLE_CLICK)
        switch (r.name) {
          case "slider_button":
            (this._r5d04eee7a9afba(),
              this._r5c39f626c06d1b(!0),
              this._re90cf7fc4cc7f8(),
              (this._r7f05cb222a91d8 = _ia411d8d8194a3a()));
            break;
        }
      else if (e.type === y.const_475)
        switch (r.name) {
          case "slider_button":
            (this._r5c39f626c06d1b(),
              this._rb7db323140c396 && ((this._r2758ac1533cfc0 = !0), this._rca2ff66c08f0b9()));
            break;
        }
      else
        e.type === sr.const_1081 &&
          r.name === "input_height" &&
          e.keyCode === 13 &&
          (this._r386c662dd3e301(),
          (this._refd2066bb9973b = !1),
          this.updateSlider(),
          this._re90cf7fc4cc7f8());
  }, "windowProcedure");
  _re90cf7fc4cc7f8() {
    this.handler.container?.connection?.send(new _i7da07d2b22cc2b([this.var_2287, this._rb094ae94b89318]));
  }
  _r617c5c0c2345ed(e) {
    this.handler.container?.connection?.send(new _i5ddae5b249cc8f(this.var_2287, e));
  }
  get _rb094ae94b89318() {
    return (this._rdac18630f7edc5 * 100) | 0;
  }
  get _rc13ceeff967ddc() {
    return this.multiWalkCheckbox.isSelected;
  }
  updateSlider() {
    let r = this._rdac18630f7edc5 / a.SLIDER_RANGE;
    r = Math.min(r, 1);
    let t = this.slider.width - a.SLIDER_BUTTON_WIDTH;
    ((this._window.procedure = null),
      (this.sliderButton.x = t * r),
      (this._window.procedure = this.windowProcedure));
  }
  _r5c39f626c06d1b(e = !1) {
    let r = e ? 1 : 100,
      t = this.slider.width - a.SLIDER_BUTTON_WIDTH,
      s = (this._ra5598f3370c8ae(this.sliderButton.x) / t) * a.SLIDER_RANGE * r;
    this.setInputHeightCaption((Math.trunc(s) / r).toString());
  }
  set altitude(e) {
    this._window != null && (this.setInputHeightCaption(e.toString()), this.updateSlider());
  }
  get walkTileContainer() {
    return this._window?.findChildByName("walktile_container");
  }
  get multiWalkCheckbox() {
    return this._window?.findChildByName("multiwalk_checkbox");
  }
  get inputHeightField() {
    return this._window?.findChildByName("input_height");
  }
  get slider() {
    return this._window?.findChildByName("slider");
  }
  get sliderButton() {
    return this._window?.findChildByName("slider_button");
  }
  get _rdac18630f7edc5() {
    let e = Number.parseFloat(this.inputHeightField.caption);
    return Number.isNaN(e) ? 0 : e;
  }
  _r3d301fe4a62c10 = n((e) => {
    this._rd0374a879d15e7 || (this._refd2066bb9973b = !0);
  }, "_r3d301fe4a62c10");
  onInputHeightUnfocus = n((e) => {
    (this._refd2066bb9973b && !Number.isNaN(this._r1163fb4e22b91c) && (this.altitude = this._r1163fb4e22b91c),
      (this._refd2066bb9973b = !1));
  }, "onInputHeightUnfocus");
  _rca2ff66c08f0b9() {
    ((this._r51aa0e18c8fb1e = !0), this._rfba9558987444a());
  }
  _r5d758bee82e352() {
    ((this._r00a95fe1845aa0 = !0), this._rfba9558987444a());
  }
  _rfba9558987444a() {
    if (this._raa925653a25cd0 == null) return;
    let e = _ia411d8d8194a3a() - this._r7f05cb222a91d8;
    if (e >= a.SLIDER_LIVE_UPDATE_INTERVAL_MS) {
      this._rb7c8161b84cea3();
      return;
    }
    (this._raa925653a25cd0.reset(),
      (this._raa925653a25cd0.delay = Math.max(1, a.SLIDER_LIVE_UPDATE_INTERVAL_MS - e)),
      this._raa925653a25cd0.start());
  }
  _r284666bb52a93a = n((e) => {
    this._rb7c8161b84cea3();
  }, "_r284666bb52a93a");
  _rb7c8161b84cea3() {
    (!this._r51aa0e18c8fb1e && !this._r00a95fe1845aa0) ||
      (this._re90cf7fc4cc7f8(),
      (this._r7f05cb222a91d8 = _ia411d8d8194a3a()),
      (this._r51aa0e18c8fb1e = !1),
      this._rb7db323140c396 || (this._r00a95fe1845aa0 = !1));
  }
  _r386c662dd3e301() {
    (this._raa925653a25cd0?.reset(),
      (this._r51aa0e18c8fb1e = !1),
      (this._r00a95fe1845aa0 = !1),
      (this._rb7db323140c396 = !1),
      (this._r2758ac1533cfc0 = !1));
  }
  _r53663cddf15b14() {
    (this._r386c662dd3e301(), (this._refd2066bb9973b = !1), (this._r7f05cb222a91d8 = -a.SLIDER_LIVE_UPDATE_INTERVAL_MS));
  }
  _rf90ffd954c35cd() {
    return (
      !this._rb7db323140c396 && !this._refd2066bb9973b && !this._r00a95fe1845aa0 && !this._r51aa0e18c8fb1e
    );
  }
  _r5d04eee7a9afba() {
    this._refd2066bb9973b = !1;
  }
  setInputHeightCaption(e) {
    ((this._rd0374a879d15e7 = !0), (this.inputHeightField.caption = e), (this._rd0374a879d15e7 = !1));
  }
  _ra5598f3370c8ae(e) {
    return Math.max(0, Math.min(e, this.slider.width - a.SLIDER_BUTTON_WIDTH));
  }
}
