// Estratto da HabboAirLauncher.deobf.js, riga 259290.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/transitional/LegacyNavigator.as
// Nome offuscato: _i82f5362d5f6c51

class {
  static {
    n(this, "LegacyNavigator");
  }
  _newNavigator;
  _r380110a391c3c3;
  _rebfcae5d882867;
  var_2016;
  var_1300;
  _passwordInput;
  _rd1571c7d6889a3;
  _rfe0221cd85ad5f;
  _r657baf4e8021c5;
  var_4015;
  var_2435;
  _r8f0a81b34c4fd5;
  _r4f1b55aaf19d1b;
  constructor(e, r) {
    ((this._newNavigator = e),
      (this._r380110a391c3c3 = r),
      (this._rebfcae5d882867 = new FakeMainViewCtrl(e, r)),
      (this.var_2016 = new MQ(this)),
      (this.var_1300 = new RoomInfoViewCtrl(this)),
      (this._passwordInput = new CQ(this)),
      (this._rd1571c7d6889a3 = new GuestRoomPasswordInput(this)),
      (this._rfe0221cd85ad5f = new GuestRoomDoorbell(this)),
      (this._r657baf4e8021c5 = new IQ(this)),
      (this.var_4015 = new RoomEventViewCtrl(this)),
      (this.var_2435 = new gQ(this)),
      (this._r8f0a81b34c4fd5 = new RoomFilterCtrl(this)),
      (this._r4f1b55aaf19d1b = new EnforceCategoryCtrl(this)));
  }
  set oldNavigator(e) {
    this._r380110a391c3c3 = e;
  }
  get assets() {
    return this._r4b7643f125db90().assets;
  }
  get windowManager() {
    return this._r38a5f743bf8534().windowManager;
  }
  get data() {
    return this._r4b7643f125db90().data;
  }
  get _r970f774dfe2577() {
    return this._rebfcae5d882867;
  }
  get tabs() {
    return this._r4b7643f125db90().tabs;
  }
  get _r878c741bfdd13d() {
    return this.var_1300;
  }
  get _r23bf93dfc48759() {
    return this._passwordInput;
  }
  get communication() {
    return this._r4b7643f125db90().communication;
  }
  get roomSettingsCtrl() {
    return this.var_2016;
  }
  get sessionData() {
    return this._r4b7643f125db90().sessionData;
  }
  get passwordInput() {
    return this._r4b7643f125db90().passwordInput;
  }
  get doorbell() {
    return this._rfe0221cd85ad5f;
  }
  get SimpleAlertView() {
    return this.var_4015;
  }
  get localization() {
    return this._r4b7643f125db90().localization;
  }
  get officialRoomEntryManager() {
    return this._r4b7643f125db90().officialRoomEntryManager;
  }
  get toolbar() {
    return this._r4b7643f125db90().toolbar;
  }
  get habboHelp() {
    return this._r4b7643f125db90().habboHelp;
  }
  get _r41a6589dfa9df5() {
    return this.var_2435;
  }
  get _r515faa3e76c305() {
    return this._r8f0a81b34c4fd5;
  }
  get roomSessionManager() {
    return this._r4b7643f125db90().roomSessionManager;
  }
  get _r39ca8e01929189() {
    return this._r4f1b55aaf19d1b;
  }
  get _r34fab0dd99b1c7() {
    return this._r380110a391c3c3 == null ? null : this._r380110a391c3c3._r34fab0dd99b1c7;
  }
  send(e, r = !1) {
    this._r4b7643f125db90().send(e, r);
  }
  getXmlWindow(e, r = 1) {
    return this._r4b7643f125db90().getXmlWindow(e, r);
  }
  getText(e) {
    return this._r4b7643f125db90().getText(e);
  }
  _r43eae9731f5b27(e, r, t, i) {
    return this._r4b7643f125db90()._r43eae9731f5b27(e, r, t, i);
  }
  getButton(e, r, t, i = 0, s = 0, o = 0) {
    return this._r4b7643f125db90().getButton(e, r, t, i, s, o);
  }
  refreshButton(e, r, t, i, s, o) {
    this._r4b7643f125db90().refreshButton(e, r, t, i, s, o);
  }
  _r6bd8f6d6bfdbb5(e, r = "_png") {
    return this._r4b7643f125db90()._r6bd8f6d6bfdbb5(e, r);
  }
  _r2a0df8adec219d(e) {
    this._r4b7643f125db90()._r2a0df8adec219d(e);
  }
  _r95e9ef312eb388() {
    this._r4b7643f125db90()._r95e9ef312eb388();
  }
  showFavouriteRooms() {
    this._r38a5f743bf8534().performSearch("favorites");
  }
  showHistoryRooms() {
    this._r38a5f743bf8534().performSearch("history");
  }
  showFrequentRooms() {
    this._r38a5f743bf8534().performSearch("history_freq");
  }
  get tracking() {
    return this._r4b7643f125db90().tracking;
  }
  _r38c44cbd7deb08() {
    this._passwordInput.hide();
  }
  _rfc45c7125c46f2(e, r) {
    this._r4b7643f125db90().enterRoomWebRequest(e, !0, r ?? void 0);
  }
  goToRoom(e, r, t = "", i = -1, s = !1) {
    this._r4b7643f125db90().goToRoom(e, !1, t, i, s);
  }
  isPerkAllowed(e) {
    return this._r4b7643f125db90().isPerkAllowed(e);
  }
  trackGoogle(e, r, t = -1) {
    this._r4b7643f125db90().trackGoogle(e, r);
  }
  getBoolean(e) {
    return this._r4b7643f125db90().getBoolean(e);
  }
  getInteger(e, r) {
    return this._r4b7643f125db90().getInteger(e, r);
  }
  get events() {
    return this._r38a5f743bf8534().events;
  }
  goToHomeRoom() {
    return (this._r38a5f743bf8534().goToHomeRoom(), !0);
  }
  performTagSearch(e) {
    this._r38a5f743bf8534().performTagSearch(e);
  }
  performTextSearch(e) {
    this._r38a5f743bf8534().performTextSearch(e);
  }
  performGuildBaseSearch() {
    this._r38a5f743bf8534().performSearch("groups");
  }
  performCompetitionRoomsSearch(e, r) {
    this._r38a5f743bf8534().performSearch("competition");
  }
  showOwnRooms() {
    this._r38a5f743bf8534().performSearch("myworld_view");
  }
  _r32d169e0ccf735(e) {
    this._r38a5f743bf8534().goToRoom(e);
  }
  _r251807bd7fb8c9(e) {
    return this._r4b7643f125db90()._r251807bd7fb8c9(e);
  }
  _r37e55c511f5b0e(e) {
    this._r4b7643f125db90()._r37e55c511f5b0e(e);
  }
  _rf54c0f47881811(e, r) {
    this._r4b7643f125db90()._rf54c0f47881811(e, r);
  }
  _r545ad49cf926cc() {
    this._r38a5f743bf8534()._r45a41d9ebca32b();
  }
  _r52fa4af48d31b1(e = null) {
    this._r38a5f743bf8534().open();
  }
  _r4d7124da99408e() {
    this._r38a5f743bf8534().close();
  }
  get _r3dfd89b26af6cd() {
    return this._r4b7643f125db90()._r3dfd89b26af6cd;
  }
  get _rff8822efc4b68b() {
    return this._r4b7643f125db90()._rff8822efc4b68b;
  }
  _r503afe7046a967(e) {}
  _raee2c33b60ee59(e) {}
  _r2fc1e9a895a4db() {
    this.var_1300.toggle();
  }
  _r2fec64fe1f887e() {
    return this._r4b7643f125db90()._r2fec64fe1f887e();
  }
  queueInterface(e, r) {
    return this._r38a5f743bf8534().queueInterface(e, r || void 0);
  }
  registerUpdateReceiver(e, r) {
    this._r38a5f743bf8534().registerUpdateReceiver(e, r);
  }
  removeUpdateReceiver(e) {
    this._r38a5f743bf8534().removeUpdateReceiver(e);
  }
  release(e) {
    return this._r38a5f743bf8534().release(e);
  }
  dispose() {
    (this.var_2016.dispose(),
      this.var_1300.dispose(),
      this._passwordInput.dispose(),
      this._rd1571c7d6889a3.dispose(),
      this._rfe0221cd85ad5f.dispose(),
      this._r657baf4e8021c5.dispose(),
      this.var_4015.dispose(),
      this.var_2435.dispose(),
      this._r8f0a81b34c4fd5.dispose(),
      (this._r4f1b55aaf19d1b = null),
      (this._r380110a391c3c3 = null),
      (this._newNavigator = null));
  }
  get disposed() {
    return this._r380110a391c3c3 == null;
  }
  _rcd7c3122876c17(e, r, t, i) {
    this._r4b7643f125db90()._rcd7c3122876c17(e, r, t, i);
  }
  getProperty(e) {
    return this._r4b7643f125db90().getProperty(e);
  }
  trackNavigationDataPoint(e, r, t = "", i = 0) {
    this._r4b7643f125db90().trackNavigationDataPoint(e, r, t, i);
  }
  _r0af75c3a396faa(e) {
    return this._r4b7643f125db90()._r0af75c3a396faa(e);
  }
  _r15f67a9e1b27c9(e) {
    return this._r4b7643f125db90()._r15f67a9e1b27c9(e);
  }
  get _r34ab8227ed918d() {
    return this._r4b7643f125db90().data._r34ab8227ed918d;
  }
  get _re6464a0aadd93c() {
    return this._r4b7643f125db90().roomSettingsCtrl;
  }
  _r38a5f743bf8534() {
    if (!this._newNavigator) throw new Error("LegacyNavigator has been disposed.");
    return this._newNavigator;
  }
  _r4b7643f125db90() {
    if (!this._r380110a391c3c3) throw new Error("LegacyNavigator old navigator is not available.");
    return this._r380110a391c3c3;
  }
}
