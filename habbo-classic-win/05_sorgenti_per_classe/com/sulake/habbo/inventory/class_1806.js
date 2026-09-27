// Estratto da HabboAirLauncher.deobf.js, riga 243439.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/class_1806.as
// Nome offuscato: _i9873e4b334fe0a

class {
  constructor(e, r, t) {
    this._communication = e;
    this._events = r;
    this._inventory = t;
    this._communication?._r2e106e2349a0b6(new _ib6e5bd32bc7209((i) => this._r9c88311daa9157(i)));
  }
  static {
    n(this, "class_1806");
  }
  _r0d9dae7e7de00b = new Map();
  _recc2cbe0c0dd7f = new Map();
  dispose() {
    ((this._communication = null),
      (this._events = null),
      (this._inventory = null),
      this._r0d9dae7e7de00b.clear(),
      this._recc2cbe0c0dd7f.clear());
  }
  _r76597cac57aa73(e) {
    return this._r500bbbdb2c23f9(e) === 0
      ? !1
      : (this._r0d9dae7e7de00b.delete(e),
        this._recc2cbe0c0dd7f.delete(e),
        this._r6f2be14b7b0a5f(e),
        this._r1fe46891192a38(),
        !0);
  }
  _rc7458d0f1e04f2(e, r) {
    if (this._r500bbbdb2c23f9(e) === 0) return !1;
    let t = this._r0d9dae7e7de00b.get(e);
    for (let i of r) t?.remove(i);
    return (this._rb2f237398c41a6(e, r), this._rc180b5569a84e5(e, r), this._r1fe46891192a38(), !0);
  }
  _r2d59b93ea65720(e) {
    return this._r500bbbdb2c23f9(e) === 0
      ? (this._r0d9dae7e7de00b.delete(e),
        this._recc2cbe0c0dd7f.delete(e),
        this._r6f2be14b7b0a5f(e),
        this._r1fe46891192a38(),
        !0)
      : !1;
  }
  isUnseen(e, r) {
    return this._r0d9dae7e7de00b.get(e)?.contains(r) ?? !1;
  }
  _r1726cb679cf29b(e, r) {
    return this._r0d9dae7e7de00b.get(e)?.remove(r)
      ? (this._rb2f237398c41a6(e, [r]), this._r1fe46891192a38(), !0)
      : !1;
  }
  _r2431cf4ae71bf9(e) {
    return this._r0d9dae7e7de00b.get(e)?.toArray() ?? [];
  }
  _r500bbbdb2c23f9(e) {
    return this._r0d9dae7e7de00b.get(e)?.length ?? 0;
  }
  _rcde78de58b9cff(e, r) {
    (this._rdf9ec8b6a4661b(e, [r]), this._r00a88b7f05f8e4());
  }
  _r6692701be4ddd8(e, r) {
    this._rdf9ec8b6a4661b(e, r, this._recc2cbe0c0dd7f);
  }
  _reb06f4808721ea(e, r) {
    return this._recc2cbe0c0dd7f.get(e)?.contains(r) ?? !1;
  }
  _r9c88311daa9157(e) {
    let r = e.getParser();
    for (let t of r._rce5da95ddf8754()) this._rdf9ec8b6a4661b(t, r._r82d081ea1f3fcd(t));
    this._r00a88b7f05f8e4();
  }
  _r00a88b7f05f8e4() {
    let e = this._inventory;
    (e?.isInitialized &&
      (e._rf085caf479da12(),
      e._r9275a8e42af3cc?._r9afefab38edea3?.(),
      e._refc910356bea72?.updateView?.(),
      e._re13e2a8fc67c8d?.updateView?.()),
      this._r1fe46891192a38());
  }
  _r1fe46891192a38() {
    let e = new d1();
    for (let r of $t.INVENTORY_CATEGORIES) {
      let t = this._r500bbbdb2c23f9(r);
      (e.setCategoryCount(r, t), $t.INVENTORY_CATEGORIES.indexOf(r) >= 0 && (e._r21d94a797217ff += t));
    }
    this._events?.dispatchEvent?.(e);
  }
  _rdf9ec8b6a4661b(e, r, t = this._r0d9dae7e7de00b) {
    if (r == null) return;
    let i = t.get(e);
    i == null && ((i = new Set_()), t.set(e, i));
    for (let s of r) i.add(s);
  }
  _r6f2be14b7b0a5f(e) {
    this._communication?.connection.send(new _i3d035c65d2b98d(e));
  }
  _rc180b5569a84e5(e, r) {
    this._communication?.connection.send(new _ibd0d7b095c65ff(e, r));
  }
  _rb2f237398c41a6(e, r) {
    let t = this._recc2cbe0c0dd7f.get(e);
    if (!(t == null || r == null)) for (let i of r) t.remove(i);
  }
}
