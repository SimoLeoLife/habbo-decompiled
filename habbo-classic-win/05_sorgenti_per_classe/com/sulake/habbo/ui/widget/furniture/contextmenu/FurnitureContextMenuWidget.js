// Extracted from HabboAirLauncher.deobf.js, line 316025.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/contextmenu/FurnitureContextMenuWidget.as
// Obfuscated name: _i487e6e30b32bd2

class extends RoomWidgetBase {
  constructor(r, t, i, s, o, d, c, f) {
    super(r, t, i, o);
    this.var_82 = d;
    this._catalog = f;
    ((this.var_1154 = new GuildFurnitureContextMenuView(this, c, t)),
      (this.var_2222 = new RandomTeleportContextMenuView(this)),
      (this.var_2247 = new MonsterPlantSeedContextMenuView(this)),
      (this.var_1148 = new MysteryBoxContextMenuView(this)),
      (this.var_1367 = new FriendFurniContextMenuView(this)),
      (this.var_1142 = new GenericUsableFurnitureContextMenuView(this)),
      (this.var_1004 = new Bee(this)),
      (this._re3af9b8dbb9e03 = new MysteryBoxOpenDialogView(this)),
      (this.var_1475 = new xee(this)),
      (this.var_1464 = new Mee(this)),
      (this.var_1659 = new Aee(this)),
      (this.handler.widget = this),
      this.handler.roomEngine?.events?.addEventListener?.(RoomEngineObjectEvent.REMOVED, this.onRoomObjectRemoved));
  }
  static {
    n(this, "FurnitureContextMenuWidget");
  }
  _view = null;
  _selectedObject = null;
  var_1154 = null;
  var_2222 = null;
  var_2247 = null;
  var_1004 = null;
  var_1475 = null;
  var_1148 = null;
  var_1464 = null;
  _re3af9b8dbb9e03 = null;
  var_1367 = null;
  var_1142 = null;
  var_1659 = null;
  _r405fcdd781074c = null;
  dispose() {
    this.disposed ||
      (this.var_82?.removeUpdateReceiver(this),
      this.removeView(this._view, !1),
      this.var_1154?.dispose(),
      (this.var_1154 = null),
      this.var_2222?.dispose(),
      (this.var_2222 = null),
      this.var_2247?.dispose(),
      (this.var_2247 = null),
      this.var_1004?.dispose(),
      (this.var_1004 = null),
      this.var_1148?.dispose(),
      (this.var_1148 = null),
      this._re3af9b8dbb9e03?.dispose(),
      (this._re3af9b8dbb9e03 = null),
      this.var_1367?.dispose(),
      (this.var_1367 = null),
      this.var_1142?.dispose(),
      (this.var_1142 = null),
      this.var_1475?.dispose(),
      (this.var_1475 = null),
      this.var_1464?.dispose(),
      (this.var_1464 = null),
      this.var_1659?.dispose(),
      (this.var_1659 = null),
      this._r405fcdd781074c?.dispose(),
      (this._r405fcdd781074c = null),
      this.handler.roomEngine?.events?.removeEventListener?.(RoomEngineObjectEvent.REMOVED, this.onRoomObjectRemoved),
      (this._catalog = null),
      (this.var_82 = null),
      (this._selectedObject = null),
      super.dispose());
  }
  get handler() {
    return this._handler;
  }
  get roomEngine() {
    return this.handler.container?.roomEngine ?? null;
  }
  get catalog() {
    return this._catalog;
  }
  get friendList() {
    return null;
  }
  _r46775e26eae67d() {
    this._r405fcdd781074c == null &&
      ((this._r405fcdd781074c = new EX(this.handler)), this._r405fcdd781074c.createWindow());
  }
  hideContextMenu(r) {
    r != null &&
      this._selectedObject?.getId() === r.getId() &&
      (this.removeView(this._view, !1),
      this.var_82?.removeUpdateReceiver(this),
      (this._selectedObject = null));
  }
  showGuildFurnitureContextMenu(r, t, i, s, o, d) {
    ((this._selectedObject = r),
      (this.var_1154.var_3597 = t),
      (this.var_1154.var_3759 = s),
      (this.var_1154.var_3587 = o),
      (this.var_1154.var_3467 = d),
      this.removeView(this._view, !1),
      (this._view = this.var_1154),
      this._view != null && FurnitureContextInfoView.setup(this._view, r, i),
      this.var_82?.registerUpdateReceiver(this, 10));
  }
  _r8d1efdb2017050(r, t) {
    ((this._selectedObject = r),
      this.removeView(this._view, !1),
      (this.var_2222.objectCategory = t),
      (this._view = this.var_2222),
      this._view != null && FurnitureContextInfoView.setup(this._view, r),
      this.var_82?.registerUpdateReceiver(this, 10));
  }
  _r83d53604673498(r, t) {
    ((this._selectedObject = r),
      this.removeView(this._view, !1),
      (this.var_2247.objectCategory = t),
      (this._view = this.var_2247),
      this._view != null && FurnitureContextInfoView.setup(this._view, r),
      this.var_82?.registerUpdateReceiver(this, 10));
  }
  showPlantSeedConfirmationDialog(r) {
    r != null &&
      ((this._selectedObject = r),
      this.removeView(this._view, !1),
      (this.var_1004 ??= new Bee(this)),
      this.var_1004.open(r.getId()));
  }
  _r104924a8b9e9d7(r) {
    r != null &&
      ((this._selectedObject = r),
      this.removeView(this._view, !1),
      (this.var_1659 ??= new Aee(this)),
      this.var_1659.open(r.getId()));
  }
  _r8b619e9e84a77f(r) {
    r != null &&
      ((this._selectedObject = r),
      this.removeView(this._view, !1),
      (this.var_1475 ??= new xee(this)),
      this.var_1475.open(r.getId()));
  }
  _rcbcaaa3cf494f5(r) {
    r != null &&
      ((this._selectedObject = r),
      this.removeView(this._view, !1),
      (this.var_1464 ??= new Mee(this)),
      this.var_1464.open(r.getId()));
  }
  _r9bdadfc67cb5ea(r) {
    ((this._selectedObject = r),
      this.removeView(this._view, !1),
      (this.var_1148 ??= new MysteryBoxContextMenuView(this)),
      (this.var_1148.isOwnerMode = this.handler.container?._rc2337883ff003a(r) ?? !1),
      this.var_1148.show(),
      (this._view = this.var_1148),
      this._view != null && FurnitureContextInfoView.setup(this._view, r),
      this.var_82?.registerUpdateReceiver(this, 10));
  }
  _r8b3b09f87378e3(r) {
    ((this._selectedObject = r),
      this.removeView(this._view, !1),
      (this.var_1367 ??= new FriendFurniContextMenuView(this)),
      this.var_1367.show(),
      (this._view = this.var_1367),
      this._view != null && FurnitureContextInfoView.setup(this._view, r),
      this.var_82?.registerUpdateReceiver(this, 10));
  }
  _r9818f6c5e398a8(r, t) {
    ((this._selectedObject = r),
      this.removeView(this._view, !1),
      (this.var_1142 ??= new GenericUsableFurnitureContextMenuView(this)),
      this.var_1142.show(),
      (this.var_1142.objectCategory = t),
      (this._view = this.var_1142),
      this._view != null && FurnitureContextInfoView.setup(this._view, r),
      this.var_82?.registerUpdateReceiver(this, 10));
  }
  showMysteryBoxOpenDialog(r) {
    r != null &&
      ((this._selectedObject = r),
      this.removeView(this._view, !1),
      this._re3af9b8dbb9e03?.var_2844(r));
  }
  removeView(r, t) {
    r != null && (r.hide(!1), r === this._view && (this._view = null));
  }
  update(r) {
    if (this._view != null && this._selectedObject != null) {
      let t = this.handler._r3ddf6597a468ee(this._selectedObject.getId()),
        i = this.handler._ra02c2649616756(this._selectedObject.getId());
      t != null && i != null && this._view.update(t, i, r);
    }
  }
  release() {
    (this._selectedObject != null && this.hideContextMenu(this._selectedObject),
      this._view != null && this.removeView(this._view, !1),
      super.release());
  }
  reuse(r) {
    super.reuse(r);
  }
  _r965a230555eccb() {
    this.var_1004?.close();
  }
  onRoomObjectRemoved = n((r) => {
    if (r.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE) {
      let t = r.objectId;
      this._selectedObject != null &&
        this._selectedObject.getId() === t &&
        (this.removeView(this._view, !1),
        this._r965a230555eccb(),
        this.var_82?.removeUpdateReceiver(this),
        (this._selectedObject = null));
    }
  }, "onRoomObjectRemoved");
}
