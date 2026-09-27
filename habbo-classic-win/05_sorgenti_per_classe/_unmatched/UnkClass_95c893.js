// Extracted from HabboAirLauncher.deobf.js, line 146798.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i95c893e66f605d

class a {
  constructor(e) {
    this._bcFloorPlanEditor = e;
    ((this._bcFloorPlanEditor.heightMapBitmapElement.procedure = this._rd26545a5b422a8),
      (this._bcFloorPlanEditor.heightMapMouseCapturer.procedure = this._rd26545a5b422a8),
      (this._r5f3697efbbb32d = e._r223f1e7a35055c),
      (this._rd3d72220d23bb8 = this._bcFloorPlanEditor.tile_preview_entry("floor_editor_tile_base_png")),
      (this._r9fe866822ed137 = this._bcFloorPlanEditor.tile_preview_entry("floor_editor_tile_entry_png")),
      (this._r3ad71a5155e84b = this._bcFloorPlanEditor.tile_preview_entry("floor_editor_tile_base_large_png")),
      (this._r8c5192569da765 = this._bcFloorPlanEditor.tile_preview_entry("floor_editor_tile_entry_large_png")));
    for (let r = 0; r < a._r2f9981e261eb71; r += 1) {
      let t = 0.6 - (r / a._r2f9981e261eb71) * 0.85;
      (t < 0 && (t = 1 + t),
        this._rbaa6114a62c4fb.push(a._rdb69f0fcfe9b77(t, 1, 0.5)),
        this._r733421ffced3a2.push(a._rdb69f0fcfe9b77(t, 0.33, 0.4)));
    }
  }
  static {
    n(this, "UnkClass_95c893");
  }
  static _r2f9981e261eb71 = 30;
  _r1d6e828dd04420 = !1;
  _r43adf083845d54 = 0;
  _rd3d72220d23bb8;
  _r9fe866822ed137;
  _r3ad71a5155e84b;
  _r8c5192569da765;
  _rbaa6114a62c4fb = [];
  _r733421ffced3a2 = [];
  _r39d2669af4dd26 = null;
  _r906a5ae3d98fa1 = new E(-1e3, -1e3);
  _r5f3697efbbb32d;
  _recfa1059b073b2 = !1;
  zoomLevel = 1;
  _radf02197488469 = new Map();
  _rb7ea0e64551795 = new Map();
  _re9af3ba5c20b0f = new Map();
  _r6cf696dd4fb385 = new Map();
  _r1440b52fae21b8 = new E(-1e3, -1e3);
  _re41b560af5c509 = !1;
  get _r4c29978b29b5af() {
    return this._rbaa6114a62c4fb;
  }
  set _ra1800723b87249(e) {
    this._r43adf083845d54 = Math.min(a._r2f9981e261eb71, Math.max(0, e));
  }
  get _ra1800723b87249() {
    return this._r43adf083845d54;
  }
  set drawing(e) {
    this._r1d6e828dd04420 = e;
  }
  _rf8367813562f1c() {
    ((this._r39d2669af4dd26 = this._bcFloorPlanEditor.heightMapBitmapElement),
      (this._r906a5ae3d98fa1 = new E(-1e3, -1e3)),
      this.updateView());
  }
  get _r4bc023c9ade89a() {
    return this._recfa1059b073b2;
  }
  set _r4bc023c9ade89a(e) {
    this._recfa1059b073b2 = e;
  }
  get _r577ea1b502f801() {
    return this.zoomLevel;
  }
  set _r577ea1b502f801(e) {
    let r = Math.trunc(e);
    r < 1 || r > 2 || (this.zoomLevel = r);
  }
  _rd26545a5b422a8 = n((e, r) => {
    if (this._r39d2669af4dd26?.bitmap == null) return;
    let t = e;
    if (t == null) return;
    let i;
    if (this._recfa1059b073b2) {
      e.type === u.CLICK &&
        ((i = this._rffd7b06289c7cb(t, r)),
        (this._r43adf083845d54 = this._bcFloorPlanEditor._r223f1e7a35055c._rfa5cc9422dc3ef(i.x, i.y)),
        this._bcFloorPlanEditor.updateColorSliderTrack(this._r43adf083845d54));
      return;
    }
    if (
      (e.type === u.UP ||
        e.type === u.UP_OUTSIDE ||
        e.type === u.DOWN ||
        (this._r1d6e828dd04420 && e.type === u.MOVE)) &&
      ((i = this._rffd7b06289c7cb(t, r)),
      (e.type === u.UP || e.type === u.UP_OUTSIDE) &&
        ((this._r1d6e828dd04420 = !1),
        this._re41b560af5c509 &&
          ((this._re41b560af5c509 = !1), this._bcFloorPlanEditor._r223f1e7a35055c._r1a092d01932bb8())),
      e.type === u.DOWN &&
        ((this._r1d6e828dd04420 = !0),
        (this._r906a5ae3d98fa1 = new E(-1e3, -1e3)),
        t.shiftKey &&
          ((this._re41b560af5c509 = !0),
          (this._r1440b52fae21b8 = i),
          this._bcFloorPlanEditor._r223f1e7a35055c._rb9742298f2291a()),
        this._r5ce623d5149bd7(i.x, i.y),
        this.updateView(),
        (this._r906a5ae3d98fa1 = i)),
      this._r1d6e828dd04420 && e.type === u.MOVE)
    ) {
      if (this._re41b560af5c509) {
        let s = Math.min(this._r1440b52fae21b8.x, i.x),
          o = Math.max(this._r1440b52fae21b8.x, i.x),
          d = Math.min(this._r1440b52fae21b8.y, i.y),
          c = Math.max(this._r1440b52fae21b8.y, i.y),
          f = this._bcFloorPlanEditor._r223f1e7a35055c._r4157aa584a449b(o),
          l = this._bcFloorPlanEditor._r223f1e7a35055c._r9760c0b54f9aa1(c);
        if (!f && !l) return;
        for (; c >= d && !l;) ((c -= 1), (l = this._bcFloorPlanEditor._r223f1e7a35055c._r9760c0b54f9aa1(c)));
        for (; o >= s && !f;) ((o -= 1), (f = this._bcFloorPlanEditor._r223f1e7a35055c._r4157aa584a449b(o)));
        if (!f || !l) return;
        (this._bcFloorPlanEditor._r223f1e7a35055c._rd0bfcd5a4f7730(),
          this._bcFloorPlanEditor._r223f1e7a35055c._r9760c0b54f9aa1(c),
          this._bcFloorPlanEditor._r223f1e7a35055c._r4157aa584a449b(o));
        for (let b = s; b <= o; b += 1) for (let _ = d; _ <= c; _ += 1) this._r5ce623d5149bd7(b, _);
        this.updateView();
      } else {
        (this._r906a5ae3d98fa1.x !== i.x || this._r906a5ae3d98fa1.y !== i.y) &&
          this._r5ce623d5149bd7(i.x, i.y);
        let s = this._r08fed1d21f80fc(i);
        (Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && this.updateView();
      }
      this._r906a5ae3d98fa1 = i;
    }
  }, "_rd26545a5b422a8");
  _r08fed1d21f80fc(e) {
    this._r906a5ae3d98fa1.x === -1e3 &&
      this._r906a5ae3d98fa1.y === -1e3 &&
      ((this._r906a5ae3d98fa1.x = e.x), (this._r906a5ae3d98fa1.y = e.y));
    let r = e.x - this._r906a5ae3d98fa1.x,
      t = e.y - this._r906a5ae3d98fa1.y,
      i = TW._rd09a8a91a3ba99(this._r906a5ae3d98fa1.x, this._r906a5ae3d98fa1.y, e.x, e.y);
    for (let s of i)
      (this._r906a5ae3d98fa1.x === s.x && this._r906a5ae3d98fa1.y === s.y) ||
        (e.x === s.x && e.y === s.y) ||
        this._r5ce623d5149bd7(s.x, s.y);
    return { x: r, y: t };
  }
  _r9922232f126783(e, r) {
    let t = new E(e.localX, e.localY);
    return (
      r.convertPointFromLocalToGlobalSpace(t),
      this._bcFloorPlanEditor.heightMapBitmapElement.convertPointFromGlobalToLocalSpace(t),
      t
    );
  }
  _rffd7b06289c7cb(e, r) {
    let t = this._r9922232f126783(e, r);
    return this._r8681463b2dc874(t.x, t.y);
  }
  _r5ce623d5149bd7(e, r) {
    let t;
    switch (this._bcFloorPlanEditor.drawMode) {
      case this._bcFloorPlanEditor._r4c0e57295302c6[0]:
        this._bcFloorPlanEditor._r223f1e7a35055c._r20989df6717cd1(e, r, this._r43adf083845d54);
        break;
      case this._bcFloorPlanEditor._r4c0e57295302c6[1]:
        this._bcFloorPlanEditor._r223f1e7a35055c._r20989df6717cd1(e, r, -1);
        break;
      case this._bcFloorPlanEditor._r4c0e57295302c6[2]:
        ((t = this._bcFloorPlanEditor._r223f1e7a35055c._rfa5cc9422dc3ef(e, r)),
          t >= 0 &&
            this._bcFloorPlanEditor._r223f1e7a35055c._r20989df6717cd1(
              e,
              r,
              Math.min(a._r2f9981e261eb71 - 1, t + 1),
            ));
        break;
      case this._bcFloorPlanEditor._r4c0e57295302c6[3]:
        ((t = this._bcFloorPlanEditor._r223f1e7a35055c._rfa5cc9422dc3ef(e, r)),
          t >= 0 && this._bcFloorPlanEditor._r223f1e7a35055c._r20989df6717cd1(e, r, Math.max(0, t - 1)));
        break;
      case this._bcFloorPlanEditor._r4c0e57295302c6[4]:
        ((t = this._bcFloorPlanEditor._r223f1e7a35055c._rfa5cc9422dc3ef(e, r)),
          t >= 0 && (this._bcFloorPlanEditor._r223f1e7a35055c.entryPoint = new E(e, r)));
        break;
    }
  }
  updateView() {
    let e = [],
      r = Number.MAX_SAFE_INTEGER,
      t = Number.MAX_SAFE_INTEGER,
      i = Number.MIN_SAFE_INTEGER,
      s = Number.MIN_SAFE_INTEGER;
    for (let c = 0; c < this._r5f3697efbbb32d._reba6d9dec10c70; c += 1)
      for (let f = 0; f < this._r5f3697efbbb32d._r6ec593f3f08d0b; f += 1) {
        let l = this._rcba606ed99c30c(f, c);
        if (
          ((r = Math.min(r, l.x)),
          (t = Math.min(t, l.y)),
          (i = Math.max(i, l.x)),
          (s = Math.max(s, l.y)),
          this._r5f3697efbbb32d._rc9c271dfd2d1f0(f, c))
        )
          e.push({ point: l, image: this._r9bad304451c06c() });
        else {
          let b = Math.min(this._r5f3697efbbb32d._rfa5cc9422dc3ef(f, c), a._r2f9981e261eb71 - 1);
          b >= 0 &&
            e.push({
              point: l,
              image: this._r4dcc419fb0442e(b, this._r5f3697efbbb32d._racc1d853e05d24(f, c)),
            });
        }
      }
    let o = new A(i - r + 18, s - t + 27, !1, 0),
      d = new E(-r, -t);
    for (let c of e) o.copyPixels(c.image, c.image.rect, c.point.add(d));
    this._bcFloorPlanEditor.heightMapBitmapElement.bitmap = o;
  }
  _r4dcc419fb0442e(e, r) {
    let t = r
        ? this.zoomLevel === 1
          ? this._rb7ea0e64551795
          : this._r6cf696dd4fb385
        : this.zoomLevel === 1
          ? this._radf02197488469
          : this._re9af3ba5c20b0f,
      i = t.get(e);
    if (i != null) return i;
    let s = r ? this._r733421ffced3a2[e] : this._rbaa6114a62c4fb[e],
      o = (this.zoomLevel === 1 ? this._rd3d72220d23bb8 : this._r3ad71a5155e84b).clone();
    return (o.colorTransform(o.rect, new UnkClass_4210dc(s[0], s[1], s[2])), t.set(e, o), o);
  }
  _r9bad304451c06c() {
    return this.zoomLevel === 1 ? this._r9fe866822ed137 : this._r8c5192569da765;
  }
  _r8681463b2dc874(e, r) {
    let t = e / 16 / this.zoomLevel,
      i = r / 8 / this.zoomLevel,
      s = this._r5f3697efbbb32d._reba6d9dec10c70,
      o = i + (t - s / 2),
      d = i - (t - s / 2);
    return new E(Math.trunc(o), Math.trunc(d));
  }
  _rcba606ed99c30c(e, r) {
    return new E(this.zoomLevel * 8 * (e - r), this.zoomLevel * 4 * (e + r));
  }
  static _rdb69f0fcfe9b77(e, r, t) {
    let i, s, o;
    if (r === 0) i = s = o = t;
    else {
      let d = n(
          (l, b, _) => (
            _ < 0 && (_ += 1),
            _ > 1 && (_ -= 1),
            _ < 0.16666666666666666
              ? l + (b - l) * 6 * _
              : _ < 0.5
                ? b
                : _ < 0.6666666666666666
                  ? l + (b - l) * (0.6666666666666666 - _) * 6
                  : l
          ),
          "_ibfbbcdde7820cf",
        ),
        c = t < 0.5 ? t * (1 + r) : t + r - t * r,
        f = 2 * t - c;
      ((i = d(f, c, e + 1 / 3)), (s = d(f, c, e)), (o = d(f, c, e - 1 / 3)));
    }
    return [i, s, o];
  }
}
