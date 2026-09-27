// Extracted from HabboAirLauncher.deobf.js, line 283653.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/RoomVisualizationData.as
// Obfuscated name: _i8459b525b333b4

class {
  static {
    n(this, "RoomVisualizationData");
  }
  var_1118 = new UnkClass_572c95();
  var_1455 = new UnkClass_0f71c7();
  var_1043 = new UnkClass_fc8c1f();
  var_1550 = new Kve();
  _rf1bec2a91c53aa = new PlaneMaskManager();
  _initialized = !1;
  get initialized() {
    return this._initialized;
  }
  get _r85f882347b458a() {
    return this.var_1455;
  }
  get _rdae98bcd25c6d2() {
    return this.var_1118;
  }
  get _ra18780fb8487f0() {
    return this.var_1043;
  }
  get _r70150ed264660c() {
    return this.var_1550;
  }
  get _r64001652b65938() {
    return this._rf1bec2a91c53aa;
  }
  dispose() {
    (this.var_1118?.dispose(),
      (this.var_1118 = null),
      this.var_1455?.dispose(),
      (this.var_1455 = null),
      this.var_1043?.dispose(),
      (this.var_1043 = null),
      this.var_1550?.dispose(),
      (this.var_1550 = null),
      this._rf1bec2a91c53aa?.dispose(),
      (this._rf1bec2a91c53aa = null));
  }
  clearCache() {
    (this.var_1118?.clearCache(),
      this.var_1455?.clearCache(),
      this.var_1550?.clearCache());
  }
  initialize(e) {
    if ((this.reset(), e == null)) return !1;
    (this.initializeSection(e, "wallData", this.var_1118),
      this.initializeSection(e, "floorData", this.var_1455),
      this.initializeSection(e, "wallAdData", this.var_1043),
      this.initializeSection(e, "landscapeData", this.var_1550));
    let r = e.child("maskData");
    return (r.length() > 0 && this._rf1bec2a91c53aa?.initialize(r.toArray()[0]), !0);
  }
  initializeAssetCollection(e) {
    this._initialized ||
      e == null ||
      (this.var_1118?.initializeAssetCollection(e),
      this.var_1455?.initializeAssetCollection(e),
      this.var_1043?.initializeAssetCollection(e),
      this.var_1550?.initializeAssetCollection(e),
      this._rf1bec2a91c53aa?.initializeAssetCollection(e),
      (this._initialized = !0));
  }
  reset() {}
  initializeSection(e, r, t) {
    let i = e.child(r);
    i.length() > 0 && t?.initialize(i.toArray()[0]);
  }
}
