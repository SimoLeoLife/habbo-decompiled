// Extracted from HabboAirLauncher.deobf.js, line 15056.

class extends Yn {
      static {
        n(this, "BufferResource");
      }
      constructor({ buffer: e, offset: r, size: t }) {
        (super(),
          (this.uid = uid_("buffer")),
          (this._resourceType = "bufferResource"),
          (this._touched = 0),
          (this._resourceId = uid_("resource")),
          (this._bufferResource = !0),
          (this.destroyed = !1),
          (this.buffer = e),
          (this.offset = r | 0),
          (this.size = t),
          this.buffer.on("change", this.onBufferChange, this));
      }
      onBufferChange() {
        ((this._resourceId = uid_("resource")), this.emit("change", this));
      }
      destroy(e = !1) {
        ((this.destroyed = !0),
          e && this.buffer.destroy(),
          this.emit("change", this),
          (this.buffer = null),
          this.removeAllListeners());
      }
    }
