// Estratto da HabboAirLauncher.deobf.js, riga 171090.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/EffectAssetDownloadManager.as
// Nome offuscato: _i423e47e91528fd

class a extends Ft {
  static {
    n(this, "EffectAssetDownloadManager");
  }
  static LIBRARY_LOADED = "LIBRARY_LOADED";
  static DOWNLOAD_TIMEOUT = 100;
  static MAX_SIMULTANEOUS_DOWNLOADS = 2;
  _rf379e965f7b148 = ["dance.1", "dance.2", "dance.3", "dance.4"];
  var_2415 = new Map();
  var_2504 = 3;
  getAssetByName = null;
  _assets;
  var_4020 = !1;
  _r2750dc1950553f;
  _r53b60ca050aed0;
  _raeb8256c532c88;
  var_71;
  _listeners = new Map();
  _rd27a2c0426c752 = new Map();
  _rd952d4671036f6;
  _rfe400ac25af72d = [];
  _r87685462f89e17 = [];
  _rb520fb44401706 = [];
  purgeInitDownloadBuffer = null;
  constructor(e, r, t, i, s) {
    (super(),
      (this._assets = e),
      (this.var_71 = i),
      (this._r2750dc1950553f = r),
      (this._r53b60ca050aed0 = t),
      (this._raeb8256c532c88 = s));
    let o = new _i636490202c0f9a(this._r2750dc1950553f),
      d = this._assets.getAssetByName("effectmap");
    if (d == null)
      ((this.getAssetByName = this._assets.loadAssetFromFile("effectmap", o, "text/xml")),
        this._rb7b5799dd17338());
    else {
      let f = d;
      this._r944ae0381929d5(_i2de4077bf0631e_(f.content));
    }
    ((this._rd952d4671036f6 = new _i05394ecc0c0c4d(a.DOWNLOAD_TIMEOUT, 1)),
      this._rd952d4671036f6.addEventListener(DeBouncer._rf33144eac61595, this._r8e407fc9562407));
    let c = _i95c9afafe85a6a_(this.var_71._r298e6c07107d27);
    c != null &&
      ((this.purgeInitDownloadBuffer = this.events),
      c.addEventListener?.("AVATAR_RENDER_READY", this.purgeInitDownloadBuffer));
  }
  _r5140c6554a9c31() {
    for (let e of this._rf379e965f7b148.slice())
      for (let r of this.var_2415.get(e) ?? []) this.addToQueue(r);
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
  IIDHabboConfigurationManager = n((e) => {
    if (this.disposed) return;
    let r = e.target;
    this._r944ae0381929d5(_i2de4077bf0631e_(r?._r7ea1029131e026?.content));
  }, "IIDHabboConfigurationManager");
  onConfigurationError = n((e) => {
    if (this.disposed) return;
    if ((this.var_2504--, this.var_2504 <= 0)) {
      Ae.logEventLog(`Effect download error ${this._r2750dc1950553f}`);
      return;
    }
    let r = this._r2750dc1950553f.includes("?")
      ? `${this._r2750dc1950553f}&retry=${this.var_2504}`
      : `${this._r2750dc1950553f}?retry=${this.var_2504}`;
    (this._r9eec9c715ab41c(),
      (this.getAssetByName = this._assets.loadAssetFromFile("effectmap", new _i636490202c0f9a(r), "text/xml")),
      this._rb7b5799dd17338());
  }, "onConfigurationError");
  _r944ae0381929d5(e) {
    e != null &&
      (this._rb98e0d9d7b4163(e),
      this._r5140c6554a9c31(),
      (this.var_4020 = !0),
      this.dispatchEvent(new M(M.ComponentDependency)));
  }
  _rb98e0d9d7b4163(e) {
    for (let r of Array.from(e.getElementsByTagName("effect"))) {
      let t = new F6e(
        r.getAttribute("lib") ?? "",
        "0",
        this._r53b60ca050aed0,
        this._assets,
        this._raeb8256c532c88,
      );
      t.addEventListener(M.ComponentDependency, this._r311242dd72a3c4);
      let i = r.getAttribute("id") ?? "",
        s = this.var_2415.get(i) ?? [];
      (s.push(t), this.var_2415.set(i, s));
    }
  }
  _r311242dd72a3c4 = n((e) => {
    if (this.disposed) return;
    let r = e.target;
    if (r == null) return;
    let t = r.animation?.toDomElement();
    t != null && this.var_71._re86089c94947df(t);
    let i = [];
    for (let [s, o] of this._rd27a2c0426c752.entries())
      if (o.every((c) => c.isReady)) {
        i.push(s);
        for (let c of this._listeners.get(s) ?? [])
          c != null && !c.disposed && c._r0e8cddaada61e0(Number.parseInt(s, 10));
        this._listeners.delete(s);
      }
    for (let s of i) this._rd27a2c0426c752.delete(s);
    ((this._rb520fb44401706 = this._rb520fb44401706.filter((s) => s.name !== r.name)),
      i.length > 0 && this.dispatchEvent(new _i370608800c92e4(a.LIBRARY_LOADED, r.name)),
      this._rd952d4671036f6.start());
  }, "_r311242dd72a3c4");
  isReady(e) {
    return !this.var_4020 || !_i345dcbd316ba2c_(this.var_71._r298e6c07107d27)
      ? !1
      : this.getLibsToDownload(e).length === 0;
  }
  loadEffectData(e, r) {
    if (!this.var_4020 || !_i345dcbd316ba2c_(this.var_71._r298e6c07107d27)) {
      this._rfe400ac25af72d.push([e, r]);
      return;
    }
    let t = this.getLibsToDownload(e);
    if (t.length > 0) {
      if (r != null && !r.disposed) {
        let i = this._listeners.get(String(e)) ?? [];
        (i.push(r), this._listeners.set(String(e), i));
      }
      this._rd27a2c0426c752.set(String(e), t);
      for (let i of t) this.addToQueue(i);
    } else r != null && !r.disposed && r._r0e8cddaada61e0(e);
  }
  getLibsToDownload(e) {
    let r = [];
    for (let t of this.var_2415.get(String(e)) ?? []) !t.isReady && !r.includes(t) && r.push(t);
    return r;
  }
  _r97d8bfbac73043() {
    for (; this._r87685462f89e17.length > 0 && this._rb520fb44401706.length < a.MAX_SIMULTANEOUS_DOWNLOADS;) {
      let e = this._r87685462f89e17.shift();
      e != null && (e.startDownloading(), this._rb520fb44401706.push(e));
    }
  }
  addToQueue(e) {
    !e.isReady &&
      !this._r87685462f89e17.includes(e) &&
      !this._rb520fb44401706.includes(e) &&
      (this._r87685462f89e17.push(e), this._r97d8bfbac73043());
  }
  _r8e407fc9562407 = n((e = null) => {
    this._r97d8bfbac73043();
  }, "_r8e407fc9562407");
  events = n((e) => {
    for (let [r, t] of this._rfe400ac25af72d) this.loadEffectData(r, t);
    this._rfe400ac25af72d = [];
  }, "events");
  get map() {
    return this.var_2415;
  }
  dispose() {
    super.dispose();
    let e = _i95c9afafe85a6a_(this.var_71._r298e6c07107d27);
    (e != null &&
      this.purgeInitDownloadBuffer != null &&
      e.removeEventListener?.("AVATAR_RENDER_READY", this.purgeInitDownloadBuffer),
      this.var_2415.clear(),
      this._listeners.clear(),
      this._rd27a2c0426c752.clear(),
      (this._r87685462f89e17 = []),
      (this._rb520fb44401706 = []),
      (this._rfe400ac25af72d = []),
      this._rd952d4671036f6.stop(),
      (this.getAssetByName = null));
  }
}
