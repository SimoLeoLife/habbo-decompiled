// Extracted from HabboAirLauncher.deobf.js, line 340963.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/BottomBackgroundBorder.as
// Obfuscated name: _if687f0b68f6963

class {
  static {
    n(this, "BottomBackgroundBorder");
  }
  _window;
  _disposed = !1;
  constructor(e) {
    if (
      ((this._window = e.windowManager.buildFromXML(
        e.assets.getAssetByName("bottom_background_border_xml")?.content,
      )),
      this._window == null)
    )
      throw new Error("Failed to construct bottom background border from XML.");
    ((this._window.procedure = this.onWindowEvent), this.updatePosition());
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this._window?.dispose(), (this._window = null), (this._disposed = !0));
  }
  onWindowEvent = n((e, r) => {
    e.type === y.const_411 && this.updatePosition();
  }, "onWindowEvent");
  updatePosition() {
    this._window != null &&
      ((this._window.position = new E(
        -10,
        this._window.desktop.height - (this._window.height - 3),
      )),
      (this._window.width = this._window.desktop.width + 20));
  }
}
