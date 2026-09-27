// Estratto da HabboAirLauncher.deobf.js, riga 69542.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/animation/DelayedCall.as
// Nome offuscato: _i8149d9e3a53922

class a extends EventDispatcherWrapper {
  static {
    n(this, "DelayedCall");
  }
  static _pool = [];
  _currentTime = 0;
  mTotalTime = 0;
  mCall = null;
  var_3241 = null;
  var_720 = 1;
  constructor(e, r, t = null) {
    (super(), this.reset(e, r, t));
  }
  reset(e, r, t = null) {
    return (
      (this._currentTime = 0),
      (this.mTotalTime = Math.max(r, 1e-4)),
      (this.mCall = e),
      (this.var_3241 = t),
      (this.var_720 = 1),
      this
    );
  }
  advanceTime(e) {
    let r = this._currentTime;
    if (
      ((this._currentTime += e),
      this._currentTime > this.mTotalTime && (this._currentTime = this.mTotalTime),
      r < this.mTotalTime && this._currentTime >= this.mTotalTime)
    )
      if (this.var_720 === 0 || this.var_720 > 1)
        (this.mCall?.apply(null, this.var_3241 ?? []),
          this.var_720 > 0 && (this.var_720 -= 1),
          (this._currentTime = 0),
          this.advanceTime(r + e - this.mTotalTime));
      else {
        let t = this.mCall,
          i = this.var_3241;
        (this.dispatchEvent(new M($C.REMOVE_FROM_JUGGLER)), t?.apply(null, i ?? []));
      }
  }
  complete() {
    let e = this.mTotalTime - this._currentTime;
    e > 0 && this.advanceTime(e);
  }
  get isComplete() {
    return this.var_720 === 1 && this._currentTime >= this.mTotalTime;
  }
  get _r84774aebc9833a() {
    return this.mTotalTime;
  }
  get currentTime() {
    return this._currentTime;
  }
  get repeatCount() {
    return this.var_720;
  }
  set repeatCount(e) {
    this.var_720 = e;
  }
  static fromPool(e, r, t = null) {
    let i = a._pool.pop();
    return i ? i.reset(e, r, t) : new a(e, r, t);
  }
  static toPool(e) {
    ((e.mCall = null), (e.var_3241 = null), a._pool.push(e));
  }
}
