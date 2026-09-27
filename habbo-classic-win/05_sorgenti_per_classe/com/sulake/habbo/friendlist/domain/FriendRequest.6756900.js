// Estratto da HabboAirLauncher.deobf.js, riga 216513.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/domain/FriendRequest.as
// Nome offuscato: _i6b3f2f1d33d729

class a {
  static {
    n(this, "FriendRequest");
  }
  static STATE_OPEN = 1;
  static STATE_ACCEPTED = 2;
  static STATE_DECLINED = 3;
  static STATE_FAILED = 4;
  _requestId;
  _requesterName;
  var_5121;
  _state = a.STATE_OPEN;
  _disposed = !1;
  _view = null;
  constructor(e) {
    ((this._requestId = e.requestId),
      (this._requesterName = e._r19234559776703),
      (this.var_5121 = e.requesterUserId));
  }
  dispose() {
    this._disposed || ((this._disposed = !0), this._view?.destroy(), (this._view = null));
  }
  get disposed() {
    return this._disposed;
  }
  get requestId() {
    return this._requestId;
  }
  get _r19234559776703() {
    return this._requesterName;
  }
  get requesterUserId() {
    return this.var_5121;
  }
  get view() {
    return this._view;
  }
  get state() {
    return this._state;
  }
  set view(e) {
    this._view = e;
  }
  set state(e) {
    this._state = e;
  }
}
