// Extracted from HabboAirLauncher.deobf.js, line 143462.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i08627468871eb0

class a {
  static {
    n(this, "UnkClass_086274");
  }
  var_2415 = new Map();
  add(e, r, t, i = []) {
    this.var_2415.set(e, new ne(e, r, t, !1, i));
  }
  _r9290a4740af1b4(e, r) {
    this.add(e, r, ne.BOOLEAN);
  }
  _r1c06df888e2da7(e, r) {
    this.add(e, r, ne.INT);
  }
  _r759b48ed93edc4(e, r) {
    this.add(e, r, ne.const_77);
  }
  _r058c48af9ddf46(e, r) {
    this.add(e, r, ne.const_131);
  }
  _r894201b6738430(e, r) {
    this.add(e, r, ne.NUMBER);
  }
  _r9360b2a85c30a1(e, r) {
    this.add(e, r, ne.STRING);
  }
  _rc8b7296a573325(e, r, t) {
    this.add(e, r, ne.STRING, t);
  }
  _r52ff0e3308ee77(e, r) {
    this.add(e, r, ne.ARRAY);
  }
  get(e) {
    return this.var_2415.get(e) ?? new ne(e, null, ne.STRING);
  }
  clone() {
    let e = new a();
    for (let [r, t] of this.var_2415.entries()) e.var_2415.set(r, t);
    return e;
  }
}
