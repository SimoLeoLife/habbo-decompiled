// Extracted from HabboAirLauncher.deobf.js, line 223132.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/ui/GameLobbyWindowCtrl.as
// Obfuscated name: _i99a9317c49d674

class {
  constructor(e, r, t, i) {
    this.var_157 = e;
    this._levelName = r;
    this._numberOfTeams = t;
    this._maxNumberOfPlayers = i;
  }
  static {
    n(this, "GameLobbyWindowCtrl");
  }
  _r336fafc6da6526 = 0;
  var_408 = null;
  _r88958903546a45 = null;
  _counter = -1;
  var_1632 = -1;
  var_1271 = !1;
  var_1313 = new B();
  var_953 = new B();
  onClose(e) {
    (e && this._rc48cb7ca67aee6.communication?.connection?.send(new class_3513()),
      this._rdea373cf119a09(),
      (this.var_1632 = -1));
  }
  dispose() {
    this.var_1271 = !0;
    for (let e of this.var_953.getValues()) e.dispose();
    (this.var_953.dispose(),
      this.var_408?.dispose(),
      (this.var_408 = null),
      this._rdea373cf119a09(),
      this.var_1313.dispose(),
      (this.var_1632 = -1));
  }
  get disposed() {
    return this.var_1271;
  }
  _r6d432df66b5ba3(e) {
    (this.var_1313.remove(e), this.updateDialog(!0));
  }
  _rbb1a50c088346f(e) {
    e != null && (this.var_1313.add(e.userId, e), this.updateDialog(!0, e.figure));
  }
  maxNumberOfPlayers() {
    this.var_1313.reset();
  }
  _r43125cb4300be9(e) {
    (this._rdea373cf119a09(),
      (this._counter = e),
      (this._r88958903546a45 = new UnkEventDispatcherWrapperSubclass_05394e(1e3, e)),
      this._r88958903546a45.addEventListener(DeBouncer.addEventListener, this.onTick),
      this._r88958903546a45.start(),
      this.updateDialog(!1));
  }
  _r4c63bd667c1a94() {
    (this._rdea373cf119a09(), this.updateDialog(!1));
  }
  avatarImageReady(e) {
    this.updateDialog(!0, e);
  }
  get visible() {
    return this.var_408?.visible ?? !1;
  }
  set visible(e) {
    (this.var_408 == null && this.createLobbyView(),
      this.var_408 != null && (this.var_408.visible = e));
  }
  get GameLobbyWindowCtrl() {
    return this._levelName;
  }
  set GameLobbyWindowCtrl(e) {
    this._levelName = e;
  }
  get levelName() {
    return this._numberOfTeams;
  }
  set levelName(e) {
    this._numberOfTeams = e;
  }
  get _r41566fb77db3f6() {
    return this._r336fafc6da6526;
  }
  set _r41566fb77db3f6(e) {
    this._r336fafc6da6526 = e;
  }
  get numberOfTeams() {
    return this._maxNumberOfPlayers;
  }
  set numberOfTeams(e) {
    this._maxNumberOfPlayers = e;
  }
  set _rc1ed5e57fab4b5(e) {
    this.var_1632 = e;
  }
  set counter(e) {
    this._counter = e;
  }
  get _rc48cb7ca67aee6() {
    return this.var_157._rbe53bad1dd182e;
  }
  createLobbyView() {
    if (
      ((this.var_408 =
        this.var_157.rootWindow?.findChildByName("snowwar_lobby_cont")),
      this.var_408 == null)
    )
      return;
    this.var_408.center();
    let e = this.var_408.findChildByName("cancel_link_region");
    e != null && (e.procedure = this.onCancel);
    let r = this.var_408.findChildByName("players_grid"),
      t = je.createWindow("snowwar_lobby_player");
    if (r != null && t != null) {
      for (let i = 0; i < this._maxNumberOfPlayers; i++) r.addGridItem(t.clone());
      t.dispose();
    }
    this.var_408.visible = !1;
  }
  _rdea373cf119a09() {
    (this._r88958903546a45 != null &&
      (this._r88958903546a45.removeEventListener(DeBouncer.addEventListener, this.onTick),
      this._r88958903546a45.stop(),
      (this._r88958903546a45 = null)),
      (this._counter = -1));
  }
  updateDialog(e, r = null) {
    if (this.var_408 == null) return;
    let t = this.var_408.findChildByName("wait_text"),
      i = this.var_408.findChildByName("wait_text_stroke"),
      s = this._rc48cb7ca67aee6.localization;
    if (t == null || i == null || s == null) return;
    let o, d;
    this._counter >= 0
      ? ((o = "snowwar.lobby_game_start_countdown"),
        s._r43eae9731f5b27(o, "seconds", String(this._counter)),
        (d = `${o} %seconds% ${this._counter}`))
      : this.var_1632 >= 0
        ? ((o = "snowwar.lobby_arena_queue_position"),
          s._r43eae9731f5b27(o, "position", String(this.var_1632)),
          (d = `${o} %position% ${this.var_1632}`))
        : ((o = "snowwar.lobby_waiting_for_more_players"), (d = o));
    let c = s.getLocalization(o);
    if (((t.caption = c || d), (i.caption = c || d), !e)) return;
    let f = this.var_408.findChildByName("players_grid");
    if (f == null) return;
    let l = 0;
    for (let b of this.var_1313.getValues()) {
      let _ = null;
      if (
        ((b.figure === r || r == null) &&
          (_ =
            this._rc48cb7ca67aee6.avatarManager?._r274f6640e76241(
              b.figure,
              fr.LARGE,
              b.gender,
              this,
            ) ?? null),
        _ != null)
      ) {
        _.setDirection(class_2123.HEAD, 2);
        let h = _._rb2bd48e3b4d265(class_2123.HEAD),
          p = f.getGridItemAt(l);
        if (p != null) {
          ((p.toolTipCaption = b.name), (p.mouseThreshold = 0));
          let m = p.findChildByName("image");
          if (
            m != null &&
            (this.var_953.remove(m)?.dispose(),
            m.bitmap?.dispose(),
            (m.bitmap = new A(m.width, m.height, !0, 0)),
            h != null)
          ) {
            let w = new E((m.width - h.width) / 2, (m.height - h.height) / 2);
            m.bitmap.copyPixels(h, h.rect, w);
          }
        }
        (h?.dispose(), _.dispose());
      }
      l++;
    }
    for (; l < this._maxNumberOfPlayers; l++) {
      let _ = f.getGridItemAt(l)?.findChildByName("image");
      _ != null &&
        !this.var_953.hasKey(_) &&
        this._rc48cb7ca67aee6.assets != null &&
        this.var_953.add(_, new SnowWarAnimatedWindowElement(this._rc48cb7ca67aee6.assets, _, "load_", 8));
    }
  }
  onCancel = n((e) => {
    e.type === u.CLICK &&
      (this.onClose(!0),
      this._rc48cb7ca67aee6._r00d4928d04a061
        ? this.var_157.close(!0)
        : this.var_157._r9ac1f240d58a14(!0));
  }, "onCancel");
  onTick = n((e) => {
    this.var_1271 || (this._counter > 0 && (this._counter--, this.updateDialog(!1)));
  }, "onTick");
}
