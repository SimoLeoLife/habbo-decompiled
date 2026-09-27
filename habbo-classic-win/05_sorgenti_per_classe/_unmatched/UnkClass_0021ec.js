// Extracted from HabboAirLauncher.deobf.js, line 219430.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0021ecd8f808c7

class extends UnkClass_31f575 {
  constructor(r) {
    super();
    this._r79ce012f564afd = r;
  }
  static {
    n(this, "UnkClass_0021ec");
  }
  dispose() {
    (super.dispose(), (this._r79ce012f564afd = null));
  }
  apply(r) {
    this._r79ce012f564afd != null &&
      (r._r91cf818f369ca8(this._r79ce012f564afd), this._r79ce012f564afd.onRemove());
  }
}
