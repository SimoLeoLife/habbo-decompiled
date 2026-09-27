// Extracted from HabboAirLauncher.deobf.js, line 56077.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/assets/TextAsset.as
// Obfuscated name: _i6b7266a02f3ed3

class a {
  constructor(e, r = null) {
    this._r6e6694c0c502d6 = e;
    this._url = r;
  }
  static {
    n(this, "TextAsset");
  }
  _disposed = !1;
  _content = "";
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
      ((this._disposed = !0), (this._content = ""), (this._r6e6694c0c502d6 = null), (this._url = null));
  }
  setUnknownContent(e) {
    if (typeof e == "string") {
      this._content = e;
      return;
    }
    if (e instanceof re) {
      this._content = e.readUTFBytes(e.length);
      return;
    }
    if (e instanceof Uint8Array) {
      this._content = re.compress(e).readUTFBytes(e.length);
      return;
    }
    if (e instanceof a) {
      this._content = e._content;
      return;
    }
    this._content = e == null ? "" : String(e);
  }
  setFromOtherAsset(e) {
    if (!(e instanceof a)) throw new Error("Provided asset is not of type TextAsset!");
    this._content = e._content;
  }
  setParamsDesc(e) {}
}
