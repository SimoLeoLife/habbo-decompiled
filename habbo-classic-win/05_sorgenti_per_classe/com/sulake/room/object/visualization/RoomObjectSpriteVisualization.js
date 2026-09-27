// Estratto da HabboAirLauncher.deobf.js, riga 272051.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/object/visualization/RoomObjectSpriteVisualization.as
// Nome offuscato: _i85ea36654631c1

class a {
  static {
    n(this, "RoomObjectSpriteVisualization");
  }
  static const_640 = "_";
  static ICON_LAYER_ID = "_icon_";
  static _r125d99a7dba095 = new E(0, 0);
  static var_4605 = 0;
  var_1914 = -1;
  var_302 = -1;
  var_201 = -1;
  _sprites = [];
  var_627 = null;
  var_1600 = null;
  _rf995f276280e41 = a.var_4605++;
  var_167 = 0;
  dispose() {
    (this._r454dff0918e60f(), (this.var_627 = null), (this.assetCollection = null));
  }
  get assetCollection() {
    return this.var_1600;
  }
  set assetCollection(e) {
    (this.var_1600 != null && this.var_1600._r6392c37af7fbe5(),
      (this.var_1600 = e),
      this.var_1600 != null && this.var_1600.addReference());
  }
  setExternalBaseUrls(e, r, t) {}
  get updateId() {
    return this.var_167;
  }
  _r68dbc243d37d4a(e) {
    for (; this._sprites.length > e;) this._sprites.pop()?.dispose();
    for (; this._sprites.length < e;) this._sprites.push(new LI());
  }
  _r454dff0918e60f() {
    for (; this._sprites.length > 0;) this._sprites.pop()?.dispose();
  }
  _r712af53e9bfc57() {
    return this._rfd2baa198de88e(this._sprites.length);
  }
  _rfd2baa198de88e(e) {
    let r = new LI();
    return (
      e >= this._sprites.length
        ? this._sprites.push(r)
        : this._sprites.splice(Math.max(0, e), 0, r),
      r
    );
  }
  removeSprite(e) {
    let r = this._sprites.indexOf(e);
    if (r === -1) throw new Error("Trying to remove non-existing sprite!");
    this._sprites.splice(r, 1)[0]?.dispose();
  }
  get _r07cfc8b3f013c3() {
    return this._sprites.length;
  }
  getSprite(e) {
    return e >= 0 && e < this._sprites.length ? (this._sprites[e] ?? null) : null;
  }
  getSpriteList() {
    return null;
  }
  get object() {
    return this.var_627;
  }
  set object(e) {
    this.var_627 = e;
  }
  update(e, r, t, i) {}
  _r3c19972967c83f() {
    this.var_167++;
  }
  reset() {
    ((this.var_1914 = 4294967295),
      (this.var_302 = 4294967295),
      (this.var_201 = -1));
  }
  initialize(e) {
    return !1;
  }
  get image() {
    return this._rb09602dca8db26(0, -1);
  }
  _rb09602dca8db26(e, r) {
    let t = new D(),
      i = [],
      s = !1;
    for (let f = 0; f < this._r07cfc8b3f013c3; f++) {
      let l = this.getSprite(f);
      if (l == null || !l.visible) continue;
      let b = this._r89d109ae632ac7(l);
      if (b == null) continue;
      let _ = b.bitmapData,
        h = l.offsetX - b._r73c6130aee2b61,
        p = l.offsetY - b._r6544c65b4b5980,
        m = h + _.width,
        v = p + _.height;
      if ((i.push(b), !s)) {
        ((t.left = h), (t.top = p), (t.right = m), (t.bottom = v), (s = !0));
        continue;
      }
      (h < t.left && (t.left = h),
        p < t.top && (t.top = p),
        m > t.right && (t.right = m),
        v > t.bottom && (t.bottom = v));
    }
    if (!s || t.width * t.height === 0) return null;
    i.length > 1 &&
      (i.sort((f, l) => f._r812b7e27afda96._relativeDepth - l._r812b7e27afda96._relativeDepth),
      i.reverse());
    let o;
    try {
      o = new A(t.width, t.height, !0, e);
    } catch {
      return new A(1, 1, !0, 0);
    }
    let d = new Pe(),
      c = new _i4210dc3239901d();
    for (let f of i)
      try {
        let l = f._r812b7e27afda96,
          b = f.bitmapData;
        if (b == null) continue;
        let _ = l.color,
          h = _ >> 16,
          p = (_ >> 8) & 255,
          m = _ & 255,
          v = null;
        (h < 255 || p < 255 || m < 255
          ? ((c.redMultiplier = this._r02218b7e60bfb2(h)),
            (c.greenMultiplier = this._r02218b7e60bfb2(p)),
            (c.blueMultiplier = this._r02218b7e60bfb2(m)),
            (c.alphaMultiplier = f._r4c371ad62d5001 ? 1 : this._r02218b7e60bfb2(l.alpha)),
            (v = c))
          : l.alpha < 255 &&
            !f._r4c371ad62d5001 &&
            ((c.redMultiplier = 1),
            (c.greenMultiplier = 1),
            (c.blueMultiplier = 1),
            (c.alphaMultiplier = this._r02218b7e60bfb2(l.alpha)),
            (v = c)),
          e === 0 && l.blendMode === ie.ADD && (b = this._r2e5e3a410d5415(b)),
          d.identity(),
          l.flipH && (d.scale(-1, 1), d.translate(l.width, 0)),
          l.flipV && (d.scale(1, -1), d.translate(0, l.height)),
          d.translate(l.offsetX - f._r73c6130aee2b61 - t.left, l.offsetY - f._r6544c65b4b5980 - t.top),
          o.draw(b, d, v, l.blendMode, null, !1));
      } catch {
        continue;
      }
    return o;
  }
  get boundingRectangle() {
    let e = new D(),
      r = !1;
    for (let t = 0; t < this._r07cfc8b3f013c3; t++) {
      let i = this.getSprite(t);
      if (i == null || !i.visible || (i.asset == null && i.nativeTexture == null)) continue;
      let s = i.offsetX,
        o = i.offsetY;
      if (!r) {
        ((e.left = s), (e.top = o), (e.right = s + i.width), (e.bottom = o + i.height), (r = !0));
        continue;
      }
      (s < e.left && (e.left = s),
        o < e.top && (e.top = o),
        s + i.width > e.right && (e.right = s + i.width),
        o + i.height > e.bottom && (e.bottom = o + i.height));
    }
    return e;
  }
  _r02218b7e60bfb2(e) {
    return Math.max(0, Math.min(255, e)) / 255;
  }
  _r89d109ae632ac7(e) {
    let r = this._re860b4f1ee3344(e);
    if (r == null) return null;
    let t = this._r64a73b0fcfc564(e.filters);
    if (t.length === 0)
      return {
        _r812b7e27afda96: e,
        bitmapData: r,
        _r73c6130aee2b61: 0,
        _r6544c65b4b5980: 0,
        _r4c371ad62d5001: !1,
      };
    let i = this._rf5d899923db877(r, e.filters);
    if (i != null)
      return {
        _r812b7e27afda96: e,
        bitmapData: i.bitmapData,
        _r73c6130aee2b61: i._r73c6130aee2b61,
        _r6544c65b4b5980: i._r6544c65b4b5980,
        _r4c371ad62d5001: !1,
      };
    let { _r73c6130aee2b61: s, _r6544c65b4b5980: o } = this._r62100ffaa88f49(t),
      d;
    try {
      d = new A(r.width + s * 2, r.height + o * 2, !0, 0);
    } catch {
      return {
        _r812b7e27afda96: e,
        bitmapData: r,
        _r73c6130aee2b61: 0,
        _r6544c65b4b5980: 0,
        _r4c371ad62d5001: !1,
      };
    }
    let c = new Pe();
    (c.translate(s, o), d.draw(r, c));
    for (let f of t) d.applyFilter(d, d.rect, a._r125d99a7dba095, f);
    return {
      _r812b7e27afda96: e,
      bitmapData: d,
      _r73c6130aee2b61: s,
      _r6544c65b4b5980: o,
      _r4c371ad62d5001: !1,
    };
  }
  _re860b4f1ee3344(e) {
    let r = e.asset;
    if (r != null) return r;
    let t = e.assetName;
    if (t !== "") {
      let d = (this.var_1600?.getAsset(t) ?? null)?.asset?.content;
      if (d != null) return ((e.asset = d), d);
    }
    let i = e.libraryAssetName;
    if (i !== "") {
      let d = this.var_1600?.assetLibrary?.getAssetByName(i)?.content;
      if (d != null) return ((e.asset = d), d);
    }
    let s = this._rd84a023350b981(e.nativeTexture);
    return (s != null && (e.asset = s), s);
  }
  _r64a73b0fcfc564(e) {
    if (e == null || e.length === 0) return [];
    let r = [];
    for (let t of e) (t instanceof ColorMatrixFilter_ || t instanceof _ibaf84c0aa91c5d) && r.push(t);
    return r;
  }
  _rf5d899923db877(e, r) {
    if (r == null || r.length === 0) return null;
    let t = _i2f4177c7eaca97(e.texture, r, 1);
    if (t == null) return null;
    let i = t.getContext("2d");
    if (i == null || !("getImageData" in i)) return null;
    let s = Math.max(1, Math.round(t.width || e.width)),
      o = Math.max(1, Math.round(t.height || e.height)),
      d = i.getImageData(0, 0, s, o),
      c = A._r0a52af92aacbc7(s, o, d.data),
      f = Math.max(0, Math.round((s - e.width) / 2)),
      l = Math.max(0, Math.round((o - e.height) / 2));
    return { bitmapData: c, _r73c6130aee2b61: f, _r6544c65b4b5980: l };
  }
  _r62100ffaa88f49(e) {
    let r = 0,
      t = 0;
    for (let i of e) {
      if (!(i instanceof _ibaf84c0aa91c5d)) continue;
      let s = Math.max(1, i.quality),
        o = Math.max(1, i.strength);
      ((r = Math.max(r, Math.ceil(i.blurX + s + o))), (t = Math.max(t, Math.ceil(i.blurY + s + o))));
    }
    return { _r73c6130aee2b61: r, _r6544c65b4b5980: t };
  }
  _rd84a023350b981(e) {
    if (e == null) return null;
    let r = a._rabc00691f33c37(),
      t = r?.extract?.canvas?.({ target: e, resolution: 1, antialias: !1, clearColor: "#00000000" }) ?? null;
    if (t != null) {
      let s = t.getContext("2d");
      if (s != null && "getImageData" in s) {
        let o = Math.max(1, Math.round(e.width)),
          d = Math.max(1, Math.round(e.height)),
          c = s.getImageData(0, 0, o, d);
        return A._r0a52af92aacbc7(o, d, c.data);
      }
    }
    let i = r?.extract?.pixels?.(e) ?? null;
    return i == null
      ? null
      : A._r0a52af92aacbc7(Math.max(1, Math.round(e.width)), Math.max(1, Math.round(e.height)), i);
  }
  static _rabc00691f33c37() {
    return globalThis.__habboAirLauncher?.application?.renderer ?? null;
  }
  _r2e5e3a410d5415(e) {
    try {
      let r = new A(e.width, e.height, !0),
        t = e._rdb0731aca322b1(e.rect);
      for (let i = 0; i < t.length; i++) {
        let s = t[i] ?? 0,
          o = (s >>> 24) & 255,
          d = (s >>> 16) & 255,
          c = (s >>> 8) & 255,
          f = s & 255,
          l = (d << 16) | (c << 8) | f,
          b = qn._r6ca1d657712155(l),
          _ = b & 255;
        if (_ <= 128) {
          let h = (b >> 16) & 255,
            p = (b >> 8) & 255;
          ((o *= _ / 128),
            (_ = 128),
            (b = (h << 16) + (p << 8) + _),
            (l = qn.hslToRGB(b)),
            (d = (l >>> 16) & 255),
            (c = (l >>> 8) & 255),
            (f = l & 255),
            (s = (((o & 255) << 24) | (d << 16) | (c << 8) | f) >>> 0));
        }
        t[i] = s >>> 0;
      }
      return (r._r2d51a38bc8ae46(r.rect, t), r);
    } catch {
      return new A(1, 1, !0);
    }
  }
}
