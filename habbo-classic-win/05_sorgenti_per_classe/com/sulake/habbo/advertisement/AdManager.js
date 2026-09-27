// Estratto da HabboAirLauncher.deobf.js, riga 162587.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/advertisement/AdManager.as
// Nome offuscato: _i4c0eeb7d9fbd02

class a extends ue {
  static {
    n(this, "AdManager");
  }
  static INTERSTITIAL_COMPLETE_CALLBACK = "interstitialCompleted";
  _r3e5e004c8fdafa = null;
  _r50cbaa6f3fb6ad = null;
  _r0eff795665a7f2 = new Map();
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._r6358b2bd53ae19 = e;
      }),
      new ComponentDependency(new IIDHabboConfigurationManager(), null),
      new ComponentDependency(
        new IIDSessionDataManager(),
        (e) => {
          this._sessionDataManager = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboCatalog(),
        (e) => {
          this._catalog = e;
        },
        !1,
      ),
    ]);
  }
  initComponent() {
    if (this._r6358b2bd53ae19 == null) return;
    this._r2a94169e564a18 = this._r6358b2bd53ae19._r2e106e2349a0b6(
      new class_1789((s) => {
        this.onInterstitial(s);
      }),
    );
    let e = this.getProperty("ads.domain");
    e !== "" && _id4273840e749f2.loadPolicyFile(`http://${e}/crossdomain.xml`);
    let r = this.getProperty("billboard.adwarning.left.url"),
      t = this.getProperty("billboard.adwarning.right.url"),
      i = this.getProperty("image.library.url");
    (r !== "" &&
      t !== "" &&
      (this._r79a979aaf6cb29("adWarningL", `${i}${r}`, this._rd0764cc5e7bb08.bind(this)),
      this._r79a979aaf6cb29("adWarningRight", `${i}${t}`, this._rd6ba50c8e8a719.bind(this))),
      ur.available &&
        ur._r77b8521b16f762(a.INTERSTITIAL_COMPLETE_CALLBACK, (...s) => {
          this._r5128cca4518bb3(String(s[0] ?? ""));
        }));
  }
  dispose() {
    this.disposed ||
      (this._r0eff795665a7f2.clear(),
      this._r6358b2bd53ae19 != null &&
        this._r2a94169e564a18 != null &&
        (this._r6358b2bd53ae19._r7668362bf55fdd(this._r2a94169e564a18), (this._r2a94169e564a18 = null)),
      this._r3e5e004c8fdafa != null && (this._r3e5e004c8fdafa.dispose(), (this._r3e5e004c8fdafa = null)),
      this._r50cbaa6f3fb6ad != null && (this._r50cbaa6f3fb6ad.dispose(), (this._r50cbaa6f3fb6ad = null)),
      (this._catalog = null),
      (this._sessionDataManager = null),
      (this._r6358b2bd53ae19 = null),
      super.dispose());
  }
  showInterstitial() {
    if (!this.getBoolean("interstitials.2016.enabled")) {
      this.noInterstitialAvailable();
      return;
    }
    this._r6358b2bd53ae19?.connection?.send(new class_2215());
  }
  _r5128cca4518bb3(e) {
    this.events.dispatchEvent?.(new InterstitialEvent(InterstitialEvent.INTERSTITIAL_COMPLETE, e));
  }
  loadRoomAdImage(e, r, t, i, s) {
    if (i == null || i.length === 0) return;
    if (this.assets.hasAsset(i)) {
      let l = this.assets.getAssetByName(i)?.content;
      l instanceof A && this.dispatchImageAsset(l.clone(), e, r, t, i, s);
      return;
    }
    let o = this._r0eff795665a7f2.get(i);
    if (
      (o == null && ((o = []), this._r0eff795665a7f2.set(i, o)),
      o.some((f) => f.roomId === e && f.objectId === r && f.objectCategory === t))
    )
      return;
    o.push(new AdImageRequest(e, i, s, r, t));
    let d = new _i636490202c0f9a(i),
      c = this.assets.loadAssetFromFile(i, d, "image/png");
    (c.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, (f) => {
      this._r91c7cd3cb51804(f);
    }),
      c.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, (f) => {
        this._rab4ead0ae8e812(f);
      }));
  }
  _r79a979aaf6cb29(e, r, t) {
    let i = new _i636490202c0f9a(r);
    this.assets.loadAssetFromFile(e, i, "image/png").addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, (o) => {
      t(o);
    });
  }
  onInterstitial(e) {
    let r = e.getParser();
    r != null && r.var_3769
      ? ur.available
        ? (ur.call("FlashExternalInterface.showInterstitial"),
          this.events.dispatchEvent?.(new InterstitialEvent(InterstitialEvent.INTERSTITIAL_SHOW)))
        : this.noInterstitialAvailable()
      : this.noInterstitialAvailable();
  }
  noInterstitialAvailable() {
    this.events.dispatchEvent?.(new InterstitialEvent(InterstitialEvent.INTERSTITIAL_NOT_SHOWN));
  }
  _rd0764cc5e7bb08(e) {
    let r = e.target,
      t = this._rade9458ca68b72(r?._r7ea1029131e026.content ?? null);
    t != null && (this._r3e5e004c8fdafa = this._re531321f8dd5d2(t));
  }
  _rd6ba50c8e8a719(e) {
    let r = e.target,
      t = this._rade9458ca68b72(r?._r7ea1029131e026.content ?? null);
    t != null && (this._r50cbaa6f3fb6ad = this._re531321f8dd5d2(t));
  }
  _re531321f8dd5d2(e) {
    if (e == null) return null;
    let r = new A(e.width, e.height, !0, 0);
    for (let t = 0; t < r.height; t++)
      for (let i = 0; i < r.width; i++) {
        let s = e.getPixel32(i, t);
        s !== 4294967295 && r.setPixel32(i, t, s);
      }
    return r;
  }
  _rcc3815571a7fb3(e) {
    return e != null && (e.width > 1 || e.height > 1);
  }
  _r91c7cd3cb51804(e) {
    let r = e.target;
    if (r == null) return;
    let t = this._r0eff795665a7f2.get(r.assetName) ?? [];
    if ((this._r0eff795665a7f2.delete(r.assetName), t.length === 0)) return;
    let i = this._rade9458ca68b72(r._r7ea1029131e026.content);
    if (this._rcc3815571a7fb3(i))
      for (let s of t)
        this.dispatchImageAsset(
          i.clone(),
          s.roomId,
          s.objectId,
          s.objectCategory,
          s._r96e37c569d69cb,
          s._raf59276acdf2ee,
        );
  }
  _rab4ead0ae8e812(e) {
    let r = e.target;
    if (r == null) return;
    let t = this._r0eff795665a7f2.get(r.assetName) ?? [];
    this._r0eff795665a7f2.delete(r.assetName);
    for (let i of t)
      this.dispatchImageAsset(
        null,
        i.roomId,
        i.objectId,
        i.objectCategory,
        i._r96e37c569d69cb,
        i._raf59276acdf2ee,
      );
  }
  dispatchImageAsset(e, r, t, i, s, o) {
    this.events.dispatchEvent?.(
      new AdEvent(AdEvent.ROOM_AD_IMAGE_LOADED, r, e, s, o, this._r3e5e004c8fdafa, this._r50cbaa6f3fb6ad, t, i),
    );
  }
  _rade9458ca68b72(e) {
    return e instanceof A
      ? e
      : e instanceof _i3a5c6f457acdad || this._r4f1e2fb0a800e6(e)
        ? e.bitmapData
        : this._r756964d8871c83(e)
          ? this._rade9458ca68b72(e.content)
          : null;
  }
  _r4f1e2fb0a800e6(e) {
    return typeof e == "object" && e != null && "bitmapData" in e;
  }
  _r756964d8871c83(e) {
    return typeof e == "object" && e != null && "content" in e;
  }
}
