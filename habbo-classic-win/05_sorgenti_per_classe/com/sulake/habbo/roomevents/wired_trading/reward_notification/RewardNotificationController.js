// Estratto da HabboAirLauncher.deobf.js, riga 374138.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/reward_notification/RewardNotificationController.as
// Nome offuscato: _ib6b9d084266e47

class a extends ue {
  static {
    n(this, "RewardNotificationController");
  }
  static MAX_OPEN_REWARD_NOTIFICATIONS = 10;
  _roomEvents;
  _messageEvents = null;
  var_2492 = null;
  var_411 = null;
  var_102 = null;
  var_1271 = !1;
  constructor(e, r, t = 0, i = null) {
    (super(r, t, i),
      (this._roomEvents = e),
      (this._messageEvents = []),
      this._messageEvents.push(new _i6e59e343aa7447((s) => this.onTransactionSuccess(s))));
    for (let s of this._messageEvents) this.addMessageEvent(s);
    ((this.var_2492 = new B()), (this.var_411 = []), (this.var_102 = new UbuntuPresetManager(e)));
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (e) => {
          this._r6358b2bd53ae19 = e;
        },
        !0,
      ),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localizationManager = e;
      }),
      new ComponentDependency(
        new IIDRoomEngine(),
        (e) => {
          this._roomEngine = e;
        },
        !1,
        [{ type: RoomEngineEvent.ROOM_DISPOSED, callback: n((e) => this._r33a6aa9dfdc0be(e), "callback") }],
      ),
    ]);
  }
  initComponent() {
    this.context._r7e43d9f4706607(this);
  }
  get linkPattern() {
    return "wiredrewards/";
  }
  linkReceived(e) {
    let r = e.split("/");
    if (!(r.length < 2) && r[1] === "open") {
      if (r.length < 3) return;
      this._r9ee150e06b2ab5(Number(r[2]));
    }
  }
  onTransactionSuccess = n((e) => {
    let r = e.getParser().contents;
    r == null ||
      r._rb8ba5dcaad6794 == null ||
      (this.var_2492.add(r._rc379d503e42585, r),
      r._rb07163afa71006 && this._r9ee150e06b2ab5(r._rc379d503e42585));
  }, "onTransactionSuccess");
  _r9ee150e06b2ab5(e) {
    if (this.var_1271) return;
    for (let d of this.var_411)
      if (d.contents != null && d.contents._rc379d503e42585 === e) {
        d.window.activate();
        return;
      }
    for (; this.var_411.length >= a.MAX_OPEN_REWARD_NOTIFICATIONS;)
      this._rea8c11a13d916f(this.var_411[0]);
    let r = this.var_2492.getValue(e),
      t = new eRe(this, this.var_102),
      i = 0,
      s = 0,
      o = 0;
    if (
      (this.var_411.length > 0 &&
        (o =
          (this.var_411[this.var_411.length - 1]._r7980528b5700ff + 1) %
          a.MAX_OPEN_REWARD_NOTIFICATIONS),
      o > 0)
    ) {
      let c = Math.trunc((o + 1) / 2);
      (o + 1) % 2 === 0 ? ((i = 25 * c), (s = 25 * c)) : ((i = -25 * c), (s = -25 * c));
    }
    (t.show(r, i, s, o), this.var_411.push(t));
  }
  _rea8c11a13d916f(e) {
    let r = this.var_411.indexOf(e);
    (r !== -1 && this.var_411.splice(r, 1), e.dispose());
  }
  _r33a6aa9dfdc0be = n((e) => {
    if (e.type === RoomEngineEvent.ROOM_DISPOSED) {
      let r = this.var_411;
      this.var_411 = [];
      for (let t of r) t.dispose();
    }
  }, "_r33a6aa9dfdc0be");
  addMessageEvent(e) {
    this._r6358b2bd53ae19?._r2e106e2349a0b6(e);
  }
  removeMessageEvent(e) {
    this._r6358b2bd53ae19?._r7668362bf55fdd(e);
  }
  dispose() {
    if (!this.var_1271) {
      if (((this.var_1271 = !0), this._messageEvents != null))
        for (let e of this._messageEvents) this.removeMessageEvent(e);
      if (((this._messageEvents = null), this.var_411 != null))
        for (let e of this.var_411) e.dispose();
      ((this.var_411 = null),
        (this.var_2492 = null),
        (this._r6358b2bd53ae19 = null),
        (this._windowManager = null),
        (this._localizationManager = null),
        (this._roomEngine = null),
        (this.var_102 = null),
        (this._roomEvents = null),
        super.dispose());
    }
  }
  get disposed() {
    return this.var_1271;
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  get _rf3db13932bfb60() {
    return this._r6358b2bd53ae19;
  }
  get localizationManager() {
    return this._localizationManager;
  }
  get windowManager() {
    return this._windowManager;
  }
  get roomEngine() {
    return this._roomEngine;
  }
}
