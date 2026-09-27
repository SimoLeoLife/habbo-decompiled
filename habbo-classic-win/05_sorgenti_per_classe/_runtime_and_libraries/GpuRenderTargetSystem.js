// Extracted from HabboAirLauncher.deobf.js, line 15864.

class extends RenderTargetSystem {
      static {
        n(this, "GpuRenderTargetSystem");
      }
      constructor(e) {
        (super(e), (this.adaptor = new GpuRenderTargetAdaptor()), this.adaptor.init(e, this));
      }
    }
