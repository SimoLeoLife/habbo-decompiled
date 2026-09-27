// Extracted from HabboAirLauncher.deobf.js, line 29002.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ifd7c1208e3417e

class extends M {
  constructor(
    r = "",
    t = !1,
    i = !1,
    s = 0,
    o = 0,
    d = null,
    c = !1,
    f = !1,
    l = !1,
    b = !1,
    _ = 0,
    h = s,
    p = o,
    m = 0,
  ) {
    super(r, t, i);
    this.localX = s;
    this.localY = o;
    this._r64f0a763eb178e = d;
    this.ctrlKey = c;
    this.altKey = f;
    this.shiftKey = l;
    this.buttonDown = b;
    this.delta = _;
    this.stageX = h;
    this.stageY = p;
    this.clickCount = m;
  }
  static {
    n(this, "UnkClass_fd7c12");
  }
  static CLICK = "click";
  static DOUBLE_CLICK = "doubleClick";
  static _r9001c395573374 = "mouseDown";
  static _ra93f33360c3a28 = "mouseUp";
  static var_370 = "mouseMove";
  static _r0f980b14ecbc94 = "mouseOver";
  static _rbf5bc4e563fc08 = "mouseOut";
  static ROLL_OUT = "rollOut";
  static ROLL_OVER = "rollOver";
  static _r8ea9e83cdee875 = "mouseWheel";
  static _r16434e347f72e9 = "mouseWheelHorizontal";
}
