// Estratto da HabboAirLauncher.deobf.js, riga 80704.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/RoomWallData.as
// Nome offuscato: _i61db516a5a98f0

class a {
  static {
    n(this, "RoomWallData");
  }
  static _r0658492f3842be = [new k(1, 0, 0), new k(0, 1, 0), new k(-1, 0, 0), new k(0, -1, 0)];
  static _r48a047fe8c2beb = [new k(0, 1, 0), new k(-1, 0, 0), new k(0, -1, 0), new k(1, 0, 0)];
  _r8d762dd4eee484 = [];
  var_2263 = [];
  _directions = [];
  var_1311 = [];
  _recd3afba78d3cb = [];
  _r6e13642a14d265 = [];
  _r4913fbe7f03029 = [];
  _r6bb759c3dfb9c1 = [];
  _r7e238c5c904eff = [];
  _r4d9eb39b9d97e2 = !1;
  _count = 0;
  get count() {
    return this._count;
  }
  addWall(e, r, t, i, s) {
    (this._r4d9eb39b9d97e2 || this._r1a212643eda082(e, r, t, i, s)) &&
      (this._r8d762dd4eee484.push(e),
      this._directions.push(r),
      this.var_1311.push(t),
      this._r6e13642a14d265.push(i),
      this._recd3afba78d3cb.push(s),
      this._r4913fbe7f03029.push(!1),
      this._r6bb759c3dfb9c1.push(!1),
      this._r7e238c5c904eff.push(!1),
      this._count++);
  }
  _r21fd4edf06179f(e) {
    return this._r8d762dd4eee484[e];
  }
  _rf28affe776e393(e) {
    return (this.calculateWallEndPoints(), this.var_2263[e]);
  }
  getLength(e) {
    return this.var_1311[e];
  }
  getDirection(e) {
    return this._directions[e];
  }
  _r640e41616744fa(e) {
    return this._r6e13642a14d265[e];
  }
  _r2f9b98ef506813(e) {
    return this._r4913fbe7f03029[e];
  }
  _rdf0586ff1cc3f0(e) {
    return this._recd3afba78d3cb[e];
  }
  _r470989c1656366(e) {
    return this._r6bb759c3dfb9c1[e];
  }
  _rfe19ad4da15f7a(e) {
    return this._r7e238c5c904eff[e];
  }
  _rde5dd3c5899ece(e, r) {
    this._r4913fbe7f03029[e] = r;
  }
  _r469b305e0c7251(e, r) {
    r < this.var_1311[e] &&
      ((this.var_1311[e] = r), (this._r7e238c5c904eff[e] = !0), (this.var_2263 = []));
  }
  _r41b50e33d0b8cf(e, r) {
    if (r > 0 && r < this.var_1311[e]) {
      let t = a._r0658492f3842be[this.getDirection(e)],
        i = this._r8d762dd4eee484[e];
      ((this._r8d762dd4eee484[e] = new E(i.x + r * t.x, i.y + r * t.y)),
        (this.var_1311[e] -= r),
        (this._r6bb759c3dfb9c1[e] = !0),
        (this.var_2263 = []));
    }
  }
  _r1a212643eda082(e, r, t, i, s) {
    for (let o = 0; o < this._count; o++)
      if (
        this._r8d762dd4eee484[o].x === e.x &&
        this._r8d762dd4eee484[o].y === e.y &&
        this._directions[o] === r &&
        this.var_1311[o] === t &&
        this._r6e13642a14d265[o] === i &&
        this._recd3afba78d3cb[o] === s
      )
        return !1;
    return !0;
  }
  calculateWallEndPoints() {
    if (this.var_2263.length !== this.count) {
      this.var_2263 = [];
      for (let e = 0; e < this.count; e++) {
        let r = this._r21fd4edf06179f(e),
          t = a._r0658492f3842be[this.getDirection(e)],
          i = this.getLength(e),
          s = new E(r.x, r.y);
        ((s.x += t.x * i), (s.y += t.y * i), this.var_2263.push(s));
      }
    }
  }
}
