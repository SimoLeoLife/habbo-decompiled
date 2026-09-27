// Extracted from HabboAirLauncher.deobf.js, line 166887.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/cache/AvatarImageDirectionCache.as
// Obfuscated name: _ia7a5c584a0b344

class a {
  static {
    n(this, "AvatarImageDirectionCache");
  }
  static KEY_SEPARATOR = "/";
  static NO_FRAMES_KEY = "-";
  _partList;
  _images = new Map();
  _nativeImages = new Map();
  _cachedFrameCounter = null;
  _cachedKey = null;
  constructor(e) {
    this._partList = e;
  }
  dispose() {
    for (let e of this._images.values()) e.dispose();
    for (let e of this._nativeImages.values()) e.dispose();
    (this._images.clear(),
      this._nativeImages.clear(),
      (this._partList = null),
      (this._cachedFrameCounter = null),
      (this._cachedKey = null));
  }
  getPartList() {
    return this._partList ?? [];
  }
  getImageContainer(e) {
    return this._images.get(this.getCacheKey(e)) ?? null;
  }
  updateImageContainer(e, r) {
    let t = this.getCacheKey(r),
      i = this._images.get(t);
    (i?.dispose(), this._images.set(t, e));
  }
  getNativeImageContainer(e) {
    return this._nativeImages.get(this.getCacheKey(e)) ?? null;
  }
  updateNativeImageContainer(e, r) {
    let t = this.getCacheKey(r),
      i = this._nativeImages.get(t);
    (i?.dispose(), this._nativeImages.set(t, e));
  }
  getCacheKey(e) {
    let r = this._partList;
    if (r == null || r.length === 0) return a.NO_FRAMES_KEY;
    if (this._cachedFrameCounter === e && this._cachedKey != null) return this._cachedKey;
    let t = r[0]?.getCacheableKey(e) ?? a.NO_FRAMES_KEY;
    for (let i = 1; i < r.length; i++) t += a.KEY_SEPARATOR + (r[i]?.getCacheableKey(e) ?? "");
    return ((this._cachedFrameCounter = e), (this._cachedKey = t), t);
  }
}
