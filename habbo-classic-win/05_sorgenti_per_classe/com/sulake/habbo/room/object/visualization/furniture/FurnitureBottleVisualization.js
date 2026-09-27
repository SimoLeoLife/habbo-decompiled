// Extracted from HabboAirLauncher.deobf.js, line 277241.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureBottleVisualization.as
// Obfuscated name: _ie0932a011045ee

class a extends Pa {
  static {
    n(this, "FurnitureBottleVisualization");
  }
  static ANIMATION_ID_OFFSET_SLOW1 = 20;
  static ANIMATION_ID_OFFSET_SLOW2 = 9;
  static const_364 = -1;
  _r803af3295d0034 = [];
  var_894 = !1;
  setAnimation(e) {
    if (e === a.const_364) {
      this.var_894 || ((this.var_894 = !0), (this._r803af3295d0034 = [a.const_364]));
      return;
    }
    if (e >= 0 && e <= 7) {
      if (this.var_894) {
        ((this.var_894 = !1),
          (this._r803af3295d0034 = [a.ANIMATION_ID_OFFSET_SLOW1, a.ANIMATION_ID_OFFSET_SLOW2 + e, e]));
        return;
      }
      super.setAnimation(e);
    }
  }
  _rccf505c78518d1(e) {
    return (
      super._r6a3d18e2c340d9(0) &&
        this._r803af3295d0034.length > 0 &&
        super.setAnimation(this._r803af3295d0034.shift()),
      super._rccf505c78518d1(e)
    );
  }
}
