// Extracted from HabboAirLauncher.deobf.js, line 229912.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/guidehelp/GuideSessionData.as
// Obfuscated name: _i4810d97c46cebd

class a {
  static {
    n(this, "GuideSessionData");
  }
  static _r89886e7a57425f = 0;
  static _rbb2dfdd0beabe0 = 1;
  static _r711573a6873f8a = 2;
  static _r74779cde9c2c59 = 0;
  static _r7894481c427574 = 1;
  static _r70574a4b2e878e = 2;
  var_4019 = a._r89886e7a57425f;
  _r276f0f4a140983 = GuideSessionStateEnum.CLOSED;
  _r0642d4a7c247e9 = 0;
  _r503fa259171edb = "";
  _userId = 0;
  _userName = "";
  var_4915 = "";
  _r01f971f1efab9f = 0;
  _guideName = "";
  var_4836 = "";
  _rcc8a3bda444523() {
    return this._r6686ce2adc7929() || this._rccc20fe64a9117() || this._rd1c588c3796ab3();
  }
  _r6686ce2adc7929() {
    return (
      this.var_4019 === a._r711573a6873f8a &&
      (this._r276f0f4a140983 === GuideSessionStateEnum.USER_CREATE ||
        this._r276f0f4a140983 === GuideSessionStateEnum.USER_PENDING ||
        this._r276f0f4a140983 === GuideSessionStateEnum.USER_ONGOING ||
        this._r276f0f4a140983 === GuideSessionStateEnum.USER_FEEDBACK)
    );
  }
  _rccc20fe64a9117() {
    return (
      this.var_4019 === a._rbb2dfdd0beabe0 &&
      (this._r276f0f4a140983 === GuideSessionStateEnum.GUIDE_ACCEPT ||
        this._r276f0f4a140983 === GuideSessionStateEnum.GUIDE_ONGOING ||
        this._r276f0f4a140983 === GuideSessionStateEnum.GUIDE_CLOSED)
    );
  }
  _r3309318e1639a0() {
    return this._r276f0f4a140983 === GuideSessionStateEnum.GUIDE_ONGOING || this._r276f0f4a140983 === GuideSessionStateEnum.USER_ONGOING;
  }
  _rd1c588c3796ab3() {
    return (
      this._r276f0f4a140983 === GuideSessionStateEnum.GUARDIAN_CHAT_REVIEW_ACCEPT ||
      this._r276f0f4a140983 === GuideSessionStateEnum.GUARDIAN_CHAT_REVIEW_WAIT_FOR_VOTERS ||
      this._r276f0f4a140983 === GuideSessionStateEnum.GUARDIAN_CHAT_REVIEW_VOTE ||
      this._r276f0f4a140983 === GuideSessionStateEnum.GUARDIAN_CHAT_REVIEW_WAIT_FOR_RESULTS ||
      this._r276f0f4a140983 === GuideSessionStateEnum.GUARDIAN_CHAT_REVIEW_RESULTS
    );
  }
  set role(e) {
    this.var_4019 = e;
  }
  get _ra25c446b9c70b2() {
    return this._r276f0f4a140983;
  }
  set _ra25c446b9c70b2(e) {
    this._r276f0f4a140983 = e;
  }
  get _r703d0531e0e84c() {
    return this._r0642d4a7c247e9;
  }
  set _r703d0531e0e84c(e) {
    this._r0642d4a7c247e9 = e;
  }
  get _r2ea4ca0b54bc4d() {
    return this._r503fa259171edb;
  }
  set _r2ea4ca0b54bc4d(e) {
    this._r503fa259171edb = e;
  }
  get userId() {
    return this._userId;
  }
  set userId(e) {
    this._userId = e;
  }
  get userName() {
    return this._userName;
  }
  set userName(e) {
    this._userName = e;
  }
  get _rd90e40ea576eac() {
    return this.var_4915;
  }
  set _rd90e40ea576eac(e) {
    this.var_4915 = e;
  }
  get _re37dbc09670180() {
    return this._r01f971f1efab9f;
  }
  set _re37dbc09670180(e) {
    this._r01f971f1efab9f = e;
  }
  get guideName() {
    return this._guideName;
  }
  set guideName(e) {
    this._guideName = e;
  }
  get _reea2dd8bfffc6d() {
    return this.var_4836;
  }
  set _reea2dd8bfffc6d(e) {
    this.var_4836 = e;
  }
}
