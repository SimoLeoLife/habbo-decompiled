// Estratto da HabboAirLauncher.deobf.js, riga 208240.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4387.as
// Nome offuscato: _i4993aec0953d7b

class extends class_4383 {
  static {
    n(this, "class_4387");
  }
  _submittedKey = "";
  _goalCode = "";
  var_4294 = !1;
  var_4582 = 0;
  initialize(e, r, t, i) {
    (super.initialize(e, r, t, i),
      (this._submittedKey = t[2] ?? ""),
      (this._goalCode = t[3] ?? ""),
      e._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3697((s) => {
          this.onInfo(s);
        }),
      ));
  }
  refresh() {
    (super.refresh(), this.landingView.send(new class_2596(this._goalCode)));
  }
  onClick() {
    (this.landingView.questEngine?._reb7052baa12c2d(),
      this.var_4294
        ? (this.landingView.navigator?._r32d169e0ccf735(this.var_4582),
          this.landingView.tracking?.trackGoogle("landingView", "click_submittedroom"))
        : (this.landingView.send(new class_3123()),
          this.landingView.tracking?.trackGoogle("landingView", "click_startsubmit")));
  }
  onInfo(e) {
    let r = e.getParser();
    ((this.var_4294 = r?.isPartOf ?? !1),
      (this.var_4582 = r?.targetId ?? 0),
      this.var_4294 && (this.window.caption = "${" + this._submittedKey + "}"));
  }
}
