// Extracted from HabboAirLauncher.deobf.js, line 279456.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureQueueTileVisualization.as
// Obfuscated name: _i06a3ad8c061434

class a extends AnimatedFurnitureVisualization {
  static {
    n(this, "FurnitureQueueTileVisualization");
  }
  static const_364 = 3;
  static const_795 = 2;
  static ANIMATION_ID_NORMAL = 1;
  static const_861 = 15;
  _r803af3295d0034 = [];
  _r2147155a237e62 = 0;
  setAnimation(e) {
    (e === a.const_795 &&
      ((this._r803af3295d0034 = [a.ANIMATION_ID_NORMAL]), (this._r2147155a237e62 = a.const_861)),
      super.setAnimation(e));
  }
  _rccf505c78518d1(e) {
    return (
      this._r2147155a237e62 > 0 && this._r2147155a237e62--,
      this._r2147155a237e62 === 0 &&
        this._r803af3295d0034.length > 0 &&
        super.setAnimation(this._r803af3295d0034.shift()),
      super._rccf505c78518d1(e)
    );
  }
}
