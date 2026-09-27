// Extracted from HabboAirLauncher.deobf.js, line 278649.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureFireworksVisualization.as
// Obfuscated name: _i54e53e0b3b7496

class extends Pa {
  static {
    n(this, "FurnitureFireworksVisualization");
  }
  _particleSystems = new Map();
  var_319 = null;
  dispose() {
    (super.dispose(), (this.var_319 = null));
    for (let e of this._particleSystems.values()) e.dispose();
    this._particleSystems.clear();
  }
  updateObject(e, r) {
    if (!super.updateObject(e, r)) return !1;
    if (this._particleSystems.size === 0)
      (this.readDefinition(),
        this._particleSystems.size > 0 && (this.var_319 = this._particleSystems.get(e) ?? null));
    else {
      let t = this._particleSystems.get(e) ?? null;
      t !== this.var_319 &&
        (t?._r41f81c78ef0904(this.var_319),
        this.var_319?.reset(),
        (this.var_319 = t));
    }
    return !0;
  }
  _r1225543a2cc71f(e, r, t) {
    (super._r1225543a2cc71f(e, r, t), this.var_319?._r1225543a2cc71f());
  }
  _rccf505c78518d1(e) {
    return (this.var_319?._rccf505c78518d1(), super._rccf505c78518d1(e));
  }
  setAnimation(e) {
    (this.var_319?.setAnimation(e), super.setAnimation(e));
  }
  getSpriteYOffset(e, r, t) {
    return this.var_319?._r23a986fbdf9527(t)
      ? this.var_319.getSpriteYOffset(e, r, t)
      : super.getSpriteYOffset(e, r, t);
  }
  readDefinition() {
    let e = this.object?.getStringToStringMap()?.getString(RoomObjectVariableEnum.FURNITURE_FIREWORKS_DATA) ?? "";
    if (e.length === 0) return !1;
    let r = rr(e);
    for (let t of r.child("particlesystem").toArray()) {
      let i = t,
        s = String(i.attribute("size"));
      if (s.length === 0) continue;
      let o = Number.parseInt(s, 10),
        d = new FurnitureParticleSystem(this);
      (d._r84c168744040ab(i), this._particleSystems.set(o, d));
    }
    return this._particleSystems.size > 0;
  }
}
