// Extracted from HabboAirLauncher.deobf.js, line 17402.

class {
      static {
        n(this, "GlEncoderSystem");
      }
      constructor(e) {
        ((this.commandFinished = Promise.resolve()), (this._renderer = e));
      }
      setGeometry(e, r) {
        this._renderer.geometry.bind(e, r.glProgram);
      }
      finishRenderPass() {}
      draw(e) {
        let r = this._renderer,
          {
            geometry: t,
            shader: i,
            state: s,
            skipSync: o,
            topology: d,
            size: c,
            start: f,
            instanceCount: l,
          } = e;
        (r.shader.bind(i, o),
          r.geometry.bind(t, r.shader._activeProgram),
          s && r.state.set(s),
          r.geometry.draw(d, c, f, l ?? t.instanceCount));
      }
      destroy() {
        this._renderer = null;
      }
    }
