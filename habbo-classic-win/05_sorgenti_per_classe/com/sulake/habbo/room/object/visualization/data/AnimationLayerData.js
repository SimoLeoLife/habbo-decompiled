// Extracted from HabboAirLauncher.deobf.js, line 166745.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/AnimationLayerData.as
// Obfuscated name: _ib536a8ef121ab7

class {
  static {
    n(this, "AnimationLayerData");
  }
  static const_630 = "bodypart";
  static const_1253 = "fx";
  _id;
  _action = null;
  _r3144efde2c69dd;
  var_3825;
  var_3703;
  var_3615;
  directionData;
  _type;
  var_2990;
  _items = new B();
  constructor(e, r, t) {
    ((this._id = _ifdbe20062cc5b0(e, "id")),
      (this._r3144efde2c69dd = _i897b98cdeac318(e, "frame")),
      (this.var_3825 = _i897b98cdeac318(e, "dx")),
      (this.var_3703 = _i897b98cdeac318(e, "dy")),
      (this.var_3615 = _i897b98cdeac318(e, "dz")),
      (this.directionData = _i897b98cdeac318(e, "dd")),
      (this._type = r),
      (this.var_2990 = _ifdbe20062cc5b0(e, "base")));
    for (let i of _ib5ee1bd09422e6(e, "item")) this._items.add(_ifdbe20062cc5b0(i, "id"), _ifdbe20062cc5b0(i, "base"));
    t != null && ((this._action = new ActiveActionData(t.state, this.base)), (this._action.definition = t));
  }
  get items() {
    return this._items;
  }
  baseAsInt() {
    let e = 0;
    for (let r = 0; r < this.var_2990.length; r++) e += this.var_2990.charCodeAt(r);
    return e;
  }
  get id() {
    return this._id;
  }
  get animationFrame() {
    return this._r3144efde2c69dd;
  }
  get dx() {
    return this.var_3825;
  }
  get dy() {
    return this.var_3703;
  }
  get dz() {
    return this.var_3615;
  }
  get directionOffset() {
    return this.directionData;
  }
  get type() {
    return this._type;
  }
  get base() {
    return this.var_2990;
  }
  get action() {
    return this._action;
  }
}
