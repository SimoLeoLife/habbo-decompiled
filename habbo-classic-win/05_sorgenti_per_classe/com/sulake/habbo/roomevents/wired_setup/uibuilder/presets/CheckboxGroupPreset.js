// Extracted from HabboAirLauncher.deobf.js, line 345389.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/CheckboxGroupPreset.as
// Obfuscated name: _i7e920d97f8f502

class extends WiredUIPreset {
  static {
    n(this, "CheckboxGroupPreset");
  }
  _container;
  var_884;
  var_2637 = null;
  var_2308 = null;
  var_518 = 0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t = 1) {
    ((this._container = this.var_102._rd65848eed931f7("vertical_list_view")),
      (this.var_518 = t),
      (this.var_2637 = r));
    let i = 0,
      s = null;
    (this.var_518 > 0 && (this.var_2308 = []), (this.var_884 = new B()));
    for (let o of e) {
      o.id === -1 && (o.id = i);
      let d = e[e.length - 1] === o,
        c = this.var_102._r57e9c197ec2941(o, d);
      (this.var_884.add(o.id, c),
        t > 1
          ? (i % t === 0 &&
              ((s = this.var_102._rd65848eed931f7("horizontal_list_view")),
              (s.spacing = this.var_40._r7ac8f2f1de8d9e),
              this.var_2308.push(s),
              this._container.addListItem(s)),
            s.addListItem(c.window))
          : this._container.addListItem(c.window),
        r != null &&
          (c.checkbox.addEventListener(y.const_238, this._r28f20c0dd4bf11),
          c.checkbox.addEventListener(y.const_1217, this._r28f20c0dd4bf11)),
        (i += 1));
    }
  }
  _r28f20c0dd4bf11 = n((...e) => {
    if (this.var_2637 == null) return;
    let t = e[0].window.id;
    this.var_2637(t, this.get(t).selected);
  }, "_r28f20c0dd4bf11");
  get(e) {
    return this.var_884.getValue(e);
  }
  get options() {
    return this.var_884.length;
  }
  get mask() {
    let e = 0;
    for (let r of this.var_884.getValues()) r.selected && (e |= 1 << r.checkbox.id);
    return e;
  }
  get _r17bd3c0094d54d() {
    for (let e of this.var_884.getValues()) if (!e.selected && !e.disabled) return !1;
    return !0;
  }
  set mask(e) {
    for (let r of this.var_884.getValues()) {
      let t = (e & (1 << r.checkbox.id)) !== 0;
      we.select(r.checkbox, t);
    }
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._container.width = e));
    let r = Math.trunc(
        (e - (this.var_518 - 1) * this.var_40._r7ac8f2f1de8d9e) / this.var_518,
      ),
      t = 0;
    for (let i of this.var_884.getValues()) {
      if ((i.resizeToWidth(r), this.var_518 > 1)) {
        let s = this.var_2308[Math.trunc(t / this.var_518)];
        i.window.height > s.height && (s.height = i.window.height);
      }
      t += 1;
    }
  }
  get window() {
    return this._container;
  }
  get childPresets() {
    return this.var_884.getValues();
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_884 = null),
      (this.var_2637 = null),
      (this.var_2308 = null));
  }
}
