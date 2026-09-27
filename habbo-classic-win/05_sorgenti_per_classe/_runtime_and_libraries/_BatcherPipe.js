// Extracted from HabboAirLauncher.deobf.js, line 12531.

class pje {
      static {
        n(this, "_BatcherPipe");
      }
      constructor(e, r) {
        ((this.state = ed.for2d()),
          (this._batchersByInstructionSet = Object.create(null)),
          (this._activeBatches = Object.create(null)),
          (this.renderer = e),
          (this._adaptor = r),
          this._adaptor.init?.(this));
      }
      static getBatcher(e) {
        return new this._availableBatchers[e]();
      }
      buildStart(e) {
        let r = this._batchersByInstructionSet[e.uid];
        (r ||
          ((r = this._batchersByInstructionSet[e.uid] = Object.create(null)),
          r.default || (r.default = new gK({ maxTextures: this.renderer.limits.maxBatchableTextures }))),
          (this._activeBatches = r),
          (this._activeBatch = this._activeBatches.default));
        for (let t in this._activeBatches) this._activeBatches[t].begin();
      }
      addToBatch(e, r) {
        if (this._activeBatch.name !== e.batcherName) {
          this._activeBatch.break(r);
          let t = this._activeBatches[e.batcherName];
          (t || ((t = this._activeBatches[e.batcherName] = pje.getBatcher(e.batcherName)), t.begin()),
            (this._activeBatch = t));
        }
        this._activeBatch.add(e);
      }
      break(e) {
        this._activeBatch.break(e);
      }
      buildEnd(e) {
        this._activeBatch.break(e);
        let r = this._activeBatches;
        for (let t in r) {
          let i = r[t],
            s = i.geometry;
          (s.indexBuffer.setDataWithSize(i.indexBuffer, i.indexSize, !0),
            s.buffers[0].setDataWithSize(i.attributeBuffer.float32View, i.attributeSize, !1));
        }
      }
      upload(e) {
        let r = this._batchersByInstructionSet[e.uid];
        for (let t in r) {
          let i = r[t],
            s = i.geometry;
          i.dirty && ((i.dirty = !1), s.buffers[0].update(i.attributeSize * 4));
        }
      }
      execute(e) {
        if (e.action === "startBatch") {
          let r = e.batcher,
            t = r.geometry,
            i = r.shader;
          this._adaptor.start(this, t, i);
        }
        this._adaptor.execute(this, e);
      }
      destroy() {
        ((this.state = null), (this.renderer = null), (this._adaptor = null));
        for (let e in this._activeBatches) this._activeBatches[e].destroy();
        this._activeBatches = null;
      }
    }
