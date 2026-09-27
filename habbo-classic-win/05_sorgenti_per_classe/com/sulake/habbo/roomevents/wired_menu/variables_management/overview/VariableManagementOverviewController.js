// Estratto da HabboAirLauncher.deobf.js, riga 359538.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/variables_management/overview/VariableManagementOverviewController.as
// Nome offuscato: _ib728af19bce8a8

class extends ue {
  static {
    n(this, "VariableManagementOverviewController");
  }
  _roomEvents;
  var_1271 = !1;
  _messageEvents;
  _view = null;
  var_225 = null;
  var_1308 = null;
  constructor(e, r, t = 0, i = null) {
    (super(r, t, i),
      (this._roomEvents = e),
      (this._messageEvents = [new _ia5595f8ffbb41f((s) => this._rd1049a4649a379(s))]));
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
      new ComponentDependency(new IIDSessionDataManager(), (t) => {
        this._sessionDataManager = t;
      }),
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
  get variable() {
    return this.var_1308;
  }
  get view() {
    return this._view;
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  send(e) {
    this._r6358b2bd53ae19.connection.send(e);
  }
  addMessageEvent(e) {
    this._r6358b2bd53ae19 != null && this._r6358b2bd53ae19._r2e106e2349a0b6(e);
  }
  removeMessageEvent(e) {
    this._r6358b2bd53ae19 != null && this._r6358b2bd53ae19._r7668362bf55fdd(e);
  }
  dispose() {
    if (!this.var_1271) {
      (this._view?.dispose(), (this._view = null));
      for (let e of this._messageEvents ?? []) this.removeMessageEvent(e);
      ((this._messageEvents = null),
        (this.var_225 = null),
        (this.var_1308 = null),
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
  _rd1049a4649a379(e) {
    let r = ClassUtils.getParser(e, _i46d12282feecb3);
    if (r == null) return;
    let t = r.page;
    t == null ||
      t.amount !== _i50108c33681996.PAGE_SIZE ||
      this._roomEvents._rf5e384520bc525.getAllVariables((i) => this.initializeData(i, t));
  }
  initializeData(e, r) {
    let t = this._roomEvents._rf5e384520bc525._r558a177d550462(r.variableId);
    t != null && ((this.var_225 = r), (this.var_1308 = t), this.dataIsReady());
  }
  dataIsReady() {
    (this._view == null && (this._view = new Nc(this, this._windowManager)),
      this._view.displayNewPage(),
      this._view.isShowing() || this._view.show());
  }
  _r136af7172e26af = n((e) => {}, "_r136af7172e26af");
  _r33a6aa9dfdc0be = n((e) => {
    this._roomEngine != null && e.type === RoomEngineEvent.ROOM_DISPOSED && this._view?.hide();
  }, "_r33a6aa9dfdc0be");
}
