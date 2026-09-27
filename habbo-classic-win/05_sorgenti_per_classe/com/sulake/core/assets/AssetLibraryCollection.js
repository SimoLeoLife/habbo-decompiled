// Extracted from HabboAirLauncher.deobf.js, line 58080.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/assets/AssetLibraryCollection.as
// Obfuscated name: _i95bb49644c599c

class extends Ft {
  static {
    n(this, "AssetLibraryCollection");
  }
  _assetLibraries = [];
  _r2e6384743a350e = [];
  var_2176;
  var_1573 = null;
  _manifest = null;
  _name;
  _counter = 0;
  constructor(e) {
    (super(), (this._name = e), (this.var_2176 = {}));
  }
  get url() {
    return "";
  }
  get name() {
    return this._name;
  }
  get isReady() {
    return this._r2e6384743a350e.length === 0;
  }
  get numAssets() {
    return this._assetLibraries.reduce((e, r) => e + r.numAssets, 0);
  }
  get nameArray() {
    return this._assetLibraries.flatMap((e) => e.nameArray);
  }
  get manifest() {
    return (this._manifest == null && (this._manifest = rr("")), this._manifest);
  }
  get loaderContext() {
    return this.var_2176;
  }
  set loaderContext(e) {
    this.var_2176 = e;
  }
  get binLibrary() {
    return (
      this.var_1573 == null &&
        ((this.var_1573 = new Na("bin")), this._assetLibraries.unshift(this.var_1573)),
      this.var_1573
    );
  }
  loadFromFile(e, r = !1) {
    this.loaderContext == null && (this.loaderContext = this.var_2176);
    let t = new Na(`lib-${this._counter++}`);
    (this._r2e6384743a350e.push(t),
      t.loadFromFile(e, r),
      e.addEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._ra3451ccd30c630),
      e.addEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._ra3451ccd30c630),
      e.addEventListener(ht.LIBRARY_LOADER_EVENT_PROGRESS, this._ra3451ccd30c630));
  }
  loadFromResource(e, r) {
    return this.binLibrary.loadFromResource(e, r);
  }
  unload() {
    for (; this._r2e6384743a350e.length > 0;) this._r2e6384743a350e.pop()?.dispose();
    for (; this._assetLibraries.length > 0;) this._assetLibraries.pop()?.dispose();
  }
  dispose() {
    if (!this.disposed) {
      for (; this._assetLibraries.length > 0;) this._assetLibraries.pop()?.dispose();
      ((this.var_1573 = null), super.dispose());
    }
  }
  _r96cdb07d81be7c(e) {
    return this._assetLibraries.some((r) => r.name === e);
  }
  _rcf1ad24dba2523(e) {
    return this._assetLibraries.find((r) => r.name === e) ?? null;
  }
  getAssetLibraryByUrl(e) {
    return this._assetLibraries.find((r) => r.url === e) ?? null;
  }
  _r4f68a497a0c5f5(e) {
    return this._assetLibraries.find((r) => r.url?.includes(e) ?? !1) ?? null;
  }
  _rb655cfac05e864(e) {
    this._assetLibraries.includes(e) || this._assetLibraries.push(e);
  }
  removeAssetLibrary(e) {
    let r = this._assetLibraries.indexOf(e);
    r >= 0 && this._assetLibraries.splice(r, 1);
  }
  _r9d9f3d3f33a14a(e) {
    let r = this._assetLibraries.findIndex((t) => t.name === e.name);
    if (r >= 0) {
      this._assetLibraries[r] = e;
      return;
    }
    this._assetLibraries.push(e);
  }
  loadAssetFromFile(e, r, t = null, i = -1) {
    return this.binLibrary.loadAssetFromFile(e, r, t, i);
  }
  getAssetByName(e) {
    for (let r of this._assetLibraries) {
      let t = r.getAssetByName(e);
      if (t != null) return t;
    }
    return null;
  }
  _ra55dcbc5ae86e0(e) {
    let r = [];
    for (let t of this._assetLibraries) {
      let i = t.getAssetByName(e);
      i != null && r.push(i);
    }
    return r;
  }
  getAssetByContent(e) {
    for (let r of this._assetLibraries) {
      let t = r.getAssetByContent(e);
      if (t != null) return t;
    }
    return null;
  }
  getAssetByIndex(e) {
    let r = 0;
    for (let t of this._assetLibraries) {
      let i = r + t.numAssets;
      if (e < i) return t.getAssetByIndex(e - r);
      r = i;
    }
    return null;
  }
  getAssetIndex(e) {
    let r = 0;
    for (let t of this._assetLibraries) {
      let i = t.getAssetIndex(e);
      if (i >= 0) return r + i;
      r += t.numAssets;
    }
    return -1;
  }
  hasAsset(e) {
    return this._assetLibraries.some((r) => r.hasAsset(e));
  }
  setAsset(e, r, t = !0) {
    return this.binLibrary.setAsset(e, r, t);
  }
  createAsset(e, r) {
    return this.binLibrary.createAsset(e, r);
  }
  removeAsset(e) {
    for (let r of this._assetLibraries) if (r.removeAsset(e) === e) return e;
    return null;
  }
  registerAssetTypeDeclaration(e, r = !0) {
    return this.binLibrary.registerAssetTypeDeclaration(e, r);
  }
  getAssetTypeDeclarationByMimeType(e, r = !0) {
    if (r) return this.binLibrary.getAssetTypeDeclarationByMimeType(e, !0);
    for (let t of this._assetLibraries) {
      let i = t.getAssetTypeDeclarationByMimeType(e, !1);
      if (i != null) return i;
    }
    return null;
  }
  getAssetTypeDeclarationByClass(e, r = !0) {
    if (r) return this.binLibrary.getAssetTypeDeclarationByClass(e, !0);
    for (let t of this._assetLibraries) {
      let i = t.getAssetTypeDeclarationByClass(e, !1);
      if (i != null) return i;
    }
    return null;
  }
  getAssetTypeDeclarationByFileName(e, r = !0) {
    if (r) return this.binLibrary.getAssetTypeDeclarationByFileName(e, !0);
    for (let t of this._assetLibraries) {
      let i = t.getAssetTypeDeclarationByFileName(e, !1);
      if (i != null) return i;
    }
    return null;
  }
  _r911afadeb8d036() {
    return this._assetLibraries.map((e) => e.manifest);
  }
  _ra3451ccd30c630 = n((e) => {
    let r = e,
      t = r.target;
    if (t != null && r.type === ht.LIBRARY_LOADER_EVENT_COMPLETE) {
      let i = null;
      for (let s = 0; s < this._r2e6384743a350e.length; s++)
        if (((i = this._r2e6384743a350e[s] ?? null), i?.url === t.url)) {
          this._r2e6384743a350e.splice(s, 1);
          break;
        }
      (i != null && !this._assetLibraries.includes(i) && this._assetLibraries.push(i),
        t.removeEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._ra3451ccd30c630),
        t.removeEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._ra3451ccd30c630),
        t.removeEventListener(ht.LIBRARY_LOADER_EVENT_PROGRESS, this._ra3451ccd30c630),
        this._r2e6384743a350e.length === 0 && this.dispatchEvent(new M(Na.ASSET_LIBRARY_LOADED)));
    }
  }, "_ra3451ccd30c630");
}
