// Estratto da HabboAirLauncher.deobf.js, riga 135030.

class a {
  static {
    n(this, "_id9262639da5348");
  }
  static _type = class_3421.DEFAULT;
  static _r448919959a600d = null;
  static var_679 = !0;
  static _disposed = !1;
  static _r933be6c9b94a2e = !0;
  static _r9c46268e711d75 = null;
  static _re107740cf6230c = new Map();
  constructor(e) {
    a._r448919959a600d = e.stage;
  }
  static dispose() {
    this._disposed ||
      (this._r9c46268e711d75 != null &&
        this._r448919959a600d != null &&
        (this._r448919959a600d.removeChild(this._r9c46268e711d75),
        this._r448919959a600d.removeEventListener?.(M.MOUSE_LEAVE, this._r6b287e242c73ca),
        this._r448919959a600d.removeEventListener?.(_ifd7c1208e3417e.var_370, this._r5d8882bc585dc8),
        this._r448919959a600d.removeEventListener?.(_ifd7c1208e3417e._r0f980b14ecbc94, this._r5d8882bc585dc8),
        this._r448919959a600d.removeEventListener?.(_ifd7c1208e3417e._rbf5bc4e563fc08, this._r5d8882bc585dc8)),
      (this._disposed = !0));
  }
  static get disposed() {
    return this._disposed;
  }
  static get type() {
    return this._type;
  }
  static set type(e) {
    this._type !== e && ((this._type = e), (this._r933be6c9b94a2e = !0));
  }
  static get visible() {
    return this.var_679;
  }
  static set visible(e) {
    ((this.var_679 = e),
      this.var_679
        ? this._r9c46268e711d75 != null
          ? (this._r9c46268e711d75.visible = !0)
          : _idb4c110baa8f94.show()
        : this._r9c46268e711d75 != null
          ? (this._r9c46268e711d75.visible = !1)
          : _idb4c110baa8f94.hide());
  }
  static change() {
    if (!this._r933be6c9b94a2e) return;
    let e = this._re107740cf6230c.get(this._type) ?? null;
    if (e != null)
      (this._r9c46268e711d75 != null && this._r448919959a600d != null
        ? this._r448919959a600d.removeChild(this._r9c46268e711d75)
        : this._r448919959a600d != null &&
          (this._r448919959a600d.addEventListener?.(M.MOUSE_LEAVE, this._r6b287e242c73ca),
          this._r448919959a600d.addEventListener?.(_ifd7c1208e3417e.var_370, this._r5d8882bc585dc8),
          this._r448919959a600d.addEventListener?.(_ifd7c1208e3417e._r0f980b14ecbc94, this._r5d8882bc585dc8),
          this._r448919959a600d.addEventListener?.(_ifd7c1208e3417e._rbf5bc4e563fc08, this._r5d8882bc585dc8),
          _idb4c110baa8f94.hide()),
        (this._r9c46268e711d75 = e),
        this._r448919959a600d?.addChild(this._r9c46268e711d75));
    else
      switch (
        (this._r9c46268e711d75 != null &&
          this._r448919959a600d != null &&
          (this._r448919959a600d.removeChild(this._r9c46268e711d75),
          this._r448919959a600d.removeEventListener?.(M.MOUSE_LEAVE, this._r6b287e242c73ca),
          this._r448919959a600d.removeEventListener?.(_ifd7c1208e3417e.var_370, this._r5d8882bc585dc8),
          this._r448919959a600d.removeEventListener?.(_ifd7c1208e3417e._r0f980b14ecbc94, this._r5d8882bc585dc8),
          this._r448919959a600d.removeEventListener?.(_ifd7c1208e3417e._rbf5bc4e563fc08, this._r5d8882bc585dc8),
          (this._r9c46268e711d75 = null),
          _idb4c110baa8f94.show()),
        this._type)
      ) {
        case class_3421.DEFAULT:
        case class_3421.ARROW:
          _idb4c110baa8f94.cursor = Ws._ra2fbbf5cdb86ed;
          break;
        case class_3421.ARROW_LINK:
          _idb4c110baa8f94.cursor = Ws.BUTTON;
          break;
        case class_3421.DRAG:
        case class_3421.MOVE:
        case class_3421.MOVE_VERTICAL:
        case class_3421.MOVE_HORIZONTAL:
          _idb4c110baa8f94.cursor = Ws._r63ba4fae6f7f00;
          break;
        case class_3421.IBEAM:
          _idb4c110baa8f94.cursor = Ws.IBEAM;
          break;
        case class_3421.NONE:
          ((_idb4c110baa8f94.cursor = Ws._ra2fbbf5cdb86ed), _idb4c110baa8f94.hide());
          break;
      }
    this._r933be6c9b94a2e = !1;
  }
  static _r46661ce23f31da(e, r) {
    this._re107740cf6230c.set(e, r);
  }
  static _r5d8882bc585dc8 = n((...e) => {
    let r = e[0];
    this._r9c46268e711d75 != null &&
      r != null &&
      ((this._r9c46268e711d75.x = r.stageX - 2),
      (this._r9c46268e711d75.y = r.stageY),
      this._type === class_3421.DEFAULT
        ? ((this.var_679 = !1), _idb4c110baa8f94.show())
        : ((this.var_679 = !0), _idb4c110baa8f94.hide()));
  }, "_r5d8882bc585dc8");
  static _r6b287e242c73ca = n((...e) => {
    this._r9c46268e711d75 != null &&
      this._type !== class_3421.DEFAULT &&
      (_idb4c110baa8f94.hide(), (this.var_679 = !1));
  }, "_r6b287e242c73ca");
}
