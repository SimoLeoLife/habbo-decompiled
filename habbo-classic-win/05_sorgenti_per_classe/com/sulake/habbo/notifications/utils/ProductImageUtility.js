// Estratto da HabboAirLauncher.deobf.js, riga 263863.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/utils/ProductImageUtility.as
// Nome offuscato: _i885b5bc9260a59

class {
  static {
    n(this, "ProductImageUtility");
  }
  _roomEngine;
  _inventory;
  constructor(e, r) {
    ((this._roomEngine = e), (this._inventory = r));
  }
  dispose() {
    ((this._roomEngine = null), (this._inventory = null));
  }
  getProductImage(e, r, t) {
    let i = null,
      s = null;
    switch (e) {
      case ps.PRODUCT_TYPE_STUFF:
        return (this._roomEngine?._r65a31a885a1252(r, this) ?? null)?.data ?? null;
      case ps.PRODUCT_TYPE_ITEM: {
        let o = this.tempCategoryMapping("I", r);
        if (o === 1) return (this._roomEngine?.getWallItemDataByName(r, this, t) ?? null)?.data ?? null;
        switch (o) {
          case class_1901.WALL_PAPER:
            i = this._inventory?.assets.getAssetByName("icon_wallpaper_png");
            break;
          case class_1901.LANDSCAPE:
            i = this._inventory?.assets.getAssetByName("icon_landscape_png");
            break;
          case class_1901.FLOOR:
            i = this._inventory?.assets.getAssetByName("icon_floor_png");
            break;
        }
        s = i?.content instanceof A ? i.content.clone() : (i?.content?.clone() ?? null);
        break;
      }
      case ps.PRODUCT_TYPE_EFFECT:
        ((i = this._inventory?.assets.getAssetByName(`fx_icon_${r}_png`)),
          (s = i?.content instanceof A ? i.content.clone() : (i?.content?.clone() ?? null)));
        break;
      default:
        break;
    }
    return s;
  }
  imageReady(e, r) {}
  imageFailed(e) {}
  tempCategoryMapping(e, r) {
    return e === "S"
      ? 1
      : e === "I"
        ? r === 3001
          ? class_1901.WALL_PAPER
          : r === 3002
            ? class_1901.FLOOR
            : r === 4057
              ? class_1901.LANDSCAPE
              : 1
        : 1;
  }
}
