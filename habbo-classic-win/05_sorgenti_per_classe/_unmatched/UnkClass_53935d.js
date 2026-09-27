// Extracted from HabboAirLauncher.deobf.js, line 56022.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i53935d78833c2f

class a {
  static {
    n(this, "UnkClass_53935d");
  }
  _disposed = !1;
  _content = null;
  _r6e6694c0c502d6;
  _url;
  constructor(e, r = null) {
    ((this._r6e6694c0c502d6 = e), (this._url = r));
  }
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
      ((this._content = null), (this._r6e6694c0c502d6 = null), (this._url = null), (this._disposed = !0));
  }
  setUnknownContent(e) {
    if (e instanceof re) {
      this._content = new Mf(e);
      return;
    }
    if (e instanceof ArrayBuffer) {
      this._content = new Mf(e);
      return;
    }
    if (typeof e == "function") {
      this._content = new e();
      return;
    }
    if (e instanceof Mf) {
      this._content = e;
      return;
    }
    if (e instanceof a) {
      this._content = e._content;
      return;
    }
    this._content = e;
  }
  setFromOtherAsset(e) {
    e instanceof a && (this._content = e._content);
  }
  setParamsDesc(e) {}
}
