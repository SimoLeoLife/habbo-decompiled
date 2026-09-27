// Extracted from HabboAirLauncher.deobf.js, line 335651.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/HabboGroupInfoManager.as
// Obfuscated name: _i7a33e0d3bbbc56

class {
  constructor(e) {
    this._sessionDataManager = e;
    this._sessionDataManager?.communication != null &&
      ((this._rf56dadb173e617 = this._sessionDataManager.communication._r2e106e2349a0b6(
        new UnkMessageEvent_333a8d(this._rc68c5eb1f835e9),
      )),
      (this._r6b72ab6df117f9 = this._sessionDataManager.communication._r2e106e2349a0b6(
        new class_2723(this._rfaff84536ada7c),
      )));
  }
  static {
    n(this, "HabboGroupInfoManager");
  }
  _badges = new B();
  _rf56dadb173e617 = null;
  _r6b72ab6df117f9 = null;
  get disposed() {
    return this._sessionDataManager == null;
  }
  dispose() {
    this.disposed ||
      (this._sessionDataManager?.communication?._r7668362bf55fdd(this._rf56dadb173e617),
      this._sessionDataManager?.communication?._r7668362bf55fdd(this._r6b72ab6df117f9),
      this._badges.dispose(),
      (this._sessionDataManager = null));
  }
  var_4561(e) {
    return this._badges.getValue(e) ?? "";
  }
  _rc68c5eb1f835e9 = n((e) => {
    this._sessionDataManager?.send(new class_2738());
  }, "_rc68c5eb1f835e9");
  _rfaff84536ada7c = n((e) => {
    let r = e.badges;
    for (let t = 0; t < r.length; t++) {
      let i = r.getKey(t);
      (this._badges.remove(i), this._badges.add(i, String(r.getWithIndex(t) ?? "")));
    }
  }, "_rfaff84536ada7c");
}
