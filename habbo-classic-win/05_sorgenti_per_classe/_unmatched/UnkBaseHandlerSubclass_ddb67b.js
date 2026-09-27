// Extracted from HabboAirLauncher.deobf.js, line 302375.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iddb67b9629e4cc

class extends BaseHandler {
  static {
    n(this, "UnkBaseHandlerSubclass_ddb67b");
  }
  constructor(e, r) {
    (super(e, r),
      e.addMessageEvent(new class_3104((t) => this._r1dc9512d3425d1(t))),
      e.addMessageEvent(new class_3772((t) => this._r238a7105294a5c(t))),
      e.addMessageEvent(new class_3681((t) => this._r8442bcac24fcca(t))),
      e.addMessageEvent(new class_3510((t) => this._rcf83470c5451a7(t))),
      e.addMessageEvent(new UnkMessageEvent_632e58((t) => this._rd327af60c9af2a(t))),
      e.addMessageEvent(new UnkMessageEvent_b1d1be((t) => this._r4c05d09b7b8813(t))),
      e.addMessageEvent(new UnkMessageEvent_c48121((t) => this._r532db4a949e2c2(t))),
      e.addMessageEvent(new UnkMessageEvent_5280e8((t) => this._ra5a1e7f6103bb9(t))),
      e.addMessageEvent(new UnkMessageEvent_cf0d15((t) => this._rf38e728c99ed00(t))),
      e.addMessageEvent(new UnkMessageEvent_237f42((t) => this._r56cf97d4777e50(t))));
  }
  getSession() {
    return this.listener?.getSession(this._r48494125bd335d) ?? null;
  }
  _r1dc9512d3425d1(e) {
    let t = e?.getParser(),
      i = this.getSession();
    t == null ||
      i == null ||
      (t._re835377b790ff1 !== -1 && i._r1c87b345c03870(t._re835377b790ff1),
      this.dispatch(
        new xr(
          xr.ROOM_SESSION_CHAT_EVENT,
          i,
          t.userId,
          t.text,
          xr.CHAT_TYPE_SPEAK,
          t.styleId,
          t.links,
          -1,
          t._r16bf11e1236c9d,
        ),
      ));
  }
  _rcf83470c5451a7(e) {
    let r = e.getParser(),
      t = this.getSession();
    if (r == null || t == null) return;
    let i = t.getUserDataByIndex.userDataManager(r._rc86f77becaebea);
    i != null &&
      this.dispatch(
        new xr(
          xr.ROOM_SESSION_CHAT_EVENT,
          t,
          i._r2fdf1f24b1e612,
          "",
          xr.CHAT_TYPE_SPECIAL_SYSTEM,
          class_3668.GENERIC,
          null,
          r._re317b45f6f710f,
        ),
      );
  }
  _rd327af60c9af2a(e) {
    let r = this.getSession();
    if (r == null) return;
    let t = r.getUserDataByIndex._r1cacdcfc23a2de(e.userId);
    t != null &&
      this.dispatch(
        new xr(xr.ROOM_SESSION_CHAT_EVENT, r, t._r2fdf1f24b1e612, "", xr.CHAT_TYPE_RESPECT, class_3668.GENERIC),
      );
  }
  _r4c05d09b7b8813(e) {
    let r = e.getParser(),
      t = this.getSession();
    if (r == null || t == null) return;
    let i = r._r9624d2c1d70bed;
    if (i == null) return;
    let s = t.getUserDataByIndex._r088e8652882b97(i.id);
    if (s == null) return;
    let o = xr.CHAT_TYPE_PETRESPECT;
    (r.isTreat() && (o = xr.CHAT_TYPE_PETTREAT),
      this.dispatch(new xr(xr.ROOM_SESSION_CHAT_EVENT, t, s._r2fdf1f24b1e612, "", o, class_3668.GENERIC)));
  }
  _r532db4a949e2c2(e) {
    let r = e.getParser(),
      t = this.getSession();
    if (r == null || t == null) return;
    let i = t.getUserDataByIndex._r088e8652882b97(r.petId);
    if (i == null) return;
    let s = xr.CHAT_TYPE_PETREVIVE;
    switch (r._r1ebe1ae4e2a93c) {
      case UnkConstants_8ef8e5._ra8d5f0478b1f99:
        s = xr.CHAT_TYPE_PETREVIVE;
        break;
      case UnkConstants_8ef8e5._raa8f8265f15f0e:
        s = xr.CHAT_TYPE_PET_REBREED_FERTILIZE;
        break;
      case UnkConstants_8ef8e5._r07c1763c759936:
        s = xr.CHAT_TYPE_PET_SPEED_FERTILIZE;
        break;
    }
    let o = -1,
      d = t.getUserDataByIndex._r1cacdcfc23a2de(r.userId);
    (d != null && (o = d._r2fdf1f24b1e612),
      this.dispatch(new xr(xr.ROOM_SESSION_CHAT_EVENT, t, i._r2fdf1f24b1e612, "", s, class_3668.GENERIC, null, o)));
  }
  _rf38e728c99ed00(e) {
    let r = this.getSession();
    r != null &&
      this.dispatch(
        new xr(
          xr.ROOM_SESSION_CHAT_EVENT,
          r,
          e.giverUserId,
          "",
          xr.CHAT_TYPE_HAND_ITEM_RECEIVED,
          class_3668.GENERIC,
          null,
          e.handItemType,
        ),
      );
  }
  _r56cf97d4777e50(e) {
    let r = this.getSession();
    r != null &&
      this.dispatch(
        new xr(
          xr.ROOM_SESSION_CHAT_EVENT,
          r,
          r.ownUserRoomId,
          "",
          xr.CHAT_TYPE_MUTE_REMAINING,
          class_3668.GENERIC,
          null,
          e.secondsRemaining,
        ),
      );
  }
  _r238a7105294a5c(e) {
    this._r6a9b4209640e1e(e, xr.CHAT_TYPE_WHISPER);
  }
  _r8442bcac24fcca(e) {
    this._r6a9b4209640e1e(e, xr.CHAT_TYPE_SHOUT);
  }
  _r6a9b4209640e1e(e, r) {
    let t = e.getParser(),
      i = this.getSession();
    t == null ||
      i == null ||
      this.dispatch(
        new xr(
          xr.ROOM_SESSION_CHAT_EVENT,
          i,
          t.userId,
          t.text,
          r,
          t.styleId,
          t.links,
          -1,
          t._r16bf11e1236c9d,
        ),
      );
  }
  _ra5a1e7f6103bb9(e) {
    let t = ClassUtils._rc882f0c0aea57f(e, UnkMessageEvent_5280e8)?.getParser() ?? null,
      i = this.getSession();
    t == null || i == null || this.dispatch(new xr(xr.ROOM_SESSION_FLOODCONTROL_EVENT, i, -1, `${t.seconds}`));
  }
}
