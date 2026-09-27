// Estratto da HabboAirLauncher.deobf.js, riga 355965.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/RoomObjectHighLighter.as
// Nome offuscato: _i8bf95b7a48db5b

class a {
  constructor(e) {
    this._roomEvents = e;
    let o = new ColorMatrixFilter_([0.25, 0, 0, 0, 115.5, 0, 0.25, 0, 0, 141, 0, 0, 0.25, 0, 141, 0, 0, 0, 1, 0]),
      d = new _ibaf84c0aa91c5d(16777215, 1, 5, 5, 3, 1, !0, !1);
    ((this._r2b2084572ff3c1 = [o, d]),
      (this._r5dde13865810f2 = [o, d]),
      (this._r113ef0d59e86e0 = [new ColorMatrixFilter_([0.9, 0, 0, 0, 0, 0, 1, 0, 0, 40, 0, 0, 1, 0, 80, 0, 0, 0, 0.8, 0])]),
      (this._r45e34b48d26fd3 = [
        new ColorMatrixFilter_([1.13, 0, 0, 0, 35, 0, 1.13, 0, 0, 35, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
      ]),
      (this._rbf72c98b309dc9 = [new ColorMatrixFilter_([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1.15, 0, 40, 0, 0, 0, 1, 0])]));
  }
  static {
    n(this, "RoomObjectHighLighter");
  }
  _r2b2084572ff3c1;
  _r5dde13865810f2;
  _r113ef0d59e86e0;
  _r45e34b48d26fd3;
  _rbf72c98b309dc9;
  hide(e, r, t) {
    this.inactivateFurni(this.getFurni(e), e < 0, r, t);
  }
  _raf8a5c9bba098c(e, r, t) {
    for (let i of e.keys()) this.inactivateFurni(this.getFurni(i), i < 0, r, t);
  }
  show(e, r, t) {
    this.activateFurni(this.getFurni(e), e < 0, r, t);
  }
  _r46617d874ee485(e, r, t) {
    for (let i of e.keys()) this.activateFurni(this.getFurni(i), i < 0, r, t);
  }
  _rbb45109d506c46(e) {
    a.addFiltersToFurni(this.getFurni(e), this._r113ef0d59e86e0);
  }
  unhighlightActiveWired(e) {
    a.removeFiltersFromFurni(this.getFurni(e), this._r113ef0d59e86e0);
  }
  getFurni(e) {
    return e < 0
      ? this._roomEvents.roomEngine._ra1f5cb56d0c2d8(
          this._roomEvents.roomId,
          -e,
          RoomObjectCategoryEnum.const_909,
        )
      : this._roomEvents.roomEngine._ra1f5cb56d0c2d8(
          this._roomEvents.roomId,
          e,
          RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
        );
  }
  activateFurni(e, r, t, i) {
    (a.addFiltersToFurni(e, r ? this._r5dde13865810f2 : this._r2b2084572ff3c1, !0),
      t && a.addFiltersToFurni(e, i === 1 ? this._r45e34b48d26fd3 : this._rbf72c98b309dc9));
  }
  inactivateFurni(e, r, t, i) {
    if ((a.removeFiltersFromFurni(e, r ? this._r5dde13865810f2 : this._r2b2084572ff3c1), t)) {
      let s = i === 1 ? this._r45e34b48d26fd3 : this._rbf72c98b309dc9,
        o = i === 1 ? this._rbf72c98b309dc9 : this._r45e34b48d26fd3;
      (a.removeFiltersFromFurni(e, s),
        a.hasFilters(e, o) && a.addFiltersToFurni(e, r ? this._r5dde13865810f2 : this._r2b2084572ff3c1, !0));
    }
  }
  static getVisualization(e) {
    return e?.getVisualization();
  }
  static addFiltersToFurni(e, r, t = !1) {
    let i = a.getVisualization(e);
    if (i == null || i == null || a.hasFilters(e, r)) return;
    let s = i.filters == null ? [] : i.filters.slice();
    i.filters = t ? r.concat(s) : s.concat(r);
  }
  static removeFiltersFromFurni(e, r) {
    let t = a.getVisualization(e);
    if (t == null || t == null || t.filters == null) return;
    let i = t.filters.slice();
    for (let s of r) {
      let o = i.indexOf(s);
      o !== -1 && i.splice(o, 1);
    }
    t.filters = i;
  }
  static hasFilters(e, r) {
    let t = a.getVisualization(e)?.filters;
    if (t == null) return !1;
    for (let i of r) if (t.indexOf(i) !== -1) return !0;
    return !1;
  }
}
