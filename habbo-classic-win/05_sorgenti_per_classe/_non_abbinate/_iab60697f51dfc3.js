// Estratto da HabboAirLauncher.deobf.js, riga 170935.

class a extends Im {
  static {
    n(this, "_iab60697f51dfc3");
  }
  static _r9156cdade11108 = new Map();
  static _r850a8fbeb0bf18 = new Map();
  constructor(e, r, t, i, s) {
    super(e, r, t, i, s, null);
  }
  dispose() {
    this.var_1271 ||
      (this._cache?.dispose(),
      (this._cache = null),
      (this.var_71 = null),
      (this._assets = null),
      (this.var_186 = null),
      (this.var_1129 = null),
      (this.var_664 = null),
      (this.var_346 = []),
      !this.var_1236 && this.var_39 != null && this.var_39.dispose(),
      this.disposeCroppedTopImage(),
      (this.var_39 = null),
      (this._r8dad22ea491ca7 = []),
      (this.var_1271 = !0));
  }
  getFullImage(e) {
    return a._r9156cdade11108.get(e) ?? null;
  }
  getFullImageTopCropY(e) {
    return a._r850a8fbeb0bf18.get(e) ?? -1;
  }
  _r6af7e2875768ea(e, r, t) {
    (a._r9156cdade11108.get(e)?.dispose(), a._r9156cdade11108.set(e, r), a._r850a8fbeb0bf18.set(e, t | 0));
  }
  _r66a0b6869b9038(e, ...r) {
    let t = typeof r[0] == "string" ? r[0] : String(r[0] ?? "");
    switch (e) {
      case ve.POSTURE:
        switch (t) {
          case ve.POSTURE_LAY:
          case ve.POSTURE_WALK:
          case ve.POSTURE_STAND:
          case ve.POSTURE_SWIM:
          case ve.POSTURE_FLOAT:
          case ve.POSTURE_SIT:
            return super._r66a0b6869b9038(e, ...r);
        }
        break;
      case ve.const_118:
      case ve.DANCE:
      case ve.EXPRESSION_WAVE:
      case ve.SIGN:
      case ve.CARRY_OBJECT:
      case ve.USE_OBJECT:
      case ve.EXPRESSION_BLOW_A_KISS:
      case ve.EXPRESSION_67:
        this._r5c81cf9ebce38c(e, t);
        break;
    }
    return !0;
  }
  isBlocked() {
    return !0;
  }
}
