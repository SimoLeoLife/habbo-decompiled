// Extracted from HabboAirLauncher.deobf.js, line 128887.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/WindowModel.as
// Obfuscated name: _i19c2b7aa5197f4

class a {
  static {
    n(this, "WindowModel");
  }
  static POINT_ZERO = new E(0, 0);
  _offsetX = 0;
  _offsetY = 0;
  _x = 0;
  _y = 0;
  var_31 = 0;
  var_35 = 0;
  _r97aa2700f3e085 = new D(0, 0, 0, 0);
  _ra13d297b00d7cc = new D(0, 0, 0, 0);
  _rfa53771e154729 = null;
  _r09b1b25066beec = null;
  _context = null;
  _background = !1;
  _fillColor = 16777215;
  _rebcf23ea644af7 = null;
  _r1f783655234401 = 0;
  var_1157 = 10;
  _r25091170f6af1f = !1;
  _r9354169f249129 = !0;
  var_679 = !0;
  var_1119 = 1;
  var_45 = 0;
  _state = class_1948.WINDOW_STATE_DEFAULT;
  _style = 0;
  _type = 0;
  _caption = "";
  _name = "";
  _id = 0;
  var_598 = null;
  _disposed = !1;
  _r5ba95e2e2bce18 = "";
  constructor() {}
  _radeee3a6413f2a(e, r, t, i, s, o, d, c = null, f = "") {
    ((this._id = e),
      (this._name = r),
      (this._type = t),
      (this.var_45 = s),
      (this._state = class_1948.WINDOW_STATE_DEFAULT),
      (this._style = i),
      (this.var_598 = c),
      (this._context = o),
      (this._r5ba95e2e2bce18 = f),
      (this._x = d.x),
      (this._y = d.y),
      (this.var_31 = d.width),
      (this.var_35 = d.height),
      (this._r97aa2700f3e085 = d.clone()),
      (this._ra13d297b00d7cc = d.clone()));
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get width() {
    return this.var_31;
  }
  get height() {
    return this.var_35;
  }
  get position() {
    return new E(this._x, this._y);
  }
  get rectangle() {
    return new D(this._x, this._y, this.var_31, this.var_35);
  }
  get context() {
    return this._context;
  }
  get mouseThreshold() {
    return this.var_1157;
  }
  get disposed() {
    return this._disposed;
  }
  get background() {
    return this._background;
  }
  get clipping() {
    return this._r9354169f249129;
  }
  get visible() {
    return this.var_679;
  }
  get color() {
    return this._fillColor;
  }
  get alpha() {
    return this._r1f783655234401 >>> 24;
  }
  get blend() {
    return this.var_1119;
  }
  get param() {
    return this.var_45;
  }
  get state() {
    return this._state;
  }
  get style() {
    return this._style;
  }
  get type() {
    return this._type;
  }
  get caption() {
    return this._caption;
  }
  get name() {
    return this._name;
  }
  get id() {
    return this._id;
  }
  get tags() {
    return this.var_598 ?? (this.var_598 = []);
  }
  get left() {
    return this._x;
  }
  get top() {
    return this._y;
  }
  get right() {
    return this._x + this.var_31;
  }
  get bottom() {
    return this._y + this.var_35;
  }
  get renderingX() {
    return this._offsetX + this._x;
  }
  get renderingY() {
    return this._offsetY + this._y;
  }
  get renderingWidth() {
    return this.var_31 + Math.abs(this.etchingPoint.x);
  }
  get renderingHeight() {
    return this.var_35 + Math.abs(this.etchingPoint.y);
  }
  get renderingRectangle() {
    return new D(this.renderingX, this.renderingY, this.renderingWidth, this.renderingHeight);
  }
  get etchingPoint() {
    return a.POINT_ZERO;
  }
  get dynamicStyle() {
    return this._r5ba95e2e2bce18;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this._context = null),
      (this._state = class_1948.WINDOW_STATE_DESTROYING),
      (this.var_598 = null),
      (this._x = 0),
      (this._y = 0),
      (this.var_31 = 0),
      (this.var_35 = 0));
  }
  invalidate(e = null) {}
  _r8a2682e2ce9c24() {
    return this._r97aa2700f3e085.width;
  }
  _r9691c14eca22b6() {
    return this._r97aa2700f3e085.height;
  }
  _rf764cdab6ecafa() {
    return this._ra13d297b00d7cc.width;
  }
  _r125b4a66546e7f() {
    return this._ra13d297b00d7cc.height;
  }
  _r3d3015e98f58d0() {
    return this._rfa53771e154729?.width ?? 0;
  }
  _r97ff2d409bec80() {
    return this._rfa53771e154729?.height ?? 0;
  }
  _r5779fce80e48e2() {
    return this._r09b1b25066beec?.width ?? Number.MAX_SAFE_INTEGER;
  }
  _r099303750c7f77() {
    return this._r09b1b25066beec?.height ?? Number.MAX_SAFE_INTEGER;
  }
  testTypeFlag(e, r = 0) {
    return r > 0 ? ((this._type & r) ^ e) === 0 : (this._type & e) === e;
  }
  testStateFlag(e, r = 0) {
    return r > 0 ? ((this._state & r) ^ e) === 0 : (this._state & e) === e;
  }
  testStyleFlag(e, r = 0) {
    return r > 0 ? ((this._style & r) ^ e) === 0 : (this._style & e) === e;
  }
  testParamFlag(e, r = 0) {
    return r > 0 ? ((this.var_45 & r) ^ e) === 0 : (this.var_45 & e) === e;
  }
}
