// Estratto da HabboAirLauncher.deobf.js, riga 24271.

class extends RenderTargetSystem {
      static {
        n(this, "CanvasRenderTargetSystem");
      }
      constructor(e) {
        (super(e), (this.adaptor = new CanvasRenderTargetAdaptor()), this.adaptor.init(e, this));
      }
    }
