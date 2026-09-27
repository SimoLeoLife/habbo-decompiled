// Estratto da HabboAirLauncher.deobf.js, riga 70264.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/PetColorResult.as
// Nome offuscato: _i1339b056da8f68

class a {
  static {
    n(this, "PetColorResult");
  }
  static COLOR_TAGS = [
    "Null",
    "Black",
    "White",
    "Grey",
    "Red",
    "Orange",
    "Pink",
    "Green",
    "Lime",
    "Blue",
    "Light-Blue",
    "Dark-Blue",
    "Yellow",
    "Brown",
    "Dark-Brown",
    "Beige",
    "Cyan",
    "Purple",
    "Gold",
  ];
  _primaryColor;
  _secondaryColor;
  var_4890;
  var_4265;
  _id;
  var_4731;
  var_3289;
  constructor(e, r, t, i, s, o, d) {
    ((this._primaryColor = e & 16777215),
      (this._secondaryColor = r & 16777215),
      (this.var_4890 = t),
      (this.var_4265 = i > -1 && i < a.COLOR_TAGS.length ? a.COLOR_TAGS[i] : ""),
      (this._id = s),
      (this.var_4731 = o),
      (this.var_3289 = d));
  }
  get primaryColor() {
    return this._primaryColor;
  }
  get secondaryColor() {
    return this._secondaryColor;
  }
  get breed() {
    return this.var_4890;
  }
  get tag() {
    return this.var_4265;
  }
  get id() {
    return this._id;
  }
  get isMaster() {
    return this.var_4731;
  }
  get _ref8ecfee3bb025() {
    return this.var_3289;
  }
}
