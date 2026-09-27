// Estratto da HabboAirLauncher.deobf.js, riga 219430.

class extends _i31f5752efff6cb {
  constructor(r) {
    super();
    this._r79ce012f564afd = r;
  }
  static {
    n(this, "_i0021ecd8f808c7");
  }
  dispose() {
    (super.dispose(), (this._r79ce012f564afd = null));
  }
  apply(r) {
    this._r79ce012f564afd != null &&
      (r._r91cf818f369ca8(this._r79ce012f564afd), this._r79ce012f564afd.onRemove());
  }
}
