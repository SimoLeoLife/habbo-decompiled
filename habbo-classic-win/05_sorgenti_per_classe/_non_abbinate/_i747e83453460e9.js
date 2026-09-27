// Estratto da HabboAirLauncher.deobf.js, riga 50871.

class extends Ft {
  constructor(r, t) {
    super();
    this.assetName = r;
    this._r0c2aa0246d56f7 = t;
  }
  static {
    n(this, "_i747e83453460e9");
  }
  get _r7ea1029131e026() {
    return this._r0c2aa0246d56f7;
  }
  dispose() {
    this.disposed ||
      (this._r0c2aa0246d56f7 != null && !this._r0c2aa0246d56f7.disposed && this._r0c2aa0246d56f7.dispose(),
      (this._r0c2aa0246d56f7 = null),
      super.dispose());
  }
}
