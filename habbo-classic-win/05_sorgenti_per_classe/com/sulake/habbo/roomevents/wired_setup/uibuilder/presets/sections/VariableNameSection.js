// Estratto da HabboAirLauncher.deobf.js, riga 351068.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/sections/VariableNameSection.as
// Nome offuscato: _if91a771c301fa3

class extends AbstractSectionPreset {
  static {
    n(this, "VariableNameSection");
  }
  _name;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32() {
    ((this._name = this.var_102._r178edc7e663bd7(new it("", 40))),
      this._name.addListener(this._r57a7c28f772638),
      this.initializeSection(this.l("variables.variable_name"), this._name));
  }
  _r57a7c28f772638 = n((e) => {
    let r = this._name.text,
      t = e.split(" ").join("_").toLowerCase();
    r !== t && (this._name.text = t);
  }, "_r57a7c28f772638");
  set variableName(e) {
    ((this._name.text = e), this._r57a7c28f772638(e));
  }
  get variableName() {
    return this._name.text.split(" ").join("_").toLowerCase();
  }
  dispose() {
    this.disposed || (super.dispose(), (this._name = null));
  }
}
