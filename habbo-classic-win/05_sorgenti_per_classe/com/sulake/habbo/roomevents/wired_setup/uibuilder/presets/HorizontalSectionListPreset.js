// Estratto da HabboAirLauncher.deobf.js, riga 346068.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/HorizontalSectionListPreset.as
// Nome offuscato: _ic0cba71da4f003

class extends WiredUIPreset {
  static {
    n(this, "HorizontalSectionListPreset");
  }
  var_122;
  _splitters;
  var_170;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this.var_122 = this.var_102._rd65848eed931f7("horizontal_list_view")),
      (this.var_122.spacing = 0),
      (this._splitters = []),
      (this.var_170 = e));
    for (let r = 0; r < e.length; r += 1) {
      let t = e[r];
      if (r > 0) {
        let i = this.var_40.createSplitterVerticalView();
        (i.setParamFlag(class_2094._r5f5ff9955e2bf4, !1),
          this._splitters.push(i),
          this.var_122.addListItem(i));
      }
      this.var_122.addListItem(t.window);
    }
  }
  get window() {
    return this.var_122;
  }
  resizeToWidth(e) {
    super.resizeToWidth(e);
    let r = this._splitters.length > 0 ? this._splitters[0].width : 0,
      t = e - this._splitters.length * r,
      i = 0;
    for (let c of this.var_170) c.hasStaticWidth() ? (t -= c.staticWidth) : (i += 1);
    let s = i > 0 ? Math.max(0, Math.trunc(t / i)) : 0,
      o = null,
      d = 0;
    for (let c of this.var_170)
      (c.hasStaticWidth()
        ? c.resizeToWidth(c.staticWidth)
        : ((o = c), c.resizeToWidth(s), (t -= s)),
        c.window.height > d && (d = c.window.height));
    t > 0 && o != null && (o.resizeToWidth(s + t), o.window.height > d && (d = o.window.height));
    for (let c of this._splitters) c.height = d + this.var_40.sectionSpacing;
    ((this.var_122.height = d),
      (this.var_122.width = e),
      this.var_122.arrangeListItems());
  }
  get childPresets() {
    return this.var_170;
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this.var_122.dispose(),
      (this.var_122 = null),
      (this.var_170 = null),
      (this._splitters = null));
  }
}
