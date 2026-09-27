// Estratto da HabboAirLauncher.deobf.js, riga 56165.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/assets/XmlAsset.as
// Nome offuscato: _i0bf3291838b9a7

class a {
  constructor(e, r = null) {
    this._r6e6694c0c502d6 = e;
    this._url = r;
  }
  static {
    n(this, "XmlAsset");
  }
  _disposed = !1;
  _unknown = null;
  _content = null;
  get url() {
    return this._url;
  }
  get content() {
    return (this._content == null && this.prepareLazyContent(), this._content);
  }
  get disposed() {
    return this._disposed;
  }
  get declaration() {
    return this._r6e6694c0c502d6;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this._unknown = null),
      (this._content = null),
      (this._r6e6694c0c502d6 = null),
      (this._url = null));
  }
  setUnknownContent(e) {
    ((this._content = null), (this._unknown = e));
  }
  prepareLazyContent() {
    if (typeof this._unknown == "string") {
      this._content = rr(this._unknown);
      return;
    }
    if (this._unknown instanceof re) {
      this._content = rr(this._unknown.readUTFBytes(this._unknown.length));
      return;
    }
    if (this._unknown instanceof Uint8Array) {
      let e = re.compress(this._unknown);
      this._content = rr(e.readUTFBytes(e.length));
      return;
    }
    if (this._unknown instanceof rr) {
      this._content = this._unknown;
      return;
    }
    this._unknown instanceof a && (this._content = this._unknown._content);
  }
  setFromOtherAsset(e) {
    if (!(e instanceof a)) throw new Error("Provided asset is not of type XmlAsset!");
    this._content = e._content;
  }
  setParamsDesc(e) {}
  toString() {
    return `XmlAsset _url:${this._url} _content:${this._content} _unknown:${String(this._unknown)}`;
  }
}
