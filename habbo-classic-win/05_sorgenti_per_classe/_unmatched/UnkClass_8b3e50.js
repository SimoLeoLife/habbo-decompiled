// Extracted from HabboAirLauncher.deobf.js, line 55910.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8b3e506a711509

class extends aie {
  static {
    n(this, "UnkClass_8b3e50");
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
      (this._loader = new UnkEventDispatcherWrapperSubclass_b182ac()),
      (this._loader._rb1fac8ba8605e0 = "binary"),
      this._loader.addEventListener(M.ComponentDependency, this._ra3451ccd30c630),
      this._loader.addEventListener(UnkClass_e40b94.PROGRESS, this._ra3451ccd30c630),
      this._loader.addEventListener(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, this._ra3451ccd30c630),
      this._loader.addEventListener(UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, this._r7225a2d9cbe1a1),
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
    let r = UnkClass_971ea2.get(e.url);
    if (typeof r == "string") {
      this._data = r;
      let t = new UnkEventDispatcherWrapperSubclass_05394e(10, 1);
      (t.addEventListener(DeBouncer.addEventListener, this._r8ad147824bd684), t.start());
      return;
    }
    this._loader.load(e);
  }
  retry() {
    return this.disposed || this._loader == null || ++this._rd0e6994ba0ea9f > this._rd397bb5e68b240
      ? !1
      : (this._loader.load(
          new UnkClass_636490(`${this._url}${this._url.includes("?") ? "&" : "?"}retry=${this._rd0e6994ba0ea9f}`),
        ),
        !0);
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._loader?.removeEventListener(M.ComponentDependency, this._ra3451ccd30c630),
      this._loader?.removeEventListener(UnkClass_e40b94.PROGRESS, this._ra3451ccd30c630),
      this._loader?.removeEventListener(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, this._ra3451ccd30c630),
      this._loader?.removeEventListener(UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, this._r7225a2d9cbe1a1),
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
