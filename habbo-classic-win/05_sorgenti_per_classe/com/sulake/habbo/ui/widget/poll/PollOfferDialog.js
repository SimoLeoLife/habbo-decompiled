// Extracted from HabboAirLauncher.deobf.js, line 325387.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/poll/PollOfferDialog.as
// Obfuscated name: _ic06021027b402d

class a {
  constructor(e, r, t, i) {
    this._id = e;
    this.var_17 = i;
    let s = this.var_17?.assets?.getAssetByName("poll_offer");
    if (
      s?.content == null ||
      ((this._window = this.var_17?.windowManager?.buildFromXML(s.content)),
      this._window == null)
    )
      return;
    (this._window.center(),
      this._window
        .findChildByName("poll_offer_button_ok")
        ?.addEventListener(u.CLICK, this._r29a9c14eb33b0e),
      this._window
        .findChildByName("poll_offer_button_cancel")
        ?.addEventListener(u.CLICK, this.onCancel),
      this._window
        .findChildByName("poll_offer_button_later")
        ?.addEventListener(u.CLICK, this._ree4e52d729c6d1),
      this._window
        .findChildByName("header_button_close")
        ?.addEventListener(u.CLICK, this.onClose));
    let l,
      b = this._window.findChildByName("poll_offer_headline");
    b != null &&
      ((b.text = r),
      (l = this._window.findChildByName("poll_offer_headline_wrapper")),
      l != null && (this._window.height += l.visibleRegion.height - l._rbab5041f1931e4.height));
    let _ = this._window.findChildByName("poll_offer_summary");
    _ != null &&
      ((_.text = t),
      (l = this._window.findChildByName("poll_offer_summary_wrapper")),
      l != null && (this._window.height += l.visibleRegion.height - l._rbab5041f1931e4.height));
  }
  static {
    n(this, "PollOfferDialog");
  }
  static OK = "POLL_OFFER_STATE_OK";
  static CANCEL = "POLL_OFFER_STATE_CANCEL";
  static UNKNOWN = "POLL_OFFER_STATE_UNKNOWN";
  _disposed = !1;
  _window = null;
  _state = a.UNKNOWN;
  get disposed() {
    return this._disposed;
  }
  get state() {
    return this._state;
  }
  start() {}
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._window?.dispose(),
      (this._window = null),
      (this.var_17 = null));
  }
  _r29a9c14eb33b0e = n((e) => {
    this._state === a.UNKNOWN &&
      ((this._state = a.OK),
      this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetPollMessage(RoomWidgetPollMessage.START, this._id)));
  }, "_r29a9c14eb33b0e");
  onCancel = n((e) => {
    this._state === a.UNKNOWN &&
      ((this._state = a.CANCEL),
      this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetPollMessage(RoomWidgetPollMessage.REJECT, this._id)),
      this.var_17?._r6d4b681851130e(this._id));
  }, "onCancel");
  _ree4e52d729c6d1 = n((e) => {
    this._state === a.UNKNOWN &&
      ((this._state = a.CANCEL), this.var_17?._r6d4b681851130e(this._id));
  }, "_ree4e52d729c6d1");
  onClose = n((e) => {
    this._state === a.UNKNOWN &&
      ((this._state = a.CANCEL),
      this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetPollMessage(RoomWidgetPollMessage.REJECT, this._id)),
      this.var_17?._r6d4b681851130e(this._id));
  }, "onClose");
}
