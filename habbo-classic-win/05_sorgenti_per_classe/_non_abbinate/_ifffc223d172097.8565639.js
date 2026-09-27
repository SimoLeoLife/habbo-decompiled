// Estratto da HabboAirLauncher.deobf.js, riga 268445.

class {
    static {
      n(this, "_ifffc223d172097");
    }
    constructor(e) {
      this._questEngine = e;
      let r = this._questEngine?.communication;
      (r?._r2e106e2349a0b6(new class_2688(this._r27f5f0ce8a8093)),
        r?._r2e106e2349a0b6(new _i14986cf5ab76b2(this.onQuestCancelled)),
        r?._r2e106e2349a0b6(new class_1929(this.onRoomExit)),
        r?._r2e106e2349a0b6(new class_2117(this.onRoomEnter)),
        r?._r2e106e2349a0b6(new class_3674(this._r01c27ca5ccd89b)),
        r?._r2e106e2349a0b6(new class_2461(this.onQuests)),
        r?._r2e106e2349a0b6(new class_2469(this.onQuest)),
        r?._r2e106e2349a0b6(new class_3422(this._r2db1535e0dacd9)),
        r?._r2e106e2349a0b6(new class_2578(this._rc158eba0565eba)),
        r?._r2e106e2349a0b6(new class_2004(this._rfb3ceb8740722c)),
        r?._r2e106e2349a0b6(new class_3454(this._re40eb17a9fa555)),
        r?._r2e106e2349a0b6(new class_2294(this._r2d530d038ff798)),
        r?._r2e106e2349a0b6(new class_2386(this._r783514f2477ca9)),
        r?._r2e106e2349a0b6(new class_2351(this._r0dcb3b3f702898)),
        r?._r2e106e2349a0b6(new class_3670(this._r893ea75ce6960c)),
        r?._r2e106e2349a0b6(new class_2003(this._r13a2682227f3a8)),
        r?._r2e106e2349a0b6(new class_2969(this._r88de5d30b4a7dd)),
        r?._r2e106e2349a0b6(new _i7cbd2aa57cd932(this._r4c7dc9c16f42ad)),
        r?._r2e106e2349a0b6(new _i45556df1194836(this._r4c7dc9c16f42ad)),
        r?._r2e106e2349a0b6(new _idf78f49c2487cb(this._r4c7dc9c16f42ad)),
        r?._r2e106e2349a0b6(new class_3128(this.onRoomSettingsSaved)),
        r?._r2e106e2349a0b6(new class_3574(this._r40308c1550e130)),
        r?._r2e106e2349a0b6(new class_2599(this.onActivityPoints)),
        r?._r2e106e2349a0b6(new class_3542(this._r69f74e8e9f4b24)));
    }
    static {
      uo(this, "_ifffc223d172097");
    }
    var_1271 = !1;
    get disposed() {
      return this.var_1271;
    }
    dispose() {
      this.var_1271 = !0;
    }
    _r27f5f0ce8a8093 = uo((e) => {
      let r = ClassUtils.getParser(e, class_2961);
      r != null &&
        r.questData != null &&
        (this._questEngine?._rd4042d1a6a05a1._r27f5f0ce8a8093(r.questData, r._r4ca4d5562c4790),
        this._questEngine?.isSeasonalQuest(r.questData) &&
          this._questEngine.events.dispatchEvent?.(new Gp(Gp.QUEST_SEASONAL, r.questData)));
    }, "_r27f5f0ce8a8093");
    onQuestCancelled = uo((e) => {
      let r = ClassUtils.getParser(e, _ie2b07322e1514e);
      r != null &&
        r.quest != null &&
        (this._questEngine?._rd4042d1a6a05a1.onQuestCancelled(r.quest._r808a32b2f4122c),
        r.expired &&
          this._questEngine?.windowManager.alert(
            "${quests.expired.title}",
            "${quests.expired.body}",
            0,
            null,
          ));
    }, "onQuestCancelled");
    onQuests = uo((e) => {
      let r = ClassUtils.getParser(e, class_3389);
      r != null &&
        this._questEngine?.events.dispatchEvent?.(new r_(r_.QUESTS, r.quests ?? [], r.openWindow));
    }, "onQuests");
    _r01c27ca5ccd89b = uo((e) => {
      let r = ClassUtils.getParser(e, class_3492);
      r != null &&
        this._questEngine?.events.dispatchEvent?.(new r_(r_.QUESTS_SEASONAL, r.quests ?? [], !0));
    }, "_r01c27ca5ccd89b");
    onQuest = uo((e) => {
      let r = ClassUtils.getParser(e, _ie64c41b4977446);
      r != null && r.quest != null && this._questEngine?._rd4042d1a6a05a1.onQuest(r.quest);
    }, "onQuest");
    onRoomEnter = uo((e) => {
      (this._questEngine?._rbc749f571f7b62.onRoomEnter(e),
        this._questEngine != null && (this._questEngine.currentlyInRoom = !0));
    }, "onRoomEnter");
    onRoomExit = uo(() => {
      (this._questEngine?._rd4042d1a6a05a1.onRoomExit(),
        this._questEngine?._rc9f1a165570e64.onRoomExit(),
        this._questEngine?._rbc749f571f7b62.onRoomExit(),
        this._questEngine != null && (this._questEngine.currentlyInRoom = !1));
    }, "onRoomExit");
    _r4c7dc9c16f42ad = uo(() => {
      this._questEngine?._rbc749f571f7b62._r17909e021af2d1();
    }, "_r4c7dc9c16f42ad");
    onRoomSettingsSaved = uo(() => {
      this._questEngine?._rbc749f571f7b62._r17909e021af2d1();
    }, "onRoomSettingsSaved");
    _rc158eba0565eba = uo((e) => {
      let r = ClassUtils.getParser(e, _i0e323a7477cb49);
      r != null &&
        this._questEngine?._rc9f1a165570e64._rc158eba0565eba(r.achievements ?? [], r._r5f6cc9592ea239);
    }, "_rc158eba0565eba");
    _rfb3ceb8740722c = uo((e) => {
      let r = ClassUtils.getParser(e, class_3840);
      r != null &&
        this._questEngine?._ra4f9e9a6e37c17.onResolutionAchievements(
          r.stuffId,
          r.achievements,
          r.endTime,
        );
    }, "_rfb3ceb8740722c");
    _re40eb17a9fa555 = uo((e) => {
      let r = ClassUtils.getParser(e, class_3132);
      r != null &&
        this._questEngine?._ra4f9e9a6e37c17.onResolutionProgress(
          r.stuffId,
          r.achievementId,
          r._rcb496c021f73b4,
          r._rf1183cfe00f99a,
          r._rc9adb2a0dcc5d3,
          r.endTime,
        );
    }, "_re40eb17a9fa555");
    _r2d530d038ff798 = uo((e) => {
      let r = ClassUtils.getParser(e, class_2934);
      r != null &&
        this._questEngine?._ra4f9e9a6e37c17._r17951be0738e68(r._rc9fc89e7eb27a7, r._rbf47c52da5b0a3);
    }, "_r2d530d038ff798");
    _r783514f2477ca9 = uo((e) => {
      let r = ClassUtils.getParser(e, _if1f80e969d180d);
      r != null &&
        r.achievement != null &&
        (this._questEngine?._rc9f1a165570e64._r783514f2477ca9(r.achievement),
        this._questEngine?._ra4f9e9a6e37c17._r783514f2477ca9(r.achievement));
    }, "_r783514f2477ca9");
    _r0dcb3b3f702898 = uo((e) => {
      let r = ClassUtils.getParser(e, class_2556);
      r != null &&
        this._questEngine?.localization._r43eae9731f5b27(
          "achievements.categories.score",
          "score",
          r.score.toString(),
        );
    }, "_r0dcb3b3f702898");
    _r893ea75ce6960c = uo((e) => {
      let r = ClassUtils.getParser(e, _iebbf99541a195c);
      if (r == null || r.data == null) return;
      let t =
        this._questEngine?.localization._rfe88beed17f2db(r.data._rc9fc89e7eb27a7) ??
        r.data._rc9fc89e7eb27a7;
      (this._questEngine?.send(new class_2154("Achievements", t, "Leveled", "", r.data.level)),
        this._questEngine?._ra4f9e9a6e37c17._r893ea75ce6960c(r.data));
    }, "_r893ea75ce6960c");
    _r2db1535e0dacd9 = uo((e) => {
      let r = ClassUtils.getParser(e, class_3663);
      r != null && this._questEngine?._r761b9d382f04e8(r.isFirstLoginOfDay);
    }, "_r2db1535e0dacd9");
    _r13a2682227f3a8 = uo((e) => {
      this._questEngine?._rbc749f571f7b62._r13a2682227f3a8(e);
    }, "_r13a2682227f3a8");
    _r88de5d30b4a7dd = uo((e) => {
      this._questEngine?._rbc749f571f7b62._r88de5d30b4a7dd(e);
    }, "_r88de5d30b4a7dd");
    _r40308c1550e130 = uo((e) => {
      let r = ClassUtils.getParser(e, _i02f7b3126bce1e);
      r != null &&
        r._ra6c4481543acf2 &&
        r.responseType === _i02f7b3126bce1e._rd27f8b1a517069 &&
        this._questEngine?._rbc749f571f7b62._r7b256b00b1d95e();
    }, "_r40308c1550e130");
    onActivityPoints = uo((e) => {
      let r = e.points;
      for (let t of et.values()) this._questEngine?._rd4042d1a6a05a1.onActivityPoints(t, 0);
      for (let [t, i] of r.entries()) this._questEngine?._rd4042d1a6a05a1.onActivityPoints(t, i);
    }, "onActivityPoints");
    _r69f74e8e9f4b24 = uo((e) => {
      this._questEngine?._rd4042d1a6a05a1.onActivityPoints(e.type, e.amount);
    }, "_r69f74e8e9f4b24");
  }
