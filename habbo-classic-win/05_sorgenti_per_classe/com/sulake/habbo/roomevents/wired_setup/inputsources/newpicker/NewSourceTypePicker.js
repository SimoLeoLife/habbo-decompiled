// Estratto da HabboAirLauncher.deobf.js, riga 347293.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/inputsources/newpicker/NewSourceTypePicker.as
// Nome offuscato: _ib39e1941b71f54

class {
  constructor(e, r, t) {
    this._roomEvents = e;
    this._container = r;
    this.var_263 = t;
    ((this.var_2549 = this._container.getListItemAt(0)),
      (this._rfb47d791fd399e = this._container.getListItemAt(1)),
      (this._splitterBaseColor = this._rfb47d791fd399e.getChildAt(0).color & 16777215),
      (this.var_2868 = this._container.getListItemAt(2)),
      (this._r630bde0bcd053b = this._container.getListItemAt(4)),
      this._container.removeListItems());
  }
  static {
    n(this, "NewSourceTypePicker");
  }
  _options = new B();
  _splitters = [];
  var_336 = null;
  var_2549;
  var_2868;
  _r630bde0bcd053b;
  _rfb47d791fd399e;
  _splitterBaseColor = 0;
  _r1d1832a497247c = !1;
  _disposed = !1;
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  initialize(e, r) {
    ((this._r1d1832a497247c = !0),
      this.var_336 != null && (this.var_336.deactivate(), (this.var_336 = null)),
      this.clear(),
      (this._options = new B()),
      (this._splitters = []));
    for (let t = 0; t < e.length; t += 1) {
      let i = e[t],
        s;
      t === 0
        ? (s = this.var_2549.clone())
        : t === e.length - 1
          ? (s = this._r630bde0bcd053b.clone())
          : (s = this.var_2868.clone());
      let o = new NewSourceTypeOption(this, s, i);
      if (
        (this._options.add(i, o),
        this._container.addListItem(o.container),
        i === r && (this.var_336 = o),
        t !== e.length - 1)
      ) {
        let d = this._rfb47d791fd399e.clone();
        (this._container.addListItem(d), this._splitters.push(d));
      }
    }
    (this.var_336 != null
      ? this.var_336.activate()
      : e.length > 0 && this.onClick(this._options.getValue(e[0])),
      (this._r1d1832a497247c = !1),
      this.updateColorings());
  }
  select(e) {
    for (let r of this._options.getValues()) e === r.option && this.onClick(r);
  }
  onClick(e) {
    e !== this.var_336 &&
      (this.var_336 != null && (this.var_336.deactivate(), (this.var_336 = null)),
      e != null &&
        ((this.var_336 = e),
        this.var_336.activate(),
        (this.var_263.sourceType = this.var_336.option)));
  }
  updateColorings() {
    if (!this._r1d1832a497247c)
      for (let e = 0; e < this._splitters.length; e += 1) {
        let r = this._splitters[e],
          t = this._options.getValueByIndex(e),
          i = this._options.getValueByIndex(e + 1),
          s = 16777215;
        (t.active || (!i.active && t.hovered)
          ? (s = t.color)
          : (i.active || i.hovered) && (s = i.color),
          (s = this.multiplyColors(this._splitterBaseColor, s)),
          (s = (r.getChildAt(0).color & (255 << 24)) | (s & 16777215)),
          (r.getChildAt(0).color = s));
      }
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.clear(),
      this._container?.dispose(),
      (this._container = null),
      this.var_2549?.dispose(),
      (this.var_2549 = null),
      this.var_2868?.dispose(),
      (this.var_2868 = null),
      this._r630bde0bcd053b?.dispose(),
      (this._r630bde0bcd053b = null),
      this._rfb47d791fd399e?.dispose(),
      (this._rfb47d791fd399e = null),
      this._options.dispose(),
      (this._splitters = []),
      (this.var_336 = null),
      (this.var_263 = null));
  }
  clear() {
    this._container.removeListItems();
    for (let e of this._options.getValues()) e.dispose();
    for (let e of this._splitters) e.dispose();
  }
  multiplyColors(e, r) {
    let t = (((e >> 16) & 255) * ((r >> 16) & 255)) / 255,
      i = (((e >> 8) & 255) * ((r >> 8) & 255)) / 255,
      s = ((e & 255) * (r & 255)) / 255;
    return (t << 16) | (i << 8) | s;
  }
}
