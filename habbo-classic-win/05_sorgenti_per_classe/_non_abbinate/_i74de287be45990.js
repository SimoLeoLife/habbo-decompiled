// Estratto da HabboAirLauncher.deobf.js, riga 208124.

class extends class_4383 {
  static {
    n(this, "_i74de287be45990");
  }
  onClick() {
    (this.landingView.goToRoom(),
      this.landingView.tracking?.trackGoogle("landingView", "click_genericgoto"));
  }
}
