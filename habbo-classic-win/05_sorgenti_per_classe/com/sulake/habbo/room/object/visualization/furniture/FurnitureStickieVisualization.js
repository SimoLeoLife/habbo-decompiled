// Estratto da HabboAirLauncher.deobf.js, riga 279762.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureStickieVisualization.as
// Nome offuscato: _i71f4b1413bb906

class extends Pc {
  static {
    n(this, "FurnitureStickieVisualization");
  }
  _rf3f1c6d8b0d070 = null;
  initialize(e) {
    return ((this._rf3f1c6d8b0d070 = e instanceof FurnitureVisualizationData ? e : null), super.initialize(e));
  }
  getSpriteColor(e, r, t) {
    return this._rf3f1c6d8b0d070 == null
      ? k0.DEFAULT_COLOR
      : this._rf3f1c6d8b0d070.getColor(e, r, t);
  }
}
