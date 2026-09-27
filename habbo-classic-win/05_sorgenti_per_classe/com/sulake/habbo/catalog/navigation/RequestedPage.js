// Extracted from HabboAirLauncher.deobf.js, line 173395.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/navigation/RequestedPage.as
// Obfuscated name: _i89dda4206e386d

class a {
  static {
    n(this, "RequestedPage");
  }
  static REQUEST_TYPE_NONE = 0;
  static REQUEST_TYPE_ID = 1;
  static REQUEST_TYPE_NAME = 2;
  _r0642d4a7c247e9 = a.REQUEST_TYPE_NONE;
  _requestId = 0;
  var_3110 = -1;
  _r2b70c569a25e8e = "";
  set _r26df5f9eec7617(e) {
    ((this._r0642d4a7c247e9 = a.REQUEST_TYPE_ID), (this._requestId = e));
  }
  set _r70facbccfcf79e(e) {
    ((this._r0642d4a7c247e9 = a.REQUEST_TYPE_NAME), (this._r2b70c569a25e8e = e));
  }
  resetRequest() {
    ((this._r0642d4a7c247e9 = a.REQUEST_TYPE_NONE), (this.var_3110 = -1));
  }
  get _r703d0531e0e84c() {
    return this._r0642d4a7c247e9;
  }
  get requestId() {
    return this._requestId;
  }
  get _r44eed779fb526e() {
    return this.var_3110;
  }
  set _r44eed779fb526e(e) {
    this.var_3110 = e;
  }
  get _rf98ff8b2458175() {
    return this._r2b70c569a25e8e;
  }
}
