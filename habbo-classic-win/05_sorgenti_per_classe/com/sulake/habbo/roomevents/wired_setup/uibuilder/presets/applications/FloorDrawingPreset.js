// Extracted from HabboAirLauncher.deobf.js, line 351840.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/applications/FloorDrawingPreset.as
// Obfuscated name: _i11dd7f30d6b093

class a extends WiredUIPreset {
  static {
    n(this, "FloorDrawingPreset");
  }
  static _rf77c12e285894b = [
    "fp_border_N_png",
    "fp_border_NE_png",
    "fp_border_E_png",
    "fp_border_SE_png",
    "fp_border_S_png",
    "fp_border_SW_png",
    "fp_border_W_png",
    "fp_border_NW_png",
  ];
  static _r1b9cbec25e87e7 = [0, 0.4, 0.8];
  static _r8ad628657f684d = [0.2, 0.2, 0.2];
  var_479;
  _r8731de8df5a80c = null;
  _rd3d72220d23bb8;
  _r9fe866822ed137;
  _rb75f204c42402a;
  _raaa3f8555860a8;
  _r1d6e828dd04420 = !1;
  _r906a5ae3d98fa1 = new E(-1e3, -1e3);
  _r1440b52fae21b8 = new E(-1e3, -1e3);
  _re41b560af5c509 = !1;
  _drawMode = "add_tile";
  var_610 = new E(0, 0);
  _r5e21b43d6abe8a = null;
  _r532083fd6e7424;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._r8731de8df5a80c = e),
      (this.var_479 = this.var_102._r7f887955812c30()),
      (this.var_479.bitmapWindow.procedure = this._rd26545a5b422a8),
      (this._rd3d72220d23bb8 = this._r18c5899cce30a3("floor_editor_tile_base_png")),
      (this._r9fe866822ed137 = this._r18c5899cce30a3("floor_editor_tile_entry_png")),
      (this._r532083fd6e7424 = a._rf77c12e285894b.map((r) => this._r18c5899cce30a3(r))),
      (this._rb75f204c42402a = this._rd3d72220d23bb8.clone()),
      this._rb75f204c42402a.colorTransform(
        this._rd3d72220d23bb8.rect,
        new UnkClass_4210dc(a._r1b9cbec25e87e7[0], a._r1b9cbec25e87e7[1], a._r1b9cbec25e87e7[2]),
      ),
      (this._raaa3f8555860a8 = this._rd3d72220d23bb8.clone()),
      this._raaa3f8555860a8.colorTransform(
        this._rd3d72220d23bb8.rect,
        new UnkClass_4210dc(a._r8ad628657f684d[0], a._r8ad628657f684d[1], a._r8ad628657f684d[2]),
      ));
  }
  setFloor(e) {
    ((this._r5e21b43d6abe8a = e), this.updateView());
  }
  setRootTile(e, r) {
    ((this.var_610.x = Math.trunc(e)), (this.var_610.y = Math.trunc(r)), this.updateView());
  }
  setMode(e) {
    this._drawMode = e;
  }
  _rd26545a5b422a8 = n((e, r) => {
    if (
      this.bitmapWindow == null ||
      this._r5e21b43d6abe8a == null ||
      (e.type !== u.UP &&
        e.type !== u.UP_OUTSIDE &&
        e.type !== u.DOWN &&
        !(this._r1d6e828dd04420 && e.type === u.MOVE))
    )
      return;
    let t = e,
      i = this.bitmapWindow.bitmap;
    if (i == null) return;
    let s = !1,
      o = Math.trunc(this.bitmapWindow.width / 2),
      d = Math.trunc(this.bitmapWindow.height / 2 - i.height / 2),
      c = a._r8681463b2dc874(t.localX - o, t.localY - d);
    if (
      ((e.type === u.UP || e.type === u.UP_OUTSIDE) &&
        ((this._r1d6e828dd04420 = !1),
        this._re41b560af5c509 && ((this._re41b560af5c509 = !1), this._r5e21b43d6abe8a._r1a092d01932bb8())),
      e.type === u.DOWN &&
        ((this._r1d6e828dd04420 = !0),
        (this._r906a5ae3d98fa1 = new E(-1e3, -1e3)),
        t.shiftKey &&
          ((this._re41b560af5c509 = !0),
          (this._r1440b52fae21b8 = c),
          this._r5e21b43d6abe8a._rb9742298f2291a()),
        this._r5ce623d5149bd7(c.x, c.y),
        (s = !0),
        this.updateView(),
        (this._r906a5ae3d98fa1 = c)),
      this._r1d6e828dd04420 && e.type === u.MOVE)
    ) {
      if (this._re41b560af5c509 && this._drawMode !== "set_root_tile") {
        let f = Math.min(this._r1440b52fae21b8.x, c.x),
          l = Math.max(this._r1440b52fae21b8.x, c.x),
          b = Math.min(this._r1440b52fae21b8.y, c.y),
          _ = Math.max(this._r1440b52fae21b8.y, c.y);
        this._r5e21b43d6abe8a._rd0bfcd5a4f7730();
        for (let h = f; h <= l; h += 1)
          for (let p = b; p <= _; p += 1) (this._r5ce623d5149bd7(h, p), (s = !0));
        this.updateView();
      } else if (this._r906a5ae3d98fa1.x !== c.x || this._r906a5ae3d98fa1.y !== c.y) {
        (this._r5ce623d5149bd7(c.x, c.y), (s = !0));
        let f = this._r08fed1d21f80fc(c);
        (Math.abs(f.x) > 0 || Math.abs(f.y) > 0) && this.updateView();
      }
      this._r906a5ae3d98fa1 = c;
    }
    s && this._r5e21b43d6abe8a._r048ec37a92d16f();
  }, "_rd26545a5b422a8");
  static _r8681463b2dc874(e, r) {
    let t = Math.trunc(e),
      i = Math.trunc(r),
      s = t / 16,
      o = i / 8,
      d = Math.trunc(o + s - 1),
      c = Math.trunc(o - s - 1);
    return new E(d, c);
  }
  _r08fed1d21f80fc(e) {
    this._r906a5ae3d98fa1.x === -1e3 &&
      this._r906a5ae3d98fa1.y === -1e3 &&
      ((this._r906a5ae3d98fa1.x = e.x), (this._r906a5ae3d98fa1.y = e.y));
    let r = e.x - this._r906a5ae3d98fa1.x,
      t = e.y - this._r906a5ae3d98fa1.y;
    for (let i of TW._rd09a8a91a3ba99(this._r906a5ae3d98fa1.x, this._r906a5ae3d98fa1.y, e.x, e.y))
      (this._r906a5ae3d98fa1.x === i.x && this._r906a5ae3d98fa1.y === i.y) ||
        (e.x === i.x && e.y === i.y) ||
        this._r5ce623d5149bd7(i.x, i.y);
    return { x: r, y: t };
  }
  _r5ce623d5149bd7(e, r) {
    let t = Math.trunc(e),
      i = Math.trunc(r);
    if (!this._rc3b823f3720a85(t, i)) return !1;
    let s = this._r5e21b43d6abe8a,
      o = lh.RADIUS - s._rd9447b93d769d1;
    switch (this._drawMode) {
      case "add_tile":
        s.setOccupied(t + o, i + o, !0);
        break;
      case "remove_tile":
        s.setOccupied(t + o, i + o, !1);
        break;
      case "set_root_tile":
        (this.setRootTileInternal(t - s._rd9447b93d769d1, i - s._rd9447b93d769d1),
          this._r8731de8df5a80c?.(this.var_610.x, this.var_610.y));
        break;
    }
    return !0;
  }
  setRootTileInternal(e, r) {
    ((this.var_610.x = Math.trunc(e)), (this.var_610.y = Math.trunc(r)));
  }
  _rc3b823f3720a85(e, r) {
    let t = this._r5e21b43d6abe8a,
      i = Math.trunc(e),
      s = Math.trunc(r);
    return i >= 0 && s >= 0 && i < t._r193a246cc0605f && s < t._r193a246cc0605f;
  }
  updateView() {
    if (this.bitmapWindow == null || this._r5e21b43d6abe8a == null) return;
    let e = this._r5e21b43d6abe8a,
      r = [],
      t = lh.RADIUS - e._rd9447b93d769d1;
    for (let l = 0; l < e._r193a246cc0605f; l += 1)
      for (let b = 0; b < e._r193a246cc0605f; b += 1)
        r.push({
          point: a._rcba606ed99c30c(b, l),
          image: e.isOccupied(b + t, l + t) ? this._rb75f204c42402a : this._raaa3f8555860a8,
        });
    this.var_610.x >= -e._rd9447b93d769d1 &&
      this.var_610.x <= e._rd9447b93d769d1 &&
      this.var_610.y >= -e._rd9447b93d769d1 &&
      this.var_610.y <= e._rd9447b93d769d1 &&
      r.push({
        point: a._rcba606ed99c30c(
          this.var_610.x + e._rd9447b93d769d1,
          this.var_610.y + e._rd9447b93d769d1,
        ),
        image: this._r9fe866822ed137,
      });
    for (let l = 0; l < e._r193a246cc0605f; l += 1)
      (r.push({ point: a._rcba606ed99c30c(l, -1), image: this._r532083fd6e7424[0] }),
        r.push({ point: a._rcba606ed99c30c(l, e._r193a246cc0605f), image: this._r532083fd6e7424[4] }));
    for (let l = 0; l < e._r193a246cc0605f; l += 1)
      (r.push({ point: a._rcba606ed99c30c(-1, l), image: this._r532083fd6e7424[6] }),
        r.push({ point: a._rcba606ed99c30c(e._r193a246cc0605f, l), image: this._r532083fd6e7424[2] }));
    (r.push({ point: a._rcba606ed99c30c(-1, -1), image: this._r532083fd6e7424[7] }),
      r.push({ point: a._rcba606ed99c30c(e._r193a246cc0605f, -1), image: this._r532083fd6e7424[1] }),
      r.push({
        point: a._rcba606ed99c30c(e._r193a246cc0605f, e._r193a246cc0605f),
        image: this._r532083fd6e7424[3],
      }),
      r.push({ point: a._rcba606ed99c30c(-1, e._r193a246cc0605f), image: this._r532083fd6e7424[5] }));
    let i = Number.MAX_SAFE_INTEGER,
      s = Number.MAX_SAFE_INTEGER,
      o = Number.MIN_SAFE_INTEGER,
      d = Number.MIN_SAFE_INTEGER;
    for (let l of r)
      ((i = Math.min(i, l.point.x)),
        (s = Math.min(s, l.point.y)),
        (o = Math.max(o, l.point.x + l.image.rect.width)),
        (d = Math.max(d, l.point.y + l.image.rect.height)));
    let c = new A(o - i, d - s, !1, this.var_40._r60aa9c8a95196d),
      f = new E(-i, -s);
    for (let l of r) c.copyPixels(l.image, l.image.rect, l.point.add(f));
    ((this.bitmapWindow.bitmap = c),
      this.var_479.setBitmapSize(c.width, c.height),
      this.resize());
  }
  static _rcba606ed99c30c(e, r) {
    return new E(8 * (e - r + 1), 4 * (e + r + 1));
  }
  _r18c5899cce30a3(e) {
    let t = this._roomEvents.assets.getAssetByName(e)?.content;
    if (t == null) throw new Error(`Missing floor editor bitmap asset: ${e}`);
    return t.clone();
  }
  get bitmapWindow() {
    return this.var_479 != null ? this.var_479.bitmapWindow : null;
  }
  get window() {
    return this.var_479.window;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this.var_479.resizeToWidth(e));
  }
  hasStaticWidth() {
    return this.var_479.hasStaticWidth();
  }
  get staticWidth() {
    return this.var_479.staticWidth;
  }
  get childPresets() {
    return [this.var_479];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this.var_479 = null),
      (this._r8731de8df5a80c = null),
      (this._r5e21b43d6abe8a = null),
      (this._rd3d72220d23bb8 = null),
      (this._r9fe866822ed137 = null),
      (this._rb75f204c42402a = null),
      (this._raaa3f8555860a8 = null),
      (this._r532083fd6e7424 = null));
  }
}
