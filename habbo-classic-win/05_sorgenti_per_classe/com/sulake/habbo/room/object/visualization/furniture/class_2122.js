// Estratto da HabboAirLauncher.deobf.js, riga 279855.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/class_2122.as
// Nome offuscato: _i293d8b0c01e6ae

class a extends Pa {
  static {
    n(this, "class_2122");
  }
  static ONES_SPRITE_TAG = "ones_sprite";
  static TENS_SPRITE_TAG = "tens_sprite";
  static HUNDREDS_SPRITE_TAG = "hundreds_sprite";
  static HIDE_RESULTS_STATES = [-1, 1];
  static const_1038 = -1;
  updateObject(e, r) {
    return (super.updateObject(e, r), !0);
  }
  getFrameNumber(e, r) {
    let i = this.object?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_VOTE_MAJORITY_RESULT) ?? 0;
    switch (this.getSpriteTag(e, this.direction, r)) {
      case a.ONES_SPRITE_TAG:
        return i % 10;
      case a.TENS_SPRITE_TAG:
        return Math.trunc(i / 10) % 10;
      case a.HUNDREDS_SPRITE_TAG:
        return Math.trunc(i / 100) % 10;
      default:
        return super.getFrameNumber(e, r);
    }
  }
  getSpriteAlpha(e, r, t) {
    let s = this.object?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_VOTE_MAJORITY_RESULT) ?? 0;
    if (a.HIDE_RESULTS_STATES.includes(this.object?.getState(0) ?? 0) || s === a.const_1038)
      switch (this.getSpriteTag(e, r, t)) {
        case a.ONES_SPRITE_TAG:
        case a.TENS_SPRITE_TAG:
        case a.HUNDREDS_SPRITE_TAG:
          return 0;
      }
    return super.getSpriteAlpha(e, r, t);
  }
}
