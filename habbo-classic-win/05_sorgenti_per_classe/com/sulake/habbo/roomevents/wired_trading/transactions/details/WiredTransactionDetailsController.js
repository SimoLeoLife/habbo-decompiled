// Extracted from HabboAirLauncher.deobf.js, line 374665.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/transactions/details/WiredTransactionDetailsController.as
// Obfuscated name: _i16c1f1f405500c

class extends ue {
  static {
    n(this, "WiredTransactionDetailsController");
  }
  _roomEvents;
  var_1271 = !1;
  _messageEvents;
  _view = null;
  _details = null;
  constructor(e, r, t = 0, i = null) {
    (super(r, t, i),
      (this._roomEvents = e),
      (this._messageEvents = [new class_3049((s) => this._r19c7d6664ac957(s))]));
    for (let s of this._messageEvents) this.addMessageEvent(s);
  }
  get dependencies() {
    let e = n((r) => this._r33a6aa9dfdc0be(r), "_i33a6aa9dfdc0be");
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (r) => {
          this._r6358b2bd53ae19 = r;
        },
        !0,
      ),
      new ComponentDependency(new IIDSessionDataManager(), (r) => {
        this._sessionDataManager = r;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (r) => {
        this._windowManager = r;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (r) => {
        this._localizationManager = r;
      }),
      new ComponentDependency(
        new IIDRoomEngine(),
        (r) => {
          this._roomEngine = r;
        },
        !1,
        [{ type: RoomEngineEvent.ROOM_DISPOSED, callback: e }],
      ),
    ]);
  }
  get disposed() {
    return this.var_1271;
  }
  get localizationManager() {
    return this._localizationManager;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get details() {
    return this._details;
  }
  get view() {
    return this._view;
  }
  send(e) {
    this._r6358b2bd53ae19?.connection.send(e);
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
        (this._details = null),
        (this._r6358b2bd53ae19 = null),
        (this._localizationManager = null),
        (this._sessionDataManager = null),
        (this._windowManager = null),
        (this._roomEngine = null),
        (this._roomEvents = null),
        (this.var_1271 = !0),
        super.dispose());
    }
  }
  _r19c7d6664ac957(e) {
    let r = e.getParser();
    ((this._details = r.details),
      this._view == null && (this._view = new aRe(this, this._windowManager)),
      this._view.updateUI(),
      this._view.isShowing() || this._view.show());
  }
  _r33a6aa9dfdc0be = n((e) => {
    this._roomEngine != null && e.type === RoomEngineEvent.ROOM_DISPOSED && this._view?.hide();
  }, "_r33a6aa9dfdc0be");
}
