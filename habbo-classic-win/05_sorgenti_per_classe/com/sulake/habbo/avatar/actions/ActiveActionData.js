// Estratto da HabboAirLauncher.deobf.js, riga 166644.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/actions/ActiveActionData.as
// Nome offuscato: _i8cef586a7d2c4d

class {
  static {
    n(this, "ActiveActionData");
  }
  var_3037 = "";
  var_1426 = "";
  var_2466 = null;
  _startFrame = 0;
  _overridingAction = "";
  constructor(e, r = "", t = 0) {
    ((this.var_3037 = e), (this.var_1426 = r), (this._startFrame = t));
  }
  get actionType() {
    return this.var_3037;
  }
  get actionParameter() {
    return this.var_1426;
  }
  set actionParameter(e) {
    this.var_1426 = e;
  }
  get definition() {
    return this.var_2466;
  }
  set definition(e) {
    this.var_2466 = e;
  }
  get id() {
    return this.var_2466 == null ? "" : `${this.var_2466.id}_${this.var_1426}`;
  }
  get startFrame() {
    return this._startFrame;
  }
  get overridingAction() {
    return this._overridingAction;
  }
  set overridingAction(e) {
    this._overridingAction = e;
  }
  dispose() {
    ((this.var_3037 = ""), (this.var_1426 = ""), (this.var_2466 = null));
  }
  toString() {
    return `Action: ${this.var_3037}  param: ${this.var_1426}`;
  }
}
