// Extracted from HabboAirLauncher.deobf.js, line 297631.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5cd1753188af5f

class {
  constructor(e, r, t, i, s, o, d, c) {
    this.configId = e;
    this.variableId = r;
    this.value = t;
    this._rd039082a66c6c1 = i;
    this._rde47e35540b4cb = s;
    this.isInitialize = d;
    ((this.extra = o ?? new B()), (this.createdAt = c), (this._r4e70e7cf4e0337 = c));
  }
  static {
    n(this, "UnkClass_5cd175");
  }
  extra;
  createdAt;
  _r4e70e7cf4e0337;
  updateId = 0;
  _r8ceba2ef379539 = 0;
  dispose() {
    this.extra != null && (this.extra.dispose(), (this.extra = null));
  }
}
