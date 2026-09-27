// Estratto da HabboAirLauncher.deobf.js, riga 316838.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/ecotronbox/EcotronBoxFurniWidget.as
// Nome offuscato: _i89745755cb7a5e

class a extends RoomWidgetBase {
  static {
    n(this, "EcotronBoxFurniWidget");
  }
  static _rd7f6a323d840d1 = 100;
  static _r8634183c488b34 = 100;
  _window = null;
  var_344 = -1;
  _text = "";
  var_63 = !1;
  var_490 = !1;
  _furniTypeName = "ecotron_box";
  _interfaceMapByFurniTypeName = new B();
  constructor(e, r, t = null) {
    (super(e, r, t),
      this._interfaceMapByFurniTypeName.add("", "ecotronbox_card"),
      this._interfaceMapByFurniTypeName.add("ecotron_box", "ecotronbox_card"),
      this._interfaceMapByFurniTypeName.add("matic_box", "ecotronbox_card_furnimatic"));
  }
  dispose() {
    (this.hideInterface(), super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetEcotronBoxDataUpdateEvent.UPDATE_PACKAGEINFO, this._r89f0690ee52550),
      e.addEventListener?.(RoomWidgetEcotronBoxDataUpdateEvent.const_128, this._r89f0690ee52550),
      e.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_912, this.onRoomObjectRemoved),
      e.addEventListener?.(RoomWidgetPresentDataUpdateEvent.UPDATE_PACKAGEINFO, this._r64e73ae690cf34),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetEcotronBoxDataUpdateEvent.UPDATE_PACKAGEINFO, this._r89f0690ee52550),
      e.removeEventListener?.(RoomWidgetEcotronBoxDataUpdateEvent.const_128, this._r89f0690ee52550),
      e.removeEventListener?.(RoomWidgetPresentDataUpdateEvent.UPDATE_PACKAGEINFO, this._r64e73ae690cf34),
      e.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_912, this.onRoomObjectRemoved));
  }
  _r89f0690ee52550 = n((e) => {
    switch ((this.hideInterface(), e.type)) {
      case RoomWidgetEcotronBoxDataUpdateEvent.UPDATE_PACKAGEINFO:
        ((this.var_490 = !1),
          (this.var_344 = e.objectId),
          (this._text = e.text),
          (this.var_63 = e.controller),
          (this._furniTypeName = e.furniTypeName),
          this.showInterface());
        break;
      case RoomWidgetEcotronBoxDataUpdateEvent.const_128:
        if (!this.var_490) return;
        ((this.var_344 = e.objectId),
          this.showInterface(),
          this.showIcon(e._r9b96440f25f1f8),
          this.showDescription(e.text),
          this._r97b4577c9e5db8(!1));
        break;
    }
  }, "_r89f0690ee52550");
  onRoomObjectRemoved = n((e) => {
    e.id === this.var_344 && this.hideInterface();
  }, "onRoomObjectRemoved");
  _r64e73ae690cf34 = n((e) => {
    e.type === RoomWidgetPresentDataUpdateEvent.UPDATE_PACKAGEINFO && this.hideInterface();
  }, "_r64e73ae690cf34");
  showIcon(e) {
    let r = e ?? new A(1, 1, !0, 4294967295);
    if (this._window == null) return;
    let t = this._window.findChildByName("ecotronbox_card_preview");
    if (t == null) return;
    let i = (t.width - r.width) / 2,
      s = (t.height - r.height) / 2;
    (t.bitmap == null && (t.bitmap = new A(t.width, t.height, !0, 16777215)),
      t.bitmap.fillRect(t.bitmap.rect, 16777215),
      t.bitmap.copyPixels(r, r.rect, new E(i, s), null, null, !1));
  }
  showDescription(e) {
    let r = this._window?.findChildByName("ecotronbox_card_msg");
    r != null && (r.caption = e);
  }
  showInterface() {
    if (this.var_344 < 0) return;
    let e = this._interfaceMapByFurniTypeName.getValue(this._furniTypeName) ?? "ecotronbox_card",
      r = this.assets?.getAssetByName(e);
    if (r?.content == null) return;
    (this._window?.dispose(),
      (this._window = this.windowManager?.createWindow(
        "ecotronboxcardui_container",
        "",
        HabboWindowType.CONTAINER,
        HabboWindowStyle.DEFAULT,
        class_2094._r4884ed3c10147b | class_2094._r26338c8d88c4e5,
        new D(a._rd7f6a323d840d1, a._r8634183c488b34, 2, 2),
        null,
        0,
      )),
      this._window?.buildFromXML(r.content));
    let t = this._window?.findChildByName("ecotronbox_card_date");
    (t != null && (t.caption = this._text),
      this._window
        ?.findChildByName("ecotronbox_card_btn_close")
        ?.addEventListener(u.CLICK, this._r7972d0b08e8494),
      this._r97b4577c9e5db8(!0));
  }
  _r97b4577c9e5db8(e) {
    let r = this._window?.findChildByName("ecotronbox_card_btn_open");
    r != null &&
      (this.var_63 && e
        ? ((r.visible = !0), r.addEventListener(u.CLICK, this._r7972d0b08e8494))
        : (r.visible = !1));
  }
  hideInterface() {
    (this._window?.dispose(),
      (this._window = null),
      this.var_490 || (this.var_344 = -1),
      (this._text = ""),
      (this.var_63 = !1));
  }
  sendOpen() {
    this.var_490 ||
      this.var_344 === -1 ||
      !this.var_63 ||
      ((this.var_490 = !0),
      this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetEcotronBoxOpenMessage(RoomWidgetEcotronBoxOpenMessage.const_1345, this.var_344)));
  }
  _r7972d0b08e8494 = n((e) => {
    switch (e.target?.name ?? "") {
      case "ecotronbox_card_btn_open":
        this.sendOpen();
        break;
      case "ecotronbox_card_btn_close":
      default:
        ((this.var_490 = !1), this.hideInterface());
        break;
    }
  }, "_r7972d0b08e8494");
}
