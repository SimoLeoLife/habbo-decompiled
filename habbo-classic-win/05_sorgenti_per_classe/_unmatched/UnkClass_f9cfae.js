// Extracted from HabboAirLauncher.deobf.js, line 33046.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if9cfae93016f00

class extends ILe {
    static {
      n(this, "UnkClass_f9cfae");
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
