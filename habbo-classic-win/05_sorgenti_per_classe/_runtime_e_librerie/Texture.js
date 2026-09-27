// Estratto da HabboAirLauncher.deobf.js, riga 3316.

class extends Yn {
      static {
        n(this, "Texture");
      }
      constructor({
        source: e,
        label: r,
        frame: t,
        orig: i,
        trim: s,
        defaultAnchor: o,
        defaultBorders: d,
        rotate: c,
        dynamic: f,
      } = {}) {
        if (
          (super(),
          (this.uid = uid_("texture")),
          (this.uvs = { x0: 0, y0: 0, x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0 }),
          (this.frame = new xa()),
          (this.noFrame = !1),
          (this.dynamic = !1),
          (this.isTexture = !0),
          (this.label = r),
          (this.source = e?.source ?? new Wi()),
          (this.noFrame = !t),
          t)
        )
          this.frame.copyFrom(t);
        else {
          let { width: l, height: b } = this._source;
          ((this.frame.width = l), (this.frame.height = b));
        }
        ((this.orig = i || this.frame),
          (this.trim = s),
          (this.rotate = c ?? 0),
          (this.defaultAnchor = o),
          (this.defaultBorders = d),
          (this.destroyed = !1),
          (this.dynamic = f || !1),
          this.updateUvs());
      }
      set source(e) {
        (this._source && this._source.off("resize", this.update, this),
          (this._source = e),
          e.on("resize", this.update, this),
          this.emit("update", this));
      }
      get source() {
        return this._source;
      }
      get textureMatrix() {
        return (this._textureMatrix || (this._textureMatrix = new TextureMatrix(this)), this._textureMatrix);
      }
      get width() {
        return this.orig.width;
      }
      get height() {
        return this.orig.height;
      }
      updateUvs() {
        let { uvs: e, frame: r } = this,
          { width: t, height: i } = this._source,
          s = r.x / t,
          o = r.y / i,
          d = r.width / t,
          c = r.height / i,
          f = this.rotate;
        if (f) {
          let l = d / 2,
            b = c / 2,
            _ = s + l,
            h = o + b;
          ((f = Ua.add(f, Ua.NW)),
            (e.x0 = _ + l * Ua.uX(f)),
            (e.y0 = h + b * Ua.uY(f)),
            (f = Ua.add(f, 2)),
            (e.x1 = _ + l * Ua.uX(f)),
            (e.y1 = h + b * Ua.uY(f)),
            (f = Ua.add(f, 2)),
            (e.x2 = _ + l * Ua.uX(f)),
            (e.y2 = h + b * Ua.uY(f)),
            (f = Ua.add(f, 2)),
            (e.x3 = _ + l * Ua.uX(f)),
            (e.y3 = h + b * Ua.uY(f)));
        } else
          ((e.x0 = s),
            (e.y0 = o),
            (e.x1 = s + d),
            (e.y1 = o),
            (e.x2 = s + d),
            (e.y2 = o + c),
            (e.x3 = s),
            (e.y3 = o + c));
      }
      destroy(e = !1) {
        (this._source &&
          (this._source.off("resize", this.update, this),
          e && (this._source.destroy(), (this._source = null))),
          (this._textureMatrix = null),
          (this.destroyed = !0),
          this.emit("destroy", this),
          this.removeAllListeners());
      }
      update() {
        (this.noFrame && ((this.frame.width = this._source.width), (this.frame.height = this._source.height)),
          this.updateUvs(),
          this.emit("update", this));
      }
      get baseTexture() {
        return (Zr(Va, "Texture.baseTexture is now Texture.source"), this._source);
      }
    }
