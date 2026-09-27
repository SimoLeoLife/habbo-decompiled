// Estratto da HabboAirLauncher.deobf.js, riga 314798.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/clothingchange/ClothingChangeFurnitureWidget.as
// Nome offuscato: _ia165be8f33be85

class a extends RoomWidgetBase {
  static {
    n(this, "ClothingChangeFurnitureWidget");
  }
  static const_224 = "Boy";
  static const_1339 = "Girl";
  static MALE = "M";
  static const_140 = "F";
  _readec785843ea9 = null;
  var_344 = 0;
  var_4410 = 0;
  var_2440 = 0;
  constructor(e, r, t = null, i = null) {
    super(e, r, t, i);
  }
  dispose() {
    (this.hideGenderSelectionInterface(), super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetClothingChangeUpdateEvent.SHOW_GENDER_SELECTION, this.onUpdate),
      e.addEventListener?.(RoomWidgetClothingChangeUpdateEvent.SHOW_CLOTHING_EDITOR, this.onUpdate),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetClothingChangeUpdateEvent.SHOW_GENDER_SELECTION, this.onUpdate),
      e.removeEventListener?.(RoomWidgetClothingChangeUpdateEvent.SHOW_CLOTHING_EDITOR, this.onUpdate));
  }
  onUpdate = n((e) => {
    switch (e.type) {
      case RoomWidgetClothingChangeUpdateEvent.SHOW_GENDER_SELECTION:
        this.showGenderSelectionInterface(e);
        break;
    }
  }, "onUpdate");
  showGenderSelectionInterface(e) {
    (this.hideGenderSelectionInterface(),
      (this.var_344 = e.objectId),
      (this.var_4410 = e.objectCategory),
      (this.var_2440 = e.roomId));
    let r = this.assets?.getAssetByName("boygirl");
    if (r?.content == null) return;
    ((this._readec785843ea9 = this.windowManager?.createWindow(
      "clothing change gender selection",
      "",
      HabboWindowType.CONTAINER,
      HabboWindowStyle.NULL,
      class_2094._r319397e0aa348e | class_2094._r7d6217e13feb31 | class_2094._r4884ed3c10147b | class_2094._r26338c8d88c4e5,
      new D(100, 100, 200, 200),
      null,
      0,
    )),
      this._readec785843ea9?.buildFromXML(r.content),
      this._readec785843ea9?.addEventListener(u.CLICK, this.var_938),
      this._readec785843ea9?.center());
    let t = this._readec785843ea9?.findChildByTag("close");
    (t != null && (t.procedure = this._r041f4fd7984679),
      (t = this._readec785843ea9?.findChildByName(a.const_224) ?? null),
      t?.addEventListener(u.CLICK, this.var_938),
      (t = this._readec785843ea9?.findChildByName(a.const_1339) ?? null),
      t?.addEventListener(u.CLICK, this.var_938));
  }
  hideGenderSelectionInterface() {
    (this._readec785843ea9?.dispose(), (this._readec785843ea9 = null));
  }
  _r041f4fd7984679 = n((e, r) => {
    e.type === u.CLICK && this.hideGenderSelectionInterface();
  }, "_r041f4fd7984679");
  var_938 = n((e) => {
    switch (e.target?.name ?? "") {
      case a.const_224:
        (this._r94828ca140b650(a.MALE), this.hideGenderSelectionInterface());
        break;
      case a.const_1339:
        (this._r94828ca140b650(a.const_140), this.hideGenderSelectionInterface());
        break;
      case "close":
      case "close_btn":
        this.hideGenderSelectionInterface();
        break;
    }
  }, "var_938");
  _r94828ca140b650(e) {
    this._r1515e6bde00451?.RoomWidgetLetUserInMessage(
      new RoomWidgetClothingChangeMessage(RoomWidgetClothingChangeMessage.REQUEST_EDITOR, e, this.var_344, this.var_4410, this.var_2440),
    );
  }
}
