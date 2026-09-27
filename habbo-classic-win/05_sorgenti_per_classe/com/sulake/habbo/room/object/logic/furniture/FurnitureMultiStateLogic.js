// Estratto da HabboAirLauncher.deobf.js, riga 135145.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurnitureMultiStateLogic.as
// Nome offuscato: _i4ba2435c63c1f2

class a {
  static {
    n(this, "FurnitureMultiStateLogic");
  }
  static _r6fb65f719387ca = null;
  static _r6f7ec97a011b96 = null;
  static _rab02e26e07e628 = new E();
  _r15b23792779baa = new E();
  _r3a47f2c862dc47 = null;
  _r9e2d6f967a78a6 = null;
  _r5ed1f0888f3d61 = null;
  _raf5af63db2906f = null;
  _renderer = null;
  var_174 = null;
  _rc2afb5cf82d836 = [];
  _disposed = !1;
  constructor() {
    (a._r6fb65f719387ca == null &&
      ((a._r6fb65f719387ca = []),
      (a._r6fb65f719387ca[0] = class_3421.ARROW_LINK),
      (a._r6fb65f719387ca[1] = class_3421.DEFAULT),
      (a._r6fb65f719387ca[2] = class_3421.ARROW_LINK),
      (a._r6fb65f719387ca[3] = class_3421.ARROW_LINK),
      (a._r6fb65f719387ca[4] = class_3421.ARROW_LINK),
      (a._r6fb65f719387ca[5] = class_3421.DEFAULT),
      (a._r6fb65f719387ca[6] = class_3421.ARROW_LINK)),
      a._r6f7ec97a011b96 == null &&
        ((a._r6f7ec97a011b96 = []),
        (a._r6f7ec97a011b96[0] = class_1948.WINDOW_STATE_ACTIVE),
        (a._r6f7ec97a011b96[1] = class_1948.const_138),
        (a._r6f7ec97a011b96[2] = class_1948.WINDOW_STATE_HOVERING),
        (a._r6f7ec97a011b96[3] = class_1948.const_115),
        (a._r6f7ec97a011b96[4] = class_1948.const_130),
        (a._r6f7ec97a011b96[5] = class_1948.const_92),
        (a._r6f7ec97a011b96[6] = class_1948.const_117)));
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed = !0;
  }
  static _r0b1cd756134414(e, r) {
    let t = a._r6f7ec97a011b96 ?? [],
      i = a._r6fb65f719387ca ?? [],
      s = t.indexOf(e);
    s > -1 && (i[s] = r);
  }
  static getMouseCursorByState(e) {
    let r = a._r6f7ec97a011b96 ?? [],
      t = a._r6fb65f719387ca ?? [],
      i = r.length;
    for (; i-- > 0;) if ((e & r[i]) > 0) return t[i];
    return class_3421.DEFAULT;
  }
  process(e, r) {
    if (r.length === 0) return;
    ((this.var_174 = e.desktop),
      (this._raf5af63db2906f = e._rbed4b983893069),
      (this._r3a47f2c862dc47 = e._r17db719fac17ae),
      (this._r9e2d6f967a78a6 = e._rbdc589d98753c1),
      (this._r5ed1f0888f3d61 = e._rdc33f0e3f0697f),
      (this._renderer = e.renderer),
      (this._rc2afb5cf82d836 = e._r2e6866cd293aa4),
      r.begin());
    let t,
      i = null;
    ((this._r15b23792779baa.x = -1), (this._r15b23792779baa.y = -1));
    let s = class_3421.DEFAULT;
    for (; (t = r.next()), t != null;) {
      (t.stageX !== this._r15b23792779baa.x || t.stageY !== this._r15b23792779baa.y) &&
        ((this._r15b23792779baa.x = t.stageX),
        (this._r15b23792779baa.y = t.stageY),
        (i = []),
        this.var_174._rc9e702af735714(this._r15b23792779baa, i, N._re3bd61027cfd94));
      let o = i?.length ?? 0;
      if (o === 0)
        if (
          t.type === _ifd7c1208e3417e.var_370 &&
          this._raf5af63db2906f &&
          this.var_174 &&
          this._raf5af63db2906f !== this.var_174 &&
          !this._raf5af63db2906f.disposed
        ) {
          this._raf5af63db2906f.getGlobalPosition(a._rab02e26e07e628);
          let c = u.allocate(
            u.OUT,
            this._raf5af63db2906f,
            null,
            t.stageX - a._rab02e26e07e628.x,
            t.stageY - a._rab02e26e07e628.y,
            t.stageX,
            t.stageY,
            t.altKey,
            t.ctrlKey,
            t.shiftKey,
            t.buttonDown,
            t.delta,
          );
          (this._raf5af63db2906f.update(this._raf5af63db2906f, c),
            (this._raf5af63db2906f = this.var_174),
            c.recycle());
        } else t.type === _ifd7c1208e3417e._r9001c395573374 && this.var_174._r407b94eafbeca2()?.deactivate();
      t.type === _ifd7c1208e3417e._ra93f33360c3a28 &&
        this._r9e2d6f967a78a6 != null &&
        (i?.indexOf(this._r9e2d6f967a78a6) ?? -1) === -1 &&
        ((i ??= []), i.push(this._r9e2d6f967a78a6), o++);
      let d = !1;
      for (; --o > -1;) {
        let c = this._rf6923bfacb903a(i[o], t);
        if (!(c == null || !c.visible)) {
          if (
            (t.type === _ifd7c1208e3417e.var_370 && this._r3a1fc37f788929(c, t),
            t.type === _ifd7c1208e3417e._r9001c395573374 && (this._r0f97202bd2ae02(c, t), (this._r5ed1f0888f3d61 = c)),
            !d && !this._r293fb444c61856(c) && !D2._rac38b70f096b72(c))
          ) {
            let f = c.parent;
            for (; !d && f && !f.disposed && !D2._rac38b70f096b72(f);) {
              if (this._r293fb444c61856(f)) {
                let l = a._r9b1bf1bb2c2180(t, f, c);
                ((d = f.process(l)), l.recycle());
              }
              f = f.parent;
            }
          }
          if ((!1, this._r653b1ae8dc6f1a(this._raf5af63db2906f)))
            try {
              this._raf5af63db2906f._r824ae5dcbb4686
                ? (s = class_3421.DEFAULT)
                : ((s = this._raf5af63db2906f.getMouseCursorByState(this._raf5af63db2906f.state)),
                  s === class_3421.DEFAULT && (s = a.getMouseCursorByState(this._raf5af63db2906f.state)));
            } catch {
              s = class_3421.DEFAULT;
            }
          c !== this.var_174 && (t.stopPropagation(), r.remove());
          break;
        }
      }
    }
    (r.end(),
      (dj.type = s),
      (e.desktop = this.var_174),
      (e._rbed4b983893069 = this._raf5af63db2906f),
      (e._r17db719fac17ae = this._r3a47f2c862dc47),
      (e._rbdc589d98753c1 = this._r9e2d6f967a78a6),
      (e._rdc33f0e3f0697f = this._r5ed1f0888f3d61),
      (e.renderer = this._renderer),
      (e._r2e6866cd293aa4 = this._rc2afb5cf82d836));
  }
  _r3a1fc37f788929(e, r) {
    if (e !== this._raf5af63db2906f) {
      if (this._raf5af63db2906f && !this._raf5af63db2906f.disposed) {
        this._raf5af63db2906f.getGlobalPosition(a._rab02e26e07e628);
        let t = u.allocate(
          u.OUT,
          this._raf5af63db2906f,
          e,
          r.stageX - a._rab02e26e07e628.x,
          r.stageY - a._rab02e26e07e628.y,
          r.stageX,
          r.stageY,
          r.altKey,
          r.ctrlKey,
          r.shiftKey,
          r.buttonDown,
          r.delta,
        );
        (this._raf5af63db2906f.update(this._raf5af63db2906f, t), t.recycle());
      }
      if (!e.disposed) {
        e.getGlobalPosition(a._rab02e26e07e628);
        let t = u.allocate(
          u.OVER,
          e,
          null,
          r.stageX - a._rab02e26e07e628.x,
          r.stageY - a._rab02e26e07e628.y,
          r.stageX,
          r.stageY,
          r.altKey,
          r.ctrlKey,
          r.shiftKey,
          r.buttonDown,
          r.delta,
        );
        (e.update(e, t), t.recycle(), (this._raf5af63db2906f = e));
      }
    }
  }
  _r0f97202bd2ae02(e, r) {
    if (this._r5ed1f0888f3d61 == null || this._r5ed1f0888f3d61.disposed || e === this._r5ed1f0888f3d61)
      return;
    let t = u.allocate(
      u.CLICK_AWAY,
      this._r5ed1f0888f3d61,
      e,
      Number.NaN,
      Number.NaN,
      r.stageX,
      r.stageY,
      r.altKey,
      r.ctrlKey,
      r.shiftKey,
      r.buttonDown,
      r.delta,
    );
    (this._r5ed1f0888f3d61.update(this._r5ed1f0888f3d61, t), t.recycle());
  }
  _rf6923bfacb903a(e, r, t = !1) {
    if (e.disposed) return null;
    if (e.testStateFlag(class_1948.const_117) && r.type === _ifd7c1208e3417e.var_370 && e instanceof E8) return e;
    if (e.testStateFlag(class_1948.const_117)) return null;
    let i = !1,
      s = new E(r.stageX, r.stageY);
    if (
      (e.convertPointFromGlobalToLocalSpace(s),
      (e.debug = !1),
      (this._renderer.debug = !1),
      !1,
      r.type === _ifd7c1208e3417e._ra93f33360c3a28)
    ) {
      if (this._r9e2d6f967a78a6 == null) return ((this._r3a47f2c862dc47 = null), null);
      if (e !== this._r9e2d6f967a78a6) {
        if (this._r9e2d6f967a78a6 && !this._r9e2d6f967a78a6.disposed) {
          let f = a._r9b1bf1bb2c2180(
            new _ifd7c1208e3417e(
              _ifd7c1208e3417e._ra93f33360c3a28,
              !1,
              !0,
              r.localX,
              r.localY,
              null,
              r.ctrlKey,
              r.altKey,
              r.shiftKey,
              r.buttonDown,
              r.delta,
              r.stageX,
              r.stageY,
              r.clickCount,
            ),
            this._r9e2d6f967a78a6,
            e,
          );
          if (
            (this._r9e2d6f967a78a6.update(this._r9e2d6f967a78a6, f),
            (this._r3a47f2c862dc47 = null),
            e.disposed)
          )
            return null;
        }
      } else i = !e.hitTestLocalPoint(s);
      this._r9e2d6f967a78a6 = null;
    }
    if (!i) {
      if (e.ignoreMouseEvents) return null;
      let f = this._renderer._r0a05017aab833a(e);
      if (!e._r63dd0c21253351(s, f)) return null;
    }
    if (e.testParamFlag(N._rca1af0855e9da4) && e.parent != null) return this._rf6923bfacb903a(e.parent, r);
    if (!t)
      switch (r.type) {
        case _ifd7c1208e3417e._r9001c395573374:
          ((this._r3a47f2c862dc47 = e), (this._r9e2d6f967a78a6 = e));
          break;
        case _ifd7c1208e3417e.CLICK:
          if (this._r3a47f2c862dc47 !== e) return ((this._r3a47f2c862dc47 = null), null);
          this._r3a47f2c862dc47 = null;
          break;
        case _ifd7c1208e3417e.DOUBLE_CLICK:
          if (this._r3a47f2c862dc47 !== e) return ((this._r3a47f2c862dc47 = null), null);
          this._r3a47f2c862dc47 = null;
          break;
      }
    let o = [];
    (r.type === _ifd7c1208e3417e.DOUBLE_CLICK && o.push(_ifd7c1208e3417e.CLICK), o.push(r.type));
    let d = !1;
    for (let f of o) {
      let l = a._r9b1bf1bb2c2180(r, e, null, f);
      e.update(e, l) && (d = !0);
      for (let b of this._rc2afb5cf82d836) b._r8725146839fe16(l, e);
      l.recycle();
    }
    let c = r.type === _ifd7c1208e3417e._r8ea9e83cdee875 || r.type === _ifd7c1208e3417e._r16434e347f72e9;
    return !d && !t && e.parent && (!c || !D2._rac38b70f096b72(e)) ? this._rf6923bfacb903a(e.parent, r) : e;
  }
  static _r9b1bf1bb2c2180(e, r, t, i = null) {
    let s = new E(e.stageX, e.stageY);
    r.convertPointFromGlobalToLocalSpace(s);
    let o = i ?? e.type,
      d;
    switch (o) {
      case _ifd7c1208e3417e.var_370:
        d = u.MOVE;
        break;
      case _ifd7c1208e3417e._r0f980b14ecbc94:
        d = u.OVER;
        break;
      case _ifd7c1208e3417e._rbf5bc4e563fc08:
        d = u.OUT;
        break;
      case "rollOut":
        d = u.ROLL_OUT;
        break;
      case "rollOver":
        d = u.ROLL_OVER;
        break;
      case _ifd7c1208e3417e.CLICK:
        d = u.CLICK;
        break;
      case _ifd7c1208e3417e.DOUBLE_CLICK:
        d = u.DOUBLE_CLICK;
        break;
      case _ifd7c1208e3417e._r9001c395573374:
        d = u.DOWN;
        break;
      case _ifd7c1208e3417e._ra93f33360c3a28: {
        d = s.x > -1 && s.y > -1 && s.x < r.width && s.y < r.height ? u.UP : u.UP_OUTSIDE;
        break;
      }
      case _ifd7c1208e3417e._r8ea9e83cdee875:
        d = u.const_974;
        break;
      case _ifd7c1208e3417e._r16434e347f72e9:
        d = u.WHEEL_HORIZONTAL;
        break;
      default:
        d = y.UNKNOWN;
    }
    return u.allocate(
      d,
      r,
      t,
      s.x,
      s.y,
      e.stageX,
      e.stageY,
      e.altKey,
      e.ctrlKey,
      e.shiftKey,
      e.buttonDown,
      e.delta,
    );
  }
  _r293fb444c61856(e) {
    return typeof e.process == "function";
  }
  _r653b1ae8dc6f1a(e) {
    return e != null && typeof e.getMouseCursorByState == "function";
  }
}
