// Estratto da HabboAirLauncher.deobf.js, riga 299561.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/class_1828.as
// Nome offuscato: _ia4c380f0e5de2b

class a extends _X {
  static {
    n(this, "class_1828");
  }
  static LOADING_ICON_PLACEHOLDER = "loading_icon";
  static VISUALS_KEY = "visuals";
  var_3785 = "";
  _assetNamesForVisuals = new B();
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectFurniIconAssetEvent.const_1367]);
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof _i39f7ecd6ab9902 ? e : null,
      t = r?.data instanceof Bc ? r.data : null;
    if (r != null && t != null && this.object != null) {
      let s = t.getValue(a.VISUALS_KEY) ?? "";
      (r.state % 2 !== 1 && (s = ""),
        s !== this.var_3785 &&
          ((this.var_3785 = s),
          this.shownAssetsString(),
          this.object.getModelController().setString(RoomObjectVariableEnum.FURNITURE_FURNI_CHEST_SHOWN_ASSET_NAMES, this._r2d8a69179d0b90),
          this.update(_ia411d8d8194a3a())));
    }
    let i = e instanceof RoomObjectFurniIconUpdateMessage ? e : null;
    if (i != null && i.assetName !== a.LOADING_ICON_PLACEHOLDER && this.object != null) {
      let s = a.itemTypeToString(i.wallItem, i.typeId, i.extra);
      this._assetNamesForVisuals.hasKey(s) &&
        this._assetNamesForVisuals.getValue(s) === a.LOADING_ICON_PLACEHOLDER &&
        (this._assetNamesForVisuals.replace(s, i.assetName),
        this.object.getModelController().setString(RoomObjectVariableEnum.FURNITURE_FURNI_CHEST_SHOWN_ASSET_NAMES, this._r2d8a69179d0b90),
        this.update(_ia411d8d8194a3a()));
    }
  }
  shownAssetsString() {
    this._assetNamesForVisuals = new B();
    for (let e of this.var_3785.split(";")) {
      if (e === "") continue;
      this._assetNamesForVisuals.add(e, a.LOADING_ICON_PLACEHOLDER);
      let r = a.stringToItemType(e);
      this._r11e12b4ff1ca8e != null &&
        this.object != null &&
        this._r11e12b4ff1ca8e.dispatchEvent?.(
          new RoomObjectFurniIconAssetEvent(RoomObjectFurniIconAssetEvent.const_1367, this.object, r.isWallItem, r.typeId, r.extra),
        );
    }
  }
  get _r2d8a69179d0b90() {
    let e = [];
    for (let r of this.var_3785.split(";"))
      r !== "" && e.push(this._assetNamesForVisuals.getValue(r) ?? a.LOADING_ICON_PLACEHOLDER);
    return e.join(",");
  }
  static itemTypeToString(e, r, t) {
    return t !== "" ? `${e},${r},${t}` : `${e},${r}`;
  }
  static stringToItemType(e) {
    let r = e.split(",");
    return {
      isWallItem: r[0] === "true",
      typeId: Number.parseInt(r[1] ?? "0", 10),
      extra: r[2] ?? "",
    };
  }
}
