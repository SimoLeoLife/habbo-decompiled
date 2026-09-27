// Estratto da HabboAirLauncher.deobf.js, riga 170385.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/structure/figure/SetType.as
// Nome offuscato: _i9c7c4b7e2b5255

class {
  static {
    n(this, "SetType");
  }
  var_817 = new B();
  _type;
  var_5571;
  var_1331 = new Map();
  constructor(e) {
    ((this._type = _ifdbe20062cc5b0(e, "type")),
      (this.var_5571 = _i897b98cdeac318(e, "paletteid")),
      this.var_1331.set("F", [_i897b98cdeac318(e, "mand_f_0") !== 0, _i897b98cdeac318(e, "mand_f_1") !== 0]),
      this.var_1331.set("M", [_i897b98cdeac318(e, "mand_m_0") !== 0, _i897b98cdeac318(e, "mand_m_1") !== 0]),
      this.append(e));
  }
  dispose() {
    for (let e of this.var_817.getValues()) e.dispose();
    this.var_817.dispose();
  }
  cleanUp(e) {
    for (let r of _ib5ee1bd09422e6(e, "set")) {
      let t = _ifdbe20062cc5b0(r, "id"),
        i = this.var_817.getValue(t);
      i != null && (i.dispose(), this.var_817.remove(t));
    }
  }
  append(e) {
    for (let r of _ib5ee1bd09422e6(e, "set")) this.var_817.add(_ifdbe20062cc5b0(r, "id"), new FigurePartSet(r, this._type));
  }
  getDefaultPartSet(e) {
    let r = this.var_817.getKeys();
    for (let t = r.length - 1; t >= 0; t--) {
      let i = this.var_817.getValue(r[t]);
      if (i != null && i.clubLevel === 0 && (i.gender === e || i.gender === "U")) return i;
    }
    return null;
  }
  getPartSet(e) {
    return this.var_817.getValue(String(e)) ?? null;
  }
  get type() {
    return this._type;
  }
  get paletteID() {
    return this.var_5571;
  }
  isMandatory(e, r) {
    if (e == null || e.length === 0) return !1;
    let t = this.var_1331.get(e.toUpperCase());
    return t == null ? !1 : (t[Math.min(r, 1)] ?? !1);
  }
  _r5f5a1fec502ecd(e) {
    if (e == null || e.length === 0) return -1;
    let r = this.var_1331.get(e.toUpperCase());
    return r == null ? -1 : r.indexOf(!1);
  }
  get partSets() {
    return this.var_817;
  }
}
