// Estratto da HabboAirLauncher.deobf.js, riga 166809.

class {
  static {
    n(this, "_i14a6ddc910d740");
  }
  _cache = new B();
  _lastAccessTime = 0;
  constructor() {
    this.setLastAccessTime(_ia411d8d8194a3a());
  }
  dispose() {
    for (let e of this._cache.getValues()) e?.dispose();
    (this._cache.dispose(), (this._lastAccessTime = 0));
  }
  getDirectionCache(e) {
    return this._cache.getValue(String(e)) ?? null;
  }
  updateDirectionCache(e, r) {
    (this._cache.remove(String(e)), this._cache.add(String(e), r));
  }
  setLastAccessTime(e) {
    this._lastAccessTime = e;
  }
  getLastAccessTime() {
    return this._lastAccessTime;
  }
}
