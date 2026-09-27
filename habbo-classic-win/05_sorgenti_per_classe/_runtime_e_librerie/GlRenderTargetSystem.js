// Estratto da HabboAirLauncher.deobf.js, riga 17917.

class extends RenderTargetSystem {
      static {
        n(this, "GlRenderTargetSystem");
      }
      constructor(e) {
        (super(e), (this.adaptor = new GlRenderTargetAdaptor()), this.adaptor.init(e, this));
      }
    }
