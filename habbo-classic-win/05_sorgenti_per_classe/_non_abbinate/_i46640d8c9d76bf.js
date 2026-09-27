// Estratto da HabboAirLauncher.deobf.js, riga 55751.

class extends Ft {
    constructor(r, t = -1) {
      super();
      this._r7f9d66e2ba413d = r;
      this._id = t;
    }
    static {
      n(this, "_i46640d8c9d76bf");
    }
    _r33ac9e2c431a77 = null;
    _content = null;
    _bytes = new re();
    _r20839cd613f850 = 0;
    _ref1be84f630642 = 0;
    _errorCode = 0;
    _r01697471fb99bd = null;
    get url() {
      return this._r33ac9e2c431a77?.url ?? null;
    }
    get content() {
      return this._content;
    }
    get bytes() {
      return this._bytes;
    }
    get mimeType() {
      return this._r7f9d66e2ba413d;
    }
    get bytesLoaded() {
      return this._r20839cd613f850;
    }
    get bytesTotal() {
      return this._ref1be84f630642;
    }
    get errorCode() {
      return this._errorCode;
    }
    get id() {
      return this._id;
    }
    load(r) {
      ((this._r33ac9e2c431a77 = r),
        (this._r01697471fb99bd = new AbortController()),
        this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_OPEN, this._errorCode)),
        this._ra7880c3a762f4c(this._r01697471fb99bd.signal));
    }
    dispose() {
      this.disposed ||
        (this._r01697471fb99bd?.abort(),
        (this._r01697471fb99bd = null),
        (this._r33ac9e2c431a77 = null),
        (this._content = null),
        this._bytes.clear(),
        super.dispose());
    }
    async _ra7880c3a762f4c(r) {
      if (this._r33ac9e2c431a77?.url == null) {
        ((this._errorCode = 400),
          this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_ERROR, this._errorCode)));
        return;
      }
      try {
        let t = await fetch(_icf1a3ef18fd9e0(this._r33ac9e2c431a77.url), { signal: r }),
          i = new Uint8Array(await t.arrayBuffer());
        if (
          ((this._errorCode = t.ok ? 0 : t.status),
          (this._r7f9d66e2ba413d = _i9311dde41c8c32(
            this._r7f9d66e2ba413d || t.headers.get("content-type") || "application/octet-stream",
          )),
          (this._bytes = re._rd6d760d92a9f3f(i)),
          (this._r20839cd613f850 = i.length),
          (this._ref1be84f630642 = i.length),
          (this._content = _id35d818dffd0aa(this._r7f9d66e2ba413d, i, this._bytes)),
          this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_STATUS, t.status)),
          this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_PROGRESS, t.status)),
          !t.ok)
        ) {
          this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_ERROR, t.status));
          return;
        }
        this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_COMPLETE, t.status));
      } catch (t) {
        ((this._errorCode = t instanceof DOMException && t.name === "AbortError" ? 499 : 500),
          this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_ERROR, this._errorCode)));
      }
    }
  }
