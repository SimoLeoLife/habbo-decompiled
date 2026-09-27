// Estratto da HabboAirLauncher.deobf.js, riga 350713.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/sections/UsageWarningSection.as
// Nome offuscato: _iadd4b4e55d032c

class extends AbstractSectionPreset {
  static {
    n(this, "UsageWarningSection");
  }
  var_3154;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    let r = new Se(Se.MODE_MULTILINE);
    ((r.textColor = this.var_40._re46fddc77f91b3),
      (this.var_3154 = this.var_102.createText(e, r)),
      this.initializeSection(this.l("general_box_warning"), this.var_3154, Hr.EXPANDED));
  }
  dispose() {
    this.disposed || (super.dispose(), (this.var_3154 = null));
  }
}
