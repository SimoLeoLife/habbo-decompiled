// Estratto da HabboAirLauncher.deobf.js, riga 166979.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/cache/AvatarImageCache.as
// Nome offuscato: _i7c398bc4617959

class a {
  static {
    n(this, "AvatarImageCache");
  }
  static DEFAULT_MAX_CACHE_STORAGE_TIME_MS = 6e4;
  static const_640 = "_";
  static DEF_SEPARATOR = ".";
  static _r2f1895c9bb052d = "std";
  static LAY_BASE_ACTION = "lay";
  static PART_FACE = "fc";
  static PART_EYES = "ey";
  static PART_RIGHT_ITEM = "ri";
  static ACTION_WAVE = "wav";
  static ACTION_DRINK = "drk";
  static ACTION_BLOW = "blw";
  static ACTION_SIGN = "sig";
  static ACTION_RESPECT = "respect";
  static _r5350951b52c5b4 = null;
  static _rba8126107a0f7c = null;
  static _r2f3331b43c60c2 = null;
  static _r8fec60dd3b7441 = new WeakMap();
  var_71;
  var_204;
  _assets;
  _scale;
  _cache = new B();
  _canvas = null;
  _disposed = !1;
  _rc604edc1dba7c1 = "";
  _r683aa0c86003b5 = [];
  var_536 = new _i4210dc3239901d();
  _matrix = new Pe();
  _rd292a995e4fb4f = [];
  _rcd2100b71df583 = !1;
  _rf1787b468c0346 = a._r2f1895c9bb052d;
  _r3f8675978142d5 = "";
  _rf34a761d5c74f6 = null;
  constructor(e, r, t, i, s) {
    if (
      ((this.var_71 = e),
      (this.var_204 = r),
      (this._assets = t),
      (this._scale = i),
      (this._rcd2100b71df583 = s),
      a._r5350951b52c5b4 == null && (a._r5350951b52c5b4 = new zv()),
      a._rba8126107a0f7c == null &&
        (a._rba8126107a0f7c = [
          null,
          a.const_640,
          null,
          a.const_640,
          null,
          a.const_640,
          null,
          a.const_640,
          null,
          a.const_640,
          null,
        ]),
      a._r2f3331b43c60c2 == null)
    ) {
      a._r2f3331b43c60c2 = [];
      for (let o = 0; o < 1e4; o++) a._r2f3331b43c60c2.push(o.toString());
    }
  }
  dispose() {
    if (!this._disposed) {
      ((this.var_71 = null), (this.var_204 = null), (this._assets = null));
      for (let e of this._cache.getKeys()) this._cache.getValue(e)?.dispose();
      (this._cache.dispose(), (this._canvas = null), (this._disposed = !0));
    }
  }
  reset() {
    for (let e of this._cache.getKeys()) this._cache.getValue(e)?.dispose();
    (this._cache.reset(), (this._canvas = null), (this._rf1787b468c0346 = a._r2f1895c9bb052d));
  }
  _rc7eadd004996d3(e = a.DEFAULT_MAX_CACHE_STORAGE_TIME_MS) {
    let r = _ia411d8d8194a3a();
    for (let t of this._cache.getKeys()) this._cache.getValue(t)?.disposeActions(e, r);
  }
  _r4344ce490bd00b(e) {
    for (let r of this._cache.getValues()) r?.setAction(e, 0);
  }
  setDirection(e, r) {
    let t = this.var_71?._rcf4273ac73e1c9(e) ?? [];
    for (let i of t) this.getBodyPartCache(i)?.setDirection(r);
  }
  setAction(e, r) {
    let t = this.var_71?._rae2d4421d14b8b(e, this.var_204) ?? [];
    for (let i of t) this.getBodyPartCache(i)?.setAction(e, r);
  }
  _r3ad7c069fb8e13(e) {
    if (this._rc604edc1dba7c1 !== e) {
      if (
        (this._rc604edc1dba7c1 === class_2536.SITTING && e === class_2536.VERTICAL) ||
        (this._rc604edc1dba7c1 === class_2536.VERTICAL && e === class_2536.SITTING) ||
        this._rc604edc1dba7c1 === class_2536.SNOWSTORMHORIZONTAL ||
        e === class_2536.SNOWSTORMHORIZONTAL
      ) {
        ((this._rc604edc1dba7c1 = e),
          (this._canvas = null),
          (this._rf1787b468c0346 = this._rad7711118f5a62(this._rc604edc1dba7c1)));
        return;
      }
      (this._rc7eadd004996d3(0),
        (this._rc604edc1dba7c1 = e),
        (this._canvas = null),
        (this._rf1787b468c0346 = this._rad7711118f5a62(this._rc604edc1dba7c1)));
    }
  }
  getImageContainer(e, r, t = !1) {
    let i = this.getBodyPartCache(e);
    i == null && ((i = new AvatarImageBodyPartCache()), this._cache.add(e, i));
    let s = i.getDirection(),
      o = r,
      d = i.getAction(),
      c = d,
      f = [],
      l = new Map(),
      b = new E();
    if (c == null || c.definition == null) return null;
    if ((c.definition.startFromFrameZero && (o -= c.startFrame), c.definition.isAnimation)) {
      let w = s,
        I = this.var_71?.var_1666(
          `${c.definition.state}${a.DEF_SEPARATOR}${c.actionParameter}`,
        ),
        C = r - c.startFrame;
      if (I != null) {
        let W = I.getLayerData(C, e, c.overridingAction);
        if (W != null) {
          ((w = s + W.directionOffset),
            W.directionOffset < 0
              ? w < 0
                ? (w = 8 + w)
                : w > 7 && (w = 8 - w)
              : w < 0
                ? (w += 8)
                : w > 7 && (w -= 8),
            this._scale === fr.LARGE ? (b = new E(W.dx, W.dy)) : (b = new E(W.dx / 2, W.dy / 2)),
            (o = W.animationFrame),
            W.action != null && (c = W.action),
            W.type === AnimationLayerData.const_630
              ? (W.action != null && (c = W.action), (s = w))
              : W.type === AnimationLayerData.const_1253 && (s = w),
            (l = new Map()));
          for (let R of W.items.getKeys()) {
            let T = W.items.getValue(R);
            T != null && l.set(R, T);
          }
        }
        f.push(...I._r0357ae1667dbaf);
      }
    }
    let _ = d ?? c,
      h = i.getActionCache(_);
    (h == null || t) && ((h = new _i14a6ddc910d740()), i.updateActionCache(_, h));
    let p = h.getDirectionCache(s);
    if (p == null || t) {
      let w =
        this.var_71?.getParts(
          e,
          this.var_204?.getFigure(),
          _,
          this._rc604edc1dba7c1,
          s,
          f,
          this.var_204,
          l,
        ) ?? null;
      if (w == null) return null;
      ((p = new _J(w)), h.updateDirectionCache(s, p));
    }
    let m = p.getImageContainer(o);
    if (m == null || t) {
      if (((m = this._r4d84354600b8f1(s, p.getPartList(), o, c, t)), m != null && !t && m._r842a433ada7ed5))
        p.updateImageContainer(m, o);
      else if (m == null) return null;
    }
    let v = this.var_71?.getFrameBodyPartOffset(_, s, o, e) ?? new E();
    return ((m.offset = b.add(v)), m);
  }
  getNativeImageContainer(e, r, t = !1) {
    let i = this.getBodyPartCache(e);
    i == null && ((i = new AvatarImageBodyPartCache()), this._cache.add(e, i));
    let s = i.getDirection(),
      o = r,
      d = i.getAction(),
      c = d,
      f = [],
      l = new Map(),
      b = new E();
    if (c == null || c.definition == null) return null;
    if ((c.definition.startFromFrameZero && (o -= c.startFrame), c.definition.isAnimation)) {
      let w = s,
        I = this.var_71?.var_1666(
          `${c.definition.state}${a.DEF_SEPARATOR}${c.actionParameter}`,
        ),
        C = r - c.startFrame;
      if (I != null) {
        let W = I.getLayerData(C, e, c.overridingAction);
        if (W != null) {
          ((w = s + W.directionOffset),
            W.directionOffset < 0
              ? w < 0
                ? (w = 8 + w)
                : w > 7 && (w = 8 - w)
              : w < 0
                ? (w += 8)
                : w > 7 && (w -= 8),
            this._scale === fr.LARGE ? (b = new E(W.dx, W.dy)) : (b = new E(W.dx / 2, W.dy / 2)),
            (o = W.animationFrame),
            W.action != null && (c = W.action),
            W.type === AnimationLayerData.const_630
              ? (W.action != null && (c = W.action), (s = w))
              : W.type === AnimationLayerData.const_1253 && (s = w),
            (l = new Map()));
          for (let R of W.items.getKeys()) {
            let T = W.items.getValue(R);
            T != null && l.set(R, T);
          }
        }
        f.push(...I._r0357ae1667dbaf);
      }
    }
    let _ = d ?? c,
      h = i.getActionCache(_);
    (h == null || t) && ((h = new _i14a6ddc910d740()), i.updateActionCache(_, h));
    let p = h.getDirectionCache(s);
    if (p == null || t) {
      let w =
        this.var_71?.getParts(
          e,
          this.var_204?.getFigure(),
          _,
          this._rc604edc1dba7c1,
          s,
          f,
          this.var_204,
          l,
        ) ?? null;
      if (w == null) return null;
      ((p = new _J(w)), h.updateDirectionCache(s, p));
    }
    let m = p.getNativeImageContainer(o);
    if (m == null || t) {
      if (((m = this._ra434381d333418(s, p.getPartList(), o, c, t)), m != null && !t && m._r842a433ada7ed5))
        p.updateNativeImageContainer(m, o);
      else if (m == null) return null;
    }
    let v = this.var_71?.getFrameBodyPartOffset(_, s, o, e) ?? new E();
    return ((m.offset = b.add(v)), m);
  }
  _r3c8bfbd447e55f() {
    let e = this._rd292a995e4fb4f;
    return ((this._rd292a995e4fb4f = []), e);
  }
  getBodyPartCache(e) {
    let r = this._cache.getValue(e) ?? null;
    return (r == null && ((r = new AvatarImageBodyPartCache()), this._cache.add(e, r)), r);
  }
  _r4d84354600b8f1(e, r, t, i, s = !1) {
    if (r.length === 0 || !this._r9dc862222ce289()) return null;
    let o = AvatarDirectionAngle._r1563edacb4dc87[e] ?? !1,
      d = i.definition?.assetPartDefinition ?? "",
      c = !0,
      f = null;
    for (let m = r.length - 1; m >= 0; m--) {
      let v = r[m];
      if (
        v == null ||
        (e === 7 && (v.partType === a.PART_FACE || v.partType === a.PART_EYES)) ||
        (v.partType === a.PART_RIGHT_ITEM && (v.partId == null || v.partId === ""))
      )
        continue;
      let w = v.partType,
        I = v.partId ?? "",
        C = v.getFrameDefinition(t),
        W = 0;
      C != null
        ? ((W = C.number),
          C.assetPartDefinition != null && C.assetPartDefinition.length > 0 && (d = C.assetPartDefinition))
        : (W = v.getFrameIndex(t));
      let R = e,
        T = !1;
      o &&
        ((d === a.ACTION_WAVE &&
          [AvatarFigurePartType.const_1141, AvatarFigurePartType.LEFT_SLEEVE, AvatarFigurePartType.LEFT_COAT_SLEEVE, AvatarFigurePartType.const_752].includes(w)) ||
        (d === a.ACTION_DRINK &&
          [AvatarFigurePartType.const_843, AvatarFigurePartType.RIGHT_SLEEVE, AvatarFigurePartType.RIGHT_COAT_SLEEVE, AvatarFigurePartType.MISC_RIGHT].includes(w)) ||
        (d === a.ACTION_BLOW && w === AvatarFigurePartType.const_843) ||
        (d === a.ACTION_SIGN && w === AvatarFigurePartType.const_1141) ||
        (d === a.ACTION_RESPECT && w === AvatarFigurePartType.const_1141) ||
        w === AvatarFigurePartType.const_1215 ||
        w === AvatarFigurePartType.const_955 ||
        w === AvatarFigurePartType.CHEST_PRINT
          ? (T = !0)
          : (e === 4 ? (R = 2) : e === 5 ? (R = 1) : e === 6 && (R = 0),
            v.flippedPartType !== w && (w = v.flippedPartType)));
      let S = this._r98d2b7c44d5516(d, w, I, R, W),
        z = this._r3f8675978142d5;
      if (S == null) continue;
      let K = S.content;
      if (K == null) {
        c = !1;
        continue;
      }
      let $ = !1;
      if (v.isColorable && v.color != null) {
        let be = v.color.colorTransform;
        if (be == null) continue;
        ((this.var_536.redMultiplier = be.redMultiplier),
          (this.var_536.greenMultiplier = be.greenMultiplier),
          (this.var_536.blueMultiplier = be.blueMultiplier),
          (this.var_536.alphaMultiplier = be.alphaMultiplier),
          (this.var_536.redOffset = be.redOffset),
          (this.var_536.greenOffset = be.greenOffset),
          (this.var_536.blueOffset = be.blueOffset),
          (this.var_536.alphaOffset = be.alphaOffset),
          ($ = !0));
      } else
        ((this.var_536.redMultiplier = 1),
          (this.var_536.greenMultiplier = 1),
          (this.var_536.blueMultiplier = 1),
          (this.var_536.alphaMultiplier = 1),
          (this.var_536.redOffset = 0),
          (this.var_536.greenOffset = 0),
          (this.var_536.blueOffset = 0),
          (this.var_536.alphaOffset = 0));
      v.isBlendable && (this.var_536.concat(v.blendTransform), ($ = !0));
      let Y = S.offset.clone();
      T && (Y.x += this._scale === fr.LARGE ? 65 : 31);
      let oe = null;
      if (($ && ((oe = new _i4210dc3239901d()), oe.concat(this.var_536)), s)) {
        let be = new RoomObjectSpriteData();
        ((be.name = this._assets?.getAssetName(z) ?? z),
          (be.x = -Y.x - 33),
          (be.y = -Y.y),
          (be.z = this._rd292a995e4fb4f.length * -1e-4),
          (be.width = S.rectangle.width),
          (be.height = S.rectangle.height),
          (be.flipH = T),
          d === "lay" && (be.x += 53),
          o && ((be.flipH = !be.flipH), be.flipH ? (be.x = -be.x - K.width) : (be.x += 65)),
          v.isColorable &&
            oe != null &&
            (be.color = `0x${a.convertColorToHex(oe.redMultiplier)}${a.convertColorToHex(oe.greenMultiplier)}${a.convertColorToHex(oe.blueMultiplier)}`),
          this._rd292a995e4fb4f.push(be));
      }
      (v.partType === a.PART_FACE && (f = Y.clone()),
        this._r683aa0c86003b5.push(new ImageData_(K, S.rectangle, Y, T, oe)));
    }
    if (this._r683aa0c86003b5.length === 0) return null;
    let l = this._r77fa079099f39c(this._r683aa0c86003b5, o);
    if (!this._r9dc862222ce289()) return null;
    let b = this._scale === fr.LARGE ? this._canvas.height - 16 : this._canvas.height - 8,
      _ = l.regPoint;
    this._rcd2100b71df583 && (_ = new E(_.x / 2, _.y / 2));
    let h = new E(-_.x, b - _.y);
    for (
      o && d !== "lay" && (h.x += this._scale === fr.LARGE ? 67 : 31);
      this._r683aa0c86003b5.length > 0;
    )
      this._r683aa0c86003b5.pop()?.dispose();
    let p = l.bitmap;
    return p == null
      ? (l.dispose(), null)
      : (this._rcd2100b71df583 && (p = Qh.resampleBitmapData(p, 0.5)), new AvatarImageBodyPartContainer(p, h, c, f));
  }
  _ra434381d333418(e, r, t, i, s = !1) {
    if (r.length === 0 || !this._r9dc862222ce289()) return null;
    let o = AvatarDirectionAngle._r1563edacb4dc87[e] ?? !1,
      d = i.definition?.assetPartDefinition ?? "",
      c = !0,
      f = null,
      l = [];
    for (let m = r.length - 1; m >= 0; m--) {
      let v = r[m];
      if (
        v == null ||
        (e === 7 && (v.partType === a.PART_FACE || v.partType === a.PART_EYES)) ||
        (v.partType === a.PART_RIGHT_ITEM && (v.partId == null || v.partId === ""))
      )
        continue;
      let w = v.partType,
        I = v.partId ?? "",
        C = v.getFrameDefinition(t),
        W = 0;
      C != null
        ? ((W = C.number),
          C.assetPartDefinition != null && C.assetPartDefinition.length > 0 && (d = C.assetPartDefinition))
        : (W = v.getFrameIndex(t));
      let R = e,
        T = !1;
      o &&
        ((d === a.ACTION_WAVE &&
          [AvatarFigurePartType.const_1141, AvatarFigurePartType.LEFT_SLEEVE, AvatarFigurePartType.LEFT_COAT_SLEEVE, AvatarFigurePartType.const_752].includes(w)) ||
        (d === a.ACTION_DRINK &&
          [AvatarFigurePartType.const_843, AvatarFigurePartType.RIGHT_SLEEVE, AvatarFigurePartType.RIGHT_COAT_SLEEVE, AvatarFigurePartType.MISC_RIGHT].includes(w)) ||
        (d === a.ACTION_BLOW && w === AvatarFigurePartType.const_843) ||
        (d === a.ACTION_SIGN && w === AvatarFigurePartType.const_1141) ||
        (d === a.ACTION_RESPECT && w === AvatarFigurePartType.const_1141) ||
        w === AvatarFigurePartType.const_1215 ||
        w === AvatarFigurePartType.const_955 ||
        w === AvatarFigurePartType.CHEST_PRINT
          ? (T = !0)
          : (e === 4 ? (R = 2) : e === 5 ? (R = 1) : e === 6 && (R = 0),
            v.flippedPartType !== w && (w = v.flippedPartType)));
      let S = this._r98d2b7c44d5516(d, w, I, R, W),
        z = this._r3f8675978142d5;
      if (S == null) continue;
      let K = a._rc78aa2a6b79e63(S.nativeTexture);
      if (K == null) {
        c = !1;
        continue;
      }
      let $ = new D(0, 0, Math.max(1, Math.round(K.width)), Math.max(1, Math.round(K.height))),
        Y = 1,
        oe = 16777215;
      (v.isColorable &&
        v.color?.colorTransform != null &&
        ((Y *= v.color.colorTransform.alphaMultiplier),
        (oe = a._r916a1550f2ca79(oe, a._rfe8c8d602b5f5c(v.color.colorTransform)))),
        v.isBlendable &&
          ((Y *= v.blendTransform.alphaMultiplier),
          (oe = a._r916a1550f2ca79(oe, a._rfe8c8d602b5f5c(v.blendTransform)))));
      let be = S.offset.clone();
      if ((T && (be.x += this._scale === fr.LARGE ? 65 : 31), s)) {
        let ye = new RoomObjectSpriteData();
        ((ye.name = this._assets?.getAssetName(z) ?? z),
          (ye.x = -be.x - 33),
          (ye.y = -be.y),
          (ye.z = this._rd292a995e4fb4f.length * -1e-4),
          (ye.width = S.rectangle.width),
          (ye.height = S.rectangle.height),
          (ye.flipH = T),
          d === "lay" && (ye.x += 53),
          o && ((ye.flipH = !ye.flipH), ye.flipH ? (ye.x = -ye.x - Math.round($.width)) : (ye.x += 65)),
          oe !== 16777215 && (ye.color = `0x${oe.toString(16).padStart(6, "0")}`),
          this._rd292a995e4fb4f.push(ye));
      }
      (v.partType === a.PART_FACE && (f = be.clone()),
        l.push({
          texture: K,
          rect: $,
          regPoint: a._r9f7b76050845be(be, $, T),
          flipH: T,
          tint: oe,
          alpha: Y,
          _r7924b7c0e3a830: a._rb26934829070ad(be, $, T),
        }));
    }
    if (l.length === 0) return null;
    let b = this._r1197379c50c09a(l, o);
    if (b == null || !this._r9dc862222ce289()) return null;
    let _ = this._scale === fr.LARGE ? this._canvas.height - 16 : this._canvas.height - 8,
      h = b.regPoint,
      p = new E(-h.x, _ - h.y);
    return (
      o && d !== "lay" && (p.x += this._scale === fr.LARGE ? 67 : 31),
      new AvatarImageBodyPartContainer(null, p, c, f, b.texture, !0)
    );
  }
  _r9dc862222ce289() {
    return !(
      this._canvas == null &&
      ((this._canvas = this.var_71?.getCanvas(this._scale, this._rc604edc1dba7c1) ?? null),
      this._canvas == null)
    );
  }
  _r98d2b7c44d5516(e, r, t, i, s) {
    let o = this._rcd2100b71df583 ? fr.LARGE : this._scale,
      d = a._rba8126107a0f7c;
    return (
      (d[0] = o),
      (d[2] = e),
      (d[4] = r),
      (d[6] = t),
      (d[8] = a._r2f3331b43c60c2[i] ?? i.toString()),
      (d[10] = a._r2f3331b43c60c2[s] ?? s.toString()),
      this._r1f28f5e8fb5c74(d)
        ? this._rf34a761d5c74f6
        : ((d[10] = a._r2f3331b43c60c2[0]),
          this._r1f28f5e8fb5c74(d)
            ? this._rf34a761d5c74f6
            : ((d[2] = this._rf1787b468c0346),
              (d[10] = a._r2f3331b43c60c2[s] ?? s.toString()),
              this._r1f28f5e8fb5c74(d)
                ? this._rf34a761d5c74f6
                : ((d[10] = a._r2f3331b43c60c2[0]), this._r1f28f5e8fb5c74(d) ? this._rf34a761d5c74f6 : null)))
    );
  }
  _r1f28f5e8fb5c74(e) {
    let r = a._r5350951b52c5b4;
    return (
      (r.length = 0),
      r._re022be858f506c(e),
      (this._r3f8675978142d5 = r.toString()),
      (this._rf34a761d5c74f6 = _ib619bfd98fe9f2.as({
        value: this._assets?.getAssetByName(this._r3f8675978142d5) ?? null,
        _r35f8c7df03c28f: Qt,
      })),
      this._rf34a761d5c74f6 != null
    );
  }
  _rad7711118f5a62(e) {
    return e === class_2536.HORIZONTAL ? a.LAY_BASE_ACTION : a._r2f1895c9bb052d;
  }
  static convertColorToHex(e) {
    let r = Math.round(e * 255).toString(16);
    return (r.length < 2 && (r = `0${r}`), r);
  }
  _r1197379c50c09a(e, r) {
    let t = new D();
    for (let l of e) t = t.union(l._r7924b7c0e3a830);
    let i = Math.max(1, Math.ceil(t.width)),
      s = Math.max(1, Math.ceil(t.height)),
      o = new E(-t.left, -t.top),
      d = new Ii(),
      c = [];
    for (let l of e) {
      let b = o.subtract(l.regPoint);
      r && (b.x = i - (b.x + Math.round(l.rect.width)));
      let _ = !(r && l.flipH) && (r || l.flipH),
        h = new Jt(l.texture),
        p = Math.round(b.x),
        m = Math.round(b.y);
      (_ ? ((h.scale.x = -1), (h.x = p + Math.round(l.rect.width))) : (h.x = p),
        (h.y = m),
        (h.tint = l.tint),
        (h.alpha = l.alpha),
        d.addChild(h),
        c.push({
          texture: l.texture,
          x: p,
          y: m,
          width: Math.max(1, Math.round(l.rect.width)),
          height: Math.max(1, Math.round(l.rect.height)),
          flipH: _,
        }));
    }
    let f = a._r8ad04f0d3fbf8e(d, i, s);
    return (
      d.destroy({ children: !0 }),
      f == null ? null : (a._rcb037a15dd80a9(f, i, s, c), { texture: f, regPoint: o })
    );
  }
  _r77fa079099f39c(e, r) {
    let t = new D();
    for (let o of e) t = t.union(o._r7924b7c0e3a830);
    let i = new E(-t.left, -t.top),
      s = new A(t.width, t.height, !0, 16777215);
    for (let o of e) {
      let d = o.bitmap;
      if (d == null) continue;
      let c = i.subtract(o.regPoint);
      (r && (c.x = s.width - (c.x + o.rect.width)),
        !(r && o.flipH) && (r || o.flipH)
          ? ((this._matrix.a = -1),
            (this._matrix.tx = o.rect.x + o.rect.width + c.x),
            (this._matrix.ty = c.y - o.rect.y),
            (t.x = c.x),
            (t.y = c.y),
            (t.width = o.rect.width),
            (t.height = o.rect.height),
            s.draw(d, this._matrix, o.colorTransform, null, t))
          : o.colorTransform != null
            ? ((this._matrix.a = 1),
              (this._matrix.tx = c.x - o.rect.x),
              (this._matrix.ty = c.y - o.rect.y),
              (t.x = c.x),
              (t.y = c.y),
              (t.width = o.rect.width),
              (t.height = o.rect.height),
              s.draw(d, this._matrix, o.colorTransform, null, t))
            : s.copyPixels(d, o.rect, c, null, null, !0));
    }
    return new ImageData_(s, s.rect, i, r, null);
  }
  static _r9f7b76050845be(e, r, t) {
    let i = e.clone();
    return (t && (i.x = -i.x + Math.round(r.width)), i);
  }
  static _rb26934829070ad(e, r, t) {
    let i = a._r9f7b76050845be(e, r, t);
    return new D(-i.x, -i.y, Math.round(r.width), Math.round(r.height));
  }
  static _rfe8c8d602b5f5c(e) {
    let r = Math.max(0, Math.min(255, Math.round(e.redMultiplier * 255))),
      t = Math.max(0, Math.min(255, Math.round(e.greenMultiplier * 255))),
      i = Math.max(0, Math.min(255, Math.round(e.blueMultiplier * 255)));
    return ((r << 16) | (t << 8) | i) >>> 0;
  }
  static _r916a1550f2ca79(e, r) {
    let t = (e >> 16) & 255,
      i = (e >> 8) & 255,
      s = e & 255,
      o = (r >> 16) & 255,
      d = (r >> 8) & 255,
      c = r & 255;
    return (
      ((Math.round((t * o) / 255) << 16) | (Math.round((i * d) / 255) << 8) | Math.round((s * c) / 255)) >>> 0
    );
  }
  static _r8ad04f0d3fbf8e(e, r, t, i) {
    let s = a._rabc00691f33c37();
    if (s?.render == null) return null;
    let o = i ?? sn.create({ width: Math.max(1, Math.round(r)), height: Math.max(1, Math.round(t)) });
    return (s.render({ container: e, target: o, clear: !0 }), o);
  }
  static _rc78aa2a6b79e63(e) {
    if (e == null) return null;
    let r = e.trim;
    if (
      r == null &&
      Math.round(e.width) === Math.round(e.orig.width) &&
      Math.round(e.height) === Math.round(e.orig.height)
    )
      return e;
    let t = this._r8fec60dd3b7441.get(e);
    if (t != null) return t;
    let i = Math.max(1, Math.round(e.orig.width)),
      s = Math.max(1, Math.round(e.orig.height)),
      o = new Ii(),
      d = new Jt(e);
    (d.position.set(Math.round(r?.x ?? 0), Math.round(r?.y ?? 0)), o.addChild(d));
    let c = this._r8ad04f0d3fbf8e(o, i, s);
    if ((o.destroy({ children: !0 }), c == null)) return null;
    let f = c.source;
    return (
      f != null && ((f._rfe7fbf9f945fb3 = void 0), (f._rda8f82deca7dcd = () => a._rdd158d87662af4(e))),
      this._r8fec60dd3b7441.set(e, c),
      c
    );
  }
  static _rabc00691f33c37() {
    return globalThis.__habboAirLauncher?.application?.renderer ?? null;
  }
  static _rcb037a15dd80a9(e, r, t, i) {
    let s = e.source;
    s != null && ((s._rfe7fbf9f945fb3 = void 0), (s._rda8f82deca7dcd = () => a._r3de3df5e2389a3(r, t, i)));
  }
  static _r3de3df5e2389a3(e, r, t) {
    let i = Math.max(1, e) * Math.max(1, r),
      s = new Uint32Array(Math.ceil(i / 32));
    for (let o of t) {
      let d = Math.max(1, Math.round(o.width)),
        c = Math.max(1, Math.round(o.height));
      for (let f = 0; f < c; f++) {
        let l = o.y + f;
        if (!(l < 0 || l >= r))
          for (let b = 0; b < d; b++) {
            let _ = o.x + b;
            if (_ < 0 || _ >= e) continue;
            let h = o.flipH ? d - 1 - b : b;
            if (!a._r34808a3114c1ce(o.texture, h, f)) continue;
            let p = _ + l * e,
              m = p % 32,
              v = (p / 32) | 0;
            s[v] |= 1 << m;
          }
      }
    }
    return s;
  }
  static _r34808a3114c1ce(e, r, t) {
    let i = e.source;
    if (i == null) return !1;
    let s = a._r5d1c989824a2d0(e);
    if (s == null) return !1;
    let o = r + e.frame.x,
      d = t + e.frame.y;
    e.trim != null && ((o -= e.trim.x), (d -= e.trim.y));
    let c = i.resolution ?? 1,
      f = Math.max(1, Math.round((i.width ?? e.width) * c)),
      l = Math.round(o * c),
      b = Math.round(d * c);
    if (l < 0 || b < 0) return !1;
    let _ = l + b * f,
      h = _ % 32,
      p = (_ / 32) | 0;
    return (s[p] & (1 << h)) !== 0;
  }
  static _r5d1c989824a2d0(e) {
    let r = e.source;
    return r == null
      ? null
      : (r._rfe7fbf9f945fb3 == null &&
          r._rda8f82deca7dcd != null &&
          (r._rfe7fbf9f945fb3 = r._rda8f82deca7dcd() ?? void 0),
        r._rfe7fbf9f945fb3 ?? null);
  }
  static _rdd158d87662af4(e) {
    let r = Math.max(1, Math.round(e.orig.width)),
      t = Math.max(1, Math.round(e.orig.height)),
      i = r * t,
      s = new Uint32Array(Math.ceil(i / 32));
    for (let o = 0; o < t; o++)
      for (let d = 0; d < r; d++) {
        if (!a._r34808a3114c1ce(e, d, o)) continue;
        let c = d + o * r,
          f = c % 32,
          l = (c / 32) | 0;
        s[l] |= 1 << f;
      }
    return s;
  }
}
