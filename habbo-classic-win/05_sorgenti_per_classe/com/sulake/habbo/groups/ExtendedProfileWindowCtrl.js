// Estratto da HabboAirLauncher.deobf.js, riga 224988.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/ExtendedProfileWindowCtrl.as
// Nome offuscato: _ia0ab39c85fef69

class a {
  static {
    n(this, "ExtendedProfileWindowCtrl");
  }
  static GROUPS_TRACKING_CATEGORY = "HabboGroups";
  var_41;
  _window = null;
  _r2a354c29186109 = null;
  _r621f5cd19d8dff = null;
  var_433 = 0;
  _r996e23578aa456;
  _r801930331cfcd6 = null;
  _data = null;
  _rd523729a11ac98 = !1;
  _r5b8e8c12fd8a62 = !1;
  _ra95b25cfabd7d9 = !0;
  _rae06266a244499 = [];
  _badgeDetails = null;
  statusAsString = new B();
  _rf3c137cc7332ec = !1;
  constructor(e) {
    ((this.var_41 = e), (this._r996e23578aa456 = new GroupDetailsCtrl(e, !1)));
  }
  dispose() {
    ((this.var_41 = null),
      (this._r2a354c29186109 = null),
      (this._data = null),
      this._rf0f3e2c3c083d4(),
      this._r77a06ec00e12bc(),
      this.statusAsString.dispose(),
      this._window?.dispose(),
      (this._window = null),
      this._r996e23578aa456?.dispose(),
      (this._r996e23578aa456 = null));
  }
  get disposed() {
    return this.var_41 == null;
  }
  get linkPattern() {
    return "profile/";
  }
  _rf2a6ad6fedd3e4(e) {
    this._data != null &&
      this._data.userId === e &&
      (this._window?.visible ?? !1) &&
      (this.var_41?.send(new class_2134(e)), (this._rd523729a11ac98 = !0));
  }
  onProfile(e) {
    let r = this._data != null && this._data.userId === e.userId && (this._window?.visible ?? !1);
    this._data = e;
    let t = this._r34c7642abac7b0();
    (t == null &&
      (this._data.guilds.length > 0
        ? ((this.var_433 = this._data.guilds[0].groupId), (t = this._data.guilds[0]))
        : (this.var_433 = 0)),
      this.var_433 > 0 && this.var_41?.send(new _i494540f04bf21d(this.var_433, !1)),
      this.refresh(r),
      this._window != null &&
        ((this._window.visible = !0), this._rd523729a11ac98 || this._window.activate()),
      (this._rd523729a11ac98 = !1));
  }
  onGroupDetails(e) {
    if (this.var_433 !== e.groupId || this._window == null) return;
    let r = this._window.findChildByName("group_cont");
    if (r != null) {
      for (; r.numChildren > 0;) r.removeChildAt(0);
      (this._r996e23578aa456?.onGroupDetails(r, e), r.invalidate?.());
    }
  }
  _r0be3a5d0c19f2b(e, r) {
    this._data == null ||
      !this._rf3c137cc7332ec ||
      r == null ||
      (this.statusAsString.dispose(),
      (this.statusAsString = r.clone()),
      this.refreshRelationships(),
      (this._rd39bd9ad9719b3 = !1));
  }
  _rc03eebb4ddbfbb(e, r) {
    if (
      this._data == null ||
      !this._r5b8e8c12fd8a62 ||
      this._window == null ||
      this._data.userId !== e
    )
      return;
    let t = r ?? [],
      i = this._ra95b25cfabd7d9;
    ((this._ra95b25cfabd7d9 = !0), this.showBadgeInfo());
    for (let s of t)
      s == null ||
        s._r3d8be6b2a8461a < 0 ||
        s._r3d8be6b2a8461a > 4 ||
        ((this._rae06266a244499[s._r3d8be6b2a8461a] = s), this.setSelectedBadge(s._r3d8be6b2a8461a, s, i));
    this._rbf95c24baaafa7 = !1;
  }
  linkReceived(e) {
    let r = e.split("/");
    r.length === 2 &&
      r[1] === "unblock" &&
      this.var_41?.windowManager.confirm(
        "${extendedprofile.unblock_player.title}",
        "${extendedprofile.unblock_player.desc}",
        0,
        this.onConfirmUnblock,
      );
  }
  close() {
    this._window != null &&
      (this._rf0f3e2c3c083d4(), this._r77a06ec00e12bc(), (this._window.visible = !1));
  }
  _rccdc0573215159(e) {
    (this._window?.visible ?? !1) &&
      this._data != null &&
      this._data.userId !== e &&
      this.var_41?.send(new class_2134(e));
  }
  get _rbf95c24baaafa7() {
    return this._r5b8e8c12fd8a62;
  }
  set _rbf95c24baaafa7(e) {
    this._r5b8e8c12fd8a62 = e;
  }
  get _rd39bd9ad9719b3() {
    return this._rf3c137cc7332ec;
  }
  set _rd39bd9ad9719b3(e) {
    this._rf3c137cc7332ec = e;
  }
  prepareWindow() {
    if (!(this._window != null || this.var_41 == null)) {
      if (
        (this._r621f5cd19d8dff == null &&
          (this._r621f5cd19d8dff = this.var_41.getXmlWindow("group_entry")),
        this._r801930331cfcd6 == null)
      ) {
        this._r801930331cfcd6 = this.var_41.getXmlWindow("no_groups");
        let e = this._r801930331cfcd6?.findChildByName("view_groups_button") ?? null;
        e != null && (e.procedure = this.onViewGroups);
      }
      if (
        ((this._window = this.var_41.getXmlWindow("new_extended_profile")),
        this._window != null)
      ) {
        ((this._window.findChildByTag("close").procedure = this.onClose),
          (this._window.findChildByName("addasfriend_button").procedure = this._r115ec12f7ef3c1),
          (this._window.findChildByName("rooms_button").procedure = this._r758748c3ccfb58),
          (this._r2a354c29186109 = this._window.findChildByName("groups_list")),
          this._window.center(),
          (this._window.findChildByName("change_looks").procedure = this._r094ad4824f936e),
          (this._window.findChildByName("change_badges").procedure = this._rc82175b943fd12),
          (this._window.findChildByName("badgeCountRegion").procedure = this._rc3c8930ccd3be7),
          (this._window.findChildByName("user_activity_points").visible =
            this.var_41.isActivityDisplayEnabled),
          (this._window.findChildByName("block_button").procedure = this._r063b7501575349));
        for (let e = 0; e < 5; e++) {
          let r = this._window.findChildByName(`badge_${e}`);
          (r?.addEventListener(u.OVER, this._r0713f209362949),
            r?.addEventListener(u.OUT, this._r8db50ec12dc7d2));
        }
        for (let e of en.displayableStatuses)
          this._window.findChildByName(
            `${en._r23cf619d44ca19(e)}_friend_name_link_region`,
          ).procedure = this._rff4a80c6ccb3f8;
      }
    }
  }
  _r34c7642abac7b0() {
    if (this._data == null) return null;
    for (let e of this._data.guilds) if (e.groupId === this.var_433) return e;
    return null;
  }
  refresh(e = !1) {
    this._data == null ||
      this.var_41 == null ||
      (this.prepareWindow(),
      e || this.showBadgeInfo(),
      (this._ra95b25cfabd7d9 = !e),
      (this._rf3c137cc7332ec = !0),
      (this._r5b8e8c12fd8a62 = !0),
      this.var_41.send(new class_2592(this._data.userId)),
      this.var_41.send(new class_3706(this._data.userId)),
      this.refreshHeader(),
      this.refreshGroupList());
  }
  showBadgeInfo() {
    if (this._window != null) {
      this._rae06266a244499 = [];
      for (let e = 0; e < 5; e++) {
        let r = this.getBadgeWidget(e);
        r != null && ((r.type = Wo.NORMAL), (r.badgeId = ""));
      }
    }
  }
  refreshGroupList() {
    if (
      this._data == null ||
      this._r2a354c29186109 == null ||
      this._window == null ||
      this.var_41 == null ||
      this._r621f5cd19d8dff == null
    )
      return;
    let e = this._data.userId === this.var_41.avatarId;
    ((this._r2a354c29186109.visible = this._data.guilds.length > 0),
      this._r2a354c29186109.destroyListItems());
    for (let r of this._data.guilds) {
      let t = this._r621f5cd19d8dff.clone();
      if (t == null) continue;
      ((t.id = r.groupId),
        (t.findChildByName("bg_region").procedure = this._rffb03fc4ee8358),
        (t.findChildByName("bg_region").id = r.groupId),
        (t.findChildByName("clear_favourite").procedure = this._r691a76ed92c713),
        (t.findChildByName("clear_favourite").visible = r.favourite && e),
        (t.findChildByName("clear_favourite").id = r.groupId),
        (t.findChildByName("make_favourite").procedure = this._r3888682b891ede),
        (t.findChildByName("make_favourite").visible = !r.favourite && e),
        (t.findChildByName("make_favourite").id = r.groupId));
      let i = t.findChildByName("group_pic_bitmap")?.widget;
      (i != null &&
        ((i.type = Wo.GROUP), (i.badgeId = r._rc9fc89e7eb27a7), (i.groupId = r.groupId)),
        this._r2a354c29186109.addListItem(t));
    }
    if (
      (this.refreshGroupListSelection(),
      this.var_41.localization._r43eae9731f5b27(
        "extendedprofile.groups.count",
        "count",
        String(this._data.guilds.length),
      ),
      this._data.guilds.length < 1 && this._r801930331cfcd6 != null)
    ) {
      let r = this._window.findChildByName("group_cont");
      if (r != null) {
        for (; r.numChildren > 0;) r.removeChildAt(0);
        r.addChild(this._r801930331cfcd6);
      }
      ((this._r801930331cfcd6.findChildByName("no_groups_caption").caption =
        this.var_41.localization.getLocalization(
          e ? "extendedprofile.nogroups.me" : "extendedprofile.nogroups.user",
        )),
        (this._r801930331cfcd6.findChildByName("view_groups_button").visible = !0));
    }
  }
  refreshGroupListSelection() {
    if (this._r2a354c29186109 != null)
      for (let e = 0; e < this._r2a354c29186109.numListItems; e++) {
        let r = this._r2a354c29186109.getListItemAt(e);
        r != null &&
          ((r.findChildByName("bg_selected_bitmap").visible = this.var_433 === r.id),
          (r.findChildByName("bg_unselected_bitmap").visible = this.var_433 !== r.id));
      }
  }
  refreshHeader() {
    if (this._data == null || this._window == null || this.var_41 == null) return;
    let e = this._data.userId === this.var_41.avatarId,
      r = this._data.var_5648 && !e,
      t = this._data.isFriend || e;
    ((this._window.findChildByName("motto_txt").caption = this._data.motto),
      (this._window.findChildByName("status_txt").visible = t),
      (this._window.findChildByName("friend_request_sent_txt").visible =
        this._data.var_3816),
      (this._window.findChildByName("online_icon").visible =
        this._data.var_5251 === C7.const_582),
      (this._window.findChildByName("offline_icon").visible =
        this._data.var_5251 === C7.const_1187),
      (this._window.findChildByName("hidden_icon").visible =
        this._data.var_5251 === C7.const_444),
      this._window.findChildByName("status")?.invalidate?.(),
      this.var_41.localization._r43eae9731f5b27(
        "extendedprofile.username",
        "username",
        this._data.userName,
      ),
      this.var_41.localization._r43eae9731f5b27(
        "extendedprofile.created",
        "created",
        this._data.creationDate,
      ),
      this.var_41.localization._r43eae9731f5b27(
        "extendedprofile.activitypoints",
        "activitypoints",
        String(this._data.achievementScore),
      ),
      this.var_41.localization._r43eae9731f5b27(
        "extendedprofile.last.login",
        "lastlogin",
        this._data.var_5623 === -1
          ? "-"
          : ra.getFriendlyTime(this.var_41.localization, this._data.var_5623, ".ago"),
      ),
      this.var_41.localization._r43eae9731f5b27(
        "extendedprofile.friends.count",
        "count",
        this._data._r67f7b689f227b4 === -1 ? "-" : String(this._data._r67f7b689f227b4),
      ),
      (this._window.findChildByName("bottom").visible = !r),
      (this._window.findChildByName("full_profile_hidden").visible = r),
      this.refreshAvatarImage(),
      (this._window.findChildByName("addasfriend_button").visible =
        !this._data.isFriend &&
        !this._data.var_3816 &&
        !e &&
        (this.var_41.friendlist?._r7df26efa3d56a0(this._data.userId) ?? !1)),
      (this._window.findChildByName("ok_icon").visible = t),
      (this._window.findChildByName("status_txt").visible = t),
      (this._window.findChildByName("status_txt").caption =
        this.var_41.localization.getLocalization(
          this._data.isFriend ? "extendedprofile.friend" : "extendedprofile.me",
        )),
      (this._window.findChildByName("change_own_attributes").visible = e),
      (this._window.findChildByName("levelValue").caption = String(this._data.var_4789)),
      (this._window.findChildByName("badgeCount").caption = String(this._data.var_5597)));
    let i = this._window.findChildByName("badgeRank");
    i != null &&
      ((i.visible = this._data.var_4441 >= 0),
      i.visible && (i.caption = `(#${this._data.var_4441})`));
    let s = this._window.findChildByName("starGemCount");
    (s != null && (s.caption = String(this._data.var_4436)),
      (this._window.findChildByName("blocked_container").visible =
        this.var_41.sessionDataManager?.isBlocked(this._data.userId) ?? !1),
      (this._window.findChildByName("block_button").visible = !e));
  }
  refreshRelationships() {
    if (!(
      !(this.var_41?.getBoolean("relationship.status.enabled") ?? !1) ||
      this._window == null
    )) {
      this._window.findChildByName("rel_status_label_txt").visible = !0;
      for (let e of en.displayableStatuses) this.setRelationshipDetails(e);
    }
  }
  setRelationshipDetails(e) {
    if (this._window == null || this.var_41 == null) return;
    let r = this.statusAsString.getValue(e) ?? null,
      t = en._r23cf619d44ca19(e),
      i = this._window.findChildByName(`${t}_txt`),
      s = this._window.findChildByName(`${t}_friend_name_link_text`),
      o = this._window.findChildByName(`${t}_head`);
    if (r != null && r._r67f7b689f227b4 > 0) {
      (s != null && (s.caption = r.randomFriendName),
        o != null && ((o.visible = !0), (o.widget.figure = r.var_5197)),
        r._r67f7b689f227b4 > 1
          ? i != null &&
            ((i.visible = !0),
            i.invalidate?.(),
            (i.caption = this.var_41.localization.getLocalizationWithParams(
              `extendedprofile.relstatus.others.${t}`,
              "",
              "count",
              String(r._r67f7b689f227b4 - 1),
            )))
          : i != null && (i.visible = !1));
      return;
    }
    (o != null && (o.visible = !1),
      s != null && (s.caption = "${extendedprofile.add.friends}"),
      i != null && ((i.caption = "${extendedprofile.no.friends.in.this.category}"), (i.visible = !0)));
  }
  refreshAvatarImage() {
    if (this._window == null || this._data == null) return;
    let e = this._window.findChildByName("avatar_image")?.widget;
    e != null && (e.figure = this._data.figure);
  }
  isUncommonBadgeRarityEnabled() {
    return this.var_41?.getBoolean("badge_rarity.uncommon") ?? !1;
  }
  setSelectedBadge(e, r, t) {
    let i = this.getBadgeWidget(e);
    i != null &&
      ((i.type = Wo.NORMAL),
      (i.badgeId = r._rc9fc89e7eb27a7),
      (i.glowColor = vt.isStandaloneTier(r.badgeRarityId, this.isUncommonBadgeRarityEnabled())
        ? vt.getGlowColor(r.badgeRarityId, this.isUncommonBadgeRarityEnabled())
        : -1),
      t && i.glowColor >= 0 && i.playGlow(i.glowColor));
  }
  createBadgeDetails() {
    if (
      this._badgeDetails == null &&
      ((this._badgeDetails = this.var_41?.getXmlWindow("extended_profile_badge_details")),
      this._badgeDetails == null)
    )
      throw new Error("Failed to construct extended profile badge details window from XML!");
  }
  populateBadgeDetails(e, r, t) {
    this.createBadgeDetails();
    let i = this._badgeDetails?.findChildByName("details_list"),
      s = this._badgeDetails?.findChildByName("name"),
      o = this._badgeDetails?.findChildByName("description"),
      d = this._badgeDetails?.findChildByName("rarity_tag"),
      c = this._badgeDetails?.findChildByName("rarity_border"),
      f = this._badgeDetails?.findChildByName("rarity"),
      l = this._badgeDetails?.findChildByName("owner_count");
    (s != null && (s.text = e), o != null && ((o.visible = r !== ""), (o.text = r)));
    let b = t != null;
    (d != null && (d.visible = b),
      c != null && (c.text = ""),
      f != null && (f.text = ""),
      b &&
        t != null &&
        (f != null &&
          ((f.textColor = 16777215),
          (f.text =
            this.var_41?.localization.getLocalizationWithParams(
              "badge.rarity.badge",
              "",
              "rarity",
              this.var_41?.localization.getLocalization(
                vt.getLabelLocalizationKey(t.badgeRarityId, this.isUncommonBadgeRarityEnabled()),
              ) ?? "",
            ) ?? "")),
        c != null && f != null && (c.text = f.text),
        d != null && (d.color = vt.getWhiteBackgroundTagColor(t.badgeRarityId, this.isUncommonBadgeRarityEnabled()))));
    let _ = t != null && ka.shouldShowOwnerCount(t.ownerCount);
    (l != null &&
      ((l.visible = _),
      (l.text = ""),
      _ &&
        t != null &&
        (l.text =
          this.var_41?.localization.getLocalizationWithParams(
            "badge.owner_count",
            "",
            "count",
            ka._r141535094129a5(t.ownerCount),
          ) ?? "")),
      i != null &&
        this._badgeDetails != null &&
        (i.arrangeListItems(), (this._badgeDetails.height = i.y + i.height + 6)));
  }
  _rf0f3e2c3c083d4() {
    (this._badgeDetails?.dispose(), (this._badgeDetails = null));
  }
  _r77a06ec00e12bc() {
    for (let e = 0; e < 5; e++) this.getBadgeWidget(e)?.clearGlow();
  }
  getBadgeWidget(e) {
    return this._window == null
      ? null
      : (this._window.findChildByName(`badge_${e}`)?.widget ?? null);
  }
  _r115ec12f7ef3c1 = n((e, r) => {
    e.type !== u.CLICK ||
      this._data == null ||
      ((this.var_41?.friendlist?._r9c4d5fbe38e0ed(this._data.userId, this._data.userName) ?? !1) &&
        ((this._data.var_3816 = !0), this.refreshHeader()));
  }, "_r115ec12f7ef3c1");
  _r758748c3ccfb58 = n((e, r) => {
    e.type !== u.CLICK ||
      this._data == null ||
      this.var_41?._r40181a1260cd83?.performSearch("hotel_view", `owner:${this._data.userName}`);
  }, "_r758748c3ccfb58");
  _r063b7501575349 = n((e, r) => {
    e.type === u.CLICK &&
      this.var_41?.windowManager.confirm(
        "${extendedprofile.block_player.title}",
        "${extendedprofile.block_player.desc}",
        0,
        this._r23f5da95ea3f61,
      );
  }, "_r063b7501575349");
  _r23f5da95ea3f61 = n((e, r) => {
    e == null ||
      e.disposed ||
      this._data == null ||
      this._window == null ||
      (e.dispose(),
      r.type === y.const_1300 &&
        (this.var_41?.sessionDataManager?.blockUser(this._data.userId),
        (this._window.findChildByName("blocked_container").visible = !0)));
  }, "_r23f5da95ea3f61");
  onConfirmUnblock = n((e, r) => {
    e == null ||
      e.disposed ||
      this._data == null ||
      this._window == null ||
      (e.dispose(),
      r.type === y.const_1300 &&
        (this.var_41?.sessionDataManager?.unblockUser(this._data.userId),
        (this._window.findChildByName("blocked_container").visible = !1)));
  }, "onConfirmUnblock");
  _rff4a80c6ccb3f8 = n((e, r) => {
    if (e.type !== u.CLICK || r.name == null) return;
    let t = r.name.indexOf("_");
    if (t < 0) return;
    let i = r.name.substring(0, t),
      s = this.statusAsString.getValue(en._r6c4c1123ec41a2(i)) ?? null;
    if (s?.var_4988 != null && s.var_4988 > 0) {
      this.var_41?._rebf0e04324ba16(s.var_4988);
      return;
    }
    this.var_41?.windowManager.alert(
      "${extendedprofile.add.friends.alert.title}",
      "${extendedprofile.add.friends.alert.body}",
      0,
      this._r34b92e26af37e2,
    );
  }, "_rff4a80c6ccb3f8");
  onViewGroups = n((e, r) => {
    e.type === u.CLICK && this.var_41?.navigator?.performGuildBaseSearch();
  }, "onViewGroups");
  _rffb03fc4ee8358 = n((e, r) => {
    e.type === u.CLICK &&
      ((this.var_433 = r.id),
      this.var_41?.send(new _i494540f04bf21d(this.var_433, !1)),
      this.var_41?.send(new class_2154(a.GROUPS_TRACKING_CATEGORY, String(r.id), "select")),
      this.refreshGroupListSelection());
  }, "_rffb03fc4ee8358");
  _r3888682b891ede = n((e, r) => {
    e.type === u.CLICK &&
      (this.var_41?.send(new _iec45f45ee775ab(r.id)),
      this.var_41?.send(new class_2154(a.GROUPS_TRACKING_CATEGORY, String(r.parent?.id ?? r.id), "make favourite")),
      (this.var_433 = r.id));
  }, "_r3888682b891ede");
  _r691a76ed92c713 = n((e, r) => {
    e.type === u.CLICK &&
      (this.var_41?.send(new _i17f2164582ac32(r.id)),
      this.var_41?.send(
        new class_2154(a.GROUPS_TRACKING_CATEGORY, String(r.parent?.id ?? r.id), "clear favourite"),
      ),
      (this.var_433 = r.id));
  }, "_r691a76ed92c713");
  onClose = n((e, r) => {
    e.type === u.CLICK && this.close();
  }, "onClose");
  _r094ad4824f936e = n((e, r) => {
    e.type === u.CLICK && this.var_41?._r6b6c989018eb05("avatareditor/open");
  }, "_r094ad4824f936e");
  _rc82175b943fd12 = n((e, r) => {
    e.type === u.CLICK && this.var_41?._r6b6c989018eb05("inventory/open/badges");
  }, "_rc82175b943fd12");
  _rc3c8930ccd3be7 = n((e, r) => {
    e.type === u.CLICK &&
      this.var_41?._r6b6c989018eb05(
        ka.getLink(ka.TOTAL_BADGES, ka.DEFAULT_RARITY, this._r05d7dc1a183091()),
      );
  }, "_rc3c8930ccd3be7");
  _r05d7dc1a183091() {
    return ka._r44f115799afb60;
  }
  _r0713f209362949 = n((e) => {
    if (e.window == null) return;
    let r = Math.trunc(Number(e.window.name.replace("badge_", "")));
    if (r < 0 || r > 4) return;
    let t = this._rae06266a244499[r] ?? null;
    if (t == null) return;
    let i = e.window.widget;
    (i != null && i.glowColor >= 0 && i.playGlow(i.glowColor),
      this.populateBadgeDetails(
        this.var_41?.localization.getBadgeName(t._rc9fc89e7eb27a7) ?? "",
        this.var_41?.localization.getBadgeDesc(t._rc9fc89e7eb27a7) ?? "",
        t,
      ),
      this._badgeDetails?.desktop != null && this._badgeDetails.desktop.addChild(this._badgeDetails),
      this._badgeDetails?.activate());
    let s = new D();
    (e.window.getGlobalRectangle(s),
      this._badgeDetails != null &&
        ((this._badgeDetails.x = s.left + s.width),
        (this._badgeDetails.y = s.top + (s.height - this._badgeDetails.height) / 2)));
  }, "_r0713f209362949");
  _r8db50ec12dc7d2 = n((e) => {
    this._rf0f3e2c3c083d4();
  }, "_r8db50ec12dc7d2");
  _r34b92e26af37e2 = n((e, r) => {
    (r.type === y.const_1300 &&
      (this.var_41?._r6b6c989018eb05("friendbar/findfriends"), this.close()),
      e.dispose());
  }, "_r34b92e26af37e2");
}
