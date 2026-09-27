// Extracted from HabboAirLauncher.deobf.js, line 322161.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandUserView.as
// Obfuscated name: _ibfa878a79cbe40

class a {
  static {
    n(this, "InfoStandUserView");
  }
  static LINK_COLOR_ACTIONS_DEFAULT = 16777215;
  static LINK_COLOR_ACTIONS_HOVER = 9552639;
  var_17;
  _window = null;
  _r99fda1d9e9f6a9 = null;
  var_25 = null;
  ITEM_SPACER = 5;
  MOTTO_TEXT_OFFSET = 3;
  MOTTO_EDITED_COLOR = 11184810;
  _red8287ee5e3856 = 16777215;
  const_1029 = 2e3;
  MAX_MOTTO_HEIGHT = 50;
  MIN_MOTTO_HEIGHT = 23;
  _border = null;
  _rd65c8b4e77f024 = null;
  _badgeDetails = null;
  _r01e606bef90f8a = 0;
  _r6b4ae6574f5f4a = null;
  constructor(e, r) {
    ((this.var_17 = e),
      this.createWindow(r),
      (this._rd65c8b4e77f024 = new TagListRenderer(e, this._r227f5bf7531952)));
  }
  dispose() {
    (this._r6b4ae6574f5f4a?.dispose(),
      (this._r6b4ae6574f5f4a = null),
      this._r77a06ec00e12bc(),
      (this.var_17 = null),
      this._window?.dispose(),
      (this._window = null),
      (this._r99fda1d9e9f6a9 = null),
      (this.var_25 = null),
      (this._border = null),
      this._rd65c8b4e77f024?.dispose(),
      (this._rd65c8b4e77f024 = null),
      this._rf0f3e2c3c083d4());
  }
  get window() {
    return this._window;
  }
  set name(e) {
    if (this._r6b4ae6574f5f4a == null) {
      if (
        ((this._r6b4ae6574f5f4a = this._r99fda1d9e9f6a9?.getListItemByName("profile_link")),
        this._r6b4ae6574f5f4a == null)
      )
        return;
      ((this._r6b4ae6574f5f4a.procedure = this._r9d0b0d5f3d4d2a), (this._r6b4ae6574f5f4a.visible = !0));
    }
    let r = this._r6b4ae6574f5f4a.findChildByName("name_text");
    r != null && ((r.text = e), (r.visible = !0));
  }
  set realName(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("realname_text");
    r == null ||
      this.var_17 == null ||
      (e.length === 0
        ? (r.text = "")
        : (this.var_17.localizations?._r43eae9731f5b27("infostand.text.realname", "realname", e),
          (r.text = this.var_17.localizations?.getLocalization("infostand.text.realname") ?? "")),
      (r.height = r.textHeight + this.ITEM_SPACER),
      (r.visible = e.length > 0));
  }
  set achievementScore(e) {
    if (!this.var_17?.isActivityDisplayEnabled) return;
    let r = this._r99fda1d9e9f6a9?.getListItemByName("score_value");
    r != null && (r.text = String(e));
  }
  set carryItem(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("handitem_txt"),
      t = this._r99fda1d9e9f6a9?.getListItemByName("handitem_spacer");
    if (r == null || t == null || this.var_17 == null) return;
    if (e > 0 && e < 999999) {
      let o =
        this.var_17.localizations?.getLocalization(`handitem${e}`, `handitem${e}`) ??
        `handitem${e}`;
      (this.var_17.localizations?._r43eae9731f5b27("infostand.text.handitem", "item", o),
        (r.text = this.var_17.localizations?.getLocalization("infostand.text.handitem") ?? ""));
    }
    r.height = r.textHeight + this.ITEM_SPACER;
    let i = r.visible,
      s = e > 0 && e < 999999;
    ((r.visible = s),
      (t.visible = s),
      s !== i && this._r99fda1d9e9f6a9?.arrangeListItems(),
      this.updateWindow());
  }
  set xp(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("xp_text"),
      t = this._r99fda1d9e9f6a9?.getListItemByName("xp_spacer");
    if (r == null || t == null || this.var_17 == null) return;
    (this.var_17.localizations?._r43eae9731f5b27("infostand.text.xp", "xp", e.toString()),
      (r.text = this.var_17.localizations?.getLocalization("infostand.text.xp") ?? ""),
      (r.height = r.textHeight + this.ITEM_SPACER));
    let i = r.visible,
      s = e > 0;
    ((r.visible = s),
      (t.visible = s),
      s !== i && this._r99fda1d9e9f6a9?.arrangeListItems(),
      this.updateWindow());
  }
  setFigure(e) {
    let t = this._border?.findChildByName("avatar_image")?.widget;
    t != null && (t.figure = e);
  }
  setMotto(e, r) {
    let t = this._r99fda1d9e9f6a9?.getListItemByName("motto_container"),
      i = t?.findChildByName("changemotto.image"),
      s = t?.findChildByName("motto_text"),
      o = this._r99fda1d9e9f6a9?.getListItemByName("motto_spacer");
    if (t == null || s == null || o == null || this.var_17 == null) return;
    let d = e ?? "";
    (r
      ? (i != null && (i.visible = !0),
        d === ""
          ? ((s.text = this.var_17.localizations?.getLocalization("infostand.motto.change") ?? ""),
            (s.textColor = this.MOTTO_EDITED_COLOR))
          : ((s.text = d), (s.textColor = this._red8287ee5e3856)),
        s.enable())
      : (i != null && (i.visible = !1), (s.text = d), (s.textColor = this._red8287ee5e3856), s.disable()),
      (this.var_17.config?.getBoolean("infostand.motto.change.enabled") ?? !1) || s.disable(),
      (s.height = Math.min(s.textHeight + this.ITEM_SPACER, this.MAX_MOTTO_HEIGHT)),
      (s.height = Math.max(s.height, this.MIN_MOTTO_HEIGHT)),
      (t.height = s.height + this.MOTTO_TEXT_OFFSET),
      s.removeEventListener(sr.const_900, this._r0027c59d4412d8),
      s.removeEventListener(u.CLICK, this._r772e916401b562),
      r &&
        (s.addEventListener(sr.const_900, this._r0027c59d4412d8),
        s.addEventListener(u.CLICK, this._r772e916401b562)));
    let c = s.text.toLowerCase().indexOf("crikey") >= 0,
      f = this._border?.findChildByName("sticker_croco"),
      l = this._border?.findChildByName("avatar_image");
    (f != null && (f.visible = c), l != null && (l.visible = !c), this.updateWindow());
  }
  setBadge(e, r, t = null, i = !1) {
    let o = this._border?.findChildByName(`badge_${e}`)?.widget;
    if (o != null) {
      let d = this.isUncommonBadgeRarityEnabled();
      ((o.badgeId = r),
        (o.glowColor =
          t != null && vt.isStandaloneTier(t.badgeRarityId, d)
            ? vt.getGlowColor(t.badgeRarityId, d)
            : -1),
        r != null && r !== "" && i && o.glowColor >= 0 && o.playGlow(o.glowColor));
    }
  }
  isUncommonBadgeRarityEnabled() {
    return this.var_17?.config?.getBoolean("badge_rarity.uncommon") ?? !1;
  }
  clearBadges() {
    this._r77a06ec00e12bc();
    for (let e = 0; e < 5; e++) {
      let t = this._border?.findChildByName(`badge_${e}`)?.widget;
      t != null && (t.badgeId = "");
    }
  }
  clearGroupBadge() {
    let r = this._border?.findChildByName("badge_group")?.widget;
    r != null && (r.badgeId = "");
  }
  setGroupBadge(e) {
    let t = this._border?.findChildByName("badge_group")?.widget;
    t != null && (t.badgeId = e);
  }
  update(e, r = !0, t = !1) {
    (t || (this.clearBadges(), this.clearGroupBadge(), this.setGroupBadge(e.groupBadgeId)),
      this.updateInfo(e, r, !t));
  }
  setRelationshipStatuses(e) {
    if (!(this._border == null || this.var_17 == null))
      for (let r of en.displayableStatuses) {
        let t = en._r23cf619d44ca19(r),
          i = this._border.findChildByName(`relationship_${t}`),
          s = e.getValue(r);
        if (i == null || s == null) {
          i != null && (i.visible = !1);
          continue;
        }
        i.visible = s._r67f7b689f227b4 > 0;
        let o = this._border.findChildByName(`${t}_randomusername`);
        o != null && ((o.caption = s.randomFriendName), (o.id = s.var_4988));
        let d = this._border.findChildByName(`${t}_others`);
        (d != null && (d.visible = s._r67f7b689f227b4 > 1),
          this.var_17.localizations?._r43eae9731f5b27(
            `infostand.relstatus.${t}.others`,
            "amount",
            String(s._r67f7b689f227b4 - 1),
          ));
      }
  }
  updateWindow() {
    this._r99fda1d9e9f6a9 == null ||
      this._border == null ||
      this._window == null ||
      ((this._r99fda1d9e9f6a9.height = this._r99fda1d9e9f6a9.visibleRegion.height),
      (this._border.height = this._r99fda1d9e9f6a9.height + 20),
      (this._window.width = this._border.width),
      (this._window.height = this._window.visibleRegion.height),
      this.var_17?.refreshContainer());
  }
  createWindow(e) {
    let r = this.var_17?.assets?.getAssetByName("user_view");
    if (
      ((this._window = this.var_17?.windowManager?.buildFromXML(r?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct window from XML!");
    if (((this._border = this._window.getListItemByName("info_border")), this._border != null)) {
      ((this._r99fda1d9e9f6a9 = this._border.findChildByName("infostand_element_list")),
        (this.var_25 = this._border.findChildByName("relationship_status_container")),
        this.var_25 != null &&
          (this.var_25.visible =
            this.var_17?.config?.getBoolean("relationship.status.enabled") ?? !1));
      for (let c of ["heart_randomusername", "smile_randomusername", "bobba_randomusername"]) {
        let f = this._border.findChildByName(c);
        f != null && (f.procedure = this._r2982fd0dbfeae1);
      }
    }
    this._window.name = e;
    let t = this._border?.findChildByName("home_icon");
    if (t != null) {
      let f = this.var_17?.assets?.getAssetByName("icon_home")?.content;
      (f != null &&
        ((t.bitmap = new A(t.width, t.height, !0, 0)), t.bitmap.copyPixels(f, f.rect, new E(0, 0))),
        this._border?.findChildByName("home_icon")?.addEventListener(u.CLICK, this.onButtonClicked));
    }
    (this.var_17?.mainContainer.addChild(this._window),
      this._border?.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose));
    for (let c = 0; c < 5; c++) {
      let f = this._border?.findChildByName(`badge_${c}`);
      (f?.addEventListener(u.OVER, this._r0713f209362949), f?.addEventListener(u.OUT, this._r8db50ec12dc7d2));
    }
    let s = this._border?.findChildByName("badge_group");
    (s?.addEventListener(u.CLICK, this._rc3dea2200ce125),
      s?.addEventListener(u.OVER, this._r373cbe1da119cd),
      s?.addEventListener(u.OUT, this._r2ca10da6c33a12));
    let o = this._border?.findChildByName("avatar_image_profile_link");
    o != null && (o.procedure = this._r9d0b0d5f3d4d2a);
    let d = this._border?.findChildByName("badges_rank_region");
    if (
      (d != null && (d.procedure = this._rea47f0af8b9f45), this.var_17?.isActivityDisplayEnabled)
    ) {
      let c = this._border?.findChildByName("score_spacer"),
        f = this._border?.findChildByName("score_value"),
        l = this._border?.findChildByName("score_text");
      (c != null && (c.visible = !0), f != null && (f.visible = !0), l != null && (l.visible = !0));
    }
  }
  createBadgeDetails() {
    if (this._badgeDetails != null) return;
    let e = this.var_17?.assets?.getAssetByName("badge_details");
    if (
      e != null &&
      ((this._badgeDetails = this.var_17?.windowManager?.buildFromXML(e.content)),
      this._badgeDetails == null)
    )
      throw new Error("Failed to construct window from XML!");
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
    if (
      (d != null && (d.visible = b), c != null && (c.text = ""), f != null && (f.text = ""), b && t != null)
    ) {
      let h = this.isUncommonBadgeRarityEnabled();
      (f != null &&
        ((f.textColor = 16777215),
        (f.text =
          this.var_17?.localizations?.getLocalizationWithParams(
            "badge.rarity.badge",
            "",
            "rarity",
            this.var_17?.localizations?.getLocalization(
              vt.getLabelLocalizationKey(t.badgeRarityId, h),
            ) ?? "",
          ) ?? "")),
        c != null && f != null && (c.text = f.text),
        d != null && (d.color = vt.getWhiteBackgroundTagColor(t.badgeRarityId, h)));
    }
    let _ = t != null && ka.shouldShowOwnerCount(t.ownerCount);
    (l != null &&
      ((l.visible = _),
      (l.text = ""),
      _ &&
        t != null &&
        (l.text =
          this.var_17?.localizations?.getLocalizationWithParams(
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
  updateInfo(e, r = !0, t = !0) {
    ((this.name = e.name),
      this.setMotto(e.motto, e.type === RoomWidgetUserInfoUpdateEvent.OWN_USER),
      (this.achievementScore = e.achievementScore),
      (this.badgesRank = e.badgesRank),
      (this.carryItem = e.carryItem),
      (this.xp = e.xp),
      this.setFigure(e.figure),
      t && this._rbd50241c036b40(e.badges, e.selectedBadges, r));
  }
  set badgesRank(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("badges_rank_spacer"),
      t = this._r99fda1d9e9f6a9?.getListItemByName("badges_rank_region"),
      i = t?.getChildByName("badges_rank_text");
    if (r == null || t == null || i == null) return;
    let s = e >= 0,
      o = t.visible;
    ((r.visible = s),
      (t.visible = s),
      s &&
        (i.text =
          this.var_17?.localizations?.getLocalizationWithParams(
            "infostand.text.badges_rank",
            "",
            "rank",
            `#${e}`,
          ) ?? ""),
      s !== o && this._r99fda1d9e9f6a9?.arrangeListItems(),
      this.updateWindow());
  }
  _r227f5bf7531952 = n((e) => {
    let r = e.target;
    r != null && this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new hm(r.text));
  }, "_r227f5bf7531952");
  _r0027c59d4412d8 = n((e) => {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("motto_container"),
      t = r?.findChildByName("motto_text");
    if (!(r == null || t == null || this.var_17 == null)) {
      if (e.keyCode === Fi.ENTER) {
        let i = _ia411d8d8194a3a(),
          s = this.var_17.localizations?.getLocalization("infostand.motto.change") ?? "";
        i - this._r01e606bef90f8a > this.const_1029 &&
          t.text !== s &&
          (this.var_17._r1515e6bde00451?.RoomWidgetLetUserInMessage(new dm(t.text)),
          (this._r01e606bef90f8a = i),
          (t.textColor = this._red8287ee5e3856),
          t.unfocus?.());
      } else t.textColor = this.MOTTO_EDITED_COLOR;
      ((t.height = Math.min(t.textHeight + this.ITEM_SPACER, this.MAX_MOTTO_HEIGHT)),
        (t.height = Math.max(t.height, this.MIN_MOTTO_HEIGHT)),
        (r.height = t.height + this.MOTTO_TEXT_OFFSET));
    }
  }, "_r0027c59d4412d8");
  _r772e916401b562 = n((e) => {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("motto_container"),
      t = r?.findChildByName("motto_text");
    r == null ||
      t == null ||
      this.var_17 == null ||
      (t.text === (this.var_17.localizations?.getLocalization("infostand.motto.change") ?? "") &&
        (t.text = ""),
      (t.textColor = this.MOTTO_EDITED_COLOR));
  }, "_r772e916401b562");
  onButtonClicked = n((e) => {
    let r = e.target,
      t = this.var_17?.userData?.userId ?? 0;
    r == null ||
      r.name !== "home_icon" ||
      t <= 0 ||
      (this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.OPEN_HOME_PAGE, t)),
      this.var_17?.roomControllerLevel?._r697386a8fb5bf8?.trackEventLog?.(
        "InfoStand",
        "click",
        RoomWidgetUserActionMessage.OPEN_HOME_PAGE,
      ),
      this.updateWindow());
  }, "onButtonClicked");
  _r9d0b0d5f3d4d2a = n((e, r) => {
    if (e.type === u.CLICK) {
      let t = this.var_17?.userData?.userId ?? 0;
      this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(
        new RoomWidgetOpenProfileMessage(RoomWidgetOpenProfileMessage.const_1290, t, "infoStand_userView"),
      );
    }
    if (r.name === "profile_link" && this._r6b4ae6574f5f4a != null) {
      let t = this._r6b4ae6574f5f4a.findChildByName("name_text");
      if (t == null) return;
      e.type === u.OVER
        ? (t.textColor = a.LINK_COLOR_ACTIONS_HOVER)
        : e.type === u.OUT && (t.textColor = a.LINK_COLOR_ACTIONS_DEFAULT);
    }
  }, "_r9d0b0d5f3d4d2a");
  _r2982fd0dbfeae1 = n((e, r) => {
    e.type === u.CLICK && this.var_17?.roomControllerLevel?.connection?.send(new class_2134(r.id));
  }, "_r2982fd0dbfeae1");
  onClose = n((e) => {
    this.var_17?.close();
  }, "onClose");
  _rc3dea2200ce125 = n((e) => {
    if (this.var_17?.userData == null || this.var_17.userData.groupId < 0) return;
    let r = this.var_17.userData.type === RoomWidgetUserInfoUpdateEvent.OWN_USER;
    this.var_17._r1515e6bde00451?.RoomWidgetLetUserInMessage(
      new g1(r, this.var_17.userData.groupId),
    );
  }, "_rc3dea2200ce125");
  _r373cbe1da119cd = n((e) => {
    if (
      this.var_17?.userData == null ||
      this.var_17.userData.groupId < 0 ||
      e.window == null
    )
      return;
    this.populateBadgeDetails(this.var_17.userData.groupName, "", null);
    let r = new D();
    (e.window.getGlobalRectangle(r),
      this._badgeDetails != null &&
        ((this._badgeDetails.x = r.left - this._badgeDetails.width),
        (this._badgeDetails.y = r.top + (r.height - this._badgeDetails.height) / 2)));
  }, "_r373cbe1da119cd");
  _r2ca10da6c33a12 = n((e) => {
    this._rf0f3e2c3c083d4();
  }, "_r2ca10da6c33a12");
  _r0713f209362949 = n((e) => {
    if (e.window == null || this.var_17?.userData == null) return;
    let r = Number(e.window.name.replace("badge_", ""));
    if (r < 0) return;
    let t = this.var_17.userData.badges[r],
      i = this.var_17.userData._r070a63d30cc5cb(r),
      s = e.window.widget;
    if (typeof t != "string") return;
    (s != null && s.glowColor >= 0 && s.playGlow(s.glowColor),
      this.populateBadgeDetails(
        this.var_17.localizations?.getBadgeName(t) ?? "",
        this.var_17.localizations?.getBadgeDesc(t) ?? "",
        i,
      ),
      this._badgeDetails?.desktop != null &&
        this._badgeDetails.desktop.addChild(this._badgeDetails));
    let o = new D();
    (e.window.getGlobalRectangle(o),
      this._badgeDetails != null &&
        ((this._badgeDetails.x = o.left - this._badgeDetails.width),
        (this._badgeDetails.y = o.top + (o.height - this._badgeDetails.height) / 2)));
  }, "_r0713f209362949");
  _r8db50ec12dc7d2 = n((e) => {
    this._rf0f3e2c3c083d4();
  }, "_r8db50ec12dc7d2");
  _rea47f0af8b9f45 = n((e, r) => {
    if (
      e.type !== u.CLICK ||
      this.var_17?.userData == null ||
      this.var_17.userData.badgesRank < 0
    )
      return;
    let t = this.var_17.roomControllerLevel?.roomEngine;
    t?.context._r6b6c989018eb05(
      ka.getLink(ka.TOTAL_BADGES, ka.DEFAULT_RARITY, this._r8ff62c5508d3fc()),
    );
  }, "_rea47f0af8b9f45");
  _r8ff62c5508d3fc() {
    return ka._r44f115799afb60;
  }
  _rbd50241c036b40(e, r, t) {
    if ((this.clearBadges(), r != null && r.length > 0)) {
      for (let i of r)
        !(i instanceof UnkClass_6e70f7) ||
          i._r3d8be6b2a8461a < 0 ||
          i._r3d8be6b2a8461a > 4 ||
          this.setBadge(i._r3d8be6b2a8461a, i._rc9fc89e7eb27a7, i, t);
      return;
    }
    if (e != null)
      for (let i = 0; i < e.length && i < 5; i++) {
        let s = e[i];
        typeof s == "string" && this.setBadge(i, s);
      }
  }
  _r77a06ec00e12bc() {
    for (let e = 0; e < 5; e++) this.getBadgeWidget(e)?.clearGlow();
  }
  getBadgeWidget(e) {
    return this._border?.findChildByName(`badge_${e}`)?.widget ?? null;
  }
}
