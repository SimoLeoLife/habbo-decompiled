// Extracted from HabboAirLauncher.deobf.js, line 17643.

class {
      static {
        n(this, "GlRenderTargetAdaptor");
      }
      constructor() {
        ((this._clearColorCache = [0, 0, 0, 0]), (this._viewPortCache = new xa()));
      }
      init(e, r) {
        ((this._renderer = e), (this._renderTargetSystem = r), e.runners.contextChange.add(this));
      }
      contextChange() {
        ((this._clearColorCache = [0, 0, 0, 0]), (this._viewPortCache = new xa()));
        let e = this._renderer.gl;
        this._drawBuffersCache = [];
        for (let r = 1; r <= 16; r++)
          this._drawBuffersCache[r] = Array.from({ length: r }, (t, i) => e.COLOR_ATTACHMENT0 + i);
      }
      copyToTexture(e, r, t, i, s) {
        let o = this._renderTargetSystem,
          d = this._renderer,
          c = o.getGpuRenderTarget(e),
          f = d.gl;
        return (
          this.finishRenderPass(e),
          f.bindFramebuffer(f.FRAMEBUFFER, c.resolveTargetFramebuffer),
          d.texture.bind(r, 0),
          f.copyTexSubImage2D(f.TEXTURE_2D, 0, s.x, s.y, t.x, t.y, i.width, i.height),
          r
        );
      }
      startRenderPass(e, r = !0, t, i, s = 0, o = 0) {
        let d = this._renderTargetSystem,
          c = e.colorTexture,
          f = d.getGpuRenderTarget(e);
        if (o !== 0 && this._renderer.context.webGLVersion < 2)
          throw new Error("[RenderTargetSystem] Rendering to array layers requires WebGL2.");
        if (s > 0) {
          if (f.msaa)
            throw new Error(
              "[RenderTargetSystem] Rendering to mip levels is not supported with MSAA render targets.",
            );
          if (this._renderer.context.webGLVersion < 2)
            throw new Error("[RenderTargetSystem] Rendering to mip levels requires WebGL2.");
        }
        let l = i.y;
        (e.isRoot && (l = c.pixelHeight - i.height - i.y),
          e.colorTextures.forEach((h) => {
            this._renderer.texture.unbind(h);
          }));
        let b = this._renderer.gl;
        (b.bindFramebuffer(b.FRAMEBUFFER, f.framebuffer),
          !e.isRoot &&
            (f._attachedMipLevel !== s || f._attachedLayer !== o) &&
            (e.colorTextures.forEach((h, p) => {
              let m = this._renderer.texture.getGlSource(h);
              if (m.target === b.TEXTURE_2D) {
                if (o !== 0)
                  throw new Error(
                    "[RenderTargetSystem] layer must be 0 when rendering to 2D textures in WebGL.",
                  );
                b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0 + p, b.TEXTURE_2D, m.texture, s);
              } else if (m.target === b.TEXTURE_2D_ARRAY) {
                if (this._renderer.context.webGLVersion < 2)
                  throw new Error("[RenderTargetSystem] Rendering to 2D array textures requires WebGL2.");
                b.framebufferTextureLayer(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0 + p, m.texture, s, o);
              } else if (m.target === b.TEXTURE_CUBE_MAP) {
                if (o < 0 || o > 5)
                  throw new Error("[RenderTargetSystem] Cube map layer must be between 0 and 5.");
                b.framebufferTexture2D(
                  b.FRAMEBUFFER,
                  b.COLOR_ATTACHMENT0 + p,
                  b.TEXTURE_CUBE_MAP_POSITIVE_X + o,
                  m.texture,
                  s,
                );
              } else
                throw new Error(
                  "[RenderTargetSystem] Unsupported texture target for render-to-layer in WebGL.",
                );
            }),
            (f._attachedMipLevel = s),
            (f._attachedLayer = o)),
          e.colorTextures.length > 1 && this._setDrawBuffers(e, b));
        let _ = this._viewPortCache;
        ((_.x !== i.x || _.y !== l || _.width !== i.width || _.height !== i.height) &&
          ((_.x = i.x),
          (_.y = l),
          (_.width = i.width),
          (_.height = i.height),
          b.viewport(i.x, l, i.width, i.height)),
          !f.depthStencilRenderBuffer && (e.stencil || e.depth) && this._initStencil(f),
          this.clear(e, r, t));
      }
      finishRenderPass(e) {
        let t = this._renderTargetSystem.getGpuRenderTarget(e);
        if (!t.msaa) return;
        let i = this._renderer.gl;
        (i.bindFramebuffer(i.FRAMEBUFFER, t.resolveTargetFramebuffer),
          i.bindFramebuffer(i.READ_FRAMEBUFFER, t.framebuffer),
          i.blitFramebuffer(0, 0, t.width, t.height, 0, 0, t.width, t.height, i.COLOR_BUFFER_BIT, i.NEAREST),
          i.bindFramebuffer(i.FRAMEBUFFER, t.framebuffer));
      }
      initGpuRenderTarget(e) {
        let t = this._renderer.gl,
          i = new GlRenderTarget();
        return (
          (i._attachedMipLevel = 0),
          (i._attachedLayer = 0),
          e.colorTexture instanceof CanvasSource
            ? (this._renderer.context.ensureCanvasSize(e.colorTexture.resource), (i.framebuffer = null), i)
            : (this._initColor(e, i), t.bindFramebuffer(t.FRAMEBUFFER, null), i)
        );
      }
      destroyGpuRenderTarget(e) {
        let r = this._renderer.gl;
        (e.framebuffer && (r.deleteFramebuffer(e.framebuffer), (e.framebuffer = null)),
          e.resolveTargetFramebuffer &&
            (r.deleteFramebuffer(e.resolveTargetFramebuffer), (e.resolveTargetFramebuffer = null)),
          e.depthStencilRenderBuffer &&
            (r.deleteRenderbuffer(e.depthStencilRenderBuffer), (e.depthStencilRenderBuffer = null)),
          e.msaaRenderBuffer.forEach((t) => {
            r.deleteRenderbuffer(t);
          }),
          (e.msaaRenderBuffer = null));
      }
      clear(e, r, t, i, s = 0, o = 0) {
        if (!r) return;
        if (o !== 0)
          throw new Error("[RenderTargetSystem] Clearing array layers is not supported in WebGL renderer.");
        let d = this._renderTargetSystem;
        typeof r == "boolean" && (r = r ? Xd.ALL : Xd.NONE);
        let c = this._renderer.gl;
        if (r & Xd.COLOR) {
          t ?? (t = d.defaultClearColor);
          let f = this._clearColorCache,
            l = t;
          (f[0] !== l[0] || f[1] !== l[1] || f[2] !== l[2] || f[3] !== l[3]) &&
            ((f[0] = l[0]),
            (f[1] = l[1]),
            (f[2] = l[2]),
            (f[3] = l[3]),
            c.clearColor(l[0], l[1], l[2], l[3]));
        }
        c.clear(r);
      }
      resizeGpuRenderTarget(e) {
        if (e.isRoot) return;
        let t = this._renderTargetSystem.getGpuRenderTarget(e);
        (this._resizeColor(e, t), (e.stencil || e.depth) && this._resizeStencil(t));
      }
      _initColor(e, r) {
        let t = this._renderer,
          i = t.gl,
          s = i.createFramebuffer();
        if (
          ((r.resolveTargetFramebuffer = s),
          i.bindFramebuffer(i.FRAMEBUFFER, s),
          (r.width = e.colorTexture.source.pixelWidth),
          (r.height = e.colorTexture.source.pixelHeight),
          e.colorTextures.forEach((d, c) => {
            let f = d.source;
            (f.antialias &&
              (t.context.supports.msaa
                ? (r.msaa = !0)
                : warn_("[RenderTexture] Antialiasing on textures is not supported in WebGL1")),
              t.texture.bindSource(f, 0));
            let l = t.texture.getGlSource(f),
              b = l.texture;
            if (l.target === i.TEXTURE_2D)
              i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + c, i.TEXTURE_2D, b, 0);
            else if (l.target === i.TEXTURE_2D_ARRAY) {
              if (t.context.webGLVersion < 2)
                throw new Error("[RenderTargetSystem] TEXTURE_2D_ARRAY requires WebGL2.");
              i.framebufferTextureLayer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + c, b, 0, 0);
            } else if (l.target === i.TEXTURE_CUBE_MAP)
              i.framebufferTexture2D(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + c,
                i.TEXTURE_CUBE_MAP_POSITIVE_X,
                b,
                0,
              );
            else
              throw new Error("[RenderTargetSystem] Unsupported texture target for framebuffer attachment.");
          }),
          r.msaa)
        ) {
          let d = i.createFramebuffer();
          ((r.framebuffer = d),
            i.bindFramebuffer(i.FRAMEBUFFER, d),
            e.colorTextures.forEach((c, f) => {
              let l = i.createRenderbuffer();
              r.msaaRenderBuffer[f] = l;
            }));
        } else r.framebuffer = s;
        this._resizeColor(e, r);
      }
      _resizeColor(e, r) {
        let t = e.colorTexture.source;
        if (
          ((r.width = t.pixelWidth),
          (r.height = t.pixelHeight),
          (r._attachedMipLevel = 0),
          (r._attachedLayer = 0),
          e.colorTextures.forEach((i, s) => {
            s !== 0 && i.source.resize(t.width, t.height, t._resolution);
          }),
          r.msaa)
        ) {
          let i = this._renderer,
            s = i.gl,
            o = r.framebuffer;
          (s.bindFramebuffer(s.FRAMEBUFFER, o),
            e.colorTextures.forEach((d, c) => {
              let f = d.source;
              i.texture.bindSource(f, 0);
              let b = i.texture.getGlSource(f).internalFormat,
                _ = r.msaaRenderBuffer[c];
              (s.bindRenderbuffer(s.RENDERBUFFER, _),
                s.renderbufferStorageMultisample(s.RENDERBUFFER, 4, b, f.pixelWidth, f.pixelHeight),
                s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + c, s.RENDERBUFFER, _));
            }));
        }
      }
      _initStencil(e) {
        if (e.framebuffer === null) return;
        let r = this._renderer.gl,
          t = r.createRenderbuffer();
        ((e.depthStencilRenderBuffer = t),
          r.bindRenderbuffer(r.RENDERBUFFER, t),
          r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, t),
          this._resizeStencil(e));
      }
      _resizeStencil(e) {
        let r = this._renderer.gl;
        (r.bindRenderbuffer(r.RENDERBUFFER, e.depthStencilRenderBuffer),
          e.msaa
            ? r.renderbufferStorageMultisample(r.RENDERBUFFER, 4, r.DEPTH24_STENCIL8, e.width, e.height)
            : r.renderbufferStorage(
                r.RENDERBUFFER,
                this._renderer.context.webGLVersion === 2 ? r.DEPTH24_STENCIL8 : r.DEPTH_STENCIL,
                e.width,
                e.height,
              ));
      }
      prerender(e) {
        let r = e.colorTexture.resource;
        this._renderer.context.multiView && CanvasSource.test(r) && this._renderer.context.ensureCanvasSize(r);
      }
      postrender(e) {
        if (this._renderer.context.multiView && CanvasSource.test(e.colorTexture.resource)) {
          let r = this._renderer.context.canvas,
            t = e.colorTexture;
          t.context2D.drawImage(r, 0, t.pixelHeight - r.height);
        }
      }
      _setDrawBuffers(e, r) {
        let t = e.colorTextures.length,
          i = this._drawBuffersCache[t];
        if (this._renderer.context.webGLVersion === 1) {
          let s = this._renderer.context.extensions.drawBuffers;
          s
            ? s.drawBuffersWEBGL(i)
            : warn_("[RenderTexture] This WebGL1 context does not support rendering to multiple targets");
        } else r.drawBuffers(i);
      }
    }
