// Extracted from HabboAirLauncher.deobf.js, line 253495.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/inroom/RoomEventViewCtrl.as
// Obfuscated name: _i69c550a90aedf7

class {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "RoomEventViewCtrl");
  }
  _window = null;
  var_1063 = null;
  _r080d41f6bcd62c = null;
  get disposed() {
    return this._navigator == null;
  }
  dispose() {
    ((this._navigator = null),
      this._window?.dispose(),
      (this._window = null),
      (this.var_1063 = null),
      (this._r080d41f6bcd62c = null));
  }
  show() {
    if (this._window != null && this._window.visible) {
      this._window.visible = !1;
      return;
    }
    (this.prepareWindow(), this.clearErrors());
    let e = this._navigator?.data._rb6c91108c7cf2d ?? null;
    (e == null ? this.createEvent() : this.editEvent(e),
      this._window != null &&
        ((this._window.visible = !0), this._window.activate()));
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  editEvent(e) {
    this._window != null &&
      ((this._window.caption =
        this._navigator?.getText("navigator.eventsettings.editcaption") ?? ""),
      this.var_1063?.setText(e.eventName),
      this._r080d41f6bcd62c?.setText(e._rd6505b2bdb8ef3));
  }
  createEvent() {
    this._window != null &&
      ((this._window.caption = this._navigator?.getText("navigator.createevent") ?? ""),
      this._r080d41f6bcd62c?.goBackToInitialState(),
      this.var_1063?.goBackToInitialState());
  }
  _rb5be564f148640(e) {
    return this._window?.findChildByName(e);
  }
  onClose = n((e) => {
    this.close();
  }, "onClose");
  save() {
    let e = this._navigator?.data._rb6c91108c7cf2d ?? null;
    if (e == null || this._navigator == null) return;
    let r = e._r8148677d694079,
      t = this.var_1063?.getText() ?? "",
      i = this._r080d41f6bcd62c?.getText() ?? "";
    this.isMandatoryFieldsFilled() && this._navigator.send(new class_3517(r, t, i));
  }
  _r20b78437532d89 = n((e) => {
    let r = this._navigator?.data._rb6c91108c7cf2d ?? null;
    (r != null && this._navigator?.send(new class_2537(r._r8148677d694079)), this.close());
  }, "_r20b78437532d89");
  _r9a98d7761d81c4 = n((e) => {
    this.close();
  }, "_r9a98d7761d81c4");
  _rd9ce3cbfe13d80 = n((e) => {
    this._navigator?.data._rb6c91108c7cf2d != null && this.save();
  }, "_rd9ce3cbfe13d80");
  class_3740 = n((e) => {
    this.clearErrors();
    let r = ClassUtils.getParser(e, class_2843);
    if (r == null) return;
    let t = r.errorCode;
    t === 0
      ? (this.var_1063?.displayError(
          this._navigator?.getText("roomad.error.0.description") ?? "",
        ),
        this.var_1063?.setText(r.var_5457))
      : t === 1 &&
        (this._r080d41f6bcd62c?.displayError(
          this._navigator?.getText("roomad.error.0.description") ?? "",
        ),
        this._r080d41f6bcd62c?.setText(r.var_5457));
  }, "class_3740");
  isMandatoryFieldsFilled() {
    return (
      this.clearErrors(),
      this.var_1063?._r69708b20ae80da(
        this._navigator?.getText("navigator.eventsettings.nameerr") ?? "",
      ) ?? !1
    );
  }
  clearErrors() {
    (this.var_1063?.clearErrors(), this._r080d41f6bcd62c?.clearErrors());
  }
  prepareWindow() {
    if (!(this._window != null || this._navigator == null)) {
      if (
        ((this._window = this._navigator.getXmlWindow("iro_event_settings")),
        this._window == null)
      )
        throw new Error("Failed to build iro_event_settings");
      (this.addMouseClickListener(this._window.findChildByTag("close"), this.onClose),
        this.addMouseClickListener(this._window.findChildByName("end_button"), this._r20b78437532d89),
        this.addMouseClickListener(this._window.findChildByName("cancel_button"), this._r9a98d7761d81c4),
        (this.var_1063 = new TextFieldManager(this._navigator, this._rb5be564f148640("event_name"), 25)),
        (this._r080d41f6bcd62c = new TextFieldManager(this._navigator, this._rb5be564f148640("event_desc"), 100)),
        this.var_1063.input?.addEventListener(y.const_1200, this._rd9ce3cbfe13d80),
        this._r080d41f6bcd62c.input?.addEventListener(y.const_1200, this._rd9ce3cbfe13d80),
        this._navigator.communication._r2e106e2349a0b6(new class_3740(this.class_3740)),
        this._window.center());
    }
  }
  addMouseClickListener(e, r) {
    e?.addEventListener(u.CLICK, r);
  }
}
