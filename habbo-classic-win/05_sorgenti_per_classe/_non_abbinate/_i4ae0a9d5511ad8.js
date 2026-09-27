// Estratto da HabboAirLauncher.deobf.js, riga 82743.

class a {
  constructor(e, r, t, i, s, o, d, c) {
    this._r0c0044768c2b3a = e;
    this.isInitialize = r;
    this.isUserEntity = t;
    this.entityId = i;
    this.value = s;
    this._rd039082a66c6c1 = o;
    this._rde47e35540b4cb = d;
    ((this.configId = a._r52c91c2cced216(e)),
      (this.variableId = a._r9d35e38cd67c6e(e)),
      (this.extra = c ?? new B()));
  }
  static {
    n(this, "_i4ae0a9d5511ad8");
  }
  configId;
  variableId;
  extra;
  static _r52c91c2cced216(e) {
    return Number(e.split("|")[0]) | 0;
  }
  static _r9d35e38cd67c6e(e) {
    let r = e.indexOf("|");
    return r < 0 ? "" : e.substr(r + 1);
  }
}
