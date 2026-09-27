// Extracted from HabboAirLauncher.deobf.js, line 17118.

class {
        static {
          n(this, "GlGeometrySystem");
        }
        constructor(e) {
          ((this._renderer = e),
            (this._activeGeometry = null),
            (this._activeVao = null),
            (this.hasVao = !0),
            (this.hasInstance = !0),
            (this._managedGeometries = new GCManagedHash({
              renderer: e,
              type: "resource",
              onUnload: this.onGeometryUnload.bind(this),
              name: "glGeometry",
            })));
        }
        contextChange() {
          let e = (this.gl = this._renderer.gl);
          if (!this._renderer.context.supports.vertexArrayObject)
            throw new Error("[PixiJS] Vertex Array Objects are not supported on this device");
          this.destroyAll(!0);
          let r = this._renderer.context.extensions.vertexArrayObject;
          r &&
            ((e.createVertexArray = () => r.createVertexArrayOES()),
            (e.bindVertexArray = (i) => r.bindVertexArrayOES(i)),
            (e.deleteVertexArray = (i) => r.deleteVertexArrayOES(i)));
          let t = this._renderer.context.extensions.vertexAttribDivisorANGLE;
          (t &&
            ((e.drawArraysInstanced = (i, s, o, d) => {
              t.drawArraysInstancedANGLE(i, s, o, d);
            }),
            (e.drawElementsInstanced = (i, s, o, d, c) => {
              t.drawElementsInstancedANGLE(i, s, o, d, c);
            }),
            (e.vertexAttribDivisor = (i, s) => t.vertexAttribDivisorANGLE(i, s))),
            (this._activeGeometry = null),
            (this._activeVao = null));
        }
        bind(e, r) {
          let t = this.gl;
          this._activeGeometry = e;
          let i = this.getVao(e, r);
          (this._activeVao !== i && ((this._activeVao = i), t.bindVertexArray(i)), this.updateBuffers());
        }
        resetState() {
          this.unbind();
        }
        updateBuffers() {
          let e = this._activeGeometry,
            r = this._renderer.buffer;
          for (let t = 0; t < e.buffers.length; t++) {
            let i = e.buffers[t];
            r.updateBuffer(i);
          }
          e._gcLastUsed = this._renderer.gc.now;
        }
        checkCompatibility(e, r) {
          let t = e.attributes,
            i = r._attributeData;
          for (let s in i)
            if (!t[s])
              throw new Error(`shader and geometry incompatible, geometry missing the "${s}" attribute`);
        }
        getSignature(e, r) {
          let t = e.attributes,
            i = r._attributeData,
            s = ["g", e.uid];
          for (let o in t) i[o] && s.push(o, i[o].location);
          return s.join("-");
        }
        getVao(e, r) {
          return e._gpuData[this._renderer.uid]?.vaoCache[r._key] || this.initGeometryVao(e, r);
        }
        initGeometryVao(e, r, t = !0) {
          let i = this._renderer.gl,
            s = this._renderer.buffer;
          (this._renderer.shader._getProgramData(r), this.checkCompatibility(e, r));
          let o = this.getSignature(e, r),
            d = e._gpuData[this._renderer.uid];
          d || ((d = new GlGeometryGpuData()), (e._gpuData[this._renderer.uid] = d), this._managedGeometries.add(e));
          let c = d.vaoCache,
            f = c[o];
          if (f) return ((c[r._key] = f), f);
          ensureAttributes(e, r._attributeData);
          let l = e.buffers;
          ((f = i.createVertexArray()), i.bindVertexArray(f));
          for (let b = 0; b < l.length; b++) {
            let _ = l[b];
            s.bind(_);
          }
          return (this.activateVao(e, r), (c[r._key] = f), (c[o] = f), i.bindVertexArray(null), f);
        }
        onGeometryUnload(e, r = !1) {
          let t = e._gpuData[this._renderer.uid];
          if (!t) return;
          let i = t.vaoCache;
          if (!r)
            for (let s in i) (this._activeVao !== i[s] && this.resetState(), this.gl.deleteVertexArray(i[s]));
        }
        destroyAll(e = !1) {
          this._managedGeometries.removeAll(e);
        }
        activateVao(e, r) {
          let t = this._renderer.gl,
            i = this._renderer.buffer,
            s = e.attributes;
          e.indexBuffer && i.bind(e.indexBuffer);
          let o = null;
          for (let d in s) {
            let c = s[d],
              f = c.buffer,
              l = i.getGlBuffer(f),
              b = r._attributeData[d];
            if (b) {
              o !== l && (i.bind(f), (o = l));
              let _ = b.location;
              t.enableVertexAttribArray(_);
              let h = getAttributeInfoFromFormat(c.format),
                p = getGlTypeFromFormat(c.format);
              if (
                (b.format?.substring(1, 4) === "int"
                  ? t.vertexAttribIPointer(_, h.size, p, c.stride, c.offset)
                  : t.vertexAttribPointer(_, h.size, p, h.normalised, c.stride, c.offset),
                c.instance)
              )
                if (this.hasInstance) {
                  let m = c.divisor ?? 1;
                  t.vertexAttribDivisor(_, m);
                } else throw new Error("geometry error, GPU Instancing is not supported on this device");
            }
          }
        }
        draw(e, r, t, i) {
          let { gl: s } = this._renderer,
            o = this._activeGeometry,
            d = _or[e || o.topology];
          if ((i ?? (i = o.instanceCount), o.indexBuffer)) {
            let c = o.indexBuffer.data.BYTES_PER_ELEMENT,
              f = c === 2 ? s.UNSIGNED_SHORT : s.UNSIGNED_INT;
            i !== 1
              ? s.drawElementsInstanced(d, r || o.indexBuffer.data.length, f, (t || 0) * c, i)
              : s.drawElements(d, r || o.indexBuffer.data.length, f, (t || 0) * c);
          } else
            i !== 1
              ? s.drawArraysInstanced(d, t || 0, r || o.getSize(), i)
              : s.drawArrays(d, t || 0, r || o.getSize());
          return this;
        }
        unbind() {
          (this.gl.bindVertexArray(null), (this._activeVao = null), (this._activeGeometry = null));
        }
        destroy() {
          (this._managedGeometries.destroy(),
            (this._renderer = null),
            (this.gl = null),
            (this._activeVao = null),
            (this._activeGeometry = null));
        }
      }
