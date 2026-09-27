// Estratto da HabboAirLauncher.deobf.js, riga 168696.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/AvatarAssetDownloadManager.as
// Nome offuscato: _iee6f7ccba77688

class a extends Ft {
  static {
    n(this, "AvatarAssetDownloadManager");
  }
  static LIBRARY_LOADED = "LIBRARY_LOADED";
  static LIB_BODY = "hh_human_body";
  static LIB_ITEMS = "hh_human_item";
  static LIB_AVATAR_EDITOR = "hh_avatar_editor";
  static DOWNLOAD_TIMEOUT = 100;
  var_41;
  _libraries = new Map();
  _r279a0d0d14c27e = new Map();
  _assets;
  _rbd97bbb2a754b6 = new Map();
  _listeners = new Map();
  var_71;
  _r53b60ca050aed0;
  _r2750dc1950553f;
  var_4020 = !1;
  var_2504 = 3;
  getAssetByName = null;
  _rd952d4671036f6;
  _rfe400ac25af72d = [];
  _r87685462f89e17 = [];
  _rb520fb44401706 = [];
  _raeb8256c532c88;
  _rf379e965f7b148 = [a.LIB_BODY, a.LIB_ITEMS];
  purgeInitDownloadBuffer = null;
  var_5392 = 6;
  constructor(e, r, t, i, s, o) {
    (super(),
      (this.var_41 = e),
      (this._assets = r),
      (this.var_71 = s),
      (this._r53b60ca050aed0 = i),
      (this._r2750dc1950553f = t),
      (this._raeb8256c532c88 = o),
      i.includes("//rumba.sulake.com") && (this.var_5392 = 16));
    let d = _i95c9afafe85a6a(this.var_71._r298e6c07107d27);
    d != null &&
      ((this.purgeInitDownloadBuffer = this.events),
      d.addEventListener?.("AVATAR_RENDER_READY", this.purgeInitDownloadBuffer));
    let c = new _i636490202c0f9a(t),
      f = this._assets.getAssetByName("figuremap");
    if (f == null)
      ((this.getAssetByName = this._assets.loadAssetFromFile("figuremap", c, "text/xml")),
        this._rb7b5799dd17338());
    else {
      let b = _i2de4077bf0631e(f.content);
      this._r48e037026243f6(b);
    }
    ((this._rd952d4671036f6 = new _i05394ecc0c0c4d(a.DOWNLOAD_TIMEOUT, 1)),
      this._rd952d4671036f6.addEventListener(DeBouncer._rf33144eac61595, this._r8e407fc9562407));
  }
  dispose() {
    super.dispose();
    let e = _i95c9afafe85a6a(this.var_71._r298e6c07107d27);
    (e != null &&
      this.purgeInitDownloadBuffer != null &&
      e.removeEventListener?.("AVATAR_RENDER_READY", this.purgeInitDownloadBuffer),
      this._libraries.clear(),
      this._r279a0d0d14c27e.clear(),
      this._rbd97bbb2a754b6.clear(),
      this._listeners.clear(),
      (this._r87685462f89e17 = []),
      (this._rb520fb44401706 = []),
      (this._rfe400ac25af72d = []),
      this._rd952d4671036f6.stop(),
      (this.getAssetByName = null));
  }
  _rb7b5799dd17338() {
    this.getAssetByName != null &&
      (this.getAssetByName.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this.IIDHabboConfigurationManager),
      this.getAssetByName.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, this.onConfigurationError));
  }
  _r9eec9c715ab41c() {
    this.getAssetByName != null &&
      (this.getAssetByName.removeEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this.IIDHabboConfigurationManager),
      this.getAssetByName.removeEventListener(Le.ASSET_LOADER_EVENT_ERROR, this.onConfigurationError));
  }
  onConfigurationError = n((e) => {
    if (this.disposed) return;
    if ((this.var_2504--, this.var_2504 <= 0)) {
      Ae.logEventLog(`Figuremap download error ${this._r2750dc1950553f}`);
      return;
    }
    let r = this._r2750dc1950553f.includes("?")
      ? `${this._r2750dc1950553f}&retry=${this.var_2504}`
      : `${this._r2750dc1950553f}?retry=${this.var_2504}`;
    (this._r9eec9c715ab41c(),
      (this.getAssetByName = this._assets.loadAssetFromFile("figuremap", new _i636490202c0f9a(r), "text/xml")),
      this._rb7b5799dd17338());
  }, "onConfigurationError");
  IIDHabboConfigurationManager = n((e) => {
    if (this.disposed) return;
    let r = e.target,
      t = _i2de4077bf0631e(r?._r7ea1029131e026?.content);
    this._r48e037026243f6(t);
  }, "IIDHabboConfigurationManager");
  _r48e037026243f6(e) {
    e != null &&
      (this._rb98e0d9d7b4163(e),
      this._r5140c6554a9c31(),
      (this.var_4020 = !0),
      this.dispatchEvent(new M(M.ComponentDependency)));
  }
  _r5140c6554a9c31() {
    let e = this._rf379e965f7b148.slice();
    for (let r of e) {
      let t = this._libraries.get(r);
      t != null && ((t.isMandatory = !0), this.addToQueue(t));
    }
    this._rd952d4671036f6.start();
  }
  events = n((e) => {
    for (let [r, t] of this._rfe400ac25af72d) this.loadFigureSetData(r, t);
    this._rfe400ac25af72d = [];
  }, "events");
  _rb98e0d9d7b4163(e) {
    for (let r of Array.from(e.getElementsByTagName("lib"))) {
      let t = new m6e(
        r.getAttribute("id") ?? "",
        r.getAttribute("revision") ?? "",
        this._r53b60ca050aed0,
        this._assets,
        this._raeb8256c532c88,
      );
      (t.addEventListener(M.ComponentDependency, this._r311242dd72a3c4),
        this._libraries.set(t.libraryName, t));
      for (let i of Array.from(r.getElementsByTagName("part"))) {
        let s = `${i.getAttribute("type") ?? ""}:${i.getAttribute("id") ?? ""}`,
          o = this._r279a0d0d14c27e.get(s) ?? [];
        (o.push(t), this._r279a0d0d14c27e.set(s, o));
      }
    }
  }
  isReady(e) {
    return !this.var_4020 || !_i345dcbd316ba2c(this.var_71._r298e6c07107d27)
      ? !1
      : this.getLibsToDownload(e).length === 0;
  }
  loadFigureSetData(e, r) {
    if (!this.var_4020 || !_i345dcbd316ba2c(this.var_71._r298e6c07107d27)) {
      this._rfe400ac25af72d.push([e, r]);
      return;
    }
    let t = e.parseFigureString(),
      i = this.getLibsToDownload(e);
    if (i.length > 0) {
      if (r != null && !r.disposed) {
        let s = this._listeners.get(t) ?? [];
        (s.push(r), this._listeners.set(t, s));
      }
      this._rbd97bbb2a754b6.set(t, i);
      for (let s of i) this.addToQueue(s);
      this._rd952d4671036f6.start();
    } else r != null && !r.disposed && r.avatarImageReady(t);
  }
  _r311242dd72a3c4 = n((e) => {
    if (this.disposed) return;
    let r = e.target;
    if (r == null) return;
    let t = [];
    for (let [s, o] of this._rbd97bbb2a754b6.entries())
      if (o.every((c) => c.isReady)) {
        t.push(s);
        for (let c of this._listeners.get(s) ?? []) c != null && !c.disposed && c.avatarImageReady(s);
        this._listeners.delete(s);
      }
    for (let s of t) this._rbd97bbb2a754b6.delete(s);
    let i = this._rf379e965f7b148.indexOf(r.libraryName);
    (i !== -1 &&
      (this._rf379e965f7b148.splice(i, 1),
      this._rf379e965f7b148.length === 0 &&
        this.var_41 != null &&
        typeof this.var_41 == "object" &&
        this.var_41.onMandatoryLibrariesReady?.call(this.var_41)),
      (this._rb520fb44401706 = this._rb520fb44401706.filter((s) => s.libraryName !== r.libraryName)),
      t.length > 0 && this.dispatchEvent(new _i370608800c92e4(a.LIBRARY_LOADED, r.libraryName)),
      this._rd952d4671036f6.start());
  }, "_r311242dd72a3c4");
  _r61a23987e8c6fb() {
    return this._rf379e965f7b148.length > 0;
  }
  getLibsToDownload(e) {
    let r = [],
      t = this.var_71.figureData;
    if (t == null) return r;
    for (let i of e.getPartTypeIds()) {
      let s = t.getSetType(i);
      if (s == null) continue;
      let o = e.getPartSetId(i),
        d = s.getPartSet(o);
      if (d != null)
        for (let c of d.parts) {
          let f = `${c.type}:${c.id}`;
          for (let l of this._r279a0d0d14c27e.get(f) ?? []) !l.isReady && !r.includes(l) && r.push(l);
        }
    }
    return r;
  }
  _r97d8bfbac73043() {
    for (; this._r87685462f89e17.length > 0 && this._rb520fb44401706.length < this.var_5392;) {
      let e = this._r87685462f89e17.shift();
      e != null && (this._rb520fb44401706.push(e), e.startDownloading());
    }
  }
  addToQueue(e) {
    !e.isReady &&
      !this._r87685462f89e17.includes(e) &&
      !this._rb520fb44401706.includes(e) &&
      this._r87685462f89e17.push(e);
  }
  _r8e407fc9562407 = n((e = null) => {
    this._r97d8bfbac73043();
  }, "_r8e407fc9562407");
  purge() {
    for (let e of this._libraries.values()) e.isReady && !e.isMandatory && e.purge();
  }
}
