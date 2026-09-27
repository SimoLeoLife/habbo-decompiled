// Estratto da HabboAirLauncher.deobf.js, riga 260132.

class a {
  static {
    n(this, "ViewMode");
  }
  static MYWORLD_VIEW_CODE = "myworld_view";
  static HOTEL_VIEW_CODE = "hotel_view";
  static OFFICIAL_VIEW_CODE = "official_view";
  static ROOM_ADS_VIEW_CODE = "roomads_view";
  static NEW_ADS_VIEW_CODE = "new_ads";
  static ADS_VIEW_CODE_PREFIX = "eventcategory__";
  static const_770 = 0;
  static MY_WORLD_VIEW = 1;
  static HOTEL_VIEW = 2;
  static ROOM_AD_VIEW = 3;
  static NEW_AD_VIEW = 4;
  static searchCodeOriginal(e) {
    return e === a.OFFICIAL_VIEW_CODE
      ? a.const_770
      : e === a.MYWORLD_VIEW_CODE
        ? a.MY_WORLD_VIEW
        : e === a.ROOM_ADS_VIEW_CODE
          ? a.ROOM_AD_VIEW
          : e === a.NEW_ADS_VIEW_CODE || e.indexOf(a.ADS_VIEW_CODE_PREFIX) === 0
            ? a.NEW_AD_VIEW
            : a.HOTEL_VIEW;
  }
  static isEventViewMode(e) {
    return e === a.ROOM_AD_VIEW || e === a.NEW_AD_VIEW;
  }
}
