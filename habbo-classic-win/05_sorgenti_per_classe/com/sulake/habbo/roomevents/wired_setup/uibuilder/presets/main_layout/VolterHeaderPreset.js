// Estratto da HabboAirLauncher.deobf.js, riga 353102.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/main_layout/VolterHeaderPreset.as
// Nome offuscato: _ic6c93f8e3dc9c9

class extends Lc {
  static {
    n(this, "VolterHeaderPreset");
  }
  var_3033;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t, i, s, o, d, c = null) {
    super._re7a03a855dfd32(e, r, t, i, s, o, d, c);
  }
  createTopHeaderElement(e, r) {
    let t = new Se(Se.MODE_MULTILINE, !0);
    return (
      (t.fontSize = this.var_40._r4239ed861c5525),
      (this.var_3033 = this.var_102.createText(e, t)),
      this.var_102.createSimpleListView(!1, [
        this.var_102.createBitmapWrapperPreset(`wired_type_icons_icon_${r.getKey()}`),
        this.var_3033,
      ])
    );
  }
  updateName(e) {
    ((this.var_3033.text = e), this.resizeToWidth(this._width));
  }
  dispose() {
    (super.dispose(), (this.var_3033 = null));
  }
}
