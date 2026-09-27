// Estratto da HabboAirLauncher.deobf.js, riga 281095.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/utils/Randomizer.as
// Nome offuscato: _i6e31596d14b1fc

class a {
  static {
    n(this, "Randomizer");
  }
  static _r20fc643df4be05 = 1;
  static _r549f5d831c0b14 = 16777216;
  static _r979c1fdb2568bb = null;
  var_3237 = a._r20fc643df4be05;
  _modulus = a._r549f5d831c0b14;
  var_5714 = 69069;
  _increment = 5;
  set seed(e) {
    this.var_3237 = e;
  }
  set modulus(e) {
    this._modulus = e < 1 ? 1 : e;
  }
  dispose() {}
  static setSeed(e = a._r20fc643df4be05) {
    a._rd1f203396e9d2e().seed = e;
  }
  static _ra3543449317a41(e = a._r549f5d831c0b14) {
    a._rd1f203396e9d2e().modulus = e;
  }
  static getValues(e, r, t) {
    return a._rd1f203396e9d2e().getRandomValues(e, r, t);
  }
  static getArray(e, r) {
    return a._rd1f203396e9d2e()._rde59d6b015b43b(e, r);
  }
  getRandomValues(e, r, t) {
    let i = [];
    for (let s = 0; s < e; s++) i.push(this.iterateScaled(r, t - r));
    return i;
  }
  _rde59d6b015b43b(e, r) {
    if (e > r || r > 1e3) return null;
    let t = Array.from({ length: r + 1 }, (s, o) => o),
      i = [];
    for (let s = 0; s < e; s++) {
      let o = this.iterateScaled(0, t.length - 1);
      (i.push(t[o] ?? 0), t.splice(o, 1));
    }
    return i;
  }
  iterate() {
    let e = this.var_5714 * this.var_3237 + this._increment;
    return (e < 0 && (e = -e), (e %= this._modulus), (this.var_3237 = e), e);
  }
  iterateScaled(e, r) {
    let t = this.iterate();
    return r < 1 ? e : Math.trunc(e + (t / this._modulus) * r);
  }
  static _rd1f203396e9d2e() {
    return (a._r979c1fdb2568bb == null && (a._r979c1fdb2568bb = new a()), a._r979c1fdb2568bb);
  }
}
