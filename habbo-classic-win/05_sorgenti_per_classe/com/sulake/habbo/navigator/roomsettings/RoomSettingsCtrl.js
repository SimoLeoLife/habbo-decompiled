// Estratto da HabboAirLauncher.deobf.js, riga 257353.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/roomsettings/RoomSettingsCtrl.as
// Nome offuscato: _if2c2be65fbf244

class a {
  constructor(e) {
    this._navigator = e;
    ((this._r3deb457e249848 = new RI(e, !1)),
      (this._r7475c9ffbbd2de = new RI(e, !0)),
      (this._rca0555b3d9fb88 = new BanListCtrl(e)));
  }
  static {
    n(this, "RoomSettingsCtrl");
  }
  static _nameInput = 1;
  static TAB_ACCESS_RIGHTS = 2;
  static TAB_ROOM_RIGHTS = 3;
  static TAB_CLUB_AND_CHAT = 4;
  static TAB_MODERATION = 5;
  static _ra0863a9b3106f0 = 30;
  static MAX_IDLE_SLEEP_TIMEOUT_SECONDS = 3600;
  static MIN_IDLE_AUTOKICK_TIMEOUT_SECONDS = 60;
  static _r39efaa5e8cec80 = 600 * 60;
  static _rdbb6b500a783e7 = 30;
  static HC_MAXIMUM_ROOM_VISITORS = 75;
  static MAXIMUM_ROOM_VISITORS = 50;
  _flatId = 0;
  _groupId = 0;
  controllersById = null;
  _savedFlatId = 0;
  _window = null;
  _currentTab = a._nameInput;
  _populating = !1;
  _re33554793bb424 = null;
  _r2259ac88d6e4be = null;
  _r046b76e5cb19c7 = null;
  _tag1Input = null;
  _tag2Input = null;
  _rd1571c7d6889a3 = null;
  _r41435ac5bc4c6c = null;
  allowFoodConsume = null;
  muteAllPets = null;
  allowWalkThrough = null;
  hideWalls = null;
  _rc9ecb9b5094501 = null;
  _r08e8f77e37544c = null;
  idleSleepEnabled = null;
  _r193322009098d9 = null;
  _idleSleepTimeoutInput = null;
  _idleSleepTimeoutLabel = null;
  _idleAutokickCheckBox = null;
  _r1643e8b96faca5 = null;
  _r275cf9e9dc4ee1 = null;
  _rb45518723ad4bc = null;
  _r27c41def6336a7 = null;
  _r80a441f91c97c6 = null;
  getThicknessSelectionIndex = null;
  _floorThicknessDropMenu = null;
  _tabContext = null;
  _r09b240bdf6eeb2 = null;
  _r3deb457e249848;
  _r7475c9ffbbd2de;
  _rca0555b3d9fb88;
  _r90fd10f777c59b = !1;
  _r948ba7c3b553c1 = [];
  roomModerationMuteSettings = [];
  roomModerationBanSettings = [];
  get disposed() {
    return this._navigator == null;
  }
  get linkPattern() {
    return "roomsettings/";
  }
  dispose() {
    this.disposed ||
      ((this.controllersById = null),
      this._window?.dispose(),
      (this._window = null),
      this._r3deb457e249848.dispose(),
      this._r7475c9ffbbd2de.dispose(),
      this._rca0555b3d9fb88.dispose(),
      this._re33554793bb424?.dispose(),
      (this._re33554793bb424 = null),
      (this._r2259ac88d6e4be = null),
      (this._r046b76e5cb19c7 = null),
      (this._tag1Input = null),
      (this._tag2Input = null),
      (this._rd1571c7d6889a3 = null),
      (this._r41435ac5bc4c6c = null),
      (this.allowFoodConsume = null),
      (this.muteAllPets = null),
      (this.allowWalkThrough = null),
      (this._rc9ecb9b5094501 = null),
      (this._r08e8f77e37544c = null),
      (this.idleSleepEnabled = null),
      (this._r193322009098d9 = null),
      (this._idleSleepTimeoutInput = null),
      (this._idleSleepTimeoutLabel = null),
      (this._idleAutokickCheckBox = null),
      (this._r1643e8b96faca5 = null),
      (this._r275cf9e9dc4ee1 = null),
      (this._rb45518723ad4bc = null),
      (this._r27c41def6336a7 = null),
      (this._r80a441f91c97c6 = null),
      (this.getThicknessSelectionIndex = null),
      (this._floorThicknessDropMenu = null),
      (this._navigator = null));
  }
  _re5bfbfb64be8a6(e) {
    (this.close(),
      (this._flatId = e),
      (this._groupId = this._navigator?.data._rd27e27c96c37cd?.habboGroupId ?? 0),
      this._navigator?.send(new _i29fde5f30c747f(this._flatId)),
      this._navigator?.tracking._rff30e139de703a("Tutorial", "interaction", "viewed.room.settings"),
      this._navigator?.events.dispatchEvent?.(new M(HabboRoomSettingsTrackingEvent.HABBO_ROOM_SETTINGS_TRACKING_EVENT_DEFAULT)));
  }
  _rc7de4548128463(e, r) {
    (this.close(),
      (this._flatId = e),
      (this._groupId = r),
      this._navigator?.send(new _i29fde5f30c747f(this._flatId)),
      this._navigator?.tracking._rff30e139de703a("Tutorial", "interaction", "viewed.room.settings"),
      this._navigator?.events.dispatchEvent?.(new M(HabboRoomSettingsTrackingEvent.HABBO_ROOM_SETTINGS_TRACKING_EVENT_DEFAULT)));
  }
  onRoomSettings(e) {
    e.roomId === this._flatId &&
      ((this.controllersById = e),
      this.refresh(),
      this.populateForm(),
      this._window != null &&
        ((this._window.visible = !0),
        this._window.invalidate(),
        this._window.activate()));
  }
  _rf4bc1074be4f4c(e, r) {
    if (!(!this._r2c5c1b78d95d99(e) || this.controllersById == null)) {
      for (let t of r) this.controllersById._r15f2f86c1ad40a(t.userId, t);
      this._r164e3bf6f159f2();
    }
  }
  _rd3fb7581946de2(e, r) {
    !this._r2c5c1b78d95d99(e) ||
      this.controllersById == null ||
      (this.controllersById._r15f2f86c1ad40a(r.userId, r), this._r164e3bf6f159f2());
  }
  _r67879c2524c208(e, r) {
    !this._r2c5c1b78d95d99(e) ||
      this.controllersById == null ||
      (this.controllersById._r15f2f86c1ad40a(r, null), this._r164e3bf6f159f2());
  }
  _r347e7bade5088f(e, r) {
    if (!(!this._raa714c0725b3b3(e) || this.controllersById == null)) {
      for (let t of r) this.controllersById._ree3602773addc3(t.userId, t);
      this._r2bd56a6cc36826();
    }
  }
  _r7e9c99b4fd1ffc(e, r) {
    !this._raa714c0725b3b3(e) ||
      this.controllersById == null ||
      (this.controllersById._ree3602773addc3(r, null), this._r2bd56a6cc36826());
  }
  _re2d4f827ef2413() {
    this._r164e3bf6f159f2();
  }
  onRoomSettingsSaveError(e, r, t) {
    e !== this._flatId ||
      this._savedFlatId < 1 ||
      ((this._savedFlatId = 0),
      r === class_3716.const_1349
        ? (this.switchToTab(a._nameInput),
          this._r2259ac88d6e4be?.displayError("${navigator.roomsettings.roomnameismandatory}"))
        : r === class_3716.const_1249
          ? (this.switchToTab(a._nameInput),
            this._r2259ac88d6e4be?.displayError("${navigator.roomsettings.unacceptablewords}"))
          : r === class_3716.const_871
            ? (this.switchToTab(a._nameInput),
              this._r046b76e5cb19c7?.displayError("${navigator.roomsettings.unacceptablewords}"))
            : r === class_3716.const_490
              ? (this.switchToTab(a._nameInput),
                this.setTagError(
                  this._tag1Input,
                  t,
                  "${navigator.roomsettings.unacceptablewords}",
                ),
                this.setTagError(
                  this._tag2Input,
                  t,
                  "${navigator.roomsettings.unacceptablewords}",
                ))
              : r === class_3716.const_1103
                ? (this.switchToTab(a._nameInput),
                  this.setTagError(
                    this._tag1Input,
                    t,
                    "${navigator.roomsettings.nonuserchoosabletag}",
                  ),
                  this.setTagError(
                    this._tag2Input,
                    t,
                    "${navigator.roomsettings.nonuserchoosabletag}",
                  ))
                : r === class_3716.const_580
                  ? (this.switchToTab(a.TAB_ACCESS_RIGHTS),
                    this._rd1571c7d6889a3?.displayError("${navigator.roomsettings.passwordismandatory}"))
                  : r === class_3716.const_830
                    ? (this.switchToTab(a._nameInput),
                      this.setTagError(
                        this._tag1Input,
                        t,
                        "${navigator.roomsettings.toomanycharacters}",
                      ),
                      this.setTagError(
                        this._tag2Input,
                        t,
                        "${navigator.roomsettings.toomanycharacters}",
                      ))
                    : r === class_3716.const_157
                      ? this.handleCustomRoomSettingSaveError(t) ||
                        (this.switchToTab(a._nameInput),
                        this._r2259ac88d6e4be?.displayError(`Update failed: error ${r}`))
                      : (this.switchToTab(a._nameInput),
                        this._r2259ac88d6e4be?.displayError(`Update failed: error ${r}`)),
      this.refresh());
  }
  close() {
    ((this._flatId = 0),
      (this._groupId = 0),
      (this.controllersById = null),
      (this._savedFlatId = 0),
      this._window?.dispose(),
      (this._window = null),
      this._re33554793bb424?.dispose(),
      (this._re33554793bb424 = null));
  }
  refresh() {
    (this.prepareWindow(),
      this._window != null &&
        (Fr.hideChildren(this._window.findChildByName("content_container")),
        (this.getTabContainer(this._currentTab).visible = !0),
        this.refreshNavigatorTabs(),
        this._r1b8b4c32c25235(),
        (this._window.helpPage = this.getHelpPageWithTab(this._currentTab)),
        this.refreshFlatControllers(),
        this.refreshBannedUsers(),
        this.refreshGroupMemberDisclaimer(),
        this.showDeleteButton(),
        this._window.invalidate()));
  }
  linkReceived(e) {
    e.split("/").length < 2 ||
      (this._window != null && (this._window.dispose(), (this._window = null)));
  }
  _r2c5c1b78d95d99(e) {
    return e === this._flatId && this.controllersById != null;
  }
  _raa714c0725b3b3(e) {
    return e === this._flatId && this.controllersById != null;
  }
  _r164e3bf6f159f2() {
    this._window != null &&
      this._window.visible &&
      this._r702af4ceea4e12(a.TAB_ROOM_RIGHTS) &&
      this.refresh();
  }
  _r2bd56a6cc36826() {
    this._window != null &&
      this._window.visible &&
      this._r702af4ceea4e12(a.TAB_MODERATION) &&
      this.refresh();
  }
  switchToTab(e) {
    ((this._currentTab = e),
      this._tabContext?.selector?.setSelected(this._window?.findChildByName(`tab_${e}`)),
      this._window != null &&
        (this._window.helpPage = this.getHelpPageWithTab(this._currentTab)));
  }
  _r702af4ceea4e12(e) {
    return this._currentTab === e;
  }
  setTagError(e, r, t) {
    e != null && r === e.getText().toLowerCase() && e.displayError(t);
  }
  clearErrors() {
    (this._r2259ac88d6e4be?.clearErrors(),
      this._r046b76e5cb19c7?.clearErrors(),
      this._tag1Input?.clearErrors(),
      this._tag2Input?.clearErrors(),
      this._rd1571c7d6889a3?.clearErrors(),
      this._r41435ac5bc4c6c?.clearErrors(),
      this._idleAutokickCheckBox?.clearErrors(),
      this._r27c41def6336a7?.clearErrors());
  }
  prepareWindow() {
    if (this._window != null || this._navigator == null) return;
    if (
      ((this._window = this._navigator.getXmlWindow("ros_room_settings")),
      this._window == null)
    )
      throw new Error("Failed to build ros_room_settings");
    for (let d of [1, 2, 3, 4, 5])
      this._window.findChildByName(`tab_${d}`).procedure = this._re18ed06774f63c;
    ((this._window.findChildByName("builders_faq_button").procedure = this._r2dd8c5ca838742),
      this.showDeleteButton());
    let e = this._window.findChildByName("doormode_password");
    (e?.addEventListener(y.const_587, this._r96591a193c71ee),
      e?.addEventListener(y.const_774, this._r2498f795822c88),
      this._window.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose),
      this.getRemoveAllFlatCtrlsButton()?.addEventListener(u.CLICK, this._r4182d1bfeb43a3),
      this._window
        .findChildByName("filter_users_input")
        ?.addEventListener(y.WINDOW_EVENT_CHANGE, this._r00fb1ed8e27a6b),
      (this._r90fd10f777c59b =
        (this._navigator.data._rd27e27c96c37cd?.flatId ?? 0) !==
        (this.controllersById?.roomId ?? 0)),
      this._r90fd10f777c59b
        ? (this._window.findChildByName("remove_link_region").visible = !1)
        : (this._window.findChildByName("remove_link_region").procedure = this._r3050066ed98acb),
      (this._r2259ac88d6e4be = new TextFieldManager(
        this._navigator,
        this._window.findChildByName("room_name"),
        60,
      )),
      (this._r046b76e5cb19c7 = new TextFieldManager(
        this._navigator,
        this._window.findChildByName("description"),
        255,
      )),
      (this._tag1Input = new TextFieldManager(
        this._navigator,
        this._window.findChildByName("tag1"),
        30,
      )),
      (this._tag2Input = new TextFieldManager(
        this._navigator,
        this._window.findChildByName("tag2"),
        30,
      )),
      (this._rd1571c7d6889a3 = new TextFieldManager(
        this._navigator,
        this._window.findChildByName("password"),
        30,
      )),
      (this._r41435ac5bc4c6c = new TextFieldManager(
        this._navigator,
        this._window.findChildByName("password_confirm"),
        30,
      )),
      (this.allowFoodConsume = this._window.findChildByName("allow_pets_checkbox")),
      (this.muteAllPets = this._window.findChildByName("allow_foodconsume_checkbox")),
      (this.allowWalkThrough = this._window.findChildByName("mute_all_pets_checkbox")),
      (this.hideWalls = this._window.findChildByName("allow_walk_through_checkbox")),
      this.hideWalls?.addEventListener(u.OVER, this._r25d12159a66ac0),
      (this._rc9ecb9b5094501 = this._window.findChildByName("hide_walls_checkbox")),
      (this._r08e8f77e37544c = this._window.findChildByName("hide_walls_text")),
      (this.idleSleepEnabled = this._window.findChildByName("do_not_leave_on_door_tile_checkbox")),
      (this._r193322009098d9 = this._window.findChildByName("do_not_leave_on_door_tile_text")),
      (this._idleSleepTimeoutInput = this._window.findChildByName("idle_sleep_checkbox")),
      (this._idleSleepTimeoutLabel = this._window.findChildByName("idle_sleep_text")),
      (this._idleAutokickCheckBox = new TextFieldManager(
        this._navigator,
        this._window.findChildByName("idle_sleep_timeout"),
        5,
      )),
      this._idleAutokickCheckBox.input != null && (this._idleAutokickCheckBox.input.restrict = "0-9"),
      (this._r1643e8b96faca5 = this._window.findChildByName("idle_sleep_timeout_label")),
      (this._r275cf9e9dc4ee1 = this._window.findChildByName("idle_autokick_checkbox")),
      (this._rb45518723ad4bc = this._window.findChildByName("idle_autokick_text")),
      (this._r27c41def6336a7 = new TextFieldManager(
        this._navigator,
        this._window.findChildByName("idle_autokick_timeout"),
        5,
      )),
      this._r27c41def6336a7.input != null && (this._r27c41def6336a7.input.restrict = "0-9"),
      (this._r80a441f91c97c6 = this._window.findChildByName("idle_autokick_timeout_label")),
      (this.getThicknessSelectionIndex = this._window.findChildByName("wall_thickness")),
      (this._floorThicknessDropMenu = this._window.findChildByName("floor_thickness")),
      (this._tabContext = this._window.findChildByName("tab_context")),
      (this._r09b240bdf6eeb2 = this._window.findChildByName("chat_flood_sensitivity")),
      this._r09b240bdf6eeb2?.addEventListener(u.OVER, this._r279dd75e36d0f4));
    let r = [
      this._r2259ac88d6e4be,
      this._r046b76e5cb19c7,
      this._tag1Input,
      this._tag2Input,
      this._rd1571c7d6889a3,
      this._r41435ac5bc4c6c,
      this._idleAutokickCheckBox,
      this._r27c41def6336a7,
    ];
    for (let d of r) d?.input?.addEventListener(y.const_1200, this._rd9ce3cbfe13d80);
    let t = [
      this._window.findChildByName("categories"),
      this._window.findChildByName("maxvisitors"),
      this._window.findChildByName("tradesettings"),
      this.allowFoodConsume,
      this.muteAllPets,
      this.allowWalkThrough,
      this.hideWalls,
      this._rc9ecb9b5094501,
      this.getThicknessSelectionIndex,
      this._floorThicknessDropMenu,
      this._r09b240bdf6eeb2,
    ];
    for (let d of t)
      (d?.addEventListener(y.const_238, this._rd9ce3cbfe13d80),
        d?.addEventListener(y.const_1217, this._rd9ce3cbfe13d80));
    let i = [this.idleSleepEnabled, this._idleSleepTimeoutInput, this._r275cf9e9dc4ee1];
    for (let d of i)
      (d?.addEventListener(y.const_238, this._r3a79694aa9cf88),
        d?.addEventListener(y.const_1217, this._r3a79694aa9cf88));
    for (let d of ["doormode_open", "doormode_doorbell", "doormode_password", "doormode_invisible"])
      this._window.findChildByName(d)?.addEventListener(y.const_238, this._rd9ce3cbfe13d80);
    for (let d of [
      "moderation_mute_none",
      "moderation_mute_rights",
      "moderation_kick_none",
      "moderation_kick_rights",
      "moderation_kick_all",
      "moderation_ban_none",
      "moderation_ban_rights",
    ])
      this._window.findChildByName(d)?.addEventListener(y.const_587, this._rd9ce3cbfe13d80);
    this._ra9cb48b2452cb0(!1);
    let s = this._window.findChildByName("remove_link"),
      o = this._window.findChildByName("remove_icon");
    (s != null && o != null && (o.x = s.x - 15),
      (this._window.findChildByName("tradesettings_label").visible = !0),
      (this._window.findChildByName("tradesettings").visible = !0),
      this._window
        .findChildByName("moderation_unban_btn")
        ?.addEventListener(u.CLICK, this._r8fadd4ffb630d4),
      this._window.center(),
      this.switchToTab(a._nameInput));
  }
  getTabContainer(e) {
    return this._window?.findChildByName(`tab_container_${e}`);
  }
  disableWindow(e) {
    e != null && (e.disable(), (e.blend = 0.5));
  }
  enableWindow(e) {
    e != null && (e.enable(), (e.blend = 1));
  }
  _re12d9d4535bc73(e) {
    switch (e) {
      case -2:
        return 0;
      case -1:
        return 1;
      case 1:
        return 3;
      default:
        return 2;
    }
  }
  populateForm() {
    if (this.controllersById == null || this._window == null) return;
    this._populating = !0;
    let e = this.controllersById;
    (this._r2259ac88d6e4be?.setText(e.name),
      this._r046b76e5cb19c7?.setText(e.description),
      this._rd1571c7d6889a3?.setText(""),
      this._r41435ac5bc4c6c?.setText(""));
    let r = this._window.findChildByName("doormode");
    if (this._navigator?.data._rd27e27c96c37cd != null) {
      switch (
        ((this._window.findChildByName("doormode_override_info").visible =
          e._r067cac897dfb7b && !this._navigator.sessionData.hasSecurity(class_1794.EMPLOYEE)),
        e._rf742cf771d167a)
      ) {
        case Sd.const_95:
          r?.setSelected(this._window.findChildByName("doormode_doorbell"));
          break;
        case Sd.const_133:
          r?.setSelected(this._window.findChildByName("doormode_password"));
          break;
        case Sd.const_139:
          r?.setSelected(this._window.findChildByName("doormode_invisible"));
          break;
        default:
          r?.setSelected(this._window.findChildByName("doormode_open"));
      }
      this._ra9cb48b2452cb0(e._rf742cf771d167a === Sd.const_133);
    }
    (this.setCategorySelection(e.categoryId),
      this.setTradeModeSelection(e.tradeMode),
      this.refreshMaxVisitors(e),
      a.setTag(this._tag1Input, e.tags[0]),
      a.setTag(this._tag2Input, e.tags[1]),
      this._r1377388410fd56(this.allowFoodConsume, e._rf5545c5fca5ee0),
      this._r1377388410fd56(this.muteAllPets, e._allowFoodConsumeCheckBox),
      this._r1377388410fd56(this.allowWalkThrough, e._muteAllPetsCheckBox),
      this._r1377388410fd56(this.hideWalls, e._allowWalkThroughCheckBox),
      this._r1377388410fd56(this._rc9ecb9b5094501, e._hideWallsCheckBox),
      this.idleSleepEnabled != null && this._r1377388410fd56(this.idleSleepEnabled, !e._re4bafec6ef50f1),
      this._r1377388410fd56(this._idleSleepTimeoutInput, e._r02180e03cb59e4),
      this._idleAutokickCheckBox?.setText(e.idleSleepTimeoutSeconds > 0 ? `${e.idleSleepTimeoutSeconds}` : ""),
      this._r1377388410fd56(this._r275cf9e9dc4ee1, e._r1058fab0daff8c),
      this._r27c41def6336a7?.setText(
        e.idleAutokickTimeoutSeconds > 0 ? `${e.idleAutokickTimeoutSeconds}` : "",
      ),
      this._r09b240bdf6eeb2 != null &&
        (this._r09b240bdf6eeb2.selection = e.chatSettings?._r8ea55a71cde5e4 ?? 0),
      this.getThicknessSelectionIndex != null &&
        (this.getThicknessSelectionIndex.selection = this._re12d9d4535bc73(e._rdbce713bddeb2b)),
      this._floorThicknessDropMenu != null &&
        (this._floorThicknessDropMenu.selection = this._re12d9d4535bc73(e._r2cacaaa4b8c0dc)),
      this._r6c4f433d63e47d(),
      this.setModeratorSettings(e),
      this.clearErrors(),
      (this._populating = !1));
  }
  setModeratorSettings(e) {
    let r = this._groupId > 0;
    ((this._r948ba7c3b553c1 = r
      ? [class_2849.const_644, class_2849.const_1116, class_2849.const_904, class_2849.const_650]
      : [class_2849.const_644, class_2849.const_1116]),
      (this.roomModerationMuteSettings = r
        ? [class_2849.const_644, class_2849.const_1116, class_2849.const_904, class_2849.const_650]
        : [class_2849.const_644, class_2849.const_1116]),
      (this.roomModerationBanSettings = r
        ? [
            class_2849.const_644,
            class_2849.const_1116,
            class_2849.const_1163,
            class_2849.const_904,
            class_2849.const_650,
          ]
        : [class_2849.const_644, class_2849.const_1116, class_2849.const_1163]));
    let t = this._window?.findChildByName("moderation_mute_dropdown");
    (t?.populate(this._radad916deeb38d(this._r948ba7c3b553c1)),
      t != null &&
        (t.selection = this._r22123f94db0ce4(
          this._r948ba7c3b553c1,
          e._r3d55e7f65e7db4?._rcf6814a48ba121 ?? 0,
        )));
    let i = this._window?.findChildByName("moderation_ban_dropdown");
    (i?.populate(this._radad916deeb38d(this.roomModerationMuteSettings)),
      i != null &&
        (i.selection = this._r22123f94db0ce4(
          this.roomModerationMuteSettings,
          e._r3d55e7f65e7db4?._rce5b4a16158543 ?? 0,
        )));
    let s = this._window?.findChildByName("moderation_kick_dropdown");
    (s?.populate(this._radad916deeb38d(this.roomModerationBanSettings)),
      s != null &&
        (s.selection = this._r22123f94db0ce4(
          this.roomModerationBanSettings,
          e._r3d55e7f65e7db4?._ra46bd2f1badd5f ?? 0,
        )));
    for (let o of [t, i, s])
      (o?.addEventListener(y.const_238, this._rd9ce3cbfe13d80),
        o?.addEventListener(y.const_1217, this._rd9ce3cbfe13d80));
  }
  _r22123f94db0ce4(e, r) {
    for (let t = 0; t < e.length; t++) if (e[t] === r) return t;
    return class_2849.const_644;
  }
  _radad916deeb38d(e) {
    let r = [];
    for (let t of e)
      switch (t) {
        case class_2849.const_644:
          r.push("${navigator.roomsettings.moderation.none}");
          break;
        case class_2849.const_1163:
          r.push("${navigator.roomsettings.moderation.all}");
          break;
        case class_2849.const_1116:
          r.push("${navigator.roomsettings.moderation.rights}");
          break;
        case class_2849.const_904:
          r.push("${navigator.roomsettings.moderation.group_admins}");
          break;
        case class_2849.const_650:
          r.push("${navigator.roomsettings.moderation.group_admins_and_rights}");
          break;
      }
    return r;
  }
  _r88186512df38ac() {
    return this._navigator?.sessionData.hasVip ?? !1;
  }
  static get useHashTags() {
    return !0;
  }
  static setTag(e, r) {
    e?.setText(r == null ? "" : (a.useHashTags ? "#" : "") + r);
  }
  refreshMaxVisitors(e) {
    let r = [],
      t = -1,
      i = 0,
      s = this._r88186512df38ac() ? a.HC_MAXIMUM_ROOM_VISITORS : a.MAXIMUM_ROOM_VISITORS;
    for (let d = 10; d <= s; d += 5) (r.push(`${d}`), d === e.maximumVisitors && (t = i), i++);
    e.maximumVisitors > s && (r.push(`${s}`), (t = i));
    let o = this._window?.findChildByName("maxvisitors");
    (o?.populate(r), o != null && (o.selection = t > -1 ? t : 0));
  }
  setCategorySelection(e) {
    let r = this._window?.findChildByName("categories"),
      t = [],
      i = 0,
      s = 0;
    for (let o of this._navigator?.data._r0e0ffd0291afb3 ?? [])
      (o.visible || e === o.nodeId) &&
        !o.automatic &&
        (t.push(o.visibleName), e === o.nodeId && (i = s), s++);
    (r?.populate(t), r != null && (r.selection = i));
  }
  setTradeModeSelection(e) {
    let r = this._window?.findChildByName("tradesettings");
    (r?.populate([
      "${navigator.roomsettings.trade_not_allowed}",
      "${navigator.roomsettings.trade_not_with_Controller}",
      "${navigator.roomsettings.trade_allowed}",
    ]),
      r != null && (r.selection = e));
  }
  _ra18a74c46d2c64(e, r) {
    let t = 0;
    for (let i of this._navigator?.data._r0e0ffd0291afb3 ?? [])
      if ((i.visible || e === i.nodeId) && !i.automatic) {
        if (r === t) return i;
        t++;
      }
    return null;
  }
  onClose = n((e) => {
    this.close();
  }, "onClose");
  _rd9ce3cbfe13d80 = n((e) => {
    this._populating || this.save();
  }, "_rd9ce3cbfe13d80");
  _r3a79694aa9cf88 = n((e) => {
    (this._r6c4f433d63e47d(), !this._populating && this._r979959369ae833() && this.save());
  }, "_r3a79694aa9cf88");
  save() {
    if (this.controllersById == null || this._window == null || this._window.disposed)
      return;
    this.clearErrors();
    let e = new _i2cfc2b787c0c44();
    ((e.roomId = this.controllersById.roomId),
      (e.name = this._r2259ac88d6e4be?.getText() ?? ""),
      (e.description = this._r046b76e5cb19c7?.getText() ?? ""));
    let t = this._window.findChildByName("doormode")?.getSelected() ?? null;
    if (t == null) e._rf742cf771d167a = this.controllersById._rf742cf771d167a;
    else
      switch (t.name) {
        case "doormode_doorbell":
          e._rf742cf771d167a = class_3308.const_95;
          break;
        case "doormode_password":
          e._rf742cf771d167a = class_3308.const_133;
          break;
        case "doormode_invisible":
          e._rf742cf771d167a = class_3308.const_139;
          break;
        default:
          e._rf742cf771d167a = class_3308.const_80;
      }
    if (e._rf742cf771d167a === class_3308.const_133) {
      let f = this._rd1571c7d6889a3?.getText() ?? "",
        l = this._r41435ac5bc4c6c?.getText() ?? "";
      if (f !== l) {
        (this._rd1571c7d6889a3?.clearErrors(),
          this.switchToTab(a.TAB_ACCESS_RIGHTS),
          this._r41435ac5bc4c6c?.displayError("${navigator.roomsettings.invalidconfirm}"));
        return;
      }
      f !== "" && (e.password = f);
    }
    let i = this._window.findChildByName("categories"),
      s = this._ra18a74c46d2c64(this.controllersById.categoryId, i?.selection ?? 0);
    e.categoryId = s?.nodeId ?? this.controllersById.categoryId;
    let o = this._window.findChildByName("tradesettings");
    e.tradeMode = o?.selection ?? this.controllersById.tradeMode;
    let d = this._window.findChildByName("maxvisitors"),
      c = d?.enumerateSelection() ?? [];
    if (
      ((e.maximumVisitors = Number(c[d?.selection ?? 0] ?? this.controllersById.maximumVisitors)),
      (e._rf5545c5fca5ee0 = this.allowFoodConsume?.isSelected ?? !1),
      (e._allowFoodConsumeCheckBox = this.muteAllPets?.isSelected ?? !1),
      (e._muteAllPetsCheckBox = this.allowWalkThrough?.isSelected ?? !1),
      (e._allowWalkThroughCheckBox = this.hideWalls?.isSelected ?? !1),
      (e._hideWallsCheckBox = this._rc9ecb9b5094501?.isSelected ?? !1),
      (e._rdbce713bddeb2b = (this.getThicknessSelectionIndex?.selection ?? 2) - 2),
      (e._r2cacaaa4b8c0dc = (this._floorThicknessDropMenu?.selection ?? 2) - 2),
      (e.tags = []),
      this.addTag(this._tag1Input, e.tags),
      this.addTag(this._tag2Input, e.tags),
      this.populateRoomModerationSettings(e),
      (e._r13279fe91a886d = this._r09b240bdf6eeb2?.selection ?? 0),
      this._r88186512df38ac())
    ) {
      let f = 0,
        l = 0;
      if (
        this._idleSleepTimeoutInput?.isSelected &&
        ((f = this._rc4ad6f19d61e8e(this._idleAutokickCheckBox)), !this.isIdleAutokickTimeoutValid(f))
      ) {
        (this.switchToTab(a.TAB_CLUB_AND_CHAT),
          this._idleAutokickCheckBox?.displayError("${navigator.roomsettings.idle_sleep_timeout.invalid}"));
        return;
      }
      if (
        this._r275cf9e9dc4ee1?.isSelected &&
        ((l = this._rc4ad6f19d61e8e(this._r27c41def6336a7)), !this.isIdleAutokickOffsetValid(l))
      ) {
        (this.switchToTab(a.TAB_CLUB_AND_CHAT), this.displayIdleAutokickTimeoutError());
        return;
      }
      if (
        (this._idleSleepTimeoutInput?.isSelected ?? !1) &&
        (this._r275cf9e9dc4ee1?.isSelected ?? !1) &&
        !this._r0237534b39e7b6(f, l)
      ) {
        (this.switchToTab(a.TAB_CLUB_AND_CHAT), this.displayIdleAutokickTimeoutError());
        return;
      }
      ((e._re4bafec6ef50f1 = !(this.idleSleepEnabled?.isSelected ?? !1)),
        (e._r02180e03cb59e4 = this._idleSleepTimeoutInput?.isSelected ?? !1),
        (e.idleSleepTimeoutSeconds = e._r02180e03cb59e4 ? f : 0),
        (e._r1058fab0daff8c = this._r275cf9e9dc4ee1?.isSelected ?? !1),
        (e.idleAutokickTimeoutSeconds = e._r1058fab0daff8c ? l : 0));
    } else
      ((e._re4bafec6ef50f1 = this.controllersById._re4bafec6ef50f1),
        (e._r02180e03cb59e4 = this.controllersById._r02180e03cb59e4),
        (e.idleSleepTimeoutSeconds = this.controllersById.idleSleepTimeoutSeconds),
        (e._r1058fab0daff8c = this.controllersById._r1058fab0daff8c),
        (e.idleAutokickTimeoutSeconds = this.controllersById.idleAutokickTimeoutSeconds));
    ((this._savedFlatId = e.roomId), this._navigator?.send(new _i9b8b50b47a24b1(e)));
  }
  _r6c4f433d63e47d() {
    let e = this._r88186512df38ac();
    (e
      ? (this.enableWindow(this._rc9ecb9b5094501),
        this.enableWindow(this.getThicknessSelectionIndex),
        this.enableWindow(this._floorThicknessDropMenu),
        this.enableWindow(this._r08e8f77e37544c),
        this.enableWindow(this.idleSleepEnabled),
        this.enableWindow(this._r193322009098d9))
      : (this.disableWindow(this._rc9ecb9b5094501),
        this.disableWindow(this.getThicknessSelectionIndex),
        this.disableWindow(this._floorThicknessDropMenu),
        this.disableWindow(this._r08e8f77e37544c),
        this.disableWindow(this.idleSleepEnabled),
        this.disableWindow(this._r193322009098d9)),
      this.refreshTimeoutFieldState(
        this._idleSleepTimeoutInput,
        this._idleSleepTimeoutLabel,
        this._idleAutokickCheckBox,
        this._r1643e8b96faca5,
        e,
      ),
      this.refreshTimeoutFieldState(
        this._r275cf9e9dc4ee1,
        this._rb45518723ad4bc,
        this._r27c41def6336a7,
        this._r80a441f91c97c6,
        e,
      ));
  }
  refreshTimeoutFieldState(e, r, t, i, s) {
    (s
      ? (this.enableWindow(e), this.enableWindow(r))
      : (this.disableWindow(e), this.disableWindow(r)),
      s && (e?.isSelected ?? !1)
        ? (this.enableWindow(t?.input ?? null), this.enableWindow(i))
        : (t?.clearErrors(), this.disableWindow(t?.input ?? null), this.disableWindow(i)));
  }
  _r979959369ae833() {
    if (!this._r88186512df38ac()) return !0;
    let e = this._idleSleepTimeoutInput?.isSelected ? this._rc4ad6f19d61e8e(this._idleAutokickCheckBox) : 0;
    if ((this._idleSleepTimeoutInput?.isSelected ?? !1) && !this.isIdleAutokickTimeoutValid(e)) return !1;
    let r = this._r275cf9e9dc4ee1?.isSelected ? this._rc4ad6f19d61e8e(this._r27c41def6336a7) : 0;
    return !(
      ((this._r275cf9e9dc4ee1?.isSelected ?? !1) && !this.isIdleAutokickOffsetValid(r)) ||
      ((this._idleSleepTimeoutInput?.isSelected ?? !1) &&
        (this._r275cf9e9dc4ee1?.isSelected ?? !1) &&
        !this._r0237534b39e7b6(e, r))
    );
  }
  _rc4ad6f19d61e8e(e) {
    let r = Fr.trim(e?.getText() ?? "") ?? "",
      t = /^\d+$/;
    if (r.length < 1 || !t.test(r)) return -1;
    let i = Number(r);
    return i > 0 ? i : -1;
  }
  isIdleAutokickTimeoutValid(e) {
    return e >= a._ra0863a9b3106f0 && e <= a.MAX_IDLE_SLEEP_TIMEOUT_SECONDS;
  }
  isIdleAutokickOffsetValid(e) {
    return e >= a.MIN_IDLE_AUTOKICK_TIMEOUT_SECONDS && e <= a._r39efaa5e8cec80;
  }
  _r0237534b39e7b6(e, r) {
    return r >= e + a._rdbb6b500a783e7;
  }
  displayIdleAutokickTimeoutError() {
    let e = "${navigator.roomsettings.idle_autokick_timeout.invalid}",
      r = this._idleSleepTimeoutInput?.isSelected ? this._rc4ad6f19d61e8e(this._idleAutokickCheckBox) : 0,
      t = this._r275cf9e9dc4ee1?.isSelected ? this._rc4ad6f19d61e8e(this._r27c41def6336a7) : 0;
    ((this._idleSleepTimeoutInput?.isSelected ?? !1) &&
      (this._r275cf9e9dc4ee1?.isSelected ?? !1) &&
      this.isIdleAutokickTimeoutValid(r) &&
      this.isIdleAutokickOffsetValid(t) &&
      !this._r0237534b39e7b6(r, t) &&
      (e = "${navigator.roomsettings.idle_autokick_timeout.offset.invalid}"),
      this._r27c41def6336a7?.displayError(e));
  }
  handleCustomRoomSettingSaveError(e) {
    switch (e) {
      case "idleSleepTimeoutSeconds":
        return (
          this.switchToTab(a.TAB_CLUB_AND_CHAT),
          this._idleAutokickCheckBox?.displayError("${navigator.roomsettings.idle_sleep_timeout.invalid}"),
          !0
        );
      case "idleAutokickTimeoutSeconds":
        return (this.switchToTab(a.TAB_CLUB_AND_CHAT), this.displayIdleAutokickTimeoutError(), !0);
      default:
        return !1;
    }
  }
  addTag(e, r) {
    let t = e?.getText() ?? "";
    if (t === "") return;
    let i = t;
    (a.useHashTags && i.charAt(0) === "#" && (i = i.substring(1)), r.push(i));
  }
  populateRoomModerationSettings(e) {
    let r = this._window?.findChildByName("moderation_mute_dropdown");
    e._rcf6814a48ba121 = this._r948ba7c3b553c1[r?.selection ?? 0] ?? class_2849.const_644;
    let t = this._window?.findChildByName("moderation_ban_dropdown");
    e._rce5b4a16158543 = this.roomModerationMuteSettings[t?.selection ?? 0] ?? class_2849.const_644;
    let i = this._window?.findChildByName("moderation_kick_dropdown");
    e._ra46bd2f1badd5f = this.roomModerationBanSettings[i?.selection ?? 0] ?? class_2849.const_644;
  }
  _r3050066ed98acb = n((e, r) => {
    if (!(e.type !== u.CLICK || this._navigator == null)) {
      if (this._flatId === this._navigator._r3dfd89b26af6cd) {
        this._navigator.windowManager.alert(
          "${navigator.delete.homeroom.title}",
          "${navigator.delete.homeroom.body}",
          0,
          this._r9d8a83a2f57c04,
        );
        return;
      }
      if (this._groupId > 0) {
        this._navigator.windowManager.alert(
          "${group.deletebase.title}",
          "${group.deletebase.body}",
          0,
          this._r9d8a83a2f57c04,
        );
        return;
      }
      this.controllersById != null &&
        (this._re33554793bb424?.dispose(),
        this._navigator._r43eae9731f5b27(
          "navigator.roomsettings.deleteroom.confirm.message",
          "room_name",
          this.controllersById.name,
        ),
        (this._re33554793bb424 = new ConfirmDialogView(
          this._navigator,
          this._r66baee1896fee6,
          "${navigator.roomsettings}",
          "${navigator.roomsettings.deleteroom.confirm.message}",
        )));
    }
  }, "_r3050066ed98acb");
  _r2dd8c5ca838742 = n((e, r) => {
    e.type === u.CLICK &&
      this._navigator?.windowManager.context?._r6b6c989018eb05("habbopages/builders-club/faq");
  }, "_r2dd8c5ca838742");
  _r9d8a83a2f57c04 = n((e, r) => {
    e.dispose();
  }, "_r9d8a83a2f57c04");
  _r66baee1896fee6 = n(() => {
    if (
      !(this._navigator == null || this.controllersById == null) &&
      (this._navigator.send(new _id0e50c04990840(this.controllersById.roomId)),
      this.close(),
      this._navigator.data._rf09e8697962ff2 != null)
    ) {
      let e = this._navigator.data._rf09e8697962ff2;
      this._navigator._r970f774dfe2577?.startSearch(
        this._navigator.tabs.getSelected().id,
        e.var_941,
        e._r74539a47506139,
      );
    }
  }, "_r66baee1896fee6");
  _r96591a193c71ee = n((e) => {
    this._ra9cb48b2452cb0(!0);
  }, "_r96591a193c71ee");
  _r2498f795822c88 = n((e) => {
    this._ra9cb48b2452cb0(!1);
  }, "_r2498f795822c88");
  _ra9cb48b2452cb0(e) {
    let r = this.getPasswordContainer();
    r != null && (r.visible = e);
  }
  refreshGroupMemberDisclaimer() {
    !this._r702af4ceea4e12(a.TAB_ACCESS_RIGHTS) ||
      this._navigator?.data._rd27e27c96c37cd == null ||
      this._window == null ||
      (this._window.findChildByName("guild_access_disclaimer").visible =
        this._navigator.data._rd27e27c96c37cd.habboGroupId > 0);
  }
  refreshFlatControllers() {
    if (
      !this._r702af4ceea4e12(a.TAB_ROOM_RIGHTS) ||
      this._navigator?.data._rd27e27c96c37cd == null ||
      this._window == null ||
      this.controllersById == null
    )
      return;
    let e;
    this.controllersById._originalData == null
      ? ((this.controllersById._originalData = new Map()),
        this._navigator.send(new _i9833fa914bec89(this.controllersById.roomId)),
        (e = []))
      : (e = this.controllersById._r6cc9aac3e542f2);
    let r = (this._window.findChildByName("filter_users_input")?.text ?? "").toLowerCase(),
      t = this._r92b79a4e110741();
    (this._r3deb457e249848.refresh(
      this._window.findChildByName("users_with_rights_item_list"),
      e,
      r,
      this.controllersById.highlightedUserId,
    ),
      this._r7475c9ffbbd2de.refresh(
        this._window.findChildByName("friends_item_list"),
        t,
        r,
        this.controllersById.highlightedUserId,
      ),
      this._navigator._r43eae9731f5b27(
        "navigator.flatctrls.userswithrights",
        "displayed",
        `${this._r3deb457e249848.userCount}`,
      ),
      this._navigator._r43eae9731f5b27(
        "navigator.flatctrls.friends",
        "displayed",
        `${this._r7475c9ffbbd2de.userCount}`,
      ),
      this._navigator._r43eae9731f5b27("navigator.flatctrls.userswithrights", "total", `${e.length}`),
      this._navigator._r43eae9731f5b27("navigator.flatctrls.friends", "total", `${t.length}`));
  }
  refreshBannedUsers() {
    if (
      this._currentTab !== a.TAB_MODERATION ||
      this._navigator == null ||
      this._window == null ||
      this.controllersById == null
    )
      return;
    let e;
    (this.controllersById._r148e5b11edf482 == null
      ? (this._navigator.send(new _i1e382bf8b33232(this.controllersById.roomId)), (e = []))
      : (e = this.controllersById.bannedUsersList),
      this._rca0555b3d9fb88.refresh(
        this._window.findChildByName("moderation_banned_users"),
        e,
        "",
        0,
      ));
  }
  _r92b79a4e110741() {
    let e = this.controllersById?._originalData ?? null,
      r = [];
    if (e == null) return r;
    for (let t of this._navigator?.data.friendList.list ?? [])
      e.get(t.userId) == null && r.push(t);
    return r;
  }
  _r4182d1bfeb43a3 = n((e) => {
    this._navigator != null &&
      (this._re33554793bb424?.dispose(),
      (this._re33554793bb424 = new ConfirmDialogView(
        this._navigator,
        this._rd7bbeaa0a504c2,
        "${navigator.flatctrls.removeconfirm.title}",
        "${navigator.flatctrls.removeconfirm.info}",
      )));
  }, "_r4182d1bfeb43a3");
  _rd7bbeaa0a504c2 = n(() => {
    this._navigator?.send(new _ic4eacbe96fa0b1(this._flatId));
  }, "_rd7bbeaa0a504c2");
  _re18ed06774f63c = n((e, r) => {
    e.type === u.CLICK &&
      ((this._currentTab = r.id),
      this.refresh(),
      this._currentTab === a.TAB_ACCESS_RIGHTS &&
        this._navigator?.tracking._rff30e139de703a(
          "InterfaceExplorer",
          "select",
          "room.settings.doormode.seen",
        ));
  }, "_re18ed06774f63c");
  _r00fb1ed8e27a6b = n((e) => {
    this.refreshFlatControllers();
  }, "_r00fb1ed8e27a6b");
  _r8fadd4ffb630d4 = n((e) => {
    if (
      this._window == null ||
      this._navigator == null ||
      this._rca0555b3d9fb88.selectedRow < 0
    )
      return;
    let s =
      this._window
        .findChildByName("moderation_banned_users")
        ?.getListItemAt(this._rca0555b3d9fb88.selectedRow)
        ?.findChildByName("user_info_region")?.id ?? 0;
    s > 0 && this._navigator.send(new _i5ad8ab28093e10(s, this._flatId));
  }, "_r8fadd4ffb630d4");
  getHelpPageWithTab(e) {
    return e === a.TAB_CLUB_AND_CHAT ? "chat/options" : "";
  }
  _r25d12159a66ac0 = n((e) => {
    this._navigator?.tracking._rff30e139de703a(
      "InterfaceExplorer",
      "hover",
      "room.settings.walkthrough.seen",
    );
  }, "_r25d12159a66ac0");
  _r279dd75e36d0f4 = n((e) => {
    this._navigator?.tracking._rff30e139de703a(
      "InterfaceExplorer",
      "hover",
      "room.settings.chat.floodfilter.seen",
    );
  }, "_r279dd75e36d0f4");
  getPasswordContainer() {
    return this._window?.findChildByName("password_container");
  }
  getRemoveAllFlatCtrlsButton() {
    return this._window?.findChildByName("remove_all_flat_ctrls");
  }
  showDeleteButton() {
    if (this._window == null || this._navigator == null) return;
    let e = this._window.findChildByName("remove_link_region"),
      r = this._window.findChildByName("remove_link"),
      t = this._window.findChildByName("remove_icon");
    this._navigator.sessionData.isAccountSafetyLocked()
      ? (e?.disable(), r != null && (r.blend = 0.5), t != null && (t.blend = 0.5))
      : (e?.enable(), r != null && (r.blend = 1), t != null && (t.blend = 1));
  }
  refreshNavigatorTabs() {
    if (
      this._window != null &&
      ((this._tabContext = this._window.findChildByName("tab_context")),
      this._tabContext != null)
    ) {
      for (let e = 0; e < this._tabContext.numTabItems; e++) {
        let r = this._tabContext.getTabItemAt(e);
        if (r == null) continue;
        let t = this._r90fd10f777c59b && (r.id === a.TAB_ACCESS_RIGHTS || r.id === a.TAB_ROOM_RIGHTS);
        r.visible = !t;
      }
      this._tabContext.selector?.setSelected(
        this._window.findChildByName(`tab_${this._currentTab}`),
      );
    }
  }
  _r1b8b4c32c25235() {
    if (this._window == null || this._tabContext == null) return;
    let e = 0;
    for (let t = 0; t < this._tabContext.numTabItems; t++)
      this._tabContext.getTabItemAt(t)?.visible && e++;
    if (e < 1) return;
    let r = Math.floor(this._window.width / e);
    r -= 1;
    for (let t = 0; t < this._tabContext.numTabItems; t++) {
      let i = this._tabContext.getTabItemAt(t);
      if (i == null) continue;
      let s = this._r90fd10f777c59b && (i.id === a.TAB_ACCESS_RIGHTS || i.id === a.TAB_ROOM_RIGHTS);
      i.width = s ? 0 : r;
    }
  }
  _r1377388410fd56(e, r) {
    e != null && (r ? e.select() : e.unselect());
  }
}
