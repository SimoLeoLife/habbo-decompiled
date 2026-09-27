// Estratto da HabboAirLauncher.deobf.js, riga 237405.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/furni/class_3936.as
// Nome offuscato: _ibe2e3f77fbcc64

class a {
  static {
    n(this, "class_3936");
  }
  static MAIN_ALL = "all";
  static MAIN_FLOOR_ITEMS = "floor_items";
  static MAIN_WALL_ITEMS = "wall_items";
  static MAIN_ROOM_LAYOUT = "room_layout";
  static const_394 = "any";
  static const_1048 = "sittable";
  static const_151 = "layable";
  static const_996 = "tiles_or_rugs";
  static TYPE_LTD = "ltd";
  static const_1368 = "wired";
  static TYPE_CREDIT_FURNI = "credit_furni";
  static TYPE_CLOTHES = "clothes";
  static const_1051 = "pet_food";
  static TYPE_COLLECTIBLES = "collectibles";
  static const_731 = "tradable";
  static const_1178 = "non_tradable";
  static const_616 = "recyclable";
  static TYPE_WINDOWS = "windows";
  static TYPE_DIMMERS = "dimmers";
  static TYPE_STICKIES = "stickies";
  static const_858 = "paintings";
  static TYPE_FLOORS = "floors";
  static TYPE_WALLPAPERS = "wallpapers";
  static TYPE_LANDSCAPE = "landscape";
  static _rd017ccaa1022f7(e) {
    return a._r973bc864686868(e, class_1901.WALL_PAPER, class_1901.FLOOR, class_1901.LANDSCAPE);
  }
  static _r268983b18866e7(e) {
    return a._r973bc864686868(e, class_1901.WALL_PAPER);
  }
  static _r3f8ba8e1a3c365(e) {
    return a._r973bc864686868(e, class_1901.FLOOR);
  }
  static _r1f06f6f8243748(e) {
    return a._r973bc864686868(e, class_1901.LANDSCAPE);
  }
  static _r7c3383ba3978d0(e) {
    let r = a.products(e);
    return r != null && r._r0bf36af5b8d26a;
  }
  static _r6cdd0061a1fd9b(e) {
    let r = a.products(e);
    return r != null && r._ra7f1805c6d48e8;
  }
  static isTilesOrRugs(e) {
    let r = a.products(e);
    return r == null ||
      r.className.startsWith("tile_walkmagic") ||
      r.className === "hole" ||
      !r._rdbf0cd5086b71d
      ? !1
      : r.furniDataCategory === "rug" || r.furniDataCategory === "floor" || r.className.startsWith("carpet")
        ? !0
        : !(r.height > 0.2 || !r.canStandOn || r.tileSizeX <= 1 || r.tileSizeY <= 1);
  }
  static _rfb886bf610d1e3(e) {
    let r = a._r93022fb3307154(e);
    return r != null && r.stuffData?.uniqueSerialNumber > 0;
  }
  static isWired(e) {
    let r = a.products(e);
    return r == null ? !1 : r.className.startsWith("wf_") || r.furniDataCategory.startsWith("wired_");
  }
  static isCreditFurni(e) {
    return a._r973bc864686868(e, class_1901.CREDIT_FURNI) || a.getClassName(e).startsWith("CF_");
  }
  static _r560b3953a0dffe(e) {
    return a._r973bc864686868(e, class_1901.FIGURE_PURCHASABLE_SET);
  }
  static isPetFood(e) {
    let r = a.products(e);
    return r == null ? !1 : r.className.startsWith("petfood") || r.furniLine === "pet_food";
  }
  static _r52610816ef5897(e) {
    return e != null && e.isNft();
  }
  static _r238d544ee50b6e(e) {
    let r = a.products(e);
    return r != null && r.tradeable;
  }
  static _rd316454d6363f4(e) {
    let r = a.products(e);
    return r != null && !r.tradeable;
  }
  static isRecyclable(e) {
    let r = a._r93022fb3307154(e);
    return r != null && r.recyclable;
  }
  static isWindow(e) {
    let r = a.products(e);
    return r == null
      ? !1
      : r.className.startsWith("window_") ||
          r.furniLine === "windows" ||
          r.furniDataCategory === "window";
  }
  static isDimmer(e) {
    let r = a.products(e);
    return r == null
      ? !1
      : r.className.startsWith("dimmer_") ||
          r.furniDataCategory === "dimmer" ||
          r.furniLine === "dimmers";
  }
  static _rf3da64b740a064(e) {
    return a._r973bc864686868(e, class_1901.POST_IT);
  }
  static isPainting(e) {
    return a.getClassName(e).startsWith("diamond_painting");
  }
  static products(e) {
    return e?.furniData ?? null;
  }
  static getClassName(e) {
    return e?.className ?? "";
  }
  static _r93022fb3307154(e) {
    return e?.peek() ?? null;
  }
  static _r973bc864686868(e, ...r) {
    return e == null ? !1 : r.includes(e.category);
  }
}
