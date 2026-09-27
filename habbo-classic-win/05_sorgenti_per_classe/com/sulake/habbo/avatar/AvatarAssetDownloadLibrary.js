// Estratto da HabboAirLauncher.deobf.js, riga 168588.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/AvatarAssetDownloadLibrary.as
// Nome offuscato: _i42af3b35c045a6

class a extends Ft {
  static {
    n(this, "AvatarAssetDownloadLibrary");
  }
  static STATE_IDLE = 0;
  static STATE_DOWNLOADING = 1;
  static STATE_READY = 2;
  _state;
  _libraryName;
  var_4581;
  _downloadUrl;
  _assets;
  var_1331 = !1;
  constructor(e, r, t, i, s) {
    (super(),
      (this._state = a.STATE_IDLE),
      (this._assets = i),
      (this._libraryName = String(e)),
      (this.var_4581 = String(r)),
      (this._downloadUrl = `${t}${s}`
        .replace("%libname%", this._libraryName)
        .replace("%revision%", this.var_4581)),
      this._assets.getAssetLibraryByUrl(`${this._libraryName}.swf`) != null &&
        (this._state = a.STATE_READY));
  }
  dispose() {
    super.dispose();
  }
  startDownloading() {
    this._state = a.STATE_DOWNLOADING;
    let e = new _i636490202c0f9a(this._downloadUrl),
      r = new Bl();
    (this._assets.loadFromFile(r, !0),
      r.addEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._r734a53d9b6eebf),
      r.addEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r442ada649827d1),
      r.load(e));
  }
  _r442ada649827d1 = n((e) => {
    this._state = a.STATE_READY;
    let r = e.target;
    (r?.removeEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._r734a53d9b6eebf),
      r?.removeEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r442ada649827d1));
    let t = e;
    (class_14.error(
      `Could not load avatar asset library ${this._libraryName} from URL ${this._downloadUrl} HTTP status ${t.status} bytes loaded ${t.bytesLoaded}/${t.bytesTotal}`,
      !1,
      class_14._rfcf906423aa8ef,
    ),
      this.dispatchEvent(new M(M.ComponentDependency)));
  }, "_r442ada649827d1");
  _r734a53d9b6eebf = n((e) => {
    let r = e.target;
    (r?.removeEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._r734a53d9b6eebf),
      r?.removeEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r442ada649827d1),
      (this._state = a.STATE_READY),
      this.dispatchEvent(new M(M.ComponentDependency)));
  }, "_r734a53d9b6eebf");
  get libraryName() {
    return this._libraryName;
  }
  get isReady() {
    return this._state === a.STATE_READY;
  }
  purge() {
    let e = this._assets,
      r = e.getAssetLibraryByUrl(this._downloadUrl);
    r != null && (e.removeAssetLibrary(r), r.dispose(), (this._state = a.STATE_IDLE));
  }
  get isMandatory() {
    return this.var_1331;
  }
  set isMandatory(e) {
    this.var_1331 = e;
  }
  toString() {
    return `${this._libraryName}${this.isReady ? "[x]" : "[ ]"}`;
  }
}
