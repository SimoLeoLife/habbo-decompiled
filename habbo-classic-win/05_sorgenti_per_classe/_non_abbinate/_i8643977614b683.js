// Estratto da HabboAirLauncher.deobf.js, riga 58816.

class extends _ie40b9435ae07b7 {
  static {
    n(this, "_i8643977614b683");
  }
  mElapsedTime;
  _fileName;
  constructor(e, r = 0, t = 0, i = 0) {
    (super(_ie40b9435ae07b7.PROGRESS, !1, !1, r, t), (this._fileName = e), (this.mElapsedTime = i));
  }
  get elapsedTime() {
    return this.mElapsedTime;
  }
  get fileName() {
    return this._fileName;
  }
}
