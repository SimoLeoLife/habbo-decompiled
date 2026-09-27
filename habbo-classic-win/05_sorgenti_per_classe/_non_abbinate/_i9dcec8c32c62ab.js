// Estratto da HabboAirLauncher.deobf.js, riga 289364.

class {
  constructor(e) {
    this._rc0fe48b2354652 = e;
  }
  static {
    n(this, "_i9dcec8c32c62ab");
  }
  disposed = !1;
  _ra13de0c45227ca = null;
  _r0529ec95b0e982(e) {
    return (this._ra13de0c45227ca == null && (this._ra13de0c45227ca = e()), this._ra13de0c45227ca);
  }
  dispose() {
    this.disposed ||
      ((this.disposed = !0),
      this._rc0fe48b2354652?.dispose(),
      this._ra13de0c45227ca != null &&
        (class_3376.disposeConfigPrebake(this._ra13de0c45227ca), (this._ra13de0c45227ca = null)));
  }
}
