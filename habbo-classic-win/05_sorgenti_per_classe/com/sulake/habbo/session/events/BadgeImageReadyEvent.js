// Extracted from HabboAirLauncher.deobf.js, line 145208.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/BadgeImageReadyEvent.as
// Obfuscated name: _i8d9db79ac28721

class a extends M {
  static {
    n(this, "BadgeImageReadyEvent");
  }
  static BADGE_READY = "BIRE_BADGE_IMAGE_READY";
  var_595;
  var_39;
  constructor(e, r, t = !1, i = !1) {
    (super(a.BADGE_READY, t, i), (this.var_595 = e), (this.var_39 = r));
  }
  get badgeId() {
    return this.var_595;
  }
  get badgeImage() {
    return this.var_39;
  }
}
