// Extracted from HabboAirLauncher.deobf.js, line 222948.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/ui/GameLoadingViewController.as
// Obfuscated name: _i823a5b8925ee98

class {
  constructor(e) {
    this._rc48cb7ca67aee6 = e;
    (this.createMainWindow(),
      (this._rb077b54888ba3a = new BackgroundViewController(this._rc48cb7ca67aee6)),
      this._rb077b54888ba3a.background != null && (this._rb077b54888ba3a.background.visible = !0),
      this._rc48cb7ca67aee6.windowManager?.getDesktop(1) &&
        (this._rc48cb7ca67aee6.windowManager.getDesktop(1).visible = !1),
      this._rc48cb7ca67aee6._r5e3ef8a2b11d2a != null &&
        (this._rc48cb7ca67aee6._r5e3ef8a2b11d2a.visible = !1));
  }
  static {
    n(this, "GameLoadingViewController");
  }
  _disposed = !1;
  _window = null;
  var_953 = new Map();
  _r6e8c122025a722 = null;
  _rb077b54888ba3a = null;
  _rdbc528427a867e = [];
  dispose() {
    if (this._disposed) return;
    let e = this._rc48cb7ca67aee6.windowManager?.getDesktop(1);
    e != null && (e.visible = !0);
    for (let r of this.var_953.values()) r.dispose();
    (this.var_953.clear(),
      this._window?.dispose(),
      (this._window = null),
      this._rb077b54888ba3a?.dispose(),
      (this._rb077b54888ba3a = null),
      (this._rdbc528427a867e = []),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  avatarImageReady(e) {
    this._rdbc528427a867e.indexOf(e) === -1 && (this._r816771bbaa79bb(), this._rdbc528427a867e.push(e));
  }
  show(e) {
    this._r6e8c122025a722 = e;
    let r = this._window?.findChildByName("arenaPreview"),
      t = this._rc48cb7ca67aee6.assets?.getAssetByName(`arena_${e.fieldType}_preview`);
    (r != null && t?.content instanceof A && ((r.bitmap = t.content), (r.disposesBitmap = !1)),
      je.setCaption(
        this._window?.findChildByName("arenaName") ?? null,
        this._rc48cb7ca67aee6.getArenaName(e),
      ),
      this._r816771bbaa79bb());
  }
  showReadyPlayers(e) {
    for (let r of e) ((this.var_953.get(r) ?? null)?.dispose(), this.var_953.delete(r));
    if (
      this.var_953.size === 0 &&
      this._window != null &&
      this._rc48cb7ca67aee6.assets != null
    ) {
      let r = this._window.findChildByName("mainLoadingIcon");
      (r != null && this.var_953.set(-1, new SnowWarAnimatedWindowElement(this._rc48cb7ca67aee6.assets, r, "load_", 8)),
        je.setCaption(
          this._window.findChildByName("loadingText"),
          "${snowwar.loading_arena}",
        ));
    }
  }
  createMainWindow() {
    if (((this._window = je.createWindow("snowwar_ending")), this._window == null)) return;
    ((this._window.x = (this._window.desktop.width - this._window.width) / 2),
      (this._window.y = this._window.desktop.height > 685 ? 115 : 10),
      je.setCaption(
        this._window.findChildByName("endingInformation"),
        "${snowwar.loading.title}",
      ),
      je.hideElement(this._window, "buttonsContainer"),
      je.hideElement(this._window, "mostKillsContainer"),
      je.hideElement(this._window, "mostHitsContainer"),
      je.hideElement(this._window, "team1Score"),
      je.hideElement(this._window, "team2Score"),
      je.hideElement(this._window, "statusContainer"));
    let e = this._window.findChildByName("loadingContainer");
    e != null && (e.visible = !0);
    let r = this._window.findChildByName("leave_link_region");
    r != null && (r.procedure = this.onCancel);
  }
  _r816771bbaa79bb() {
    this.clearPlayers();
    for (let e of (this._r6e8c122025a722?.players ?? []).slice().sort(GameLobbyPlayerData._r04a065646a9135))
      this.addPlayer(e);
  }
  clearPlayers() {
    let e = 1,
      r;
    for (; (r = this._window?.findChildByName(`team${e++}PlayersList`)) != null;)
      r.destroyListItems();
  }
  addPlayer(e) {
    let r = e.teamId,
      t = this._window?.findChildByName(`team${r}PlayersList`),
      i = je.createWindow(`snowwar_results_player_team_${r}`);
    if (t == null || i == null) return;
    let s = i.getListItemByName("playerImageContainer"),
      o = i.getListItemByName("playerDataContainer"),
      d = i.getListItemByName("playerScoreContainer");
    if (s == null || o == null || d == null) return;
    e.userId === this._rc48cb7ca67aee6.sessionDataManager?.userId &&
      je.setElementImage(s.findChildByName("playerImageBackground"), this.getBitmap("green_square"));
    let c = r === 2 ? 4 : 2;
    (je.setElementImage(
      this.getElement(s, "playerImage"),
      this.getAvatarFigure(e.teamId, e.figure, e.gender, c),
    ),
      je.setCaption(this.getElement(o, "playerName"), e.name),
      je.hideElement(o, "playerStats"),
      je.hideElement(d, "playerScore"),
      je.hideElement(o, "playerTotalStats"));
    let f = o.findChildByName("skillLevel");
    f != null && (f.bitmap?.dispose(), (f.bitmap = this.getSkillLevelImage(e.skillLevel, e.teamId)));
    let l = o.findChildByName("scoreTooltip");
    (l != null && ((l.toolTipCaption = `${e.totalScore}/${e._r191fd93e71ebe2}`), (l.visible = !0)),
      t.addListItem(i));
    let b = d.findChildByName("loadingIcon");
    ((this.var_953.get(e.userId) ?? null)?.dispose(),
      b != null &&
        this._rc48cb7ca67aee6.assets != null &&
        (this.var_953.set(e.userId, new SnowWarAnimatedWindowElement(this._rc48cb7ca67aee6.assets, b, "load_", 8)),
        (b.visible = !0)));
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
  getElement(e, r) {
    return e.findChildByName(r);
  }
  getBitmap(e) {
    return this._rc48cb7ca67aee6.assets?.getAssetByName(e)?.content ?? null;
  }
  getAvatarFigure(e, r, t, i) {
    let s = this._rc48cb7ca67aee6.avatarManager?._r2d55396cf4177f(r);
    if (s == null) return null;
    switch (e) {
      case 1:
        s.updatePart("ch", 2e4, [1]);
        break;
      case 2:
        s.updatePart("ch", 20001, [1]);
        break;
      default:
        s.updatePart("ch", 2e4, [1]);
        break;
    }
    s.removePart(AvatarFigurePartType.COAT_CHEST);
    let o = this._rc48cb7ca67aee6.avatarManager?._r274f6640e76241(
      s.parseFigureString(),
      fr.LARGE_TO_SMALL,
      t,
      this,
    );
    return o != null
      ? (o.setDirection(class_2123.const_252, i), o._rb2bd48e3b4d265(class_2123.const_252))
      : null;
  }
  onCancel = n((e) => {
    e.type === u.CLICK && this.onClose();
  }, "onCancel");
  onClose() {
    (this._rc48cb7ca67aee6._r79edc3fe766723(!0),
      this._rc48cb7ca67aee6.send(new Game2ExitGameMessageComposer()),
      this._rc48cb7ca67aee6._r2773a0a439d827 > -1 &&
        this._rc48cb7ca67aee6.send(new class_2142(this._rc48cb7ca67aee6._r2773a0a439d827, !1, !0)),
      this._rc48cb7ca67aee6._r8627026f199837());
  }
}
