// Estratto da HabboAirLauncher.deobf.js, riga 300111.

class extends Qr {
  static {
    n(this, "_i239da90dc368e5");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectFurnitureActionEvent.NFT_REWARD_BOX]);
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null)) {
      if (e.type === _ifd7c1208e3417e.DOUBLE_CLICK) {
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
