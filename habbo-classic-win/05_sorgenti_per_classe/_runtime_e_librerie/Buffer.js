// Estratto da HabboAirLauncher.deobf.js, riga 8896.

class extends Yn {
      static {
        n(this, "Buffer");
      }
      constructor(e) {
        let { data: r, size: t } = e,
          { usage: i, label: s, shrinkToFit: o } = e;
        (super(),
          (this._gpuData = Object.create(null)),
          (this._gcLastUsed = -1),
          (this.autoGarbageCollect = !0),
          (this.uid = uid_("buffer")),
          (this._resourceType = "buffer"),
          (this._resourceId = uid_("resource")),
          (this._touched = 0),
          (this._updateID = 1),
          (this._dataInt32 = null),
          (this.shrinkToFit = !0),
          (this.destroyed = !1),
          r instanceof Array && (r = new Float32Array(r)),
          (this._data = r),
          t ?? (t = r?.byteLength));
        let d = !!r;
        ((this.descriptor = { size: t, usage: i, mappedAtCreation: d, label: s }),
          (this.shrinkToFit = o ?? !0));
      }
      get data() {
        return this._data;
      }
      set data(e) {
        this.setDataWithSize(e, e.length, !0);
      }
      get dataInt32() {
        return (this._dataInt32 || (this._dataInt32 = new Int32Array(this.data.buffer)), this._dataInt32);
      }
      get static() {
        return !!(this.descriptor.usage & bi.STATIC);
      }
      set static(e) {
        e ? (this.descriptor.usage |= bi.STATIC) : (this.descriptor.usage &= ~bi.STATIC);
      }
      setDataWithSize(e, r, t) {
        if ((this._updateID++, (this._updateSize = r * e.BYTES_PER_ELEMENT), this._data === e)) {
          t && this.emit("update", this);
          return;
        }
        let i = this._data;
        if (((this._data = e), (this._dataInt32 = null), !i || i.length !== e.length)) {
          !this.shrinkToFit && i && e.byteLength < i.byteLength
            ? t && this.emit("update", this)
            : ((this.descriptor.size = e.byteLength),
              (this._resourceId = uid_("resource")),
              this.emit("change", this));
          return;
        }
        t && this.emit("update", this);
      }
      update(e) {
        ((this._updateSize = e ?? this._updateSize), this._updateID++, this.emit("update", this));
      }
      unload() {
        this.emit("unload", this);
        for (let e in this._gpuData) this._gpuData[e]?.destroy();
        this._gpuData = Object.create(null);
      }
      destroy() {
        ((this.destroyed = !0),
          this.unload(),
          this.emit("destroy", this),
          this.emit("change", this),
          (this._data = null),
          (this.descriptor = null),
          this.removeAllListeners());
      }
    }
