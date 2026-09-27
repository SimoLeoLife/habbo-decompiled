// Extracted from HabboAirLauncher.deobf.js, line 56128.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/assets/UnknownAsset.as
// Obfuscated name: _if81f8c66b46c46

class {
  constructor(e, r = null) {
    this._r6e6694c0c502d6 = e;
    this._url = r;
  }
  static {
    n(this, "UnknownAsset");
  }
  _disposed = !1;
  _content = null;
  get url() {
    return this._url;
  }
  get content() {
    return this._content;
  }
  get disposed() {
    return this._disposed;
  }
  get declaration() {
    return this._r6e6694c0c502d6;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0), (this._content = null), (this._r6e6694c0c502d6 = null), (this._url = null));
  }
  setUnknownContent(e) {
    this._content = e;
  }
  setFromOtherAsset(e) {
    this._content = e.content;
  }
  setParamsDesc(e) {}
  toString() {
    return `UnknownAsset: ${String(this._content)}`;
  }
}
