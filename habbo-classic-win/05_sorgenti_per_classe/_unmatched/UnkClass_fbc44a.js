// Extracted from HabboAirLauncher.deobf.js, line 284280.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ifbc44a0f22a526

class {
  static {
    n(this, "UnkClass_fbc44a");
  }
  var_692 = new B();
  _r473c39fc86bc80 = new B();
  var_167 = 0;
  _disposed = !1;
  _rfdb8aa7da48b3e(e, r) {
    let t = this._r2324173970b390(e),
      i = ++this.var_167;
    (t != null && t !== r && this._r83c790ddcf77ad(t),
      this.var_692.hasKey(e) ? this.var_692.replace(e, r) : this.var_692.add(e, r),
      this._r473c39fc86bc80.hasKey(e)
        ? this._r473c39fc86bc80.replace(e, i)
        : this._r473c39fc86bc80.add(e, i));
  }
  _ra9819472296578(e) {
    let r = this.var_692.remove(e);
    r != null && (this._r83c790ddcf77ad(r), this._r473c39fc86bc80.remove(e), this.var_167++);
  }
  _r2324173970b390(e) {
    return this.var_692.getValue(e) ?? null;
  }
  _rb2e80a645435a5(e) {
    return Number(this._r473c39fc86bc80.getValue(e)) | 0;
  }
  clear() {
    this.var_692.length > 0 && this.var_167++;
    for (let e of this.var_692.getValues()) this._r83c790ddcf77ad(e);
    (this.var_692.reset(), this._r473c39fc86bc80.reset());
  }
  dispose() {
    this._disposed ||
      (this.clear(),
      this.var_692.dispose(),
      (this.var_692 = null),
      this._r473c39fc86bc80.dispose(),
      (this._r473c39fc86bc80 = null),
      (this._disposed = !0));
  }
  get updateId() {
    return this.var_167;
  }
  get disposed() {
    return this._disposed;
  }
  _r83c790ddcf77ad(e) {
    class_3376.disposeConfigPrebake(e);
  }
}
