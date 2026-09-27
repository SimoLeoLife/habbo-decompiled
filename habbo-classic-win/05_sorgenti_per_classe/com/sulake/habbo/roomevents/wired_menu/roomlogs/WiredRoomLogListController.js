// Extracted from HabboAirLauncher.deobf.js, line 358741.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/roomlogs/WiredRoomLogListController.as
// Obfuscated name: _idbc405bb6ab159

class extends ue {
  static {
    n(this, "WiredRoomLogListController");
  }
  _roomEvents;
  var_1271 = !1;
  _messageEvents;
  _view = null;
  var_225 = null;
  var_2737 = !1;
  constructor(e, r, t = 0, i = null) {
    (super(r, t, i),
      (this._roomEvents = e),
      (this._messageEvents = [new UnkMessageEvent_886e5b((s) => this._rd1049a4649a379(s))]));
    for (let s of this._messageEvents) this.addMessageEvent(s);
  }
  get dependencies() {
    let e = n((t) => this._r33a6aa9dfdc0be(t), "_i33a6aa9dfdc0be"),
      r = n((t) => this._r136af7172e26af(t), "_i136af7172e26af");
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (t) => {
          this._r6358b2bd53ae19 = t;
        },
        !0,
      ),
      new ComponentDependency(new IIDHabboWindowManager(), (t) => {
        this._windowManager = t;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (t) => {
        this._localizationManager = t;
      }),
      new ComponentDependency(
        new IIDRoomEngine(),
        (t) => {
          this._roomEngine = t;
        },
        !1,
        [{ type: RoomEngineEvent.ROOM_DISPOSED, callback: e }],
      ),
      new ComponentDependency(new IIDHabboRoomSessionManager(), null, !1, [{ type: RoomSessionEvent.const_1398, callback: r }]),
    ]);
  }
  get disposed() {
    return this.var_1271;
  }
  get localizationManager() {
    return this._localizationManager;
  }
  get page() {
    return this.var_225;
  }
  get view() {
    return this._view;
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  send(e, r = !1) {
    (r || (this.var_2737 = !0), this._r6358b2bd53ae19?.connection.send(e));
  }
  addMessageEvent(e) {
    this._r6358b2bd53ae19?._r2e106e2349a0b6(e);
  }
  removeMessageEvent(e) {
    this._r6358b2bd53ae19?._r7668362bf55fdd(e);
  }
  dispose() {
    if (!this.var_1271) {
      (this._view?.dispose(), (this._view = null));
      for (let e of this._messageEvents ?? []) this.removeMessageEvent(e);
      ((this._messageEvents = null),
        (this.var_225 = null),
        (this._r6358b2bd53ae19 = null),
        (this._localizationManager = null),
        (this._windowManager = null),
        (this._roomEngine = null),
        (this._roomEvents = null),
        (this.var_1271 = !0),
        super.dispose());
    }
  }
  _rd1049a4649a379(e) {
    let r = e.getParser();
    r.page?.amount === UnkConstants_faf388.PAGE_SIZE &&
      (((this._view == null || !this._view.isShowing()) && !this.var_2737) ||
        ((this.var_225 = r.page),
        this._view == null && (this._view = new D5(this, this._windowManager)),
        this._view.displayNewPage(!this.var_2737),
        this._view.isShowing() || this._view.show(),
        (this.var_2737 = !1)));
  }
  _r136af7172e26af = n((e) => {}, "_r136af7172e26af");
  _r33a6aa9dfdc0be = n((e) => {
    this._roomEngine != null && e.type === RoomEngineEvent.ROOM_DISPOSED && this._view?.hide();
  }, "_r33a6aa9dfdc0be");
}
