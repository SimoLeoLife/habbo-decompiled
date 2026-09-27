// Estratto da HabboAirLauncher.deobf.js, riga 23362.

class {
      static {
        n(this, "CanvasGraphicsContext");
      }
      constructor() {
        this.isBatchable = !1;
      }
      reset() {
        ((this.isBatchable = !1),
          (this.context = null),
          this.graphicsData && (this.graphicsData.destroy(), (this.graphicsData = null)));
      }
      destroy() {
        this.reset();
      }
    }
