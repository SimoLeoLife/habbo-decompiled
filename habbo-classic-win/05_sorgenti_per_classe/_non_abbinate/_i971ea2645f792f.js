// Estratto da HabboAirLauncher.deobf.js, riga 55850.

class {
  static {
    n(this, "_i971ea2645f792f");
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
