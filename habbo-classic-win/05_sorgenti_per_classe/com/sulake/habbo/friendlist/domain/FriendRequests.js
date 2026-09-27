// Estratto da HabboAirLauncher.deobf.js, riga 217115.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/domain/FriendRequests.as
// Nome offuscato: _i0e45867196032d

class {
  static {
    n(this, "FriendRequests");
  }
  var_630;
  _ra75e017568ad17 = [];
  _limit;
  _clubLimit;
  constructor(e, r, t) {
    ((this.var_630 = e), (this._limit = r), (this._clubLimit = t));
  }
  _rfba60cd726e045(e) {
    let r = [];
    for (let t of this._ra75e017568ad17) (!e || t.state !== Po.STATE_OPEN) && r.push(t);
    for (let t of r)
      (Util.remove(this._ra75e017568ad17, t), this.var_630.view?._r96e1219e2390cb(t), t.dispose());
    this.refreshShading();
  }
  _r5efc4cec21c4c4(e) {
    let r = this._r9a6a4a78e7df85(e);
    r != null && ((r.state = Po.STATE_FAILED), this.var_630.view?.refreshRequestEntry(r));
  }
  _r2513a3d4c4957f(e) {
    this._ra75e017568ad17.push(e);
  }
  _r01fbe580789752(e) {
    (this._ra75e017568ad17.push(e), this.var_630.view?._r2513a3d4c4957f(e));
  }
  _r878647e1c0612e(e) {
    for (let r of this._ra75e017568ad17) if (r.requestId === e) return r;
    return null;
  }
  _r9a6a4a78e7df85(e) {
    for (let r of this._ra75e017568ad17) if (r.requesterUserId === e) return r;
    return null;
  }
  refreshShading() {
    let e = !0;
    for (let r of this._ra75e017568ad17) ((e = !e), this.var_630.view?.refreshShading(r, e));
  }
  _rf97e254fea641d() {
    let e = 0;
    for (let r of this.requests) r.state === Po.STATE_OPEN && e++;
    return e;
  }
  get requests() {
    return this._ra75e017568ad17;
  }
  get limit() {
    return this._limit;
  }
  get friendRequests() {
    return this._clubLimit;
  }
  set limit(e) {
    this._limit = e;
  }
}
