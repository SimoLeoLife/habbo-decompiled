// Estratto da HabboAirLauncher.deobf.js, riga 349826.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/combinations/RewardRowPreset.as
// Nome offuscato: _ie178127977d407

class extends WiredUIPreset {
  static {
    n(this, "RewardRowPreset");
  }
  var_295;
  var_33;
  _badgeCheckbox;
  var_2237;
  var_1668;
  _r0dd1d6b13a0f28 = !0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32() {
    ((this._badgeCheckbox = this.var_40.createCheckboxView()),
      (this.var_2237 = this.var_102._r178edc7e663bd7(
        new it("", 100, null, -1, null, !0, "Product code or badge code"),
      )),
      (this.var_1668 = this.var_102._r178edc7e663bd7(
        new it(
          "",
          3,
          null,
          50,
          "0-9",
          !0,
          "Chance to get this reward. Value should be a number between 1 and 100",
        ),
      )),
      (this.var_1668.disabled = !this._r0dd1d6b13a0f28),
      (this.var_295 = this.var_102.createSimpleListView(
        !1,
        [this._r6c23cd2885b2e2(this._badgeCheckbox, !0), this.var_2237, this.var_1668],
        !1,
      )),
      (this.var_295.spacing = this.var_40._r7ac8f2f1de8d9e),
      (this.var_33 = this.var_102._rd65848eed931f7("container_view")),
      this.var_33.addChild(this.var_295.window));
  }
  get code() {
    return this.var_2237.text;
  }
  set code(e) {
    this.var_2237.text = e ?? "";
  }
  get probabilityText() {
    return this.var_1668.text;
  }
  set probabilityText(e) {
    this.var_1668.text = e ?? "";
  }
  get isBadge() {
    return this._badgeCheckbox.isSelected;
  }
  set isBadge(e) {
    we.select(this._badgeCheckbox, e);
  }
  clear() {
    ((this.code = ""), (this.probabilityText = ""), (this.isBadge = !1));
  }
  _r2d230d37d004da(e) {
    ((this._r0dd1d6b13a0f28 = e), (this.var_1668.disabled = !this._r0dd1d6b13a0f28));
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      (this.var_33.width = e),
      this.var_295.resizeToWidth(e),
      (this.var_33.height = this.var_295.window.height));
  }
  get window() {
    return this.var_33;
  }
  get childPresets() {
    return [this.var_295];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this.var_33.dispose(),
      (this.var_33 = null),
      (this.var_295 = null),
      (this._badgeCheckbox = null),
      (this.var_2237 = null),
      (this.var_1668 = null));
  }
}
