// Extracted from HabboAirLauncher.deobf.js, line 347122.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/inputsources/SourceTypePicker.as
// Obfuscated name: _i16eef2d5aa511c

class {
  constructor(e, r, t) {
    this._roomEvents = e;
    this._container = r;
    this.var_263 = t;
    ((this.var_752 = this.sourceOptionsList.getListItemAt(0)),
      this.sourceOptionsList.removeListItems());
  }
  static {
    n(this, "SourceTypePicker");
  }
  _options = new B();
  var_336 = null;
  _r1cab426947efcc = null;
  _r15bb788cd45db4 = null;
  _disposed = !1;
  var_752;
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  get disposed() {
    return this._disposed;
  }
  initialize(e, r) {
    (this.var_336 != null && (this.var_336.deactivate(), (this.var_336 = null)),
      (this._r1cab426947efcc = null),
      (this._r15bb788cd45db4 = null),
      (this.marginLeft.color = 4280427042),
      (this.marginRight.color = 4280427042));
    let t = this.sourceOptionsList;
    t.removeListItems();
    for (let i of e) {
      let s;
      (this._options.hasKey(i)
        ? (s = this._options.getValue(i))
        : ((s = new SourceTypeOption(this, this.var_752.clone(), i)), this._options.add(i, s)),
        this._r1cab426947efcc == null && (this._r1cab426947efcc = s),
        (this._r15bb788cd45db4 = s),
        t.addListItem(s.container),
        i === r && (this.var_336 = s));
    }
    this.var_336 != null
      ? this.var_336.activate()
      : e.length > 0 && this.onClick(this._options.getValue(e[0]));
  }
  select(e) {
    for (let r of this._options.getValues()) e === r.option && this.onClick(r);
  }
  _r5d039d16a24740(e) {
    (e === this._r1cab426947efcc && (this.marginLeft.color = 4278190080 | e.backgroundColor()),
      e === this._r15bb788cd45db4 && (this.marginRight.color = 4278190080 | e.backgroundColor()));
  }
  set disabled(e) {
    let r = e ? 0.5 : 1;
    ((this.marginLeft.blend = r), (this.marginRight.blend = r));
    for (let t of this._options.getValues()) t.disabled = e;
  }
  set visible(e) {
    this._container.visible = e;
  }
  onClick(e) {
    e !== this.var_336 &&
      (this.var_336 != null && (this.var_336.deactivate(), (this.var_336 = null)),
      e != null &&
        ((this.var_336 = e),
        this.var_336.activate(),
        (this.var_263.sourceType = this.var_336.option)));
  }
  dispose() {
    if (!this._disposed) {
      ((this._disposed = !0), this.var_752?.dispose(), (this.var_752 = null));
      for (let e of this._options.getValues()) e.dispose();
      (this._options.dispose(), (this.var_263 = null), (this._container = null));
    }
  }
  get marginLeft() {
    return this._container.findChildByName("margin_item_color_left");
  }
  get marginRight() {
    return this._container.findChildByName("margin_item_color_right");
  }
  get sourceOptionsList() {
    return this._container.findChildByName("source_options_list");
  }
}
