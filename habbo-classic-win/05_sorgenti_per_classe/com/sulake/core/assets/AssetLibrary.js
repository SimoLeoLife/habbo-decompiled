// Estratto da HabboAirLauncher.deobf.js, riga 57495.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/assets/AssetLibrary.as
// Nome offuscato: _i897a65216cbef3

class a extends Ft {
  constructor(r, t = rr("")) {
    super();
    this._name = r;
    this._manifest = t;
    ((a._rc8ae942a564ad2 += 1), a._re2d75a5591163c());
  }
  static {
    n(this, "AssetLibrary");
  }
  static ASSET_LIBRARY_LOAD_ERROR = "AssetLibraryLoadError";
  static ASSET_LIBRARY_LOADED = "AssetLibraryLoaded";
  static ASSET_LIBRARY_READY = "AssetLibraryReady";
  static ASSET_LIBRARY_UNLOADED = "AssetLibraryUnloaded";
  static _rc8ae942a564ad2 = 0;
  static var_3950 = "";
  static _r955368f93a49fc = !1;
  static _rd5d06597a46b0c = null;
  _file = null;
  var_1306 = !1;
  var_494 = 0;
  _loader = null;
  _resource = null;
  _rf74aa0cb5686ce = new Map();
  var_284 = new Map();
  _r3b0ca21e559b04 = new Map();
  _assetNameArray = [];
  _localListOfTypesByMime = new Map();
  var_1857 = !0;
  static get _rc8e0bf285e50ba() {
    return a._rc8ae942a564ad2;
  }
  static setCacheNamespace(r) {
    a.var_3950 = r ?? "";
  }
  static _ra01a542e11efef() {
    a._r955368f93a49fc = !0;
  }
  get url() {
    return this._file;
  }
  get name() {
    return this._name;
  }
  get isReady() {
    return this.var_1306;
  }
  get manifest() {
    return this._manifest;
  }
  get numAssets() {
    return this.var_494;
  }
  get nameArray() {
    return [...this._assetNameArray];
  }
  dispose() {
    this.disposed ||
      (this.unload(),
      this._rf74aa0cb5686ce.clear(),
      this._localListOfTypesByMime.clear(),
      (this._manifest = rr("")),
      (this._name = ""),
      (a._rc8ae942a564ad2 -= 1),
      super.dispose());
  }
  loadFromFile(r, t = !0) {
    if (this._file === r.url && this.var_1306) {
      (!this.var_1857 &&
        t &&
        this._resource != null &&
        this.loadFromResource(this._manifest, this._resource),
        (this.var_1857 = t),
        this.dispatchEvent(new M(a.ASSET_LIBRARY_READY)));
      return;
    }
    (this._loader !== r &&
      (this._redb89ab63bf3da(),
      (this._loader = r),
      this._loader.addEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._rd73af70da925d7),
      this._loader.addEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r47b56cfdf38a36),
      this._loader.addEventListener(ht.LIBRARY_LOADER_EVENT_PROGRESS, this._r3eb0d6ac4236f9)),
      (this.var_1857 = t),
      (this._file = r.url));
  }
  loadFromResource(r, t) {
    ((this._manifest = r ?? ""), (this._resource = t));
    let i = _i228d40a25ae5fc(t);
    return (
      this._r6a095207f2803d(!1),
      i != null
        ? (this._r166c98fd3ca4ae(i), (this.var_1306 = !0), !0)
        : this._r629e44c8cda71b(this._manifest, t)
          ? ((this.var_1306 = !0), !0)
          : !1
    );
  }
  unload() {
    for (let r of this._r3b0ca21e559b04.values()) r.dispose();
    (this._r3b0ca21e559b04.clear(),
      this._r6a095207f2803d(!0),
      this._rf74aa0cb5686ce.clear(),
      this._redb89ab63bf3da(),
      (this.var_494 = 0),
      (this.var_1306 = !1),
      (this._file = null),
      (this._resource = null),
      this.dispatchEvent(new M(a.ASSET_LIBRARY_UNLOADED)));
  }
  _ra24ada6753fa4e(r) {
    let t = this._rf74aa0cb5686ce.get(r);
    if (t != null) return t;
    if (this._loader?._r77b436a38958de(r)) {
      let i = this._loader._r4e63c263d0980d(r);
      if (i != null) return (this._rf74aa0cb5686ce.set(r, i), i);
    }
    return null;
  }
  loadAssetFromFile(r, t, i = null, s = -1) {
    if (this.getAssetByName(r) != null) throw new Error(`Asset with name ${r} already exists!`);
    let o = t.url ?? "",
      d = this._r3b0ca21e559b04.get(o);
    if (d != null && d.assetName === r) return d;
    let c = i != null ? this.getAssetTypeDeclarationByMimeType(i, !0) : this._rd7fa32d4f3b01a(o);
    if (c == null) throw new Error(`Couldn't solve asset type for file ${o}!`);
    let f = this._r3a24ad2d48bfc0(o),
      l =
        f != null
          ? new _i3e3f74903041d4(o, c.mimeType, this.buildCachedContent(c.mimeType, f), f, s)
          : new _i46640d8c9d76bf(c.mimeType, s);
    (l.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._r2336db808bb2e6),
      l.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._r2336db808bb2e6),
      l.addEventListener(Le.ASSET_LOADER_EVENT_UNLOAD, this._r2336db808bb2e6),
      l.addEventListener(Le.ASSET_LOADER_EVENT_PROGRESS, this._r2336db808bb2e6),
      l.addEventListener(Le.ASSET_LOADER_EVENT_STATUS, this._r2336db808bb2e6),
      l.addEventListener(Le.ASSET_LOADER_EVENT_OPEN, this._r2336db808bb2e6));
    let b = new _i747e83453460e9(r, l);
    return (this._r3b0ca21e559b04.set(o, b), l.load(t), b);
  }
  getAssetByName(r) {
    return this.var_284.get(r) ?? null;
  }
  getAssetByContent(r) {
    for (let t of this.var_284.values()) if (t.content === r) return t;
    return null;
  }
  getAssetByIndex(r) {
    let t = this._assetNameArray[r];
    return t != null ? (this.var_284.get(t) ?? null) : null;
  }
  getAssetIndex(r) {
    let t = 0;
    for (let i of this.var_284.values()) {
      if (i === r) return t;
      t++;
    }
    return -1;
  }
  hasAsset(r) {
    return this.var_284.has(r);
  }
  setAsset(r, t, i = !0) {
    let s = !this.var_284.has(r);
    return (!i && !s) || t == null
      ? !1
      : (s && (this.var_494++, this._assetNameArray.push(r)), this.var_284.set(r, t), !0);
  }
  createAsset(r, t) {
    if (this.hasAsset(r) || t == null) return null;
    let i = this.assetClass(t, null);
    return this.setAsset(r, i) ? i : (i.dispose(), null);
  }
  removeAsset(r) {
    for (let [t, i] of this.var_284.entries())
      if (i === r) {
        this.var_284.delete(t);
        let s = this._assetNameArray.indexOf(t);
        return (s >= 0 && this._assetNameArray.splice(s, 1), this.var_494--, r);
      }
    return null;
  }
  registerAssetTypeDeclaration(r, t = !0) {
    let i = t ? a._rd5d06597a46b0c : this._localListOfTypesByMime;
    if (i == null) throw new Error("Asset type registry has not been initialized.");
    if (i.has(r.mimeType)) throw new Error(`Asset type ${r.mimeType} already registered!`);
    return (i.set(r.mimeType, r), !0);
  }
  getAssetTypeDeclarationByMimeType(r, t = !0) {
    if (t) {
      let i = a._rd5d06597a46b0c?.get(r);
      if (i != null) return i;
    }
    return this._localListOfTypesByMime.get(r) ?? null;
  }
  getAssetTypeDeclarationByClass(r, t = !0) {
    if (t) {
      for (let i of a._rd5d06597a46b0c?.values() ?? []) if (i._r9d4d9b917acbe8 === r) return i;
    }
    for (let i of this._localListOfTypesByMime.values()) if (i._r9d4d9b917acbe8 === r) return i;
    return null;
  }
  getAssetTypeDeclarationByFileName(r, t = !0) {
    let i = r.split("?")[0] ?? r,
      s = i.includes(".") ? i.slice(i.lastIndexOf(".") + 1).toLowerCase() : "";
    if (!s) return null;
    if (t) {
      for (let o of a._rd5d06597a46b0c?.values() ?? [])
        if (o._r939a90fce8eba1.some((d) => String(d).toLowerCase() === s)) return o;
    }
    for (let o of this._localListOfTypesByMime.values())
      if (o._r939a90fce8eba1.some((d) => String(d).toLowerCase() === s)) return o;
    return null;
  }
  _rd7fa32d4f3b01a(r) {
    return (
      this.getAssetTypeDeclarationByFileName(r, !0) ??
      this.getAssetTypeDeclarationByMimeType("application/octet-stream", !0)
    );
  }
  _r6a095207f2803d(r) {
    for (let t of this.var_284.values()) t.dispose();
    (this.var_284.clear(),
      (this._assetNameArray.length = 0),
      (this.var_494 = 0),
      r && (this.var_1306 = !1));
  }
  _redb89ab63bf3da() {
    this._loader != null &&
      (this._loader.removeEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._rd73af70da925d7),
      this._loader.removeEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r47b56cfdf38a36),
      this._loader.removeEventListener(ht.LIBRARY_LOADER_EVENT_PROGRESS, this._r3eb0d6ac4236f9),
      (this._loader = null));
  }
  _r166c98fd3ca4ae(r) {
    for (let t of _if24575776ef18d(r)) {
      let i =
        this.getAssetTypeDeclarationByMimeType(t.mimeType, !0) ??
        this.getAssetTypeDeclarationByMimeType("application/octet-stream", !0);
      if (i == null) continue;
      let s = this.assetClass(i, this._file);
      (s.setUnknownContent(_iee22c687c741b7(t.content)),
        t.params != null && Object.keys(t.params).length > 0 && s.setParamsDesc(t.params),
        this.setAsset(t.name, s, !0));
    }
    this._ra49e56a8e29af2(r);
    for (let t of r.aliases) {
      let i = this.getAssetByName(t.ref);
      if (i == null) continue;
      let s = this.getAssetTypeDeclarationByMimeType(t.mimeType ?? _ic9c9c2dddce368(i), !0) ?? i.declaration;
      if (s == null) continue;
      let o = this.assetClass(s, this._file);
      (this._r7b37528c8749e4(o, i),
        t.params != null && Object.keys(t.params).length > 0 && o.setParamsDesc(t.params),
        this.setAsset(t.name, o, !0));
    }
  }
  _ra49e56a8e29af2(r) {
    for (let t of _if24575776ef18d(r)) {
      if (!_if4a1f2c67b3bca(t.content)) continue;
      let i = t.content,
        s = i.spritesheet?.meta?.image ?? "";
      if (s === "") continue;
      let o = this.getAssetByName(s);
      if (!(o instanceof Qt)) continue;
      let d = o.declaration ?? this.getAssetTypeDeclarationByMimeType("image/png", !0);
      if (d == null) continue;
      let c = i.name ?? stripExtension_(s),
        f = i.assets ?? {},
        l = i.spritesheet?.frames ?? {};
      for (let [b, _] of Object.entries(f)) {
        let h = _ic88766c66c7e2e(f, b),
          p = _i0aa04b659b0492(l, c, h, s);
        if (p == null) continue;
        let m = this.assetClass(d, this._file),
          v = Math.trunc(p.sourceSize?.w ?? p.frame.w),
          w = Math.trunc(p.sourceSize?.h ?? p.frame.h),
          I = _id8fc8a60adae8d(Math.trunc(_.x ?? 0), v, _.flipH === !0),
          C = _id8fc8a60adae8d(Math.trunc(_.y ?? 0), w, _.flipV === !0),
          W = {
            offset: `${I},${C}`,
            region: `0,0,${v},${w}`,
            sourceRegion: `${p.frame.x},${p.frame.y},${p.frame.w},${p.frame.h}`,
          };
        (p.spriteSourceSize != null &&
          (W.spriteSourceSize = `${Math.trunc(p.spriteSourceSize.x ?? 0)},${Math.trunc(p.spriteSourceSize.y ?? 0)},${Math.trunc(p.spriteSourceSize.w ?? p.frame.w)},${Math.trunc(p.spriteSourceSize.h ?? p.frame.h)}`),
          p.sourceSize != null &&
            (W.sourceSize = `${Math.trunc(p.sourceSize.w ?? p.frame.w)},${Math.trunc(p.sourceSize.h ?? p.frame.h)}`),
          _.flipH != null && (W.flipH = _.flipH ? "1" : "0"),
          _.flipV != null && (W.flipV = _.flipV ? "1" : "0"),
          m.setUnknownContent(o),
          m.setParamsDesc(W),
          this.setAsset(b, m, !0));
      }
    }
  }
  _r629e44c8cda71b(r, t) {
    if (!r) return !1;
    let { assets: i, aliases: s } = _i508f4c7868f426(r.toXMLString()),
      o = t;
    for (let d of i) {
      let c = this.getAssetTypeDeclarationByMimeType(d.mimeType, !0);
      if (c == null) continue;
      let f = this.assetClass(c, this._file);
      (f.setUnknownContent(_iee22c687c741b7(o[d.name])),
        d.params.length > 0 && f.setParamsDesc(d.params),
        this.setAsset(d.name, f, !0));
    }
    for (let d of s) {
      let c = this.getAssetByName(d.ref);
      if (c == null) continue;
      let f = this.getAssetTypeDeclarationByMimeType(d.mimeType ?? _ic9c9c2dddce368(c), !0) ?? c.declaration;
      if (f == null) continue;
      let l = this.assetClass(f, this._file);
      (this._r7b37528c8749e4(l, c),
        d.params.length > 0 && l.setParamsDesc(d.params),
        this.setAsset(d.name, l, !0));
    }
    return !0;
  }
  assetClass(r, t) {
    let i = r._r9d4d9b917acbe8;
    return new i(r, t);
  }
  _r7b37528c8749e4(r, t) {
    if (r instanceof Qt && t instanceof Qt) {
      r.setFromOtherAsset(t);
      return;
    }
    if (r instanceof Df && t instanceof Df) {
      r.setUnknownContent(t.content);
      return;
    }
    if (r.constructor === t.constructor) {
      r.setFromOtherAsset(t);
      return;
    }
    r.setUnknownContent(t.content);
  }
  _r3a24ad2d48bfc0(r) {
    if (!!0 || !this._ra84d4ab18e04de(r)) return null;
    let t = _i29c45cd093eed6(),
      i = this._rc08fbfb3a01aa0(r);
    if (t == null || !t._rd6ecfad7853045(i)) return null;
    let s = t._r92c02b2515168d(i);
    return ((s.position = 0), s);
  }
  writeCachedAssetData(r, t, i, s) {
    if (!!0 || !this._ra84d4ab18e04de(r)) return;
    let o = _i29c45cd093eed6();
    o?._rb34e5a1902e2c4(this._rc08fbfb3a01aa0(r), this.buildCacheFileBytes(t, i, s));
  }
  buildCachedContent(r, t) {
    let i = re.compress(t.toUint8Array().slice());
    return r.startsWith("text/")
      ? ((i.position = 0), i.readUTFBytes(i.length))
      : r === "image/png"
        ? ((i.position = 0), new _i3a5c6f457acdad(new _ifdd92074c780c7().decode(i)))
        : ((i.position = 0), i);
  }
  buildCacheFileBytes(r, t, i) {
    return i.length > 0
      ? re.compress(i.toUint8Array().slice())
      : t instanceof re
        ? re.compress(t.toUint8Array().slice())
        : typeof t == "string"
          ? re._r2e42fd51a500c0(t)
          : re._r2e42fd51a500c0(String(t ?? ""));
  }
  _ra84d4ab18e04de(r) {
    return a._r955368f93a49fc ? this.hasHashedSuffix(r) : !1;
  }
  hasHashedSuffix(r) {
    let t = r.indexOf("?"),
      i = t >= 0 ? r.substring(0, t) : r,
      s = i.lastIndexOf("/");
    if (s < 0 || s === i.length - 1) return !1;
    let o = i.substring(s + 1);
    return /^[0-9a-f]{32,}$/i.test(o);
  }
  _rc08fbfb3a01aa0(r) {
    let i = (a.var_3950 !== "" ? a.var_3950 : this.extractUrlHost(r)).replace(
        /[^a-zA-Z0-9._-]/g,
        "_",
      ),
      s = this._r8f0a23143631df(r);
    return i !== "" ? `${i}/${s}` : s;
  }
  extractUrlHost(r) {
    let t = r.indexOf("://");
    if (t < 0) return "";
    let i = t + 3,
      s = r.indexOf("/", i);
    return s < 0 ? r.substring(i) : r.substring(i, s);
  }
  _r8f0a23143631df(r) {
    let t = r.split("?")[0] ?? r,
      i = t.lastIndexOf("/"),
      o = (i >= 0 ? t.substring(i + 1) : t).replace(/[^a-zA-Z0-9._-]/g, "_");
    if (o !== "") return o;
    let d = 0;
    for (let c = 0; c < r.length; c++) ((d = (d << 5) - d + r.charCodeAt(c)), (d |= 0));
    return String(Math.abs(d));
  }
  _r2336db808bb2e6 = n((r) => {
    let t = r,
      i = t.target;
    if (i == null || i.url == null) throw new Error("Failed to resolve asset loader from event target.");
    let s = this._r3b0ca21e559b04.get(i.url);
    if (s == null) throw new Error(`Asset loader structure was lost! ${i.url}`);
    let o = !1;
    if (t.type === Le.ASSET_LOADER_EVENT_COMPLETE) {
      let d =
        this.getAssetTypeDeclarationByMimeType(i.mimeType, !0) ??
        this.getAssetTypeDeclarationByMimeType("application/octet-stream", !0);
      if (((o = !0), d != null)) {
        let c = this.assetClass(d, i.url);
        (c.setUnknownContent(i.content),
          this.setAsset(s.assetName, c, !0),
          this.writeCachedAssetData(i.url, d.mimeType, i.content, i.bytes));
      }
    } else t.type === Le.ASSET_LOADER_EVENT_ERROR && (o = !0);
    (s.dispatchEvent(new Le(t.type, i.errorCode)), o && (this._r3b0ca21e559b04.delete(i.url), s.dispose()));
  }, "_r2336db808bb2e6");
  _rd73af70da925d7 = n((r) => {
    let i = r.target;
    if (i == null) throw new Error("Failed to resolve LibraryLoader from event target.");
    ((this._manifest = i.manifest),
      (this._resource = i.resource),
      (this._file = i.url),
      this.var_1857 && this._resource != null
        ? this.loadFromResource(this._manifest, this._resource)
        : (this.var_1306 = !0),
      this.dispatchEvent(new M(a.ASSET_LIBRARY_LOADED)),
      this.dispatchEvent(new M(a.ASSET_LIBRARY_READY)));
  }, "_rd73af70da925d7");
  _r3eb0d6ac4236f9 = n((r) => {
    this.dispatchEvent(r);
  }, "_r3eb0d6ac4236f9");
  _r47b56cfdf38a36 = n((r) => {
    ((this.var_1306 = !1), this.dispatchEvent(new M(a.ASSET_LIBRARY_LOAD_ERROR)));
  }, "_r47b56cfdf38a36");
  static _re2d75a5591163c() {
    a._rd5d06597a46b0c == null &&
      (a._rd5d06597a46b0c = new Map([
        ["application/octet-stream", new _i92fb003cfc8852("application/octet-stream", UnknownAsset, null, "bin")],
        ["application/json", new _i92fb003cfc8852("application/json", UnknownAsset, null, "json")],
        ["text/plain", new _i92fb003cfc8852("text/plain", iie, null, "txt")],
        ["text/xml", new _i92fb003cfc8852("text/xml", Df, null, "xml")],
        ["text/html", new _i92fb003cfc8852("text/html", Df, null, "htm", "html")],
        ["image/png", new _i92fb003cfc8852("image/png", Qt, null, "png")],
        ["image/jpeg", new _i92fb003cfc8852("image/jpeg", UnknownAsset, null, "jpg", "jpeg")],
        ["image/gif", new _i92fb003cfc8852("image/gif", UnknownAsset, null, "gif")],
        ["audio/mpeg", new _i92fb003cfc8852("audio/mpeg", B6, _i22998b55e65c88, "mp3")],
        ["audio/mp3", new _i92fb003cfc8852("audio/mp3", B6, _i22998b55e65c88, "mp3")],
        ["sound/mp3", new _i92fb003cfc8852("sound/mp3", B6, _i22998b55e65c88, "mp3")],
        ["audio/ogg", new _i92fb003cfc8852("audio/ogg", B6, _i22998b55e65c88, "ogg")],
        ["audio/wav", new _i92fb003cfc8852("audio/wav", B6, _i22998b55e65c88, "wav")],
        ["audio/x-wav", new _i92fb003cfc8852("audio/x-wav", B6, _i22998b55e65c88, "wav")],
      ]));
  }
}
