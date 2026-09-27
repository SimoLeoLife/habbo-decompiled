// Estratto da HabboAirLauncher.deobf.js, riga 209188.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/layout/WidgetContainer.as
// Nome offuscato: _i1941a371919aae

class {
  constructor(e, r, t, i = null) {
    this.var_17 = e;
    this._placeholderName = r;
    this.var_1529 = t;
    this._r37658dbedd2177 = i;
  }
  static {
    n(this, "WidgetContainer");
  }
  _initialized = !1;
  get disposed() {
    return this.var_17 == null && this.var_1529 == null;
  }
  get container() {
    return this.var_17?.container ?? null;
  }
  dispose() {
    (this.var_17?.dispose(), (this.var_17 = null), (this.var_1529 = null));
  }
  refresh(e) {
    let r = e.findChildByName("content_background");
    if (this.var_17 != null) {
      if (!this._initialized)
        if (((this._initialized = !0), this._placeholderName != null)) {
          if (r == null) return;
          let t = r.getChildByName(this._placeholderName);
          if (t == null) return;
          (this.var_17.initialize(),
            r.addChildAt(this.var_17.container, r.getChildIndex(t)),
            (this.var_17.container.x = t.x),
            (this.var_17.container.y = t.y),
            r.removeChild(t),
            t.dispose());
        } else if (this._r37658dbedd2177 != null)
          (this.var_17.initialize(),
            this._r37658dbedd2177.addChild(this.var_17.container));
        else return;
      this.var_17.container != null &&
        (this.var_1529 != null &&
          "settings" in this.var_17 &&
          (this.var_17.settings = this.var_1529),
        this.var_17.refresh());
    }
  }
  windowResized() {
    this.var_17 != null &&
      this.var_17.container != null &&
      "windowResized" in this.var_17 &&
      this.var_17.windowResized();
  }
  disable() {
    this.var_17 != null &&
      this.var_17.container != null &&
      "disable" in this.var_17 &&
      this.var_17.disable();
  }
}
