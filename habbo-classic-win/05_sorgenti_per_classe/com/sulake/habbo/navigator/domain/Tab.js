// Extracted from HabboAirLauncher.deobf.js, line 211306.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/domain/Tab.as

class a {
  static {
    n(this, "Tab");
  }
  static WIDTH = 127;
  static HEIGHT = 36;
  static _ra38a77a0a4203f;
  static FRIENDS;
  static GAMES;
  static VIEW;
  static _rb32e1e294172ec;
  static _r4280a9b33bac0a;
  static _r9470351e58eba2;
  static _r6eff1f661c015f;
  static _r5a9e9983ab0116;
  static _ra992a7b919f825;
  static _rd5514a58d31e07 = !1;
  static _MOTION_TIME = 80;
  static const_509 = 3;
  _window = null;
  var_119 = !1;
  var_3445 = !1;
  _selected = !1;
  _disposed = !1;
  get window() {
    return this._window;
  }
  get selected() {
    return this._selected;
  }
  get recycled() {
    return this.var_119;
  }
  get disposed() {
    return this._disposed;
  }
  get exposed() {
    return this.var_3445;
  }
  select(e) {
    (this.conceal(), (this._selected = !0));
  }
  deselect(e) {
    this._selected = !1;
  }
  recycle() {
    (this.conceal(), (this.var_119 = !0));
  }
  dispose() {
    this._disposed ||
      (this._window?.dispose(), (this._window = null), (this._disposed = !0));
  }
  _rff101a3ebedfdf() {
    this.var_3445 = !0;
  }
  conceal() {
    this.var_3445 = !1;
  }
  onMouseClick = n((e) => {
    this.disposed ||
      this.recycled ||
      (this.selected ? a.VIEW._r0574cac632096b(!0) : a.VIEW.selectTab(this, !0));
  }, "onMouseClick");
  _rad325cc53260a0 = n((e) => {
    this.disposed || this.recycled || this.selected || this._rff101a3ebedfdf();
  }, "_rad325cc53260a0");
  onMousetOut = n((e) => {
    if (!(this.disposed || this.recycled || this._window == null) && !this.selected) {
      let r = new E(e.stageX, e.stageY);
      this._window.hitTestGlobalPoint(r) || this.conceal();
    }
  }, "onMousetOut");
}
