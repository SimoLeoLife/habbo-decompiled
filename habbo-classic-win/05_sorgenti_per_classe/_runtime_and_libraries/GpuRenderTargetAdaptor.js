// Extracted from HabboAirLauncher.deobf.js, line 15676.

class {
      static {
        n(this, "GpuRenderTargetAdaptor");
      }
      init(e, r) {
        ((this._renderer = e), (this._renderTargetSystem = r));
      }
      copyToTexture(e, r, t, i, s) {
        let o = this._renderer,
          d = this._getGpuColorTexture(e),
          c = o.texture.getGpuSource(r.source);
        return (
          o.encoder.commandEncoder.copyTextureToTexture(
            { texture: d, origin: t },
            { texture: c, origin: s },
            i,
          ),
          r
        );
      }
      startRenderPass(e, r = !0, t, i, s = 0, o = 0) {
        let c = this._renderTargetSystem.getGpuRenderTarget(e);
        if (o !== 0 && c.msaaTextures?.length)
          throw new Error(
            "[RenderTargetSystem] Rendering to array layers is not supported with MSAA render targets.",
          );
        if (s > 0 && c.msaaTextures?.length)
          throw new Error(
            "[RenderTargetSystem] Rendering to mip levels is not supported with MSAA render targets.",
          );
        let f = this.getDescriptor(e, r, t, s, o);
        ((c.descriptor = f),
          this._renderer.pipeline.setRenderTarget(c),
          this._renderer.encoder.beginRenderPass(c),
          this._renderer.encoder.setViewport(i));
      }
      finishRenderPass() {
        this._renderer.encoder.endRenderPass();
      }
      _getGpuColorTexture(e) {
        let r = this._renderTargetSystem.getGpuRenderTarget(e);
        return r.contexts[0]
          ? r.contexts[0].getCurrentTexture()
          : this._renderer.texture.getGpuSource(e.colorTextures[0].source);
      }
      getDescriptor(e, r, t, i = 0, s = 0) {
        typeof r == "boolean" && (r = r ? Xd.ALL : Xd.NONE);
        let o = this._renderTargetSystem,
          d = o.getGpuRenderTarget(e),
          c = e.colorTextures.map((b, _) => {
            let h = d.contexts[_],
              p,
              m;
            if (h) {
              if (s !== 0)
                throw new Error(
                  "[RenderTargetSystem] Rendering to array layers is not supported for canvas targets.",
                );
              p = h.getCurrentTexture().createView();
            } else
              p = this._renderer.texture
                .getGpuSource(b)
                .createView({
                  dimension: "2d",
                  baseMipLevel: i,
                  mipLevelCount: 1,
                  baseArrayLayer: s,
                  arrayLayerCount: 1,
                });
            d.msaaTextures[_] && ((m = p), (p = this._renderer.texture.getTextureView(d.msaaTextures[_])));
            let v = r & Xd.COLOR ? "clear" : "load";
            return (
              t ?? (t = o.defaultClearColor),
              { view: p, resolveTarget: m, clearValue: t, storeOp: "store", loadOp: v }
            );
          }),
          f;
        if (
          ((e.stencil || e.depth) &&
            !e.depthStencilTexture &&
            (e.ensureDepthStencilTexture(), (e.depthStencilTexture.source.sampleCount = d.msaa ? 4 : 1)),
          e.depthStencilTexture)
        ) {
          let b = r & Xd.STENCIL ? "clear" : "load",
            _ = r & Xd.DEPTH ? "clear" : "load";
          f = {
            view: this._renderer.texture
              .getGpuSource(e.depthStencilTexture.source)
              .createView({
                dimension: "2d",
                baseMipLevel: i,
                mipLevelCount: 1,
                baseArrayLayer: s,
                arrayLayerCount: 1,
              }),
            stencilStoreOp: "store",
            stencilLoadOp: b,
            depthClearValue: 1,
            depthLoadOp: _,
            depthStoreOp: "store",
          };
        }
        return { colorAttachments: c, depthStencilAttachment: f };
      }
      clear(e, r = !0, t, i, s = 0, o = 0) {
        if (!r) return;
        let { gpu: d, encoder: c } = this._renderer,
          f = d.device;
        if (c.commandEncoder === null) {
          let b = f.createCommandEncoder(),
            _ = this.getDescriptor(e, r, t, s, o),
            h = b.beginRenderPass(_);
          (h.setViewport(i.x, i.y, i.width, i.height, 0, 1), h.end());
          let p = b.finish();
          f.queue.submit([p]);
        } else this.startRenderPass(e, r, t, i, s, o);
      }
      initGpuRenderTarget(e) {
        e.isRoot = !0;
        let r = new GpuRenderTarget();
        return (
          (r.colorTargetCount = e.colorTextures.length),
          e.colorTextures.forEach((t, i) => {
            if (t instanceof CanvasSource) {
              let s = t.resource.getContext("webgpu"),
                o = t.transparent ? "premultiplied" : "opaque";
              try {
                s.configure({
                  device: this._renderer.gpu.device,
                  usage:
                    GPUTextureUsage.TEXTURE_BINDING |
                    GPUTextureUsage.COPY_DST |
                    GPUTextureUsage.RENDER_ATTACHMENT |
                    GPUTextureUsage.COPY_SRC,
                  format: "bgra8unorm",
                  alphaMode: o,
                });
              } catch (d) {
                console.error(d);
              }
              r.contexts[i] = s;
            }
            if (((r.msaa = t.source.antialias), t.source.antialias)) {
              let s = new Wi({
                width: 0,
                height: 0,
                sampleCount: 4,
                arrayLayerCount: t.source.arrayLayerCount,
              });
              r.msaaTextures[i] = s;
            }
          }),
          r.msaa &&
            ((r.msaaSamples = 4), e.depthStencilTexture && (e.depthStencilTexture.source.sampleCount = 4)),
          r
        );
      }
      destroyGpuRenderTarget(e) {
        (e.contexts.forEach((r) => {
          r.unconfigure();
        }),
          e.msaaTextures.forEach((r) => {
            r.destroy();
          }),
          (e.msaaTextures.length = 0),
          (e.contexts.length = 0));
      }
      ensureDepthStencilTexture(e) {
        let r = this._renderTargetSystem.getGpuRenderTarget(e);
        e.depthStencilTexture && r.msaa && (e.depthStencilTexture.source.sampleCount = 4);
      }
      resizeGpuRenderTarget(e) {
        let r = this._renderTargetSystem.getGpuRenderTarget(e);
        ((r.width = e.width),
          (r.height = e.height),
          r.msaa &&
            e.colorTextures.forEach((t, i) => {
              r.msaaTextures[i]?.resize(t.source.width, t.source.height, t.source._resolution);
            }));
      }
    }
