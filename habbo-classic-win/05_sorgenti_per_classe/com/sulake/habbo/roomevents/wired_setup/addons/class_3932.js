// Extracted from HabboAirLauncher.deobf.js, line 360752.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_3932.as
// Obfuscated name: _ibbfad83d506357

class extends DefaultAddonType {
  static {
    n(this, "class_3932");
  }
  _options = null;
  get code() {
    return AddonCodes.var_5882;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    this._options = e.createCheckboxGroup([
      new CheckboxOptionParam(this.l("movephysics.keep_altitude"), 0),
      new CheckboxOptionParam(this.l("movephysics.move_through_furni"), 1),
      new CheckboxOptionParam(this.l("movephysics.move_through_users"), 2),
      new CheckboxOptionParam(this.l("movephysics.block_by_furni"), 3),
    ]);
    let i = e.createSection(this.l("select_options"), this._options);
    t.addElements(i);
  }
  onEditStart(e) {
    ((this._options.get(0).selected = e.getBoolean(0)),
      (this._options.get(1).selected = e.getBoolean(1)),
      (this._options.get(2).selected = e.getBoolean(2)),
      (this._options.get(3).selected = e.getBoolean(3)));
  }
  readIntParamsFromForm() {
    return [
      this._options.get(0).selected ? 1 : 0,
      this._options.get(1).selected ? 1 : 0,
      this._options.get(2).selected ? 1 : 0,
      this._options.get(3).selected ? 1 : 0,
    ];
  }
  furniSelectionTitle(e) {
    return `wiredfurni.params.sources.furni.title.physics.${e}`;
  }
  userSelectionTitle(e) {
    return `wiredfurni.params.sources.users.title.physics.${e}`;
  }
}
