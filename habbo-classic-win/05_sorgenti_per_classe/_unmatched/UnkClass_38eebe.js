// Extracted from HabboAirLauncher.deobf.js, line 249036.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i38eebeab0dc4fe

class {
  constructor(e, r, t, i) {
    this._frame = e;
    this._main = r;
    this._userId = i;
    t.procedure = this.onClick;
  }
  static {
    n(this, "UnkClass_38eebe");
  }
  onClick = n((e) => {
    e.type === u.CLICK &&
      this._main._r2512b8a3ecad84.show(
        new UserInfoFrameCtrl(this._main, this._userId),
        this._frame,
        !1,
        !1,
        !0,
      );
  }, "onClick");
}
