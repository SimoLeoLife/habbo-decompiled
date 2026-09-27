// Extracted from HabboAirLauncher.deobf.js, line 325522.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/poll/PollWidget.as
// Obfuscated name: _ic6e81ef7e17882

class extends RoomWidgetBase {
  static {
    n(this, "PollWidget");
  }
  _r5d5d6c33784519;
  constructor(e, r, t = null, i = null) {
    (super(e, r, t, i), (this._r5d5d6c33784519 = new B()));
  }
  dispose() {
    if (!this.disposed) {
      if (this._r5d5d6c33784519 != null) {
        let e = this._r5d5d6c33784519.length;
        for (let r = 0; r < e; r += 1) (this._r5d5d6c33784519.getWithIndex(0) ?? null)?.dispose();
        (this._r5d5d6c33784519.dispose(), (this._r5d5d6c33784519 = null));
      }
      super.dispose();
    }
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetPollUpdateEvent.OFFER, this._r11d53902e6c400),
      e.addEventListener?.(RoomWidgetPollUpdateEvent.ERROR, this._r1e9f8ec90df6c8),
      e.addEventListener?.(RoomWidgetPollUpdateEvent.CONTENT, this._rca0a8beb8b0d60),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetPollUpdateEvent.OFFER, this._r11d53902e6c400),
      e.removeEventListener?.(RoomWidgetPollUpdateEvent.ERROR, this._r1e9f8ec90df6c8),
      e.removeEventListener?.(RoomWidgetPollUpdateEvent.CONTENT, this._rca0a8beb8b0d60));
  }
  _r11d53902e6c400 = n((e) => {
    let r = e,
      t = r.id,
      i = this._r5d5d6c33784519?.getValue(t) ?? null;
    (i == null && ((i = new PollSession(t, this)), this._r5d5d6c33784519?.add(t, i)),
      i.showOffer(r.headline, r.summary));
  }, "_r11d53902e6c400");
  _r1e9f8ec90df6c8 = n((e) => {
    let r = e;
    this.windowManager?.alert("${win_error}", r.summary, 0, (t, i) => {
      t.dispose();
    });
  }, "_r1e9f8ec90df6c8");
  _rca0a8beb8b0d60 = n((e) => {
    let r = e;
    if (r == null) return;
    let t = this._r5d5d6c33784519?.getValue(r.id) ?? null;
    t?.showContent(r._ra570877b369758, r._rcc2456a2f18866, r._r062fd979878425 ?? [], r._rd4e9d9358ab72e);
  }, "_rca0a8beb8b0d60");
  _r04e58e1f2ef728(e) {
    let r = this._r5d5d6c33784519?.getValue(e) ?? null;
    r != null && (r.showThanks(), r.dispose(), this._r5d5d6c33784519?.remove(e));
  }
  _r6d4b681851130e(e) {
    let r = this._r5d5d6c33784519?.getValue(e) ?? null;
    r != null && (r.dispose(), this._r5d5d6c33784519?.remove(e));
  }
}
