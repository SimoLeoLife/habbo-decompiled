// Estratto da HabboAirLauncher.deobf.js, riga 173735.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/clubcenter/util/BadgeResolver.as
// Nome offuscato: _i09fc94cd5111ee

class a {
  static {
    n(this, "BadgeResolver");
  }
  static DEFAULT_BADGE = "HC1";
  static CLUB_BADGES = [
    "ACH_VipHC1",
    "ACH_VipHC2",
    "ACH_VipHC3",
    "ACH_VipHC4",
    "ACH_VipHC5",
    "HC1",
    "HC2",
    "HC3",
    "HC4",
    "HC5",
  ];
  static resolveClubBadgeId(e) {
    let r = null;
    for (let t of a.CLUB_BADGES) e.indexOf(t) > -1 && (r = t);
    return r;
  }
  static resolveBadgeBitmap(e, r, t) {
    if (e == null || t == null) return null;
    let i = t.requestBadgeImage(e);
    return (i == null && r != null && t.events.addEventListener?.(Ho.BADGE_READY, r), i);
  }
}
