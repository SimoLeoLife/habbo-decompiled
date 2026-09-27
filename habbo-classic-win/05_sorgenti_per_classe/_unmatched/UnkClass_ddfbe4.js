// Extracted from HabboAirLauncher.deobf.js, line 298325.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iddfbe479a2e0a4

class {
  static {
    n(this, "UnkClass_ddfbe4");
  }
  var_692 = new B();
  var_167 = 0;
  _disposed = !1;
  _rfdb8aa7da48b3e(e) {
    ((e.updateId = ++this.var_167),
      this.var_692.hasKey(e.configId)
        ? this.var_692.replace(e.configId, e)
        : this.var_692.add(e.configId, e));
  }
  _r2324173970b390(e) {
    return this.var_692.getValue(e) ?? null;
  }
  _ra9819472296578(e) {
    this.var_692.remove(e) != null && this.var_167++;
  }
  clear() {
    (this.var_692.length > 0 && this.var_167++, this.var_692.reset());
  }
  get updateId() {
    return this.var_167;
  }
  dispose() {
    this._disposed ||
      (this.clear(), this.var_692.dispose(), (this.var_692 = null), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
}
