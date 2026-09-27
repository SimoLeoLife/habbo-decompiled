// Extracted from HabboAirLauncher.deobf.js, line 353702.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/presets/VariableFxPreviewBlockPreset.as
// Obfuscated name: _i1a6c3c871e36e7

class a extends WiredUIPreset {
  static {
    n(this, "VariableFxPreviewBlockPreset");
  }
  static HEIGHT = 112;
  static _r07434444aa7a78 = 6;
  static _r5926beaada1452 = 6;
  static _r09bbc4d92f3687 = 6;
  static _r1ecdde6c53a9d3 = 5;
  static _rf6d659894ea2d3 = 5;
  _window;
  var_726;
  var_1565;
  var_1010;
  var_854;
  _re7a03a855dfd32(e, r) {
    this.var_726 = e;
    let t = new Se(Se.MODE_MULTILINE, !0);
    t.textColor = this.var_40.softTextColor;
    let i = new Se(Se.MODE_STRETCH, !1);
    ((i.textColor = this.var_40.softTextColor),
      (this._window = this.var_102._rd65848eed931f7("growing_container_view")),
      (this.var_1565 = this.var_102.createText(
        "${wiredfurni.params.variablefx.preview}",
        t,
      )),
      (this.var_1010 = this.var_102.createText("", i)),
      (this.var_854 = this.var_102._r1f621d8be6c92c(
        "variablefx_randomize",
        "${wiredfurni.params.variablefx.preview.randomize}",
        r,
      )));
    for (let s of this.childPresets) this._window.addChild(s.window);
  }
  refreshZoomLabel() {
    ((this.var_1010.text = this.localizations.getLocalizationWithParams(
      "wiredfurni.params.variablefx.preview.zoom",
      "zoom: %level%",
      "level",
      String(this.var_726.zoom),
    )),
      (this.var_1010.window.x = Math.max(
        6,
        this._window.width - this.var_1010.window.width - a._r09bbc4d92f3687,
      )));
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      (this._window.width = e),
      (this._window.height = a.HEIGHT),
      this.var_726.resizeToWidth(this.var_726.staticWidth),
      (this.var_726.window.x = Math.max(0, ((e - this.var_726.staticWidth) / 2) | 0)),
      (this.var_726.window.y = Math.max(
        0,
        ((a.HEIGHT - this.var_726.window.height) / 2) | 0,
      )),
      this.var_854.resizeToWidth(this.var_854.staticWidth),
      (this.var_854.window.x = Math.max(
        0,
        e - this.var_854.window.width - a._r1ecdde6c53a9d3,
      )),
      (this.var_854.window.y = Math.max(
        0,
        a.HEIGHT - this.var_854.window.height - a._rf6d659894ea2d3,
      )),
      (this.var_1565.window.x = a._r07434444aa7a78),
      (this.var_1565.window.y = a._r5926beaada1452),
      (this.var_1010.window.y = a._r5926beaada1452),
      this.refreshZoomLabel(),
      this.var_1565.resizeToWidth(
        Math.max(
          0,
          this.var_1010.window.x - a._r07434444aa7a78 - this.var_40._r7ac8f2f1de8d9e,
        ),
      ));
  }
  get window() {
    return this._window;
  }
  get childPresets() {
    return [this.var_726, this.var_1565, this.var_1010, this.var_854];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._window.dispose(),
      (this._window = null),
      (this.var_726 = null),
      (this.var_1565 = null),
      (this.var_1010 = null),
      (this.var_854 = null));
  }
}
