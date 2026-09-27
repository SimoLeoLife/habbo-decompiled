// Extracted from HabboAirLauncher.deobf.js, line 145928.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/ResourceManager.as
// Obfuscated name: _if989dd810bf53b

class {
  constructor(e) {
    this._windowManager = e;
  }
  static {
    n(this, "ResourceManager");
  }
  _disposed = !1;
  _r8713fea9cbb1cf = new Map();
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || ((this._windowManager = null), this._r8713fea9cbb1cf.clear(), (this._disposed = !0));
  }
  retrieveAsset(e, r) {
    if (e == null || e.length === 0 || this._windowManager == null) return;
    let t = this.resolveAssetName(e);
    if (t == null) return;
    let i = this._windowManager.assets.getAssetByName(t);
    if (i != null) {
      r?.receiveAsset(i, t);
      return;
    }
    if (!(!t.startsWith("http://") && !t.startsWith("https://")))
      try {
        let s = this._windowManager.assets.loadAssetFromFile(t, new UnkClass_636490(t));
        if (s != null && !s.disposed) {
          let o = this._r8713fea9cbb1cf.get(t) ?? [];
          (r != null && o.push(r),
            this._r8713fea9cbb1cf.set(t, o),
            s.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, (...d) => {
              this._rcd530eded98ee8(d[0] ?? null);
            }));
        }
      } catch {
        let o = this._windowManager.assets.getAssetByName("missing_image_icon")?.content;
        if (r != null && o != null) {
          let d = new Qt(null);
          (d.setUnknownContent(o.clone()), r.receiveAsset(d, t));
        }
      }
  }
  isSameAsset(e, r) {
    return r === this.resolveAssetName(e);
  }
  createAsset(e, r, t) {
    if (this._windowManager == null) throw new Error("ResourceManager is disposed.");
    let i = this._windowManager.assets.getAssetTypeDeclarationByClass(r),
      s = new r(i);
    return (this._windowManager.assets.setAsset(e, s), s.setUnknownContent(t), s);
  }
  removeAsset(e) {
    if (this._windowManager == null) return;
    let r = this.resolveAssetName(e);
    if (r == null) return;
    let t = this._windowManager.assets.getAssetByName(r);
    t != null && this._windowManager.assets.removeAsset(t);
  }
  _rcd530eded98ee8 = n((e = null) => {
    if (this._disposed || this._windowManager == null) return;
    let r = e?.target;
    if (r == null) return;
    let t = this._r8713fea9cbb1cf.get(r.assetName);
    if (t == null) return;
    let i = this._windowManager.assets.getAssetByName(r.assetName);
    for (let s of t) s != null && !s.disposed && i != null && s.receiveAsset(i, i.url ?? r.assetName);
    this._r8713fea9cbb1cf.delete(r.assetName);
  }, "_rcd530eded98ee8");
  resolveAssetName(e) {
    return this._windowManager?.interpolate(e) ?? null;
  }
}
