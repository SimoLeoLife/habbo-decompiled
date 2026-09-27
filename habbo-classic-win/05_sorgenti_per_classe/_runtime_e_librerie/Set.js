// Estratto da HabboAirLauncher.deobf.js, riga 60816.

class {
  static {
    n(this, "Set");
  }
  _r6c5dd7ed2ab318 = new globalThis.Set();
  get length() {
    return this._r6c5dd7ed2ab318.size;
  }
  get disposed() {
    return this._r6c5dd7ed2ab318 == null;
  }
  dispose() {
    (this._r6c5dd7ed2ab318.clear(), (this._r6c5dd7ed2ab318 = null));
  }
  reset() {
    this._r6c5dd7ed2ab318.clear();
  }
  isEmpty() {
    return this._r6c5dd7ed2ab318.size === 0;
  }
  add(e) {
    return this._r6c5dd7ed2ab318.has(e) ? !1 : (this._r6c5dd7ed2ab318.add(e), !0);
  }
  remove(e) {
    return this._r6c5dd7ed2ab318.delete(e);
  }
  contains(e) {
    return this._r6c5dd7ed2ab318.has(e);
  }
  toArray() {
    return [...this._r6c5dd7ed2ab318];
  }
}
