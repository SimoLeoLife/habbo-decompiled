// Estratto da HabboAirLauncher.deobf.js, riga 233760.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/cfh/registry/chat/ChatEventHandler.as
// Nome offuscato: _i73351c72dc710a

class {
  constructor(e) {
    this.var_82 = e;
    this.var_82?.roomSessionManager?.events?.addEventListener?.(
      xr.ROOM_SESSION_CHAT_EVENT,
      this._r1dc9512d3425d1,
    );
  }
  static {
    n(this, "ChatEventHandler");
  }
  dispose() {
    this.disposed ||
      (this.var_82?.roomSessionManager?.events?.removeEventListener?.(
        xr.ROOM_SESSION_CHAT_EVENT,
        this._r1dc9512d3425d1,
      ),
      (this.var_82 = null));
  }
  get disposed() {
    return this.var_82 == null;
  }
  _r1dc9512d3425d1 = n((e) => {
    let r = this.var_82,
      i = r?.roomSessionManager?.getSession(e.session.roomId)?.getUserDataByIndex?.userDataManager(e.userId),
      s = r?.navigator?._rff8822efc4b68b;
    if (
      i == null ||
      i.type !== RoomObjectTypeEnum.OBJECT_TYPE_USER ||
      s == null ||
      r?.sessionDataManager?.isBlocked(i.webID)
    )
      return;
    let o = s.roomName ?? "Unknown Room";
    r?._rafd5b9130c4bfd?.chatStyleLibrary?._r22c9347ecec607(e.style)?.mask !== !0 &&
      r?._rac50ce9cc85d8c.addItem(e.session.roomId, o, i.webID, i.name, e.text);
  }, "_r1dc9512d3425d1");
}
