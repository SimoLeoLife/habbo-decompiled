// Estratto da HabboAirLauncher.deobf.js, riga 352257.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/applications/SubVariableCreatorPreset.as
// Nome offuscato: _i3886028cc3e20b

class extends WiredUIPreset {
  static {
    n(this, "SubVariableCreatorPreset");
  }
  _checkboxGroup;
  _r3d0c25c86fd123;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    this._r3d0c25c86fd123 = [];
    let t = [];
    for (let i = 0; i < r.length; i += 1) {
      let s = r[i],
        o = `${e}${s.id}`,
        d = new CheckboxOptionParam(`\${${o}}`);
      if (
        ((d.extra1 = this.var_102
          ._r178edc7e663bd7(new it(s.name, -1, null, 85, null, !1))
          .alignRight()),
        s.hasExtraText)
      ) {
        let c = new Se(Se.MODE_MULTILINE);
        ((c.textColor = this.var_40.softTextColor),
          (d.extra2 = this.var_102.createText(`\${${o}.extra}`, c)));
      }
      (t.push(d), this._r3d0c25c86fd123.push(s.id));
    }
    this._checkboxGroup = this.var_102.createCheckboxGroup(t);
  }
  set mask(e) {
    for (let r = 0; r < this._checkboxGroup.options; r += 1) {
      let t = this._checkboxGroup.get(r),
        i = this._r3d0c25c86fd123[r];
      t.selected = (e & (1 << i)) > 0;
    }
  }
  get mask() {
    let e = 0;
    for (let r = 0; r < this._checkboxGroup.options; r += 1)
      if (this._checkboxGroup.get(r).selected) {
        let i = this._r3d0c25c86fd123[r];
        e |= 1 << i;
      }
    return e;
  }
  get window() {
    return this._checkboxGroup.window;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this._checkboxGroup.resizeToWidth(e));
  }
  get childPresets() {
    return [this._checkboxGroup];
  }
  dispose() {
    this.disposed || (super.dispose(), (this._checkboxGroup = null), (this._r3d0c25c86fd123 = null));
  }
}
