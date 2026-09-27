// Extracted from HabboAirLauncher.deobf.js, line 330960.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/chooser/ChooserItem.as
// Obfuscated name: _i45b84ce927bac1

class {
  constructor(e, r, t, i = null, s = Number.NaN) {
    this._id = e;
    this.var_163 = r;
    this._name = t;
    this.var_3295 = i;
    this._type = s;
    this._lowerCaseName = this._name.toLowerCase();
  }
  static {
    n(this, "ChooserItem");
  }
  _lowerCaseName;
  get id() {
    return this._id;
  }
  get category() {
    return this.var_163;
  }
  get name() {
    return this._name;
  }
  get type() {
    return this._type;
  }
  get owner() {
    return nd.isBuilderClubId(this._id)
      ? "Builders Club"
      : nd.isTempId(this._id)
        ? "Temp (Wired)"
        : this.var_3295;
  }
  get lowerCaseName() {
    return this._lowerCaseName;
  }
}
