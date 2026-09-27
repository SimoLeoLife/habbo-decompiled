// Estratto da HabboAirLauncher.deobf.js, riga 223608.

class {
  static {
    n(this, "_i4d368dfb05f536");
  }
  _r5d7d673467ca15 = null;
  _disposed = !1;
  dispose() {
    ((this._disposed = !0), (this._r5d7d673467ca15 = null));
  }
  get disposed() {
    return this._disposed;
  }
  set _r0c148637e03364(e) {
    this._r5d7d673467ca15 = e;
  }
  get _r0c148637e03364() {
    return this._r5d7d673467ca15;
  }
  _r6e2d6215ef377b() {
    return 50;
  }
  _r1611ac70458d9b() {
    return 3;
  }
  _rac8495e43079f0() {
    return new eQ();
  }
  _re74de903a3a527() {}
  isDeathMatch() {
    return this._r5d7d673467ca15?.levelName === 1;
  }
}
