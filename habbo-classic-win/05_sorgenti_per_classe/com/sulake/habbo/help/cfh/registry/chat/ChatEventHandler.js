// Extracted from HabboAirLauncher.deobf.js, line 200448.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/cfh/registry/chat/ChatEventHandler.as
// Obfuscated name: _i73351c72dc710a

class a {
  constructor(e) {
    this.var_82 = e;
    (this.var_82?.roomSessionManager?.events.addEventListener?.(
      xr.ROOM_SESSION_CHAT_EVENT,
      this._r1dc9512d3425d1,
    ),
      this.var_82?._r1218f60f737b72 != null &&
        this.var_82._r1218f60f737b72.events.addEventListener?.(
          GameChatEvent.GAME_CHAT,
          this._r08e404c927d97c,
        ));
  }
  static {
    n(this, "ChatEventHandler");
  }
  static CHAT_STYLE_SNOWWAR_RED = 120;
  static CHAT_STYLE_SNOWWAR_BLUE = 121;
  _r3e336e3410284e = 0;
  _r334d1b37c20e27 = 0;
  dispose() {
    this.disposed ||
      (this.var_82?.roomSessionManager?.events.removeEventListener?.(
        xr.ROOM_SESSION_CHAT_EVENT,
        this._r1dc9512d3425d1,
      ),
      this.var_82?._r1218f60f737b72?.events.removeEventListener?.(
        GameChatEvent.GAME_CHAT,
        this._r08e404c927d97c,
      ),
      (this.var_82 = null));
  }
  get disposed() {
    return this.var_82 == null;
  }
  _r1dc9512d3425d1 = n((e) => {
    let r = this.var_82,
      i =
        (r?.roomSessionManager?.getSession(e.session.roomId) ?? null)?.getUserDataByIndex.userDataManager(
          e.userId,
        ) ?? null;
    if (i != null && r?.sessionDataManager?.isBlocked(i.webID) === !0) return;
    let s = r?.roomEngine?._ra1f5cb56d0c2d8(e.session.roomId, e.userId, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null,
      o = null;
    s != null && (o = s.getLocation());
    let d = _ia411d8d8194a3a();
    (d === this._r3e336e3410284e ? this._r334d1b37c20e27++ : (this._r334d1b37c20e27 = 0),
      r?._ref0c2f1190c7b2(new ChatItem(e, d + this._r334d1b37c20e27, o, e.extraParam)),
      !1,
      (this._r3e336e3410284e = d));
  }, "_r1dc9512d3425d1");
  _r08e404c927d97c = n((e) => {
    let r = this.var_82;
    if (r == null) return;
    let t = e.teamId === 1 ? a.CHAT_STYLE_SNOWWAR_BLUE : a.CHAT_STYLE_SNOWWAR_RED,
      i = new xr(xr.ROOM_SESSION_CHAT_EVENT, null, e.userId, e.message, xr.CHAT_TYPE_SPEAK, t);
    r._ref0c2f1190c7b2(new ChatItem(i, _ia411d8d8194a3a(), null, 0, e._reac49ef537f57e, e.color, e.figure, e.name));
  }, "_r08e404c927d97c");
}
