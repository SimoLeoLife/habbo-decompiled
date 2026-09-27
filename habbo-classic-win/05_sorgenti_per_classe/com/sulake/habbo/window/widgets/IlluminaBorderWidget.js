// Extracted from HabboAirLauncher.deobf.js, line 149028.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/IlluminaBorderWidget.as
// Obfuscated name: _ic6021fb0cf9742

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("illumina_border_xml")?.content,
    )),
      (this._canvas = this._rf8f9fc25599fa4?.getChildByName("canvas")),
      (this._children = this._rf8f9fc25599fa4?.getChildByName("children")));
    let t = this.var_220?.getDefaultProperty(a._r9c55971562e76c) ?? a._r25a412db4bc372;
    ((this.borderStyle = String(t.value)),
      this.var_220?.addEventListener(y.const_1204, this.onChange),
      this.var_220?.addEventListener(y.const_755, this.onChange),
      this._children?.addEventListener(y.const_1024, this.onChange),
      this._children?.addEventListener(y.const_1333, this.onChange),
      this._children?.addEventListener(y.const_1385, this.onChange),
      this._children?.addEventListener(y.const_906, this.onChange),
      this.var_220 != null && (this.var_220.rootWindow = this._rf8f9fc25599fa4),
      this._rf8f9fc25599fa4 != null &&
        this.var_220 != null &&
        ((this._rf8f9fc25599fa4.width = this.var_220.width),
        (this._rf8f9fc25599fa4.height = this.var_220.height)));
  }
  static {
    n(this, "IlluminaBorderWidget");
  }
  static TYPE = "illumina_border";
  static BORDER_STYLE_ILLUMINA_LIGHT = "illumina_light";
  static BORDER_STYLE_ILLUMINA_DARK = "illumina_dark";
  static _rfbe577de7dd3b5 = [a.BORDER_STYLE_ILLUMINA_LIGHT, a.BORDER_STYLE_ILLUMINA_DARK];
  static _r9c55971562e76c = `${a.TYPE}:border_style`;
  static _r3e5fa4afba4451 = `${a.TYPE}:content_child`;
  static _ra88e9cf37ddd91 = `${a.TYPE}:content_padding`;
  static _re90b1cd169f0ed = `${a.TYPE}:side_padding`;
  static _r6fc78860f0d43d = `${a.TYPE}:child_margin`;
  static _rdcca32ce4cfa03 = `${a.TYPE}:top_left_child`;
  static _r47d59ca95b77c1 = `${a.TYPE}:top_center_child`;
  static _rad12405f8600d7 = `${a.TYPE}:top_right_child`;
  static _r6a2230af5ef92a = `${a.TYPE}:bottom_left_child`;
  static _ra4f5d89e9aa7d3 = `${a.TYPE}:bottom_center_child`;
  static _r5b6c303e809ecf = `${a.TYPE}:bottom_right_child`;
  static _r242e1e9dc63fcd = `${a.TYPE}:landing_view_mode`;
  static _r25a412db4bc372 = new ne(a._r9c55971562e76c, a.BORDER_STYLE_ILLUMINA_LIGHT, ne.STRING, !1, a._rfbe577de7dd3b5);
  static _r534d822b99af98 = new ne(a._r3e5fa4afba4451, "", ne.STRING);
  static _rcd1f552f59c7b9 = new ne(a._ra88e9cf37ddd91, 5, ne.const_77);
  static _rd3b83aef85a743 = new ne(a._re90b1cd169f0ed, 15, ne.const_77);
  static _r10dbc633f7a675 = new ne(a._r6fc78860f0d43d, 3, ne.const_77);
  static _r275957b5c84d12 = new ne(a._rdcca32ce4cfa03, "", ne.STRING);
  static _r05cf54c7fcb3c0 = new ne(a._r47d59ca95b77c1, "", ne.STRING);
  static _re44276361d219f = new ne(a._rad12405f8600d7, "", ne.STRING);
  static _r0502a05c33705e = new ne(a._r6a2230af5ef92a, "", ne.STRING);
  static _r3ee311a6857c46 = new ne(a._ra4f5d89e9aa7d3, "", ne.STRING);
  static _r4ceb0e1b7a7c96 = new ne(a._r5b6c303e809ecf, "", ne.STRING);
  static _r1d608b123121ab = new ne(a._r242e1e9dc63fcd, !1, ne.BOOLEAN);
  static MATRIX = new Pe();
  static TOP_LEFT = "top_left";
  static TOP = "top_center";
  static TOP_RIGHT = "top_right";
  static RIGHT = "center_right";
  static BOTTOM_RIGHT = "bottom_right";
  static BOTTOM = "bottom_center";
  static BOTTOM_LEFT = "bottom_left";
  static const_27 = "center_left";
  static _rfa72b45739ecce = [
    a.TOP_LEFT,
    a.TOP,
    a.TOP_RIGHT,
    a.RIGHT,
    a.BOTTOM_RIGHT,
    a.BOTTOM,
    a.BOTTOM_LEFT,
    a.const_27,
  ];
  _r2fcf3f398d1684 = new Map();
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _canvas = null;
  _rc2a86012a4c5bf = null;
  _children = null;
  _settingProperties = !1;
  var_775 = !1;
  _r0eeec4795d20b5 = String(a._r25a412db4bc372.value);
  var_1951 = String(a._r534d822b99af98.value);
  contentPadding = Number(a._rcd1f552f59c7b9.value) >>> 0;
  var_1802 = Number(a._rd3b83aef85a743.value) >>> 0;
  _childMargin = Number(a._r10dbc633f7a675.value) >>> 0;
  _r4ccea35a5868d7 = String(a._r275957b5c84d12.value);
  _r6241117a73e399 = String(a._r05cf54c7fcb3c0.value);
  _r0cb95e22add48a = String(a._re44276361d219f.value);
  _r8f74ff0458c0ee = String(a._r0502a05c33705e.value);
  _r90dd088e4fe24f = String(a._r3ee311a6857c46.value);
  _r16a033a9f5a68b = String(a._r4ceb0e1b7a7c96.value);
  _rdb14ec5624f190 = !!a._r1d608b123121ab.value;
  get disposed() {
    return this._disposed;
  }
  get iterator() {
    return this._children?.iterator ?? Lt.INSTANCE;
  }
  get properties() {
    return this._disposed
      ? []
      : [
          this.var_220?.createProperty(a._r9c55971562e76c, this._r0eeec4795d20b5) ??
            a._r25a412db4bc372.withValue(this._r0eeec4795d20b5),
          a._r534d822b99af98.withValue(this.var_1951),
          a._rcd1f552f59c7b9.withValue(this.contentPadding),
          a._rd3b83aef85a743.withValue(this.var_1802),
          a._r10dbc633f7a675.withValue(this._childMargin),
          a._r275957b5c84d12.withValue(this._r4ccea35a5868d7),
          a._r05cf54c7fcb3c0.withValue(this._r6241117a73e399),
          a._re44276361d219f.withValue(this._r0cb95e22add48a),
          a._r0502a05c33705e.withValue(this._r8f74ff0458c0ee),
          a._r3ee311a6857c46.withValue(this._r90dd088e4fe24f),
          a._r4ceb0e1b7a7c96.withValue(this._r16a033a9f5a68b),
          a._r1d608b123121ab.withValue(this._rdb14ec5624f190),
        ];
  }
  set properties(e) {
    if (!this._disposed) {
      this._settingProperties = !0;
      for (let r of e)
        switch (r.key) {
          case a._r9c55971562e76c:
            this.borderStyle = String(r.value);
            break;
          case a._r3e5fa4afba4451:
            this._rac0552ba0b334f = String(r.value);
            break;
          case a._ra88e9cf37ddd91:
            this._r0d7d2445e24b3c = Number(r.value) >>> 0;
            break;
          case a._re90b1cd169f0ed:
            this._ref45f67ff6ec9a = Number(r.value) >>> 0;
            break;
          case a._r6fc78860f0d43d:
            this._r392e713782039b = Number(r.value) >>> 0;
            break;
          case a._rdcca32ce4cfa03:
            this._rfd87496b715643 = String(r.value);
            break;
          case a._r47d59ca95b77c1:
            this._rda85befd16230f = String(r.value);
            break;
          case a._rad12405f8600d7:
            this._r4585624e24253f = String(r.value);
            break;
          case a._r6a2230af5ef92a:
            this._rda156925954199 = String(r.value);
            break;
          case a._ra4f5d89e9aa7d3:
            this._r0f7151abaf58e6 = String(r.value);
            break;
          case a._r5b6c303e809ecf:
            this._r57e05f77cfccfa = String(r.value);
            break;
          case a._r242e1e9dc63fcd:
            this._r6cd8d38c442f5a = !!r.value;
            break;
        }
      ((this._settingProperties = !1), this.refresh());
    }
  }
  get borderStyle() {
    return this._r0eeec4795d20b5;
  }
  set borderStyle(e) {
    ((this._r0eeec4795d20b5 = e), (this._r2fcf3f398d1684 = new Map()));
    for (let r of a._rfa72b45739ecce)
      this._r2fcf3f398d1684.set(
        r,
        this._windowManager?.assets.getAssetByName(`${this._r0eeec4795d20b5}_border_${r}`),
      );
    this.refresh();
  }
  get _rac0552ba0b334f() {
    return this.var_1951;
  }
  set _rac0552ba0b334f(e) {
    ((this.var_1951 = e ?? ""), this.refresh());
  }
  get _r0d7d2445e24b3c() {
    return this.contentPadding;
  }
  set _r0d7d2445e24b3c(e) {
    ((this.contentPadding = e >>> 0), this.refresh());
  }
  get _ref45f67ff6ec9a() {
    return this.var_1802;
  }
  set _ref45f67ff6ec9a(e) {
    ((this.var_1802 = e >>> 0), this.refresh());
  }
  get _r392e713782039b() {
    return this._childMargin;
  }
  set _r392e713782039b(e) {
    ((this._childMargin = e >>> 0), this.refresh());
  }
  get _rfd87496b715643() {
    return this._r4ccea35a5868d7;
  }
  set _rfd87496b715643(e) {
    ((this._r4ccea35a5868d7 = e ?? ""), this.refresh());
  }
  get _rda85befd16230f() {
    return this._r6241117a73e399;
  }
  set _rda85befd16230f(e) {
    ((this._r6241117a73e399 = e ?? ""), this.refresh());
  }
  get _r4585624e24253f() {
    return this._r0cb95e22add48a;
  }
  set _r4585624e24253f(e) {
    ((this._r0cb95e22add48a = e ?? ""), this.refresh());
  }
  get _rda156925954199() {
    return this._r8f74ff0458c0ee;
  }
  set _rda156925954199(e) {
    ((this._r8f74ff0458c0ee = e ?? ""), this.refresh());
  }
  get _r0f7151abaf58e6() {
    return this._r90dd088e4fe24f;
  }
  set _r0f7151abaf58e6(e) {
    ((this._r90dd088e4fe24f = e ?? ""), this.refresh());
  }
  get _r57e05f77cfccfa() {
    return this._r16a033a9f5a68b;
  }
  set _r57e05f77cfccfa(e) {
    ((this._r16a033a9f5a68b = e ?? ""), this.refresh());
  }
  get _r6cd8d38c442f5a() {
    return this._rdb14ec5624f190;
  }
  set _r6cd8d38c442f5a(e) {
    ((this._rdb14ec5624f190 = e), this.refresh());
  }
  dispose() {
    this._disposed ||
      (this._rc2a86012a4c5bf != null && (this._rc2a86012a4c5bf.dispose(), (this._rc2a86012a4c5bf = null)),
      this.var_220?.removeEventListener(y.const_1204, this.onChange),
      this.var_220?.removeEventListener(y.const_755, this.onChange),
      this._children?.removeEventListener(y.const_1024, this.onChange),
      this._children?.removeEventListener(y.const_1333, this.onChange),
      this._children?.removeEventListener(y.const_1385, this.onChange),
      this._children?.removeEventListener(y.const_906, this.onChange),
      (this._canvas = null),
      (this._children = null),
      this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      this._r2fcf3f398d1684.clear(),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  onChange = n((e) => {
    this.refresh();
  }, "onChange");
  _r024ecd5f1a19e5(e) {
    return this._r2fcf3f398d1684.get(e) ?? null;
  }
  _r4526ea799bf364(e) {
    return (e.length > 0 ? (this._children?.getChildByName(e) ?? null) : null)?.height ?? 0;
  }
  get _rf65e09cb990500() {
    return Math.trunc(
      Math.max(
        this._r4526ea799bf364(this._r6241117a73e399),
        Math.max(this._r4526ea799bf364(this._r4ccea35a5868d7), this._r4526ea799bf364(this._r0cb95e22add48a)),
      ) / 2,
    );
  }
  get _r20d805a826451e() {
    return Math.trunc(
      Math.max(
        this._r4526ea799bf364(this._r90dd088e4fe24f),
        Math.max(this._r4526ea799bf364(this._r8f74ff0458c0ee), this._r4526ea799bf364(this._r16a033a9f5a68b)),
      ) / 2,
    );
  }
  refresh() {
    if (
      this._settingProperties ||
      this.var_775 ||
      this._disposed ||
      this._rf8f9fc25599fa4 == null ||
      this._canvas == null ||
      this._children == null
    )
      return;
    (this._rf8f9fc25599fa4.limits.setEmpty(),
      this.var_220 != null &&
        ((this._rf8f9fc25599fa4.width = this.var_220.width),
        (this._rf8f9fc25599fa4.height = this.var_220.height)));
    let e = this._children.getChildByName(this.var_1951);
    if (e != null && this.var_220 != null) {
      let s = Math.max(1, e.width + 2 * this.contentPadding),
        o = Math.max(1, e.height + 2 * this.contentPadding + this._rf65e09cb990500 + this._r20d805a826451e);
      ((this.var_775 = !0),
        this.var_220.testParamFlag(N.expandToAccommodateChild) &&
          ((this._rf8f9fc25599fa4.limits.minWidth = s), (this._rf8f9fc25599fa4.limits.minHeight = o)),
        this.var_220.testParamFlag(N._r22d1ec858797ca) &&
          ((this._rf8f9fc25599fa4.limits.minWidth = s),
          (this._rf8f9fc25599fa4.limits.minHeight = o),
          (this._rf8f9fc25599fa4.limits.maxWidth = s),
          (this._rf8f9fc25599fa4.limits.maxHeight = o)),
        (this.var_775 = !1));
    }
    (this._rc2a86012a4c5bf == null ||
      this._rc2a86012a4c5bf.width !== this._rf8f9fc25599fa4.width ||
      this._rc2a86012a4c5bf.height !== this._rf8f9fc25599fa4.height) &&
      ((this._canvas.width = this._rf8f9fc25599fa4.width),
      (this._canvas.height = this._rf8f9fc25599fa4.height),
      (this._children.width = this._rf8f9fc25599fa4.width),
      (this._children.height = this._rf8f9fc25599fa4.height),
      this._rc2a86012a4c5bf?.dispose(),
      (this._rc2a86012a4c5bf = new A(this._canvas.width, this._canvas.height, !0, 0)),
      (this._canvas.bitmap = this._rc2a86012a4c5bf));
    let r = this._canvas.rectangle.clone();
    ((r.y += this._rf65e09cb990500),
      (r.height -= this._rf65e09cb990500 + this._r20d805a826451e),
      this._rc2a86012a4c5bf.lock(),
      this._rc2a86012a4c5bf.fillRect(new D(0, 0, this._canvas.width, this._canvas.height), 0));
    for (let s of a._rfa72b45739ecce) {
      let o = this._r024ecd5f1a19e5(s);
      if (
        o == null ||
        (this._rdb14ec5624f190 &&
          (s === a.TOP_LEFT || s === a.const_27 || s === a.BOTTOM_LEFT))
      )
        continue;
      let d = o.content,
        c = o.rectangle;
      if (d == null || c.width <= 0 || c.height <= 0) continue;
      let f = new D(r.x, r.y, c.width, c.height);
      switch (s) {
        case a.TOP_LEFT:
          break;
        case a.TOP:
          ((f.x += this._r024ecd5f1a19e5(a.TOP_LEFT)?.rectangle.width ?? 0),
            (f.width =
              r.width -
              (this._r024ecd5f1a19e5(a.TOP_LEFT)?.rectangle.width ?? 0) -
              (this._r024ecd5f1a19e5(a.TOP_RIGHT)?.rectangle.width ?? 0)));
          break;
        case a.TOP_RIGHT:
          f.x += r.width - c.width;
          break;
        case a.RIGHT:
          ((f.x += r.width - c.width),
            (f.y += this._r024ecd5f1a19e5(a.TOP_RIGHT)?.rectangle.height ?? 0),
            (f.height =
              r.height -
              (this._r024ecd5f1a19e5(a.TOP_RIGHT)?.rectangle.height ?? 0) -
              (this._r024ecd5f1a19e5(a.BOTTOM_RIGHT)?.rectangle.height ?? 0)));
          break;
        case a.BOTTOM_RIGHT:
          ((f.x += r.width - c.width), (f.y += r.height - c.height));
          break;
        case a.BOTTOM:
          if (
            ((f.x += this._r024ecd5f1a19e5(a.BOTTOM_LEFT)?.rectangle.width ?? 0),
            (f.y += r.height - c.height),
            (f.width =
              r.width -
              (this._r024ecd5f1a19e5(a.BOTTOM_LEFT)?.rectangle.width ?? 0) -
              (this._r024ecd5f1a19e5(a.BOTTOM_RIGHT)?.rectangle.width ?? 0)),
            this._rdb14ec5624f190)
          ) {
            let l = Math.trunc(f.width / 2);
            ((f.x += l), (f.width -= l));
          }
          break;
        case a.BOTTOM_LEFT:
          f.y += r.height - c.height;
          break;
        case a.const_27:
          ((f.y += this._r024ecd5f1a19e5(a.TOP_LEFT)?.rectangle.height ?? 0),
            (f.height =
              r.height -
              (this._r024ecd5f1a19e5(a.TOP_LEFT)?.rectangle.height ?? 0) -
              (this._r024ecd5f1a19e5(a.BOTTOM_LEFT)?.rectangle.height ?? 0)));
          break;
        default:
          continue;
      }
      ((a.MATRIX.a = f.width / c.width),
        (a.MATRIX.d = f.height / c.height),
        (a.MATRIX.tx = f.x - c.x * a.MATRIX.a),
        (a.MATRIX.ty = f.y - c.y * a.MATRIX.d),
        this._rc2a86012a4c5bf.draw(d, a.MATRIX, null, null, f, !1));
    }
    let t = [
        this._r4ccea35a5868d7,
        this._r6241117a73e399,
        this._r0cb95e22add48a,
        this._r8f74ff0458c0ee,
        this._r90dd088e4fe24f,
        this._r16a033a9f5a68b,
      ],
      i = this._children.iterator;
    for (let s = 0; s < i.length; s += 1) {
      let o = i[s] ?? null;
      if (o != null)
        if (o.name.length > 0) {
          let d = t.indexOf(o.name);
          if (d < 0)
            o.name === this.var_1951
              ? ((o.x = r.x + this.contentPadding), (o.y = r.y + this.contentPadding), (o.visible = !0))
              : (o.visible = !1);
          else {
            switch (d % 3) {
              case 0:
                o.x = Math.min(this.var_1802, this._canvas.width - o.width);
                break;
              case 1:
                o.x = Math.trunc(Math.max(this._canvas.width - o.width, 0) / 2);
                break;
              case 2:
                o.x = Math.max(this._canvas.width - o.width - this.var_1802, 0);
                break;
            }
            (d < 3
              ? (o.y = this._rf65e09cb990500 - Math.trunc(o.height / 2))
              : (o.y = this._canvas.height - (this._r20d805a826451e + Math.trunc(o.height / 2))),
              (o.visible = !0),
              this._rc2a86012a4c5bf.fillRect(
                new D(o.x - this._childMargin, o.y, o.width + this._childMargin * 2, o.height),
                0,
              ));
          }
        } else o.visible = !1;
    }
    (this._rc2a86012a4c5bf.unlock(), this._canvas.invalidate());
  }
}
