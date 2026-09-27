// Extracted from HabboAirLauncher.deobf.js, line 279064.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureHabboWheelVisualization.as
// Obfuscated name: _ie5c52af9dd7bab

class a extends Pa {
  static {
    n(this, "FurnitureHabboWheelVisualization");
  }
  static ANIMATION_ID_OFFSET_SLOW1 = 10;
  static ANIMATION_ID_OFFSET_SLOW2 = 20;
  static const_194 = 31;
  static const_364 = 32;
  _r803af3295d0034 = [];
  var_894 = !1;
  setAnimation(e) {
    if (e === -1) {
      this.var_894 ||
        ((this.var_894 = !0), (this._r803af3295d0034 = [a.const_194, a.const_364]));
      return;
    }
    if (e > 0 && e <= a.ANIMATION_ID_OFFSET_SLOW1) {
      if (this.var_894) {
        ((this.var_894 = !1),
          (this._r803af3295d0034 = [a.ANIMATION_ID_OFFSET_SLOW1 + e, a.ANIMATION_ID_OFFSET_SLOW2 + e, e]));
        return;
      }
      super.setAnimation(e);
    }
  }
  _rccf505c78518d1(e) {
    return (
      super._r6a3d18e2c340d9(1) &&
        super._r6a3d18e2c340d9(2) &&
        super._r6a3d18e2c340d9(3) &&
        this._r803af3295d0034.length > 0 &&
        super.setAnimation(this._r803af3295d0034.shift()),
      super._rccf505c78518d1(e)
    );
  }
}
