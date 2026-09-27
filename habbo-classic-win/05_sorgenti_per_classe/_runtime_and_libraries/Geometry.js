// Extracted from HabboAirLauncher.deobf.js, line 9028.

class extends Yn {
      static {
        n(this, "Geometry");
      }
      constructor(e = {}) {
        (super(),
          (this._gpuData = Object.create(null)),
          (this.autoGarbageCollect = !0),
          (this._gcLastUsed = -1),
          (this.uid = uid_("geometry")),
          (this._layoutKey = 0),
          (this.instanceCount = 1),
          (this._bounds = new An()),
          (this._boundsDirty = !0));
        let { attributes: r, indexBuffer: t, topology: i } = e;
        if (((this.buffers = []), (this.attributes = {}), r)) for (let s in r) this.addAttribute(s, r[s]);
        ((this.instanceCount = e.instanceCount ?? 1),
          t && this.addIndex(t),
          (this.topology = i || "triangle-list"));
      }
      onBufferUpdate() {
        ((this._boundsDirty = !0), this.emit("update", this));
      }
      getAttribute(e) {
        return this.attributes[e];
      }
      getIndex() {
        return this.indexBuffer;
      }
      getBuffer(e) {
        return this.getAttribute(e).buffer;
      }
      getSize() {
        for (let e in this.attributes) {
          let r = this.attributes[e];
          return r.buffer.data.length / (r.stride / 4 || r.size);
        }
        return 0;
      }
      addAttribute(e, r) {
        let t = ensureIsAttribute(r);
        (this.buffers.indexOf(t.buffer) === -1 &&
          (this.buffers.push(t.buffer),
          t.buffer.on("update", this.onBufferUpdate, this),
          t.buffer.on("change", this.onBufferUpdate, this)),
          (this.attributes[e] = t));
      }
      addIndex(e) {
        ((this.indexBuffer = ensureIsBuffer(e, !0)), this.buffers.push(this.indexBuffer));
      }
      get bounds() {
        return this._boundsDirty
          ? ((this._boundsDirty = !1), getGeometryBounds(this, "aPosition", this._bounds))
          : this._bounds;
      }
      unload() {
        this.emit("unload", this);
        for (let e in this._gpuData) this._gpuData[e]?.destroy();
        this._gpuData = Object.create(null);
      }
      destroy(e = !1) {
        (this.emit("destroy", this),
          this.removeAllListeners(),
          e && this.buffers.forEach((r) => r.destroy()),
          this.unload(),
          this.indexBuffer?.destroy(),
          (this.attributes = null),
          (this.buffers = null),
          (this.indexBuffer = null),
          (this._bounds = null));
      }
    }
