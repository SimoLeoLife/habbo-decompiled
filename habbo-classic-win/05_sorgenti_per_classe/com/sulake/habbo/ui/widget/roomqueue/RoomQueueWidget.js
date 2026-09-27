// Extracted from HabboAirLauncher.deobf.js, line 325581.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/roomqueue/RoomQueueWidget.as
// Obfuscated name: _ie3ccaacf060e9f

class extends RoomWidgetBase {
  static {
    n(this, "RoomQueueWidget");
  }
  _window = null;
  _config;
  var_1632 = 0;
  _r8463aae6799446 = !1;
  _r8cbd57fa88e76c = "";
  _r1052e6dbc92ee1 = !1;
  constructor(e, r, t, i, s) {
    (super(e, r, t, i), (this._config = s));
  }
  dispose() {
    (this.removeWindow(), (this._config = null), super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetRoomQueueUpdateEvent.VISITOR_QUEUE_STATUS, this._r1f35b494d77c70),
      e.addEventListener?.(RoomWidgetRoomQueueUpdateEvent.SPECTATOR_QUEUE_STATUS, this._r1f35b494d77c70),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetRoomQueueUpdateEvent.VISITOR_QUEUE_STATUS, this._r1f35b494d77c70),
      e.removeEventListener?.(RoomWidgetRoomQueueUpdateEvent.SPECTATOR_QUEUE_STATUS, this._r1f35b494d77c70));
  }
  removeWindow() {
    (this._window?.dispose(), (this._window = null));
  }
  _r1f35b494d77c70 = n((e) => {
    e != null &&
      (e.isActive && ((this._r8cbd57fa88e76c = e.type), (this.var_1632 = e.position)),
      (this._r8463aae6799446 = e.var_4493),
      (this._r1052e6dbc92ee1 = e.var_4259),
      this.localizations?._r43eae9731f5b27(
        "room.queue.position",
        "position",
        this.var_1632.toString(),
      ),
      this.localizations?._r43eae9731f5b27(
        "room.queue.position.hc",
        "position",
        this.var_1632.toString(),
      ),
      this.localizations?._r43eae9731f5b27(
        "room.queue.spectator.position",
        "position",
        this.var_1632.toString(),
      ),
      this.localizations?._r43eae9731f5b27(
        "room.queue.spectator.position.hc",
        "position",
        this.var_1632.toString(),
      ),
      this.showInterface());
  }, "_r1f35b494d77c70");
  createWindow() {
    if (this._window != null) return !0;
    let e = this.assets?.getAssetByName("room_queue");
    if (
      ((this._window = this.windowManager?.buildFromXML(e?.content)), this._window == null)
    )
      return !1;
    this._window.visible = !1;
    let r = this._window.findChildByTag("close");
    return (
      r?.addEventListener(u.CLICK, this._r77beb1f846b062),
      (r = this._window.findChildByName("cancel_button")),
      r?.addEventListener(u.CLICK, this._r77beb1f846b062),
      (r = this._window.findChildByName("link_text")),
      r?.addEventListener(u.CLICK, this.openLink),
      (r = this._window.findChildByName("change_button")),
      r?.addEventListener(u.CLICK, this._rd7a2debfe8e913),
      !0
    );
  }
  showInterface() {
    if (!this.createWindow() || this._window == null) return;
    let e = this._window.findChildByName("info_text");
    if (e != null)
      switch (this._r8cbd57fa88e76c) {
        case RoomWidgetRoomQueueUpdateEvent.VISITOR_QUEUE_STATUS:
          e.caption = this._r1052e6dbc92ee1 ? "${room.queue.position.hc}" : "${room.queue.position}";
          break;
        case RoomWidgetRoomQueueUpdateEvent.SPECTATOR_QUEUE_STATUS:
          e.caption = this._r1052e6dbc92ee1
            ? "${room.queue.spectator.position.hc}"
            : "${room.queue.spectator.position}";
          break;
      }
    let r = this._window.findChildByName("club_container");
    (r != null && (r.visible = !this._r8463aae6799446), (this._window.visible = !0));
  }
  _r77beb1f846b062 = n((e) => {
    this._r1515e6bde00451 != null &&
      (this._r1515e6bde00451.RoomWidgetLetUserInMessage(new RoomWidgetRoomQueueMessage(RoomWidgetRoomQueueMessage.const_1327)), this.removeWindow());
  }, "_r77beb1f846b062");
  openLink = n((e) => {
    this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetRoomQueueMessage(RoomWidgetRoomQueueMessage.const_1352));
  }, "openLink");
  _rd7a2debfe8e913 = n((e) => {
    if (this._r1515e6bde00451 == null) return;
    let r;
    (this._r8cbd57fa88e76c === RoomWidgetRoomQueueUpdateEvent.VISITOR_QUEUE_STATUS
      ? (r = new RoomWidgetRoomQueueMessage(RoomWidgetRoomQueueMessage.CHANGE_TO_SPECTATOR_QUEUE))
      : (r = new RoomWidgetRoomQueueMessage(RoomWidgetRoomQueueMessage.CHANGE_TO_VISITOR_QUEUE)),
      this._r1515e6bde00451.RoomWidgetLetUserInMessage(r),
      this.removeWindow());
  }, "_rd7a2debfe8e913");
}
