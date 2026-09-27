// Extracted from HabboAirLauncher.deobf.js, line 180587.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2cddbb044afc63

class {
  constructor(e) {
    this._catalog = e;
  }
  static {
    n(this, "UnkClass_2cddbb");
  }
  _r7fa87f7262cf26 = null;
  dispose() {
    ((this._catalog = null), (this._r7fa87f7262cf26 = null));
  }
  get catalog() {
    return this._catalog;
  }
  _r496e7e01380f03(e) {
    ((this._r7fa87f7262cf26 = e), this._catalog?.connection?.send(new UnkMessageComposer_0args_7e4884()));
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
    this._r7fa87f7262cf26 != null && this._catalog?.connection?.send(new UnkMessageComposer_0args_7e4884());
  }
}
