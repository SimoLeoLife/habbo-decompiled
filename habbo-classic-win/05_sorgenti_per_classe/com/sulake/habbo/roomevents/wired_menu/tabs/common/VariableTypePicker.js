// Estratto da HabboAirLauncher.deobf.js, riga 355885.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/common/VariableTypePicker.as
// Nome offuscato: _i2a5e5bb4eb2265

class a {
  constructor(e, r) {
    this._container = e;
    this._onSelectCallback = r;
    this.setMode(a.SELECTION_TYPES[0], !0);
    for (let t of a.SELECTION_TYPES) {
      let i = this.getButton(t);
      i != null &&
        (i.addEventListener(u.OUT, this.maybeCancelEvent), i.addEventListener(u.UP, this.maybeCancelEvent));
    }
  }
  static {
    n(this, "VariableTypePicker");
  }
  static SELECTION_TYPES = ["furni", "user", "global", "context"];
  _disposed = !1;
  _selected = null;
  var_2807 = 0;
  get disposed() {
    return this._disposed;
  }
  get selectedType() {
    return this.var_2807;
  }
  set selectedType(e) {
    for (let r of a.SELECTION_TYPES) {
      let t = this.getButton(r);
      t != null && t.id === e && this.setMode(this.getButtonTypeName(t), !0);
    }
  }
  update(e) {
    if (this._container != null)
      for (let r of a.SELECTION_TYPES) {
        let t = this.getButton(r);
        t != null &&
          this._selected === r &&
          (t.state & class_1948.const_92) === 0 &&
          (t.state |= class_1948.const_92);
      }
  }
  dispose() {
    if (!this._disposed) {
      for (let e of a.SELECTION_TYPES) {
        let r = this.getButton(e);
        r != null &&
          (r.removeEventListener(u.OUT, this.maybeCancelEvent),
          r.removeEventListener(u.UP, this.maybeCancelEvent));
      }
      ((this._container = null),
        (this._onSelectCallback = null),
        (this._selected = null),
        (this._disposed = !0));
    }
  }
  maybeCancelEvent = n((e) => {
    let r = e.target;
    r != null &&
      (e.type === u.OUT && r.id === this.var_2807 && e.preventWindowOperation(),
      e.type === u.UP && (this.setMode(this.getButtonTypeName(r)), e.preventWindowOperation()));
  }, "maybeCancelEvent");
  getButtonTypeName(e) {
    return e.name.split("_")[1] ?? "";
  }
  setMode(e, r = !1) {
    this._selected = e;
    for (let i of a.SELECTION_TYPES) {
      let s = this.getButton(i);
      s != null &&
        this._selected !== i &&
        ((s.state &= ~class_1948.const_92), (s.state &= ~class_1948.WINDOW_STATE_HOVERING));
    }
    let t = this.getButton(this._selected);
    t != null &&
      t.id !== this.var_2807 &&
      ((this.var_2807 = t.id), r || this._onSelectCallback?.(this.var_2807));
  }
  getButton(e) {
    return this._container?.findChildByName(`type_${e}_button`);
  }
}
