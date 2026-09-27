// Extracted from HabboAirLauncher.deobf.js, line 61005.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iacae14d312ed5c

class {
  static {
    n(this, "UnkClass_acae14");
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
