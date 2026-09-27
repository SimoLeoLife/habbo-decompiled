// Extracted from HabboAirLauncher.deobf.js, line 313605.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/doorbell/DoorbellWidget.as
// Obfuscated name: _i0722d7723e5457

class a extends RoomWidgetBase {
  static {
    n(this, "DoorbellWidget");
  }
  static MAX_USERS_ON_DOORBELL_LIST = 50;
  _users = [];
  _view;
  constructor(e, r, t, i) {
    (super(e, r, t, i), (this._view = new DoorbellView(this)));
  }
  get mainWindow() {
    return this._view?.mainWindow ?? null;
  }
  get users() {
    return this._users;
  }
  dispose() {
    this.disposed ||
      (this._view?.dispose(), (this._view = null), (this._users = []), super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetDoorbellEvent.RINGING, this._r476efe7e2beff3),
      e.addEventListener?.(RoomWidgetDoorbellEvent.REJECTED, this._r4b8fed82417e1f),
      e.addEventListener?.(RoomWidgetDoorbellEvent.ACCEPTED, this._r4b8fed82417e1f),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetDoorbellEvent.RINGING, this._r476efe7e2beff3),
      e.removeEventListener?.(RoomWidgetDoorbellEvent.REJECTED, this._r4b8fed82417e1f),
      e.removeEventListener?.(RoomWidgetDoorbellEvent.ACCEPTED, this._r4b8fed82417e1f));
  }
  addUser(e) {
    if (!this._users.includes(e)) {
      if (this._users.length >= a.MAX_USERS_ON_DOORBELL_LIST) {
        this.deny(e);
        return;
      }
      (this._users.push(e), this._view?.update());
    }
  }
  removeUser(e) {
    let r = this._users.indexOf(e);
    r !== -1 && (this._users.splice(r, 1), this._view?.update());
  }
  accept(e) {
    (this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new X8(e, !0)), this.removeUser(e));
  }
  deny(e) {
    (this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new X8(e, !1)), this.removeUser(e));
  }
  denyAll() {
    for (; this._users.length > 0;) this.deny(this._users[0]);
  }
  _r476efe7e2beff3 = n((e) => {
    this.addUser(e.userName);
  }, "_r476efe7e2beff3");
  _r4b8fed82417e1f = n((e) => {
    this.removeUser(e.userName);
  }, "_r4b8fed82417e1f");
}
