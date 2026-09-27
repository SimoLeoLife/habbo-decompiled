// Estratto da HabboAirLauncher.deobf.js, riga 15878.

class {
      static {
        n(this, "GpuShaderSystem");
      }
      constructor() {
        this._gpuProgramData = Object.create(null);
      }
      contextChange(e) {
        this._gpu = e;
      }
      getProgramData(e) {
        return this._gpuProgramData[e._layoutKey] || this._createGPUProgramData(e);
      }
      _createGPUProgramData(e) {
        let r = this._gpu.device,
          t = e.gpuLayout.map((s) => r.createBindGroupLayout({ entries: s })),
          i = { bindGroupLayouts: t };
        return (
          (this._gpuProgramData[e._layoutKey] = { bindGroups: t, pipeline: r.createPipelineLayout(i) }),
          this._gpuProgramData[e._layoutKey]
        );
      }
      destroy() {
        ((this._gpu = null), (this._gpuProgramData = null));
      }
    }
