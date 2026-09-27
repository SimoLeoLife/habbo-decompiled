// Estratto da HabboAirLauncher.deobf.js, riga 359206.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/variables_management/detail/VariableManagementDetailController.as
// Nome offuscato: _i563c4539cc84ba

class extends ue {
  static {
    n(this, "VariableManagementDetailController");
  }
  _roomEvents;
  var_1271 = !1;
  _messageEvents;
  _view = null;
  _data = null;
  var_1582 = Object.create(null);
  constructor(e, r, t = 0, i = null) {
    (super(r, t, i),
      (this._roomEvents = e),
      (this._messageEvents = [
        new _i54a032e9dd8c0a((s) => this._re71b167730cec9(s)),
        new _i2e47b0596384b3((s) => this.onGetResult(s)),
      ]));
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
  get data() {
    return this._data;
  }
  get view() {
    return this._view;
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  get _r54ee84f78e6609() {
    return this.var_1582;
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
        (this._data = null),
        (this.var_1582 = null),
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
  _re71b167730cec9(e) {
    let r = ClassUtils.getParser(e, _i651f4f3ee6004d);
    if (r == null) return;
    let t = r.list;
    t != null && this._roomEvents._rf5e384520bc525.getAllVariables((i) => this.initializeData(i, t));
  }
  initializeData(e, r) {
    ((this._data = r), (this.var_1582 = Object.create(null)));
    for (let t of e) this.var_1582[t.variableId] = t;
    this.dataIsReady();
  }
  dataIsReady() {
    (this._view == null && (this._view = new cBe(this, this._windowManager)),
      this._view.displayNewData(),
      this._view.isShowing() || this._view.show());
  }
  onGetResult(e) {
    let r = ClassUtils.getParser(e, _i19fbbf9b01a076);
    r != null &&
      (r.success ||
        this._roomEvents.notifications.addItem(
          "${wiredmenu.variable_management_detail.notification.modification_failed}",
          NotificationType.const_1274,
        ));
  }
  _r136af7172e26af = n((e) => {}, "_r136af7172e26af");
  _r33a6aa9dfdc0be = n((e) => {
    this._roomEngine != null && e.type === RoomEngineEvent.ROOM_DISPOSED && this._view?.hide();
  }, "_r33a6aa9dfdc0be");
}
