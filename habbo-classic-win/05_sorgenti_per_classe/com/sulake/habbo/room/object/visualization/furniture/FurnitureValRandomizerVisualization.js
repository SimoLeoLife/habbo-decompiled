// Estratto da HabboAirLauncher.deobf.js, riga 279776.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureValRandomizerVisualization.as
// Nome offuscato: _i4e3149c5d515ba

class a extends Pa {
  static {
    n(this, "FurnitureValRandomizerVisualization");
  }
  static ANIMATION_ID_OFFSET_SLOW1 = 20;
  static ANIMATION_ID_OFFSET_SLOW2 = 10;
  static const_194 = 31;
  static const_364 = 32;
  static const_261 = 30;
  _r803af3295d0034 = [];
  var_894 = !1;
  constructor() {
    (super(), super.setAnimation(a.const_261));
  }
  setAnimation(e) {
    if (e === 0) {
      this.var_894 ||
        ((this.var_894 = !0), (this._r803af3295d0034 = [a.const_194, a.const_364]));
      return;
    }
    if (e > 0 && e <= a.ANIMATION_ID_OFFSET_SLOW2) {
      if (this.var_894) {
        ((this.var_894 = !1),
          this.direction === 2
            ? (this._r803af3295d0034 = [
                a.ANIMATION_ID_OFFSET_SLOW1 + 5 - e,
                a.ANIMATION_ID_OFFSET_SLOW2 + 5 - e,
                a.const_261,
              ])
            : (this._r803af3295d0034 = [a.ANIMATION_ID_OFFSET_SLOW1 + e, a.ANIMATION_ID_OFFSET_SLOW2 + e, a.const_261]));
        return;
      }
      super.setAnimation(a.const_261);
    }
  }
  _rccf505c78518d1(e) {
    return (
      super._r6a3d18e2c340d9(11) &&
        this._r803af3295d0034.length > 0 &&
        super.setAnimation(this._r803af3295d0034.shift()),
      super._rccf505c78518d1(e)
    );
  }
}
