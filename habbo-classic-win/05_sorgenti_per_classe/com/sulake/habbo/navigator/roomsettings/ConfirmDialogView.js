// Estratto da HabboAirLauncher.deobf.js, riga 257172.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/roomsettings/ConfirmDialogView.as
// Nome offuscato: _i6af06655da9686

class {
  constructor(e, r, t, i) {
    this._r428a9517a46d3e = r;
    if (
      ((this._window = e.getXmlWindow("ros_confirm")),
      this._window?.findChildByTag("close")?.addEventListener(u.CLICK, this.onCancel),
      this._window?.findChildByName("ok")?.addEventListener(u.CLICK, this._r29a9c14eb33b0e),
      this._window != null)
    ) {
      this._window.caption = t;
      let s = this._window.findChildByName("message");
      s != null && (s.caption = i);
      let o = Fr._r7edb7b140e7403(
        this._window.desktop,
        this._window.width,
        this._window.height,
      );
      ((this._window.x = o.x),
        (this._window.y = o.y),
        (this._window.visible = !0),
        this._window.activate());
    }
  }
  static {
    n(this, "ConfirmDialogView");
  }
  _window;
  get disposed() {
    return this._window == null;
  }
  dispose() {
    (this._window != null && (this._window.destroy(), (this._window = null)),
      (this._r428a9517a46d3e = null));
  }
  onCancel = n(() => {
    this.dispose();
  }, "onCancel");
  _r29a9c14eb33b0e = n(() => {
    (this._r428a9517a46d3e?.(), this.dispose());
  }, "_r29a9c14eb33b0e");
}
