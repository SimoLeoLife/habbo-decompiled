// Estratto da HabboAirLauncher.deobf.js, riga 14320.

class {
        static {
          n(this, "GpuBufferSystem");
        }
        constructor(e) {
          ((this._renderer = e),
            (this._managedBuffers = new GCManagedHash({
              renderer: e,
              type: "resource",
              onUnload: this.onBufferUnload.bind(this),
              name: "gpuBuffer",
            })));
        }
        contextChange(e) {
          this._gpu = e;
        }
        getGPUBuffer(e) {
          return (
            (e._gcLastUsed = this._renderer.gc.now),
            e._gpuData[this._renderer.uid]?.gpuBuffer || this.createGPUBuffer(e)
          );
        }
        updateBuffer(e) {
          let r = this.getGPUBuffer(e),
            t = e.data;
          return (
            e._updateID &&
              t &&
              ((e._updateID = 0),
              this._gpu.device.queue.writeBuffer(
                r,
                0,
                t.buffer,
                0,
                ((e._updateSize || t.byteLength) + 3) & -4,
              )),
            r
          );
        }
        destroyAll() {
          this._managedBuffers.removeAll();
        }
        onBufferUnload(e) {
          (e.off("update", this.updateBuffer, this), e.off("change", this.onBufferChange, this));
        }
        createGPUBuffer(e) {
          let r = this._gpu.device.createBuffer(e.descriptor);
          return (
            (e._updateID = 0),
            (e._resourceId = uid_("resource")),
            e.data &&
              (fastCopy(e.data.buffer, r.getMappedRange(), e.data.byteOffset, e.data.byteLength), r.unmap()),
            (e._gpuData[this._renderer.uid] = new GpuBufferData(r)),
            this._managedBuffers.add(e) &&
              (e.on("update", this.updateBuffer, this), e.on("change", this.onBufferChange, this)),
            r
          );
        }
        onBufferChange(e) {
          (this._managedBuffers.remove(e), (e._updateID = 0), this.createGPUBuffer(e));
        }
        destroy() {
          (this._managedBuffers.destroy(), (this._renderer = null), (this._gpu = null));
        }
      }
