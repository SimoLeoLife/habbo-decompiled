// Estratto da HabboAirLauncher.deobf.js, riga 145343.

class {
  constructor(e) {
    this._windowManager = e;
    this._windowManager?.communication != null &&
      ((this._r8ac6cebcc1dcdf = new class_3073((r) => {
        this._re13ad576e95817(r);
      })),
      this._windowManager.communication._r2e106e2349a0b6(this._r8ac6cebcc1dcdf));
  }
  static {
    n(this, "_i0a2ca7a30d7842");
  }
  _r8ac6cebcc1dcdf = null;
  dispose() {
    (this._windowManager?.communication != null &&
      this._r8ac6cebcc1dcdf != null &&
      this._windowManager.communication._r7668362bf55fdd(this._r8ac6cebcc1dcdf),
      (this._windowManager = null),
      (this._r8ac6cebcc1dcdf = null));
  }
  _re13ad576e95817(e) {
    let r = e.getParser().key;
    r == null || r === ""
      ? this._windowManager?.hideHint()
      : this._windowManager?.showHint(r);
  }
}
