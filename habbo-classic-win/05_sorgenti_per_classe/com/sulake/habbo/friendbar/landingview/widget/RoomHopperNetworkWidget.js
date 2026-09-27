// Extracted from HabboAirLauncher.deobf.js, line 209111.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/RoomHopperNetworkWidget.as
// Obfuscated name: _i7a51171b535c07

class {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "RoomHopperNetworkWidget");
  }
  _container = null;
  _disposed = !1;
  _rbcf9054ae81328 = 0;
  get container() {
    return this._container;
  }
  get disposed() {
    return this._disposed;
  }
  initialize() {
    ((this._container = this._landingView?.getXmlWindow("room_hopper_network")),
      (this._rbcf9054ae81328 =
        this._landingView?.getInteger("landing.view.roomhopper.network.id", 0) ?? 0));
    let e = this._container?.findChildByName("bitmap");
    (e != null &&
      (e.assetUri = this._landingView?.getProperty("landing.view.roomhopper.image.uri") ?? ""),
      this._container?.findChildByName("button")?.addEventListener(u.CLICK, this._r3700ccce9e5741));
  }
  refresh() {}
  dispose() {
    this.disposed ||
      (this._container?.dispose(),
      (this._container = null),
      (this._landingView = null),
      (this._disposed = !0));
  }
  set settings(e) {
    ko.applyCommonWidgetSettings(this._container, e);
  }
  _r3700ccce9e5741 = n((e) => {
    e.type === u.CLICK && this._landingView?.navigator?._rf54c0f47881811(this._rbcf9054ae81328, !1);
  }, "_r3700ccce9e5741");
}
