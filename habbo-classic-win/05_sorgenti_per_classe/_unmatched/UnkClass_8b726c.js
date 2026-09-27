// Extracted from HabboAirLauncher.deobf.js, line 134151.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8b726ce5e61957

class extends r1 {
  static {
    n(this, "UnkClass_8b726c");
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
