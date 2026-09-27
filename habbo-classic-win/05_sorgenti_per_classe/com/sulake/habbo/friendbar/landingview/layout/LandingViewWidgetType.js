// Estratto da HabboAirLauncher.deobf.js, riga 209326.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/layout/LandingViewWidgetType.as
// Nome offuscato: _i13adec41529b00

class a {
  static {
    n(this, "LandingViewWidgetType");
  }
  static AVATARIMAGE = "avatarimage";
  static EXPIRINGCATALOGPAGE = "expiringcatalogpage";
  static const_951 = "expiringcatalogpagesmall";
  static COMMUNITYGOAL = "communitygoal";
  static COMMUNITYGOALVS = "communitygoalvsmode";
  static COMMUNITYGOALVSVOTE = "communitygoalvsmodevote";
  static CATALOGPROMO = "catalogpromo";
  static CATALOGPROMOSMALL = "catalogpromosmall";
  static ACHIEVEMENTCOMPETITIONHALLOFFAME = "achievementcompetition_hall_of_fame";
  static ACHIEVEMENTCOMPETITIONPRIZES = "achievementcompetition_prizes";
  static DAILYQUEST = "dailyquest";
  static const_1387 = "nextlimitedrarecountdown";
  static HABBOMODERATIONPROMO = "habbomoderationpromo";
  static HABBOTALENTSPROMO = "habbotalentspromo";
  static HABBOWAYPROMO = "habbowaypromo";
  static ROOMHOPPERNETWORK = "roomhoppernetwork";
  static SAFETYQUIZPROMO = "safetyquizpromo";
  static GENERIC = "generic";
  static WIDGETCONTAINER = "widgetcontainer";
  static PROMOARTICLE = "promoarticle";
  static BONUSRARE = "bonusrare";
  static getWidgetForType(e, r) {
    switch (e) {
      case a.AVATARIMAGE:
        return new AvatarImageWidget(r);
      case a.ACHIEVEMENTCOMPETITIONHALLOFFAME:
        return new CommunityGoalHallOfFameWidget(r);
      case a.ACHIEVEMENTCOMPETITIONPRIZES:
        return new CommunityGoalPrizesWidget(r);
      case a.COMMUNITYGOAL:
        return new Nz(r);
      case a.COMMUNITYGOALVS:
        return new Oz(r);
      case a.COMMUNITYGOALVSVOTE:
        return new CommunityGoalVsModeWidgetWithVoting(r);
      case a.CATALOGPROMO:
        return new CatalogPromoWidget(r);
      case a.CATALOGPROMOSMALL:
        return new CatalogPromoWidgetSmall(r);
      case a.DAILYQUEST:
        return new y9e(r);
      case a.EXPIRINGCATALOGPAGE:
        return new Uz(r);
      case a.const_951:
        return new _i0103ec5a1d9771(r);
      case a.const_1387:
        return new M9e(r);
      case a.HABBOMODERATIONPROMO:
        return new HabboModerationPromoWidget(r);
      case a.HABBOTALENTSPROMO:
        return new HabboTalentsPromoWidget(r);
      case a.HABBOWAYPROMO:
        return new HabboWayPromoWidget(r);
      case a.ROOMHOPPERNETWORK:
        return new RoomHopperNetworkWidget(r);
      case a.SAFETYQUIZPROMO:
        return new SafetyQuizPromoWidget(r);
      case a.GENERIC:
        return new Vz(r);
      case a.WIDGETCONTAINER:
        return new k9e(r);
      case a.PROMOARTICLE:
        return new W9e(r);
      case a.BONUSRARE:
        return new BonusRarePromoWidget(r);
      default:
        return null;
    }
  }
}
