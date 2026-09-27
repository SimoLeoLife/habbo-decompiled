// Estratto da HabboAirLauncher.deobf.js, riga 275423.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/AnimationFrameDirectionalData.as
// Nome offuscato: _ifefa50c339c68e

class extends AnimationFrameData {
  constructor(r, t, i, s, o, d, c) {
    super(r, t, i, s, o, c);
    this.var_2268 = d;
  }
  static {
    n(this, "AnimationFrameDirectionalData");
  }
  hasDirectionalOffsets() {
    return this.var_2268 != null;
  }
  getX(r) {
    return this.var_2268?._r86af7c54c73816(r, super.getX(r)) ?? super.getX(r);
  }
  getY(r) {
    return this.var_2268?._rcfe225b0c7a896(r, super.getY(r)) ?? super.getY(r);
  }
}
