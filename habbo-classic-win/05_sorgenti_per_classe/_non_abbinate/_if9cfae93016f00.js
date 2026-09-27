// Estratto da HabboAirLauncher.deobf.js, riga 33046.

class extends ILe {
    static {
      n(this, "_if9cfae93016f00");
    }
    _r30dcf23fd80622;
    constructor(e) {
      (super({
        distance: Math.max(1, Math.ceil(Math.max(e.blurX, e.blurY))),
        outerStrength: e.inner ? 0 : Math.max(0, _i4c3bb74b2d27bf(e.strength)),
        innerStrength: e.inner ? Math.max(0, _i4c3bb74b2d27bf(e.strength)) : 0,
        color: e.color >>> 0,
        alpha: Math.max(0, Math.min(1, e.alpha)),
        quality: _i8ec702a6880c28(e.quality),
        knockout: e.knockout,
      }),
        (this._r30dcf23fd80622 = Math.max(0, Math.min(1, e.alpha))));
    }
    habboUpdateDisplayAlpha(e) {
      this.alpha = this._r30dcf23fd80622 * Math.max(0, Math.min(1, e));
    }
  }
