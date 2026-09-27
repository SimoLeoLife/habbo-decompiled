// Extracted from HabboAirLauncher.deobf.js, line 341115.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/memenu/MeMenuNewIconLoader.as
// Obfuscated name: _idd8d99f55a58d4

class {
  static {
    n(this, "MeMenuNewIconLoader");
  }
  _toolbar;
  var_3266 = "";
  _rac50a5224c8d67 = null;
  _rcea152645e59bb;
  var_2300;
  constructor(e) {
    ((this._toolbar = e),
      (this._rcea152645e59bb = new class_1926(this._r6e2e75987c854e)),
      (this.var_2300 = new class_2276(this._rfb4a7fa643bdaf)),
      this._rf3db13932bfb60._r2e106e2349a0b6(this._rcea152645e59bb),
      this._rf3db13932bfb60._r2e106e2349a0b6(this.var_2300),
      this.setMeMenuToolbarIcon());
  }
  get disposed() {
    return this._toolbar == null;
  }
  avatarImageReady(e) {
    ((this.var_3266 = ""), this.setMeMenuToolbarIcon());
  }
  dispose() {
    this.disposed ||
      (this._rcea152645e59bb != null &&
        (this._rf3db13932bfb60._r7668362bf55fdd(this._rcea152645e59bb), (this._rcea152645e59bb = null)),
      this.var_2300 != null &&
        (this._rf3db13932bfb60._r7668362bf55fdd(this.var_2300), (this.var_2300 = null)),
      this._rac50a5224c8d67?.dispose(),
      (this._rac50a5224c8d67 = null),
      (this._toolbar = null));
  }
  get toolbar() {
    if (this._toolbar == null) throw new Error("Toolbar is not available.");
    return this._toolbar;
  }
  get _rf3db13932bfb60() {
    return this.toolbar._rf3db13932bfb60;
  }
  setMeMenuToolbarIcon(e = null) {
    let r = null;
    if (this.toolbar._rf0eb5f07c94cfb != null) {
      let t = e ?? this.toolbar.sessionDataManager?.figure ?? "";
      if (t !== this.var_3266) {
        let i = this.toolbar.sessionDataManager?.gender ?? "",
          s = this.toolbar._rf0eb5f07c94cfb._r274f6640e76241(t, fr.LARGE, i, this);
        (s != null &&
          !s._re9580ee607591e() &&
          ((r = Jd.focusUserFace(s, class_2123.const_252, 3, 1)), s.dispose()),
          (this.var_3266 = t),
          this._rac50a5224c8d67?.dispose(),
          (this._rac50a5224c8d67 = r));
      } else r = this._rac50a5224c8d67;
    }
    (r != null && (r = Jd.cutCircleFromBitmap(r, 20)), this.toolbar._re0d48308335439(Me.MEMENU, r));
  }
  _r6e2e75987c854e = n((e) => {
    this.setMeMenuToolbarIcon(e.getParser().figure);
  }, "_r6e2e75987c854e");
  _rfb4a7fa643bdaf = n((e) => {
    this.disposed || this.setMeMenuToolbarIcon(e.figure);
  }, "_rfb4a7fa643bdaf");
}
