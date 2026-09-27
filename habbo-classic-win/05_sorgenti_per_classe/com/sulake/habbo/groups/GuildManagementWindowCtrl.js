// Extracted from HabboAirLauncher.deobf.js, line 226576.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/GuildManagementWindowCtrl.as

class a {
  static {
    n(this, "GuildManagementWindowCtrl");
  }
  static _rbe7f360c9fb979 = 1;
  static VIEW_BADGE = 2;
  static VIEW_COLORS = 3;
  static VIEW_CONFIRM = 4;
  static _r8e78665801125e = 5;
  static const_447 = 43;
  static const_702 = 69;
  static EDIT_HEADER_TEXTS_OFFSET = -20;
  static CREATE_HEADER_BITMAP_OFFSET = 36;
  static _r3e8709180533ac = 5;
  static STEP_TITLE_Y_OFFSET_INACTIVE = 9;
  static STEP_TITLE_CREDIT_Y_OFFSET_ACTIVE = 6;
  static STEP_TITLE_CREDIT_Y_OFFSET_INACTIVE = 10;
  static MAX_DESCRIPTION_LENGTH = 255;
  static MAX_NAME_LENGTH = 30;
  var_41;
  _window = null;
  _r43f4612052f01c;
  _rb03b7f35518473;
  var_278;
  _r6b1fafe6bd66a8;
  _r0f2254e5b34d34 = !1;
  var_1599 = 0;
  _data = null;
  var_98 = a._rbe7f360c9fb979;
  constructor(e) {
    ((this.var_41 = e),
      (this._r43f4612052f01c = new BadgeEditorCtrl(e)),
      (this._rb03b7f35518473 = new ColorGridCtrl(e, this._rec0de3cb81df01)),
      (this.var_278 = new ColorGridCtrl(e, this._r009c6727b1a558)),
      (this._r6b1fafe6bd66a8 = new iQ()));
  }
  dispose() {
    ((this.var_41 = null),
      this._window?.dispose(),
      (this._window = null),
      this._r43f4612052f01c?.dispose(),
      (this._r43f4612052f01c = null),
      this._rb03b7f35518473?.dispose(),
      (this._rb03b7f35518473 = null),
      this.var_278?.dispose(),
      (this.var_278 = null),
      (this._r6b1fafe6bd66a8 = null),
      (this._data = null));
  }
  get disposed() {
    return this.var_41 == null;
  }
  get data() {
    return this._data;
  }
  onFlatCreated(e, r) {
    if (
      this._window != null &&
      this._window.visible &&
      this._data != null &&
      !this._data.exists
    ) {
      (this._data.class_2912.splice(0, 0, new class_2912(e, r, !1)), this.prepareRoomSelection());
      let t = this._r2a4bd191909b74();
      t != null && (t.selection = 0);
    }
  }
  _r5a2ff7e5d905f9() {
    this._window != null &&
      this._window.visible &&
      this._data != null &&
      !this._data.exists &&
      this.var_98 === a.VIEW_CONFIRM &&
      this.refresh();
  }
  onGuildCreationInfo(e) {
    ((this._data = e),
      (this.var_98 = a._rbe7f360c9fb979),
      (this.var_1599 = 0),
      this.refresh(),
      this.refreshBadgeImage(),
      this.setupInputs(),
      this.var_41?.localization._r43eae9731f5b27(
        "group.create.confirm.buyinfo",
        "amount",
        `${e.costInCredits}`,
      ),
      this._window != null &&
        ((this._window.visible = !0), this._window.activate()));
  }
  onGuildEditInfo(e) {
    ((this._data = e),
      (this.var_98 = a._rbe7f360c9fb979),
      (this.var_1599 = 0),
      this.refresh(),
      this.refreshBadgeImage(),
      this.setupInputs());
    let r = this._window?.findChildByName("edit_guild_tab_context"),
      t = this._window?.findChildByName(`edit_tab_${this.var_98}`);
    (r?.selector != null && t != null && r.selector.setSelected(t),
      this._window != null &&
        ((this._window.visible = !0), this._window.activate()));
  }
  refresh() {
    if (
      (this.prepare(), this._window == null || this._data == null || this.var_41 == null)
    )
      return;
    let e = !this._data.exists || this._data.isOwner;
    ((this._window.findChildByName("edit_tab_1").visible = e),
      (this._window.findChildByName("edit_tab_2").visible = e),
      (this._window.findChildByName("edit_tab_3").visible = e),
      (this._window.findChildByName("edit_tab_5").visible = e));
    for (let r = 1; r <= a._r8e78665801125e; r++) {
      this.getStepContainer(r).visible = this.var_98 === r;
      let t = this._window.findChildByName(`header_pic_bitmap_step_${r}`);
      t != null &&
        ((t.y = this._data.exists ? 0 : a.CREATE_HEADER_BITMAP_OFFSET), (t.visible = this.var_98 === r));
    }
    ((this._window.findChildByName("header_caption_txt").caption = this.getStepCaption()),
      (this._window.findChildByName("header_desc_txt").caption = this.getStepDesc()),
      (this._window.findChildByName("header_caption_txt").y =
        a.const_447 + this._rd7310321010aee()),
      (this._window.findChildByName("header_desc_txt").y =
        a.const_702 + this._rd7310321010aee()),
      (this._window.findChildByName("edit_guild_tab_context").visible = this._data.exists),
      (this._window.findChildByName("footer_cont").visible = !this._data.exists),
      (this._window.findChildByName("reset_badge").visible = !1),
      (this._window.findChildByName("reset_colors").visible = !1),
      this.var_98 === a.VIEW_BADGE &&
        (this._data.exists || this.var_41.trackGoogle("groupPurchase", "step2_badge"),
        this._r43f4612052f01c?._re0464c210e97d9 ||
          (this._r43f4612052f01c?.createWindow(
            this.getStepContainer(a.VIEW_BADGE),
            this._data.class_2482,
          ),
          this._r43f4612052f01c?._r84f067f63f8dbf(this._data.class_2482)),
        (this._window.findChildByName("reset_badge").visible = this._data.exists)),
      this.var_98 === a.VIEW_COLORS &&
        (this._data.exists || this.var_41.trackGoogle("groupPurchase", "step3_colors"),
        !this._rb03b7f35518473?.isInitialized &&
          this.var_41._r1b5a723df2ea20 != null &&
          (this._rb03b7f35518473?.createAndAttach(
            this.getStepContainer(a.VIEW_COLORS),
            "guild_primary_color_selector",
            this.var_41._r1b5a723df2ea20._r4116399c1f56ae,
          ),
          this._data.exists
            ? this._rb03b7f35518473?._r9dd080819cbc78(this._data._rd4fc3f07ad4d04)
            : this._rb03b7f35518473?._r9dd080819cbc78(
                this.var_41._r1b5a723df2ea20._r344683a4b0bb1d(
                  this._r43f4612052f01c?._r8963fcaa18995c ?? 0,
                ),
              )),
        !this.var_278?.isInitialized &&
          this.var_41._r1b5a723df2ea20 != null &&
          (this.var_278?.createAndAttach(
            this.getStepContainer(a.VIEW_COLORS),
            "guild_secondary_color_selector",
            this.var_41._r1b5a723df2ea20._r0526282f9f6f77,
          ),
          this._data.exists
            ? this.var_278?._r9dd080819cbc78(this._data._r95ee941642047f)
            : this.var_278?._r9dd080819cbc78(
                this.var_41._r1b5a723df2ea20._rb6bb981ce59916(
                  this._r43f4612052f01c?._r0527440ee345a4 ?? 0,
                ),
              )),
        (this._window.findChildByName("reset_colors").visible = this._data.exists)),
      this.var_98 === a._r8e78665801125e &&
        !this._r6b1fafe6bd66a8?.isInitialized &&
        this._r6b1fafe6bd66a8?.refresh(this._data),
      this.var_98 === a.VIEW_CONFIRM &&
        (this._data.exists || this.var_41.trackGoogle("groupPurchase", "step4_confirm"),
        this.updateConfirmPreview()),
      this.var_98 === a._rbe7f360c9fb979 &&
        (this._data.exists
          ? (this.var_41.windowManager.registerLocalizationParameter(
              "group.membercount",
              "totalMembers",
              `${this._data._r25bd5f5a9273b2}`,
            ),
            (this._window.findChildByName("step_1_members_txt").caption =
              this.var_41.localization.getLocalization("group.membercount")))
          : this.var_41.trackGoogle("groupPurchase", "step1_identity"),
        (this._window.findChildByName("base_label").visible = !this._data.exists),
        (this._window.findChildByName("base_dropmenu").visible = !this._data.exists),
        (this._window.findChildByName("base_warning").visible = !this._data.exists),
        (this._window.findChildByName("create_room_link_region").visible = !this._data.exists),
        (this._window.findChildByName("step_1_members_region").visible = this.data?.exists ?? !1)),
      this.refreshCreateHeader());
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  prepare() {
    this._window == null &&
      ((this._window = this.var_41?.getXmlWindow("group_management_window")),
      this._window != null &&
        ((this._window.findChildByTag("close").procedure = this._r99a11b1122296e),
        this._window.center(),
        (this._window.findChildByName("create_room_link_region").procedure = this._r68282ad60c29a8),
        (this._window.findChildByName("cancel_link_region").procedure = this._r92ec6eaa12613e),
        (this._window.findChildByName("next_step_button").procedure = this._r5279d61c081721),
        (this._window.findChildByName("previous_step_link_region").procedure =
          this._r2e5f51c185fb1b),
        (this._window.findChildByName("buy_button").procedure = this._rcccb747f704f98),
        (this._window.findChildByName("vip_required_region").procedure = this._rd198b6a60a6688),
        this._window.addEventListener(y.const_210, this._ra9e7b37c0b51b1),
        (this._window.findChildByName("edit_tab_1").procedure = this._re18ed06774f63c),
        (this._window.findChildByName("edit_tab_2").procedure = this._re18ed06774f63c),
        (this._window.findChildByName("edit_tab_3").procedure = this._re18ed06774f63c),
        (this._window.findChildByName("edit_tab_5").procedure = this._re18ed06774f63c),
        (this._window.findChildByName("reset_badge").procedure = this._rd3766908824d76),
        (this._window.findChildByName("reset_colors").procedure = this._r20a6f7e956789c),
        (this._window.findChildByName("step_1_members_region").procedure = this.onMembersClick),
        this._r6b1fafe6bd66a8?.prepare(this._window)));
  }
  setupInputs() {
    this._window == null ||
      this._data == null ||
      ((this._window.findChildByName("name_txt").text = this._data.groupName),
      (this._window.findChildByName("desc_txt").text = this._data._rc7d9c89cfbc1c4),
      this.prepareRoomSelection(),
      this._r43f4612052f01c?._r84f067f63f8dbf(this._data.class_2482),
      this._rb03b7f35518473?._r9dd080819cbc78(this._data._rd4fc3f07ad4d04),
      this.var_278?._r9dd080819cbc78(this._data._r95ee941642047f),
      this._r6b1fafe6bd66a8?.refresh(this._data));
  }
  updateConfirmPreview() {
    if (this.var_41?._r1b5a723df2ea20 == null || this._window == null) return;
    if (this._r43f4612052f01c?._re0464c210e97d9) {
      let r = this._r43f4612052f01c._r71c473d698e352(),
        t = this._window.findChildByName("badge_preview_image");
      t != null && (t.bitmap = r);
    }
    if (this._rb03b7f35518473?.isInitialized) {
      let r = this._rb03b7f35518473.getSelectedColorData(),
        t = this._window.findChildByName("badge_preview_primary_color_top");
      r != null && t != null && (t.color = r.color);
    }
    if (this.var_278?.isInitialized) {
      let r = this.var_278.getSelectedColorData(),
        t = this._window.findChildByName("badge_preview_secondary_color_top");
      r != null && t != null && (t.color = r.color);
    }
    let e = this.var_41.sessionDataManager?.hasVip ?? !1;
    (e
      ? (this._window.findChildByName("buy_button")?.enable(),
        (this._window.findChildByName("buy_border").color = 16761600))
      : ((this._window.findChildByName("buy_border").color = 11184810),
        this._window.findChildByName("buy_button")?.disable()),
      (this._window.findChildByName("vip_required_border").visible = !e),
      (this._window.findChildByName("confirmation_caption").caption =
        this._window.findChildByName("name_txt")?.text ?? ""));
  }
  refreshCreateHeader() {
    if (
      !(this._window == null || this._data == null) &&
      ((this._window.findChildByName("steps_header_cont").visible = !this._data.exists),
      !this._data.exists)
    ) {
      ((this._window.findChildByName("next_step_button").visible = this._r8c78b3b243afca()),
        (this._window.findChildByName("previous_step_link_region").visible =
          this._r321c96d5fa0b3f()),
        (this._window.findChildByName("cancel_link_region").visible = !this._r321c96d5fa0b3f()),
        (this._window.findChildByName("buy_border").visible = !this._r8c78b3b243afca()));
      for (let e = 1; e <= a.VIEW_CONFIRM; e++)
        ((this.getStepHeader(e, !1).visible = e !== this.var_98),
          (this.getStepHeader(e, !0).visible = e === this.var_98),
          (this._window.findChildByName(`step_title_${e}`).y =
            e === this.var_98 ? a._r3e8709180533ac : a.STEP_TITLE_Y_OFFSET_INACTIVE));
      this._window.findChildByName("gcreate_icon_credit").y =
        this.var_98 === a.VIEW_CONFIRM ? a.STEP_TITLE_CREDIT_Y_OFFSET_ACTIVE : a.STEP_TITLE_CREDIT_Y_OFFSET_INACTIVE;
    }
  }
  prepareRoomSelection() {
    if (this._data == null || this.var_41 == null) return;
    let e = this._r2a4bd191909b74();
    if (e == null) return;
    let r = [
        this.var_41.localization.getLocalization(
          "group.edit.base.select.room",
          "group.edit.base.select.room",
        ),
      ],
      t = 0;
    for (let i = 0; i < this._data.class_2912.length; i++) {
      let s = this._data.class_2912[i];
      (r.push(s.roomName), s.roomId === this._data.baseRoomId && (t = i + 1));
    }
    (e.populate(r), r.length > 0 && (e.selection = t));
  }
  _r43903940202080() {
    let e = this._r2a4bd191909b74();
    if (e == null || this._data == null) return null;
    let r = e.selection - 1;
    return r >= 0 && r < this._data.class_2912.length ? (this._data.class_2912[r] ?? null) : null;
  }
  showAlert(e, r) {
    this._r0f2254e5b34d34 ||
      ((this._r0f2254e5b34d34 = !0),
      this.var_41?.windowManager.alert(e, r, 0, this._r9d8a83a2f57c04));
  }
  validateView() {
    if (this._window == null || this._data == null) return !1;
    switch (this.var_98) {
      case a._rbe7f360c9fb979: {
        let e = this._window.findChildByName("name_txt")?.text ?? "";
        if (!this._data.exists) {
          let t = this._r43903940202080();
          if (e.length === 0 || t == null || t.roomId === 0)
            return (
              this.showAlert(
                "${group.edit.error.title}",
                "${group.edit.error.no.name.or.room.selected}",
              ),
              !1
            );
          if (t._rc2d9dc4ee88551 && this.var_1599 !== t.roomId)
            return (
              (this.var_1599 = t.roomId),
              this.showAlert("${group.edit.error.warning}", "${group.edit.error.controllers}"),
              !1
            );
        }
        return e.length > a.MAX_NAME_LENGTH
          ? (this.showAlert("${group.edit.error.title}", "${group.edit.error.name.length}"), !1)
          : (this._window.findChildByName("desc_txt")?.text ?? "").length >= a.MAX_DESCRIPTION_LENGTH
            ? (this.showAlert("${group.edit.error.title}", "${group.edit.error.desc.length}"), !1)
            : !0;
      }
      case a.VIEW_BADGE:
        return (this._r43f4612052f01c?._rfe509f4dca11d4(), !0);
      case a.VIEW_COLORS:
        return this._rb03b7f35518473?.getSelectedColorData() == null ||
          this.var_278?.getSelectedColorData() == null
          ? (this.showAlert("${group.edit.error.title}", "${group.edit.error.no.color.selected}"), !1)
          : !0;
      default:
        return !0;
    }
  }
  _re857cc700f3ea3() {
    if (!(this._window == null || this._data == null || this.var_41 == null))
      switch (this.var_98) {
        case a._rbe7f360c9fb979: {
          let e = this._window.findChildByName("name_txt")?.text ?? "",
            r = this._window.findChildByName("desc_txt")?.text ?? "";
          (this._data.isOwner && this.var_41.send(new UnkMessageComposer_3args_7e3b21(this._data.groupId, e, r)),
            this.var_41.events.dispatchEvent?.(new GuildSettingsChangedInManageEvent(GuildSettingsChangedInManageEvent.GUILD_VISUAL_SETTINGS_CHANGED, this._data.groupId)));
          return;
        }
        case a.VIEW_BADGE: {
          let e = this._r43f4612052f01c?._re0464c210e97d9 ? this._r43f4612052f01c._r8c06e29dd50a40() : [];
          (this._data.isOwner && this.var_41.send(new UnkMessageComposer_2args_61cf81(this._data.groupId, e)),
            this.var_41.events.dispatchEvent?.(new GuildSettingsChangedInManageEvent(GuildSettingsChangedInManageEvent.GUILD_VISUAL_SETTINGS_CHANGED, this._data.groupId)));
          return;
        }
        case a.VIEW_COLORS: {
          let e = this._rb03b7f35518473?.isInitialized
              ? this._rb03b7f35518473._r4e3e2dbfcb6022()
              : this._data._rd4fc3f07ad4d04,
            r = this.var_278?.isInitialized
              ? this.var_278._r4e3e2dbfcb6022()
              : this._data._r95ee941642047f;
          (this._data.isOwner && this.var_41.send(new UnkMessageComposer_3args_edffb9(this._data.groupId, e, r)),
            this.var_41.events.dispatchEvent?.(new GuildSettingsChangedInManageEvent(GuildSettingsChangedInManageEvent.GUILD_VISUAL_SETTINGS_CHANGED, this._data.groupId)));
          return;
        }
        case a._r8e78665801125e:
          (this._data.isOwner &&
            this.var_41.send(
              new UnkMessageComposer_3args_6467d8(
                this._data.groupId,
                this._r6b1fafe6bd66a8?.guildType ?? iQ._r0c2f6e840546db,
                this._r6b1fafe6bd66a8?._r40e0656765dad1 ?? iQ._rf28a828a634ee8,
              ),
            ),
            this._r6b1fafe6bd66a8?.resetModified());
          return;
        default:
          return;
      }
  }
  _red8fdf0b871872() {
    if (this._window == null || this._data == null || this.var_41 == null) return;
    let e = this._r43903940202080();
    if (e == null) return;
    let r = this._window.findChildByName("name_txt")?.text ?? "",
      t = this._window.findChildByName("desc_txt")?.text ?? "",
      i = this._r43f4612052f01c?._re0464c210e97d9 ? this._r43f4612052f01c._r8c06e29dd50a40() : [],
      s = this._rb03b7f35518473?.isInitialized
        ? this._rb03b7f35518473._r4e3e2dbfcb6022()
        : this._data._rd4fc3f07ad4d04,
      o = this.var_278?.isInitialized
        ? this.var_278._r4e3e2dbfcb6022()
        : this._data._r95ee941642047f;
    ((this.var_1599 = 0), this.var_41.send(new class_2433(r, t, e.roomId, s, o, i)));
  }
  _r321c96d5fa0b3f() {
    return this.var_98 !== this._rd58bf9d9207423(this.var_98 - 1);
  }
  _r8c78b3b243afca() {
    return this.var_98 !== this._rd58bf9d9207423(this.var_98 + 1);
  }
  _rd58bf9d9207423(e) {
    return Math.max(1, Math.min(e, a.VIEW_CONFIRM));
  }
  _r2a4bd191909b74() {
    return this._window?.findChildByName("base_dropmenu");
  }
  getStepHeader(e, r) {
    return this._window?.findChildByName(`gcreate_${e}_${r ? "1" : "0"}`) ?? null;
  }
  getStepContainer(e) {
    return this._window?.findChildByName(`step_cont_${e}`);
  }
  getStepCaption() {
    let e = `${this._data?.exists ? "group.edit.tabcaption." : "group.create.stepcaption."}${this.var_98}`;
    return this.var_41?.localization.getLocalization(e, e) ?? e;
  }
  getStepDesc() {
    let e = `${this._data?.exists ? "group.edit.tabdesc." : "group.create.stepdesc."}${this.var_98}`;
    return this.var_41?.localization.getLocalization(e, e) ?? e;
  }
  _rd7310321010aee() {
    return this._data?.exists ? a.EDIT_HEADER_TEXTS_OFFSET : 0;
  }
  refreshBadgeImage() {
    if (this._window == null || this._data == null) return;
    let e = this._window.findChildByName("step_1_badge"),
      r = this._window.findChildByName("group_logo")?.widget;
    if (!(r == null || e == null)) {
      if (!this._data.exists) {
        ((e.visible = !1), e.invalidate());
        return;
      }
      ((r.badgeId = this._data._rc9fc89e7eb27a7),
        (r.groupId = this._data.groupId),
        (e.visible = !0),
        e.invalidate());
    }
  }
  _re18ed06774f63c = n((e, r) => {
    if (!(e.type !== y.const_587 || r.id === this.var_98)) {
      if (!this.validateView()) {
        e.preventDefault();
        return;
      }
      (this._re857cc700f3ea3(), (this.var_98 = r.id), this.refresh());
    }
  }, "_re18ed06774f63c");
  _r20a6f7e956789c = n((e, r) => {
    e.type === u.CLICK &&
      this._data != null &&
      (this._rb03b7f35518473?.isInitialized &&
        this._rb03b7f35518473._r9dd080819cbc78(this._data._rd4fc3f07ad4d04),
      this.var_278?.isInitialized &&
        this.var_278._r9dd080819cbc78(this._data._r95ee941642047f));
  }, "_r20a6f7e956789c");
  _rd3766908824d76 = n((e, r) => {
    e.type === u.CLICK &&
      this._r43f4612052f01c?._re0464c210e97d9 &&
      this._data != null &&
      this._r43f4612052f01c._r84f067f63f8dbf(this._data.class_2482);
  }, "_rd3766908824d76");
  onMembersClick = n((e, r) => {
    e.type === u.CLICK &&
      this._data?.exists &&
      this.var_41?._rea8338004ec94f != null &&
      (this.var_41.trackGoogle("groupManagement", "groupMembers"),
      this.var_41._rea8338004ec94f.onMembersClick(this._data.groupId, class_2804.const_243));
  }, "onMembersClick");
  _r92ec6eaa12613e = n((e, r) => {
    e.type === u.CLICK && this.close();
  }, "_r92ec6eaa12613e");
  _r68282ad60c29a8 = n((e, r) => {
    e.type === u.CLICK && this.var_41?.navigator?._r545ad49cf926cc();
  }, "_r68282ad60c29a8");
  _r5279d61c081721 = n((e, r) => {
    e.type !== u.CLICK ||
      !this.validateView() ||
      ((this.var_98 = this._rd58bf9d9207423(this.var_98 + 1)), this.refresh());
  }, "_r5279d61c081721");
  _r2e5f51c185fb1b = n((e, r) => {
    e.type !== u.CLICK ||
      !this.validateView() ||
      ((this.var_98 = this._rd58bf9d9207423(this.var_98 - 1)), this.refresh());
  }, "_r2e5f51c185fb1b");
  _rcccb747f704f98 = n((e, r) => {
    e.type === u.CLICK &&
      (this._data != null &&
        !this._data.exists &&
        this.var_41?.trackGoogle("groupPurchase", "buyGroup"),
      this._red8fdf0b871872());
  }, "_rcccb747f704f98");
  _rd198b6a60a6688 = n((e, r) => {
    e.type === u.CLICK &&
      (this._data != null &&
        !this._data.exists &&
        this.var_41?.trackGoogle("groupPurchase", "buyVip"),
      this.var_41?._rb6435b5d818fc5("GuildManagementWindowCtrl"));
  }, "_rd198b6a60a6688");
  _r9d8a83a2f57c04 = n((e, r) => {
    (e.dispose(), (this._r0f2254e5b34d34 = !1));
  }, "_r9d8a83a2f57c04");
  _r99a11b1122296e = n((e, r) => {
    if (e.type === u.CLICK) {
      if (this._data?.exists) {
        if (!this.validateView()) return;
        this._re857cc700f3ea3();
      }
      this.close();
    }
  }, "_r99a11b1122296e");
  _rec0de3cb81df01 = n((e) => {
    if (this._window == null || this.var_41?._r1b5a723df2ea20 == null) return;
    let r = this._window.findChildByName("guild_color_primary_color_top");
    if (
      r != null &&
      e._r4c047a67fec73a >= 0 &&
      e._r4c047a67fec73a < this.var_41._r1b5a723df2ea20._r4116399c1f56ae.length
    ) {
      let t = this.var_41._r1b5a723df2ea20._r4116399c1f56ae[e._r4c047a67fec73a];
      r.color = t.color;
    }
  }, "_rec0de3cb81df01");
  _r009c6727b1a558 = n((e) => {
    if (this._window == null || this.var_41?._r1b5a723df2ea20 == null) return;
    let r = this._window.findChildByName("guild_color_secondary_color_top");
    if (
      r != null &&
      e._r4c047a67fec73a >= 0 &&
      e._r4c047a67fec73a < this.var_41._r1b5a723df2ea20._r0526282f9f6f77.length
    ) {
      let t = this.var_41._r1b5a723df2ea20._r0526282f9f6f77[e._r4c047a67fec73a];
      r.color = t.color;
    }
  }, "_r009c6727b1a558");
  _ra9e7b37c0b51b1 = n((e) => {
    this._data != null && this._data.exists && this._window?.visible && this._re857cc700f3ea3();
  }, "_ra9e7b37c0b51b1");
}
