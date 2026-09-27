// Estratto da HabboAirLauncher.deobf.js, riga 276968.

class a extends Pc {
  static {
    n(this, "_if4d411777be59f");
  }
  static _rf4f82a852094d9 = 0;
  _rae4921a88f1a02 = null;
  _state = -1;
  _rde7e7fbd7c3fbd = new AnimationStateData();
  _r78a37ac30141e2 = 0;
  _r7127fba4a820d5 = 1;
  _r5da0d13244dab2 = 0;
  _r496d36127560a8 = 0;
  _rbc9a3e3bcbfc8a = !1;
  get _r7e3477306821f2() {
    return this._r496d36127560a8;
  }
  get _r6fa828a0d5537d() {
    return this._r7127fba4a820d5;
  }
  dispose() {
    (super.dispose(), (this._rae4921a88f1a02 = null), this._rde7e7fbd7c3fbd.dispose());
  }
  get animationId() {
    return this._rde7e7fbd7c3fbd.animationId;
  }
  _rc44d75b416497c(e) {
    let r = this.animationId;
    return r !== a._rf4f82a852094d9 && this._rae4921a88f1a02?._rbbbe40f26a8739(this._r5da0d13244dab2, r)
      ? r
      : a._rf4f82a852094d9;
  }
  initialize(e) {
    return e instanceof AnimatedFurnitureVisualizationData ? ((this._rae4921a88f1a02 = e), super.initialize(e)) : !1;
  }
  updateObject(e, r) {
    if (!super.updateObject(e, r)) return !1;
    let t = this.object;
    if (t == null) return !1;
    let i = t.getState(0);
    return (
      i !== this._state &&
        (this.setAnimation(i),
        (this._state = i),
        (this._r78a37ac30141e2 = t.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_STATE_UPDATE_TIME) ?? 0)),
      !0
    );
  }
  updateModel(e) {
    if (!super.updateModel(e)) return !1;
    let r = this.object?.getStringToStringMap();
    if (r != null) {
      if (this._r22c5e71f53451d()) {
        let i = r._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_STATE_UPDATE_TIME);
        i > this._r78a37ac30141e2 && ((this._r78a37ac30141e2 = i), this.setAnimation(this._state));
      }
      let t = r._ra3dc9a405b5c73(RoomObjectVariableEnum.const_718);
      !Number.isNaN(t) &&
        this._rae4921a88f1a02 != null &&
        this.setAnimation(this._rae4921a88f1a02._rc44d75b416497c(this._r5da0d13244dab2, t));
    }
    return !0;
  }
  setAnimation(e) {
    this._rae4921a88f1a02 != null && this._r1901e6411cd238(this._rde7e7fbd7c3fbd, e, this._state >= 0);
  }
  _r1901e6411cd238(e, r, t = !0) {
    let i = e.animationId;
    if (t && this._rae4921a88f1a02 != null) {
      if (this._ra1e4ddba398049(e, r)) return !1;
      let s = this._r73333fe29dd3d5(e),
        o = r;
      r !== s
        ? this._rae4921a88f1a02._rfa4b6bfb7fcf31(this._r5da0d13244dab2, r, s) ||
          ((o = ho._r54a272d9d927de(s)),
          this._rae4921a88f1a02._rbbbe40f26a8739(this._r5da0d13244dab2, o)
            ? ((e._ra40f096043de66 = r), (r = o))
            : ((o = ho._r435b9491bcd5a6(r)),
              this._rae4921a88f1a02._rbbbe40f26a8739(this._r5da0d13244dab2, o) &&
                ((e._ra40f096043de66 = r), (r = o))))
        : ho._r08d3170c533a96(i)
          ? ((o = ho._r435b9491bcd5a6(r)),
            this._rae4921a88f1a02._rbbbe40f26a8739(this._r5da0d13244dab2, o) &&
              ((e._ra40f096043de66 = r), (r = o)))
          : !ho._r40a627647568f0(i) &&
            this._r22c5e71f53451d() &&
            ((o = ho._r54a272d9d927de(s)),
            this._rae4921a88f1a02._rbbbe40f26a8739(this._r5da0d13244dab2, o)
              ? ((e._ra40f096043de66 = r), (r = o))
              : ((o = ho._r435b9491bcd5a6(r)),
                this._rae4921a88f1a02._rbbbe40f26a8739(this._r5da0d13244dab2, o) &&
                  ((e._ra40f096043de66 = r), (r = o))));
    }
    return i !== r ? ((e.animationId = r), !0) : !1;
  }
  _r6a3d18e2c340d9(e) {
    return this._rde7e7fbd7c3fbd._r6a3d18e2c340d9(e);
  }
  resetAllAnimationFrames() {
    this._rde7e7fbd7c3fbd._rc57552f61a74d5(this._r496d36127560a8);
  }
  _rccf505c78518d1(e) {
    if (this._rae4921a88f1a02 == null) return 0;
    e !== this._r5da0d13244dab2 &&
      ((this._r5da0d13244dab2 = e),
      (this._r496d36127560a8 = this._rae4921a88f1a02._rf96292fa4b48da(e)),
      this.resetAllAnimationFrames());
    let r = this._re38d1c4ef1ce7e(e);
    return ((this._rbc9a3e3bcbfc8a = !1), r);
  }
  _re38d1c4ef1ce7e(e) {
    let r = 0;
    return (
      (!this._rde7e7fbd7c3fbd._re7aea0e68e415e || this._rbc9a3e3bcbfc8a) &&
        ((r = this._rd966a6000a4156(this._rde7e7fbd7c3fbd, e)),
        this._rde7e7fbd7c3fbd._re7aea0e68e415e &&
          (ho._r08d3170c533a96(this._rde7e7fbd7c3fbd.animationId) ||
            ho._r40a627647568f0(this._rde7e7fbd7c3fbd.animationId)) &&
          (this.setAnimation(this._rde7e7fbd7c3fbd._ra40f096043de66),
          (this._rde7e7fbd7c3fbd._re7aea0e68e415e = !1))),
      r
    );
  }
  _rd966a6000a4156(e, r) {
    if ((e._re7aea0e68e415e && !this._rbc9a3e3bcbfc8a) || this._rae4921a88f1a02 == null) return 0;
    let t = e._rf7d245d5414bf8,
      i = this._rc44d75b416497c(e);
    (t === 0 && (t = this._rae4921a88f1a02._r658374b2eae883(r, i, this.direction)),
      (t += this._r6fa828a0d5537d),
      (e._rf7d245d5414bf8 = t));
    let s = 0;
    e._re7aea0e68e415e = !0;
    let o = 1 << (this._r496d36127560a8 - 1);
    for (let d = this._r496d36127560a8 - 1; d >= 0; d--) {
      let c = e._r9d290a1aafe0e2(d);
      if (!c || this._rbc9a3e3bcbfc8a) {
        let f = e._r6a3d18e2c340d9(d),
          l = e.getFrame(d);
        l != null && l._reb08b618cbc8df && l.remainingFrameRepeats <= this._r6fa828a0d5537d && (f = !0);
        let b = this._rbc9a3e3bcbfc8a || l == null;
        if (
          (!b &&
            l != null &&
            l.remainingFrameRepeats >= 0 &&
            ((l.remainingFrameRepeats = l.remainingFrameRepeats - this._r6fa828a0d5537d),
            (b = l.remainingFrameRepeats <= 0)),
          b)
        ) {
          let _ = l?._r590406d970966f ?? ah._raed9e65b9a1af6;
          ((l =
            _ === ah._raed9e65b9a1af6
              ? this._rae4921a88f1a02.getFrame(r, i, this.direction, d, t)
              : this._rae4921a88f1a02.getFrameFromSequence(
                  r,
                  i,
                  this.direction,
                  d,
                  _,
                  (l?._r6a9e68a64c5a99 ?? 0) + (l?.repeats ?? 0),
                  t,
                )),
            e._r6260febdf68b08(d, l),
            (s |= o));
        }
        (l == null || l.remainingFrameRepeats === ah._rac0b58b7239d2d
          ? ((f = !0), (c = !0))
          : (e._re7aea0e68e415e = !1),
          e._r752d88a229802b(d, f),
          e._r49e7b53c2079ff(d, c));
      }
      o >>= 1;
    }
    return s;
  }
  getFrameNumber(e, r) {
    return this._rde7e7fbd7c3fbd.getFrame(r)?.id ?? super.getFrameNumber(e, r);
  }
  getSpriteXOffset(e, r, t) {
    return super.getSpriteXOffset(e, r, t) + (this._rde7e7fbd7c3fbd.getFrame(t)?.x ?? 0);
  }
  getSpriteYOffset(e, r, t) {
    return super.getSpriteYOffset(e, r, t) + (this._rde7e7fbd7c3fbd.getFrame(t)?.y ?? 0);
  }
  _r22c5e71f53451d() {
    return !1;
  }
  _ra1e4ddba398049(e, r) {
    let t = e.animationId;
    return !!(
      (ho._r08d3170c533a96(t) || ho._r40a627647568f0(t)) &&
      r === e._ra40f096043de66 &&
      !e._re7aea0e68e415e
    );
  }
  _r73333fe29dd3d5(e) {
    let r = e.animationId;
    return ho._r08d3170c533a96(r) || ho._r40a627647568f0(r) ? e._ra40f096043de66 : r;
  }
}
