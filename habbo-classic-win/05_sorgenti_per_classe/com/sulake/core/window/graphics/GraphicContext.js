// Estratto da HabboAirLauncher.deobf.js, riga 127963.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/GraphicContext.as
// Nome offuscato: _i8bd2895b29a5ff

class a extends Sprite {
  static {
    n(this, "GraphicContext");
  }
  static _re1210de125ab70 = 0;
  static GC_TYPE_BITMAP = 1;
  static const_1322 = 2;
  static GC_TYPE_CONTAINER = 4;
  static GC_TYPE_SHAPE = 8;
  static GC_TYPE_MORPH_SHAPE = 16;
  static const_559 = 64;
  static const_1113 = 128;
  static const_758 = 256;
  static _rbfe8fa11411509 = 16e4;
  static _counter = 0;
  static var_1377 = 0;
  var_364 = null;
  _r7855355c672b27 = !0;
  var_1460 = !1;
  _disposed = !1;
  _rectangle;
  _mask = null;
  _r8a3e798baea02b = null;
  _r109ae4d2cbdcb9 = null;
  _r130a266ea4f7bb = !1;
  _r27e69a28bca300 = !1;
  _r39f37d4ad43dbd = [];
  _r4dce791ec32925 = null;
  _ra61e3c60e0213a = null;
  _rd2a5e094d650c2 = !1;
  _rfd8b94bc0e5d90 = 0;
  _r900e0fe6c1c29d = 0;
  static get _rfcd65938eba8e6() {
    return this._counter;
  }
  static get allocatedByteCount() {
    return this.var_1377;
  }
  get parent() {
    return super.parent;
  }
  set parent(e) {
    super.parent = e;
  }
  get blend() {
    return this.alpha;
  }
  set blend(e) {
    (this.alpha !== e && this._r4dce791ec32925 != null && (this._rd2a5e094d650c2 = !0), (this.alpha = e));
  }
  get mouse() {
    return super.mouseEnabled;
  }
  set mouse(e) {
    super.mouseEnabled = e;
  }
  _r704cc8ac099894() {
    return !0;
  }
  get disposed() {
    return this._disposed;
  }
  get filters() {
    return this._r39f37d4ad43dbd;
  }
  set filters(e) {
    this._r39f37d4ad43dbd = e;
    let r = e.find((s) => s instanceof Pf && !s.inner),
      t = e.filter((s) => s !== r);
    ((this._r4dce791ec32925 = r ?? null), (this._rd2a5e094d650c2 = !0));
    let i = this._r8a3e798baea02b;
    if ((i != null && (i.filters = []), this._r4dce791ec32925 == null)) {
      ((super.filters = []), i != null && (i.filters = e), this._r19a66336a3cedc());
      return;
    }
    ((super.filters = []), i != null && (i.filters = t));
  }
  get liveResizeApproximation() {
    return this._r27e69a28bca300;
  }
  set _r201b2265162a24(e) {
    this._r130a266ea4f7bb = e;
  }
  constructor(e, r, t) {
    switch (
      (super(),
      (a._counter += 1),
      (this._rectangle = t?.clone() ?? new D()),
      (this.name = e),
      (this.mouseEnabled = !1),
      (this.doubleClickEnabled = !1),
      (this.x = this._rectangle.x),
      (this.y = this._rectangle.y),
      r)
    ) {
      case a.GC_TYPE_BITMAP:
        ((this.var_1460 = !0),
          this.setDisplayObject(new _i3a5c6f457acdad()),
          this.allocateDrawBuffer(this._rectangle.width, this._rectangle.height));
        break;
      case a.const_1322: {
        let i = new Pt();
        ((i.width = this._rectangle.width),
          (i.height = this._rectangle.height),
          (i.type = eo.INPUT),
          this.setDisplayObject(i));
        break;
      }
      case a.GC_TYPE_SHAPE:
        this.setDisplayObject(new _ic6b6cdf3ccea3d());
        break;
      case a.GC_TYPE_MORPH_SHAPE:
        this.setDisplayObject(new _ie543c9890905ee());
        break;
      case a.GC_TYPE_CONTAINER:
        this.setDisplayObject(new Sprite());
        break;
      case a.const_758:
      case a._re1210de125ab70:
        break;
      default:
        throw new Error(`Unsupported graphic context type: ${r}!`);
    }
    this.refreshBoundsRect();
  }
  dispose() {
    if (!this._disposed) {
      for (this.parent != null && this.parent.removeChild(this); this.numChildContexts > 0;)
        this.removeChildContextAt(0);
      if ((this.var_1460 && this._rd76526bdfd6cb5(), this.var_364 != null))
        for (; this.var_364.numChildren > 0;) this.var_364.removeChildAt(0);
      for (
        this.var_364 = null, this._r8a3e798baea02b = null, this._r19a66336a3cedc();
        this.numChildren > 0;
      )
        this.removeChildAt(0);
      ((this._mask = null), (this._r27e69a28bca300 = !1), (this._disposed = !0), (a._counter -= 1));
    }
  }
  toString() {
    return `[object GraphicContext name="${this.name}"]`;
  }
  _rb843d6e0e8f204(e) {
    ((this.x = e.x), (this.y = e.y));
  }
  getDrawRegion() {
    return this._rectangle.clone();
  }
  setDrawRegion(e, r, t) {
    if (e.width < 1 || e.height < 1) return null;
    let i = n((h) => `${h}:${this.name}`, "_id0415e34c76507"),
      s = this.getDisplayObject(),
      o = !this._r10b0a32d3c47d9(this._rectangle, e),
      d = this._rectangle.width !== e.width || this._rectangle.height !== e.height,
      c = !this._r10b0a32d3c47d9(this._r109ae4d2cbdcb9, t),
      f = this.var_1460 && r,
      l = this.var_1460 && r && !this._r0fafb5967540c5(e.width, e.height),
      b = l && this._r3efcbbbc4c09e1(e, s);
    if (!o && !c && !f)
      return (
        _i887b49f7dd4fac("GraphicContext.setDrawRegion.noop", 0, "byPhaseWindow", i("GraphicContext.setDrawRegion.noop")),
        null
      );
    let _ = null;
    return (
      f
        ? b
          ? (_ = this.fetchDrawBuffer())
          : (_ = _i42bc3fcc4cb515(
              "GraphicContext.setDrawRegion.allocateBuffer",
              () => this.allocateDrawBuffer(e.width, e.height),
              "byPhaseWindow",
              i("GraphicContext.setDrawRegion.allocateBuffer"),
            ))
        : b &&
          _i887b49f7dd4fac(
            "GraphicContext.setDrawRegion.liveResizeApproximation",
            0,
            "byPhaseWindow",
            i("GraphicContext.setDrawRegion.liveResizeApproximation"),
          ),
      o &&
        _i42bc3fcc4cb515(
          "GraphicContext.setDrawRegion.applyRect",
          () => {
            ((this.x = e.x),
              (this.y = e.y),
              (this._rectangle.x = e.x),
              (this._rectangle.y = e.y),
              (this._rectangle.width = e.width),
              (this._rectangle.height = e.height));
          },
          "byPhaseWindow",
          i("GraphicContext.setDrawRegion.applyRect"),
        ),
      d &&
        _i42bc3fcc4cb515(
          "GraphicContext.setDrawRegion.refreshBoundsRect",
          () => this.refreshBoundsRect(),
          "byPhaseWindow",
          i("GraphicContext.setDrawRegion.refreshBoundsRect"),
        ),
      this.var_1460 && s instanceof _i3a5c6f457acdad && d && this._r048363f0a0c393(s, e.width, e.height),
      c &&
        _i42bc3fcc4cb515(
          "GraphicContext.setDrawRegion.updateMask",
          () => {
            s instanceof Pt && s._r4871e480745859()
              ? (this._mask != null &&
                  (super.removeChild(this._mask), this._mask.graphics.clear(), (this._mask = null)),
                s._rf82950eda7e75c(t != null ? t.clone() : null),
                (s.mask = null),
                (this._r109ae4d2cbdcb9 = t?.clone() ?? null))
              : t != null && s != null
                ? (s instanceof Pt && s._rf82950eda7e75c(null),
                  this._mask == null &&
                    ((this._mask = new _ic6b6cdf3ccea3d()), (this._mask.visible = !0), super.addChild(this._mask)),
                  this._mask.graphics.clear(),
                  this._mask.graphics.beginFill(255),
                  this._mask.graphics.drawRect(t.x, t.y, t.width, t.height),
                  this._mask.graphics.endFill(),
                  (s.mask = this._mask),
                  (this._r109ae4d2cbdcb9 = t.clone()))
                : (this._mask != null &&
                    (super.removeChild(this._mask),
                    this._mask.graphics.clear(),
                    s != null && (s.mask = null),
                    (this._mask = null)),
                  s instanceof Pt && s._rf82950eda7e75c(null),
                  (this._r109ae4d2cbdcb9 = null));
          },
          "byPhaseWindow",
          i("GraphicContext.setDrawRegion.updateMask"),
        ),
      (d || c || l) && this._r4dce791ec32925 != null && (this._rd2a5e094d650c2 = !0),
      (this._r27e69a28bca300 = b),
      _
    );
  }
  getDisplayObject() {
    return this._r8a3e798baea02b;
  }
  setDisplayObject(e) {
    let r = this._r8a3e798baea02b;
    (r != null && (super.contains(r) && super.removeChild(r), (r.filters = [])), (this._r8a3e798baea02b = e));
    let t = this._ra61e3c60e0213a != null ? 1 : 0;
    return (
      super.addChildAt(e, t),
      e instanceof Pt && e._r4871e480745859()
        ? (e._rf82950eda7e75c(this._r109ae4d2cbdcb9), (e.mask = null))
        : (e instanceof Pt && e._rf82950eda7e75c(null), (e.mask = this._mask)),
      (e.filters =
        this._r4dce791ec32925 == null
          ? this._r39f37d4ad43dbd
          : this._r39f37d4ad43dbd.filter((i) => i !== this._r4dce791ec32925)),
      (this._rd2a5e094d650c2 = !0),
      r
    );
  }
  getAbsoluteMousePosition(e) {
    ((e.x = this.stage?.mouseX ?? 0), (e.y = this.stage?.mouseY ?? 0));
  }
  getRelativeMousePosition(e) {
    let r = this.getDisplayObject();
    ((e.x = r?.mouseX ?? 0), (e.y = r?.mouseY ?? 0));
  }
  fetchDrawBuffer() {
    if (!this.var_1460) return null;
    let e = this.getDisplayObject();
    return e instanceof _i3a5c6f457acdad ? e.bitmapData : null;
  }
  _r8f28ac7a198abd(e) {
    (this.graphics.clear(),
      this.graphics.lineStyle(1, 4278255360),
      this.graphics.drawRect(0, 0, this.width, this.height),
      e != null &&
        (this.graphics.lineStyle(1, 4278190335), this.graphics.drawRect(e.x, e.y, e.width, e.height)));
  }
  allocateDrawBuffer(e, r) {
    return _i42bc3fcc4cb515(
      "GraphicContext.allocateDrawBuffer",
      () => {
        if (!this.var_1460) return null;
        let t = this.getDisplayObject();
        if (!(t instanceof _i3a5c6f457acdad)) return null;
        let i = t.bitmapData;
        return (
          i != null &&
            (i.width !== e || i.height !== r) &&
            ((t.bitmapData = null), (a.var_1377 -= i.width * i.height * 4), i.dispose(), (i = null)),
          i == null &&
            e > 0 &&
            r > 0 &&
            ((i = new Bd(this, e, r, this._r7855355c672b27, 16777215)),
            (a.var_1377 += i.width * i.height * 4),
            (t.bitmapData = i),
            _i887b49f7dd4fac(
              "GraphicContext.allocateDrawBuffer.bytes",
              i.width * i.height * 4,
              "byAllocationOwner",
              this.name,
            )),
          i != null && this._r048363f0a0c393(t, e, r),
          (this._r27e69a28bca300 = !1),
          i
        );
      },
      "byPhaseWindow",
      `GraphicContext.allocateDrawBuffer:${this.name}`,
    );
  }
  _rd76526bdfd6cb5() {
    if (!this.var_1460) return;
    let e = this.getDisplayObject();
    if (e instanceof _i3a5c6f457acdad && e.bitmapData != null) {
      let r = e.bitmapData;
      ((e.bitmapData = null), (a.var_1377 -= r.width * r.height * 4), r.dispose());
    }
    this._r27e69a28bca300 = !1;
  }
  refreshBoundsRect() {
    (this.graphics.clear(),
      (this._r0203ab2933f479().hitArea = {
        contains: n(
          (e, r) => e >= 0 && r >= 0 && e < this._rectangle.width && r < this._rectangle.height,
          "contains",
        ),
      }));
  }
  _r0fafb5967540c5(e, r) {
    let t = this.getDisplayObject();
    return t instanceof _i3a5c6f457acdad && t.bitmapData != null && t.bitmapData.width === e && t.bitmapData.height === r;
  }
  _r10b0a32d3c47d9(e, r) {
    return e == null || r == null
      ? e == null && r == null
      : e.x === r.x && e.y === r.y && e.width === r.width && e.height === r.height;
  }
  _r3efcbbbc4c09e1(e, r) {
    if (!(r instanceof _i3a5c6f457acdad) || r.bitmapData == null || !this._r130a266ea4f7bb) return !1;
    let t = Math.max(r.bitmapData.width * r.bitmapData.height, 0),
      i = Math.max(Math.ceil(e.width) * Math.ceil(e.height), 0);
    return Math.max(t, i) >= a._rbfe8fa11411509;
  }
  _r048363f0a0c393(e, r, t) {
    (e.width !== r && (e.width = r), e.height !== t && (e.height = t));
  }
  setupChildContainer() {
    return (
      this.var_364 == null &&
        ((this.var_364 = new Sprite()),
        (this.var_364.name = `${this.name} - Child Container`),
        (this.var_364.mouseEnabled = !1),
        this.addChild(this.var_364)),
      this.var_364
    );
  }
  _reb212f230410d6() {
    this.var_364 != null &&
      (this.removeChild(this.var_364), (this.var_364 = null));
  }
  get numChildContexts() {
    return this.var_364?.numChildren ?? 0;
  }
  _r5748c5b1b0ad6c(e) {
    let r = this.setupChildContainer().addChild(e);
    return (this._r4dce791ec32925 != null && (this._rd2a5e094d650c2 = !0), r);
  }
  _rf033e82caa2f15(e, r) {
    let t = this.setupChildContainer().addChildAt(e, r);
    return (this._r4dce791ec32925 != null && (this._rd2a5e094d650c2 = !0), t);
  }
  _rc03fde0de9f544(e) {
    return this.setupChildContainer().getChildAt(e);
  }
  _r5661835dba2637(e) {
    return this.setupChildContainer().getChildByName(e);
  }
  _r2b275131261569(e) {
    return this.setupChildContainer().getChildIndex(e);
  }
  var_42(e) {
    let r = this.setupChildContainer().removeChild(e);
    return (this._r4dce791ec32925 != null && (this._rd2a5e094d650c2 = !0), r);
  }
  removeChildContextAt(e) {
    let r = this.setupChildContainer().getChildAt(e);
    return r == null ? null : this.var_42(r);
  }
  setChildContextIndex(e, r) {
    let t = e;
    if (t == null) throw new Error("Provided child must implement IGraphicContext!");
    (this.setupChildContainer().setChildIndex(t, r),
      this._r4dce791ec32925 != null && (this._rd2a5e094d650c2 = !0));
  }
  _rcde724da86fb53(e, r) {
    (this.setupChildContainer().swapChildren(e, r),
      this._r4dce791ec32925 != null && (this._rd2a5e094d650c2 = !0));
  }
  _r7cf8e444d2f2f9(e, r) {
    (this.setupChildContainer().swapChildrenAt(e, r),
      this._r4dce791ec32925 != null && (this._rd2a5e094d650c2 = !0));
  }
  _r615a65a68c43c4() {
    this._r4dce791ec32925 != null && (this._rd2a5e094d650c2 = !0);
  }
  _r18f2e8d6843ef0() {
    if (this._r4dce791ec32925 == null || !this._rd2a5e094d650c2 || !this.visible) {
      this.visible || this._r9356234dacf73d();
      return;
    }
    let e = globalThis.__habboAirLauncher?.application?.renderer?.extract;
    if (e == null) return;
    let r = this._rd6d22ec4ce46ce();
    if (r == null) return;
    r.visible = !1;
    let t = null,
      i = this.fetchDrawBuffer();
    if ((i instanceof A && (t = i._r1450a5f82d6108()), t == null))
      try {
        t = e.canvas({
          target: this._r0203ab2933f479(),
          resolution: 1,
          antialias: !1,
          clearColor: "#00000000",
        });
      } catch {
        r.visible = !1;
        return;
      }
    let s = this._r8b2ceeca6772c5(t, this._r4dce791ec32925);
    if (s == null) {
      r.visible = !1;
      return;
    }
    let o = _i5183d3213c4d99_(s),
      d = Math.max(1, Math.ceil(s.width || 1)),
      c = Math.max(1, Math.ceil(s.height || 1)),
      f = o?.getImageData(0, 0, d, c) ?? null;
    if (f == null) {
      r.visible = !1;
      return;
    }
    let l = A._r0a52af92aacbc7(d, c, f.data),
      b = r.bitmapData;
    ((r.bitmapData = l),
      (r.x = -this._rfd8b94bc0e5d90),
      (r.y = -this._r900e0fe6c1c29d),
      (r.visible = !0),
      (this._rd2a5e094d650c2 = !1),
      b?.dispose());
  }
  _rd6d22ec4ce46ce() {
    if (this._ra61e3c60e0213a != null) return this._ra61e3c60e0213a;
    let e = new _i3a5c6f457acdad();
    return (
      (e.name = `${this.name} - Drop Shadow`),
      (e.mouseEnabled = !1),
      (e.doubleClickEnabled = !1),
      (e.visible = !1),
      (this._ra61e3c60e0213a = e),
      super.addChildAt(e, 0),
      this._ra61e3c60e0213a
    );
  }
  _r9356234dacf73d() {
    this._ra61e3c60e0213a != null && (this._ra61e3c60e0213a.visible = !1);
  }
  _r19a66336a3cedc() {
    if (this._ra61e3c60e0213a == null) return;
    let e = this._ra61e3c60e0213a.bitmapData;
    (super.contains(this._ra61e3c60e0213a) && super.removeChild(this._ra61e3c60e0213a),
      (this._ra61e3c60e0213a.bitmapData = null),
      e?.dispose(),
      (this._ra61e3c60e0213a = null),
      (this._rfd8b94bc0e5d90 = 0),
      (this._r900e0fe6c1c29d = 0));
  }
  _r8b2ceeca6772c5(e, r) {
    if (r.inner) return null;
    let t = Math.max(1, Math.ceil(e.width || 1)),
      i = Math.max(1, Math.ceil(e.height || 1)),
      s = Math.max(1, Math.round(r.quality * Math.max(1, r.strength))),
      o = (r.angle * Math.PI) / 180,
      d = Math.max(0, Math.max(r.blurX, r.blurY)),
      c = Math.cos(o) * r.distance,
      f = Math.sin(o) * r.distance,
      l = Math.ceil(d * 2 + Math.max(0, -c)),
      b = Math.ceil(d * 2 + Math.max(0, -f)),
      _ = Math.ceil(d * 2 + Math.max(0, c)),
      h = Math.ceil(d * 2 + Math.max(0, f)),
      p = _i295affcc6e4d03_(t + l + _, i + b + h),
      m = _i5183d3213c4d99_(p);
    if (p == null || m == null) return null;
    let v = l,
      w = b;
    (m.clearRect(0, 0, p.width, p.height),
      m.save(),
      (m.shadowColor = _if7bbc31ff422c6_(r.color, r.alpha)),
      (m.shadowBlur = d),
      (m.shadowOffsetX = c),
      (m.shadowOffsetY = f));
    for (let I = 0; I < s; I++) m.drawImage(e, v, w);
    return (m.restore(), (this._rfd8b94bc0e5d90 = l), (this._r900e0fe6c1c29d = b), p);
  }
}
