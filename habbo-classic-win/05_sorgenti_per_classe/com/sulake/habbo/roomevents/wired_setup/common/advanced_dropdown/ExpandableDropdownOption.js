// Estratto da HabboAirLauncher.deobf.js, riga 354211.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/common/advanced_dropdown/ExpandableDropdownOption.as
// Nome offuscato: _i09162108aba3ec

class {
  constructor(e, r, t = !1) {
    this._id = e;
    this._displayString = r;
    this._isAdvanced = t;
  }
  static {
    n(this, "ExpandableDropdownOption");
  }
  get id() {
    return this._id;
  }
  get dropdownOptions() {
    return this._displayString;
  }
  get _r468491a712806e() {
    return this._isAdvanced;
  }
}
