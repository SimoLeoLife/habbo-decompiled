// Extracted from HabboAirLauncher.deobf.js, line 208292.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4365.as
// Obfuscated name: _i8b5f561e68f06a

class a {
  static {
    n(this, "class_4365");
  }
  static CAPTION = "caption";
  static TITLE = "title";
  static const_1016 = "subcaption";
  static BODYTEXT = "bodytext";
  static SPACING = "spacing";
  static CATALOGBUTTON = "catalogbutton";
  static PROMOTEDROOMBUTTON = "promotedroombutton";
  static LINK = "link";
  static const_604 = "gotoroombutton";
  static REQUESTBADGEBUTTON = "requestbadgebutton";
  static REQUESTBADGEBUTTONSECOND = "requestbadgebuttonsecond";
  static REQUESTBADGEBUTTONTHIRD = "requestbadgebuttonthird";
  static REQUESTBADGEBUTTONFOURTH = "requestbadgebuttonfourth";
  static REQUESTBADGEBUTTONFIFTH = "requestbadgebuttonfifth";
  static CREDITHABBLETBUTTON = "credithabbletbutton";
  static COMMUNITYGOALTIMER = "communitygoaltimer";
  static CUSTOMTIMER = "customtimer";
  static const_1328 = "gotohomeroombutton";
  static const_1001 = "gotocompetitionroombutton";
  static REWARDBADGE = "rewardbadge";
  static IMAGE = "image";
  static SUBMITCOMPETITIONROOM = "submitcompetitionroom";
  static CONCURRENTUSERSMETER = "concurrentusersmeter";
  static CONCURRENTUSERSINFO = "concurrentusersinfo";
  static DAILYQUEST = "dailyquest";
  static const_968 = "buyvipbutton";
  static COMMUNITYGOALSCORE = "communitygoalscore";
  static INTERNAL_LINK_BUTTON = "internallinkbutton";
  static createHandler(e) {
    switch (e) {
      case a.CAPTION:
      case a.const_1016:
      case a.BODYTEXT:
        return new class_4390();
      case a.TITLE:
        return new TitleElementHandler();
      case a.SPACING:
        return new UnkClass_e87bc9();
      case a.CATALOGBUTTON:
        return new CatalogButtonElementHandler();
      case a.PROMOTEDROOMBUTTON:
        return new UnkSubclassOf_class_4383_67c155();
      case a.LINK:
        return new class_4399();
      case a.const_604:
        return new UnkSubclassOf_class_4383_74de28();
      case a.REQUESTBADGEBUTTON:
      case a.REQUESTBADGEBUTTONSECOND:
      case a.REQUESTBADGEBUTTONTHIRD:
      case a.REQUESTBADGEBUTTONFOURTH:
      case a.REQUESTBADGEBUTTONFIFTH:
        return new class_4396();
      case a.CREDITHABBLETBUTTON:
        return new UnkSubclassOf_class_4383_07e92f();
      case a.COMMUNITYGOALTIMER:
        return new class_4400();
      case a.CUSTOMTIMER:
        return new class_4393();
      case a.const_1328:
        return new UnkSubclassOf_class_4383_19d322();
      case a.const_1001:
        return new UnkSubclassOf_class_4383_9b23f8();
      case a.REWARDBADGE:
        return new UnkClass_15990b();
      case a.IMAGE:
        return new UnkClass_9c86dd();
      case a.SUBMITCOMPETITIONROOM:
        return new class_4387();
      case a.CONCURRENTUSERSMETER:
        return new class_4398();
      case a.CONCURRENTUSERSINFO:
        return new a9e();
      case a.DAILYQUEST:
        return new o9e();
      case a.const_968:
        return new UnkSubclassOf_class_4383_b4effe();
      case a.COMMUNITYGOALSCORE:
        return new class_4391();
      case a.INTERNAL_LINK_BUTTON:
        return new class_4394();
      default:
        return null;
    }
  }
}
