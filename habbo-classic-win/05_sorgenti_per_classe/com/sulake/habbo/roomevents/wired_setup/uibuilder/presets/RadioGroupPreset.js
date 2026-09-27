// Extracted from HabboAirLauncher.deobf.js, line 346650.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/RadioGroupPreset.as
// Obfuscated name: _i5d274bb910cdad

class extends WiredUIPreset {
  static {
    n(this, "RadioGroupPreset");
  }
  _container;
  var_1407;
  var_2637 = null;
  var_2308 = null;
  var_518 = 0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t = 1) {
    ((this._container = this.var_102._rd65848eed931f7("radio_group_view")),
      (this.var_518 = t));
    let i = null;
    (this.var_518 > 0 && (this.var_2308 = []), (this.var_1407 = []));
    let s = -1,
      o = 0;
    for (let d of e) {
      let c = e[e.length - 1] === d,
        f = this.var_102._rf9650eab5f15e1(d, c);
      (this.var_1407.push(f),
        t > 1
          ? (o === 0 &&
              ((i = this.var_102._rd65848eed931f7("horizontal_list_view")),
              (i.spacing = this.var_40._r7ac8f2f1de8d9e),
              this.var_2308.push(i),
              this.itemList.addListItem(i),
              (s += 1)),
            i.addListItem(f.window),
            (f._rb0acb42893445a = s),
            (f._r287a070ba675c7 = o),
            (f._r8bf510569150d1 = d.newLine),
            d.newLine || o === t - 1 ? (o = 0) : (o += 1))
          : this.itemList.addListItem(f.window),
        r != null && f._r05befe2c7e30c6.addEventListener(y.const_238, this._r28f20c0dd4bf11));
    }
    ((this.selected = 0), (this.var_2637 = r));
  }
  _r28f20c0dd4bf11 = n((...e) => {
    this.var_2637?.(this.selected);
  }, "_r28f20c0dd4bf11");
  get selected() {
    return this._container.getSelected().id;
  }
  set selected(e) {
    let r = this._container.findChildByName(UX.OPTION_PREFIX + e);
    r != null && this._container.setSelected(r);
  }
  setOptionDisabled(e, r) {
    this.var_1407[e].disabled = r;
  }
  get(e) {
    return this.var_1407[e];
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._container.width = e), (this.itemList.width = e));
    let r = Math.trunc(
      (e - (this.var_518 - 1) * this.var_40._r7ac8f2f1de8d9e) / this.var_518,
    );
    if (this.var_518 > 1) for (let t of this.var_2308) ((t.height = 0), (t.width = e));
    for (let t of this.var_1407) {
      let i = r;
      if (this.var_518 > 1 && t._r8bf510569150d1) {
        let s = t._r287a070ba675c7 * r + t._r287a070ba675c7 * this.var_40._r7ac8f2f1de8d9e;
        i = Math.max(r, e - s);
      }
      if ((t.resizeToWidth(i), this.var_518 > 1)) {
        let s = this.var_2308[t._rb0acb42893445a];
        t.window.height > s.height && (s.height = t.window.height);
      }
    }
  }
  get itemList() {
    return this._container.findChildByName("radio_button_list");
  }
  get window() {
    return this._container;
  }
  get childPresets() {
    return this.var_1407.slice();
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_1407 = null),
      (this.var_2637 = null),
      (this.var_2308 = null));
  }
}
