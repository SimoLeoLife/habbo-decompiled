// Extracted from HabboAirLauncher.deobf.js, line 14616.

class {
      static {
        n(this, "GpuStencilSystem");
      }
      constructor(e) {
        ((this._renderTargetStencilState = Object.create(null)),
          (this._renderer = e),
          e.renderTarget.onRenderTargetChange.add(this));
      }
      onRenderTargetChange(e) {
        let r = this._renderTargetStencilState[e.uid];
        (r || (r = this._renderTargetStencilState[e.uid] = { stencilMode: bs.DISABLED, stencilReference: 0 }),
          (this._activeRenderTarget = e),
          this.setStencilMode(r.stencilMode, r.stencilReference));
      }
      setStencilMode(e, r) {
        let t = this._renderTargetStencilState[this._activeRenderTarget.uid];
        ((t.stencilMode = e), (t.stencilReference = r));
        let i = this._renderer;
        (i.pipeline.setStencilMode(e), i.encoder.renderPassEncoder.setStencilReference(r));
      }
      destroy() {
        (this._renderer.renderTarget.onRenderTargetChange.remove(this),
          (this._renderer = null),
          (this._activeRenderTarget = null),
          (this._renderTargetStencilState = null));
      }
    }
