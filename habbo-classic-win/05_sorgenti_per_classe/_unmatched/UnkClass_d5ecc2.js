// Extracted from HabboAirLauncher.deobf.js, line 329664.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id5ecc21eb86b59

class a {
  static {
    n(this, "UnkClass_d5ecc2");
  }
  static _r03c027a109a51b = 5e3;
  _disposed = !1;
  _container = null;
  var_17 = null;
  var_36 = null;
  _r22962fb113372e = null;
  _rd546c8a94edfe3 = null;
  _r58a9bc67617964 = null;
  _rb4a2a105b95cf7 = null;
  _r0905b0c4c806f0 = null;
  _r1b50fe6ed9e6c4 = -1;
  get disposed() {
    return this._disposed;
  }
  get type() {
    return RoomWidgetEnum.FURNITURE_CONTEXT_MENU;
  }
  get container() {
    return this._container;
  }
  get widget() {
    return this.var_17;
  }
  set widget(e) {
    ((this.var_17 = e),
      this._container?.config?.getBoolean("mysterybox.tracker.active") &&
        this.var_17?._r46775e26eae67d());
  }
  set container(e) {
    (this._r87b9fe88a2021a(), (this._container = e));
    let r = e?.roomEngine?.events;
    r != null &&
      (r.addEventListener?.(RoomEngineToWidgetEvent.REQUEST_MONSTERPLANT_SEED_PLANT_CONFIRMATION_DIALOG, this._r020cc5cf800f8c),
      r.addEventListener?.(RoomEngineToWidgetEvent.REQUEST_PURCHASABLE_CLOTHING_CONFIRMATION_DIALOG, this._rfcd7a223ac924f),
      r.addEventListener?.(RoomEngineToWidgetEvent.REQUEST_MYSTERYBOX_OPEN_DIALOG, this._rd2473eb26b6ce3),
      r.addEventListener?.(RoomEngineToWidgetEvent.REQUEST_EFFECTBOX_OPEN_DIALOG, this._r80c459314ae921),
      r.addEventListener?.(RoomEngineToWidgetEvent.REQUEST_MYSTERYTROPHY_OPEN_DIALOG, this._r40ee8445eca4b6));
  }
  set connection(e) {
    this.var_36 !== e &&
      (this.var_36 != null &&
        this._r22962fb113372e != null &&
        this.var_36.removeMessageEvent(this._r22962fb113372e),
      this.var_36 != null &&
        this._rd546c8a94edfe3 != null &&
        this.var_36.removeMessageEvent(this._rd546c8a94edfe3),
      (this.var_36 = e),
      this.var_36 != null &&
        this._r22962fb113372e == null &&
        (this._r22962fb113372e = new class_2676(this._re73852736eb496)),
      this.var_36 != null &&
        this._rd546c8a94edfe3 == null &&
        (this._rd546c8a94edfe3 = new class_3164(this._rec020b54717121)),
      this.var_36 != null &&
        this._r22962fb113372e != null &&
        this.var_36.addMessageEvent(this._r22962fb113372e),
      this.var_36 != null &&
        this._rd546c8a94edfe3 != null &&
        this.var_36.addMessageEvent(this._rd546c8a94edfe3));
  }
  get roomEngine() {
    return this._container?.roomEngine ?? null;
  }
  get _r2eac8239a09fe7() {
    return this._container?._r2eac8239a09fe7 ?? null;
  }
  dispose() {
    this._disposed ||
      (this._r87b9fe88a2021a(),
      this.var_36 != null &&
        this._r22962fb113372e != null &&
        this.var_36.removeMessageEvent(this._r22962fb113372e),
      this.var_36 != null &&
        this._rd546c8a94edfe3 != null &&
        this.var_36.removeMessageEvent(this._rd546c8a94edfe3),
      (this._r22962fb113372e = null),
      (this._rd546c8a94edfe3 = null),
      (this.var_36 = null),
      (this.var_17 = null),
      this._r5d598f6a9205d4(),
      (this._disposed = !0));
  }
  getFurniData(e) {
    let r = this._container?.sessionDataManager,
      t = e?.getStringToStringMap() ?? null;
    if (r == null || t == null) return null;
    let i = t._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191);
    return r.getFloorItemData(i);
  }
  _raf456ff3cb6d8e(e, r, t, i) {
    this.var_36 != null &&
      ((this._r58a9bc67617964 = r),
      (this._rb4a2a105b95cf7 = t),
      (this._r0905b0c4c806f0 = i),
      (this._r1b50fe6ed9e6c4 = _ia411d8d8194a3a()),
      this.var_36.send(new UnkMessageComposer_1args_d7b33c(e)));
  }
  _rc3479181526e34() {
    return [RoomWidgetUseProductMessage.MONSTERPLANT_SEED];
  }
  RoomWidgetLetUserInMessage(e) {
    if (e == null) return null;
    switch (e.type) {
      case RoomWidgetUseProductMessage.MONSTERPLANT_SEED:
        e instanceof RoomWidgetUseProductMessage && this._container?._r2eac8239a09fe7?._r26f0b6932b58bf(e._r2fdf1f24b1e612);
        break;
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [RoomEngineToWidgetEvent.REQUEST_OPEN_FURNI_CONTEXT_MENU, RoomEngineToWidgetEvent.REQUEST_CLOSE_FURNI_CONTEXT_MENU];
  }
  _r9b1b0209eb1b5a(e) {
    if (this.var_17 == null) return;
    let r = e;
    if (r == null) return;
    let t = this._ra1f5cb56d0c2d8(r.objectId);
    if (t != null)
      switch (e.type) {
        case RoomEngineToWidgetEvent.REQUEST_OPEN_FURNI_CONTEXT_MENU:
          switch (r.contextMenu) {
            case class_3015.FRIEND_FURNITURE:
              this.var_17._r8b3b09f87378e3(t);
              break;
            case class_3015.MONSTERPLANT_SEED:
              this._container?._rc2337883ff003a(t) && this.var_17._r83d53604673498(t, r.category);
              break;
            case class_3015.MYSTERY_BOX:
              this.var_17._r9bdadfc67cb5ea(t);
              break;
            case class_3015.RANDOM_TELEPORT:
              this.var_17._r8d1efdb2017050(t, r.category);
              break;
            case class_3015.PURCHASABLE_CLOTHING:
              this.var_17._r9818f6c5e398a8(t, r.category);
              break;
          }
          break;
        case RoomEngineToWidgetEvent.REQUEST_CLOSE_FURNI_CONTEXT_MENU:
          this.var_17.hideContextMenu(t);
          break;
      }
  }
  update() {}
  _r3ddf6597a468ee(e) {
    return (
      this._container?.roomEngine?._r37626001a0be81(
        this._container._r2eac8239a09fe7?.roomId ?? 0,
        e,
        RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
        this._container.getFirstCanvasId(),
      ) ?? null
    );
  }
  _ra02c2649616756(e) {
    return (
      this._container?.roomEngine?.getRoomObjectScreenLocation(
        this._container._r2eac8239a09fe7?.roomId ?? 0,
        e,
        RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
        this._container.getFirstCanvasId(),
      ) ?? null
    );
  }
  _r718403e5b5e39e(e) {
    this._container?.navigator?._r32d169e0ccf735(e);
  }
  _r01cb94d6bafa14(e) {
    this.var_36?.send(new UnkMessageComposer_1args_e95634(e));
  }
  _r87b9fe88a2021a() {
    let e = this._container?.roomEngine?.events;
    (e != null &&
      (e.removeEventListener?.(RoomEngineToWidgetEvent.REQUEST_MONSTERPLANT_SEED_PLANT_CONFIRMATION_DIALOG, this._r020cc5cf800f8c),
      e.removeEventListener?.(RoomEngineToWidgetEvent.REQUEST_PURCHASABLE_CLOTHING_CONFIRMATION_DIALOG, this._rfcd7a223ac924f),
      e.removeEventListener?.(RoomEngineToWidgetEvent.REQUEST_MYSTERYBOX_OPEN_DIALOG, this._rd2473eb26b6ce3),
      e.removeEventListener?.(RoomEngineToWidgetEvent.REQUEST_EFFECTBOX_OPEN_DIALOG, this._r80c459314ae921),
      e.removeEventListener?.(RoomEngineToWidgetEvent.REQUEST_MYSTERYTROPHY_OPEN_DIALOG, this._r40ee8445eca4b6)),
      (this._container = null));
  }
  _ra1f5cb56d0c2d8(e) {
    return this._container?.roomEngine == null || this._container._r2eac8239a09fe7 == null
      ? null
      : this._container.roomEngine._ra1f5cb56d0c2d8(
          this._container._r2eac8239a09fe7.roomId,
          e,
          RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
        );
  }
  _re73852736eb496 = n((e) => {
    if (this.var_17 == null) return;
    let r = ClassUtils.getParser(e, class_4210);
    if (r == null) return;
    let t = this._ra1f5cb56d0c2d8(r?.objectId ?? -1);
    r != null &&
      t != null &&
      this.var_17.showGuildFurnitureContextMenu(
        t,
        r.guildId,
        r._rac546a5a9e4961,
        r._r8bc127202f7b5f,
        r._r87988445a266e9,
        r._r91e9d6381affd6,
      );
  }, "_re73852736eb496");
  _rec020b54717121 = n((e) => {
    let r = this._r4f2dd4b30fa977();
    if (this.var_36 == null || !r) {
      r || this._r5d598f6a9205d4();
      return;
    }
    let t = e.getParser()._r4e1654b72fcaa5;
    t == null ||
      this._r58a9bc67617964 == null ||
      t.indexOf(this._r58a9bc67617964) === -1 ||
      (this._rb4a2a105b95cf7 != null &&
        this._r0905b0c4c806f0 != null &&
        this.var_36.send(new UnkMessageComposer_2args_4a93ef(this._rb4a2a105b95cf7, this._r0905b0c4c806f0)),
      this._r5d598f6a9205d4());
  }, "_rec020b54717121");
  _r4f2dd4b30fa977() {
    return this._r1b50fe6ed9e6c4 < 0 ||
      this._rb4a2a105b95cf7 == null ||
      this._r0905b0c4c806f0 == null ||
      this._r58a9bc67617964 == null
      ? !1
      : _ia411d8d8194a3a() - this._r1b50fe6ed9e6c4 <= a._r03c027a109a51b;
  }
  _r5d598f6a9205d4() {
    ((this._r58a9bc67617964 = null),
      (this._rb4a2a105b95cf7 = null),
      (this._r0905b0c4c806f0 = null),
      (this._r1b50fe6ed9e6c4 = -1));
  }
  _r020cc5cf800f8c = n((e) => {
    let r = this._ra1f5cb56d0c2d8(e.objectId);
    this.var_17 != null &&
      r != null &&
      this._container?._rc2337883ff003a(r) &&
      this.var_17.showPlantSeedConfirmationDialog(r);
  }, "_r020cc5cf800f8c");
  _rfcd7a223ac924f = n((e) => {
    let r = this._ra1f5cb56d0c2d8(e.objectId);
    this.var_17 != null &&
      r != null &&
      this._container?._rc2337883ff003a(r) &&
      this.var_17._r104924a8b9e9d7(r);
  }, "_rfcd7a223ac924f");
  _rd2473eb26b6ce3 = n((e) => {
    let r = this._ra1f5cb56d0c2d8(e.objectId);
    this.var_17 != null && r != null && this.var_17.showMysteryBoxOpenDialog(r);
  }, "_rd2473eb26b6ce3");
  _r80c459314ae921 = n((e) => {
    let r = this._ra1f5cb56d0c2d8(e.objectId);
    this.var_17 != null && r != null && this.var_17._r8b619e9e84a77f(r);
  }, "_r80c459314ae921");
  _r40ee8445eca4b6 = n((e) => {
    let r = this._ra1f5cb56d0c2d8(e.objectId);
    this.var_17 != null && r != null && this.var_17._rcbcaaa3cf494f5(r);
  }, "_r40ee8445eca4b6");
}
