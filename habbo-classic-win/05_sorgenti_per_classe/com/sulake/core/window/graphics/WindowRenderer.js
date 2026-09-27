// Estratto da HabboAirLauncher.deobf.js, riga 142315.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/WindowRenderer.as
// Nome offuscato: _i3170bf254548ee

class a {
  static {
    n(this, "WindowRenderer");
  }
  static _rc6b89b1f6da40e = new D();
  static MAX_DIRTY_REGIONS_PER_WINDOW = 3;
  static MAX_DISTANCE_BEFORE_COMBINE = 10;
  static POINT_ZERO = new E();
  var_1933 = !1;
  _disposed = !1;
  _r4004c1bd6fe180;
  var_446 = new Map();
  var_1301 = [];
  _r50f32bb803f0d7 = [];
  var_3902 = new E();
  class_2100 = new D();
  var_91 = new D();
  _r5bf21b043cc9ef = new D();
  get disposed() {
    return this._disposed;
  }
  set debug(e) {
    this.var_1933 = e;
  }
  get debug() {
    return this.var_1933;
  }
  constructor(e) {
    this._r4004c1bd6fe180 = e;
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = !0;
      for (let e of this.var_446.values()) e.dispose();
      (this.var_446.clear(), (this.var_1301 = []), (this._r50f32bb803f0d7 = []));
    }
  }
  purge(e = null, r = !0) {
    if (e != null) {
      if (!e.visible || !r) {
        let s = this.var_446.get(e);
        (s != null && (s.dispose(), this.var_446.delete(e)), (r = !1));
      }
      let i = e;
      if (i.children != null) for (let s of i.children) this.purge(s, r);
      return;
    }
    let t = [];
    for (let i of this.var_446.keys())
      (!i.visible || !r || (i.parent == null && !(i instanceof Object && "numChildren" in i))) && t.push(i);
    for (; t.length > 0;) this.purge(t.pop() ?? null, r);
  }
  addToRenderQueue(e, r, t) {
    if (
      (r == null
        ? ((this.var_91.x = 0),
          (this.var_91.y = 0),
          (this.var_91.width = e.renderingWidth),
          (this.var_91.height = e.renderingHeight))
        : ((this.var_91.x = r.x),
          (this.var_91.y = r.y),
          (this.var_91.width = r.width),
          (this.var_91.height = r.height)),
      this.var_91.isEmpty() || !this.var_2817(e).invalidate(e, t))
    )
      return;
    if (e.testParamFlag(N.const_421) || e.testParamFlag(N.getWindowRendererItem)) {
      let s = e.context._r1165eed3833024();
      for (;;) {
        let o = e.parent;
        if (o == null) return;
        if (o === s) break;
        if (!o.visible) return;
        let d = o.renderingWidth,
          c = o.renderingHeight;
        if ((this.var_91.offset(e.renderingX, e.renderingY), o.clipping)) {
          if (
            this.var_91.x > d ||
            this.var_91.y > c ||
            this.var_91.right < 0 ||
            this.var_91.bottom < 0
          )
            return;
          (this.var_91.x < 0 &&
            ((this.var_91.width += this.var_91.x), (this.var_91.x = 0)),
            this.var_91.y < 0 &&
              ((this.var_91.height += this.var_91.y), (this.var_91.y = 0)),
            this.var_91.right > d && (this.var_91.right = d),
            this.var_91.bottom > c && (this.var_91.bottom = c));
        }
        if (this.var_91.isEmpty()) return;
        if (((e = o), !e.testParamFlag(N.const_421) && !e.testParamFlag(N.getWindowRendererItem))) break;
      }
    }
    this.var_2817(e).invalidate(e, class_2902.CASCADE);
    let i = this.var_1301.indexOf(e);
    if (i >= 0) {
      let s = this._r50f32bb803f0d7[i] ?? [],
        o = this.var_91;
      if (s.length > a.MAX_DIRTY_REGIONS_PER_WINDOW) {
        let c = s.pop();
        c != null && (o = o.union(c));
      }
      let d = 0;
      for (; d < s.length;) {
        let c = s[d];
        if (c != null && a._r47d8d840074ba7(c, o, a.MAX_DISTANCE_BEFORE_COMBINE)) {
          (s.splice(d, 1), (o = o.union(c)), (d = 0));
          continue;
        }
        d += 1;
      }
      s.push(o === this.var_91 ? o.clone() : o);
      return;
    }
    (this.var_1301.push(e), this._r50f32bb803f0d7.push([this.var_91.clone()]));
  }
  static _r47d8d840074ba7(e, r, t) {
    return e.intersects(r)
      ? !0
      : (e.left > r.left ? e.left - r.right : r.left - e.right) <= t &&
          (e.top > r.top ? e.top - r.bottom : r.top - e.bottom) <= t;
  }
  flushRenderQueue() {
    ((this.var_1301 = []), (this._r50f32bb803f0d7 = []));
  }
  invalidate(e, r) {
    let t = e._r1165eed3833024(),
      i = t.numChildren;
    for (; i-- > 0;) {
      let s = t.getChildAt(i);
      s != null && this.addToRenderQueue(s, null, class_2902.REDRAW);
    }
  }
  var_2817(e) {
    let r = this.var_446.get(e) ?? null;
    return (r == null && (r = this._rf0037e89415bee(e)), r);
  }
  _rf0037e89415bee(e) {
    let r = this.var_446.get(e) ?? null;
    return (
      r == null &&
        ((r = new $he(this._r4004c1bd6fe180)),
        this.var_446.set(e, r),
        r.invalidate(e, class_2902.STATE)),
      e.hasEventListener(I8.const_1034) ||
        e.addEventListener(I8.const_1034, this._rd0ceb4bcbd8d50),
      r
    );
  }
  _rb3e74431d17ec6(e) {
    e.removeEventListener(I8.const_1034, this._rd0ceb4bcbd8d50);
    let r = this.var_446.get(e);
    r != null && (r.dispose(), this.var_446.delete(e));
  }
  _rd0ceb4bcbd8d50 = n((...e) => {
    let [r] = e;
    r instanceof I8 && r.window != null && this._rb3e74431d17ec6(r.window);
  }, "_rd0ceb4bcbd8d50");
  _r0a05017aab833a(e) {
    let r = this.var_446.get(e) ?? null;
    if (r == null) {
      let t = new D(0, 0, e.renderingWidth, e.renderingHeight),
        i = new Bd(this, e.renderingWidth, e.renderingHeight);
      ((r = this._rf0037e89415bee(e)),
        r.invalidate(e, class_2902.REDRAW),
        r.render(e, a.POINT_ZERO, t, e.renderingRectangle, i),
        i.dispose());
    }
    return r?.buffer ?? null;
  }
  render() {
    for (; this.var_1301.length > 0 && this._r50f32bb803f0d7.length > 0;) {
      let e = this.var_1301.pop(),
        r = this._r50f32bb803f0d7.pop();
      if (e == null || r == null || e.disposed) continue;
      let t = this.var_2817(e),
        i = e.fetchDrawBuffer(),
        s = i;
      try {
        s?.lock();
        for (let o of r) {
          ((this._r5bf21b043cc9ef.x = e.renderingX),
            (this._r5bf21b043cc9ef.y = e.renderingY),
            (this._r5bf21b043cc9ef.width = e.renderingWidth),
            (this._r5bf21b043cc9ef.height = e.renderingHeight));
          let d = this.renderWindowBranch(e, o, this._r5bf21b043cc9ef, i);
          (d !== s && (d?.lock(), s?.unlock(), (s = d)), (i = d));
        }
      } finally {
        (s?.unlock(), t._rf5a08efaffd221());
      }
    }
  }
  renderWindowBranch(e, r, t, i) {
    let s = e.getGraphicContext(!1);
    if (s != null && ((s.visible = e.visible), s instanceof Un)) {
      let c = s.getDisplayObject();
      c instanceof _i3a5c6f457acdad && (c.visible = !e.testParamFlag(N.const_421));
    }
    if (!e.visible) return (s instanceof Un && s._r18f2e8d6843ef0(), i);
    if (
      ((this.var_3902.x = e.renderingX),
      (this.var_3902.y = e.renderingY),
      !a.getDrawLocationAndClipRegion(e, r, this.var_3902, this.class_2100))
    )
      return (
        !e.testParamFlag(N.const_421) &&
          e.testParamFlag(N.getWindowRendererItem) &&
          (s == null && (s = e.getGraphicContext(!0)),
          s.setDrawRegion(e.renderingRectangle, !1, this.class_2100),
          (s.visible = !1)),
        i
      );
    (e.clipping && (t = t.intersection(e.renderingRectangle)),
      t.offset(-e.x, -e.y),
      (i = this.var_2817(e).render(e, this.var_3902, this.class_2100, t, i)));
    let o = e;
    if (o.children == null)
      return (s instanceof Un && s._r18f2e8d6843ef0(), t.offset(e.renderingX, e.renderingY), i);
    let d = e.clipping ? r.clone() : r;
    e.clipping &&
      (d.x < 0 && ((d.width += d.x), (d.x = 0)),
      d.y < 0 && ((d.height += d.y), (d.y = 0)),
      d.width > e.width && (d.width = e.renderingWidth),
      d.height > e.height && (d.height = e.renderingHeight));
    for (let c of o.children)
      if (
        ((a._rc6b89b1f6da40e.x = c.x),
        (a._rc6b89b1f6da40e.y = c.y),
        (a._rc6b89b1f6da40e.width = c.width),
        (a._rc6b89b1f6da40e.height = c.height),
        a._rc6b89b1f6da40e.intersects(d))
      ) {
        if (c.testParamFlag(N.const_421))
          (d.offset(-c.x, -c.y), (i = this.renderWindowBranch(c, d, t, i)), d.offset(c.x, c.y));
        else if (c.testParamFlag(N.getWindowRendererItem))
          (d.offset(-c.x, -c.y), this.renderWindowBranch(c, d, t, c.fetchDrawBuffer()), d.offset(c.x, c.y));
        else if (c.visible) {
          let f = c;
          if (f.hasGraphicsContext()) {
            let l = this.var_446.get(c) ?? null;
            l == null || l.needsRedraw(c)
              ? this.renderWindowBranch(
                  c,
                  new D(0, 0, c.renderingWidth, c.renderingHeight),
                  t,
                  c.fetchDrawBuffer(),
                )
              : (f.getGraphicContext(!0).visible = !0);
          }
        }
      } else if (!a._rc6b89b1f6da40e.intersects(t)) {
        let f = c;
        f.hasGraphicsContext() && (f.getGraphicContext(!0).visible = !1);
      }
    return (s instanceof Un && s._r18f2e8d6843ef0(), t.offset(e.renderingX, e.renderingY), i);
  }
  static getDrawLocationAndClipRegion(e, r, t, i) {
    let s = !0;
    if (
      ((i.x = 0),
      (i.y = 0),
      (i.width = e.renderingWidth),
      (i.height = e.renderingHeight),
      e.testParamFlag(N.const_421)
        ? e.parent != null
          ? (s = a._r050618a948e167(e.parent, t, i))
          : ((t.x = 0), (t.y = 0))
        : e.parent != null && e.testParamFlag(N.getWindowRendererItem)
          ? ((s = a._r050618a948e167(e.parent, t, i)), (t.x = i.x), (t.y = i.y))
          : ((t.x = 0), (t.y = 0)),
      r.x > i.x)
    ) {
      let o = r.x - i.x;
      ((t.x += o), (i.x += o), (i.width -= o));
    }
    if (r.y > i.y) {
      let o = r.y - i.y;
      ((t.y += o), (i.y += o), (i.height -= o));
    }
    return (
      r.right < i.right && (i.width -= i.right - r.right),
      r.bottom < i.bottom && (i.height -= i.bottom - r.bottom),
      s && i.width > 0 && i.height > 0
    );
  }
  static _r050618a948e167(e, r, t) {
    if (e.testParamFlag(N.const_421)) {
      let i = e.renderingX,
        s = e.renderingY;
      if ((r.offset(i, s), e.clipping)) {
        if (r.x < i) {
          let o = i - r.x;
          ((t.x += o), (t.width -= o), (r.x = i));
        }
        if ((r.x < 0 && ((t.x -= r.x), (t.width += r.x), (r.x = 0)), r.y < s)) {
          let o = s - r.y;
          ((t.y += o), (t.height -= o), (r.y = s));
        }
        (r.y < 0 && ((t.y -= r.y), (t.height += r.y), (r.y = 0)),
          r.x + t.width > i + e.renderingWidth && (t.width -= r.x + t.width - (i + e.renderingWidth)),
          r.y + t.height > s + e.renderingHeight && (t.height -= r.y + t.height - (s + e.renderingHeight)));
      }
      e.parent != null && a._r050618a948e167(e.parent, r, t);
    } else if (e.clipping) {
      if (r.x < 0) {
        let i = r.x;
        ((t.x -= i), (t.width += i), (r.x = 0));
      }
      if (r.y < 0) {
        let i = r.y;
        ((t.y -= i), (t.height += i), (r.y = 0));
      }
    }
    return t.width > 0 && t.height > 0;
  }
}
