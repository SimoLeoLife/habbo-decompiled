// Estratto da HabboAirLauncher.deobf.js, riga 249036.

class {
  constructor(e, r, t, i) {
    this._frame = e;
    this._main = r;
    this._userId = i;
    t.procedure = this.onClick;
  }
  static {
    n(this, "_i38eebeab0dc4fe");
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
