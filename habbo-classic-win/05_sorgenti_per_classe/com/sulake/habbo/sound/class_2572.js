// Estratto da HabboAirLauncher.deobf.js, riga 259051.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/class_2572.as
// Nome offuscato: _i5044ecb27b9bcd

class a {
  static {
    n(this, "class_2572");
  }
  static _r8e69fbc9d10947 = 4 * 1e3;
  _ra2080879f945f2 = new globalThis.Map();
  put(e, r) {
    this._r9fece8d98cd3a9();
    let t = _ia411d8d8194a3a();
    this._ra2080879f945f2.set(e, new NavigatorCacheEntry(e, r, t, this.expiresAt(t)));
  }
  getEntry(e) {
    let r = this._ra2080879f945f2.get(e) ?? null;
    return r == null ? null : r.hasExpired(_ia411d8d8194a3a()) ? (this._ra2080879f945f2.delete(e), null) : r.payload;
  }
  removeEntry(e) {
    this._ra2080879f945f2.delete(e);
  }
  _r9fece8d98cd3a9() {
    let e = _ia411d8d8194a3a();
    for (let [r, t] of this._ra2080879f945f2.entries())
      (t == null || t.hasExpired(e)) && this._ra2080879f945f2.delete(r);
  }
  expiresAt(e) {
    return e + a._r8e69fbc9d10947;
  }
}
