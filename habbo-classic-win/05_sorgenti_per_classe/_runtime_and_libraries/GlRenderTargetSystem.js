// Extracted from HabboAirLauncher.deobf.js, line 17917.

class extends RenderTargetSystem {
      static {
        n(this, "GlRenderTargetSystem");
      }
      constructor(e) {
        (super(e), (this.adaptor = new GlRenderTargetAdaptor()), this.adaptor.init(e, this));
      }
    }
