// Estratto da HabboAirLauncher.deobf.js, riga 211640.

class a extends br {
  static {
    n(this, "_ia512cad66338d0");
  }
  static _r0333e400971a54 = "new_friend_entity_xml";
  static _r0d038634a31b8f = "facebook_piece_xml";
  static _rc6a43c0cb7e5fd = "new_controls_piece_xml";
  static PIECES = "pieces";
  static _ra044f7f5780fe7 = "icons";
  static HEADER = "header";
  static PROFILE = "region_profile";
  static const_584 = "facebook";
  static _rbbfcafa1c23155 = "controls";
  static CANVAS = "canvas";
  static NAME = "name";
  static MESSAGE = "btn_message";
  static _r8bad0aaa1934bb = "icon_message";
  static _r303cc4707eb0fc = "btn_visit";
  static ICON = "icon";
  static LABEL = "label";
  static _rc0e4144757e311 = "notification";
  static _rcf76f43468fc87 = "button_profile";
  static _r7d1a78b90b5339 = "btn_chat";
  static _r6f9e6085721670 = "btn_game";
  static _rba5ce7e3d7261f = "icon_game";
  static BUBBLE = "bubble";
  static _rb81a5e651fbb4a = "bubble_button_accept";
  static _r41501cd80797b3 = "bubble_button_close";
  static _rfccb173a464d0b = "bubble_click_region_reject";
  static DEFAULT_COLOR = 10338138;
  static const_535 = 13891476;
  static _r3a8761ba5d43ac = null;
  static _r4e6396314aa85f = "icon_tag_notify";
  static _r5327d5b546577b = "icon_tag_message";
  static _rea79477787cb09 = "icon_tag_game";
  static var_3507 = [];
  static _r05d26052dcae46 = [];
  var_144 = null;
  _r3a5c80d20a28dd = null;
  _r0212e6df5d5b25 = !1;
  var_2401 = "";
  _re787e5c4924cd5 = !1;
  static allocate(e) {
    let r = a.var_3507.length > 0 ? a.var_3507.pop() : new a();
    if (((r.var_119 = !1), (r.friend = e), e.notifications.length > 0))
      for (let t of e.notifications) r._r0a6ba1439fec3e(t);
    return r;
  }
  set friend(e) {
    ((this.var_144 = e), this.refresh());
  }
  get friend() {
    return this.var_144;
  }
  recycle() {
    if (!this.disposed && !this.var_119) {
      if (
        (this._window != null &&
          (this._r164aec53e57fef(this._window), (this._window = null)),
        this._r3a5c80d20a28dd != null)
      ) {
        for (; this._r3a5c80d20a28dd.length > 0;) this._r3a5c80d20a28dd.pop().dispose();
        this._r3a5c80d20a28dd = null;
      }
      ((this.var_144 = null),
        (this._r0212e6df5d5b25 = !1),
        (this.var_2401 = ""),
        (this.var_119 = !0),
        a.var_3507.push(this));
    }
  }
  select(e) {
    if (this.selected || this._window == null || this.var_144 == null) return;
    let r = this._window.getChildByName(a.PIECES);
    if (r == null) return;
    let t = !1;
    if (this.var_144.realName != null && this.var_144.realName !== "") {
      let i = br._r4280a9b33bac0a.buildFromXML(
        br._rb32e1e294172ec.getAssetByName(a._r0d038634a31b8f)?.content,
      );
      if (i != null) {
        i.name = a.const_584;
        let s = i.getChildByName(a.NAME);
        s != null &&
          ((s.caption = this.var_144.realName),
          !s.wordWrap && br._r5a9e9983ab0116 != null && br._r5a9e9983ab0116.crop(s));
        let o = i.getChildByName(a.ICON);
        (o != null &&
          ((o.bitmap = br._rb32e1e294172ec.getAssetByName(o.bitmapAssetName)?.content),
          o.bitmap != null && ((o.width = o.bitmap.width), (o.height = o.bitmap.height))),
          r.addListItem(i),
          (t = !0));
      }
    }
    if (this._r3a5c80d20a28dd != null)
      for (let i of this._r3a5c80d20a28dd)
        i._rbb0beb64e4e7d8 != null && (r.addListItem(i._rbb0beb64e4e7d8), (t = !0));
    if (this.var_144.online) {
      let i = br._r4280a9b33bac0a.buildFromXML(
        br._rb32e1e294172ec.getAssetByName(a._rc6a43c0cb7e5fd)?.content,
      );
      if (i != null) {
        if (
          ((i.name = a._rbbfcafa1c23155),
          i.getChildByName(a.MESSAGE)?.addEventListener(u.CLICK, this._r33ac440d45394b),
          this._r0212e6df5d5b25)
        ) {
          let c = i.getChildByName(a._r303cc4707eb0fc);
          c != null && (c.visible = !1);
          let f = i.getChildByName(a._r6f9e6085721670);
          if (f != null) {
            let l = br._r9470351e58eba2.getLocalization(`gamecenter.${this.var_2401}.name`);
            (br._r9470351e58eba2._r43eae9731f5b27("friend.bar.game", "game", l),
              br._r9470351e58eba2._r43eae9731f5b27("friend.bar.game.tip", "game", l),
              (f.visible = !0),
              f.addEventListener(u.CLICK, this._r33ac440d45394b));
          }
        } else {
          let c = i.getChildByName(a._r6f9e6085721670);
          c != null && (c.visible = !1);
          let f = i.getChildByName(a._r303cc4707eb0fc);
          f != null &&
            (this.var_144._allowFollow
              ? ((f.visible = !0), f.addEventListener(u.CLICK, this._r33ac440d45394b))
              : (f.visible = !1));
        }
        (i.getChildByName(a._rcf76f43468fc87)?.addEventListener(u.CLICK, this._r33ac440d45394b),
          i.getChildByName(a._r7d1a78b90b5339)?.addEventListener(u.CLICK, this._r33ac440d45394b),
          r.addListItem(i),
          (i.x = 30),
          (t = !0));
      }
    }
    (e && br._rd5514a58d31e07 && t && us.runMotion(this._window) == null
      ? us.DropBounce(
          new _i5f3e1b1e9c65b7(
            new _i7dc350c0d8a790(
              new _iffb4fbee2ed4e7(this._window, br._MOTION_TIME, this._window.width, r.height),
              br.const_509,
            ),
            new _i7dc350c0d8a790(
              new _i67c9fd08696d20(
                this._window,
                br._MOTION_TIME,
                this._window.x,
                a.HEIGHT - r.height,
              ),
              br.const_509,
            ),
          ),
        )
      : t &&
        ((this._window.height = r.height),
        (this._window.y = a.HEIGHT - this._window.height)),
      super.select(e),
      e &&
        br._r6eff1f661c015f != null &&
        (br._r6eff1f661c015f.trackEventLog(
          "FriendBar",
          "",
          "clicked",
          "",
          this.var_144.logEventId > 0 ? this.var_144.logEventId : 0,
        ),
        (this.var_144.logEventId = -1)));
  }
  deselect(e) {
    if (this.selected && this._window != null) {
      if ((a._r5ce40dedda8d59(this._window), this._r3a5c80d20a28dd != null))
        for (let t = this._r3a5c80d20a28dd.length - 1; t > -1; t--) {
          let i = this._r3a5c80d20a28dd[t];
          i._viewOnce && this._r7cefabbfdccfbb(i._r46e70b63ffc509, e);
        }
      super.deselect(e);
    }
    let r = this._window?.findChildByName(a.BUBBLE);
    r != null && (r.visible = !1);
  }
  _rff101a3ebedfdf() {
    if ((super._rff101a3ebedfdf(), this._window != null)) {
      this._window.color = this.exposed ? a.const_535 : a.DEFAULT_COLOR;
      let e = this._window.findChildByTag(a.LABEL);
      e != null && (e.underline = this.exposed);
    }
  }
  conceal() {
    if ((super.conceal(), this._window != null)) {
      this._window.color = this.exposed ? a.const_535 : a.DEFAULT_COLOR;
      let e = this._window.findChildByTag(a.LABEL);
      e != null && (e.underline = this.exposed);
    }
  }
  _r0a6ba1439fec3e(e) {
    if (this.var_144 == null) return;
    (this._r7cefabbfdccfbb(e._r46e70b63ffc509, !1),
      this._r3a5c80d20a28dd == null && (this._r3a5c80d20a28dd = []));
    let r = this.selected;
    if (r) {
      let s = this._r3a5c80d20a28dd;
      ((this._r3a5c80d20a28dd = null), this.deselect(!1), (this._r3a5c80d20a28dd = s));
    }
    let t = null,
      i = a._r3a8761ba5d43ac;
    switch (e._r46e70b63ffc509) {
      case yd.const_887:
        ((t = new RoomEventToken(this.var_144, e)),
          t._r82b562908b306a?.addEventListener(u.CLICK, this.onMouseClick),
          (i = a._r4e6396314aa85f));
        break;
      case yd.const_571:
        ((t = new AchievementToken(this.var_144, e, br._r9470351e58eba2)),
          t._r82b562908b306a?.addEventListener(u.CLICK, this.onMouseClick),
          (i = a._r4e6396314aa85f));
        break;
      case yd.TYPE_QUEST:
        ((t = new QuestToken(this.var_144, e)),
          t._r82b562908b306a?.addEventListener(u.CLICK, this.onMouseClick),
          (i = a._r4e6396314aa85f));
        break;
      case yd.TYPE_MESSENGER:
        i = a._r5327d5b546577b;
        break;
      case yd.TYPE_PLAYING_GAME:
        ((t = new GameToken(this.var_144, e)),
          t._r82b562908b306a != null &&
            ((t._r82b562908b306a.name = a._rba5ce7e3d7261f),
            t._r82b562908b306a.addEventListener(u.CLICK, this.onMouseClick)),
          (i = a._rea79477787cb09),
          (this._r0212e6df5d5b25 = !0),
          (this.var_2401 = t.notification.message));
        break;
      case yd.TYPE_FINISHED_GAME:
        (this._r7cefabbfdccfbb(yd.TYPE_PLAYING_GAME, !0), (this._r0212e6df5d5b25 = !1));
        return;
      default:
        throw new Error(`Unknown friend notification type: ${e._r46e70b63ffc509}!`);
    }
    if (t != null && (this._r3a5c80d20a28dd.push(t), i != null && this._window != null)) {
      let s = this._window.findChildByName(a._ra044f7f5780fe7);
      s != null &&
        s.getListItemByTag(i) == null &&
        t._r82b562908b306a != null &&
        (t._r82b562908b306a.tags.includes(i) || t._r82b562908b306a.tags.push(i),
        s.addListItemAt(t._r82b562908b306a, 0));
    }
    r && this.select(!1);
  }
  _r7cefabbfdccfbb(e, r) {
    if (!(this._r3a5c80d20a28dd == null || this.var_144 == null))
      for (let t = this._r3a5c80d20a28dd.length - 1; t > -1; t--) {
        let i = this._r3a5c80d20a28dd[t];
        if (i._r46e70b63ffc509 === e) {
          if ((this._r3a5c80d20a28dd.splice(t, 1), r)) {
            let s = this.var_144.notifications.indexOf(i.notification);
            s >= 0 && this.var_144.notifications.splice(s, 1);
          }
          i.dispose();
          return;
        }
      }
  }
  toString() {
    return `${this.constructor.name} ${this.var_144?.name ?? ""}`;
  }
  refresh() {
    if (
      (this._window == null && (this._window = this._rcc0f1e7be9543e()),
      this._window == null || this.var_144 == null || br._ra992a7b919f825 == null)
    )
      return;
    let e = br._ra992a7b919f825;
    if (!e.isReady) {
      !this._re787e5c4924cd5 &&
        e.events != null &&
        (e.events.addEventListener?.(AvatarRenderEvent.AVATAR_RENDER_READY, this._rc64c09400e2dae),
        (this._re787e5c4924cd5 = !0));
      return;
    }
    this._window.id = this.var_144.id;
    let t = this._window.getChildByName(a.PIECES)?.getListItemByName(a.HEADER);
    if (t == null) return;
    let i = t.findChildByName(a.NAME);
    i != null &&
      ((i.caption = this.var_144.name), br._r5a9e9983ab0116 != null && br._r5a9e9983ab0116.crop(i));
    let s = t.findChildByName(a.CANVAS);
    s != null &&
      ((s.bitmap =
        this.var_144.id > 0
          ? br.VIEW._rac9072fcec5669(this.var_144.figure)
          : br.VIEW._r4418e3360fb6c9(this.var_144.figure)),
      s.bitmap != null && ((s.width = s.bitmap.width), (s.height = s.bitmap.height)));
  }
  _rcc0f1e7be9543e() {
    let r =
      a._r05d26052dcae46.pop() ??
      null ??
      br._r4280a9b33bac0a.buildFromXML(br._rb32e1e294172ec.getAssetByName(a._r0333e400971a54)?.content);
    if (r == null) return null;
    let t = r.findChildByName(a.CANVAS),
      i = r.findChildByName(a.HEADER),
      s = r.findChildByName(a.PROFILE),
      o = r.findChildByName(a._ra044f7f5780fe7),
      d = r.findChildByName(a.BUBBLE);
    return (
      (r.x = 0),
      (r.y = 0),
      (r.width = a.WIDTH),
      (r.height = a.HEIGHT),
      r.addEventListener(u.CLICK, this.onMouseClick),
      r.addEventListener(u.OVER, this._rad325cc53260a0),
      r.addEventListener(u.OUT, this.onMousetOut),
      i?.addEventListener(u.CLICK, this.onMouseClick),
      i?.addEventListener(u.OVER, this._rad325cc53260a0),
      i?.addEventListener(u.OUT, this.onMousetOut),
      s != null &&
        (s.addEventListener(u.CLICK, this._r1a3578f3616ac3),
        (s.toolTipCaption = br._r9470351e58eba2.getLocalization("infostand.profile.link.tooltip", "")),
        (s.toolTipDelay = 100)),
      o?.addEventListener(u.CLICK, this.onMouseClick),
      o?.addEventListener(u.OVER, this._rad325cc53260a0),
      o?.addEventListener(u.OUT, this.onMousetOut),
      t != null && (t.disposesBitmap = !0),
      d != null && ((d.procedure = this._r1d07186e07163c), (d.y = -(d.height + 5)), (d.visible = !1)),
      r
    );
  }
  _r164aec53e57fef(e) {
    if (e.disposed) return;
    ((e.procedure = null),
      e.removeEventListener(u.CLICK, this.onMouseClick),
      e.removeEventListener(u.OVER, this._rad325cc53260a0),
      e.removeEventListener(u.OUT, this.onMousetOut));
    let r = e.findChildByName(a.HEADER);
    (r?.removeEventListener(u.CLICK, this.onMouseClick),
      r?.removeEventListener(u.OVER, this._rad325cc53260a0),
      r?.removeEventListener(u.OUT, this.onMousetOut));
    let t = e.findChildByName(a._ra044f7f5780fe7);
    (t?.removeEventListener(u.CLICK, this.onMouseClick),
      t?.removeEventListener(u.OVER, this._rad325cc53260a0),
      t?.removeEventListener(u.OUT, this.onMousetOut),
      e.findChildByName(a.PROFILE)?.removeEventListener(u.CLICK, this._r1a3578f3616ac3),
      (e.width = a.WIDTH),
      (e.height = a.HEIGHT),
      (e.color = a.DEFAULT_COLOR));
    let s = e.findChildByName(a.CANVAS);
    s != null && (s.bitmap = null);
    let o = e.findChildByTag(a.LABEL);
    (o != null && (o.underline = !1),
      a._r5ce40dedda8d59(e),
      a._r05d26052dcae46.includes(e) || a._r05d26052dcae46.push(e));
  }
  static _r5ce40dedda8d59(e) {
    let r = e.getChildByName(a.PIECES);
    if (r == null) return;
    (r.getListItemByName(a.const_584)?.dispose(), r.getListItemByName(a._rbbfcafa1c23155)?.dispose());
    let t = [];
    r.groupListItemsWithTag(a._rc0e4144757e311, t);
    for (let i of t) i.parent = null;
    ((e.height = a.HEIGHT), (e.y = 0));
  }
  _rc64c09400e2dae = n(() => {
    this._re787e5c4924cd5 = !1;
    let e = br._ra992a7b919f825;
    (e?.events != null && e.events.removeEventListener?.(AvatarRenderEvent.AVATAR_RENDER_READY, this._rc64c09400e2dae),
      this.refresh());
  }, "_rc64c09400e2dae");
  _r33ac440d45394b = n((e) => {
    if (!(this.disposed || this.recycled || this.var_144 == null) && e.window != null)
      switch (e.window.name) {
        case a.MESSAGE:
        case a._r8bad0aaa1934bb:
          (br.VIEW._r339c2cfe1300a6(),
            br._ra38a77a0a4203f.startConversation(this.var_144.id),
            this.deselect(!0),
            e.window.name === a._r8bad0aaa1934bb && br.VIEW._r28b4132fa4317e(!1));
          break;
        case a._r303cc4707eb0fc:
          (br._ra38a77a0a4203f._r3d5c1bfee4437a(this.var_144.id), this.deselect(!0));
          break;
        case a._rcf76f43468fc87:
          (br._r6eff1f661c015f.trackGoogle("extendedProfile", "friendToolbar_friendButton"),
            br._ra38a77a0a4203f._r44cfd4df9a8991(this.var_144.id),
            this.deselect(!0));
          break;
        case a._r7d1a78b90b5339:
          (br._ra38a77a0a4203f.startConversation(this.var_144.id), this.deselect(!0));
          break;
        case a._r6f9e6085721670:
        case a._rba5ce7e3d7261f:
          (br.GAMES != null && br.GAMES._r8349e006b2ad62(),
            br._ra38a77a0a4203f._r52719b4333588f(this.var_2401),
            this.deselect(!0));
          break;
      }
  }, "_r33ac440d45394b");
  _r1a3578f3616ac3 = n((e) => {
    e.type === u.CLICK &&
      this.var_144 != null &&
      (br._r6eff1f661c015f != null &&
        br._r6eff1f661c015f.trackGoogle("extendedProfile", "friendBar_friendAvatar"),
      br._ra38a77a0a4203f._r44cfd4df9a8991(this.var_144.id),
      this.deselect(!0));
  }, "_r1a3578f3616ac3");
  _r1d07186e07163c = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case a._rb81a5e651fbb4a:
        case a._r41501cd80797b3:
        case a._rfccb173a464d0b:
          this.deselect(!0);
          break;
      }
  }, "_r1d07186e07163c");
}
