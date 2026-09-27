// Extracted from HabboAirLauncher.deobf.js, line 16278.

class {
      static {
        n(this, "GPUTextureGpuData");
      }
      constructor(e) {
        ((this.textureView = null), (this.gpuTexture = e));
      }
      destroy() {
        (this.gpuTexture.destroy(), (this.textureView = null), (this.gpuTexture = null));
      }
    }
