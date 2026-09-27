// Estratto da HabboAirLauncher.deobf.js, riga 275717.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/AnimationStateData.as
// Nome offuscato: _i2a89a2ed9df742

class {
  static {
    n(this, "AnimationStateData");
  }
  _rbc8c788a0c46de = -1;
  _re4911cba206aa0 = 0;
  _rc15525e3db2132 = !1;
  _r898adddb17f144 = 0;
  _frames = [];
  var_1528 = [];
  var_1629 = [];
  var_703 = 0;
  get _re7aea0e68e415e() {
    return this._rc15525e3db2132;
  }
  set _re7aea0e68e415e(e) {
    this._rc15525e3db2132 = e;
  }
  get _rf7d245d5414bf8() {
    return this._r898adddb17f144;
  }
  set _rf7d245d5414bf8(e) {
    this._r898adddb17f144 = e;
  }
  get animationId() {
    return this._rbc8c788a0c46de;
  }
  set animationId(e) {
    e !== this._rbc8c788a0c46de && ((this._rbc8c788a0c46de = e), this._r425453172ba85d(!1));
  }
  get _ra40f096043de66() {
    return this._re4911cba206aa0;
  }
  set _ra40f096043de66(e) {
    this._re4911cba206aa0 = e;
  }
  dispose() {
    (this.recycleFrames(),
      (this._frames = null),
      (this.var_1528 = null),
      (this.var_1629 = null));
  }
  _rc57552f61a74d5(e) {
    ((this.var_703 = e), this._r425453172ba85d());
  }
  _r425453172ba85d(e = !0) {
    ((e || this._frames == null) && (this.recycleFrames(), (this._frames = [])),
      (this.var_1528 = []),
      (this.var_1629 = []),
      (this._rc15525e3db2132 = !1),
      (this._r898adddb17f144 = 0));
    for (let r = 0; r < this.var_703; r++) {
      if (e || this._frames.length <= r) this._frames[r] = null;
      else {
        let t = this._frames[r];
        t != null &&
          (t.recycle(), (this._frames[r] = ah.allocate(t.id, t.x, t.y, t.repeats, 0, t._reb08b618cbc8df)));
      }
      ((this.var_1528[r] = !1), (this.var_1629[r] = !1));
    }
  }
  getFrame(e) {
    return e >= 0 && e < this.var_703 ? (this._frames[e] ?? null) : null;
  }
  _r6260febdf68b08(e, r) {
    e >= 0 && e < this.var_703 && ((this._frames[e] ?? null)?.recycle(), (this._frames[e] = r));
  }
  _r9d290a1aafe0e2(e) {
    return e >= 0 && e < this.var_703 ? (this.var_1629[e] ?? !1) : !0;
  }
  _r49e7b53c2079ff(e, r) {
    e >= 0 && e < this.var_703 && (this.var_1629[e] = r);
  }
  _r6a3d18e2c340d9(e) {
    return e >= 0 && e < this.var_703 ? (this.var_1528[e] ?? !1) : !0;
  }
  _r752d88a229802b(e, r) {
    e >= 0 && e < this.var_703 && (this.var_1528[e] = r);
  }
  recycleFrames() {
    if (this._frames != null) for (let e of this._frames) e?.recycle();
  }
}
