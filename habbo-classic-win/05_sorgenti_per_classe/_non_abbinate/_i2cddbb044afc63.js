// Estratto da HabboAirLauncher.deobf.js, riga 180587.

class {
  constructor(e) {
    this._catalog = e;
  }
  static {
    n(this, "_i2cddbb044afc63");
  }
  _r7fa87f7262cf26 = null;
  dispose() {
    ((this._catalog = null), (this._r7fa87f7262cf26 = null));
  }
  get catalog() {
    return this._catalog;
  }
  _r496e7e01380f03(e) {
    ((this._r7fa87f7262cf26 = e), this._catalog?.connection?.send(new _i7e48847e87b1ec()));
  }
  _rb347c61da64e8d(e) {
    this._r7fa87f7262cf26 === e && (this._r7fa87f7262cf26 = null);
  }
  _r1707616b3646ca(e) {
    let r = e.guilds.slice(0, e.guilds.length);
    this._r7fa87f7262cf26 != null &&
      !this._r7fa87f7262cf26.disposed &&
      (this._r7fa87f7262cf26._rf81e2a52909f74(r), this._r7fa87f7262cf26.selectFirstOffer());
  }
  _r18912a60785da3(e) {
    this._r7fa87f7262cf26 != null && this._catalog?.connection?.send(new _i7e48847e87b1ec());
  }
}
