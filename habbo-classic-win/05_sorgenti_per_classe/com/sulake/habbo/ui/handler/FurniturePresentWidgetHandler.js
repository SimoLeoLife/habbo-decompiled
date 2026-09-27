// Estratto da HabboAirLauncher.deobf.js, riga 330315.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/FurniturePresentWidgetHandler.as
// Nome offuscato: _i5297e33f5eb882

class a {
  static {
    n(this, "FurniturePresentWidgetHandler");
  }
  static const_86 = "floor";
  static TYPE_WALLPAPER = "wallpaper";
  static TYPE_LANDSCAPE = "landscape";
  static TYPE_POSTER = "poster";
  var_1271 = !1;
  _container = null;
  var_344 = -1;
  _name = "";
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.FURNI_PRESENT_WIDGET;
  }
  get container() {
    return this._container;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this.var_1271 = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_PRESENT_WIDGET, RoomWidgetPresentOpenMessage.const_1388];
  }
  RoomWidgetLetUserInMessage(e) {
    switch (e.type) {
      case RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_PRESENT_WIDGET: {
        if (!(e instanceof RoomWidgetFurniToWidgetMessage)) break;
        let r = e,
          t = this._container?.roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.id, r.category);
        if (t == null) break;
        let i = t.getStringToStringMap();
        if (i == null) break;
        this.var_344 = r.id;
        let s = i.getString(RoomObjectVariableEnum.FURNITURE_DATA);
        s == null && (s = "");
        let o = i.getString(RoomObjectVariableEnum.FURNITURE_PURCHASER_NAME),
          d = i.getString(RoomObjectVariableEnum.FURNITURE_PURCHASER_FIGURE),
          c = i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191),
          f = i.getString(RoomObjectVariableEnum.FURNITURE_EXTRAS),
          l = this._container?.roomEngine?._r5db1beeb89d785(c, new k(180), 32, null, 0, f),
          b = i._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_TRUSTED_SENDER) === 1;
        this._container?.events?.dispatchEvent?.(
          new RoomWidgetPresentDataUpdateEvent(
            RoomWidgetPresentDataUpdateEvent.UPDATE_PACKAGEINFO,
            r.id,
            s,
            this._container?._rc2337883ff003a(t) ?? !1,
            l?.data ?? null,
            o,
            d,
            !1,
            !1,
            b,
          ),
        );
        break;
      }
      case RoomWidgetPresentOpenMessage.const_1388: {
        if (!(e instanceof RoomWidgetPresentOpenMessage)) break;
        let r = e;
        if (r.objectId !== this.var_344) return null;
        (this._container?._r2eac8239a09fe7?._r49fac7bf5a9e98(r.objectId),
          this._container?.roomEngine?._r54e6f8624b1462(
            this._container.roomEngine.activeRoomId,
            r.objectId,
            RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
            RoomObjectVariableEnum.const_1064,
            1,
          ));
        break;
      }
    }
    return null;
  }
  imageReady(e, r) {
    this.disposed ||
      this._container == null ||
      this._container.events?.dispatchEvent?.(new RoomWidgetPresentDataUpdateEvent(RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_IMAGE, 0, this._name, !1, r));
  }
  imageFailed(e) {}
  _r8f2a14a26f6017() {
    return [RoomSessionPresentEvent.ROOM_SESSION_PRESENT_OPENED];
  }
  _r9b1b0209eb1b5a(e) {
    if (!(e == null || this._container?.events == null))
      switch (e.type) {
        case RoomSessionPresentEvent.ROOM_SESSION_PRESENT_OPENED: {
          let r = e,
            t = null,
            i = null,
            s = null;
          ((this._name = ""),
            r.itemType === class_1803.PRODUCT_TYPE_STUFF
              ? (t = this._container.sessionDataManager?.getFloorItemData(r.classId) ?? null)
              : r.itemType === class_1803.PRODUCT_TYPE_ITEM &&
                (t = this._container.sessionDataManager?.getWallItemData(r.classId) ?? null));
          let o = !1;
          if (r._r176bfeda3ea21e) {
            let c = this._container.roomEngine?._ra1f5cb56d0c2d8(
              this._container._r2eac8239a09fe7?.roomId ?? 0,
              r._r2c53800a52f206,
              RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
            );
            c != null && (o = this._container._rc2337883ff003a(c));
          }
          let d = null;
          switch (r.itemType) {
            case class_1803.PRODUCT_TYPE_ITEM:
              if (t != null)
                switch (t.className) {
                  case a.const_86:
                    s = new RoomWidgetPresentDataUpdateEvent(
                      RoomWidgetPresentDataUpdateEvent.const_1073,
                      0,
                      this._container.localization?.getLocalization("inventory.furni.item.floor.name") ?? "",
                      o,
                      null,
                    );
                    break;
                  case a.TYPE_LANDSCAPE:
                    s = new RoomWidgetPresentDataUpdateEvent(
                      RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_LANDSCAPE,
                      0,
                      this._container.localization?.getLocalization("inventory.furni.item.landscape.name") ??
                        "",
                      o,
                      null,
                    );
                    break;
                  case a.TYPE_WALLPAPER:
                    s = new RoomWidgetPresentDataUpdateEvent(
                      RoomWidgetPresentDataUpdateEvent.UPDATE_CONTENTS_WALLPAPER,
                      0,
                      this._container.localization?.getLocalization("inventory.furni.item.wallpaper.name") ??
                        "",
                      o,
                      null,
                    );
                    break;
                  case a.TYPE_POSTER: {
                    let c = null;
                    (r._raeb033db5aa083.indexOf("poster") === 0 &&
                      (c = `${Number.parseInt(r._raeb033db5aa083.replace("poster", ""), 10)}`),
                      (i = this._container.roomEngine?.getWallItemDataByName(r.classId, this, c) ?? null),
                      (d = this._container.sessionDataManager?.getProductData(r._raeb033db5aa083) ?? null),
                      d != null ? (this._name = d.name) : t != null && (this._name = t.localizedName),
                      i != null && (s = new RoomWidgetPresentDataUpdateEvent(RoomWidgetPresentDataUpdateEvent.const_128, 0, this._name, o, i.data)));
                    break;
                  }
                  default:
                    ((i = this._container.roomEngine?.getWallItemDataByName(r.classId, this) ?? null),
                      t != null && (this._name = t.localizedName),
                      i != null && (s = new RoomWidgetPresentDataUpdateEvent(RoomWidgetPresentDataUpdateEvent.const_128, 0, this._name, o, i.data)));
                    break;
                }
              break;
            case class_1803.PRODUCT_TYPE_CLUB:
              s = new RoomWidgetPresentDataUpdateEvent(
                RoomWidgetPresentDataUpdateEvent.const_470,
                0,
                this._container.localization?.getLocalization("widget.furni.present.hc") ?? "",
                !1,
                null,
              );
              break;
            default: {
              if (r._rc6f3ed5751b766 === class_1803.PRODUCT_TYPE_PET) {
                let c = r._r48777043299a0c;
                if (c != null && c.length > 0) {
                  let f = new class_3800(c),
                    l = 64;
                  (f.typeId === class_3447.const_862 && (l = 32),
                    (i =
                      this._container.roomEngine?.getPetImage(
                        f.typeId,
                        f.paletteId,
                        f.color,
                        new k(90),
                        l,
                        this,
                        !0,
                        0,
                        f.customParts,
                      ) ?? null));
                }
              }
              (i == null &&
                (i = this._container.roomEngine?._r5db1beeb89d785(r.classId, new k(90), 64, this) ?? null),
                (d = this._container.sessionDataManager?.getProductData(r._raeb033db5aa083) ?? null),
                d != null ? (this._name = d.name) : t != null && (this._name = t.localizedName),
                i != null && (s = new RoomWidgetPresentDataUpdateEvent(RoomWidgetPresentDataUpdateEvent.const_128, 0, this._name, o, i.data)));
              break;
            }
          }
          s != null &&
            ((s.classId = r.classId),
            (s.itemType = r.itemType),
            (s._r2c53800a52f206 = r._r2c53800a52f206),
            (s._r176bfeda3ea21e = r._r176bfeda3ea21e),
            (s._rc6f3ed5751b766 = r._rc6f3ed5751b766),
            this._container.events.dispatchEvent?.(s));
          break;
        }
      }
  }
  update() {}
}
