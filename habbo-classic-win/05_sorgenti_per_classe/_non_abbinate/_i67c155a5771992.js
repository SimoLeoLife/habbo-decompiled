// Estratto da HabboAirLauncher.deobf.js, riga 208189.

class extends class_4383 {
  static {
    n(this, "_i67c155a5771992");
  }
  _rf91ac3859955b6 = "";
  initialize(e, r, t, i) {
    (super.initialize(e, r, t, i), (this._rf91ac3859955b6 = t[2] ?? ""));
  }
  onClick() {
    this.landingView.goToRoom(this._rf91ac3859955b6);
  }
}
