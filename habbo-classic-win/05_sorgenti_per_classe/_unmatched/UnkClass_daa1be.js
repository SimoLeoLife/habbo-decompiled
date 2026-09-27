// Extracted from HabboAirLauncher.deobf.js, line 297949.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _idaa1be9491242e

class a extends h_ {
  static {
    n(this, "UnkClass_daa1be");
  }
  static _ra93eb8c795f194 = 1.5;
  static _rde2d5476196b3c = 28;
  static _r3f472efe6e7e46 = 29;
  static _rb81703ab26876b = 184;
  static _r98a0c5123abf02 = 185;
  static _rd614c23b28b3c6 = 500;
  static _r425b46389b2524 = 0;
  static _re354c1c452f0c8 = 999;
  static _r14a07da1f1c5ea = 999999999;
  static _r3ee93889bf830a = 5e3;
  static _r6b0ace2e4050de = 1500;
  static _r751b6f8dd400ea = "duck_spinning";
  static _re20d985bf3cbdb = 3200;
  static _rc7d8e6d4967bda = 100;
  static _r3be68d9374aebd = -45;
  _selected = !1;
  _raf8500e8331b79 = null;
  _r975f1b37f7bc4a = 0;
  _r85146638e5e8e3 = 0;
  _rdca5e5b339eff9 = 0;
  _r832ce37c860755 = 0;
  _rdb059d6a0711e2 = 0;
  _rcd9b8750bba282 = 0;
  _r4f67603cd6039b = 0;
  _re4332187472ab0 = 0;
  _r03c7743c9315af = 0;
  _r99e0ec5bce1cf1 = 0;
  _r09f778cd9b84b7 = !1;
  _rb346b2b29d49d1 = 0;
  _r6e348e5ceccf15 = 0;
  _r899439935a9eb9 = 0;
  _r281aeb30cb9eb6 = 0;
  _r3b10ab6fa070e5 = 0;
  _r54b2c14b9bf489 = 0;
  _r428e15ccf0fc58 = 0;
  var_521 = null;
  constructor() {
    (super(), (this._r6e348e5ceccf15 = _ia411d8d8194a3a() + this._rc5c0c67da592c7()));
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [
      RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_CLICK,
      RoomObjectMoveEvent.const_1059,
      RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_ENTER,
      RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_LEAVE,
      RoomObjectFurnitureActionEvent.CURSOR_REQUEST_BUTTON,
      RoomObjectFurnitureActionEvent.CURSOR_REQUEST_ARROW,
    ]);
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
  dispose() {
    (this._selected &&
      this.object != null &&
      this._r11e12b4ff1ca8e != null &&
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectMoveEvent(RoomObjectMoveEvent.const_396, this.object)),
      super.dispose(),
      (this._raf8500e8331b79 = null),
      (this.var_521 = null));
  }
  processUpdateMessage(e) {
    if (e == null || this.object == null) return;
    super.processUpdateMessage(e);
    let r = this.object.getModelController();
    if (!this._rd5bdc3a597518f(e)) {
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_6cf23a) {
        (r.setString(RoomObjectVariableEnum.AVATAR_POSTURE, e._r78db360a2bb963), r.setString(RoomObjectVariableEnum.AVATAR_POSTURE_PARAMETER, e.parameter));
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_01dad1) {
        (r.setNumber(RoomObjectVariableEnum.AVATAR_TALK, 1), (this._rdca5e5b339eff9 = _ia411d8d8194a3a() + e._rd0f6d617e52d4b * 1e3));
        return;
      }
      if (e instanceof RoomObjectAvatarTypingUpdateMessage) {
        r.setNumber(RoomObjectVariableEnum.AVATAR_IS_TYPING, Number(e.isTyping));
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_665e47) {
        r.setNumber(RoomObjectVariableEnum.const_611, Number(e._rf7ef7603dd1975));
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_39614b) {
        r.setNumber(RoomObjectVariableEnum.AVATAR_IS_PLAYING_GAME, Number(e._r6a64b42e17b212));
        return;
      }
      if (e instanceof UnkClass_88a387) {
        (r.setNumber(RoomObjectVariableEnum.const_1078, e._ra08dca6c50b716),
          r.setNumber(RoomObjectVariableEnum.const_332, Number(e._rcb15f009f08c62)),
          r.setNumber(RoomObjectVariableEnum.const_1013, e.baseY),
          Number.isNaN(e._rbe629e85d2be84) || r.setNumber(RoomObjectVariableEnum.AVATAR_JUMPING_POWER, e._rbe629e85d2be84));
        return;
      }
      if (e instanceof UnkRoomObjectUpdateMessageSubclass_0420b1) {
        r.setNumber(RoomObjectVariableEnum.const_1078, e._ra08dca6c50b716);
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_ae7c59) {
        (r.setNumber(RoomObjectVariableEnum.AVATAR_GESTURE, e.gesture), (this._r4f67603cd6039b = _ia411d8d8194a3a() + 3e3));
        return;
      }
      if (e instanceof RoomObjectAvatarExpressionUpdateMessage) {
        (r.setNumber(RoomObjectVariableEnum.const_456, e.expressionType),
          (this._rcd9b8750bba282 = ve._rc46a5c19ccb3ff(r._ra3dc9a405b5c73(RoomObjectVariableEnum.const_456))),
          this._rcd9b8750bba282 > -1 && (this._rcd9b8750bba282 += _ia411d8d8194a3a()));
        return;
      }
      if (e instanceof RoomObjectAvatarDanceUpdateMessage) {
        r.setNumber(RoomObjectVariableEnum.const_1195, e.danceStyle);
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_656441) {
        r.setNumber(RoomObjectVariableEnum.const_307, Number(e._rcb843a2006f374));
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_9c8705) {
        (r.setNumber(RoomObjectVariableEnum.const_1043, e.value), (this._r899439935a9eb9 = _ia411d8d8194a3a() + 3e3));
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_5c73c5) {
        let t = _ia411d8d8194a3a();
        (r.setNumber(RoomObjectVariableEnum.const_1201, e.habbiconId),
          r.setNumber(RoomObjectVariableEnum.const_308, t),
          (this._r281aeb30cb9eb6 = t + 6e3),
          this._r8d771e298f4ed3(e.habbiconId, t, r));
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_da0d62) {
        this._r5755f42e4fa022(e.effect, e._r0f4823a8cace64, r);
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_968603) {
        (r.setNumber(RoomObjectVariableEnum.const_1257, e.itemType),
          r.setNumber(RoomObjectVariableEnum.const_182, 0),
          (this._r03c7743c9315af = _ia411d8d8194a3a()),
          e.itemType < a._r14a07da1f1c5ea
            ? ((this._r99e0ec5bce1cf1 = 0),
              (this._r09f778cd9b84b7 = e.itemType <= a._re354c1c452f0c8))
            : ((this._r99e0ec5bce1cf1 = this._r03c7743c9315af + a._r6b0ace2e4050de),
              (this._r09f778cd9b84b7 = !1)));
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_a7e9a0) {
        r.setNumber(RoomObjectVariableEnum.const_182, e.itemType);
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_0afa2a) {
        (r.setNumber(RoomObjectVariableEnum.AVATAR_SIGN, e._rc0a29a81e1cf87), (this._re4332187472ab0 = _ia411d8d8194a3a() + 5e3));
        return;
      }
      if (e instanceof RoomObjectAvatarFlatControlUpdateMessage) {
        let t = Number.parseInt(e.rawData, 10);
        !Number.isNaN(t) && t >= 0 && t <= 5
          ? r.setNumber(RoomObjectVariableEnum.const_1006, t)
          : r.setNumber(RoomObjectVariableEnum.const_1006, 0);
        return;
      }
      if (e instanceof RoomObjectAvatarFigureUpdateMessage) {
        let t = r.getString(RoomObjectVariableEnum.AVATAR_FIGURE),
          i = e.figure;
        (t != null && t.indexOf(".bds-") !== -1 && (i += t.substring(t.indexOf(".bds-"))),
          r.setString(RoomObjectVariableEnum.AVATAR_FIGURE, i),
          r.setString(RoomObjectVariableEnum.AVATAR_GENDER, e.gender ?? ""));
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_d2a859) {
        r.setNumber(RoomObjectVariableEnum.const_1336, e.isBlocked ? 1 : 0);
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_b9b36f) {
        ((this._selected = e.selected), (this._raf8500e8331b79 = null));
        return;
      }
      if (e instanceof UnkRoomObjectUpdateStateMessageSubclass_749bf3) {
        r.setNumber(RoomObjectVariableEnum.AVATAR_GUIDE_STATUS, e._r116cfe0adb0d35);
        return;
      }
      e instanceof UnkRoomObjectUpdateStateMessageSubclass_30799b && r.setNumber(RoomObjectVariableEnum.AVATAR_OWN_USER, 1);
    }
  }
  mouseEvent(e, r) {
    if (this.object == null) return;
    let t = this.object.getModelController(),
      i = null;
    switch (e.type) {
      case UnkClass_fd7c12.CLICK:
        i = RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_CLICK;
        break;
      case UnkClass_fd7c12.ROLL_OVER:
        ((i = RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_ENTER),
          this._r5b16896b6c4dfd(!0),
          t?.setNumber(RoomObjectVariableEnum.AVATAR_MOUSE_HIGHLIGHT, 1),
          this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.CURSOR_REQUEST_BUTTON, this.object)));
        break;
      case UnkClass_fd7c12.ROLL_OUT:
        (this._r5b16896b6c4dfd(!1),
          t?.setNumber(RoomObjectVariableEnum.AVATAR_MOUSE_HIGHLIGHT, 0),
          (i = RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_LEAVE),
          this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.CURSOR_REQUEST_ARROW, this.object)));
        break;
      case UnkClass_fd7c12._r9001c395573374:
        this.object.getType() === Ea.RENTABLE_BOT &&
          this._r11e12b4ff1ca8e?.dispatchEvent?.(
            new RoomObjectMouseEvent(
              RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_DOWN,
              this.object,
              e.eventId,
              e.altKey,
              e.ctrlKey,
              e.shiftKey,
              e.buttonDown,
            ),
          );
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
  _rbe9d44a0b1334f(e) {
    if (this.object == null) return super._rbe9d44a0b1334f(e);
    if (e instanceof UnkClass_88a387) return e._rbe629e85d2be84;
    let r = this.object.getModelController();
    return r._ra3412bd0673156(RoomObjectVariableEnum.AVATAR_JUMPING_POWER)
      ? r._ra3dc9a405b5c73(RoomObjectVariableEnum.AVATAR_JUMPING_POWER)
      : super._rbe9d44a0b1334f(e);
  }
  _r5755f42e4fa022(e, r, t) {
    let i = t._ra3dc9a405b5c73(RoomObjectVariableEnum.const_123);
    if (e === a._rde2d5476196b3c)
      ((this._r975f1b37f7bc4a = _ia411d8d8194a3a() + a._rd614c23b28b3c6), (this._r85146638e5e8e3 = a._r3f472efe6e7e46));
    else if (e === a._rb81703ab26876b)
      ((this._r975f1b37f7bc4a = _ia411d8d8194a3a() + a._rd614c23b28b3c6), (this._r85146638e5e8e3 = a._r98a0c5123abf02));
    else if (i === a._r3f472efe6e7e46)
      ((this._r975f1b37f7bc4a = _ia411d8d8194a3a() + a._rd614c23b28b3c6),
        (this._r85146638e5e8e3 = e),
        (e = a._rde2d5476196b3c));
    else if (i === a._r98a0c5123abf02)
      ((this._r975f1b37f7bc4a = _ia411d8d8194a3a() + a._rd614c23b28b3c6),
        (this._r85146638e5e8e3 = e),
        (e = a._rb81703ab26876b));
    else if (r === 0) this._r975f1b37f7bc4a = 0;
    else {
      ((this._r975f1b37f7bc4a = _ia411d8d8194a3a() + r), (this._r85146638e5e8e3 = e));
      return;
    }
    t.setNumber(RoomObjectVariableEnum.const_123, e);
  }
  _r449b626ad44655(e, r) {
    (this._rdca5e5b339eff9 > 0 &&
      (e > this._rdca5e5b339eff9
        ? (r.setNumber(RoomObjectVariableEnum.AVATAR_TALK, 0),
          (this._rdca5e5b339eff9 = 0),
          (this._rdb059d6a0711e2 = 0),
          (this._r832ce37c860755 = 0))
        : this._r832ce37c860755 === 0 && this._rdb059d6a0711e2 === 0
          ? ((this._rdb059d6a0711e2 = e + this._rf728a93815ced0()),
            (this._r832ce37c860755 = this._rdb059d6a0711e2 + this._rb0efbf5cc5e34b()))
          : this._rdb059d6a0711e2 > 0 && e > this._rdb059d6a0711e2
            ? (r.setNumber(RoomObjectVariableEnum.AVATAR_TALK, 0), (this._rdb059d6a0711e2 = 0))
            : this._r832ce37c860755 > 0 &&
              e > this._r832ce37c860755 &&
              (r.setNumber(RoomObjectVariableEnum.AVATAR_TALK, 1), (this._r832ce37c860755 = 0))),
      this._rcd9b8750bba282 > 0 &&
        e > this._rcd9b8750bba282 &&
        (r.setNumber(RoomObjectVariableEnum.const_456, 0), (this._rcd9b8750bba282 = 0)),
      this._r4f67603cd6039b > 0 &&
        e > this._r4f67603cd6039b &&
        (r.setNumber(RoomObjectVariableEnum.AVATAR_GESTURE, 0), (this._r4f67603cd6039b = 0)),
      this._re4332187472ab0 > 0 &&
        e > this._re4332187472ab0 &&
        (r.setNumber(RoomObjectVariableEnum.AVATAR_SIGN, -1), (this._re4332187472ab0 = 0)),
      this._r99e0ec5bce1cf1 > 0 &&
        e > this._r99e0ec5bce1cf1 &&
        (r.setNumber(RoomObjectVariableEnum.const_1257, a._r425b46389b2524),
        r.setNumber(RoomObjectVariableEnum.const_182, 0),
        (this._r03c7743c9315af = 0),
        (this._r99e0ec5bce1cf1 = 0),
        (this._r09f778cd9b84b7 = !1)),
      this._r09f778cd9b84b7 &&
        e - this._r03c7743c9315af > a._r3ee93889bf830a &&
        r.setNumber(RoomObjectVariableEnum.const_182, (e - this._r03c7743c9315af) % 1e4 < 1e3 ? 1 : 0),
      e > this._r6e348e5ceccf15 &&
        (r.setNumber(RoomObjectVariableEnum.const_579, 1),
        (this._r6e348e5ceccf15 = e + this._rc5c0c67da592c7()),
        (this._rb346b2b29d49d1 = e + this._r66ac293c9bd3a3())),
      this._rb346b2b29d49d1 > 0 &&
        e > this._rb346b2b29d49d1 &&
        (r.setNumber(RoomObjectVariableEnum.const_579, 0), (this._rb346b2b29d49d1 = 0)),
      this._r975f1b37f7bc4a > 0 &&
        e > this._r975f1b37f7bc4a &&
        (r.setNumber(RoomObjectVariableEnum.const_123, this._r85146638e5e8e3), (this._r975f1b37f7bc4a = 0)),
      this._r899439935a9eb9 > 0 &&
        e > this._r899439935a9eb9 &&
        (r.setNumber(RoomObjectVariableEnum.const_1043, 0), (this._r899439935a9eb9 = 0)),
      this._r281aeb30cb9eb6 > 0 &&
        e > this._r281aeb30cb9eb6 &&
        (r.setNumber(RoomObjectVariableEnum.const_1201, 0),
        r.setNumber(RoomObjectVariableEnum.const_308, 0),
        this._re63a6430bb3cb3(r),
        (this._r281aeb30cb9eb6 = 0)),
      this._r40f969798e1a42(e, r));
  }
  _r5b16896b6c4dfd(e) {
    this._rd21b5bb3ec9fd4(e);
  }
  _r8d771e298f4ed3(e, r, t) {
    if (Dr.getHabbiconNameKey(e) === a._r751b6f8dd400ea) {
      ((this._r3b10ab6fa070e5 = r),
        (this._r54b2c14b9bf489 = r + a._re20d985bf3cbdb),
        this._rb48b8b499274d2(0, t));
      return;
    }
    this._re63a6430bb3cb3(t);
  }
  _r40f969798e1a42(e, r) {
    if (this._r54b2c14b9bf489 <= 0) return;
    if (e >= this._r54b2c14b9bf489) {
      this._re63a6430bb3cb3(r);
      return;
    }
    let t = (Math.trunc((e - this._r3b10ab6fa070e5) / a._rc7d8e6d4967bda) * a._r3be68d9374aebd) % 360;
    this._rb48b8b499274d2(t, r);
  }
  _rb48b8b499274d2(e, r) {
    this._r428e15ccf0fc58 !== e && ((this._r428e15ccf0fc58 = e), r.setNumber(RoomObjectVariableEnum.AVATAR_HABBICON_SPIN_OFFSET, e));
  }
  _re63a6430bb3cb3(e) {
    ((this._r3b10ab6fa070e5 = 0), (this._r54b2c14b9bf489 = 0), this._rb48b8b499274d2(0, e));
  }
  _rf728a93815ced0() {
    return 100 + Math.random() * 200;
  }
  _rb0efbf5cc5e34b() {
    return 75 + Math.random() * 75;
  }
  _rc5c0c67da592c7() {
    return 4500 + Math.random() * 1e3;
  }
  _r66ac293c9bd3a3() {
    return 50 + Math.random() * 200;
  }
  _r0f1fc250657773(e) {
    let r = this.object?.getLocation();
    return e == null || r == null || (r.x === 0 && r.y === 0)
      ? !1
      : Math.abs(r.x - e.x) > a._ra93eb8c795f194 || Math.abs(r.y - e.y) > a._ra93eb8c795f194;
  }
}
