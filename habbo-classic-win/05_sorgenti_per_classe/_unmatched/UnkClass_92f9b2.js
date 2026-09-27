// Extracted from HabboAirLauncher.deobf.js, line 375066.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i92f9b2566441ea

class a extends ue {
  static {
    n(this, "UnkClass_92f9b2");
  }
  static TRANSACTIONS_PREVIEW_AMOUNT = 10;
  _roomEvents;
  var_1271 = !1;
  _messageEvents;
  _view = null;
  var_2910 = null;
  constructor(e, r, t = 0, i = null) {
    (super(r, t, i),
      (this._roomEvents = e),
      (this._messageEvents = [new class_3304((s) => this._r093f87c5666cae(s))]));
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
  get logs() {
    return this.var_2910;
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
        (this.var_2910 = null),
        (this._r6358b2bd53ae19 = null),
        (this._localizationManager = null),
        (this._windowManager = null),
        (this._roomEngine = null),
        (this._roomEvents = null),
        (this.var_1271 = !0),
        super.dispose());
    }
  }
  _r093f87c5666cae(e) {
    let t = e.getParser().logs;
    t != null &&
      t.amount !== a.TRANSACTIONS_PREVIEW_AMOUNT &&
      t.amount === TransactionConfig.PAGE_SIZE &&
      ((this.var_2910 = t),
      this._view == null && (this._view = new F0(this, this._windowManager)),
      this._view.displayNewPage(),
      this._view.isShowing() || this._view.show());
  }
  _r33a6aa9dfdc0be = n((e) => {
    this._roomEngine != null && e.type === RoomEngineEvent.ROOM_DISPOSED && this._view?.hide();
  }, "_r33a6aa9dfdc0be");
}
