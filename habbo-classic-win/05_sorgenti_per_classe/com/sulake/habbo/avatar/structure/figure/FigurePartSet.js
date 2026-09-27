// Estratto da HabboAirLauncher.deobf.js, riga 170306.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/structure/figure/FigurePartSet.as
// Nome offuscato: _ibc3a989fa26af4

class {
  static {
    n(this, "FigurePartSet");
  }
  _type;
  _id;
  var_106;
  var_3695;
  _isColorable;
  var_5347;
  _parts;
  _r925c10ded3b275;
  _r0b996224eb3fb4;
  var_4882;
  constructor(e, r) {
    ((this._type = r),
      (this._id = _i897b98cdeac318(e, "id")),
      (this.var_106 = _ifdbe20062cc5b0(e, "gender")),
      (this.var_3695 = _i897b98cdeac318(e, "club")),
      (this._isColorable = _i897b98cdeac318(e, "colorable") !== 0),
      (this.var_5347 = _i897b98cdeac318(e, "selectable") !== 0),
      (this._r0b996224eb3fb4 = _i897b98cdeac318(e, "preselectable") !== 0),
      (this.var_4882 = _i897b98cdeac318(e, "sellable") !== 0),
      (this._parts = []),
      (this._r925c10ded3b275 = []));
    for (let i of _ib5ee1bd09422e6(e, "part")) {
      let s = new FigurePart(i),
        o = this.indexOfPartType(s);
      o !== -1 ? this._parts.splice(o, 0, s) : this._parts.push(s);
    }
    let t = _ib5ee1bd09422e6(e, "hiddenlayers")[0];
    for (let i of _ib5ee1bd09422e6(t, "layer")) this._r925c10ded3b275.push(_ifdbe20062cc5b0(i, "parttype"));
  }
  dispose() {
    for (let e of this._parts) e.dispose();
    ((this._parts = []), (this._r925c10ded3b275 = []));
  }
  indexOfPartType(e) {
    for (let r = 0; r < this._parts.length; r++) {
      let t = this._parts[r];
      if (t.type === e.type && t.index < e.index) return r;
    }
    return -1;
  }
  getPart(e, r) {
    for (let t of this._parts) if (t.type === e && t.id === r) return t;
    return null;
  }
  get type() {
    return this._type;
  }
  get id() {
    return this._id;
  }
  get gender() {
    return this.var_106;
  }
  get clubLevel() {
    return this.var_3695;
  }
  get isColorable() {
    return this._isColorable;
  }
  get isSelectable() {
    return this.var_5347;
  }
  get isPreSelectable() {
    return this._r0b996224eb3fb4;
  }
  get isSellable() {
    return this.var_4882;
  }
  get parts() {
    return this._parts;
  }
  get hiddenLayers() {
    return this._r925c10ded3b275;
  }
}
