// Extracted from HabboAirLauncher.deobf.js, line 137974.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/renderer/BitmapSkinRenderer.as
// Obfuscated name: _i0e4dcd268dad3c

class a extends SkinRenderer {
  static {
    n(this, "BitmapSkinRenderer");
  }
  _r583a2f1656be94 = new Map();
  _r8abda58573f732 = new Map();
  _r21fbc1ccd222bd = new Map();
  _transform = new Pe();
  var_536 = new UnkClass_4210dc();
  _rfe8f5791a8c955 = !1;
  static REGION = new D();
  static TOP_LEFT = new E();
  static _r5ec81c2e74d070 = new E();
  static _rade5086423cb42 = 96;
  static _rb4bfbecb8b2810 = 192;
  static _r6aed5168fe7fd4 = new Map([
    [Ji._r264712cf719eec, "fixed"],
    [Ji._r87aebea4b0c9b6, "move"],
    [Ji.SCALE_TYPE_STRECH, "stretch"],
    [Ji.SCALE_TYPE_TILED, "tiled"],
    [Ji.SCALE_TYPE_CENTER, "center"],
  ]);
  constructor(e) {
    super(e);
  }
  parse(e, r, t) {
    Rhe.parseSkinDescription(e.content, r, this, this.name, t);
  }
  dispose() {
    if (!this.disposed) {
      super.dispose();
      for (let e of this._r583a2f1656be94.values()) e.dispose();
      this._r583a2f1656be94.clear();
      for (let e of this._r8abda58573f732.values()) e.dispose();
      (this._r8abda58573f732.clear(), this._r21fbc1ccd222bd.clear());
    }
  }
  isStateDrawable(e) {
    return this._r51c00313d36576(e) != null;
  }
  draw(e, r, t, i, s) {
    _i42bc3fcc4cb515("BitmapSkinRenderer.draw", () => {
      let o = this.getLayoutByState(i),
        d = this._r51c00313d36576(i);
      if (
        ((o == null || d == null) &&
          ((o = this.getLayoutByState(class_1948.WINDOW_STATE_DEFAULT)),
          (d = this._r51c00313d36576(class_1948.WINDOW_STATE_DEFAULT))),
        o == null || d == null || o.numChildren <= 0)
      )
        return;
      this._rfe8f5791a8c955 = globalThis.__habboAirResizeProfile != null;
      let c = this._rfe8f5791a8c955 ? String(e.name ?? e._name ?? e.constructor?.name ?? "unknown") : "",
        f = n((h) => (this._rfe8f5791a8c955 ? `${h}:${c}` : void 0), "_id0415e34c76507"),
        l = this._r302c9be87724a3(e, o, d, t, i),
        b = this._rd7e1519af2b8be(l);
      if (b != null) {
        ((a._r5ec81c2e74d070.x = Math.floor(t.x)),
          (a._r5ec81c2e74d070.y = Math.floor(t.y)),
          f != null
            ? _i42bc3fcc4cb515(
                "BitmapSkinRenderer.draw.copyCachedBitmap",
                () => r.copyPixels(b, b.rect, a._r5ec81c2e74d070, null, null, !0),
                "byPhaseWindow",
                f("BitmapSkinRenderer.draw.copyCachedBitmap"),
              )
            : r.copyPixels(b, b.rect, a._r5ec81c2e74d070, null, null, !0));
        return;
      }
      let _ = !e.background && (e.color & 16777215) < 16777215;
      if (this._r3f9dceb3182051(l)) {
        let h = new Bd(this, Math.max(1, Math.ceil(t.width)), Math.max(1, Math.ceil(t.height)), !0, 0);
        (_i887b49f7dd4fac(
          "BitmapSkinRenderer.draw.composedBitmapCache.bytes",
          h.width * h.height * 4,
          "byAllocationOwner",
          this.constructor.name,
        ),
          this._r06b488d0b6674d(e, h, new D(0, 0, h.width, h.height), o, d, _),
          this._r1b1adddd4ff25e(l, h),
          (a._r5ec81c2e74d070.x = Math.floor(t.x)),
          (a._r5ec81c2e74d070.y = Math.floor(t.y)),
          r.copyPixels(h, h.rect, a._r5ec81c2e74d070, null, null, !0));
        return;
      }
      this._r06b488d0b6674d(e, r, t, o, d, _, this._rfe8f5791a8c955 ? f : void 0);
    });
  }
  drawStaticLayoutEntity(e, r, t, i, s, o) {
    let d = i.region?.clone() ?? new D();
    switch (((d.x += r.x), (d.y += r.y), o.type)) {
      case "bitmap": {
        let c = this.getBitmapFromCache(s, i.name);
        (i.scaleH === Ji._r87aebea4b0c9b6 && (d.x += r.width - t.width),
          i.scaleV === Ji._r87aebea4b0c9b6 && (d.y += r.height - t.height),
          e.copyPixels(c, c.rect, d.topLeft, null, null, !0));
        break;
      }
      case "fill":
        e.fillRect(d, i.color);
        break;
    }
  }
  getBitmapFromCache(e, r) {
    return _i42bc3fcc4cb515("BitmapSkinRenderer.getBitmapFromCache", () => {
      let t = `${r}@${e.name}`,
        i = this._r583a2f1656be94.get(t);
      if (i != null) return i;
      let s = e.getChildByName(r);
      if (s == null) throw new Error(`Template entity ${r} not found!`);
      let o = e.asset;
      if (o == null) throw new Error(`Template ${e.name} has no asset!`);
      let d = o.content;
      if (!(d instanceof A)) throw new Error(`Asset ${o} not found or not bitmap data!`);
      let c = new Bd(this, s.region.width, s.region.height, !0);
      return (
        _i887b49f7dd4fac(
          "BitmapSkinRenderer.getBitmapFromCache.bytes",
          c.width * c.height * 4,
          "byAllocationOwner",
          this.constructor.name,
        ),
        c.copyPixels(d, s.region, a.TOP_LEFT),
        this._r583a2f1656be94.set(t, c),
        c
      );
    });
  }
  _r06b488d0b6674d(e, r, t, i, s, o, d) {
    let c = t.width - i.width,
      f = t.height - i.height;
    o && this._r5be847a7bd2ce6(e.color);
    for (let l = 0; l < i.numChildren; l++) {
      let b = i.getChildAt(l);
      if (b == null || s.getChildByName(b.name) == null) continue;
      let h = this.getBitmapFromCache(s, b.name),
        p = `${this._r81a78761a79725(b.scaleH)}-${this._r81a78761a79725(b.scaleV)}`,
        m = !1;
      if (!e.background && b.colorize && b.colorizeMethod === Ji.COLORIZE_METHOD_HSV_LAYER) {
        let v = h.clone();
        (HsvLayerColor._rac172262d7313d(this.var_536, e.color, b.shade),
          v.colorTransform(v.rect, this.var_536),
          (h = v),
          (m = !0),
          o && this._r5be847a7bd2ce6(e.color));
      } else if (o && b.colorize) {
        let v = h.clone();
        (v.colorTransform(v.rect, this.var_536), (h = v), (m = !0));
      }
      try {
        let v = !1,
          w = !1;
        if (
          ((a.REGION.x = (b.region?.x ?? 0) + t.x),
          (a.REGION.y = (b.region?.y ?? 0) + t.y),
          (a.REGION.width = b.region?.width ?? 0),
          (a.REGION.height = b.region?.height ?? 0),
          b.scaleH === Ji._r87aebea4b0c9b6
            ? (a.REGION.x += c)
            : b.scaleH === Ji.SCALE_TYPE_STRECH || b.scaleH === Ji.SCALE_TYPE_TILED
              ? ((v = !0), (a.REGION.right += c))
              : b.scaleH === Ji.SCALE_TYPE_CENTER && (a.REGION.x = t.width / 2 - a.REGION.width / 2),
          b.scaleV === Ji._r87aebea4b0c9b6
            ? (a.REGION.y += f)
            : b.scaleV === Ji.SCALE_TYPE_STRECH || b.scaleV === Ji.SCALE_TYPE_TILED
              ? ((w = !0), (a.REGION.bottom += f))
              : b.scaleV === Ji.SCALE_TYPE_CENTER && (a.REGION.y = t.height / 2 - a.REGION.height / 2),
          a.REGION.width < 1 || a.REGION.height < 1)
        )
          continue;
        if (!v && !w) {
          let I = n(() => {
            r.copyPixels(h, h.rect, a.REGION.topLeft, null, null, !0);
          }, "_ifa7a7a6d3817d8");
          d != null
            ? _i42bc3fcc4cb515(
                "BitmapSkinRenderer.draw.copyStatic",
                I,
                "byPhaseWindow",
                d(`BitmapSkinRenderer.draw.copyStatic.${b.name}`),
              )
            : I();
        } else if (b.scaleV === Ji.SCALE_TYPE_TILED || b.scaleH === Ji.SCALE_TYPE_TILED) {
          let I = n(() => this.drawTiled(h, r, a.REGION, null), "drawTiledEntity");
          d != null
            ? _i42bc3fcc4cb515(
                "BitmapSkinRenderer.draw.drawTiledEntity",
                I,
                "byPhaseWindow",
                d(`BitmapSkinRenderer.draw.drawTiledEntity.${p}.${b.name}`),
              )
            : I();
        } else if (h.width === 1 && h.height === 1) {
          let I = n(() => {
            ((this._transform.a = a.REGION.width),
              (this._transform.b = 0),
              (this._transform.c = 0),
              (this._transform.d = a.REGION.height),
              (this._transform.tx = a.REGION.x),
              (this._transform.ty = a.REGION.y),
              r.draw(h, this._transform));
          }, "scaleSinglePixel");
          d != null
            ? _i42bc3fcc4cb515(
                "BitmapSkinRenderer.draw.scaleSinglePixel",
                I,
                "byPhaseWindow",
                d(`BitmapSkinRenderer.draw.scaleSinglePixel.${p}.${b.name}`),
              )
            : I();
        } else {
          let I = n(() => this.drawScaled(h, r, a.REGION, null), "drawScaledEntity");
          d != null
            ? _i42bc3fcc4cb515(
                "BitmapSkinRenderer.draw.drawScaledEntity",
                I,
                "byPhaseWindow",
                d(`BitmapSkinRenderer.draw.drawScaledEntity.${p}.${b.name}`),
              )
            : I();
        }
      } finally {
        m && h.dispose();
      }
    }
  }
  _r5be847a7bd2ce6(e) {
    ((this.var_536.redMultiplier = ((e & 16711680) >> 16) / 255),
      (this.var_536.greenMultiplier = ((e & 65280) >> 8) / 255),
      (this.var_536.blueMultiplier = (e & 255) / 255),
      (this.var_536.alphaMultiplier = 1),
      (this.var_536.redOffset = 0),
      (this.var_536.greenOffset = 0),
      (this.var_536.blueOffset = 0),
      (this.var_536.alphaOffset = 0));
  }
  _r302c9be87724a3(e, r, t, i, s) {
    let o = Math.max(1, Math.ceil(i.width)),
      d = Math.max(1, Math.ceil(i.height)),
      c = !e.background && (e.color & 16777215) < 16777215 ? (e.color & 16777215).toString(16) : "ffffff";
    return [this.name, r.name, t.name, s, `${o}x${d}`, c].join("|");
  }
  _rd7e1519af2b8be(e) {
    let r = this._r8abda58573f732.get(e) ?? null;
    return r == null ? null : (this._r8abda58573f732.delete(e), this._r8abda58573f732.set(e, r), r);
  }
  _r3f9dceb3182051(e) {
    let r = (this._r21fbc1ccd222bd.get(e) ?? 0) + 1;
    for (this._r21fbc1ccd222bd.set(e, r); this._r21fbc1ccd222bd.size > a._rb4bfbecb8b2810;) {
      let t = this._r21fbc1ccd222bd.keys().next().value;
      if (t == null) break;
      this._r21fbc1ccd222bd.delete(t);
    }
    return r >= 2;
  }
  _r1b1adddd4ff25e(e, r) {
    let t = this._r8abda58573f732.get(e) ?? null;
    for (
      t != null && (t.dispose(), this._r8abda58573f732.delete(e)), this._r8abda58573f732.set(e, r);
      this._r8abda58573f732.size > a._rade5086423cb42;
    ) {
      let i = this._r8abda58573f732.keys().next().value;
      if (i == null) break;
      ((this._r8abda58573f732.get(i) ?? null)?.dispose(),
        this._r8abda58573f732.delete(i),
        this._r21fbc1ccd222bd.delete(i));
    }
  }
  drawTiled(e, r, t, i) {
    _i42bc3fcc4cb515("BitmapSkinRenderer.drawTiled", () => {
      let s = e.width,
        o = e.height,
        d = Math.floor(t.width / s),
        c = Math.floor(t.height / o),
        f = t.width % s,
        l = t.height % o,
        b = new E(t.x, t.y),
        _ = new D(0, 0, f, e.height),
        h = new D(0, 0, e.width, l);
      for (let p = 0; p < c; p++) {
        b.x = t.x;
        for (let m = 0; m < d; m++)
          (i != null
            ? this._refeb77022c5556(e, r, b.x, b.y, i, null)
            : r.copyPixels(e, e.rect, b, null, null, !0),
            (b.x += s));
        (f > 0 &&
          (i != null
            ? this._refeb77022c5556(e, r, b.x, b.y, i, new D(b.x, b.y, f, e.height))
            : r.copyPixels(e, _, b, null, null, !0)),
          (b.y += o));
      }
      if (l > 0) {
        b.x = t.x;
        for (let p = 0; p < d; p++)
          (i != null
            ? this._refeb77022c5556(e, r, b.x, b.y, i, new D(b.x, b.y, e.width, l))
            : r.copyPixels(e, h, b, null, null, !0),
            (b.x += s));
      }
    });
  }
  drawScaled(e, r, t, i) {
    _i42bc3fcc4cb515("BitmapSkinRenderer.drawScaled", () => {
      let s = Math.max(1, Math.floor(t.width)),
        o = Math.max(1, Math.floor(t.height));
      ((this._transform.a = s / Math.max(1, e.width)),
        (this._transform.b = 0),
        (this._transform.c = 0),
        (this._transform.d = o / Math.max(1, e.height)),
        (this._transform.tx = 0),
        (this._transform.ty = 0));
      let d = new Bd(this, s, o, !0, 0);
      _i887b49f7dd4fac(
        "BitmapSkinRenderer.drawScaled.bytes",
        d.width * d.height * 4,
        "byAllocationOwner",
        this.constructor.name,
      );
      try {
        (_i42bc3fcc4cb515("BitmapSkinRenderer.drawScaled.drawTemp", () => {
          d.draw(e, this._transform, i, null, null, !1);
        }),
          (a._r5ec81c2e74d070.x = Math.floor(t.x)),
          (a._r5ec81c2e74d070.y = Math.floor(t.y)),
          _i42bc3fcc4cb515("BitmapSkinRenderer.drawScaled.copyTemp", () => {
            r.copyPixels(d, d.rect, a._r5ec81c2e74d070, null, null, !0);
          }));
      } finally {
        d.dispose();
      }
    });
  }
  _r81a78761a79725(e) {
    return a._r6aed5168fe7fd4.get(e) ?? `type_${e}`;
  }
  _refeb77022c5556(e, r, t, i, s, o) {
    ((this._transform.a = 1),
      (this._transform.b = 0),
      (this._transform.c = 0),
      (this._transform.d = 1),
      (this._transform.tx = t),
      (this._transform.ty = i),
      r.draw(e, this._transform, s, null, o, !1));
  }
}
