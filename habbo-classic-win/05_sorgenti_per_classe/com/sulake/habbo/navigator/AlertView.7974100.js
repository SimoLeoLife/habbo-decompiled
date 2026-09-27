// Estratto da HabboAirLauncher.deobf.js, riga 251574.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/AlertView.as
// Nome offuscato: _i1d964d2b696352

class a {
  constructor(e, r, t = null) {
    this._navigator = e;
    this._xmlFileName = r;
    this.var_606 = t;
  }
  static {
    n(this, "AlertView");
  }
  static _r1fcd4d510336f1 = new Map();
  var_551 = null;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  get navigator() {
    return this._navigator;
  }
  show() {
    (a._r1fcd4d510336f1.get(this._xmlFileName) ?? null)?.dispose();
    let r = this.getAlertWindow();
    if (r == null) return;
    ((this.var_551 = r),
      this.var_606 != null && (this.var_551.caption = this.var_606),
      this.setupAlertWindow(this.var_551));
    let t = Fr._r7edb7b140e7403(
      this.var_551.desktop,
      this.var_551.width,
      this.var_551.height,
    );
    ((this.var_551.x = t.x),
      (this.var_551.y = t.y),
      a._r1fcd4d510336f1.set(this._xmlFileName, this),
      this.var_551.activate());
  }
  dispose() {
    this._disposed ||
      (a._r1fcd4d510336f1.get(this._xmlFileName) === this &&
        a._r1fcd4d510336f1.set(this._xmlFileName, null),
      (this._disposed = !0),
      this.var_551?.destroy(),
      (this.var_551 = null),
      (this._navigator = null));
  }
  setupAlertWindow(e) {}
  onClose = n((e) => {
    this.dispose();
  }, "onClose");
  getAlertWindow() {
    let e = this._navigator?.getXmlWindow(this._xmlFileName, 2);
    return (e?.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose), e);
  }
  static findAlertView(e) {
    for (let r of a._r1fcd4d510336f1.values()) if (r?.var_551 === e) return r;
    return null;
  }
}
