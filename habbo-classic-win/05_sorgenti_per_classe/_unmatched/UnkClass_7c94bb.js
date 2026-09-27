// Extracted from HabboAirLauncher.deobf.js, line 345824.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7c94bb8db295dd

class {
  constructor(e, r, t = null) {
    this._rb1452a907a6111 = e;
    this.var_3897 = r;
    this._onChangeCallback = t;
    (this._rb1452a907a6111.addEventListener(y.const_238, this._ra262fbe4572d0d),
      this._rb1452a907a6111.addEventListener(y.const_769, this._r8385258cab7040));
  }
  static {
    n(this, "UnkClass_7c94bb");
  }
  _disposed = !1;
  _r49d121be73413d = !1;
  _r5893ff7770a4d1 = !1;
  _r20fdae6abdda45 = 0;
  _options = [];
  _r208bbba3703b9b = [];
  get disposed() {
    return this._disposed;
  }
  get _rd875ac05798c2f() {
    return this._r208bbba3703b9b;
  }
  init(e, r) {
    ((this._options = e),
      (this._r5893ff7770a4d1 = !1),
      (this._r49d121be73413d = !1),
      (this._r20fdae6abdda45 = 0),
      this.populate(r));
  }
  get _r8d22304b8b7a17() {
    let e = this._rb1452a907a6111.selection;
    return e < 0 || e >= this._r208bbba3703b9b.length ? null : (this._r208bbba3703b9b[e] ?? null);
  }
  get _r5aab43aa73aea0() {
    return this._r8d22304b8b7a17?.id ?? -1;
  }
  set _r5aab43aa73aea0(e) {
    this.init(this._options, e);
  }
  dispose() {
    this._disposed ||
      (this._rb1452a907a6111?.dispose(),
      (this._rb1452a907a6111 = null),
      (this._onChangeCallback = null),
      (this._options = []),
      (this.var_3897 = null),
      (this._r208bbba3703b9b = []),
      (this._disposed = !0));
  }
  populate(e, r = !1) {
    let t = -1;
    this._r208bbba3703b9b.splice(0, this._r208bbba3703b9b.length);
    let i = [];
    for (let s of this._options) {
      if (e === s.id && ((t = this._r208bbba3703b9b.length), s._r468491a712806e && !r)) {
        ((this._r49d121be73413d = !0), this.populate(e, !0));
        return;
      }
      (!s._r468491a712806e || r) && (this._r208bbba3703b9b.push(s), i.push(s.dropdownOptions));
    }
    (this._r5c830b38b09700 && !r && i.push(this.var_3897),
      (this._r5893ff7770a4d1 = !0),
      this._rb1452a907a6111.populateWithVector(i),
      t !== -1
        ? ((this._rb1452a907a6111.selection = t), (this._r20fdae6abdda45 = e))
        : (this._r20fdae6abdda45 = -1));
  }
  get _r5c830b38b09700() {
    return this._options.some((e) => e._r468491a712806e);
  }
  _ra262fbe4572d0d = n((e) => {
    if (this._rb1452a907a6111.selection >= this._r208bbba3703b9b.length) {
      ((this._r49d121be73413d = !0),
        this.populate(this._r20fdae6abdda45, !0),
        this._rb1452a907a6111.openMenu());
      return;
    }
    ((this._r20fdae6abdda45 = this._r5aab43aa73aea0), this._onChangeCallback?.(this._r8d22304b8b7a17));
  }, "_ra262fbe4572d0d");
  _r8385258cab7040 = n((e) => {
    if (this._r5893ff7770a4d1) {
      this._r5893ff7770a4d1 = !1;
      return;
    }
    this._r49d121be73413d &&
      (this._r8d22304b8b7a17 == null || !this._r8d22304b8b7a17._r468491a712806e) &&
      ((this._r49d121be73413d = !1), this.populate(this._r5aab43aa73aea0, !1));
  }, "_r8385258cab7040");
}
