// Estratto da HabboAirLauncher.deobf.js, riga 135496.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/GenericEventQueue.as
// Nome offuscato: _i0eba7a41a4183a

class {
  static {
    n(this, "GenericEventQueue");
  }
  _disposed = !1;
  var_356;
  _eventArray = [];
  _index = 0;
  _end = !0;
  constructor(e) {
    this.var_356 = e;
  }
  get length() {
    return this._eventArray.length;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      ((this.var_356 = null),
      this._eventArray.length > 0 && this._eventArray.splice(0, this._eventArray.length),
      (this._disposed = !0));
  }
  begin() {
    (this._end || this.flush(), (this._index = 0), (this._end = !1));
  }
  next() {
    let e = null;
    return (
      this._index < this._eventArray.length &&
        ((e = this._eventArray[this._index] ?? null), this._index++),
      e
    );
  }
  remove() {
    (this._eventArray.splice(this._index - 1, 1), this._index > 0 && this._index--);
  }
  end() {
    ((this._index = 0), (this._end = !0));
  }
  flush() {
    (this._eventArray.splice(0, this._eventArray.length), (this._index = 0));
  }
  eventListener(e) {
    this._eventArray.push(e);
  }
}
