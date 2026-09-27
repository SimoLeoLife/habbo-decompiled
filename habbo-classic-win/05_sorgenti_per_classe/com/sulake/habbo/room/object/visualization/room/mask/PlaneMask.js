// Estratto da HabboAirLauncher.deobf.js, riga 281036.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/mask/PlaneMask.as
// Nome offuscato: _i123e32243dd568

class {
  static {
    n(this, "PlaneMask");
  }
  _r971186c4640fe6 = new B();
  _assetNames = new B();
  _sizes = [];
  _r90fc7b14f7a4c1 = null;
  var_4162 = -1;
  dispose() {
    for (let e of this._r971186c4640fe6.getValues()) e.dispose();
    (this._r971186c4640fe6.dispose(),
      this._assetNames.dispose(),
      (this._sizes = []),
      (this._r90fc7b14f7a4c1 = null));
  }
  _r182f4d80509c77(e) {
    if (this._r971186c4640fe6.getValue(String(e)) != null) return null;
    let r = new x5();
    return (
      this._r971186c4640fe6.add(String(e), r),
      this._sizes.push(e),
      this._sizes.sort((t, i) => t - i),
      r
    );
  }
  _r3b7f5331d263ca(e, r) {
    return this._ra7612a21b84c1f(e)?.getAsset(r) ?? null;
  }
  getAssetName(e) {
    return this._assetNames.getValue(String(e));
  }
  _ra8d81acac9e1b4(e, r) {
    this._assetNames.add(String(e), r);
  }
  _ra7612a21b84c1f(e) {
    if (e === this.var_4162) return this._r90fc7b14f7a4c1;
    let r = this._rb3b1f8fb656e89(e);
    return (
      (this._r90fc7b14f7a4c1 =
        r < this._sizes.length ? (this._r971186c4640fe6.getValue(String(this._sizes[r])) ?? null) : null),
      (this.var_4162 = e),
      this._r90fc7b14f7a4c1
    );
  }
  _rb3b1f8fb656e89(e) {
    let r = 0;
    for (let t = 1; t < this._sizes.length; t++) {
      let i = this._sizes[t] ?? 0,
        s = this._sizes[t - 1] ?? 0;
      if (i > e) {
        i - e < e - s && (r = t);
        break;
      }
      r = t;
    }
    return r;
  }
}
