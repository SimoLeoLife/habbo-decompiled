// Extracted from HabboAirLauncher.deobf.js, line 353018.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/main_layout/IlluminaHeaderPreset.as
// Obfuscated name: _i3edf0d1907dc23

class extends Lc {
  static {
    n(this, "IlluminaHeaderPreset");
  }
  _name1Preset;
  _name2Preset;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t, i, s, o, d, c = null) {
    super._re7a03a855dfd32(e, r, t, i, s, o, d, c);
  }
  createTopHeaderElement(e, r) {
    let t = this.getNameParts(e),
      i = new Se(Se.MODE_MULTILINE, !0);
    ((i.fontSize = 11),
      (this._name1Preset = this.var_102.createText(t[0], i)),
      (i = new Se(Se.MODE_MULTILINE, !0)),
      (i.fontSize = this.var_40._r4239ed861c5525),
      (i.textColor = 4802889),
      (this._name2Preset = this.var_102.createText(t[1], i)));
    let s = this.var_102.createSimpleListView(!0, [
      this.var_102.createSpacing(!0, 3),
      this._name1Preset,
      this._name2Preset,
    ]);
    return ((s.spacing = -2), (s.window.x = 3), s);
  }
  getNameParts(e) {
    let r = e.split(":", 2);
    for (; r.length < 2;) r.push("");
    for (; r[1].indexOf(" ") === 0;) r[1] = r[1].substring(1);
    return ((r[0] = r[0].toUpperCase()), r);
  }
  updateName(e) {
    let r = this.getNameParts(e);
    ((this._name1Preset.text = r[0]),
      (this._name2Preset.text = r[1]),
      this.resizeToWidth(this._width));
  }
  dispose() {
    (super.dispose(), (this._name1Preset = null), (this._name2Preset = null));
  }
}
