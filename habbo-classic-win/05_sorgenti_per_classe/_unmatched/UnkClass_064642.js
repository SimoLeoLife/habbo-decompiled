// Extracted from HabboAirLauncher.deobf.js, line 330087.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0646423a40ec22

class {
  static {
    n(this, "UnkClass_064642");
  }
  var_1271 = !1;
  _container = null;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.DIMMER;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this.var_1271 = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_DIMMER_WIDGET, lm.WIDGET_MESSAGE_SAVE_DIMMER_PRESET, fm.CHANGE_STATE, m1.PREVIEW];
  }
  RoomWidgetLetUserInMessage(e) {
    switch (e.type) {
      case RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_DIMMER_WIDGET: {
        if (this._r8f4b8bdb278c04()) {
          if (!(e instanceof RoomWidgetFurniToWidgetMessage)) break;
          let r = e;
          this._container?._r2eac8239a09fe7?._rd78a93ddd78734(r.id);
        }
        break;
      }
      case lm.WIDGET_MESSAGE_SAVE_DIMMER_PRESET: {
        if (this._r8f4b8bdb278c04()) {
          if (!(e instanceof lm)) break;
          let r = e;
          this._container?._r2eac8239a09fe7?.sendRoomDimmerSavePresetMessage(
            r._r2c12a4fd09880b,
            r._r9c445ab20be08f,
            r.color,
            r.brightness,
            r.apply,
            r.objectId,
          );
        }
        break;
      }
      case fm.CHANGE_STATE: {
        if (this._r8f4b8bdb278c04()) {
          if (!(e instanceof fm)) break;
          let r = e;
          this._container?._r2eac8239a09fe7?._r1f03560fb6a298(r.objectId);
        }
        break;
      }
      case m1.PREVIEW: {
        let r = this._container?._r2eac8239a09fe7?.roomId ?? 0;
        if (!(e instanceof m1)) break;
        let t = e;
        if (this._container?.roomEngine == null) return null;
        this._container.roomEngine._rc46b85071fd02a(r, t.color, t.brightness, t.bgOnly);
        break;
      }
    }
    return null;
  }
  _r8f4b8bdb278c04() {
    let e = this._container?._r2eac8239a09fe7?.isRoomOwner ?? !1,
      r = (this._container?._r2eac8239a09fe7?._rea9739215487be ?? 0) >= RoomControllerLevelEnum.ROOM_CONTROLLER,
      t = this._container?.sessionDataManager?.isAnyRoomController ?? !1;
    return e || t || r;
  }
  _r8f2a14a26f6017() {
    return [RoomSessionDimmerPresetsEvent.ROOM_DIMMER_PRESETS, Zh.const_67, RoomEngineToWidgetEvent.REMOVE_DIMMER];
  }
  _r9b1b0209eb1b5a(e) {
    if (this._container?.events != null)
      switch (e.type) {
        case RoomSessionDimmerPresetsEvent.ROOM_DIMMER_PRESETS: {
          let r = e,
            t = new RoomWidgetDimmerUpdateEvent(RoomWidgetDimmerUpdateEvent.const_825);
          ((t._ree0dc0daf170e4 = r._ree0dc0daf170e4),
            (t.itemId = r.itemId),
            (t.isOn = r.isOn));
          for (let i = 0; i < r.presetCount; i++) {
            let s = r.getPreset(i);
            s != null && t.storePreset(s.id, s.type, s.color, s.light);
          }
          this._container.events.dispatchEvent?.(t);
          break;
        }
        case Zh.const_67: {
          let r = e,
            t = new dI(r.objectId, r.state, r._r906ad459546ee7, r.effectId, r.color, r.brightness);
          this._container.events.dispatchEvent?.(t);
          break;
        }
        case RoomEngineToWidgetEvent.REMOVE_DIMMER: {
          let r = e,
            t = new RoomWidgetDimmerUpdateEvent(RoomWidgetDimmerUpdateEvent.DIMMER_HIDE);
          ((t.itemId = r.objectId), this._container.events.dispatchEvent?.(t));
          break;
        }
      }
  }
  update() {}
}
