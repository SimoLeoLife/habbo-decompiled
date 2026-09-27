// Extracted from HabboAirLauncher.deobf.js, line 129092.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/WindowController.as
// Obfuscated name: _i7242511bfdd190

class a extends Zue {
    static {
      n(this, "WindowController");
    }
    get properties() {
      return [];
    }
    get x() {
      return this._x;
    }
    get y() {
      return this._y;
    }
    get width() {
      return this.var_31;
    }
    get height() {
      return this.var_35;
    }
    get position() {
      return new E(this._x, this._y);
    }
    get rectangle() {
      return new D(this._x, this._y, this.var_31, this.var_35);
    }
    get mouseThreshold() {
      return this.var_1157;
    }
    get background() {
      return this._background;
    }
    get clipping() {
      return this._r9354169f249129;
    }
    get visible() {
      return this.var_679;
    }
    get color() {
      return this._fillColor;
    }
    get alpha() {
      return this._r1f783655234401 >>> 24;
    }
    get blend() {
      return this.var_1119;
    }
    get state() {
      return this._state;
    }
    get style() {
      return this._style;
    }
    get type() {
      return this._type;
    }
    get caption() {
      return this._caption;
    }
    get name() {
      return this._name;
    }
    get id() {
      return this._id;
    }
    get tags() {
      return this.var_598 ?? (this.var_598 = []);
    }
    get dynamicStyle() {
      return this._r5ba95e2e2bce18;
    }
    get procedure() {
      return this._rb21ab0ae53c5dc != null
        ? this._rb21ab0ae53c5dc
        : this._parent != null
          ? this._parent.procedure
          : this._r89b98c58893d4c;
    }
    get filters() {
      return this.hasGraphicsContext() ? this.getGraphicContext(!0).filters : [];
    }
    get parent() {
      return this._parent;
    }
    get debug() {
      return this.var_1933;
    }
    get limits() {
      return this._r877d6abc926943 ? this._r877d6abc926943 : (this._r877d6abc926943 = new $ue(this));
    }
    get immediateClickMode() {
      return this._r1565a157f96c52;
    }
    set x(e) {
      e != this._x && this.setRectangle(e, this._y, this.var_31, this.var_35);
    }
    set y(e) {
      e != this._y && this.setRectangle(this._x, e, this.var_31, this.var_35);
    }
    set id(e) {
      this._id = e;
    }
    set name(e) {
      this._name = e;
    }
    set width(e) {
      e != this.var_31 && this.setRectangle(this._x, this._y, e, this.var_35);
    }
    set height(e) {
      e != this.var_35 && this.setRectangle(this._x, this._y, this.var_31, e);
    }
    set position(e) {
      this.setRectangle(e.x, e.y, this.var_31, this.var_35);
    }
    set rectangle(e) {
      this.setRectangle(e.x, e.y, e.width, e.height);
    }
    set background(e) {
      ((this._background = e),
        (this._fillColor = this._background
          ? this._fillColor | this._r1f783655234401
          : this._fillColor & 16777215),
        (this._r5e1a9574d869f6 = this._r5e1a9574d869f6 || e),
        this._context.invalidate(this, null, class_2902.REDRAW));
    }
    set color(e) {
      ((this._r1f783655234401 = e & 4278190080),
        (this._fillColor = this._background ? e : e & 16777215),
        this._context.invalidate(this, null, class_2902.REDRAW));
    }
    set alpha(e) {
      ((this._r1f783655234401 = e << 24),
        (this._fillColor = this._background
          ? this._r1f783655234401 | this._fillColor
          : 16777215 & this._fillColor),
        this._context.invalidate(this, null, class_2902.REDRAW));
    }
    set blend(e) {
      ((e = e > 1 ? 1 : e < 0 ? 0 : e),
        e != this.var_1119 &&
          ((this.var_1119 = e), this._context.invalidate(this, null, class_2902.BLEND)));
    }
    set visible(e) {
      if (e != this.var_679) {
        ((this.var_679 = e),
          this._graphics && !e && (this._graphics.visible = !1),
          this._context.invalidate(this, null, class_2902.REDRAW));
        let r = y.allocate(y.const_342, this, this);
        (this.update(this, r), r.recycle());
      }
    }
    set type(e) {
      e != this._type && ((this._type = e), this._context.invalidate(this, null, class_2902.REDRAW));
    }
    set caption(e) {
      ((e = e || ""),
        e != this.caption &&
          ((this._caption = e), this._context.invalidate(this, null, class_2902.REDRAW)));
    }
    set tags(e) {
      e != null && (this.var_598 = e);
    }
    set mouseThreshold(e) {
      this.var_1157 = e > 255 ? 255 : e;
    }
    set ignoreMouseEvents(e) {
      this._r25091170f6af1f = e;
    }
    set procedure(e) {
      this._rb21ab0ae53c5dc = e;
    }
    set filters(e) {
      this.hasGraphicsContext() && (this.getGraphicContext(!0).filters = e);
    }
    set debug(e) {
      this.var_1933 = e;
    }
    set properties(e) {}
    set offsetX(e) {
      this._offsetX = e;
    }
    set offsetY(e) {
      this._offsetY = e;
    }
    set etching(e) {}
    set state(e) {
      e != this._state && ((this._state = e), this._context.invalidate(this, null, class_2902.STATE));
    }
    set dynamicStyleColor(e) {
      this._rebcf23ea644af7 = e;
    }
    get dynamicStyleColor() {
      return this._rebcf23ea644af7;
    }
    set style(e) {
      if (e != this._style) {
        this._style = e;
        let r = [];
        this.groupChildrenWithTag(a.TAG_INTERNAL, r);
        let t = r.length,
          i;
        for (; --t > -1;)
          ((i = r[t]), (i.tags ?? []).indexOf(a.TAG_IGNORE_INHERITED_STYLE) == -1 && (i.style = this._style));
        (this._context.invalidate(this, null, class_2902.REDRAW),
          (this._rafafa42f7e6a08 = this._context
            ._rf5e87151b3d9ca()
            .getThemeManager()
            ._r421a2291c74c01(this._style)));
      }
    }
    set dynamicStyle(e) {
      ((this._r5ba95e2e2bce18 = e), this._context.invalidate(this, null, class_2902.REDRAW));
    }
    set clipping(e) {
      e != this._r9354169f249129 &&
        ((this._r9354169f249129 = e), this._context.invalidate(this, null, class_2902.REDRAW));
    }
    get context() {
      return this._context;
    }
    get host() {
      let e = this.desktop;
      return this._parent === e ? this : this._parent.host;
    }
    get desktop() {
      return this._context._r1165eed3833024();
    }
    set parent(e) {
      if (e == this) throw new Error("Attempted to assign self as parent!");
      if (e != null && e.context != this._context && ((this._context = e.context), this._children))
        for (let s of this._children) s.parent = this;
      let r = this._parent,
        t = this._ra13d297b00d7cc ?? (this._ra13d297b00d7cc = new D()),
        i = this._re46ed8c0bb76e9 ?? (this._re46ed8c0bb76e9 = new D());
      if (this._parent != e) {
        (this._parent != null && this._parent.removeChild(this), (this._parent = e));
        let s;
        (this._parent != null
          ? ((this._re46ed8c0bb76e9 = this._parent.rectangle),
            (t.x = this._x),
            (t.y = this._y),
            (t.width = this.var_31),
            (t.height = this.var_35),
            (s = y.allocate(y.const_541, this, this._parent)),
            this.update(this, s))
          : ((i.x = 0),
            (i.y = 0),
            (i.width = 0),
            (i.height = 0),
            (s = y.allocate(y.const_1004, this, r)),
            this.update(this, s)),
          s.recycle());
      }
    }
    hasGraphicsContext() {
      return this._graphics != null || !this.testParamFlag(N.const_421);
    }
    getGraphicContext(e) {
      return (
        e &&
          !this._graphics &&
          ((this._graphics = new Un(
            "GC {" + this._name + "}",
            Un.GC_TYPE_BITMAP,
            new D(this._x, this._y, this.var_31, this.var_35),
          )),
          (this._graphics.visible = this.var_679)),
        this._graphics
      );
    }
    setupGraphicsContext() {
      if (
        ((this._graphics = this.getGraphicContext(!0)),
        this._parent && this._parent.setupGraphicsContext(),
        this._children && this._children.length > 0 && this._graphics.numChildContexts != this.numChildren)
      ) {
        let e = 0;
        for (let r of this._children) {
          let t = r;
          this._graphics._rf033e82caa2f15(t.getGraphicContext(!0), e++);
        }
      }
      return ((this.var_2257 = !0), this._graphics);
    }
    _ra92ab5224f2602() {
      ((this.var_2257 = !1), this._graphics);
    }
    _events = null;
    _graphics = null;
    _rb21ab0ae53c5dc = null;
    _r5e1a9574d869f6 = !0;
    _parent = null;
    _children = null;
    var_1933 = !1;
    _r877d6abc926943 = null;
    _r1565a157f96c52 = !1;
    _r668ab249f6a382 = !1;
    _r6a8da6f0c50011 = null;
    var_2257 = !1;
    _re46ed8c0bb76e9 = new D();
    _hCenterRem2 = 0;
    _rdc8462dabd0351 = !1;
    var_4439 = 0;
    _rafafa42f7e6a08;
    _r68d42265d451cc = null;
    _r6990cf80e52d01 = n((e) => this.immediateClickHandler(e), "_r6990cf80e52d01");
    _rc8565972c26859(e) {
      return e;
    }
    _rb887ed4274a4bf(e) {
      return e;
    }
    static _re91ddd1dfa5723 = 0;
    static _rc6b89b1f6da40e = new D();
    static TAG_EXCLUDE = "_EXCLUDE";
    static TAG_INTERNAL = "_INTERNAL";
    static TAG_COLORIZE = "_COLORIZE";
    static TAG_IGNORE_INHERITED_STYLE = "_IGNORE_INHERITED_STYLE";
    constructor() {
      super();
    }
    constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
      if (this._r668ab249f6a382 || this._disposed) return;
      this._r668ab249f6a382 = !0;
      let h = s._rf5e87151b3d9ca()._ra901a314cbdd73(r, t),
        p = o ?? new D(0, 0, h ? Number(h.attribute("width")) : 10, h ? Number(h.attribute("height")) : 10),
        m = s._rf5e87151b3d9ca().getThemeManager()._r421a2291c74c01(t);
      if (
        (this._radeee3a6413f2a(b, e, r, t, i, s, p, l, _),
        (this.var_4439 = a._re91ddd1dfa5723++),
        (this._rafafa42f7e6a08 = m),
        (this._re46ed8c0bb76e9 = new D()),
        this._graphics || (this._graphics = this.getGraphicContext(!this.testParamFlag(N.const_421))),
        h != null)
      ) {
        ((this._r97aa2700f3e085 = new D(0, 0, Number(h.attribute("width")), Number(h.attribute("height")))),
          (this._ra13d297b00d7cc = this._r97aa2700f3e085.clone()),
          (this._x = this._r97aa2700f3e085.x),
          (this._y = this._r97aa2700f3e085.y),
          (this.var_31 = this._r97aa2700f3e085.width),
          (this.var_35 = this._r97aa2700f3e085.height),
          s._re088f75d913ba4()._r65e61e0e6e4930(h, this, null));
        let w = this.var_45;
        ((this.var_45 &= ~N._rb064687887f11c),
          this.setRectangle(p.x, p.y, p.width, p.height),
          (this.var_45 = w),
          (this._ra13d297b00d7cc.x = p.x),
          (this._ra13d297b00d7cc.y = p.y),
          (this._ra13d297b00d7cc.width = p.width),
          (this._ra13d297b00d7cc.height = p.height));
      }
      let v = s._rf5e87151b3d9ca()._r33c9c92ef45436(r, t);
      (v &&
        ((this.var_1119 = v.blend),
        (this.var_1157 = v.threshold),
        this._background != v.background && (this.background = v.background),
        this._fillColor != v.color && (this.color = v.color),
        v.hasRectLimits() && this.limits.assign(v.width_min, v.width_max, v.height_min, v.height_max)),
        f && (this.properties = f),
        (this._rb21ab0ae53c5dc = c),
        d != null &&
          ((this._parent = d),
          d.addChild(this),
          this._graphics && this._context.invalidate(this, null, class_2902.REDRAW)));
    }
    clone() {
      let e = this.constructor,
        r = new e();
      return (
        r.constructWindow(
          this._name,
          this._type,
          this._style,
          this.var_45,
          this._context,
          new D(this._x, this._y, this.var_31, this.var_35),
          null,
          this._rb21ab0ae53c5dc,
          this.properties,
          this.var_598 ? this.var_598.concat() : null,
          this._id,
          this._r5ba95e2e2bce18,
        ),
        (r.var_1157 = this.var_1157),
        (r._r25091170f6af1f = this._r25091170f6af1f),
        (r._r5e1a9574d869f6 = this._r5e1a9574d869f6),
        (r.var_1933 = this.var_1933),
        (r._re46ed8c0bb76e9 = this._re46ed8c0bb76e9.clone()),
        (r._hCenterRem2 = this._hCenterRem2),
        (r._x = this._x),
        (r._y = this._y),
        (r.var_31 = this.var_31),
        (r.var_35 = this.var_35),
        (r._r97aa2700f3e085 = this._r97aa2700f3e085.clone()),
        (r._ra13d297b00d7cc = this._ra13d297b00d7cc.clone()),
        (r._rfa53771e154729 = this._rfa53771e154729 ? this._rfa53771e154729.clone() : null),
        (r._r09b1b25066beec = this._r09b1b25066beec ? this._r09b1b25066beec.clone() : null),
        (r._r877d6abc926943 = this._r877d6abc926943 ? this._r877d6abc926943.clone(r) : null),
        (r._context = this._context),
        (r._fillColor = this._fillColor),
        (r._r1f783655234401 = this._r1f783655234401),
        (r.clipping = this._r9354169f249129),
        (r.var_679 = this.var_679),
        (r.var_1119 = this.var_1119),
        r._graphics && !r.testParamFlag(N.const_421) && (r._graphics.blend = this.var_1119),
        (r.var_45 = this.var_45),
        (r._state = this._state),
        (r._name = this._name),
        (r._id = this._id),
        (r.caption = this._caption),
        (r.background = this._background),
        this._rf2db323e4b424b(r),
        r
      );
    }
    _rf2db323e4b424b(e) {
      let r;
      if (this._children)
        for (let t of this._children)
          (t.tags ?? []).indexOf(a.TAG_EXCLUDE) == -1 && e.addChild(t.clone());
    }
    dispose() {
      if (!this._disposed) {
        if (
          ((this._r68d42265d451cc = null),
          (this.immediateClickMode = !1),
          (this._rb21ab0ae53c5dc = null),
          this._context &&
            !this._context.disposed &&
            (this._r68bb527c29dd0c() || (this.getStateFlag(class_1948.WINDOW_STATE_ACTIVE) && this.deactivate())),
          this._children)
        )
          for (; this._children.length > 0;) {
            let e = this._children.pop();
            e && "dispose" in e && e.dispose();
          }
        if (((this._children = null), this.parent && (this.parent = null), this._events)) {
          let e = I8.allocate(this);
          (this._events.dispatchEvent(e), e.recycle(), this._events.dispose(), (this._events = null));
        }
        (this._graphics != null && (this._graphics.dispose(), (this._graphics = null)), super.dispose());
      }
    }
    toString() {
      return "[Window " + _iad1dc21ca35e21(this) + " " + this._name + " " + this.var_4439 + "]";
    }
    invalidate(e = null) {
      this._context.invalidate(this, e, class_2902.REDRAW);
    }
    resolve() {
      return 0;
    }
    center() {
      this._parent != null &&
        ((this.x = Math.round(this._parent.width / 2 - this.var_31 / 2)),
        (this.y = Math.round(this._parent.height / 2 - this.var_35 / 2)));
    }
    setRectangle(e, r, t, i) {
      ((e = Math.trunc(e)),
        (r = Math.trunc(r)),
        (t = Math.trunc(t)),
        (i = Math.trunc(i)),
        this._r877d6abc926943 &&
          ((i = Math.max(this._r877d6abc926943.minHeight, i)),
          (i = Math.min(this._r877d6abc926943.maxHeight, i)),
          (t = Math.max(this._r877d6abc926943.minWidth, t)),
          (t = Math.min(this._r877d6abc926943.maxWidth, t))));
      let s = e != this._x,
        o = t != this.var_31,
        d = e != this._x || r != this._y,
        c = o || i != this.var_35,
        f,
        l = this._hCenterRem2,
        b = !1,
        _ = e;
      if (c && !d) {
        if (((f = this.var_45 & N._r275986d12d5861), o))
          if (f == N._r965d426f663401) {
            let h = l - (t - this.var_31),
              p = Math.trunc(h / 2);
            ((e += p), (l = h - p * 2), (b = !0), (_ = e), (d = e != this._x || r != this._y));
          } else f == N._r4a22aaf6a6b79a && ((e -= t - this.var_31), (d = !0));
        ((f = this.var_45 & N._r42f8f5c646fd1b),
          f == N._r89c5db579b6c0e
            ? ((r -= (i - this.var_35) / 2), (d = !0))
            : f == N._rf5b0baf5faf9da && ((r -= i - this.var_35), (d = !0)));
      }
      if (
        ((e = Math.trunc(e)),
        (r = Math.trunc(r)),
        this.testParamFlag(N.const_1323) &&
          this._parent != null &&
          this._parent.name != Sxt &&
          ((e = e < 0 ? 0 : e),
          (r = r < 0 ? 0 : r),
          d
            ? ((e -= e + t > this._parent.width ? e + t - this._parent.width : 0),
              (r -= r + i > this._parent.height ? r + i - this._parent.height : 0),
              (d = e != this._x || r != this._y))
            : ((t -= e + t > this._parent.width ? e + t - this._parent.width : 0),
              (i -= r + i > this._parent.height ? r + i - this._parent.height : 0),
              (c = t != this.var_31 || i != this.var_35))),
        d || c)
      ) {
        let h;
        (d &&
          ((h = y.allocate(y.const_848, this, null, !0)),
          this.update(this, h),
          h.isWindowOperationPrevented() && (d = !1),
          h.recycle()),
          c &&
            ((h = y.allocate(y.const_1204, this, null, !0)),
            this.update(this, h),
            h.isWindowOperationPrevented() && (c = !1),
            h.recycle()),
          s && (d || c)
            ? (this._hCenterRem2 = 0)
            : o && c && (this._hCenterRem2 = b && (!d || e == _) ? l : 0),
          d &&
            ((this._ra13d297b00d7cc.x = this._x),
            (this._ra13d297b00d7cc.y = this._y),
            (this._ra13d297b00d7cc.width = this.var_31),
            (this._ra13d297b00d7cc.height = this.var_35),
            (this._x = e),
            (this._y = r)),
          c &&
            ((this._ra13d297b00d7cc.width = this.var_31),
            (this._ra13d297b00d7cc.height = this.var_35),
            (this.var_31 = t),
            (this.var_35 = i)),
          d && ((h = y.allocate(y.const_475, this, null)), this.update(this, h), h.recycle()),
          c && ((h = y.allocate(y.const_755, this, null)), this.update(this, h), h.recycle()));
      }
    }
    getRegionProperties(e = null, r = null, t = null, i = null) {
      (e != null &&
        ((e.x = this._x),
        (e.y = this._y),
        (e.width = this.var_31),
        (e.height = this.var_35)),
        r != null &&
          ((r.x = this._ra13d297b00d7cc.x),
          (r.y = this._ra13d297b00d7cc.y),
          (r.width = this._ra13d297b00d7cc.width),
          (r.height = this._ra13d297b00d7cc.height)),
        t != null &&
          this._rfa53771e154729 != null &&
          ((t.x = this._rfa53771e154729.x),
          (t.y = this._rfa53771e154729.y),
          (t.width = this._rfa53771e154729.width),
          (t.height = this._rfa53771e154729.height)),
        i != null &&
          this._r09b1b25066beec != null &&
          ((i.x = this._r09b1b25066beec.x),
          (i.y = this._r09b1b25066beec.y),
          (i.width = this._r09b1b25066beec.width),
          (i.height = this._r09b1b25066beec.height)));
    }
    _r266c183be5f9a7(e = null, r = null, t = null) {
      if (t != null) {
        if (t.width < 0 || t.height < 0)
          throw new Error("Invalid rectangle; maximized size can't be less than zero!");
        (this._r09b1b25066beec == null && (this._r09b1b25066beec = new D()),
          (this._r09b1b25066beec.x = t.x),
          (this._r09b1b25066beec.y = t.y),
          (this._r09b1b25066beec.width = t.width),
          (this._r09b1b25066beec.height = t.height));
      }
      if (r != null) {
        if (r.width < 0 || r.height < 0)
          throw new Error("Invalid rectangle; minimized size can't be less than zero!");
        (this._rfa53771e154729 == null && (this._rfa53771e154729 = new D()),
          (this._rfa53771e154729.x = r.x),
          (this._rfa53771e154729.y = r.y),
          (this._rfa53771e154729.width = r.width),
          (this._rfa53771e154729.height = r.height));
      }
      if (t != null && r != null && (t.width < r.width || t.height < r.height))
        throw (
          (t.width = r.width),
          (t.height = r.height),
          new Error("Maximized rectangle can't be smaller than minimized rectangle!")
        );
      e != null && this.setRectangle(e.x, e.y, e.width, e.height);
    }
    buildFromXML(e, r = null) {
      return this._context._re088f75d913ba4()._r65e61e0e6e4930(e, this, r) != null;
    }
    fetchDrawBuffer() {
      return this.testParamFlag(N.const_421)
        ? this._parent != null
          ? this._parent.fetchDrawBuffer()
          : null
        : this.getGraphicContext(!0).fetchDrawBuffer();
    }
    getDrawRegion(e) {
      this.testParamFlag(N.const_421)
        ? this._parent != null
          ? (this._parent.getDrawRegion(e),
            (e.x += this._x),
            (e.y += this._y),
            (e.width = this.var_31),
            (e.height = this.var_35))
          : ((e.x = 0), (e.y = 0), (e.width = 0), (e.height = 0))
        : ((e.x = 0), (e.y = 0), (e.width = this.var_31), (e.height = this.var_35));
    }
    update(e, r) {
      if (!this.testParamFlag(N._rf1f4405fe6b73d)) {
        let s = this.procedure;
        if (
          (s?.(r, this),
          this._disposed ||
            (!r.isWindowOperationPrevented() &&
              this.hasEventListener(r.type) &&
              (this._events?.dispatchEvent(r), this._disposed)) ||
            (r.cancelable && r.isWindowOperationPrevented()))
        )
          return !0;
      }
      let t, i;
      if (r instanceof u)
        switch (r.type) {
          case u.DOWN:
            if ((this.activate() && r.cancelable && r.preventDefault(), this.disposed)) return !0;
            if (
              (this.setStateFlag(class_1948.const_92, !0),
              (i = this._context._rc52f27dfc6ba9b()._r66579cd8745173()),
              i.begin(this),
              i._re5287150058685.push(u.UP),
              (i._rddbed4d6ddc699 = class_2125.const_1160),
              this.testParamFlag(N._r4ac675344d9e3e))
            )
              for (t = this; t != null;) {
                if (t.testParamFlag(N.WINDOW_PARAM_MOUSE_DRAGGING_TARGET)) {
                  this._context._rc52f27dfc6ba9b()._rc38e81f9558bb5().begin(t);
                  break;
                }
                t = t.parent;
              }
            if ((this.var_45 & N._ra27df34dd1f70f) > 0)
              for (t = this; t != null;) {
                if (t.testParamFlag(N.WINDOW_PARAM_MOUSE_SCALING_TARGET)) {
                  this._context
                    ._rc52f27dfc6ba9b()
                    ._r681e1223d3636f()
                    .begin(t, this.var_45 & N._ra27df34dd1f70f);
                  break;
                }
                t = t.parent;
              }
            break;
          case u.UP:
            (this.testStateFlag(class_1948.const_92) && this.setStateFlag(class_1948.const_92, !1),
              this._context._rc52f27dfc6ba9b()._r66579cd8745173().end(this),
              this.testParamFlag(N.WINDOW_PARAM_MOUSE_DRAGGING_TARGET) &&
                this._context._rc52f27dfc6ba9b()._rc38e81f9558bb5().end(this),
              this.testParamFlag(N.WINDOW_PARAM_MOUSE_SCALING_TARGET) &&
                this._context._rc52f27dfc6ba9b()._r681e1223d3636f().end(this));
            break;
          case u.OUT:
            (this.testStateFlag(class_1948.WINDOW_STATE_HOVERING) && this.setStateFlag(class_1948.WINDOW_STATE_HOVERING, !1),
              this.testStateFlag(class_1948.const_92) && this.setStateFlag(class_1948.const_92, !1));
            break;
          case u.OVER:
            this.testStateFlag(class_1948.WINDOW_STATE_HOVERING) || this.setStateFlag(class_1948.WINDOW_STATE_HOVERING, !0);
            break;
          case u.const_974:
          case u.WHEEL_HORIZONTAL:
            return !1;
        }
      else if (r instanceof y) {
        let s;
        switch (r.type) {
          case y.const_755:
            if (
              e == this &&
              ((a._rc6b89b1f6da40e.x = this._x < this._ra13d297b00d7cc.x ? this._x : this._ra13d297b00d7cc.x),
              (a._rc6b89b1f6da40e.y = this._y < this._ra13d297b00d7cc.y ? this._y : this._ra13d297b00d7cc.y),
              (a._rc6b89b1f6da40e.right =
                this._x + this.var_31 > this._ra13d297b00d7cc.right
                  ? this._x + this.var_31
                  : this._ra13d297b00d7cc.right),
              (a._rc6b89b1f6da40e.bottom =
                this._y + this.var_35 > this._ra13d297b00d7cc.bottom
                  ? this._y + this.var_35
                  : this._ra13d297b00d7cc.bottom),
              a._rc6b89b1f6da40e.offset(-this._x, -this._y),
              this._context.invalidate(this, a._rc6b89b1f6da40e, class_2902.RESIZE),
              (s = y.allocate(y.const_411, this, null)),
              this._r0c8e9e29edfba3(s),
              s.recycle(),
              this.testParamFlag(N._ra20cc779361d59, N._rcf781b4b002bb2)
                ? this._re70a1f76095d70()
                : this.testParamFlag(N._ra6bff225edb68c, N._raccb3b4229be11) && this._re70a1f76095d70(),
              this._parent != null)
            ) {
              let o = this.var_45;
              ((this.var_45 &= ~(N._rcf781b4b002bb2 | N._raccb3b4229be11)),
                this.testParamFlag(N._r8840cc960ba771) &&
                  (this._parent.width += this.var_31 - this._ra13d297b00d7cc.width),
                this.testParamFlag(N._rb24d4ab97e3989) &&
                  (this._parent.height += this.var_35 - this._ra13d297b00d7cc.height),
                (this.var_45 = o),
                (s = y.allocate(y.const_906, this._parent, this)),
                this._parent.update(this, s),
                s.recycle());
            }
            break;
          case y.const_475:
            e == this &&
              ((a._rc6b89b1f6da40e.x = this._x < this._ra13d297b00d7cc.x ? this._x : this._ra13d297b00d7cc.x),
              (a._rc6b89b1f6da40e.y = this._y < this._ra13d297b00d7cc.y ? this._y : this._ra13d297b00d7cc.y),
              (a._rc6b89b1f6da40e.right =
                this._x + this.var_31 > this._ra13d297b00d7cc.right
                  ? this._x + this.var_31
                  : this._ra13d297b00d7cc.right),
              (a._rc6b89b1f6da40e.bottom =
                this._y + this.var_35 > this._ra13d297b00d7cc.bottom
                  ? this._y + this.var_35
                  : this._ra13d297b00d7cc.bottom),
              a._rc6b89b1f6da40e.offset(-this._x, -this._y),
              this._context.invalidate(this, a._rc6b89b1f6da40e, class_2902.RELOCATE),
              (s = y.allocate(y.const_1019, this, null)),
              this._r0c8e9e29edfba3(s),
              s.recycle(),
              this._parent != null &&
                ((s = y.allocate(y.const_1385, this._parent, this)),
                this._parent.update(this, s),
                s.recycle()));
            break;
          case y.const_768:
            e == this &&
              ((s = y.allocate(y.const_828, this, null)),
              this._r0c8e9e29edfba3(s),
              s.recycle(),
              this._parent != null &&
                ((s = y.allocate(y.const_251, this._parent, this)),
                this._parent.update(this, s),
                s.recycle()));
            break;
          case y.const_541:
            (this.testParamFlag(N._ra20cc779361d59, N._rcf781b4b002bb2)
              ? this._re70a1f76095d70()
              : this.testParamFlag(N._ra6bff225edb68c, N._raccb3b4229be11) && this._re70a1f76095d70(),
              this._context.invalidate(this, null, class_2902.REDRAW),
              this._rdc8462dabd0351 && this._r34dbf38ef5b164(),
              (this._rdc8462dabd0351 = !0));
            break;
          case y.const_411:
            (this._parent?.getRegionProperties(null, this._re46ed8c0bb76e9), this._re70a1f76095d70());
            break;
          case y.const_1024:
            (this.testParamFlag(N._r22d1ec858797ca)
              ? this._r0b0c49a1e9846e()
              : this.testParamFlag(N.expandToAccommodateChild) &&
                r.related != null &&
                a._r73ef3901087e78(this, r.related),
              this._rbb92270b135df2());
            break;
          case y.const_1333:
            this.testParamFlag(N._r22d1ec858797ca) && this._r0b0c49a1e9846e();
            break;
          case y.const_251:
            this.activate();
            break;
          case y.const_906:
            this.testParamFlag(N._r22d1ec858797ca)
              ? this._r0b0c49a1e9846e()
              : this.testParamFlag(N.expandToAccommodateChild) &&
                r.related != null &&
                a._r73ef3901087e78(this, r.related);
            break;
          case y.const_1385:
            this.testParamFlag(N._r22d1ec858797ca)
              ? this._r0b0c49a1e9846e()
              : this.testParamFlag(N.expandToAccommodateChild) &&
                r.related != null &&
                a._r73ef3901087e78(this, r.related);
            break;
          case y.const_342:
            e == this &&
              this._parent != null &&
              ((s = y.allocate(y.const_342, this._parent, this)),
              this._parent.update(this, s),
              s.recycle());
            break;
        }
      }
      return !0;
    }
    _r34dbf38ef5b164() {
      if (
        !this.testParamFlag(N.const_421) &&
        (this._context.invalidate(this, null, class_2902.REDRAW), this._children)
      )
        for (let e of this._children) this._rc8565972c26859(e)?._r34dbf38ef5b164();
    }
    _rbb92270b135df2() {
      if (this._r5ba95e2e2bce18 == "") return;
      (!this._r6a8da6f0c50011 || this._r6a8da6f0c50011.name != this._r5ba95e2e2bce18) &&
        (this._r6a8da6f0c50011 = class_2878._r22c9347ecec607(this._r5ba95e2e2bce18));
      let e;
      (this.getStateFlag(class_1948.const_117)
        ? (e = class_1948.const_117)
        : this.getStateFlag(class_1948.const_92)
          ? (e = class_1948.const_92)
          : this.getStateFlag(class_1948.WINDOW_STATE_HOVERING)
            ? (e = class_1948.WINDOW_STATE_HOVERING)
            : (e = class_1948.WINDOW_STATE_DEFAULT),
        this._r728d96d2e2e64d(this, this._r6a8da6f0c50011, e),
        this._children && this._r76157500f420d9(this._children, e));
    }
    _r728d96d2e2e64d(e, r, t) {
      let i = r.getStyleByWindowState(t);
      if (
        ((e.offsetX = i.offsetX ?? 0),
        (e.offsetY = i.offsetY ?? 0),
        e.hasGraphicsContext()
          ? (e._graphics.getDisplayObject().transform.colorTransform = r._rcc47ecc28ed21c(t))
          : ((e._rebcf23ea644af7 = r._rcc47ecc28ed21c(t)), e.invalidate()),
        i.etchingPoint)
      ) {
        let s = [i.etchingColor ?? 0, i.etchingPoint[0], i.etchingPoint[1]];
        ((e.etching = s), e.invalidate());
      } else ((e.etching = [0, 0, 1]), e.invalidate());
    }
    _r76157500f420d9(e, r) {
      for (let t of e) {
        let i = t,
          s = this._r6a8da6f0c50011.getChildStyle(i);
        (s && this._r728d96d2e2e64d(i, s, r), i._children && this._r76157500f420d9(i._children, r));
      }
    }
    _r06c5b7ad0c6f86(e) {
      let r = this.procedure;
      (r?.(e, this),
        e.isWindowOperationPrevented() || (this.hasEventListener(e.type) && this._events?.dispatchEvent(e)));
    }
    _r89b98c58893d4c(...e) {}
    _r0c8e9e29edfba3(e) {
      if (this._children) for (let r of this._children) r.update(this, e);
    }
    convertPointFromGlobalToLocalSpace(e) {
      let r = e.x,
        t = e.y;
      (this._parent == null
        ? ((e.x = this._x), (e.y = this._y))
        : (this._parent.getGlobalPosition(e), (e.x += this._x), (e.y += this._y)),
        (e.x = r - e.x),
        (e.y = t - e.y));
    }
    convertPointFromLocalToGlobalSpace(e) {
      let r = e.x,
        t = e.y;
      (this._parent == null
        ? ((e.x = this._x), (e.y = this._y))
        : (this._parent.getGlobalPosition(e), (e.x += this._x), (e.y += this._y)),
        (e.x += r),
        (e.y += t));
    }
    getRelativeMousePosition(e) {
      (this.getGlobalPosition(e),
        (e.x = this._context._r1165eed3833024().mouseX - e.x),
        (e.y = this._context._r1165eed3833024().mouseY - e.y));
    }
    getAbsoluteMousePosition(e) {
      ((e.x = this._context._r1165eed3833024().mouseX), (e.y = this._context._r1165eed3833024().mouseY));
    }
    getLocalPosition(e) {
      ((e.x = this._x), (e.y = this._y));
    }
    getLocalRectangle(e) {
      ((e.x = this._x),
        (e.y = this._y),
        (e.width = this.var_31),
        (e.height = this.var_35));
    }
    hitTestLocalPoint(e) {
      return (
        e.x >= this._x &&
        e.x < this._x + this.var_31 &&
        e.y >= this._y &&
        e.y < this._y + this.var_35
      );
    }
    hitTestLocalRectangle(e) {
      return this.rectangle.intersects(e);
    }
    _r63dd0c21253351(e, r) {
      return this._r7c3e594cbf4a4b(e, r, this.var_1157);
    }
    get ignoreMouseEvents() {
      return this._r25091170f6af1f;
    }
    getGlobalPosition(e) {
      this._parent != null
        ? (this._parent.getGlobalPosition(e), (e.x += this._x), (e.y += this._y))
        : ((e.x = this._x), (e.y = this._y));
    }
    setGlobalPosition(e) {
      let r = new E();
      (this._parent != null
        ? (this._parent.getGlobalPosition(r), (r.x += this._x), (r.y += this._y))
        : ((r.x = this._x), (r.y = this._y)),
        (this.x += e.x - r.x),
        (this.y += e.y - r.y));
    }
    getGlobalRectangle(e) {
      (this._parent != null
        ? (this._parent.getGlobalRectangle(e), (e.x += this._x), (e.y += this._y))
        : ((e.x = this._x), (e.y = this._y)),
        (e.width = this.var_31),
        (e.height = this.var_35));
    }
    setGlobalRectangle(e) {
      let r = new E();
      (this._parent != null
        ? (this._parent.getGlobalPosition(r), (r.x += this._x), (r.y += this._y))
        : ((r.x = this._x), (r.y = this._y)),
        this.setRectangle(this.x + (e.x - r.x), this.y + (e.y - r.y), e.width, e.height));
    }
    hitTestGlobalPoint(e) {
      let r = new D();
      return (this.getGlobalRectangle(r), r.containsPoint(e));
    }
    hitTestGlobalRectangle(e) {
      let r = new D();
      return (this.getGlobalRectangle(r), r.intersects(e));
    }
    _r0c4900e3b824de(e, r) {
      let t = new E();
      return (
        this.getGlobalPosition(t),
        (t.x = e.x - t.x),
        (t.y = e.y - t.y),
        this._r7c3e594cbf4a4b(t, r, this.var_1157)
      );
    }
    getMouseRegion(e) {
      if (
        (this.getGlobalRectangle(e),
        e.width < 0 && (e.width = 0),
        e.height < 0 && (e.height = 0),
        this.testParamFlag(N.const_421))
      ) {
        let r = new D();
        (this._parent?.getMouseRegion(r),
          e.left < r.left && (e.left = r.left),
          e.top < r.top && (e.top = r.top),
          e.right > r.right && (e.right = r.right),
          e.bottom > r.bottom && (e.bottom = r.bottom));
      }
    }
    static _r08f0131ccbe4aa(e, r) {
      let t = new D();
      e.getGlobalRectangle(t);
      let i = e.numChildren,
        s = t.x,
        o = t.y;
      ((r.left = s < r.left ? s : r.left),
        (r.top = o < r.top ? o : r.top),
        (r.right = t.right > r.right ? t.right : r.right),
        (r.bottom = t.bottom > r.bottom ? t.bottom : r.bottom));
      for (let d = 0; d < i; d++) a._r08f0131ccbe4aa(e.getChildAt(d), r);
    }
    static _rf1964427499271 = new E();
    _r7c3e594cbf4a4b(e, r, t) {
      let i = !1,
        s;
      if (this.var_31 < 1 || this.var_35 < 1) return !1;
      if (this._r5e1a9574d869f6 && this.var_1157 > 0)
        this.testParamFlag(N.const_421)
          ? (i = r != null ? r.hitTest(a._rf1964427499271, t, e) : !1)
          : e.x <= this.var_31 &&
            e.y <= this.var_35 &&
            ((s = this.getGraphicContext(!0).fetchDrawBuffer()),
            s != null && (i = s.hitTest(a._rf1964427499271, t, e)));
      else return this._rcb671bdbb08ed4(e);
      return i;
    }
    _rcb671bdbb08ed4(e) {
      return e.x >= 0 && e.x < this.var_31 && e.y >= 0 && e.y < this.var_35;
    }
    _rd90f24bfa05997() {
      return !0;
    }
    resolveVerticalScale() {
      return this.var_35 / this._r97aa2700f3e085.height;
    }
    resolveHorizontalScale() {
      return this.var_31 / this._r97aa2700f3e085.width;
    }
    offset(e, r) {
      this.setRectangle(this._x + e, this._y + r, this.var_31, this.var_35);
    }
    scale(e, r) {
      this.setRectangle(this._x, this._y, this.var_31 + e, this.var_35 + r);
    }
    static _r73ef3901087e78(e, r) {
      let t = 0,
        i = 0,
        s = e.width,
        o = e.height,
        d = !1;
      if (
        (r.x < 0 && ((t = r.x), (s -= t), (r.x = 0), (d = !0)),
        r.right > s && ((s = r.x + r.width), (d = !0)),
        r.y < 0 && ((i = r.y), (o -= i), (r.y = 0), (d = !0)),
        r.bottom > o && ((o = r.y + r.height), (d = !0)),
        d)
      ) {
        let c = e.param & (N.expandToAccommodateChild | N._r22d1ec858797ca);
        if ((c && e.setParamFlag(c, !1), e.setRectangle(e.x + t, e.y + i, s, o), i != 0 || t != 0)) {
          let f,
            l = e.numChildren;
          for (f = 0; f < l; f++) e.getChildAt(f)?.offset(-t, -i);
        }
        c && e.setParamFlag(c, !0);
      }
    }
    _r0b0c49a1e9846e() {
      if (!this._children) return;
      let e,
        r = 0,
        t = 0,
        i = 0,
        s = 0,
        o = !1,
        d = this.param & (N.expandToAccommodateChild | N._r22d1ec858797ca);
      for (let c of this._children)
        (c.visible && c.x < r && ((i -= c.x - r), (r = c.x), (o = !0)),
          c.visible && c.x + c.width > i && ((i = c.x + c.width), (o = !0)),
          c.visible && c.y < t && ((s -= c.y - t), (t = c.y), (o = !0)),
          c.visible && c.y + c.height > s && ((s = c.y + c.height), (o = !0)));
      if (o) {
        let c = [],
          f;
        for (let l of this._children)
          ((f = l.param & (N._rcf781b4b002bb2 | N._raccb3b4229be11)), l.setParamFlag(f, !1), c.push(f));
        (d && this.setParamFlag(d, !1), this.setRectangle(this._x + r, this._y + t, i, s));
        for (let l of this._children) (l.offset(-r, -t), l.setParamFlag(c.shift() ?? 0, !0));
        d && this.setParamFlag(d, !0);
      }
    }
    static resizeToAccommodateChildren(e) {
      let r,
        t = 0,
        i = 0,
        s = Number.MIN_SAFE_INTEGER,
        o = Number.MIN_SAFE_INTEGER,
        d,
        c = !1,
        f = e.numChildren;
      for (r = 0; r < f; r++)
        ((d = e.getChildAt(r)),
          d && d.visible && d.x + d.width > s && ((s = d.x + d.width), (c = !0)),
          d && d.visible && d.y + d.height > o && ((o = d.y + d.height), (c = !0)));
      if (c) {
        let l = e.param & (N.expandToAccommodateChild | N._r22d1ec858797ca);
        if ((l && e.setParamFlag(l, !1), t != 0 || i != 0))
          for (r = 0; r < f; r++) {
            d = e.getChildAt(r);
            let b = d.testParamFlag(N.const_1323);
            (b && d.setParamFlag(N.const_1323, !1),
              d.offset(-t, -i),
              b && d.setParamFlag(N.const_1323, !0));
          }
        ((e.width = s), (e.height = o), l && e.setParamFlag(l, !0));
      }
    }
    getStateFlag(e) {
      return (this._state & e) != 0;
    }
    setStateFlag(e, r = !0) {
      let t = this._state;
      ((this._state = r ? (this._state |= e) : (this._state &= ~e)),
        this._state != t &&
          (this._rbb92270b135df2(), this._context.invalidate(this, null, class_2902.STATE)));
    }
    getStyleFlag(e) {
      return (this._style & e) != 0;
    }
    setStyleFlag(e, r = !0) {
      let t = this._style;
      if (((this._style = r ? (this._style |= e) : (this._style &= ~e)), this._style != t)) {
        let i = [];
        this.groupChildrenWithTag(a.TAG_INTERNAL, i);
        let s = i.length,
          o;
        for (; --s > -1;)
          ((o = i[s]), (o.tags ?? []).indexOf(a.TAG_IGNORE_INHERITED_STYLE) == -1 && (o.style = this._style));
        this._context.invalidate(this, null, class_2902.REDRAW);
      }
    }
    getParamFlag(e) {
      return (this.var_45 & e) != 0;
    }
    setParamFlag(e, r = !0) {
      let t = this.var_45;
      ((this.var_45 = r ? (this.var_45 |= e) : (this.var_45 &= ~e)),
        this.var_45 != t &&
          (this.var_45 & N.const_421
            ? this.var_45 & N.const_421 &&
              this._graphics &&
              this._context.invalidate(this, null, class_2902.REDRAW)
            : this._graphics ||
              (this.setupGraphicsContext(), this._context.invalidate(this, null, class_2902.REDRAW))));
    }
    _re70a1f76095d70() {
      if (this._parent == null || this._re46ed8c0bb76e9 == null) return;
      let e = this._parent.width ?? 0,
        r = this._parent.height ?? 0,
        t = this._re46ed8c0bb76e9.width ?? 0,
        i = this._re46ed8c0bb76e9.height ?? 0,
        s = !this.testParamFlag(N._r77a58b25a3d55d, N._rcf781b4b002bb2),
        o = !this.testParamFlag(N._r4e93705652120a, N._raccb3b4229be11),
        d,
        c,
        f,
        l = this._x,
        b = this._y,
        _ = this.var_31,
        h = this.var_35;
      s || o
        ? (s &&
            ((d = e - t),
            (c = this.var_45 & N._rcf781b4b002bb2),
            c == N._rf567d650b39a78
              ? (_ += d)
              : c == N._r251b340ca94bef
                ? (l += d)
                : c == N._ra20cc779361d59 &&
                  (e < _ && this.getParamFlag(N.const_421)
                    ? (l = 0)
                    : (l = Math.floor(e / 2) - Math.floor(_ / 2)))),
          o &&
            ((d = r - i),
            (c = this.var_45 & N._raccb3b4229be11),
            c == N._r46a9ac2e4c9863
              ? (h += d)
              : c == N._r317c7c36abd185
                ? (b += d)
                : c == N._ra6bff225edb68c &&
                  (r < h && this.getParamFlag(N.const_421)
                    ? (b = 0)
                    : (b = Math.floor(r / 2) - Math.floor(h / 2)))),
          (f = this.var_45),
          (this.var_45 &= ~(N._rb064687887f11c | N._rcf781b4b002bb2 | N._raccb3b4229be11)),
          this.setRectangle(l, b, _, h),
          (this.var_45 = f))
        : this.testParamFlag(N.const_1323) &&
          this._parent != null &&
          ((l = l < 0 ? 0 : l),
          (b = b < 0 ? 0 : b),
          (l -= l + _ > e ? l + _ - e : 0),
          (b -= b + h > r ? b + h - r : 0),
          (_ -= l + _ > e ? l + _ - e : 0),
          (h -= b + h > r ? b + h - r : 0),
          (l != this._x || b != this._y || _ != this.var_31 || h != this.var_35) &&
            ((f = this.var_45),
            (this.var_45 &= ~(N._rb064687887f11c | N._rcf781b4b002bb2 | N._raccb3b4229be11)),
            this.setRectangle(l, b, _, h),
            (this.var_45 = f)));
    }
    _r68bb527c29dd0c() {
      return this._parent != this._context._r1165eed3833024();
    }
    destroy() {
      if (this._state == class_1948.WINDOW_STATE_DESTROYING) return !0;
      this._state = class_1948.WINDOW_STATE_DESTROYING;
      let e = y.allocate(y.const_712, this, null);
      return (
        this.update(this, e),
        e.isDefaultPrevented()
          ? (e.recycle(), !1)
          : (e.recycle(),
            (e = y.allocate(y.const_953, this, null)),
            this.update(this, e),
            e.recycle(),
            this.dispose(),
            !0)
      );
    }
    minimize() {
      if (this._state & class_1948.const_115) return !1;
      let e = y.allocate(y.const_1276, this, null);
      return (
        this.update(this, e),
        e.isDefaultPrevented()
          ? (e.recycle(), !1)
          : (e.recycle(),
            this.setStateFlag(class_1948.const_115, !0),
            (e = y.allocate(y.const_622, this, null)),
            this.update(this, e),
            e.recycle(),
            !0)
      );
    }
    maximize() {
      if (this._state & class_1948.const_115) return !1;
      let e = y.allocate(y.const_341, this, null);
      return (
        this.update(this, e),
        e.isDefaultPrevented()
          ? (e.recycle(), !1)
          : (e.recycle(),
            this.setStateFlag(class_1948.const_115, !0),
            (e = y.allocate(y.const_569, this, null)),
            this.update(this, e),
            e.recycle(),
            !0)
      );
    }
    restore() {
      let e = y.allocate(y.WINDOW_EVENT_RESTORE, this, null);
      return (
        this.update(this, e),
        e.isDefaultPrevented()
          ? (e.recycle(), !1)
          : (e.recycle(),
            this.setStateFlag(class_1948.const_115, !1),
            (e = y.allocate(y.const_813, this, null)),
            this.update(this, e),
            e.recycle(),
            !0)
      );
    }
    activate() {
      let e = y.allocate(y.const_413, this, null);
      return (
        this.update(this, e),
        e.isDefaultPrevented()
          ? (e.recycle(), !1)
          : (e.recycle(),
            this.setStateFlag(class_1948.WINDOW_STATE_ACTIVE, !0),
            (e = y.allocate(y.const_768, this, null)),
            this.update(this, e),
            e.recycle(),
            !0)
      );
    }
    deactivate() {
      if (!this.getStateFlag(class_1948.WINDOW_STATE_ACTIVE)) return !0;
      let e = y.allocate(y.const_726, this, null);
      return (
        this.update(this, e),
        e.isDefaultPrevented()
          ? (e.recycle(), !1)
          : (e.recycle(),
            this.setStateFlag(class_1948.WINDOW_STATE_ACTIVE, !1),
            (e = y.allocate(y.const_210, this, null)),
            this.update(this, e),
            e.recycle(),
            !0)
      );
    }
    lock() {
      if (this.getStateFlag(class_1948.const_115)) return !0;
      let e = y.allocate(y.WINDOW_EVENT_LOCK, this, null);
      return (
        this.update(this, e),
        e.isDefaultPrevented()
          ? (e.recycle(), !1)
          : (e.recycle(),
            this.setStateFlag(class_1948.const_115, !0),
            (e = y.allocate(y.const_697, this, null)),
            this.update(this, e),
            e.recycle(),
            !0)
      );
    }
    unlock() {
      if (!this.getStateFlag(class_1948.const_115)) return !0;
      let e = y.allocate(y.WINDOW_EVENT_UNLOCK, this, null);
      return (
        this.update(this, e),
        e.isDefaultPrevented()
          ? (e.recycle(), !1)
          : (e.recycle(),
            this.setStateFlag(class_1948.const_115, !1),
            (e = y.allocate(y.const_914, this, null)),
            this.update(this, e),
            e.recycle(),
            !0)
      );
    }
    enable() {
      if (!this.getStateFlag(class_1948.const_117)) return !0;
      let e = y.allocate(y.const_294, this, null);
      return (
        this.update(this, e),
        e.isDefaultPrevented()
          ? (e.recycle(), !1)
          : (e.recycle(),
            this.setStateFlag(class_1948.const_117, !1),
            (e = y.allocate(y.const_1331, this, null)),
            this.update(this, e),
            e.recycle(),
            !0)
      );
    }
    disable() {
      if (this.getStateFlag(class_1948.const_117)) return !0;
      let e = y.allocate(y.const_155, this, null);
      return (
        this.update(this, e),
        e.isDefaultPrevented()
          ? (e.recycle(), !1)
          : (e.recycle(),
            this.setStateFlag(class_1948.const_117, !0),
            (e = y.allocate(y.const_1057, this, null)),
            this.update(this, e),
            e.recycle(),
            !0)
      );
    }
    focus() {
      if (this.getStateFlag(class_1948.const_138)) return !0;
      let e = y.allocate(y.WINDOW_EVENT_FOCUS, this, null);
      return (
        this.update(this, e),
        e.isDefaultPrevented()
          ? (e.recycle(), !1)
          : (e.recycle(),
            this.setStateFlag(class_1948.const_138, !0),
            (e = y.allocate(y.const_962, this, null)),
            this.update(this, e),
            e.recycle(),
            !0)
      );
    }
    unfocus() {
      if (!this.getStateFlag(class_1948.const_138)) return !0;
      let e = y.allocate(y.WINDOW_EVENT_UNFOCUS, this, null);
      return (
        this.update(this, e),
        e.isDefaultPrevented()
          ? (e.recycle(), !1)
          : (e.recycle(),
            this.setStateFlag(class_1948.const_138, !1),
            (e = y.allocate(y.const_1200, this, null)),
            this.update(this, e),
            e.recycle(),
            !0)
      );
    }
    _r99a0fce94dbe3a(e) {
      if (this.var_679) {
        let r = new D();
        this.getMouseRegion(r);
        let t = r.containsPoint(e),
          i,
          s = this.numChildren;
        if (t) {
          for (; s > 0; s--)
            if (((i = this._rc8565972c26859(this._children[s - 1])?._r99a0fce94dbe3a(e) ?? null), i != null))
              return i;
        }
        if (this._r0c4900e3b824de(e, null)) return this;
      }
      return null;
    }
    _rbfa408e721cfbe(e, r) {
      if (this.var_679) {
        let t;
        if (
          e.x >= this._x &&
          e.x < this._x + this.var_31 &&
          e.y >= this._y &&
          e.y < this._y + this.var_35
        ) {
          if ((r.push(this), this._children)) {
            e.offset(-this._x, -this._y);
            for (let i of this._children) this._rc8565972c26859(i)?._rbfa408e721cfbe(e, r);
            e.offset(this._x, this._y);
          }
        } else if (!this._r9354169f249129 && this._children) {
          e.offset(-this._x, -this._y);
          for (let i of this._children) this._rc8565972c26859(i)?._rbfa408e721cfbe(e, r);
          e.offset(this._x, this._y);
        }
      }
    }
    _rc9e702af735714(e, r, t = 0) {
      if (this.var_679) {
        let i;
        if (
          e.x >= this._x &&
          e.x < this._x + this.var_31 &&
          e.y >= this._y &&
          e.y < this._y + this.var_35
        ) {
          if (((this.var_45 & t) == t && r.push(this), this._children)) {
            e.offset(-this._x, -this._y);
            for (let s of this._children) this._rc8565972c26859(s)?._rc9e702af735714(e, r, t);
            e.offset(this._x, this._y);
          }
        } else if (!this._r9354169f249129 && this._children) {
          e.offset(-this._x, -this._y);
          for (let s of this._children) this._rc8565972c26859(s)?._rc9e702af735714(e, r, t);
          e.offset(this._x, this._y);
        }
      }
    }
    addEventListener(e, r, t = 0) {
      this._disposed ||
        (this._events || (this._events = new Kue(this)), this._events.addEventListener(e, r, t));
    }
    hasEventListener(e) {
      return this._disposed || !this._events ? !1 : this._events.hasEventListener(e);
    }
    removeEventListener(e, r) {
      !this._disposed && this._events && this._events.removeEventListener(e, r);
    }
    get children() {
      return this._children ?? [];
    }
    get numChildren() {
      return this._children ? this._children.length : 0;
    }
    populate(e) {
      let r = !1;
      this._children || (this._children = new Array());
      for (let t of e)
        t &&
          t.parent != this &&
          (this._children.push(t),
          (t.parent = this),
          (r = r || !!this._rc8565972c26859(t)?.hasGraphicsContext()));
      (this.var_2257 || r) && this.setupGraphicsContext();
    }
    addChild(e) {
      let r = e;
      (r.parent != null && r.parent.removeChild(r),
        this._children || (this._children = new Array()),
        this._children.push(r),
        (r.parent = this),
        (this.var_2257 || r.hasGraphicsContext()) &&
          (this.setupGraphicsContext(),
          r.getGraphicContext(!0).parent != this._graphics &&
            this._graphics?._r5748c5b1b0ad6c(r.getGraphicContext(!0))));
      let t = y.allocate(y.const_1024, this, e);
      return (this.update(this, t), t.recycle(), e);
    }
    addChildAt(e, r) {
      let t = e;
      (t.parent != null && t.parent.removeChild(t),
        this._children || (this._children = new Array()),
        this._children.splice(r, 0, t),
        (t.parent = this),
        (this.var_2257 || t.hasGraphicsContext()) &&
          (this.setupGraphicsContext(),
          t.getGraphicContext(!0).parent != this._graphics &&
            this._graphics?._rf033e82caa2f15(t.getGraphicContext(!0), r)));
      let i = y.allocate(y.const_1024, this, e);
      return (this.update(this, i), i.recycle(), e);
    }
    getChildAt(e) {
      return this._children && e < this._children.length && e > -1 ? this._children[e] : null;
    }
    getChildByID(e) {
      if (this._children) {
        for (let r of this._children) if (r.id == e) return r;
      }
      return null;
    }
    getChildByName(e) {
      if (this._r68d42265d451cc?.has(e)) return this._r68d42265d451cc.get(e) ?? null;
      if (this._children) {
        for (let r of this._children)
          if (r.name == e) return (this._r68d42265d451cc != null && this._r68d42265d451cc.set(e, r), r);
      }
      return null;
    }
    enableLookupCache() {
      this._r68d42265d451cc == null && (this._r68d42265d451cc = new Map());
    }
    findChildByName(e) {
      if (this._r68d42265d451cc?.has(e)) return this._r68d42265d451cc.get(e) ?? null;
      let r;
      if (this._children) {
        for (let t of this._children)
          if (t.name == e) return (this._r68d42265d451cc != null && this._r68d42265d451cc.set(e, t), t);
        for (let t of this._children)
          if (((r = t.findChildByName(e)), r))
            return (this._r68d42265d451cc != null && this._r68d42265d451cc.set(e, r), r);
      }
      return null;
    }
    getChildByTag(e) {
      if (this._children) {
        for (let r of this._children) if ((r.tags ?? []).indexOf(e) > -1) return r;
      }
      return null;
    }
    findChildByTag(e) {
      if ((this.var_598 ?? []).indexOf(e) > -1) return this;
      let r = this.getChildByTag(e);
      if (r == null && this._children) {
        for (let t of this._children) if (((r = t.findChildByTag(e)), r != null)) break;
      }
      return r;
    }
    windowIsChild(e) {
      if (this == e) return !0;
      if (this._children) {
        for (let r of this._children) if (r.windowIsChild(e)) return !0;
      }
      return !1;
    }
    getChildIndex(e) {
      return this._children ? this._children.indexOf(e) : -1;
    }
    removeChild(e) {
      if (!this._children) return null;
      let r = this._children.indexOf(e);
      if (r < 0) return null;
      (this._children.splice(r, 1), (e.parent = null));
      let t = this._rb887ed4274a4bf(e);
      t && t.hasGraphicsContext() && this._graphics?.var_42(t.getGraphicContext(!0));
      let i = y.allocate(y.const_1333, this, e);
      return (this.update(this, i), i.recycle(), e);
    }
    removeChildAt(e) {
      let r = this.getChildAt(e);
      return r ? this.removeChild(r) : null;
    }
    setChildIndex(e, r) {
      if (!this._children) return;
      let t = this._children.indexOf(e);
      if (t > -1 && r != t) {
        (this._children.splice(t, 1), this._children.splice(r, 0, e));
        let i = e;
        i.hasGraphicsContext() &&
          this._graphics?.setChildContextIndex(i.getGraphicContext(!0), this.getChildIndex(i));
      }
    }
    swapChildren(e, r) {
      if (this._children && e != null && r != null && e != r) {
        let t = this._children.indexOf(e);
        if (t < 0) return;
        let i = this._children.indexOf(r);
        if (i < 0) return;
        if (i < t) {
          let s = e;
          ((e = r), (r = s));
          let o = t;
          ((t = i), (i = o));
        }
        (this._children.splice(i, 1),
          this._children.splice(t, 1),
          this._children.splice(t, 0, r),
          this._children.splice(i, 0, e),
          (e.hasGraphicsContext() || r.hasGraphicsContext()) &&
            this._graphics?._rcde724da86fb53(e.getGraphicContext(!0), r.getGraphicContext(!0)));
      }
    }
    swapChildrenAt(e, r) {
      this._children &&
        (this.swapChildren(this._children[e], this._children[r]), this._graphics?._r7cf8e444d2f2f9(e, r));
    }
    groupChildrenWithID(e, r, t = 0) {
      if (!this._children) return 0;
      let i,
        s = 0;
      for (let o of this._children)
        (o.id == e && (r.push(o), s++),
          (t > 0 || t < 0) && (t--, (s += this._rc8565972c26859(o)?.groupChildrenWithID(e, r, t) ?? 0)));
      return s;
    }
    groupChildrenWithTag(e, r, t = 0) {
      if (!this._children) return 0;
      let i,
        s = 0;
      for (let o of this._children)
        ((o.tags ?? []).indexOf(e) > -1 && (r.push(o), s++),
          (t > 0 || t < 0) && (s += this._rc8565972c26859(o)?.groupChildrenWithTag(e, r, t - 1) ?? 0));
      return s;
    }
    findParentByName(e) {
      return this._name == e
        ? this
        : this._parent != null
          ? this._parent.name == e
            ? this._parent
            : this._parent.findParentByName(e)
          : null;
    }
    _r1fa65fe968efdb() {
      if (this.testParamFlag(N.const_421)) {
        let e;
        if (this._children) {
          for (let r of this._children) if (this._rc8565972c26859(r)?._r1fa65fe968efdb()) return !0;
        }
        return !1;
      } else return !0;
    }
    createProperty(e, r) {
      return this._rafafa42f7e6a08.get(e).withValue(r);
    }
    getDefaultProperty(e) {
      return this._rafafa42f7e6a08.get(e);
    }
    isEnabled() {
      return !this.getStateFlag(class_1948.const_117);
    }
    enableChildren(e, r) {
      for (let t of r) {
        let i = this.findChildByName(t);
        i != null && (e ? i.enable() : i.disable());
      }
    }
    activateChildren(e, r) {
      for (let t of r) {
        let i = this.findChildByName(t);
        i != null && (e ? i.activate() : i.deactivate());
      }
    }
    setVisibleChildren(e, r) {
      for (let t of r) {
        let i = this.findChildByName(t);
        i != null && (i.visible = e);
      }
    }
    set immediateClickMode(e) {
      if (e != this._r1565a157f96c52) {
        this._r1565a157f96c52 = e;
        let r = this.getGraphicContext(!1);
        r &&
          (this._r1565a157f96c52
            ? ((r.mouse = !0), r.addEventListener?.(UnkClass_fd7c12.CLICK, this._r6990cf80e52d01))
            : ((r.mouse = !1), r.removeEventListener?.(UnkClass_fd7c12.CLICK, this._r6990cf80e52d01)));
      }
    }
    immediateClickHandler(e) {
      let r = e,
        t = new E(r.stageX, r.stageY),
        i = [];
      for (this.desktop._rbfa408e721cfbe(t, i); i.length > 0;) {
        let o = i.pop();
        if (o == this) break;
        if (o && o.getParamFlag(N._re3bd61027cfd94)) return;
      }
      this.getRelativeMousePosition(t);
      let s = u.allocate(
        u.CLICK,
        this,
        null,
        t.x,
        t.y,
        r.stageX,
        r.stageY,
        r.altKey,
        r.ctrlKey,
        r.shiftKey,
        r.buttonDown,
        r.delta,
      );
      if ((this._events && this._events.dispatchEvent(s), !s.isWindowOperationPrevented())) {
        let o = this.procedure;
        o?.(s, this);
      }
      (e.stopImmediatePropagation(), s.recycle());
    }
  }
