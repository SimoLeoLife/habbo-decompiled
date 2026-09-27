// Estratto da HabboAirLauncher.deobf.js, riga 14207.

class {
      static {
        n(this, "BindGroupSystem");
      }
      constructor(e) {
        ((this._hash = Object.create(null)), (this._renderer = e));
      }
      contextChange(e) {
        this._gpu = e;
      }
      getBindGroup(e, r, t) {
        return (e._updateKey(), this._hash[e._key] || this._createBindGroup(e, r, t));
      }
      _createBindGroup(e, r, t) {
        let i = this._gpu.device,
          s = r.layout[t],
          o = [],
          d = this._renderer;
        for (let l in s) {
          let b = e.resources[l] ?? e.resources[s[l]],
            _;
          if (b._resourceType === "uniformGroup") {
            let h = b;
            d.ubo.updateUniformGroup(h);
            let p = h.buffer;
            _ = { buffer: d.buffer.getGPUBuffer(p), offset: 0, size: p.descriptor.size };
          } else if (b._resourceType === "buffer") {
            let h = b;
            _ = { buffer: d.buffer.getGPUBuffer(h), offset: 0, size: h.descriptor.size };
          } else if (b._resourceType === "bufferResource") {
            let h = b;
            _ = { buffer: d.buffer.getGPUBuffer(h.buffer), offset: h.offset, size: h.size };
          } else if (b._resourceType === "textureSampler") {
            let h = b;
            _ = d.texture.getGpuSampler(h);
          } else if (b._resourceType === "textureSource") {
            let h = b;
            _ = d.texture.getTextureView(h);
          }
          o.push({ binding: s[l], resource: _ });
        }
        let c = d.shader.getProgramData(r).bindGroups[t],
          f = i.createBindGroup({ layout: c, entries: o });
        return ((this._hash[e._key] = f), f);
      }
      destroy() {
        ((this._hash = null), (this._renderer = null));
      }
    }
