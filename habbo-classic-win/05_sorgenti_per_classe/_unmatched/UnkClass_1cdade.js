// Extracted from HabboAirLauncher.deobf.js, line 337770.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1cdade9e16e263

class {
  static {
    n(this, "UnkClass_1cdade");
  }
  var_3076;
  _r1a8a9e0b999a98;
  _rdcf2b7f1948a7d;
  _r3d0cbb8e7eff5b;
  _r3a0b61a3c33285;
  _rd392f1f5db68be;
  get songId() {
    return this.var_3076;
  }
  get startPos() {
    return this._r1a8a9e0b999a98 < 0 ? 0 : this._r1a8a9e0b999a98 + (_ia411d8d8194a3a() - this._r3d0cbb8e7eff5b) / 1e3;
  }
  get _rd69d61db254947() {
    return this._rdcf2b7f1948a7d;
  }
  get _r8d76cdbd314434() {
    return this._r3a0b61a3c33285;
  }
  get _r754bf5401e8707() {
    return this._rd392f1f5db68be;
  }
  constructor(e, r, t, i = 2, s = 1) {
    ((this.var_3076 = e),
      (this._r1a8a9e0b999a98 = r),
      (this._rdcf2b7f1948a7d = t),
      (this._r3a0b61a3c33285 = i),
      (this._rd392f1f5db68be = s),
      (this._r3d0cbb8e7eff5b = _ia411d8d8194a3a()));
  }
}
