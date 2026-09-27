// Extracted from HabboAirLauncher.deobf.js, line 301029.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i423297daa5b4b3

class extends ObjectLogicBase {
  static {
    n(this, "UnkObjectLogicBaseSubclass_423297");
  }
  _r5c8f9e68a2dd0e = new rs();
  AssetLibrary = new RoomPlaneBitmapMaskParser();
  _r8541fa00be0fcc = new ColorTransitioner();
  _rcab0d36404d2dc = !1;
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_MOVE, RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_CLICK]);
  }
  dispose() {
    (super.dispose(),
      this._r5c8f9e68a2dd0e?.dispose(),
      (this._r5c8f9e68a2dd0e = null),
      this.AssetLibrary?.dispose(),
      (this.AssetLibrary = null),
      (this._r8541fa00be0fcc = null));
  }
  initialize(e) {
    if (
      e == null ||
      this.object == null ||
      this._r5c8f9e68a2dd0e == null ||
      !this._r5c8f9e68a2dd0e.initializeFromXML(e)
    )
      return;
    let r = this.object.getStringToStringMap();
    r != null &&
      (r.setString(RoomObjectVariableEnum.ROOM_PLANE_XML, e.toString()),
      r.setNumber(RoomObjectVariableEnum.ROOM_BACKGROUND_COLOR, 16777215),
      r.setNumber(RoomObjectVariableEnum.ROOM_FLOOR_VISIBILITY, 1),
      r.setNumber(RoomObjectVariableEnum.ROOM_WALL_VISIBILITY, 1),
      r.setNumber(RoomObjectVariableEnum.ROOM_LANDSCAPE_VISIBILITY, 1));
  }
  update(e) {
    if (
      (super.update(e),
      this._rb031b1504da6dc(e),
      this._rcab0d36404d2dc && this.object != null && this._r5c8f9e68a2dd0e != null)
    ) {
      let r = this.object.getStringToStringMap();
      if (r != null) {
        let t = this._r5c8f9e68a2dd0e.getXML();
        (r.setString(RoomObjectVariableEnum.ROOM_PLANE_XML, t.toString()),
          r.setNumber(RoomObjectVariableEnum.ROOM_FLOOR_HOLE_UPDATE_TIME, e),
          this._r5c8f9e68a2dd0e.initializeFromXML(t));
      }
      this._rcab0d36404d2dc = !1;
    }
  }
  processUpdateMessage(e) {
    if (e == null || this.object == null) return;
    let r = this.object.getStringToStringMap();
    if (r != null) {
      if (e instanceof RoomObjectRoomUpdateMessage) {
        this._rfb16f203e86668(e, r);
        return;
      }
      if (e instanceof gd) {
        this._r0c896f43f2a5d8(e, r);
        return;
      }
      if (e instanceof RoomObjectRoomPlaneVisibilityUpdateMessage) {
        this._r89c13fcfde8c37(e, r);
        return;
      }
      if (e instanceof RoomObjectRoomPlanePropertyUpdateMessage) {
        this._r3cac6925d9129d(e, r);
        return;
      }
      (e instanceof RoomObjectRoomFloorHoleUpdateMessage && this._r9ad34871451e27(e), e instanceof RoomObjectRoomColorUpdateMessage && this._r868b5eb59bea37(e, r));
    }
  }
  mouseEvent(e, r) {
    if (r == null || e == null || this.object == null || this._r5c8f9e68a2dd0e == null) return;
    let t = this.object.getStringToStringMap();
    if (t == null) return;
    let i = 0,
      s = e.RoomObjectStateChangeEvent;
    if (
      (s != null && s.indexOf("@") >= 0 && (i = Number.parseInt(s.slice(s.indexOf("@") + 1), 10)),
      i < 1 || i > this._r5c8f9e68a2dd0e._r5d845ae8dc989a)
    ) {
      e.type === UnkClass_fd7c12.ROLL_OUT && t.setNumber(RoomObjectVariableEnum.ROOM_SELECTED_PLANE, 0);
      return;
    }
    i -= 1;
    let o = this._r5c8f9e68a2dd0e._r19de74cbe6b168(i),
      d = this._r5c8f9e68a2dd0e._rd9dd14744f7fcf(i),
      c = this._r5c8f9e68a2dd0e._r52519f85b09d9f(i),
      f = this._r5c8f9e68a2dd0e._r873b7d53d9cbe6(i),
      l = this._r5c8f9e68a2dd0e._r5d2a261783db62(i);
    if (o == null || d == null || c == null || f == null) return;
    let b = d.length,
      _ = c.length;
    if (b === 0 || _ === 0) return;
    let h = r.getPlanePosition(new E(e.screenX, e.screenY), o, d, c);
    if (h == null) {
      t.setNumber(RoomObjectVariableEnum.ROOM_SELECTED_PLANE, 0);
      return;
    }
    let p = k.product(d, h.x / b) ?? new k(),
      m = k.product(c, h.y / _);
    if (m == null) {
      t.setNumber(RoomObjectVariableEnum.ROOM_SELECTED_PLANE, 0);
      return;
    }
    if ((p.add(m), p.add(o), h.x >= 0 && h.x < b && h.y >= 0 && h.y < _))
      (t.setNumber(RoomObjectVariableEnum.ROOM_SELECTED_X, p.x),
        t.setNumber(RoomObjectVariableEnum.ROOM_SELECTED_Y, p.y),
        t.setNumber(RoomObjectVariableEnum.ROOM_SELECTED_Z, p.z),
        t.setNumber(RoomObjectVariableEnum.ROOM_SELECTED_PLANE, i + 1));
    else {
      t.setNumber(RoomObjectVariableEnum.ROOM_SELECTED_PLANE, 0);
      return;
    }
    if (this._r11e12b4ff1ca8e == null) return;
    let v = "";
    if (e.type === UnkClass_fd7c12.var_370 || e.type === UnkClass_fd7c12.ROLL_OVER) v = RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_MOVE;
    else if (e.type === UnkClass_fd7c12.CLICK) v = RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_CLICK;
    else if (e.type === UnkClass_fd7c12._r9001c395573374) v = RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_DOWN;
    else return;
    if (l === es.PLANE_FLOOR) {
      this._r11e12b4ff1ca8e?.dispatchEvent?.(
        new RoomObjectTileMouseEvent(v, this.object, e.eventId, p.x, p.y, p.z, e.altKey, e.ctrlKey, e.shiftKey),
      );
      return;
    }
    if (l === es.PLANE_WALL || l === es.PLANE_LANDSCAPE) {
      let w = f.x + 90;
      w > 360 && (w -= 360);
      let I = (d.length * h.x) / b,
        C = (c.length * h.y) / _;
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWallMouseEvent(v, this.object, e.eventId, o, d, c, I, C, w));
    }
  }
  _rb031b1504da6dc(e) {
    this.object == null ||
      this._r8541fa00be0fcc == null ||
      (this._r8541fa00be0fcc.updateColor(e) &&
        this.object.getStringToStringMap()?.setNumber(RoomObjectVariableEnum.ROOM_BACKGROUND_COLOR, this._r8541fa00be0fcc.color));
  }
  _rfb16f203e86668(e, r) {
    switch (e.type) {
      case RoomObjectRoomUpdateMessage.ROOM_FLOOR_UPDATE:
        r.setString(RoomObjectVariableEnum.ROOM_FLOOR_TYPE, e.value);
        break;
      case RoomObjectRoomUpdateMessage.ROOM_WALL_UPDATE:
        r.setString(RoomObjectVariableEnum.ROOM_WALL_TYPE, e.value);
        break;
      case RoomObjectRoomUpdateMessage.ROOM_LANDSCAPE_UPDATE:
        r.setString(RoomObjectVariableEnum.ROOM_LANDSCAPE_TYPE, e.value);
        break;
    }
  }
  _r0c896f43f2a5d8(e, r) {
    if (this.AssetLibrary == null) return;
    let t = !1;
    switch (e.type) {
      case gd.ADD_MASK: {
        let i = e._rfc4ac0d3e6fa60 === gd.MASK_CATEGORY_HOLE ? RoomPlaneBitmapMaskData.MASK_CATEGORY_HOLE : RoomPlaneBitmapMaskData.MASK_CATEGORY_WINDOW;
        t = this.AssetLibrary.addMask(e._r0c058391653c77, e.maskType, e._rda96ad60b60561, i);
        break;
      }
      case gd.REMOVE_MASK:
        t = this.AssetLibrary._r82e2c6412d4695(e._r0c058391653c77);
        break;
    }
    if (t) {
      let i = this.AssetLibrary.getXML().toXMLString();
      r.setString(RoomObjectVariableEnum.ROOM_PLANE_MASK_XML, i);
    }
  }
  _r89c13fcfde8c37(e, r) {
    let t = e.visible ? 1 : 0;
    switch (e.type) {
      case RoomObjectRoomPlaneVisibilityUpdateMessage.const_1294:
        r.setNumber(RoomObjectVariableEnum.ROOM_FLOOR_VISIBILITY, t);
        break;
      case RoomObjectRoomPlaneVisibilityUpdateMessage.const_253:
        (r.setNumber(RoomObjectVariableEnum.ROOM_WALL_VISIBILITY, t), r.setNumber(RoomObjectVariableEnum.ROOM_LANDSCAPE_VISIBILITY, t));
        break;
    }
  }
  _r3cac6925d9129d(e, r) {
    switch (e.type) {
      case RoomObjectRoomPlanePropertyUpdateMessage.FLOOR_THICKNESS:
        r.setNumber(RoomObjectVariableEnum.ROOM_FLOOR_THICKNESS_MULTIPLIER, e.value);
        break;
      case RoomObjectRoomPlanePropertyUpdateMessage.WALL_THICKNESS:
        r.setNumber(RoomObjectVariableEnum.ROOM_WALL_THICKNESS_MULTIPLIER, e.value);
        break;
    }
  }
  _r9ad34871451e27(e) {
    if (this._r5c8f9e68a2dd0e != null)
      switch (e.type) {
        case RoomObjectRoomFloorHoleUpdateMessage.ADD_HOLE:
          (this._r5c8f9e68a2dd0e._r2013da28a384d9(e.id, e.x, e.y, e.width, e.height, e.invert),
            (this._rcab0d36404d2dc = !0));
          break;
        case RoomObjectRoomFloorHoleUpdateMessage.REMOVE_HOLE:
          (this._r5c8f9e68a2dd0e._r8ff1158f880ba5(e.id), (this._rcab0d36404d2dc = !0));
          break;
      }
  }
  _r868b5eb59bea37(e, r) {
    r.setNumber(RoomObjectVariableEnum.ROOM_COLORIZE_BG_ONLY, Number(e.bgOnly));
    let t = e.bgOnly ? e.color : 16777215,
      i = e.bgOnly ? e.light : 255;
    this._r8541fa00be0fcc?.startTransition(t, i, _ia411d8d8194a3a());
  }
}
