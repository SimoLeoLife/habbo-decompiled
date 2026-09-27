// Extracted from HabboAirLauncher.deobf.js, line 16696.

class {
      static {
        n(this, "GlBufferSystem");
      }
      constructor(e) {
        ((this._boundBufferBases = Object.create(null)),
          (this._minBaseLocation = 0),
          (this._nextBindBaseIndex = this._minBaseLocation),
          (this._bindCallId = 0),
          (this._renderer = e),
          (this._managedBuffers = new GCManagedHash({
            renderer: e,
            type: "resource",
            onUnload: this.onBufferUnload.bind(this),
            name: "glBuffer",
          })));
      }
      destroy() {
        (this._managedBuffers.destroy(),
          (this._renderer = null),
          (this._gl = null),
          (this._boundBufferBases = {}));
      }
      contextChange() {
        ((this._gl = this._renderer.gl),
          this.destroyAll(!0),
          (this._maxBindings = this._renderer.limits.maxUniformBindings));
      }
      getGlBuffer(e) {
        return (
          (e._gcLastUsed = this._renderer.gc.now),
          e._gpuData[this._renderer.uid] || this.createGLBuffer(e)
        );
      }
      bind(e) {
        let { _gl: r } = this,
          t = this.getGlBuffer(e);
        r.bindBuffer(t.type, t.buffer);
      }
      bindBufferBase(e, r) {
        let { _gl: t } = this;
        this._boundBufferBases[r] !== e &&
          ((this._boundBufferBases[r] = e),
          (e._lastBindBaseLocation = r),
          t.bindBufferBase(t.UNIFORM_BUFFER, r, e.buffer));
      }
      nextBindBase(e) {
        (this._bindCallId++,
          (this._minBaseLocation = 0),
          e &&
            ((this._boundBufferBases[0] = null),
            (this._minBaseLocation = 1),
            this._nextBindBaseIndex < 1 && (this._nextBindBaseIndex = 1)));
      }
      freeLocationForBufferBase(e) {
        let r = this.getLastBindBaseLocation(e);
        if (r >= this._minBaseLocation) return ((e._lastBindCallId = this._bindCallId), r);
        let t = 0,
          i = this._nextBindBaseIndex;
        for (; t < 2;) {
          i >= this._maxBindings && ((i = this._minBaseLocation), t++);
          let s = this._boundBufferBases[i];
          if (s && s._lastBindCallId === this._bindCallId) {
            i++;
            continue;
          }
          break;
        }
        return (
          (r = i),
          (this._nextBindBaseIndex = i + 1),
          t >= 2 ? -1 : ((e._lastBindCallId = this._bindCallId), (this._boundBufferBases[r] = null), r)
        );
      }
      getLastBindBaseLocation(e) {
        let r = e._lastBindBaseLocation;
        return this._boundBufferBases[r] === e ? r : -1;
      }
      bindBufferRange(e, r, t, i) {
        let { _gl: s } = this;
        (t || (t = 0),
          r || (r = 0),
          (this._boundBufferBases[r] = null),
          s.bindBufferRange(s.UNIFORM_BUFFER, r || 0, e.buffer, t * 256, i || 256));
      }
      updateBuffer(e) {
        let { _gl: r } = this,
          t = this.getGlBuffer(e);
        if (e._updateID === t.updateID) return t;
        ((t.updateID = e._updateID), r.bindBuffer(t.type, t.buffer));
        let i = e.data,
          s = e.descriptor.usage & bi.STATIC ? r.STATIC_DRAW : r.DYNAMIC_DRAW;
        return (
          i
            ? t.byteLength >= i.byteLength
              ? r.bufferSubData(t.type, 0, i, 0, e._updateSize / i.BYTES_PER_ELEMENT)
              : ((t.byteLength = i.byteLength), r.bufferData(t.type, i, s))
            : ((t.byteLength = e.descriptor.size), r.bufferData(t.type, t.byteLength, s)),
          t
        );
      }
      destroyAll(e = !1) {
        this._managedBuffers.removeAll(e);
      }
      onBufferUnload(e, r = !1) {
        let t = e._gpuData[this._renderer.uid];
        t && (r || this._gl.deleteBuffer(t.buffer));
      }
      createGLBuffer(e) {
        let { _gl: r } = this,
          t = jK.ARRAY_BUFFER;
        e.descriptor.usage & bi.INDEX
          ? (t = jK.ELEMENT_ARRAY_BUFFER)
          : e.descriptor.usage & bi.UNIFORM && (t = jK.UNIFORM_BUFFER);
        let i = new GlBuffer(r.createBuffer(), t);
        return ((e._gpuData[this._renderer.uid] = i), this._managedBuffers.add(e), i);
      }
      resetState() {
        this._boundBufferBases = Object.create(null);
      }
    }
