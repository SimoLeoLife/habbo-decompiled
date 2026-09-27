// Estratto da HabboAirLauncher.deobf.js, riga 15134.

class {
        static {
          n(this, "GpuUniformBatchPipe");
        }
        constructor(e) {
          ((this._bindGroupHash = Object.create(null)),
            (this._buffers = []),
            (this._bindGroups = []),
            (this._bufferResources = []),
            (this._renderer = e),
            (this._batchBuffer = new UboBatch({ minUniformOffsetAlignment: J5 })));
          let r = 256 / J5;
          for (let t = 0; t < r; t++) {
            let i = bi.UNIFORM | bi.COPY_DST;
            (t === 0 && (i |= bi.COPY_SRC),
              this._buffers.push(new Buffer_({ data: this._batchBuffer.data, usage: i })));
          }
        }
        renderEnd() {
          (this._uploadBindGroups(), this._resetBindGroups());
        }
        _resetBindGroups() {
          ((this._bindGroupHash = Object.create(null)), this._batchBuffer.clear());
        }
        getUniformBindGroup(e, r) {
          if (!r && this._bindGroupHash[e.uid]) return this._bindGroupHash[e.uid];
          this._renderer.ubo.ensureUniformGroup(e);
          let t = e.buffer.data,
            i = this._batchBuffer.addEmptyGroup(t.length);
          return (
            this._renderer.ubo.syncUniformGroup(e, this._batchBuffer.data, i / 4),
            (this._bindGroupHash[e.uid] = this._getBindGroup(i / J5)),
            this._bindGroupHash[e.uid]
          );
        }
        getUboResource(e) {
          this._renderer.ubo.updateUniformGroup(e);
          let r = e.buffer.data,
            t = this._batchBuffer.addGroup(r);
          return this._getBufferResource(t / J5);
        }
        getArrayBindGroup(e) {
          let r = this._batchBuffer.addGroup(e);
          return this._getBindGroup(r / J5);
        }
        getArrayBufferResource(e) {
          let t = this._batchBuffer.addGroup(e) / J5;
          return this._getBufferResource(t);
        }
        _getBufferResource(e) {
          if (!this._bufferResources[e]) {
            let r = this._buffers[e % 2];
            this._bufferResources[e] = new BufferResource({ buffer: r, offset: ((e / 2) | 0) * 256, size: J5 });
          }
          return this._bufferResources[e];
        }
        _getBindGroup(e) {
          if (!this._bindGroups[e]) {
            let r = new BindGroup({ 0: this._getBufferResource(e) });
            this._bindGroups[e] = r;
          }
          return this._bindGroups[e];
        }
        _uploadBindGroups() {
          let e = this._renderer.buffer,
            r = this._buffers[0];
          (r.update(this._batchBuffer.byteIndex), e.updateBuffer(r));
          let t = this._renderer.gpu.device.createCommandEncoder();
          for (let i = 1; i < this._buffers.length; i++) {
            let s = this._buffers[i];
            t.copyBufferToBuffer(e.getGPUBuffer(r), J5, e.getGPUBuffer(s), 0, this._batchBuffer.byteIndex);
          }
          this._renderer.gpu.device.queue.submit([t.finish()]);
        }
        destroy() {
          for (let e = 0; e < this._bindGroups.length; e++) this._bindGroups[e]?.destroy();
          ((this._bindGroups = null), (this._bindGroupHash = null));
          for (let e = 0; e < this._buffers.length; e++) this._buffers[e].destroy();
          this._buffers = null;
          for (let e = 0; e < this._bufferResources.length; e++) this._bufferResources[e].destroy();
          ((this._bufferResources = null), this._batchBuffer.destroy(), (this._renderer = null));
        }
      }
