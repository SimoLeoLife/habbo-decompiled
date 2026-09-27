// Extracted from HabboAirLauncher.deobf.js, line 166835.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/cache/AvatarImageBodyPartCache.as
// Obfuscated name: _i4c82939a4f8e7d

class {
  static {
    n(this, "AvatarImageBodyPartCache");
  }
  _cache = new B();
  _currentAction = null;
  _currentDirection = 0;
  _disposed = !1;
  setAction(e, r) {
    (this._currentAction == null && (this._currentAction = e),
      this.getActionCache(this._currentAction)?.setLastAccessTime(r),
      (this._currentAction = e));
  }
  dispose() {
    if (!this._disposed) {
      for (let e of this._cache.getKeys()) this._cache.getValue(e)?.dispose();
      (this._cache.dispose(),
        (this._currentAction = null),
        (this._currentDirection = 0),
        (this._disposed = !0));
    }
  }
  disposeActions(e, r) {
    if (!this._disposed)
      for (let t of this._cache.getKeys()) {
        let i = this._cache.getValue(t);
        i != null && r - i.getLastAccessTime() >= e && (i.dispose(), this._cache.remove(t));
      }
  }
  getAction() {
    return this._currentAction;
  }
  setDirection(e) {
    this._currentDirection = e;
  }
  getDirection() {
    return this._currentDirection;
  }
  getActionCache(e = null) {
    if (this._currentAction == null && e == null) return null;
    let r = e ?? this._currentAction;
    return r == null
      ? null
      : r.overridingAction !== ""
        ? (this._cache.getValue(r.overridingAction) ?? null)
        : (this._cache.getValue(r.id) ?? null);
  }
  updateActionCache(e, r) {
    let t = e.overridingAction !== "" ? e.overridingAction : e.id;
    (this._cache.remove(t), this._cache.add(t, r));
  }
}
