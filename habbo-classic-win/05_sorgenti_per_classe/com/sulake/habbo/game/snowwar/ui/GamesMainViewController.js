// Extracted from HabboAirLauncher.deobf.js, line 223330.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/ui/GamesMainViewController.as
// Obfuscated name: _idcd149a6052b30

class a {
  constructor(e) {
    this._rc48cb7ca67aee6 = e;
  }
  static {
    n(this, "GamesMainViewController");
  }
  static _r7a8b4f3c51b10e = ["move_", "throw_1_", "throw_2_", "throw_3_", "balls_"];
  static _r686c8ce7a3099b = [4, 4, 5, 5, 5];
  static INSTRUCTION_FRAME_LENGTH = 1e3;
  var_569 = null;
  var_33 = null;
  var_277 = null;
  _r09e546a84ad1a0 = null;
  _r16a998701b7199 = null;
  var_458 = 0;
  var_357 = 0;
  var_1271 = !1;
  get _rbe53bad1dd182e() {
    return this._rc48cb7ca67aee6;
  }
  get rootWindow() {
    return this.var_569;
  }
  get _r44d07b4d5d75a3() {
    return this.var_277;
  }
  toggleVisibility() {
    this.var_569 != null
      ? (this.var_569.visible = !this.var_569.visible)
      : this._r9ac1f240d58a14(!0);
  }
  close(e) {
    (this.var_277?.visible && this.var_277.onClose(e), this.disposeViews());
  }
  _r9ac1f240d58a14(e) {
    if (this.var_569 == null && e) this.createWindow();
    else if (this.var_569 == null) return;
    (this.var_277 != null && (this.var_277.visible = !1),
      this.var_33 != null && (this.var_33.visible = !0));
  }
  openGameLobbyWindow(e, r, t) {
    (this.var_569 == null && this.createWindow(),
      this.var_277 == null
        ? (this.var_277 = new GameLobbyWindowCtrl(this, e, r, t))
        : ((this.var_277.GameLobbyWindowCtrl = e),
          (this.var_277.levelName = r),
          (this.var_277.numberOfTeams = t),
          this.var_277.maxNumberOfPlayers()),
      this.var_33 != null && (this.var_33.visible = !1),
      (this.var_277.visible = !0));
  }
  updateGameStartingStatus() {
    if (this.var_33 == null || !this.var_33.visible) return;
    je.setCaption(
      this.var_33.findChildByName("games_left"),
      this._rc48cb7ca67aee6._r3da1b12a009155.toString(),
    );
    let e = this.var_33.findChildByName("games_left_region"),
      r = this.var_33.findChildByName("games_left_stroke"),
      t = this.var_33.findChildByName("play.button");
    (t?.enable(),
      t != null && (t.visible = !0),
      this.updateGettingMoreGamesOption(),
      e != null && r != null && t != null && this.checkGameAmountStatus(e, r, t) && this.checkBlockStatus(t));
  }
  _raf29e04469c30d(e) {
    (e > 0 &&
      ((this.var_458 = e),
      this._r16a998701b7199 == null &&
        ((this._r16a998701b7199 = new UnkEventDispatcherWrapperSubclass_05394e(1e3, this.var_458)),
        this._r16a998701b7199.addEventListener(DeBouncer.addEventListener, this.onTick),
        this._r16a998701b7199.start())),
      this.updateGameStartingStatus());
  }
  dispose() {
    this.var_1271 || (this.disposeViews(), this._r2565ffaf10ad0b(), (this.var_1271 = !0));
  }
  get _rd790a63081bcf0() {
    return this.var_277?.visible === !0;
  }
  get disposed() {
    return this.var_1271;
  }
  createWindow() {
    if (
      ((this.var_569 = je.createWindow("games_main", 1)),
      this.var_569 == null ||
        (this.var_569.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose),
        (this.var_569.visible = !0),
        this.var_569.center(),
        (this.var_33 = this.var_569.findChildByName("quick_play_container")),
        this.var_33 == null))
    )
      return;
    (this.var_33.findChildByName("play.button")?.addEventListener(u.CLICK, this.onPlay),
      (this.var_33.visible = !1),
      this.var_33
        .findChildByName("instructions_link")
        ?.addEventListener(u.CLICK, this._rbb0c2fb3395086),
      this.var_33
        .findChildByName("leaderboard_link")
        ?.addEventListener(u.CLICK, this._r263ec04471c223),
      this.var_33
        .findChildByName("instructions_back")
        ?.addEventListener(u.CLICK, this._r1695ad626972f1),
      this.var_33
        .findChildByName("instructions_next")
        ?.addEventListener(u.CLICK, this._rab4d0f57abd39b),
      this.var_33
        .findChildByName("instructions_prev")
        ?.addEventListener(u.CLICK, this._rff6c2b507840f1),
      this.var_33
        .findChildByName("games_vip_region")
        ?.addEventListener(u.CLICK, this._r62df3cc019298e),
      (this.var_33.procedure = this.windowEventProc));
    let e = this.var_33.findChildByName("leaderboard_link");
    e != null && (e.visible = this._rc48cb7ca67aee6.config?.getBoolean("games.highscores.enabled") ?? !1);
    let r = this.var_33.findChildByName("page_list");
    if (r != null)
      for (let t = 0; t < r.numListItems; t++)
        r.getListItemAt(t)?.addEventListener(u.CLICK, this.onSelectPage);
    ((this.var_1271 = !1), this.updateGameStartingStatus());
  }
  updateGettingMoreGamesOption() {
    let e = this.var_33?.findChildByName("play.button");
    e != null && (e.visible = this._rc48cb7ca67aee6._r3da1b12a009155 !== 0);
  }
  showInstructions(e) {
    let r = this.var_33?.findChildByName("teaser_container"),
      t = this.var_33?.findChildByName("instructions_container");
    if (
      r == null ||
      t == null ||
      ((r.visible = !e),
      (t.visible = e),
      this._r09e546a84ad1a0?.dispose(),
      (this._r09e546a84ad1a0 = null),
      !e || this.var_33 == null)
    )
      return;
    let i = this.var_33.findChildByName("instructions_image"),
      s = a._r7a8b4f3c51b10e[this.var_357] ?? null,
      o = a._r686c8ce7a3099b[this.var_357] ?? 0;
    i != null &&
      s != null &&
      this._rc48cb7ca67aee6.assets != null &&
      (this._r09e546a84ad1a0 = new SnowWarAnimatedWindowElement(this._rc48cb7ca67aee6.assets, i, s, o, a.INSTRUCTION_FRAME_LENGTH));
    let d = this.var_33.findChildByName("instruction_text");
    d != null && (d.caption = `\${snowwar.instructions.${this.var_357 + 1}}`);
    let c = this.var_33.findChildByName("page_list");
    if (c != null)
      for (let f = 0; f < c.numListItems; f++) {
        let l = c.getListItemAt(f),
          b = f <= this.var_357 ? "pagination_ball_hilite" : "pagination_ball";
        l != null && je.setElementImage(l.getChildAt(0), this.getBitmap(b));
      }
  }
  getBitmap(e) {
    return this._rc48cb7ca67aee6.assets?.getAssetByName(e)?.content ?? null;
  }
  checkGameAmountStatus(e, r, t) {
    if (this._rc48cb7ca67aee6._rd31af608f83beb) return ((e.visible = !1), !0);
    e.visible = !0;
    let i = this.var_33?.findChildByName("play_text") ?? null;
    switch (((t.color = 5622784), this._rc48cb7ca67aee6._r3da1b12a009155)) {
      case -1:
        return ((e.visible = !1), je.setCaption(i, "${snowwar.play}"), !0);
      case 0:
        return (
          (e.visible = !0),
          (r.textColor = 16711680),
          je.setCaption(i, "${catalog.vip.buy.title}"),
          !1
        );
      default:
        return ((e.visible = !0), (r.textColor = 1079212), je.setCaption(i, "${snowwar.play}"), !0);
    }
  }
  checkBlockStatus(e) {
    let r = this.var_33?.findChildByName("play_text") ?? null;
    if (this.var_458 > 0) {
      (e.disable(), (e.color = 13421772));
      let t = Math.floor(this.var_458 / 60),
        i = this.var_458 % 60;
      r != null && (r.caption = `${t}:${i < 10 ? `0${i}` : i}`);
    } else (e.enable(), (e.color = 5622784), je.setCaption(r, "${snowwar.play}"));
  }
  disposeViews() {
    (this._r09e546a84ad1a0?.dispose(),
      (this._r09e546a84ad1a0 = null),
      this.var_277?.dispose(),
      (this.var_277 = null),
      this.var_33?.dispose(),
      (this.var_33 = null),
      this.var_569?.dispose(),
      (this.var_569 = null));
  }
  _r2565ffaf10ad0b() {
    (this._r16a998701b7199 != null &&
      (this._r16a998701b7199.removeEventListener(DeBouncer.addEventListener, this.onTick),
      this._r16a998701b7199.stop(),
      (this._r16a998701b7199 = null)),
      (this.var_458 = Number.NaN));
  }
  windowEventProc = n((e, r) => {
    if (e.type === u.OVER || e.type === u.OUT)
      switch (r.name) {
        case "btn_more_games_10":
          je.setElementImage(r, this.getBitmap(`btn_more_games_10${e.type === u.OVER ? "_hi" : ""}`));
          break;
        case "btn_more_games_100":
          je.setElementImage(
            r,
            this.getBitmap(`btn_more_games_100${e.type === u.OVER ? "_hi" : ""}`),
          );
          break;
        case "btn_more_games_300":
          je.setElementImage(
            r,
            this.getBitmap(`btn_more_games_300${e.type === u.OVER ? "_hi" : ""}`),
          );
          break;
      }
    if (e.type === u.CLICK)
      switch (r.name) {
        case "btn_more_games_10":
          (this._rc48cb7ca67aee6.catalog?._rd2832168ded994(xs.GET_SNOWWAR_TOKENS),
            this._rc48cb7ca67aee6.logGameEvent("gameFramework.buyTokens.clicked.frontView"));
          break;
        case "btn_more_games_100":
          (this._rc48cb7ca67aee6.catalog?._rd2832168ded994(xs.GET_SNOWWAR_TOKENS2),
            this._rc48cb7ca67aee6.logGameEvent("gameFramework.buyTokens.clicked.frontView"));
          break;
        case "btn_more_games_300":
          (this._rc48cb7ca67aee6.catalog?._rd2832168ded994(xs.GET_SNOWWAR_TOKENS3),
            this._rc48cb7ca67aee6.logGameEvent("gameFramework.buyTokens.clicked.frontView"));
          break;
      }
  }, "windowEventProc");
  onClose = n((e) => {
    this.close(!0);
  }, "onClose");
  onPlay = n((e) => {
    this._rc48cb7ca67aee6._r3da1b12a009155 !== 0
      ? this._rc48cb7ca67aee6._r04274d9317ec06()
      : this._rc48cb7ca67aee6._r0ae1535bbfa29c("gameFramework.onPlay.clicked.frontView");
  }, "onPlay");
  _rbb0c2fb3395086 = n((e) => {
    this.showInstructions(!0);
  }, "_rbb0c2fb3395086");
  _r263ec04471c223 = n((e) => {
    this._rc48cb7ca67aee6._r67250fc5be0a50();
  }, "_r263ec04471c223");
  _r1695ad626972f1 = n((e) => {
    this.showInstructions(!1);
  }, "_r1695ad626972f1");
  _rab4d0f57abd39b = n((e) => {
    ((this.var_357 = (this.var_357 + 1) % a._r7a8b4f3c51b10e.length),
      this.showInstructions(!0));
  }, "_rab4d0f57abd39b");
  _rff6c2b507840f1 = n((e) => {
    ((this.var_357 =
      (this.var_357 - 1 + a._r7a8b4f3c51b10e.length) % a._r7a8b4f3c51b10e.length),
      this.showInstructions(!0));
  }, "_rff6c2b507840f1");
  onSelectPage = n((e) => {
    let r = e.window?.name ?? "";
    ((this.var_357 = Number.parseInt(r.replace("page_", ""), 10) || 0), this.showInstructions(!0));
  }, "onSelectPage");
  _r62df3cc019298e = n((e) => {
    this._rc48cb7ca67aee6.openClubCenter("gameFramework.getVip.clicked.frontView");
  }, "_r62df3cc019298e");
  onTick = n((e) => {
    (this.var_458 > 0 && (this.var_458--, this.updateGameStartingStatus()),
      this.var_458 <= 0 && (this.updateGameStartingStatus(), this._r2565ffaf10ad0b()));
  }, "onTick");
}
