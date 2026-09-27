// Estratto da HabboAirLauncher.deobf.js, riga 317503.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/friendfurni/FriendFurniEngravingView.as
// Nome offuscato: _i6b2c24eeb663c0

class a {
  static {
    n(this, "FriendFurniEngravingView");
  }
  var_2364;
  var_17;
  _window = null;
  _disposed = !1;
  constructor(e, r) {
    ((this.var_17 = e), (this.var_2364 = r));
  }
  get stuffData() {
    return this.var_2364;
  }
  get widget() {
    return this.var_17;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this.disposed ||
      (this.destroyWindow(),
      (this.var_17 = null),
      (this.var_2364 = null),
      (this._disposed = !0));
  }
  open() {
    this.createWindow();
  }
  close() {
    this.destroyWindow();
  }
  assetName() {
    throw new Error("Must implement in concrete view!");
  }
  avatarImageReady(e) {
    if (e === this.stuffData.getValue(3)) {
      let r = this.widget._r169f71f9120263.container?._rf0eb5f07c94cfb?._r274f6640e76241(
        this.stuffData.getValue(3),
        fr.LARGE,
        null,
        this,
      );
      this.setAvatarImage("avatar_left", r?._rb2bd48e3b4d265(class_2123.const_252) ?? null);
    }
    if (e === this.stuffData.getValue(4)) {
      let r = this.widget._r169f71f9120263.container?._rf0eb5f07c94cfb?._r274f6640e76241(
        this.stuffData.getValue(4),
        fr.LARGE,
        null,
        this,
      );
      (r?.setDirection(class_2123.const_252, 4),
        this.setAvatarImage("avatar_right", r?._rb2bd48e3b4d265(class_2123.const_252) ?? null));
    }
  }
  createWindow() {
    if (this._window == null) {
      if (
        ((this._window = this.widget.windowManager?.buildFromXML(
          this.widget.assets?.getAssetByName(this.assetName())?.content,
        )),
        this._window == null)
      )
        return;
      ((this._window.procedure = this.windowProc),
        this._window.center(),
        (this._window.findChildByName("name_left").caption = this.stuffData.getValue(1)),
        (this._window.findChildByName("name_right").caption = this.stuffData.getValue(2)),
        (this._window.findChildByName("date").caption = this.stuffData.getValue(5)));
      let e = this.widget._r169f71f9120263.container?._rf0eb5f07c94cfb?._r274f6640e76241(
          this.stuffData.getValue(3),
          fr.LARGE,
          null,
          this,
        ),
        r = this.widget._r169f71f9120263.container?._rf0eb5f07c94cfb?._r274f6640e76241(
          this.stuffData.getValue(4),
          fr.LARGE,
          null,
          this,
        );
      (e != null &&
        !e._re9580ee607591e() &&
        this.setAvatarImage("avatar_left", e._rb2bd48e3b4d265(class_2123.const_252)),
        r != null &&
          !r._re9580ee607591e() &&
          (r.setDirection(class_2123.const_252, 4),
          this.setAvatarImage("avatar_right", r._rb2bd48e3b4d265(class_2123.const_252))));
    }
  }
  setAvatarImage(e, r) {
    let t = this._window?.findChildByName(e);
    a.setElementImage(t, r, 0, 0, 0);
  }
  destroyWindow() {
    (this._window?.dispose(), (this._window = null));
  }
  windowProc = n((e, r) => {
    e.type === u.CLICK && r.name === "header_button_close" && this.widget.close(this.widget.stuffId);
  }, "windowProc");
  static setElementImage(e, r, t = 0, i = 0, s = 0) {
    if (r == null || e == null || e.disposed) return;
    let o = t > 0 ? t : e.height,
      d = (e.width - r.width) / 2 + i,
      c = (o - r.height) / 2 + s;
    if (e.bitmap !== void 0) {
      let f = e;
      ((f.bitmap == null || t > 0) && (f.bitmap = new A(e.width, o, !0, 0)),
        f.bitmap.fillRect(f.bitmap.rect, 0),
        f.bitmap.copyPixels(r, r.rect, new E(d, c), null, null, !1),
        e.invalidate());
    } else if (e.setDisplayObject !== void 0) {
      let f = e,
        l = new _i3a5c6f457acdad();
      ((l.bitmapData = r), f.setDisplayObject(l));
    }
  }
}
