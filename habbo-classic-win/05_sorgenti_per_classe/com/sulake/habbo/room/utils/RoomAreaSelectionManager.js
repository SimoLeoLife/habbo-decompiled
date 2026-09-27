// Extracted from HabboAirLauncher.deobf.js, line 294077.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/utils/RoomAreaSelectionManager.as
// Obfuscated name: _i18d93dd01b076c

class a {
  static {
    n(this, "RoomAreaSelectionManager");
  }
  static _r4c235702facfd0 = a.createHighlightFilters();
  static NOT_ACTIVE = 0;
  static NOT_SELECTING_AREA = 1;
  static AWAITING_MOUSE_DOWN = 2;
  static SELECTING = 3;
  _roomEngine;
  var_175 = a.NOT_ACTIVE;
  var_2220 = 0;
  var_2291 = 0;
  var_1447 = 0;
  var_1425 = 0;
  _highlightRootX = 0;
  _highlightRootY = 0;
  _highlightWidth = 0;
  _highlightHeight = 0;
  _callback = null;
  _highlightType = class_3156.const_321;
  _r9a5b8cb81e7fdc = n((e) => {
    this.onRoomObjectAdded(e);
  }, "_r9a5b8cb81e7fdc");
  constructor(e) {
    ((this._roomEngine = e),
      this._roomEngine.events.addEventListener?.(RoomEngineObjectEvent.ADDED, this._r9a5b8cb81e7fdc));
  }
  get areaSelectionState() {
    return this.var_175;
  }
  static createHighlightFilters() {
    let e = {};
    return (
      (e[class_3156.const_321] = [
        new ColorMatrixFilter_([1.5, 0, 0, 0, 0, 0, 1.5, 0, 0, 20, 0, 0, 1.5, 0, 20, 0, 0, 0, 1, 0]),
      ]),
      (e[class_3156.const_923] = [
        new ColorMatrixFilter_([1.05, 0, 0, 0, 0, 0, 1.3, 0, 0, 8, 0, 0, 1.8, 0, 20, 0, 0, 0, 1, 0]),
      ]),
      (e[class_3156.HIGHLIGHT_DARKEN] = [
        new ColorMatrixFilter_([0.55, 0, 0, 0, -10, 0, 0.55, 0, 0, -10, 0, 0, 0.55, 0, -10, 0, 0, 0, 1, 0]),
      ]),
      e
    );
  }
  getAllFurnis() {
    return this._roomEngine
      ._r674ea2583b28b6(RoomObjectCategoryEnum.const_909)
      .concat(this._roomEngine._r674ea2583b28b6(RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE));
  }
  activate(e, r) {
    if (this.var_175 !== a.NOT_ACTIVE) return !1;
    ((this._callback = e), (this._highlightType = r));
    for (let t of this.getAllFurnis()) {
      let i = t.getVisualization();
      i != null && (i.lookThrough = !0);
    }
    return ((this.var_175 = a.NOT_SELECTING_AREA), !0);
  }
  deactivate() {
    if (this.var_175 !== a.NOT_ACTIVE) {
      this._callback = null;
      for (let e of this.getAllFurnis()) {
        let r = e.getVisualization();
        r != null && (r.lookThrough = !1);
      }
      (this.clearHighlight(), (this.var_175 = a.NOT_ACTIVE));
    }
  }
  _r7399110b76ac0e() {
    this.var_175 === a.NOT_SELECTING_AREA &&
      (this._r703fc5fa7324ea(),
      (this.var_175 = a.AWAITING_MOUSE_DOWN),
      this._roomEngine._r70a9e7931fe28c(!0));
  }
  clearHighlight() {
    this.var_175 !== a.NOT_ACTIVE &&
      (this._r703fc5fa7324ea(),
      (this.var_175 = a.NOT_SELECTING_AREA),
      this._roomEngine._r70a9e7931fe28c(!1),
      this._callback?.(0, 0, 0, 0));
  }
  setHighlight(e, r, t, i) {
    if (this.var_175 === a.NOT_ACTIVE) return;
    ((this._highlightRootX = e),
      (this._highlightRootY = r),
      (this._highlightWidth = t),
      (this._highlightHeight = i));
    let s = this._roomEngine._ra1f5cb56d0c2d8(
      this._roomEngine.activeRoomId,
      -1,
      RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM,
    );
    s?.getVisualization()?.initializeHighlightArea(e, r, t, i, a._r4c235702facfd0[this._highlightType]);
  }
  handleTileMouseEvent(e) {
    let r = this.var_175 === a.AWAITING_MOUSE_DOWN && e.type === RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_DOWN;
    if (
      (e.shiftKey &&
        this.var_175 === a.NOT_SELECTING_AREA &&
        e.type === RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_DOWN &&
        (this._r7399110b76ac0e(), (r = !0)),
      r)
    ) {
      ((this.var_175 = a.SELECTING),
        (this.var_2220 = e.tileXAsInt),
        (this.var_2291 = e.tileYAsInt),
        (this.var_1447 = e.tileXAsInt),
        (this.var_1425 = e.tileYAsInt),
        this.setHighlight(this.var_2220, this.var_2291, 1, 1));
      return;
    }
    if (
      this.var_175 === a.SELECTING &&
      e.type === RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_MOVE &&
      (e.tileXAsInt !== this.var_1447 || e.tileYAsInt !== this.var_1425)
    ) {
      ((this.var_1447 = e.tileXAsInt), (this.var_1425 = e.tileYAsInt));
      let t, i, s, o;
      (this.var_1447 > this.var_2220
        ? ((t = this.var_2220), (s = this.var_1447 - this.var_2220 + 1))
        : ((t = this.var_1447), (s = this.var_2220 - this.var_1447 + 1)),
        this.var_1425 > this.var_2291
          ? ((i = this.var_2291), (o = this.var_1425 - this.var_2291 + 1))
          : ((i = this.var_1425), (o = this.var_2291 - this.var_1425 + 1)),
        this.setHighlight(t, i, s, o));
    }
  }
  _reb1297ccdede96() {
    return this.var_175 === a.SELECTING
      ? ((this.var_175 = a.NOT_SELECTING_AREA),
        this._roomEngine._r70a9e7931fe28c(!1),
        this._callback?.(
          this._highlightRootX,
          this._highlightRootY,
          this._highlightWidth,
          this._highlightHeight,
        ),
        !0)
      : !1;
  }
  _r703fc5fa7324ea() {
    let e = this._roomEngine._ra1f5cb56d0c2d8(
      this._roomEngine.activeRoomId,
      -1,
      RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM,
    );
    e?.getVisualization()?._rf0001106da7c55();
  }
  onRoomObjectAdded(e) {
    if (
      this.var_175 === a.NOT_ACTIVE ||
      !(e instanceof RoomEngineObjectEvent) ||
      e.type !== RoomEngineObjectEvent.ADDED ||
      e.roomId !== this._roomEngine.activeRoomId ||
      (e.category !== RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE && e.category !== RoomObjectCategoryEnum.const_909)
    )
      return;
    let r = this._roomEngine._ra1f5cb56d0c2d8(e.roomId, e.objectId, e.category);
    if (r != null) {
      let t = r.getVisualization();
      t != null && (t.lookThrough = !0);
    }
  }
}
