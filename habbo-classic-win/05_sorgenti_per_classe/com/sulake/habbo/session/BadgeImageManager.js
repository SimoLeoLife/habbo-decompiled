// Estratto da HabboAirLauncher.deobf.js, riga 335419.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/BadgeImageManager.as
// Nome offuscato: _iea7eec089a9432

class a {
  constructor(e, r, t) {
    this._assets = e;
    this._events = r;
    this._configuration = t;
    this._assets == null && (this._assets = new Na("badge_images"));
  }
  static {
    n(this, "BadgeImageManager");
  }
  static ASSET_PREFIX = "badge_";
  static ASSET_SMALL_POSTFIX = "_32";
  static const_255 = "group_badge";
  static TYPE_NORMAL = "normal_badge";
  _r97f940c2d94951 = new Map();
  dispose() {
    this._assets = null;
  }
  getBadgeImage(e, r = a.TYPE_NORMAL, t = !0, i = !1) {
    let s = this.getBadgeImageInternal(e, r, i);
    return (s == null && t && (s = this.getPlaceholder()), s);
  }
  _rb7d2621bf91e58(e, r = a.TYPE_NORMAL) {
    return (
      this.getBadgeImageInternal(e, r, !0) == null &&
        this.getBadgeImageInternal(e) != null &&
        this._raef3a10cc559ae(`${a.ASSET_PREFIX}${e}`, e),
      this.getBadgeImage(e, r, !1, !0)
    );
  }
  getBadgeImageWithInfo(e) {
    let r = this.getBadgeImageInternal(e);
    return r != null ? new BadgeInfo(r, !1) : new BadgeInfo(this.getPlaceholder(), !0);
  }
  getBadgeImageAssetName(e, r = a.TYPE_NORMAL, t = !1) {
    let i = `${a.ASSET_PREFIX}${e}${t ? a.ASSET_SMALL_POSTFIX : ""}`;
    return this._assets?.hasAsset(i) ? i : (this.getBadgeImageInternal(e, r, t), null);
  }
  _r05fe5177fab2ac(e, r = a.TYPE_NORMAL) {
    let t = this.getBadgeImageAssetName(e, r, !0);
    return (
      t ?? (this._raef3a10cc559ae(`${a.ASSET_PREFIX}${e}`, e), this.getBadgeImageAssetName(e, r, !0))
    );
  }
  getBadgeImageInternal(e, r = a.TYPE_NORMAL, t = !1) {
    let i = `${a.ASSET_PREFIX}${e}${t ? a.ASSET_SMALL_POSTFIX : ""}`;
    if (this._assets?.hasAsset(i)) return this._assets.getAssetByName(i)?.content?.clone() ?? null;
    if (t) return null;
    let s = "";
    switch (r) {
      case a.TYPE_NORMAL:
        s = `${this._configuration.getProperty("image.library.url")}album1584/${e}.png`;
        break;
      case a.const_255:
        if (this._r97f940c2d94951.has(i)) return null;
        ((s = this._configuration.getProperty("group.badge.url").replace("%imagerdata%", e)),
          s.endsWith(".gif") && (s = `${s.slice(0, -3)}png`),
          this._r97f940c2d94951.set(i, !0));
        break;
      default:
        return null;
    }
    return (
      (this._assets?.loadAssetFromFile(i, new _i636490202c0f9a(s), "image/png") ?? null)?.addEventListener(
        Le.ASSET_LOADER_EVENT_COMPLETE,
        this._r919c0ab2a93eac,
      ),
      null
    );
  }
  getPlaceholder() {
    let e = this._assets?.getAssetByName("loading_icon")?.content;
    return e instanceof A
      ? e.clone()
      : e instanceof Qt && e.content instanceof A
        ? e.content.clone()
        : new A(1, 1, !0, 0);
  }
  _r919c0ab2a93eac = n((e) => {
    let r = e.target,
      t = r?.assetName ?? "",
      s = r?._r7ea1029131e026?.content?.bitmapData ?? null;
    if (r == null || s == null || t.length === 0) return;
    let o = t.replace(a.ASSET_PREFIX, "");
    this._events?.dispatchEvent?.(new Ho(o, s.clone()));
  }, "_r919c0ab2a93eac");
  _raef3a10cc559ae(e, r) {
    let t = this._rd4dd234c018e78(e);
    if (t == null || this._assets == null) return;
    let i = new Qt(this._assets.getAssetTypeDeclarationByClass(Qt));
    (this._assets.setAsset(`${a.ASSET_PREFIX}${r}${a.ASSET_SMALL_POSTFIX}`, i), i.setUnknownContent(t));
  }
  _rd4dd234c018e78(e) {
    let t = this._assets?.getAssetByName(e)?.content;
    if (t == null) return null;
    let i = new A(t.width / 2, t.height / 2, !0, 0);
    return (i.draw(t, new Pe(0.5, 0, 0, 0.5), null, null, null, !0), i);
  }
}
