// Extracted from HabboAirLauncher.deobf.js, line 151805.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/RoomUserCountWidget.as
// Obfuscated name: _i926031ad1737a5

class {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("room_usercount_xml")?.content,
    )),
      this.var_220 != null && (this.var_220.rootWindow = this._rf8f9fc25599fa4),
      this._rf8f9fc25599fa4 != null &&
        this.var_220 != null &&
        ((this._rf8f9fc25599fa4.width = this.var_220.width),
        (this._rf8f9fc25599fa4.height = this.var_220.height)));
  }
  static {
    n(this, "RoomUserCountWidget");
  }
  static TYPE = "room_user_count";
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  set userCount(e) {
    let r = this._rf8f9fc25599fa4?.findChildByName("room_usercount");
    r != null && (r.caption = `${Math.max(0, Math.trunc(e))}`);
  }
  get properties() {
    return [];
  }
  set properties(e) {}
  dispose() {
    this._disposed ||
      (this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get iterator() {
    return Lt.INSTANCE;
  }
}
