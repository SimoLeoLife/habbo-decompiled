// Estratto da HabboAirLauncher.deobf.js, riga 225944.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/badge/BadgeLayerCtrl.as
// Nome offuscato: _ieb784f9082b663

class a {
  static {
    n(this, "BadgeLayerCtrl");
  }
  static BASE_LAYER_INDEX = 0;
  static PARENT_CONTAINER_NAME = "part_edit_list";
  var_41;
  var_334;
  var_2329 = 0;
  var_301;
  var_935 = null;
  var_1473 = null;
  _disposed = !1;
  layerIndex;
  _ra2790e60531e30 = null;
  var_3150 = null;
  var_1396 = null;
  _reebd5b01ef980d = null;
  _reda6da7b9f7589 = null;
  constructor(e, r, t) {
    ((this.var_41 = e),
      (this.var_334 = r),
      (this.var_2329 = t),
      (this.var_301 = new aQ()),
      (this.var_301.BadgeLayerOptions = t),
      (this.layerIndex = this.var_41._r6bd8f6d6bfdbb5("badge_part_add")));
  }
  get layerOptions() {
    return this.var_301;
  }
  createWindow() {
    if (this.var_935 != null || this.var_334 == null || this.var_41 == null)
      return;
    let e = this.var_334._r3c438483db682b?.findChildByName(a.PARENT_CONTAINER_NAME);
    if (
      ((this.var_935 = this.var_41.getXmlWindow("badge_layer")),
      e == null || this.var_935 == null)
    )
      return;
    let r = this.var_935.findChildByName("preview_container");
    ((this._ra2790e60531e30 = r?.findChildByName("part_preview")),
      this._ra2790e60531e30 != null &&
        (this._ra2790e60531e30.bitmap = this.var_41._r6bd8f6d6bfdbb5("badge_part_add")),
      (this.var_3150 = r?.findChildByName("part_button")),
      this.var_3150 != null &&
        (this.var_3150.procedure = (i, s) => {
          this._rf1d8c747600585(i, s);
        }),
      (this.var_1396 = this.var_935.findChildByName("position_container")),
      (this._reebd5b01ef980d = this.var_1396?.findChildByName("position_picker")),
      (this._reda6da7b9f7589 = this.var_1396?.findChildByName("position_grid")),
      this._reebd5b01ef980d != null &&
        (this._reebd5b01ef980d.bitmap = this.var_41._r6bd8f6d6bfdbb5("position_picker")),
      this._reda6da7b9f7589 != null &&
        (this._reda6da7b9f7589.bitmap = this.var_41._r6bd8f6d6bfdbb5("position_grid")),
      this.var_2329 === 0
        ? (this._reda6da7b9f7589 != null && (this._reda6da7b9f7589.visible = !1),
          this._reebd5b01ef980d != null && (this._reebd5b01ef980d.visible = !1))
        : this._reda6da7b9f7589 != null &&
          (this._reda6da7b9f7589.procedure = (i, s) => {
            this._r9ed2a72c9c6e9e(i, s);
          }));
    let t = this.var_41._r1b5a723df2ea20?._r96829aa95ff786 ?? null;
    ((this.var_1473 = new ColorGridCtrl(this.var_41, (i) => {
      this._redb0499f9ffeb3(i);
    })),
      this.var_1473.createAndAttach(this.var_935, "color_selector", t),
      this.var_301.BadgeLayerOptions === a.BASE_LAYER_INDEX
        ? e.addListItem(this.var_935)
        : e.addListItemAt(this.var_935, 0));
  }
  dispose() {
    this._disposed ||
      (this.var_1473?.dispose(),
      (this.var_1473 = null),
      this.var_935?.dispose(),
      (this.var_935 = null),
      (this._ra2790e60531e30 = null),
      (this.var_3150 = null),
      (this.var_1396 = null),
      (this._reebd5b01ef980d = null),
      (this._reda6da7b9f7589 = null),
      (this.layerIndex = null),
      (this.var_41 = null),
      (this.var_334 = null),
      (this._disposed = !0));
  }
  setLayerOptions(e) {
    if (e.BadgeLayerOptions !== this.var_301.BadgeLayerOptions)
      throw new Error("Tried to set layer option with invalid layerIndex value");
    let r = !1,
      t = this.var_301;
    ((this.var_301 = e.clone()),
      this.var_301._rd40114ffa78cf1(t) || (this.isGridEqual(!1), (r = !0)),
      t._rb918ebc3bf3388 !== this.var_301._rb918ebc3bf3388 &&
        (this.var_1473?._r8cff1a329eacf8(this.var_301._rb918ebc3bf3388, !1),
        (this.var_301._rb918ebc3bf3388 =
          this.var_1473?._r4c047a67fec73a ?? this.var_301._rb918ebc3bf3388),
        (r = !0)),
      (r || t.partIndex !== this.var_301.partIndex) && this.updateSelectedPart());
  }
  updateSelectedPart() {
    let e = this.var_334?._rd781cceffe7e4b?._r55669dff1dd65a(this.layerOptions) ?? null;
    (e == null && (e = this.layerIndex),
      !(e == null || this._ra2790e60531e30 == null) &&
        (this._ra2790e60531e30.bitmap?.dispose(),
        (this._ra2790e60531e30.bitmap = new A(e.width, e.height)),
        this._ra2790e60531e30.bitmap.copyPixels(e, e.rect, new E()),
        this.var_334?.Point(this)));
  }
  _redb0499f9ffeb3(e) {
    this.var_301._rb918ebc3bf3388 !== e._r4c047a67fec73a &&
      ((this.var_301._rb918ebc3bf3388 = e._r4c047a67fec73a), this.updateSelectedPart());
  }
  isGridEqual(e = !0) {
    (this._reebd5b01ef980d != null &&
      ((this._reebd5b01ef980d.x = this.var_301.gridX * 14 + 1),
      (this._reebd5b01ef980d.y = this.var_301.gridY * 14 + 1)),
      e && this.updateSelectedPart());
  }
  _r9ed2a72c9c6e9e(e, r) {
    if (e.type !== u.CLICK || this._reebd5b01ef980d == null) return;
    let t = e;
    ((this.var_301.gridX = Math.min(2, Math.max(0, Math.floor(t.localX / 14)))),
      (this.var_301.gridY = Math.min(2, Math.max(0, Math.floor(t.localY / 14)))),
      this.isGridEqual());
  }
  _rf1d8c747600585(e, r) {
    e.type === u.CLICK && this.var_334?._rb0de8ae1550ba4(this);
  }
}
