// Extracted from HabboAirLauncher.deobf.js, line 55850.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i971ea2645f792f

class {
  static {
    n(this, "UnkClass_971ea2");
  }
  static _rb900759e5f479a = new Map();
  static get(e) {
    return this._rb900759e5f479a.get(e) ?? null;
  }
  static assign(e, r) {
    return (this._rb900759e5f479a.set(e, r), r);
  }
  static remove(e) {
    let r = this._rb900759e5f479a.get(e) ?? null;
    return (this._rb900759e5f479a.delete(e), r);
  }
}
