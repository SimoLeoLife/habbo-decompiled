// Extracted from HabboAirLauncher.deobf.js, line 279371.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurniturePlanetSystemVisualization.as
// Obfuscated name: _ib279aee77b21e2

class extends Pa {
  static {
    n(this, "FurniturePlanetSystemVisualization");
  }
  _r08ecf64b2e2863 = null;
  _r2a08d3ed9eba35 = [];
  _rf75fb91cbb6e03 = new k(0, 0, 0);
  dispose() {
    if (this._r08ecf64b2e2863 != null)
      for (; this._r08ecf64b2e2863.length > 0;) this._r08ecf64b2e2863.shift()?.dispose();
    ((this._r08ecf64b2e2863 = null), super.dispose());
  }
  _rccf505c78518d1(e) {
    if (this._r08ecf64b2e2863 == null && this._r07cfc8b3f013c3 > 0 && !this.readDefinition()) return 0;
    if (this._r08ecf64b2e2863 != null) {
      for (let i of this._r08ecf64b2e2863) i.update(this._r2a08d3ed9eba35, this._rf75fb91cbb6e03, e);
      let r = super._rccf505c78518d1(e),
        t = this._r2a08d3ed9eba35.length < 31 ? this._r2a08d3ed9eba35.length : 31;
      for (let i = 0; i < t; i++) r |= 1 << i;
      return r;
    }
    return 0;
  }
  getSpriteXOffset(e, r, t) {
    return t < this._r2a08d3ed9eba35.length
      ? (this._r2a08d3ed9eba35[t]?.x ?? 0)
      : super.getSpriteXOffset(e, r, t);
  }
  getSpriteYOffset(e, r, t) {
    return t < this._r2a08d3ed9eba35.length
      ? (this._r2a08d3ed9eba35[t]?.y ?? 0)
      : super.getSpriteYOffset(e, r, t);
  }
  _rff74d56770433c(e, r, t) {
    return t < this._r2a08d3ed9eba35.length
      ? (this._r2a08d3ed9eba35[t]?.z ?? 0)
      : super._rff74d56770433c(e, r, t);
  }
  readDefinition() {
    let e = this.object?.getStringToStringMap()?.getString(RoomObjectVariableEnum.FURNITURE_PLANETSYSTEM_DATA) ?? "";
    if (e.length === 0) return !1;
    let t = rr(e).children().toArray();
    this._r08ecf64b2e2863 = [];
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      this.addPlanet(
        String(s.attribute("name")),
        i,
        String(s.attribute("parent")),
        Number(s.attribute("radius")),
        Number(s.attribute("arcspeed")),
        Number(s.attribute("arcoffset")),
        Number(s.attribute("height")),
      );
    }
    return !0;
  }
  addPlanet(e, r, t, i, s, o, d) {
    if (this._r08ecf64b2e2863 == null) return;
    let c = new Mve(e, r, i, s, o, d),
      f = this._rc70262263f50d4(t);
    f != null ? f.addChild(c) : this._r08ecf64b2e2863.push(c);
  }
  _rc70262263f50d4(e) {
    if (this._r08ecf64b2e2863 == null) return null;
    for (let r of this._r08ecf64b2e2863) {
      if (r.name === e) return r;
      if (r._rb7fafba2137ed2(e)) return r._rf193bc18af5e2f(e);
    }
    return null;
  }
}
