// Extracted from HabboAirLauncher.deobf.js, line 375313.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/WiredVariablesSynchronizer.as
// Obfuscated name: _iac2e0801cee853

class a {
  static {
    n(this, "WiredVariablesSynchronizer");
  }
  static STATUS_IDLE = 0;
  static STATUS_AWAIT_HASH = 1;
  static STATUS_AWAIT_DIFFS = 2;
  static REQUEST_OFFSET = 800;
  static INVALIDATE_REQUEST_OFFSET = 4e3;
  _disposed = !1;
  var_927 = -1;
  _status = a.STATUS_IDLE;
  _allVariablesHash = 0;
  var_612 = null;
  _variableIdToHash = null;
  _listeners = [];
  _events;
  _messageEvents;
  _r365716ceefd236 = !1;
  constructor(e) {
    ((this._events = e),
      (this._messageEvents = [
        new class_2852((r) => this._r8c9343b83e2485(r)),
        new class_3639((r) => this._r9e7f77424139bd(r)),
      ]),
      this._r2c15b16e6eba6e());
  }
  get disposed() {
    return this._disposed;
  }
  getAllVariables(e, r = !0, t = 0) {
    return (
      this._status !== a.STATUS_IDLE &&
        this.var_927 < _ia411d8d8194a3a() - a.INVALIDATE_REQUEST_OFFSET &&
        (this._status = a.STATUS_IDLE),
      this._status !== a.STATUS_IDLE
        ? (this.addListener(e), !1)
        : this.var_927 > _ia411d8d8194a3a() - a.REQUEST_OFFSET
          ? (e(this.sortedCachedVariables), !0)
          : !r && this.var_612 != null
            ? (e(this.sortedCachedVariables), !0)
            : ((this.var_927 = _ia411d8d8194a3a()),
              (this._status = a.STATUS_AWAIT_HASH),
              this.addListener(e),
              t !== 0 ? this._r2a4ee0d149624f(t) : this._events.send(new UnkMessageComposer_0args_2ab1df()),
              !1)
    );
  }
  _r558a177d550462(e) {
    return this.var_612?.get(e) ?? null;
  }
  removeListener(e) {
    let r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  clear() {
    ((this._listeners = []),
      (this.var_612 = null),
      (this._variableIdToHash = null),
      (this._allVariablesHash = 0),
      (this.var_927 = -1),
      (this._status = a.STATUS_IDLE));
  }
  _ra4896d0bc54959() {
    this._r2c15b16e6eba6e();
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this._listeners = []),
      (this.var_927 = -1),
      (this._status = a.STATUS_IDLE),
      (this._allVariablesHash = 0),
      (this.var_612 = null),
      (this._variableIdToHash = null),
      this._r71c4346a186f38(),
      (this._messageEvents = null),
      (this._events = null));
  }
  _r2c15b16e6eba6e() {
    if (!(this._r365716ceefd236 || this._events?.communication == null)) {
      for (let e of this._messageEvents ?? []) this._events.communication._r2e106e2349a0b6(e);
      this._r365716ceefd236 = !0;
    }
  }
  _r71c4346a186f38() {
    if (!(!this._r365716ceefd236 || this._events?.communication == null)) {
      for (let e of this._messageEvents ?? []) this._events.communication._r7668362bf55fdd(e);
      this._r365716ceefd236 = !1;
    }
  }
  _r8c9343b83e2485 = n((e) => {
    this._r2a4ee0d149624f(e.getParser().allVariablesHash);
  }, "_r8c9343b83e2485");
  _r2a4ee0d149624f(e) {
    if (this._status === a.STATUS_AWAIT_HASH) {
      if (((this.var_927 = _ia411d8d8194a3a()), e === this._allVariablesHash)) {
        (this.updateListeners(), (this._status = a.STATUS_IDLE));
        return;
      }
      ((this._allVariablesHash = e),
        (this._status = a.STATUS_AWAIT_DIFFS),
        this._events.send(new UnkMessageComposer_1args_f2cae5(this._variableIdToHash)));
    }
  }
  _r9e7f77424139bd = n((e) => {
    if (this._status !== a.STATUS_AWAIT_DIFFS) return;
    this.var_927 = _ia411d8d8194a3a();
    let r = e.getParser();
    ((this._allVariablesHash = r.allVariablesHash),
      this.var_612 == null &&
        ((this.var_612 = new Map()), (this._variableIdToHash = new Map())),
      this._rbf3471f2db2c16(r._re8423e5f8121ba ?? []),
      this._r7f2089a1347c59(r._rdfa4bf05dddbd0 ?? new Map()),
      r._r40cb523a517bf8 && (this.updateListeners(), (this._status = a.STATUS_IDLE)));
  }, "_r9e7f77424139bd");
  _rbf3471f2db2c16(e) {
    for (let r of e) (this.var_612?.delete(r), this._variableIdToHash?.delete(r));
  }
  _r7f2089a1347c59(e) {
    for (let [r, t] of e)
      (this.var_612.set(r.variableId, r), this._variableIdToHash.set(r.variableId, t));
  }
  get sortedCachedVariables() {
    if (this.var_612 == null) return [];
    let e = Array.from(this.var_612.values());
    return (we._r5c461577938819(e), e);
  }
  addListener(e) {
    this._listeners.indexOf(e) === -1 && this._listeners.push(e);
  }
  updateListeners() {
    let e = this.sortedCachedVariables;
    for (let r of this._listeners) r(e);
    this._listeners.splice(0, this._listeners.length);
  }
}
