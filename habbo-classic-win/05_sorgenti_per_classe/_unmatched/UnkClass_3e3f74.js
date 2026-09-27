// Extracted from HabboAirLauncher.deobf.js, line 55689.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3e3f74903041d4

class extends Ft {
  static {
    n(this, "UnkClass_3e3f74");
  }
  _url;
  _content;
  _r7f9d66e2ba413d;
  _bytes;
  _id;
  constructor(e, r, t, i = null, s = -1) {
    (super(),
      (this._url = e),
      (this._r7f9d66e2ba413d = r),
      (this._content = t),
      (this._id = s),
      (this._bytes = i ?? this._re510c2c0b42708(t)),
      this._bytes != null && (this._bytes.position = 0));
  }
  get url() {
    return this._url;
  }
  get content() {
    return this._content;
  }
  get bytes() {
    return this._bytes ?? new re();
  }
  get mimeType() {
    return this._r7f9d66e2ba413d;
  }
  get bytesLoaded() {
    return this._bytes?.length ?? 0;
  }
  get bytesTotal() {
    return this._bytes?.length ?? 0;
  }
  get errorCode() {
    return 0;
  }
  get id() {
    return this._id;
  }
  load(e) {
    (e != null && (this._url = e.url),
      queueMicrotask(() => {
        this.disposed || this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_COMPLETE, 0));
      }));
  }
  dispose() {
    this.disposed || ((this._content = null), (this._bytes = null), super.dispose());
  }
  _re510c2c0b42708(e) {
    return e instanceof re
      ? e
      : typeof e == "string"
        ? re._r2e42fd51a500c0(e)
        : e instanceof rr
          ? re._r2e42fd51a500c0(e.toXMLString())
          : re._r2e42fd51a500c0(String(e ?? ""));
  }
}
