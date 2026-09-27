// Extracted from HabboAirLauncher.deobf.js, line 346045.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/HtmlPreset.as
// Obfuscated name: _id99ce0f7d4575f

class extends TextPreset {
  static {
    n(this, "HtmlPreset");
  }
  _re34bbf0a98165a;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    (super._re7a03a855dfd32(e, r),
      (this._re34bbf0a98165a = r),
      (this.window.selectable = this._re34bbf0a98165a.selectable));
  }
  createView() {
    return this.var_40.createHtmlView();
  }
  initializeMode(e) {
    (super.initializeMode(e), (this._window.multiline = !1));
  }
  dispose() {
    this.disposed || (super.dispose(), (this._re34bbf0a98165a = null));
  }
}
