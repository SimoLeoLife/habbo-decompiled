// Extracted from HabboAirLauncher.deobf.js, line 340585.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/phonenumber/VerificationCodeInputMinimizedView.as
// Obfuscated name: _i5d5c447f22aee9

class a {
  static {
    n(this, "VerificationCodeInputMinimizedView");
  }
  static BG_COLOR_LIGHT = 4286084205;
  static BG_COLOR_DARK = 4283781966;
  var_82;
  _window = null;
  constructor(e) {
    ((this.var_82 = e), this.createWindow());
  }
  get window() {
    if (this._window == null)
      throw new Error("Verification code minimized window is not available.");
    return this._window;
  }
  dispose() {
    (this._window?.removeEventListener(u.CLICK, this._r9322d0b83eb72f),
      this._window?.dispose(),
      (this._window = null),
      (this.var_82 = null));
  }
  createWindow() {
    if (this._window != null || this.var_82 == null) return;
    ((this._window = this.var_82.windowManager.buildFromXML(
      this.var_82.assets.getAssetByName("phonenumber_verify_minimized_xml")?.content,
    )),
      this._window?.addEventListener(u.CLICK, this._r9322d0b83eb72f),
      this._window?.addEventListener(u.OVER, this._r866744f6c18eb9),
      this._window?.addEventListener(u.OUT, this.onContainerMouseOut));
    let e = this._window?.findChildByTag("BGCOLOR");
    e != null && (e.color = a.BG_COLOR_DARK);
  }
  _r9322d0b83eb72f = n((e) => {
    this.var_82?._r2d12d9d876d952(!1);
  }, "_r9322d0b83eb72f");
  _r866744f6c18eb9 = n((e) => {
    let r = this._window?.findChildByTag("BGCOLOR");
    r != null && (r.color = a.BG_COLOR_LIGHT);
  }, "_r866744f6c18eb9");
  onContainerMouseOut = n((e) => {
    let r = this._window?.findChildByTag("BGCOLOR");
    r != null && (r.color = a.BG_COLOR_DARK);
  }, "onContainerMouseOut");
}
