// Extracted from HabboAirLauncher.deobf.js, line 330996.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7c92299dcbbf61

class {
  static {
    n(this, "UnkClass_7c9229");
  }
  _container = null;
  var_1271 = !1;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.FURNI_CHOOSER;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this.var_1271 = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetRequestWidgetMessage.REQUEST_FURNI_CHOOSER, RoomWidgetRequestWidgetMessage.REQUEST_FURNI_CHOOSER_ADD, RoomWidgetRoomObjectMessage.const_1117];
  }
  RoomWidgetLetUserInMessage(e) {
    if (e == null || this._container == null) return null;
    switch (e.type) {
      case RoomWidgetRequestWidgetMessage.REQUEST_FURNI_CHOOSER:
        this._rf1fcb92ff64594();
        break;
      case RoomWidgetRequestWidgetMessage.REQUEST_FURNI_CHOOSER_ADD: {
        if (!(e instanceof RoomWidgetRequestWidgetMessage)) break;
        let r = e,
          t =
            this._container.roomEngine?._ra1f5cb56d0c2d8(
              this._container.roomEngine.activeRoomId,
              r.id,
              r.category,
            ) ?? null,
          i = this._r3a4e6c13a34cde(t, r.category);
        i != null &&
          this._container.events?.dispatchEvent?.(
            new RoomWidgetChooserContentEvent(RoomWidgetChooserContentEvent.FURNI_CHOOSER_CONTENT_ADD, [i], this._container.sessionDataManager?.isAnyRoomController ?? !1),
          );
        break;
      }
      case RoomWidgetRoomObjectMessage.const_1117: {
        if (!(e instanceof RoomWidgetRoomObjectMessage)) break;
        let r = e;
        (r.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE || r.category === RoomObjectCategoryEnum.const_909) &&
          this._container.roomEngine?._r5def02e220e83a(
            this._container._r2eac8239a09fe7?.roomId ?? 0,
            r.id,
            r.category,
          );
        break;
      }
    }
    return null;
  }
  _r3a4e6c13a34cde(e, r) {
    if (e == null || this._container == null) return null;
    let t, i, s, o;
    if (r === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE) {
      let d = e.getStringToStringMap();
      return d == null
        ? null
        : ((t = d._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191)),
          (i = this._container.sessionDataManager?.getFloorItemData(t) ?? null),
          (s = i?.localizedName ?? e.getType()),
          (o = d.getString(RoomObjectVariableEnum.FURNITURE_OWNER_NAME)),
          new ChooserItem(e.getId(), RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE, s, o));
    }
    if (r === RoomObjectCategoryEnum.const_909) {
      let d = e.getType(),
        c = e.getStringToStringMap();
      if (c == null) return null;
      if (d.indexOf("poster") === 0) {
        let f = Number.parseInt(d.replace("poster", ""), 10);
        s =
          this._container.localization?.getLocalization(`poster_${f}_name`, `poster_${f}_name`) ??
          `poster_${f}_name`;
      } else
        ((t = c._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191)),
          (i = this._container.sessionDataManager?.getWallItemData(t) ?? null),
          (s = i != null && i.localizedName.length > 0 ? i.localizedName : d));
      return (
        (o = c.getString(RoomObjectVariableEnum.FURNITURE_OWNER_NAME)),
        new ChooserItem(e.getId(), RoomObjectCategoryEnum.const_909, s, o)
      );
    }
    return null;
  }
  _rf1fcb92ff64594() {
    if (
      this._container?._r2eac8239a09fe7 == null ||
      this._container.roomEngine == null ||
      this._container._r2eac8239a09fe7.getUserDataByIndex == null
    )
      return;
    let e = this._container._r2eac8239a09fe7.roomId,
      r = [],
      t = this._container.roomEngine.getRoomObjectCount(e, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
    for (let i = 0; i < t; i += 1) {
      let s = this._container.roomEngine.getRoomObjectWithIndex(e, i, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE),
        o = this._r3a4e6c13a34cde(s, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
      o != null && r.push(o);
    }
    t = this._container.roomEngine.getRoomObjectCount(e, RoomObjectCategoryEnum.const_909);
    for (let i = 0; i < t; i += 1) {
      let s = this._container.roomEngine.getRoomObjectWithIndex(e, i, RoomObjectCategoryEnum.const_909),
        o = this._r3a4e6c13a34cde(s, RoomObjectCategoryEnum.const_909);
      o != null && r.push(o);
    }
    this._container.events?.dispatchEvent?.(
      new RoomWidgetChooserContentEvent(RoomWidgetChooserContentEvent.FURNI_CHOOSER_CONTENT, r, this._container.sessionDataManager?.isAnyRoomController ?? !1),
    );
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
}
