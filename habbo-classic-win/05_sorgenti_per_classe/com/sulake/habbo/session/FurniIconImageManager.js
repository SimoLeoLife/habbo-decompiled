// Estratto da HabboAirLauncher.deobf.js, riga 335576.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/FurniIconImageManager.as
// Nome offuscato: _ibf6442cab0de8c

class a {
  constructor(e, r, t, i) {
    this._assets = e;
    this._events = r;
    this._configuration = t;
    this._sessionDataManager = i;
    this._assets == null && (this._assets = new Na("furni_icon_images"));
  }
  static {
    n(this, "FurniIconImageManager");
  }
  static ASSET_PREFIX = "furni_icon_";
  _rb6b8150f17c66d = new B();
  dispose() {
    this._assets = null;
  }
  getFurniIconImage(e, r, t, i = !0) {
    let s = this.getFurniIconImageInternal(e, r, t);
    return (s == null && i && (s = this.getPlaceholder()), s);
  }
  getFurniIconImageAssetName(e, r, t) {
    let i = this.getAssetName(e, r, t);
    return this._assets?.hasAsset(i) ? i : (this.getFurniIconImageInternal(e, r, t), null);
  }
  getData(e, r, t) {
    return e ? this._sessionDataManager.getWallItemData(r) : this._sessionDataManager.getFloorItemData(r);
  }
  getClassName(e, r, t) {
    let i = this.getData(e, r, t);
    return i == null ? `${String(e)}_${r}_${t}` : `${i.className}${t}`;
  }
  getAssetName(e, r, t) {
    let i = `${a.ASSET_PREFIX}${this.getClassName(e, r, t)}`,
      s = this.getData(e, r, t);
    return (s?.hasIndexedColor && (i += `_${s.colourIndex}`), i);
  }
  getFurniIconImageInternal(e, r, t) {
    let i = this.getClassName(e, r, t),
      s = this.getAssetName(e, r, t);
    if (this._assets?.hasAsset(s)) return this._assets.getAssetByName(s)?.content?.clone() ?? null;
    let o = this.getData(e, r, t);
    if (o == null) return null;
    let d =
      `${this._configuration.getProperty("flash.dynamic.download.url")}${this._configuration.getProperty("flash.dynamic.icon.download.name.template")}`
        .replace("%revision%", String(o.revision))
        .replace("%typeid%", i)
        .replace("%param%", o.hasIndexedColor ? `_${o.colourIndex}` : "");
    if (!this._rb6b8150f17c66d.hasKey(s)) {
      let c = this._assets?.loadAssetFromFile(s, new _i636490202c0f9a(d), "image/png") ?? null;
      (this._rb6b8150f17c66d.add(s, [e, r, t]),
        c?.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._re3a21345c1fd5c),
        c?.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._r47a7f41627e9b1));
    }
    return null;
  }
  getPlaceholder() {
    let e = this._assets?.getAssetByName("loading_icon")?.content;
    return e instanceof A
      ? e.clone()
      : e instanceof Qt && e.content instanceof A
        ? e.content.clone()
        : new A(1, 1, !0, 0);
  }
  _r47a7f41627e9b1 = n((e) => {
    let t = e.target?.assetName ?? "";
    t.length > 0 && this._rb6b8150f17c66d.remove(t);
  }, "_r47a7f41627e9b1");
  _re3a21345c1fd5c = n((e) => {
    let r = e.target,
      t = r?.assetName ?? "",
      i = this._rb6b8150f17c66d.remove(t) ?? null,
      o = r?._r7ea1029131e026?.content?.bitmapData ?? null;
    i == null || o == null || this._events?.dispatchEvent?.(new Oy(t, i[0], i[1], i[2], o.clone()));
  }, "_re3a21345c1fd5c");
}
