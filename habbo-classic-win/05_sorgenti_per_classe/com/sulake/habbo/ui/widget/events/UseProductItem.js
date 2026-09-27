// Estratto da HabboAirLauncher.deobf.js, riga 161291.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/UseProductItem.as
// Nome offuscato: _ibff80068d96282

class {
  constructor(e, r, t, i, s, o = -1, d = !1) {
    this._id = e;
    this.var_163 = r;
    this._name = t;
    this.var_2971 = i;
    this.var_2101 = s;
    this.var_5025 = o;
    this.var_4845 = d;
  }
  static {
    n(this, "UseProductItem");
  }
  dispose() {}
  get id() {
    return this._id;
  }
  get category() {
    return this.var_163;
  }
  get name() {
    return this._name;
  }
  get requestRoomObjectId() {
    return this.var_2971;
  }
  get targetRoomObjectId() {
    return this.var_2101;
  }
  get _r1cb34f0789119f() {
    return this.var_5025;
  }
  get replace() {
    return this.var_4845;
  }
}
