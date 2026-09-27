// Estratto da HabboAirLauncher.deobf.js, riga 21458.

class {
      static {
        n(this, "GpuGraphicsContext");
      }
      constructor() {
        ((this.batches = []), (this.geometryData = { vertices: [], uvs: [], indices: [] }));
      }
      reset() {
        (this.batches &&
          this.batches.forEach((e) => {
            ds.return(e);
          }),
          this.graphicsData && ds.return(this.graphicsData),
          (this.isBatchable = !1),
          (this.context = null),
          (this.batches.length = 0),
          (this.geometryData.indices.length = 0),
          (this.geometryData.vertices.length = 0),
          (this.geometryData.uvs.length = 0),
          (this.graphicsData = null));
      }
      destroy() {
        (this.reset(), (this.batches = null), (this.geometryData = null));
      }
    }
