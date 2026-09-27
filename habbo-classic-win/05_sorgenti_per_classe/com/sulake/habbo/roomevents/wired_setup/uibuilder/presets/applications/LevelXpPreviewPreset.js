// Extracted from HabboAirLauncher.deobf.js, line 352183.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/applications/LevelXpPreviewPreset.as
// Obfuscated name: _ia96f6adf337f82

class a extends WiredUIPreset {
  static {
    n(this, "LevelXpPreviewPreset");
  }
  static var_5903 = 9223372036854776e3;
  var_295;
  var_33;
  _r19caa9908af33d;
  var_2574;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._r19caa9908af33d = e), (this.var_2574 = []));
    let r = [],
      t = new Sg(Se.MODE_STRETCH);
    for (let i of this._r19caa9908af33d) {
      let s = this.var_102.createHtml(this.getText(i, "0"), t);
      (this.var_2574.push(s), r.push(s));
    }
    ((this.var_295 = this.var_102.createSimpleListView(!0, r)),
      (this.var_295.spacing = 1),
      (this.var_33 = this.var_102._rd65848eed931f7("container_view")),
      this.var_33.addChild(this.var_295.window));
  }
  getText(e, r) {
    return this._roomEvents.localization.getLocalizationWithParams(
      "wiredfurni.params.levelup.preview.entry",
      "",
      "lvl",
      `<font color="${this.yellowColorHex}">${e}</font>`,
      "xp",
      `<font color="${this.yellowColorHex}">${r}</font>`,
    );
  }
  get yellowColorHex() {
    return we.uintToHexColor(this.var_40._r7e92fef08f7bc0);
  }
  setPreviewXps(e) {
    for (let r = 0; r < this._r19caa9908af33d.length; r += 1) {
      let t = this._r19caa9908af33d[r],
        i = "Unreachable level";
      if (r < e.length) {
        let s = e[r];
        s > a.var_5903 ? (i = "Out of bounds") : (i = Math.round(s).toString());
      }
      this.var_2574[r].text = this.getText(t, i);
    }
  }
  get _r75e6ecdd9240ab() {
    return this._r19caa9908af33d;
  }
  get window() {
    return this.var_33;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      (this.var_33.width = e),
      this.var_295.resizeToWidth(e),
      (this.var_33.height = this.var_295.window.height));
  }
  get childPresets() {
    return [this.var_295];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this.var_33.dispose(),
      (this.var_33 = null),
      (this.var_295 = null),
      (this._r19caa9908af33d = null),
      (this.var_2574 = null));
  }
}
