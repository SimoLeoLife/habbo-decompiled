// Extracted from HabboAirLauncher.deobf.js, line 23486.

class {
      static {
        n(this, "GraphicsGpuData");
      }
      constructor() {
        ((this.batches = []), (this.batched = !1));
      }
      destroy() {
        (this.batches.forEach((e) => {
          ds.return(e);
        }),
          (this.batches.length = 0));
      }
    }
