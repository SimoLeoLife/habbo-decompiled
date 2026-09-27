// Estratto da HabboAirLauncher.deobf.js, riga 319066.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/stickie/StickieFurniWidget.as
// Nome offuscato: _i6b6a9985f61bda

class a extends RoomWidgetBase {
  static {
    n(this, "StickieFurniWidget");
  }
  static FIELD_MAX_LINES = 14;
  static FIELD_MAX_CHARS = 500;
  static _r415425299e7b38 = ["blue", "purple", "green", "yellow", "white", "red", "orange", "cyan"];
  static _rd7f6a323d840d1 = 100;
  static _r8634183c488b34 = 100;
  _window = null;
  var_344 = -1;
  hasAsset = "";
  _text = "";
  _r71a2056cb98d41 = "";
  var_63 = !1;
  _r174ef8d197bbab = null;
  _windowName = "stickieui_container";
  _r704ee94ba0d987 = n((e) => {
    this._r89f0690ee52550(e);
  }, "_r704ee94ba0d987");
  _r256fba019444f6 = n((e) => {
    this._r7972d0b08e8494(e);
  }, "_r256fba019444f6");
  get window() {
    return this._window;
  }
  constructor(e, r, t = null) {
    super(e, r, t);
  }
  dispose() {
    this.disposed ||
      (this.hideInterface(),
      this._r174ef8d197bbab?.dispose(),
      (this._r174ef8d197bbab = null),
      super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetStickieDataUpdateEvent.UPDATE_STICKIE_DATA, this._r704ee94ba0d987), super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e?.removeEventListener?.(RoomWidgetStickieDataUpdateEvent.UPDATE_STICKIE_DATA, this._r704ee94ba0d987);
  }
  _r89f0690ee52550(e) {
    (this.hideInterface(!1),
      (this.var_344 = e.objectId),
      (this.hasAsset = e.objectType),
      (this._text = e.text),
      (this._r71a2056cb98d41 = e._r90e16a8c48c219),
      (this.var_63 = e.controller),
      this.showInterface());
  }
  showInterface() {
    if (this.var_344 === -1) return;
    let e = this.assets?.getAssetByName("stickie");
    if (e?.content == null) return;
    this._window == null &&
      ((this._window = this.windowManager?.createWindow(
        this._windowName,
        "",
        HabboWindowType.CONTAINER,
        HabboWindowStyle.DEFAULT,
        class_2094._r4884ed3c10147b | class_2094._r26338c8d88c4e5,
        new D(a._rd7f6a323d840d1, a._r8634183c488b34, 2, 2),
        null,
        0,
      )),
      this._window?.buildFromXML(e.content));
    let r = this._window?.findChildByName("text");
    r != null && ((r.text = this._text), r.addEventListener(y.WINDOW_EVENT_CHANGE, this._re4fb9c86955242));
    let t = this._window?.findChildByTag("bg");
    if (t != null) {
      let i = null,
        s = this.hasAsset.replace("post_it", "stickie"),
        o = this.assets?.getAssetByName(s) ?? null;
      o instanceof Qt
        ? (i = o)
        : ((i = this.assets?.getAssetByName("stickie_blanco")),
          (t.color = Number.parseInt(`0xFF${this._r71a2056cb98d41}`, 16)));
      let d = i?.content;
      (this._r174ef8d197bbab != null && (d = this._r174ef8d197bbab),
        d != null &&
          (t.bitmap?.dispose(),
          (t.bitmap = new A(t.width, t.height, !0, 0)),
          t.bitmap.copyPixels(d, d.rect, new E(0, 0))));
    }
    if (((t = this._window?.findChildByTag("close_button")), t != null)) {
      let s = this.assets?.getAssetByName("stickie_close")?.content;
      (s != null &&
        (t.bitmap?.dispose(),
        (t.bitmap = new A(t.width, t.height, !0, 0)),
        t.bitmap.copyPixels(s, s.rect, new E(0, 0))),
        t.addEventListener(u.CLICK, this._r256fba019444f6));
    }
    if (((t = this._window?.findChildByTag("delete_button")), t != null && this.var_63)) {
      let s = this.assets?.getAssetByName("stickie_remove")?.content;
      (s != null &&
        (t.bitmap?.dispose(),
        (t.bitmap = new A(t.width, t.height, !0, 0)),
        t.bitmap.copyPixels(s, s.rect, new E(0, 0))),
        t.addEventListener(u.CLICK, this._r256fba019444f6));
    }
    this._rd8a993670a362b(this.var_63 && this.hasAsset === "post_it");
  }
  hideInterface(e = !0) {
    (e && this._rd0a234a69dd58a(),
      this._window?.dispose(),
      (this._window = null),
      (this.var_344 = -1),
      (this._text = ""),
      (this.var_63 = !1));
  }
  _r88f53700ec50c5() {
    let e = this._window?.findChildByName("text");
    return e == null || this._text === e.text ? !1 : ((this._text = e.text), !0);
  }
  _rd0a234a69dd58a() {
    this.var_344 === -1 ||
      !this._r88f53700ec50c5() ||
      this._r1515e6bde00451?.RoomWidgetLetUserInMessage(
        new RoomWidgetStickieSendUpdateMessage(RoomWidgetStickieSendUpdateMessage.const_216, this.var_344, this._text, this._r71a2056cb98d41),
      );
  }
  _r59d41da1db6199(e) {
    if (this.var_344 === -1) return;
    this._r88f53700ec50c5();
    let r = e.toString(16).toUpperCase();
    (r.length > 6 && (r = r.slice(r.length - 6)),
      r !== this._r71a2056cb98d41 &&
        ((this._r71a2056cb98d41 = r),
        this._r1515e6bde00451?.RoomWidgetLetUserInMessage(
          new RoomWidgetStickieSendUpdateMessage(RoomWidgetStickieSendUpdateMessage.const_216, this.var_344, this._text, this._r71a2056cb98d41),
        ),
        this.showInterface()));
  }
  _rfe691b2575e6f7() {
    this.var_344 === -1 ||
      !this.var_63 ||
      this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetStickieSendUpdateMessage(RoomWidgetStickieSendUpdateMessage.const_766, this.var_344));
  }
  _r7972d0b08e8494(e) {
    let r = e.target,
      t = r?.name ?? "";
    if (a._r415425299e7b38.indexOf(t) !== -1) {
      this._r59d41da1db6199(r?.color ?? 0);
      return;
    }
    switch (t) {
      case "close":
        this.hideInterface();
        break;
      case "delete":
        (this._rfe691b2575e6f7(), this.hideInterface(!1));
        break;
    }
  }
  _rd8a993670a362b(e) {
    for (let r of a._r415425299e7b38) {
      let t = this._window?.findChildByName(r);
      t != null && ((t.visible = e), e && t.addEventListener(u.CLICK, this._r256fba019444f6));
    }
  }
  _re4fb9c86955242 = n((e) => {
    let r = this._window?.findChildByName("text");
    r != null &&
      ((r._r4c2336e24c69cc = a.FIELD_MAX_CHARS),
      !(r._r99f9b16cafb2f2 < a.FIELD_MAX_LINES) &&
        ((r.text = r.text.slice(0, r.text.length - 1)), (r._r4c2336e24c69cc = r.length)));
  }, "_re4fb9c86955242");
}
