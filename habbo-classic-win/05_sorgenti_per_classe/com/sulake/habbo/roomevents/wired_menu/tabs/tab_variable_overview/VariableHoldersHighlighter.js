// Extracted from HabboAirLauncher.deobf.js, line 356180.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_variable_overview/VariableHoldersHighlighter.as
// Obfuscated name: _i8c838f6918f149

class {
  constructor(e) {
    this._roomEvents = e;
    let r = new UnkClass_baf84c(12318714, 1, 4, 4, 4, 1, !0, !1),
      t = new ColorMatrixFilter_([0.9, 0, 0, 0, 0, 0, 1, 0, 0, 40, 0, 0, 1, 0, 80, 0, 0, 0, 0.85, 0]);
    ((this.var_150 = [t, r]),
      this._roomEvents.roomEngine.events.addEventListener?.(RoomEngineObjectEvent.REMOVED, this.onRoomObjectRemoved));
  }
  static {
    n(this, "VariableHoldersHighlighter");
  }
  _disposed = !1;
  _rc8fb36502828be = new Map();
  _r1d423406d86b7c = new Map();
  var_150;
  var_1546 = [];
  var_1474 = new B();
  get disposed() {
    return this._disposed;
  }
  _r7a070feffe46bf(e, r) {
    let t = !0;
    if (this._rc8fb36502828be.has(e)) {
      if (this._rc8fb36502828be.get(e) === r) return;
      t = !1;
    }
    let i = this._r10ae1e3106e7d8(e);
    i != null && (this._r9854fcddedc2b2(t, i, r), this._rc8fb36502828be.set(e, r));
  }
  _r26b9732f3f671f(e, r) {
    let t = !0;
    if (this._r1d423406d86b7c.has(e)) {
      if (this._r1d423406d86b7c.get(e) === r) return;
      t = !1;
    }
    let i = this._roomEvents._r2eac8239a09fe7.getUserDataByIndex.userDataManager(e);
    if (i == null) return;
    let s = this._r5a2ce39dcc8d89(e);
    s != null &&
      (i.type === RoomObjectTypeEnum.OBJECT_TYPE_PET ? this._r9854fcddedc2b2(t, s, r) : this._rb44b9a728bb235(t, s, r),
      this._r1d423406d86b7c.set(e, r));
  }
  _r31add46f4bee79(e, r) {
    let t = [];
    for (let s of this._rc8fb36502828be.keys())
      if (!e.has(s)) {
        let o = this._r10ae1e3106e7d8(s);
        (o != null && (this._r13a96bd0156d7d(o), Ng.removeFiltersFromFurni(o, this.var_150)), t.push(s));
      }
    for (let s of t) this._rc8fb36502828be.delete(s);
    let i = [];
    for (let s of this._r1d423406d86b7c.keys())
      if (!r.has(s)) {
        let o = this._r5a2ce39dcc8d89(s),
          d = this._roomEvents._r2eac8239a09fe7.getUserDataByIndex.userDataManager(s);
        (o != null &&
          d != null &&
          (d.type === RoomObjectTypeEnum.OBJECT_TYPE_PET ? this._r13a96bd0156d7d(o) : this._r983dc67d187969(o)),
          i.push(s));
      }
    for (let s of i) this._r1d423406d86b7c.delete(s);
  }
  clear() {
    this._r31add46f4bee79(new Set(), new Set());
  }
  update(e) {
    for (let r of this.var_1474.getValues()) r.update(e);
  }
  dispose() {
    if (!this._disposed) {
      (this.clear(),
        this._roomEvents.roomEngine.events.removeEventListener?.(
          RoomEngineObjectEvent.REMOVED,
          this.onRoomObjectRemoved,
        ));
      for (let e of this.var_1546) e.dispose();
      for (let e of this.var_1474.getValues()) e.dispose();
      ((this.var_1546 = []),
        this.var_1474.dispose(),
        (this._roomEvents = null),
        (this._disposed = !0));
    }
  }
  _r9854fcddedc2b2(e, r, t) {
    (e && Ng.addFiltersToFurni(r, this.var_150), this._re21da2dd996bbd(r, t));
  }
  _rb44b9a728bb235(e, r, t) {
    (e && r.getModelController().setNumber(RoomObjectVariableEnum.AVATAR_WIRED_VARIABLE_HOLDER_HIGHLIGHT, 1), this._re21da2dd996bbd(r, t, !0));
  }
  onRoomObjectRemoved = n((e) => {
    for (let r = 0; r < this.var_1474.length; r += 1) {
      let t = this.var_1474.getWithIndex(r);
      t != null &&
        t.objectId === e.objectId &&
        t.category === e.category &&
        (this.var_1474.remove(this.var_1474.getKey(r)),
        t.setInactive(),
        this.var_1546.push(t),
        (r -= 1));
    }
  }, "onRoomObjectRemoved");
  _re21da2dd996bbd(e, r, t = !1) {
    let i = this.var_1474.getValue(e) ?? null;
    r == null && i != null
      ? this._rac9dbf71b3740d(e)
      : r != null && i != null
        ? i._rfa3b19870e1121(r)
        : r != null &&
          i == null &&
          this.reuseOrCreateBubble(
            r,
            e,
            e.getId(),
            this.roomEngineServices._r1f8216bd70800f(e.getType()),
            t,
          );
  }
  get roomEngineServices() {
    return this._roomEvents.roomEngine;
  }
  _r13a96bd0156d7d(e) {
    (Ng.removeFiltersFromFurni(e, this.var_150), this._rac9dbf71b3740d(e));
  }
  _r983dc67d187969(e) {
    (e.getModelController().setNumber(RoomObjectVariableEnum.AVATAR_WIRED_VARIABLE_HOLDER_HIGHLIGHT, 0), this._rac9dbf71b3740d(e));
  }
  _rac9dbf71b3740d(e) {
    let r = this.var_1474.remove(e);
    r != null && (r.setInactive(), this.var_1546.push(r));
  }
  reuseOrCreateBubble(e, r, t, i, s) {
    let o;
    return (
      this.var_1546.length > 0
        ? (o = this.var_1546.pop())
        : (o = new ZWe(this._roomEvents)),
      this.var_1474.add(r, o),
      o.setActive(e, t, i, s),
      o
    );
  }
  _r10ae1e3106e7d8(e) {
    return e < 0
      ? ((e = -e),
        this._roomEvents.roomEngine._ra1f5cb56d0c2d8(
          this._roomEvents.roomId,
          e,
          RoomObjectCategoryEnum.const_909,
        ))
      : this._roomEvents.roomEngine._ra1f5cb56d0c2d8(
          this._roomEvents.roomId,
          e,
          RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
        );
  }
  _r5a2ce39dcc8d89(e) {
    return this._roomEvents.roomEngine._ra1f5cb56d0c2d8(
      this._roomEvents.roomId,
      e,
      RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
    );
  }
}
