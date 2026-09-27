// Extracted from HabboAirLauncher.deobf.js, line 332642.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/PetPackageFurniWidgetHandler.as
// Obfuscated name: _i71b57f6149e2ea

class {
  static {
    n(this, "PetPackageFurniWidgetHandler");
  }
  var_1271 = !1;
  _container = null;
  var_344 = -1;
  get type() {
    return RoomWidgetEnum.FURNI_PET_PACKAGE_WIDGET;
  }
  get disposed() {
    return this.var_1271;
  }
  set container(e) {
    this._container = e;
  }
  _rc3479181526e34() {
    return [RoomWidgetOpenPetPackageMessage.WIDGET_MESSAGE_OPEN_PET_PACKAGE];
  }
  RoomWidgetLetUserInMessage(e) {
    switch (e.type) {
      case RoomWidgetOpenPetPackageMessage.WIDGET_MESSAGE_OPEN_PET_PACKAGE: {
        if (!(e instanceof RoomWidgetOpenPetPackageMessage)) break;
        let r = e;
        this._container?._r2eac8239a09fe7?._r87b5fc151728c2(r.objectId, r.name);
        break;
      }
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [RoomSessionPetPackageEvent.ROOM_SESSION_OPEN_PET_PACKAGE_REQUESTED, RoomSessionPetPackageEvent.ROOM_SESSION_OPEN_PET_PACKAGE_RESULT];
  }
  _r9b1b0209eb1b5a(e) {
    if (this._container?.events != null)
      switch (e.type) {
        case RoomSessionPetPackageEvent.ROOM_SESSION_OPEN_PET_PACKAGE_REQUESTED: {
          let r = e;
          this.var_344 = r.objectId;
          let t = this.getPetImage(r.figureData),
            i = r.figureData == null ? -1 : r.figureData.typeId;
          this._container.events.dispatchEvent?.(
            new RoomWidgetPetPackageUpdateEvent(RoomWidgetPetPackageUpdateEvent.const_233, this.var_344, t, -1, null, i),
          );
          break;
        }
        case RoomSessionPetPackageEvent.ROOM_SESSION_OPEN_PET_PACKAGE_RESULT: {
          let r = e;
          ((this.var_344 = r.objectId),
            this._container.events.dispatchEvent?.(
              new RoomWidgetPetPackageUpdateEvent(
                RoomWidgetPetPackageUpdateEvent.OPEN_PET_PACKAGE_RESULT,
                this.var_344,
                null,
                r._r008c105caa5e72,
                r._r549e697cdd257f,
                -1,
              ),
            ));
          break;
        }
      }
  }
  update() {}
  dispose() {
    ((this.var_1271 = !0), (this._container = null), (this.var_344 = -1));
  }
  imageReady(e, r) {
    this._container?.events?.dispatchEvent?.(
      new RoomWidgetPetPackageUpdateEvent(RoomWidgetPetPackageUpdateEvent.OPEN_PET_PACKAGE_UPDATE_PET_IMAGE, this.var_344, r, -1, null, -1),
    );
  }
  imageFailed(e) {}
  getPetImage(e) {
    if (e == null) return null;
    let r = Number.parseInt(e.color, 16);
    return (
      this._container?.roomEngine?.getPetImage(
        e.typeId,
        e.paletteId,
        r,
        new k(90),
        64,
        this,
        !0,
        0,
      )?.data ?? null
    );
  }
}
