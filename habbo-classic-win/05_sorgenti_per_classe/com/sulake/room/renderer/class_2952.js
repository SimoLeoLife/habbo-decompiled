// Estratto da HabboAirLauncher.deobf.js, riga 376942.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/renderer/class_2952.as
// Nome offuscato: _iaec9cffdf671e6

class a {
  constructor(e, r, t, i, s) {
    this.container = e;
    ((this._id = r),
      (this.master = new Sprite()),
      (this.master.mouseEnabled = !1),
      (this.display = new Sprite()),
      (this.display.name = "canvas"),
      (this.display.mouseEnabled = !1),
      this.master.addChild(this.display),
      (this.scene = new Sprite()),
      (this.scene.name = "canvas_scene"),
      (this.scene.mouseEnabled = !1),
      this.display.addChild(this.scene),
      (this._r2ca2d50b47823e = _ied2c7bd739b947(!1)),
      (this._r2ca2d50b47823e.name = "canvas_zoom_proxy"),
      (this._r2ca2d50b47823e.mouseEnabled = !1),
      (this._r2ca2d50b47823e.visible = !1),
      this.display.addChild(this._r2ca2d50b47823e),
      (this.display.mouseEnabled = !0),
      (this.display.doubleClickEnabled = !0),
      (this._geometry = new Rd(s, new k(-135, 30, 0), new k(11, 11, 5), new k(-135, 0.5, 0))),
      (this.addBitmapData = new _i1e2b1f95f153b2(16, 32, 1)),
      (this._rff7d22ebefde6d = new mRe(this.container?.roomObjectVariableAccurateZ ?? null)),
      this.initialize(t, i));
  }
  static {
    n(this, "class_2952");
  }
  static ZERO_POINT = new E(0, 0);
  static _rc75f43e05aa029 = 50;
  static _r13304ed9135f78 = 10;
  static _r9f752db123aeb0 = 24;
  static _r215c52ada4fc1f = 18;
  static _r123be01b0748b2 = 1e3;
  _geometry;
  master;
  display;
  scene;
  _r4d449a27d1b881 = new Map();
  _r95a6acca6906d4 = new E();
  addBitmapData;
  _rff7d22ebefde6d;
  _r60efa718fc3163 = [];
  class_4296 = [];
  _r2e755d32aa7f1f = new Map();
  _r679d11891b4e44 = new Set();
  var_536 = new _i4210dc3239901d();
  _r2ca2d50b47823e;
  _red039010e53471 = null;
  beginFill = null;
  _rf15cadee0eca10 = null;
  _r43a18454ab1e0d = !1;
  _re2a4afc1019bca = !1;
  _r1db4388683b9dd = -1;
  _rb89b6219467b3a = !1;
  _scale = 1;
  var_3776 = !1;
  _id;
  var_1036 = 1;
  var_1034 = 1;
  var_4601 = 0;
  var_4957 = 0;
  var_435 = 0;
  var_429 = 0;
  _rda3654425742e8 = -1;
  _rc643d6ffa06ea6 = -1e7;
  _r01bee0a289f0a2 = -1e7;
  _rcec791eb6b8812 = 0;
  _rfcd780d5bab040 = !1;
  var_4049 = 0;
  _r8a5dce952bf073 = 0;
  _re966814484ec5c = 0;
  _r099d9357f2ba02 = !1;
  var_841 = 0;
  var_3996 = 0;
  _r9bb00b691affbf = 0;
  _ra09936bbd2a5f8 = 0;
  _r682b53454fff7e = 0;
  _r3c14d7e7f2697b = 0;
  _r12ff9d081d410e = 0;
  _r3c97f92a5ebde6 = 0;
  _r1e8e491d490084 = !1;
  _rabedae33a30160 = null;
  _r4f774cfa89ccb4 = !1;
  _r00931abd77f5c6 = !1;
  get _r4d05a071e04789() {
    return this._r43a18454ab1e0d;
  }
  set _r4d05a071e04789(e) {
    ((this._r43a18454ab1e0d = e),
      this._rc03774670716fd(),
      this.beginFill != null &&
        (e
          ? (this.beginFill.parent !== this.master && this.master.addChild(this.beginFill),
            (this.display.mask = this.beginFill),
            this._red039010e53471?.parent === this.master && this.master.removeChild(this._red039010e53471))
          : (this.beginFill.parent === this.master && this.master.removeChild(this.beginFill),
            (this.display.mask = null))));
  }
  get width() {
    return this.var_1036 * this._scale;
  }
  get height() {
    return this.var_1034 * this._scale;
  }
  get screenOffsetX() {
    return this.var_435;
  }
  set screenOffsetX(e) {
    ((this._r95a6acca6906d4.x -= e - this.var_435), (this.var_435 = e));
  }
  get screenOffsetY() {
    return this.var_429;
  }
  set screenOffsetY(e) {
    ((this._r95a6acca6906d4.y -= e - this.var_429), (this.var_429 = e));
  }
  get displayObject() {
    return this.master;
  }
  get geometry() {
    return this._geometry;
  }
  get _rbdb0f0785d4bd4() {
    return this._rf15cadee0eca10;
  }
  set _rbdb0f0785d4bd4(e) {
    this._rf15cadee0eca10 = e;
  }
  get _re5ff5b34be6f00() {
    return this._re2a4afc1019bca;
  }
  set _re5ff5b34be6f00(e) {
    ((this._re2a4afc1019bca = e),
      e ? this._ree5d5e1fd343aa() : this._red039010e53471 != null && (this._red039010e53471.text = ""));
  }
  get _r7749620ccc5c81() {
    return this._r1db4388683b9dd;
  }
  set _r7749620ccc5c81(e) {
    this._r1db4388683b9dd = e;
  }
  get scale() {
    return this._scale;
  }
  get _r478576db3cd676() {
    return this.var_3776;
  }
  get displayScale() {
    return this.var_3776 ? -this._scale : this._scale;
  }
  initialize(e, r) {
    ((this.var_1036 = Math.max(1, e)),
      (this.var_1034 = Math.max(1, r)),
      this._rc03774670716fd(),
      (this._r00931abd77f5c6 = !0),
      this.beginFill?.graphics.clear(),
      this.beginFill?.graphics.beginFill(0),
      this.beginFill?.graphics.drawRect(0, 0, this.var_1036, this.var_1034),
      this._r9e627c26ab3a1f());
  }
  dispose() {
    (this._r43ffdd4358f51e(0, !0),
      this.addBitmapData.dispose(),
      this._rff7d22ebefde6d.dispose(),
      this._r2e755d32aa7f1f.clear(),
      this._r4d449a27d1b881.clear(),
      this._r679d11891b4e44.clear());
    for (let e of this.class_4296) this._r698004c07c621c(e, !0);
    for (
      this.class_4296.length = 0, this._re966814484ec5c = 0, this._r757aa533429a9c();
      this.master.numChildren > 0;
    )
      this.master.removeChildAt(0);
  }
  _rc9003fbab6f83f(e) {
    (this._rff7d22ebefde6d._r3f87f99454fb57(e), this._r4d449a27d1b881.delete(e));
  }
  render(e, r = !1) {
    if (this.container == null || (e === -1 && (e = this._rda3654425742e8 + 1), e === this._rda3654425742e8))
      return;
    let t = _ia411d8d8194a3a();
    ((this._r099d9357f2ba02 = !this._r099d9357f2ba02),
      this.addBitmapData._rad93e8fcc134d5 > this.addBitmapData._r21d8755ff55d63 &&
        this.addBitmapData.compress(),
      this._r9dbc14332a7571() && (r = !0),
      (this.display.x !== this.var_435 ||
        this.display.y !== this.var_429 ||
        this.var_1036 !== this.var_4601 ||
        this.var_1034 !== this.var_4957) &&
        ((this.display.x = this.var_435), (this.display.y = this.var_429), (r = !0)));
    let i = 0,
      s = this.container.getRoomObjectCount();
    for (let o = 0; o < s; o++) {
      let d = this.container.getRoomObjectWithIndex(o);
      if (d == null) continue;
      let c = this.container.getRoomObjectIdWithIndex(o);
      c != null && (i += this._r2c9ad727e5cdc1(d, c, e, r, i));
    }
    (this._r60efa718fc3163.length > 1 &&
      (this._r60efa718fc3163.sort((o, d) => o.z - d.z), this._r60efa718fc3163.reverse()),
      i < this._r60efa718fc3163.length && this._r60efa718fc3163.splice(i));
    for (let o = 0; o < i; o++) this.updateSprite(o, this._r60efa718fc3163[o]);
    (this._r43ffdd4358f51e(i),
      this._r09fdbe146bd29f(r || i > 0),
      (this._r12ff9d081d410e = _ia411d8d8194a3a() - t),
      this._r2e71f34852e139(e),
      (this._rda3654425742e8 = e),
      (this.var_4601 = this.var_1036),
      (this.var_4957 = this.var_1034));
  }
  getSortableSpriteList() {
    return this._rff7d22ebefde6d.getSortableSpriteList();
  }
  getPlaneSortableSprites() {
    return this._rff7d22ebefde6d.getPlaneSortableSprites();
  }
  setScale(e, r = null, t = null, i = !1) {
    this.setTransform(Math.abs(e), this.var_3776, r, t);
  }
  _r1d7cf3e9077199(e, r = null, t = null) {
    this.setTransform(this._scale, e, r, t);
  }
  setTransform(e, r, t, i) {
    if (this.master == null || this.display == null) return;
    let s = t ?? new E(this.var_1036 / 2, this.var_1034 / 2),
      o = i ?? s,
      d = new E(
        (s.x - this.var_435) / this.displayScale,
        (s.y - this.var_429) / this.displayScale,
      );
    ((this._scale = e),
      (this.var_3776 = r),
      (this.screenOffsetX = o.x - d.x * this.displayScale),
      (this.screenOffsetY = o.y - d.y * this.displayScale),
      (this._r00931abd77f5c6 = !0));
  }
  _r3df8e11aa22916() {
    this._rb89b6219467b3a = !0;
    let e = this._scale,
      r = this.var_435,
      t = this.var_429,
      i = this.display.stage?.quality ?? null;
    try {
      (this.setScale(1),
        (this.var_435 = 0),
        (this.var_429 = 0),
        (this._r00931abd77f5c6 = !0),
        this.display.stage != null && (this.display.stage.quality = CNe.LOW),
        this.render(-1, !0));
      let s = this.display._r0203ab2933f479().getLocalBounds(),
        o = new A(
          Math.max(1, Math.ceil(this.display.width)),
          Math.max(1, Math.ceil(this.display.height)),
          !0,
          0,
        );
      return (o.draw(this.display, new Pe(1, 0, 0, 1, -s.x, -s.y)), o);
    } finally {
      ((this._rb89b6219467b3a = !1),
        this.setScale(e),
        (this.var_435 = r),
        (this.var_429 = t),
        (this._r00931abd77f5c6 = !0),
        this.display.stage != null && i != null && (this.display.stage.quality = i));
    }
  }
  _rd2a175026529bc() {
    ((this._rb89b6219467b3a = !0), this.render(-1, !0));
  }
  _rc6be55c3fb1cf8() {
    this._rb89b6219467b3a = !1;
  }
  _r36a99433414f69(e, r, t, i, s, o, d) {
    if (
      ((e -= this.var_435),
      (r -= this.var_429),
      (this._r95a6acca6906d4.x = e / this.displayScale),
      (this._r95a6acca6906d4.y = r / this.displayScale),
      this._rcec791eb6b8812 > 0 && t === _ifd7c1208e3417e.var_370)
    )
      return this._rfcd780d5bab040;
    this.var_4049++;
    let c = !1;
    return (
      (t === _ifd7c1208e3417e.CLICK || t === _ifd7c1208e3417e.DOUBLE_CLICK) &&
        (c = this._r9a0ebe97c6f135(
          e / this.displayScale,
          r / this.displayScale,
          t === _ifd7c1208e3417e.DOUBLE_CLICK,
          i,
          s,
          o,
          d,
        )),
      (this._rfcd780d5bab040 =
        this._rbdef97e26cae40(e / this.displayScale, r / this.displayScale, t, i, s, o, d) || c),
      this._rcec791eb6b8812++,
      this._rfcd780d5bab040
    );
  }
  update() {
    this._rcec791eb6b8812 = 0;
  }
  getId() {
    return this._id;
  }
  createMouseEvent(e, r, t, i, s, o, d, c, f, l) {
    let b = e - this.var_1036 / 2,
      _ = r - this.var_1034 / 2,
      h = `canvas_${this._id}`;
    return new RoomSpriteMouseEvent(s, `${h}_${this.var_4049}`, h, o, b, _, t, i, c, d, f, l);
  }
  _rc3ae3eb7437e05(e, r) {
    (this._r2e755d32aa7f1f.delete(r), this._r2e755d32aa7f1f.set(r, e));
  }
  _r47352603a894db() {
    if (this.container != null) {
      for (let [e, r] of this._r2e755d32aa7f1f.entries()) {
        let t = this.container._ra1f5cb56d0c2d8(e);
        if (t == null) continue;
        if (this._rf15cadee0eca10 != null) {
          this._rf15cadee0eca10._r8a187dc1dc98f5(r, t, this._geometry);
          continue;
        }
        t._rf289f21439d5ea()?.mouseEvent(r, this._geometry);
      }
      this._r2e755d32aa7f1f.clear();
    }
  }
  _rfb74824eefcfd8(e) {
    return e?.identifier ?? "";
  }
  _rc03774670716fd() {
    this.beginFill == null &&
      ((this.beginFill = new Sprite()),
      (this.beginFill.name = "mask"),
      this._r43a18454ab1e0d &&
        (this.master.addChild(this.beginFill), (this.display.mask = this.beginFill)));
  }
  _r9dbc14332a7571() {
    let e = this._rea9dc463f37954(),
      r = !1;
    if (
      (this._r4f774cfa89ccb4 !== e && ((this._r4f774cfa89ccb4 = e), (this._r00931abd77f5c6 = !0), (r = !0)),
      (this.display.scaleX !== this.displayScale || this.display.scaleY !== this.displayScale) &&
        ((this.display.scaleX = this.displayScale),
        (this.display.scaleY = this.displayScale),
        (r = !0)),
      (this.scene.scaleX !== 1 || this.scene.scaleY !== 1) &&
        ((this.scene.scaleX = 1), (this.scene.scaleY = 1), (r = !0)),
      this.scene.visible === e && ((this.scene.visible = !e), (r = !0)),
      this._r2ca2d50b47823e.visible !== e && ((this._r2ca2d50b47823e.visible = e), (r = !0)),
      (this._r2ca2d50b47823e.scaleX !== 1 || this._r2ca2d50b47823e.scaleY !== 1) &&
        ((this._r2ca2d50b47823e.scaleX = 1), (this._r2ca2d50b47823e.scaleY = 1), (r = !0)),
      e)
    ) {
      let t =
          Math.floor(
            Math.min(
              -this.var_435 / this.displayScale,
              (this.var_1036 - this.var_435) / this.displayScale,
            ),
          ) - 1,
        i =
          Math.floor(
            Math.min(
              -this.var_429 / this.displayScale,
              (this.var_1034 - this.var_429) / this.displayScale,
            ),
          ) - 1;
      ((this._r2ca2d50b47823e.x !== t || this._r2ca2d50b47823e.y !== i) &&
        ((this._r2ca2d50b47823e.x = t),
        (this._r2ca2d50b47823e.y = i),
        (this._r00931abd77f5c6 = !0),
        (r = !0)),
        this._r624584c5ead783() && (r = !0));
    } else this._rabedae33a30160 != null && (this._r757aa533429a9c(), (r = !0));
    return r;
  }
  _rea9dc463f37954() {
    return this._scale > 0 && this._scale < 1 && _i16a41dd0d3e5f1() != null;
  }
  _r624584c5ead783() {
    let e = Math.ceil(this.var_1036 / this._scale) + 3,
      r = Math.ceil(this.var_1034 / this._scale) + 3;
    return this._rabedae33a30160 != null &&
      this._rabedae33a30160.width === e &&
      this._rabedae33a30160.height === r
      ? !1
      : (this._r757aa533429a9c(),
        (this._rabedae33a30160 = _i8e6251f0275fd9(e, r)),
        _i90a4a8d9fc1d84(this._r2ca2d50b47823e, this._rabedae33a30160),
        _if60d569a2cfdf3(this._rabedae33a30160, "linear"),
        (this._r00931abd77f5c6 = !0),
        !0);
  }
  _r757aa533429a9c() {
    (_i90a4a8d9fc1d84(this._r2ca2d50b47823e, null), _i646c854e8bb28e(this._rabedae33a30160), (this._rabedae33a30160 = null));
  }
  _r09fdbe146bd29f(e) {
    if (!this._r4f774cfa89ccb4 || this._rabedae33a30160 == null || (!this._r00931abd77f5c6 && !e)) return;
    let r = this.scene.visible;
    try {
      this.scene.visible = !0;
      let t = new Pe(1, 0, 0, 1, -this._r2ca2d50b47823e.x, -this._r2ca2d50b47823e.y);
      _i3863f539f92850(this.scene, this._rabedae33a30160, !0, t) && (this._r00931abd77f5c6 = !1);
    } finally {
      this.scene.visible = r;
    }
  }
  _re99f6e7dfcac2f(e) {
    return this._rff7d22ebefde6d._r245af30f81f0ec(e);
  }
  _r2c9ad727e5cdc1(e, r, t, i, s) {
    let o = e.getVisualization();
    if (o == null) return (this._rff7d22ebefde6d._r3f87f99454fb57(r), 0);
    let d = this._re99f6e7dfcac2f(r);
    d.objectId = e.getId();
    let c = d.location,
      f = d.sprites,
      l = c.getScreenLocation(e, this._geometry);
    if (l == null) return (this._rff7d22ebefde6d._r3f87f99454fb57(r), 0);
    if (
      (o.update(this._geometry, t, !f.isEmpty || i, this._r099d9357f2ba02 && this._r1e8e491d490084),
      c.locationChanged && (i = !0),
      !f.needsUpdate(o._rf995f276280e41, o.updateId) && !i)
    )
      return f._r07cfc8b3f013c3;
    let b = o._r07cfc8b3f013c3,
      _ = l.x,
      h = l.y,
      p = l.z;
    p += Math.abs(_) * 12e-8;
    let m = _ + Math.trunc(this.var_1036 / 2),
      v = h + Math.trunc(this.var_1034 / 2),
      w = 0;
    for (let I = 0; I < b; I++) {
      let C = o.getSprite(I),
        W = C?.asset ?? null,
        R = C?.nativeTexture ?? null;
      if (C == null || !C.visible || (W == null && R == null)) continue;
      this._r54a74dac4d271e(e, r, C);
      let T = C.width,
        S = C.height;
      if (T <= 0 || S <= 0) continue;
      let z = this._rf282c400a6b89b(m + C.offsetX + (R != null && C.flipH ? T : 0), this.var_435),
        K = this._rf282c400a6b89b(v + C.offsetY + (R != null && C.flipV ? S : 0), this.var_429),
        $ = z + this.var_435,
        Y = K + this.var_429,
        oe = R != null && C.flipH ? $ - T : $,
        be = R != null && C.flipV ? Y - S : Y;
      if (!this._rb89b6219467b3a && !this._r0e4942a4bf2354(oe, be, T, S)) continue;
      let ye = f.getSprite(w);
      (ye == null &&
        ((ye = new wRe()), f._r712af53e9bfc57(ye), this._r60efa718fc3163.push(ye), (ye.name = r)),
        (ye.x = z),
        (ye.y = K),
        (ye.z = p + C._relativeDepth + 37e-12 * s),
        (ye.sprite = C),
        w++,
        s++);
    }
    return (f._r8caebd0b3a5ef6(w), w);
  }
  _rf282c400a6b89b(e, r) {
    return this._scale === 0.5 ? e : (Math.round(r + e * this.displayScale) - r) / this.displayScale;
  }
  _r0e4942a4bf2354(e, r, t, i) {
    return (
      this.displayScale !== 1 &&
        ((e = (e - this.var_435) * this.displayScale + this.var_435),
        (r = (r - this.var_429) * this.displayScale + this.var_429),
        (t *= this.displayScale),
        (i *= this.displayScale),
        t < 0 && ((e += t), (t = -t)),
        i < 0 && ((r += i), (i = -i))),
      e < this.var_1036 && e + t >= 0 && r < this.var_1034 && r + i >= 0
    );
  }
  _r2e71f34852e139(e) {
    if (this._rda3654425742e8 <= 0) return;
    let r = e - this._rda3654425742e8;
    if (
      !(r <= 0) &&
      (r > a._r9f752db123aeb0 * 3 && (this._r3c97f92a5ebde6 = r),
      !(r > a._r123be01b0748b2) &&
        (this.var_3996++,
        !(this.var_3996 <= a._rc75f43e05aa029) &&
          (this._r9bb00b691affbf++,
          (this._ra09936bbd2a5f8 += r),
          (this._r682b53454fff7e += this._r12ff9d081d410e),
          !(this._r9bb00b691affbf < a._r13304ed9135f78))))
    ) {
      if (
        ((this.var_841 = this._ra09936bbd2a5f8 / this._r9bb00b691affbf),
        (this._r3c14d7e7f2697b = this._r682b53454fff7e / this._r9bb00b691affbf),
        (this._r9bb00b691affbf = 0),
        (this._ra09936bbd2a5f8 = 0),
        (this._r682b53454fff7e = 0),
        !this._r1e8e491d490084 && this.var_841 > a._r9f752db123aeb0
          ? (this._r1e8e491d490084 = !0)
          : this._r1e8e491d490084 &&
            this.var_841 < a._r215c52ada4fc1f &&
            (this._r1e8e491d490084 = !1),
        this._re2a4afc1019bca)
      ) {
        let t = (1e3 / this.var_841).toFixed(1),
          i = this._r3c14d7e7f2697b < 1 ? "<1.0" : this._r3c14d7e7f2697b.toFixed(1),
          s =
            this._r1db4388683b9dd >= 0
              ? `ping: ${this._r1db4388683b9dd}ms
`
              : "",
          o = _if28e28c93a63c8.host;
        ((s += `render fps: ${o == null ? "unavailable" : o._rb2f1d35b2f6874.toFixed(1)}`),
          (s += `
room update fps: ${t}
room update time: ${i}ms`),
          (s += `
graphics: ${o == null ? "unavailable" : o._r64dfed7398ec9d === "webgpu" ? "WebGPU" : "WebGL"}`));
        let d = o?._r2130b20e587e5a;
        (d != null &&
          (s += `
renderer: ${d.length > 56 ? `${d.slice(0, 53)}...` : d}`),
          this._r3c97f92a5ebde6 > 0 &&
            (s += `
halted ${this._r3c97f92a5ebde6}ms`),
          (this._ree5d5e1fd343aa().text = s));
      }
      this._r3c97f92a5ebde6 = 0;
    }
  }
  _ree5d5e1fd343aa() {
    if (this._red039010e53471 != null) return this._red039010e53471;
    let e = new Pt();
    return (
      (e.defaultTextFormat = new _i(
        "Verdana",
        9,
        16733440,
        null,
        null,
        null,
        null,
        null,
        _s.RIGHT,
      )),
      (e.background = !1),
      (e.backgroundColor = 0),
      (e.multiline = !0),
      (e.mouseEnabled = !1),
      (e.selectable = !1),
      (e.width = 320),
      (e.height = 115),
      (this._red039010e53471 = e),
      this._r9e627c26ab3a1f(),
      this._r43a18454ab1e0d || this.master.addChild(e),
      e
    );
  }
  _r9e627c26ab3a1f() {
    this._red039010e53471 != null &&
      ((this._red039010e53471.width = Math.min(320, Math.max(100, this.var_1036 - 40))),
      (this._red039010e53471.x = Math.max(0, this.var_1036 - (this._red039010e53471.width + 20))),
      (this._red039010e53471.y = Math.max(0, this.var_1034 - (this._red039010e53471.height + 60))));
  }
  getSprite(e) {
    return e < 0 || e >= this._re966814484ec5c || e >= this.scene.numChildren
      ? null
      : this.scene.getChildAt(e);
  }
  createSprite(e, r = -1) {
    let t = e.sprite;
    if (t == null) return;
    let i = this.class_4296.pop() ?? null;
    (i == null && (i = new gRe()),
      (i.x = e.x),
      (i.y = e.y),
      (i.offsetRefX = t.offsetX),
      (i.offsetRefY = t.offsetY),
      (i.identifier = e.name),
      (i.alpha = t.alpha / 255),
      (i.tag = t.tag),
      (i.blendMode = t.blendMode),
      (i.filters = t.filters ?? []),
      (i.varyingDepth = t.varyingDepth),
      (i.clickHandling = t.clickHandling),
      (i.skipMouseHandling = t.skipMouseHandling),
      (i.smoothing = !1),
      (i._r6c5b4840fd8a96 = "always"),
      (i.visible = !0),
      this._r1f7713de22512f(i, t),
      this._ra5033e5a836f05(i, t, Jn._r246bace9601ea9()),
      (i._re7ddc55c344f53 = t._re7ddc55c344f53),
      r < 0 || r >= this._re966814484ec5c
        ? (this.scene.addChild(i), this._re966814484ec5c++)
        : this.scene.addChildAt(i, r),
      this._r8a5dce952bf073++,
      (this._r00931abd77f5c6 = !0));
  }
  updateSprite(e, r) {
    if (e >= this._re966814484ec5c) return (this.createSprite(r), !0);
    let t = r.sprite;
    if (t == null) return !1;
    let i = this.getSprite(e);
    if (i == null) return !1;
    let s = i.nativeTexture,
      o = t.nativeTexture,
      d = s != null && s.source == null,
      c = o != null && o.source == null;
    if (d && !c)
      return (this.scene.removeChildAt(e), this._r698004c07c621c(i, !0), this.createSprite(r, e), !0);
    if (i.varyingDepth !== t.varyingDepth)
      return i.varyingDepth && !t.varyingDepth
        ? (this.scene.removeChildAt(e),
          this.class_4296.push(i),
          (this._r00931abd77f5c6 = !0),
          this.updateSprite(e, r))
        : (this.createSprite(r, e), !0);
    let f = Jn._r246bace9601ea9(),
      l = !1;
    return (
      (d || i.needsUpdate(t._rf995f276280e41, t.updateId) || f) &&
        ((i._re7ddc55c344f53 = t._re7ddc55c344f53),
        (i.alpha = t.alpha / 255),
        (i.tag = t.tag),
        (i.identifier = r.name),
        (i.varyingDepth = t.varyingDepth),
        (i.blendMode = t.blendMode),
        (i.clickHandling = t.clickHandling),
        (i.skipMouseHandling = t.skipMouseHandling),
        (i.filters = t.filters ?? []),
        this._r1f7713de22512f(i, t),
        this._ra5033e5a836f05(i, t, f),
        (l = !0)),
      i.visible !== t.visible && (l = !0),
      (i.x !== r.x || i.y !== r.y) && (l = !0),
      (i.offsetRefX !== t.offsetX || i.offsetRefY !== t.offsetY) && (l = !0),
      (i.visible = t.visible),
      (i.x = r.x),
      (i.y = r.y),
      (i.offsetRefX = t.offsetX),
      (i.offsetRefY = t.offsetY),
      l && (this._r00931abd77f5c6 = !0),
      !0
    );
  }
  _ra5033e5a836f05(e, r, t) {
    if (!(!t || (e.bitmapData == null && e.nativeTexture == null)))
      switch (r.spriteType) {
        case RoomObjectSpriteType.var_5494:
          break;
        case RoomObjectSpriteType.ROOM_PLANE:
          e.alpha = Jn.getDelta(0.9);
          break;
        case RoomObjectSpriteType.AVATAR:
          e.alpha = Jn.getDelta(0.5);
          break;
        default:
          e.alpha = Jn.getDelta(0.1);
          break;
      }
  }
  _r43ffdd4358f51e(e, r = !1) {
    if ((e < 0 && (e = 0), e < this._r8a5dce952bf073 || this._r8a5dce952bf073 === 0)) {
      for (let t = this._re966814484ec5c - 1; t >= e; t--) {
        let i = this.getSprite(t);
        i != null && this._r698004c07c621c(i, r);
      }
      this._r00931abd77f5c6 = !0;
    }
    this._r8a5dce952bf073 = e;
  }
  _r698004c07c621c(e, r) {
    if (r) {
      ((e.visible = !1), e.dispose());
      return;
    }
    ((e.visible = !1),
      (e.nativeTexture = null),
      (e._r2fa4533baae420 = 16777215),
      (e.scaleX = 1),
      (e.scaleY = 1),
      (e.bitmapData = null),
      (this._r00931abd77f5c6 = !0));
  }
  _r1f7713de22512f(e, r) {
    if (r.nativeTexture != null) {
      (e.bitmapData !== r.asset && (e.bitmapData = r.asset),
        (e.nativeTexture = r.nativeTexture),
        (e._r2fa4533baae420 = r.color),
        (e.scaleX = r.flipH ? -1 : 1),
        (e.scaleY = r.flipV ? -1 : 1));
      return;
    }
    ((e.nativeTexture = null), (e._r2fa4533baae420 = 16777215), (e.scaleX = 1), (e.scaleY = 1));
    let t = this._r198ea9f0f21815(r.asset, r.assetName, r.flipH, r.flipV, r.color);
    e.bitmapData !== t && (e.bitmapData = t);
  }
  _r54a74dac4d271e(e, r, t) {
    if (t.nativeTexture != null || t.asset == null || t.spriteType !== RoomObjectSpriteType.DEFAULT) return;
    let i = `${r}:${e.getId()}:${e.getType()}`;
    this._r679d11891b4e44.has(i) || this._r679d11891b4e44.add(i);
  }
  _r198ea9f0f21815(e, r, t, i, s) {
    if (e == null) return null;
    if (((s &= 16777215), !t && !i && s === 16777215)) return e;
    if (t || i) {
      let o = this.getFlippedBitmapData(e, r, !0, t, i);
      return o != null && s !== 16777215 ? this.getColoredBitmapData(o, "", s, !0) : o;
    }
    return this.getColoredBitmapData(e, r, s, !0);
  }
  getFlippedBitmapData(e, r, t = !1, i = !0, s = !1) {
    let o = `${r}${i ? " FH" : ""}${s ? " FV" : ""}`,
      d = r.length > 0 ? this.addBitmapData._r198ea9f0f21815(o) : null;
    if (d != null || !t) return d;
    try {
      d = new L5(e.width, e.height, !0, 16777215);
    } catch {
      d = new L5(1, 1, !0, 16777215);
    }
    let c = new Pe();
    return (
      i && (c.scale(-1, 1), c.translate(e.width, 0)),
      s && (c.scale(1, -1), c.translate(0, e.height)),
      d.draw(e, c),
      r.length > 0 && this.addBitmapData._bitmapDataCache(o, d),
      d
    );
  }
  getColoredBitmapData(e, r, t, i = !1) {
    let s = `${r} ${t}`,
      o = r.length > 0 ? this.addBitmapData._r198ea9f0f21815(s) : null;
    if (o != null || !i) return o;
    let d = (t >> 16) & 255,
      c = (t >> 8) & 255,
      f = t & 255;
    try {
      ((o = new L5(e.width, e.height, !0, 16777215)), o.copyPixels(e, e.rect, a.ZERO_POINT));
    } catch {
      o = new L5(1, 1, !0, 16777215);
    }
    return (
      (this.var_536.redMultiplier = d / 255),
      (this.var_536.greenMultiplier = c / 255),
      (this.var_536.blueMultiplier = f / 255),
      o.colorTransform(o.rect, this.var_536),
      r.length > 0 && this.addBitmapData._bitmapDataCache(s, o),
      o
    );
  }
  _r9a0ebe97c6f135(e, r, t, i = !1, s = !1, o = !1, d = !1) {
    let c = !1,
      f = [],
      l = t ? _ifd7c1208e3417e.DOUBLE_CLICK : _ifd7c1208e3417e.CLICK;
    for (let b = this._r8a5dce952bf073 - 1; b >= 0; b--) {
      let _ = this.getSprite(b);
      if (!(_ == null || !_.clickHandling) && _.hitTest(e - _.x, r - _.y)) {
        let h = this._rfb74824eefcfd8(_);
        if (!f.includes(h)) {
          let p = this.createMouseEvent(e, r, e - _.x, r - _.y, l, _.tag, i, s, o, d);
          (this._rc3ae3eb7437e05(p, h), f.push(h));
        }
        c = !0;
      }
    }
    return (this._r47352603a894db(), c);
  }
  _rbdef97e26cae40(e, r, t, i = !1, s = !1, o = !1, d = !1) {
    let c = !1,
      f = [],
      l = !0;
    for (let b = this._r8a5dce952bf073 - 1; b >= 0; b--) {
      let _ = this.getSprite(b);
      if (
        _ == null ||
        !_.hitTest(e - _.x, r - _.y, l) ||
        _.skipMouseHandling ||
        (_.clickHandling && (t === _ifd7c1208e3417e.CLICK || t === _ifd7c1208e3417e.DOUBLE_CLICK))
      )
        continue;
      let h = this._rfb74824eefcfd8(_);
      if (f.includes(h)) {
        c = !0;
        continue;
      }
      let p = _.tag,
        m = this._r4d449a27d1b881.get(h) ?? null;
      m != null &&
        m.RoomObjectStateChangeEvent !== p &&
        this._rc3ae3eb7437e05(
          this.createMouseEvent(0, 0, 0, 0, _ifd7c1208e3417e.ROLL_OUT, m.RoomObjectStateChangeEvent, i, s, o, d),
          h,
        );
      let v =
        t === _ifd7c1208e3417e.var_370 && (m == null || m.RoomObjectStateChangeEvent !== p)
          ? this.createMouseEvent(e, r, e - _.x, r - _.y, _ifd7c1208e3417e.ROLL_OVER, p, i, s, o, d)
          : this.createMouseEvent(e, r, e - _.x, r - _.y, t, p, i, s, o, d);
      ((v._r4667d782ad64ed = _.offsetRefX),
        (v._r4694aaf1f688a5 = _.offsetRefY),
        m == null && ((m = new _iafec61dbc949c5()), (m.objectId = h), this._r4d449a27d1b881.set(h, m)),
        (m.RoomObjectStateChangeEvent = p),
        (t !== _ifd7c1208e3417e.var_370 || e !== this._rc643d6ffa06ea6 || r !== this._r01bee0a289f0a2) &&
          this._rc3ae3eb7437e05(v, h),
        f.push(h),
        (c = !0));
    }
    for (let b of [...this._r4d449a27d1b881.keys()]) {
      if (f.includes(b)) continue;
      let _ = this._r4d449a27d1b881.get(b) ?? null;
      _ != null &&
        (this._r4d449a27d1b881.delete(b),
        this._rc3ae3eb7437e05(
          this.createMouseEvent(0, 0, 0, 0, _ifd7c1208e3417e.ROLL_OUT, _.RoomObjectStateChangeEvent, i, s, o, d),
          b,
        ));
    }
    return (this._r47352603a894db(), (this._rc643d6ffa06ea6 = e), (this._r01bee0a289f0a2 = r), c);
  }
}
