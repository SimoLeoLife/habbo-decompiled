// Extracted from HabboAirLauncher.deobf.js, line 14596.

class {
      static {
        n(this, "GpuLimitsSystem");
      }
      constructor(e) {
        this._renderer = e;
      }
      contextChange() {
        ((this.maxTextures = this._renderer.device.gpu.device.limits.maxSampledTexturesPerShaderStage),
          (this.maxBatchableTextures = this.maxTextures));
      }
      destroy() {}
    }
