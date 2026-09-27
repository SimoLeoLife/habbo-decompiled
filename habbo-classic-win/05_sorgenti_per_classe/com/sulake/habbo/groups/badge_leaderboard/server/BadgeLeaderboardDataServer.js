// Estratto da HabboAirLauncher.deobf.js, riga 227670.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/badge_leaderboard/server/BadgeLeaderboardDataServer.as
// Nome offuscato: _i867289b10619da

class a {
  constructor(e) {
    this._r36688ac5c2359f = e;
  }
  static {
    n(this, "BadgeLeaderboardDataServer");
  }
  static PAGE_SIZE = ka.PAGE_SIZE;
  static const_148 = 50;
  static _ref4b3f00fa24b4 = a.const_148 / a.PAGE_SIZE;
  static _rb86ae144774021 = 60 * 1e3;
  static PREFETCH_BOUNDARY_DISTANCE = 1;
  _disposed = !1;
  _rf11141abed811b = new Map();
  _activeContextKey = null;
  var_3773 = 0;
  _activeCallback = null;
  _r2aa0262a2efffc = 0;
  _r32920d2b1a35ef = -1;
  _r27828bc47ded9e = -1;
  requestPage(e, r, t, i) {
    if (this._disposed || i == null) return;
    t < 0 && (t = 0);
    let s = this.getContext(e, r);
    ((this._activeContextKey = s.key),
      (this.var_3773 = t),
      (this._activeCallback = i),
      this._r2aa0262a2efffc++,
      (this._r32920d2b1a35ef = -1),
      (this._r27828bc47ded9e = -1));
    let o = this._raf0ecc5cdfcb49(s, t);
    if (o != null)
      (this._re4a11f391c868d(o), o._r2c3a7e0337dddc && this._r6a4d6372838ad7(s, o._r637def260938c2));
    else {
      let d = this._rb2197e996d5306(t);
      this._r0c403a83098513(s, d)
        ? this._r6a4d6372838ad7(s, d)
        : this._re4a11f391c868d(
            new _if4302c201d51fd(new BadgeLeaderboardDataServerChunk(e, r, t, s.totalEntries, [], s.ownEntry), d, -1, !1),
          );
    }
    this.prefetchAroundPage(s, t);
  }
  _r38cda1b5b06cba(e) {
    if (this._disposed || e == null || e.size !== a.const_148) return;
    let r = this.getContext(e.type, e.rarity),
      t = _ia411d8d8194a3a(),
      i = new _id6bf71fdb5ed61(
        e.page,
        e.totalEntries,
        e.entries == null ? [] : e.entries.concat(),
        e.ownEntry,
        t,
      );
    (r.chunks.set(i._r637def260938c2, i),
      r._r421eada3383525.set(i._r637def260938c2, !1),
      (r.totalEntries = e.totalEntries),
      (r.ownEntry = e.ownEntry),
      this._activeContextKey === r.key &&
        (this._r27898bfe7dc505(r), this.prefetchAroundPage(r, this.var_3773)));
  }
  dispose() {
    this._disposed ||
      ((this._r36688ac5c2359f = null),
      this._rf11141abed811b.clear(),
      (this._activeContextKey = null),
      (this._activeCallback = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  _r27898bfe7dc505(e) {
    let r = this._raf0ecc5cdfcb49(e, this.var_3773);
    r != null && this._re4a11f391c868d(r);
  }
  _re4a11f391c868d(e) {
    this._activeCallback == null ||
      e == null ||
      this._disposed ||
      e.data.page !== this.var_3773 ||
      this.getContextKey(e.data.type, e.data.rarity) !== this._activeContextKey ||
      (this._r27828bc47ded9e === this._r2aa0262a2efffc && this._r32920d2b1a35ef === e._r455388b2d8c882) ||
      ((this._r27828bc47ded9e = this._r2aa0262a2efffc),
      (this._r32920d2b1a35ef = e._r455388b2d8c882),
      this._activeCallback(e.data));
  }
  _raf0ecc5cdfcb49(e, r) {
    let t = this._rb2197e996d5306(r),
      i = e.chunks.get(t) ?? null;
    if (i == null) return null;
    let o = (r % a._ref4b3f00fa24b4) * a.PAGE_SIZE,
      d = [],
      c = Math.max(0, Math.min(a.PAGE_SIZE, i.entries.length - o));
    for (let b = 0; b < c; b++) d.push(i.entries[o + b]);
    let f = i.ownEntry ?? e.ownEntry,
      l = _ia411d8d8194a3a() - i._rce812ca560e25f > a._rb86ae144774021;
    return new _if4302c201d51fd(new BadgeLeaderboardDataServerChunk(e.type, e.rarity, r, i.totalEntries, d, f), t, i._rce812ca560e25f, l);
  }
  prefetchAroundPage(e, r) {
    let t = this._rb2197e996d5306(r);
    if ((t + 1) * a._ref4b3f00fa24b4 - 1 - r > a.PREFETCH_BOUNDARY_DISTANCE) return;
    let s = t + 1;
    if (!this._r0c403a83098513(e, s)) return;
    let o = e.chunks.get(s) ?? null;
    (o == null || _ia411d8d8194a3a() - o._rce812ca560e25f > a._rb86ae144774021) && this._r6a4d6372838ad7(e, s);
  }
  _r6a4d6372838ad7(e, r) {
    this._disposed ||
      e == null ||
      this._r36688ac5c2359f == null ||
      !this._r0c403a83098513(e, r) ||
      (e._r421eada3383525.get(r) ?? !1) ||
      (e._r421eada3383525.set(r, !0), this._r36688ac5c2359f(new _i86258ff7bd9dc1(e.type, e.rarity, r, a.const_148)));
  }
  _r0c403a83098513(e, r) {
    return r < 0 ? !1 : e.totalEntries < 0 ? !0 : r * a.const_148 < e.totalEntries;
  }
  getContext(e, r) {
    let t = this.getContextKey(e, r),
      i = this._rf11141abed811b.get(t) ?? null;
    return (i == null && ((i = new BadgeLeaderboardDataServerContext(e, r, t)), this._rf11141abed811b.set(t, i)), i);
  }
  _rb2197e996d5306(e) {
    return Math.trunc(e / a._ref4b3f00fa24b4);
  }
  getContextKey(e, r) {
    return `${e}:${r}`;
  }
}
