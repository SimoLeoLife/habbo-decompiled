// Estratto da HabboAirLauncher.deobf.js, riga 215441.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/AlertView.as
// Nome offuscato: _i1d964d2b696352

class a {
  static {
    n(this, "AlertView");
  }
  static _rdbcfef766031b7 = new globalThis.Map();
  _friendList;
  var_725 = null;
  _xmlFileName;
  var_606;
  _disposed = !1;
  constructor(e, r, t = null) {
    ((this._friendList = e), (this._xmlFileName = r), (this.var_606 = t));
  }
  show() {
    let e = a._rdbcfef766031b7.get(this._xmlFileName);
    (e?.dispose(),
      (this.var_725 = this.getAlert()),
      this.var_606 != null && (this.var_725.caption = this.var_606));
    let r = this.var_725.content,
      t = this._friendList?.view?.mainWindow ?? null;
    r != null && this.setupContent(r);
    let i = Util._r7edb7b140e7403(t, this.var_725.width, this.var_725.height);
    ((this.var_725.x = i.x),
      (this.var_725.y = i.y),
      a._rdbcfef766031b7.set(this._xmlFileName, this.var_725));
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.var_725 != null && (this.var_725.destroy(), (this.var_725 = null)),
      (this._friendList = null));
  }
  setupContent(e) {}
  onClose(e, r) {
    e.type === u.CLICK && this.dispose();
  }
  getAlert() {
    let e = this._friendList?.getXmlWindow(this._xmlFileName);
    if (e == null) throw new Error(`Missing alert xml window: ${this._xmlFileName}`);
    let r = e.findChildByTag("close");
    return (r != null && (r.procedure = this.onClose.bind(this)), e);
  }
  get disposed() {
    return this._disposed;
  }
  get friendList() {
    return this._friendList;
  }
}
