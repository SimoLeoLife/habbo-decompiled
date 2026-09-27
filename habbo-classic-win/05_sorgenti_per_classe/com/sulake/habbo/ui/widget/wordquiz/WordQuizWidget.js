// Extracted from HabboAirLauncher.deobf.js, line 327114.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/wordquiz/WordQuizWidget.as
// Obfuscated name: _i72c36f26e55b6a

class a extends RoomWidgetBase {
  static {
    n(this, "WordQuizWidget");
  }
  static ASSET_NAME_LIKE = "wordquiz_like_xml";
  static ASSET_NAME_DISLIKE = "wordquiz_unlike_xml";
  static _rc5b9045b3556c4 = 750;
  static _ref6695d23382be = 750;
  static UPDATE_FREQUENCY = 40;
  static _r5c635e2673b7bb = "0";
  static VALUE_KEY_LIKE = "1";
  _view;
  var_432 = null;
  _ra78b47cb8be4c4 = null;
  _rf33ab94f80f578;
  _countdown = 0;
  var_3649 = -1;
  var_469 = null;
  _raebbdbd567b9bd = {};
  _r7f333c0b522fce = [];
  _r609fa4f8f6d836 = [];
  _rfe481be801c515 = [];
  _r9bdfd141d2926c = !1;
  get mainWindow() {
    return this._view?.mainWindow ?? null;
  }
  constructor(e, r, t, i) {
    (super(e, r, t, i),
      (this._view = new TX(this)),
      (this._rf33ab94f80f578 =
        (this.handler.containerRef?.config?.getInteger("poll.word.quiz.answer.bubble.seconds", 3) ?? 3) *
        1e3));
  }
  get handler() {
    return this._handler;
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(UnkRoomWidgetUpdateEventSubclass_dd3213._rc081ce8a57e812, this._re48c6da7d6cd7a),
      e.addEventListener?.(UnkRoomWidgetUpdateEventSubclass_dd3213._r18420565440e28, this._r00baf39daa5f3d),
      e.addEventListener?.(UnkRoomWidgetUpdateEventSubclass_dd3213.FINISHED, this._r0674af92a131ef),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(UnkRoomWidgetUpdateEventSubclass_dd3213._rc081ce8a57e812, this._re48c6da7d6cd7a),
      e.removeEventListener?.(UnkRoomWidgetUpdateEventSubclass_dd3213._r18420565440e28, this._r00baf39daa5f3d),
      e.removeEventListener?.(UnkRoomWidgetUpdateEventSubclass_dd3213.FINISHED, this._r0674af92a131ef),
      super.unregisterUpdateEvents(e));
  }
  dispose() {
    if (!this.disposed) {
      if (
        (this._view?.dispose(),
        (this._view = null),
        this.var_432?.reset(),
        (this.var_432 = null),
        this._ra78b47cb8be4c4?.reset(),
        (this._ra78b47cb8be4c4 = null),
        this.windowManager != null)
      ) {
        for (let e of this._r7f333c0b522fce) this.windowManager.removeWindow(e.name);
        for (let e of this._r609fa4f8f6d836) e.destroy();
        this._r609fa4f8f6d836.length = 0;
        for (let e of this._rfe481be801c515) e.destroy();
        this._rfe481be801c515.length = 0;
      }
      super.dispose();
    }
  }
  _re48c6da7d6cd7a = n((e) => {
    ((this.var_3649 = e.id),
      (this.var_469 = e.question),
      (this._r9bdfd141d2926c = !1),
      (this._raebbdbd567b9bd = {}),
      this.showNewQuestion(this.var_469, e.duration));
  }, "_re48c6da7d6cd7a");
  _r0674af92a131ef = n((e) => {
    (this.clearTimers(),
      this._view != null &&
        this.var_469 != null &&
        Number(this.var_469.id) === e._re812cd9299d86c &&
        this._view.displayResults(e.answerCounts));
    for (let r of this._r7f333c0b522fce) this.poolWindow(r.name);
    this._r7f333c0b522fce.length = 0;
  }, "_r0674af92a131ef");
  poolWindow(e) {
    this.windowManager != null && this.windowManager.removeWindow(e);
  }
  _r00baf39daa5f3d = n((e) => {
    this._view?.updateResults(e.answerCounts);
    let r = e.userId,
      t = e.value,
      i = t === a.VALUE_KEY_LIKE ? this._r609fa4f8f6d836 : this._rfe481be801c515,
      s = t === a.VALUE_KEY_LIKE ? a.ASSET_NAME_LIKE : a.ASSET_NAME_DISLIKE,
      o = `${this.var_3649}_${r}_${s}`,
      d = null;
    if (i.length > 0) d = i.pop() ?? null;
    else {
      let b = this.assets?.getAssetByName(s)?.content;
      d = b != null ? this.windowManager?.buildFromXML(b) : null;
    }
    if (d == null) return;
    ((d.name = o),
      this._r7f333c0b522fce.push(d),
      (this._raebbdbd567b9bd[o] = this._rf33ab94f80f578 + a._rc5b9045b3556c4 + a._ref6695d23382be));
    let c = this._r284a648384c334(r);
    (c != null && ((d.x = c.left + 20), (d.y = c.top - 20)),
      this._ra78b47cb8be4c4 == null &&
        ((this._ra78b47cb8be4c4 = new UnkEventDispatcherWrapperSubclass_05394e(a.UPDATE_FREQUENCY)),
        this._ra78b47cb8be4c4.addEventListener(DeBouncer.addEventListener, this._rce32ab2d981feb),
        this._ra78b47cb8be4c4.start()));
    let f = d.getChildByName("colored");
    f != null && (f.blend = 0);
  }, "_r00baf39daa5f3d");
  _rce32ab2d981feb = n((e) => {
    for (let r of this._r7f333c0b522fce) {
      if (r == null) continue;
      let t = String(r.name).split("_");
      if (t.length > 1) {
        let i = Number.parseInt(t[1] ?? "-1", 10),
          s = this._r284a648384c334(i);
        if (s != null) ((r.x = s.left + 29), (r.y = s.top - 11));
        else {
          this.poolWindow(r.name);
          continue;
        }
        this.handleSignWindowVisibility(r);
      }
    }
  }, "_rce32ab2d981feb");
  handleSignWindowVisibility(e) {
    let r = e.getChildByName("colored"),
      t = e.getChildByName("button_like");
    if (!(e.name in this._raebbdbd567b9bd) || r == null || t == null) return;
    let i = this._raebbdbd567b9bd[e.name];
    if (
      ((i -= a.UPDATE_FREQUENCY),
      (this._raebbdbd567b9bd[e.name] = i),
      i > this._rf33ab94f80f578 + a._ref6695d23382be)
    ) {
      let s = (a._rc5b9045b3556c4 / a.UPDATE_FREQUENCY) * 0.01;
      ((r.blend += s), (t.blend = r.blend));
    } else if (i > a._ref6695d23382be) ((r.blend = 1), (t.blend = 1));
    else if (i < a._ref6695d23382be && i > 0) {
      let s = a._ref6695d23382be / a.UPDATE_FREQUENCY;
      ((e.blend -= s * 0.01), (e.y -= 20 + (70 - e.blend * 120)));
    } else i < 0 && ((e.y -= 20 + (70 - e.blend * 120)), this.poolWindow(e.name));
  }
  _r284a648384c334(e) {
    if (
      this.handler.containerRef?._r2eac8239a09fe7 == null ||
      this.handler.containerRef.roomEngine == null ||
      this.handler.containerRef.roomSessionManager == null
    )
      return null;
    let r = this.handler.containerRef._r2eac8239a09fe7.roomId,
      i = this.handler.containerRef.roomSessionManager.getSession(r)?.getUserDataByIndex._r1cacdcfc23a2de(e);
    return i == null
      ? null
      : this.handler.containerRef.roomEngine._r37626001a0be81(
          r,
          i._r2fdf1f24b1e612,
          RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
          this.handler.containerRef.getFirstCanvasId(),
        );
  }
  _r547af5cf81c686 = n((e) => {
    this.var_432 != null &&
      ((this._countdown -= 1),
      this._view?.updateCounter(String(this._countdown)),
      this._countdown === 0 && (this.clearTimers(), this._view?.removeWindow()));
  }, "_r547af5cf81c686");
  showNewQuestion(e, r) {
    e != null &&
      (this._view?.createWindow(TX._rbb850c7d21b06e, String(e.content ?? "")),
      (this._countdown = 4),
      r > 0 &&
        ((this.var_432 = new UnkEventDispatcherWrapperSubclass_05394e(1e3)),
        (this._countdown = Math.floor(r / 1e3)),
        this.var_432.addEventListener(DeBouncer.addEventListener, this._r547af5cf81c686),
        this.var_432.start(),
        (this._ra78b47cb8be4c4 = new UnkEventDispatcherWrapperSubclass_05394e(a.UPDATE_FREQUENCY)),
        this._ra78b47cb8be4c4.addEventListener(DeBouncer.addEventListener, this._rce32ab2d981feb),
        this._ra78b47cb8be4c4.start(),
        this._view?.updateCounter(String(this._countdown))));
  }
  clearTimers() {
    (this.var_432?.reset(),
      (this.var_432 = null),
      this._ra78b47cb8be4c4?.reset(),
      (this._ra78b47cb8be4c4 = null));
  }
  _rc0203dee78c982(e) {
    if ((this._view?.removeWindow(), this._r9bdfd141d2926c)) return;
    let r = new RoomWidgetPollMessage(RoomWidgetPollMessage.ANSWER, this.var_3649);
    ((r._re812cd9299d86c = Number(this.var_469?.id ?? 0)),
      (r._r44ca599613a61a = [String(e)]),
      this._r1515e6bde00451?.RoomWidgetLetUserInMessage(r),
      (this._r9bdfd141d2926c = !0),
      this._view?.createWindow(TX.STATE_RESULT));
  }
}
