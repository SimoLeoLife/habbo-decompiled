// Extracted from HabboAirLauncher.deobf.js, line 135614.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i894ecd1ad8fcc4

class extends Kf {
  static {
    n(this, "UnkClass_894ecd");
  }
  _rfb9e80d030c4d7 = "";
  process(e, r) {
    if (r.length === 0) return;
    ((this.var_174 = e.desktop),
      (this._raf5af63db2906f = e._rbed4b983893069),
      (this._r3a47f2c862dc47 = e._r17db719fac17ae),
      (this._renderer = e.renderer),
      (this._rc2afb5cf82d836 = e._r2e6866cd293aa4),
      r.begin());
    let t,
      i = null;
    for (this._r15b23792779baa.x = -1, this._r15b23792779baa.y = -1; (t = r.next()), t != null;) {
      (t.stageX !== this._r15b23792779baa.x || t.stageY !== this._r15b23792779baa.y) &&
        ((this._r15b23792779baa.x = t.stageX),
        (this._r15b23792779baa.y = t.stageY),
        (i = []),
        this.var_174._rc9e702af735714(this._r15b23792779baa, i, N._re3bd61027cfd94));
      let s = i?.length ?? 0;
      if (s === 0)
        if (
          t.type === UnkClass_6ab93d._rd24b6ab18961d3 &&
          this._raf5af63db2906f &&
          this.var_174 &&
          this._raf5af63db2906f !== this.var_174 &&
          !this._raf5af63db2906f.disposed
        ) {
          this._raf5af63db2906f.getGlobalPosition(Kf._rab02e26e07e628);
          let o = this._r391d71ceb9fd79(
            Zn.const_206,
            this._raf5af63db2906f,
            null,
            t.stageX - Kf._rab02e26e07e628.x,
            t.stageY - Kf._rab02e26e07e628.y,
            t.sizeX,
            t.sizeY,
            t.stageX,
            t.stageY,
            t.pressure,
            t.altKey,
            t.ctrlKey,
            t.shiftKey,
          );
          (this._raf5af63db2906f.update(this._raf5af63db2906f, o),
            (this._raf5af63db2906f = this.var_174),
            o.recycle());
        } else t.type === UnkClass_6ab93d._r9c3cca61a7e774 && this.var_174?._r407b94eafbeca2()?.deactivate();
      for (; --s > -1;) {
        let o = this._r13b9a39227545b(i[s], t);
        if (!(o == null || !o.visible)) {
          (t.type === UnkClass_6ab93d._rd24b6ab18961d3 && this._r5d052d764b7c25(o, t),
            !1,
            o !== this.var_174 && (t.stopPropagation(), r.remove()));
          break;
        }
      }
    }
    (r.end(),
      (e.desktop = this.var_174),
      (e._rbed4b983893069 = this._raf5af63db2906f),
      (e._r17db719fac17ae = this._r3a47f2c862dc47),
      (e.renderer = this._renderer),
      (e._r2e6866cd293aa4 = this._rc2afb5cf82d836));
  }
  _r5d052d764b7c25(e, r) {
    if (e !== this._raf5af63db2906f) {
      if (this._raf5af63db2906f && !this._raf5af63db2906f.disposed) {
        this._raf5af63db2906f.getGlobalPosition(Kf._rab02e26e07e628);
        let t = this._r391d71ceb9fd79(
          Zn.const_206,
          this._raf5af63db2906f,
          e,
          r.stageX - Kf._rab02e26e07e628.x,
          r.stageY - Kf._rab02e26e07e628.y,
          r.sizeX,
          r.sizeY,
          r.stageX,
          r.stageY,
          r.pressure,
          r.altKey,
          r.ctrlKey,
          r.shiftKey,
        );
        (this._raf5af63db2906f.update(this._raf5af63db2906f, t), t.recycle());
      }
      if (!e.disposed) {
        e.getGlobalPosition(Kf._rab02e26e07e628);
        let t = this._r391d71ceb9fd79(
          Zn.WINDOW_EVENT_TOUCH_OVER,
          e,
          null,
          r.stageX - Kf._rab02e26e07e628.x,
          r.stageY - Kf._rab02e26e07e628.y,
          r.sizeX,
          r.sizeY,
          r.stageX,
          r.stageY,
          r.pressure,
          r.altKey,
          r.ctrlKey,
          r.shiftKey,
        );
        (e.update(e, t), t.recycle(), (this._raf5af63db2906f = e));
      }
    }
  }
  _r13b9a39227545b(e, r) {
    if (e.disposed || e.testStateFlag(class_1948.const_117)) return null;
    let t = new E(r.stageX, r.stageY);
    if ((e.convertPointFromGlobalToLocalSpace(t), e.ignoreMouseEvents)) return null;
    let i = this._renderer._r0a05017aab833a(e);
    if (!e._r63dd0c21253351(t, i)) return null;
    if (e.testParamFlag(N._rca1af0855e9da4) && e.parent != null) return this._r13b9a39227545b(e.parent, r);
    if (r.type === UnkClass_6ab93d._r043d61b7ed1454) {
      if (this._r3a47f2c862dc47 !== e) return null;
      this._r3a47f2c862dc47 = null;
    }
    let s = new E(r.stageX, r.stageY);
    e.convertPointFromGlobalToLocalSpace(s);
    let o = !1,
      d;
    if (this._rdee2b28fafaede(e)) {
      let f = this._r022b40da0d789e(r.type);
      ((this._rfb9e80d030c4d7 = f),
        (d = this._r391d71ceb9fd79(
          f,
          e,
          null,
          s.x,
          s.y,
          r.sizeX,
          r.sizeY,
          r.stageX,
          r.stageY,
          r.pressure,
          r.altKey,
          r.ctrlKey,
          r.shiftKey,
        )));
    } else {
      let f = this._ree3a51c6b1f052(r.type);
      ((o = f === u.MOVE || f === u.DOWN || f === u.UP),
        (d = u.allocate(f, e, null, s.x, s.y, r.stageX, r.stageY, r.altKey, r.ctrlKey, r.shiftKey, !0, 0)));
    }
    if (o) {
      let f = e.parent;
      for (o = !1; f;) {
        if (this._rdee2b28fafaede(f)) {
          o = !0;
          break;
        }
        f = f.parent;
      }
    }
    let c = e;
    return (
      (!e.update(e, d) || o) && e.parent && (c = this._r13b9a39227545b(e.parent, r)),
      d.recycle(),
      r.type === UnkClass_6ab93d._r9c3cca61a7e774 && (this._r3a47f2c862dc47 = e),
      c
    );
  }
  _r022b40da0d789e(e) {
    switch (e) {
      case UnkClass_6ab93d._r8acae01d9cff8b:
        return Zn.WINDOW_EVENT_TOUCH_OVER;
      case UnkClass_6ab93d._rd24b6ab18961d3:
        return Zn.WINDOW_EVENT_TOUCH_MOVE;
      case UnkClass_6ab93d._r4ddc8bdac8971b:
        return Zn.const_206;
      case UnkClass_6ab93d._r5f13683c62da2d:
        return Zn.const_1350;
      case UnkClass_6ab93d._r8cddfbe5cdff17:
        return Zn.WINDOW_EVENT_TOUCH_ROLL_OVER;
      case UnkClass_6ab93d._r9c3cca61a7e774:
        return Zn.WINDOW_EVENT_TOUCH_BEGIN;
      case UnkClass_6ab93d._r10ca9879e8ddee:
        return Zn.const_930;
      case UnkClass_6ab93d._r043d61b7ed1454:
        return Zn.const_473;
      default:
        return y.UNKNOWN;
    }
  }
  _ree3a51c6b1f052(e) {
    switch (e) {
      case UnkClass_6ab93d._r8acae01d9cff8b:
        return u.OVER;
      case UnkClass_6ab93d._rd24b6ab18961d3:
        return u.MOVE;
      case UnkClass_6ab93d._r4ddc8bdac8971b:
        return u.OUT;
      case UnkClass_6ab93d._r5f13683c62da2d:
        return u.ROLL_OUT;
      case UnkClass_6ab93d._r8cddfbe5cdff17:
        return u.ROLL_OVER;
      case UnkClass_6ab93d._r9c3cca61a7e774:
        return u.DOWN;
      case UnkClass_6ab93d._r10ca9879e8ddee:
        return u.UP;
      case UnkClass_6ab93d._r043d61b7ed1454:
        return u.CLICK;
      default:
        return y.UNKNOWN;
    }
  }
  _rdee2b28fafaede(e) {
    return e != null;
  }
  _r391d71ceb9fd79(e, r, t, i, s, o, d, c, f, l, b, _, h) {
    let p = y.allocate(e, r, t);
    return (
      (p.localX = i),
      (p.localY = s),
      (p.sizeX = o),
      (p.sizeY = d),
      (p.stageX = c),
      (p.stageY = f),
      (p.pressure = l),
      (p.altKey = b),
      (p.ctrlKey = _),
      (p.shiftKey = h),
      p
    );
  }
  _r293fb444c61856(e) {
    return typeof e.process == "function";
  }
}
