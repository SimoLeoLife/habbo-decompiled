// Estratto da HabboAirLauncher.deobf.js, riga 357351.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_settings/WiredMenuSettingsTab.as
// Nome offuscato: _i11371175bee782

class extends WiredMenuDefaultTab {
  static {
    n(this, "WiredMenuSettingsTab");
  }
  MODIFY_PERMISSION_OPTIONS = [RoomControllerLevelEnum.ROOM_CONTROLLER, RoomControllerLevelEnum.GUILD_MEMBER, RoomControllerLevelEnum.GUILD_ADMIN];
  _rb5416de26a0bc1 = [RoomControllerLevelEnum.NOT_CONTROLLER, RoomControllerLevelEnum.ROOM_CONTROLLER, RoomControllerLevelEnum.GUILD_MEMBER, RoomControllerLevelEnum.GUILD_ADMIN];
  var_930 = -1;
  var_949 = -1;
  var_872 = null;
  _r362ed1dd3dcc03 = !1;
  _r29693ec40a0622 = !1;
  _r431a9da4bc0713 = !1;
  constructor(e, r) {
    (super(e, r),
      this.addMessageEvent(new class_3275((t) => this._r07ff59de43e6c7(t))),
      this.updateLoadingState(),
      this.requestData());
    for (let t of this.MODIFY_PERMISSION_OPTIONS) {
      let i = this.getModifyCheckbox(t);
      (i.addEventListener(y.const_238, this._r78ea73ed129903),
        i.addEventListener(y.const_1217, this._r78ea73ed129903));
    }
    for (let t of this._rb5416de26a0bc1) {
      let i = this.getReadCheckbox(t);
      (i.addEventListener(y.const_238, this._r78ea73ed129903),
        i.addEventListener(y.const_1217, this._r78ea73ed129903));
    }
    (this.toolbarCheckbox.addEventListener(y.const_238, this._ra3896d7a7de759),
      this.toolbarCheckbox.addEventListener(y.const_1217, this._ra3896d7a7de759),
      this.wiredInspectButton.addEventListener(y.const_238, this._ra3896d7a7de759),
      this.wiredInspectButton.addEventListener(y.const_1217, this._ra3896d7a7de759),
      this.playtestCheckbox.addEventListener(y.const_238, this._ra3896d7a7de759),
      this.playtestCheckbox.addEventListener(y.const_1217, this._ra3896d7a7de759),
      this.allNotificationsCheckbox.addEventListener(y.const_238, this._ra3896d7a7de759),
      this.allNotificationsCheckbox.addEventListener(y.const_1217, this._ra3896d7a7de759),
      this.uiStyleDropdown.addEventListener(y.const_238, this._ra3896d7a7de759),
      this.saveReloadButton.addEventListener(u.CLICK, this._r418dda960baf71),
      this.rollbackButton.addEventListener(u.CLICK, this._rdf8addbe2fa51c),
      this.timezoneDropdown.addEventListener(y.const_238, this._r8b620ce8799fa8),
      (this.wiredStyleBorder.visible = e.getBoolean("wired.ui_picker_enabled")));
  }
  _r7730f6cdc2e2b0() {
    this.updateButtonsUI();
  }
  isDataReady() {
    return this.var_930 !== -1 && this.var_949 !== -1 && this.var_872 != null;
  }
  initializeInterface() {
    (this._r9585274a497801(),
      this._r5154508cf1bf20(),
      this.updateTimezoneUI(),
      this.updateButtonsUI(),
      this._r07d98b27a0c22e());
  }
  _r5154508cf1bf20() {
    ((this._r362ed1dd3dcc03 = !0),
      we.select(this.toolbarCheckbox, this.controller._r62e1bd3b7b027a),
      we.select(this.wiredInspectButton, this.controller.wiredInspectButton),
      we.select(this.playtestCheckbox, this.controller.playTestMode),
      we.select(this.allNotificationsCheckbox, this.controller._r64205135e7d200),
      (this._r362ed1dd3dcc03 = !1));
  }
  _rdf8addbe2fa51c = n((e) => {
    this.controller.windowManager.confirm(
      "${wiredmenu.settings.room_state.roll_back}",
      "${wiredmenu.settings.room_state.roll_back.warning}",
      0,
      this._r756dae6c285b52,
    )._r3d7b1775b50b97 = 13909337;
  }, "_rdf8addbe2fa51c");
  _r756dae6c285b52 = n((e, r) => {
    (r.type === y.const_1300 && this.controller.send(new _i63ed097d6c2af1(!0)), e.dispose());
  }, "_r756dae6c285b52");
  _r418dda960baf71 = n((e) => {
    this.controller.send(new _i63ed097d6c2af1(!1));
  }, "_r418dda960baf71");
  _r07ff59de43e6c7(e) {
    let r = e.getParser();
    ((this.var_930 = r._r3669af806a9474),
      (this.var_949 = r._r0ba255332a5c40),
      (this.var_872 = r.timezone),
      this.updateLoadingState());
  }
  requestData() {
    this.controller.send(new class_3286());
  }
  _r78ea73ed129903 = n((e) => {
    if (this._r362ed1dd3dcc03) return;
    let r = e.target,
      t = r.id,
      i = r.name.indexOf("modify_") === 0,
      s = e.type === y.const_238;
    (i
      ? s
        ? (this.var_930 |= 1 << t)
        : (this.var_930 &= ~(1 << t))
      : s
        ? (this.var_949 |= 1 << t)
        : (this.var_949 &= ~(1 << t)),
      this._r9585274a497801(),
      this.updateTimezoneUI(),
      this.controller.send(new _id9833b3ff80004(this.var_930, this.var_949, this.var_872)));
  }, "_r78ea73ed129903");
  _r8b620ce8799fa8 = n((e) => {
    if (this._r29693ec40a0622) return;
    let r = this.timezoneDropdown.selection;
    (r < 0 || r >= this.timezoneDropdown.numMenuItems
      ? (this.var_872 = "")
      : (this.var_872 = this.timezoneDropdown.enumerateSelection()[r]),
      this.controller.send(new _id9833b3ff80004(this.var_930, this.var_949, this.var_872)));
  }, "_r8b620ce8799fa8");
  updateButtonsUI() {
    let e = this.controller._r7443e8b7432aa8(),
      r = this.controller.hasWritePermission;
    (we.disableSection(this.saveReloadButton, !r), we.disableSection(this.rollbackButton, !e));
  }
  updateTimezoneUI() {
    this._r29693ec40a0622 = !0;
    let e = this.controller.getProperty("wired.timezones"),
      r = e == null || e === "" ? ["UTC"] : e.split(","),
      t = [];
    this.var_872 !== "" && t.push(this.var_872);
    for (let i of r) i !== this.var_872 && t.push(i);
    (this.timezoneDropdown.populateWithVector(t),
      t.length > 0 && (this.timezoneDropdown.selection = 0),
      we.disableSection(this.timezoneDropdown, t.length < 2 || !this.timezoneContainer.isEnabled()),
      (this._r29693ec40a0622 = !1));
  }
  _r07d98b27a0c22e() {
    this._r431a9da4bc0713 = !0;
    let t = [
        this.localization.getLocalizationWithParams(
          "wiredmenu.settings.preferences.wired_style.default",
          "",
          "name",
          we.snakeToTitle("default"),
        ),
      ],
      i = ["volter", "volter_blue", "volter_green", "volter_yellow", "illumina", "ubuntu"];
    for (let s of i) t.push(we.snakeToTitle(s));
    (this.uiStyleDropdown.populate(t),
      (this._r46d2bdfd4f4507 = this.controller.uiStyle),
      (this._r431a9da4bc0713 = !1));
  }
  _r9585274a497801() {
    ((this._r362ed1dd3dcc03 = !0),
      (this._r860b6e4c22aaf1 = this.var_930),
      (this._rf8ecbe82259641 = this.var_949));
    let e = this.controller._r7443e8b7432aa8();
    if (
      (we.disableSection(this.modifySettingsContainer, !e),
      we.disableSection(this.readSettingsContainer, !e),
      we.disableSection(this.timezoneContainer, !e),
      this.getModifyCheckbox(RoomControllerLevelEnum.GUILD_MEMBER).isSelected &&
        (this.getModifyCheckbox(RoomControllerLevelEnum.GUILD_ADMIN).select(),
        we.disableSection(this.getModifyCheckbox(RoomControllerLevelEnum.GUILD_ADMIN))),
      this.getReadCheckbox(RoomControllerLevelEnum.GUILD_MEMBER).isSelected &&
        (this.getReadCheckbox(RoomControllerLevelEnum.GUILD_ADMIN).select(),
        we.disableSection(this.getReadCheckbox(RoomControllerLevelEnum.GUILD_ADMIN))),
      this.getReadCheckbox(RoomControllerLevelEnum.NOT_CONTROLLER).isSelected)
    )
      for (let r of this._rb5416de26a0bc1) {
        if (r === RoomControllerLevelEnum.NOT_CONTROLLER) continue;
        let t = this.getReadCheckbox(r);
        (t.select(), we.disableSection(t));
      }
    for (let r of this.MODIFY_PERMISSION_OPTIONS)
      if (this.getModifyCheckbox(r).isSelected) {
        let i = this.getReadCheckbox(r);
        (i.select(), we.disableSection(i));
      }
    this._r362ed1dd3dcc03 = !1;
  }
  _ra3896d7a7de759 = n((e) => {
    this._r362ed1dd3dcc03 ||
      this._r431a9da4bc0713 ||
      ((this.controller._r62e1bd3b7b027a = this.toolbarCheckbox.isSelected),
      (this.controller.wiredInspectButton = this.wiredInspectButton.isSelected),
      this.controller.setPlayTestMode(this.playtestCheckbox.isSelected, !0),
      (this.controller._r64205135e7d200 = this.allNotificationsCheckbox.isSelected),
      (this.controller.uiStyle = this._r46d2bdfd4f4507),
      this.controller._rdba8d58443ab74());
  }, "_ra3896d7a7de759");
  set _r46d2bdfd4f4507(e) {
    if (((this._r431a9da4bc0713 = !0), e === "")) {
      this.uiStyleDropdown.selection = 0;
      return;
    }
    let t = ["volter", "volter_blue", "volter_green", "volter_yellow", "illumina", "ubuntu"].indexOf(e) + 1;
    ((this.uiStyleDropdown.selection = t), (this._r431a9da4bc0713 = !1));
  }
  get _r46d2bdfd4f4507() {
    return this.uiStyleDropdown.selection <= 0
      ? ""
      : (["volter", "volter_blue", "volter_green", "volter_yellow", "illumina", "ubuntu"][
          this.uiStyleDropdown.selection - 1
        ] ?? "");
  }
  get modifySettingsContainer() {
    return this.container.findChildByName("modify_settings_container");
  }
  get readSettingsContainer() {
    return this.container.findChildByName("read_settings_container");
  }
  get timezoneContainer() {
    return this.container.findChildByName("timezone_container");
  }
  get toolbarCheckbox() {
    return this.container.findChildByName("preference_toolbar_checkbox");
  }
  get wiredInspectButton() {
    return this.container.findChildByName("preference_inspect_button_checkbox");
  }
  get playtestCheckbox() {
    return this.container.findChildByName("preference_playtest_checkbox");
  }
  get allNotificationsCheckbox() {
    return this.container.findChildByName("preference_all_notifications_checkbox");
  }
  getModifyCheckbox(e) {
    return this.container.findChildByName(`modify_${e}_checkbox`);
  }
  getReadCheckbox(e) {
    return this.container.findChildByName(`read_${e}_checkbox`);
  }
  get timezoneDropdown() {
    return this.container.findChildByName("timezone_picker");
  }
  get uiStyleDropdown() {
    return this.container.findChildByName("wired_style_picker");
  }
  get wiredStyleBorder() {
    return this.container.findChildByName("wired_style_border");
  }
  get saveReloadButton() {
    return this.container.findChildByName("reload_room_btn");
  }
  get rollbackButton() {
    return this.container.findChildByName("roll_back_btn");
  }
  get _r860b6e4c22aaf1() {
    let e = 0;
    for (let r of this.MODIFY_PERMISSION_OPTIONS) this.getModifyCheckbox(r).isSelected && (e |= 1 << r);
    return e;
  }
  get _rf8ecbe82259641() {
    let e = 0;
    for (let r of this._rb5416de26a0bc1) this.getReadCheckbox(r).isSelected && (e |= 1 << r);
    return e;
  }
  set _r860b6e4c22aaf1(e) {
    for (let r of this.MODIFY_PERMISSION_OPTIONS) we.select(this.getModifyCheckbox(r), (e & (1 << r)) !== 0);
  }
  set _rf8ecbe82259641(e) {
    for (let r of this._rb5416de26a0bc1) we.select(this.getReadCheckbox(r), (e & (1 << r)) !== 0);
  }
}
