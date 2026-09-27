// Estratto da HabboAirLauncher.deobf.js, riga 141852.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/WindowRendererItem.as
// Nome offuscato: _i2f9556e6e9e0e1

class a {
  static {
    n(this, "WindowRendererItem");
  }
  static _r08a5901dfbdb64 = 0;
  static RENDER_TYPE_SKIN = 1;
  static _r353e196f422ff6 = 2;
  static _rbfe8fa11411509 = 16e4;
  static _r0e4add9a90ad71 = 120;
  static _r8a61461cbd3723 = 180;
  static _r41866073377520 = 2;
  static _r8b22e98b9be6f9 = 32;
  static _rac16510db57b82 = 64;
  static _r0aa49f96954cc2 = 128;
  static POINT_ZERO = new E();
  static _r0bb182eddd3f8b = !1;
  static _rff271a34a7e36a = null;
  static _r7e30a0a3aadd8b = new Set();
  static _r323919d88d8abb = new Set();
  static MATRIX = new Pe();
  static COLOR_TRANSFORM = new _i4210dc3239901d();
  _buffer = null;
  _r4004c1bd6fe180;
  _disposed = !1;
  _refresh = !1;
  var_2936 = 4294967295;
  var_1808 = 0;
  _re2df880b5bc012 = !1;
  _r95a376d9bd019a = !1;
  _r298db5187a872a = 0;
  _rc0bedf3148c5e5 = 0;
  _r9be5685d68dd5a = 0;
  _r9d6a085bc0d8b2 = 0;
  _rf121ba88d71425 = 0;
  _rf43dff4a704561 = !1;
  _rb6a51aef6f4386 = !1;
  static get debug() {
    return this._r0bb182eddd3f8b;
  }
  static set debug(e) {
    this._r0bb182eddd3f8b = e;
  }
  get disposed() {
    return this._disposed;
  }
  get buffer() {
    return this._buffer;
  }
  constructor(e) {
    this._r4004c1bd6fe180 = e;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this._r4004c1bd6fe180 = null),
      this._rb4775479c0fb91(),
      (this._rf43dff4a704561 = !1),
      this._buffer != null && (this._buffer.dispose(), (this._buffer = null)));
  }
  purge() {}
  render(e, r, t, i, s) {
    let d = this._r4004c1bd6fe180?._rb9e325b3a92167(e.type, e.style) ?? null,
      c = e.background ? a._r353e196f422ff6 : a._r08a5901dfbdb64;
    d != null && d.isStateDrawable(this.var_1808) && (c = a.RENDER_TYPE_SKIN);
    let f = Math.max(e.renderingWidth, 1),
      l = Math.max(e.renderingHeight, 1),
      b = new D(0, 0, f, l),
      _ = !0,
      h = String(e.name ?? e._name ?? e.constructor?.name ?? "unknown"),
      p = n((R) => `${R}:${h}`, "_id0415e34c76507"),
      m = !e.testParamFlag(N.const_421),
      v = m && this._rb6a51aef6f4386,
      w = !m,
      I = e.getGraphicContext(!1),
      C = I instanceof Un ? I : null,
      W = !1;
    if (I != null) {
      (I instanceof Un && (this._r3ec5a382df419c(e, I, f, l), (I._r201b2265162a24 = this._re2df880b5bc012)),
        I.visible || (I.visible = !0));
      let R = e.testParamFlag(N.getWindowRendererItem),
        T = _i42bc3fcc4cb515(
          "WindowRendererItem.render.setDrawRegion",
          () => I.setDrawRegion(e.renderingRectangle, !e.testParamFlag(N.const_421), R ? i : null),
          "byPhaseWindow",
          p("WindowRendererItem.render.setDrawRegion"),
        );
      if (T != null) ((s = T), (this._refresh = !0), C?._r615a65a68c43c4());
      else if (m) {
        let S = I.fetchDrawBuffer();
        S instanceof A && (s = S);
      }
      W = I instanceof Un && I.liveResizeApproximation;
    }
    if (W && m)
      return (
        _i887b49f7dd4fac(
          "WindowRendererItem.render.liveResizeApproximation",
          0,
          "byPhaseWindow",
          p("WindowRendererItem.render.liveResizeApproximation"),
        ),
        (I.blend = e.blend),
        (this.var_2936 = this.var_1808),
        s
      );
    if (
      ((c === a.RENDER_TYPE_SKIN || (w && c !== a._r08a5901dfbdb64)) &&
        (this._buffer == null || this._buffer.width < f || this._buffer.height < l) &&
        _i42bc3fcc4cb515(
          "WindowRendererItem.render.allocateBuffer",
          () => {
            let R = this._r9f5d2b6e99fd5d(f),
              T = this._r9f5d2b6e99fd5d(l);
            (this._buffer?.dispose(),
              (this._buffer = new Bd(this, R, T, !0, e.color)),
              (this._refresh = !0),
              (_ = !1),
              _i887b49f7dd4fac("WindowRendererItem.render.allocateBuffer.bytes", R * T * 4, "byAllocationOwner", h));
          },
          "byPhaseWindow",
          p("WindowRendererItem.render.allocateBuffer"),
        ),
      c === a._r08a5901dfbdb64)
    )
      return (
        m &&
          s != null &&
          ((this._refresh = !1),
          s.fillRect(t, 0),
          C?._r615a65a68c43c4(),
          this._rfd7c0e69cc8f89(e) && this._r78f074ddc5dd15(s, b, p),
          (this._rf43dff4a704561 = !0)),
        (this.var_2936 = this.var_1808),
        s
      );
    if (s == null || (w && this._buffer == null)) return ((this.var_2936 = this.var_1808), s);
    if (
      (m &&
        v &&
        !this._refresh &&
        this._rf43dff4a704561 &&
        this._buffer != null &&
        (s.lock(), this._r8d5cd12526e0eb(s, r, t, p), s.unlock()),
      c === a.RENDER_TYPE_SKIN && d != null)
    )
      if ((s.lock(), m))
        (this._refresh &&
          (s.fillRect(t, 0),
          (this._refresh = !1),
          _ && this._buffer?.fillRect(b, e.color),
          _i42bc3fcc4cb515(
            "WindowRendererItem.render.skinDraw",
            () => {
              d.draw(e, this._buffer, b, this.var_1808, !1);
            },
            "byPhaseWindow",
            p("WindowRendererItem.render.skinDraw"),
          )),
          _i42bc3fcc4cb515(
            "WindowRendererItem.render.finalCopyPixels",
            () => {
              s?.copyPixels(this._buffer, t, r, null, null, !0);
            },
            "byPhaseWindow",
            p("WindowRendererItem.render.finalCopyPixels"),
          ),
          C?._r615a65a68c43c4(),
          this._rfd7c0e69cc8f89(e) && this._r78f074ddc5dd15(s, b, p),
          I != null && (I.blend = e.blend));
      else {
        this._refresh &&
          ((this._refresh = !1),
          _ && this._buffer?.fillRect(b, e.color),
          _i42bc3fcc4cb515(
            "WindowRendererItem.render.skinDraw",
            () => {
              d.draw(e, this._buffer, b, this.var_1808, !1);
            },
            "byPhaseWindow",
            p("WindowRendererItem.render.skinDraw"),
          ));
        let R = ie.NORMAL;
        if (e.tags != null)
          for (let T of e.tags) T.indexOf("BLEND_") === 0 && (R = T.substring(6).toLowerCase());
        (e.blend < 1 || R !== ie.NORMAL) && !m
          ? ((a.MATRIX.tx = r.x - t.x),
            (a.MATRIX.ty = r.y - t.y),
            (a.COLOR_TRANSFORM.redMultiplier = 1),
            (a.COLOR_TRANSFORM.greenMultiplier = 1),
            (a.COLOR_TRANSFORM.blueMultiplier = 1),
            (a.COLOR_TRANSFORM.alphaMultiplier = e.blend),
            (a.COLOR_TRANSFORM.redOffset = 0),
            (a.COLOR_TRANSFORM.greenOffset = 0),
            (a.COLOR_TRANSFORM.blueOffset = 0),
            (a.COLOR_TRANSFORM.alphaOffset = 0),
            t.offset(a.MATRIX.tx, a.MATRIX.ty),
            _i42bc3fcc4cb515(
              "WindowRendererItem.render.finalBlendDraw",
              () => {
                s?.draw(this._buffer, a.MATRIX, a.COLOR_TRANSFORM, R, t, !1);
              },
              "byPhaseWindow",
              p("WindowRendererItem.render.finalBlendDraw"),
            ),
            t.offset(-a.MATRIX.tx, -a.MATRIX.ty))
          : _i42bc3fcc4cb515(
              "WindowRendererItem.render.finalCopyPixels",
              () => {
                s?.copyPixels(this._buffer, t, r, null, null, !0);
              },
              "byPhaseWindow",
              p("WindowRendererItem.render.finalCopyPixels"),
            );
      }
    else
      c === a._r353e196f422ff6 &&
        (s.lock(),
        m
          ? (_i42bc3fcc4cb515(
              "WindowRendererItem.render.finalFillRect",
              () => {
                s?.fillRect(new D(r.x, r.y, t.width, t.height), e.color);
              },
              "byPhaseWindow",
              p("WindowRendererItem.render.finalFillRect"),
            ),
            this._refresh &&
              ((this._refresh = !1),
              C?._r615a65a68c43c4(),
              this._rfd7c0e69cc8f89(e) && this._r78f074ddc5dd15(s, b, p)),
            I != null && (I.blend = e.blend))
          : (this._buffer?.fillRect(b, e.color),
            _i42bc3fcc4cb515(
              "WindowRendererItem.render.finalCopyPixels",
              () => {
                s?.copyPixels(this._buffer, t, r, null, null, !0);
              },
              "byPhaseWindow",
              p("WindowRendererItem.render.finalCopyPixels"),
            )));
    return (
      a.debug &&
        this.drawRect(
          s,
          new D(r.x, r.y, t.width, t.height),
          4278190080 | Math.floor(Math.random() * 16777215),
        ),
      s.unlock(),
      (this.var_2936 = this.var_1808),
      m && (this._rf43dff4a704561 = !0),
      s
    );
  }
  _r2023e7356a3d5f(e) {
    return this._r4004c1bd6fe180?.getTheActualState(e.type, e.style, e.state) !== this.var_2936;
  }
  needsRedraw(e) {
    return this._refresh || this._r2023e7356a3d5f(e);
  }
  invalidate(e, r) {
    let t = !1;
    switch (r) {
      case class_2902.REDRAW:
        (this._rb4775479c0fb91(),
          (this._rf43dff4a704561 = !1),
          (this._rb6a51aef6f4386 = !1),
          (this._refresh = !0),
          (t = !0));
        break;
      case class_2902.RESIZE:
        ((this._rb6a51aef6f4386 = !1), (this._refresh = !0), this._r0a09ee76e04ea8(), (t = !0));
        break;
      case class_2902.RELOCATE:
        if (e.testParamFlag(N.const_421)) t = !0;
        else {
          let i = e.getGraphicContext(!0);
          (i.setDrawRegion(e.renderingRectangle, !1, null), i.visible || (t = !0));
        }
        break;
      case class_2902.STATE:
        (this._rb4775479c0fb91(),
          (this._rf43dff4a704561 = !1),
          (this._rb6a51aef6f4386 = !1),
          (this.var_1808 = this._r4004c1bd6fe180?.getTheActualState(e.type, e.style, e.state) ?? 0),
          this.var_1808 !== this.var_2936 && ((this._refresh = !0), (t = !0)));
        break;
      case class_2902.BLEND:
        if (e.testParamFlag(N.const_421)) ((this._refresh = !0), (t = !0));
        else {
          let i = e.getGraphicContext(!0);
          i.blend = e.blend;
        }
        break;
      case class_2902.CASCADE:
        ((this._rb6a51aef6f4386 = !0), (t = !0));
        break;
    }
    return t;
  }
  _rf5a08efaffd221() {
    this._rb6a51aef6f4386 = !1;
  }
  _r096858cdf4a3d3(e) {
    e.testParamFlag(N.const_421) ||
      (this._rb4775479c0fb91(),
      (this._rb6a51aef6f4386 = !1),
      (this._rf43dff4a704561 = !1),
      (this._refresh = !0));
  }
  _r8d5cd12526e0eb(e, r, t, i) {
    let s = this._buffer;
    s != null &&
      _i42bc3fcc4cb515(
        "WindowRendererItem.render.restoreOwnGcBase",
        () => {
          e.copyPixels(s, t, r, null, null, !1);
        },
        "byPhaseWindow",
        i("WindowRendererItem.render.restoreOwnGcBase"),
      );
  }
  _r78f074ddc5dd15(e, r, t) {
    let i = Math.max(1, Math.ceil(r.width)),
      s = Math.max(1, Math.ceil(r.height));
    if (this._buffer == null || this._buffer.width < i || this._buffer.height < s) {
      let o = this._r9f5d2b6e99fd5d(i),
        d = this._r9f5d2b6e99fd5d(s);
      (this._buffer?.dispose(), (this._buffer = new Bd(this, o, d, !0, 0)));
    }
    _i42bc3fcc4cb515(
      "WindowRendererItem.render.captureOwnGcBase",
      () => {
        this._buffer?.copyPixels(e, r, a.POINT_ZERO, null, null, !1);
      },
      "byPhaseWindow",
      t("WindowRendererItem.render.captureOwnGcBase"),
    );
  }
  _rfd7c0e69cc8f89(e) {
    return !1;
  }
  _reddc52d982142d(e) {
    let t = e.children ?? null;
    if (t == null || t.length === 0) return !1;
    for (let i of t)
      if (
        i.testParamFlag(N.const_421) ||
        i.testParamFlag(N.getWindowRendererItem) ||
        this._reddc52d982142d(i)
      )
        return !0;
    return !1;
  }
  _r3ec5a382df419c(e, r, t, i) {
    if (e.testParamFlag(N.const_421)) {
      this._rb4775479c0fb91();
      return;
    }
    if (t * i < a._rbfe8fa11411509) {
      this._rb4775479c0fb91();
      return;
    }
    if (this._r9470b7af92a7b5()) {
      this._rb4775479c0fb91();
      return;
    }
    if (!(r instanceof Un)) {
      this._rb4775479c0fb91();
      return;
    }
    if (!this._rf43dff4a704561) {
      this._rb4775479c0fb91();
      return;
    }
    let s = r.fetchDrawBuffer();
    if (!(s instanceof A)) {
      this._rb4775479c0fb91();
      return;
    }
    if (this._r95a376d9bd019a)
      if (s.width === t && s.height === i) ((this._r95a376d9bd019a = !1), this._r9757339f2d41da(t, i));
      else return;
    if (s.width === t && s.height === i) {
      this._r9757339f2d41da(t, i);
      return;
    }
    this._r50fbaee891519b(t, i) &&
      ((this._re2df880b5bc012 = !0),
      a._r7e30a0a3aadd8b.add(this),
      a._r323919d88d8abb.add(this._rb525edc5398c65(e)),
      a._r2921cb3df3224b());
  }
  _rb4775479c0fb91() {
    ((this._re2df880b5bc012 = !1),
      (this._r95a376d9bd019a = !1),
      (this._r298db5187a872a = 0),
      a._r7e30a0a3aadd8b.delete(this),
      a._ree2e001a607846());
  }
  _rb525edc5398c65(e) {
    let r = e.context?._r1165eed3833024() ?? null,
      t = e;
    for (; t.parent != null && t.parent !== r;) t = t.parent;
    return t;
  }
  static _r2921cb3df3224b() {
    (a._rff271a34a7e36a != null && globalThis.clearTimeout(a._rff271a34a7e36a),
      (a._rff271a34a7e36a = globalThis.setTimeout(() => {
        a._rff271a34a7e36a = null;
        let e = Array.from(a._r323919d88d8abb);
        a._r323919d88d8abb.clear();
        for (let r of a._r7e30a0a3aadd8b) ((r._re2df880b5bc012 = !1), (r._r95a376d9bd019a = !0));
        a._r7e30a0a3aadd8b.clear();
        for (let r of e) r.disposed || r.context?.invalidate(r, null, class_2902.REDRAW);
      }, a._r0e4add9a90ad71)));
  }
  static _ree2e001a607846() {
    a._r7e30a0a3aadd8b.size > 0 ||
      (a._r323919d88d8abb.clear(),
      a._rff271a34a7e36a != null &&
        (globalThis.clearTimeout(a._rff271a34a7e36a), (a._rff271a34a7e36a = null)));
  }
  _r0a09ee76e04ea8() {
    (this._rb4775479c0fb91(),
      (this._rf121ba88d71425 = this.getCurrentTime() + a._r0e4add9a90ad71 + a._r8a61461cbd3723));
  }
  _r9470b7af92a7b5() {
    return this.getCurrentTime() < this._rf121ba88d71425;
  }
  _r50fbaee891519b(e, r) {
    let t = this.getCurrentTime();
    return (
      (e !== this._rc0bedf3148c5e5 || r !== this._r9be5685d68dd5a) &&
        (t - this._r9d6a085bc0d8b2 <= a._r8a61461cbd3723
          ? (this._r298db5187a872a += 1)
          : (this._r298db5187a872a = 1),
        (this._rc0bedf3148c5e5 = e),
        (this._r9be5685d68dd5a = r),
        (this._r9d6a085bc0d8b2 = t)),
      this._r298db5187a872a >= a._r41866073377520
    );
  }
  _r9757339f2d41da(e, r) {
    ((this._r298db5187a872a = 0),
      (this._rc0bedf3148c5e5 = e),
      (this._r9be5685d68dd5a = r),
      (this._r9d6a085bc0d8b2 = this.getCurrentTime()));
  }
  getCurrentTime() {
    return globalThis.performance?.now?.() ?? Date.now();
  }
  drawRect(e, r, t) {
    for (let i = r.left; i < r.right; i++)
      (e.setPixel32(i, r.top, t), e.setPixel32(i, r.bottom - 1, t));
    for (let i = r.top; i < r.bottom; i++)
      (e.setPixel32(r.left, i, t), e.setPixel32(r.right - 1, i, t));
  }
  _r9f5d2b6e99fd5d(e) {
    let r = Math.max(1, Math.ceil(e)),
      t = r <= 256 ? a._r8b22e98b9be6f9 : r <= 1024 ? a._rac16510db57b82 : a._r0aa49f96954cc2;
    return Math.ceil(r / t) * t;
  }
}
