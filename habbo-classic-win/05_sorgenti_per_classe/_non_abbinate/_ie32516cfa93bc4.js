// Estratto da HabboAirLauncher.deobf.js, riga 332260.

class {
  static {
    n(this, "_ie32516cfa93bc4");
  }
  var_1271 = !1;
  _container = null;
  _inventory = null;
  _toolbar = null;
  _catalog = null;
  _messenger = null;
  var_17 = null;
  constructor() {}
  set widget(e) {
    this.var_17 = e;
  }
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.ME_MENU_WIDGET;
  }
  set container(e) {
    (this._container != null &&
      (this._inventory?.events.removeEventListener?.(HabboInventoryEffectsEvent.const_1391, this._r24d86286e99d06),
      this._inventory?.events.removeEventListener?.(HabboInventoryHabboClubEvent.const_1089, this._rc2d9d61535da87),
      this._toolbar?.events.removeEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this.IIDHabboCatalog),
      this._container.habboHelp?.events.removeEventListener?.(HabboHelpTutorialEvent.const_1112, this._r1566b802891ebe),
      this._container.habboHelp?.events.removeEventListener?.(HabboHelpTutorialEvent.const_145, this._r1566b802891ebe),
      this._container.catalog?.events.removeEventListener?.(Mo.CREDIT_BALANCE, this._r607b3db6c10025),
      this._messenger?.events.removeEventListener?.(MiniMailMessageEvent.NEW_MESSAGE_NOTIFICATION, this._re456d05d70012e),
      this._messenger?.events.removeEventListener?.(MiniMailMessageEvent.const_809, this.class_2189)),
      (this._container = e),
      this._container != null &&
        ((this._inventory = this._container.inventory),
        this._inventory?.events.addEventListener?.(HabboInventoryEffectsEvent.const_1391, this._r24d86286e99d06),
        this._inventory?.events.addEventListener?.(HabboInventoryHabboClubEvent.const_1089, this._rc2d9d61535da87),
        (this._toolbar = this._container.toolbar),
        this._toolbar?.events.addEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this.IIDHabboCatalog),
        this._container.habboHelp?.events.addEventListener?.(HabboHelpTutorialEvent.const_1112, this._r1566b802891ebe),
        this._container.habboHelp?.events.addEventListener?.(HabboHelpTutorialEvent.const_145, this._r1566b802891ebe),
        (this._catalog = this._container.catalog),
        this._catalog?.events.addEventListener?.(Mo.CREDIT_BALANCE, this._r607b3db6c10025),
        (this._messenger = this._container.messenger),
        this._messenger?.events.addEventListener?.(MiniMailMessageEvent.NEW_MESSAGE_NOTIFICATION, this._re456d05d70012e),
        this._messenger?.events.addEventListener?.(MiniMailMessageEvent.const_809, this.class_2189)));
  }
  get container() {
    return this._container;
  }
  dispose() {
    (this._container?.avatarEditor?.close(_ic723960da8d613._r4a110ddb22fcf1),
      (this.var_1271 = !0),
      (this.container = null),
      (this._inventory = null),
      (this._toolbar = null),
      (this._catalog = null),
      (this._messenger = null));
  }
  _rc3479181526e34() {
    return [
      Jl.const_372,
      sc.const_468,
      n_.WIDGET_MESSAGE_CHANGE_POSTURE,
      nJ.const_1244,
      RoomWidgetSelectEffectMessage.const_796,
      RoomWidgetSelectEffectMessage.const_1318,
      RoomWidgetSelectEffectMessage.const_1075,
      s_.const_410,
      v1.const_998,
      sJ.const_829,
      RoomWidgetNavigateToRoomMessage.WIDGET_MESSAGE_NAVIGATE_TO_ROOM,
      RoomWidgetNavigateToRoomMessage.WIDGET_MESSAGE_NAVIGATE_HOME,
      RoomWidgetAvatarEditorMessage.const_198,
      RoomWidgetAvatarEditorMessage.WIDGET_MESSAGE_GET_WARDROBE,
      A1e.SELECT_OUTFIT,
      bI.SHOW_OWN_ROOMS,
      RoomWidgetRequestWidgetMessage.REQUEST_ME_MENU,
      RoomWidgetMeMenuMessage.const_570,
      RoomWidgetGetSettingsMessage.GET_SETTINGS,
      RoomWidgetStoreSettingsMessage.STORE_ALL_SETTINGS,
      RoomWidgetStoreSettingsMessage.STORE_SOUND_SETTING,
      RoomWidgetStoreSettingsMessage.PREVIEW_SOUND_SETTING,
      RoomWidgetAvatarEditorMessage.const_614,
      RoomWidgetRequestWidgetMessage.REQUEST_EFFECTS,
    ];
  }
  RoomWidgetLetUserInMessage(e) {
    if (e == null) return null;
    switch (e.type) {
      case RoomWidgetRequestWidgetMessage.REQUEST_ME_MENU: {
        if (this._container?.toolbar?.events != null) {
          let r = new HabboToolbarEvent(HabboToolbarEvent.TOOLBAR_CLICK);
          ((r._re9c693c8b69b04 = Me.MEMENU), this._container.toolbar.events.dispatchEvent?.(r));
        }
        break;
      }
      case Jl.const_372: {
        if (!(e instanceof Jl)) break;
        let r = e;
        this._container?._r2eac8239a09fe7?._r6e27274f7e1fce(r.animation.ordinal);
        break;
      }
      case sc.const_468: {
        if (!(e instanceof sc)) break;
        let r = e;
        this._container?._r2eac8239a09fe7?._r30bc5499d7b3f1(r.style);
        break;
      }
      case n_.WIDGET_MESSAGE_CHANGE_POSTURE: {
        if (!(e instanceof n_)) break;
        let r = e;
        this._container?._r2eac8239a09fe7?._rfb5e330b42c7cc(r.posture);
        break;
      }
      case nJ.const_1244: {
        let r = this._inventory?._r60766c255d6b8b() ?? [];
        this._container?.events?.dispatchEvent?.(new sm(r));
        break;
      }
      case RoomWidgetSelectEffectMessage.const_796: {
        if (!(e instanceof RoomWidgetSelectEffectMessage)) break;
        let r = e;
        this._inventory?.setEffectSelected(r.effectType);
        break;
      }
      case RoomWidgetSelectEffectMessage.const_1318: {
        if (!(e instanceof RoomWidgetSelectEffectMessage)) break;
        let r = e;
        this._inventory?._r4f260cb2c62d21(r.effectType);
        break;
      }
      case v1.const_998: {
        if (!(e instanceof v1)) break;
        e.pageKey === v1.CATALOG_CLUB && this._catalog?.openClubCenter();
        break;
      }
      case s_.const_410: {
        if (!(e instanceof s_)) break;
        switch (e._r4a91c80f4f2a04) {
          case s_.INVENTORY_EFFECTS:
            this._catalog?.openCatalogPage(CatalogPageName.CATALOG_PAGE_SPECIAL_EFFECTS);
            break;
          case s_.INVENTORY_BADGES:
            this._inventory?._rf93ea073fdcb45(class_2106.BADGES);
            break;
          case s_.INVENTORY_FURNITURE:
            this._inventory?._rf93ea073fdcb45(class_2106.FURNITURE);
            break;
          case s_.INVENTORY_CLOTHES:
            break;
          default:
            break;
        }
        break;
      }
      case RoomWidgetSelectEffectMessage.const_1075:
      case sJ.const_829:
        this._inventory?._rddf4cd2390c8eb(!0);
        break;
      case RoomWidgetNavigateToRoomMessage.WIDGET_MESSAGE_NAVIGATE_HOME:
        this._container?.navigator?.goToHomeRoom();
        break;
      case bI.SHOW_OWN_ROOMS:
        this._container?.navigator?.showOwnRooms();
        break;
      case RoomWidgetMeMenuMessage.const_570: {
        if (this._container?.events == null) return null;
        if (this._inventory != null) {
          let t = this._container.sessionDataManager?.hasClub ?? !1;
          this._container.events.dispatchEvent?.(
            new Kp(
              this._inventory.clubPeriods,
              this._inventory.clubDays,
              this._inventory._rf3a9b3d6915b1c,
              t,
              this._inventory.clubLevel,
            ),
          );
        }
        let r = this._catalog?.getPurse();
        if (
          (r != null && this._container.events.dispatchEvent?.(new RoomWidgetPurseUpdateEvent(RoomWidgetPurseUpdateEvent.CREDIT_BALANCE, r.credits)),
          this._container._r2eac8239a09fe7?.getUserDataByIndex != null && this._container.roomEngine != null)
        ) {
          let t = this._container.sessionDataManager?.userId ?? -1,
            i = this._container._r2eac8239a09fe7.getUserDataByIndex._r1cacdcfc23a2de(t);
          if (i == null) return null;
          this._container.roomEngine.selectAvatar(0, i._r2fdf1f24b1e612);
        }
        break;
      }
      case RoomWidgetAvatarEditorMessage.const_198:
        (this._container?.avatarEditor?._rdaf967f79ea08a(_ic723960da8d613._r4a110ddb22fcf1, null, null, !0),
          this._container?.avatarEditor?._rb825ef6be7b35c(_ic723960da8d613._r4a110ddb22fcf1),
          this._container?.habboHelp?.events.dispatchEvent?.(new HabboHelpTutorialEvent(HabboHelpTutorialEvent.DONE_AVATAR_EDITOR_OPENING)));
        break;
      case RoomWidgetGetSettingsMessage.GET_SETTINGS:
        this._container?.events?.dispatchEvent?.(
          new RoomWidgetSettingsUpdateEvent(
            RoomWidgetSettingsUpdateEvent.const_1025,
            this._container.musicController?._rb9df644ab4c279 ?? 1,
            this._container.musicController?._r3ebcfbd6f36b12 ?? 1,
            this._container.musicController?._ref967bb06ebc0c ?? 1,
          ),
        );
        break;
      case RoomWidgetStoreSettingsMessage.STORE_SOUND_SETTING: {
        if (!(e instanceof RoomWidgetStoreSettingsMessage)) break;
        let r = e;
        this._container?.musicController != null &&
          ((this._container.musicController._rb9df644ab4c279 = r._rb9df644ab4c279),
          (this._container.musicController._r3ebcfbd6f36b12 = r._r3ebcfbd6f36b12),
          (this._container.musicController._ref967bb06ebc0c = r._ref967bb06ebc0c),
          this._container.events?.dispatchEvent?.(
            new RoomWidgetSettingsUpdateEvent(
              RoomWidgetSettingsUpdateEvent.const_1025,
              this._container.musicController._rb9df644ab4c279,
              this._container.musicController._r3ebcfbd6f36b12,
              this._container.musicController._ref967bb06ebc0c,
            ),
          ));
        break;
      }
      case RoomWidgetStoreSettingsMessage.PREVIEW_SOUND_SETTING: {
        if (!(e instanceof RoomWidgetStoreSettingsMessage)) break;
        let r = e;
        (this._container?.musicController?._r87d0112e1011e2(
          r._ref967bb06ebc0c,
          r._r3ebcfbd6f36b12,
          r._rb9df644ab4c279,
        ),
          this._container?.events?.dispatchEvent?.(
            new RoomWidgetSettingsUpdateEvent(
              RoomWidgetSettingsUpdateEvent.const_1025,
              this._container.musicController?._rb9df644ab4c279 ?? 1,
              this._container.musicController?._r3ebcfbd6f36b12 ?? 1,
              this._container.musicController?._ref967bb06ebc0c ?? 1,
            ),
          ));
        break;
      }
      case RoomWidgetAvatarEditorMessage.const_614:
        this._container?.habboHelp?.events.dispatchEvent?.(new HabboHelpTutorialEvent(HabboHelpTutorialEvent.DONE_AVATAR_EDITOR_CLOSING));
        break;
      default:
        break;
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
  IIDHabboCatalog = n((e) => {
    if (!(this.disposed || this._container?.events == null) && e.type === HabboToolbarEvent.TOOLBAR_CLICK)
      switch (e._re9c693c8b69b04) {
        case Me.MEMENU:
          break;
      }
  }, "IIDHabboCatalog");
  _r24d86286e99d06 = n((e = null) => {
    let r = this._inventory?._r60766c255d6b8b() ?? [];
    this._container?.events?.dispatchEvent?.(new sm(r));
  }, "_r24d86286e99d06");
  _rc2d9d61535da87 = n((e = null) => {
    if (this._inventory != null) {
      let r = this._container?.sessionDataManager?.hasClub ?? !1;
      this._container?.events?.dispatchEvent?.(
        new Kp(
          this._inventory.clubPeriods,
          this._inventory.clubDays,
          this._inventory._rf3a9b3d6915b1c,
          r,
          this._inventory.clubLevel,
        ),
      );
    }
  }, "_rc2d9d61535da87");
  _r607b3db6c10025 = n((e) => {
    this._container?.events?.dispatchEvent?.(new RoomWidgetPurseUpdateEvent(RoomWidgetPurseUpdateEvent.CREDIT_BALANCE, e.balance));
  }, "_r607b3db6c10025");
  _r1566b802891ebe = n((e) => {
    switch (e.type) {
      case HabboHelpTutorialEvent.const_145:
        this._container?.events?.dispatchEvent?.(new RoomWidgetTutorialEvent(RoomWidgetTutorialEvent.const_145));
        break;
      case HabboHelpTutorialEvent.const_1112:
        this._container?.events?.dispatchEvent?.(new RoomWidgetTutorialEvent(RoomWidgetTutorialEvent.const_1000));
        break;
    }
  }, "_r1566b802891ebe");
  _re456d05d70012e = n((e) => {
    this._container?.events?.dispatchEvent?.(new RoomWidgetMiniMailUpdateEvent(RoomWidgetMiniMailUpdateEvent.NEW_MESSAGE_NOTIFICATION));
  }, "_re456d05d70012e");
  class_2189 = n((e) => {
    this._container?.events?.dispatchEvent?.(new RoomWidgetMiniMailUpdateEvent(RoomWidgetMiniMailUpdateEvent.const_700));
  }, "class_2189");
}
