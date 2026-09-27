// Extracted from HabboAirLauncher.deobf.js, line 208189.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i67c155a5771992

class extends class_4383 {
  static {
    n(this, "UnkSubclassOf_class_4383_67c155");
  }
  _rf91ac3859955b6 = "";
  initialize(e, r, t, i) {
    (super.initialize(e, r, t, i), (this._rf91ac3859955b6 = t[2] ?? ""));
  }
  onClick() {
    this.landingView.goToRoom(this._rf91ac3859955b6);
  }
}
