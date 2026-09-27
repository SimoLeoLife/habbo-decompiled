// Extracted from HabboAirLauncher.deobf.js, line 201631.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i94929b1b534b80

class {
  constructor(e, r) {
    this._rdd8f7fd0f90109 = e;
    this._r8d9a9f8db33150 = r;
  }
  static {
    n(this, "UnkClass_94929b");
  }
  get first() {
    return this._rdd8f7fd0f90109;
  }
  get second() {
    return this._r8d9a9f8db33150;
  }
  get top() {
    return this._rdd8f7fd0f90109.y < this._r8d9a9f8db33150.y ? this._rdd8f7fd0f90109 : this._r8d9a9f8db33150;
  }
  get bottom() {
    return this._rdd8f7fd0f90109.y >= this._r8d9a9f8db33150.y ? this._rdd8f7fd0f90109 : this._r8d9a9f8db33150;
  }
  get left() {
    return this._rdd8f7fd0f90109.x < this._r8d9a9f8db33150.x ? this._rdd8f7fd0f90109 : this._r8d9a9f8db33150;
  }
  get right() {
    return this._rdd8f7fd0f90109.x >= this._r8d9a9f8db33150.x ? this._rdd8f7fd0f90109 : this._r8d9a9f8db33150;
  }
  get _r8d650f7d8a922c() {
    return Math.trunc(this._rdd8f7fd0f90109.y) === Math.trunc(this._r8d9a9f8db33150.y);
  }
  get older() {
    return this._rdd8f7fd0f90109.timeStamp < this._r8d9a9f8db33150.timeStamp
      ? this._rdd8f7fd0f90109
      : this._r8d9a9f8db33150;
  }
}
