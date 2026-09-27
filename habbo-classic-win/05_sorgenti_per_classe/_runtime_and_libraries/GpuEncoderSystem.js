// Extracted from HabboAirLauncher.deobf.js, line 14457.

class {
      static {
        n(this, "GpuEncoderSystem");
      }
      constructor(e) {
        ((this._boundBindGroup = Object.create(null)),
          (this._boundVertexBuffer = Object.create(null)),
          (this._renderer = e));
      }
      renderStart() {
        ((this.commandFinished = new Promise((e) => {
          this._resolveCommandFinished = e;
        })),
          (this.commandEncoder = this._renderer.gpu.device.createCommandEncoder()));
      }
      beginRenderPass(e) {
        (this.endRenderPass(),
          this._clearCache(),
          (this.renderPassEncoder = this.commandEncoder.beginRenderPass(e.descriptor)));
      }
      endRenderPass() {
        (this.renderPassEncoder && this.renderPassEncoder.end(), (this.renderPassEncoder = null));
      }
      setViewport(e) {
        this.renderPassEncoder.setViewport(e.x, e.y, e.width, e.height, 0, 1);
      }
      setPipelineFromGeometryProgramAndState(e, r, t, i) {
        let s = this._renderer.pipeline.getPipeline(e, r, t, i);
        this.setPipeline(s);
      }
      setPipeline(e) {
        this._boundPipeline !== e && ((this._boundPipeline = e), this.renderPassEncoder.setPipeline(e));
      }
      _setVertexBuffer(e, r) {
        this._boundVertexBuffer[e] !== r &&
          ((this._boundVertexBuffer[e] = r),
          this.renderPassEncoder.setVertexBuffer(e, this._renderer.buffer.updateBuffer(r)));
      }
      _setIndexBuffer(e) {
        if (this._boundIndexBuffer === e) return;
        this._boundIndexBuffer = e;
        let r = e.data.BYTES_PER_ELEMENT === 2 ? "uint16" : "uint32";
        this.renderPassEncoder.setIndexBuffer(this._renderer.buffer.updateBuffer(e), r);
      }
      resetBindGroup(e) {
        this._boundBindGroup[e] = null;
      }
      setBindGroup(e, r, t) {
        if (this._boundBindGroup[e] === r) return;
        ((this._boundBindGroup[e] = r), r._touch(this._renderer.gc.now, this._renderer.tick));
        let i = this._renderer.bindGroup.getBindGroup(r, t, e);
        this.renderPassEncoder.setBindGroup(e, i);
      }
      setGeometry(e, r) {
        let t = this._renderer.pipeline.getBufferNamesToBind(e, r);
        for (let i in t) this._setVertexBuffer(parseInt(i, 10), e.attributes[t[i]].buffer);
        e.indexBuffer && this._setIndexBuffer(e.indexBuffer);
      }
      _setShaderBindGroups(e, r) {
        for (let t in e.groups) {
          let i = e.groups[t];
          (r || this._syncBindGroup(i), this.setBindGroup(t, i, e.gpuProgram));
        }
      }
      _syncBindGroup(e) {
        for (let r in e.resources) {
          let t = e.resources[r];
          t.isUniformGroup && this._renderer.ubo.updateUniformGroup(t);
        }
      }
      draw(e) {
        let {
          geometry: r,
          shader: t,
          state: i,
          topology: s,
          size: o,
          start: d,
          instanceCount: c,
          skipSync: f,
        } = e;
        (this.setPipelineFromGeometryProgramAndState(r, t.gpuProgram, i, s),
          this.setGeometry(r, t.gpuProgram),
          this._setShaderBindGroups(t, f),
          r.indexBuffer
            ? this.renderPassEncoder.drawIndexed(o || r.indexBuffer.data.length, c ?? r.instanceCount, d || 0)
            : this.renderPassEncoder.draw(o || r.getSize(), c ?? r.instanceCount, d || 0));
      }
      finishRenderPass() {
        this.renderPassEncoder && (this.renderPassEncoder.end(), (this.renderPassEncoder = null));
      }
      postrender() {
        (this.finishRenderPass(),
          this._gpu.device.queue.submit([this.commandEncoder.finish()]),
          this._resolveCommandFinished(),
          (this.commandEncoder = null));
      }
      restoreRenderPass() {
        let e = this._renderer.renderTarget.adaptor.getDescriptor(
          this._renderer.renderTarget.renderTarget,
          !1,
          [0, 0, 0, 1],
          this._renderer.renderTarget.mipLevel,
          this._renderer.renderTarget.layer,
        );
        this.renderPassEncoder = this.commandEncoder.beginRenderPass(e);
        let r = this._boundPipeline,
          t = { ...this._boundVertexBuffer },
          i = this._boundIndexBuffer,
          s = { ...this._boundBindGroup };
        this._clearCache();
        let o = this._renderer.renderTarget.viewport;
        (this.renderPassEncoder.setViewport(o.x, o.y, o.width, o.height, 0, 1), this.setPipeline(r));
        for (let d in t) this._setVertexBuffer(d, t[d]);
        for (let d in s) this.setBindGroup(d, s[d], null);
        this._setIndexBuffer(i);
      }
      _clearCache() {
        for (let e = 0; e < 16; e++) ((this._boundBindGroup[e] = null), (this._boundVertexBuffer[e] = null));
        ((this._boundIndexBuffer = null), (this._boundPipeline = null));
      }
      destroy() {
        ((this._renderer = null),
          (this._gpu = null),
          (this._boundBindGroup = null),
          (this._boundVertexBuffer = null),
          (this._boundIndexBuffer = null),
          (this._boundPipeline = null));
      }
      contextChange(e) {
        this._gpu = e;
      }
    }
