// Extracted from HabboAirLauncher.deobf.js, line 372637.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/chests/subcontrollers/AbstractChestSubController.as
// Obfuscated name: _ic6c99b403dede5

class {
  static {
    n(this, "AbstractChestSubController");
  }
  _disposed = !1;
  var_1219;
  _messageEvents;
  constructor(e) {
    ((this.var_1219 = e), (this._messageEvents = []));
  }
  get getFloorItemData() {
    return this.var_1219;
  }
  get _r41f5cc7d3516ce() {
    return this.var_1219._r41f5cc7d3516ce;
  }
  localize(e) {
    return this.localization.getLocalization(e, e);
  }
  get localization() {
    return this.var_1219.localization;
  }
  addMessageEvent(e) {
    (this._messageEvents.push(e), this.var_1219.addMessageEvent(e));
  }
  removeMessageEvents() {
    for (let e of this._messageEvents) (this.var_1219.removeMessageEvent(e), e.dispose());
    this._messageEvents = null;
  }
  get _r14388092f4efd6() {
    return this._ra76f57f5f89268._r14388092f4efd6;
  }
  get _r4b0f4dcd9b6c6f() {
    return this._ra76f57f5f89268._r4b0f4dcd9b6c6f;
  }
  get canWithdraw() {
    return this._ra76f57f5f89268.canWithdraw;
  }
  get _ra76f57f5f89268() {
    return this.var_1219._r8475342393ef03;
  }
  get _r154af520fc218d() {
    return this.getFloorItemData._r8475342393ef03._r154af520fc218d;
  }
  get type() {
    return -1;
  }
  get view() {
    return null;
  }
  get title() {
    return "";
  }
  get isEmpty() {
    return !0;
  }
  clear() {}
  get itemCount() {
    return 0;
  }
  updateUI() {}
  get _r66a1da9835e6c4() {
    return !0;
  }
  dispose() {
    this._disposed || (this.removeMessageEvents(), (this.var_1219 = null), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
}
