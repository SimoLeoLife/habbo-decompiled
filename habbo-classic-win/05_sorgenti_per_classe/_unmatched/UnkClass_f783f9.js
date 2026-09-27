// Extracted from HabboAirLauncher.deobf.js, line 327616.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if783f98ab3517a

class {
  static {
    n(this, "UnkClass_f783f9");
  }
  _disposed = !1;
  _container = null;
  var_17 = null;
  _r72c3d5ea2e6046 = null;
  _r7aeb6544f2d9bc = null;
  get disposed() {
    return this._disposed;
  }
  set widget(e) {
    this.var_17 = e;
  }
  get type() {
    return RoomWidgetEnum.AVATAR_INFO;
  }
  get container() {
    return this._container;
  }
  get roomEngine() {
    return this._container?.roomEngine ?? null;
  }
  get _r2eac8239a09fe7() {
    return this._container?._r2eac8239a09fe7 ?? null;
  }
  get friendList() {
    return this._container?.friendList ?? null;
  }
  dispose() {
    this._disposed ||
      (this._r7aeb6544f2d9bc != null &&
        this._container?.connection != null &&
        this._container.connection.removeMessageEvent?.(this._r7aeb6544f2d9bc),
      (this.container = null),
      (this.var_17 = null),
      this._r72c3d5ea2e6046?.dispose(),
      (this._r72c3d5ea2e6046 = null),
      (this._r7aeb6544f2d9bc = null),
      (this._disposed = !0));
  }
  set container(e) {
    (this._container?.toolbar?.events != null &&
      this._container.toolbar.events.removeEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this._r275b0421c293ad),
      this._container?.sessionDataManager?.events != null &&
        this._container.sessionDataManager.events.removeEventListener?.(
          A8.NAME_UPDATE,
          this._r2b67cdcf6a6618,
        ),
      this._container?.roomSessionManager?.events != null &&
        (this._container.roomSessionManager.events.removeEventListener?.(
          iI.PET_STATUS_UPDATE,
          this._r27bcd8758c15d5,
        ),
        this._container.roomSessionManager.events.removeEventListener?.(
          aI.PET_LEVEL_UPDATE,
          this._rf668c1d4b49c78,
        ),
        this._container.roomSessionManager.events.removeEventListener?.(
          Zy.NEST_BREEDING_SUCCESS,
          this._rcc9e0b9d9e1efd,
        )),
      this._container?.connection != null &&
        this._r72c3d5ea2e6046 != null &&
        this._container.connection.removeMessageEvent?.(this._r72c3d5ea2e6046),
      this._container?.connection != null &&
        this._r7aeb6544f2d9bc != null &&
        this._container.connection.removeMessageEvent?.(this._r7aeb6544f2d9bc),
      (this._container = e),
      e != null &&
        (this._r72c3d5ea2e6046 == null && (this._r72c3d5ea2e6046 = new class_3175(this._r9479258a9511e5)),
        this._r7aeb6544f2d9bc == null && (this._r7aeb6544f2d9bc = new class_3839(this._rde530a309dc6c5)),
        e.toolbar?.events?.addEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this._r275b0421c293ad),
        e.sessionDataManager?.events?.addEventListener?.(A8.NAME_UPDATE, this._r2b67cdcf6a6618),
        e.roomSessionManager?.events?.addEventListener?.(iI.PET_STATUS_UPDATE, this._r27bcd8758c15d5),
        e.roomSessionManager?.events?.addEventListener?.(aI.PET_LEVEL_UPDATE, this._rf668c1d4b49c78),
        e.roomSessionManager?.events?.addEventListener?.(Zy.NEST_BREEDING_SUCCESS, this._rcc9e0b9d9e1efd),
        e.connection != null &&
          (e.connection.addMessageEvent?.(this._r72c3d5ea2e6046),
          e.connection.addMessageEvent?.(this._r7aeb6544f2d9bc))));
  }
  _rc3479181526e34() {
    return [
      RoomWidgetRoomObjectMessage.GET_OWN_CHARACTER_INFO,
      RoomWidgetUserActionMessage.START_NAME_CHANGE,
      RoomWidgetUserActionMessage.REQUEST_PET_UPDATE,
      RoomWidgetUseProductMessage.PET_PRODUCT,
      RoomWidgetUserActionMessage.REQUEST_BREED_PET,
      RoomWidgetUserActionMessage.HARVEST_PET,
      RoomWidgetUserActionMessage.REVIVE_PET,
      RoomWidgetUserActionMessage.COMPOST_PLANT,
    ];
  }
  _r8f2a14a26f6017() {
    return [H8.USER_DATA_UPDATED, N8.DANCE, RoomEngineUseProductEvent.USE_PRODUCT_FROM_INVENTORY, RoomEngineUseProductEvent.USE_PRODUCT_FROM_ROOM];
  }
  RoomWidgetLetUserInMessage(e) {
    if (e == null || this._container == null) return null;
    let t = (e instanceof RoomWidgetUserActionMessage ? e : null)?.userId ?? 0;
    switch (e.type) {
      case RoomWidgetRoomObjectMessage.GET_OWN_CHARACTER_INFO:
        this._r94ba7bab0f07e8();
        break;
      case RoomWidgetUserActionMessage.START_NAME_CHANGE:
        this._container.habboHelp?._r33333dae7d91f0();
        break;
      case RoomWidgetUserActionMessage.REQUEST_PET_UPDATE:
        this.var_17 != null && (this.var_17._rd55426668eb677 = !1);
        break;
      case RoomWidgetUseProductMessage.PET_PRODUCT: {
        if (!(e instanceof RoomWidgetUseProductMessage)) break;
        let i = e;
        this._container._r2eac8239a09fe7?._ra19afb8286db94(i._r2fdf1f24b1e612, i.petId);
        break;
      }
      case RoomWidgetUserActionMessage.HARVEST_PET:
        this._container._r2eac8239a09fe7?._rf3dc09fc3edb3f(t);
        break;
      case RoomWidgetUserActionMessage.COMPOST_PLANT: {
        let i =
            this._container.localization?.getLocalization("monsterplant.confirm.title.compost") ??
            "${monsterplant.confirm.title.compost}",
          s =
            this._container.localization?.getLocalization("monsterplant.confirm.desc.compost") ??
            "${monsterplant.confirm.desc.compost}";
        this.var_17?.windowManager?.confirm(i, s, 0, (o, d) => {
          (o.dispose(),
            d.type === y.const_1300 && this._container?._r2eac8239a09fe7?._r4fd619055f8d62(t));
        });
        break;
      }
      case RoomWidgetUserActionMessage.REQUEST_BREED_PET:
        this._r866a534c6664be(t);
        break;
    }
    return null;
  }
  _r9b1b0209eb1b5a(e) {
    switch (e.type) {
      case H8.USER_DATA_UPDATED: {
        let r = e;
        for (let t of r.addedUsers)
          this._container?.sessionDataManager?.isBlocked?.(t.webID) &&
            this._container._r2eac8239a09fe7?.getUserDataByIndex._r3fdc5483852a37(t._r2fdf1f24b1e612);
        this._container?.events?.dispatchEvent?.(new om());
        for (let t of r.addedUsers)
          (this.friendList?._rab99fafd046469().indexOf(t.name) ?? -1) > -1 &&
            this.var_17?._rb659bfb831cc90(t, t._r2fdf1f24b1e612);
        break;
      }
      case N8.DANCE: {
        let r = e,
          t =
            this._container?._r2eac8239a09fe7?.getUserDataByIndex._r1cacdcfc23a2de(
              this._container?.sessionDataManager?.userId ?? -1,
            ) ?? null;
        t != null &&
          r.userId === t._r2fdf1f24b1e612 &&
          this.var_17 != null &&
          (this.var_17.isDancing = r.danceStyle !== 0);
        break;
      }
      case RoomEngineUseProductEvent.USE_PRODUCT_FROM_INVENTORY: {
        let r = e;
        this._r0f2a2be84b5b0f(r._r73c3ff147480eb, r._r53b4ddaab70c75);
        break;
      }
      case RoomEngineUseProductEvent.USE_PRODUCT_FROM_ROOM:
        this._r60b2954eefca7a(e.objectId);
        break;
    }
  }
  update() {}
  getFurniData(e) {
    if (e == null) return null;
    let r = Math.trunc(e.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191) ?? -1);
    return this._container?.sessionDataManager?.getFloorItemData(r) ?? null;
  }
  _r94ba7bab0f07e8() {
    let e = this._container?.sessionDataManager?.userId ?? -1,
      r = this._container?.sessionDataManager?.userName ?? "",
      t = this._container?.sessionDataManager?.nameChangeAllowed ?? !1,
      i = e >= 0 ? (this._container?._r2eac8239a09fe7?.getUserDataByIndex._r1cacdcfc23a2de(e) ?? null) : null;
    i != null && this._container?.events?.dispatchEvent?.(new Qp(e, r, i.type, i._r2fdf1f24b1e612, t));
  }
  _r866a534c6664be(e) {
    if (this._container?._r2eac8239a09fe7 == null || this._container.roomEngine == null) return;
    let r = this._container._r2eac8239a09fe7.getUserDataByIndex._r0e420e8c38fe10(e, RoomObjectTypeEnum.OBJECT_TYPE_PET);
    if (r == null) return;
    let t = r.figure.split(" "),
      i = Number.parseInt(t[0] ?? "-1", 10);
    this._rc6e98789b686c4(
      this._container._r2eac8239a09fe7.roomId,
      e,
      i,
      r._r2fdf1f24b1e612,
      this._container.sessionDataManager?.userId ?? -1,
    );
  }
  _r0f2a2be84b5b0f(e, r) {
    if (this._container?._r2eac8239a09fe7 == null || this._container.roomEngine == null) return;
    let t = this._container.sessionDataManager?.getFloorItemData(r) ?? null;
    if (t == null) return;
    let i = t._r2bdd6e3cc1f573.split(" "),
      s = Number.parseInt(i[0] ?? "-1", 10);
    s !== -1 &&
      this._rf1d3c2bbddaa11(
        this._container._r2eac8239a09fe7.roomId,
        r,
        s,
        t.category,
        this._container.sessionDataManager?.userId ?? -1,
        e,
      );
  }
  _r60b2954eefca7a(e) {
    if (this._container?._r2eac8239a09fe7 == null || this._container.roomEngine == null) return;
    let r = this._container._r2eac8239a09fe7.roomId,
      t = this._container.roomEngine._ra1f5cb56d0c2d8(r, e, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
    if (t == null || !this._container._rc2337883ff003a(t)) return;
    let i = this.getFurniData(t);
    if (i == null) return;
    let s = i._r2bdd6e3cc1f573.split(" "),
      o = Number.parseInt(s[0] ?? "-1", 10);
    o !== -1 && this._rf1d3c2bbddaa11(r, e, o, i.category, this._container._r73fd72da7a633d(t));
  }
  _rf1d3c2bbddaa11(e, r, t, i, s, o = -1) {
    let d = [],
      c = this._container?.roomEngine?.getRoomObjectCount(e, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? 0,
      f = 7;
    for (let l = 0; l < c; l++) {
      let b = this._container?.roomEngine?.getRoomObjectWithIndex(e, l, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null,
        _ =
          b != null
            ? (this._container?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(b.getId()) ??
              null)
            : null;
      if (_ == null || _.type !== RoomObjectTypeEnum.OBJECT_TYPE_PET) continue;
      let h = !1;
      if (_.ownerId !== s) continue;
      _.hasSaddle && i === class_1901.PET_SADDLE && (h = !0);
      let p = _.figure.split(" ");
      Number.parseInt(p[0] ?? "-1", 10) === t &&
        ((i === class_1901.MONSTERPLANT_REVIVAL && !_.canRevive) ||
          (i === class_1901.MONSTERPLANT_REBREED &&
            (_.petLevel < f || _.canRevive || _.canBreed)) ||
          (i === class_1901.MONSTERPLANT_FERTILIZE && (_.petLevel >= f || _.canRevive)) ||
          d.push(new UseProductItem(_._r2fdf1f24b1e612, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER, _.name, r, b.getId(), o, h)));
    }
    this.var_17?._r0172c4a9008c39(d);
  }
  _rc6e98789b686c4(e, r, t, i, s) {
    let o = [],
      d = this._container?.roomEngine?.getRoomObjectCount(e, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? 0;
    for (let c = 0; c < d; c++) {
      let f = this._container?.roomEngine?.getRoomObjectWithIndex(e, c, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null,
        l =
          f != null
            ? (this._container?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(f.getId()) ??
              null)
            : null;
      if (
        l == null ||
        l.type !== RoomObjectTypeEnum.OBJECT_TYPE_PET ||
        !l.canBreed ||
        (!l.hasBreedingPermission && l.ownerId !== s) ||
        (this._container?._r2eac8239a09fe7?.getUserDataByIndex._r1cacdcfc23a2de(l.ownerId) ?? null) ==
          null
      )
        continue;
      let _ = l.figure.split(" ");
      Number.parseInt(_[0] ?? "-1", 10) === t &&
        l._r2fdf1f24b1e612 !== i &&
        o.push(new UseProductItem(l._r2fdf1f24b1e612, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER, l.name, i, f.getId()));
    }
    this.var_17?._r2d9aeebdbb9e9e(o);
  }
  _r514addada6b35e(e) {
    let r = this._container?._r2eac8239a09fe7?.roomId ?? 0,
      t = this._container?.roomEngine?.getRoomObjectCount(r, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? 0;
    for (let i = 0; i < t; i++) {
      let s = this._container?.roomEngine?.getRoomObjectWithIndex(r, i, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null,
        o =
          s != null
            ? (this._container?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(s.getId()) ??
              null)
            : null;
      if (o != null && o.type === RoomObjectTypeEnum.OBJECT_TYPE_PET && o.webID === e) return o;
    }
    return null;
  }
  _r9479258a9511e5 = n((e) => {
    this._container?.events?.dispatchEvent?.(new RoomWidgetInventoryUpdatedMessage(RoomWidgetInventoryUpdatedMessage.INVENTORY_UPDATED));
  }, "_r9479258a9511e5");
  _r275b0421c293ad = n((e) => {
    e._re9c693c8b69b04 === Me.MEMENU &&
      (this._container?.config?.getBoolean("simple.memenu.enabled")
        ? this.var_17?._r5b964ce180bb09()
        : this._r94ba7bab0f07e8());
  }, "_r275b0421c293ad");
  _r2b67cdcf6a6618 = n((e) => {
    this.var_17?.close();
  }, "_r2b67cdcf6a6618");
  _r27bcd8758c15d5 = n((e) => {
    let r = this._r514addada6b35e(e.petId);
    r != null &&
      this._container?.events?.dispatchEvent?.(
        new qp(
          r._r2fdf1f24b1e612,
          e.canBreed,
          e.canHarvest,
          e.canRevive,
          e.hasBreedingPermission,
        ),
      );
  }, "_r27bcd8758c15d5");
  _rf668c1d4b49c78 = n((e) => {
    let r = this._r514addada6b35e(e.petId);
    r != null && this._container?.events?.dispatchEvent?.(new Zp(r._r2fdf1f24b1e612, e.level));
  }, "_rf668c1d4b49c78");
  _rcc9e0b9d9e1efd = n((e) => {
    this.var_17?._r0296becf03c7cd(e.petId, e._r4420bc8bc1a910);
  }, "_rcc9e0b9d9e1efd");
  _rde530a309dc6c5 = n((e) => {
    let r = e.getParser().code;
    (r === 4 || r === 5) && this._container?.sessionDataManager?.giveRespectFailed();
  }, "_rde530a309dc6c5");
}
