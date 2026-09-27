// Extracted from HabboAirLauncher.deobf.js, line 236513.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/effects/EffectsModel.as
// Obfuscated name: _i9d707f89d96ae5

class a {
  constructor(e, r, t, i, s) {
    this.var_63 = e;
    this._communication = t;
    this._assets = i;
    ((this._r9c99217a475886 = new EffectListProxy(this, a.FILTER_INCLUDE_ACTIVE)),
      (this._r21f2b572859644 = new EffectListProxy(this, a.FILTER_INCLUDE_INACTIVE)));
  }
  static {
    n(this, "EffectsModel");
  }
  static FILTER_NONE = -1;
  static FILTER_INCLUDE_INACTIVE = 0;
  static FILTER_INCLUDE_ACTIVE = 1;
  _view = null;
  var_660 = [];
  _r9c99217a475886;
  _r21f2b572859644;
  _disposed = !1;
  var_1123 = -1;
  get disposed() {
    return this._disposed;
  }
  get lastActivatedEffect() {
    return this.var_1123;
  }
  dispose() {
    this._disposed ||
      ((this.var_63 = null),
      this._view?.dispose(),
      (this._view = null),
      this._r9c99217a475886?.dispose(),
      (this._r9c99217a475886 = null),
      this._r21f2b572859644?.dispose(),
      (this._r21f2b572859644 = null),
      (this.var_660 = []),
      (this._assets = null),
      (this._communication = null),
      (this._disposed = !0));
  }
  requestInitialization() {}
  categorySwitch(e) {}
  addEffect(e, r = !0) {
    let t = this.getEffect(e.type);
    if (t != null) t.amountInInventory++;
    else {
      let s = this._assets?.getAssetByName(`fx_icon_${e.type}_png`)?.content;
      (s != null && (e._r145cc0394d677f = s), this.var_660.push(e));
    }
    r && this._rbd5bdbf024013a();
  }
  _rbd5bdbf024013a() {
    this._view != null && (this._view.updateListViews(), this._view.updateActionView());
  }
  _r0d74899218112f(e) {
    this.var_63?.communication?.connection.send(new UnkMessageComposer_1args_e28d2d(e));
  }
  _re4eb4749736c9b(e) {
    let r = this.getEffect(e);
    r != null &&
      (this.stopUsingAllEffects(!1, !1), (r.isActive = !0), (r._r780270c6ffe49b = !0), this._rbd5bdbf024013a());
  }
  _r1ab8f9ca4b1617(e) {
    this.stopUsingAllEffects(!1, !1, !0);
    let r = this.getEffect(e);
    r != null &&
      (r.isActive || this._r0d74899218112f(r.type),
      r._r780270c6ffe49b ||
        ((r._r780270c6ffe49b = !0),
        this.var_63?.communication?.connection.send(new class_2959(e)),
        (this.var_1123 = e),
        this._rbd5bdbf024013a()));
  }
  _r1fc2766d59a6e2(e, r = !1) {
    let t = this.getEffect(e);
    t != null &&
      t._r780270c6ffe49b &&
      ((t._r780270c6ffe49b = !1),
      r && (this.var_63?.communication?.connection.send(new class_2959(-1)), (this.var_1123 = -1)),
      this._rbd5bdbf024013a());
  }
  stopUsingAllEffects(e = !0, r = !0, t = !1) {
    for (let i of this.var_660) i._r780270c6ffe49b = !1;
    (e && this.var_63?.communication?.connection.send(new class_2959(-1)),
      r && this._rbd5bdbf024013a(),
      t && (this.var_1123 = -1));
  }
  _rb752d8383c92b2(e) {
    let r = this.getEffect(e);
    r != null &&
      (r.isSelected ? this._r4f260cb2c62d21(e) : this.setEffectSelected(e), this._rbd5bdbf024013a());
  }
  _rd55676d87b2e35(e) {
    return this.getEffect(e);
  }
  setEffectSelected(e) {
    let r = this.getEffect(e);
    r != null && (this._ref27f46ca47e8e(!1), (r.isSelected = !0), this._rbd5bdbf024013a());
  }
  _r4f260cb2c62d21(e) {
    let r = this.getEffect(e);
    r != null && ((r.isSelected = !1), this._rbd5bdbf024013a());
  }
  _rb45ea6a7f3bba7(e = a.FILTER_NONE) {
    return this.getEffects(e).find((r) => r.isSelected) ?? null;
  }
  getEffects(e = a.FILTER_NONE) {
    return this.var_660.filter(
      (r) =>
        (r.isActive && e === a.FILTER_INCLUDE_ACTIVE) ||
        (!r.isActive && e === a.FILTER_INCLUDE_INACTIVE) ||
        e === a.FILTER_NONE,
    );
  }
  _r9e4c12b1e5b641(e) {
    this.var_1123 = -1;
    let r = this.getEffect(e);
    r != null &&
      (r.amountInInventory > 1 ? (r.setOneEffectExpired(), this._rbd5bdbf024013a()) : this.removeEffect(r.type));
  }
  _r9695b93d61831d(e, r = a.FILTER_NONE) {
    let t = this.getEffects(r);
    return e < 0 || e >= t.length ? null : (t[e] ?? null);
  }
  getWindowContainer() {
    return this._view?.getWindowContainer() ?? null;
  }
  closingInventoryView() {}
  subCategorySwitch(e) {}
  _r28bff8b1979a75() {
    this.var_1123 !== -1 && this._r1ab8f9ca4b1617(this.var_1123);
  }
  updateView() {
    this._view != null &&
      !this._view.disposed &&
      (this._view.updateListViews(), this._view.updateActionView());
  }
  selectItemById(e) {
    this.setEffectSelected(Number.parseInt(e, 10));
  }
  getEffect(e) {
    return this.var_660.find((r) => r.type === e) ?? null;
  }
  removeEffect(e) {
    let r = this.var_660.findIndex((t) => t.type === e);
    r >= 0 && (this.var_660.splice(r, 1), this._rbd5bdbf024013a());
  }
  _ref27f46ca47e8e(e = !0) {
    for (let r of this.var_660) r.isSelected = !1;
    e && this._rbd5bdbf024013a();
  }
}
