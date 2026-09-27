// Extracted from HabboAirLauncher.deobf.js, line 259188.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/transitional/FakeMainViewCtrl.as
// Obfuscated name: _i947765933f9978

class {
  static {
    n(this, "FakeMainViewCtrl");
  }
  _newNavigator;
  _r380110a391c3c3;
  constructor(e, r) {
    ((this._newNavigator = e), (this._r380110a391c3c3 = r));
  }
  get disposed() {
    return this._newNavigator == null && this._r380110a391c3c3 == null;
  }
  onNavigatorToolBarIconClick() {
    this._newNavigator?.toggle();
  }
  dispose() {
    ((this._newNavigator = null), (this._r380110a391c3c3 = null));
  }
  open() {
    this._newNavigator?.open();
  }
  isOpen() {
    return !1;
  }
  close() {
    this._newNavigator?.close();
  }
  get mainWindow() {
    return this._newNavigator?.mainWindow ?? null;
  }
  refresh() {
    this._newNavigator?.refresh();
  }
  reloadRoomList(e) {
    return (this._newNavigator?.refresh(), !0);
  }
  startSearch(e, r, t = "-1", i = 1) {
    this._newNavigator?.performSearch(this.getSearchCodeByLegacySearchType(r), t);
  }
  update(e) {}
  get searchInput() {
    return this._r380110a391c3c3?._r970f774dfe2577?.searchInput ?? null;
  }
  _r8885c4aa700228(e) {
    this._newNavigator?.open();
  }
  get _r9dcf961fca1107() {
    return this._r380110a391c3c3?._r970f774dfe2577?._r9dcf961fca1107 ?? !1;
  }
  getSearchCodeByLegacySearchType(e) {
    switch (e) {
      case We._r84d8927b802156:
        return "popular";
      case We._r67c29729e7800e:
        return "highest_score";
      case We._rd6fb6dfca67725:
        return "friends_rooms";
      case We._r9f66f4bb0f69b3:
        return "with_friends";
      case We._r8a4642632c386a:
        return "my";
      case We._r94854e4c2ed9da:
        return "favorites";
      case We.const_200:
        return "history";
      case We.SEARCHTYPE_TEXT_SEARCH:
        return "query";
      case We.SEARCHTYPE_TAG_SEARCH:
        return "query";
      case We.SEARCHTYPE_ROOM_NAME_SEARCH:
        return "query";
      case We.SEARCHTYPE_OFFICIALROOMS:
        return "official";
      case We.const_1020:
        return "new_ads";
      case We.SEARCHTYPE_GROUP_NAME_SEARCH:
        return "groups";
      case We.SEARCHTYPE_GUILD_BASES:
        return "groups";
      case We.SEARCHTYPE_COMPETITION_ROOMS:
        return "competition";
      case We.const_486:
        return "top_promotions";
      case We.const_1233:
        return "new_ads";
      case We.const_1090:
        return "with_rights";
      case We.SEARCHTYPE_MY_GUILD_BASES:
        return "my_groups";
      case We.SEARCHTYPE_BY_OWNER:
        return "query";
      case We.SEARCHTYPE_CATEGORIES:
        return "all_categories";
      case We.SEARCHTYPE_RECOMMENDED_ROOMS:
        return "recommended";
      case We.const_1369:
        return "history_freq";
      default:
        return "query";
    }
  }
}
