// Estratto da HabboAirLauncher.deobf.js, riga 375799.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/IRoomInstance.as
// Nome offuscato: _i85d5d9d5325bb1

class {
  constructor(e, r) {
    this.id = e;
    this._container = r;
  }
  static {
    n(this, "IRoomInstance");
  }
  _r287cc241f71916 = new Map();
  _r01ec6f83b662a9 = new Map();
  _r04a5378fba4460 = [];
  _re0d32cc972148a = [];
  _r95a802e919a48e = new B();
  _r46991e2f39b149 = [];
  _renderer = null;
  dispose() {
    for (let e of this._r95a802e919a48e.getValues()) e.dispose();
    (this._r95a802e919a48e.dispose(),
      this._renderer?.dispose(),
      (this._renderer = null),
      (this._container = null),
      (this._r46991e2f39b149.length = 0),
      this._r287cc241f71916.clear(),
      this._r01ec6f83b662a9.clear(),
      (this._r04a5378fba4460.length = 0),
      (this._re0d32cc972148a.length = 0));
  }
  _r3bff114596a1a8(e) {
    return this._r287cc241f71916.has(e);
  }
  _ra3dc9a405b5c73(e) {
    return this._r287cc241f71916.get(e) ?? Number.NaN;
  }
  setNumber(e, r, t = !1) {
    this._r04a5378fba4460.includes(e) ||
      (t && this._r04a5378fba4460.push(e),
      this._r287cc241f71916.get(e) !== r && this._r287cc241f71916.set(e, r));
  }
  getString(e) {
    return this._r01ec6f83b662a9.get(e) ?? null;
  }
  setString(e, r, t = !1) {
    this._re0d32cc972148a.includes(e) ||
      (t && this._re0d32cc972148a.push(e),
      this._r01ec6f83b662a9.get(e) !== r && this._r01ec6f83b662a9.set(e, r));
  }
  _re8f661dca32b6b(e) {
    this._r46991e2f39b149.includes(e) || this._r46991e2f39b149.push(e);
  }
  _r8f3e1ecfa1148e(e) {
    let r = this._r46991e2f39b149.indexOf(e);
    r >= 0 && this._r46991e2f39b149.splice(r, 1);
  }
  update() {
    let e = _ia411d8d8194a3a();
    for (let r = this._r46991e2f39b149.length - 1; r >= 0; r--) {
      let t = this._r4dd7d3f0c6593d(this._r46991e2f39b149[r]);
      if (t != null)
        for (let i = t.getObjectCount() - 1; i >= 0; i--)
          t._rce25aa21e0bb14(i)?._rc3df04144b8b80()?.update(e);
    }
  }
  createRoomObject(e, r, t) {
    return this._container?.createRoomObject(this.id, e, r, t) ?? null;
  }
  _r19d69e91cb19cf(e, r, t, i) {
    let s = this._r208c2cf1938fa6(i);
    if (s == null) return null;
    let o = s._r8ac7f802e686f1(e, r, t);
    return (o != null && this._renderer?._r598c25af9b671f(o), o);
  }
  getObject(e, r) {
    return this._r4dd7d3f0c6593d(r)?.getObject(e) ?? null;
  }
  _r2ae68860e40562(e) {
    return this._r4dd7d3f0c6593d(e)?._r2ae68860e40562() ?? [];
  }
  _rce25aa21e0bb14(e, r) {
    return this._r4dd7d3f0c6593d(r)?._rce25aa21e0bb14(e) ?? null;
  }
  getObjectCount(e) {
    return this._r4dd7d3f0c6593d(e)?.getObjectCount() ?? 0;
  }
  _r0f337385f5ca37(e, r, t) {
    return this._r4dd7d3f0c6593d(t)?._r0f337385f5ca37(e, r) ?? null;
  }
  _rc7d1226973ae1d(e, r) {
    return this._r4dd7d3f0c6593d(r)?._rc7d1226973ae1d(e) ?? 0;
  }
  disposeObject(e, r) {
    let t = this._r4dd7d3f0c6593d(r),
      i = t?.getObject(e) ?? null;
    return t == null || i == null
      ? !1
      : (i._r04bcf029737be6(), this._renderer?._rb99560071708c2(i), t.disposeObject(e));
  }
  _r3ac0980b425a6b(e) {
    let r = this._r4dd7d3f0c6593d(e);
    if (r == null) return 0;
    let t = r.getObjectCount();
    for (let i = 0; i < t; i++) {
      let s = r._rce25aa21e0bb14(i);
      s != null && (this._renderer?._rb99560071708c2(s), s.dispose());
    }
    return (r.reset(), t);
  }
  _rff1194ec9a029f(e) {
    if (e === this._renderer || (this._renderer?.dispose(), (this._renderer = e), this._renderer == null))
      return;
    this._renderer.reset();
    let r = this._rcbcd1968a81928();
    for (let t = r.length - 1; t >= 0; t--) {
      let i = r[t],
        s = this.getObjectCount(i);
      for (let o = s - 1; o >= 0; o--) {
        let d = this._rce25aa21e0bb14(o, i);
        d != null && this._renderer._r598c25af9b671f(d);
      }
    }
  }
  _rabc00691f33c37() {
    return this._renderer;
  }
  _rcbcd1968a81928() {
    return this._r95a802e919a48e
      .getKeys()
      .map((e) => Number.parseInt(e, 10))
      .filter((e) => !Number.isNaN(e));
  }
  _r55ed7f599dd3ad() {
    for (let e of this._r95a802e919a48e.getValues()) {
      let r = e.getObjectCount();
      for (let t = 0; t < r; t++) if (!e._rce25aa21e0bb14(t)?.isInitialized()) return !0;
    }
    return !1;
  }
  _r208c2cf1938fa6(e) {
    let r = String(e),
      t = this._r95a802e919a48e.getValue(r) ?? null;
    if (t != null) return t;
    let i = this._container?._rb64f6286c672bc() ?? null;
    return (i != null && this._r95a802e919a48e.add(r, i), i);
  }
  _r4dd7d3f0c6593d(e) {
    return this._r95a802e919a48e.getValue(String(e)) ?? null;
  }
}
