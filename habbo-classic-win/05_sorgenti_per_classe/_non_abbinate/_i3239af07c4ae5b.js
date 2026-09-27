// Estratto da HabboAirLauncher.deobf.js, riga 233856.

class {
  constructor(e) {
    this.var_82 = e;
    (this.var_82?.addMessageEvent(new class_2137(this._rffaa5b90407f10)),
      this.var_82?.addMessageEvent(new class_1935(this._ra486dfc50631c9)),
      this.var_82?.addMessageEvent(new class_2250(this._r477c677e768ba6)));
  }
  static {
    n(this, "_i3239af07c4ae5b");
  }
  dispose() {
    this.var_82 = null;
  }
  get disposed() {
    return this.var_82 == null;
  }
  _rffaa5b90407f10 = n((e) => {
    let r = e.getParser();
    for (let t of r._r259f467d349e9f)
      t.senderId === r._r1d27619fc3477e &&
        this.var_82?._r86d4afd9e4a8a4.addItem(r._r1d27619fc3477e, t.senderName, t.message);
  }, "_rffaa5b90407f10");
  _ra486dfc50631c9 = n((e) => {
    let r = e.getParser();
    this.var_82?._r86d4afd9e4a8a4.addItem(r._r1d27619fc3477e, r.senderName, r.messageText);
  }, "_ra486dfc50631c9");
  _r477c677e768ba6 = n((e) => {
    let r = e.getParser();
    this.var_82?._r86d4afd9e4a8a4.addItem(r.senderId, "", r.messageText);
  }, "_r477c677e768ba6");
}
