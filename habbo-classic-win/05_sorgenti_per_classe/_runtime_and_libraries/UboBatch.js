// Extracted from HabboAirLauncher.deobf.js, line 15088.

class {
      static {
        n(this, "UboBatch");
      }
      constructor({ minUniformOffsetAlignment: e }) {
        ((this._minUniformOffsetAlignment = 256),
          (this.byteIndex = 0),
          (this._minUniformOffsetAlignment = e),
          (this.data = new Float32Array(65535)));
      }
      clear() {
        this.byteIndex = 0;
      }
      addEmptyGroup(e) {
        if (e > this._minUniformOffsetAlignment / 4)
          throw new Error(`UniformBufferBatch: array is too large: ${e * 4}`);
        let r = this.byteIndex,
          t = r + e * 4;
        if (
          ((t = Math.ceil(t / this._minUniformOffsetAlignment) * this._minUniformOffsetAlignment),
          t > this.data.length * 4)
        )
          throw new Error("UniformBufferBatch: ubo batch got too big");
        return ((this.byteIndex = t), r);
      }
      addGroup(e) {
        let r = this.addEmptyGroup(e.length);
        for (let t = 0; t < e.length; t++) this.data[r / 4 + t] = e[t];
        return r;
      }
      destroy() {
        this.data = null;
      }
    }
