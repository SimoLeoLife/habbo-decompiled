// Extracted from HabboAirLauncher.deobf.js, line 329003.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/class_2468.as
// Obfuscated name: _ic35f7fe3fc7b4a

class {
  static {
    n(this, "class_2468");
  }
  _disposed = !1;
  _container = null;
  var_17 = null;
  var_36 = null;
  _r9ddc2a8813b5d1 = null;
  _rc80d85dedbb7d3 = null;
  _r528fd18977608a = null;
  get disposed() {
    return this._disposed;
  }
  set container(e) {
    this._container = e;
  }
  set widget(e) {
    this.var_17 = e;
  }
  dispose() {
    this._disposed ||
      (this.removeMessageEvents(),
      (this.var_17 = null),
      (this._container = null),
      (this._disposed = !0));
  }
  set connection(e) {
    (this.removeMessageEvents(),
      (this.var_36 = e),
      this.var_36 != null &&
        ((this._r9ddc2a8813b5d1 = new class_3619(this._r6549dfd06e2872)),
        (this._rc80d85dedbb7d3 = new class_3398(this._r6c904dc3ba6003)),
        (this._r528fd18977608a = new class_2612(this._r838bc8b008808c)),
        this.var_36.addMessageEvent(this._r9ddc2a8813b5d1),
        this.var_36.addMessageEvent(this._rc80d85dedbb7d3),
        this.var_36.addMessageEvent(this._r528fd18977608a)));
  }
  sendLockConfirm(e, r) {
    this.var_36?.send(new class_2510(e, r));
  }
  get type() {
    return "";
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  _rc3479181526e34() {
    return [];
  }
  RoomWidgetLetUserInMessage(e) {
    return null;
  }
  update() {}
  _r6549dfd06e2872 = n((e) => {
    let r = e.getParser();
    this.var_17?.open(r.stuffId, r.isOwner);
  }, "_r6549dfd06e2872");
  _r6c904dc3ba6003 = n((e) => {
    this.var_17?.otherConfirmed(e.getParser().stuffId);
  }, "_r6c904dc3ba6003");
  _r838bc8b008808c = n((e) => {
    this.var_17?.close(e.getParser().stuffId);
  }, "_r838bc8b008808c");
  removeMessageEvents() {
    (this.var_36 != null &&
      (this._r9ddc2a8813b5d1 != null && this.var_36.removeMessageEvent(this._r9ddc2a8813b5d1),
      this._rc80d85dedbb7d3 != null && this.var_36.removeMessageEvent(this._rc80d85dedbb7d3),
      this._r528fd18977608a != null && this.var_36.removeMessageEvent(this._r528fd18977608a)),
      (this._r9ddc2a8813b5d1 = null),
      (this._rc80d85dedbb7d3 = null),
      (this._r528fd18977608a = null),
      (this.var_36 = null));
  }
}
