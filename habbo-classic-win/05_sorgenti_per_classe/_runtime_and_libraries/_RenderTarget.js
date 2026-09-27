// Extracted from HabboAirLauncher.deobf.js, line 14005.

class $je {
      static {
        n(this, "_RenderTarget");
      }
      constructor(e = {}) {
        if (
          ((this.uid = uid_("renderTarget")),
          (this.colorTextures = []),
          (this.dirtyId = 0),
          (this.isRoot = !1),
          (this._size = new Float32Array(2)),
          (this._managedColorTextures = !1),
          (e = { ...$je.defaultOptions, ...e }),
          (this.stencil = e.stencil),
          (this.depth = e.depth),
          (this.isRoot = e.isRoot),
          typeof e.colorTextures == "number")
        ) {
          this._managedColorTextures = !0;
          for (let r = 0; r < e.colorTextures; r++)
            this.colorTextures.push(
              new Wi({ width: e.width, height: e.height, resolution: e.resolution, antialias: e.antialias }),
            );
        } else {
          this.colorTextures = [...e.colorTextures.map((t) => t.source)];
          let r = this.colorTexture.source;
          this.resize(r.width, r.height, r._resolution);
        }
        (this.colorTexture.source.on("resize", this.onSourceResize, this),
          (e.depthStencilTexture || this.stencil) &&
            (e.depthStencilTexture instanceof Texture || e.depthStencilTexture instanceof Wi
              ? (this.depthStencilTexture = e.depthStencilTexture.source)
              : this.ensureDepthStencilTexture()));
      }
      get size() {
        let e = this._size;
        return ((e[0] = this.pixelWidth), (e[1] = this.pixelHeight), e);
      }
      get width() {
        return this.colorTexture.source.width;
      }
      get height() {
        return this.colorTexture.source.height;
      }
      get pixelWidth() {
        return this.colorTexture.source.pixelWidth;
      }
      get pixelHeight() {
        return this.colorTexture.source.pixelHeight;
      }
      get resolution() {
        return this.colorTexture.source._resolution;
      }
      get colorTexture() {
        return this.colorTextures[0];
      }
      onSourceResize(e) {
        this.resize(e.width, e.height, e._resolution, !0);
      }
      ensureDepthStencilTexture() {
        this.depthStencilTexture ||
          (this.depthStencilTexture = new Wi({
            width: this.width,
            height: this.height,
            resolution: this.resolution,
            format: "depth24plus-stencil8",
            autoGenerateMipmaps: !1,
            antialias: !1,
            mipLevelCount: 1,
          }));
      }
      resize(e, r, t = this.resolution, i = !1) {
        (this.dirtyId++,
          this.colorTextures.forEach((s, o) => {
            (i && o === 0) || s.source.resize(e, r, t);
          }),
          this.depthStencilTexture && this.depthStencilTexture.source.resize(e, r, t));
      }
      destroy() {
        (this.colorTexture.source.off("resize", this.onSourceResize, this),
          this._managedColorTextures &&
            this.colorTextures.forEach((e) => {
              e.destroy();
            }),
          this.depthStencilTexture && (this.depthStencilTexture.destroy(), delete this.depthStencilTexture));
      }
    }
