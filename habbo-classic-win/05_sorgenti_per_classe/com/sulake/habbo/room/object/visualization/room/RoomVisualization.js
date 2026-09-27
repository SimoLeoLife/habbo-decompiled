// Estratto da HabboAirLauncher.deobf.js, riga 283723.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/RoomVisualization.as
// Nome offuscato: _i9d0ceac7f65a34

class a extends bb {
  static {
    n(this, "RoomVisualization");
  }
  static _r1b7b24cc1c57d1 = 16777215;
  static const_1040 = 14540253;
  static FLOOR_COLOR_RIGHT = 12303291;
  static _r12a91f65304ac1 = 16777215;
  static _r8c5e732472b675 = 13421772;
  static _r02498c1fd95110 = 10066329;
  static _rd58ea3b9735080 = 10066329;
  static _r64621c26afa4dd = 16777215;
  static _r75f51cb5c3ac66 = 13421772;
  static _rad84ccfc7ab36c = 10066329;
  static ROOM_DEPTH_OFFSET = 1e3;
  _r9bff2b9dafe2d9 = null;
  _rbbdf6d57d32adc = null;
  _rac8ee552f8f91b = [];
  _re31dc0987c393f = new Map();
  _rec50c40c704775 = !1;
  _r9d064c2c45a7be = [];
  _visiblePlaneSpriteNumbers = [];
  _r4003fdbd516437 = null;
  AssetLibrary = null;
  _rf3e30b7a839c45 = null;
  _r718c10e0e08948 = null;
  _rf6a53c889f8f65 = null;
  _r02ad9c4ed7f3ba = Number.NaN;
  _r45e3b5e6b13590 = Number.NaN;
  _rf0e919627273fe = Number.NaN;
  var_3655 = null;
  _backgroundColor = 16777215;
  _r4b6b005e18a36b = 255;
  _rdf8a1bea8bb7dc = 255;
  _r992254c97ac7fe = 255;
  var_2474 = 0;
  _lastUpdateTime = -1e3;
  const_1292 = 250;
  var_3208 = -1;
  var_2722 = 0;
  var_4626 = 0;
  var_5016 = 0;
  var_3797 = 0;
  _planeTypeVisibilities = [];
  _r9f3b518a0baad3 = 0;
  _rd9a58d42a5f347 = 0;
  _r96d44aea7c479a = 0;
  _r429a6deeb97c07 = 0;
  _r23e577225feb46 = [];
  get floorRelativeDepth() {
    return a.ROOM_DEPTH_OFFSET + 0.1;
  }
  get leftSide() {
    return a.ROOM_DEPTH_OFFSET + 0.5;
  }
  get _r4f578e0a0e7cd7() {
    return a.ROOM_DEPTH_OFFSET + 0.49;
  }
  get _r5d845ae8dc989a() {
    return this._rac8ee552f8f91b.length;
  }
  get boundingRectangle() {
    if (this._r4003fdbd516437 == null) {
      let e = super.boundingRectangle;
      this._r4003fdbd516437 = e != null ? new D(e.x, e.y, e.width, e.height) : new D();
    }
    return new D(
      this._r4003fdbd516437.x,
      this._r4003fdbd516437.y,
      this._r4003fdbd516437.width,
      this._r4003fdbd516437.height,
    );
  }
  get _ra883d98bc9c1f4() {
    return this._r9d064c2c45a7be.slice();
  }
  constructor() {
    (super(),
      (this._rbbdf6d57d32adc = new rs()),
      (this.AssetLibrary = new RoomPlaneBitmapMaskParser()),
      (this._planeTypeVisibilities[Ti.RoomPlaneParser] = !1),
      (this._planeTypeVisibilities[Ti.const_86] = !0),
      (this._planeTypeVisibilities[Ti.const_103] = !0),
      (this._planeTypeVisibilities[Ti.TYPE_LANDSCAPE] = !0));
  }
  dispose() {
    (super.dispose(),
      this._rce0af678f4786d(),
      (this._rac8ee552f8f91b = []),
      this._re31dc0987c393f.clear(),
      (this._r9d064c2c45a7be = []),
      (this._visiblePlaneSpriteNumbers = []),
      this._rbbdf6d57d32adc?.dispose(),
      (this._rbbdf6d57d32adc = null),
      this.AssetLibrary?.dispose(),
      (this.AssetLibrary = null),
      this._r9bff2b9dafe2d9?.clearCache(),
      (this._r9bff2b9dafe2d9 = null));
  }
  initialize(e) {
    return (
      this.reset(),
      e instanceof RoomVisualizationData
        ? ((this._r9bff2b9dafe2d9 = e), this._r9bff2b9dafe2d9.initializeAssetCollection(this.assetCollection), !0)
        : !1
    );
  }
  update(e, r, t, i) {
    let s = this.object;
    if (s == null || e == null) return;
    let o = this._rce20d9adcb4954(e),
      d = s.getStringToStringMap();
    if (d == null) return;
    let c = !1;
    if (
      (this._r74f196165975cd(d) && (c = !0),
      this._r9ad34871451e27(d) && (c = !0),
      this._r904e816848a907(),
      (c = this._rdefde19566775b(d)),
      !(r < this._lastUpdateTime + this.const_1292 && !o && !c))
    ) {
      if ((this._r7c288661d86fdc(d) && (c = !0), this.updatePlanes(e, o, r) && (c = !0), c)) {
        for (let f = 0; f < this._r9d064c2c45a7be.length; f++) {
          let l = this._visiblePlaneSpriteNumbers[f] ?? -1,
            b = this.getSprite(l),
            _ = this._r9d064c2c45a7be[f] ?? null;
          if (b == null || _ == null || _.type === Ti.TYPE_LANDSCAPE) continue;
          let h = _.color >>> 0,
            p = ((h & 255) * this._r992254c97ac7fe) / 255,
            m = (((h >> 8) & 255) * this._rdf8a1bea8bb7dc) / 255,
            v = (((h >> 16) & 255) * this._r4b6b005e18a36b) / 255;
          ((h = ((((h >>> 24) & 255) << 24) | ((v & 255) << 16) | ((m & 255) << 8) | (p & 255)) >>> 0),
            (b.color = h));
        }
        this._r3c19972967c83f();
      }
      ((this.var_302 = d.getUpdateID()), (this._lastUpdateTime = r));
    }
  }
  initializeHighlightArea(e, r, t, i, s) {
    (this._rf0001106da7c55(),
      (this._r9f3b518a0baad3 = e),
      (this._rd9a58d42a5f347 = r),
      (this._r96d44aea7c479a = t),
      (this._r429a6deeb97c07 = i),
      (this._r23e577225feb46 = s),
      this._rbbdf6d57d32adc?.initializeHighlightArea(e, r, t, i),
      this._r62da0932889d26(this._rac8ee552f8f91b.length),
      this._r36c88fdf08dc91(),
      this.reset());
  }
  _rf0001106da7c55() {
    ((this._r9f3b518a0baad3 = 0),
      (this._rd9a58d42a5f347 = 0),
      (this._r96d44aea7c479a = 0),
      (this._r429a6deeb97c07 = 0));
    let e = this._rbbdf6d57d32adc?._rf0001106da7c55() ?? 0,
      r = 0,
      t = this._rbbdf6d57d32adc?._r5d845ae8dc989a ?? 0;
    for (let i = t; i < t + e; i++)
      (this._re31dc0987c393f.get(i) ?? -1) !== -1 && (r++, this._re31dc0987c393f.set(i, -1));
    (r > 0 && (this._rac8ee552f8f91b = this._rac8ee552f8f91b.slice(0, this._rac8ee552f8f91b.length - r)),
      this._r68dbc243d37d4a(this._rac8ee552f8f91b.length),
      this._r36c88fdf08dc91(),
      this.reset());
  }
  reset() {
    (super.reset(),
      (this._rf3e30b7a839c45 = null),
      (this._r718c10e0e08948 = null),
      (this._rf6a53c889f8f65 = null),
      (this.var_3655 = null),
      (this.var_3208 = -1),
      (this.var_3797 = 0),
      (this._r4003fdbd516437 = null));
  }
  defineSprites(e = 0) {
    let r = this._rac8ee552f8f91b.length;
    this._r68dbc243d37d4a(r);
    for (let t = e; t < r; t++) {
      let i = this._rac8ee552f8f91b[t] ?? null,
        s = this.getSprite(t);
      s == null ||
        i == null ||
        i.rightSide == null ||
        i.getScreenPoint == null ||
        (i.type === Ti.const_103 && (i.rightSide.length < 1 || i.getScreenPoint.length < 1)
          ? (s._re7ddc55c344f53 = class_3682.MATCH_NOTHING)
          : (s._re7ddc55c344f53 = class_3682.MATCH_OPAQUE_PIXELS),
        i.type === Ti.const_103
          ? (s.tag = `plane.wall@${t + 1}`)
          : i.type === Ti.const_86
            ? (s.tag = `plane.floor@${t + 1}`)
            : (s.tag = `plane@${t + 1}`),
        (s.spriteType = RoomObjectSpriteType.ROOM_PLANE),
        this._rbbdf6d57d32adc?.var_105(t)
          ? ((s.filters = this._r23e577225feb46.length > 0 ? this._r23e577225feb46 : null),
            (s.skipMouseHandling = !0),
            (i.extraDepth = -100),
            (i.isHighlighter = !0))
          : ((s.filters = null),
            (s.skipMouseHandling = !1),
            (i.extraDepth = 0),
            (i.isHighlighter = !1)));
    }
  }
  _r904e816848a907() {
    if (this._rec50c40c704775) return;
    let e = this.object,
      r = e?.getStringToStringMap();
    if (e == null || r == null || this._rbbdf6d57d32adc == null) return;
    (Number.isNaN(this._r02ad9c4ed7f3ba) || (this._rbbdf6d57d32adc._r0337760c226f75 = this._r02ad9c4ed7f3ba),
      Number.isNaN(this._r45e3b5e6b13590) ||
        (this._rbbdf6d57d32adc._rd42fde7a8fe0db = this._r45e3b5e6b13590));
    let t = r.getString(RoomObjectVariableEnum.ROOM_PLANE_XML);
    (this._rbbdf6d57d32adc._rf0001106da7c55(),
      this._rbbdf6d57d32adc.initializeFromXML(rr(t)) &&
        (this._rbbdf6d57d32adc.initializeHighlightArea(
          this._r9f3b518a0baad3,
          this._rd9a58d42a5f347,
          this._r96d44aea7c479a,
          this._r429a6deeb97c07,
        ),
        this._r62da0932889d26()));
  }
  _rcaa33ba1b4c9b0(e, r, t) {
    if (
      (e !== this._r718c10e0e08948 ? (this._r718c10e0e08948 = e) : (e = null),
      r !== this._rf3e30b7a839c45 ? (this._rf3e30b7a839c45 = r) : (r = null),
      t !== this._rf6a53c889f8f65 ? (this._rf6a53c889f8f65 = t) : (t = null),
      e == null && r == null && t == null)
    )
      return !1;
    for (let i of this._rac8ee552f8f91b)
      i.type === Ti.const_86 && e != null
        ? (i.id = e)
        : i.type === Ti.const_103 && r != null
          ? (i.id = r)
          : i.type === Ti.TYPE_LANDSCAPE && t != null && (i.id = t);
    return !0;
  }
  _r0c896f43f2a5d8(e) {
    if (e == null || this.AssetLibrary == null) return;
    this.AssetLibrary.initialize(rr(e));
    let r = [],
      t = [],
      i = !1;
    for (let s = 0; s < this._rac8ee552f8f91b.length; s++) {
      let o = this._rac8ee552f8f91b[s];
      o != null && (o._r156ed74207dec0(), o.type === Ti.TYPE_LANDSCAPE && r.push(s));
    }
    for (let s = 0; s < this.AssetLibrary.maskCount; s++) {
      let o = this.AssetLibrary.getMaskType(s),
        d = this.AssetLibrary.getMaskLocation(s),
        c = this.AssetLibrary.getMaskCategory(s);
      if (!(o == null || d == null))
        for (let f = 0; f < this._rac8ee552f8f91b.length; f++) {
          let l = this._rac8ee552f8f91b[f];
          if (
            l == null ||
            (l.type !== Ti.const_103 && l.type !== Ti.TYPE_LANDSCAPE) ||
            l.location == null ||
            l.normal == null
          )
            continue;
          let b = k.dif(d, l.location);
          if (
            b == null ||
            Math.abs(k.scalarProjection(b, l.normal)) >= 0.01 ||
            l.rightSide == null ||
            l.getScreenPoint == null
          )
            continue;
          let h = k.scalarProjection(b, l.rightSide),
            p = k.scalarProjection(b, l.getScreenPoint);
          l.type === Ti.const_103 || (l.type === Ti.TYPE_LANDSCAPE && c === RoomPlaneBitmapMaskData.MASK_CATEGORY_HOLE)
            ? l.addBitmapMask(o, h, p)
            : l.type === Ti.TYPE_LANDSCAPE &&
              (l._r30b9521379034f || (i = !0), (l._r30b9521379034f = !0), t.push(f));
        }
    }
    for (let s of r) {
      if (t.indexOf(s) >= 0) continue;
      let o = this._rac8ee552f8f91b[s] ?? null;
      o != null && ((o._r30b9521379034f = !1), (i = !0));
    }
    i && ((this._r9d064c2c45a7be = []), (this._visiblePlaneSpriteNumbers = []));
  }
  updatePlanes(e, r, t) {
    if (this.object == null || e == null) return !1;
    (this.var_2474++, r && ((this._r9d064c2c45a7be = []), (this._visiblePlaneSpriteNumbers = [])));
    let i = this._r9d064c2c45a7be.length === 0 ? this._rac8ee552f8f91b : this._r9d064c2c45a7be,
      s = this._r9d064c2c45a7be.length > 0,
      o = !1;
    for (let d = 0; d < i.length; d++) {
      let c = d;
      s && (c = this._visiblePlaneSpriteNumbers[d] ?? d);
      let f = this.getSprite(c);
      if (f == null) continue;
      let l = i[d] ?? null;
      if (l != null) {
        if (((f.planeId = l.uniqueId), l.update(e, t))) {
          if (l.visible) {
            let _ = l._relativeDepth + this.floorRelativeDepth + Number(c) / 1e3;
            (l.type !== Ti.const_86 &&
              ((_ = l._relativeDepth + this.leftSide + Number(c) / 1e3),
              ((l.rightSide?.length ?? 0) < 1 || (l.getScreenPoint?.length ?? 0) < 1) &&
                (_ += a.ROOM_DEPTH_OFFSET * 0.5)),
              this.updateSprite(f, l, `plane ${c} ${e.scale}`, _));
          }
          o = !0;
        }
        let b = l.visible && (this._planeTypeVisibilities[l.type] ?? !1);
        (f.visible !== b && ((f.visible = b), (o = !0)),
          f.visible && !s && (this._r9d064c2c45a7be.push(l), this._visiblePlaneSpriteNumbers.push(d)));
      } else ((f.planeId = 0), f.visible && ((f.visible = !1), (o = !0)));
    }
    return o;
  }
  _rce0af678f4786d() {
    this._raf47f861af23c6();
    for (let e of this._rac8ee552f8f91b) e.dispose();
    ((this._rac8ee552f8f91b = []),
      (this._re31dc0987c393f = new Map()),
      (this._rec50c40c704775 = !1),
      this._r36c88fdf08dc91(),
      (this.var_2474 += 1),
      this.reset());
  }
  _raf47f861af23c6() {
    for (let e = 0; e < this._r07cfc8b3f013c3; e++) {
      let r = this.getSprite(e);
      r == null ||
        r.spriteType !== RoomObjectSpriteType.ROOM_PLANE ||
        ((r.asset = null),
        (r.nativeTexture = null),
        (r.visible = !1),
        (r.planeId = 0),
        (r.assetName = ""));
    }
    this._r3c19972967c83f();
  }
  _r36c88fdf08dc91() {
    ((this._r9d064c2c45a7be = []), (this._visiblePlaneSpriteNumbers = []));
  }
  _r62da0932889d26(e = 0) {
    let r = this._r7744b242405952(),
      t = this._r0285fbf5d1af82(),
      i = 0,
      s = this.object,
      o = s?.getStringToStringMap();
    if (s == null || o == null || this._rbbdf6d57d32adc == null || this._r9bff2b9dafe2d9 == null) return;
    let d = o._ra3dc9a405b5c73(RoomObjectVariableEnum.ROOM_RANDOM_SEED);
    for (let c = e; c < this._rbbdf6d57d32adc._r5d845ae8dc989a; c++) {
      this._re31dc0987c393f.set(c, -1);
      let f = this._rbbdf6d57d32adc._r19de74cbe6b168(c),
        l = this._rbbdf6d57d32adc._rd9dd14744f7fcf(c),
        b = this._rbbdf6d57d32adc._r52519f85b09d9f(c),
        _ = this._rbbdf6d57d32adc._r65fa552b3e557f(c),
        h = this._rbbdf6d57d32adc._r5d2a261783db62(c);
      if (f == null || l == null || b == null) return;
      let p = k._rb3671a9c70d70f(l, b);
      d = d * 7613 + 517;
      let m = null;
      if (h === es.PLANE_FLOOR) {
        let v = f.x + l.x + 0.5,
          w = f.y + b.y + 0.5,
          I = Math.trunc(v) - v,
          C = Math.trunc(w) - w;
        ((m = new Ti(s.getLocation(), f, l, b, Ti.const_86, !0, _, d, -I, -C)),
          (p?.z ?? 0) !== 0
            ? (m.color = a._r1b7b24cc1c57d1)
            : (m.color = (p?.x ?? 0) !== 0 ? a.FLOOR_COLOR_RIGHT : a.const_1040),
          (m.rasterizer = this._r9bff2b9dafe2d9._r85f882347b458a));
      } else
        h === es.PLANE_WALL
          ? ((m = new Ti(s.getLocation(), f, l, b, Ti.const_103, !0, _, d)),
            (l.length < 1 || b.length < 1) && (m.hasTexture = !1),
            (p?.x ?? 0) === 0 && (p?.y ?? 0) === 0
              ? (m.color = a._rd58ea3b9735080)
              : (p?.y ?? 0) > 0
                ? (m.color = a._r12a91f65304ac1)
                : (p?.y ?? 0) === 0
                  ? (m.color = a._r8c5e732472b675)
                  : (m.color = a._r02498c1fd95110),
            (m.rasterizer = this._r9bff2b9dafe2d9._rdae98bcd25c6d2))
          : h === es.PLANE_LANDSCAPE
            ? ((m = new Ti(s.getLocation(), f, l, b, Ti.TYPE_LANDSCAPE, !0, _, d, i, 0, r, t)),
              (p?.y ?? 0) > 0
                ? (m.color = a._r64621c26afa4dd)
                : (p?.y ?? 0) === 0
                  ? (m.color = a._r75f51cb5c3ac66)
                  : (m.color = a._rad84ccfc7ab36c),
              (m.rasterizer = this._r9bff2b9dafe2d9._r70150ed264660c),
              (i += l.length))
            : h === es.PLANE_BILLBOARD &&
              ((m = new Ti(s.getLocation(), f, l, b, Ti.const_103, !0, _, d)),
              (l.length < 1 || b.length < 1) && (m.hasTexture = !1),
              (p?.x ?? 0) === 0 && (p?.y ?? 0) === 0
                ? (m.color = a._rd58ea3b9735080)
                : (p?.y ?? 0) > 0
                  ? (m.color = a._r12a91f65304ac1)
                  : (p?.y ?? 0) === 0
                    ? (m.color = a._r8c5e732472b675)
                    : (m.color = a._r02498c1fd95110),
              (m.rasterizer = this._r9bff2b9dafe2d9._ra18780fb8487f0));
      if (m != null) {
        m._r64001652b65938 = this._r9bff2b9dafe2d9._r64001652b65938;
        for (let v = 0; v < this._rbbdf6d57d32adc._re8c64075a93960(c); v++)
          m.addRectangleMask(
            this._rbbdf6d57d32adc._r84440c5bd22b7a(c, v),
            this._rbbdf6d57d32adc._ra39732271f53ae(c, v),
            this._rbbdf6d57d32adc._rc642831d632118(c, v),
            this._rbbdf6d57d32adc._r6064f2c9a2fde3(c, v),
          );
        (this._re31dc0987c393f.set(c, this._rac8ee552f8f91b.length), this._rac8ee552f8f91b.push(m));
      }
    }
    ((this._rec50c40c704775 = !0), this.defineSprites(e));
  }
  _r7744b242405952() {
    let e = 0;
    if (this._rbbdf6d57d32adc == null) return e;
    for (let r = 0; r < this._rbbdf6d57d32adc._r5d845ae8dc989a; r++)
      this._rbbdf6d57d32adc._r5d2a261783db62(r) === es.PLANE_LANDSCAPE &&
        (e += this._rbbdf6d57d32adc._rd9dd14744f7fcf(r)?.length ?? 0);
    return e;
  }
  _r0285fbf5d1af82() {
    let e = 0;
    if (this._rbbdf6d57d32adc == null) return e;
    for (let r = 0; r < this._rbbdf6d57d32adc._r5d845ae8dc989a; r++) {
      if (this._rbbdf6d57d32adc._r5d2a261783db62(r) !== es.PLANE_LANDSCAPE) continue;
      let t = this._rbbdf6d57d32adc._r52519f85b09d9f(r)?.length ?? 0;
      t > e && (e = t);
    }
    return (e > 5 && (e = 5), e);
  }
  _rce20d9adcb4954(e) {
    let r = !1;
    if (e.updateId !== this.var_3208) {
      ((this.var_3208 = e.updateId), (this._r4003fdbd516437 = null));
      let t = e.direction;
      t != null &&
        (t.x !== this.var_2722 ||
          t.y !== this.var_4626 ||
          t.z !== this.var_5016 ||
          e.scale !== this.var_3797) &&
        ((this.var_2722 = t.x),
        (this.var_4626 = t.y),
        (this.var_5016 = t.z),
        (this.var_3797 = e.scale),
        (r = !0));
    }
    return r;
  }
  _rdefde19566775b(e) {
    let r = !1;
    if (this.var_302 !== e.getUpdateID()) {
      let t = e.getString(RoomObjectVariableEnum.ROOM_PLANE_MASK_XML);
      t !== this.var_3655 && (this._r0c896f43f2a5d8(t), (this.var_3655 = t), (r = !0));
      let i = e._ra3dc9a405b5c73(RoomObjectVariableEnum.ROOM_BACKGROUND_COLOR) >>> 0;
      i !== this._backgroundColor &&
        ((this._backgroundColor = i),
        (this._r992254c97ac7fe = this._backgroundColor & 255),
        (this._rdf8a1bea8bb7dc = (this._backgroundColor >> 8) & 255),
        (this._r4b6b005e18a36b = (this._backgroundColor >> 16) & 255),
        (r = !0));
    }
    return r;
  }
  _r7c288661d86fdc(e) {
    return this.var_302 !== e.getUpdateID()
      ? (this._rcaa33ba1b4c9b0(
          e.getString(RoomObjectVariableEnum.ROOM_FLOOR_TYPE),
          e.getString(RoomObjectVariableEnum.ROOM_WALL_TYPE),
          e.getString(RoomObjectVariableEnum.ROOM_LANDSCAPE_TYPE),
        ),
        this._r6b83798d36bc36(
          !!e._ra3dc9a405b5c73(RoomObjectVariableEnum.ROOM_FLOOR_VISIBILITY),
          !!e._ra3dc9a405b5c73(RoomObjectVariableEnum.ROOM_WALL_VISIBILITY),
          !!e._ra3dc9a405b5c73(RoomObjectVariableEnum.ROOM_LANDSCAPE_VISIBILITY),
        ),
        !0)
      : !1;
  }
  _r74f196165975cd(e) {
    if (this.var_302 !== e.getUpdateID()) {
      let r = e._ra3dc9a405b5c73(RoomObjectVariableEnum.ROOM_FLOOR_THICKNESS_MULTIPLIER),
        t = e._ra3dc9a405b5c73(RoomObjectVariableEnum.ROOM_WALL_THICKNESS_MULTIPLIER);
      if (
        !Number.isNaN(r) &&
        !Number.isNaN(t) &&
        (r !== this._r02ad9c4ed7f3ba || t !== this._r45e3b5e6b13590)
      )
        return ((this._r02ad9c4ed7f3ba = r), (this._r45e3b5e6b13590 = t), this._rce0af678f4786d(), !0);
    }
    return !1;
  }
  _r9ad34871451e27(e) {
    if (this.var_302 !== e.getUpdateID()) {
      let r = e._ra3dc9a405b5c73(RoomObjectVariableEnum.ROOM_FLOOR_HOLE_UPDATE_TIME);
      if (!Number.isNaN(r) && r !== this._rf0e919627273fe)
        return ((this._rf0e919627273fe = r), this._rce0af678f4786d(), !0);
    }
    return !1;
  }
  _r6b83798d36bc36(e, r, t) {
    (e !== this._planeTypeVisibilities[Ti.const_86] ||
      r !== this._planeTypeVisibilities[Ti.const_103] ||
      t !== this._planeTypeVisibilities[Ti.TYPE_LANDSCAPE]) &&
      ((this._planeTypeVisibilities[Ti.const_86] = e),
      (this._planeTypeVisibilities[Ti.const_103] = r),
      (this._planeTypeVisibilities[Ti.TYPE_LANDSCAPE] = t),
      (this._r9d064c2c45a7be = []),
      (this._visiblePlaneSpriteNumbers = []));
  }
  updateSprite(e, r, t, i) {
    let s = r.offset;
    ((e.offsetX = -s.x),
      (e.offsetY = -s.y),
      (e._relativeDepth = i),
      (e.color = r.color),
      (e.asset = null),
      (e.nativeTexture = r.nativeTexture),
      (e.assetName = `${t}_${this.var_2474}`));
  }
}
