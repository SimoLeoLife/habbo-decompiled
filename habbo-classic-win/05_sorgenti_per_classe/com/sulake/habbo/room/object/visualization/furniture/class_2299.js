// Estratto da HabboAirLauncher.deobf.js, riga 277368.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/class_2299.as
// Nome offuscato: _if205f256ddc213

class a extends Pa {
  static {
    n(this, "class_2299");
  }
  static SECONDS_SPRITE_TAG = "seconds_sprite";
  static TEN_SECONDS_SPRITE_TAG = "ten_seconds_sprite";
  static MINUTES_SPRITE_TAG = "minutes_sprite";
  static TEN_MINUTES_SPRITE_TAG = "ten_minutes_sprite";
  get animationId() {
    return 0;
  }
  getFrameNumber(e, r) {
    let t = this.getSpriteTag(e, this.direction, r),
      i = super.animationId;
    switch (t) {
      case a.SECONDS_SPRITE_TAG:
        return (i % 60) % 10;
      case a.TEN_SECONDS_SPRITE_TAG:
        return Math.trunc((i % 60) / 10);
      case a.MINUTES_SPRITE_TAG:
        return Math.trunc(i / 60) % 10;
      case a.TEN_MINUTES_SPRITE_TAG:
        return Math.trunc(Math.trunc(i / 60) / 10) % 10;
      default:
        return super.getFrameNumber(e, r);
    }
  }
}
