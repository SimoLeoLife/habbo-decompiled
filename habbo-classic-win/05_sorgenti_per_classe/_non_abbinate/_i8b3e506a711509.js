// Estratto da HabboAirLauncher.deobf.js, riga 55910.

class extends aie {
  static {
    n(this, "_i8b3e506a711509");
  }
  _url;
  _type;
  _data = null;
  _loader;
  _id;
  constructor(e, r = null, t = -1) {
    (super(),
      (this._url = r?.url ?? ""),
      (this._type = e),
      (this._loader = new _ib182ac399b1881()),
      (this._loader._rb1fac8ba8605e0 = "binary"),
      this._loader.addEventListener(M.ComponentDependency, this._ra3451ccd30c630),
      this._loader.addEventListener(_ie40b9435ae07b7.PROGRESS, this._ra3451ccd30c630),
      this._loader.addEventListener(_i207e0270849f6a._rb9739f8a5177c3, this._ra3451ccd30c630),
      this._loader.addEventListener(_i30cc549f9371ef._r5ff5ea8eb8799e, this._r7225a2d9cbe1a1),
      (this._id = t),
      r != null && this.load(r));
  }
  get url() {
    return this._url;
  }
  get content() {
    return this._data ?? this._loader?.data ?? null;
  }
  get bytes() {
    return this.content instanceof re
      ? this.content
      : typeof this.content == "string"
        ? re._r2e42fd51a500c0(this.content)
        : new re();
  }
  get mimeType() {
    return this._type;
  }
  get bytesLoaded() {
    return this.bytes.length;
  }
  get bytesTotal() {
    return this.bytes.length;
  }
  get id() {
    return this._id;
  }
  load(e) {
    if (this._loader == null) return;
    ((this._url = e.url),
      (this._data = null),
      (this._rd0e6994ba0ea9f = 0),
      (this._loader._rb1fac8ba8605e0 = "binary"));
    let r = _i971ea2645f792f.get(e.url);
    if (typeof r == "string") {
      this._data = r;
      let t = new _i05394ecc0c0c4d(10, 1);
      (t.addEventListener(DeBouncer.addEventListener, this._r8ad147824bd684), t.start());
      return;
    }
    this._loader.load(e);
  }
  retry() {
    return this.disposed || this._loader == null || ++this._rd0e6994ba0ea9f > this._rd397bb5e68b240
      ? !1
      : (this._loader.load(
          new _i636490202c0f9a(`${this._url}${this._url.includes("?") ? "&" : "?"}retry=${this._rd0e6994ba0ea9f}`),
        ),
        !0);
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._loader?.removeEventListener(M.ComponentDependency, this._ra3451ccd30c630),
      this._loader?.removeEventListener(_ie40b9435ae07b7.PROGRESS, this._ra3451ccd30c630),
      this._loader?.removeEventListener(_i207e0270849f6a._rb9739f8a5177c3, this._ra3451ccd30c630),
      this._loader?.removeEventListener(_i30cc549f9371ef._r5ff5ea8eb8799e, this._r7225a2d9cbe1a1),
      (this._loader = null),
      (this._data = null),
      (this._type = ""),
      (this._url = ""));
  }
  _r7e76cc8cddebaf(e) {
    super._r7e76cc8cddebaf(e);
  }
  _r7225a2d9cbe1a1 = n((e) => {
    this._ra3451ccd30c630(e);
  }, "_r7225a2d9cbe1a1");
  _r8ad147824bd684 = n((e) => {
    let r = e.target;
    (r?.stop(),
      r?.removeEventListener(DeBouncer.addEventListener, this._r8ad147824bd684),
      this._ra3451ccd30c630(new M(M.ComponentDependency)));
  }, "_r8ad147824bd684");
  _ra3451ccd30c630 = n((e) => {
    this._r7e76cc8cddebaf(e);
  }, "_ra3451ccd30c630");
}
