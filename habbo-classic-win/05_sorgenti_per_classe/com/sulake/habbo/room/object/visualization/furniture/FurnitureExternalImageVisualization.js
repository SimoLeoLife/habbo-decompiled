// Extracted from HabboAirLauncher.deobf.js, line 278016.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureExternalImageVisualization.as
// Obfuscated name: _ide358056cb5e8c

class extends class_1882 {
  static {
    n(this, "FurnitureExternalImageVisualization");
  }
  var_5241 = !1;
  _rfa880eec4954ff = "";
  URLLoader = "";
  _url = null;
  var_3355 = !1;
  var_2272 = "";
  var_5455 = null;
  constructor() {
    (super(), (this.hasOutline = !0));
  }
  setExternalBaseUrls(e, r, t) {
    ((this._rfa880eec4954ff = e), (this.URLLoader = r), (this.var_5241 = t));
  }
  dispose() {
    (HI.furnitureDisposed(this), super.dispose());
  }
  _rb09602dca8db26(e, r) {
    if (this.assetCollection == null) return new A(1, 1, !0, 0);
    let t = this.getFullThumbnailAssetName(r, 32);
    this.assetCollection.getAsset(t) == null &&
      this.object != null &&
      (t = `${this.object.getType()}_icon_a`);
    let s = this.assetCollection.getAsset(t)?.asset?.content;
    return s != null ? s.clone() : new A(1, 1, !0, 0);
  }
  _r5ff94dc6bbd4c5() {
    return this.var_5455 ?? "";
  }
  _rb95283153ba9b7() {
    return this.URLLoader;
  }
  _r0a7dbbea239378(e) {
    this._url = this.buildThumbnailUrl(e, this.var_2272);
  }
  getThumbnailURL() {
    if (this.object == null || this._rfa880eec4954ff === "disabled" || this._url === HI.STATUS_REJECTED)
      return null;
    if (this._url != null) return this._url;
    let e = this.object.getStringToStringMap()?.getString(RoomObjectVariableEnum.FURNITURE_DATA) ?? "";
    if (e.length === 0) return null;
    try {
      this.var_2272 = this.object.getType().includes("external_image_wallitem_poster")
        ? ""
        : "postcards/selfie/";
      let r = this.getJsonValue(e, "id", null);
      if (r != null && r.length > 0)
        return (
          this.var_3355 ||
            ((this.var_5455 = r),
            (this.var_3355 = !0),
            this.var_5241 ? HI.requestExtraDataUrl(this) : this.loadExtraData(r)),
          null
        );
      let t = this.getJsonValue(e, "w", "url");
      return ((this._url = this.buildThumbnailUrl(t, this.var_2272)), this._url);
    } catch {
      return null;
    }
  }
  getLibraryAssetNameForSprite(e, r) {
    return this._url ?? "";
  }
  buildThumbnailUrl(e, r) {
    if (e == null || e.length === 0) return null;
    if (e === HI.STATUS_REJECTED) return e;
    let t = e;
    return (
      t.startsWith("http") || (t = this._rfa880eec4954ff + r + t),
      (t = t.replace(".png", "_small.png")),
      t.includes(".png") || (t += "_small.png"),
      t
    );
  }
  getJsonValue(e, r, t) {
    let i = JSON.parse(e),
      s = i[r];
    return ((s == null || s === "") && t != null && (s = i[t]), typeof s == "string" ? s : null);
  }
  async loadExtraData(e) {
    let r = await fetch(this.URLLoader + e);
    if (!r.ok) return;
    let t = await r.text();
    if (t.length === 0) return;
    let i = this.getJsonValue(t, "w", "url");
    this._url = this.buildThumbnailUrl(i, this.var_2272);
  }
}
