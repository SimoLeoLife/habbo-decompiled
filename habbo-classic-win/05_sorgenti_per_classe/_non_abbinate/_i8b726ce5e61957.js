// Estratto da HabboAirLauncher.deobf.js, riga 134151.

class extends r1 {
  static {
    n(this, "_i8b726ce5e61957");
  }
  get text() {
    return this.stage.htmlText;
  }
  set text(e) {
    e != null &&
      (this._localized &&
        (this.context?._r33082b59b9c769(
          this._caption.slice(2, this._caption.indexOf("}")),
          this,
        ),
        (this._localized = !1)),
      (this._caption = e),
      !this._raf640b58dc0fd1 &&
      this._caption.charAt(0) === "$" &&
      this._caption.charAt(1) === "{"
        ? ((this._localized = !0),
          this.context?._r0fab3c6d38398a(
            this._caption.slice(2, this._caption.indexOf("}")),
            this,
          ))
        : this.stage != null &&
          ((this.stage.htmlText = this._caption), this.refreshTextImage()));
  }
  set localization(e) {
    e != null &&
      this.stage != null &&
      ((this.stage.htmlText = this._ra13b5ed4ed6e51(e)), this.refreshTextImage());
  }
}
