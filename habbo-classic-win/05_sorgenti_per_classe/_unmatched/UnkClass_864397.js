// Extracted from HabboAirLauncher.deobf.js, line 58816.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8643977614b683

class extends UnkClass_e40b94 {
  static {
    n(this, "UnkClass_864397");
  }
  mElapsedTime;
  _fileName;
  constructor(e, r = 0, t = 0, i = 0) {
    (super(UnkClass_e40b94.PROGRESS, !1, !1, r, t), (this._fileName = e), (this.mElapsedTime = i));
  }
  get elapsedTime() {
    return this.mElapsedTime;
  }
  get fileName() {
    return this._fileName;
  }
}
