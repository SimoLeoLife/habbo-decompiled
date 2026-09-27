// Extracted from HabboAirLauncher.deobf.js, line 261972.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ifffc223d172097

class a {
    static {
      n(this, "UnkClass_fffc22_______");
    }
    constructor(e, r) {
      ((this._notifications = e),
        (this._communication = r),
        this.addMessageEvent(new UnkMessageEvent_cadc4d(this._rd2f9b54ff41e20)),
        this.addMessageEvent(new UnkMessageEvent_644b29(this._re9b7f5b939a11a)),
        this.addMessageEvent(new class_3347(this._rbeb8782bc17a2c)),
        this.addMessageEvent(new class_3670(this._r893ea75ce6960c)),
        this.addMessageEvent(new class_3074(this._r3865e9480ce0b9)),
        this.addMessageEvent(new UnkMessageEvent_632e58(this._rd327af60c9af2a)),
        this.addMessageEvent(new class_2066(this._rf9693cb2fb00a5)),
        this.addMessageEvent(new UnkMessageEvent_029ea8(this._rd4a31b24837656)),
        this.addMessageEvent(new UnkMessageEvent_fdba1a(this._r92281c2fef130d)),
        this.addMessageEvent(new UnkMessageEvent_5072b4(this._r1264084933b455)),
        this.addMessageEvent(new UnkMessageEvent_850f17(this._r0497805fd38f16)),
        this.addMessageEvent(new class_2889(this._r69455a4cb6b7d4)),
        this.addMessageEvent(new UnkMessageEvent_d00f03(this._rb783d4e0e55e2a)),
        this.addMessageEvent(new class_3615(this._r4400193737d5bd)),
        this.addMessageEvent(new class_3305(this._r275c7516b4845a)),
        this.addMessageEvent(new class_2836(this._raeb2bd88b79e2c)),
        this.addMessageEvent(new UnkMessageEvent_27b0d9(this._ra798a0ee02fbc3)),
        this.addMessageEvent(new class_2117(this.onRoomEnter)),
        this.addMessageEvent(new class_3106(this.onRoomEnter)),
        this.addMessageEvent(new class_2694(this._rd63dc6c07b5ddc)),
        this.addMessageEvent(new UnkMessageEvent_3ad34e(this._r871b70fe75bafe)),
        this.addMessageEvent(new UnkMessageEvent_70fd7b(this._r92d5a50f4adf76)),
        this.addMessageEvent(new UnkMessageEvent_aa37f4(this._ra95c562bd40fb8)),
        this.addMessageEvent(new UnkMessageEvent_718e5e(this._r6ce6628cea3369)),
        this.addMessageEvent(new class_3040(this._re723af11c13e65)),
        this.addMessageEvent(new class_3542(this._re93bff9df69f99)),
        this.addMessageEvent(new class_1926(this._r6e2e75987c854e)),
        this.addMessageEvent(new UnkMessageEvent_225953(this._rdd24cea94414b7)),
        this.addMessageEvent(new NftEmeraldConvertResultMessageEvent(this._rc52df26c6a3699)),
        this.addMessageEvent(new class_1767(this._r8065b2d740c5ba)),
        this.addMessageEvent(new class_2974(this._r1f335d80623ffc)),
        this.addMessageEvent(new class_3338(this._r92dc676fa7a25d)),
        this.addMessageEvent(new UnkMessageEvent_047c26(this._r56073143975316)),
        this.addMessageEvent(new UnkMessageEvent_f94150(this._rc395337f1eaa07)),
        this.addMessageEvent(new UnkMessageEvent_6e59e3(this._rdc43e4ef34585a)),
        this.addMessageEvent(new UnkMessageEvent_56094b(this._r6caa32ff29a5c6)),
        this.addMessageEvent(new class_3298(this._r69f003023c05c0)),
        this._notifications.activate());
    }
    static {
      fi(this, "UnkClass_fffc22_______");
    }
    static CALL_FOR_HELP_NOTIFICATION_TYPE = "cfh.created";
    _messageEvents = [];
    _bufferedTreasureHuntWinnerInfo = null;
    _disposed = !1;
    get disposed() {
      return this._disposed;
    }
    dispose() {
      for (let e of this._messageEvents) this._communication?._r7668362bf55fdd(e);
      ((this._messageEvents = []),
        (this._notifications = null),
        (this._communication = null),
        (this._bufferedTreasureHuntWinnerInfo = null),
        (this._disposed = !0));
    }
    avatarImageReady(e) {
      this._bufferedTreasureHuntWinnerInfo != null &&
        this._bufferedTreasureHuntWinnerInfo._rd90e40ea576eac === e &&
        this.showTreasureHuntWinner(!0);
    }
    _r6a4791b283bbdb(e) {
      this._rd2f9b54ff41e20(e);
    }
    onAlert(e, r) {
      (r.type === y.const_1300 || r.type === y.const_204) && e.dispose();
    }
    getHuntName(e) {
      return this._notifications.localization?.getLocalization(`treasure_hunt.${e}.name`, e) ?? e;
    }
    addMessageEvent(e) {
      let r = this._communication?._r2e106e2349a0b6(e) ?? e;
      this._messageEvents.push(r);
    }
    useNotificationFeed() {
      return this._notifications.getBoolean("notification.feed.enabled");
    }
    useNotifications() {
      return this._notifications.getBoolean("notification.items.enabled");
    }
    _rd2f9b54ff41e20 = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_IS_a44d28);
      if (
        r != null &&
        !(r?.messages == null || r.messages.length === 0) &&
        (this.useNotifications() &&
          new Vme(r.messages, this._notifications.assetLibrary, this._notifications.windowManager),
        this.useNotificationFeed())
      )
        for (let t of r.messages) {
          let i = new GenericNotificationItemData();
          ((i.title = t),
            (i.timeStamp = _ia411d8d8194a3a()),
            this._notifications._rf55720e30312ea?._r9322a6bb3dd8cc(m5.const_1014, i));
        }
    }, "_rd2f9b54ff41e20");
    _r893ea75ce6960c = fi((e) => {
      let r = "notification.new.achievement",
        t = ClassUtils.getParser(e, UnkMessageParser_empty_ebbf99);
      if (t == null) return;
      let i = t?.data ?? null;
      if (i == null) return;
      let s = this._notifications.localization?.getBadgeName(i._rc9fc89e7eb27a7) ?? i._rc9fc89e7eb27a7;
      this._notifications.localization?._r43eae9731f5b27(r, "achievement_name", s);
      let o = this._notifications.localization?.getLocalization(r) ?? "",
        d = this._notifications.sessionDataManager?.requestBadgeImage(i._rc9fc89e7eb27a7) ?? null;
      this._notifications._rbc2d086cba1f9d?.addItem(
        o,
        NotificationType.ACHIEVEMENT_RECEIVED,
        d,
        null,
        i._rc9fc89e7eb27a7,
        `questengine/achievements/${i.category}`,
      );
    }, "_r893ea75ce6960c");
    _r3865e9480ce0b9 = fi((e) => {
      let r = "notification.new.badge",
        t = ClassUtils.getParser(e, class_3631);
      if (t == null || t == null) return;
      let i = this._notifications.localization?.getBadgeName(t._rc9fc89e7eb27a7) ?? t._rc9fc89e7eb27a7;
      this._notifications.localization?._r43eae9731f5b27(r, "badge_name", i);
      let s = this._notifications.localization?.getLocalization(r) ?? "",
        o = this._notifications.sessionDataManager?.requestBadgeImage(t._rc9fc89e7eb27a7) ?? null;
      this._notifications._rbc2d086cba1f9d?.addItem(
        s,
        NotificationType.BADGE_RECEIVED,
        o,
        null,
        t._rc9fc89e7eb27a7,
        "inventory/open/badges",
      );
    }, "_r3865e9480ce0b9");
    _rd327af60c9af2a = fi((e) => {
      let r = e;
      if (r == null || this._notifications.sessionDataManager?.userId !== r.userId) return;
      this._notifications.localization?._r43eae9731f5b27(
        "notifications.text.respect.2",
        "count",
        String(r.respectTotal),
      );
      let t = this._notifications.localization?._r5f04530d38380d("notifications.text.respect.1"),
        i = this._notifications.localization?._r5f04530d38380d("notifications.text.respect.2");
      (t?.value != null &&
        this._notifications._rbc2d086cba1f9d?.addItem(t.value, NotificationType.RESPECT, null),
        i?.value != null &&
          this._notifications._rbc2d086cba1f9d?.addItem(i.value, NotificationType.RESPECT, null));
    }, "_rd327af60c9af2a");
    _rf9693cb2fb00a5 = fi((e) => {
      let r = ClassUtils.getParser(e, class_2269);
      if (r == null || r == null || r._r27f114ab0f7883 !== class_2066.const_863) return;
      let t = this._notifications.localization?._r5f04530d38380d("notifications.text.recycle.ok");
      t?.value != null && this._notifications._rbc2d086cba1f9d?.addItem(t.value, NotificationType.RECYCLER_FINISHED, null);
    }, "_rf9693cb2fb00a5");
    _r2f4295bde58927 = fi((e) => {
      e != null;
    }, "_r2f4295bde58927");
    _rd4a31b24837656 = fi((e) => {
      let r = e;
      r != null && (this._notifications.disabled = !r.enabled);
    }, "_rd4a31b24837656");
    _r92281c2fef130d = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_SS_7a1181);
      if (
        r != null &&
        !(r == null || this._notifications._rbc2d086cba1f9d?.alertDialogManager == null) &&
        (this.useNotifications() &&
          this._notifications._rbc2d086cba1f9d.alertDialogManager._rb51462b7b7cd41(r.message, r.url),
        this.useNotificationFeed())
      ) {
        let t = new GenericNotificationItemData();
        ((t.title = r.message),
          (t._re44ee59bfebc55 = r.url),
          (t._ra2eb0e41ae3590 = r.url),
          (t.timeStamp = _ia411d8d8194a3a()),
          this._notifications._rf55720e30312ea?._r9322a6bb3dd8cc(m5.const_1014, t));
      }
    }, "_r92281c2fef130d");
    _r1264084933b455 = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_SS_8a3351);
      if (
        r != null &&
        !(r == null || this._notifications._rbc2d086cba1f9d?.alertDialogManager == null) &&
        (this.useNotifications() &&
          this._notifications._rbc2d086cba1f9d.alertDialogManager._r589b1ee78e4040(r.message, r.url),
        this.useNotificationFeed())
      ) {
        let t = new GenericNotificationItemData();
        ((t.title = r.message),
          (t._re44ee59bfebc55 = r.url),
          (t._ra2eb0e41ae3590 = r.url),
          (t.timeStamp = _ia411d8d8194a3a()),
          this._notifications._rf55720e30312ea?._r9322a6bb3dd8cc(m5.const_1014, t));
      }
    }, "_r1264084933b455");
    _r0497805fd38f16 = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_S_832f16);
      r != null &&
        (r == null ||
          this._notifications._rbc2d086cba1f9d?.alertDialogManager == null ||
          this._notifications._rbc2d086cba1f9d.alertDialogManager.handleUserBannedMessage(r.message));
    }, "_r0497805fd38f16");
    _r69455a4cb6b7d4 = fi((e) => {
      let r = ClassUtils.getParser(e, class_2780);
      r != null &&
        (r == null ||
          this._notifications._rbc2d086cba1f9d?.alertDialogManager == null ||
          this._notifications._rbc2d086cba1f9d.alertDialogManager.handleBanInfoMessage(
            r.reason,
            r._r8dd79bc39de6e5,
            r._r3e3710f718fdb6,
          ));
    }, "_r69455a4cb6b7d4");
    _r1f335d80623ffc = fi((e) => {
      let r = ClassUtils.getParser(e, class_3812);
      if (r == null || r?._r0b81c67a285696 == null) return;
      let t = "";
      (r._r05bdfd640eb659
        ? (t =
            this._notifications.localization?.getLocalizationWithParams(
              "treasure_hunt.won.desc",
              "",
              "hunt_name",
              this.getHuntName(r._r0b81c67a285696),
            ) ?? "")
        : (t =
            this._notifications.localization?.getLocalizationWithParams(
              "treasure_hunt.progress.desc",
              "",
              "current",
              String(r._r53743c42f77da2),
              "total",
              String(r._r1370316ec45b24),
              "hunt_name",
              this.getHuntName(r._r0b81c67a285696),
            ) ?? ""),
        this._notifications.addItem(t, NotificationType.TREASURE_HUNT));
    }, "_r1f335d80623ffc");
    _r92dc676fa7a25d = fi((e) => {
      let r = ClassUtils.getParser(e, class_3427);
      if (r == null || r == null) return;
      let t =
        this._notifications.localization?.getLocalizationWithParams(
          "treasure_hunt.level_fail.desc",
          "",
          "level",
          String(r._r5191ee4dc6b03d),
          "level_paying",
          String(r._r8860ed04502dec),
        ) ?? "";
      this._notifications.addItem(t, NotificationType.TREASURE_HUNT);
    }, "_r92dc676fa7a25d");
    _r56073143975316 = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_empty_890bab);
      r != null && ((this._bufferedTreasureHuntWinnerInfo = r?._r877df8b5c65fb0 ?? null), this.showTreasureHuntWinner());
    }, "_r56073143975316");
    showTreasureHuntWinner(e = !1) {
      let r = this._bufferedTreasureHuntWinnerInfo;
      if (r == null) return;
      let t =
          this._notifications.localization?.getLocalizationWithParams(
            "treasure_hunt.winner.desc",
            "",
            "user_name",
            r.userName,
            "hunt_name",
            this.getHuntName(r._r0b81c67a285696),
          ) ?? "",
        i =
          this._notifications._rf0eb5f07c94cfb?._r274f6640e76241(
            r._rd90e40ea576eac,
            fr.LARGE,
            r._re39308a026bc05,
            e ? null : this,
          ) ?? null,
        s = null;
      (i != null && !i._re9580ee607591e() && ((s = Jd.focusUserFace(i, class_2123.HEAD, 3, 1)), i.dispose()),
        (i != null || e) && this._notifications.addItemWithBitmap(t, NotificationType.TREASURE_HUNT, s));
    }
    _r4400193737d5bd = fi((e) => {
      let r = ClassUtils.getParser(e, class_2422);
      r != null &&
        (r == null ||
          this._notifications._rbc2d086cba1f9d?.alertDialogManager == null ||
          this._notifications._rbc2d086cba1f9d.alertDialogManager.handleHotelClosingMessage(r.var_3710));
    }, "_r4400193737d5bd");
    _rb783d4e0e55e2a = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_BII_8838ea);
      r != null &&
        (r == null ||
          this._notifications._rbc2d086cba1f9d?.alertDialogManager == null ||
          this._notifications._rbc2d086cba1f9d.alertDialogManager.handleHotelMaintenanceMessage(
            r._rc86038ffdf388c,
            r.duration,
          ));
    }, "_rb783d4e0e55e2a");
    _r275c7516b4845a = fi((e) => {
      let r = ClassUtils.getParser(e, class_3471);
      r != null &&
        (r == null ||
          this._notifications._rbc2d086cba1f9d?.alertDialogManager == null ||
          this._notifications._rbc2d086cba1f9d.alertDialogManager.handleHotelClosedMessage(
            r.var_3129,
            r.var_3479,
            r.var_3346,
          ));
    }, "_r275c7516b4845a");
    _raeb2bd88b79e2c = fi((e) => {
      let r = ClassUtils.getParser(e, class_2874);
      r != null &&
        (r == null ||
          this._notifications._rbc2d086cba1f9d?.alertDialogManager == null ||
          this._notifications._rbc2d086cba1f9d.alertDialogManager.handleLoginFailedHotelClosedMessage(
            r.var_3129,
            r.var_3479,
          ));
    }, "_raeb2bd88b79e2c");
    _ra798a0ee02fbc3 = fi((e) => {
      Ae.closeWebPageAndRestoreClient();
    }, "_ra798a0ee02fbc3");
    _rd63dc6c07b5ddc = fi((e) => {
      let r = ClassUtils.getParser(e, class_3449);
      if (r == null || r == null) return;
      (this._notifications.localization?._r43eae9731f5b27(
        "notifications.text.petlevel",
        "pet_name",
        r.petName,
      ),
        this._notifications.localization?._r43eae9731f5b27(
          "notifications.text.petlevel",
          "level",
          String(r.level),
        ));
      let t = this._notifications.localization?._r5f04530d38380d("notifications.text.petlevel");
      if (t?.value != null) {
        let i = r.figureData,
          s =
            i != null
              ? (this._notifications._r3e2c714bf951d8?.getPetImage(
                  i.typeId,
                  i.paletteId,
                  i.color,
                ) ?? null)
              : null;
        this._notifications._rbc2d086cba1f9d?.addItem(t.value, NotificationType.PETLEVEL, s);
      }
    }, "_rd63dc6c07b5ddc");
    _r871b70fe75bafe = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_B_5866d8);
      if (r == null || r == null) return;
      let t = r._r01287eedc77994
        ? this._notifications.localization?._r5f04530d38380d("notifications.text.petbought")
        : this._notifications.localization?._r5f04530d38380d("notifications.text.petreceived");
      if (t?.value != null) {
        let i = r.pet,
          s =
            i != null
              ? (this._notifications._r3e2c714bf951d8?.getPetImage(
                  i.typeId,
                  i.paletteId,
                  i.color,
                ) ?? null)
              : null;
        this._notifications._rbc2d086cba1f9d?.addItem(t.value, NotificationType.PETLEVEL, s);
      }
    }, "_r871b70fe75bafe");
    onRoomEnter = fi((e) => {
      this._notifications._rbc2d086cba1f9d?._r6eb2f4f9c37e01();
    }, "onRoomEnter");
    _re9b7f5b939a11a = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_S_f40c83);
      if (r == null) return;
      let t = r?.messageText ?? "";
      ((t = t.replace(/\\r/g, "\r")),
        this._notifications.windowManager?._r3651220a1507f2(
          "${notifications.broadcast.title}",
          "",
          t,
          "",
          "",
          null,
          class_3852.FRANK_NEUTRAL,
        ));
    }, "_re9b7f5b939a11a");
    _rbeb8782bc17a2c = fi((e) => {
      let r = ClassUtils.getParser(e, class_2600);
      r != null &&
        r != null &&
        (a.CALL_FOR_HELP_NOTIFICATION_TYPE === r.type
          ? this.showCallCreatedNotification(
              String(r.parameters?.getValue("message") ?? ""),
              String(r.parameters?.getValue("linkUrl") ?? ""),
            )
          : this._notifications.showNotification(r.type ?? "", r.parameters));
    }, "_rbeb8782bc17a2c");
    showCallCreatedNotification(e, r) {
      let t = e.replace(/\\r/g, "\r");
      r != null && r.length > 0
        ? this._notifications.windowManager?._r3651220a1507f2(
            "${help.cfh.sent.title}",
            "",
            t,
            "${help.main.faq.link.text}",
            r,
            null,
            class_3852.FRANK_NEUTRAL,
          )
        : this._notifications.windowManager?._r3651220a1507f2(
            "${help.cfh.sent.title}",
            "",
            t,
            void 0,
            void 0,
            null,
            class_3852.FRANK_NEUTRAL,
          );
    }
    _r92d5a50f4adf76 = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_II_3cf205);
      r != null &&
        r != null &&
        (this._notifications.localization?._r43eae9731f5b27(
          "room.error.pets.respectfailed",
          "required_age",
          String(r._re241e3a6abe789),
        ),
        this._notifications.localization?._r43eae9731f5b27(
          "room.error.pets.respectfailed",
          "avatar_age",
          String(r._r3d512a8ec34141),
        ),
        this._notifications.windowManager?.alert(
          "${error.title}",
          "${room.error.pets.respectfailed}",
          0,
          this.onAlert,
        ));
    }, "_r92d5a50f4adf76");
    _ra95c562bd40fb8 = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_I_869ea2);
      r != null &&
        (r == null ||
          r._rf9e805ead0c148 < 1 ||
          this._notifications._rbc2d086cba1f9d?._rfbd2ea40953941(r._rf9e805ead0c148));
    }, "_ra95c562bd40fb8");
    _r6e2e75987c854e = fi((e) => {
      let r = ClassUtils.getParser(e, class_1833);
      r != null && r?._re4fcbc56ec54d5 && this._notifications._rbc2d086cba1f9d?._r158a2c4ff9ac19(r.id);
    }, "_r6e2e75987c854e");
    _rdd24cea94414b7 = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_I_a9eaf3);
      r != null && r?.status === 1 && this._notifications._rbc2d086cba1f9d?._rb4161e404af9fe();
    }, "_rdd24cea94414b7");
    _r6ce6628cea3369 = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_SI_8d8b7c);
      if (r == null) return;
      let t = r?.products?.[0] ?? null;
      if (t == null || this._notifications.localization == null) return;
      let i =
          this._notifications.localization.getLocalization("notifications.text.club_gift.received") ?? "",
        s =
          this._notifications._rec2b40226aa8d1?.getProductImage(
            t.productType,
            t._r31d173d62fa550,
            t.extraParam,
          ) ?? null;
      this._notifications._rbc2d086cba1f9d?.addItem(i, NotificationType.INFO, s);
    }, "_r6ce6628cea3369");
    _re93bff9df69f99 = fi((e) => {
      if (e.change <= 0) return;
      let r = "",
        t = null;
      switch (e.type) {
        case et.const_476: {
          ((r =
            this._notifications.localization?.getLocalizationWithParams(
              "notifications.text.loyalty.received",
              "",
              "amount",
              String(e.change),
            ) ?? ""),
            (t =
              this._notifications.assets.getAssetByName("if_icon_diamond_png")?.content?.clone() ?? null));
          break;
        }
        default:
          return;
      }
      this._notifications._rbc2d086cba1f9d?.addItem(r, NotificationType.INFO, t);
    }, "_re93bff9df69f99");
    _rc52df26c6a3699 = fi((e) => {
      let r = e,
        t = ClassUtils.getParser(r, class_3388);
      if (t != null && !(r == null || t == null) && t.result !== class_3388.name_8) {
        if (t.result === class_3388.const_575) {
          this._notifications.addItem(
            this._notifications.localization?.getLocalization(
              "notification.nft.emerald_convert.not_in_collector",
              "To convert this Emerald furni, it needs to be in your Collector Wallet",
            ) ?? "",
            NotificationType.INFO,
          );
          return;
        }
        this._notifications.addItem(
          this._notifications.localization?.getLocalization("notification.nft.emerald_convert_failed") ??
            "",
          NotificationType.INFO,
        );
      }
    }, "_rc52df26c6a3699");
    _r8065b2d740c5ba = fi((e) => {
      let r = ClassUtils.getParser(e, class_3787);
      if (r == null || r == null) return;
      let t =
          this._notifications.localization?.getLocalization(
            r.added ? "notification.chatstyles.added" : "notification.chatstyles.removed",
          ) ?? "",
        i =
          this._notifications._rafd5b9130c4bfd?.chatStyleLibrary
            ?._r22c9347ecec607(r.styleId)
            ?._r270592cedf0213?.clone() ?? null;
      this._notifications.addItemWithBitmap(t, NotificationType.INFO, i);
    }, "_r8065b2d740c5ba");
    _rc395337f1eaa07 = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_I_6b4cbd);
      if (r == null || r == null) return;
      let t =
        this._notifications.localization?.getLocalizationWithParams(
          "wired_transactions.notification.trade_error",
          "",
          "error",
          this._notifications.localization?.getLocalization(
            `wired_transactions.notification.trade_error.${r._reb36d04f3272a1}`,
          ) ?? "",
        ) ?? "";
      this._notifications.addItem(t, NotificationType.INFO, "chests_icon_trading_error");
    }, "_rc395337f1eaa07");
    _rdc43e4ef34585a = fi((e) => {
      let r = ClassUtils.getParser(e, _D);
      if (r == null) return;
      let t = r?.contents;
      if (t == null) return;
      let i = `wired_transactions.notification.success.${t._rbd2740c44b9af2}`;
      t._rb8ba5dcaad6794 != null && !t._rb07163afa71006 && (i += ".click_to_popup");
      let s = null;
      t._rb8ba5dcaad6794 != null && (s = `wiredrewards/open/${t._rc379d503e42585}`);
      let o =
        this._notifications.localization?.getLocalizationWithParams(
          i,
          this._notifications.localization?.getLocalization("wired_transactions.notification.success") ??
            "",
        ) ?? "";
      this._notifications.addItem(o, NotificationType.INFO, "chests_icon_successful", s);
    }, "_rdc43e4ef34585a");
    _r6caa32ff29a5c6 = fi((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_I_385ac0);
      if (r == null || r == null) return;
      let t =
        this._notifications.localization?.getLocalizationWithParams(
          "wired_transactions.notification.fail",
          "",
          "reason",
          this._notifications.localization?.getLocalization(
            `wired_transactions.notification.fail.${r._r7089a0167dd282}`,
          ) ?? "",
        ) ?? "";
      this._notifications.addItem(t, NotificationType.INFO, "chests_icon_rejected");
    }, "_r6caa32ff29a5c6");
    _r69f003023c05c0 = fi((e) => {
      let r = ClassUtils.getParser(e, class_3814);
      if (r == null || r == null) return;
      let t = r.claimId ?? "",
        i = this._notifications.localization?.getLocalization(`claim_product.name.${t}`, t) ?? t,
        s =
          this._notifications.localization?.getLocalizationWithParams(
            `claim_product.result.${r.result}`,
            "",
            "claim_name",
            i,
          ) ?? "";
      this._notifications.addItem(s, NotificationType.INFO);
    }, "_r69f003023c05c0");
    _re723af11c13e65 = fi((e) => {
      let r = ClassUtils.getParser(e, class_3650);
      if (r == null || r == null) return;
      (this._notifications.localization?._r43eae9731f5b27(
        "notifications.text.room.messages.posted",
        "room_name",
        r.roomName,
      ),
        this._notifications.localization?._r43eae9731f5b27(
          "notifications.text.room.messages.posted",
          "messages_count",
          String(r.messageCount),
        ));
      let t = this._notifications.localization?._r5f04530d38380d("notifications.text.room.messages.posted"),
        s = this._notifications.assets.getAssetByName("if_icon_temp_png")?.content?.clone() ?? null;
      t?.value != null && this._notifications._rbc2d086cba1f9d?.addItem(t.value, NotificationType.ROOM_MESSAGES_POSTED, s);
    }, "_re723af11c13e65");
  }
