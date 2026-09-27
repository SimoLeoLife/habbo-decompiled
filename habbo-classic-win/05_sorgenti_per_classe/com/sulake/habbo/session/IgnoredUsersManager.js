// Extracted from HabboAirLauncher.deobf.js, line 335692.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/IgnoredUsersManager.as
// Obfuscated name: _i0c57a95900ea88

class {
  constructor(e) {
    this._sessionDataManager = e;
    this._sessionDataManager?.communication != null &&
      ((this.var_3443 = this._sessionDataManager.communication._r2e106e2349a0b6(
        new class_2530(this.onIgnoreResult),
      )),
      (this.var_3667 = this._sessionDataManager.communication._r2e106e2349a0b6(
        new class_2728(this._r598177d1cdca0e),
      )));
  }
  static {
    n(this, "IgnoredUsersManager");
  }
  var_3443 = null;
  var_3667 = null;
  _r8f6d1d52ec4cc8 = [];
  get disposed() {
    return this._sessionDataManager == null;
  }
  dispose() {
    this.disposed ||
      (this._sessionDataManager?.communication?._r7668362bf55fdd(this.var_3443),
      this._sessionDataManager?.communication?._r7668362bf55fdd(this.var_3667),
      (this.var_3443 = null),
      (this.var_3667 = null),
      (this._sessionDataManager = null));
  }
  initIgnoreList() {
    this._sessionDataManager?.send(new class_3720());
  }
  ignoreUser(e) {
    this._sessionDataManager?.send(new class_1807(e));
  }
  unignoreUser(e) {
    this._sessionDataManager?.send(new class_2474(e));
  }
  isIgnored(e) {
    return this._r8f6d1d52ec4cc8.includes(e);
  }
  _r598177d1cdca0e = n((e) => {
    this._r8f6d1d52ec4cc8 = [...e.ignoredUserIds];
  }, "_r598177d1cdca0e");
  onIgnoreResult = n((e) => {
    let r = e.userId;
    switch (e.result) {
      case 1:
        this._r03eebd19e668d2(r);
        break;
      case 2:
        (this._r03eebd19e668d2(r), this._r8f6d1d52ec4cc8.shift());
        break;
      case 3:
        this._r5b1473bb89cc46(r);
        break;
    }
  }, "onIgnoreResult");
  _r03eebd19e668d2(e) {
    this._r8f6d1d52ec4cc8.includes(e) || this._r8f6d1d52ec4cc8.push(e);
  }
  _r5b1473bb89cc46(e) {
    let r = this._r8f6d1d52ec4cc8.indexOf(e);
    r >= 0 && this._r8f6d1d52ec4cc8.splice(r, 1);
  }
}
