// Extracted from HabboAirLauncher.deobf.js, line 373930.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/contracts/WiredContractController.as
// Obfuscated name: _i333ef2818c3e05

class {
  static {
    n(this, "WiredContractController");
  }
  _disposed = !1;
  _roomEvents;
  var_102;
  _messageEvents;
  _r745622ff0a77ba = -1;
  _ra800000548562d = null;
  var_838 = null;
  var_958 = null;
  var_914 = null;
  _r66bdfce9e2665f = Number.MAX_SAFE_INTEGER;
  _r85513951bcaed3 = Number.MAX_SAFE_INTEGER;
  _r365716ceefd236 = !1;
  constructor(e) {
    ((this._roomEvents = e),
      (this.var_102 = new UbuntuPresetManager(e)),
      (this._messageEvents = []),
      this._messageEvents.push(new class_3660((r) => this._r1c0f0d3f33d635(r))),
      this._messageEvents.push(new class_2382((r) => this._r0d4a8a165d8cbf(r))),
      this._messageEvents.push(new class_2968((r) => this.onContractUpdateResult(r))));
    for (let r of this._messageEvents) this.addMessageEvent(r);
  }
  _ra4896d0bc54959() {
    if (!this._r365716ceefd236) for (let e of this._messageEvents ?? []) this.addMessageEvent(e);
  }
  _r1c0f0d3f33d635(e) {
    let r = e.getParser();
    ((this._r745622ff0a77ba = r.contractId),
      this._rf3db13932bfb60.connection.send(new class_3832(this._r745622ff0a77ba)));
  }
  _r0d4a8a165d8cbf(e) {
    let r = e.getParser();
    if (r.contractId !== this._r745622ff0a77ba) return;
    ((this._r745622ff0a77ba = -1), this.closeAllOpenFrames());
    let t = null;
    (r._rfb746ff09ca5d8 === Gf._r965c0c5de4f6f8
      ? (this.var_838 == null && (this.var_838 = new $Te(this, this.var_102)),
        this.var_838.show(r),
        (t = this.var_838))
      : r._rfb746ff09ca5d8 === Gf._rcf8d21c9b3a6bd
        ? (this.var_914 == null && (this.var_914 = new TradeContract(this, this.var_102)),
          this.var_914.show(r),
          (t = this.var_914))
        : r._rfb746ff09ca5d8 === Gf.const_902 &&
          (this.var_958 == null && (this.var_958 = new RewardContract(this, this.var_102)),
          this.var_958.show(r),
          (t = this.var_958)),
      t != null &&
        !(
          this._r85513951bcaed3 === Number.MAX_SAFE_INTEGER ||
          this._r66bdfce9e2665f === Number.MAX_SAFE_INTEGER
        ) &&
        ((t.window.y = this._r85513951bcaed3), (t.window.x = this._r66bdfce9e2665f)));
  }
  saveContract(e) {
    let r = e.validate();
    if (r != null) {
      this._roomEvents.windowManager.alert("${wiredfurni.error.title}", r, 0, null);
      return;
    }
    let t = [];
    (e.addContentsToComposer(t), this._rf3db13932bfb60.connection.send(new class_2993(t)));
  }
  onContractUpdateResult(e) {
    let r = e.getParser();
    if (r.isSuccess) this.closeAllOpenFrames();
    else {
      let t = `wiredcontracts.error.${r.failCode}`,
        i = this._roomEvents.localization.getLocalizationWithParams(t, t);
      this._roomEvents.windowManager.alert("${wiredfurni.error.title}", i, 0, null);
    }
  }
  clear() {
    (this.closeAllOpenFrames(),
      (this._r66bdfce9e2665f = Number.MAX_SAFE_INTEGER),
      (this._r85513951bcaed3 = Number.MAX_SAFE_INTEGER),
      this._ra800000548562d?._r1edc5ca8baf0a7());
  }
  closeAllOpenFrames() {
    (this._ra800000548562d?.hide(),
      this.var_838?.isShowing()
        ? this.var_838.hide()
        : this.var_958?.isShowing()
          ? this.var_958.hide()
          : this.var_914?.isShowing() && this.var_914.hide());
  }
  _rf76feb2f31d17e(e) {
    ((this._r85513951bcaed3 = e.y), (this._r66bdfce9e2665f = e.x));
  }
  get addEditContractElement() {
    return (
      this._ra800000548562d == null && (this._ra800000548562d = new KTe(this, this.var_102)),
      this._ra800000548562d
    );
  }
  get _rf3db13932bfb60() {
    return this._roomEvents.communication;
  }
  addMessageEvent(e) {
    let r = this._roomEvents?.communication;
    r != null && (r._r2e106e2349a0b6(e), (this._r365716ceefd236 = !0));
  }
  removeMessageEvent(e) {
    let r = this._roomEvents?.communication;
    r?._r7668362bf55fdd(e);
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  dispose() {
    if (!this._disposed) {
      (this._ra800000548562d != null && (this._ra800000548562d.dispose(), (this._ra800000548562d = null)),
        this.var_914 != null && (this.var_914.dispose(), (this.var_914 = null)),
        this.var_958 != null && (this.var_958.dispose(), (this.var_958 = null)),
        this.var_838 != null && (this.var_838.dispose(), (this.var_838 = null)));
      for (let e of this._messageEvents ?? []) this.removeMessageEvent(e);
      ((this._messageEvents = null),
        (this.var_102 = null),
        (this._roomEvents = null),
        (this._disposed = !0));
    }
  }
  get disposed() {
    return this._disposed;
  }
}
