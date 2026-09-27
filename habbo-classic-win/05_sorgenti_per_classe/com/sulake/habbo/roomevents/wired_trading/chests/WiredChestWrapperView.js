// Extracted from HabboAirLauncher.deobf.js, line 372064.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/chests/WiredChestWrapperView.as
// Obfuscated name: _ia0fd33fc73fb76

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._windowManager = r;
    ((this._window = this._windowManager.buildFromXML(
      this.var_63.assets.getAssetByName("chest_generic_xml")?.content,
      a.DESKTOP_WINDOW_LAYER,
    )),
      (this._r8c326506854b57 = this._window.width - this.chestContents.width),
      (this._r0a8975f35ae4af =
        this._window.height -
        this.chestContents.height -
        this.footer.height -
        this.header.height),
      this.closeButton.addEventListener(u.CLICK, this.onWindowClose),
      this.lockInfoButton.addEventListener(u.CLICK, this._r10f5e7fcd4fe79),
      this.withdrawAllButton.addEventListener(u.CLICK, this._r145e32a951f4c5),
      this.startDepositButton.addEventListener(u.CLICK, this._r4a65a29cfd3dee),
      this.viewLogsButton.addEventListener(u.CLICK, this._rdc699093a5be58),
      this.lockChestCheckbox.addEventListener(y.const_587, this._r034b46d6d3078a),
      this.lockChestCheckbox.addEventListener(y.const_774, this.onAttemptUnlockChest));
    for (let t of [this.lockChestCheckbox, this.autoLockChestCheckbox])
      (t.addEventListener(y.const_238, this._r740b6265f51971),
        t.addEventListener(y.const_1217, this._r740b6265f51971));
    (this.capacityInput.addEventListener(u.CLICK_AWAY, this._r740b6265f51971),
      this.capacityInput.addEventListener(sr.const_1081, this._r8ddfb164e222ba),
      this.capacityInput.addEventListener(y.WINDOW_EVENT_CHANGE, this._rc3d5c5fe8a009e),
      this.maxCapacityUpgradeButton.addEventListener(u.CLICK, this._rc551d94a1d59b0),
      this.settingsButton.addEventListener(u.CLICK, this._r7072ed42e87c2d),
      this.notificationSettingsButton.addEventListener(u.CLICK, this.onClickNotificationSettings),
      (this.var_637 = this._window.findChildByName("lock_info_bubble")),
      this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER)?.addChild(this.var_637),
      (this.var_637.visible = !1),
      this.var_637.addEventListener(y.const_210, this._re92aff65337e91),
      this._window.addEventListener(y.const_755, this.onResizeWindow),
      this.show(null, null, 0, !1, !1),
      this.hide());
  }
  static {
    n(this, "WiredChestWrapperView");
  }
  static const_1325 = "locked";
  static AUTO_LOCK_KEY = "auto_lock";
  static CAPACITY_KEY = "capacity";
  static CONTENTS_COUNT_KEY = "contents_count";
  static CAPACITY_LEVEL_KEY = "capacity_level";
  static CHEST_NAME_KEY = "chest_name";
  static CHEST_DESC_KEY = "chest_desc";
  static const_1332 = "everyone_can_open";
  static const_775 = "everyone_can_donate";
  static STATE_CONTROL_MODE = "state_control_mode";
  static IS_WIRED_ENABLED = "is_wired_enabled";
  static NOTIFY_MODE = "notify_mode";
  static PREVIEW_MODE_KEY = "preview_mode";
  static PREVIEW_AMOUNT_KEY = "preview_amount";
  static DESKTOP_WINDOW_LAYER = 1;
  _disposed = !1;
  _window;
  var_637;
  _r87cfaccc242eab = null;
  var_428 = 0;
  var_497 = null;
  var_741 = !1;
  var_2665 = !1;
  var_185 = null;
  _rd2968aab7f6da7 = -1;
  _ignoreCheckboxSelectedEvents = !1;
  _ignoreCapacityChangeEvents = !1;
  _r5732c2f1f42a09 = !1;
  _r76cb11d73abc54 = !1;
  _r2aacb10cb2b316 = -1;
  _r52ebee417f5b1b = -1;
  _r8c326506854b57;
  _r0a8975f35ae4af;
  _chestSettings = null;
  _chestNotificationSettings = null;
  var_102 = null;
  onResizeWindow = n(() => {
    this._r76cb11d73abc54 ||
      (this.chestContents.height =
        this._window.height - this._r0a8975f35ae4af - this.footer.height - this.header.height);
  }, "onResizeWindow");
  _r7072ed42e87c2d = n(() => {
    let e = this.getStuffDataMap();
    e == null ||
      this.var_428 === 0 ||
      this.var_185 == null ||
      this._r1c04ced9d88591.onEdit(
        this.var_428,
        this.var_185.type,
        this.var_497.getStringToStringMap()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191),
        this.isStarterChest,
        e,
      );
  }, "_r7072ed42e87c2d");
  onClickNotificationSettings = n(() => {
    let e = this.getStuffDataMap();
    e == null ||
      this.var_428 === 0 ||
      this.var_185 == null ||
      this._r285a1f300b1aba.onEdit(this.var_428, this.var_185.type, e);
  }, "onClickNotificationSettings");
  get isStarterChest() {
    let e = this.var_497?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191) ?? 0,
      r = this.var_63.sessionDataManager.getFloorItemData(e);
    if (r == null) return !1;
    let t = this.var_63.getProperty("wired.chests_starter_infix");
    return t !== "" && r.className.indexOf(t) !== -1;
  }
  _rc551d94a1d59b0 = n(() => {
    this.var_428 === 0 ||
      this.var_497 == null ||
      (this._r87cfaccc242eab == null && (this._r87cfaccc242eab = new WiredChestUpgradeConfirmationView(this.var_63)),
      this._r87cfaccc242eab.initialize(
        this.var_428,
        this.var_185.type,
        this.var_497.getStringToStringMap()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191),
        this._r2b3e385eb11fb5,
      ),
      this._r87cfaccc242eab.show());
  }, "_rc551d94a1d59b0");
  get _r039727dcdb4f36() {
    return this.var_497;
  }
  _rdc699093a5be58 = n(() => {
    this.var_63.send(new UnkMessageComposer_3args_c9dcc5(this.var_428, TransactionConfig.PAGE_SIZE, 1));
  }, "_rdc699093a5be58");
  _r4a65a29cfd3dee = n(() => {
    this.var_63.send(new UnkMessageComposer_1args_9a110d(this.var_428));
  }, "_r4a65a29cfd3dee");
  _r145e32a951f4c5 = n(() => {
    this.var_63._r41f5cc7d3516ce.windowManager.confirm(
      "${wiredchests.withdraw_all.confirm.title}",
      "${wiredchests.withdraw_all.confirm.desc}",
      0,
      this._rcdb0efa51170a2,
    );
  }, "_r145e32a951f4c5");
  _rcdb0efa51170a2 = n((e, r) => {
    (e.dispose(), r.type === y.const_1300 && this.var_63.send(new UnkMessageComposer_1args_d98c80(this.var_428)));
  }, "_rcdb0efa51170a2");
  _re92aff65337e91 = n(() => {
    this.var_637.visible = !1;
  }, "_re92aff65337e91");
  _r10f5e7fcd4fe79 = n(() => {
    ((this.var_637.visible = !0), this.relocateBubbleAndFocus());
  }, "_r10f5e7fcd4fe79");
  relocateBubbleAndFocus() {
    let e = this.lockInfoButton.rectangle;
    ((this.var_637.x = e.x + e.width + 3),
      (this.var_637.y = e.y + 1 + e.height / 2 - this.var_637.height / 2),
      this.var_637.activate());
  }
  onWindowClose = n((e) => {
    e.type === u.CLICK && this.hide();
  }, "onWindowClose");
  isShowing() {
    return this._window != null && this._window.parent != null;
  }
  get _r154af520fc218d() {
    return this.var_428;
  }
  show(e, r, t, i, s) {
    ((this.var_497 = r),
      (this.var_428 = t),
      (this.var_741 = i),
      (this.var_2665 = s),
      this.var_185 != null &&
        this.var_185 !== e &&
        (this.var_185.clear(),
        this.var_185._r66a1da9835e6c4 &&
          ((this._r2aacb10cb2b316 = this.chestContents.width),
          (this._r52ebee417f5b1b = this.chestContents.height)),
        this._chestSettings?.isShowing() && this._chestSettings.hide(),
        this._chestNotificationSettings?.isShowing() && this._chestNotificationSettings.hide()),
      (this.var_185 = e),
      this._window.parent == null &&
        this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER)?.addChild(this._window),
      e != null
        ? (this.resetChestCaches(),
          this.setSubController(e),
          this.updateLayout(),
          this.updateUIOptions(),
          this.updateUI(),
          (this.var_637.visible = !1),
          this._window.activate())
        : this.setSubController(null));
  }
  resetChestCaches() {
    this._rd2968aab7f6da7 = -1;
  }
  _rcc84c42ecc031d() {
    (this.resetChestCaches(),
      this.isShowing() && !this._r4b0f4dcd9b6c6f && !this.isVisibleForEveryone
        ? this.hide()
        : (this.updateLayout(), this.updateUIOptions(), this.updateUI()));
  }
  get _r2b3e385eb11fb5() {
    let e = this.getStuffDataMap();
    return e == null ? 0 : Number(e.getValue(a.CAPACITY_LEVEL_KEY) ?? 0);
  }
  get maxCapacity() {
    if (this._rd2968aab7f6da7 !== -1) return this._rd2968aab7f6da7;
    let e =
      this.var_185 != null && this.var_185.type === class_4148.TYPE_COIN ? "coins" : "furni";
    if (this.isStarterChest)
      return (
        (this._rd2968aab7f6da7 = this.var_63.getInteger(`wired.${e}_chest.starter_capacity`, 0)),
        this._rd2968aab7f6da7
      );
    let r = this.var_63.getInteger(`wired.${e}_chest.initial_capacity`, 0),
      t = this.var_63.getInteger(`wired.${e}_chest.upgrade_capacity`, 0);
    return ((this._rd2968aab7f6da7 = r + t * this._r2b3e385eb11fb5), this._rd2968aab7f6da7);
  }
  getStuffDataMap() {
    return this.var_497?.getStringToStringMap()?._r51b8bfd516ad9d(RoomObjectVariableEnum.FURNITURE_DATA) ?? null;
  }
  hide() {
    (this.isShowing() &&
      (this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER)?.removeChild(this._window),
      (this.var_637.visible = !1)),
      this.setSubController(null),
      this.var_63._rb37506db84c349(),
      (this.var_428 = 0),
      (this.var_497 = null),
      this.var_185 != null && (this.var_185.clear(), (this.var_185 = null)),
      this.resetChestCaches(),
      this._chestSettings?.hide(),
      this._chestNotificationSettings?.hide());
  }
  get isVisibleForEveryone() {
    let e = this.getStuffDataMap();
    return e != null && e.getValue(a.const_1332) === "1";
  }
  updateLayout() {
    if (this.var_185 == null || this.var_497 == null) return;
    let e = this.getStuffDataMap();
    if (e == null) {
      ((this._ignoreCheckboxSelectedEvents = !1), (this._ignoreCapacityChangeEvents = !1));
      return;
    }
    let r = e.getValue(a.IS_WIRED_ENABLED) === "1";
    ((this._r76cb11d73abc54 = !0),
      this._r4b0f4dcd9b6c6f
        ? r
          ? ((this.settingsButton.visible = !0),
            (this.notificationSettingsButton.visible = !0),
            (this.lockingOptions.visible = !0),
            (this.capacityOptions.visible = !0),
            (this.capacityOverrideContainer.visible = !0),
            (this.upgradeCapacityContainer.visible = !0),
            (this.itemCountText.visible = !1),
            (this.itemCountTextBottom.visible = !1),
            (this.lockInfoButton.visible = !0),
            (this.viewLogsButton.visible = !0),
            (this.withdrawAllButton.visible = !0),
            (this.startDepositButton.caption = "${wiredchests.start_deposit}"))
          : ((this.settingsButton.visible = !0),
            (this.notificationSettingsButton.visible = !0),
            (this.lockingOptions.visible = !1),
            (this.capacityOptions.visible = !0),
            (this.capacityOverrideContainer.visible = !1),
            (this.upgradeCapacityContainer.visible = !0),
            (this.itemCountText.visible = !0),
            (this.itemCountTextBottom.visible = !1),
            (this.lockInfoButton.visible = !1),
            (this.viewLogsButton.visible = !0),
            (this.withdrawAllButton.visible = !0),
            (this.startDepositButton.caption = "${wiredchests.start_deposit}"))
        : ((this.settingsButton.visible = !1),
          (this.notificationSettingsButton.visible = !1),
          (this.lockingOptions.visible = !1),
          (this.capacityOptions.visible = !1),
          (this.upgradeCapacityContainer.visible = !1),
          (this.itemCountText.visible = !1),
          (this.itemCountTextBottom.visible = !0),
          (this.lockInfoButton.visible = !1),
          (this.viewLogsButton.visible = !1),
          (this.withdrawAllButton.visible = !1),
          (this.startDepositButton.caption = "${wiredchests.donate}")),
      (this._window.height = this.mainList.height + this._r0a8975f35ae4af),
      (this._r76cb11d73abc54 = !1));
  }
  updateUIOptions() {
    ((this._ignoreCheckboxSelectedEvents = !0), (this._ignoreCapacityChangeEvents = !0));
    let e = this.getStuffDataMap();
    e != null &&
      (we.select(this.lockChestCheckbox, e.getValue(a.const_1325) !== "0"),
      we.select(this.autoLockChestCheckbox, e.getValue(a.AUTO_LOCK_KEY) !== "0"),
      (this.capacityInput.text = e.getValue(a.CAPACITY_KEY) ?? ""),
      (this._ignoreCheckboxSelectedEvents = !1),
      (this._ignoreCapacityChangeEvents = !1),
      (this.maxCapacityText.text = this.var_63.localization.getLocalizationWithParams(
        "wiredchests.max_capacity",
        "",
        "max_capacity",
        String(this.maxCapacity),
      )));
  }
  updateUI() {
    if (this.var_185 == null || this.var_497 == null) return;
    let e = this.getStuffDataMap();
    if (e == null) return;
    this._r76cb11d73abc54 = !0;
    let r = e.getValue(a.const_775) === "1",
      t = e.getValue(a.CHEST_NAME_KEY) ?? "",
      i = e.getValue(a.CHEST_DESC_KEY) ?? "";
    i === "" && (i = "${wiredchests.description_placeholder}");
    let s = Number(e.getValue(a.CAPACITY_KEY) ?? 0);
    ((this.itemCountText.caption = this.var_63.localization.getLocalizationWithParams(
      "wiredchests.space_used2",
      "",
      "count",
      String(this.var_185.itemCount),
      "total",
      String(s),
    )),
      (this.itemCountTextBottom.caption = this.var_63.localization.getLocalizationWithParams(
        "wiredchests.space_used",
        "",
        "count",
        String(this.var_185.itemCount),
        "total",
        String(s),
      )),
      (this._window.caption = t.length > 0 ? t : this.var_185.title),
      (this.description.text = i),
      we.disableSection(
        this.lockChestCheckbox,
        !this.var_741 && (!this.var_2665 || this.lockChestCheckbox.isSelected),
      ),
      we.disableSection(this.autoLockChestCheckbox, !this.var_741),
      we.disableSection(this.capacityInputBorder, !this.var_741),
      we.disableSection(this.withdrawAllButton, !this.canWithdraw),
      we.disableSection(
        this.startDepositButton,
        !r && (!this._r14388092f4efd6 || (this.lockChestCheckbox.isSelected && !this.var_741)),
      ),
      we.disableSection(this.viewLogsButton, !this._r4b0f4dcd9b6c6f),
      we.disableSection(this.settingsButton, !this.var_741),
      we.disableSection(this.notificationSettingsButton, !this.var_741),
      this.isStarterChest
        ? (we.disableSection(this.maxCapacityUpgradeButton, !0),
          (this.upgradeCapacityRegion.toolTipCaption = "${wiredchests.upgrade.result.error.10}"))
        : this.var_741
          ? (we.disableSection(this.maxCapacityUpgradeButton, !1), (this.upgradeCapacityRegion.toolTipCaption = ""))
          : (we.disableSection(this.maxCapacityUpgradeButton, !0),
            (this.upgradeCapacityRegion.toolTipCaption = "${wiredchests.upgrade.error.reason.not_owner}")),
      this.var_185.updateUI(),
      (this._window.height = this.mainList.height + this._r0a8975f35ae4af),
      (this._r76cb11d73abc54 = !1));
  }
  _r740b6265f51971 = n(() => {
    this._ignoreCheckboxSelectedEvents ||
      this.var_63.send(
        new UnkMessageComposer_4args_5990fc(
          this.var_428,
          this.lockChestCheckbox.isSelected,
          this.autoLockChestCheckbox.isSelected,
          Number(this.capacityInput.text),
        ),
      );
  }, "_r740b6265f51971");
  _rc3d5c5fe8a009e = n(() => {
    this._ignoreCapacityChangeEvents ||
      (Number(this.capacityInput.text) > this.maxCapacity &&
        ((this._ignoreCapacityChangeEvents = !0),
        (this.capacityInput.text = String(this.maxCapacity)),
        (this._ignoreCapacityChangeEvents = !1)));
  }, "_rc3d5c5fe8a009e");
  _r8ddfb164e222ba = n((e) => {
    e.keyCode === 13 && this._r740b6265f51971();
  }, "_r8ddfb164e222ba");
  _r034b46d6d3078a = n((e) => {
    this._ignoreCheckboxSelectedEvents ||
      this._r5732c2f1f42a09 ||
      this.var_741 ||
      (e.preventWindowOperation?.(),
      this.var_63._r41f5cc7d3516ce.windowManager.confirm(
        "${wiredchests.lock.confirm.title}",
        "${wiredchests.lock.confirm.desc}",
        0,
        this._r8b9adff18805c9,
      ));
  }, "_r034b46d6d3078a");
  onAttemptUnlockChest = n((e) => {
    this._ignoreCheckboxSelectedEvents ||
      this._r5732c2f1f42a09 ||
      (e.preventWindowOperation?.(),
      this.var_63._r41f5cc7d3516ce.windowManager.confirm(
        "${wiredchests.unlock.confirm.title}",
        "${wiredchests.unlock.confirm.desc}",
        0,
        this._rbc81faeb653df7,
      ));
  }, "onAttemptUnlockChest");
  _r8b9adff18805c9 = n((e, r) => {
    (e.dispose(),
      r.type === y.const_1300 &&
        ((this._r5732c2f1f42a09 = !0), this.lockChestCheckbox.select(), (this._r5732c2f1f42a09 = !1)));
  }, "_r8b9adff18805c9");
  _rbc81faeb653df7 = n((e, r) => {
    (e.dispose(),
      r.type === y.const_1300 &&
        ((this._r5732c2f1f42a09 = !0),
        this.lockChestCheckbox.unselect(),
        (this._r5732c2f1f42a09 = !1)));
  }, "_rbc81faeb653df7");
  get canWithdraw() {
    return (
      this.var_185 != null &&
      !this.var_185.isEmpty &&
      this._r14388092f4efd6 &&
      (!this.lockChestCheckbox.isSelected || this.var_741)
    );
  }
  get _r14388092f4efd6() {
    return this.var_741 || this.var_63._r41f5cc7d3516ce._rb3d0033404b557.hasWritePermission;
  }
  get _r4b0f4dcd9b6c6f() {
    return this.var_741 || this.var_63._r41f5cc7d3516ce._rb3d0033404b557._r0e0f569f7be727;
  }
  setSubController(e) {
    this._r76cb11d73abc54 = !0;
    let r = e?.view ?? null;
    if (this.chestContents.numChildren > 0) {
      let t = this.chestContents.getChildAt(0);
      if (r === t) {
        this._r76cb11d73abc54 = !1;
        return;
      }
      (t.setParamFlag(N._rf567d650b39a78, !1),
        t.setParamFlag(N._r46a9ac2e4c9863, !1),
        this.chestContents.removeChild(t));
    }
    (r != null &&
      (r.setParamFlag(N._rf567d650b39a78, !1),
      r.setParamFlag(N._r46a9ac2e4c9863, !1),
      !e._r66a1da9835e6c4 || this._r52ebee417f5b1b === -1
        ? ((this._window.width = r.width + this._r8c326506854b57),
          (this.chestContents.height = r.height),
          (this._window.height = this.mainList.height + this._r0a8975f35ae4af))
        : ((this._window.width = this._r2aacb10cb2b316 + this._r8c326506854b57),
          (this.chestContents.height = this._r52ebee417f5b1b)),
      this._window.setParamFlag(N.WINDOW_PARAM_MOUSE_SCALING_TARGET, e._r66a1da9835e6c4),
      (this._window.height = this.mainList.height + this._r0a8975f35ae4af),
      this.chestContents.addChild(r),
      e._r66a1da9835e6c4 &&
        ((r.width = this.chestContents.width),
        (r.height = this.chestContents.height),
        r.setParamFlag(N._rf567d650b39a78, !0),
        r.setParamFlag(N._r46a9ac2e4c9863, !0))),
      (this._r76cb11d73abc54 = !1));
  }
  get _r1c04ced9d88591() {
    return (
      this.var_102 == null &&
        (this.var_102 = new UbuntuPresetManager(this.var_63._r41f5cc7d3516ce)),
      this._chestSettings == null &&
        (this._chestSettings = new ChestSettingsUI(this.var_63, this.var_102)),
      this._chestSettings
    );
  }
  get _r285a1f300b1aba() {
    return (
      this.var_102 == null &&
        (this.var_102 = new UbuntuPresetManager(this.var_63._r41f5cc7d3516ce)),
      this._chestNotificationSettings == null &&
        (this._chestNotificationSettings = new ChestNotificationSettingsUI(this.var_63, this.var_102)),
      this._chestNotificationSettings
    );
  }
  dispose() {
    this._disposed ||
      (this._chestSettings?.dispose(),
      (this._chestSettings = null),
      this._chestNotificationSettings?.dispose(),
      (this._chestNotificationSettings = null),
      this._r87cfaccc242eab?.dispose(),
      (this._r87cfaccc242eab = null),
      this.hide(),
      this.setSubController(null),
      this._window?.dispose(),
      (this._window = null),
      this.var_637?.dispose(),
      (this.var_637 = null),
      (this.var_63 = null),
      (this._windowManager = null),
      (this.var_102 = null),
      (this.var_428 = 0),
      (this.var_497 = null),
      this.resetChestCaches(),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get closeButton() {
    return this._window.findChildByName("header_button_close");
  }
  get mainList() {
    return this._window.findChildByName("main_list");
  }
  get chestContents() {
    return this._window.findChildByName("chest_contents");
  }
  get lockInfoButton() {
    return this._window.findChildByName("lock_info_button");
  }
  get description() {
    return this._window.findChildByName("desc");
  }
  get settingsButton() {
    return this._window.findChildByName("settings_button");
  }
  get notificationSettingsButton() {
    return this._window.findChildByName("notification_settings_button");
  }
  get lockingOptions() {
    return this._window.findChildByName("locking_options");
  }
  get capacityOptions() {
    return this._window.findChildByName("capacity_options");
  }
  get capacityOverrideContainer() {
    return this._window.findChildByName("capacity_override_container");
  }
  get upgradeCapacityContainer() {
    return this._window.findChildByName("upgrade_capacity_container");
  }
  get itemCountText() {
    return this._window.findChildByName("item_count_text");
  }
  get itemCountTextBottom() {
    return this._window.findChildByName("item_count_text_bottom");
  }
  get header() {
    return this._window.findChildByName("header");
  }
  get footer() {
    return this._window.findChildByName("footer");
  }
  get lockChestCheckbox() {
    return this._window.findChildByName("lock_chest_cbx");
  }
  get autoLockChestCheckbox() {
    return this._window.findChildByName("auto_lock_chest_cbx");
  }
  get capacityInput() {
    return this._window.findChildByName("capacity_input");
  }
  get capacityInputBorder() {
    return this._window.findChildByName("capacity_input_border");
  }
  get maxCapacityText() {
    return this._window.findChildByName("max_capacity_txt");
  }
  get maxCapacityUpgradeButton() {
    return this._window.findChildByName("upgrade_capacity_btn");
  }
  get upgradeCapacityRegion() {
    return this._window.findChildByName("upgrade_capacity_region");
  }
  get withdrawAllButton() {
    return this._window.findChildByName("withdraw_all_btn");
  }
  get startDepositButton() {
    return this._window.findChildByName("start_deposit_btn");
  }
  get viewLogsButton() {
    return this._window.findChildByName("view_logs_btn");
  }
}
