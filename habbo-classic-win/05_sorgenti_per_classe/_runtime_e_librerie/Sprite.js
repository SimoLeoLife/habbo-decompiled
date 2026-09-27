// Estratto da HabboAirLauncher.deobf.js, riga 7140.

class a extends ViewContainer {
      static {
        n(this, "Sprite");
      }
      constructor(e = Texture.EMPTY) {
        e instanceof Texture && (e = { texture: e });
        let { texture: r = Texture.EMPTY, anchor: t, roundPixels: i, width: s, height: o, ...d } = e;
        (super({ label: "Sprite", ...d }),
          (this.renderPipeId = "sprite"),
          (this.batched = !0),
          (this._visualBounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }),
          (this._anchor = new Kn({
            _onUpdate: n(() => {
              this.onViewUpdate();
            }, "_onUpdate"),
          })),
          t ? (this.anchor = t) : r.defaultAnchor && (this.anchor = r.defaultAnchor),
          (this.texture = r),
          (this.allowChildren = !1),
          (this.roundPixels = i ?? !1),
          s !== void 0 && (this.width = s),
          o !== void 0 && (this.height = o));
      }
      static from(e, r = !1) {
        return e instanceof Texture ? new a(e) : new a(Texture.from(e, r));
      }
      set texture(e) {
        e || (e = Texture.EMPTY);
        let r = this._texture;
        r !== e &&
          (r && r.dynamic && r.off("update", this.onViewUpdate, this),
          e.dynamic && e.on("update", this.onViewUpdate, this),
          (this._texture = e),
          this._width && this._setWidth(this._width, this._texture.orig.width),
          this._height && this._setHeight(this._height, this._texture.orig.height),
          this.onViewUpdate());
      }
      get texture() {
        return this._texture;
      }
      get visualBounds() {
        return (updateQuadBounds(this._visualBounds, this._anchor, this._texture), this._visualBounds);
      }
      get sourceBounds() {
        return (
          Zr("8.6.1", "Sprite.sourceBounds is deprecated, use visualBounds instead."),
          this.visualBounds
        );
      }
      updateBounds() {
        let e = this._anchor,
          r = this._texture,
          t = this._bounds,
          { width: i, height: s } = r.orig;
        ((t.minX = -e._x * i), (t.maxX = t.minX + i), (t.minY = -e._y * s), (t.maxY = t.minY + s));
      }
      destroy(e = !1) {
        if ((super.destroy(e), typeof e == "boolean" ? e : e?.texture)) {
          let t = typeof e == "boolean" ? e : e?.textureSource;
          this._texture.destroy(t);
        }
        ((this._texture = null), (this._visualBounds = null), (this._bounds = null), (this._anchor = null));
      }
      get anchor() {
        return this._anchor;
      }
      set anchor(e) {
        typeof e == "number" ? this._anchor.set(e) : this._anchor.copyFrom(e);
      }
      get width() {
        return Math.abs(this.scale.x) * this._texture.orig.width;
      }
      set width(e) {
        (this._setWidth(e, this._texture.orig.width), (this._width = e));
      }
      get height() {
        return Math.abs(this.scale.y) * this._texture.orig.height;
      }
      set height(e) {
        (this._setHeight(e, this._texture.orig.height), (this._height = e));
      }
      getSize(e) {
        return (
          e || (e = {}),
          (e.width = Math.abs(this.scale.x) * this._texture.orig.width),
          (e.height = Math.abs(this.scale.y) * this._texture.orig.height),
          e
        );
      }
      setSize(e, r) {
        (typeof e == "object" ? ((r = e.height ?? e.width), (e = e.width)) : (r ?? (r = e)),
          e !== void 0 && this._setWidth(e, this._texture.orig.width),
          r !== void 0 && this._setHeight(r, this._texture.orig.height));
      }
    }
