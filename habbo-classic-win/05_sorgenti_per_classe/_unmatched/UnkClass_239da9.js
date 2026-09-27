// Extracted from HabboAirLauncher.deobf.js, line 300111.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i239da90dc368e5

class extends Qr {
  static {
    n(this, "UnkClass_239da9");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectFurnitureActionEvent.NFT_REWARD_BOX]);
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null)) {
      if (e.type === UnkClass_fd7c12.DOUBLE_CLICK) {
        this._rb231cecbbb8adf || this._rce2b5eb85a79e0();
        return;
      }
      super.mouseEvent(e, r);
    }
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.NFT_REWARD_BOX, this.object));
  }
  get _rb231cecbbb8adf() {
    return (this.object?.getState(0) ?? 0) !== 0;
  }
}
