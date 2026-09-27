// Extracted from HabboAirLauncher.deobf.js, line 15508.

class {
      static {
        n(this, "RenderTargetSystem");
      }
      constructor(e) {
        ((this.rootViewPort = new xa()),
          (this.viewport = new xa()),
          (this.mipLevel = 0),
          (this.layer = 0),
          (this.onRenderTargetChange = new SystemRunner("onRenderTargetChange")),
          (this.projectionMatrix = new Ze()),
          (this.defaultClearColor = [0, 0, 0, 0]),
          (this._renderSurfaceToRenderTargetHash = new Map()),
          (this._gpuRenderTargetHash = Object.create(null)),
          (this._renderTargetStack = []),
          (this._renderer = e),
          e.gc.addCollection(this, "_gpuRenderTargetHash", "hash"));
      }
      finishRenderPass() {
        this.adaptor.finishRenderPass(this.renderTarget);
      }
      renderStart({ target: e, clear: r, clearColor: t, frame: i, mipLevel: s, layer: o }) {
        ((this._renderTargetStack.length = 0),
          this.push(e, r, t, i, s ?? 0, o ?? 0),
          this.rootViewPort.copyFrom(this.viewport),
          (this.rootRenderTarget = this.renderTarget),
          (this.renderingToScreen = isRenderingToScreen(this.rootRenderTarget)),
          this.adaptor.prerender?.(this.rootRenderTarget));
      }
      postrender() {
        this.adaptor.postrender?.(this.rootRenderTarget);
      }
      bind(e, r = !0, t, i, s = 0, o = 0) {
        let d = this.getRenderTarget(e),
          c = this.renderTarget !== d;
        ((this.renderTarget = d), (this.renderSurface = e));
        let f = this.getGpuRenderTarget(d);
        (d.pixelWidth !== f.width || d.pixelHeight !== f.height) &&
          (this.adaptor.resizeGpuRenderTarget(d), (f.width = d.pixelWidth), (f.height = d.pixelHeight));
        let l = d.colorTexture,
          b = this.viewport,
          _ = l.arrayLayerCount || 1;
        if (((o | 0) !== o && (o |= 0), o < 0 || o >= _))
          throw new Error(`[RenderTargetSystem] layer ${o} is out of bounds (arrayLayerCount=${_}).`);
        ((this.mipLevel = s | 0), (this.layer = o | 0));
        let h = Math.max(l.pixelWidth >> s, 1),
          p = Math.max(l.pixelHeight >> s, 1);
        if ((!i && e instanceof Texture && (i = e.frame), i)) {
          let m = l._resolution,
            v = 1 << Math.max(s | 0, 0),
            w = (i.x * m + 0.5) | 0,
            I = (i.y * m + 0.5) | 0,
            C = (i.width * m + 0.5) | 0,
            W = (i.height * m + 0.5) | 0,
            R = Math.floor(w / v),
            T = Math.floor(I / v),
            S = Math.ceil(C / v),
            z = Math.ceil(W / v);
          ((R = Math.min(Math.max(R, 0), h - 1)),
            (T = Math.min(Math.max(T, 0), p - 1)),
            (S = Math.min(Math.max(S, 1), h - R)),
            (z = Math.min(Math.max(z, 1), p - T)),
            (b.x = R),
            (b.y = T),
            (b.width = S),
            (b.height = z));
        } else ((b.x = 0), (b.y = 0), (b.width = h), (b.height = p));
        return (
          calculateProjection(this.projectionMatrix, 0, 0, b.width / l.resolution, b.height / l.resolution, !d.isRoot),
          this.adaptor.startRenderPass(d, r, t, b, s, o),
          c && this.onRenderTargetChange.emit(d),
          d
        );
      }
      clear(e, r = Xd.ALL, t, i = this.mipLevel, s = this.layer) {
        r &&
          (e && (e = this.getRenderTarget(e)),
          this.adaptor.clear(e || this.renderTarget, r, t, this.viewport, i, s));
      }
      contextChange() {
        this._gpuRenderTargetHash = Object.create(null);
      }
      push(e, r = Xd.ALL, t, i, s = 0, o = 0) {
        let d = this.bind(e, r, t, i, s, o);
        return (this._renderTargetStack.push({ renderTarget: d, frame: i, mipLevel: s, layer: o }), d);
      }
      pop() {
        this._renderTargetStack.pop();
        let e = this._renderTargetStack[this._renderTargetStack.length - 1];
        this.bind(e.renderTarget, !1, null, e.frame, e.mipLevel, e.layer);
      }
      getRenderTarget(e) {
        return (
          e.isTexture && (e = e.source),
          this._renderSurfaceToRenderTargetHash.get(e) ?? this._initRenderTarget(e)
        );
      }
      copyToTexture(e, r, t, i, s) {
        (t.x < 0 && ((i.width += t.x), (s.x -= t.x), (t.x = 0)),
          t.y < 0 && ((i.height += t.y), (s.y -= t.y), (t.y = 0)));
        let { pixelWidth: o, pixelHeight: d } = e;
        return (
          (i.width = Math.min(i.width, o - t.x)),
          (i.height = Math.min(i.height, d - t.y)),
          this.adaptor.copyToTexture(e, r, t, i, s)
        );
      }
      ensureDepthStencil() {
        this.renderTarget.stencil ||
          ((this.renderTarget.stencil = !0),
          this.adaptor.startRenderPass(this.renderTarget, !1, null, this.viewport, 0, this.layer));
      }
      destroy() {
        ((this._renderer = null),
          this._renderSurfaceToRenderTargetHash.forEach((e, r) => {
            e !== r && e.destroy();
          }),
          this._renderSurfaceToRenderTargetHash.clear(),
          (this._gpuRenderTargetHash = Object.create(null)));
      }
      _initRenderTarget(e) {
        let r = null;
        return (
          CanvasSource.test(e) && (e = getCanvasTexture(e).source),
          e instanceof MK
            ? (r = e)
            : e instanceof Wi &&
              ((r = new MK({ colorTextures: [e] })),
              e.source instanceof CanvasSource && (r.isRoot = !0),
              e.once("destroy", () => {
                (r.destroy(), this._renderSurfaceToRenderTargetHash.delete(e));
                let t = this._gpuRenderTargetHash[r.uid];
                t && ((this._gpuRenderTargetHash[r.uid] = null), this.adaptor.destroyGpuRenderTarget(t));
              })),
          this._renderSurfaceToRenderTargetHash.set(e, r),
          r
        );
      }
      getGpuRenderTarget(e) {
        return (
          this._gpuRenderTargetHash[e.uid] ||
          (this._gpuRenderTargetHash[e.uid] = this.adaptor.initGpuRenderTarget(e))
        );
      }
      resetState() {
        ((this.renderTarget = null), (this.renderSurface = null));
      }
    }
