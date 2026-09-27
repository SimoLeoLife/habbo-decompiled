// Estratto da HabboAirLauncher.deobf.js, riga 61005.

class {
  static {
    n(this, "_iacae14d312ed5c");
  }
  _disposed = !1;
  _entries = [];
  get disposed() {
    return this._disposed;
  }
  get list() {
    return (this.compact(), this._entries.map((e) => e.label));
  }
  dispose() {
    this._disposed || ((this._entries = []), (this._disposed = !0));
  }
  insert(e, r = null) {
    this._entries.push({ label: r ?? e.toString(), ref: new WeakRef(e) });
  }
  compact() {
    this._entries = this._entries.filter((e) => e.ref.deref() != null);
  }
}
