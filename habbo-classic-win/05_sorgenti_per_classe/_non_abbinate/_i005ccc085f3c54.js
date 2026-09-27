// Estratto da HabboAirLauncher.deobf.js, riga 214090.

class extends Sprite {
  constructor(r, t, i = Yi.STYLE_ILLUMINA, s = null, o = null, d = 0) {
    super();
    this._group = t;
    this._style = i;
    this._rc184bbf3d25bb0 = d;
    ((this._r68ec92def14624 = Yi.createTextField(
      r,
      20,
      this._style === Yi.STYLE_HITCH ? 15201722 : 0,
      !0,
      !1,
      !1,
      this._style === Yi.STYLE_HITCH,
    )),
      (this._r68ec92def14624.alpha = this._style === Yi.STYLE_HITCH ? 0.7 : 1),
      (this._re0873bff198070 = s ?? new A(20, 20, !0, 4294967295)),
      (this._r9cfb4936dc9398 = o ?? new A(20, 20, !0, 1728053247)),
      (this._r617df2eaf2ca4c = new _i3a5c6f457acdad()),
      (this._r617df2eaf2ca4c.bitmapData = this._r9cfb4936dc9398),
      this.addChild(this._r617df2eaf2ca4c),
      (this._r617df2eaf2ca4c.y = Math.trunc(
        (this._r68ec92def14624.height - this._r617df2eaf2ca4c.height) / 2,
      )),
      this.addChild(this._r68ec92def14624),
      (this._r68ec92def14624.x = this._r617df2eaf2ca4c.width + 6),
      this._group != null &&
        this._group.buttons.indexOf(this) < 0 &&
        this._group.buttons.push(this),
      this.addEventListener(_ifd7c1208e3417e._r9001c395573374, this._ra2392916df2aec));
  }
  static {
    n(this, "_i005ccc085f3c54");
  }
  _r617df2eaf2ca4c = null;
  _r68ec92def14624 = Yi.createTextField("", 20, 16777215, !0);
  _selected = !1;
  _re0873bff198070;
  _r9cfb4936dc9398;
  get group() {
    return this._group;
  }
  set group(r) {
    if (this._group !== r) {
      if (this._group != null) {
        let t = this._group.buttons.indexOf(this);
        t >= 0 && this._group.buttons.splice(t, 1);
      }
      ((this._group = r), (this.selected = !1));
    }
  }
  get selected() {
    return this._selected;
  }
  set selected(r) {
    if (this._selected !== r) {
      if (((this._selected = r), this._selected && this._group != null)) {
        for (let t of this._group.buttons)
          t !== this
            ? ((t.selected = !1),
              this._rc184bbf3d25bb0 !== 0 &&
                ((t._r68ec92def14624.textColor = this._rc184bbf3d25bb0), (t._r68ec92def14624.alpha = 0.6)))
            : ((t._r68ec92def14624.textColor = this._style === Yi.STYLE_HITCH ? 15201722 : 0),
              (t._r68ec92def14624.alpha = 0.7));
        this._group.performSelectedAction();
      }
      this._r617df2eaf2ca4c != null &&
        (this._r617df2eaf2ca4c.bitmapData = this._selected ? this._re0873bff198070 : this._r9cfb4936dc9398);
    }
  }
  _ra2392916df2aec = n((r) => {
    this.addEventListener(_ifd7c1208e3417e._ra93f33360c3a28, this._r1acf27e9365839);
  }, "_ra2392916df2aec");
  _r1acf27e9365839 = n((r) => {
    (r.stopImmediatePropagation(),
      this.removeEventListener(_ifd7c1208e3417e._ra93f33360c3a28, this._r1acf27e9365839),
      (this.selected = !0));
  }, "_r1acf27e9365839");
}
