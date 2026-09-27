// Estratto da HabboAirLauncher.deobf.js, riga 298396.

class extends h_ {
  static {
    n(this, "_i8eba673f438fb6");
  }
  _rdca5e5b339eff9 = 0;
  _r4f67603cd6039b = 0;
  _re87bf28161d480 = 0;
  _selected = !1;
  _raf8500e8331b79 = null;
  var_521 = null;
  _r42cd02054cb074 = !1;
  _r9445864977b4d3 = 0;
  _rb0d031f59c1daa = 0;
  _r1240fa94f87736 = 0;
  _r45e5468a5c79e0 = 0;
  _directions = [];
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [
      RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_CLICK,
      RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_ENTER,
      RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_LEAVE,
      RoomObjectMoveEvent.const_1059,
    ]);
  }
  dispose() {
    (this._selected &&
      this.object != null &&
      this._r11e12b4ff1ca8e != null &&
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectMoveEvent(RoomObjectMoveEvent.const_396, this.object)),
      (this._directions = []),
      super.dispose(),
      (this._raf8500e8331b79 = null),
      (this.var_521 = null));
  }
  set roomData(e) {
    this.var_521 = e;
  }
  get roomData() {
    return this.var_521;
  }
  get _rb4c6d05a1b4331() {
    return this.var_521 == null ? null : this.var_521._rb4c6d05a1b4331;
  }
  initialize(e) {
    if ((super.initialize(e), (this._directions = []), e == null || this.object == null)) return;
    let r = ["id"],
      t = e.child("model").child("directions").child("direction");
    for (let i of t.toArray())
      !(i instanceof Object) ||
        !da.checkRequiredAttributes(i, r) ||
        this._directions.push(Number.parseInt(String(i.attribute("id")), 10));
    (this._directions.sort((i, s) => i - s),
      this.object.getModelController()._rdb7eb41dc3ec2c(RoomObjectVariableEnum.PET_ALLOWED_DIRECTIONS, this._directions, !0));
  }
  processUpdateMessage(e) {
    if (e == null || this.object == null) return;
    let r = this.object.getModelController();
    if (!this._r42cd02054cb074) {
      if ((super.processUpdateMessage(e), this._rd5bdc3a597518f(e))) return;
      if (e instanceof _i6cf23aa1345e3c) {
        r.setString(RoomObjectVariableEnum.AVATAR_POSTURE, e._r78db360a2bb963);
        return;
      }
      if (e instanceof _i88a38763d260b0) {
        r.setNumber(RoomObjectVariableEnum.const_1078, e._ra08dca6c50b716);
        return;
      }
      if (e instanceof _i0420b143d54452) {
        r.setNumber(RoomObjectVariableEnum.const_1078, e._ra08dca6c50b716);
        return;
      }
      if (e instanceof _i01dad10f9d4341) {
        (r.setNumber(RoomObjectVariableEnum.AVATAR_TALK, 1), (this._rdca5e5b339eff9 = _ia411d8d8194a3a() + e._rd0f6d617e52d4b * 1e3));
        return;
      }
      if (e instanceof _i6627f42ce5755e) {
        (r.setString(RoomObjectVariableEnum.AVATAR_GESTURE, e.gesture), (this._r4f67603cd6039b = _ia411d8d8194a3a() + 3e3));
        return;
      }
      if (e instanceof _i65644137156476) {
        r.setNumber(RoomObjectVariableEnum.const_307, Number(e._rcb843a2006f374));
        return;
      }
    }
    if (e instanceof _ib9b36ff7f03806) {
      ((this._selected = e.selected), (this._raf8500e8331b79 = null));
      return;
    }
    if (e instanceof _ib11dce6351722d) {
      (r.setNumber(RoomObjectVariableEnum.AVATAR_EXPERIENCE_TIMESTAMP, _ia411d8d8194a3a()), r.setNumber(RoomObjectVariableEnum.const_1157, e._r15293165089ba0));
      return;
    }
    if (e instanceof RoomObjectAvatarFigureUpdateMessage) {
      let t = new class_3800(e.figure);
      (r.setString(RoomObjectVariableEnum.AVATAR_FIGURE, e.figure),
        r.setString(RoomObjectVariableEnum.const_1193, e.race ?? ""),
        r.setNumber(RoomObjectVariableEnum.PET_PALETTE_INDEX, t.paletteId),
        r.setNumber(RoomObjectVariableEnum.PET_COLOR, t.color),
        r.setNumber(RoomObjectVariableEnum.PET_TYPE, t.typeId),
        r._rdb7eb41dc3ec2c(RoomObjectVariableEnum.PET_CUSTOM_LAYER_IDS, t._ra07c7d9b3783e1),
        r._rdb7eb41dc3ec2c(RoomObjectVariableEnum.PET_CUSTOM_PART_IDS, t._r277c39797bd982),
        r._rdb7eb41dc3ec2c(RoomObjectVariableEnum.PET_CUSTOM_PALETTE_IDS, t._r23313da862e394),
        r.setNumber(RoomObjectVariableEnum.PET_IS_RIDING, e.isRiding ? 1 : 0));
    }
  }
  mouseEvent(e, r) {
    if (this.object == null) return;
    let t = this.object.getModelController(),
      i = null;
    switch (e.type) {
      case _ifd7c1208e3417e.CLICK:
        ((i = RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_CLICK), this._r42cd02054cb074 && this._re990e0e6947566(e));
        break;
      case _ifd7c1208e3417e.ROLL_OVER:
        (this._rd21b5bb3ec9fd4(!0), (i = RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_ENTER));
        break;
      case _ifd7c1208e3417e.ROLL_OUT:
        (this._rd21b5bb3ec9fd4(!1), (i = RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_LEAVE));
        break;
      case _ifd7c1208e3417e.DOUBLE_CLICK:
        break;
      case _ifd7c1208e3417e._r9001c395573374:
        this._r42cd02054cb074 ||
          (t._ra3dc9a405b5c73(RoomObjectVariableEnum.PET_TYPE) === class_3447.MONSTERPLANT &&
            this._r11e12b4ff1ca8e != null &&
            this._r11e12b4ff1ca8e.dispatchEvent?.(
              new RoomObjectMouseEvent(
                RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_DOWN,
                this.object,
                e.eventId,
                e.altKey,
                e.ctrlKey,
                e.shiftKey,
                e.buttonDown,
              ),
            ));
        break;
    }
    i != null &&
      this._r11e12b4ff1ca8e != null &&
      this._r11e12b4ff1ca8e.dispatchEvent?.(
        new RoomObjectMouseEvent(i, this.object, e.eventId, e.altKey, e.ctrlKey, e.shiftKey, e.buttonDown),
      );
  }
  update(e) {
    if ((super.update(e), this._selected && this.object != null && this._r11e12b4ff1ca8e != null)) {
      let t = this.object.getLocation();
      t != null &&
        (this._raf8500e8331b79 == null ||
          this._raf8500e8331b79.x !== t.x ||
          this._raf8500e8331b79.y !== t.y ||
          this._raf8500e8331b79.z !== t.z) &&
        (this._raf8500e8331b79 == null && (this._raf8500e8331b79 = new k()),
        this._raf8500e8331b79.assign(t),
        this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectMoveEvent(RoomObjectMoveEvent.const_1059, this.object)));
    }
    let r = this.object?.getModelController();
    r != null && this._r449b626ad44655(e, r);
  }
  _re990e0e6947566(e) {
    if (this.object == null) return;
    let r = this.object.getModelController(),
      t;
    !e.altKey && !e.ctrlKey
      ? ((t = this._directions[this._r45e5468a5c79e0] ?? 0),
        this.object.setDirection(new k(t)),
        r.setNumber(RoomObjectVariableEnum.const_1078, t + this._r1240fa94f87736),
        this._r45e5468a5c79e0++,
        this._r45e5468a5c79e0 === this._directions.length && (this._r45e5468a5c79e0 = 0))
      : e.altKey && !e.ctrlKey
        ? (this._r9445864977b4d3++,
          r.setNumber(RoomObjectVariableEnum.AVATAR_POSTURE, this._r9445864977b4d3),
          r.setNumber(RoomObjectVariableEnum.AVATAR_GESTURE, Number.NaN))
        : e.ctrlKey && !e.altKey
          ? (this._rb0d031f59c1daa++, r.setNumber(RoomObjectVariableEnum.AVATAR_GESTURE, this._rb0d031f59c1daa))
          : ((this._r1240fa94f87736 += 45),
            this._r1240fa94f87736 > 45 && (this._r1240fa94f87736 = -45),
            (t = this.object.getDirection()?.x ?? 0),
            r.setNumber(RoomObjectVariableEnum.const_1078, t + this._r1240fa94f87736));
  }
  _r449b626ad44655(e, r) {
    (this._r4f67603cd6039b > 0 &&
      e > this._r4f67603cd6039b &&
      (r.setString(RoomObjectVariableEnum.AVATAR_GESTURE, ""), (this._r4f67603cd6039b = 0)),
      this._rdca5e5b339eff9 > 0 &&
        e > this._rdca5e5b339eff9 &&
        (r.setNumber(RoomObjectVariableEnum.AVATAR_TALK, 0), (this._rdca5e5b339eff9 = 0)),
      this._re87bf28161d480 > 0 &&
        e > this._re87bf28161d480 &&
        (r.setNumber(RoomObjectVariableEnum.const_456, 0), (this._re87bf28161d480 = 0)));
  }
}
