// Extracted from HabboAirLauncher.deobf.js, line 349699.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/combinations/RewardListPreset.as
// Obfuscated name: _i40db6014091ae0

class extends WiredUIPreset {
  static {
    n(this, "RewardListPreset");
  }
  _container;
  var_1571;
  var_2319;
  var_2916;
  var_969;
  _displayedRewards = 0;
  _r40ceebc615d547 = 0;
  _r6d18d956b57b77 = !0;
  _reb620f4740a362 = 0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this._r40ceebc615d547 = e),
      (this._container = this.var_102._rd65848eed931f7("vertical_list_view")),
      (this._container.spacing = this.var_40._r249f7dc0054eba));
    let t = this.var_102.createText("Badge?", new Se(Se.MODE_STRETCH, !1)),
      i = this.var_102.createText("Product/Badge code", new Se(Se.MODE_OVERFLOW, !1));
    ((this.var_2916 = this.var_102.createText(
      "Probability",
      new Se(Se.MODE_STRETCH, !1),
    )),
      (this.var_2319 = this.var_102.createSimpleListView(!1, [t, i, this.var_2916], !1)),
      (this.var_1571 = this.var_102._rd65848eed931f7("vertical_list_view")),
      (this.var_1571.spacing = this.var_40._r249f7dc0054eba),
      (this.var_969 = []));
    for (let s = 0; s < this._r40ceebc615d547; s += 1) {
      let o = this.var_102._r218bf37078a7ac();
      this.var_969.push(o);
    }
    (this._container.addListItem(this.var_2319.window),
      this._container.addListItem(this.var_1571),
      this._rd77b27ff4725f9(r),
      (this._displayedRewards = r));
  }
  _rd77b27ff4725f9(e) {
    let r = Math.max(0, Math.min(this._r40ceebc615d547, e));
    if (r !== this._displayedRewards) {
      if (r > this._displayedRewards)
        for (let t = this._displayedRewards; t < r; t += 1) {
          let i = this.var_969[t];
          (this.var_1571.addListItem(i.window),
            this._reb620f4740a362 > 0 && i.resizeToWidth(this._reb620f4740a362));
        }
      else
        for (let t = this._displayedRewards - 1; t >= r; t -= 1)
          this.var_1571.removeListItem(this.var_969[t].window);
      this._displayedRewards = r;
    }
  }
  get _r07dffc93c15831() {
    return this._displayedRewards;
  }
  getRow(e) {
    return this.var_969[e];
  }
  _rad5381f4487cc6(e) {
    if (this._r6d18d956b57b77 !== e) {
      ((this._r6d18d956b57b77 = e), (this.var_2916.disabled = !e));
      for (let r of this.var_969) r._r2d230d37d004da(e);
    }
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      (this._reb620f4740a362 = e),
      (this._container.width = e),
      this.var_2319.resizeToWidth(e),
      (this.var_1571.width = e));
    for (let r = 0; r < this._displayedRewards; r += 1) this.var_969[r].resizeToWidth(e);
  }
  get window() {
    return this._container;
  }
  get childPresets() {
    return [this.var_2319, ...this.var_969];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_2319 = null),
      (this.var_1571 = null),
      (this.var_2916 = null),
      (this.var_969 = null));
  }
}
