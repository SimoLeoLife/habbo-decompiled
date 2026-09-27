// Estratto da HabboAirLauncher.deobf.js, riga 59100.

class {
  constructor(e) {
    this.var_3234 = e;
  }
  static {
    n(this, "_ibe1a06f8d5008c");
  }
  _disposed = !1;
  _r15fb3af01e0a54 = [];
  get identifier() {
    return this.var_3234;
  }
  get disposed() {
    return this._disposed;
  }
  get _rdf05bff2ee8312() {
    return this._r15fb3af01e0a54;
  }
  dispose() {
    this._disposed || ((this._disposed = !0), (this.var_3234 = null), (this._r15fb3af01e0a54 = []));
  }
}
