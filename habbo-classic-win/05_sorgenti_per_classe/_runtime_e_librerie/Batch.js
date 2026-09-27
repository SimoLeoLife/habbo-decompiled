// Estratto da HabboAirLauncher.deobf.js, riga 12132.

class {
      static {
        n(this, "Batch");
      }
      constructor() {
        ((this.renderPipeId = "batch"),
          (this.action = "startBatch"),
          (this.start = 0),
          (this.size = 0),
          (this.textures = new BatchTextureArray()),
          (this.blendMode = "normal"),
          (this.topology = "triangle-strip"),
          (this.canBundle = !0));
      }
      destroy() {
        ((this.textures = null),
          (this.gpuBindGroup = null),
          (this.bindGroup = null),
          (this.batcher = null),
          (this.elements = null));
      }
    }
