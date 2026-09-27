// Estratto da HabboAirLauncher.deobf.js, riga 14309.

class {
      static {
        n(this, "GpuBufferData");
      }
      constructor(e) {
        this.gpuBuffer = e;
      }
      destroy() {
        (this.gpuBuffer.destroy(), (this.gpuBuffer = null));
      }
    }
