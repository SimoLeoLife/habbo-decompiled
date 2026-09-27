// Extracted from HabboAirLauncher.deobf.js, line 163850.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/hotlooks/HotLooksModel.as
// Obfuscated name: _i56622745f30543

class a extends CategoryBaseModel {
  static {
    n(this, "HotLooksModel");
  }
  static CATEGORY_HOT_LOOKS = "hot_looks";
  static CATEGORY_MY_LOOKS = "my_looks";
  static MAXIMUM_HOT_LOOKS = 20;
  var_1095 = new Map();
  _r8798a47ecb9edc = null;
  constructor(e) {
    (super(e),
      this.var_1095.set(Ra.MALE, []),
      this.var_1095.set(Ra.const_140, []),
      this._r531d881615c967(e));
  }
  dispose() {
    this._r8798a47ecb9edc != null &&
      (this.controller.manager.communication?._r7668362bf55fdd(this._r8798a47ecb9edc),
      (this._r8798a47ecb9edc = null));
    for (let e of this.var_1095.values()) for (let r of e) r.dispose();
    (this.var_1095.clear(), super.dispose());
  }
  reset() {}
  selectHotLook(e) {
    let r = this.hotLooks[e] ?? null;
    r == null ||
      r.figure === "" ||
      this.controller.loadAvatarInEditor(r.figure, r.gender, this.controller.clubMemberLevel);
  }
  get hotLooks() {
    return this.var_1095.get(this.controller.gender) ?? [];
  }
  switchCategory(e = "") {}
  _red12f777c0d8a3(e) {
    return null;
  }
  selectPart(e, r) {}
  init() {
    (this._view == null && (this._view = new HotLooksView(this)), this._view.init(), (this.var_217 = !0));
  }
  _r531d881615c967(e) {
    let r = e.manager.communication;
    if (r == null) return;
    ((this._r8798a47ecb9edc = new class_2711(this._rc727bbea23336c)), r._r2e106e2349a0b6(this._r8798a47ecb9edc));
    let t = new UnkMessageComposer_1args_c25925(a.MAXIMUM_HOT_LOOKS);
    (r.connection?.send(t), t.dispose());
  }
  _rc727bbea23336c = n((e) => {
    for (let r of this.var_1095.values()) {
      for (let t of r) t.dispose();
      r.length = 0;
    }
    for (let r of e.getParser().hotLooks) this._rd8aa43b05f31d7(r);
    this._view?.update();
  }, "_rc727bbea23336c");
  _rd8aa43b05f31d7(e) {
    let r = this.var_1095.get(e.gender.toUpperCase());
    r?.push(new Nj(this.controller, e.figureString, e.gender));
  }
}
