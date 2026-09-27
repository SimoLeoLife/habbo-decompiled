// Extracted from HabboAirLauncher.deobf.js, line 211504.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/view/tabs/tokens/Token.as

class a {
  constructor(e) {
    this._r6f10e127997a58 = e;
  }
  static {
    n(this, "Token");
  }
  static TITLE = "title";
  static MESSAGE = "message";
  static _r98c73cf2241927 = new D(0, 0, 25, 25);
  static _rce8949a81a2b3b;
  static _rad343022c053c0;
  static _GAMES;
  static set _r4280a9b33bac0a(e) {
    this._rce8949a81a2b3b = e;
  }
  static set _rb32e1e294172ec(e) {
    this._rad343022c053c0 = e;
  }
  static set GAMES(e) {
    this._GAMES = e;
  }
  _icon = null;
  _window = null;
  _disposed = !1;
  get _r46e70b63ffc509() {
    return this._r6f10e127997a58._r46e70b63ffc509;
  }
  get _viewOnce() {
    return this._r6f10e127997a58._viewOnce;
  }
  get notification() {
    return this._r6f10e127997a58;
  }
  get _r82b562908b306a() {
    return this._icon;
  }
  get _rbb0beb64e4e7d8() {
    return this._window;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    (this._window?.dispose(),
      (this._window = null),
      this._icon?.dispose(),
      (this._icon = null),
      (this._r6f10e127997a58 = null),
      (this._disposed = !0));
  }
  prepare(e, r, t, i) {
    this._window = a._rce8949a81a2b3b.buildFromXML(a._rad343022c053c0.getAssetByName(t)?.content);
    let s = this._window?.findChildByName(a.TITLE),
      o = this._window?.findChildByName(a.MESSAGE);
    if (
      (s != null && (s.caption = e),
      o != null && (o.caption = r ?? ""),
      (this._icon = a._rce8949a81a2b3b.createWindow(
        `ICON_${this._r46e70b63ffc509}`,
        "",
        class_2090.const_1384,
        class_2025.WINDOW_STYLE_DEFAULT,
        N._re3bd61027cfd94,
        a._r98c73cf2241927,
      )),
      this._icon != null)
    ) {
      this._icon.mouseThreshold = 0;
      let d = a._rce8949a81a2b3b.createWindow(
        `BITMAP_${this._r46e70b63ffc509}`,
        "",
        class_2090.WINDOW_TYPE_STATIC_BITMAP_WRAPPER,
        class_2025.WINDOW_STYLE_DEFAULT,
        N._r0122fdb7c42001,
        a._r98c73cf2241927,
      );
      (d != null && ((d.assetUri = i), this._icon.addChild(d)),
        us.runMotion(this._icon) == null && us.DropBounce(new UnkClass_506da2(this._icon, 600, 32)));
    }
  }
}
