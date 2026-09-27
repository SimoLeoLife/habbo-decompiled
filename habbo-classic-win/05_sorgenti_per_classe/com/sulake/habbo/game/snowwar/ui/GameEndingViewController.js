// Estratto da HabboAirLauncher.deobf.js, riga 222392.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/ui/GameEndingViewController.as
// Nome offuscato: _ife50d5168941f1

class a {
  constructor(e, r, t, i, s) {
    this._rc48cb7ca67aee6 = e;
    this._teams = r;
    this._ra436d37724dd60 = i;
    this._rc48cb7ca67aee6._r5e3ef8a2b11d2a && (this._rc48cb7ca67aee6._r5e3ef8a2b11d2a.visible = !1);
    let o = this._rc48cb7ca67aee6.windowManager?.getDesktop(1);
    (o != null && (o.visible = !1),
      (this._rb077b54888ba3a = new BackgroundViewController(this._rc48cb7ca67aee6)),
      this._rb077b54888ba3a.background != null && (this._rb077b54888ba3a.background.visible = !0),
      this.createMainView());
    for (let c of this._teams) this.addTeamScores(c);
    let d = this.getElement(this._window, "endingInformation");
    (d?.parent != null &&
      (this._ra436d37724dd60.resultType === Game2GameResult.const_355
        ? (je.colorStrokes(d.parent, this.getNeutralTeamColor()),
          je.setCaption(d, "${snowwar.result.tie}"))
        : (je.colorStrokes(d.parent, this.getTeamColor(this._ra436d37724dd60.winnerId)),
          je.setCaption(d, "${snowwar.team_" + this._ra436d37724dd60.winnerId + "_wins}"))),
      this.showMostHits(t.playerWithMostHits),
      this.showMostKills(t.playerWithMostKills),
      this.startResultsCountDown(s),
      this._rc48cb7ca67aee6._rd31af608f83beb
        ? je.hideElement(this._window, "statusContainer")
        : (je.showElement(this._window, "statusContainer"),
          this._rc48cb7ca67aee6.communication?.connection?.send(new _i5dd11c8c1c20f0(class_3666.SNOWWAR))),
      this.updateGamesLeft());
  }
  static {
    n(this, "GameEndingViewController");
  }
  static _re0f82c1bab6196 = 2;
  static _r48a37530ad18ef = 0;
  static _r5fe7fbb2028014 = 1;
  static _rf22a7f472bd113 = 2;
  static STATE_LOBBY = 3;
  static STATE_LOADING = 4;
  static STATE_AFTER_SKI = 5;
  static _r632af128c51c83 = 1;
  _window = null;
  _disposed = !1;
  _players = new Map();
  _rb077b54888ba3a = null;
  _r88958903546a45 = null;
  _counter = 0;
  _state = a._r48a37530ad18ef;
  _raaaea91eb6f090 = new B();
  hideChatInput = new B();
  _r0be16dbf72b791 = a._r632af128c51c83;
  dispose() {
    if (this._disposed) return;
    let e = this._rc48cb7ca67aee6.windowManager?.getDesktop(1);
    if ((e != null && (e.visible = !0), this._r816d0e8339b4ef(), this.hideChatInput != null)) {
      for (let r of this.hideChatInput.getValues()) r.dispose();
      this.hideChatInput.dispose();
    }
    (this._rb077b54888ba3a?.dispose(),
      (this._rb077b54888ba3a = null),
      this._window?.dispose(),
      (this._window = null),
      (this._teams = []),
      this._players.clear(),
      this._raaaea91eb6f090.dispose(),
      (this._ra436d37724dd60 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  avatarImageReady(e) {}
  playerRematches(e) {
    let r = this._window?.findChildByName(`player${e}`),
      t = this._players.get(e) ?? null;
    if (r == null || t == null) return;
    t.willRejoin = !0;
    let i = r.getListItemByName("playerScoreContainer"),
      s = this.getElement(i, "playerScoreGlow");
    s != null &&
      !this.hideChatInput.hasKey(s) &&
      this._rc48cb7ca67aee6.assets != null &&
      this.hideChatInput.add(s, new SnowWarAnimatedWindowElement(this._rc48cb7ca67aee6.assets, s, "rematch_", 6, 100, !0));
  }
  changeToWaitState(e) {
    if (!e) {
      this.changeToAfterSkiState();
      return;
    }
    ((this._state = a._rf22a7f472bd113), this._r4472f15707dcfd());
    let r = [];
    for (let t of this._players.values()) {
      let i = this._window?.findChildByName(`team${t.teamId}PlayersList`),
        s = this._window?.findChildByName(`player${t.userId}`);
      if (i == null || s == null) return;
      if (!t.willRejoin) (i.removeListItem(s), r.push(t.userId));
      else {
        let o = s.getListItemByName("playerDataContainer"),
          d = s.getListItemByName("playerScoreContainer");
        (o?.findChildByName("playerStats") && (o.findChildByName("playerStats").visible = !1),
          je.setCaption(this.getElement(o, "playerName"), t.userName),
          d != null && je.hideElement(d, "playerScore"));
      }
    }
    for (let t of r) this._players.delete(t);
    (this._window != null && je.hideElement(this._window, "buttonsContainer"),
      this._window != null && je.hideElement(this._window, "mostKillsContainer"),
      this._window != null && je.hideElement(this._window, "mostHitsContainer"),
      this._window != null && je.hideElement(this._window, "team1Score"),
      this._window != null && je.hideElement(this._window, "team2Score"),
      je.setCaption(
        this.getElement(this._window, "endingInformation"),
        "${snowwar.lobby_waiting_for_more_players}",
      ));
  }
  _rbb8be570b6cb63(e) {
    ((this._state = a.STATE_LOBBY), this._r2884b5a375e12e(e), this.updateDialog());
  }
  _ra8dc3d4f9fef6a() {
    (this._r816d0e8339b4ef(), this.updateDialog());
  }
  changeToLobbyState(e) {
    ((this._state = a.STATE_LOBBY), this._raaaea91eb6f090.reset());
    let r = [];
    for (let s of this._players.values()) {
      let o = this._window?.findChildByName(`team${s.teamId}PlayersList`),
        d = this._window?.findChildByName(`player${s.userId}`);
      if (o == null || d == null) return;
      (o.removeListItem(d), r.push(s.userId));
    }
    for (let s of r) this._players.delete(s);
    let t = this._window?.findChildByName("loadingContainer");
    (t != null && ((t.visible = !0), je.hideElement(t, "loadingText")),
      je.setCaption(
        this._window?.findChildByName("arenaName") ?? null,
        this._rc48cb7ca67aee6.getArenaName(e),
      ));
    let i = this.getElement(this._window, "headerContainer");
    (i != null && je.colorStrokes(i, this.getTeamColor(1)),
      je.setElementImage(
        this._window?.findChildByName("arenaPreview") ?? null,
        this.getBitmap(`arena_${e.fieldType}_preview`),
      ));
  }
  _rbb1a50c088346f(e) {
    (this._raaaea91eb6f090.add(e.userId, e), this._re2e312ab09051a());
  }
  _r6d432df66b5ba3(e) {
    (this._raaaea91eb6f090.getValue(e) != null && this._raaaea91eb6f090.remove(e), this._re2e312ab09051a());
  }
  updateGamesLeft() {
    let e = this._window?.findChildByName("buttonsContainer"),
      r = this._window?.findChildByName("statusContainer");
    if (e == null || r == null) return;
    ((e.visible = !0),
      je.setCaption(r.findChildByName("games_left"), String(this._rc48cb7ca67aee6._r3da1b12a009155)));
    let t = r.findChildByName("games_left_stroke"),
      i = this._window?.findChildByName("button_rematch");
    if ((this.updateGettingMoreGamesOption(), this._rc48cb7ca67aee6._rd31af608f83beb)) {
      (i?.enable(), i != null && (i.color = 5622784), (r.visible = !1));
      return;
    }
    switch (this._rc48cb7ca67aee6._r3da1b12a009155) {
      case -1:
        (i?.enable(), i != null && (i.color = 5622784), (r.visible = !1));
        break;
      case 0:
        (t != null && (t.textColor = 16711680), i?.enable(), i != null && (i.color = 5622784));
        break;
      default:
        (t != null && (t.textColor = 1079212), i?.enable(), i != null && (i.color = 5622784));
        break;
    }
  }
  createMainView() {
    if (((this._window = je.createWindow("snowwar_ending")), this._window == null)) return;
    ((this._window.x = (this._window.desktop.width - this._window.width) / 2),
      (this._window.y = this._window.desktop.height > 685 ? 115 : 10));
    let e = this._window.findChildByName("leave_link_region");
    (e != null && (e.procedure = this.onCancel),
      this._window
        .findChildByName("button_rematch")
        ?.addEventListener(u.CLICK, this._rccb85166df55fc),
      this._window
        .findChildByName("button_play_again")
        ?.addEventListener(u.CLICK, this._r25a5f77d8fee21),
      this._window
        .findChildByName("button_buy_games")
        ?.addEventListener(u.CLICK, this._r1acc481ebd9841));
    let r = this._window.findChildByName("loadingContainer");
    (r != null && (r.visible = !1),
      this._window
        .findChildByName("statusContainer")
        ?.addEventListener(u.CLICK, this._r058138d3a684a8));
  }
  _rccb85166df55fc = n((e) => {
    if (this._rc48cb7ca67aee6._r3da1b12a009155 === 0) {
      this._r058138d3a684a8();
      return;
    }
    ((this._state = a._r5fe7fbb2028014), this._rc48cb7ca67aee6._rb6dbaea9bc19ab());
    let r = this._window?.findChildByName("button_rematch");
    r != null && ((r.color = 13421772), r.disable());
    let t = this._window?.findChildByName("statusContainer");
    t != null && (t.visible = !1);
  }, "_rccb85166df55fc");
  _r25a5f77d8fee21 = n((e) => {
    this._rc48cb7ca67aee6._r04274d9317ec06();
    let r = this._window?.findChildByName("button_play_again");
    r != null && (r.visible = !1);
    let t = this._window?.findChildByName("statusContainer");
    t != null && (t.visible = !1);
  }, "_r25a5f77d8fee21");
  _r1acc481ebd9841 = n((e) => {
    this._r058138d3a684a8();
  }, "_r1acc481ebd9841");
  updateGettingMoreGamesOption() {
    let e = this._window?.findChildByName("button_rematch"),
      r = this._window?.findChildByName("button_buy_games"),
      t = this._window?.findChildByName("status.text_get_vip"),
      i = this._window?.findChildByName("status.text_get_more_games");
    switch (
      (e != null && (e.visible = !1),
      r != null && (r.visible = !1),
      t != null && (t.visible = !1),
      i != null && (i.visible = !1),
      this._r0be16dbf72b791)
    ) {
      case a._r632af128c51c83:
        (this._rc48cb7ca67aee6._r3da1b12a009155 === 0
          ? r != null && (r.visible = !0)
          : e != null && (e.visible = !0),
          i != null && (i.visible = !0));
        break;
      default:
        (e != null && (e.visible = !0), t != null && (t.visible = !0));
        break;
    }
  }
  onCancel = n((e) => {
    e.type === u.CLICK && this.onClose(!0);
  }, "onCancel");
  onClose(e) {
    e &&
      (this._rc48cb7ca67aee6._r79edc3fe766723(!0),
      this._state === a.STATE_LOBBY || this._state === a._rf22a7f472bd113
        ? (this._rc48cb7ca67aee6.communication?.connection?.send(new _i6c04e8214933d7()),
          this._rc48cb7ca67aee6._r2773a0a439d827 > -1 &&
            this._rc48cb7ca67aee6.communication?.connection?.send(
              new class_2142(this._rc48cb7ca67aee6._r2773a0a439d827, !1, !0),
            ))
        : this._state === a.STATE_AFTER_SKI
          ? this._rc48cb7ca67aee6._r2773a0a439d827 > -1
            ? this._rc48cb7ca67aee6.communication?.connection?.send(
                new class_2142(this._rc48cb7ca67aee6._r2773a0a439d827, !1, !0),
              )
            : this._rc48cb7ca67aee6.communication?.connection?.send(new _ied976cfb0cf69f())
          : this._rc48cb7ca67aee6.communication?.connection?.send(new _ied976cfb0cf69f()),
      this._r816d0e8339b4ef());
  }
  _r816d0e8339b4ef() {
    this._r88958903546a45 != null &&
      (this._r88958903546a45.removeEventListener(DeBouncer.addEventListener, this.onTick),
      this._r88958903546a45.stop(),
      (this._r88958903546a45 = null),
      (this._counter = 0));
  }
  addTeamScores(e) {
    let r = e.teamReference;
    for (let t of e.players) this.addPlayerScore(t);
    je.setCaption(this.getElement(this._window, `team${r}Score`), String(e.score));
  }
  addPlayerScore(e) {
    this._players.set(e.userId, e);
    let r = this._window?.findChildByName(`team${e.teamId}PlayersList`),
      t = je.createWindow(`snowwar_results_player_team_${e.teamId}`);
    if (r == null || t == null) return;
    let i = t.getListItemByName("playerImageContainer"),
      s = t.getListItemByName("playerDataContainer"),
      o = t.getListItemByName("playerScoreContainer");
    if (i == null || s == null || o == null) return;
    (je.setElementImage(
      this.getElement(i, "playerImage"),
      this.getAvatarFigure(e.teamId, e.figure, e.gender),
      0,
      0,
      0,
    ),
      je.setCaption(this.getElement(s, "playerName"), e.userName),
      je.hideElement(s, "playerTotalStats"),
      je.setCaption(
        this.getElement(s, "playerHits"),
        String(e.playerStats?._rd0a3d10c2a865e ?? 0),
      ),
      je.setCaption(
        this.getElement(s, "playerKills"),
        String(e.playerStats?._r8a5fe139714768 ?? 0),
      ),
      je.setCaption(this.getElement(o, "playerScore"), String(e.score)));
    let d = i.findChildByName("addFriend");
    if (
      d != null &&
      this._rc48cb7ca67aee6.friendList?._r7df26efa3d56a0(e.userId) === !0 &&
      e.userId !== this._rc48cb7ca67aee6.sessionDataManager?.userId
    ) {
      d.id = e.userId;
      let c = d.getChildAt(0);
      (c != null && (c.id = e.teamId),
        d.addEventListener(u.CLICK, this._r103dc461967628),
        d.addEventListener(u.OVER, this._r7873fcc8dd05fb),
        d.addEventListener(u.OUT, this._rdffd92e97b6e4c),
        (d.visible = !0));
    }
    (r.addListItem(t), (t.name = `player${e.userId}`));
  }
  _r103dc461967628 = n((e) => {
    let r = e.window;
    if (r == null) return;
    let t = r.id,
      i = this._players.get(t) ?? null;
    (i != null &&
      (this._rc48cb7ca67aee6.friendList?._r9c4d5fbe38e0ed(t, i.userName),
      this._rc48cb7ca67aee6.communication?.connection?.send(
        new class_2154("GameFramework", "SnowStorm", "gameFramework.sendFriendRequest.rematchView"),
      ),
      this._rc48cb7ca67aee6._rbda5cb55b7cbf2(t, "${snowwar.friend_request.sent}", !0)),
      (r.visible = !1));
  }, "_r103dc461967628");
  _r7873fcc8dd05fb = n((e) => {
    if (e.window == null) return;
    let r = e.window.getChildAt(0);
    r != null && je.setElementImage(r, this.getBitmap("add_friend_icon_green"));
  }, "_r7873fcc8dd05fb");
  _rdffd92e97b6e4c = n((e) => {
    if (e.window == null) return;
    let r = e.window.getChildAt(0);
    r != null &&
      je.setElementImage(r, this.getBitmap(`add_friend_icon_${r.id === 1 ? "blue" : "red"}`));
  }, "_rdffd92e97b6e4c");
  showMostHits(e) {
    let r = this._players.get(e) ?? null,
      t = this._window?.findChildByName("mostHitsContainer");
    if (!(r == null || t == null)) {
      if ((r.playerStats?._rd0a3d10c2a865e ?? 0) === 0) {
        t.visible = !1;
        return;
      }
      (je.setElementImage(
        this.getElement(t, "backgroundImage"),
        this.getBitmap(this.getPlayerImageBackground(r.teamId)),
      ),
        je.setElementImage(
          this.getElement(t, "playerImage"),
          this.getAvatarFigure(r.teamId, r.figure, r.gender),
          0,
          0,
          0,
        ),
        je.setCaption(this.getElement(t, "playerName"), r.userName),
        je.colorStrokes(t, this.getTeamColor(r.teamId)));
    }
  }
  showMostKills(e) {
    let r = this._players.get(e) ?? null,
      t = this._window?.findChildByName("mostKillsContainer");
    if (!(r == null || t == null)) {
      if ((r.playerStats?._r8a5fe139714768 ?? 0) === 0) {
        t.visible = !1;
        return;
      }
      (je.setElementImage(
        this.getElement(t, "backgroundImage"),
        this.getBitmap(this.getPlayerImageBackground(r.teamId)),
      ),
        je.setElementImage(
          this.getElement(t, "playerImage"),
          this.getAvatarFigure(r.teamId, r.figure, r.gender),
          0,
          0,
          0,
        ),
        je.setCaption(this.getElement(t, "playerName"), r.userName),
        je.colorStrokes(t, this.getTeamColor(r.teamId)));
    }
  }
  getPlayerImageBackground(e) {
    return e === 2 ? "red_square" : "blue_square";
  }
  getNeutralTeamColor() {
    return 8227482;
  }
  getTeamColor(e) {
    return e === 2 ? 4294797401 : 4279269292;
  }
  _r5dd2619e40b6a0(e) {
    return e === 2 ? 4 : 2;
  }
  getAvatarFigure(e, r, t) {
    let i = this._rc48cb7ca67aee6.avatarManager?._r2d55396cf4177f(r);
    if (i == null) return null;
    switch (e) {
      case 1:
        i.updatePart("ch", 2e4, [1]);
        break;
      case 2:
        i.updatePart("ch", 20001, [1]);
        break;
      default:
        i.updatePart("ch", 2e4, [1]);
        break;
    }
    i.removePart(AvatarFigurePartType.COAT_CHEST);
    let s = this._rc48cb7ca67aee6.avatarManager?._r274f6640e76241(
      i.parseFigureString(),
      fr.LARGE_TO_SMALL,
      t,
      this,
    );
    return s == null
      ? null
      : (s.setDirection(class_2123.const_252, this._r5dd2619e40b6a0(e)),
        s._rb2bd48e3b4d265(class_2123.const_252));
  }
  getElement(e, r) {
    return e?.findChildByName(r) ?? null;
  }
  getBitmap(e) {
    return this._rc48cb7ca67aee6.assets?.getAssetByName(e)?.content ?? null;
  }
  changeToAfterSkiState() {
    if (((this._state = a.STATE_AFTER_SKI), this.hideChatInput != null)) {
      for (let t of this.hideChatInput.getValues()) t.dispose();
      this.hideChatInput.reset();
    }
    if ((this._r5b96acd379a27e(), this._rc48cb7ca67aee6._r3da1b12a009155 === 0)) return;
    let e = this._window?.findChildByName("button_rematch"),
      r = this._window?.findChildByName("button_play_again");
    (e != null && (e.visible = !1), r != null && ((r.visible = !0), r.enable(), (r.color = 5622784)));
  }
  updateDialog() {
    if (this._disposed) return;
    let e = this._window?.findChildByName("endingInformation");
    this._rc48cb7ca67aee6._r3da1b12a009155 === 0
      ? je.setCaption(
          this.getElement(this._window, "button_rematch"),
          "${catalog.vip.buy.title}",
        )
      : this._state === a._r48a37530ad18ef
        ? (this._rc48cb7ca67aee6.localization?._r43eae9731f5b27(
            "snowwar.rematch",
            "seconds",
            String(this._counter),
          ),
          je.setCaption(
            this.getElement(this._window, "button_rematch"),
            "${snowwar.rematch}",
          ))
        : this._state === a._r5fe7fbb2028014
          ? (this._rc48cb7ca67aee6.localization?._r43eae9731f5b27(
              "snowwar.please_wait",
              "seconds",
              String(this._counter),
            ),
            je.setCaption(
              this.getElement(this._window, "button_rematch"),
              "${snowwar.please_wait}",
            ))
          : this._state === a.STATE_LOBBY
            ? (this._rc48cb7ca67aee6.localization?._r43eae9731f5b27(
                "snowwar.lobby_game_start_countdown",
                "seconds",
                String(this._counter),
              ),
              je.setCaption(e, "${snowwar.lobby_game_start_countdown}"))
            : this._state === a._rf22a7f472bd113 &&
              je.setCaption(e, "${snowwar.lobby_waiting_for_more_players}");
  }
  _r2884b5a375e12e(e) {
    (this._r816d0e8339b4ef(),
      (this._r88958903546a45 = new _i05394ecc0c0c4d(1e3, e)),
      this._r88958903546a45.addEventListener(DeBouncer.addEventListener, this.onTick),
      this._r88958903546a45.start(),
      (this._counter = e));
  }
  onTick = n((e) => {
    this._counter > 0 && (this._counter--, this.updateDialog());
  }, "onTick");
  startResultsCountDown(e) {
    (this._r2884b5a375e12e(e), this.updateDialog());
  }
  _r4472f15707dcfd() {
    (this._r816d0e8339b4ef(), this.updateDialog());
  }
  _re2e312ab09051a() {
    this.clearPlayers();
    let e = this._raaaea91eb6f090.getValues();
    this._state !== a._r48a37530ad18ef && this._state !== a._r5fe7fbb2028014 && e.sort(GameLobbyPlayerData._r04a065646a9135);
    for (let r of e) this.addLobbyPlayer(r);
  }
  clearPlayers() {
    let e = 1,
      r;
    for (; (r = this._window?.findChildByName(`team${e++}PlayersList`)) != null;)
      r.destroyListItems();
  }
  addLobbyPlayer(e) {
    let r = (this._raaaea91eb6f090.getKeys().indexOf(e.userId) % a._re0f82c1bab6196) + 1,
      t = this._window?.findChildByName(`team${r}PlayersList`),
      i = je.createWindow(`snowwar_lobby_player_team_${r}`);
    if (t == null || i == null) return;
    let s = i.getListItemByName("playerImageContainer"),
      o = i.getListItemByName("playerDataContainer"),
      d = i.getListItemByName("playerScoreContainer");
    if (s == null || o == null || d == null) return;
    (je.setElementImage(
      this.getElement(s, "playerImage"),
      this.getAvatarFigure(r, e.figure, e.gender),
    ),
      je.setCaption(this.getElement(o, "playerName"), e.name),
      je.hideElement(o, "playerStats"),
      je.hideElement(d, "playerScore"),
      je.hideElement(o, "playerTotalStats"));
    let c = o.findChildByName("skillLevel");
    c != null && (c.bitmap?.dispose(), (c.bitmap = this.getSkillLevelImage(e.skillLevel, r)));
    let f = o.findChildByName("scoreTooltip");
    (f != null && ((f.toolTipCaption = `${e.totalScore}/${e._r191fd93e71ebe2}`), (f.visible = !0)),
      t.addListItem(i));
  }
  getSkillLevelImage(e, r) {
    e = Math.min(e, 30);
    let t = this.getBitmap("star_empty") ?? new A(1, 1, !0, 0),
      i = this.getBitmap("star_filled_bronze") ?? t,
      s = this.getBitmap("star_filled_silver") ?? t,
      o = this.getBitmap("star_filled_gold") ?? t,
      d = e > 0 ? ((e - 1) % 10) + 1 : 0,
      c = new A(150, 13, !0, 0);
    for (let f = 0; f < 10; f++) {
      let l = r === 1 ? new E(f * 15, 0) : new E((9 - f) * 15, 0),
        b = e > 20 ? (d-- > 0 ? o : t) : e > 10 ? (d-- > 0 ? s : t) : d-- > 0 ? i : t;
      c.copyPixels(b, b.rect, l);
    }
    return c;
  }
  _r058138d3a684a8 = n(() => {
    switch (this._r0be16dbf72b791) {
      case a._r632af128c51c83:
        this._rc48cb7ca67aee6._r0ae1535bbfa29c("gameFramework.buyTokens.clicked.rematchView");
        break;
      default:
        (this.onClose(!0),
          this._rc48cb7ca67aee6.openClubCenter("gameFramework.getVip.clicked.rematchView"));
        break;
    }
  }, "_r058138d3a684a8");
  _r5b96acd379a27e() {
    this._rc48cb7ca67aee6._r5e3ef8a2b11d2a?._rfbbd775b61c04a(RoomWidgetEnum.CHAT_INPUT_WIDGET);
  }
}
