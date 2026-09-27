// Extracted from HabboAirLauncher.deobf.js, line 240483.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/trading/TradingModel.as
// Obfuscated name: _icae9f1daf0df7e

class a {
  constructor(e, r, t, i, s, o, d, c) {
    this._inventory = e;
    this._communication = t;
    this._localization = o;
    this._notifications = c;
    ((this._rda580f0e3148d1 = new L1(this, r, i, s, this._localization, d)),
      (this.var_1497 = new TradingNameScamWarningController(r, i, this._localization, this._communication)));
  }
  static {
    n(this, "TradingModel");
  }
  static MAX_ITEMS_TO_TRADE = 9;
  static _r3defa7c8a1c9b6 = 0;
  static TRADING_STATE_RUNNING = 1;
  static TRADING_STATE_COUNTDOWN = 2;
  static TRADING_STATE_CONFIRMING = 3;
  static TRADING_STATE_CONFIRMED = 4;
  static TRADING_STATE_COMPLETED = 5;
  static TRADING_STATE_CANCELLED = 6;
  static _r49d5d369c9fb3b = !0;
  _disposed = !1;
  _state = a._r3defa7c8a1c9b6;
  _r1ddfe4476e5d1f = -1;
  _r26304bc3f25c85 = "";
  _ownUserNumItems = new B();
  _rf8fb1a967175e5 = 0;
  _r6f81b1b7685616 = 0;
  _otherUserNftItems = new B();
  _otherUserNumNftItems = 0;
  var_1346 = !1;
  _r0925bd21cbb1ad = !1;
  _rbca3f962a6888a = -1;
  _otherUserName = "";
  _otherUserNumItems = new B();
  _r36fa95be9fcc5a = 0;
  _rd74a468b98e06f = 0;
  _r32d9b2615f423c = new B();
  _r13daabe0d0abb7 = 0;
  _r292f3140350b99 = !1;
  _r38c2995e283ff6 = !1;
  _rcb37597c02ab71 = 0;
  _r04e2d742e2ada0 = 0;
  _r5a6a3441934cb5 = 0;
  var_1497;
  _rda580f0e3148d1;
  get running() {
    return this._state !== a._r3defa7c8a1c9b6;
  }
  get state() {
    return this._state;
  }
  get disposed() {
    return this._disposed;
  }
  get _rb286a1f9faeb60() {
    return this._r1ddfe4476e5d1f;
  }
  get _r8b3cd107b1088e() {
    return this._r26304bc3f25c85;
  }
  get _reac3de971475b5() {
    return this._ownUserNumItems;
  }
  get _r2bd361f8f31a77() {
    return this.var_1346;
  }
  get _rc4b476693b3b17() {
    return this._r0925bd21cbb1ad;
  }
  get _r91daa520f2e734() {
    return this._rbca3f962a6888a;
  }
  get otherUserName() {
    return this._otherUserName;
  }
  get _re686579f4fa77c() {
    return this._otherUserNumItems;
  }
  get _rb9b71089d1fb9e() {
    return this._r292f3140350b99;
  }
  get _r2311c23a1ce5db() {
    return this._r38c2995e283ff6;
  }
  get _r6d75f838a2611e() {
    return this._otherUserNftItems;
  }
  get _r983df726b0bad3() {
    return this._otherUserNumNftItems;
  }
  get _r6b6ffd2dbb483a() {
    return this._r32d9b2615f423c;
  }
  get _r202b3c0a5eda27() {
    return this._r13daabe0d0abb7;
  }
  get _rd4b58ad37afd4f() {
    return this._rf8fb1a967175e5;
  }
  get _r905152608fd89c() {
    return this._ownUserNumItems.length > 0 || this._otherUserNftItems.length > 0;
  }
  get _rf6f6fdcb04d727() {
    return this._rf8fb1a967175e5 + this._otherUserNumNftItems;
  }
  get _r3274da186156f8() {
    return this._r6f81b1b7685616;
  }
  get _r093a862de1e6a2() {
    return this._r36fa95be9fcc5a;
  }
  get _r0d196c6ead9389() {
    return this._otherUserNumItems.length > 0 || this._r32d9b2615f423c.length > 0;
  }
  get _rd182e16d9472b4() {
    return this._r36fa95be9fcc5a + this._r13daabe0d0abb7;
  }
  get _rcaf09444b7d3c2() {
    return this._rd74a468b98e06f;
  }
  get _r471a79b453b508() {
    return this._rcb37597c02ab71;
  }
  get _r6153f7218b625e() {
    return this._r04e2d742e2ada0;
  }
  get _r87e7818b304030() {
    return this._r5a6a3441934cb5;
  }
  dispose() {
    this._disposed ||
      (this._rda580f0e3148d1?.dispose(),
      (this._rda580f0e3148d1 = null),
      this.var_1497?.dispose(),
      (this.var_1497 = null),
      this._ownUserNumItems.dispose(),
      this._otherUserNftItems.dispose(),
      this._otherUserNumItems.dispose(),
      this._r32d9b2615f423c.dispose(),
      (this._inventory = null),
      (this._communication = null),
      (this._localization = null),
      (this._notifications = null),
      (this._disposed = !0));
  }
  startTrading(e, r, t, i, s, o, d = !1) {
    ((this._r1ddfe4476e5d1f = e),
      (this._r26304bc3f25c85 = r),
      this._ownUserNumItems.dispose(),
      this._otherUserNftItems.dispose(),
      (this._ownUserNumItems = new B()),
      (this._otherUserNftItems = new B()),
      (this.var_1346 = !1),
      (this._r0925bd21cbb1ad = t),
      (this._rbca3f962a6888a = i),
      (this._otherUserName = s),
      this._otherUserNumItems.dispose(),
      this._r32d9b2615f423c.dispose(),
      (this._otherUserNumItems = new B()),
      (this._r32d9b2615f423c = new B()),
      (this._r292f3140350b99 = !1),
      (this._r38c2995e283ff6 = o),
      (this._rcb37597c02ab71 = 0),
      (this._r04e2d742e2ada0 = 0),
      (this._r5a6a3441934cb5 = 0),
      (this._otherUserNumNftItems = 0),
      (this._rf8fb1a967175e5 = 0),
      (this._r6f81b1b7685616 = 0),
      (this._r13daabe0d0abb7 = 0),
      (this._r36fa95be9fcc5a = 0),
      (this._rd74a468b98e06f = 0),
      this.var_1497?.hide());
    let c = this._r2c0fbe7a5fcd99(d),
      f = c._re4fba834f26aa5 ? this.createNameScamWarningData(c) : null;
    ((this.state = a.TRADING_STATE_RUNNING),
      this._rda580f0e3148d1?.setup(e, t, i, o),
      this._rda580f0e3148d1?.updateItemList(this._r1ddfe4476e5d1f),
      this._rda580f0e3148d1?.updateItemList(this._rbca3f962a6888a),
      this._rda580f0e3148d1?.updateUserInterface(),
      this._rda580f0e3148d1?._rd8a0b38a03d366(),
      this._inventory?._rf93ea073fdcb45(class_2106.FURNITURE),
      this._inventory?.events.dispatchEvent?.(new M(HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_TRADING)),
      f != null && this.var_1497?.show(f));
  }
  close() {
    (this.running &&
      (this._state !== a._r3defa7c8a1c9b6 &&
        this._state !== a.TRADING_STATE_COMPLETED &&
        (this._r1718fce2f8e038(), (this.state = a.TRADING_STATE_CANCELLED)),
      (this.state = a._r3defa7c8a1c9b6),
      this._inventory?.toggleInventorySubPage(class_2245.EMPTY)),
      this.var_1497?.hide(),
      this._rda580f0e3148d1?.setMinimized(!1));
  }
  _r2c0fbe7a5fcd99(e) {
    return !e && !a._r49d5d369c9fb3b
      ? lQ.NO_MATCHES
      : $7e.detect(this._otherUserName, this._r56a6e06e608161(), this._rc1d85ec7994d1d());
  }
  createNameScamWarningData(e) {
    let r = "",
      t = this._inventory?._r2eac8239a09fe7 ?? null;
    if (t?.getUserDataByIndex != null) {
      let i = t.getUserDataByIndex._r1cacdcfc23a2de(this._rbca3f962a6888a);
      i?.figure != null && (r = i.figure);
    }
    return new TradingNameScamWarningData(this._rbca3f962a6888a, this._otherUserName, r, e.similarInRoom, e.similarInFriends);
  }
  _r56a6e06e608161() {
    let e = this._inventory?._r2eac8239a09fe7 ?? null;
    if (e?.getUserDataByIndex == null) return [];
    let r = [];
    for (let t of e.getUserDataByIndex._r729ffc9f13fde5()) {
      if (t === this._r1ddfe4476e5d1f || t === this._rbca3f962a6888a) continue;
      let i = e.getUserDataByIndex._r1cacdcfc23a2de(t);
      i == null || i.name == null || i.name.length === 0 || r.push(i.name);
    }
    return r;
  }
  _rc1d85ec7994d1d() {
    let e = this._inventory?.friendList?._rab99fafd046469() ?? null;
    return e ?? [];
  }
  _r893fde6d3c3593() {
    return this._rf3e5225125e12b() && this._state === a.TRADING_STATE_CONFIRMED;
  }
  _rf3e5225125e12b() {
    return this._rcb37597c02ab71 > 0 || this._r32d9b2615f423c.length > 0 || this._otherUserNftItems.length > 0;
  }
  categorySwitch(e) {
    (this._rda580f0e3148d1?.setMinimized(e !== class_2106.FURNITURE && e !== class_2106.COLLECTIBLES),
      this._inventory?._r7ecf0c1a0261ad());
  }
  set state(e) {
    let r = !1;
    if (this._state !== e) {
      switch (this._state) {
        case a._r3defa7c8a1c9b6:
          (e === a.TRADING_STATE_RUNNING || e === a.TRADING_STATE_COMPLETED) &&
            ((this._state = e), this._inventory?._rc80c788fb9799e(), (r = !0));
          break;
        case a.TRADING_STATE_RUNNING:
          e === a.TRADING_STATE_COUNTDOWN
            ? ((this._state = e), (r = !0), this.startConfirmCountdown())
            : e === a.TRADING_STATE_CANCELLED &&
              ((this._state = e), this._rda580f0e3148d1?.setMinimized(!1), (r = !0));
          break;
        case a.TRADING_STATE_COUNTDOWN:
          e === a.TRADING_STATE_CONFIRMING
            ? ((this._state = e), (r = !0))
            : e === a.TRADING_STATE_CANCELLED
              ? ((this._state = e), this._rda580f0e3148d1?.setMinimized(!1), (r = !0))
              : e === a.TRADING_STATE_RUNNING && ((this._state = e), (r = !0), this._rbe2c086e6bdc9b());
          break;
        case a.TRADING_STATE_CONFIRMING:
          e === a.TRADING_STATE_CONFIRMED
            ? ((this._state = e), (r = !0))
            : e === a.TRADING_STATE_COMPLETED
              ? ((this._state = e), (r = !0), this.close())
              : e === a.TRADING_STATE_CANCELLED &&
                ((this._state = e), this._rda580f0e3148d1?.setMinimized(!1), (r = !0), this.close());
          break;
        case a.TRADING_STATE_CONFIRMED:
          e === a.TRADING_STATE_COMPLETED
            ? ((this._state = e), this._rda580f0e3148d1?.setMinimized(!1), (r = !0), this.close())
            : e === a.TRADING_STATE_CANCELLED &&
              ((this._state = e), this._rda580f0e3148d1?.setMinimized(!1), (r = !0), this.close());
          break;
        case a.TRADING_STATE_COMPLETED:
          e === a._r3defa7c8a1c9b6 &&
            ((this._state = e), this._inventory?._rc80c788fb9799e(!0), (r = !0));
          break;
        case a.TRADING_STATE_CANCELLED:
          e === a._r3defa7c8a1c9b6
            ? ((this._state = e), this._inventory?._rc80c788fb9799e(), (r = !0))
            : e === a.TRADING_STATE_RUNNING && ((this._state = e), (r = !0));
          break;
        default:
          throw new Error(`Unknown trading progress state: "${this._state}"`);
      }
      if (r) this._rda580f0e3148d1?.updateUserInterface();
      else
        throw new Error(
          `Error assigning trading process status! States does not match: (from) ${this._state} (to) ${e}`,
        );
    }
  }
  _re99edf37b9c419() {
    return this._inventory?._r9275a8e42af3cc ?? null;
  }
  _r7e20a768d73d22() {
    if (this._inventory == null) throw new Error("TradingModel has been disposed.");
    return this._inventory;
  }
  updateItemGroupMaps(e, r, t) {
    (this._ownUserNumItems.dispose(),
      this._otherUserNumItems.dispose(),
      e.var_1375 === this._r1ddfe4476e5d1f
        ? ((this._ownUserNumItems = r),
          (this._rf8fb1a967175e5 = e._ra48214168e4114),
          (this._r6f81b1b7685616 = e._r11f090fb8f4bf7),
          (this._otherUserNumItems = t),
          (this._r36fa95be9fcc5a = e._r1fb673a3faa136),
          (this._rd74a468b98e06f = e._r821f7b065dcaf4))
        : ((this._ownUserNumItems = t),
          (this._rf8fb1a967175e5 = e._r1fb673a3faa136),
          (this._r6f81b1b7685616 = e._r821f7b065dcaf4),
          (this._otherUserNumItems = r),
          (this._r36fa95be9fcc5a = e._ra48214168e4114),
          (this._rd74a468b98e06f = e._r11f090fb8f4bf7)),
      (this.var_1346 = !1),
      (this._r292f3140350b99 = !1),
      this._rda580f0e3148d1?.updateItemList(this._r1ddfe4476e5d1f),
      this._rda580f0e3148d1?.updateItemList(this._rbca3f962a6888a),
      this._rda580f0e3148d1?.updateUserInterface(),
      this._inventory?._r9275a8e42af3cc?._rc4b19b364e6310());
  }
  updateNftItems(e, r, t, i) {
    (this._otherUserNftItems.dispose(),
      this._r32d9b2615f423c.dispose(),
      (this.var_1346 = !1),
      (this._r292f3140350b99 = !1),
      (this._otherUserNftItems = e),
      (this._r32d9b2615f423c = r),
      (this._otherUserNumNftItems = t),
      (this._r13daabe0d0abb7 = i),
      this._rda580f0e3148d1?.updateItemList(this._r1ddfe4476e5d1f),
      this._rda580f0e3148d1?.updateItemList(this._rbca3f962a6888a),
      this._rda580f0e3148d1?.updateUserInterface(),
      this._inventory?._r6798423e068a1a?._rc4b19b364e6310());
  }
  _rae12c5b2a7f2fb() {
    let e = [];
    for (let r of this._ownUserNumItems.getValues())
      for (let t = 0; t < r._rafb6b19888a65c(); t++) {
        let i = r._r7823981d08072b(t);
        i != null && e.push(i.ref);
      }
    return e;
  }
  getWindowContainer() {
    return this._rda580f0e3148d1?.getWindowContainer() ?? null;
  }
  requestInitialization() {}
  subCategorySwitch(e) {
    this.running && this._state !== a._r3defa7c8a1c9b6 && this._r1718fce2f8e038();
  }
  closingInventoryView() {
    this.running &&
      (this._r893fde6d3c3593()
        ? this._notifications?.addItem(
            this._localization?.getLocalization("tradingdialog.minimize_web3") ??
              "tradingdialog.minimize_web3",
            NotificationType.INFO,
            "icon_curator_stamp_large_png",
          )
        : this.close());
  }
  startConfirmCountdown() {
    this._rda580f0e3148d1?.startConfirmCountdown();
  }
  _rbe2c086e6bdc9b() {
    this._rda580f0e3148d1?._rbe2c086e6bdc9b();
  }
  _r484203fde64a5c() {
    this._state === a.TRADING_STATE_COUNTDOWN && (this.state = a.TRADING_STATE_CONFIRMING);
  }
  _rbe5d031608a6eb(e) {
    if (e instanceof UnkMessageEvent_77aa81)
      e.getParser().reason === class_3644.const_1237 || e.getParser().reason === class_3644.const_354
        ? this._rda580f0e3148d1?.alertPopup(L1.ALERT_ALREADY_OPEN)
        : this._rda580f0e3148d1?.alertTradeOpenFailed(e);
    else if (e instanceof UnkMessageEvent_7d769e)
      (e.userID === this._r1ddfe4476e5d1f
        ? (this.var_1346 = e._r22db0312772e45)
        : (this._r292f3140350b99 = e._r22db0312772e45),
        this._rda580f0e3148d1?.updateUserInterface());
    else if (e instanceof UnkMessageEvent_e0ed71) this.state = a.TRADING_STATE_COUNTDOWN;
    else if (e instanceof UnkMessageEvent_3a233d)
      (this._r893fde6d3c3593() &&
        this._notifications?.addItem(
          this._localization?.getLocalization("tradingdialog.done_messsage") ??
            "tradingdialog.done_messsage",
          NotificationType.INFO,
          "icon_curator_stamp_large_png",
        ),
        (this.state = a.TRADING_STATE_COMPLETED));
    else if (e instanceof UnkMessageEvent_128551) {
      if (!this.running) return;
      (e.getParser().reason === class_3498.const_1280
        ? (this._inventory?.getBoolean("trading.commiterror.enabled") ?? !1) &&
          this._rda580f0e3148d1?.windowManager._r3651220a1507f2(
            "${inventory.trading.notification.title}",
            "${inventory.trading.notification.commiterror.caption}",
            "${inventory.trading.notification.commiterror.info}",
          )
        : e.getParser().userID !== this._r1ddfe4476e5d1f &&
          this._rda580f0e3148d1?.alertPopup(L1.ALERT_OTHER_CANCELLED),
        this.close());
    } else if (e instanceof UnkMessageEvent_70e8bc)
      this._rda580f0e3148d1?.showOtherUserNotification("${inventory.trading.warning.others_account_disabled}");
    else if (e instanceof UnkMessageEvent_46c620)
      this._rda580f0e3148d1?.showOwnUserNotification("${inventory.trading.warning.own_account_disabled}");
    else if (e instanceof UnkMessageEvent_ed33e7) {
      let r = e.getParser();
      ((this._r04e2d742e2ada0 = r._r6153f7218b625e),
        (this._r5a6a3441934cb5 = r._r87e7818b304030),
        this._rda580f0e3148d1?.updateUserInterface());
    } else if (e instanceof UnkMessageEvent_7d64a1)
      ((this._rcb37597c02ab71 = e.getParser()._r32d3d5c6ff55d8), this._rda580f0e3148d1?.updateUserInterface());
    else if (e instanceof UnkMessageEvent_21cd6f || e instanceof UnkMessageEvent_454807) return;
  }
  enable() {
    return this._r04e2d742e2ada0 + this._r5a6a3441934cb5 >= this._rcb37597c02ab71;
  }
  _r276c9ba68b4f95() {
    this._inventory?._rf93ea073fdcb45(class_2106.FURNITURE);
  }
  _r375d3c506536b7(e) {
    this._communication?.connection.send(new UnkMessageComposer_1args_85b5fd(e));
  }
  requestAddItemsToTrading(e, r, t, i, s, o) {
    if (!s && e.length > 0) {
      this._communication?.connection.send(new class_3107(e[e.length - 1]));
      return;
    }
    let d = [];
    for (let c of e) this.canAddItemToTrade(r, t, i, s, o) && d.push(c);
    d.length === 1
      ? this._communication?.connection.send(new class_3107(d[0]))
      : d.length > 1 && this._communication?.connection.send(new class_3171(d));
  }
  _rd81a68895835ba(e) {
    this._communication?.connection.send(new UnkMessageComposer_1args_1f682e(e.map((r) => Math.trunc(r))));
  }
  canAddItemToTrade(e, r, t, i, s) {
    return this.var_1346 || this._ownUserNumItems == null
      ? !1
      : this._ownUserNumItems.length < a.MAX_ITEMS_TO_TRADE
        ? !0
        : i
          ? this._ownUserNumItems.getValue(a._r539037c270c166(e, r, t, s)) != null
          : !1;
  }
  _r4a4d211373e306(e) {
    if (this.var_1346) return;
    let r = this._ownUserNumItems.length;
    if (e >= r) {
      let s = this._otherUserNftItems.getWithIndex(e - r);
      if (s != null) {
        let o = s.pop(1);
        o.length === 1 && this._communication?.connection.send(new UnkMessageComposer_1args_bfc074(o[0]));
      }
      return;
    }
    let i = this._ownUserNumItems.getWithIndex(e)?.peek() ?? null;
    i != null && this._communication?.connection.send(new UnkMessageComposer_1args_18a3be(i.id));
  }
  _r1766979fae73bd() {
    this._communication?.connection.send(new UnkMessageComposer_0args_5d4c85());
  }
  _rf3bf5595d038ca() {
    this._communication?.connection.send(new UnkMessageComposer_0args_9b50c0());
  }
  _r9c156c5de4c687() {
    ((this.state = a.TRADING_STATE_CONFIRMED), this._communication?.connection.send(new UnkMessageComposer_0args_2bfae3()));
  }
  _r0c9c3af8b909a6() {
    this._communication?.connection.send(new UnkMessageComposer_0args_8f3e95());
  }
  _r1718fce2f8e038() {
    this._r893fde6d3c3593() || this._communication?.connection.send(new UnkMessageComposer_0args_670ded());
  }
  _r3a3fc773d8c6a7(e) {
    this._communication?.connection.send(new UnkMessageComposer_1args_4f047f(e));
  }
  _rdd580b35b4c224() {
    return this._r6f81b1b7685616 > 0 || this._rd74a468b98e06f > 0;
  }
  updateView() {}
  selectItemById(e) {}
  static getGuildFurniType(e, r) {
    let t = String(e),
      i = r;
    if (!(i instanceof ao)) return t;
    for (let s = 1; s < 5; s++) t += `,${i.getValue(s)}`;
    return t;
  }
  static _r539037c270c166(e, r, t, i) {
    return t === class_1901.POSTER
      ? `${r}poster${i.getLegacyString()}`
      : t === class_1901.GUILD_FURNI
        ? a.getGuildFurniType(r, i)
        : `${e ? "I" : "S"}${r}`;
  }
}
