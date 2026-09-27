// Estratto da HabboAirLauncher.deobf.js, riga 245768.

class {
  constructor(e, r, t, i, s = 0, o = null, d = null, c = "", f = 0) {
    this._type = e;
    this.var_4728 = r;
    this.var_1065 = t;
    this._rb0330c0826fcca = i;
    this.var_1250 = s;
    this._senderName = o;
    this._r39c9c0cc506f79 = d;
    this.var_3514 = c;
    this._rb01983dacf411d = f;
    this._r5757a03f5a870c = _ia411d8d8194a3a();
  }
  static {
    n(this, "_i24f5eb0f99123f");
  }
  static _ra5a0fb67f250a1 = 1;
  static _rb11fd70417dcc4 = 2;
  static _r0b67f3f4892a4a = 3;
  static _r09781670a88dc4 = 4;
  static _r50e18e0efc3142 = 5;
  _r5757a03f5a870c;
  get type() {
    return this._type;
  }
  get _r1d27619fc3477e() {
    return this.var_4728;
  }
  get message() {
    return this.var_1065;
  }
  get messageText() {
    return this.var_1065.type === no.name_2 ? this.var_1065._r590202b22defda : "";
  }
  get senderId() {
    return this.var_1250;
  }
  get senderName() {
    return this._senderName;
  }
  get _rfafd7e4c8717e5() {
    return this._r39c9c0cc506f79;
  }
  get _rb953ed8aae52e3() {
    return this._rb01983dacf411d;
  }
  get messageId() {
    return this.var_3514;
  }
  get _r672f7777815dd8() {
    let e = Math.floor((_ia411d8d8194a3a() - this._r5757a03f5a870c) / 1e3);
    return this._rb0330c0826fcca + e;
  }
  _r8d58063461d151() {
    return Date.now() - this._r672f7777815dd8 * 1e3;
  }
  _rc6358d230644b4(e) {
    this.var_1065.type === no.name_2 &&
      (this.var_1065 = no.text(`${e}
${this.messageText}`));
  }
  _recf7cf27556a15() {
    return this._rb01983dacf411d !== 0;
  }
  _r6339c846cff861(e, r) {
    ((this._rb01983dacf411d = 0), (this.var_1065 = e), (this.var_3514 = r));
  }
}
