// Estratto da HabboAirLauncher.deobf.js, riga 228036.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/badge_leaderboard/BadgeLeaderboardController.as
// Nome offuscato: _i542d825c2b483c

class a extends ue {
  static {
    n(this, "BadgeLeaderboardController");
  }
  static PAGE_SIZE = ka.PAGE_SIZE;
  static DEFAULT_RANK_BORDER_COLOR = 6521514;
  static FIRST_PLACE_RANK_BORDER_COLOR = 13938487;
  static const_1055 = 12632256;
  static THIRD_PLACE_RANK_BORDER_COLOR = 13467442;
  static _r0b01881b0003e6 = [
    vt.RARE,
    vt.VERY_RARE,
    vt.MYTHICAL,
    vt.const_1197,
    vt.const_439,
  ];
  var_1809 = null;
  _view = null;
  _r1eccd28114a97b = null;
  _rcd2e1240f0a0f8 = class_2659.TOTAL_BADGES;
  var_842 = -1;
  var_770 = 0;
  _rc29d3135c2103f = null;
  constructor(e, r, t = 0, i = null) {
    (super(r, t),
      (this.var_1809 = e),
      (this._messageEvents ??= []),
      (this._r1eccd28114a97b = new f7e(this._rb13ed3a89b85ae)));
  }
  get assets() {
    return this.var_1809?.assets ?? super.assets;
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (e) => {
          ((this._r6358b2bd53ae19 = e), this._r2c15b16e6eba6e());
        },
        !0,
      ),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localizationManager = e;
      }),
      new ComponentDependency(
        new IIDAvatarRenderManager(),
        (e) => {
          this._avatarRenderManager = e;
        },
        !1,
      ),
    ]);
  }
  showBadgeLeaderboard(e, r = -1, t = 0) {
    (this._view == null && this._windowManager != null && (this._view = new l7e(this, this._windowManager)),
      !(this._view == null || this._r1eccd28114a97b == null) &&
        ((this._rcd2e1240f0a0f8 = this._r68402d154bb8b4(e, r)),
        (this.var_842 = this._r3d1dbc5559b388(this._rcd2e1240f0a0f8, r)),
        (this.var_770 = Math.max(0, t)),
        this._rfc49f836bb1d76(),
        this._rfd8e5d395fd48e(),
        this._r1eccd28114a97b.requestPage(
          this._rcd2e1240f0a0f8,
          this.var_842,
          this.var_770,
          this._rc640f9c55395e2,
        ),
        this._view.show()));
  }
  get linkPattern() {
    return ka._r1a5c1a300715cc;
  }
  linkReceived(e) {
    let r = e == null ? [] : e.split("/");
    r.length === 0 ||
      r[0] !== ka.LINK_ID ||
      this.showBadgeLeaderboard(
        this._r8bd083c6809759(r, 1, ka.TOTAL_BADGES),
        this._r8bd083c6809759(r, 2, ka.DEFAULT_RARITY),
        this._r8bd083c6809759(r, 3, ka._r44f115799afb60),
      );
  }
  hide() {
    this._view?.hide();
  }
  _r2091d400ff4442() {
    this._view?._r838b5c8d6ac066();
  }
  _rf1f03ff980f904(e) {
    this.showBadgeLeaderboard(this._r0404f31fbe531e(e), this._r6e5cf27b34fc2e(e), 0);
  }
  _r5faf0f53f68df3() {
    this.var_770 > 0 &&
      this.showBadgeLeaderboard(this._rcd2e1240f0a0f8, this.var_842, this.var_770 - 1);
  }
  _r72580402af066a() {
    this._rc29d3135c2103f != null &&
      (this.var_770 + 1) * a.PAGE_SIZE < this._rc29d3135c2103f.totalEntries &&
      this.showBadgeLeaderboard(this._rcd2e1240f0a0f8, this.var_842, this.var_770 + 1);
  }
  _r3e349b5328deac(e) {
    if (this._rc29d3135c2103f == null) return;
    let r = null;
    (e === -1
      ? (r = this._rc29d3135c2103f.ownEntry)
      : e >= 0 && e < this._rc29d3135c2103f.entries.length && (r = this._rc29d3135c2103f.entries[e] ?? null),
      r != null && this.var_1809?._rebf0e04324ba16(r.userId));
  }
  avatarImageReady(e) {
    this.disposed || this._rc29d3135c2103f == null || !this._reb51703563359d(e) || this._r745b89ef2f776b(e);
  }
  dispose() {
    if (!this.disposed) {
      if (
        (this._rfc49f836bb1d76(),
        this._view?.dispose(),
        (this._view = null),
        this._r1eccd28114a97b?.dispose(),
        (this._r1eccd28114a97b = null),
        this._messageEvents != null && this._r6358b2bd53ae19 != null)
      )
        for (let e of this._messageEvents) this._r6358b2bd53ae19._r7668362bf55fdd(e);
      ((this._messageEvents = null),
        (this._r6358b2bd53ae19 = null),
        (this._localizationManager = null),
        (this._windowManager = null),
        (this._avatarRenderManager = null),
        (this.var_1809 = null),
        (this._rc29d3135c2103f = null),
        super.dispose());
    }
  }
  _r2c15b16e6eba6e() {
    this.disposed ||
      this._r6358b2bd53ae19 == null ||
      (this._messageEvents == null && (this._messageEvents = []),
      !(this._messageEvents.length > 0) &&
        this._messageEvents.push(
          this._r6358b2bd53ae19._r2e106e2349a0b6(new class_3311((e) => this._r38cda1b5b06cba(e))),
        ));
  }
  _r38cda1b5b06cba = n((e) => {
    this._r1eccd28114a97b?._r38cda1b5b06cba(e.getParser());
  }, "_r38cda1b5b06cba");
  _rc640f9c55395e2 = n((e) => {
    this.disposed || ((this._rc29d3135c2103f = e), this._rfd8e5d395fd48e(), this._r74296ed44a8ac9());
  }, "_rc640f9c55395e2");
  _rfd8e5d395fd48e() {
    this._view != null &&
      (this._view._r5c646b9683abcf(this._r80c355f181188c(this._rcd2e1240f0a0f8, this.var_842)),
      this._view._r21c42244fb92db(
        this.getDropdownOptions(),
        this._r12002ac139bd38(this._rcd2e1240f0a0f8, this.var_842),
      ),
      this._view.setTitle(this.getTitleText(this._rcd2e1240f0a0f8, this.var_842)),
      this._view.setInfo(
        this.getHeaderAssetUri(this._rcd2e1240f0a0f8, this.var_842),
        this._r7ac114b85f7123(this._rcd2e1240f0a0f8, this.var_842),
      ),
      this._view._r46a305dc2448da(this._r9b3a0048391317(this._rcd2e1240f0a0f8, this.var_842)),
      this._view._rc594f6f634fb92(this._r4119ce624424e4(), this._r5b86f24e31b9cb()));
  }
  _r74296ed44a8ac9() {
    if (this._view == null) return;
    let e = this._rc29d3135c2103f == null ? [] : this._rc29d3135c2103f.entries,
      r = this.getRowAssetUri(this._rcd2e1240f0a0f8, this.var_842);
    for (let i = 0; i < this._view._r4c6e8ea8d7666d.length; i++) {
      let s = this._view._r4c6e8ea8d7666d[i],
        o = i < e.length ? (e[i] ?? null) : null;
      if (o == null) {
        (this._view._r8664dabf0410d1(i, !1), this._rbf6a3012cdf32f(s.profileCanvas));
        continue;
      }
      let d = (this.var_770 * a.PAGE_SIZE + i) % 2 === 0;
      (this._view._r8664dabf0410d1(i, !0),
        s.evenBackground != null && (s.evenBackground.visible = d),
        s.unevenBackground != null && (s.unevenBackground.visible = !d),
        s.rankText != null && (s.rankText.text = this.getRankText(o.rank)),
        s.usernameText != null && (s.usernameText.text = o.userName),
        s.scoreText != null && (s.scoreText.text = String(o.score)),
        this._r89ddb611a80cf0(s, o.rank),
        s.rankTypeImage != null && (s.rankTypeImage.assetUri = r));
    }
    let t = this._rc29d3135c2103f?.ownEntry ?? null;
    (this._view._ra69c2bc7f2e50d(t != null),
      t != null && this._view._r6c3153b4b1990c != null
        ? (this._view._r6c3153b4b1990c.rankText != null &&
            (this._view._r6c3153b4b1990c.rankText.text = this.getRankText(t.rank)),
          this._view._r6c3153b4b1990c.usernameText != null &&
            (this._view._r6c3153b4b1990c.usernameText.text = t.userName),
          this._view._r6c3153b4b1990c.scoreText != null &&
            (this._view._r6c3153b4b1990c.scoreText.text = String(t.score)),
          this._r89ddb611a80cf0(this._view._r6c3153b4b1990c, t.rank),
          this._view._r6c3153b4b1990c.rankTypeImage != null &&
            (this._view._r6c3153b4b1990c.rankTypeImage.assetUri = r))
        : this._rbf6a3012cdf32f(this._view._r6c3153b4b1990c?.profileCanvas ?? null),
      this._r0b9301ce62b80b(),
      this._view._rc594f6f634fb92(this._r4119ce624424e4(), this._r5b86f24e31b9cb()));
  }
  _r0b9301ce62b80b() {
    if (this._view == null) return;
    let e = this._rc29d3135c2103f == null ? [] : this._rc29d3135c2103f.entries;
    for (let r = 0; r < this._view._r4c6e8ea8d7666d.length; r++) {
      let t = r < e.length ? (e[r] ?? null) : null;
      this._r488b5715b546b9(this._view._r4c6e8ea8d7666d[r], t);
    }
    this._r488b5715b546b9(this._view._r6c3153b4b1990c, this._rc29d3135c2103f?.ownEntry ?? null);
  }
  _r745b89ef2f776b(e) {
    let r = this._rc29d3135c2103f == null ? [] : this._rc29d3135c2103f.entries;
    if (this._view == null || e == null) return;
    for (let i = 0; i < this._view._r4c6e8ea8d7666d.length; i++) {
      let s = i < r.length ? (r[i] ?? null) : null;
      s != null && s.figureString === e && this._r488b5715b546b9(this._view._r4c6e8ea8d7666d[i], s);
    }
    let t = this._rc29d3135c2103f?.ownEntry ?? null;
    t != null && t.figureString === e && this._r488b5715b546b9(this._view._r6c3153b4b1990c, t);
  }
  _r488b5715b546b9(e, r) {
    if (
      e == null ||
      (this._rbf6a3012cdf32f(e.profileCanvas),
      r == null || this._avatarRenderManager == null || r.figureString == null || r.figureString.length === 0)
    )
      return;
    let t = this._avatarRenderManager._r274f6640e76241(r.figureString, fr.LARGE, null, this);
    if (t == null) return;
    let i = Jd.focusUserFace(t, class_2123.HEAD, 2, 1);
    (t.dispose(), i != null && this._re5756116cb8ac6(e.profileCanvas, i));
  }
  _re5756116cb8ac6(e, r) {
    (this._rbf6a3012cdf32f(e),
      e != null && ((e.bitmap = r), (e.width = r.width), (e.height = r.height), e.invalidate()));
  }
  _rbf6a3012cdf32f(e) {
    e != null && (e.bitmap != null && (e.bitmap.dispose(), (e.bitmap = null)), e.invalidate());
  }
  _rfc49f836bb1d76() {
    if (((this._rc29d3135c2103f = null), this._view != null)) {
      for (let e = 0; e < this._view._r4c6e8ea8d7666d.length; e++)
        (this._view._r8664dabf0410d1(e, !1),
          this._rbf6a3012cdf32f(this._view._r4c6e8ea8d7666d[e].profileCanvas));
      (this._view._ra69c2bc7f2e50d(!1),
        this._rbf6a3012cdf32f(this._view._r6c3153b4b1990c?.profileCanvas ?? null),
        this._view._rc594f6f634fb92(this._r4119ce624424e4(), !1));
    }
  }
  _reb51703563359d(e) {
    if (this._rc29d3135c2103f == null || e == null) return !1;
    for (let r of this._rc29d3135c2103f.entries) if (r != null && r.figureString === e) return !0;
    return this._rc29d3135c2103f.ownEntry?.figureString === e;
  }
  _r8bd083c6809759(e, r, t) {
    if (e == null || r < 0 || r >= e.length) return t;
    let i = e[r];
    if (i == null || i.length === 0) return t;
    let s = Number(i);
    return Number.isNaN(s) ? t : Math.trunc(s);
  }
  _r4119ce624424e4() {
    return this.var_770 > 0;
  }
  _r5b86f24e31b9cb() {
    return (
      this._rc29d3135c2103f != null &&
      (this.var_770 + 1) * a.PAGE_SIZE < this._rc29d3135c2103f.totalEntries
    );
  }
  _r68402d154bb8b4(e, r) {
    return e === class_2659.ACHIEVEMENT_LEVEL || (e === class_2659.BADGES_BY_RARITY && this._rb95c422f2aee5b(r))
      ? e
      : class_2659.TOTAL_BADGES;
  }
  _r3d1dbc5559b388(e, r) {
    return e === class_2659.BADGES_BY_RARITY ? r : -1;
  }
  _rb95c422f2aee5b(e) {
    return this._r365995918624fe().indexOf(e) >= 0;
  }
  getDropdownOptions() {
    let e = [
      this.localizationManager.getLocalization("badge_leaderboard.option.total_badges"),
      this.localizationManager.getLocalization("badge_leaderboard.option.achievement_level"),
    ];
    for (let r of this._r365995918624fe())
      e.push(
        this.localizationManager.getLocalizationWithParams(
          "badge_leaderboard.option.rarity",
          "",
          "rarity",
          this._r75f31638c2c9b2(r),
        ),
      );
    return e;
  }
  _r12002ac139bd38(e, r) {
    if (e === class_2659.TOTAL_BADGES) return 0;
    if (e === class_2659.ACHIEVEMENT_LEVEL) return 1;
    let t = this._r365995918624fe().indexOf(r);
    return t < 0 ? 0 : t + 2;
  }
  _r0404f31fbe531e(e) {
    return e <= 0 ? class_2659.TOTAL_BADGES : e === 1 ? class_2659.ACHIEVEMENT_LEVEL : class_2659.BADGES_BY_RARITY;
  }
  _r6e5cf27b34fc2e(e) {
    return e <= 1 || e > this._r365995918624fe().length + 1 ? -1 : this._r365995918624fe()[e - 2];
  }
  getTitleText(e, r) {
    return e === class_2659.BADGES_BY_RARITY
      ? this.localizationManager.getLocalizationWithParams(
          "badge_leaderboard.title.rarity",
          "",
          "rarity",
          this._r75f31638c2c9b2(r),
        )
      : e === class_2659.ACHIEVEMENT_LEVEL
        ? this.localizationManager.getLocalization("badge_leaderboard.title.achievement_level")
        : this.localizationManager.getLocalization("badge_leaderboard.title.total_badges");
  }
  _r7ac114b85f7123(e, r) {
    return e === class_2659.BADGES_BY_RARITY
      ? this.localizationManager.getLocalization(this.getInfoLocalizationKey(r))
      : e === class_2659.ACHIEVEMENT_LEVEL
        ? this.localizationManager.getLocalization("badge_leaderboard.info.achievement_level")
        : this.localizationManager.getLocalization("badge_leaderboard.info.total_badges");
  }
  getInfoLocalizationKey(e) {
    switch (e) {
      case vt.const_269:
        return "badge_leaderboard.info.rarity.uncommon";
      case vt.RARE:
        return "badge_leaderboard.info.rarity.rare";
      case vt.VERY_RARE:
        return "badge_leaderboard.info.rarity.epic";
      case vt.MYTHICAL:
        return "badge_leaderboard.info.rarity.mythical";
      case vt.const_1197:
        return "badge_leaderboard.info.rarity.legendary";
      case vt.const_439:
        return "badge_leaderboard.info.rarity.unique";
      default:
        return "badge_leaderboard.info.total_badges";
    }
  }
  _r75f31638c2c9b2(e) {
    return this.localizationManager.getLocalization(vt.getLocalizationKey(e, this.isUncommonBadgeRarityEnabled()));
  }
  getHeaderAssetUri(e, r) {
    return e === class_2659.BADGES_BY_RARITY
      ? `${this.getRarityAssetBase(r)}_extended`
      : e === class_2659.ACHIEVEMENT_LEVEL
        ? "badges_emblem_achievement_extended"
        : "badge_rarity_badges_emblem";
  }
  _r80c355f181188c(e, r) {
    if (e === class_2659.BADGES_BY_RARITY)
      switch (r) {
        case vt.const_269:
          return ka.FRAME_STYLE_UNCOMMON;
        case vt.RARE:
          return ka.FRAME_STYLE_RARE;
        case vt.VERY_RARE:
          return ka.FRAME_STYLE_VERY_RARE;
        case vt.MYTHICAL:
          return ka.FRAME_STYLE_MYTHICAL;
        case vt.const_1197:
          return ka.FRAME_STYLE_LEGENDARY;
        case vt.const_439:
          return ka.FRAME_STYLE_UNIQUE;
      }
    return e === class_2659.ACHIEVEMENT_LEVEL ? ka.FRAME_STYLE_ACHIEVEMENT_LEVEL : ka.FRAME_STYLE_TOTAL_BADGES;
  }
  _r9b3a0048391317(e, r) {
    return e === class_2659.TOTAL_BADGES || (e === class_2659.BADGES_BY_RARITY && r === vt.const_269)
      ? -9
      : e === class_2659.ACHIEVEMENT_LEVEL
        ? -7
        : 0;
  }
  getRowAssetUri(e, r) {
    return e === class_2659.BADGES_BY_RARITY
      ? this.getRarityAssetBase(r)
      : e === class_2659.ACHIEVEMENT_LEVEL
        ? "badges_emblem_achievement"
        : "badge_rarity_badges_emblem";
  }
  getRarityAssetBase(e) {
    switch (e) {
      case vt.const_269:
        return "badge_rarity_badges_emblem_uncommon";
      case vt.RARE:
        return "badge_rarity_badges_emblem_rare";
      case vt.VERY_RARE:
        return "badge_rarity_badges_emblem_very_rare";
      case vt.MYTHICAL:
        return "badge_rarity_badges_emblem_mythical";
      case vt.const_1197:
        return "badge_rarity_badges_emblem_legendary";
      case vt.const_439:
        return "badge_rarity_badges_emblem_unique";
      default:
        return "badge_rarity_badges_emblem";
    }
  }
  _r365995918624fe() {
    let e = a._r0b01881b0003e6.concat();
    return (this.isUncommonBadgeRarityEnabled() && e.unshift(vt.const_269), e);
  }
  isUncommonBadgeRarityEnabled() {
    return this.var_1809?.getBoolean("badge_rarity.uncommon") ?? !1;
  }
  getRankText(e) {
    return e < 0 ? "--" : String(e);
  }
  _r89ddb611a80cf0(e, r) {
    e?.rankBorder != null && (e.rankBorder.color = this._r1ed50bbf2f2c53(r));
  }
  _r1ed50bbf2f2c53(e) {
    switch (e) {
      case 1:
        return a.FIRST_PLACE_RANK_BORDER_COLOR;
      case 2:
        return a.const_1055;
      case 3:
        return a.THIRD_PLACE_RANK_BORDER_COLOR;
      default:
        return a.DEFAULT_RANK_BORDER_COLOR;
    }
  }
  get localizationManager() {
    if (this._localizationManager == null)
      throw new Error("BadgeLeaderboardController localizationManager is not available.");
    return this._localizationManager;
  }
  _rb13ed3a89b85ae = n((e) => {
    this._r6358b2bd53ae19?.connection.send(e);
  }, "_rb13ed3a89b85ae");
}
