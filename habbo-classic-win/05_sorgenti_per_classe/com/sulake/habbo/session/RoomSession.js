// Extracted from HabboAirLauncher.deobf.js, line 301869.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/RoomSession.as
// Obfuscated name: _i8fbae7bfabb6c5

class a {
  static {
    n(this, "RoomSession");
  }
  static CHAT_LAG_WARNING_LIMIT = 2500;
  var_36 = null;
  var_2440 = 0;
  _password = "";
  _r5580bed11d1a24 = !1;
  _rfff35490693bf7 = "";
  _r4d4bbd1cd384e8 = null;
  _state = RoomSessionEvent.const_481;
  _r55f7286908b6b7 = new nIe();
  _rbc38de9b6903b5 = -1;
  var_2665 = !1;
  var_2155 = RoomControllerLevelEnum.NOT_CONTROLLER;
  _playTestMode = !1;
  _tradeMode = Kl.NO_TRADING;
  _isGuildRoom = !1;
  _rc8b60adc95c937 = !1;
  _r8102f46ecfdf10 = !1;
  _doorMode = 0;
  _r1a42b93f4a1ae8 = new B();
  var_3163 = 0;
  _r49621084c4a423 = null;
  _rd40b94b146a844 = !1;
  _r34e787ef3e32c2 = !1;
  _rd75f8f6ec99694 = !1;
  var_2763 = null;
  set connection(e) {
    e != null &&
      ((this.var_36 = e), this._r55f7286908b6b7 != null && (this._r55f7286908b6b7.connection = e));
  }
  get roomId() {
    return this.var_2440;
  }
  set roomId(e) {
    this.var_2440 = e;
  }
  get _r75cd8efc1f254b() {
    return this._password;
  }
  set _r75cd8efc1f254b(e) {
    this._password = e;
  }
  get _rcc4ba2911da272() {
    return this._rfff35490693bf7;
  }
  set _rcc4ba2911da272(e) {
    this._rfff35490693bf7 = e;
  }
  get _r2c6cd1cf66bdb7() {
    return this._r4d4bbd1cd384e8;
  }
  set _r2c6cd1cf66bdb7(e) {
    this._r4d4bbd1cd384e8 = e;
  }
  get state() {
    return this._state;
  }
  get _r697386a8fb5bf8() {
    return this._r49621084c4a423;
  }
  set _r697386a8fb5bf8(e) {
    this._r49621084c4a423 = e;
  }
  get _r4f0e849e5080b6() {
    return this._r34e787ef3e32c2;
  }
  set _r4f0e849e5080b6(e) {
    this._r34e787ef3e32c2 = e;
  }
  get _r3d55e7f65e7db4() {
    return this.var_2763;
  }
  set _r3d55e7f65e7db4(e) {
    this.var_2763 = e;
  }
  get playTestMode() {
    return this._playTestMode;
  }
  set playTestMode(e) {
    this._playTestMode = e;
  }
  get getUserDataByIndex() {
    return this._r55f7286908b6b7;
  }
  get ownUserRoomId() {
    return this._rbc38de9b6903b5;
  }
  set ownUserRoomId(e) {
    this._rbc38de9b6903b5 = e;
  }
  get isRoomOwner() {
    return this.var_2665;
  }
  set isRoomOwner(e) {
    this.var_2665 = e;
  }
  get tradeMode() {
    return this._tradeMode;
  }
  set tradeMode(e) {
    this._tradeMode = e;
  }
  get isGuildRoom() {
    return this._isGuildRoom;
  }
  set isGuildRoom(e) {
    this._isGuildRoom = e;
  }
  get _rf742cf771d167a() {
    return this._doorMode;
  }
  set _rf742cf771d167a(e) {
    this._doorMode = e;
  }
  get _r53892118edc559() {
    return this._rc8b60adc95c937;
  }
  set _r53892118edc559(e) {
    this._rc8b60adc95c937 = e;
  }
  get _r278a8fdc24e036() {
    return this._r8102f46ecfdf10;
  }
  set _r278a8fdc24e036(e) {
    this._r8102f46ecfdf10 = e;
  }
  get _r6354e1a24791d4() {
    return this.var_2665;
  }
  get isUserDecorating() {
    return this._rd40b94b146a844;
  }
  set isUserDecorating(e) {
    this._rd40b94b146a844 = e;
  }
  get _r8ec4d4e5126874() {
    return this._rd75f8f6ec99694;
  }
  set _r8ec4d4e5126874(e) {
    this._rd75f8f6ec99694 = e;
  }
  set _r7e20243466a613(e) {
    this._r5580bed11d1a24 = e;
  }
  dispose() {
    ((this.var_36 = null),
      this._r55f7286908b6b7?.dispose(),
      (this._r55f7286908b6b7 = null),
      this._r1a42b93f4a1ae8.dispose(),
      this._r4d4bbd1cd384e8?.dispose(),
      (this._r4d4bbd1cd384e8 = null),
      (this.var_2763 = null));
  }
  _rff30e139de703a(e, r, t) {
    this._r49621084c4a423?._rff30e139de703a(e, r, t);
  }
  start() {
    return this._state !== RoomSessionEvent.const_481 || this.var_36 == null
      ? !1
      : ((this._state = RoomSessionEvent.const_1398),
        this._r5580bed11d1a24
          ? !0
          : this._r4d4bbd1cd384e8 != null
            ? this._rd11485279b1b3e()
            : this._r781632f608859a());
  }
  reset(e) {
    e !== this.var_2440 &&
      ((this.var_2440 = e),
      (this.var_2665 = !1),
      (this.var_2155 = RoomControllerLevelEnum.NOT_CONTROLLER),
      (this._tradeMode = Kl.NO_TRADING),
      (this._rc8b60adc95c937 = !1));
  }
  _r781632f608859a() {
    return this.var_36 == null
      ? !1
      : (this.var_36.send(new class_1959(this.var_2440, this._password)), !0);
  }
  _rd11485279b1b3e() {
    return this.var_36 == null || this._r4d4bbd1cd384e8 == null
      ? !1
      : (this.var_36.send(this._r4d4bbd1cd384e8), (this._r4d4bbd1cd384e8 = null), !0);
  }
  sendChatMessage(e, r = 0) {
    if (this.var_36 != null) {
      if (this._r34e787ef3e32c2) {
        this.var_36.send(new Game2GameChatMessageComposer(e));
        return;
      }
      ((e = e.replace(/&#[0-9]+;/g, "")),
        this.var_36.send(new class_2213(e, r, this.var_3163)),
        this._r1a42b93f4a1ae8.add(this.var_3163, _ia411d8d8194a3a()),
        this.var_3163++);
    }
  }
  _rad0e72dfcb7690(e) {
    this.var_36?.send(new UnkMessageComposer_1args_933fbf(e));
  }
  _r1c87b345c03870(e) {
    let r = this._r1a42b93f4a1ae8.remove(e);
    if (r != null) {
      let t = _ia411d8d8194a3a();
      t - r > a.CHAT_LAG_WARNING_LIMIT && this._r49621084c4a423?._r74ee831af16cd2(t);
    }
  }
  _rec2d495e464b4a(e, r = 0) {
    this.var_36?.send(new class_2928(e, r));
  }
  _r7d281f9eecc290(e, r, t = 0) {
    this.var_36?.send(new UnkMessageComposer_3args_7df365(e, r, t));
  }
  _rc9b808d53b4394(e) {
    this.var_36 != null && this.var_36.send(e ? new UnkMessageComposer_0args_536f63() : new UnkMessageComposer_0args_50278e());
  }
  _r6e27274f7e1fce(e) {
    this.var_36?.send(new class_2854(e));
  }
  _r59b7b374d3ce71(e) {
    e >= 0 && e <= 17 && this.var_36?.send(new UnkMessageComposer_1args_9760cc(e));
  }
  _r30bc5499d7b3f1(e) {
    this.var_36?.send(new UnkMessageComposer_1args_7b79c2(e));
  }
  _rfb5e330b42c7cc(e) {
    this.var_36?.send(new UnkMessageComposer_1args_f19dab(e));
  }
  _rc40695c1d8b269(e) {
    this.var_36?.send(new UnkMessageComposer_1args_87f2c6(e));
  }
  _r49fac7bf5a9e98(e) {
    this.var_36?.send(new UnkMessageComposer_1args_9e3ff8(e));
  }
  _r87b5fc151728c2(e, r) {
    this.var_36?.send(new class_3119(e, r));
  }
  _rd78a93ddd78734(e) {
    this.var_36?.send(new UnkMessageComposer_1args_4e4d0b(e));
  }
  sendRoomDimmerSavePresetMessage(e, r, t, i, s, o) {
    let d = `000000${t.toString(16).toUpperCase()}`,
      c = `#${d.substring(d.length - 6)}`;
    this.var_36?.send(new class_3278(e, r, c, i, s, o));
  }
  _r1f03560fb6a298(e) {
    this.var_36?.send(new UnkMessageComposer_1args_74bcb1(e));
  }
  sendConversionPoint(e, r, t, i = null, s = 0) {
    this.var_36?.send(new class_2154(e, r, t, i ?? void 0, s));
  }
  _red9476d85d4b2a(e) {
    this.var_36?.send(new UnkMessageComposer_1args_dbfc64(e));
  }
  _r9b5c8fb7c81f37(e) {
    this.var_36?.send(new UnkMessageComposer_1args_0f924b(e));
  }
  _re4249a848ae2f4(e, r, t) {
    this.var_36?.send(new UnkMessageComposer_3args_b7a2f8(e, r, t));
  }
  _r7f04f4a5409864(e) {
    this.var_36?.send(new UnkMessageComposer_1args_a34226(e));
  }
  _r5c64651c6f6754(e) {
    this.var_36?.send(new UnkMessageComposer_1args_bf6921(e));
  }
  _rb4925ed92d76f6(e) {
    this.var_36?.send(new class_1959(e));
  }
  _r390f3cb9113fbd(e) {
    this.var_36?.send(new UnkMessageComposer_1args_31de52(e));
  }
  _ra690cbac88ff9f(e) {
    this.var_36?.send(new UnkMessageComposer_1args_497b48(e));
  }
  _rc9068f73ae7c88(e) {
    this.var_36?.send(new UnkMessageComposer_1args_ac32b5(e));
  }
  _r14e75314f45252(e, r) {
    this.var_36?.send(new UnkMessageComposer_3args_0175aa(e, r, this.roomId));
  }
  _rda7fc83798fe38(e, r) {
    this.var_36?.send(new UnkMessageComposer_3args_55471e(e, r, this.roomId));
  }
  _r780ab6fc9d62c9(e) {
    this.var_36?.send(new UnkMessageComposer_2args_56c2e9(e, this.roomId));
  }
  _r69ead8a4e8c7ca(e) {
    this.var_36?.send(new UnkMessageComposer_1args_aaec2d(e));
  }
  _r230e543f5db627(e) {
    this.var_36?.send(new UnkMessageComposer_1args_08ea7a([e]));
  }
  _rc284277108cc95(e, r) {
    this.var_36?.send(new class_3183(e, r));
  }
  _rd761fc0a324cdb(e) {
    this.var_36?.send(new UnkMessageComposer_1args_7db185(e));
  }
  _r54d01dc75cf651(e) {
    this.var_36?.send(new UnkMessageComposer_2args_585389(e, !0));
  }
  _r6b5f160ee76b04(e) {
    this.var_36?.send(new UnkMessageComposer_1args_627479(e));
  }
  _r41abbfb66c8864(e) {
    this.var_36?.send(new UnkMessageComposer_1args_149c94(e));
  }
  _rf4ab72ca4540f2(e) {
    this.var_36?.send(new UnkMessageComposer_2args_585389(e, !1));
  }
  _r466e7d59e930e4(e) {
    this.var_36?.send(new UnkMessageComposer_1args_2857d9(e));
  }
  _rf3dc09fc3edb3f(e) {
    this.var_36?.send(new UnkInterface_32a722(e));
  }
  _r4fd619055f8d62(e) {
    this.var_36?.send(new UnkInterface_3a0f00(e));
  }
  _re056cbca2bc4ec(e) {
    this.var_36?.send(new UnkMessageComposer_1args_5350dd(e));
  }
  _ra19afb8286db94(e, r) {
    this.var_36?.send(new UnkMessageComposer_2args_353435(e, r));
  }
  _r26f0b6932b58bf(e) {
    this.var_36?.send(new class_3808(e));
  }
  _r369c096dd8868a() {
    this.var_36?.send(new UnkMessageComposer_0args_8035f3());
  }
  quit() {
    this.var_36?.send(new class_2551());
  }
  _rd7a2debfe8e913(e) {
    this.var_36?.send(new UnkMessageComposer_1args_4aee1d(e));
  }
  _r2ffbc65ebca8f8(e, r, t) {
    if (this.var_36 == null) return;
    let i = new UnkMessageComposer_3args_150670(e, r, t);
    (this.var_36.send(i), i.dispose());
  }
  get _rea9739215487be() {
    return this._playTestMode ? RoomControllerLevelEnum.NOT_CONTROLLER : this.var_2155;
  }
  set _rea9739215487be(e) {
    this.var_2155 = e >= RoomControllerLevelEnum.NOT_CONTROLLER && e <= RoomControllerLevelEnum.MODERATOR ? e : RoomControllerLevelEnum.NOT_CONTROLLER;
  }
  get _r9ab0d525741546() {
    return !0;
  }
  get _r7bd8b4ae779c01() {
    return this._doorMode === Sd.const_78;
  }
}
