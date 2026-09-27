// Extracted from HabboAirLauncher.deobf.js, line 279820.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/class_1850.as
// Obfuscated name: _ie6a1953d687daf

class a extends Pa {
  static {
    n(this, "class_1850");
  }
  static ONES_SPRITE_TAG = "ones_sprite";
  static TENS_SPRITE_TAG = "tens_sprite";
  static HUNDREDS_SPRITE_TAG = "hundreds_sprite";
  static HIDE_COUNTER_SCORE = -1;
  updateObject(e, r) {
    return (super.updateObject(e, r), !0);
  }
  getFrameNumber(e, r) {
    let i = this.object?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_283) ?? 0;
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
    if ((this.object?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_283) ?? 0) === a.HIDE_COUNTER_SCORE)
      switch (this.getSpriteTag(e, r, t)) {
        case a.ONES_SPRITE_TAG:
        case a.TENS_SPRITE_TAG:
        case a.HUNDREDS_SPRITE_TAG:
          return 0;
      }
    return super.getSpriteAlpha(e, r, t);
  }
}
