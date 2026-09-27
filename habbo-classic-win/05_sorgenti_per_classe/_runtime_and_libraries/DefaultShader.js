// Extracted from HabboAirLauncher.deobf.js, line 12413.

class extends Qd {
      static {
        n(this, "DefaultShader");
      }
      constructor(e) {
        let r = compileHighShaderGlProgram({ name: "batch", bits: [zre, generateTextureBatchBitGl(e), $5] }),
          t = compileHighShaderGpuProgram({ name: "batch", bits: [jre, generateTextureBatchBit(e), K5] });
        (super({ glProgram: r, gpuProgram: t, resources: { batchSamplers: getBatchSamplersUniformGroup(e) } }),
          (this.maxTextures = e));
      }
    }
