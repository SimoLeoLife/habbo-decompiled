// Extracted from HabboAirLauncher.deobf.js, line 279716.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/class_1896.as
// Obfuscated name: _i098e8448cdc3d8

class a extends Pa {
  static {
    n(this, "class_1896");
  }
  static ONES_SPRITE_TAG = "ones_sprite";
  static TENS_SPRITE_TAG = "tens_sprite";
  static HUNDREDS_SPRITE_TAG = "hundreds_sprite";
  static THOUSANDS_SPRITE_TAG = "thousands_sprite";
  get animationId() {
    return 0;
  }
  getFrameNumber(e, r) {
    let t = this.getSpriteTag(e, this.direction, r),
      i = super.animationId;
    switch (t) {
      case a.ONES_SPRITE_TAG:
        return i % 10;
      case a.TENS_SPRITE_TAG:
        return Math.trunc(i / 10) % 10;
      case a.HUNDREDS_SPRITE_TAG:
        return Math.trunc(i / 100) % 10;
      case a.THOUSANDS_SPRITE_TAG:
        return Math.trunc(i / 1e3) % 10;
      default:
        return super.getFrameNumber(e, r);
    }
  }
}
