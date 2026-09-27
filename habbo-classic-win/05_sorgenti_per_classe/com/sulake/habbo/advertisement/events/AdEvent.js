// Extracted from HabboAirLauncher.deobf.js, line 158307.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/advertisement/events/AdEvent.as
// Obfuscated name: _i9cb51196b3123e

class extends M {
  constructor(r, t, i, s, o, d, c, f = -1, l = -1) {
    super(r, !1, !1);
    this.var_2440 = t;
    this.var_39 = i;
    this.var_363 = s;
    this.var_3574 = o;
    this.var_5592 = d;
    this.var_4888 = c;
    this.var_344 = f;
    this.var_4410 = l;
  }
  static {
    n(this, "AdEvent");
  }
  static ROOM_AD_IMAGE_LOADED = "AE_ROOM_AD_IMAGE_LOADED";
  static ROOM_AD_IMAGE_LOADING_FAILED = "AE_ROOM_AD_IMAGE_LOADING_FAILED";
  static ROOM_AD_SHOW = "AE_ROOM_AD_SHOW";
  get roomId() {
    return this.var_2440;
  }
  get image() {
    return this.var_39;
  }
  get imageUrl() {
    return this.var_363;
  }
  get clickUrl() {
    return this.var_3574;
  }
  get adWarningL() {
    return this.var_5592;
  }
  get _r7a2cf729f1199a() {
    return this.var_4888;
  }
  get objectId() {
    return this.var_344;
  }
  get objectCategory() {
    return this.var_4410;
  }
}
