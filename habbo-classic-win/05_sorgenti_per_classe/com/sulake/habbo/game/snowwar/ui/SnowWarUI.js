// Estratto da HabboAirLauncher.deobf.js, riga 221641.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/ui/SnowWarUI.as
// Nome offuscato: _ice0d113fd58981

class a {
    constructor(e) {
      this._rc48cb7ca67aee6 = e;
      let r = this._rc48cb7ca67aee6.windowManager?.getDesktop(1) ?? null;
      (r != null && (r.visible = !1),
        (this.var_2862 =
          this._rc48cb7ca67aee6.sessionDataManager?.hasSecurity(class_1794.EMPLOYEE) === !0),
        this.var_2862 &&
          ((this.var_4670 = new _i66142e2954d529()), (this.tweenTo = new _i66142e2954d529(16777215))));
    }
    static {
      n(this, "SnowWarUI");
    }
    static _r0df0aca1dcbecc = 4;
    static EMPTY_AMMO_FRAME_LENGTH = 75;
    static _r80929034868879 = 4;
    static SCORE_FRAME_LENGTH = 50;
    static _rf9e5837fbdbeb3 = 5;
    static _r7d993b177c6a14 = 5;
    _exit = null;
    _r622c746f6a561d = null;
    var_687 = null;
    var_382 = null;
    _teamScores = null;
    _r6e0de20ce637f7 = null;
    var_4670 = null;
    tweenTo = null;
    var_279 = null;
    var_1271 = !1;
    var_2008 = 1;
    _timeSinceLastUpdate = 0;
    _r7c92d7fbfca703 = -1;
    var_3922 = a._r7d993b177c6a14;
    _r74e4ba84b56eb3 = null;
    _makingSnowballs = !1;
    _r48c137df2fea92 = a._rf9e5837fbdbeb3;
    _r2c6f282fe1a9f5 = null;
    _rc381e99d5c7ce9 = null;
    _r90ec5c94300a21 = null;
    _r5dba5a69ee07ee = null;
    _rbb216c93abcce5 = null;
    var_1612 = 0;
    var_5669 = "";
    var_1048 = null;
    var_2862 = !1;
    dispose() {
      if (this.var_1271) return;
      let e = this._rc48cb7ca67aee6.windowManager?.getDesktop(1) ?? null;
      (e != null && (e.visible = !0),
        this._exit?.dispose(),
        (this._exit = null),
        (this._r74e4ba84b56eb3 = null),
        (this._r2c6f282fe1a9f5 = null),
        (this._r90ec5c94300a21 = null),
        this._r622c746f6a561d?.dispose(),
        (this._r622c746f6a561d = null),
        (this._rbb216c93abcce5 = null),
        this.var_687?.dispose(),
        (this.var_687 = null),
        this.var_382?.dispose(),
        (this.var_382 = null),
        this._teamScores?.dispose(),
        (this._teamScores = null),
        this.var_279?.dispose(),
        (this.var_279 = null),
        this._r5dba5a69ee07ee?.dispose(),
        (this._r5dba5a69ee07ee = null),
        this._r6e0de20ce637f7?.dispose(),
        (this._r6e0de20ce637f7 = null),
        this.var_1048 != null &&
          (this.var_1048.removeEventListener(DeBouncer._rf33144eac61595, this._r77a53efbf39679),
          this.var_1048.stop(),
          (this.var_1048 = null)),
        this._rb835bb299f4ae0(),
        (this.var_4670 = null),
        (this.tweenTo = null),
        (this.var_1271 = !0));
    }
    get disposed() {
      return this.var_1271;
    }
    init() {
      ((this._exit = je.createWindow("snowwar_exit")),
        this._exit?.addEventListener(u.CLICK, this.onExit),
        this._exit != null && ((this._exit.x = 0), (this._exit.y = 10)),
        (this._r622c746f6a561d = je.createWindow("snowwar_snowballs")));
      let e = this._r622c746f6a561d?.findChildByName("make_snowball") ?? null;
      if (
        (e?.addEventListener(u.DOWN, this._r3df9b44ada1eee),
        e?.addEventListener(u.UP, this._rc9d3b6be757db2),
        e?.addEventListener(u.OUT, this._rc9d3b6be757db2),
        this._r622c746f6a561d?.center(),
        this._r622c746f6a561d != null && (this._r622c746f6a561d.x = 10),
        (this._r74e4ba84b56eb3 = this._r622c746f6a561d?.findChildByName("makeSnowballImage")),
        (this._r90ec5c94300a21 = this._r622c746f6a561d?.findChildByName("emptyFlashImage")),
        this._r90ec5c94300a21 != null &&
          ((this._r90ec5c94300a21.visible = !1),
          (this._r5dba5a69ee07ee = new SnowWarAnimatedWindowElement(
            this._rc48cb7ca67aee6.assets,
            this._r90ec5c94300a21,
            "ui_no_balls_",
            a._r0df0aca1dcbecc,
            a.EMPTY_AMMO_FRAME_LENGTH,
            !0,
          ))),
        (this._r2c6f282fe1a9f5 = this._r622c746f6a561d?.findChildByName("ballProgress")),
        (this.var_687 = je.createWindow("snowwar_own_stats")),
        this.var_687 != null &&
          ((this.var_687.x = 10),
          (this.var_687.y =
            this.var_687.desktop.height - this.var_687.height - 10)),
        (this._rbb216c93abcce5 = this.var_687?.findChildByName("backgroundFlashImage")),
        this._r04fe1a9b945a9f(),
        (this._teamScores = je.createWindow("snowwar_team_scores")),
        this._teamScores != null &&
          ((this._teamScores.x = this._teamScores.desktop.width - this._teamScores.width - 10),
          (this._teamScores.y = 10)),
        (this.var_382 = je.createWindow("snowwar_timer")),
        this.var_382 != null &&
          ((this.var_382.x = this.var_382.desktop.width - this.var_382.width - 50),
          (this.var_382.y = 105)),
        (this.timer = 0),
        (this.var_279 = je.createWindow("counter")),
        this.var_279?.center(),
        this.var_2862 && this.var_382 != null)
      ) {
        let r = this.var_382.getChildByName("checksumIndicator");
        (r != null && (r.visible = !0), this.var_4670?._rae3d27c4e7e5ef(this.var_382.color));
      }
      this.var_3922 = a._r7d993b177c6a14;
    }
    avatarImageReady(e) {
      this._r04fe1a9b945a9f();
    }
    startWaitingForSnowball() {
      (this._rb835bb299f4ae0(),
        this._r2c6f282fe1a9f5 != null &&
          (this._rc381e99d5c7ce9 = new SnowWarAnimatedWindowElement(this._rc48cb7ca67aee6.assets, this._r2c6f282fe1a9f5, "load_", 8)),
        xs.playSound(HabboSoundTypesEnum.GAMES_SW_MAKE_SNOWBALL));
    }
    _r9789283ff9852d() {
      (this._rb835bb299f4ae0(),
        xs.stopSound(HabboSoundTypesEnum.GAMES_SW_MAKE_SNOWBALL),
        this._makingSnowballs && this._r3df9b44ada1eee());
    }
    set snowballs(e) {
      for (let t = 0; t < a._rf9e5837fbdbeb3; t++) {
        let i = this._r622c746f6a561d?.findChildByName(`ball_${String(t)}`) ?? null;
        i != null && (i.visible = t < e);
      }
      this._r48c137df2fea92 = e;
      let r = this._r622c746f6a561d?.findChildByName(`ball_${String(e)}`) ?? null;
      r != null &&
        this._r2c6f282fe1a9f5 != null &&
        ((this._r2c6f282fe1a9f5.x = r.x), (this._r2c6f282fe1a9f5.y = r.y));
    }
    set ownScore(e) {
      je.setCaption(this.var_687?.findChildByName("personal_score") ?? null, String(e));
    }
    set timer(e) {
      if (this.var_2862) {
        this.var_4670?._checksumIndicatorColor(this.tweenTo);
        let i = this.var_382?.getChildByName("checksumIndicator") ?? null;
        i != null && this.var_4670 != null && (i.color = this.var_4670.rgb);
      }
      if (this._r7c92d7fbfca703 === e) return;
      this._r7c92d7fbfca703 = e;
      let r = String(Math.trunc(e / 60)),
        t = String(Math.trunc(e % 60));
      (Number(r) < 10 && (r = `0${r}`),
        Number(t) < 10 && (t = `0${t}`),
        this.var_382 != null &&
          (je.showElement(this.var_382, "time_left"),
          je.setCaption(this.var_382.findChildByName("time_left"), `${r}:${t}`)),
        e <= 5 &&
          e > 0 &&
          (xs.playSound(HabboSoundTypesEnum.SOUND_CALL_FOR_HELP),
          this.var_1048 == null &&
            ((this.var_1048 = new _i05394ecc0c0c4d(500, 1)),
            this.var_1048.addEventListener(DeBouncer._rf33144eac61595, this._r77a53efbf39679)),
          this.var_1048.reset(),
          this.var_1048.start()));
    }
    set hitPoints(e) {
      this.var_3922 !== e &&
        (je.setElementImage(
          this.getElement(this.var_687, "energy_bar"),
          this.getBitmap(`ui_me_health_${String(Math.min(5, e))}`),
        ),
        (this.var_3922 = e));
    }
    _r2d3cd8c80b7d7a(e) {
      this.var_2862 &&
        (this.var_382 != null && (this.var_382.color = e),
        this.var_4670?._rae3d27c4e7e5ef(e));
    }
    _r02fc0a8ca13e00() {
      ((this._timeSinceLastUpdate = 0), (this.var_2008 = 1));
    }
    update(e) {
      (this.updateAmmoDisplay(), this.updateCounterImage(e), this.updateScoreFlash(e), this.updateTeamScores());
    }
    flashOwnScore(e) {
      ((this.var_1612 = 1), (this.var_5669 = e ? "ui_me_plus_" : "ui_me_minus_"));
    }
    _r04fe1a9b945a9f() {
      let e = this._rc48cb7ca67aee6.sessionDataManager?.figure ?? "",
        r = this._rc48cb7ca67aee6.sessionDataManager?.gender ?? "",
        t = this._rc48cb7ca67aee6.avatarManager?._r274f6640e76241(e, fr.LARGE, r, this);
      if (t != null) {
        t.setDirection(class_2123.const_252, 2);
        let i = t._rb2bd48e3b4d265(class_2123.HEAD);
        (t.dispose(),
          je.setElementImage(this.var_687?.findChildByName("user_image") ?? null, i),
          i?.dispose());
      }
    }
    getBitmap(e) {
      return this._rc48cb7ca67aee6.assets?.getAssetByName(e)?.content;
    }
    getElement(e, r) {
      return e?.findChildByName(r) ?? null;
    }
    _r3df9b44ada1eee = n((e = null) => {
      (this.makeSnowballButtonPressed(!0), this._rc48cb7ca67aee6._r6b5de812d35298() && this.startWaitingForSnowball());
    }, "_r3df9b44ada1eee");
    _rc9d3b6be757db2 = n((e = null) => {
      this.makeSnowballButtonPressed(!1);
    }, "_rc9d3b6be757db2");
    _rb835bb299f4ae0() {
      (this._rc381e99d5c7ce9?.dispose(), (this._rc381e99d5c7ce9 = null));
    }
    onExit = n((e) => {
      if (this._r6e0de20ce637f7 == null) {
        ((this._r6e0de20ce637f7 = je.createWindow("snowwar_exit_confirmation")),
          this._r6e0de20ce637f7?.findChildByName("yes")?.addEventListener(u.CLICK, this._re3c827d4983bf7),
          this._r6e0de20ce637f7?.findChildByName("no")?.addEventListener(u.CLICK, this._re3c827d4983bf7),
          this._r6e0de20ce637f7?.findChildByTag("close")?.addEventListener(u.CLICK, this._re3c827d4983bf7));
        return;
      }
      ((this._r6e0de20ce637f7.visible = !0), this._r6e0de20ce637f7.activate());
    }, "onExit");
    _re3c827d4983bf7 = n((e) => {
      if (e.window?.name === "yes") {
        (this._rc48cb7ca67aee6.send(new _ied976cfb0cf69f()),
          this._rc48cb7ca67aee6._rd75f76fa5c0d05(),
          this._rc48cb7ca67aee6._r9dc8d3eeed7972());
        return;
      }
      this._r6e0de20ce637f7 != null && (this._r6e0de20ce637f7.visible = !1);
    }, "_re3c827d4983bf7");
    _r77a53efbf39679 = n((e) => {
      this.var_382 != null && je.hideElement(this.var_382, "time_left");
    }, "_r77a53efbf39679");
    updateScoreFlash(e) {
      if (this.var_1612 <= 0) return;
      let r = Math.trunc(this.var_1612 / a.SCORE_FRAME_LENGTH) + 1;
      if (r > a._r80929034868879) {
        ((this.var_1612 = 0), this._rbb216c93abcce5 != null && (this._rbb216c93abcce5.visible = !1));
        return;
      }
      ((this.var_1612 += e),
        this._rbb216c93abcce5 != null &&
          ((this._rbb216c93abcce5.visible = !0),
          je.setElementImage(
            this._rbb216c93abcce5,
            this.getBitmap(`${this.var_5669}${String(r)}`),
          )));
    }
    updateAmmoDisplay() {
      this._r90ec5c94300a21 != null &&
        (this._r90ec5c94300a21.visible = this._r48c137df2fea92 === 0 && this._rc381e99d5c7ce9 == null);
    }
    updateCounterImage(e) {
      let r = !1;
      if (
        ((this._timeSinceLastUpdate += e),
        this.var_2008 < 6
          ? this._timeSinceLastUpdate >= 1e3 && ((r = !0), (this._timeSinceLastUpdate = 0))
          : this.var_2008 < 11
            ? this._timeSinceLastUpdate > 100 && ((r = !0), (this._timeSinceLastUpdate = 0))
            : (this.var_279?.dispose(), (this.var_279 = null)),
        !r || this.var_1271 || this.var_279 == null)
      )
        return;
      let t = this._rc48cb7ca67aee6.assets?.getAssetByName(
          this.padName("explosion", this.var_2008),
        ),
        i = t?.content;
      if (i != null) {
        (this.var_279.bitmap == null &&
          (this.var_279.bitmap = new A(
            this.var_279.width,
            this.var_279.height,
            !0,
            16777215,
          )),
          this.var_279.bitmap.fillRect(this.var_279.bitmap.rect, 16777215));
        let s = t?.offset != null ? new E(-t.offset.x, -t.offset.y) : new E();
        (this.var_279.bitmap.copyPixels(i, i.rect, s, null, null, !0),
          this.var_279.invalidate());
      }
      this.var_2008++;
    }
    padName(e, r, t = 4) {
      let i = String(r);
      for (; i.length < t;) i = `0${i}`;
      return `${e}${i}`;
    }
    updateTeamScores() {
      let e = this._rc48cb7ca67aee6._r0c148637e03364?._r3a2e2f786228da() ?? [];
      e.length >= 2 &&
        this._teamScores != null &&
        (je.setCaption(this._teamScores.findChildByName("score_blue"), String(e[0])),
        je.setCaption(this._teamScores.findChildByName("score_red"), String(e[1])));
    }
    makeSnowballButtonPressed(e) {
      (this._makingSnowballs !== e &&
        je.setElementImage(
          this._r74e4ba84b56eb3,
          this.getBitmap(`ui_make_balls_${e ? "down" : "up"}`),
        ),
        (this._makingSnowballs = e));
    }
  }
