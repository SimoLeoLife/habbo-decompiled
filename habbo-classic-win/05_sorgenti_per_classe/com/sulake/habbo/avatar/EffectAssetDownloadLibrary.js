// Extracted from HabboAirLauncher.deobf.js, line 171000.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/EffectAssetDownloadLibrary.as
// Obfuscated name: _ie06e68f5bf2551

class a extends Ft {
  static {
    n(this, "EffectAssetDownloadLibrary");
  }
  static STATE_IDLE = 0;
  static STATE_DOWNLOADING = 1;
  static STATE_READY = 2;
  _state;
  _name;
  var_4581;
  _downloadUrl;
  _assets;
  var_2117 = null;
  constructor(e, r, t, i, s) {
    (super(),
      (this._state = a.STATE_IDLE),
      (this._assets = i),
      (this._name = String(e)),
      (this.var_4581 = String(r)));
    let o = `${this._name}.swf`,
      d = _i29c45cd093eed6();
    ((this._downloadUrl = d?._r3bc7bb28ee642c(o)
      ? d._rdbe76e88e1717b(o)
      : `${t}${s}`.replace("%libname%", this._name).replace("%revision%", this.var_4581)),
      this._assets.getAssetLibraryByUrl(`${this._name}.swf`) != null && (this._state = a.STATE_READY));
  }
  dispose() {
    super.dispose();
  }
  startDownloading() {
    this._state = a.STATE_DOWNLOADING;
    let e = new UnkClass_636490(this._downloadUrl),
      r = new Bl();
    (this._assets.loadFromFile(r, !0),
      r.addEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._r734a53d9b6eebf),
      r.addEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r442ada649827d1),
      r.load(e));
  }
  _r442ada649827d1 = n((e) => {
    let r = e;
    class_14.error(
      `Could not load effect asset library ${this._name} from URL ${this._downloadUrl} HTTP status ${r.status} bytes loaded ${r.bytesLoaded}/${r.bytesTotal}`,
      !1,
      class_14._rfcf906423aa8ef,
    );
  }, "_r442ada649827d1");
  _r734a53d9b6eebf = n((e) => {
    let r = e.target;
    (r?.removeEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._r734a53d9b6eebf),
      r?.removeEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r442ada649827d1));
    let t = r?.resource?.animation;
    if (t instanceof Element) this.var_2117 = rr(t);
    else if (typeof t == "string") this.var_2117 = rr(t);
    else if (typeof t == "function") {
      let i = new t();
      this.var_2117 = rr(i.readUTFBytes(i.length));
    } else t instanceof re && (this.var_2117 = rr(t.readUTFBytes(t.length)));
    ((this._state = a.STATE_READY), this.dispatchEvent(new M(M.ComponentDependency)));
  }, "_r734a53d9b6eebf");
  get name() {
    return this._name;
  }
  get isReady() {
    return this._state === a.STATE_READY;
  }
  get animation() {
    return this.var_2117;
  }
  toString() {
    return `${this._name}${this.isReady ? "[x]" : "[ ]"}`;
  }
}
